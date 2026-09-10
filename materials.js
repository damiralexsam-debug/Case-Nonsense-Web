import * as THREE from './vendor/three.module.js';
// These are qualitative contact responses, not laboratory measurements or clue labels.
const BASE={
 stone:{temperature:19,texture:'fine grit',hardness:'rigid',roughness:.7,acoustic:'stone'},
 wood:{temperature:21,texture:'wood grain',hardness:'rigid',roughness:.45,acoustic:'wood'},
 metal:{temperature:17,texture:'smooth metal',hardness:'rigid',roughness:.08,acoustic:'metal'},
 glass:{temperature:15,texture:'smooth glass',hardness:'rigid',roughness:.02,acoustic:'glass'},
 cloth:{temperature:21,texture:'woven fibres',hardness:'yielding',roughness:.85,acoustic:'cloth'},
 paper:{temperature:21,texture:'fine paper fibres',hardness:'flexible',roughness:.35,acoustic:'cloth'},
 ceramic:{temperature:19,texture:'smooth ceramic',hardness:'rigid',roughness:.03,acoustic:'glass'}
};
export const ACOUSTICS={
 stone:{label:'dense, short impact',frequency:165,duration:.16,ripple:.01,absorb:.5},
 wood:{label:'dry wooden tap',frequency:260,duration:.24,ripple:.045,absorb:.38},
 metal:{label:'bright, lingering ring',frequency:740,duration:1.05,ripple:.018,absorb:.1},
 glass:{label:'high, thin ring',frequency:1450,duration:.65,ripple:.012,absorb:.12},
 cloth:{label:'soft, muffled thud',frequency:95,duration:.1,ripple:.09,absorb:.85},
 hollow:{label:'low, lingering resonance',frequency:105,duration:.85,ripple:.11,absorb:.2},
 packed:{label:'heavy, muted thud',frequency:85,duration:.19,ripple:.07,absorb:.7}
};
export function temperatureColor(t){const stops=[[5,'#327bff'],[15,'#53b8ff'],[21,'#75dec3'],[29,'#e5df75'],[38,'#ff9b46'],[50,'#ff4545']];let i=1;while(i<stops.length-1&&t>stops[i][0])i++;const [a,b]=[stops[i-1],stops[i]];return new THREE.Color(a[1]).lerp(new THREE.Color(b[1]),THREE.MathUtils.clamp((t-a[0])/(b[0]-a[0]),0,1));}
export const temperatureName=t=>t<12?'cold':t<19?'cool':t<25?'neutral':t<33?'faintly warm':t<43?'warm':'hot';
export function describeContact(p){return [temperatureName(p.temperature),p.texture,p.hardness,p.wetness||'dry',p.viscosity,p.sticky?'tacky':null,p.vibration?'fine vibration':null,p.sharp?'sharp edge':null,p.movement?'slight movement under pressure':null].filter(Boolean).join(' · ');}
export function assignMaterials(meshes,prop,caseId){
 const tableKinds=['paper','book','cup','radio','cloth','plant','bottles','mic'];
 const kindMap={paper:'paper',book:'paper',cup:'ceramic',rack:'cloth',radio:'metal',vent:'metal',oven:'metal',cloth:'cloth',sack:'cloth',trolley:'metal',window:'glass',bottles:'glass',sink:'metal',generator:'metal',mic:'metal',console:'metal',award:'metal'};
 meshes.forEach((mesh,i)=>{const support=tableKinds.includes(prop.kind)&&i<5;let base=support?(i===0?'wood':'metal'):(kindMap[prop.kind]||'wood');if(prop.kind==='rack'&&(i<3||i===6))base='metal';if(prop.kind==='window'&&[0,2,3].includes(i))base='metal';mesh.userData.physical={...BASE[base],caseId,propId:prop.id,support};mesh.userData.part=i;});
}
export function contactAt(hit){const mesh=hit.object,p={...(mesh.userData.physical||BASE.stone)},id=p.propId,i=mesh.userData.part,y=hit.point.y;if(p.support)return p;
 if(p.caseId==='last-service'){
  if(id==='cup')p.temperature=i===7?21:29;
  if(id==='oven'){p.temperature=i===2||i===3?17:39;}
  if(id==='cabinet'){p.acoustic=y<.55?'hollow':'wood';if(y<.28)p.movement=true;}
  if(id==='radio'){p.temperature=28;p.vibration=true;}
 }
 if(p.caseId==='glasshouse'){
  if(id==='vent'){p.temperature=15;if(y<.8){p.texture='gritty residue';p.wetness='greasy';p.viscosity='thick, slow smear';p.sticky=true;p.roughness=.85;}}
  if(id==='jacket'&&i===4){p.texture='gritty woven fibres';p.wetness='greasy';p.viscosity='thick, slow smear';p.sticky=true;}
  if(id==='pane'){p.temperature=12;p.sharp=i>=4;}
  if(id==='laboratory'){p.temperature=16;p.texture='crusted rim';p.roughness=.8;p.wetness='slightly damp';}
  if(id==='duct'){p.acoustic='hollow';p.vibration=true;}
  if(id==='clock'){p.temperature=27;p.vibration=true;}
  if(id==='generator'){p.temperature=17;p.vibration=false;}
  if(id==='cloth'){p.sharp=true;}
 }
 if(p.caseId==='ninth-minute'){
  if(id==='award'&&y>1.25&&y<1.34){p.wetness='wet';p.viscosity='thin, freely spreading film';p.texture='grit beneath the lip';p.roughness=.7;}
  if(id==='routing'||id==='clock'){p.temperature=28;p.vibration=true;}
  if(id==='console'){p.temperature=y>1.35?30:22;p.vibration=y>1.35;p.acoustic=y<.5?'hollow':'metal';if(y<.55)p.movement=true;}
  if(id==='locker'){p.acoustic=y<.65?'packed':'hollow';p.movement=y<.3;}
  if(id==='cloth'){p.temperature=17;p.texture='wet woven fibres over metal';p.wetness='wet';p.viscosity='thin, freely spreading film';p.roughness=.7;}
 }
 return p;
}
export const acousticAt=hit=>ACOUSTICS[contactAt(hit).acoustic]||ACOUSTICS.stone;
