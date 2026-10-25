export const inquiryEndpoint='https://formsubmit.co/ajax/ipradiptadolai@gmail.com';
export async function submitInquiry(payload,{fetchImpl=globalThis.fetch,signal}={}){
 const response=await fetchImpl(inquiryEndpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload),signal});
 if(!response.ok)throw new Error('Inquiry service returned HTTP '+response.status);
 const result=await response.json(),message=String(result.message||'');
 const activationNeeded=/activat|confirm.{0,20}email/i.test(message);
 if(activationNeeded)return {activationNeeded:true,message};
 if(result.success!==true&&result.success!=='true')throw new Error(message||'Inquiry service did not confirm acceptance');
 return {activationNeeded:false,message};
}
