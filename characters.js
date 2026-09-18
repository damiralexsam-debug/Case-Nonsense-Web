import * as THREE from './vendor/three.module.js';
// Original articulated models: rounded silhouettes, pivoted limbs and a separate head.
export function buildCharacter(w,o,g){const meshes=[],skin=o.id==='sam'?0x986a50:o.id==='ada'?0xb98365:0xd0a487,coat=o.coat||0x526c75;
 const part=(parent,kind,x,y,z,sx,sy,sz,color)=>{const m=w.mesh(kind,x,y,z,sx,sy,sz,color,{parent,scents:o.scents||['rain']});m.userData.dynamic=true;m.userData.propId=o.id;m.userData.physical={temperature:32,texture:'woven clothing',hardness:'yielding',roughness:.6,acoustic:'cloth'};meshes.push(m);return m;};
 const joint=(parent,x,y,z)=>{const j=new THREE.Group();j.position.set(x,y,z);parent.add(j);return j;};
 const torso=joint(g,0,.92,0);const body=part(torso,'sphere',0,.16,0,.265,.39,.16,coat);body.geometry=new THREE.LatheGeometry([new THREE.Vector2(.23,-.32),new THREE.Vector2(.21,-.18),new THREE.Vector2(.22,.12),new THREE.Vector2(.29,.28),new THREE.Vector2(.19,.34)],20);body.scale.set(1,1,.65);body.userData.ownedGeometry=true;
 part(torso,'sphere',0,-.25,0,.225,.15,.14,0x353d48);part(torso,'cyl',0,.48,0,.065,.15,.065,skin);
 const head=joint(torso,0,.7,0);part(head,'sphere',0,0,0,.165,.225,.16,skin);part(head,'sphere',0,.13,-.025,.174,.135,.155,0x353239);part(head,'sphere',0,-.01,.158,.036,.047,.055,skin);
 for(const x of [-.062,.062]){part(head,'sphere',x,.033,.144,.029,.016,.017,0xede5d2);part(head,'sphere',x,.033,.158,.01,.011,.006,0x263442);part(head,'sphere',x,.077,.145,.033,.009,.012,0x453532);part(head,'sphere',Math.sign(x)*.168,-.018,0,.032,.058,.037,skin);}part(head,'sphere',0,-.093,.14,.049,.011,.01,0x915d55);
 for(const x of [-.095,.095]){const lapel=part(torso,'sphere',x,.21,.145,.06,.16,.018,0xaab2a6);lapel.rotation.z=x<0?-.45:.45;}for(let i=0;i<3;i++)part(torso,'sphere',0,.03-i*.09,.153,.016,.016,.012,0xd7bd83);
 const legs=[],knees=[],arms=[],elbows=[];
 for(const sign of [-1,1]){const hip=joint(g,sign*.13,.72,0);legs.push(hip);part(hip,'cyl',0,-.17,0,.082,.35,.082,0x353f4e);part(hip,'sphere',0,0,0,.09,.1,.1,0x353f4e);const knee=joint(hip,0,-.34,0);knees.push(knee);part(knee,'sphere',0,0,0,.081,.09,.08,0x353f4e);part(knee,'cyl',0,-.16,0,.07,.32,.07,0x353f4e);part(knee,'sphere',0,-.32,.055,.095,.08,.175,0x252f38);
 const shoulder=joint(torso,sign*.29,.25,0);arms.push(shoulder);part(shoulder,'sphere',0,0,0,.09,.1,.09,coat);part(shoulder,'cyl',0,-.15,0,.075,.3,.075,coat);const elbow=joint(shoulder,0,-.3,0);elbows.push(elbow);part(elbow,'sphere',0,0,0,.076,.08,.074,coat);part(elbow,'cyl',0,-.125,0,.062,.25,.062,coat);part(elbow,'sphere',0,-.29,0,.065,.095,.06,skin);elbow.rotation.x=-.12;
 }
 if(o.injured||o.culprit&&o.scents?.includes('blood'))part(elbows[0],'cyl',0,-.14,0,.066,.1,.066,0xd1c5b0);
 if(o.id==='voss'){part(head,'sphere',0,-.065,.149,.075,.022,.015,0xd8d1c0);for(const x of [-.065,.065])part(head,'cyl',x,.035,.161,.041,.006,.041,0x424952).rotation.x=Math.PI/2;}
 const gun=o.armed?part(elbows[1],'box',0,-.29,.14,.08,.11,.3,0x29353c):null;if(gun)gun.visible=false;
 return {meshes,torso,head,legs,knees,arms,elbows,gun};
}
export function animateCharacter(a,time,walking,pursuing,detained,viewer){const pace=pursuing?10:5.8,blend=a.stride=(a.stride||0)+(Number(walking)-(a.stride||0))*.16;
 a.legs.forEach((m,i)=>{const phase=time*pace+i*Math.PI;m.rotation.x=Math.sin(phase)*.44*blend;a.knees[i].rotation.x=Math.max(0,-Math.sin(phase))*.65*blend;});
 a.arms.forEach((m,i)=>{m.rotation.x=detained?-.6:-Math.sin(time*pace+i*Math.PI)*.32*blend;m.rotation.z=detained?(i?-.95:.95):(i?-.1:.1);a.elbows[i].rotation.x=detained?-.8:-.16;});
 a.torso.position.y=.92+Math.sin(time*pace*2)*.018*blend+Math.sin(time*1.7)*.006;a.torso.rotation.z=Math.sin(time*pace)*.025*blend;
 const relative=viewer.clone().sub(a.group.position);const look=Math.atan2(relative.x,relative.z)-a.group.rotation.y;const angle=Math.atan2(Math.sin(look),Math.cos(look));a.head.rotation.y=walking?Math.sin(time*.8)*.08:THREE.MathUtils.clamp(angle,-.6,.6);a.head.rotation.x=Math.sin(time*1.2)*.025;
 if(a.gun&&pursuing){a.arms[1].rotation.x=-1.15;a.elbows[1].rotation.x=-.25;}
}
