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
let inquiryText='';
inquiryForm.addEventListener('submit',event=>{
  event.preventDefault();
  if(!inquiryForm.reportValidity())return;
  const name=document.querySelector('#inquiry-name').value.trim();
  const email=document.querySelector('#inquiry-email').value.trim();
  const topic=document.querySelector('#inquiry-topic').value;
  const message=document.querySelector('#inquiry-message').value.trim();
  if(!name){document.querySelector('#inquiry-name').setCustomValidity('Please enter your name.');inquiryForm.reportValidity();return;}
  if(message.length<10){document.querySelector('#inquiry-message').setCustomValidity('Please include at least 10 characters of message context.');inquiryForm.reportValidity();return;}
  inquiryText=`Hello Pradipta,\n\n${message}\n\nFrom: ${name}\nReply email: ${email}\nTopic: ${topic}`;
  document.querySelector('#inquiry-send').href=`mailto:ipradiptadolai@gmail.com?subject=${encodeURIComponent(topic+' — '+name)}&body=${encodeURIComponent(inquiryText)}`;
  document.querySelector('#inquiry-draft').hidden=false;
  document.querySelector('#inquiry-status').textContent='Your inquiry is prepared. Open your email app to review and send it.';
});
inquiryForm.addEventListener('input',()=>{document.querySelector('#inquiry-name').setCustomValidity('');document.querySelector('#inquiry-message').setCustomValidity('');document.querySelector('#inquiry-draft').hidden=true;inquiryText='';});
inquiryForm.addEventListener('change',()=>{document.querySelector('#inquiry-draft').hidden=true;inquiryText='';});
document.querySelector('#inquiry-copy').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(inquiryText);document.querySelector('#inquiry-status').textContent='Inquiry copied. Paste it into an email to ipradiptadolai@gmail.com.'}catch{document.querySelector('#inquiry-status').textContent='Copy is unavailable in this browser. Use Open email app to continue.'}});

