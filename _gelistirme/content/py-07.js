window.WEEK={
id:"py-07",code:"PY",course:"Proje Yönetimi",short:"Kritik yol",week:7,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Zaman yönetimi II",
title:"Kritik yol, Gantt şeması ve <em>sıkıştırma</em>",
intro:"Bu hafta Kritik Yol Yöntemi'yle (KYY) ileri ve geri hesap yaparak her faaliyetin en erken ve en geç başlama zamanını, bolluğunu ve projenin kritik yolunu bulacaksınız. Ardından takvimi Gantt şemasına dökmeyi ve takvim sıkıştığında sıkıştırma ile hızlı izleme tekniklerini kullanmayı öğreneceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada bir kritik yol hesaplayıcısı, bir sıkıştırma maliyeti hesaplayıcısı, bir alıştırma ve 9 soruluk bir test var.",
goals:[
 "İleri hesapla en erken başlama ve bitiş zamanlarını bulabilirsiniz.",
 "Geri hesapla en geç başlama ve bitiş zamanlarını bulabilirsiniz.",
 "Toplam bolluğu hesaplayıp kritik yolu belirleyebilirsiniz.",
 "Bir takvimi Gantt şeması olarak okuyup çizebilirsiniz.",
 "Sıkıştırma ve hızlı izleme tekniklerini maliyet ve risk açısından karşılaştırabilirsiniz."
],
sections:[
{n:"7.1",h:"Kritik yol nedir?",blocks:[
 {t:"def",html:"<b>Kritik yol</b>: Ağ diyagramında başlangıçtan bitişe giden en uzun yol. Projenin bitebileceği en kısa süreyi belirler.",src:"Kritik yoldaki bir faaliyetteki her gecikme, başka bir önlem alınmazsa projenin bitiş tarihini aynı ölçüde geciktirir."},
 {t:"p",html:"Kritik Yol Yöntemi 1957'de DuPont ve Remington Rand mühendisleri tarafından fabrika bakım projelerini planlamak için geliştirildi. Yöntemin değeri basit bir gözleme dayanır: bir projede onlarca faaliyet olsa da, bitiş tarihini belirleyen yalnızca birkaçıdır. Proje yöneticisinin dikkatini en çok bu faaliyetlere vermesi gerekir."},
 {t:"p",html:"Geçen haftaki Kariyer Günleri ağını hatırlayın: A (firma listesi, 3 gün) ile başlıyor; ardından iki kol ayrılıyor. Birinci kol B (davet ve onay, 10 gün) → E (stant planı, 2 gün); ikinci kol C (afiş tasarımı, 4 gün) → D (baskı ve asma, 3 gün). İki kol F'de (etkinlik, 2 gün) birleşiyor."}
]},
{n:"7.2",h:"İleri ve geri hesap",blocks:[
 {t:"p",html:"<b>İleri hesap</b> soldan sağa yapılır ve her faaliyetin <b>en erken başlama</b> (EB) ve <b>en erken bitiş</b> (EBi) zamanını verir. İlk faaliyet 0'da başlar. EBi = EB + süre. Bir faaliyetin birden fazla öncülü varsa, EB öncüllerin EBi değerlerinin <b>en büyüğüdür</b>: bütün öncüller bitmeden başlanamaz."},
 {t:"p",html:"<b>Geri hesap</b> sağdan sola yapılır ve <b>en geç bitiş</b> (GBi) ve <b>en geç başlama</b> (GB) zamanını verir. Son faaliyetin GBi değeri, proje süresine eşitlenir. GB = GBi − süre. Bir faaliyetin birden fazla ardılı varsa, GBi ardılların GB değerlerinin <b>en küçüğüdür</b>."},
 {t:"def",html:"<b>Toplam bolluk</b> = GB − EB = GBi − EBi. Bir faaliyetin, projenin bitişini geciktirmeden ne kadar gecikebileceğini gösterir.",src:"Bolluğu sıfır olan faaliyetler kritik yoldadır."},
 {t:"table",head:["Faaliyet","Süre","EB","EBi","GB","GBi","Bolluk","Kritik?"],rows:[
  ["A Firma listesi","3","0","3","0","3","0","Evet"],
  ["B Davet ve onay","10","3","13","3","13","0","Evet"],
  ["C Afiş tasarımı","4","3","7","8","12","5","Hayır"],
  ["D Baskı ve asma","3","7","10","12","15","5","Hayır"],
  ["E Stant planı","2","13","15","13","15","0","Evet"],
  ["F Etkinlik","2","15","17","15","17","0","Evet"]]},
 {t:"p",html:"Adım adım izleyin. İleri hesapta F'nin iki öncülü var: D 10'da, E 15'te bitiyor; F en erken 15'te başlar. Geri hesapta F'nin GBi'si 17, GB'si 15. D ve E'nin GBi'si 15 olur. C'nin tek ardılı D'dir ve D en geç 12'de başlamalıdır; o hâlde C en geç 12'de bitmeli, en geç 8'de başlamalıdır. C'nin bolluğu 8 − 3 = 5 gündür: afiş tasarımı 5 güne kadar gecikse de etkinlik tarihi değişmez."},
 {t:"box",lbl:"Kritik yol",html:"A → B → E → F · 17 gün. Proje yöneticisinin her hafta ilk bakacağı yer firma onaylarının (B) durumudur. Afiş tarafında 5 günlük bir esneklik vardır; gerekirse bu koldaki gönüllüler geçici olarak firma onaylarına yardım edebilir."}
]},
{n:"7.3",h:"Kritik yolu kendiniz bulun",blocks:[
 {t:"p",html:"Aşağıdaki hesaplayıcıda A = 3 gün ve F = 2 gün sabittir. B, E, C ve D sürelerini değiştirin; kritik yolun nasıl değiştiğini izleyin. Kritik yolun sabit olmadığını, süreler değiştikçe başka bir kola geçebileceğini göreceksiniz."},
 {t:"widget",name:"calc",opts:{title:"Kritik yol",inputs:[
  {id:"B",label:"B · Davet ve onay",min:1,max:20,step:1,value:10,unit:" gün"},
  {id:"E",label:"E · Stant planı",min:1,max:10,step:1,value:2,unit:" gün"},
  {id:"C",label:"C · Afiş tasarımı",min:1,max:20,step:1,value:4,unit:" gün"},
  {id:"D",label:"D · Baskı ve asma",min:1,max:10,step:1,value:3,unit:" gün"}],
  formula:"(function(){var y1=3+B+E+2,y2=3+C+D+2,T=Math.max(y1,y2);if(y1===y2)return 'Proje süresi '+T+' gün · İki yol da kritik (A-B-E-F ve A-C-D-F); hiçbir faaliyetin bolluğu yok.';return 'Proje süresi '+T+' gün · Kritik yol: '+(y1>y2?'A-B-E-F':'A-C-D-F')+' · Diğer koldaki faaliyetlerin bolluğu: '+Math.abs(y1-y2)+' gün';})()",
  result:"{r}",note:"Örnek: C'yi 9 güne çıkarın. İkinci kol 3+9+3+2 = 17 gün olur ve iki yol da kritik hâle gelir. Böyle durumlar risklidir: herhangi bir koldaki küçük bir gecikme doğrudan bitiş tarihini kaydırır."}}
]},
{n:"7.4",h:"Gantt şeması",blocks:[
 {t:"p",html:"Ağ diyagramı mantığı, <b>Gantt şeması</b> zamanı gösterir. Her faaliyet, zaman ekseninde başlangıcından bitişine uzanan bir çubukla çizilir. Henry Gantt'ın 1910'larda geliştirdiği bu şema, okunması kolay olduğu için bugün hâlâ en yaygın takvim görselidir. Aşağıda örnek projenin Gantt şeması var; koyu çubuklar kritik faaliyetler, açık renkli uzantılar bollukları gösteriyor."},
 {t:"html",html:"<div class=\"box\" style=\"overflow-x:auto\"><div class=\"lbl\">Gantt şeması · Kariyer Günleri (gün 0–17)</div><div style=\"min-width:480px;font-size:.85rem\">"+
  [["A Firma listesi",0,3,0,1],["B Davet ve onay",3,10,0,1],["C Afiş tasarımı",3,4,5,0],["D Baskı ve asma",7,3,5,0],["E Stant planı",13,2,0,1],["F Etkinlik",15,2,0,1]].map(function(r){return "<div style=\"display:grid;grid-template-columns:130px 1fr;align-items:center;gap:8px;padding:5px 0;border-top:1px solid var(--line)\"><span>"+r[0]+"</span><div style=\"position:relative;height:16px;background:repeating-linear-gradient(90deg,transparent 0,transparent calc(100%/17 - 1px),var(--line) calc(100%/17 - 1px),var(--line) calc(100%/17))\"><div style=\"position:absolute;left:"+(r[1]/17*100)+"%;width:"+(r[2]/17*100)+"%;top:2px;bottom:2px;border-radius:3px;background:"+(r[4]?"var(--c4)":"var(--c3)")+"\"></div>"+(r[3]?"<div style=\"position:absolute;left:"+((r[1]+r[2])/17*100)+"%;width:"+(r[3]/17*100)+"%;top:6px;bottom:6px;border-radius:2px;background:var(--c3);opacity:.3\"></div>":"")+"</div></div>";}).join("")+
  "</div><p class=\"note\">Koyu: kritik faaliyet · Turuncu: kritik olmayan faaliyet · Soluk uzantı: bolluk</p></div>"},
 {t:"p",html:"Gantt şemasının güçlü yanı, \"bugün ne yapılıyor olmalı?\" sorusuna anında yanıt vermesidir. Zayıf yanı ise bağımlılıkları açıkça göstermemesidir: hangi çubuğun hangisini beklediğini yalnızca şemaya bakarak anlamak zordur. Bu yüzden proje yazılımları (MS Project, GanttProject, ProjectLibre gibi) iki görünümü birlikte sunar ve bağımlılıkları çubuklar arasında oklarla gösterir."}
]},
{n:"7.5",h:"Takvim sıkışınca: sıkıştırma ve hızlı izleme",blocks:[
 {t:"p",html:"Sponsor \"etkinliği bir hafta öne alalım\" derse ne yapılır? Kapsamı daraltmadan süreyi kısaltmanın iki temel tekniği vardır. Her ikisi de yalnızca <b>kritik yoldaki</b> faaliyetlere uygulandığında işe yarar; kritik olmayan bir faaliyeti kısaltmak proje süresini değiştirmez."},
 {t:"list",items:[
  "<b>Sıkıştırma</b> (crashing): Kritik faaliyete ek kaynak (fazla mesai, ek personel, hızlı kargo) ekleyerek süresini kısaltmak. Süre kısalır, <b>maliyet artar</b>. Önce en ucuz kısaltılabilen kritik faaliyetten başlanır.",
  "<b>Hızlı izleme</b> (fast tracking): Normalde sırayla yapılan faaliyetleri kısmen paralel yürütmek. Maliyet çoğu zaman pek artmaz, ama <b>risk artar</b>: önceki iş değişirse sonraki işin yeniden yapılması gerekebilir."]},
 {t:"box",lbl:"Formül",html:"Günlük sıkıştırma maliyeti = (Sıkıştırılmış maliyet − Normal maliyet) / (Normal süre − Sıkıştırılmış süre)"},
 {t:"widget",name:"calc",opts:{title:"Sıkıştırma maliyeti",inputs:[
  {id:"ns",label:"Normal süre",min:2,max:30,step:1,value:10,unit:" gün"},
  {id:"ss",label:"Sıkıştırılmış süre",min:1,max:30,step:1,value:7,unit:" gün"},
  {id:"nm",label:"Normal maliyet",min:5,max:200,step:1,value:40,unit:" bin TL"},
  {id:"sm",label:"Sıkıştırılmış maliyet",min:5,max:300,step:1,value:52,unit:" bin TL"}],
  formula:"ns<=ss?'Sıkıştırılmış süre normal süreden kısa olmalı.':'Günlük sıkıştırma maliyeti: '+((sm-nm)/(ns-ss)).toFixed(1).replace('.',',')+' bin TL/gün · Toplam kazanılan süre: '+(ns-ss)+' gün'",
  result:"{r}",note:"Örnek: Firma onaylarını (B) hızlandırmak için iki gönüllü yerine bir yarı zamanlı asistan tutmak. Gün başına maliyeti diğer kritik faaliyetlerle karşılaştırın; en düşük olanı önce kısaltın. Kritik yol değişebileceği için her kısaltmadan sonra yeniden hesap yapın."}},
 {t:"p",html:"Bir uyarı: Daha fazla insan her zaman daha hızlı demek değildir. Fred Brooks, 1975'te yayımlanan <i>The Mythical Man-Month</i> kitabında, gecikmiş bir yazılım projesine insan eklemenin onu daha da geciktirdiğini savundu: yeni gelenlerin eğitimi ve artan iletişim yükü, ek gücün getirisini yer. Bu gözlem bugün <b>Brooks yasası</b> olarak bilinir."},
 {t:"widget",name:"classify",opts:{title:"Sıkıştırma mı, hızlı izleme mi?",cats:["Sıkıştırma","Hızlı izleme"],items:[
  ["Boya işine ikinci bir ekip eklemek",0],
  ["Tasarım tamamen onaylanmadan baskı hazırlığına başlamak",1],
  ["Fazla mesaiyle yazılım testini iki gün kısaltmak",0],
  ["Zemin etüdü sürerken mimari çizimlere başlamak",1],
  ["Malzemeyi normal kargo yerine ekspres kargoyla getirmek",0],
  ["Konuşmacı listesi kesinleşmeden panel kitapçığının tasarımına başlamak",1]],
  note:"Para veya kaynak ekleniyorsa sıkıştırma, sıra değiştiriliyorsa hızlı izlemedir. Hızlı izlemede önceki işteki bir değişiklik, paralel başlatılan işin yeniden yapılmasına yol açabilir."}}
]},
{n:"7.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Kritik yol","Başlangıçtan bitişe giden en uzun yol; proje süresini belirler."],
  ["İleri hesap","En erken başlama ve bitiş zamanlarının soldan sağa hesaplanması."],
  ["Geri hesap","En geç bitiş ve başlama zamanlarının sağdan sola hesaplanması."],
  ["Toplam bolluk","Projeyi geciktirmeden bir faaliyetin gecikebileceği süre: GB − EB."],
  ["Gantt şeması","Faaliyetleri zaman ekseninde çubuklarla gösteren takvim görseli."],
  ["Sıkıştırma","Kritik faaliyete kaynak ekleyerek süreyi kısaltmak; maliyet artar."],
  ["Hızlı izleme","Sıralı faaliyetleri kısmen paralel yürütmek; risk artar."],
  ["Brooks yasası","Gecikmiş bir yazılım projesine insan eklemek onu daha da geciktirir."]
 ]},
 {t:"box",lbl:"Dönem projesi · Adım 7",html:"Geçen hafta hazırladığınız faaliyet listesiyle (1) ağ diyagramını çizin, (2) ileri ve geri hesap tablosunu doldurun, (3) kritik yolu ve proje süresini belirleyin, (4) ücretsiz bir araçla (GanttProject, ProjectLibre veya bir hesap tablosu) Gantt şemasını oluşturun. Son olarak: Proje süresini %10 kısaltmanız istense hangi faaliyetleri, hangi teknikle kısaltırdınız? İki cümleyle yazın."}
]},
{n:"7.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Kritik yol için hangisi doğrudur?",o:["Ağdaki en kısa yoldur","Ağdaki en uzun yoldur ve proje süresini belirler","En pahalı faaliyetlerden oluşan yoldur","En çok kişinin çalıştığı yoldur"],a:1,e:"Proje, en uzun yol tamamlanmadan bitemez; bu yüzden en uzun yol proje süresini belirler."},
  {q:"Bir faaliyetin iki öncülü var; biri 8. günde, diğeri 12. günde bitiyor. Faaliyetin en erken başlama zamanı nedir?",o:["8","10","12","20"],a:2,e:"İleri hesapta öncüllerin en büyük bitiş zamanı alınır; bütün öncüller bitmeden başlanamaz."},
  {q:"Geri hesapta bir faaliyetin iki ardılının en geç başlama zamanları 14 ve 18 ise faaliyetin en geç bitiş zamanı nedir?",o:["14","16","18","32"],a:0,e:"Geri hesapta ardılların en küçük GB değeri alınır; aksi hâlde erken başlaması gereken ardıl gecikir."},
  {q:"EB = 4, GB = 9 olan bir faaliyetin toplam bolluğu ve kritiklik durumu nedir?",o:["5 gün, kritik değil","5 gün, kritik","13 gün, kritik değil","0 gün, kritik"],a:0,e:"Bolluk = GB − EB = 9 − 4 = 5 gün. Bolluğu sıfırdan büyük olan faaliyet kritik değildir."},
  {q:"Kritik yol 30 gün, ikinci en uzun yol 26 gün. İkinci yoldaki bir faaliyet 6 gün gecikirse proje süresi ne olur?",o:["30 gün","32 gün","36 gün","26 gün"],a:1,e:"İkinci yol 26 + 6 = 32 güne çıkar ve yeni kritik yol olur; proje 32 gün sürer."},
  {q:"Takvimi kısaltmak için kritik olmayan bir faaliyete ek personel verilirse ne olur?",o:["Proje süresi aynı oranda kısalır","Süre değişmez, maliyet boşuna artar","Kritik yol kendiliğinden kısalır","Takvim riski tamamen ortadan kalkar"],a:1,e:"Proje süresini kritik yol belirler; bolluğu olan bir faaliyeti kısaltmak bitiş tarihini değiştirmez."},
  {q:"Normal süre 8 gün ve 30 bin TL; sıkıştırılmış süre 5 gün ve 45 bin TL. Günlük sıkıştırma maliyeti nedir?",o:["3 bin TL","5 bin TL","15 bin TL","9 bin TL"],a:1,e:"(45 − 30) ÷ (8 − 5) = 15 ÷ 3 = 5 bin TL/gün."},
  {q:"Tasarım onaylanmadan üretim hazırlığına başlamak hangi tekniktir ve temel riski nedir?",o:["Sıkıştırma; maliyetin artması","Hızlı izleme; yeniden işleme gerekmesi","Kaynak dengeleme; sürenin uzaması","Altın kaplama; kapsamın büyümesi"],a:1,e:"Sıralı işleri paralel yürütmek hızlı izlemedir; tasarım değişirse yapılan hazırlık boşa gidebilir."},
  {q:"Gantt şemasının ağ diyagramına göre temel zayıflığı nedir?",o:["Faaliyetlerin zamanını hiç göstermemesi","Bağımlılıkları açıkça göstermemesi","Okunmasının uzman olmayanlar için çok zor olması","Yalnızca büyük projelerde kullanılabilmesi"],a:1,e:"Gantt zamanı iyi gösterir, ama hangi işin hangisini beklediğini göstermez; bu yüzden ağ diyagramıyla birlikte kullanılır."}
 ]}
]}
],
refs:[
 "Kelley, J. E., Walker, M. R. (1959). Critical-path planning and scheduling. <i>Proceedings of the Eastern Joint Computer Conference</i>.",
 "Brooks, F. P. (1975). <i>The Mythical Man-Month: Essays on Software Engineering</i>. Addison-Wesley.",
 "Project Management Institute (2019). <i>Practice Standard for Scheduling</i>, 3. baskı. PMI.",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 6 ve 9."
],
next:"Sonraki: Hafta 08 — Maliyet tahmini ve bütçe"
};
