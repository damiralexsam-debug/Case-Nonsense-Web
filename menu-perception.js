import * as THREE from './vendor/three.module.js';
import {SCENTS} from './cases.js';
import {visible} from './perception.js';
const V=THREE.Vector3;
export function billboardGlitch(time,reduced=false){const phase=time%6.2;return reduced?phase>1.1&&phase<2.4:phase>1.1&&phase<2.4&&(phase>1.5||Math.sin(phase*30)>-.2);}
export class MenuPerception {
 constructor(world){this.world=world;this.cursor=new THREE.Vector2(0,.25);this.previous=this.cursor.clone();this.engaged=false;this.elapsed=0;
  const n=1100,g=new THREE.BufferGeometry(),positions=new Float32Array(n*3),colors=new Float32Array(n*3);this.base=new Float32Array(n*3);
  for(let i=0;i<n;i++){const hash=k=>{const x=Math.sin((i+1)*k)*43758.5453;return x-Math.floor(x);};this.base.set([(hash(12.9)-.5)*65,.3+hash(7.8)*19,14-hash(4.7)*65],i*3);const color=new THREE.Color(SCENTS[['dust','wood','metal'][i%3]]?.color||'#b1b19a');colors.set([color.r,color.g,color.b],i*3);}
  positions.set(this.base);g.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));g.setAttribute('color',new THREE.BufferAttribute(colors,3));
  const m=world.scanner.flowMaterial.clone();this.drift=new THREE.Points(g,m);this.drift.frustumCulled=false;world.scene.add(this.drift);
 }
 point(x,y,engaged=true){this.cursor.set(x,y);this.engaged=engaged;}
 update(dt){const w=this.world;this.elapsed+=dt;w.camera.updateMatrixWorld(true);
  this.drift.visible=w.active.has('Nose');if(this.drift.visible){const p=this.drift.geometry.attributes.position;for(let i=0;i<p.count;i++)p.setXYZ(i,this.base[i*3]+Math.sin(this.elapsed*.13+i)*.35,this.base[i*3+1]+Math.sin(this.elapsed*.25+i*.7)*.18,this.base[i*3+2]+Math.sin(this.elapsed*.1+i*.2)*.35);p.needsUpdate=true;}
  if(this.engaged&&w.active.has('Feel')){const steps=Math.min(32,Math.max(1,Math.ceil(this.previous.distanceTo(this.cursor)/.015)));for(let i=1;i<=steps;i++){const point=this.previous.clone().lerp(this.cursor,i/steps);w.ray.setFromCamera(point,w.camera);w.ray.far=110;const hit=w.scanner.index.cast(w.ray.ray.origin,w.ray.ray.direction,110);if(hit&&visible(hit.object))w.touchMarks.add(hit,w.time,Math.max(.3,hit.distance*.018));}}
  this.previous.copy(this.cursor);
 }
 dispose(){this.drift.removeFromParent();this.drift.geometry.dispose();this.drift.material.dispose();}
}
