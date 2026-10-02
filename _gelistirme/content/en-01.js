window.WEEK={
id:"en-01",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Enerjiye genel bakış",week:1,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Temel kavramlar",
title:"Enerjiye genel bakış: kaynaklar, <em>verimlilik</em> ve kapasite",
intro:"Bu hafta enerjinin dilini öğreneceksiniz: birincil ve ikincil kaynak ayrımı, güç ile enerji farkı, dönüşüm verimliliği, kapasite faktörü ve yük faktörü. Bu kavramlar dersin geri kalanında, yatırım hesaplarından piyasa fiyatlarına kadar her yerde karşınıza çıkacak. Okuma süresi yaklaşık 40 dakika; sayfada iki sınıflandırma alıştırması, üç hesaplayıcı ve 10 soruluk bir test var.",
goals:[
 "Birincil ve ikincil enerji kaynaklarını, yenilenebilir ve yenilenemez kaynakları ayırt edebilirsiniz.",
 "Güç (kW, MW) ile enerji (kWh, MWh) arasındaki farkı açıklayabilirsiniz.",
 "Bir dönüşüm zincirinin toplam verimliliğini aşamaların verimlerini çarparak hesaplayabilirsiniz.",
 "Bir santralin kapasite faktörünü yıllık üretim ve kurulu güçten hesaplayıp yorumlayabilirsiniz.",
 "Yük faktörünü ve yük süreklilik eğrisini baz, ara ve puant yük kavramlarıyla ilişkilendirebilirsiniz."
],
sections:[
{n:"1.1",h:"Enerji neden bu kadar önemli?",blocks:[
 {t:"p",html:"Enerji, gündelik hayatta en çok kullandığımız ama en az fark ettiğimiz şeydir. Yanan bir ampul, çalışan bir bilgisayar, sokaktaki otobüs: hepsinin arkasında görünmeyen bir enerji akışı vardır. Tarih boyunca toplumlar kullandıkları enerji kaynaklarıyla şekillendi; kömürü sanayide kullananlar sanayi devrimini başlattı."},
 {t:"p",html:"Bu derste enerjiyi yalnızca teknik bir konu olarak değil, <b>ekonomi, çevre ve politikanın kesiştiği</b> bir alan olarak ele alacağız. Bir santrale yatırım yapılıp yapılmayacağı, elektriğin fiyatının nasıl oluştuğu ya da bir ülkenin enerjide ne kadar güvende olduğu, bu haftanın temel kavramlarına dayanır."},
 {t:"box",lbl:"Önce birimler: güç ve enerji",html:"<b>Güç</b> (kW, MW, GW), bir santralin ya da cihazın <i>anlık</i> üretme veya tüketme hızıdır. <b>Enerji</b> (kWh, MWh, GWh, TWh) ise bu gücün zaman içindeki toplamıdır: güç × süre.<br>1 MW gücündeki bir santral 1 saat tam kapasitede çalışırsa 1 MWh üretir. Bir yılda 8.760 saat vardır; aynı santral yıl boyu hiç durmasaydı 8.760 MWh üretirdi.<br>1 GWh = 1.000 MWh · 1 TWh = 1.000 GWh = 1.000.000 MWh"},
 {t:"p",html:"Bu ayrım basit görünür ama haberlerde sık karıştırılır. “Santral 500 MW” cümlesi santralin büyüklüğünü söyler; “santral yılda 3 TWh üretti” cümlesi ise ne kadar çalıştığını. İkisi arasındaki köprü, birazdan göreceğimiz <b>kapasite faktörüdür</b>."}
]},
{n:"1.2",h:"Birincil ve ikincil enerji kaynakları",blocks:[
 {t:"def",html:"<b>Birincil enerji kaynakları</b>, doğada bulunan ve insan yapımı bir dönüştürme işleminden geçmemiş ham kaynaklardır. <b>İkincil enerji kaynakları</b> ise birincil kaynakların santral veya rafineri gibi tesislerde dönüştürülmesiyle elde edilen, kullanıma daha uygun <i>enerji taşıyıcılarıdır</i>.",src:"Kömür, ham petrol, doğal gaz, uranyum, güneş ışığı ve rüzgâr birincil; elektrik, benzin, motorin, LPG, hidrojen ve kok kömürü ikincildir."},
 {t:"p",html:"Birincil kaynakların çoğu son kullanıcı için doğrudan uygun değildir. Rüzgârı prize takamazsınız, ham petrolü arabanın deposuna koyamazsınız. Önce bir türbin rüzgârı elektriğe, bir rafineri ham petrolü benzine dönüştürmelidir. <b>Elektrik</b> en önemli ikincil kaynaktır: kömürden, rüzgârdan ya da güneşten üretilebilir, uzak mesafelere kolayca taşınır ve sayısız cihazda kullanılır."},
 {t:"table",head:["Özellik","Birincil kaynaklar","İkincil kaynaklar"],rows:[
  ["Tanım","Doğada ham hâlde bulunan, dönüştürülmemiş enerji","Birincil kaynaktan dönüştürülmüş enerji taşıyıcısı"],
  ["Nereden gelir?","Doğa (güneş, rüzgâr, kömür, ham petrol…)","Dönüşüm tesisleri (santraller, rafineriler)"],
  ["Kullanıma hazırlık","Genellikle doğrudan kullanıma uygun değil","Son kullanıcı için kolay ve verimli"],
  ["Dönüşüm kaybı","Henüz yaşanmamış","Üretim sırasında önemli kayıp yaşanmış"]]},
 {t:"widget",name:"classify",opts:{title:"Birincil mi, ikincil mi?",cats:["Birincil","İkincil"],items:[
  ["Kuyudan çıkan ham petrol",0],["Prizdeki elektrik",1],["Türbini döndüren rüzgâr",0],["Akaryakıt istasyonundaki benzin",1],
  ["Santrale giren uranyum",0],["Elektrolizle üretilen hidrojen",1],["Çelik fabrikasındaki kok kömürü",1],["Çatıya düşen güneş ışığı",0],
  ["Tüpteki LPG",1],["Ocaktan çıkarılan linyit",0]
 ],note:"Ölçüt, kaynağın insan yapımı bir dönüşümden geçip geçmediğidir. Kok kömürü, taşkömürünün fırınlarda işlenmesiyle; LPG ise rafineride veya doğal gaz işleme tesislerinde elde edilir, bu yüzden ikincildir."}},
 {t:"p",html:"Dönüşüm hiçbir zaman kayıpsız olmadığı için bir ülkenin <b>birincil enerji tüketimi her zaman nihai enerji tüketiminden büyüktür</b>. Aradaki fark, santrallerde ve rafinerilerde çoğunlukla atık ısı olarak kaybolan enerjidir."},
 {t:"box",lbl:"Hidrojen üzerine küçük bir düzeltme",html:"Hidrojen ikincil bir enerji taşıyıcısıdır, ama bugün dünyada üretilen hidrojenin büyük bölümü elektrolizle değil, <b>doğal gazdan</b> (buhar-metan reformasyonu) elde edilir. Elektrolizle, yenilenebilir elektrik kullanılarak üretilen hidrojene <i>yeşil hidrojen</i> denir; Hafta 06'da maliyetini hesaplayacağız."}
]},
{n:"1.3",h:"Yenilenebilir ve yenilenemez",blocks:[
 {t:"p",html:"İkinci önemli ayrım kaynağın tükenip tükenmediğidir. <b>Yenilenemez</b> kaynaklar (kömür, petrol, doğal gaz, uranyum) milyonlarca yılda oluşmuş stoklardır; kullandıkça azalır. <b>Yenilenebilir</b> kaynaklar (güneş, rüzgâr, hidrolik, jeotermal ısı, biyokütle) doğal süreçlerle sürekli yenilendiği için insan ölçeğinde tükenmez kabul edilir."},
 {t:"p",html:"İki ayrım birbirinden bağımsızdır: rüzgâr hem birincil hem yenilenebilirdir; ham petrol birincil ama yenilenemezdir. Elektrik ise ikincildir ve “yenilenebilir mi?” sorusunun yanıtı hangi birincil kaynaktan üretildiğine bağlıdır."},
 {t:"widget",name:"classify",opts:{title:"Yenilenebilir mi?",cats:["Yenilenebilir","Yenilenemez"],items:[
  ["Linyit",1],["Jeotermal ısı",0],["Doğal gaz",1],["Akarsuyun akışı",0],
  ["Uranyum",1],["Tarımsal atıklar (biyokütle)",0],["Ham petrol",1],["Güneş ışığı",0]
 ],note:"Nükleer enerji düşük karbonludur ama uranyum madenden çıkarılan, sınırlı bir kaynaktır; bu yüzden yenilenebilir sayılmaz. Biyokütle ise yalnızca tüketildiği hızda yeniden yetiştirildiğinde yenilenebilirdir."}}
]},
{n:"1.4",h:"Enerji dönüşüm verimliliği",blocks:[
 {t:"def",html:"Enerji dönüşüm verimliliği, bir dönüşüm sürecinde harcanan toplam enerjinin ne kadarının hedeflenen faydalı enerjiye dönüştüğünü gösteren orandır.",src:"Verimlilik (%) = (Elde edilen faydalı enerji ÷ Harcanan toplam enerji) × 100"},
 {t:"p",html:"Termodinamiğin ikinci yasası gereği hiçbir dönüşüm %100 verimli olamaz; enerjinin bir kısmı her zaman istenmeyen biçimlere, çoğunlukla <b>atık ısıya</b> dönüşür. Bir benzinli otomobil motoru yakıttaki enerjinin ancak küçük bir bölümünü tekerleklere aktarır; geri kalanı motorun ısınmasıyla ve egzozla kaybolur."},
 {t:"table",head:["Cihaz / süreç","Yaklaşık verimlilik","Kayıp nereye gider?"],rows:[
  ["Benzinli içten yanmalı motor","%20–30","Isı, sürtünme, egzoz"],
  ["Kömürlü termik santral","%33–45","Soğutma kuleleri ve baca gazındaki ısı"],
  ["Hidroelektrik santral","%85–95","Sürtünme, türbin kayıpları"],
  ["Akkor (telli) ampul","~%5 (ışığa)","Isı"],
  ["LED ampul","Akkor ampulden birkaç kat yüksek","Isı (çok daha az)"]]},
 {t:"p",html:"Verimlilik önemlidir, çünkü aynı faydayı daha az birincil kaynakla sağlamak demektir. Bunun dört sonucu vardır: daha düşük fatura (<b>ekonomik tasarruf</b>), birim elektrik başına daha az emisyon (<b>çevre</b>), ithal yakıta daha az ihtiyaç (<b>enerji güvenliği</b>) ve mühendislikte sürekli yenilik baskısı (<b>teknoloji</b>)."},
 {t:"p",html:"Gerçek hayatta enerji tek bir dönüşümden değil, bir <b>zincirden</b> geçer: santral yakıtı elektriğe çevirir, şebeke elektriği taşırken bir kısmını kaybeder, cihaz da kalan elektriği işe ya da ışığa çevirir. Zincirin toplam verimi, aşamaların verimlerinin <b>çarpımıdır</b>; toplamı değil. Bu yüzden her halkadaki küçük kayıplar büyük bir toplam kayba dönüşür."},
 {t:"widget",name:"calc",opts:{title:"Dönüşüm zincirinin toplam verimi",inputs:[{id:"s",label:"Santral verimi",min:20,max:95,step:1,value:38,unit:"%"},{id:"g",label:"İletim ve dağıtım verimi",min:80,max:99,step:1,value:92,unit:"%"},{id:"c",label:"Son kullanım cihazının verimi",min:2,max:98,step:1,value:90,unit:"%"}],formula:"(function(){var t=s*g*c/10000;return '%'+t.toLocaleString('tr-TR',{maximumFractionDigits:1})+' · 100 birim faydalı enerji için yaklaşık '+Math.round(100*100/t).toLocaleString('tr-TR')+' birim birincil enerji gerekir';})()",result:"Toplam verim: {r}",note:"Varsayılan değerler kömürlü bir santrali, şebekeyi ve verimli bir elektrik motorunu temsil eder. Cihaz verimini %5'e çekin (akkor ampul): toplam verim %2'nin altına iner. Santral verimini %90'a çıkarın (hidroelektrik): aynı fayda için çok daha az birincil enerji gerekir."}}
]},
{n:"1.5",h:"Kapasite faktörü",blocks:[
 {t:"def",html:"Kapasite faktörü, bir santralin belirli bir dönemde (genellikle bir yıl) ürettiği gerçek elektriğin, aynı süre boyunca tam kapasitede aralıksız çalışsaydı üretebileceği en yüksek elektriğe oranıdır.",src:"Kapasite faktörü = Yıllık üretim (MWh) ÷ [Kurulu güç (MW) × 8.760 saat]"},
 {t:"p",html:"Kapasite faktörünü verimlilikle karıştırmayın. Bir güneş paneli gelen ışığın yaklaşık %20'sini elektriğe çevirebilir; bu onun <b>verimidir</b>. Ama panel geceleri hiç üretmez, kışın ve bulutlu havada az üretir; bu yüzden yıllık <b>kapasite faktörü</b> de düşüktür. Biri dönüşümün kalitesini, öteki santralin ne kadar çalıştığını ölçer."},
 {t:"choice",items:[
  {label:"Nükleer",title:"Kapasite faktörü genellikle %90'ın üzerinde",body:"Nükleer santraller şebekenin sürekli temel ihtiyacını karşılayan baz yük santralleridir. Yakıt santralin içindedir, hava koşullarından bağımsız çalışır ve yalnızca planlı bakım ve yakıt değişimi (genellikle 18–24 ayda bir) için durur.",ex:"Türkiye'den örnek: Mersin'deki Akkuyu Nükleer Güç Santrali, her biri 1.200 MW gücünde dört VVER-1200 ünitesiyle toplam 4.800 MW kurulu güce göre tasarlanmıştır."},
  {label:"Güneş (PV)",title:"Kapasite faktörü yaklaşık %15–25",body:"Üretim tamamen güneşin varlığına bağlıdır: gece sıfırdır, bulutlu havada ve kışın düşer. Santralin kurulduğu enlem ve yörenin güneşlenme süresi de üretimi doğrudan belirler.",ex:"Güneyde kurulan bir GES, aynı panelle kuzeyde kurulan bir GES'ten daha yüksek kapasite faktörüne ulaşır."},
  {label:"Rüzgâr",title:"Karada yaklaşık %25–45, denizde %40–55",body:"Üretim rüzgârın hızına ve sürekliliğine bağlıdır. Deniz üstünde rüzgâr daha güçlü ve kararlı estiği için kapasite faktörü genellikle karadakinden yüksektir.",ex:"Hafta 05'te rotor çapı ve göbek yüksekliğinin kapasite faktörünü nasıl artırdığını göreceğiz."},
  {label:"Fosil ve hidro",title:"Kömür/doğal gaz %40–80, barajlı HES yağışa göre değişken",body:"Fosil yakıtlı santraller teknik olarak sürekli çalışabilir; ne kadar çalıştıklarını yakıt maliyeti ve elektrik talebi belirler. Barajlı hidroelektrikte ise su seviyesi ve mevsimsel akış belirleyicidir.",ex:"Kurak bir yılda HES'lerin üretimi düşer, açık doğal gaz ve kömür santralleriyle kapatılır."}
 ]},
 {t:"p",html:"Hesaplamayı deneyin. Varsayılan değerler, Akkuyu'nun ünitelerinden biri büyüklüğünde (1.200 MW) bir santralin yılda yaklaşık 9.460 GWh üretmesini gösteriyor. Ardından kurulu gücü 50 MW, üretimi 90 GWh yapın: tipik bir güneş santralinin kapasite faktörünü bulacaksınız."},
 {t:"widget",name:"calc",opts:{title:"Kapasite faktörü",inputs:[{id:"p",label:"Kurulu güç",min:10,max:1500,step:10,value:1200,unit:" MW"},{id:"e",label:"Yıllık üretim",min:10,max:12000,step:10,value:9460,unit:" GWh"}],formula:"(function(){var cf=e*1000/(p*8760)*100;if(cf>100.05)return 'imkânsız: bu güçle bir yılda en fazla '+Math.round(p*8.76).toLocaleString('tr-TR')+' GWh üretilebilir';return '%'+cf.toLocaleString('tr-TR',{maximumFractionDigits:1})+' · santral yılın yaklaşık '+Math.round(cf/100*8760).toLocaleString('tr-TR')+' saatinde tam güçte çalışmış gibi';})()",result:"Kapasite faktörü: {r}",note:"Paydaki 8.760 bir yıldaki saat sayısıdır (365 × 24). GWh'i MWh'e çevirmek için 1.000 ile çarpılır. Sonucun ikinci kısmı “eşdeğer tam yük saati”dir: santralin ürettiği enerjiyi tam güçte çalışarak kaç saatte üretebileceği."}},
 {t:"table",head:["Santral tipi","Ortalama kapasite faktörü","Üretimi belirleyen ana etken"],rows:[
  ["Nükleer","%90'ın üzeri","Planlı bakım, yakıt değişimi"],
  ["Jeotermal","Yüksek (genellikle %70–90)","Planlı bakım, rezervuar basıncı"],
  ["Kömür / doğal gaz","%40–80","Yakıt maliyeti, elektrik talebi, bakım"],
  ["Hidroelektrik (barajlı)","Genellikle %30–60; kurak yıllarda daha düşük","Su seviyesi, mevsimsel akış"],
  ["Rüzgâr (deniz üstü)","%40–55","Rüzgâr hızı ve sürekliliği"],
  ["Rüzgâr (kara)","%25–45","Rüzgâr hızı ve sürekliliği"],
  ["Güneş (PV)","%15–25","Güneşlenme süresi, hava, mevsim"]]}
]},
{n:"1.6",h:"Yük faktörü ve yük süreklilik eğrisi",blocks:[
 {t:"p",html:"Kapasite faktörü <i>santrale</i> bakar; yük faktörü ise <i>talebe</i> ya da bütün sisteme. Bir elektrik sisteminin kurulması gereken kapasiteyi ortalama talep değil, yılın en yüksek talep saati (<b>puant</b>) belirler. Puant ile ortalama arasındaki fark büyüdükçe, yılın büyük bölümünde boşta bekleyen santral sayısı artar."},
 {t:"def",html:"<b>Yük faktörü</b>, bir sistemin belirli bir dönemdeki ortalama yükünün aynı dönemdeki en yüksek (puant) yüke oranıdır.",src:"Yük faktörü = Ortalama yük ÷ Puant yük. Yüksek yük faktörü, üretim ve iletim kapasitesinin daha dengeli ve ekonomik kullanıldığını gösterir."},
 {t:"p",html:"<b>Yük süreklilik eğrisi</b> (load duration curve), bir yıldaki 8.760 saatlik talebi zaman sırasına göre değil, <b>büyükten küçüğe sıralayarak</b> çizilen grafiktir. Eğrinin sol ucu puant yükü, sağ ucu en düşük yükü gösterir; altında kalan alan toplam tüketimdir. Eğri düz ve uzun süre yüksek seyrediyorsa yük faktörü yüksektir; kısa ve sivri puantlardan sonra hızla düşüyorsa yük faktörü düşüktür."},
 {t:"widget",name:"calc",opts:{title:"Yük faktörü",inputs:[{id:"o",label:"Yıllık ortalama yük",min:100,max:60000,step:100,value:35000,unit:" MW"},{id:"m",label:"Yıllık puant yük",min:100,max:60000,step:100,value:55000,unit:" MW"}],formula:"o>m?'ortalama yük puanttan büyük olamaz':(function(){var lf=o/m*100;return '%'+lf.toLocaleString('tr-TR',{maximumFractionDigits:1})+' · yıllık tüketim ≈ '+(o*8760/1e6).toLocaleString('tr-TR',{maximumFractionDigits:1})+' TWh · ortalamanın üstündeki puant için ek kapasite: '+(m-o).toLocaleString('tr-TR')+' MW';})()",result:"Yük faktörü: {r}",note:"Değerler örnektir. Puantı sabit tutup ortalama yükü artırın: aynı santral filosu daha fazla enerji satar, birim maliyet düşer. Talep tarafı yönetimi ve akıllı şebekelerin amacı tam da budur: puantı tıraşlayıp yük faktörünü yükseltmek."}},
 {t:"choice",items:[
  {label:"Baz yük",title:"Yılın neredeyse her saatinde gerekli olan yük",body:"Yük süreklilik eğrisinin alt kısmı, yıl boyunca hiç inilmeyen tabandır. Bu yükü yatırım maliyeti yüksek ama işletme maliyeti düşük, sürekli çalışabilen santraller karşılar.",ex:"Nükleer, jeotermal, yerli linyit santralleri, nehir tipi HES'ler."},
  {label:"Ara yük",title:"Günün ve mevsimin bir bölümünde gereken yük",body:"Talebin gün içinde ve mevsimler arasında dalgalanan kısmıdır. Üretimini makul hızda artırıp azaltabilen santraller kullanılır.",ex:"Doğal gaz kombine çevrim santralleri, ithal kömür santralleri."},
  {label:"Puant yük",title:"Yılda birkaç yüz saat görülen tepe talebi",body:"Eğrinin sol ucundaki sivri kısımdır. Hızla devreye girip çıkabilen, yılın az bir bölümünde çalıştığı için yatırım maliyetinin düşük olması gereken kaynaklar uygundur.",ex:"Barajlı HES'ler, açık çevrim gaz türbinleri, bataryalar ve pompaj depolamalı santraller."}
 ]}
]},
{n:"1.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Birincil enerji","Doğada ham hâlde bulunan, dönüştürülmemiş kaynak: kömür, ham petrol, rüzgâr, güneş."],
  ["İkincil enerji","Birincil kaynağın dönüştürülmesiyle elde edilen enerji taşıyıcısı: elektrik, benzin, hidrojen."],
  ["Güç ve enerji","Güç anlık hızdır (MW); enerji gücün zaman içindeki toplamıdır (MWh)."],
  ["Dönüşüm verimliliği","Harcanan enerjinin ne kadarının faydalı enerjiye dönüştüğü."],
  ["Zincir verimi","Ardışık dönüşümlerin toplam verimi; aşama verimlerinin çarpımı."],
  ["Kapasite faktörü","Yıllık üretimin, kurulu güç × 8.760 saate oranı."],
  ["Yük faktörü","Ortalama yükün puant yüke oranı; sistemin ne kadar dengeli kullanıldığı."],
  ["Yük süreklilik eğrisi","Yıllık saatlik talebin büyükten küçüğe sıralanmış grafiği."],
  ["Baz yük","Yıl boyu hiç inilmeyen taban talep; sürekli çalışan santrallerle karşılanır."],
  ["Puant yük","Yılın az sayıda saatinde görülen tepe talep; esnek santrallerle karşılanır."]
 ]}
]},
{n:"1.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Aşağıdakilerden hangisi ikincil enerji kaynağıdır?",o:["Doğal gaz","Uranyum","Motorin","Rüzgâr"],a:2,e:"Motorin, ham petrolün rafineride işlenmesiyle elde edilir. Diğerleri doğada ham hâlde bulunan birincil kaynaklardır."},
  {q:"Bir ülkenin birincil enerji tüketimi neden nihai enerji tüketiminden her zaman büyüktür?",o:["İthal enerji iki kez sayıldığı için","Dönüşüm sırasında enerjinin bir kısmı kaybolduğu için","Yenilenebilir kaynaklar hesaba katılmadığı için","Sanayi tüketimi nihai tüketime dahil edilmediği için"],a:1,e:"Santrallerde ve rafinerilerde enerjinin bir kısmı, çoğunlukla atık ısı olarak kaybolur; tüketiciye ulaşan nihai enerji bu yüzden daha azdır."},
  {q:"“Santral 500 MW” ve “santral yılda 2 TWh üretti” ifadeleri sırasıyla neyi anlatır?",o:["İkisi de üretilen enerjiyi","Gücü ve enerjiyi","Enerjiyi ve gücü","Verimi ve kapasite faktörünü"],a:1,e:"MW anlık üretme kapasitesini (güç), TWh ise bir yıl boyunca üretilen toplam enerjiyi gösterir."},
  {q:"Santral verimi %40, iletim-dağıtım verimi %90, cihaz verimi %50 ise zincirin toplam verimi kaçtır?",o:["%60","%18","%180","%45"],a:1,e:"Zincir verimi aşamaların çarpımıdır: 0,40 × 0,90 × 0,50 = 0,18, yani %18."},
  {q:"100 MW kurulu güçteki bir rüzgâr santrali yılda 262.800 MWh üretiyor. Kapasite faktörü nedir?",o:["%26","%30","%35","%42"],a:1,e:"100 × 8.760 = 876.000 MWh en yüksek olası üretimdir. 262.800 ÷ 876.000 = 0,30, yani %30."},
  {q:"Bir güneş panelinin dönüşüm verimi %20, kapasite faktörü %18 olabilir. Bu iki sayı ne anlatır?",o:["İkisi de aynı şeyi farklı birimle ölçer","Biri ışığı elektriğe çevirme oranını, öteki yıllık kullanım oranını","Verim yıllık, kapasite faktörü anlık ölçüdür","Kapasite faktörü verimden hiçbir zaman düşük olamaz"],a:1,e:"Verim dönüşümün kalitesini, kapasite faktörü ise santralin yıl içinde ne kadar tam güçte çalışmış sayılabileceğini ölçer."},
  {q:"Nükleer santrallerin kapasite faktörünün yüksek olmasının temel nedeni nedir?",o:["Dönüşüm verimlerinin %90'ın üzerinde olması","Yakıtın santralde bulunması ve havadan bağımsız çalışması","Puant saatlerde daha pahalı satış yapmaları","Her gece bakım için kısa süre durmaları"],a:1,e:"Nükleer santraller kontrol edilebilir ve süreklidir; yalnızca planlı bakım ve yakıt değişimi için durur. Dönüşüm verimleri aslında %33 civarındadır."},
  {q:"Bir sistemde ortalama yük 30.000 MW, puant yük 50.000 MW'tır. Yük faktörü kaçtır?",o:["%40","%60","%67","%167"],a:1,e:"Yük faktörü = ortalama ÷ puant = 30.000 ÷ 50.000 = 0,60."},
  {q:"Yük süreklilik eğrisi kısa ve sivri puantlardan sonra hızla düşüyorsa ne söylenebilir?",o:["Yük faktörü yüksektir","Yük faktörü düşüktür","Toplam tüketim çok yüksektir","Baz yük santraline gerek yoktur"],a:1,e:"Kısa süreli tepeler kurulu kapasiteyi büyütür ama ortalama yükü pek artırmaz; ortalama/puant oranı düşer."},
  {q:"Yılda yalnızca birkaç yüz saat görülen tepe talebini karşılamak için en uygun kaynak hangisidir?",o:["Nükleer santral","Jeotermal santral","Açık çevrim gaz türbini","Yerli linyit santrali"],a:2,e:"Puant yük için hızlı devreye girip çıkabilen ve az çalıştığı için yatırım maliyeti düşük kaynaklar seçilir. Diğerleri baz yük santralleridir."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 1, s. 3–11 ve 14–15.",
 "International Energy Agency — Energy statistics and data: <a href=\"https://www.iea.org\">iea.org</a>",
 "T.C. Enerji ve Tabii Kaynaklar Bakanlığı — Enerji kaynakları: <a href=\"https://enerji.gov.tr\">enerji.gov.tr</a>",
 "Enerji Piyasası Düzenleme Kurumu (EPDK): <a href=\"https://www.epdk.gov.tr\">epdk.gov.tr</a>"
],
next:"Sonraki: Hafta 02 — Enerji güvenliği (4A), değer zinciri, talep esnekliği ve piyasa modelleri"
};
