window.WEEK={
id:"en-05",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Güneş, rüzgâr, hidro",week:5,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Yenilenebilir enerji I",
title:"Güneş, rüzgâr ve <em>su</em>: üretimi ne belirler?",
intro:"Bu hafta üç büyük yenilenebilir teknolojinin tekno-ekonomik temellerini öğreneceksiniz: bir güneş panelinin verimini ve yıllık üretimini neyin belirlediğini, rüzgâr türbininde rotor çapı ile göbek yüksekliğinin neden bu kadar önemli olduğunu ve barajlı ile nehir tipi hidroelektrik santrallerin farkını. Okuma süresi yaklaşık 45 dakika; sayfada dört hesaplayıcı, sekmeli karşılaştırmalar ve 10 soruluk bir test var.",
goals:[
 "Bir PV panelin verimini hesaplayıp panel teknolojilerini verim ve maliyete göre karşılaştırabilirsiniz.",
 "Bir güneş santralinin yıllık üretimini alan, ışınım, verim ve performans oranından hesaplayabilirsiniz.",
 "Rüzgâr gücü formülünü (½ρAv³) kullanarak rotor çapı ve rüzgâr hızındaki değişimin etkisini hesaplayabilirsiniz.",
 "Göbek yüksekliğinin rüzgâr hızı ve kapasite faktörü üzerindeki etkisini açıklayabilirsiniz.",
 "Barajlı (depolamalı) ve nehir tipi hidroelektrik santralleri işlev, maliyet ve çevresel etki açısından karşılaştırabilirsiniz."
],
sections:[
{n:"5.1",h:"Yenilenebilir enerjiye tekno-ekonomik bakış",blocks:[
 {t:"p",html:"Güneş, rüzgâr ve akan su doğanın her gün yenilediği kaynaklardır. Ama bir yatırımcı için asıl soru “kaynak var mı?” değil, “bu kaynaktan <b>ne kadar elektrik</b>, <b>hangi maliyetle</b> üretilir?” sorusudur. Bu yüzden bu hafta her teknolojiye iki gözle bakacağız: fiziksel (üretimi ne belirler?) ve ekonomik (bu üretim yatırımı karşılar mı?)."},
 {t:"p",html:"Üç teknolojinin ortak özelliği <b>yakıt maliyetinin sıfır</b> olmasıdır. Maliyetin neredeyse tamamı başlangıçtaki yatırımdır. Bu yüzden yıllık üretimi, yani kapasite faktörünü artıran her mühendislik kararı doğrudan birim maliyeti düşürür. Hafta 06'da bu bağlantıyı LCOE ile sayısallaştıracağız."},
 {t:"box",lbl:"Türkiye'den örnek: YEKDEM",html:"Türkiye'de yenilenebilir elektrik üretimi 2005 tarihli 5346 sayılı Yenilenebilir Enerji Kaynaklarının Elektrik Enerjisi Üretimi Amaçlı Kullanımına İlişkin Kanun ile desteklenir. Bu kanuna dayanan <b>YEKDEM</b> (Yenilenebilir Enerji Kaynakları Destekleme Mekanizması), belirli süre boyunca kaynağa göre belirlenmiş bir fiyattan alım güvencesi sağlar. Fiyatlar ve kapsam dönemden döneme değiştiği için güncel değerler EPDK ve Enerji ve Tabii Kaynaklar Bakanlığı duyurularından izlenmelidir."}
]},
{n:"5.2",h:"Güneş: PV panelin verimi",blocks:[
 {t:"def",html:"Fotovoltaik (PV) paneller güneş ışığını doğrudan elektriğe dönüştürür. Panel verimi, panelden alınan elektrik gücünün panele gelen güneş gücüne oranıdır.",src:"Verim = Üretilen güç ÷ (Işınım × Panel alanı). Standart test koşulunda ışınım 1.000 W/m² kabul edilir."},
 {t:"p",html:"Kitaptaki örnekte <b>1 m²</b> alana 1.000 W/m² ışınım düşüyor ve panel 200 W üretiyor; verim %20'dir. Verim sabit değildir: <b>sıcaklık arttıkça düşer</b> (yazın en güneşli günlerde bile panel çok ısındığında üretim sınırlanır), ışığın geliş açısı, bulut, gölge, toz ve kir de üretimi azaltır. Gölgelenme özellikle kritiktir; tek bir hücrenin gölgede kalması bütün dizinin akımını düşürebilir."},
 {t:"table",head:["Panel teknolojisi","Ortalama verim","Artısı","Eksisi"],rows:[
  ["Monokristal silisyum","%18–22","Yüksek verim, az alan","Daha yüksek maliyet"],
  ["Polikristal silisyum","%15–18","Düşük maliyet","Düşük verim, sıcakta performans kaybı"],
  ["İnce film (CdTe)","%16–18","Sıcakta ve düşük ışıkta iyi performans, ucuz üretim","Kadmiyum içeriği; diğer ince film türlerinde verim düşük"],
  ["PERC hücreler","%21–23","Daha yüksek verim, düşük ışıkta iyi performans","Geleneksel panele göre pahalı"]]},
 {t:"p",html:"PERC, bir hücre mimarisidir; çoğunlukla monokristal hücrelere uygulanır ve hücrenin arka yüzüne eklenen pasifleştirme katmanıyla verimi artırır. Teknoloji hızla ilerlediği için bugün piyasadaki ticari panellerin verimi bu tablodaki aralıkların üst ucuna doğru kayıyor; tablodaki değerleri bir eğilim olarak okuyun."}
]},
{n:"5.3",h:"Bir güneş santrali yılda ne üretir?",blocks:[
 {t:"p",html:"Bir güneş santralinin yıllık üretimini kabaca üç büyüklük belirler: panel <b>alanı</b>, yerin yıllık <b>güneş ışınımı</b> (kWh/m²/yıl) ve panel <b>verimi</b>. Bunlara gerçek sahadaki kayıpları (sıcaklık, kablolar, evirici, toz, gölge) yansıtan bir <b>performans oranı</b> eklenir; iyi tasarlanmış santrallerde bu oran genellikle %75–85 aralığındadır."},
 {t:"box",lbl:"Formül",html:"Yıllık üretim (kWh) = Alan (m²) × Yıllık ışınım (kWh/m²) × Panel verimi × Performans oranı<br>Kurulu güç (kWp) = Alan × 1 kW/m² × Panel verimi<br>Kapasite faktörü = Yıllık üretim ÷ (Kurulu güç × 8.760)"},
 {t:"widget",name:"calc",opts:{title:"Güneş santrali yıllık üretimi",inputs:[{id:"a",label:"Panel alanı",min:10,max:20000,step:10,value:5000,unit:" m²"},{id:"g",label:"Yıllık güneş ışınımı (eğik yüzey)",min:900,max:2400,step:50,value:1700,unit:" kWh/m²"},{id:"v",label:"Panel verimi",min:10,max:24,step:0.5,value:21,unit:"%"},{id:"r",label:"Performans oranı",min:60,max:90,step:1,value:80,unit:"%"}],formula:"(function(){var e=a*g*v/100*r/100;var kwp=a*v/100;var cf=e/(kwp*8760)*100;var f=function(x,d){return x.toLocaleString('tr-TR',{maximumFractionDigits:d||0})};return f(e/1000,1)+' MWh/yıl · kurulu güç ≈ '+f(kwp)+' kWp · kapasite faktörü %'+f(cf,1);})()",result:"Yıllık üretim: {r}",note:"Işınım değeri örnektir; panellerin eğimli yüzeyine düşen yıllık ışınım Türkiye'nin güneyinde kuzeyine göre belirgin biçimde yüksektir. Işınımı 1.200'e indirin: aynı panellerle kapasite faktörü düşer. Panel verimini artırmak kapasite faktörünü değiştirmez, ama aynı alandan daha çok güç ve üretim alınmasını sağlar; çatı gibi alanın kıt olduğu yerlerde yüksek verimli paneller bu yüzden tercih edilir."}},
 {t:"p",html:"Hesaplayıcı önemli bir ayrımı gösteriyor: panel verimi <b>birim alandan</b> alınan üretimi, ışınım ise <b>birim kurulu güçten</b> alınan üretimi belirler. Bu yüzden güneş yatırımlarında yer seçimi panel seçimi kadar önemlidir. Doğru panel teknolojisi, uygun yön ve eğim, düzenli temizlik ve bakım uzun vadeli üretimi belirleyen başlıca kararlardır."}
]},
{n:"5.4",h:"Rüzgâr: rotor çapı ve hızın küpü",blocks:[
 {t:"p",html:"Bir rüzgâr türbininin performansı yalnızca nominal gücüyle (MW) değil, <b>rotor çapı</b> ve <b>göbek yüksekliği</b> gibi fiziksel ölçüleriyle de belirlenir. Bunu anlamanın yolu rüzgâr gücü formülüdür."},
 {t:"box",lbl:"Formül",html:"Rüzgârdaki güç: <b>P = ½ × ρ × A × v³</b><br>ρ: hava yoğunluğu (deniz seviyesinde yaklaşık 1,225 kg/m³) · A: rotorun süpürdüğü alan = π × (D/2)² · v: rüzgâr hızı (m/s)<br>Türbin bu gücün yalnızca bir kısmını yakalayabilir. Kuramsal üst sınır <b>Betz sınırı</b> denen %59,3'tür; modern türbinlerin güç katsayısı (Cp) en iyi koşulda yaklaşık %45–50'dir."},
 {t:"p",html:"Formülden iki önemli sonuç çıkar. Birincisi, güç alanla, alan da <b>çapın karesiyle</b> büyür: kitaptaki örnekte rotor çapındaki %20'lik artış süpürülen alanı 1,2² = 1,44 kat, yani yaklaşık <b>%44</b> artırır. İkincisi, güç <b>hızın küpüyle</b> büyür: rüzgâr hızı %10 artarsa güç 1,1³ ≈ 1,33 kat, yani yaklaşık %33 artar; hız iki katına çıkarsa güç sekiz katına çıkar."},
 {t:"widget",name:"calc",opts:{title:"Rüzgâr türbininin yakaladığı güç",inputs:[{id:"d",label:"Rotor çapı",min:20,max:240,step:2,value:150,unit:" m"},{id:"v",label:"Rüzgâr hızı",min:3,max:12,step:0.5,value:8,unit:" m/s"},{id:"c",label:"Güç katsayısı (Cp)",min:20,max:59,step:1,value:45,unit:"%"}],formula:"(function(){var A=Math.PI*Math.pow(d/2,2);var w=0.5*1.225*A*Math.pow(v,3);var p=w*c/100;var f=function(x){return x>=1e6?(x/1e6).toLocaleString('tr-TR',{maximumFractionDigits:2})+' MW':Math.round(x/1000).toLocaleString('tr-TR')+' kW'};return f(p)+' · süpürülen alan '+Math.round(A).toLocaleString('tr-TR')+' m² · rüzgârdaki toplam güç '+f(w);})()",result:"Yakalanan güç: {r}",note:"Hava yoğunluğu 1,225 kg/m³ alındı. Çapı 150'den 180 m'ye çıkarın (%20): güç yaklaşık %44 artar. Hızı 8'den 10 m/s'ye çıkarın (%25): güç yaklaşık %95 artar (1,25³ ≈ 1,95). Gerçek türbinde güç, nominal güce ulaşınca (genellikle 11–13 m/s civarı) sabitlenir; bu hesap nominal hızın altındaki bölge için geçerlidir. Cp'yi %59'a çekin: Betz sınırını aşamazsınız."}},
 {t:"box",lbl:"Dikkat: ortalama hız yanıltır",html:"Güç hızın küpüyle değiştiği için, ortalama rüzgâr hızı aynı olan iki sahanın üretimi çok farklı olabilir. Yarı zamanda 4 m/s, yarı zamanda 12 m/s esen bir sahanın ortalaması 8 m/s'dir, ama ortalama gücü sürekli 8 m/s esen sahanın yaklaşık 1,75 katıdır: (4³ + 12³) ÷ 2 = 896, oysa 8³ = 512. Bu yüzden rüzgâr ölçümünde ortalama değil, hızların <b>dağılımı</b> incelenir."}
]},
{n:"5.5",h:"Göbek yüksekliği ve kapasite faktörü",blocks:[
 {t:"p",html:"<b>Göbek yüksekliği</b> (hub yüksekliği), rotorun merkezinin yerden yüksekliğidir. Yeryüzüne yakın yerde rüzgâr, ağaçlar, binalar ve arazi pürüzlülüğü nedeniyle sürtünmeye uğrar; zayıf ve türbülanslı eser. Yükseldikçe rüzgâr hem hızlanır hem daha düzenli hâle gelir. 50 m'deki rüzgâr ile 100–150 m'deki rüzgâr arasında belirgin fark vardır."},
 {t:"box",lbl:"Yaklaşık formül: rüzgâr kesme üssü",html:"Yükseklikle hız artışı mühendislikte sıkça bir üs yasasıyla yaklaşık olarak hesaplanır: <b>v₂ = v₁ × (h₂ ÷ h₁)<sup>α</sup></b><br>α (kesme üssü) arazinin pürüzlülüğüne bağlıdır: açık denizde ve düz arazide küçük (yaklaşık 0,1), ormanlık ve engebeli arazide büyüktür (0,3'e kadar). Sık kullanılan bir başlangıç değeri 1/7 ≈ 0,14'tür."},
 {t:"widget",name:"calc",opts:{title:"Yükseklik rüzgârı ve gücü nasıl değiştirir?",inputs:[{id:"v",label:"Ölçüm yüksekliğindeki hız",min:3,max:10,step:0.1,value:6,unit:" m/s"},{id:"h",label:"Ölçüm yüksekliği",min:10,max:100,step:5,value:50,unit:" m"},{id:"g",label:"Göbek yüksekliği",min:40,max:180,step:5,value:120,unit:" m"},{id:"s",label:"Kesme üssü (α)",min:0.08,max:0.35,step:0.01,value:0.14}],formula:"(function(){var v2=v*Math.pow(g/h,s);var r=Math.pow(v2/v,3);var f=function(x,k){return x.toLocaleString('tr-TR',{maximumFractionDigits:k})};return f(v2,2)+' m/s → aynı rotorla güç '+f(r,2)+' katı (%'+f((r-1)*100,0)+' değişim)';})()",result:"Göbek yüksekliğindeki hız: {r}",note:"Varsayılan değerlerle göbeği 50 m'den 120 m'ye çıkarmak hızı yaklaşık %13, gücü yaklaşık %44 artırır. Kesme üssünü 0,25'e çıkarın (pürüzlü arazi): yükseklik kazancı daha da büyür. Daha uzun kule daha pahalıdır; karar, ek üretimin ek maliyeti karşılayıp karşılamadığına göre verilir."}},
 {t:"p",html:"Doğru seçilmiş rotor çapı ve göbek yüksekliği türbinin <b>düşük rüzgâr hızlarında bile</b> üretmesini sağlar; yıllık üretim ve kapasite faktörü yükselir. Bu yüzden son yıllarda aynı nominal güçte daha büyük rotorlu ve daha yüksek kuleli türbinler yaygınlaştı. Bedeli ise daha yüksek kule, kanat ve temel maliyeti ile ulaşım zorluğudur."}
]},
{n:"5.6",h:"Hidroelektrik: barajlı ve nehir tipi",blocks:[
 {t:"p",html:"Hidroelektrik santraller (HES), suyun potansiyel ve kinetik enerjisinden yararlanır. Üretilen güç, suyun düştüğü <b>yükseklik</b> (düşü, H) ile türbinden geçen <b>debiye</b> (Q) bağlıdır."},
 {t:"box",lbl:"Formül",html:"<b>P = ρ × g × Q × H × η</b><br>ρ: suyun yoğunluğu (1.000 kg/m³) · g: yerçekimi ivmesi (9,81 m/s²) · Q: debi (m³/s) · H: net düşü (m) · η: türbin-jeneratör verimi (genellikle %85–90)<br>Kısa yol: P (MW) ≈ 9,81 × Q × H × η ÷ 1.000"},
 {t:"widget",name:"calc",opts:{title:"Hidroelektrik santral gücü",inputs:[{id:"q",label:"Debi",min:5,max:1500,step:5,value:200,unit:" m³/s"},{id:"h",label:"Net düşü",min:5,max:300,step:5,value:100,unit:" m"},{id:"e",label:"Verim",min:70,max:95,step:1,value:90,unit:"%"}],formula:"(function(){var p=1000*9.81*q*h*e/100/1e6;return p.toLocaleString('tr-TR',{maximumFractionDigits:1})+' MW';})()",result:"Elektrik gücü: {r}",note:"Aynı gücü yüksek düşü ve az suyla ya da alçak düşü ve çok suyla elde edebilirsiniz. Düşüyü 100'den 20 m'ye indirin: aynı gücü korumak için debiyi beş katına çıkarmanız gerekir. Nehir tipi santraller genellikle düşük düşülü ve debiye bağımlıdır; barajlar ise yüksek düşü ve depolanan su sağlar."}},
 {t:"choice",items:[
  {label:"Barajlı (depolamalı)",title:"Su biriktir, istediğin zaman üret",body:"Baraj arkasında büyük bir rezervuar oluşturulur; su depolanır ve yıl boyunca kontrollü biçimde türbinlere verilir. Üretim, suyun doğal akışından bağımsız planlanabilir; puant saatlerde hızla devreye girerek şebekeyi dengeler. Taşkın kontrolü ve sulama gibi ek faydalar sağlar.",ex:"Eksileri: yüksek yatırım maliyeti, geniş alanların sular altında kalması, yerleşim ve ekosistem üzerindeki etkiler. Türkiye'den örnek: Fırat üzerindeki Atatürk Barajı ve HES'i."},
  {label:"Nehir tipi (akarsu)",title:"Akan suyla anlık üretim",body:"Büyük bir rezervuar kurulmadan nehrin doğal akışı kullanılır; su genellikle bir regülatörle iletim kanalına ya da tüneline alınıp türbinlere yönlendirilir. Yatırım maliyeti ve çevresel-sosyal etkiler barajlı sistemlere göre daha sınırlıdır.",ex:"Eksileri: üretim doğrudan nehrin debisine bağlıdır; mevsimsel akış değişimleri üretimi istikrarsızlaştırır. Bu santrallerin derede bıraktığı can suyu miktarı Türkiye'de sık tartışma konusu olmuştur."},
  {label:"Pompaj depolamalı",title:"Su ile enerji depolamak",body:"İki rezervuar arasında, elektriğin ucuz ve bol olduğu saatlerde su yukarı pompalanır, pahalı ve kıt olduğu saatlerde aşağı bırakılarak elektrik üretilir. Bir üretim kaynağından çok büyük ölçekli bir depolama sistemidir.",ex:"Hafta 06'da lityum-iyon bataryalarla karşılaştıracağız."}
 ]},
 {t:"p",html:"Sonuç olarak barajlı santraller enerji güvenliği, şebeke dengeleme ve büyük ölçekli üretim için kritik bir rol oynar; nehir tipi santraller ise düşük maliyet, daha sınırlı çevresel etki ve yerel enerji ihtiyacına katkılarıyla öne çıkar. İkisi de yağışa bağımlıdır: kurak yıllarda hidroelektrik üretimi düşer ve açık genellikle fosil yakıtlı santrallerle kapatılır."}
]},
{n:"5.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["PV panel verimi","Panelden alınan elektrik gücünün panele düşen güneş gücüne oranı."],
  ["Performans oranı","Sahadaki gerçek kayıpları (sıcaklık, kablo, evirici, kir) yansıtan düzeltme katsayısı."],
  ["PERC","Hücrenin arka yüzündeki pasifleştirme katmanıyla verimi artıran hücre mimarisi."],
  ["Rüzgâr gücü formülü","P = ½ρAv³; güç alanla doğru, hızın küpüyle orantılı."],
  ["Süpürülen alan","Rotor kanatlarının döndüğü dairenin alanı: π(D/2)²."],
  ["Betz sınırı","Bir türbinin rüzgârdan alabileceği kuramsal en yüksek güç oranı: %59,3."],
  ["Göbek yüksekliği","Rotor merkezinin yerden yüksekliği; yükseldikçe rüzgâr hızlanır ve düzenlenir."],
  ["Düşü ve debi","Hidroelektrikte suyun düştüğü yükseklik (m) ve saniyede geçen su miktarı (m³/s)."],
  ["Barajlı HES","Rezervuarda su depolayarak üretimi zamana yayabilen, şebekeyi dengeleyen santral."],
  ["Nehir tipi HES","Rezervuarsız, nehrin doğal akışına bağlı üretim yapan santral."]
 ]}
]},
{n:"5.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"2 m² alanlı bir panele 1.000 W/m² ışınım düşüyor ve panel 400 W üretiyor. Verimi kaçtır?",o:["%40","%20","%10","%4"],a:1,e:"Gelen güç 2 × 1.000 = 2.000 W. 400 ÷ 2.000 = 0,20, yani %20."},
  {q:"Güneşli bir yaz gününde panel sıcaklığı çok yükselirse ne olur?",o:["Verim artar","Verim düşer","Verim değişmez","Panel üretimi tamamen durur"],a:1,e:"PV hücrelerin verimi sıcaklık arttıkça düşer; bu yüzden soğutma ve havalandırma üretimi artırabilir."},
  {q:"1.000 m² panel, yılda 1.600 kWh/m² ışınım, %20 verim ve %80 performans oranı ile yılda yaklaşık ne kadar üretir?",o:["256 MWh","320 MWh","1.600 MWh","128 MWh"],a:0,e:"1.000 × 1.600 × 0,20 × 0,80 = 256.000 kWh = 256 MWh."},
  {q:"Rotor çapı %20 artırılırsa, aynı rüzgâr hızında yakalanan güç yaklaşık ne kadar artar?",o:["%20","%44","%73","%10"],a:1,e:"Güç süpürülen alanla, alan çapın karesiyle orantılıdır: 1,2² = 1,44, yani yaklaşık %44 artış."},
  {q:"Rüzgâr hızı 6 m/s'den 12 m/s'ye çıkarsa türbinin yakaladığı güç (nominal gücün altında) kaç katına çıkar?",o:["2 katına","4 katına","8 katına","16 katına"],a:2,e:"Güç hızın küpüyle orantılıdır: 2³ = 8."},
  {q:"Betz sınırı neyi ifade eder?",o:["Bir türbinin en yüksek rotor çapını","Rüzgârdaki gücün en fazla %59,3'ünün alınabileceğini","Türbinin durduğu en yüksek rüzgâr hızını","Bir sahaya kurulabilecek türbin sayısını"],a:1,e:"Rüzgâr türbinden geçerken tamamen durdurulamaz; kuramsal olarak gücün en fazla %59,3'ü yakalanabilir."},
  {q:"Göbek yüksekliğini artırmanın temel amacı nedir?",o:["Türbinin bakım ve onarımını kolaylaştırmak","Daha hızlı ve düzenli rüzgâra ulaşmak","Aynı güç için rotor çapını küçültebilmek","Rotordan geçen havanın yoğunluğunu artırmak"],a:1,e:"Yüzey sürtünmesi yükseklikle azalır; rüzgâr hızlanır ve düzenlenir, kapasite faktörü yükselir."},
  {q:"Debisi 100 m³/s, net düşüsü 50 m ve verimi %90 olan bir HES'in gücü yaklaşık nedir?",o:["4,4 MW","44 MW","441 MW","4.410 MW"],a:1,e:"1.000 × 9,81 × 100 × 50 × 0,90 ≈ 44,1 milyon W ≈ 44 MW."},
  {q:"Barajlı HES'i nehir tipinden ayıran en önemli işlevsel özellik nedir?",o:["Türbinleri çalıştırmak için yakıt kullanması","Suyu depolayıp üretimi zamanlayabilmesi","Yalnızca kırsal bölgelerde kurulabilmesi","Hiçbir çevresel ve sosyal etkisinin olmaması"],a:1,e:"Rezervuar sayesinde üretim doğal akıştan bağımsız planlanır; puant saatlerde devreye girerek şebekeyi dengeler."},
  {q:"Ortalama rüzgâr hızı aynı olan iki sahadan, hızı daha çok dalgalanan sahanın üretimi için ne söylenebilir?",o:["Her koşulda daha düşük olur","Küp ilişkisi nedeniyle daha yüksek olabilir","Ortalama aynı olduğu için kesinlikle eşittir","Yalnızca kış aylarında farklılaşır"],a:1,e:"Küp ilişkisi nedeniyle yüksek hızlı saatler gücü orantısız artırır; ortalama hız tek başına yeterli bilgi vermez."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 3, s. 40–45.",
 "Manwell, J. F., McGowan, J. G., Rogers, A. L. (2009). <i>Wind Energy Explained: Theory, Design and Application</i> (2. bs.). Wiley.",
 "International Renewable Energy Agency (IRENA): <a href=\"https://www.irena.org\">irena.org</a>",
 "T.C. Enerji ve Tabii Kaynaklar Bakanlığı — Yenilenebilir enerji: <a href=\"https://enerji.gov.tr\">enerji.gov.tr</a>"
],
next:"Sonraki: Hafta 06 — Yenilenebilir enerji II: biyokütle, jeotermal, LCOE, depolama, hidrojen"
};
