export const TRACKS={
 moil:{file:'./audio/moil.mp3',title:'Moil',artist:'Ruskerdax',source:'https://opengameart.org/content/moil'},
 dream:{file:'./audio/dream-2.mp3',title:'Dream 2 Ambience',artist:'Marcus Davies / TokyoGeisha',source:'https://opengameart.org/content/dream-2-ambience'}
};
export class Score {
 constructor(world){this.world=world;this.volume=.3;this.track=null;this.wanted=null;this.level=0;this.duckUntil=0;this.failed=new Set();}
 unlock(){if(this.node)return;const ac=this.world.audio;if(!ac)return;this.element=new Audio();this.element.loop=true;this.element.preload='auto';this.node=ac.createMediaElementSource(this.element);this.gain=ac.createGain();this.gain.gain.value=0;this.node.connect(this.gain);this.gain.connect(ac.destination);this.element.addEventListener('error',()=>this.report());}
 report(){if(!this.failed.has(this.track)){this.failed.add(this.track);this.world.events.message?.('Music could not load. Sound effects remain available.');}}
 duck(seconds=1.4){this.duckUntil=this.world.time+seconds;}
 update(dt){if(!this.node)return;const w=this.world,key=w.mode==='menu'||w.case?.id==='last-service'?'moil':'dream';this.wanted=key;
  const audible=w.active.has('Ears')&&!document.hidden&&this.volume>0;
  const target=audible&&this.track===key?this.volume*(w.mode==='menu'?.7:.22)*(w.keys.KeyF||w.listening||w.time<this.duckUntil?.12:1):0;
  this.level+=(target-this.level)*(1-Math.exp(-dt*3));this.gain.gain.setTargetAtTime(this.level,w.audio.currentTime,.03);
  if(this.track!==key&&this.level<.003){this.element.pause();this.track=key;this.element.src=TRACKS[key].file;}
  if(audible&&this.element.paused&&!this.starting&&!this.failed.has(key)){this.starting=true;this.element.play().catch(e=>{if(e.name!=='NotAllowedError'&&e.name!=='AbortError')this.report();}).finally(()=>this.starting=false);}
  if(!audible&&this.level<.003&&!this.element.paused)this.element.pause();
 }
}
