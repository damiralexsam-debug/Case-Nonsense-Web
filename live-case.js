import * as THREE from './vendor/three.module.js';
const V=THREE.Vector3;
export const LIVE_FLAGS=['power','baggage-open','escorting','rescued','escape-secured','pursuit','detained'];
export function cleanLive(value){return Object.fromEntries(LIVE_FLAGS.filter(k=>value?.[k]===true).map(k=>[k,true]));}
export class LiveCase {
 constructor(world,saved){this.world=world;this.flags=cleanLive(saved);this.actors=[];this.elapsed=0;this.pressure=0;this.traceCursor=0;this.traces=[];this.shotLine=null;this.shotTTL=0;}
 addActor(o){const w=this.world,r=w.case.rooms[o.room],g=new THREE.Group();w.group.add(g);g.position.set(r.center[0]+o.x,0,r.center[1]+o.z);const meshes=[],opt={parent:g,scents:o.scents||['rain']};
  const part=(kind,x,y,z,sx,sy,sz,color)=>{const m=w.mesh(kind,x,y,z,sx,sy,sz,color,opt);m.userData.dynamic=true;m.userData.propId=o.id;m.userData.physical={temperature:32,texture:'woven coat',hardness:'yielding',roughness:.6,acoustic:'cloth'};meshes.push(m);return m;};
  part('box',0,1.02,0,.5,.7,.28,o.coat);part('box',0,.65,0,.44,.18,.3,0x33383f);part('sphere',0,1.6,0,.2,.24,.2,0xc9a185);part('box',0,1.78,-.025,.36,.12,.32,0x3b3332);
  part('box',-.065,1.61,.189,.04,.03,.025,0x34383f);part('box',.065,1.61,.189,.04,.03,.025,0x34383f);
  const legs=[-.14,.14].map(x=>part('box',x,.34,0,.18,.65,.2,0x353e49));for(const x of [-.14,.14])part('box',x,.06,.06,.2,.12,.35,0x242b32);
  const arms=[-.34,.34].map(x=>part('box',x,1.04,0,.16,.62,.18,o.coat));for(const x of [-.34,.34])part('sphere',x,.7,0,.09,.11,.085,0xc9a185);
  if(o.id==='voss'){part('box',-.35,.78,0,.18,.1,.2,0xd6c8a9);part('box',.12,1.15,.15,.15,.18,.025,0xcfcab7);}if(o.injured)part('box',-.34,.94,0,.19,.15,.22,0xd6c8a9);
  const gun=o.armed?part('box',.36,.8,.25,.09,.13,.4,0x262d33):null;if(gun)gun.visible=!!this.flags.pursuit&&!this.flags.detained;
  const p={...o,group:g,meshes,pos:g.position.clone().setY(1),worldX:g.position.x,worldZ:g.position.z};w.props.push(p);
  const actor={prop:p,group:g,meshes,legs,arms,gun,waypoint:0,path:[],repath:0,step:0,voice:2,wait:0,aim:0,shots:0};this.actors.push(actor);
 }
 save(message){this.world.events.live?.({...this.flags});if(message)this.world.events.message?.(message);}
 restore(){const w=this.world;this.applyDoors();if(this.flags.rescued)this.moveTo(this.actors.find(a=>a.prop.id==='jo'),new V(w.case.spawn[0]+2,0,1));if(this.flags.detained){const a=this.actors.find(a=>a.prop.culprit);if(a)a.arms.forEach((m,i)=>m.rotation.z=i?-.9:.9);}}
 applyDoors(){const w=this.world;if(this.flags['baggage-open']){const door=w.props.find(p=>p.kind==='bulkhead');if(door)door.group.visible=false;w.soundSources=w.soundSources.filter(s=>s.type!=='rescue');}for(const p of w.props)if(p.action&&this.flags[p.action.id])for(const m of p.meshes){if(m.userData.physical)m.userData.physical.vibration=false;}w.scene.updateMatrixWorld(true);w.refreshColliders();w.scanner?.rebuild();}
 moveTo(a,pos){if(!a)return;a.group.position.copy(pos);a.prop.pos.copy(pos).setY(1);a.prop.worldX=pos.x;a.prop.worldZ=pos.z;a.group.updateMatrixWorld(true);}
 act(prop,sense){const action=prop.action;if(!action)return false;if(action.sense&&action.sense!==sense){this.world.events.message?.('Use '+action.sense+' to operate this.');return false;}if(this.flags[action.id]){this.world.events.message?.('Already done.');return false;}if(action.needs?.some(k=>!this.flags[k])){this.world.events.message?.('The release has no power. Check the fuse holder, or use the sleeper’s manual cable.');return false;}if(prop.requires&&!this.flags[prop.requires])return false;
  if(action.id==='rescued'){this.flags.escorting=true;this.save('Jo is following you. Lead him back down the train to Ada in the observation car.');return true;}this.flags[action.id]=true;this.applyDoors();this.save(action.message);return true;
 }
 response(prop){const id=prop.id;if(this.flags.detained&&prop.culprit)return 'They have stopped resisting. Your recorded evidence is ready for the final case.';if(this.flags.detained&&id==='elsie')return '“You found him. Can we go outside now? I don’t want to spend another minute in this house.”';if(this.flags.rescued&&id==='ada')return '“Jo! I knew it was you knocking. Thank you for listening.”';if(this.flags.rescued&&id==='jo')return '“Ada’s here. I’m all right. Make sure they keep that relay and the order.”';if(this.flags.detained&&id==='nell')return '“The crew can fuel the ferry. Sam’s going to be all right. I’ll tell him you kept his name on the board.”';return prop.dialogue||'They watch the room as you speak.';}
 challenge(prop,evidence){if(!prop.npc)return false;const w=this.world;if(this.flags.detained&&prop.culprit){w.events.message?.('The suspect is detained. Build the case in your notebook.');return false;}if(!prop.culprit){w.events.message?.(prop.challenge||prop.dialogue);return false;}
  if(!prop.challengeEvidence.every(id=>evidence.includes(id))){w.events.message?.('They deny it. You need a direct contradiction, a link to the scene, and supporting evidence. Follow the open leads.');return false;}
  if(w.case.layout==='train'){if(!this.flags.rescued){w.events.message?.('Reach Jo and get him to safety first.');return false;}this.flags.detained=true;this.restore();this.save('Leon gives up the tool roll. Ines keeps him here while you build the case.');return true;}
  if(!this.flags.pursuit){this.flags.pursuit=true;this.started=this.elapsed;this.pressure=0;const a=this.actors.find(a=>a.prop.id===prop.id);a.path=[];a.repath=0;a.aim=0;a.wait=0;if(a.gun)a.gun.visible=true;this.save(prop.armed?'Rook draws his weapon and runs for the launch. Break his line of sight.':'The guest bolts for the service exit. Follow the footsteps; get close and press E to detain.');}return true;
 }
 tryCatch(prop){if(!prop.culprit||!this.flags.pursuit||this.flags.detained)return false;if(this.elapsed-(this.started??-10)<1.5){this.world.events.message?.('They are breaking away. Follow them!');return true;}const a=this.actors.find(a=>a.prop.id===prop.id),distance=a.group.position.clone().setY(1.68).distanceTo(this.world.camera.position);if(distance>2){this.world.events.message?.('Get within two meters and press E to detain.');return true;}
  this.flags.detained=true;this.pressure=0;a.path=[];if(a.gun)a.gun.visible=false;a.arms.forEach((m,i)=>m.rotation.z=i?-.9:.9);this.save(prop.armed?'Rook drops the weapon. The cash case and your evidence are preserved.':'The impostor is detained. Elsie can leave safely. Finish your case in the notebook.');return true;
 }
 // Grid navigation uses the same real colliders as the player, so actors cannot cut through walls.
 route(start,goal){const w=this.world,scale=2,key=(x,z)=>x+','+z;
  const nearest=p=>{const x=Math.round(p.x*scale),z=Math.round(p.z*scale);for(let radius=0;radius<7;radius++)for(let dx=-radius;dx<=radius;dx++)for(let dz=-radius;dz<=radius;dz++)if(!w.blocked((x+dx)/scale,(z+dz)/scale))return[x+dx,z+dz];return null;};
  const a=nearest(start),b=nearest(goal);if(!a||!b)return[];const first=key(...a),last=key(...b),queue=[a],came=new Map([[first,null]]);
  for(let i=0;i<queue.length&&i<14000;i++){const [x,z]=queue[i],k=key(x,z);if(k===last){const path=[];let cur=last;while(cur!==first){const [px,pz]=cur.split(',').map(Number);path.push(new V(px/scale,0,pz/scale));cur=came.get(cur);}return path.reverse();}
   for(const [dx,dz]of[[1,0],[-1,0],[0,1],[0,-1]]){const xx=x+dx,zz=z+dz,n=key(xx,zz);if(came.has(n)||w.blocked(xx/scale,zz/scale))continue;came.set(n,k);queue.push([xx,zz]);}}
  return[];
 }
 clearSight(a){const w=this.world,origin=a.group.position.clone().setY(1.5),d=w.camera.position.clone().sub(origin),distance=d.length();if(distance>15)return false;const ray=new THREE.Raycaster(origin,d.normalize(),.05,distance);return !ray.intersectObjects(w.surfaces.filter(m=>!m.userData.dynamic),false).some(h=>{for(let p=h.object;p;p=p.parent)if(!p.visible)return false;return true;});}
 fire(a){const w=this.world,origin=a.group.position.clone().setY(1.45);w.emitSound(origin,'shot',1.6);this.shotLine?.removeFromParent();this.shotLine?.geometry.dispose();this.shotLine?.material.dispose();this.shotLine=new THREE.Line(new THREE.BufferGeometry().setFromPoints([origin,w.camera.position.clone()]),new THREE.LineBasicMaterial({color:0xf7cf82,transparent:true,opacity:.8}));w.effects.add(this.shotLine);this.shotTTL=.12;a.shots++;this.pressure=Math.min(1,this.pressure+.38);this.world.events.message?.('Shot! Get behind a freight stack. Approach while he recovers.');if(this.pressure>=1){this.pressure=0;w.camera.position.set(w.case.spawn[0],1.68,w.case.spawn[1]);a.aim=-3;this.save('Pinned down. You fell back to the entrance; your evidence and completed actions are safe.');}}
 leaveTrace(a){const w=this.world,foot=a.group.position,scents=a.prop.scents||['rain'];
  for(const scent of scents)w.particleData.push({x:foot.x,y:.04,z:foot.z,scent,trail:true,dynamic:true,at:w.time});
  if(scents.includes('blood')){let mesh=this.traces[this.traceCursor%60];if(!mesh){mesh=w.box(foot.x,.024,foot.z,.09,.025,.14,0x752f3a,{scents:['blood'],sample:false});mesh.userData.dynamic=true;this.traces.push(mesh);}mesh.position.set(foot.x,.027,foot.z);mesh.userData.physical={temperature:24,texture:'thin wet trace',hardness:'fluid',roughness:.1,acoustic:'stone'};mesh.userData.eyeMaterial=w.mat(0x752f3a);mesh.material=w.active.has('Eyes')?mesh.userData.eyeMaterial:w.blackMaterial;mesh.updateMatrixWorld(true);this.traceCursor++;w.scanner?.index.addDynamic(mesh);}
 }
 update(dt,playing){const w=this.world;if(!playing){w.events.liveHUD?.(this.status());return;}this.elapsed+=dt;this.pressure=Math.max(0,this.pressure-dt*.022);this.shotTTL-=dt;if(this.shotLine)this.shotLine.visible=this.shotTTL>0&&w.active.has('Eyes');
  w.particleData=w.particleData.filter(p=>!p.dynamic||w.time-p.at<120);
  for(const a of this.actors){const p=a.prop;if(p.requires&&!this.flags[p.requires])continue;const pursuing=p.culprit&&this.flags.pursuit&&!this.flags.detained;
   a.repath-=dt;a.voice-=dt;a.wait=Math.max(0,a.wait-dt);let walking=false;
   if(!this.flags.detained||!p.culprit){if(p.patrol||pursuing||(p.id==='jo'&&this.flags.escorting&&!this.flags.rescued)){let goal;
    if(p.id==='jo'&&this.flags.escorting&&!this.flags.rescued){goal=w.camera.position.clone().setY(0);if(a.group.position.distanceTo(goal)<1.6)a.wait=.2;}else if(pursuing){const end=a.retreat?p.patrol[0]:p.escape;goal=new V(end[0],0,end[1]);if(a.group.position.distanceTo(goal)<1.5){if(!a.retreat&&this.flags['escape-secured'])a.wait=100;else if(a.wait===0){a.wait=2;a.retreat=!a.retreat;a.repath=0;}}}
    else {const waypoint=p.patrol[a.waypoint%p.patrol.length];goal=new V(waypoint[0],0,waypoint[1]);if(a.group.position.distanceTo(goal)<.75){a.waypoint++;a.wait=2;}}
    if(a.repath<=0){a.path=this.route(a.group.position,goal);a.repath=2.5;}
    if(a.wait===0&&a.path.length){const target=a.path[0],dir=target.clone().sub(a.group.position),distance=dir.length(),speed=p.id==='jo'?2.3:pursuing?2.5:.8;
     if(distance<.08)a.path.shift();else{dir.normalize();const next=a.group.position.clone().addScaledVector(dir,Math.min(distance,speed*dt));if(!w.blocked(next.x,next.z)){this.moveTo(a,next);a.group.rotation.y=Math.atan2(dir.x,dir.z);walking=true;}else{a.path=[];a.repath=0;}}}
   }}
   a.legs.forEach((m,i)=>m.rotation.x=walking?Math.sin(this.elapsed*(pursuing?12:6)+i*Math.PI)*.35:0);
   a.group.updateMatrixWorld(true);
   if(walking){a.step+=dt;if(a.step>.5){a.step=0;this.leaveTrace(a);if(w.active.has('Ears'))w.emitSound(a.group.position.clone().setY(.15),'step',pursuing?1.1:.8);}}
   else if(a.voice<0&&w.active.has('Ears')){a.voice=5;w.emitSound(a.group.position.clone().setY(1.5),'voice',.6);}
   // Nearby speech/footsteps reveal real body surfaces for Ears, never a culprit icon.
   if(w.active.has('Ears')&&(walking||a.voice>4.8)){const eye=a.group.position.clone().setY(1.3),origin=eye.clone().add(new V(0,0,1)),ray=new THREE.Raycaster(origin,new V(0,0,-1),0,2),hit=ray.intersectObjects(a.meshes,false)[0];if(hit)w.earMarks?.add(hit,w.time,.32);}
   if(pursuing&&p.armed){if(this.clearSight(a)){a.aim+=dt;if(a.aim>=2){this.fire(a);a.aim=-2.6;}}else a.aim=-.4;}
   for(const seat of w.props.filter(o=>o.warmSeat)){const near=seat.pos.distanceTo(a.prop.pos)<1.5;for(const m of seat.meshes)if(near)m.userData.seatWarmth=1;}
  }
  for(const p of w.props.filter(o=>o.warmSeat))for(const m of p.meshes){const amount=Math.max(.2,(m.userData.seatWarmth??1)-dt/240);m.userData.seatWarmth=amount;if(m.userData.physical)m.userData.physical.temperature=20+13*amount;}
  if(this.flags.escorting&&!this.flags.rescued){const jo=this.actors.find(a=>a.prop.id==='jo'),ada=this.actors.find(a=>a.prop.id==='ada');if(jo&&ada&&jo.group.position.distanceTo(ada.group.position)<3){this.flags.rescued=true;delete this.flags.escorting;jo.path=[];this.save('Jo reaches Ada. He is safe. Now preserve the evidence and confront Leon.');}}
  w.events.liveHUD?.(this.status());
 }
 status(){const a=this.actors.find(a=>a.prop.culprit);return {pressure:this.pressure,aiming:!!(a?.prop.armed&&this.flags.pursuit&&!this.flags.detained&&a.aim>.6),text:this.flags.detained?'SUSPECT DETAINED · BUILD YOUR CASE':this.flags.pursuit?(this.flags['escape-secured']?'ESCAPE ROUTE SECURED · GET CLOSE + E':'PURSUIT · FOLLOW THE FOOTSTEPS'):this.world.case.layout==='train'?(this.flags.rescued?'JO IS SAFE · FIND WHO STOPPED THE TRAIN':this.flags.escorting?'JO IS FOLLOWING · RETURN TO ADA':this.flags['baggage-open']?'BAGGAGE OPEN · REACH JO':'FIND JO · LISTEN BEYOND THE BULKHEAD'):'LIVE SCENE · QUESTION PEOPLE WITH EARS'};}
 dispose(){this.shotLine?.geometry.dispose();this.shotLine?.material.dispose();this.shotLine?.removeFromParent();}
}
