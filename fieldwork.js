// Leads are questions with places to start, not verdicts or a mandatory clue checklist.
export const LEADS={};
export function caseLeads(c,recorded){const found=new Set(recorded);return (c.leads||[]).map(lead=>({...lead,found:lead.evidence.filter(id=>found.has(id)).length,done:lead.evidence.every(id=>found.has(id))}));}
export function assessCase(c,answer,recorded,live={}){
 const known=new Set(recorded),observations=c.objects.flatMap(o=>o.observations);
 const support=[...new Set(answer.support)].filter(id=>known.has(id));
 const relevant=support.filter(id=>c.answer.evidence.includes(id)),unrelated=support.length-relevant.length;
 const senses=new Set(observations.filter(o=>relevant.includes(o.id)).map(o=>o.sense));
 const correct=answer.suspect===c.answer.suspect&&answer.method===c.answer.method&&answer.motive===c.answer.motive;
 return {solved:correct&&(c.requiredFlags||[]).every(k=>live[k])&&relevant.length>=4&&senses.size>=2&&unrelated<=2,relevant:relevant.length,senses:senses.size,unrelated};
}
export const DEFAULT_KEYS=['Digit1','Digit2','Digit3','Digit4'];
export const SENSE_KEYS=[...DEFAULT_KEYS,...'ZXCVT YUHKNM'.replaceAll(' ','').split('').map(k=>'Key'+k)];
export const keyLabel=code=>code.replace(/^Digit|^Key/,'');
export function senseKeys(settings){const keys=settings.senseKeys;return Array.isArray(keys)&&keys.length===4&&new Set(keys).size===4&&keys.every(k=>SENSE_KEYS.includes(k))?keys:[...DEFAULT_KEYS];}
