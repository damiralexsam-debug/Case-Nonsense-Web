// Leads are questions with places to start, not verdicts or a mandatory clue checklist.
export const LEADS={};
export function caseLeads(c,recorded){const found=new Set(recorded);return (c.leads||[]).map(lead=>({...lead,found:lead.evidence.filter(id=>found.has(id)).length,done:lead.evidence.every(id=>found.has(id))}));}
export function assessCase(c,answer,recorded,live={}){
 const known=new Set(recorded),observations=c.objects.flatMap(o=>o.observations);
 const support=[...new Set(answer.support)].filter(id=>known.has(id));
 const relevant=support.filter(id=>c.answer.evidence.includes(id)),unrelated=support.length-relevant.length;
 const senses=new Set(observations.filter(o=>relevant.includes(o.id)).map(o=>o.sense));
 const missing=[];
 if(live.escaped)missing.push('The intruder escaped. Retry the hunt from the notebook; your recorded evidence is kept.');
 if(answer.suspect!==c.answer.suspect)missing.push('Who: the selected person does not match the direct evidence. Compare the witness account and scene records.');
 if(answer.method!==c.answer.method)missing.push('What: the selected sequence conflicts with the physical evidence. Revisit the main scene or event recorder.');
 if(answer.motive!==c.answer.motive)missing.push('Why: the selected motive does not explain the document trail. Read the charity file, transfer order or fundraiser record.');
 for(const flag of c.requiredFlags||[])if(!live[flag])missing.push(flag==='detained'?'Detain the suspect: get close during the pursuit and press E, or present two direct links in the train.':'Rescue Jo: open baggage, speak to him with Ears, and lead him back to Ada.');
 if(relevant.length<2){const remaining=c.objects.flatMap(p=>p.observations.filter(e=>c.answer.evidence.includes(e.id)&&!relevant.includes(e.id)).map(e=>e.title+' ('+c.rooms[p.room].name+')')).slice(0,2);missing.push('Evidence: '+relevant.length+'/2 supporting observations selected. Try '+remaining.join(' or ')+'.');}
 return {solved:missing.length===0,relevant:relevant.length,senses:senses.size,unrelated,missing};
}
export const DEFAULT_KEYS=['Digit1','Digit2','Digit3','Digit4'];
export const SENSE_KEYS=[...DEFAULT_KEYS,...'ZXCVT YUHKNM'.replaceAll(' ','').split('').map(k=>'Key'+k)];
export const keyLabel=code=>code.replace(/^Digit|^Key/,'');
export function senseKeys(settings){const keys=settings.senseKeys;return Array.isArray(keys)&&keys.length===4&&new Set(keys).size===4&&keys.every(k=>SENSE_KEYS.includes(k))?keys:[...DEFAULT_KEYS];}
