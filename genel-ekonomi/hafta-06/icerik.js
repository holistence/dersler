window.WEEK={
id:"ge-06",code:"GE",course:"Genel Ekonomi",short:"Arz ve denge",week:6,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Mikroiktisat",
title:"Arz, piyasa dengesi ve <em>rant</em>",
intro:"Bu hafta piyasanın öteki yüzünü, arzı öğreneceksiniz: arz kanununu, arz esnekliğini, arzı kaydıran şokları. Ardından arz ile talebi bir araya getirip piyasa dengesini, dengenin nasıl değiştiğini, dinamik fiyatlamayı ve piyasanın tüketiciye ve üreticiye ne kazandırdığını gösteren rant kavramlarını inceleyeceğiz. Okuma süresi yaklaşık 40 dakika; sayfada bir arz-talep grafiği, üç hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Arz kanununu artan marjinal maliyetle açıklayıp arzı kaydıran faktörleri sayabilirsiniz.",
 "Arz esnekliğini hesaplayıp zamanın arz esnekliğine etkisini açıklayabilirsiniz.",
 "Arz veya talepteki bir kaymanın denge fiyatı ve miktarına etkisini grafikte gösterebilirsiniz.",
 "Arz fazlası ve talep fazlasını hesaplayıp fiyat mekanizmasının bunları nasıl giderdiğini açıklayabilirsiniz.",
 "Doğrusal arz ve talep eğrilerinden tüketici ve üretici rantını hesaplayabilirsiniz."
],
sections:[
{n:"6.1",h:"Arz ve arz kanunu",blocks:[
 {t:"def",html:"Arz, belirli bir dönemde, farklı fiyat düzeylerinde üreticilerin piyasada satmak istediği mal ve hizmet miktarıdır.",src:"Kitaptaki özlü ifade: “Fiyat, üretime davetiyedir.”"},
 {t:"p",html:"<b>Arz kanunu</b>, diğer her şey sabitken fiyat ile arz edilen miktar arasında <b>doğru yönlü</b> bir ilişki olduğunu söyler. Arz eğrisi bu yüzden sol alttan sağ üste doğru yükselir. Fiyat artınca hem mevcut üreticiler üretimini genişletir hem de yeni üreticiler piyasaya girer."},
 {t:"p",html:"Arkadaki neden <b>artan marjinal maliyettir</b>. Bir çiftçi domates üretimini artırmak isterse önce en verimli tarlalarını kullanır; sonra daha az verimli tarlalara, fazla mesaiye, daha pahalı gübreye başvurmak zorunda kalır. Her ek kasanın maliyeti yükselir; çiftçi bu kasaları ancak daha yüksek bir fiyat bulursa üretir. Hafta 07'de bu maliyet yapısını ayrıntılı göreceğiz."},
 {t:"p",html:"<b>Piyasa arzı</b>, talepte olduğu gibi, bireysel arz eğrilerinin yatay toplamıdır: her fiyatta bütün üreticilerin satmak istediği miktarlar toplanır."},
 {t:"table",head:["Faktör","Arzı sağa kaydırır (artırır)","Arzı sola kaydırır (azaltır)"],rows:[
  ["Girdi fiyatları (hammadde, enerji, ücret)","Düşerse","Artarsa"],
  ["Teknoloji","Gelişirse (otomasyon, dijitalleşme)","—"],
  ["Vergi ve sübvansiyon","Sübvansiyon verilirse","Vergi konursa ya da artarsa"],
  ["Doğa koşulları","Olumlu hava, bol hasat","Kuraklık, sel, don"],
  ["Üretici sayısı","Yeni firmalar girerse","Firmalar piyasadan çıkarsa"],
  ["Üretici beklentileri","—","Fiyatın yükseleceği beklentisiyle bugünkü satışı erteleme"]]},
 {t:"box",lbl:"Arz şokları",html:"Arz eğrisini aniden kaydıran dışsal olaylara <b>arz şoku</b> denir. Olumsuz şoklar (girdi fiyatı artışı, kuraklık, yeni dolaylı vergi) arzı sola kaydırır; fiyat yükselir, miktar düşer ve enflasyonist baskı oluşur. Olumlu şoklar (teknolojik gelişme, sübvansiyon, bol hasat) arzı sağa kaydırır; fiyat düşer, refah artar. Bir kış ayında seralarda yaşanan don olayının ardından domates fiyatlarının hızla yükselmesi, olumsuz arz şokunun gündelik örneğidir."}
]},
{n:"6.2",h:"Arz esnekliği",blocks:[
 {t:"p",html:"<b>Arz esnekliği</b>, fiyattaki yüzde değişimin arz edilen miktarda ne kadarlık yüzde değişime yol açtığını ölçer: %ΔQ<sub>s</sub> ÷ %ΔP. Arz eğrisi yukarı eğimli olduğu için genellikle pozitiftir. Kitaptaki örnekte fiyat %10 artınca arz %20 artıyor: esneklik 2, arz elastiktir."},
 {t:"widget",name:"calc",opts:{title:"Arz esnekliği",inputs:[{id:"dp",label:"Fiyattaki değişim",min:1,max:50,step:1,value:10,unit:"%"},{id:"dq",label:"Arz edilen miktardaki değişim",min:0,max:60,step:1,value:20,unit:"%"}],formula:"(dq/dp).toLocaleString('tr-TR',{maximumFractionDigits:2})+' → '+(dq==0?'tam inelastik (çok kısa dönem)':(dq/dp>1.005?'elastik':(dq/dp<0.995?'inelastik':'birim esnek')))",result:"Arz esnekliği: {r}",note:"Miktar değişimini sıfıra çekin: hiç üretim artırılamayan çok kısa dönem (ör. hasattan sonra pazara gelen o günkü balık)."}},
 {t:"p",html:"Arz esnekliğini en çok <b>zaman</b> belirler. İktisatta üç dönem ayrılır:"},
 {t:"list",items:[
  "<b>Çok kısa dönem (piyasa dönemi):</b> Üretimi artırma imkânı yoktur, arz eğrisi dikeydir; esneklik sıfırdır. O sabah hale gelen balığın miktarı bellidir.",
  "<b>Kısa dönem:</b> Firmalar yalnızca bazı girdileri (emek, hammadde) değiştirerek üretimi artırabilir.",
  "<b>Uzun dönem:</b> Bütün girdiler ayarlanabilir, yeni firmalar girer; arz en elastik hâlini alır."
 ]},
 {t:"p",html:"Diğer belirleyiciler: üretim teknolojisinin uyarlanabilirliği, girdilerin ikame edilebilirliği, malın <b>stoklanabilirliği</b> (sebze-meyve gibi çabuk bozulan ürünlerde düşük, beyaz eşya gibi dayanıklı ürünlerde yüksek), stok maliyetleri ve üreticilerin geleceğe dair beklentileri."},
 {t:"box",lbl:"Arzın çapraz esnekliği",html:"Bir malın arzının <i>başka</i> bir malın fiyatına tepkisidir. 50 dekar arazisi olan bir çiftçi patates ile ayçiçeği arasında seçim yapıyorsa, iki ürün arz açısından <b>rakiptir</b>: patates fiyatının yükseleceğini bekleyen çiftçi araziyi patatese ayırır, ayçiçeği arzı düşer (negatif çapraz esneklik). Birlikte üretilen mallarda (koyun eti ve yapağı gibi) ise biri artınca öteki de artar (pozitif çapraz esneklik)."}
]},
{n:"6.3",h:"Piyasa dengesi",blocks:[
 {t:"p",html:"Talep eğrisinin arz eğrisiyle kesiştiği nokta <b>piyasa dengesidir</b>. Bu noktadaki fiyata <b>denge fiyatı</b>, miktara <b>denge miktarı</b> denir. Denge fiyatında üreticiler üretmek istedikleri her şeyi satabilir, tüketiciler almak istedikleri her şeyi alabilir; elde istenmeyen stok kalmaz. Buna <b>piyasa temizlenmesi</b> denir."},
 {t:"list",items:[
  "<b>Arz fazlası:</b> Fiyat dengenin üzerindeyse arz edilen miktar talep edileni aşar. Satılamayan stoklar birikir, satıcılar fiyat kırar.",
  "<b>Talep fazlası (kıtlık):</b> Fiyat dengenin altındaysa talep edilen miktar arz edileni aşar. Kuyruklar oluşur, alıcılar daha yüksek fiyat teklif eder.",
  "Rekabetçi bir piyasada fiyat mekanizması bu dengesizlikleri kendiliğinden düzeltme eğilimindedir; fiyat dengeye dönene kadar hareket eder."
 ]},
 {t:"p",html:"Kitaptaki örneğe dönelim. Talep P = 12 − 0,4Q, arz P = 0,4Q ise denge 6 TL fiyat ve 15 birim miktardır. Fiyatı farklı bir düzeye çekip ne olduğuna bakın."},
 {t:"widget",name:"calc",opts:{title:"Dengenin dışında bir fiyat",inputs:[{id:"p",label:"Piyasa fiyatı",min:1,max:11,step:0.5,value:8,unit:" TL"}],formula:"(function(){var qd=(12-p)/0.4,qs=p/0.4,f=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'talep edilen '+f(qd)+', arz edilen '+f(qs)+' → '+(qs>qd+0.01?'arz fazlası '+f(qs-qd)+' birim; fiyat düşme eğiliminde':(qd>qs+0.01?'talep fazlası (kıtlık) '+f(qd-qs)+' birim; fiyat yükselme eğiliminde':'denge: piyasa temizleniyor'));})()",result:"{r}",note:"Talep P = 12 − 0,4Q, arz P = 0,4Q (kitaptaki Şekil 16 ve 25'teki doğrular). Fiyatı 6 TL'ye getirin: piyasa temizlenir."}},
 {t:"p",html:"Fiyat sinyali yapay olarak bozulduğunda, örneğin devlet fiyata tavan koyduğunda, stoklar tükenir, karaborsa oluşabilir ve mal en çok ihtiyacı olana değil, en şanslı olana ya da en fazla ödemeye razı olana gider. Hafta 08'de fiyat kontrollerini ayrıntılı ele alacağız."}
]},
{n:"6.4",h:"Denge nasıl değişir?",blocks:[
 {t:"p",html:"Denge sabit değildir. Arzı veya talebi etkileyen bir faktör değiştiğinde eğri kayar ve yeni bir denge oluşur. Kitaptaki Şekil 25'te talep artınca denge 15 birim/6 TL'den 20 birim/8 TL'ye, arz artınca 20 birim/4 TL'ye gider. Aşağıdaki grafik aynı örneği, sürgülere sığması için fiyat ve miktarları 5 ile çarparak gösterir: başlangıç dengesi 75 birim ve 30 TL'dir."},
 {t:"widget",name:"supplyDemand",opts:{title:"Kitaptaki örnek (5 kat ölçekli)",a:60,b:0.4,c:0,d:0.4,note:"Talep sürgüsünü +20 yapın: denge 100 birim ve 40 TL olur (kitapta 20 birim, 8 TL). Talebi sıfırlayıp arzı +20 yapın: 100 birim ve 20 TL (kitapta 20 birim, 4 TL). İkisini birlikte +20 yapın: miktar artar, fiyat değişmez."}},
 {t:"table",head:["Değişim","Denge fiyatı","Denge miktarı"],rows:[
  ["Talep artar","Yükselir","Artar"],
  ["Talep azalır","Düşer","Azalır"],
  ["Arz artar","Düşer","Artar"],
  ["Arz azalır","Yükselir","Azalır"],
  ["Talep ve arz birlikte artar","Belirsiz (hangisi güçlüyse)","Artar"],
  ["Talep artar, arz azalır","Yükselir","Belirsiz"]]},
 {t:"widget",name:"classify",opts:{title:"Hangi eğri kayar?",cats:["Talep sağa","Talep sola","Arz sağa","Arz sola"],items:[
  ["Kuraklık nedeniyle buğday rekoltesinin düşmesi",3],
  ["Sağlıklı beslenme akımıyla zeytinyağına ilginin artması",0],
  ["Ekmek fırınlarında daha verimli yeni fırınların kullanılması",2],
  ["Elektrik fiyatlarının artmasıyla elektrikli araç talebinin değişmesi",1],
  ["Akaryakıta yeni bir ÖTV artışı yapılması (akaryakıt piyasası)",3],
  ["Bir şehre üniversite açılmasıyla kiralık ev arayanların çoğalması",0],
  ["Sera üreticilerine enerji sübvansiyonu verilmesi",2],
  ["Kahve fiyatı artınca çay piyasasının değişmesi",0]
 ],note:"Elektrikli araç ve elektrik tamamlayıcıdır: elektrik pahalanınca araç talebi sola kayar. Çay ve kahve ikamedir: kahve pahalanınca çay talebi sağa kayar."}}
]},
{n:"6.5",h:"Dinamik fiyatlama",blocks:[
 {t:"p",html:"<b>Dinamik fiyatlama</b>, bir ürünün fiyatını talep, arz, rekabet ve müşteri segmentine göre gerçek zamanlı ayarlayan stratejidir. Aslında arz ve talep dengesinin saatlik, hatta dakikalık olarak yeniden kurulmasıdır. Özellikle kapasitesi sınırlı ve saklanamayan hizmetlerde kullanılır: kalkıştan sonra boş kalan bir uçak koltuğu bir daha satılamaz."},
 {t:"choice",items:[
  {label:"Uçak bileti",title:"Doluluk arttıkça fiyat artar",body:"Tatil sezonu, bayramlar ve hafta sonları pahalıdır. Uçuşun doluluk oranı arttıkça kalan koltukların fiyatı yükselir. Aylar önce alınan bilet çoğu zaman ucuzdur, ama doluluk hedefine ulaşılamazsa son dakika indirimi de çıkabilir.",ex:"Arz sabit (koltuk sayısı), talep zamanla değişiyor; fiyat bu değişimi izliyor."},
  {label:"Konser bileti",title:"Talep belirsizken ucuz, belli olunca pahalı",body:"Erken satış döneminde talep belirsizdir, fiyat uygun tutulur. Ünlü bir sanatçıda talep hızla artınca algoritmalar fiyatı yükseltir. Sahneye yakın koltuklar her zaman daha pahalıdır.",ex:"Müşteri segmentasyonu: aynı salonda farklı koltuklara farklı fiyat."},
  {label:"Temel girdiler",title:"Algoritma neye bakar?",body:"Talep tahmini, farklı segmentlerin talep esnekliği, kalan kapasite, rakip fiyatları ve iptal/gelmeme oranları. Talep yanlış tahmin edilirse ya koltuk boş kalır (fiyat fazla düşük) ya da talep kaçırılır (fiyat fazla yüksek).",ex:"Başarı veri kalitesine ve doğru modellemeye bağlıdır."}
 ]},
 {t:"p",html:"Dinamik fiyatlama kapasitenin daha iyi kullanılmasını ve işletme gelirinin artmasını sağlar; tüketiciyi erken rezervasyona ya da esnek tarih seçmeye teşvik eder. Öte yandan sürekli değişen fiyatlar bazı tüketiciler için kafa karıştırıcıdır ve fiyat adaletine dair tartışmalara yol açabilir."}
]},
{n:"6.6",h:"Tüketici rantı ve üretici rantı",blocks:[
 {t:"def",html:"<b>Tüketici rantı</b>, tüketicilerin bir mal için ödemeye razı oldukları en yüksek fiyat ile ödedikleri piyasa fiyatı arasındaki farktır. <b>Üretici rantı</b>, üreticilerin bir malı satmaya razı oldukları en düşük fiyat ile aldıkları piyasa fiyatı arasındaki farktır.",src:"Grafikte tüketici rantı talep eğrisi ile fiyat çizgisi arasındaki üçgen, üretici rantı fiyat çizgisi ile arz eğrisi arasındaki üçgendir."},
 {t:"p",html:"Bir konser biletine 1.500 TL ödemeye razıyken 1.000 TL'ye aldıysanız 500 TL tüketici rantı elde ettiniz. Bileti en az 600 TL'ye satmaya razı olan organizatör 1.000 TL aldıysa 400 TL üretici rantı elde etti. İkisinin toplamı, piyasanın yarattığı <b>toplam refahtır</b>. Rekabetçi denge, bu toplamın en büyük olduğu noktadır; Hafta 08'de vergilerin ve fiyat kontrollerinin bu toplamı nasıl küçülttüğünü göreceğiz."},
 {t:"box",lbl:"Formül (doğrusal eğriler)",html:"Talep P = a − bQ, arz P = c + dQ, denge (Q*, P*) ise:<br>Tüketici rantı = ½ × (a − P*) × Q*<br>Üretici rantı = ½ × (P* − c) × Q*"},
 {t:"widget",name:"calc",opts:{title:"Rant hesaplayıcı",inputs:[{id:"a",label:"Talebin dikey ekseni kestiği fiyat (a)",min:6,max:30,step:1,value:12,unit:" TL"},{id:"b",label:"Talep eğimi (b)",min:0.1,max:2,step:0.1,value:0.4},{id:"c",label:"Arzın dikey ekseni kestiği fiyat (c)",min:0,max:5,step:0.5,value:0,unit:" TL"},{id:"d",label:"Arz eğimi (d)",min:0.1,max:2,step:0.1,value:0.4}],formula:"(function(){var q=(a-c)/(b+d),p=a-b*q,f=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'denge '+f(q)+' birim, '+f(p)+' TL · tüketici rantı '+f(0.5*(a-p)*q)+' TL · üretici rantı '+f(0.5*(p-c)*q)+' TL · toplam '+f(0.5*(a-c)*q)+' TL';})()",result:"{r}",note:"Başlangıç değerleri kitaptaki örnektir: denge 15 birim ve 6 TL; tüketici rantı ½ × 6 × 15 = 45 TL, üretici rantı da 45 TL. a'yı 16'ya çıkarın (talep artışı): her iki rant da büyür."}},
 {t:"p",html:"Rant kavramı gündelik dilde “haksız kazanç” anlamında kullanılsa da burada teknik bir terimdir ve rekabetçi piyasalarda da vardır. Tekel ise piyasa gücüyle tüketici rantının bir bölümünü kendine aktarır; Hafta 09'da bunu göreceğiz."}
]},
{n:"6.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Arz kanunu","Diğer her şey sabitken fiyat ile arz edilen miktar arasındaki doğru yönlü ilişki."],
  ["Arz şoku","Maliyetleri veya kapasiteyi etkileyerek arz eğrisini aniden kaydıran dışsal olay."],
  ["Arz esnekliği","Arz edilen miktardaki yüzde değişimin fiyattaki yüzde değişime oranı."],
  ["Piyasa dönemi","Üretimin hiç artırılamadığı, arzın tam inelastik olduğu çok kısa dönem."],
  ["Piyasa dengesi","Talep edilen miktarın arz edilen miktara eşit olduğu nokta."],
  ["Talep fazlası","Fiyat dengenin altındayken talep edilen miktarın arz edileni aşması; kıtlık."],
  ["Dinamik fiyatlama","Fiyatın talep, kapasite ve rekabete göre gerçek zamanlı ayarlanması."],
  ["Tüketici rantı","Ödenmeye razı olunan en yüksek fiyat ile piyasa fiyatı arasındaki fark."],
  ["Üretici rantı","Piyasa fiyatı ile satışa razı olunan en düşük fiyat arasındaki fark."]
 ]}
]},
{n:"6.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Arz eğrisinin yukarı eğimli olmasının temel nedeni nedir?",o:["Tüketicilerin yüksek fiyatı tercih etmesi","Üretimi artırdıkça marjinal maliyetin artması","Devletin üreticiye sübvansiyon vermesi","Talebin fiyatla ters yönlü olması"],a:1,e:"Ek üretim giderek daha pahalı kaynaklarla yapılır; üreticiler bu birimleri ancak daha yüksek fiyatla üretmeye razı olur."},
  {q:"Gübre fiyatlarının sert artması buğday piyasasında ne yapar?",o:["Arz sağa kayar, fiyat düşer","Arz sola kayar, fiyat yükselir","Talep sola kayar, fiyat düşer","Hiçbir eğri kaymaz"],a:1,e:"Girdi maliyeti artışı aynı fiyattan daha az üretim demektir; arz sola kayar, denge fiyatı yükselir, miktar düşer."},
  {q:"Bir malın fiyatı %10 arttığında arz edilen miktar %5 artıyor. Arz esnekliği ve yorumu nedir?",o:["2; elastik","0,5; inelastik","1; birim esnek","−0,5; tamamlayıcı"],a:1,e:"5 ÷ 10 = 0,5. Değer 1'den küçük olduğu için arz inelastiktir."},
  {q:"Hangi ürünün arzının kısa dönemde en inelastik olması beklenir?",o:["O sabahki taze balık","Plastik su şişesi","Pamuklu basic tişört","Paketli dondurulmuş sebze"],a:0,e:"O günün avı bellidir, saklanması da zordur; fiyat artsa bile miktar hemen artırılamaz."},
  {q:"Talep P = 12 − 0,4Q, arz P = 0,4Q iken fiyat 8 TL'de tutuluyor. Ne oluşur?",o:["10 birim talep fazlası","10 birim arz fazlası","5 birim arz fazlası","Piyasa dengededir"],a:1,e:"Talep edilen (12−8)/0,4 = 10, arz edilen 8/0,4 = 20 birim. Arz 10 birim fazladır; fiyat düşme eğilimine girer."},
  {q:"Bir şehre yeni bir üniversite açıldı ve aynı dönemde çok sayıda yeni apartman tamamlandı. Kiralık daire piyasasında kesin olarak ne söylenebilir?",o:["Kiralar kesinlikle yükselir","Kiralanan daire sayısı artar","Kiralar kesinlikle düşer","Hiçbir şey değişmez"],a:1,e:"Talep ve arz birlikte sağa kayınca miktar kesinlikle artar; fiyatın yönü hangi kaymanın daha güçlü olduğuna bağlıdır."},
  {q:"Talep artarken arz azalıyorsa denge için hangisi kesindir?",o:["Fiyat yükselir","Miktar artar","Fiyat düşer","Miktar azalır"],a:0,e:"İki kayma da fiyatı yukarı iter; miktar üzerindeki etkileri ise ters yönlüdür ve sonuç belirsizdir."},
  {q:"Havayollarının doluluk oranı arttıkça kalan koltukların fiyatını yükseltmesi hangi kavramla açıklanır?",o:["Tavan fiyat uygulaması","Dinamik fiyatlama","Giffen paradoksu","Ölçek ekonomisi"],a:1,e:"Kapasite sabitken değişen talebe göre fiyatın gerçek zamanlı ayarlanması dinamik fiyatlamadır."},
  {q:"Bir kitaba 400 TL ödemeye razıydınız, 250 TL'ye aldınız. Tüketici rantınız ne kadardır?",o:["250 TL","400 TL","150 TL","650 TL"],a:2,e:"Tüketici rantı ödemeye razı olunan fiyat ile ödenen fiyat arasındaki farktır: 400 − 250 = 150 TL."},
  {q:"Talep P = 12 − 0,4Q, arz P = 0,4Q iken denge 15 birim ve 6 TL'dir. Üretici rantı nedir?",o:["90 TL","45 TL","30 TL","15 TL"],a:1,e:"Üretici rantı fiyat çizgisi ile arz eğrisi arasındaki üçgendir: ½ × (6 − 0) × 15 = 45 TL."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 13–15, s. 118–136.",
 "Mankiw, N. G. <i>Principles of Economics</i>. Cengage Learning (Bölüm 4–5 ve 7: arz, talep, esneklik; tüketici ve üretici rantı).",
 "Marshall, A. (1890). <i>Principles of Economics</i>. Macmillan (Kitap V: arz, talep ve dengenin zaman boyutu).",
 "Türkiye İstatistik Kurumu — Tarım ve fiyat istatistikleri: <a href=\"https://data.tuik.gov.tr\">data.tuik.gov.tr</a>"
],
next:"Sonraki: Hafta 07 — Üretim ve maliyetler"
};
