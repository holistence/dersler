// Kullanım: node validate.cjs content/ge-02.js  — sayfayı jsdom'da çalıştırır, yapı ve içerik kurallarını denetler.
const {JSDOM}=require('jsdom');const fs=require('fs');
const engine=fs.readFileSync(__dirname+'/engine/ders.js','utf8');
let bad=0;
for(const f of process.argv.slice(2)){
  const src=fs.readFileSync(f,'utf8');const errs=[];const warn=[];
  const dom=new JSDOM(`<body><script>${src}</script><script>${engine}</script></body>`,{runScripts:'dangerously',beforeParse(w){w.matchMedia=()=>({matches:false});w.addEventListener('error',e=>errs.push(e.message));}});
  const W=dom.window.WEEK;
  setTimeout(()=>{
    const d=dom.window.document;
    if(!W){errs.push('window.WEEK yok');}
    else{
      for(const k of ['id','code','course','week','total','author','eyebrow','title','intro','goals','sections','refs','next'])if(W[k]===undefined)errs.push('eksik alan: '+k);
      const blocks=W.sections.flatMap(s=>s.blocks);
      const quiz=blocks.find(b=>b.t==='quiz');
      if(!quiz)errs.push('quiz yok');else{
        if(quiz.items.length<8)errs.push('quiz en az 8 soru olmalı: '+quiz.items.length);
        quiz.items.forEach((q,i)=>{if(!(q.a>=0&&q.a<q.o.length))errs.push(`soru ${i+1}: a geçersiz`);if(!q.e)errs.push(`soru ${i+1}: açıklama yok`);
          const L=q.o.map(o=>o.length),mx=Math.max(...L);if(L[q.a]===mx&&mx>1.6*L.filter((_,j)=>j!==q.a).reduce((a,b)=>a+b,0)/(L.length-1))warn.push(`soru ${i+1}: doğru seçenek belirgin biçimde en uzun`);});
      }
      const cards=blocks.find(b=>b.t==='cards');if(!cards||cards.items.length<6)errs.push('en az 6 kavram kartı');
      const wid=blocks.filter(b=>b.t==='widget').length,ch=blocks.filter(b=>b.t==='choice').length;
      if(wid<2)errs.push('en az 2 widget (calc, supplyDemand, classify, chart, realIncome, axis, framing, reversal, sdg)');
      if(wid+ch<3)errs.push('toplam etkileşim (widget+choice) en az 3');
      if(W.goals.length<3)errs.push('en az 3 öğrenme hedefi');
      if(!d.querySelector('#quiz .q'))errs.push('quiz render edilmedi');
      if(d.querySelectorAll('section.sec').length!==W.sections.length+1)errs.push('bölüm render sayısı tutmuyor');
      const words=(W.intro+' '+blocks.map(b=>[b.html,(b.items||[]).map(i=>typeof i==='object'?JSON.stringify(i):i).join(' ')].join(' ')).join(' ')).replace(/<[^>]+>/g,' ').split(/\s+/).length;
      if(words<1000)warn.push('içerik kısa görünüyor (~'+words+' kelime)');
      console.log(`${f}: ${errs.length?'HATA':'OK'} · ${W.sections.length} bölüm · ${wid} widget · ${ch} choice · ~${words} kelime`);
    }
    errs.forEach(e=>console.log('  HATA '+e));warn.forEach(e=>console.log('  uyarı '+e));
    if(errs.length)bad++;
  },300);
}
setTimeout(()=>process.exit(bad?1:0),800);
