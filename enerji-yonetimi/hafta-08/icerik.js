window.WEEK={
id:"en-08",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Gaz fiyatı ve yan hizmetler",week:8,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Enerji piyasaları",
title:"Gaz fiyatlaması, yan hizmetler ve <em>esnek</em> piyasa",
intro:"Bu hafta doğal gazın uluslararası ticarette nasıl fiyatlandığını, enerji borsasında alış, satış ve dengeleme tekliflerinin nasıl verildiğini ve elektrik sistemini ayakta tutan yan hizmetleri öğreneceksiniz. Ardından likiditeyi, talep tarafı katılımını, EPDK'nın görevlerini ve sınır ötesi elektrik ticaretini ele alacağız. Okuma süresi yaklaşık 40 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, iki karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Petrole endeksli ve hub temelli gaz fiyatlamasını avantaj ve dezavantajlarıyla karşılaştırabilirsiniz.",
 "Hidroelektrik ve doğal gaz santrallerinin borsada farklı teklif stratejileri izlemesinin nedenini açıklayabilirsiniz.",
 "Yan hizmet türlerini tepki süreleri ve görevlerine göre sınıflandırabilirsiniz.",
 "Likiditenin ve talep tarafı katılımının fiyat oluşumu ile sistem güvenliğine katkısını açıklayabilirsiniz.",
 "Piyasa eşleştirmesinde elektriğin hangi yöne aktığını ve tıkanıklık gelirinin nasıl oluştuğunu hesaplayabilirsiniz."
],
sections:[
{n:"8.1",h:"Doğal gaz nasıl fiyatlanır?",blocks:[
 {t:"p",html:"Doğal gazın uluslararası ticaretinde fiyatın nasıl belirlendiği, alıcı ile satıcının pazarlık gücünü doğrudan etkiler. İki temel model vardır: <b>petrole endeksleme</b> (oil-indexation) ve <b>hub temelli fiyatlama</b> (hub-based pricing). İlkinde gazın fiyatı petrolün fiyatına bir formülle bağlanır; ikincisinde gaz, kendi alım satım merkezindeki arz ve talebe göre fiyatlanır."},
 {t:"choice",items:[
  {label:"Petrole endeksleme",title:"Gaz fiyatı petrolü izler",body:"Gaz fiyatı Brent, fuel oil veya gazyağı gibi petrol ürünlerinin fiyatına bir formülle bağlanır. Genellikle 10–20 yıllık uzun vadeli kontratlarda kullanılır. 2000'lere kadar Avrupa'da baskın modeldi; Asya'daki uzun vadeli LNG kontratlarında bugün de yaygındır.",ex:"Avantajı: üretici ülke için fiyat istikrarı. Dezavantajı: petrol ile gazın arz-talep koşulları her zaman örtüşmez; gaz bolken bile petrol pahalıysa gaz pahalı kalır."},
  {label:"Hub temelli fiyatlama",title:"Gaz kendi piyasasında fiyatlanır",body:"Fiyat, gazın el değiştirdiği ticaret merkezindeki (hub) günlük veya aylık arz-talep koşullarına göre oluşur. En bilinen örnekler Avrupa'da TTF (Hollanda) ve ABD'de Henry Hub'dır.",ex:"Avantajı: şeffaf, rekabetçi, piyasa gerçeğini yansıtır. Dezavantajı: fiyat dalgalanmaları alıcının maliyet tahminini zorlaştırır."},
  {label:"Neden kayış var?",title:"Son 20 yılın eğilimi",body:"Küresel ölçekte petrole endekslemeden hub fiyatlamaya güçlü bir kayış yaşandı. Nedenleri: gaz piyasalarının serbestleşmesiyle şeffaf ticaret merkezlerinin kurulması, LNG ticaretinin büyüyerek hub fiyatlarını küresel referansa dönüştürmesi, petrol ve gaz piyasalarının ayrışması ve tüketici ülkelerin esnek fiyat talebi.",ex:"Kitabın vardığı sonuç: petrole endeksleme üreticiye avantajlı, geleneksel bir model; hub fiyatlama ise bugünün baskın ve tüketici dostu modeli."}
 ]},
 {t:"p",html:"Petrole endeksli bir kontratta formül çoğu zaman \"gaz fiyatı = eğim × petrol fiyatı (+ sabit)\" biçimindedir. Aşağıdaki hesaplayıcıda eğimi ve Brent fiyatını değiştirerek, endeksli gazın aynı gün hub fiyatıyla karşılaştırıldığında ithalatçıya kazandırıp kaybettirdiğini görün."},
 {t:"widget",name:"calc",opts:{title:"Endeksli kontrat mı, hub mı?",inputs:[{id:"brent",label:"Brent petrol",min:40,max:130,step:5,value:80,unit:" $/varil"},{id:"egim",label:"Kontrat eğimi",min:8,max:16,step:0.5,value:12,unit:" %"},{id:"hub",label:"Aynı gün hub fiyatı",min:2,max:30,step:0.5,value:8,unit:" $/MMBtu"}],formula:"(function(){var p=brent*egim/100,d=p-hub,g=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:2})};return 'endeksli gaz fiyatı '+g(p)+' $/MMBtu · '+(d>0?'hub '+g(d)+' $/MMBtu daha ucuz: endeksli kontrat bugün ithalatçıya pahalı':(d<0?'endeksli gaz '+g(-d)+' $/MMBtu daha ucuz: kontrat bugün ithalatçıyı koruyor':'iki fiyat eşit'));})()",result:"{r}",note:"Basitleştirilmiş örnek formül: gaz fiyatı ($/MMBtu) = eğim × Brent ($/varil). Gerçek kontratlarda sabit terim, gecikme (ör. son 6–9 ayın ortalaması) ve farklı petrol ürünleri bulunabilir. Brent'i yükseltip hub fiyatını düşürdüğünüzde iki piyasanın ayrışmasının ithalatçıya maliyetini görürsünüz."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye doğal gazının büyük bölümünü ithal eder; bu yüzden fiyatlama modeli bir arz güvenliği ve cari açık meselesidir. Yurt içinde EPİAŞ bünyesinde 2018'de Organize Toptan Doğal Gaz Satış Piyasası (OTSP) açıldı; burada gaz, günlük arz ve talebe göre şeffaf biçimde fiyatlanır. Kitabın araştırma sorusu tam da bunu sorar: ithalatçı bir ülke için hub fiyatı mı, petrole endeksli kontrat mı daha avantajlıdır?"}
]},
{n:"8.2",h:"Borsada teklif vermek: HES ve doğal gaz santrali",blocks:[
 {t:"p",html:"Enerji borsasında üç tür teklif verilir. <b>Alış teklifi</b>, \"şu kadar MW'ı en fazla şu fiyata alırım\" demektir; tedarik şirketleri ve büyük sanayi kuruluşları verir. <b>Satış teklifi</b>, üreticinin \"şu kadar MW'ı şu fiyattan satarım\" bildirimidir ve genellikle santralin marjinal maliyetine dayanır. <b>Dengeleme teklifi</b> ise sistem işletmecisine esneklik sunar: \"üretimimi artırabilirim, karşılığında şu fiyatı isterim\" ya da \"üretimimi kısabilirim\"."},
 {t:"table",head:["","Barajlı hidroelektrik (HES)","Doğal gaz çevrim santrali (DGÇS)"],rows:[
  ["Marjinal maliyet","Çok düşük; yakıt maliyeti yok","Yüksek ve değişken; gaz fiyatına bağlı"],
  ["Kısıt","Su rezervi sınırlı: ne zaman üretileceği stratejik karar","Yakıt maliyeti ve devreye alma maliyeti"],
  ["Teklif stratejisi","Suyu fiyatın yüksek olduğu saatlere saklar","Maliyet bazlı teklif verir"],
  ["Piyasadaki rolü","Hızlı devreye girip çıkabildiği için dengelemede güçlü","Çoğu saatte sisteme son giren, fiyatı belirleyen marjinal santral"]]},
 {t:"p",html:"Kısacası HES, \"maliyetsiz\" bir kaynağı doğru saatte kullanarak kazanır; doğal gaz santrali ise maliyetini teklifine yansıtır ve çoğu zaman piyasa takas fiyatını belirler. Hafta 07'deki marjinal fiyatlamayı hatırlayın: fiyatı, talebi karşılamak için devreye giren en pahalı santral belirler."}
]},
{n:"8.3",h:"Yan hizmetler: görünmeyen ama vazgeçilmez",blocks:[
 {t:"def",html:"Yan hizmetler (ancillary services), elektrik sisteminin güvenli, kaliteli ve kesintisiz çalışması için enerji ticaretinden ayrı bir mekanizmayla temin edilen teknik hizmetlerdir.",src:"Elektrik, gün öncesi ve gün içi piyasalarında MWh üzerinden emtia olarak alınıp satılır; yan hizmetler ise MW kapasite, hazırda bekleme süresi ve tepki hızına göre değerlendirilir."},
 {t:"p",html:"Arz ile talep her an eşit olmalıdır. Küçük bir sapma bile frekansı (Türkiye'de 50 Hz) ve gerilimi bozar. Enerji fiyatı bu teknik ihtiyacı tek başına çözemez; bu yüzden Türkiye'de sistem işletmecisi <b>TEİAŞ</b> yan hizmetleri belirli üreticilerden ve bazı büyük tüketicilerden sözleşme veya ihaleyle satın alır."},
 {t:"table",head:["Hizmet","Tepki süresi","Görevi"],rows:[
  ["Primer (birincil) frekans kontrolü","Saniyeler, otomatik","Ani frekans sapmasını ilk anda durdurur"],
  ["Sekonder (ikincil) frekans kontrolü","Dakikalar, otomatik üretim kontrolü (AGC)","Frekansı yeniden nominal değere getirir"],
  ["Tersiyer (üçüncül) rezerv","15 dakika ve üzeri, talimatla","Kullanılan primer ve sekonder rezervi serbest bırakır"],
  ["Gerilim ve reaktif güç desteği","Sürekli","Gerilimi izin verilen sınırlar içinde tutar"],
  ["Sıcak / soğuk yedek","Anında / daha uzun sürede","Planlı veya ani santral kayıplarına karşı hazır kapasite"],
  ["Black-start (kendiliğinden kalkış)","Sistem çöktüğünde","Dış kaynağa ihtiyaç duymadan devreye girip şebekeyi yeniden başlatır"]]},
 {t:"p",html:"Fiyatlama genellikle iki parçalıdır: hazırda beklemenin karşılığı olan <b>kapasite ödemesi</b> ve hizmet fiilen çağrıldığında ödenen <b>çalışma ücreti</b>. Her santral bu hizmetleri veremez; hızlı tepki ve kontrol altyapısı gerekir. Yenilenebilir enerjinin payı arttıkça frekans kontrolü ve yedek kapasitenin önemi büyür."},
 {t:"widget",name:"classify",opts:{title:"Hangi yan hizmet?",cats:["Frekans kontrolü","Gerilim / reaktif güç","Yedek ve black-start"],items:[
  ["Büyük bir santral devreden çıkınca saniyeler içinde otomatik devreye giren tepki",0],
  ["Otomatik üretim kontrolü (AGC) ile frekansın dakikalar içinde 50 Hz'e döndürülmesi",0],
  ["Uzun bir iletim hattının ucunda düşen gerilimin senkron jeneratörle desteklenmesi",1],
  ["Ülke çapında bir kesintiden sonra şebekeyi dışarıdan güç almadan yeniden başlatan HES",2],
  ["Dakikalar içinde tam güce çıkabilecek şekilde senkron bekletilen santral",2],
  ["Şebeke gerilimini sınırlar içinde tutmak için reaktif güç üretimi",1],
  ["Talimatla 15 dakika içinde devreye alınan tersiyer rezerv",0],
  ["Günler içinde devreye alınabilecek, bakımda bekletilen soğuk yedek santral",2]
 ],note:"Frekans, sistemdeki aktif güç dengesinin göstergesidir; primer, sekonder ve tersiyer kontrol bu dengeyi farklı zaman ölçeklerinde korur. Gerilim ise reaktif güçle ilgilidir ve yereldir. Yedek kapasite ile black-start, olağanüstü durumlara karşı sigorta işlevi görür."}}
]},
{n:"8.4",h:"Likidite ve talep tarafı katılımı",blocks:[
 {t:"p",html:"<b>Likidite</b>, piyasada yeterince alıcı ve satıcının bulunması, işlem hacminin yüksek olması ve katılımcıların piyasa fiyatına yakın düzeyden hızla alıp satabilmesidir. Bir semt pazarı düşünün: tezgâh sayısı azsa tek bir satıcı fiyatı belirler; tezgâh çoksa fiyat gerçek arz ve talebi yansıtır."},
 {t:"list",items:[
  "<b>Dar alış-satış farkı (spread):</b> Kontratlar daha düşük işlem maliyetiyle alınıp satılır.",
  "<b>Şeffaf fiyat sinyali:</b> Yatırımcı doğru yatırım kararı, tüketici adil fiyat elde eder.",
  "<b>Kolay giriş-çıkış:</b> Büyük hacimli işlemler bile fiyatı olağandışı ölçüde oynatmaz.",
  "<b>Riskten korunma:</b> Vadeli kontratlar (forward, futures, opsiyon) ancak likit bir piyasada etkin çalışır.",
  "<b>Yatırım teşviki:</b> Öngörülebilir fiyatlar yeni santral yatırımlarını destekler."
 ]},
 {t:"p",html:"<b>Talep tarafı katılımı</b> (demand side response) ise tüketicilerin de şebeke dengesine aktif katkı vermesidir. Büyük sanayi tesisleri, ticari işletmeler, hatta haneler fiyat sinyaline ya da sistem işletmecisinin çağrısına göre tüketimlerini azaltır, artırır veya erteler. Böylece talep, adeta bir santral gibi davranan esnek bir kaynağa dönüşür."},
 {t:"choice",items:[
  {label:"Sistem için",title:"Zirve saatlerinde rahatlama",body:"Tüketiciler yüklerini azaltarak üretim açığını kapatır; zirve saatlerdeki fiyat sıçramaları yumuşar. Yılda birkaç saat çalışacak pahalı pik santralleri kurma ihtiyacı azalır.",ex:"Acil durumlarda yük atma ve tüketim azaltma, sistem çöküşü (blackout) riskini düşürür."},
  {label:"Yenilenebilir için",title:"Fazla üretimi emmek",body:"Rüzgârın bol estiği saatlerde sanayi tüketimini artırmak veya güneşin yoğun olduğu öğle saatlerine tüketimi kaydırmak, arz fazlasını dengeler.",ex:"Böylece yenilenebilir üretimin kısılması (kesinti talimatı) azalır."},
  {label:"Katılımcı için",title:"Esneklikten gelir",body:"Büyük tüketiciler esnekliklerini yan hizmet piyasasına sunarak ek gelir elde edebilir, ucuz saatlere kayarak faturalarını düşürebilir.",ex:"Örnek: bir çelik fabrikasının ark ocağını pahalı akşam saatlerinden gece saatlerine kaydırması."}
 ]}
]},
{n:"8.5",h:"Düzenleyici: EPDK",blocks:[
 {t:"p",html:"Türkiye'de enerji piyasalarının düzenleyicisi <b>Enerji Piyasası Düzenleme Kurumu (EPDK)</b>'dır. 2001'de 4628 sayılı Elektrik Piyasası Kanunu ile kuruldu; zamanla doğal gaz, petrol ve LPG piyasalarını da kapsayan bağımsız bir otoriteye dönüştü. Amacı, piyasaların rekabetçi, şeffaf ve tüketici odaklı işlemesini sağlamaktır."},
 {t:"table",head:["Görev alanı","Ne yapar?"],rows:[
  ["Piyasa düzenleme","Yönetmelik ve tebliğ hazırlar; üretim, iletim, dağıtım, tedarik ve depolama lisanslarını verir, uzatır, iptal eder"],
  ["Denetim ve gözetim","Lisans yükümlülüklerini denetler; fiyat manipülasyonu ve rekabet ihlallerini tespit edip yaptırım uygular"],
  ["Tarife","Doğal tekel niteliğindeki alanlarda (iletim ve dağıtım ücretleri) düzenlenmiş tarifeleri belirler"],
  ["Tüketici hakları","Şikâyet mekanizmalarını işletir, hizmet kalitesi standartlarını zorunlu kılar"],
  ["Arz güvenliği ve sürdürülebilirlik","Yenilenebilir enerji destek mekanizması YEKDEM gibi araçların işleyişinde rol alır"]]},
 {t:"p",html:"Dikkat edilmesi gereken ayrım: EPDK kuralları koyar ve denetler; piyasayı işleten <b>EPİAŞ</b> (gün öncesi ve gün içi piyasaları), sistemi işleten ise <b>TEİAŞ</b>'tır (iletim ve dengeleme)."}
]},
{n:"8.6",h:"Sınır ötesi ticaret",blocks:[
 {t:"p",html:"Sınır ötesi ticaret, ülkelerin elektrik sistemlerini birbirine bağlayan <b>enterkonneksiyon hatları</b> üzerinden yapılan elektrik alışverişidir. Türkiye; Bulgaristan, Yunanistan, Gürcistan ve İran gibi komşularıyla yüksek gerilim hatlarıyla bağlıdır. Avrupa'da ticaret çoğunlukla <b>piyasa eşleştirmesi</b> (market coupling) ile yapılır: ülkelerin gün öncesi piyasaları birlikte çözülür ve elektrik ucuz bölgeden pahalı bölgeye akar."},
 {t:"p",html:"Akış sınırsız değildir. Sistem işletmecileri ticarete açılabilecek kapasiteyi belirler: <b>NTC</b> (Net Transfer Capacity) ve <b>ATC</b> (Available Transfer Capacity). Hat dolduğunda iki tarafın fiyatı eşitlenemez; aradaki fark × akan miktar, <b>tıkanıklık geliri</b> (congestion rent) olarak hat kapasitesini elinde tutan tarafa kalır. Hesaplayıcıyla deneyin."},
 {t:"widget",name:"calc",opts:{title:"Piyasa eşleştirmesi",inputs:[{id:"pa",label:"A ülkesi fiyatı (eşleştirme öncesi)",min:20,max:200,step:5,value:60,unit:" €/MWh"},{id:"pb",label:"B ülkesi fiyatı (eşleştirme öncesi)",min:20,max:200,step:5,value:110,unit:" €/MWh"},{id:"ntc",label:"Ticarete açık kapasite (NTC)",min:0,max:1000,step:50,value:500,unit:" MW"}],formula:"(function(){var d=pb-pa,g=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:0})};if(d===0)return 'fiyatlar eşit: ticari akış için neden yok';var y=d>0?'A → B':'B → A';if(ntc===0)return 'kapasite yok: fiyatlar ayrı kalır, akış olmaz';return 'akış yönü '+y+' · hat doluysa saatte '+g(ntc)+' MWh akar; fiyat farkı sürerse saatlik tıkanıklık geliri '+g(Math.abs(d)*ntc)+' € olur';})()",result:"{r}",note:"Basitleştirilmiş gösterim: akış ucuz ülkenin fiyatını yükseltir, pahalı ülkeninkini düşürür. Kapasite yeterince büyükse iki fiyat eşitlenir ve tıkanıklık geliri sıfırlanır; kapasite darsa fark sürer. Gerçek eşleştirmede fiyatlar akışla birlikte yeniden hesaplanır."}},
 {t:"table",head:["Avrupa ile entegrasyonun olası faydaları","Olası riskleri"],rows:[
  ["Fiyat istikrarı: elektrik en düşük marjinal maliyetli kaynaktan akar","Avrupa'daki fiyat şoklarının Türkiye'ye geçmesi"],
  ["Arz güvenliği: açıkta ithalat, fazlada ihracat","Daha ucuz Avrupa üretimi karşısında yerli üreticiye rekabet baskısı"],
  ["Yenilenebilir fazlasının satılabilmesi, daha az kısıntı","Sınırlı iletim kapasitesi beklentiyi karşılamayabilir"],
  ["Daha çok oyuncu, daha fazla rekabet ve yatırım cazibesi","AB mevzuatına tam uyumun teknik, hukuki ve idari zorlukları"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye elektrik sistemi, Avrupa'nın sistem işletmecilerini bir araya getiren ENTSO-E'nin Kıta Avrupası senkron alanına 2010'da deneme amaçlı, 2015'te kalıcı olarak bağlandı. Senkron bağlantı, iki şebekenin aynı frekansta birlikte çalışması demektir; bu yüzden sınır ötesi ticaret yalnızca ticari değil, frekans, gerilim ve güç akışlarında teknik koordinasyon da gerektirir."}
]},
{n:"8.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Petrole endeksleme","Gaz fiyatının uzun vadeli kontratta bir formülle petrol veya petrol ürünü fiyatına bağlanması."],
  ["Hub fiyatlaması","Gaz fiyatının TTF veya Henry Hub gibi bir ticaret merkezindeki arz ve talebe göre oluşması."],
  ["Marjinal santral","Talebi karşılamak için en son devreye giren ve piyasa fiyatını belirleyen santral."],
  ["Yan hizmetler","Frekans, gerilim, yedek ve black-start gibi şebeke güvenliği için ayrı satın alınan teknik hizmetler."],
  ["Black-start","Sistem tamamen çöktüğünde dış güç almadan devreye girip şebekeyi yeniden başlatabilme yeteneği."],
  ["Likidite","Yeterli alıcı-satıcı ve işlem hacmi sayesinde piyasa fiyatına yakın düzeyden hızla işlem yapabilme."],
  ["Talep tarafı katılımı","Tüketicilerin fiyat sinyali veya çağrı üzerine tüketimini değiştirerek şebeke dengesine katkı vermesi."],
  ["Piyasa eşleştirmesi","Komşu ülkelerin gün öncesi piyasalarının birlikte çözülerek elektriğin ucuzdan pahalıya akmasının sağlanması."],
  ["NTC / ATC","Sistem işletmecilerince belirlenen, sınır ötesi ticarete açılabilecek iletim kapasitesi."]
 ]}
]},
{n:"8.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Petrole endeksli gaz kontratının ithalatçı açısından temel dezavantajı nedir?",o:["Fiyatın her gün sıfırdan pazarlık edilmesi","Gaz bolken bile petrol pahalıysa gazın pahalı kalması","Kontrat sürelerinin birkaç ayla sınırlı olması","Fiyatın hükümetçe belirlenmesi"],a:1,e:"Endekslemede fiyat gazın kendi arz-talebini değil petrolün fiyatını izler; iki piyasa ayrıştığında ithalatçı gerçek gaz piyasasından pahalıya alır."},
  {q:"Eğimi %12 olan endeksli bir kontratta Brent 90 $/varil ise gaz fiyatı kaç $/MMBtu olur?",o:["7,5","9,0","10,8","12,0"],a:2,e:"0,12 × 90 = 10,8 $/MMBtu. Aynı gün hub fiyatı 8 $ ise kontrat ithalatçıya 2,8 $/MMBtu fazladan ödetir."},
  {q:"Barajlı bir HES'in borsada en yüksek fiyatlı saatlerde üretmeyi tercih etmesinin nedeni nedir?",o:["Yakıt maliyetinin akşam saatlerinde belirgin biçimde düşmesi","Suyun sınırlı olması, en değerli saatte kullanılması","Mevzuatın yalnızca akşam saatlerinde üretime izin vermesi","Gece saatlerinde türbinlerin teknik olarak çalışamaması"],a:1,e:"HES'in marjinal maliyeti düşüktür ama suyu sınırlıdır. Suyu fiyatın yüksek olduğu saatlere saklamak geliri en yükseğe çıkarır."},
  {q:"Saniyeler içinde otomatik devreye girerek ani frekans düşüşünü durduran hizmet hangisidir?",o:["Tersiyer rezerv","Primer frekans kontrolü","Black-start","Reaktif güç desteği"],a:1,e:"Primer kontrol ilk savunma hattıdır ve otomatiktir; sekonder dakikalar, tersiyer ise talimatla daha uzun ölçekte devreye girer."},
  {q:"Yan hizmetlerin enerji ticaretinden ayrı bir mekanizmayla satın alınmasının nedeni nedir?",o:["Enerjiden her zaman daha ucuz oldukları için","Değerleri MWh değil, hazır kapasite ve tepki hızı olduğu için","Yalnızca yabancı şirketler tarafından sunulabildikleri için","Vergiden muaf tutuldukları için ayrı izlenmeleri gerektiği için"],a:1,e:"Yan hizmetler doğrudan şebeke güvenliği içindir ve her santral sunamaz; değerleri enerji miktarından çok hazır kapasite ve hızdan gelir."},
  {q:"Likiditesi yüksek bir elektrik piyasasında aşağıdakilerden hangisi beklenir?",o:["Geniş alış-satış farkı","Büyük işlemlerin fiyatı sert biçimde oynatması","Dar alış-satış farkı ve kolay riskten korunma","Katılımcı sayısının azalması"],a:2,e:"Likit piyasada çok sayıda alıcı ve satıcı vardır; işlem maliyeti düşer, vadeli kontratlarla risk kolayca yönetilir."},
  {q:"Talep tarafı katılımının yeni pik santral ihtiyacını azaltmasının mekanizması nedir?",o:["Zirve saatlerde tüketimi kısarak açığı kapatması","Elektrik fiyatlarının devletçe yıl boyu sabitlenmesi","Zirve saatlerinde bazı iletim hatlarının kapatılması","Bütün tüketimin geceye taşınmasının zorunlu tutulması"],a:0,e:"Esnek talep, yılda birkaç saat çalışacak pahalı kapasitenin yerini tutar; tüketici adeta bir santral gibi davranır."},
  {q:"Türkiye'de lisans vermek ve dağıtım tarifelerini belirlemek hangi kurumun görevidir?",o:["TEİAŞ","EPİAŞ","EPDK","BOTAŞ"],a:2,e:"EPDK düzenleyici ve denetleyici kurumdur. EPİAŞ piyasayı, TEİAŞ iletim sistemini işletir."},
  {q:"A ülkesinde fiyat 50, B'de 120 €/MWh; aradaki hat 400 MW ve tam dolu, fiyat farkı sürüyor. Saatlik tıkanıklık geliri kaçtır?",o:["20.000 €","28.000 €","48.000 €","68.000 €"],a:1,e:"(120 − 50) × 400 = 28.000 €. Elektrik ucuz A'dan pahalı B'ye akar; kapasite yetmediği için fiyatlar eşitlenemez."},
  {q:"Türkiye'nin Avrupa piyasasıyla daha fazla entegrasyonunda kitapta sayılan risklerden biri hangisidir?",o:["Yenilenebilir enerjinin kısıntısının artması","Avrupa'daki fiyat şoklarının Türkiye'ye geçmesi","Arz güvenliğinin her durumda azalması","Rekabetin ortadan kalkması"],a:1,e:"Entegrasyon fiyatları birbirine bağlar; Avrupa'da bir gaz krizi yaşanırsa yüksek fiyatlar Türkiye'ye de taşınabilir."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. s. 65–78.",
 "Uluslararası Enerji Ajansı (IEA) — doğal gaz piyasası raporları: <a href=\"https://www.iea.org\">iea.org</a>",
 "Enerji Piyasası Düzenleme Kurumu: <a href=\"https://www.epdk.gov.tr\">epdk.gov.tr</a>",
 "Enerji Piyasaları İşletme A.Ş. — şeffaflık platformu: <a href=\"https://seffaflik.epias.com.tr\">seffaflik.epias.com.tr</a>"
],
next:"Sonraki: Hafta 09 — Yatırım değerlendirme: proje finansmanı, NBD, İVO, PPA"
};
