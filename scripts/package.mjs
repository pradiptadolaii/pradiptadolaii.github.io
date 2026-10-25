import fs from 'node:fs';
fs.mkdirSync('_site',{recursive:true});
for(const p of ['index.html','copyright.html','assets','data'])fs.cpSync(p,`_site/${p}`,{recursive:true});
fs.writeFileSync('_site/.nojekyll','');
console.log('Packaged public site only; documentation, scripts, and backups excluded.');
