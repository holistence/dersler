/* Ders sayfası motoru: window.WEEK nesnesini okuyup sayfayı kurar. Yeni hafta = yeni içerik dosyası; bu dosya değişmez. */
function __ders(){
const W=window.WEEK, $=s=>document.querySelector(s);
const KEY="ders-"+W.id;
const store={get(){try{return JSON.parse(localStorage.getItem(KEY))||{}}catch(e){return{}}},set(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch(e){}}};
const st=Object.assign({done:{},ans:{}},store.get());
const save=()=>store.set(st);
const pad=n=>String(n).padStart(2,"0");
const fmt=(x,d=1)=>x.toLocaleString("tr-TR",{minimumFractionDigits:d,maximumFractionDigits:d});

/* ---------- Bileşenler ---------- */
const WIDGETS={
  realIncome(el,o){
    o=Object.assign({z:30,p:40},o);
    el.innerHTML=`<div class="box"><div class="lbl">Hesaplayıcı · Reel gelir</div><div class="grid2">
      <label class="field">Maaş artışı (nominal) <output id="ri-zo"></output><input id="ri-z" type="range" min="0" max="100" value="${o.z}"></label>
      <label class="field">Enflasyon <output id="ri-po"></output><input id="ri-p" type="range" min="0" max="100" value="${o.p}"></label></div>
      <div class="result" id="ri-r"></div></div>`;
    const z=el.querySelector("#ri-z"),p=el.querySelector("#ri-p");
    const f=()=>{const zz=+z.value,pp=+p.value,r=((1+zz/100)/(1+pp/100)-1)*100;
      el.querySelector("#ri-zo").textContent="%"+zz;el.querySelector("#ri-po").textContent="%"+pp;
      el.querySelector("#ri-r").innerHTML=`Reel gelirdeki değişim: <b>${r>=0?"+":"−"}%${fmt(Math.abs(r))}</b><br><span class="note">Hesap: (1 + ${zz}/100) ÷ (1 + ${pp}/100) − 1. Basit çıkarma (${zz} − ${pp} = ${zz-pp}) yalnızca küçük oranlarda doğruya yakın sonuç verir.</span>`;};
    z.oninput=p.oninput=f;f();
  },
  axis(el){
    el.innerHTML=`<div class="box chart"><div class="lbl">Grafik · Aynı veri, iki görünüm</div>
      <div class="seg" role="group" aria-label="Eksen başlangıcı"><button type="button" data-m="94" aria-pressed="true">Y ekseni 94'ten başlıyor</button><button type="button" data-m="0" aria-pressed="false">Y ekseni 0'dan başlıyor</button></div>
      <div id="ax-svg"></div><p class="note" id="ax-n"></p></div>`;
    const draw=m=>{
      const W0=520,H=260,L=56,B=36,T=16,R=16,v=[95,100],max=101,min=+m;
      const y=val=>T+(H-T-B)*(1-(val-min)/(max-min));
      const ticks=min?[94,96,98,100]:[0,25,50,75,100];
      let s=`<svg viewBox="0 0 ${W0} ${H}" role="img" aria-label="Kâr grafiği">`;
      ticks.forEach(t=>{s+=`<line x1="${L}" x2="${W0-R}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)"/><text x="${L-8}" y="${y(t)+4}" text-anchor="end" font-size="12" fill="var(--muted)" font-family="var(--f-mono)">${t}</text>`});
      ["2024","2025"].forEach((lab,i)=>{const x=L+60+i*200,w=120;
        s+=`<rect x="${x}" y="${y(v[i])}" width="${w}" height="${H-B-y(v[i])}" fill="${i?"var(--mustard)":"var(--strait)"}" rx="3"/>
        <text x="${x+w/2}" y="${y(v[i])-6}" text-anchor="middle" font-size="13" fill="var(--ink)" font-family="var(--f-mono)">${v[i]} mn TL</text>
        <text x="${x+w/2}" y="${H-12}" text-anchor="middle" font-size="12" fill="var(--muted)">${lab}</text>`});
      s+=`</svg>`;el.querySelector("#ax-svg").innerHTML=s;
      el.querySelector("#ax-n").textContent=min?"Eksen 94'ten başlayınca 5 milyon TL'lik (%5,3) artış, kâr ikiye katlanmış gibi görünüyor.":"Eksen 0'dan başlayınca aynı artışın toplam içindeki gerçek, mütevazı payı görünüyor.";
      el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));
    };
    el.querySelector(".seg").onclick=e=>{const b=e.target.closest("button");if(b)draw(b.dataset.m)};draw("94");
  },
  framing(el){
    const F=[
      {k:"g",h:"Kazanım çerçevesi",q:"400 kişinin hayatı tehlikede. Soru şöyle soruluyor: 200 kişiyi nasıl kurtarırız?",a:"Seçenek A: 200 kişi kesinlikle kurtulur.",b:"Seçenek B: %50 olasılıkla 400 kişi kurtulur, %50 olasılıkla kimse kurtulmaz."},
      {k:"l",h:"Kayıp çerçevesi",q:"Aynı 400 kişi. Bu kez soru şöyle: kaç kişinin ölmesini engelleriz?",a:"Seçenek C: 200 kişi kesinlikle ölür.",b:"Seçenek D: %50 olasılıkla kimse ölmez, %50 olasılıkla 400 kişi ölür."}];
    const pick={};
    el.innerHTML=`<div class="box"><div class="lbl">Deney · Çerçeveleme</div>${F.map(f=>`<div style="margin-bottom:14px"><h3>${f.h}</h3><p style="margin:0">${f.q}</p>
      <div class="opts2" data-f="${f.k}"><button type="button" data-v="a">${f.a}</button><button type="button" data-v="b">${f.b}</button></div></div>`).join("")}<div id="fr-r" class="result" hidden></div></div>`;
    el.querySelectorAll(".opts2").forEach(g=>g.onclick=e=>{const b=e.target.closest("button");if(!b)return;pick[g.dataset.f]=b.dataset.v;
      g.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));
      if(pick.g&&pick.l){const r=el.querySelector("#fr-r");r.hidden=false;
        const same=pick.g===pick.l;
        r.innerHTML=`A ile C, B ile D aynı sonucu anlatır; beklenen değer dördünde de 200 kişidir. ${same?"Siz iki çerçevede de tutarlı seçim yaptınız.":"Siz çerçeve değişince tercihinizi değiştirdiniz; deneylerdeki çoğunluk da böyle davranıyor."} Kahneman ve Tversky'nin deneylerinde katılımcıların çoğu kazanım çerçevesinde kesin seçeneği (A), kayıp çerçevesinde riskli seçeneği (D) seçer.`;}});
  },
  reversal(el){
    const Q=[["Hangisini tercih edersiniz?","Bugün 100 TL","Yarın 110 TL"],["Hangisini tercih edersiniz?","365 gün sonra 100 TL","366 gün sonra 110 TL"]];
    const pick={};
    el.innerHTML=`<div class="box"><div class="lbl">Deney · Zaman tercihi</div>${Q.map((q,i)=>`<p style="margin:8px 0 0">${i+1}. ${q[0]}</p><div class="opts2" data-q="${i}"><button type="button" data-v="a">${q[1]}</button><button type="button" data-v="b">${q[2]}</button></div>`).join("")}<div class="result" id="rv-r" hidden></div></div>`;
    el.querySelectorAll(".opts2").forEach(g=>g.onclick=e=>{const b=e.target.closest("button");if(!b)return;pick[g.dataset.q]=b.dataset.v;
      g.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",x===b));
      if(pick[0]&&pick[1]){const r=el.querySelector("#rv-r");r.hidden=false;
        r.innerHTML=(pick[0]==="a"&&pick[1]==="b")?"İki soruda da bekleme süresi aynı: bir gün. Siz yakın tarihte beklemeyi reddedip uzak tarihte kabul ettiniz. Bu tercihin tersine dönmesi <b>bugün yanlılığının</b> (hiperbolik iskonto) tipik örneğidir.":"İki soruda da bekleme süresi bir gün. Çoğu kişi ilk soruda bugünü, ikinci soruda 366. günü seçer; yani yakın gelecekte sabırsız, uzak gelecekte sabırlıdır. Buna <b>bugün yanlılığı</b> denir.";}});
  },
  sdg(el,o){
    const P=o.groups,G=o.goals;let gf="all";
    const draw=()=>{
      el.innerHTML=`<div class="legend" role="group" aria-label="Boyut filtresi"><button type="button" data-g="all" aria-pressed="${gf==="all"}">Tümü · ${G.length}</button>${Object.entries(P).map(([k,v])=>`<button type="button" data-g="${k}" aria-pressed="${gf===k}" style="--c:${v.c}"><i></i>${v.n} · ${G.filter(g=>g[1]===k).length}</button>`).join("")}</div>
      <div class="sdg">${G.map(([n,k],i)=>`<div class="g ${gf!=="all"&&gf!==k?"dim":""}" style="--c:${P[k].c}"><b>SKA ${i+1}</b>${n}</div>`).join("")}</div>${o.note?`<p class="note">${o.note}</p>`:""}`;
      el.querySelector(".legend").onclick=e=>{const b=e.target.closest("button");if(b){gf=b.dataset.g;draw();}};
    };draw();
  }
  ,
  /* Genel hesaplayıcı: inputs = [{id,label,min,max,step,value,unit}], formula = JS ifadesi (girdiler id adıyla), result = "{r}" yer tutuculu metin */
  calc(el,o){
    const id="w"+Math.random().toString(36).slice(2,7);
    el.innerHTML=`<div class="box"><div class="lbl">Hesaplayıcı · ${o.title||""}</div><div class="grid2">${o.inputs.map(i=>`<label class="field">${i.label} <output id="${id}-${i.id}-o"></output><input id="${id}-${i.id}" type="range" min="${i.min}" max="${i.max}" step="${i.step||1}" value="${i.value}"></label>`).join("")}</div><div class="result" id="${id}--res"></div>${o.note?`<p class="note">${o.note}</p>`:""}</div>`;
    const f=new Function(...o.inputs.map(i=>i.id),"return ("+o.formula+");");
    const run=()=>{const v=o.inputs.map(i=>+el.querySelector(`#${id}-${i.id}`).value);
      o.inputs.forEach((i,k)=>el.querySelector(`#${id}-${i.id}-o`).textContent=(i.pre||"")+v[k].toLocaleString("tr-TR")+(i.unit||""));
      let r=f(...v);const d=o.digits??1;const txt=typeof r==="number"?(isFinite(r)?r.toLocaleString("tr-TR",{minimumFractionDigits:d,maximumFractionDigits:d}):"tanımsız"):r;
      el.querySelector(`#${id}--res`).innerHTML=o.result.replace("{r}",`<b>${txt}</b>`);};
    el.querySelectorAll("input").forEach(x=>x.oninput=run);run();
  },
  /* Arz–talep: doğrusal talep P = a − bQ, arz P = c + dQ; kaydırma sürgüleri */
  supplyDemand(el,o){
    o=Object.assign({a:100,b:1,c:10,d:1,title:"Arz ve talep"},o);const id="w"+Math.random().toString(36).slice(2,7);
    el.innerHTML=`<div class="box chart"><div class="lbl">Grafik · ${o.title}</div><div class="grid2">
      <label class="field">Talep kayması <output id="${id}-dto"></output><input id="${id}-dt" type="range" min="-30" max="30" value="0"></label>
      <label class="field">Arz kayması <output id="${id}-sto"></output><input id="${id}-st" type="range" min="-30" max="30" value="0"></label></div>
      <div id="${id}-svg"></div><div class="result" id="${id}--res"></div>${o.note?`<p class="note">${o.note}</p>`:""}</div>`;
    const draw=()=>{const dt=+el.querySelector(`#${id}-dt`).value,stv=+el.querySelector(`#${id}-st`).value;
      el.querySelector(`#${id}-dto`).textContent=(dt>0?"+":"")+dt;el.querySelector(`#${id}-sto`).textContent=(stv>0?"+":"")+stv;
      const a=o.a+dt,c=o.c-stv,b=o.b,d=o.d;const Q=Math.max(0,(a-c)/(b+d)),P=a-b*Q;
      const Q0=(o.a-o.c)/(b+d),P0=o.a-b*Q0;
      const W0=520,H=300,L=44,B=34,T=12,R=16,qm=Math.max(o.a/b,100)*1.0,pm=o.a*1.15;
      const x=q=>L+(W0-L-R)*q/qm,y=p=>T+(H-T-B)*(1-p/pm);
      const line=(p1,q1,p2,q2,col,w,dash)=>`<line x1="${x(q1)}" y1="${y(p1)}" x2="${x(q2)}" y2="${y(p2)}" stroke="${col}" stroke-width="${w}" ${dash?'stroke-dasharray="5 4"':""}/>`;
      const clip=(p0,slope,isD)=>{let q2=isD?Math.min(qm,p0/slope):Math.min(qm,(pm-p0)/slope);return [p0,0,p0+(isD?-slope:slope)*q2,q2];};
      let s=`<svg viewBox="0 0 ${W0} ${H}" role="img" aria-label="Arz talep grafiği">`;
      s+=`<line x1="${L}" y1="${T}" x2="${L}" y2="${H-B}" stroke="var(--muted)"/><line x1="${L}" y1="${H-B}" x2="${W0-R}" y2="${H-B}" stroke="var(--muted)"/>`;
      s+=`<text x="${L-6}" y="${T+10}" text-anchor="end" font-size="12" fill="var(--muted)">P</text><text x="${W0-R}" y="${H-10}" text-anchor="end" font-size="12" fill="var(--muted)">Q</text>`;
      if(dt||stv){const[d1,d2,d3,d4]=clip(o.a,b,1),[s1,s2,s3,s4]=clip(o.c,d,0);s+=line(d1,d2,d3,d4,"var(--line)",2,1)+line(s1,s2,s3,s4,"var(--line)",2,1);}
      const[d1,d2,d3,d4]=clip(a,b,1),[s1,s2,s3,s4]=clip(c,d,0);
      s+=line(d1,d2,d3,d4,"var(--strait)",2.5)+line(s1,s2,s3,s4,"var(--mustard)",2.5);
      s+=`<line x1="${L}" y1="${y(P)}" x2="${x(Q)}" y2="${y(P)}" stroke="var(--muted)" stroke-dasharray="3 3"/><line x1="${x(Q)}" y1="${y(P)}" x2="${x(Q)}" y2="${H-B}" stroke="var(--muted)" stroke-dasharray="3 3"/>`;
      s+=`<circle cx="${x(Q)}" cy="${y(P)}" r="5" fill="var(--ink)"/>`;
      s+=`<text x="${x(d4)-4}" y="${y(d3)-6}" text-anchor="end" font-size="12" fill="var(--strait)">Talep</text><text x="${x(s4)-4}" y="${y(s3)+14}" text-anchor="end" font-size="12" fill="var(--mustard)">Arz</text></svg>`;
      el.querySelector(`#${id}-svg`).innerHTML=s;
      const f=v=>v.toLocaleString("tr-TR",{maximumFractionDigits:1});
      el.querySelector(`#${id}--res`).innerHTML=`Denge fiyatı <b>${f(P)}</b> (başlangıç ${f(P0)}) · Denge miktarı <b>${f(Q)}</b> (başlangıç ${f(Q0)})`;};
    el.querySelectorAll("input").forEach(i=>i.oninput=draw);draw();
  },
  /* Sınıflandırma alıştırması: items=[[metin, doğruKategoriIndex]], cats=[...] */
  classify(el,o){
    const ans={};
    const draw=(check)=>{
      el.innerHTML=`<div class="box"><div class="lbl">Alıştırma · ${o.title||"Sınıflandırın"}</div>${o.items.map(([t,c],i)=>`<div style="display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;padding:8px 0;border-top:1px solid var(--line)"><span style="flex:1 1 220px;min-width:0">${t}</span><span class="seg" style="margin:0">${o.cats.map((k,j)=>`<button type="button" data-i="${i}" data-j="${j}" aria-pressed="${ans[i]===j}" style="${check&&ans[i]===j?(j===c?"background:var(--ok-soft);color:var(--ink)":"background:var(--bad-soft);color:var(--ink)"):""}">${k}</button>`).join("")}</span></div>`).join("")}
        <div style="display:flex;gap:10px;align-items:center;margin-top:10px"><button type="button" class="btn" data-check="1">Kontrol et</button><span class="note" style="margin:0">${check?`${o.items.filter(([t,c],i)=>ans[i]===c).length}/${o.items.length} doğru`:""}</span></div>${check&&o.note?`<p class="note">${o.note}</p>`:""}</div>`;
      el.onclick=e=>{const b=e.target.closest("button");if(!b)return;if(b.dataset.check){draw(true);return;}if(b.dataset.i!==undefined){ans[b.dataset.i]=+b.dataset.j;draw(false);}};
    };draw(false);
  },
  /* Basit çubuk/çizgi grafik: labels=[...], series=[{name,values}], unit, kind:"bar"|"line", source */
  chart(el,o){
    const W0=560,H=280,L=52,B=40,T=14,R=14,all=o.series.flatMap(s=>s.values),max=Math.max(...all)*1.1,min=Math.min(0,...all);
    const n=o.labels.length,cw=(W0-L-R)/n,y=v=>T+(H-T-B)*(1-(v-min)/(max-min)),cols=["var(--strait)","var(--mustard)","var(--c2)","var(--c1)"];
    const nice=[0,.25,.5,.75,1].map(k=>min+(max-min)*k);
    let s=`<svg viewBox="0 0 ${W0} ${H}" role="img" aria-label="${o.title||"Grafik"}">`;
    nice.forEach(t=>s+=`<line x1="${L}" x2="${W0-R}" y1="${y(t)}" y2="${y(t)}" stroke="var(--line)"/><text x="${L-6}" y="${y(t)+4}" text-anchor="end" font-size="11" fill="var(--muted)" font-family="var(--f-mono)">${Math.round(t).toLocaleString("tr-TR")}</text>`);
    o.labels.forEach((l,i)=>s+=`<text x="${L+cw*i+cw/2}" y="${H-14}" text-anchor="middle" font-size="11" fill="var(--muted)">${l}</text>`);
    o.series.forEach((se,k)=>{
      if(o.kind==="line"){s+=`<polyline fill="none" stroke="${cols[k]}" stroke-width="2.5" points="${se.values.map((v,i)=>`${L+cw*i+cw/2},${y(v)}`).join(" ")}"/>`;se.values.forEach((v,i)=>s+=`<circle cx="${L+cw*i+cw/2}" cy="${y(v)}" r="3.5" fill="${cols[k]}"><title>${o.labels[i]}: ${v}</title></circle>`);}
      else{const bw=cw*.7/o.series.length;se.values.forEach((v,i)=>s+=`<rect x="${L+cw*i+cw*.15+bw*k}" y="${y(Math.max(v,0))}" width="${bw}" height="${Math.abs(y(v)-y(0))}" fill="${cols[k]}" rx="2"><title>${o.labels[i]}: ${v}</title></rect>`);}
    });
    s+=`</svg>`;
    el.innerHTML=`<div class="box chart"><div class="lbl">Grafik · ${o.title||""}${o.unit?` (${o.unit})`:""}</div>${o.series.length>1?`<div class="legend" style="margin:0 0 8px">${o.series.map((se,k)=>`<span style="display:inline-flex;align-items:center;gap:6px;font-size:.84rem"><i style="width:10px;height:10px;border-radius:2px;background:${cols[k]};display:inline-block"></i>${se.name}</span>`).join("")}</div>`:""}${s}${o.source?`<p class="note">Kaynak: ${o.source}</p>`:""}</div>`;
  }
};

