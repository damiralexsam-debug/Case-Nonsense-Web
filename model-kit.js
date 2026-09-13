import * as THREE from './vendor/three.module.js';
import {FURNITURE} from './models/furniture-data.js';
const cache=new Map();
export function furnitureGeometry(name){
 if(cache.has(name))return cache.get(name);
 const data=FURNITURE[name],g=new THREE.BufferGeometry();
 for(const key of ['position','normal','color'])g.setAttribute(key,new THREE.Float32BufferAttribute(data[key],3));
 g.computeBoundingBox();const b=g.boundingBox,center=b.getCenter(new THREE.Vector3()),size=b.getSize(new THREE.Vector3());
 g.translate(-center.x,-b.min.y,-center.z);g.scale(1/size.x,1/size.y,1/size.z);g.computeBoundingBox();g.computeBoundingSphere();cache.set(name,g);return g;
}
export function applyFurniture(mesh,name,position,size){
 mesh.geometry=furnitureGeometry(name);mesh.position.copy(position);mesh.scale.set(...size);
 mesh.material=new THREE.MeshStandardMaterial({vertexColors:true,color:0xbbb5a6,roughness:.86,metalness:.06});
 mesh.userData.eyeMaterial=mesh.material;mesh.userData.model=name;mesh.updateMatrixWorld(true);return mesh;
}
