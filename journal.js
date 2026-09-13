import {CASES} from './cases.js';

export function matchesEvidence(e,query){
 return query.trim().toLocaleLowerCase().split(/\s+/).every(word=>[e.title,e.text,e.object,e.room,e.sense].join(' ').toLocaleLowerCase().includes(word));
}

// Only known case and observation IDs are accepted. Imports never inject HTML or code.
export function readProgressFile(text){
 if(text.length>1000000)throw new Error('This file is too large to be a notebook backup.');
 const file=JSON.parse(text);
 if(file?.game!=='case-nonsense'||file.version!==1||!file.cases||typeof file.cases!=='object'||Array.isArray(file.cases))throw new Error('Choose a Case: Nonsense notebook backup.');
 const result={};
 for(const c of CASES){
  if(!Object.hasOwn(file.cases,c.id))continue;
  const p=file.cases[c.id];
  if(!p||!Array.isArray(p.evidence)||!Array.isArray(p.deductions)||!Array.isArray(p.opened))throw new Error('The notebook backup is incomplete.');
  const ids=new Set(c.objects.flatMap(o=>o.observations.map(e=>e.id))),objects=new Set(c.objects.map(o=>o.id));
  const keep=(values,valid)=>[...new Set((Array.isArray(values)?values:[]).filter(v=>typeof v==='string'&&valid.has(v)))];
  const evidence=keep(p.evidence,ids),recorded=new Set(evidence);
  result[c.id]={evidence,opened:keep(p.opened,objects),deductions:p.deductions.slice(0,200).filter(d=>d&&typeof d.text==='string').map(d=>({text:d.text.slice(0,1000),evidence:keep(d.evidence,recorded)})),notes:typeof p.notes==='string'?p.notes.slice(0,6000):'',draft:typeof p.draft==='string'?p.draft.slice(0,1000):'',selected:keep(p.selected,recorded),hints:Math.max(0,Math.min(3,Number.isInteger(p.hints)?p.hints:0)),completed:p.completed===true,attempts:[]};
 }
 if(!Object.keys(result).length)throw new Error('There are no recognized case files in this backup.');
 return result;
}

export function writeProgressFile(cases){return JSON.stringify({game:'case-nonsense',version:1,exportedAt:new Date().toISOString(),cases},null,2);}
