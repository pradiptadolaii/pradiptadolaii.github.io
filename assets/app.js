'use strict';
const theme=document.querySelector('#theme');
function syncTheme(){const dark=document.documentElement.dataset.theme==='dark';theme.setAttribute('aria-pressed',String(dark));theme.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`)}
syncTheme();
theme.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;try{localStorage.setItem('theme',t)}catch{}syncTheme()});
matchMedia('(prefers-color-scheme: dark)').addEventListener('change',e=>{let saved;try{saved=localStorage.getItem('theme')}catch{}if(!saved){document.documentElement.dataset.theme=e.matches?'dark':'light';syncTheme()}});
const menu=document.querySelector('#menu'),nav=document.querySelector('#navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open)});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
const dialog=document.querySelector('#preview'),content=document.querySelector('#preview-content');
document.querySelectorAll('[data-preview]').forEach(button=>button.addEventListener('click',e=>{e.preventDefault();document.querySelector('#preview-title').textContent=button.dataset.title;const src=button.dataset.preview,link=document.querySelector('#document-link');link.href=src;const pdf=/\.pdf$/i.test(src),el=document.createElement(pdf?'iframe':'img');el.src=src;if(pdf)el.title=button.dataset.title;else el.alt=button.dataset.title;content.replaceChildren(el);dialog.showModal()}));
document.querySelector('#close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});dialog.addEventListener('close',()=>content.replaceChildren());
const search=document.querySelector('#search'),category=document.querySelector('#category'),cards=[...document.querySelectorAll('.certificate')];
function filter(){let count=0;for(const card of cards){const show=(!category.value||card.dataset.category===category.value)&&card.textContent.toLowerCase().includes(search.value.trim().toLowerCase());card.hidden=!show;if(show)count++}document.querySelector('#count').textContent=count?`${count} credential${count===1?'':'s'}`:'No credentials match. Try another search or category.'}
search.addEventListener('input',filter);category.addEventListener('change',filter);
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){e.target.animate([{opacity:.55,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:500,easing:'ease-out'});observer.unobserve(e.target)}},{threshold:.08});document.querySelectorAll('main>section:not(.hero)').forEach(el=>observer.observe(el))}
const inquiryForm=document.querySelector('#inquiry-form');
let inquiryPending=false;
inquiryForm.addEventListener('submit',async event=>{
 event.preventDefault();if(inquiryPending||!inquiryForm.reportValidity())return;
 const status=document.querySelector('#inquiry-status'),button=document.querySelector('#inquiry-submit');
 const name=document.querySelector('#inquiry-name'),email=document.querySelector('#inquiry-email'),message=document.querySelector('#inquiry-message');
 if(!name.value.trim()){name.setCustomValidity('Please enter your name.');inquiryForm.reportValidity();return;}
 if(message.value.trim().length<10){message.setCustomValidity('Please include at least 10 characters of message context.');inquiryForm.reportValidity();return;}
 const honey=inquiryForm.elements.namedItem('_honey').value;if(honey)return;
 const payload={name:name.value.trim(),email:email.value.trim(),topic:document.querySelector('#inquiry-topic').value,message:message.value.trim(),submitted_at_utc:new Date().toISOString(),source_page:location.href,_honey:'',_subject:'Portfolio inquiry: '+document.querySelector('#inquiry-topic').value,_template:'table',_url:location.href};
 const controls=[...inquiryForm.querySelectorAll('input,select,textarea')];controls.forEach(control=>control.disabled=true);inquiryPending=true;button.disabled=true;button.setAttribute('aria-busy','true');const previous=button.innerHTML;button.textContent='Sending…';status.textContent='Submitting your inquiry…';status.classList.remove('is-error','is-success');
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
 try{const {submitInquiry}=await import('./inquiry-api.mjs');const result=await submitInquiry(payload,{signal:controller.signal});
  status.textContent=result.activationNeeded?'Your inquiry was received. Email delivery is waiting for the site owner to activate this form.':'Your inquiry has been submitted. Thank you for getting in touch.';status.classList.add('is-success');if(!result.activationNeeded)inquiryForm.reset();
 }catch{status.textContent='Your inquiry could not be confirmed. Your details are still here—please try again, or use the email link below.';status.classList.add('is-error');}
 finally{clearTimeout(timeout);controls.forEach(control=>control.disabled=false);inquiryPending=false;button.disabled=false;button.removeAttribute('aria-busy');button.innerHTML=previous;}
});
inquiryForm.addEventListener('input',()=>{document.querySelector('#inquiry-name').setCustomValidity('');document.querySelector('#inquiry-message').setCustomValidity('');});

const reportDialog=document.querySelector('#report-dialog'),reportForm=document.querySelector('#report-unlock-form'),reportStatus=document.querySelector('#report-status');
let reportDownloadUrl=null;
let reportUnlockGeneration=0;
function lockDiagnosticReport(){reportUnlockGeneration++;document.querySelector('#report-password').value='';document.querySelector('#report-gate').hidden=false;document.querySelector('#report-unlocked').hidden=true;document.querySelector('#report-viewer').removeAttribute('srcdoc');document.querySelector('#report-download').removeAttribute('href');if(reportDownloadUrl){URL.revokeObjectURL(reportDownloadUrl);reportDownloadUrl=null}reportStatus.textContent='';}
document.querySelector('#report-open').addEventListener('click',()=>{lockDiagnosticReport();reportDialog.showModal()});
document.querySelector('#report-close').addEventListener('click',()=>reportDialog.close());
document.querySelector('#report-relock').addEventListener('click',()=>{lockDiagnosticReport();document.querySelector('#report-password').focus()});
reportDialog.addEventListener('close',lockDiagnosticReport);
reportForm.addEventListener('submit',async event=>{
 event.preventDefault();const generation=reportUnlockGeneration;const input=document.querySelector('#report-password'),button=document.querySelector('#report-unlock');button.disabled=true;reportStatus.textContent='Unlocking report…';
 try{
  const response=await fetch('assets/private/diagnostic-report.encrypted.json',{cache:'no-store'});
  if(!response.ok)throw new Error('unavailable');
  const encrypted=await response.json();
  if(encrypted.version!==1||encrypted.algorithm!=='AES-GCM'||encrypted.kdf!=='PBKDF2'||encrypted.hash!=='SHA-256'||encrypted.iterations!==600000)throw new Error('unavailable');
  const bytes=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
  const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(input.value),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:bytes(encrypted.salt),iterations:encrypted.iterations,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
  const decrypted=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes(encrypted.iv)},key,bytes(encrypted.ciphertext));
  const report=JSON.parse(new TextDecoder().decode(decrypted));if(generation!==reportUnlockGeneration||!reportDialog.open)return;
  document.querySelector('#report-viewer').srcdoc=report.html;
  reportDownloadUrl=URL.createObjectURL(new Blob([bytes(report.docx)],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}));
  document.querySelector('#report-download').href=reportDownloadUrl;
  document.querySelector('#report-gate').hidden=true;document.querySelector('#report-unlocked').hidden=false;input.value='';reportStatus.textContent='Report unlocked for this viewing session.';
 }catch(error){if(generation!==reportUnlockGeneration||!reportDialog.open)return;input.value='';reportStatus.textContent=error.message==='unavailable'?'The protected report is currently unavailable. Please try again later.':'The password could not unlock this report. Please check it and try again.';input.focus()}
 finally{button.disabled=false}
});