/* ---------- Bloklar ---------- */
let quizRef=null;
function block(b){
  const d=document.createElement("div");
  switch(b.t){
    case"p":d.innerHTML=`<p>${b.html}</p>`;break;
    case"html":d.innerHTML=b.html;break;
    case"def":d.innerHTML=`<p class="def">${b.html}${b.src?`<small>${b.src}</small>`:""}</p>`;break;
    case"list":d.innerHTML=`<ul>${b.items.map(i=>`<li>${i}</li>`).join("")}</ul>`;break;
    case"box":d.innerHTML=`<div class="box">${b.lbl?`<div class="lbl">${b.lbl}</div>`:""}${b.html}</div>`;break;
    case"table":d.innerHTML=`<div class="tbl"><table><thead><tr>${b.head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;break;
    case"timeline":d.innerHTML=`<div class="tl">${b.items.map(([y,h,s,k])=>`<div class="tl-row ${k?"key":""}"><div class="tl-y">${y}</div><div class="tl-dot"></div><div class="tl-b"><b>${h}</b><span>${s}</span></div></div>`).join("")}</div>`;break;
    case"choice":{let cur=b.start||0;const cols=["var(--c4)","var(--c3)","var(--c1)","var(--c2)"];
      const draw=()=>{d.innerHTML=`<div class="choice" role="group">${b.items.map((it,i)=>`<button type="button" data-i="${i}" aria-pressed="${i===cur}" style="--c:${it.c||cols[i%4]}"><span class="sw"></span><b>${it.label}</b></button>`).join("")}</div>
        <div class="box choice-text" aria-live="polite">${b.items[cur].title?`<h3>${b.items[cur].title}</h3>`:""}<p>${b.items[cur].body}</p>${b.items[cur].ex?`<p class="ex">${b.items[cur].ex}</p>`:""}</div>`;
        d.querySelector(".choice").onclick=e=>{const x=e.target.closest("button");if(x){cur=+x.dataset.i;draw();}};};draw();break;}
    case"cards":d.innerHTML=`<div class="cards">${b.items.map(([f],i)=>`<button type="button" class="card" data-c="${i}" aria-pressed="false"><span class="front">${f}</span><span class="hint">Çevirmek için dokunun</span></button>`).join("")}</div>`;
      d.onclick=e=>{const c=e.target.closest(".card");if(!c)return;const i=+c.dataset.c,o=c.getAttribute("aria-pressed")!=="true";c.setAttribute("aria-pressed",o);
        c.innerHTML=o?`<span class="back">${b.items[i][1]}</span><span class="hint">${b.items[i][0]}</span>`:`<span class="front">${b.items[i][0]}</span><span class="hint">Çevirmek için dokunun</span>`;};break;
    case"quiz":quizRef=b.items;d.innerHTML=`<div id="quiz"></div><div class="score"><span>Puanınız: <b id="sc"></b></span><button class="btn" id="qreset" type="button">Testi sıfırla</button></div>`;break;
    case"widget":setTimeout(()=>WIDGETS[b.name](d,b.opts||{}));break;
  }
  return d;
}

/* ---------- Sayfa ---------- */
document.title=`${W.code} Hafta ${pad(W.week)} · ${W.short||W.course}`;
const root=document.createElement("div");
root.innerHTML=`<header class="bar"><div class="bar-in"><span class="crumb">${W.code} · ${W.course} · Hafta ${pad(W.week)}/${W.total}</span><span class="prog"><span id="pt"></span><span class="track"><span class="fill" id="pf"></span></span></span></div></header>
<main class="wrap"><p class="eyebrow">Hafta ${pad(W.week)} · ${W.eyebrow}</p><h1>${W.title}</h1><p>${W.intro}</p>
<div class="goals"><b>Bu haftanın sonunda</b><ul>${W.goals.map(g=>`<li>${g}</li>`).join("")}</ul></div><div id="secs"></div>
<section class="sec"><div class="sec-head"><span class="sec-n">Kaynak</span><h2>Kaynaklar ve ileri okuma</h2></div><ul class="refs">${W.refs.map(r=>`<li>${r}</li>`).join("")}</ul></section>
<div class="foot"><span>${W.author} · ${W.course} · Hafta ${pad(W.week)}</span><span>${W.next||""}</span></div></main>`;
document.body.appendChild(root);
const secs=$("#secs"),tracked=[];
W.sections.forEach((s,i)=>{
  const sec=document.createElement("section");sec.className="sec";
  sec.innerHTML=`<div class="sec-head"><span class="sec-n">${s.n}</span><h2>${s.h}</h2></div>`;
  s.blocks.forEach(b=>sec.appendChild(block(b)));
  const isQuiz=s.blocks.some(b=>b.t==="quiz");
  if(!isQuiz&&s.track!==false){const id="s"+i;tracked.push(id);
    const l=document.createElement("label");l.className="done";l.innerHTML=`<input type="checkbox" data-done="${id}"> Bu bölümü tamamladım`;sec.appendChild(l);}
  if(isQuiz)tracked.push("quiz");
  secs.appendChild(sec);
});
function drawQuiz(){
  if(!quizRef)return;
  $("#quiz").innerHTML=quizRef.map((x,i)=>{const s=st.ans[i];
    const ord=x.o.map((_,j)=>j);let seed=(W.id.length*31+i*97+7)>>>0;for(let k=ord.length-1;k>0;k--){seed=(seed*1103515245+12345)>>>0;const r=seed%(k+1);[ord[k],ord[r]]=[ord[r],ord[k]];}
    return `<div class="q"><p class="qt">${i+1}. ${x.q}</p><div class="opts">${ord.map(j=>{const o=x.o[j];let c="";if(s!==undefined){if(j===x.a)c="right";else if(j===s)c="wrong";}
      return `<button type="button" data-q="${i}" data-o="${j}" class="${c}" ${s!==undefined?"disabled":""}>${o}</button>`}).join("")}</div>
      ${s!==undefined?`<p class="fb"><b class="${s===x.a?"ok":"no"}">${s===x.a?"Doğru.":"Yanlış."}</b> ${x.e}</p>`:""}</div>`}).join("");
  $("#sc").textContent=`${Object.entries(st.ans).filter(([i,v])=>quizRef[i]&&quizRef[i].a===v).length}/${quizRef.length}`;
}
function drawProg(){
  st.done.quiz=quizRef&&Object.keys(st.ans).length===quizRef.length;
  const n=tracked.filter(t=>st.done[t]).length;
  $("#pt").textContent=`${n}/${tracked.length}`;$("#pf").style.width=(n/tracked.length*100)+"%";
}
document.addEventListener("click",e=>{
  const b=e.target.closest("button[data-q]");
  if(b){st.ans[b.dataset.q]=+b.dataset.o;save();drawQuiz();drawProg();}
  if(e.target.id==="qreset"){st.ans={};save();drawQuiz();drawProg();}
});
document.querySelectorAll("[data-done]").forEach(cb=>{cb.checked=!!st.done[cb.dataset.done];cb.onchange=()=>{st.done[cb.dataset.done]=cb.checked;save();drawProg();};});
drawQuiz();drawProg();
}
if(document.body)__ders();else addEventListener("DOMContentLoaded",__ders);
