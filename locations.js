import * as THREE from './vendor/three.module.js';
import {applyFurniture} from './model-kit.js';
const V=THREE.Vector3;
function wall(w,x,z,length,along,door,height,color,y=0){
 const segment=(a,b)=>{if(b-a<.01)return;const xx=x+(along?(a+b)/2:0),zz=z+(along?0:(a+b)/2);w.box(xx,y+height/2,zz,along?b-a:.22,height,along?.22:b-a,color,{solid:true});
 if(w.case.layout==='mansion')for(const h of [.18,1.0,height-.24])w.box(xx,y+h,zz,along?b-a:.26,.07,along?.26:b-a,0x9a8053);};
 if(door===undefined){segment(-length/2,length/2);return;}const half=w.case.layout==='train'?.78:1.65;segment(-length/2,door-half);segment(door+half,length/2);w.box(x+(along?door:0),y+height-.48,z+(along?0:door),along?half*2:.24,.96,along?.24:half*2,color);
 for(const sign of [-1,1])w.box(x+(along?door+sign*(half+.04):0),y+(height-.95)/2,z+(along?0:door+sign*(half+.04)),along?.12:.3,height-.95,along?.3:.12,0x93836b);
}
function furniture(w,name,x,z,size=[1,1,1],rotation=0,y=0){const m=w.box(x,y,z,1,1,1,0x82715d);applyFurniture(m,name,new V(x,y,z),size);m.rotation.y=rotation;m.updateMatrixWorld(true);m.userData.scents=['wood'];return m;}
function lamp(w,x,z,color,height=3,outdoor=false){if(outdoor){w.cyl(x,height/2,z,.09,height,0x596c70,{solid:true});w.box(x+.5,height,z,1.2,.12,.15,0x596c70);}const px=x+(outdoor?.9:0);w.cyl(px,height-.16,z,.25,.2,0xd5b371);w.mesh('sphere',px,height-.35,z,.16,.2,.16,color,{emissive:true,sample:false});const l=new THREE.PointLight(color,14,outdoor?17:11,2);l.position.set(px,height-.45,z);w.group.add(l);}
function plant(w,x,y,z,scale=1){w.cyl(x,y+.26*scale,z,.32*scale,.52*scale,0x846251,{solid:true,scents:['earth']});w.cyl(x,y+.9*scale,z,.035*scale,1.3*scale,0x587957);for(let i=0;i<7;i++){const a=i*2.4;const leaf=w.mesh('sphere',x+Math.cos(a)*.22*scale,y+(.8+i*.12)*scale,z+Math.sin(a)*.22*scale,.34*scale,.07*scale,.14*scale,0x597e67,{scents:['earth']});leaf.rotation.set(.3,a,.3);}}
function window(w,x,y,z,width,height,rotation=0){const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=rotation;w.group.add(g);w.box(0,0,0,width,height,.05,0x446678,{parent:g,emissive:true,scents:['rain']});for(const xx of [-width/2,0,width/2])w.box(xx,0,.04,.075,height+.15,.09,0xb8b5a0,{parent:g});for(const yy of [-height/2,0,height/2])w.box(0,yy,.04,width+.15,.075,.09,0xb8b5a0,{parent:g});}
function decorate(w,r){const [x,z]=r.center,[width,depth]=r.size,y=(r.floor||0)*5,type=r.type;
 if(w.case.layout==='mansion'){
  if(type!=='stairs')w.box(x,y+.025,z,width*.45,.04,depth*.67,['garden','kitchen','workshop'].includes(type)?0x527369:0x613344,{scents:['wood']});
  if(type!=='stairs')for(const side of [-1,1]){window(w,x+side*(width/2-.3),y+2.65,z-5,2,2.7,side>0?-Math.PI/2:Math.PI/2);}
  if(['foyer','gallery'].includes(type)){for(const xx of [-7.7,7.7])for(const zz of [-5,7,18]){w.cyl(xx,y+2.25,zz,.24,4.5,0xb5ab91,{solid:true});w.cyl(xx,y+.18,zz,.43,.32,0xb5ab91);}for(const zz of [0,12]){const ring=w.mesh('sphere',0,y+3.8,zz,1,1,1,0xb99754);ring.geometry=new THREE.TorusGeometry(1,.055,8,32);ring.rotation.x=Math.PI/2;ring.userData.ownedGeometry=true;w.cyl(0,y+4.35,zz,.03,1,0xada582);for(let i=0;i<8;i++){const a=i*Math.PI/4;w.mesh('sphere',Math.cos(a),y+4,zz+Math.sin(a),.1,.2,.1,0xffdc91,{emissive:true,sample:false});}}plant(w,-7,y,19);plant(w,7,y,19);w.label(r.floor?'BLACKTHORN · '+(r.floor+1):'BLACKTHORN MANOR',0,y+3.5,-9.72,5,'#dfc69c','#3c3438');}
  if(['library','archive'].includes(type)){for(const zz of [-17,-10,-3,5,11])furniture(w,'bookcaseOpen',x-width/2+.65,zz,[.8,3.4,4.5],Math.PI/2,y);for(const zz of [-15,0,10])furniture(w,'bookcaseOpen',x+width/2-1,zz,[.8,3.2,3],Math.PI/2,y);w.box(x+5,y+1.2,z-depth/2+.7,3.8,2.4,1.1,0x8a7663,{solid:true});w.box(x+5,y+.8,z-depth/2+1.27,2.4,1.4,.05,0x17252a);if(type==='library'){for(let i=0;i<5;i++)w.mesh('sphere',x+4.5+i*.2,y+.25,z-depth/2+1.35,.12,.22,.05,0xffb16b,{emissive:true,sample:false});}}
  if(type==='dining'){w.box(x,y+.83,z,8,.14,2,0x86604a,{solid:true});w.box(x,y+.916,z,7.8,.025,1.5,0xc8b8a0);for(const sign of [-1,1])for(const dx of [-3,-1,1,3])furniture(w,'chair',x+dx,z+sign*1.8,[.7,1.2,.7],sign>0?0:Math.PI,y);}
  if(['garden','observatory'].includes(type)){for(const xx of [-7,-3,3,7])window(w,x+xx,y+2.4,z+depth/2-.31,2.8,3.6,Math.PI);for(const xx of [-7,7])plant(w,x+xx,y,z,1.6);if(type==='observatory'){w.cyl(x,y+.8,z,.06,1.6,0xc7ac69);const scope=w.cyl(x,y+1.8,z,.25,2.5,0xa8b5ac);scope.rotation.z=.85;}}
  if(['kitchen','workshop','linen'].includes(type)){w.box(x+width/2-1,y+.8,z,1.3,1.6,depth-2,0x71887e,{solid:true});for(let i=0;i<5;i++)w.box(x+width/2-1,y+2.8,z-depth/2+2+i*3,1.2,1.2,2.5,0x60736d);if(type==='kitchen')for(let i=0;i<3;i++)w.cyl(x+width/2-1,y+1.67,z+i*1.3,.35,.07,0x2a363b);}
  if(type==='bedroom'||type==='nursery'){for(const zz of [-7,4]){w.box(x+5,y+.38,z+zz,3,.65,2.5,0x6f675f,{solid:true});w.box(x+5,y+.8,z+zz,2.9,.2,2.4,type==='nursery'?0x809aa0:0x8d7898);w.box(x+6,y+.97,z+zz,.65,.18,2.1,0xd1c6b1);}furniture(w,'desk',x-6,z-9,[2.5,1,1.1],0,y);}
  if(type==='music'){w.box(x,y+.9,z,3,.3,1.6,0x252e37,{solid:true});w.box(x,y+1.15,z+.9,2.8,.08,.5,0xd6c7a8);for(let i=0;i<13;i++)w.box(x-1.2+i*.2,y+1.21,z+.75,.07,.04,.26,0x202b33);for(const dx of [-1.2,1.2])w.cyl(x+dx,y+.4,z,.07,.8,0x202b33);}
  if(type!=='stairs'){w.label(r.name,x,y+3.65,z-depth/2+.25,Math.min(5,width*.5),'#cfb98e','#39454a');lamp(w,x,z,0xffd397,y+4.25);}
 }else if(w.case.layout==='train'){
  w.box(x,.025,0,width-.3,.04,1.5,0x744751,{scents:['wood']});for(const side of [-1,1])for(let i=0;i<Math.floor(width/3.7);i++)window(w,x-width/2+2+i*3.7,1.9,side*1.91,2.6,1.12,side>0?Math.PI:0);
  for(let xx=x-width/2+2;xx<x+width/2-1;xx+=5){w.box(xx,2.86,0,2.5,.05,.35,0xe5d3a1,{emissive:true});if(type==='sleepers'){w.box(xx,.5,-1.6,3.3,.18,1.05,0x6b5f78,{solid:true});w.box(xx,.67,-1.6,3.1,.15,.95,0xa9a6a5);w.box(xx,1.85,-1.6,3.3,.14,1.05,0x6b5f78);w.box(xx,1.98,-1.6,3.1,.15,.95,0xa9a6a5);}if(type==='lounge'||type==='diner'){w.box(xx,.55,-1.6,1.5,.28,1,0x516c7e,{solid:true});w.box(xx,1,-2,1.5,.8,.15,0x516c7e);}if(type==='baggage'||type==='postal')w.box(xx,.65,-1.65,2,1.3,.8,0x91775d,{solid:true});}
  lamp(w,x,0,0xf5dca9,2.9);w.label(r.name,x,2.6,-2.02,Math.min(4,width*.5),'#d9d2b5','#294653');
 }else if(['shed','garage'].includes(type)){
  lamp(w,x,z,0xabe2df,4.8);for(let xx=x-width/2+1;xx<=x+width/2-1;xx+=4){w.box(xx,5,z,.12,.22,depth,0x889e9a);}
  w.label(type==='shed'?'DISPATCH · FERRY CREW':'ENGINE WORKSHOP',x,3.4,z+depth/2-.26,Math.min(8,width*.7),'#dfd4a9','#214c4c',Math.PI);for(const side of [-1,1])window(w,x+side*(width/2-.3),2.5,z,4,1.7,side>0?-Math.PI/2:Math.PI/2);
  if(type==='garage'){w.box(x+7,1,z-5,6,2,3,0x485c65,{solid:true});w.cyl(x+7,2.2,z-5,.65,.45,0x8b998e);w.box(x-15,1,z+8,10,2,1.1,0x768683,{solid:true});}
 }
}
function stairs(w){w.stairs=[];
 for(let f=0;f<2;f++){const y=f*5,s={x0:-8,x1:8,z0:-17.5,z1:-14.5,y0:y,y1:y+5};w.stairs.push(s);for(let i=0;i<40;i++){const xx=-8+(i+.5)*.4,yy=y+(i+1)*.125;w.box(xx,yy-.075,-16,.4,.15,3,0x928571,{scents:['wood']});w.box(xx+.19,yy+.008,-16,.025,.025,3,0xc4af87);}
  for(const z of [-17.65,-14.35]){const rail=w.box(0,y+3.5,z,Math.hypot(16,5),.09,.1,0xbba879,{solid:true});rail.rotation.z=Math.atan2(5,16);for(let i=0;i<=8;i++)w.cyl(-8+i*2,y+i*.625+.5,z,.035,1,0x8d826e);}
 }
 for(let f=0;f<3;f++){const y=f*5;w.label(f===2?'DOWNSTAIRS ←':'STAIRS UP →',0,y+3,-21.73,5,'#e1c48d','#344752');lamp(w,0,-20,0xf1d5a1,y+4.4);}
}
function harbor(w){
 w.skyColor=0x718d9a;w.fogColor=0x718d9a;w.scene.fog.density=.0027;
 const water=w.box(0,-.65,-100,900,.12,900,0x285668,{scents:['sea'],sample:true});water.userData.physical={temperature:12,texture:'moving salt water',wetness:'wet',hardness:'fluid',acoustic:'water'};w.water=water;
 for(let i=0;i<65;i++){const xx=Math.sin(i*8.23)*230,zz=-90+Math.cos(i*4.1)*220;const m=w.box(xx,-.54,zz,3+i%7,.018,.15,0x7da7ac,{scents:['sea'],sample:false});w.animations.push({kind:'wave',mesh:m,x:xx,z:zz,phase:i});}
 for(const x of [-47.5,47.5]){w.box(x,.18,-9,.18,.3,102,0xd8b977);for(let z=-58;z<40;z+=8)w.cyl(x,.6,z,.12,1.2,0x768b91,{solid:true});}
 for(const x of [12.25,27.75])for(let z=-97;z<-61;z+=5){w.cyl(x,.55,z,.12,1.1,0x899b94,{solid:true});w.box(x,1,z+2.5,.07,.08,5,0xb3a981);}
 for(let z=-97;z<-60;z+=.7)w.box(20,.02,z,15.8,.02,.045,0x4a493f,{scents:['tar']});
 const stacks=[[-7,-14,6,12,0x80614f],[20,-13,7,13,0x426b71],[-6,-36,7,12,0x914f42],[33,-38,8,18,0x597167],[-34,-44,16,8,0x4a6079],[0,-54,8,7,0x8d7852]];
 stacks.forEach(([x,z,ww,dd,color],i)=>{w.box(x,1.6,z,ww,3.2,dd,color,{solid:true,scents:['tar','metal']});for(let j=0;j<Math.floor(ww*2);j++)w.box(x-ww/2+j*.5,1.6,z+dd/2+.025,.06,3,.06,0x9b9f8d);w.label('C0'+(i+5),x,2.4,z+dd/2+.08,2,'#e2d9bd','#384c55');if(i%2===0)w.box(x,4.75,z,ww,3.1,dd,color,{solid:true});});
 for(const z of [-50,-24,5,32])for(const x of [-44,44])lamp(w,x,z,0xffcf89,7,true);
 // Clear cargo lane, physically raised paint so no coplanar surfaces.
 for(let z=-55;z<18;z+=5)w.box(8,.025,z,.15,.02,2.5,0xd8bd73);w.label('ROOKERY / WINTER CROSSINGS',-24,4.3,41.7,12,'#efdbab','#234f5b',Math.PI);
 for(const [x,z]of [[-40,-55],[40,-52]]){w.cyl(x,6,z,.55,12,0xba945f,{solid:true});const g=new THREE.Group();g.position.set(x,12,z);w.group.add(g);w.box(0,0,0,30,.5,.7,0xc5a16c,{parent:g});for(let i=-13;i<15;i+=3){const brace=w.box(i,.7,0,3.4,.14,.15,0x677e84,{parent:g});brace.rotation.z=(i%2?1:-1)*.4;}const hook=w.box(11,-3,0,.06,6,.06,0x445961,{parent:g});w.box(11,-6,0,1.2,.3,.5,0x333f4c,{parent:g});w.animations.push({kind:'crane',mesh:g,hook,phase:x});w.soundSources.push({pos:new V(x,5,z),type:'creak',next:2});}
 // An inhabited skyline, bridge and mountains sit beyond the playable quays.
 for(let i=0;i<40;i++){const x=-170+i*8,h=8+(Math.sin(i*12.4)*.5+.5)*35,z=110+(i%3)*13;w.box(x,h/2,z,6,h,9,0x4f6679,{sample:false});for(let yy=3;yy<h-2;yy+=5)for(const dx of [-1.8,1.8])w.box(x+dx,yy,z-4.53,.65,1,.03,0xcbad7a,{emissive:true,sample:false});}
 w.box(-130,5,-65,9,1,240,0x7b8f99,{sample:false});for(const z of [-145,-55,35]){w.box(-130,13,z,1.8,26,1.8,0x657f8e,{sample:false});for(let k=-5;k<=5;k++){const end=new V(-130,5,z+k*7),start=new V(-130,25,z),dir=end.clone().sub(start);const cable=w.cyl(-130,15,z+k*3.5,.07,dir.length(),0x92a5ab,{sample:false});cable.quaternion.setFromUnitVectors(new V(0,1,0),dir.normalize());}}
 for(let i=0;i<16;i++){const mountain=w.mesh('cyl',-260+i*37,15+(i%4)*7,-260,30,50+(i%4)*20,30,0x5c768a,{sample:false});mountain.geometry=new THREE.ConeGeometry(1,1,9);const pa=mountain.geometry.attributes.position;for(let j=0;j<pa.count;j++){if(pa.getY(j)<.45){const angle=Math.atan2(pa.getZ(j),pa.getX(j)),k=1+Math.sin(angle*3+i)*.22;pa.setX(j,pa.getX(j)*k*1.45);pa.setZ(j,pa.getZ(j)*k);}else pa.setX(j,pa.getX(j)+Math.sin(i*5)*.2);}mountain.geometry.computeVertexNormals();mountain.userData.ownedGeometry=true;}
 for(const [x,z,scale]of [[90,-125,2.4],[-65,-185,3],[120,25,1.8],[32,-95,.28]]){const g=new THREE.Group();g.position.set(x,-.8,z);g.scale.setScalar(scale);w.group.add(g);const hull=w.mesh('sphere',0,1,0,4,1.4,14,0x2a4356,{parent:g,sample:false});w.box(0,3,3,5,3,5,0xc6c7b4,{parent:g,sample:false});w.box(0,5,3,3,.7,3,0x647a80,{parent:g,sample:false});w.cyl(0,7,4,.14,5,0xa8b1a3,{parent:g,sample:false});for(const side of [-1,1])for(let j=0;j<4;j++)w.box(side*2.52,3.5,1.2+j*.85,.025,.6,.5,0x3b6476,{parent:g,sample:false});for(const zz of [-7,-3])w.box(0,2.5,zz,4,1.5,3,0x8d6451,{parent:g,sample:false});w.cyl(1,5.8,4,.4,1.5,0x935c43,{parent:g,sample:false});w.animations.push({kind:'ship',mesh:g,x,z,phase:x});}
 w.soundSources.push({pos:new V(20,0,-80),type:'water',next:1},{pos:new V(-47,0,-20),type:'splash',next:5});
}
export function buildLocation(w,c){w.animations=[];w.stairs=[];w.skyColor=0x101c2b;w.fogColor=0x182537;w.scene.fog.density=c.layout==='train'?.004:.008;w.camera.far=900;w.camera.updateProjectionMatrix();
 for(const r of c.rooms){const [x,z]=r.center,[width,depth]=r.size,y=(r.floor||0)*5,h=c.layout==='train'?3.05:c.layout==='docks'?5.4:4.8;
  // Dock buildings share the continuous quay slab; no overlapping floor rectangles.
  if(c.layout!=='docks'||!['shed'].includes(r.type)){if(r.type==='stairs'&&r.floor){w.box(-9,y-.12,-16,2,.24,12,r.color);w.box(9,y-.12,-16,2,.24,12,r.color);w.box(0,y-.12,-20,16,.24,4,r.color);w.box(0,y-.12,-12,16,.24,4,r.color);}else w.box(x,y-.13,z,width,.26,depth,r.color,{scents:c.layout==='docks'?['tar']:['wood']});}
  const enclosed=c.layout!=='docks'||['shed','garage'].includes(r.type);
  if(enclosed){for(const [side,xx,zz,len,along]of [['N',x,z-depth/2+.12,width,true],['S',x,z+depth/2-.12,width,true],['W',x-width/2+.12,z,depth,false],['E',x+width/2-.12,z,depth,false]])wall(w,xx,zz,len,along,r.doors[side],h,r.color,y);
   if(r.type!=='stairs'||r.floor===2)w.box(x,y+h+.06,z,width,.12,depth,c.layout==='docks'?0x344d5b:r.color);
  }decorate(w,r);
 }
 if(c.layout==='mansion')stairs(w);if(c.layout==='docks')harbor(w);
 if(c.layout==='train'){w.box(0,-1,0,350,.3,80,0x394d53,{sample:false,scents:['earth']});for(const z of [-1.5,1.5])w.box(0,-.6,z,350,.15,.1,0x778a91,{sample:false});for(let i=0;i<20;i++){const z=i%2?-20:20;plant(w,-90+i*10,-1,z,3);}w.soundSources.push({pos:new V(12,1,0),type:'creak',next:2});}
 const [sx,sz]=c.spawn;const ex=c.layout==='train'?c.bounds[0]+.27:sx,ez=c.layout==='train'?0:c.bounds[3]-.28;w.exitDoor=w.box(ex,1.2,ez,c.layout==='train'?.1:2,2.4,c.layout==='train'?1.5:.1,0x314e54);w.exitDoor.userData.exit=true;w.label('EXIT / CASE FILES',ex+(c.layout==='train'?.1:0),2.8,ez-(c.layout==='train'?0:.08),2.5,'#d8cfaa','#27434a',c.layout==='train'?Math.PI/2:Math.PI);
}
export function inGround(c,x,z,margin=0,y=0){return c.rooms.some(r=>Math.abs((r.floor||0)*5-y)<.7&&Math.abs(x-r.center[0])<=r.size[0]/2-margin&&Math.abs(z-r.center[1])<=r.size[1]/2-margin);}
export function floorHeight(w,x,z,from=0){if(w.case?.layout!=='mansion')return 0;for(const s of w.stairs||[]){if(x>=s.x0-.02&&x<=s.x1+.02&&z>=s.z0&&z<=s.z1){const y=s.y0+(x-s.x0)/(s.x1-s.x0)*5;if(Math.abs(y-from)<.6)return Math.max(s.y0,Math.min(s.y1,y));}}
 let best=-Infinity;for(const r of w.case.rooms){const y=r.floor*5;if(y>from+.35||Math.abs(x-r.center[0])>r.size[0]/2||Math.abs(z-r.center[1])>r.size[1]/2)continue;if(r.type==='stairs'&&r.floor&&x>-8&&x<8&&z>-18&&z<-14)continue;best=Math.max(best,y);}return best;}
