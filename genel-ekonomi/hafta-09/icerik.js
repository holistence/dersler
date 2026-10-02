window.WEEK={
id:"ge-09",code:"GE",course:"Genel Ekonomi",short:"Piyasa yapıları",week:9,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Mikroiktisat",
title:"Piyasa yapıları: tam rekabetten <em>oligopole</em>",
intro:"Bu hafta firmaların hangi piyasa yapısı içinde faaliyet gösterdiğine göre fiyatı ve üretim miktarını nasıl belirlediğini öğreneceksiniz. Tam rekabet, monopol, monopolcü rekabet ve oligopol; firma sayısı, ürünün niteliği, giriş engelleri ve fiyat belirleme gücü bakımından birbirinden ayrılır. Okuma süresi yaklaşık 40 dakika; sayfada bir sınıflandırma alıştırması, bir başabaş hesaplayıcısı, bir kartel deneyi ve 10 soruluk bir test var.",
goals:[
 "Dört piyasa yapısını firma sayısı, ürün türü, giriş engeli ve fiyat gücü ölçütleriyle ayırt edebilirsiniz.",
 "Kâr maksimizasyonu koşulunu (MR = MC) her piyasa yapısında uygulayabilirsiniz.",
 "Başabaş noktasını hesaplayıp normal kâr, aşırı kâr ve kapanma noktası kavramlarını açıklayabilirsiniz.",
 "Monopolde fiyat farklılaştırmasının türlerini ve doğal tekelin nasıl düzenlendiğini açıklayabilirsiniz.",
 "Oligopolde karşılıklı bağımlılığı ve kartellerin neden kırılgan olduğunu tutsak ikilemiyle yorumlayabilirsiniz."
],
sections:[
{n:"9.1",h:"Piyasa yapısı neyi belirler?",blocks:[
 {t:"p",html:"Piyasa yapısı; bir piyasadaki <b>firma sayısını</b>, ürünlerin birbirine ne kadar benzediğini, piyasaya <b>giriş engellerini</b> ve firmaların <b>piyasa gücünü</b> anlatır. Bu özellikler fiyatı, üretim miktarını, kaliteyi, yeniliği ve toplam refahı doğrudan belirler."},
 {t:"p",html:"Pazardaki domates tezgâhı ile şehrinizdeki tek doğal gaz dağıtım şirketi aynı kararla karşı karşıya değildir. Tezgâh sahibi fiyatı piyasada bulur; dağıtım şirketi ise fiyatı kendisi koyabilir, bu yüzden düzenlenir. Önce dört yapıyı yan yana görün."},
 {t:"table",head:["Özellik","Tam rekabet","Monopol","Monopolcü rekabet","Oligopol"],rows:[
  ["Firma sayısı","Çok sayıda","Tek firma","Çok sayıda","Az sayıda"],
  ["Ürün","Homojen","Eşsiz, ikamesiz","Farklılaştırılmış","Homojen ya da farklılaştırılmış"],
  ["Fiyat gücü","Yok (fiyat alıcı)","Yüksek (fiyat koyucu)","Sınırlı","Orta–yüksek"],
  ["Giriş","Serbest","Çok zor","Serbest","Zor"],
  ["Uzun dönem kâr","Normal kâr","Ekonomik kâr","Normal kâr","Ekonomik kâr olabilir"],
  ["Örnek","Buğday, mısır","Elektrik dağıtımı","Restoranlar","Otomobil"]]},
 {t:"widget",name:"classify",opts:{title:"Bu piyasa hangi yapıya daha yakın?",cats:["Tam rekabet","Monopol","Monopolcü rek.","Oligopol"],items:[
  ["Bir ildeki elektrik dağıtım şebekesi",1],
  ["Borsada işlem gören bir tahıl türü",0],
  ["Bir semtteki çok sayıda kafe ve restoran",2],
  ["Birkaç büyük firmanın paylaştığı çimento sektörü",3],
  ["Patentli yeni bir ilacın tek üreticisi",1],
  ["Çok sayıda markanın yarıştığı şampuan rafı",2],
  ["Az sayıda büyük operatörün olduğu mobil iletişim",3],
  ["Döviz piyasasında tek bir küçük alıcı",0]],
  note:"İpucu: Önce firma sayısına, sonra ürünün farklılaştırılıp farklılaştırılmadığına bakın. Patent ve şebeke altyapısı monopolün, yüksek yatırım maliyeti ve az sayıda oyuncu oligopolün işaretidir."}}
]},
{n:"9.2",h:"Tam rekabet: fiyatı piyasa belirler",blocks:[
 {t:"p",html:"Tam rekabette çok sayıda alıcı ve satıcı vardır, ürün <b>homojendir</b>, giriş ve çıkış serbesttir ve herkes tam bilgiye sahiptir. Hiçbir firma tek başına fiyatı etkileyemez; firma <b>fiyat alıcıdır</b>. Bu yüzden tek bir firmanın karşılaştığı talep eğrisi yataydır: piyasa fiyatından istediği kadar satabilir."},
 {t:"def",html:"Kâr maksimizasyonu kuralı: <b>MR = MC</b>.",src:"Firma, bir birim daha üretmenin getirdiği ek gelir (marjinal gelir) ek maliyete (marjinal maliyet) eşit olana kadar üretir. Tam rekabette P = MR olduğu için kural P = MC biçimini alır."},
 {t:"p",html:"Kural, kârın sıfır olduğu yeri değil, kârın <b>en büyük</b> olduğu yeri gösterir. MR > MC ise üretimi artırmak kârı büyütür; MR < MC ise üretimi azaltmak gerekir. Firmanın kısa dönem arz eğrisi, ortalama değişken maliyetin (AVC) en düşük noktasının üstünde kalan marjinal maliyet eğrisidir."},
 {t:"p",html:"Uzun dönemde ekonomik kâr yeni firmaları çeker, arz artar, fiyat düşer. Süreç fiyat ortalama maliyetin en düşük noktasına (P = AC) inene kadar sürer. Sonuçta firmalar yalnızca <b>normal kâr</b> elde eder: tüm açık ve örtük maliyetleri karşılayan, sermayeye olağan getiriyi sağlayan kâr."},
 {t:"box",lbl:"Normal kâr, aşırı kâr, başabaş, kapanma",html:"<ul style=\"margin:0;padding-left:20px\"><li><b>Normal kâr:</b> Yıllık maliyeti 1 milyon TL olan ve yatırımcısına %10 getiri sağlaması gereken firmanın normal kârı 100.000 TL'dir.</li><li><b>Aşırı kâr:</b> Normal kârın üzerindeki kazanç; patent, tekel konumu veya geçici talep artışından doğar.</li><li><b>Başabaş noktası:</b> Toplam gelir = toplam maliyet. Miktar = Sabit maliyet ÷ (Fiyat − Birim değişken maliyet).</li><li><b>Kapanma noktası:</b> Kısa dönemde fiyat ortalama değişken maliyetin altına düşerse firma üretimi durdurur; çünkü her birim zararı büyütür.</li></ul>"},
 {t:"widget",name:"calc",opts:{title:"Başabaş noktası",inputs:[
  {id:"fc",label:"Sabit maliyet",min:10000,max:200000,step:5000,value:50000,unit:" TL"},
  {id:"p",label:"Satış fiyatı",min:1,max:50,step:1,value:10,unit:" TL"},
  {id:"v",label:"Birim değişken maliyet",min:1,max:50,step:1,value:5,unit:" TL"}],
  formula:"p>v?Math.round(fc/(p-v)).toLocaleString('tr-TR')+' birim':'Fiyat birim değişken maliyetin altında: firma her birimde zarar eder, kısa dönemde üretimi durdurur'",
  result:"Başabaş miktarı: {r}",
  note:"Kitaptaki örnek: 50.000 TL sabit maliyet, 10 TL fiyat, 5 TL birim değişken maliyet → 10.000 birim. Fiyatı birim değişken maliyetin altına çekin ve sonucun nasıl değiştiğine bakın."}}
]},
{n:"9.3",h:"Monopol: tek satıcı, yüksek fiyat",blocks:[
 {t:"p",html:"Monopolde piyasada <b>tek bir firma</b> vardır ve ürünün yakın ikamesi yoktur. Firma piyasa talep eğrisinin tamamıyla karşı karşıyadır; daha çok satmak için fiyatı düşürmek zorundadır. Bu yüzden marjinal gelir fiyatın altında kalır."},
 {t:"p",html:"Monopolcü de MR = MC noktasında üretir, ama fiyatı talep eğrisinden okur. Sonuç: rekabetçi bir piyasaya göre <b>daha az üretim, daha yüksek fiyat</b>. Gerçekleşmeyen ama toplum için değerli olan alışverişler kaybolur; buna <b>ölü ağırlık kaybı</b> denir. Giriş engelli olduğu için monopolcü uzun dönemde de ekonomik kâr elde edebilir."},
 {t:"choice",items:[
  {label:"İkamesizlik",title:"Ürünün yerine geçen yok",body:"Malın ikamesi bulunmadığında ya da ikame etmek ekonomik olmadığında tek satıcı güç kazanır.",ex:"Örnek: Bir şehrin şebeke suyu."},
  {label:"Doğal tekel",title:"Ölçek ekonomileri",body:"Sabit maliyetler çok yüksek, marjinal maliyetler düşükse tek firma piyasanın tamamını birden fazla firmadan daha ucuza karşılar.",ex:"Örnek: Elektrik dağıtımı, doğal gaz ve su şebekeleri."},
  {label:"Yasal tekel",title:"Kanunla verilen hak",body:"Devlet bazı ürünlerin üretimini mali veya stratejik amaçlarla belirli kurumlara bırakabilir; patentler de süreli yasal tekel yaratır.",ex:"Örnek: Patent süresince yeni bir ilacın tek üreticisi."},
  {label:"Kartel",title:"Anlaşmalı tekel",body:"Birden fazla firma rekabeti kaldırmak için anlaşıp tek firma gibi davranabilir.",ex:"Örnek: OPEC üyelerinin petrol arzını birlikte kontrol etme çabası."}
 ]},
 {t:"p",html:"<b>Fiyat farklılaştırması</b>, aynı ürünün farklı alıcılara farklı fiyattan satılmasıdır. Uygulanabilmesi için firmanın piyasa gücü olmalı, gruplar arasında yeniden satış zor olmalı ve grupların talep esneklikleri farklı olmalıdır."},
 {t:"table",head:["Tür","Mekanizma","Örnek"],rows:[
  ["Birinci derece","Her alıcıya ödemeye razı olduğu en yüksek fiyat","Müzayede, kişiye özel teklif"],
  ["İkinci derece","Fiyat alınan miktara veya pakete göre değişir","Kademeli elektrik tarifesi, yazılım paketleri"],
  ["Üçüncü derece","Farklı tüketici gruplarına farklı fiyat","Öğrenci sinema bileti, uçakta bilet sınıfları"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Elektrik dağıtımı Türkiye'de bölgesel doğal tekel olarak işler ve fiyatları Enerji Piyasası Düzenleme Kurumu (EPDK) tarafından düzenlenir. Düzenleyici, kitapta anlatılan seçenekler arasında tercih yapar: <b>P = MC</b> (etkin ama sübvansiyon ister), <b>P = AC</b> (firma başabaşta, küçük etkinlik kaybı), getiri oranı düzenlemesi veya <b>RPI − X</b> fiyat tavanı (verimlilik teşviki)."}
]},
{n:"9.4",h:"Monopolcü rekabet: farklılaştırılmış ürünler",blocks:[
 {t:"p",html:"Monopolcü rekabette çok sayıda firma, birbirine benzeyen ama <b>farklıymış gibi sunulan</b> ürünler satar. Farklılık gerçek (lezzet, kalite) veya algısal (ambalaj, reklam) olabilir. Her firma kendi sadık müşteri kitlesi üzerinde küçük bir tekel gücü kurar; ancak ikameler kolay bulunduğu için talebi esnektir."},
 {t:"p",html:"Kısa dönemde firma MR = MC noktasında üretip ekonomik kâr edebilir. Giriş serbest olduğundan kâr yeni firmaları çeker; her firmanın talep eğrisi sola kayar. Uzun dönemde fiyat ortalama maliyete eşitlenir (P = AC) ve yalnızca normal kâr kalır."},
 {t:"p",html:"Bununla birlikte fiyat hâlâ marjinal maliyetin üstündedir (P > MC) ve firma ortalama maliyetin en düşük noktasının solunda üretir. Buna <b>fazla kapasite teoremi</b> denir: semtteki kafelerin çoğu günün büyük bölümünde tam dolu değildir. Tüketici bu \"verimsizliğin\" karşılığında çeşitlilik elde eder."}
]},
{n:"9.5",h:"Oligopol: karşılıklı bağımlılık",blocks:[
 {t:"p",html:"Oligopolde <b>az sayıda büyük firma</b> vardır ve giriş engelleri yüksektir. En belirgin özellik <b>karşılıklı bağımlılıktır</b>: bir firmanın fiyat veya miktar kararı rakiplerinin kârını doğrudan etkiler, bu yüzden herkes rakibin tepkisini hesaba katarak karar verir."},
 {t:"p",html:"Firmaların stratejik değişkeni neyse, sonuç ona göre değişir. Bir model seçin."},
 {t:"choice",items:[
  {label:"Cournot",title:"Miktar rekabeti",body:"Firmalar eşzamanlı olarak üretim miktarını seçer; her biri rakibinin miktarını veri kabul eder.",ex:"Sonuç: Fiyat tam rekabetin üzerinde, tekelin altında; toplam üretim ikisinin arasında."},
  {label:"Bertrand",title:"Fiyat rekabeti",body:"Firmalar eşzamanlı olarak fiyat seçer. Ürün homojense, rakibinden biraz ucuza satan bütün pazarı alır.",ex:"Sonuç: İki firma bile olsa fiyat marjinal maliyete iner (Bertrand paradoksu)."},
  {label:"Stackelberg",title:"Lider ve takipçi",body:"Lider firma önce üretim miktarını açıklar, takipçi buna tepki verir. Lider takipçinin tepkisini bildiği için ilk hamle avantajı kazanır.",ex:"Sonuç: Lider, Cournot dengesine göre daha yüksek kâr elde eder."},
  {label:"Kırık talep",title:"Fiyat katılığı",body:"Firma fiyatı artırırsa rakipler izlemez ve müşteri kaybeder; fiyatı düşürürse rakipler de düşürür ve fiyat savaşı başlar.",ex:"Sonuç: Fiyatlar uzun süre aynı düzeyde kalma eğilimi gösterir."}
 ]},
 {t:"p",html:"Oligopol türleri de ürünün niteliğine ve işbirliğine göre ayrılır: homojen ürünlü <b>saf oligopol</b> (çimento, çelik), farklılaştırılmış oligopol (otomobil), anlaşmalı oligopol (kartel) ve bir firmanın açık ara büyük olduğu asimetrik yapı."}
]},
{n:"9.6",h:"Karteller neden kırılgandır?",blocks:[
 {t:"p",html:"Kartel, rakip firmaların fiyatı yükseltmek veya üretimi kısmak için açıkça anlaşmasıdır ve rekabet hukukuna göre yasa dışıdır. Anlaşmaya varmak, onu korumaktan kolaydır: her üye, kartel fiyatının biraz altına inerek pazarı kapma <b>teşvikine</b> sahiptir. Kitaptaki iki firmalı ödeme matrisini inceleyin (rakamlar kâr birimidir: A'nın kârı, B'nin kârı)."},
 {t:"table",head:["","B anlaşmaya uyar","B hile yapar"],rows:[
  ["<b>A anlaşmaya uyar</b>","3 , 3","1 , 4"],
  ["<b>A hile yapar</b>","4 , 1","2 , 2"]]},
 {t:"p",html:"B uyarsa A için hile daha iyidir (4 &gt; 3); B hile yaparsa yine hile daha iyidir (2 &gt; 1). Yani hile yapmak <b>baskın stratejidir</b> ve oyun (Hile, Hile) noktasında dengeye gelir; oysa iki firma da (Uy, Uy) noktasında daha iyi durumdadır. Bu <b>tutsak ikilemidir</b>. Karteller ancak tekrarlanan oyunlarda, gelecekteki fiyat savaşı tehdidiyle ayakta kalabilir."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de kartelleri ve hâkim durumun kötüye kullanılmasını <b>Rekabet Kurumu</b>, 4054 sayılı Rekabetin Korunması Hakkında Kanun çerçevesinde inceler. Kurumun aradığı kanıtlar kitaptakiyle aynıdır: paralel fiyat hareketleri, rekabetçi bir piyasada beklenmeyecek kadar sabit pazar payları, fiyat bilgisi alışverişini gösteren yazışmalar ve açıklanamayan yüksek kârlılık."}
]},
{n:"9.7",h:"Rekabet ve etkinlik",blocks:[
 {t:"p",html:"Rekabet arttıkça fiyatlar düşer, kalite ve yenilik artar, israf azalır. Kitaptaki sıralamaya göre tam rekabet en etkin, monopol en az etkin yapıdır; diğer ikisi arada yer alır. Etkinliğin birkaç boyutu vardır:"},
 {t:"list",items:[
  "<b>Üretim etkinliği:</b> Belirli bir miktarı en düşük maliyetle üretmek.",
  "<b>Tahsis (Pareto) etkinliği:</b> Bir kişinin durumunu iyileştirmek için başka birinin durumunu kötüleştirmek gerekiyorsa kaynaklar etkin dağıtılmıştır.",
  "<b>Dinamik etkinlik:</b> Zaman içinde Ar-Ge, teknoloji ve verimlilik artışının sürmesi.",
  "<b>X-etkinliği:</b> Firmanın potansiyel üretimi ile gerçekleşen üretimi arasındaki fark; rekabet baskısı zayıfladığında gevşeklik ve israf artar."]}
]},
{n:"9.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Fiyat alıcı","Piyasa fiyatını veri kabul eden, tek başına fiyatı etkileyemeyen firma."],
  ["MR = MC","Kâr maksimizasyonu koşulu; her piyasa yapısında geçerlidir."],
  ["Normal kâr","Tüm açık ve örtük maliyetleri karşılayan, sıfır ekonomik kâra karşılık gelen kâr."],
  ["Başabaş noktası","Toplam gelirin toplam maliyete eşit olduğu üretim düzeyi."],
  ["Kapanma noktası","Fiyatın ortalama değişken maliyetin en düşük değerine indiği eşik."],
  ["Ölü ağırlık kaybı","Tekelin daha az üretmesiyle gerçekleşmeyen, toplum için değerli alışverişlerin kaybı."],
  ["Doğal tekel","Ölçek ekonomileri nedeniyle tek firmanın piyasayı en düşük maliyetle karşıladığı durum."],
  ["Fazla kapasite","Monopolcü rekabette firmanın en düşük ortalama maliyetin solunda üretmesi."],
  ["Baskın strateji","Rakip ne yaparsa yapsın en iyi sonucu veren seçim."],
  ["Kartel","Rakip firmaların fiyat veya miktar üzerinde açıkça anlaşması."]
 ]}
]},
{n:"9.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Tam rekabette tek bir firmanın karşılaştığı talep eğrisi neden yataydır?",o:["Firma fiyatı rakiplerine bakarak kendisi belirler","Firma piyasa fiyatından istediği kadar satabilir","Tüketiciler markaya sadık olduğu için talep sabittir","Devlet fiyatı her dönem için sabit bir düzeyde tutar"],a:1,e:"Firma piyasanın çok küçük bir parçasıdır; ne kadar satarsa satsın piyasa fiyatı değişmez, bu yüzden talep eğrisi yataydır."},
  {q:"Bir firma MR = 40 TL, MC = 32 TL olan bir üretim düzeyinde. Kârını artırmak için ne yapmalıdır?",o:["Üretimi azaltmalı","Üretimi artırmalı","Fiyatı sıfıra indirmeli","Hemen kapanmalı"],a:1,e:"Bir birim daha üretmek maliyetten fazla gelir getiriyor; MR, MC'ye eşitlenene kadar üretimi artırmak kârı büyütür."},
  {q:"Sabit maliyeti 60.000 TL, satış fiyatı 20 TL, birim değişken maliyeti 8 TL olan firmanın başabaş miktarı kaçtır?",o:["3.000 birim","5.000 birim","7.500 birim","12.000 birim"],a:1,e:"60.000 ÷ (20 − 8) = 5.000 birim. Bu miktarın üzerindeki her satış kâr getirir."},
  {q:"Tam rekabet piyasasında uzun dönemde firmalar neden yalnızca normal kâr elde eder?",o:["Devlet ekonomik kârların tamamını vergilendirir","Ekonomik kâr yeni firmaları çeker, fiyat düşer","Tüketici talebi uzun dönemde sürekli azalır","Girdi maliyetleri uzun dönemde hep fiyattan hızlı artar"],a:1,e:"Giriş serbesttir; kâr gören yeni firmalar arzı artırır ve fiyat ortalama maliyete inene kadar düşer."},
  {q:"Monopolcü firma rekabetçi bir piyasaya kıyasla ne yapar?",o:["Daha çok üretir, daha ucuza satar","Daha az üretir, daha pahalıya satar","Aynı miktarı aynı fiyattan satar","Daha çok üretir, daha pahalıya satar"],a:1,e:"MR fiyatın altında kaldığı için MR = MC daha düşük bir miktarda sağlanır; fiyat talep eğrisinden yüksek okunur. Aradaki kayıp ölü ağırlık kaybıdır."},
  {q:"Sinemada öğrenciye indirimli bilet satılması hangi uygulamaya örnektir?",o:["Birinci derece fiyat farklılaştırması","İkinci derece fiyat farklılaştırması","Üçüncü derece fiyat farklılaştırması","İki parçalı tarife"],a:2,e:"Farklı tüketici gruplarına farklı fiyat uygulamak üçüncü derece fiyat farklılaştırmasıdır."},
  {q:"Bir doğal tekelde düzenleyici fiyatı marjinal maliyete (P = MC) eşitlerse ne olur?",o:["Firma aşırı kâr eder","Üretim etkin olur ama firma zarar eder","Ölü ağırlık kaybı büyür","Fiyat ortalama maliyetin üstüne çıkar"],a:1,e:"Doğal tekelde ortalama maliyet marjinal maliyetin üzerindedir; P = MC etkin üretim sağlar ama firma zarar eder ve sübvansiyon gerekir."},
  {q:"Monopolcü rekabette uzun dönem dengesinin özelliği hangisidir?",o:["P > AC, ekonomik kâr sürer","P = AC ama P > MC, fazla kapasite vardır","P = MC, tam etkinlik vardır","Piyasada tek firma kalır"],a:1,e:"Giriş serbest olduğu için kâr sıfırlanır (P = AC), ama talep eğrisi aşağı eğimli olduğundan fiyat MC'nin üstündedir ve firma en düşük maliyetin solunda üretir."},
  {q:"Kitaptaki kartel matrisinde (Uy-Uy: 3,3; Hile-Hile: 2,2) firmalar neden (Hile, Hile) noktasına gider?",o:["Hile yapmak baskın stratejidir","Rekabet Kurumu zorlar","Talep esnek değildir","İki firma da zarar etmek ister"],a:0,e:"Rakip ne yaparsa yapsın hile daha yüksek kâr getirir; bu yüzden ikisi de daha kötü olan (2,2) sonucuna sürüklenir."},
  {q:"Bertrand modelinde homojen ürün satan iki firma için denge fiyatı nerede oluşur?",o:["Tekel fiyatında","Marjinal maliyete eşit","Ortalama maliyetin iki katında","Cournot fiyatının üstünde"],a:1,e:"Rakibinden biraz ucuza satan bütün pazarı alacağı için fiyatlar marjinal maliyete kadar iner; bu Bertrand paradoksudur."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 17, s. 160–196.",
 "Mankiw, N. G. (2018). <i>Principles of Economics</i> (8th ed.). Cengage Learning.",
 "Rekabet Kurumu: <a href=\"https://www.rekabet.gov.tr\">rekabet.gov.tr</a>",
 "Enerji Piyasası Düzenleme Kurumu: <a href=\"https://www.epdk.gov.tr\">epdk.gov.tr</a>"
],
next:"Sonraki: Hafta 10 — Makroekonomiye giriş ve milli gelir"
};
