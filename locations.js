import * as THREE from './vendor/three.module.js';
import {applyFurniture} from './model-kit.js';
const V=THREE.Vector3;
function wall(w,x,z,length,along,door,height,color){
 const segment=(a,b)=>{if(b-a<.01)return;w.box(x+(along?(a+b)/2:0),height/2,z+(along?0:(a+b)/2),along?b-a:.22,height,along?.22:b-a,color,{solid:true});};
 if(door===undefined){segment(-length/2,length/2);return;}
 const half=w.case.layout==='train'?.95:1.5;segment(-length/2,door-half);segment(door+half,length/2);
 w.box(x+(along?door:0),height-.38,z+(along?0:door),along?half*2:.22,.76,along?.22:half*2,color);
}
function furniture(w,name,x,z,size=[1,1,1],rotation=0){const m=w.box(x,0,z,1,1,1,0x82715d);applyFurniture(m,name,new V(x,0,z),size);m.rotation.y=rotation;m.updateMatrixWorld(true);m.userData.scents=['wood'];return m;}
function lamp(w,x,z,color,height=3){w.box(x,height,z,.65,.12,.65,color,{emissive:true});const l=new THREE.PointLight(color,20,13,2);l.position.set(x,height-.2,z);w.group.add(l);}
function decorate(w,r){const [x,z]=r.center,[width,depth]=r.size,type=r.type;
 if(w.case.layout==='mansion'){
  const carpet=type==='passage'||type==='kitchen'?0x55666a:type==='garden'?0x4b6658:0x622f43;
  w.box(x,.015,z,width*.67,.025,depth*.78,carpet);
  for(const side of [-1,1]){w.box(x+side*(width/2-.25),.65,z,.1,.08,depth-.3,0xba9b63);w.box(x+side*(width/2-.25),3.6,z,.12,.12,depth-.3,0xba9b63);}
  if(type==='foyer'){for(const side of [-1,1]){w.cyl(x+side*3.7,2.1,z-2,.3,4.2,0xaaa18a,{solid:true});furniture(w,'plantSmall1',x+side*3.4,z+3,[.85,1.7,.85]);}w.label('BLACKTHORN',x,3.5,z-depth/2+.3,4,'#d5ba8a','#382c31');}
  if(type==='ballroom'){
   for(const a of [-1,1]){w.cyl(x+a*3.8,2.5,z,.2,5,0x9d927a,{solid:true});w.box(x+a*3.7,2,z-3,.1,2.8,1.8,0x2d3f4d);}
   w.cyl(x,3.95,z,.9,.16,0xb69b56);for(let i=0;i<6;i++){const a=i/6*Math.PI*2;w.cyl(x+Math.cos(a)*.75,4.2,z+Math.sin(a)*.75,.06,.55,0xe5cfa0);}
   w.label('THE CHILDREN’S HOME BENEFIT',x,3.3,z-depth/2+.3,4,'#dcc299','#442a35');
  }
  if(type==='library'){for(let i=0;i<3;i++)furniture(w,'bookcaseOpen',x-width/2+.55,z-3+i*3,[.7,2.8,2.2],Math.PI/2);w.box(x+3,1.1,z-depth/2+.6,3,2.2,.6,0x796551,{solid:true});w.box(x+3,.65,z-depth/2+.95,1.7,1.25,.1,0x171c20);}
  if(type==='dining'){w.box(x,.83,z,5.5,.15,1.7,0x86604a,{solid:true});for(const side of [-1,1])for(const offset of [-2,0,2])furniture(w,'chair',x+offset,z+side*1.5,[.65,1.1,.65],side>0?0:Math.PI);w.box(x,.925,z,5,.03,1.3,0xb5ad96);}
  if(type==='garden'){w.box(x-4,.6,z+.5,.45,1.2,1.5,0x53626b,{solid:true});for(const side of [-1,1]){for(let i=0;i<5;i++)w.box(x-width/2+1+i*2.3,2,z+side*(depth/2-.2),.05,3.7,.1,0x99b7ab);furniture(w,'plantSmall1',x+side*4,z-2,[1.25,2.4,1.25]);}w.box(x,4.6,z,width,.08,depth,0x28565b);}
  if(type==='kitchen'){w.box(x+width/2-1,.8,z,1.4,1.6,depth-1.3,0x79918c,{solid:true});for(let i=0;i<4;i++)w.cyl(x+width/2-1,1.67,z-2+i*1.2,.3,.08,0x292e33);}
  if(type==='passage'){w.label('GARDEN ←     SERVICE GATE →',x,2.8,z-depth/2+.3,4,'#d5cba8','#354143');}
 }else if(w.case.layout==='train'){
  for(const side of [-1,1])for(let i=0;i<Math.floor(width/2);i++){const xx=x-width/2+1+i*2;w.box(xx,1.95,z+side*(depth/2-.14),1.5,1.25,.05,0x31566b);w.box(xx,1.24,z+side*(depth/2-.2),1.6,.07,.16,0xadc4c1);}
  w.box(x,.018,z,width-.3,.025,1.55,0x66444c);
  if(type==='sleepers'){for(const xx of [x-5,x,x+5]){w.box(xx,.5,z-2,2.7,.18,1.1,0x565278,{solid:true});w.box(xx,1.65,z-2,2.7,.14,1.1,0x565278);w.box(xx,.65,z-2,2.55,.15,1,0xacaa9c);}}
  if(type==='lounge'){for(const xx of [x-4,x+1]){w.box(xx,.55,z+2,2,.3,1.1,0x486278,{solid:true});w.box(xx,1,z+2.45,2,.85,.12,0x486278);}}
  if(type==='diner'){for(const xx of [x-5,x+1]){w.box(xx,.85,z+2,1.5,.1,1.35,0xad9270,{solid:true});w.cyl(xx,.4,z+2,.15,.8,0x7b8583);}}
  if(type==='baggage'){for(const xx of [x-5,x,x+5])w.box(xx,.7,z-2,1.9,1.4,1.8,0x766245,{solid:true});}
  w.label(r.name,x,2.7,z-depth/2+.22,Math.min(5,width*.7),'#d2dccc','#203d4b');
 }else{
  if(type==='shed'){w.box(x,3.4,z,width+.6,.2,depth+.6,0x23373d);w.label('DISPATCH / FERRY CREW',x,2.75,z+depth/2-.22,4,'#d8d3ad','#214c4c',Math.PI);}
  if(type==='garage'){w.box(x+3,1.4,z,2.5,2.8,3,0x536b6c,{solid:true});w.box(x+3,.35,z,3,.2,3.4,0x7d8980);w.cyl(x+3,3,z,.4,.3,0x7d6d45);}
  if(type==='yard'){w.label('ROOKERY FERRY · WINTER FUND',x,2.6,z-depth/2+.3,5.7,'#ddd49e','#23504f');w.cyl(x-6,2.4,z+4,.1,4.8,0x939b8a);}
  if(type==='pier'){for(let i=0;i<30;i++)w.box(x-width/2+i*.55,.02,z,.035,.025,depth,0x302d25);for(const side of [-1,1])w.cyl(x+side*6,.45,z,.16,.9,0x83705c,{solid:true});}
 }
}
export function buildLocation(w,c){
 w.scene.fog.density=c.layout==='docks'?.022:.012;
 for(const room of c.rooms){const [x,z]=room.center,[width,depth]=room.size,h=c.layout==='mansion'?4.8:c.layout==='train'?3.1:3.5;
  w.box(x,-.13,z,width,.26,depth,room.color);
  const enclosed=c.layout!=='docks'||['shed','garage'].includes(room.type);
  if(enclosed){for(const [side,xx,zz,len,along]of [['N',x,z-depth/2,width,true],['S',x,z+depth/2,width,true],['W',x-width/2,z,depth,false],['E',x+width/2,z,depth,false]])wall(w,xx,zz,len,along,room.doors[side],h,room.color);if(c.layout!=='docks')w.box(x,h+.05,z,width,.1,depth,room.color);}
  lamp(w,x,z,c.layout==='train'?0xb5d7eb:c.layout==='mansion'?0xf1c78c:0x8fc6c6,h-.7);decorate(w,room);
 }
 if(c.layout==='docks'){
  // The open yard joins the pier. Solid freight stacks make an asymmetric cover maze.
  for(const [x,z,ww,dd,col]of [[-4,0,4,6,0x654a43],[-3,-8,3,4,0x40616a],[1,3,4,3,0x6d6042],[7,-6,3,6,0x354f68],[0,-12,4,3,0x815349],[8,1,3,4,0x4b6661]]){
   w.box(x,1.35,z,ww,2.7,dd,col,{solid:true});for(let i=0;i<Math.floor(ww*3);i++)w.box(x-ww/2+i/3,1.35,z+dd/2+.015,.045,2.55,.04,0x8a9490);
  }
  // Water is visible scenery; traversable ground is the union of the room footprints.
  w.box(0,-.5,0,100,.12,100,0x123039,{sample:false});
  for(let i=0;i<16;i++)w.box(-40+i*5,-.42,-24-Math.sin(i)*8,3,.015,.1,0x2b5960);
  w.box(15,.2,-20,2.6,.65,5,0x293d4a);w.box(15,.7,-19.5,1.5,.8,2.3,0x708985);w.cyl(15,1.6,-19.5,.04,1,0xd3c69a);
  for(const [x,z]of [[-8,3],[12,-11]]){w.box(x,4,z,.3,8,.3,0x84908d);w.box(x-2,7.8,z,4.5,.3,.3,0x84908d);w.box(x-4,5.5,z,.07,4,.07,0x778985);}
 }
 const [sx,sz]=c.spawn;w.exitDoor=w.box(sx,1.1,sz+(c.layout==='train'?2.95:1.8),1.6,2.2,.12,0x355957);w.exitDoor.userData.exit=true;
 w.label('EXIT / CASE FILES',sx,2.5,sz+(c.layout==='train'?2.82:1.65),2.4,'#d0dcc3','#203c40',Math.PI);
}
export function inGround(c,x,z,margin=0){return c.rooms.some(r=>Math.abs(x-r.center[0])<=r.size[0]/2-margin&&Math.abs(z-r.center[1])<=r.size[1]/2-margin);}
// Distinct clue silhouettes, with genuine surfaces for all four senses.
export function specialProp(w,o,x,z,g,list){
 const opt={parent:g,scents:o.scents||['dust']};
 const box=(dx,y,dz,a,b,c,color,solid=false)=>{const m=w.box(x+dx,y,z+dz,a,b,c,color,{...opt,solid});list.push(m);return m;};
 const cyl=(dx,y,dz,r,h,color)=>{const m=w.cyl(x+dx,y,z+dz,r,h,color,opt);list.push(m);return m;};
 const table=()=>{box(0,.84,0,1.55,.1,.8,0x675744,true);for(const side of [-1,1])box(side*.6,.4,0,.08,.8,.55,0x64747a);};
 switch(o.kind){
  case 'armchair':case 'bench':box(0,.42,0,o.kind==='bench'?2.4:1.2,.65,.95,0x6f4d55,true);box(0,1,-.47,o.kind==='bench'?2.4:1.2,.7,.15,0x604249);if(o.kind==='armchair')for(const side of [-1,1])box(side*.6,.8,0,.2,.35,.95,0x6f4d55);return .7;
  case 'bunk':box(0,.4,0,2.7,.5,1.25,0x504863,true);box(0,.7,0,2.55,.2,1.15,0xb1aaa2);box(-.8,.85,0,.6,.1,.8,0xd4c8b2);return .8;
  case 'covered':box(0,.22,0,.8,.42,1.9,0xafa89b);cyl(0,.18,.85,.27,.35,0xafa89b);return .3;
  case 'fragment':for(let i=0;i<8;i++){const m=box(Math.sin(i*2)*.4,.04,Math.cos(i*1.7)*.4,.12,.035,.18,o.id==='fabric'?0x426c5d:0x772f37);m.rotation.y=i;}return .1;
  case 'tracks':for(let i=0;i<6;i++){box(i%2?.18:-.18,.025,-.85+i*.34,.15,.035,.3,0x222c33);if(i%2)box(.23,.045,-.72+i*.34,.08,.03,.07,0x52646b);}return .1;
  case 'clock':box(0,1.3,0,.7,2.6,.45,0x57402d,true);cyl(0,2.1,.28,.25,.07,0xc0b293).rotation.x=Math.PI/2;box(0,1.05,.25,.04,1.25,.03,0xb2a06b);return 1.5;
  case 'lever':box(0,.8,0,.65,1.6,.4,0x485958,true);box(0,1.5,.1,.08,.65,.08,0xbd9e55);box(0,1.8,.15,.4,.12,.14,0xa9654f);return 1.3;
  case 'valve':cyl(0,.5,0,.18,1,0x657976);cyl(0,1.08,0,.43,.12,0xa55845);box(0,1.16,0,.7,.06,.08,0xbaa76b);return 1.05;
  case 'fusebox':box(0,1,0,.9,1.3,.35,0x64766e,true);for(const dx of [-.25,0,.25]){box(dx,1.1,.2,.09,.5,.05,0xd2cbb2);box(dx,1.38,.24,.18,.07,.1,0xb49a50);}return 1.3;
  case 'bulkhead':box(0,1.5,0,.25,3,6.7,0x5c7074,true);box(-.17,1.1,-.35,.15,.18,.45,0xbbad73);return 1.3;
  case 'cashcase':box(0,.26,0,1,.5,.65,0x495664);box(0,.54,0,.38,.12,.12,0xb09f64);for(const a of [-.35,.35])box(a,.25,.34,.07,.45,.04,0xd4b361);return .4;
  case 'toolroll':table();box(0,.93,0,.8,.1,.5,0x586c7b);for(let i=0;i<5;i++)box(-.3+i*.15,1.02,0,.08,.08,.35,0x99a7a3);return 1;
  case 'utensils':table();box(0,.93,0,.75,.08,.5,0x967a4c);box(.15,1,-.05,.5,.025,.06,0xd4d7c9);cyl(-.2,1,0,.12,.1,0xbbaa4c);return 1;
  case 'ticket':table();box(0,.93,0,.65,.025,.43,0xd0c6a8);for(let i=0;i<4;i++)box(0,.948,-.13+i*.07,.45,.005,.017,0x4b5d60);return 1;
  default:return null;
 }
}