export function animateLocation(w,dt,playing){const eyes=w.active.has('Eyes');for(const a of w.animations||[]){if(!playing)continue;const t=w.time;if(a.kind==='wave'){a.mesh.position.y=-.54+Math.sin(t*.6+a.phase)*.06;a.mesh.position.x=a.x+Math.sin(t*.2+a.phase)*2;}if(a.kind==='crane'){a.mesh.rotation.y=Math.sin(t*.08+a.phase)*.35;a.hook.scale.y=4+Math.sin(t*.35+a.phase)*1.8;}if(a.kind==='ship'){a.mesh.position.y=-.8+Math.sin(t*.45+a.phase)*.12;a.mesh.rotation.z=Math.sin(t*.25+a.phase)*.012;}}
 if(w.atmosphere)w.atmosphere.visible=eyes;
}
// Distinct clue silhouettes, with genuine surfaces for all four senses.
export function specialProp(w,o,x,z,g,list){
 const opt={parent:g,scents:o.scents||['dust']};
 const box=(dx,y,dz,a,b,c,color,solid=false)=>{const m=w.box(x+dx,y,z+dz,a,b,c,color,{...opt,solid});list.push(m);return m;};
 const cyl=(dx,y,dz,r,h,color)=>{const m=w.cyl(x+dx,y,z+dz,r,h,color,opt);list.push(m);return m;};
 const table=()=>{box(0,.84,0,1.55,.1,.8,0x675744,true);for(const side of [-1,1])box(side*.6,.4,0,.08,.8,.55,0x64747a);};
 switch(o.kind){
  case 'armchair':case 'bench':box(0,.42,0,o.kind==='bench'?2.4:1.2,.65,.95,0x6f4d55,true);box(0,1,-.47,o.kind==='bench'?2.4:1.2,.7,.15,0x604249);if(o.kind==='armchair')for(const side of [-1,1])box(side*.6,.8,0,.2,.35,.95,0x6f4d55);return .7;
  case 'bunk':box(0,.4,0,2.7,.5,1.25,0x504863,true);box(0,.7,0,2.55,.2,1.15,0xb1aaa2);box(-.8,.85,0,.6,.1,.8,0xd4c8b2);return .8;
  case 'covered':{const m=w.mesh('sphere',x,.23,z,.43,.25,1,0xb8b4a5,opt);list.push(m);const head=w.mesh('sphere',x,.25,z+.9,.21,.23,.24,0xb8b4a5,opt);list.push(head);return .3;}
  case 'fragment':for(let i=0;i<8;i++){const m=box(Math.sin(i*2)*.4,.04,Math.cos(i*1.7)*.4,.12,.035,.18,o.id==='fabric'?0x426c5d:0x772f37);m.rotation.y=i;}return .1;
  case 'tracks':for(let i=0;i<6;i++){box(i%2?.18:-.18,.025,-.85+i*.34,.15,.035,.3,0x222c33);if(i%2)box(.23,.045,-.72+i*.34,.08,.03,.07,0x52646b);}return .1;
  case 'clock':box(0,1.3,0,.7,2.6,.45,0x57402d,true);cyl(0,2.1,.28,.25,.07,0xc0b293).rotation.x=Math.PI/2;box(0,1.05,.25,.04,1.25,.03,0xb2a06b);return 1.5;
  case 'lever':box(0,.8,0,.65,1.6,.4,0x485958,true);box(0,1.5,.1,.08,.65,.08,0xbd9e55);box(0,1.8,.15,.4,.12,.14,0xa9654f);return 1.3;
  case 'valve':cyl(0,.5,0,.18,1,0x657976);cyl(0,1.08,0,.43,.12,0xa55845);box(0,1.16,0,.7,.06,.08,0xbaa76b);return 1.05;
  case 'fusebox':box(0,1,0,.9,1.3,.35,0x64766e,true);for(const dx of [-.25,0,.25]){box(dx,1.1,.2,.09,.5,.05,0xd2cbb2);box(dx,1.38,.24,.18,.07,.1,0xb49a50);}return 1.3;
  case 'bulkhead':box(0,1.5,0,.25,3,4.25,0x5c7074,true);box(-.17,1.1,-.35,.15,.18,.45,0xbbad73);return 1.3;
  case 'cashcase':box(0,.26,0,1,.5,.65,0x495664);box(0,.54,0,.38,.12,.12,0xb09f64);for(const a of [-.35,.35])box(a,.25,.34,.07,.45,.04,0xd4b361);return .4;
  case 'toolroll':table();box(0,.93,0,.8,.1,.5,0x586c7b);for(let i=0;i<5;i++)box(-.3+i*.15,1.02,0,.08,.08,.35,0x99a7a3);return 1;
  case 'utensils':table();box(0,.93,0,.75,.08,.5,0x967a4c);box(.15,1,-.05,.5,.025,.06,0xd4d7c9);cyl(-.2,1,0,.12,.1,0xbbaa4c);return 1;
  case 'ticket':table();box(0,.93,0,.65,.025,.43,0xd0c6a8);for(let i=0;i<4;i++)box(0,.948,-.13+i*.07,.45,.005,.017,0x4b5d60);return 1;
  default:return null;
 }
}
