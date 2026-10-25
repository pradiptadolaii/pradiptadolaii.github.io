import fs from 'node:fs';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
const html=fs.readFileSync('index.html','utf8');
const exists=p=>assert.ok(fs.existsSync(p),`Missing asset ${p}`);
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
let links=0;
for(const m of html.matchAll(/(?:href|src|data-preview)="([^"]+)"/g)){const p=m[1];if(p.startsWith('#'))assert.ok(ids.has(p.slice(1)),`Missing anchor ${p}`);else if(!/^(https?:|mailto:|tel:)/.test(p))exists(p.split(/[?#]/)[0]);links++;}
const css=fs.readFileSync('assets/style.css','utf8');for(const m of css.matchAll(/url\('([^']+)'\)/g))exists('assets/'+m[1]);
assert.ok(!html.includes('base64,'),'Embedded asset found');
assert.ok(!html.includes('pradiptaadolai@gmail.com'),'Obsolete email found');
assert.equal([...html.matchAll(/<h1[ >]/g)].length,1);
const certs=JSON.parse(fs.readFileSync('data/certificates.json','utf8'));assert.equal(certs.length,23);
for(const c of certs){exists(c.file);exists(c.thumbnail);assert.ok(html.includes(c.file));if(c.verification)assert.ok(!c.verification.includes('Courserahas'),'Malformed issuer URL');}
const inventory=JSON.parse(fs.readFileSync('docs/asset-inventory.json','utf8'));for(const x of inventory)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(x.file)).digest('hex'),x.sha256,`Altered certificate ${x.file}`);
assert.equal(fs.readFileSync('assets/resume/Pradipta_Dolai_Resume.pdf').subarray(0,5).toString(),'%PDF-');
for(const m of html.matchAll(/<a [^>]*target="_blank"[^>]*>/g))assert.ok(m[0].includes('noopener'));
const locked=JSON.parse(fs.readFileSync('assets/private/diagnostic-report.encrypted.json','utf8'));
assert.deepEqual(Object.keys(locked).sort(),['algorithm','ciphertext','hash','iterations','iv','kdf','salt','version'].sort());
assert.equal(locked.algorithm,'AES-GCM');assert.equal(locked.kdf,'PBKDF2');assert.equal(locked.iterations,600000);assert.equal(Buffer.from(locked.salt,'base64').length,16);assert.equal(Buffer.from(locked.iv,'base64').length,12);assert.ok(Buffer.from(locked.ciphertext,'base64').length>16);
function inspectPublic(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const path=dir+'/'+entry.name;if(entry.isDirectory())inspectPublic(path);else assert.ok(!/Diagnostic_Report_Final\.(docx|html|pdf)$/i.test(path),'Plaintext diagnostic report must not be deployed');}}
inspectPublic('assets');
await import('./test-inquiry.mjs');
await import('./test-medorbit.mjs');
console.log(`PASS: ${links} local/anchor/external references inspected; 23 certificate hashes, thumbnails, resume signature, font paths, content checks.`);
