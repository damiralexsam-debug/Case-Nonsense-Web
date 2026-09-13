import {BeatDetector} from './beat-detector.js';
export const TRACKS={
 dances:{file:'./audio/dances-and-dames.mp3',title:'Dances and Dames',artist:'Kevin MacLeod',source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100595',license:'CC BY 4.0'},
 docks:{file:'./audio/night-on-the-docks.mp3',title:'Night on the Docks — Sax',artist:'Kevin MacLeod',source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100137',license:'CC BY 4.0'},
 vibes:{file:'./audio/cool-vibes.mp3',title:'Cool Vibes',artist:'Kevin MacLeod',source:'https://incompetech.com/music/royalty-free/index.html?isrc=USUAN1100863',license:'CC BY 4.0'}
};
const PLAYLISTS={menu:['dances','docks','vibes'],'last-service':['docks','vibes','dances'],glasshouse:['vibes','docks'],'ninth-minute':['dances','docks']};
export class Score {
 constructor(world){this.world=world;this.volume=.3;this.selection='auto';this.track=null;this.wanted=null;this.level=0;this.duckUntil=0;this.failed=new Set();this.context=null;this.index=0;}
 unlock(){if(this.node)return;const ac=this.world.audio;if(!ac)return;this.element=new Audio();this.element.loop=false;this.element.preload='auto';this.node=ac.createMediaElementSource(this.element);this.gain=ac.createGain();this.gain.gain.value=0;if(ac.createAnalyser){this.analyser=ac.createAnalyser();this.analyser.fftSize=2048;this.analyser.smoothingTimeConstant=.25;this.bins=new Uint8Array(this.analyser.frequencyBinCount);this.detector=new BeatDetector();this.node.connect(this.analyser);this.analyser.connect(this.gain);}else this.node.connect(this.gain);this.gain.connect(ac.destination);this.element.addEventListener('error',()=>this.report());this.element.addEventListener('ended',()=>{if(TRACKS[this.selection])this.element.currentTime=0;else this.next();});}
 playlist(){if(TRACKS[this.selection])return [this.selection];if(this.selection==='all')return Object.keys(TRACKS);return PLAYLISTS[this.world.mode==='menu'?'menu':this.world.case?.id]||['docks','vibes'];}
 contextKey(){return this.selection+':'+(this.world.mode==='menu'?'menu':this.world.case?.id);}
 next(){const context=this.contextKey();if(context!==this.context){this.context=context;this.index=0;}this.index=(this.index+1)%this.playlist().length;}
 report(){if(!this.failed.has(this.track)){this.failed.add(this.track);this.world.events.message?.('A music track could not load. Trying the next track.');this.next();}}
 duck(seconds=1.4){this.duckUntil=this.world.time+seconds;}
 update(dt){if(!this.node)return;const w=this.world,context=this.contextKey();if(context!==this.context){this.context=context;this.index=0;}
  const list=this.playlist(),key=list[this.index%list.length];this.wanted=key;
  if(this.failed.has(key)){const available=list.findIndex(k=>!this.failed.has(k));if(available>=0){this.index=available;return;}}
  const audible=w.active.has('Ears')&&!document.hidden&&this.volume>0&&!this.failed.has(key);
  const target=audible&&this.track===key?this.volume*(w.mode==='menu'?.7:.22)*(w.keys.KeyF||w.listening||w.time<this.duckUntil?.12:1):0;
  this.level+=(target-this.level)*(1-Math.exp(-dt*3));this.gain.gain.setTargetAtTime(this.level,w.audio.currentTime,.03);
  if(this.track!==key&&this.level<.003){this.element.pause();this.track=key;this.detector=new BeatDetector();this.element.src=TRACKS[key].file;w.events.music?.(TRACKS[key]);}
  if(audible&&this.track===key&&this.element.paused&&!this.starting){this.starting=true;this.element.play().catch(e=>{if(e.name!=='NotAllowedError'&&e.name!=='AbortError')this.report();}).finally(()=>this.starting=false);}
  if(audible&&this.level>.006&&this.analyser&&!this.element.paused&&w.mode==='menu'){this.analyser.getByteFrequencyData(this.bins);const beat=this.detector.sample(this.bins,dt);if(beat)w.musicBeat?.(beat);}
  if(!audible&&this.level<.003&&!this.element.paused)this.element.pause();
 }
}
