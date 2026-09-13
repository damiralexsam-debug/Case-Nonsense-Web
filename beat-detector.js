// Detect rising spectral energy from the actual playing recording, never a beat timer.
export class BeatDetector {
 constructor(){this.previous=null;this.average=.006;this.since=1;this.warmup=0;}
 sample(bins,dt){this.since+=dt;this.warmup+=dt;let flux=0,energy=0;const end=Math.min(110,bins.length);if(!this.previous)this.previous=new Float32Array(bins.length);
  for(let i=2;i<end;i++){const v=bins[i]/255,weight=i<24?1.4:.7;flux+=Math.max(0,v-this.previous[i])*weight;energy+=v;this.previous[i]=v;}
  flux/=Math.max(1,end-2);energy/=Math.max(1,end-2);const threshold=Math.max(.008,this.average*1.65);this.average+=(flux-this.average)*(1-Math.exp(-dt*1.5));
  if(this.warmup>.25&&energy>.025&&flux>threshold&&this.since>.24){this.since=0;return Math.min(1,flux/Math.max(.015,threshold*2));}return 0;
 }
}
