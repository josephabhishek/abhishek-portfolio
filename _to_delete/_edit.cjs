const fs=require('fs');
process.chdir(process.env.HOME+"/mnt/Desktop/abhishek-portfolio-code");
function edit(f,fn){fs.writeFileSync(f,fn(fs.readFileSync(f,'utf8')));}
edit('app/about/page.tsx',s=>{
  s=s.replace('alt="Abhishek Joseph"','alt="Abhishek Joseph — illustrated avatar"');
  s=s.replace('sub="Developer × Marketer"',`sub="Artist's impression"`);
  const quip=`<p className="avatar-quip">\n              Yes, that&rsquo;s my headshot. I build serious websites &mdash; I just take my own photo a\n              lot less seriously. A real one&rsquo;s coming; the hair, unfortunately, is accurate.\n            </p>\n            `;
  if(!s.includes('avatar-quip')) s=s.replace('<div className="ab-quick">', quip+'<div className="ab-quick">');
  return s;
});
edit('app/page.tsx',s=>s.replace('sub="Developer × Marketer"',`sub="Artist's impression"`));
const css=`\n/* avatar self-aware caption */\n.avatar-quip{font-family:var(--serif);font-style:italic;font-size:.95rem;line-height:1.55;color:var(--ink-soft);margin:1.1rem 0 1.5rem}\n`;
if(!fs.readFileSync('app/globals.css','utf8').includes('avatar-quip')) fs.appendFileSync('app/globals.css',css);
console.log('EDITS_DONE');
