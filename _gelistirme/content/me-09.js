window.WEEK={
id:"me-09",code:"ME",course:"Medya Ekonomisi",short:"Küresel içerik ve medya emeği",week:9,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Küresel medya ve emek",
title:"Küresel içerik, lisans, gazetecilik ve <em>medya emeği</em>",
intro:"Bu hafta medya ekonomisinin beş farklı köşesine bakıyoruz: Türk dizilerinin dünyaya nasıl satıldığı, devletin neden televizyona lisans verip gazeteye vermediği, internet çağında kaliteli gazeteciliğin nasıl finanse edileceği, senaristlerin ve oyuncuların neden greve gittiği ve bağımsız dijital medyanın nasıl ayakta kaldığı. Okuma süresi yaklaşık 40 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma paneli ve 10 soruluk bir test var.",
goals:[
 "Kültürel emperyalizm ve kültürel indirim kavramlarını açıklayıp Türk dizilerinin bu indirimi nasıl aştığını tartışabilirsiniz.",
 "Frekans kıtlığı gerekçesiyle yayın lisansının neden yalnızca radyo ve televizyona uygulandığını açıklayabilirsiniz.",
 "Gazeteciliğin ekonomik krizinin iki nedenini ve dört hayatta kalma modelini karşılaştırabilirsiniz.",
 "Telif payı (residuals) ile tek seferlik ödeme (buyout) arasındaki farkın yaratıcı emeğin gelirine etkisini hesaplayabilirsiniz.",
 "Reklama dayalı ana akım medya ile topluluk finansmanlı bağımsız medyanın \"asıl müşterisini\" ayırt edebilirsiniz."
],
sections:[
{n:"9.1",h:"Bir Türk dizisi nasıl olur da Şili'de reyting rekoru kırar?",blocks:[
 {t:"p",html:"Uzun yıllar medya akışı tek yönlüydü: Batı'dan, özellikle Hollywood'dan dünyanın geri kalanına. Hollywood'un dev bütçeleri, pazarlama gücü ve evrensel temaları onu küresel pazarın hâkimi yaptı. Batı kültürünün küresel medya aracılığıyla diğer kültürler üzerinde baskınlık kurmasına <b>kültürel emperyalizm</b> denir."},
 {t:"def",html:"<b>Kültürel indirim</b> (cultural discount): Bir medya ürünü üretildiği kültüre ne kadar özgüyse, başka bir kültürdeki izleyici için değeri o kadar düşer.",src:"Kavram, Colin Hoskins ve Rolf Mirus'un 1988 tarihli makalesiyle iktisat literatürüne girdi."},
 {t:"p",html:"Yalnızca bir ülkenin siyasi esprilerine dayanan bir komedi dizisinin başka ülkede tutması zordur; izleyici esprileri anlamak için bağlamı bilmek zorundadır. Aşk, ihanet, aile bağları gibi temalar ise çevrilmeye neredeyse hiç ihtiyaç duymaz. Kitap, Türk dizilerinin kültürel indirimi üç yoldan aştığını söyler:"},
 {t:"list",items:[
  "<b>Evrensel temalar:</b> Aşk, ihanet, aile bağları, zengin-fakir çatışması kültürel sınırları aşan duygulara hitap eder.",
  "<b>Yüksek prodüksiyon kalitesi:</b> Türk dizileri, Hollywood standartlarına yakın görüntü ve yapım kalitesiyle birçok ülkenin yapımlarından ayrışır.",
  "<b>Ekonomik avantaj:</b> Türkiye'de dizi üretmek ABD veya Avrupa'ya göre daha ucuzdur; diziler uluslararası pazarda rekabetçi fiyatla satılabilir."
 ]},
 {t:"p",html:"Bunun sonucu olarak Türkiye ve Güney Kore (K-Pop, K-Drama) gibi ülkeler yeni kültürel ihracatçılar hâline geldi. Küresel medya akışı artık tek yönlü değil, çok merkezlidir. Bir dizinin yurt dışında sevilmesi ihracat gelirinin yanında ülkenin turizmine ve <b>yumuşak gücüne</b> de katkı yapar."},
 {t:"widget",name:"calc",opts:{title:"Dizi ihracatı ve kültürel indirim",inputs:[
  {id:"bolum",label:"Satılan bölüm sayısı",min:20,max:200,step:10,value:100},
  {id:"ulke",label:"Satıldığı ülke sayısı",min:1,max:80,step:1,value:20},
  {id:"fiyat",label:"Bir ülkede bölüm başı tam değer",min:500,max:20000,step:500,value:4000,unit:" $"},
  {id:"indirim",label:"Kültürel indirim",min:0,max:90,step:5,value:40,unit:"%"}],
  formula:"(function(){var tam=bolum*ulke*fiyat,net=tam*(1-indirim/100);return (net/1e6).toLocaleString('tr-TR',{maximumFractionDigits:2})+' milyon $ (indirimsiz olsaydı '+(tam/1e6).toLocaleString('tr-TR',{maximumFractionDigits:2})+' milyon $)';})()",
  result:"Tahmini lisans geliri: {r}",note:"Rakamlar örnektir. Dizi zaten çekildiği için her ek ülke satışı neredeyse saf gelirdir (ilk kopya maliyeti bir kez ödenir). Kültürel indirimi düşüren her unsur, bu geliri doğrudan büyütür."}}
]},
{n:"9.2",h:"Devlet neden gazetelere değil de TV kanallarına lisans verir?",blocks:[
 {t:"p",html:"Bu sorunun tarihsel cevabı teknik bir zorunluluktur: <b>frekans kıtlığı</b> (spectrum scarcity). Radyo ve televizyon yayınları, elektromanyetik spektrum adı verilen görünmez \"yolları\" kullanır ve bu yolların sayısı sınırlıdır. Herkes istediği frekanstan yayın yapsaydı yayınlar birbirine karışır, kimse net bir yayın alamazdı."},
 {t:"p",html:"Bu yüzden devlet, kıt ama değerli bu kamu kaynağını yönetmek için devreye girer. Bir otoyolun şeritlerini düzenler gibi frekansları belirli şirketlere lisansla kiralar. Türkiye'de bu görevi Radyo ve Televizyon Üst Kurulu (RTÜK) yürütür. Lisans, şirkete frekansı belirli kurallar içinde kullanma hakkı verir; karşılığında kamu yararına yayın yapma gibi sorumluluklar yükler."},
 {t:"p",html:"Gazeteler için böyle bir fiziksel kıtlık yoktur. Teorik olarak yeterli sermayesi olan herkes bir matbaa kurup gazete basabilir; gazeteler sınırlı bir kamu kaynağını işgal etmez. İfade özgürlüğü ilkesi gereği de lisansa tabi tutulmazlar."},
 {t:"box",lbl:"İnternet ne değiştirdi?",html:"İnternette kanal sayısı neredeyse sınırsızdır; bu, frekans kıtlığı argümanını zayıflatır. Ancak dezenformasyon, veri gizliliği ve tekelcilik gibi yeni sorunlar ortaya çıktığı için artık dijital platformların nasıl düzenleneceği tartışılıyor. Yani düzenlemenin gerekçesi <b>kıtlıktan</b> <b>güce</b> doğru kayıyor."}
]},
{n:"9.3",h:"İnternet çağında kaliteli gazetecilik nasıl hayatta kalacak?",blocks:[
 {t:"p",html:"Gazetecilik, internetin getirdiği yıkıcı yenilikler nedeniyle tarihinin en büyük ekonomik krizlerinden birini yaşıyor. Kitap, yüzyıllardır ayakta duran iş modelinin iki darbeyle çöktüğünü söyler."},
 {t:"list",items:[
  "<b>Reklam gelirlerinin çöküşü:</b> Seri ilanlar (ev, araba, iş ilanı) gazetelerden sahibinden.com gibi ilan sitelerine, marka reklamlarının büyük kısmı da veriyi çok daha iyi kullanan Google ve Facebook'a kaydı.",
  "<b>\"Bedava\" kültürünün yükselişi:</b> İnternetin ilk yıllarında her şeyin ücretsiz olması beklentisi, okuru habere para ödeme alışkanlığından uzaklaştırdı."
 ]},
 {t:"p",html:"Bu ikili kriz karşısında sektör yeni modeller denedi. Hangisinin size daha sürdürülebilir göründüğünü karşılaştırın."},
 {t:"choice",items:[
  {label:"Ödeme duvarı",title:"Paywall",body:"Okur belirli sayıda makaleden sonra içeriğin tamamına erişmek için aylık abonelik öder. The New York Times bu modelin öncülerindendir; ölçülü ödeme duvarını 2011'de başlattı.",ex:"Güçlü yan: düzenli ve öngörülebilir gelir. Zayıf yan: içerik daha az kişiye ulaşır."},
  {label:"Üyelik/bağış",title:"Açık içerik, gönüllü destek",body:"İçerik herkese açık kalır; okurlardan kaliteli gazeteciliği desteklemek için gönüllü bağış veya üyelik istenir. The Guardian bu modelin bilinen örneğidir.",ex:"Güçlü yan: geniş erişim korunur. Zayıf yan: bedavacı sorunu, gelir belirsizliği."},
  {label:"Niş yayıncılık",title:"Dar alan, sadık kitle",body:"Teknoloji, finans, spor veya yerel haber gibi tek bir alana odaklanılır; o alana tutkuyla bağlı küçük ama sadık bir kitleden abonelik alınır.",ex:"Yalnızca bir şehrin belediye ve yerel ekonomi haberlerini yapan ücretli bülten."},
  {label:"Vakıf/kâr amacı gütmeyen",title:"Ticari kaygıdan uzak finansman",body:"Bazı araştırmacı gazetecilik platformları vakıflar tarafından finanse edilir. Amaç, reklamveren veya abone baskısından uzak durmaktır.",ex:"Zayıf yan: bağış verenin önceliklerine bağımlılık riski."}
 ]},
 {t:"p",html:"Kitabın vardığı sonuç: gazeteciliğin geleceği tek bir sihirli formülde değil, bu modellerin bir karmasında ve okurların kaliteli bilgiye bedel ödemeye istekli olmasında yatıyor (Cagé, 2016)."}
]},
{n:"9.4",h:"Senaristler ve oyuncular neden greve gider?",blocks:[
 {t:"p",html:"Medya ekonomisinin kalbinde içeriği yaratan insanlar vardır: senaristler, oyuncular, yönetmenler. Onların greve gitmesi, sektördeki ekonomik bir depremin en görünür artçı şokudur. 2023'te Hollywood'da iki büyük grev yaşandı: Amerika Yazarlar Sendikası (WGA) 2 Mayıs–27 Eylül 2023 arasında, oyuncu sendikası SAG-AFTRA ise 14 Temmuz–9 Kasım 2023 arasında greve gitti. 1960'tan bu yana ilk kez yazarlar ve oyuncular aynı anda grevdeydi."},
 {t:"p",html:"Kitap grevin arkasındaki iki ekonomik nedeni öne çıkarır."},
 {t:"list",items:[
  "<b>Yayın gelirlerinin belirsizliği:</b> Geleneksel televizyonda bir dizi ne kadar çok tekrar yayınlanırsa yazarlar ve oyuncular o kadar <b>telif payı</b> (residuals) alırdı. Başarılı bir proje yıllarca gelir getirirdi. Akış platformları ise yapımı kendi kütüphanesinde tutar; klasik anlamda tekrar yayın ve yeniden satış olmaz. Sendika sözleşmeleri gereği burada da telif ödemesi vardır, ama bu ödeme dizinin ne kadar izlendiğinden bağımsız, sabit ve görece düşük bir tutardır; platform izlenme verisini de paylaşmaz. Kitap bu durumu, projenin başarısından pay almayı sağlamayan tek seferlik ödeme (buyout) mantığı olarak özetler. Sonuç olarak özellikle kariyerinin ortasındaki yaratıcıların önemli bir gelir kaynağı kurudu.",
  "<b>Yapay zekâ tehdidi:</b> Stüdyoların senaryo taslaklarını yapay zekâya yazdırması veya bir oyuncunun dijital kopyasını çıkarıp adil ödeme yapmadan sınırsız kullanması ihtimali, yaratıcı emeğin ekonomik değerini sıfırlama potansiyeli taşıyordu."
 ]},
 {t:"p",html:"Aşağıdaki hesaplayıcıyla iki ödeme modelinin bir yaratıcının toplam gelirine etkisini karşılaştırın. Model basitleştirilmiştir; gerçek telif payı sözleşmeleri çok daha karmaşıktır."},
 {t:"widget",name:"calc",opts:{title:"Telif payı mı, toplu ödeme mi?",inputs:[
  {id:"ucret",label:"İlk yazım ücreti",min:10,max:200,step:5,value:50,unit:" bin $"},
  {id:"tekrar",label:"Tekrar yayın/satış sayısı (yıllar içinde)",min:0,max:20,step:1,value:6},
  {id:"pay",label:"Her tekrar başına telif payı (ilk ücretin %'si)",min:0,max:50,step:5,value:20,unit:"%"},
  {id:"buyout",label:"Platformun toplu ek ödemesi",min:0,max:100,step:5,value:25,unit:" bin $"}],
  formula:"(function(){var a=ucret+ucret*pay/100*tekrar,b=ucret+buyout;return 'telif modeli '+a.toLocaleString('tr-TR')+' bin $ · toplu ödeme '+b.toLocaleString('tr-TR')+' bin $ → '+(a>b?'telif modeli '+(a-b).toLocaleString('tr-TR')+' bin $ daha fazla':(a<b?'toplu ödeme '+(b-a).toLocaleString('tr-TR')+' bin $ daha fazla':'eşit'));})()",
  result:"Toplam gelir: {r}",note:"Toplu ödemede projenin başarısından doğan ek değerin tamamı platformda kalır. Dizi ne kadar başarılıysa (tekrar sayısı ne kadar yüksekse) iki model arasındaki fark o kadar büyür."}},
 {t:"p",html:"Kitabın özeti: grevler aslında bir <b>pastanın nasıl paylaşılacağıyla</b> ilgili ekonomik bir kavgadır. Teknoloji pastayı büyütüp kuralları değiştirdiğinde, pastayı yapanlar adil bir dilim için sendikaları aracılığıyla masaya oturur. WGA'nın 2023 anlaşması, akış platformlarındaki izlenme verisine bağlı bir başarı primi ve yapay zekânın kullanımına dair koruyucu kurallar getirdi."}
]},
{n:"9.5",h:"Bağımsız dijital medya nasıl ayakta kalıyor?",blocks:[
 {t:"p",html:"Ana akım medyanın sahiplik yapısı ve ekonomik bağımlılıkları, bazı konuların ve bakış açılarının ekran dışında kalmasına yol açabilir. Bu durum piyasada bir <b>talep boşluğu</b> yaratır: bağımsız, eleştirel ve farklı seslere talep. YouTube kanalları ve bağımsız haber siteleri bu boşluğu doldurmak için ortaya çıktı. Bu, arz ve talebin en temel kuralının medyada da işlediğinin kanıtıdır."},
 {t:"p",html:"Ana akım medya gelir için büyük kurumsal reklamverenlere ve resmî ilanlara dayanır; bu da onu reklamverenlerin ve siyasi gücün hassasiyetlerine karşı kırılgan yapar. Bağımsız dijital medya ise yüzünü doğrudan izleyicisine döner. Kullandığı üç temel gelir modeli şunlardır:"},
 {t:"list",items:[
  "<b>Topluluk finansmanı:</b> İzleyiciler güvendikleri yayıncıyı aylık küçük ödemelerle doğrudan destekler. Patreon ve YouTube'un \"Katıl\" düğmesi en yaygın örneklerdir.",
  "<b>Abonelik:</b> İçeriğin bir kısmı veya tamamı yalnızca aylık ücret ödeyen okurlara açılır.",
  "<b>Mikro-sponsorluk:</b> Dev markalar yerine küçük ve orta ölçekli işletmelerden mütevazı sponsorluklar alınır."
 ]},
 {t:"box",lbl:"Asıl müşteri kim?",html:"Reklama dayalı modelde asıl müşteri <b>reklamverendir</b>; izleyicinin dikkati ona satılır. Topluluk finansmanında asıl müşteri <b>izleyicinin kendisidir</b>. Bu, yayıncının ekonomik çıkarıyla gazetecilik misyonunu aynı hizaya getirir; başarı tık sayısından çok sadık bir topluluk kurabilmeye bağlıdır. Ancak bu modelde gelir kırılgandır, ulaşılan kitle sınırlıdır ve yayıncı destekçilerinin beklentilerine aşırı duyarlı hâle gelebilir."},
 {t:"widget",name:"classify",opts:{title:"Bu gelir hangi modele ait?",cats:["Reklama dayalı","Doğrudan izleyici/okur desteği"],items:[
  ["Bir izleyicinin YouTube \"Katıl\" düğmesiyle aylık 20 TL ödemesi",1],
  ["Bir bankanın ana haber bülteni arasına reklam alması",0],
  ["Okurun haber sitesine yıllık abonelik ücreti ödemesi",1],
  ["Kamu kurumlarının gazeteye resmî ilan vermesi",0],
  ["Patreon'da yayıncıya aylık bağış yapılması",1],
  ["Bir otomobil markasının dizi arasında reklam kuşağı satın alması",0],
  ["Okurların The Guardian'a gönüllü katkı yapması",1],
  ["Bir sitenin sayfa görüntülenmesine göre programatik reklam geliri alması",0]],note:"Ayırt edici soru şudur: parayı ödeyen, içeriği tüketen kişi mi, yoksa o kişinin dikkatine ulaşmak isteyen biri mi?"}}
]},
{n:"9.6",h:"Yatırım ve rekabete geçerken",blocks:[
 {t:"p",html:"Bu haftanın konuları ortak bir noktada buluşuyor: medyada kimin para ödediği, içeriğin ne olacağını belirliyor. Dizi ihracatında yabancı yayıncı, lisanslı yayında devlet, gazetecilikte okur veya reklamveren, akış platformlarında abone, bağımsız medyada topluluk belirleyici aktördür."},
 {t:"p",html:"Kitap bir sonraki bölüme şu cümleyle geçer: medya yatırımı yalnızca para değil, cesaret de ister. İzleyici tercihleri hızla değişir, teknolojiler sürekli yenilenir, rakipler her gün çoğalır. Önümüzdeki hafta bu yüksek riskli yatırım ortamını, reklam bağımlılığını ve bir \"beğeni\"nin nasıl paraya dönüştüğünü inceleyeceğiz."}
]},
{n:"9.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Kültürel emperyalizm","Batı kültürünün küresel medya aracılığıyla diğer kültürler üzerinde baskınlık kurması."],
  ["Kültürel indirim","Bir medya ürününün başka kültürdeki izleyici için değerinin, kültüre özgülüğü oranında düşmesi."],
  ["Yumuşak güç","Bir ülkenin zorlama yerine kültürü ve çekiciliğiyle etki kurabilme kapasitesi."],
  ["Frekans kıtlığı","Yayın için kullanılabilecek spektrumun sınırlı olması; yayın lisansının tarihsel gerekçesi."],
  ["Ödeme duvarı","Belirli sayıda içerikten sonra erişimi abonelik şartına bağlayan model."],
  ["Telif payı (residuals)","Bir yapım tekrar yayınlandıkça veya satıldıkça yaratıcılara yapılan ek ödeme."],
  ["Toplu ödeme (buyout)","Yaratıcıya tek seferde ödenip sonraki kullanımlardan pay verilmeyen ücret."],
  ["Topluluk finansmanı","İzleyicilerin yayıncıyı küçük ve düzenli ödemelerle doğrudan desteklemesi."]
 ]}
]},
{n:"9.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Yalnızca bir ülkenin yerel siyasi esprilerine dayanan bir komedinin yurt dışında satılamaması hangi kavramla açıklanır?",o:["Kültürel emperyalizm","Kültürel indirim","Frekans kıtlığı","Ağ etkisi"],a:1,e:"Ürün kendi kültürüne ne kadar özgüyse başka kültürdeki izleyici için değeri o kadar düşer."},
  {q:"Kitaba göre aşağıdakilerden hangisi Türk dizilerinin kültürel indirimi aşmasını sağlayan etkenlerden biri değildir?",o:["Evrensel temalar","Yüksek prodüksiyon kalitesi","Görece düşük üretim maliyeti","Yayın lisansından muafiyet"],a:3,e:"Kitap evrensel temaları, kaliteyi ve maliyet avantajını sayar; lisans muafiyeti ihracatla ilgili değildir."},
  {q:"Bir dizi 100 bölüm, 20 ülkeye, ülke başına bölüm değeri 4.000 $ ile satılıyor; kültürel indirim %40. Tahmini lisans geliri nedir?",o:["8 milyon $","3,2 milyon $","4,8 milyon $","5,6 milyon $"],a:2,e:"100 × 20 × 4.000 = 8 milyon $; %40 indirimle 8 × 0,6 = 4,8 milyon $."},
  {q:"Devletin televizyon kanallarına lisans verip gazetelere vermemesinin tarihsel gerekçesi nedir?",o:["Televizyonun daha pahalı olması","Yayın frekanslarının kıt bir kamu kaynağı olması","Gazetelerin vergi ödememesi","Televizyonun daha çok reklam alması"],a:1,e:"Spektrum sınırlıdır; düzenlenmezse yayınlar birbirine karışır. Gazete basmak ise kıt bir kamu kaynağını işgal etmez."},
  {q:"Kitaba göre gazeteciliğin ekonomik krizinin iki temel nedeni hangisidir?",o:["Kâğıt fiyatları ve dağıtım maliyeti","Reklam gelirlerinin kayması ve bedava kültürü","Lisans ücretleri ve vergiler","Gazeteci maaşları ve sendikalar"],a:1,e:"İlanlar ve reklamlar dijital platformlara kaydı; okurlar da habere para ödeme alışkanlığını kaybetti."},
  {q:"İçeriği herkese açık tutup okurlardan gönüllü katkı isteyen model hangisidir?",o:["Ödeme duvarı","Üyelik/bağış modeli","Niş yayıncılık","Toplu ödeme"],a:1,e:"Ödeme duvarı erişimi kısıtlar; üyelik/bağış modeli erişimi açık tutup gönüllü desteğe dayanır."},
  {q:"Geleneksel TV ile akış platformları arasındaki telif farkı bir senaristi en çok nasıl etkiler?",o:["Başarılı projenin yıllara yayılan ek geliri azalır","İlk yazım ücreti her durumda yarıya düşer","Sendika üyeliği zorunlu olmaktan çıkar","Senaristin ödediği vergi yükü hızla artar"],a:0,e:"Tekrar yayına bağlı telif payı, projenin başarısından uzun süre gelir sağlıyordu; toplu ödemede bu ek gelir kaybolur."},
  {q:"Bir senarist 50 bin $ ilk ücret alıyor. Eski modelde 6 tekrar yayının her birinde ilk ücretin %20'si kadar telif alacaktı. Toplam geliri ne olurdu?",o:["60 bin $","110 bin $","80 bin $","56 bin $"],a:1,e:"Her tekrar 50 × 0,20 = 10 bin $ getirir; 6 tekrar 60 bin $ eder. İlk ücretle birlikte toplam 110 bin $."},
  {q:"2023 Hollywood grevlerinde yazarların ve oyuncuların ortak ikinci büyük kaygısı neydi?",o:["Sinema bileti fiyatlarının düşmesi","Yapay zekânın yaratıcı emeği ikame etmesi","Frekans ihalelerinin ertelenmesi","Basılı senaryo maliyetinin artması"],a:1,e:"Senaryo taslaklarının yapay zekâya yazdırılması ve oyuncuların dijital kopyalarının ödemesiz kullanılması gündemdeydi."},
  {q:"Topluluk finansmanlı bağımsız bir kanalda \"asıl müşteri\" kimdir?",o:["Reklamveren şirket","Devlet kurumları","İzleyicinin kendisi","Platform şirketi"],a:2,e:"Parayı içeriği tüketen izleyici ödediği için yayıncının ekonomik çıkarı izleyiciye hizmet etmekle örtüşür."}
 ]}
]}
],
refs:[
 "<i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications, 2025. s. 58–68.",
 "Hoskins, C., Mirus, R. (1988). Reasons for the US dominance of the international trade in television programmes. <i>Media, Culture & Society</i>, 10(4), 499–515.",
 "Cagé, J. (2016). <i>Saving the Media: Capitalism, Crowdfunding, and Democracy</i>. Harvard University Press.",
 "Radyo ve Televizyon Üst Kurulu: <a href=\"https://www.rtuk.gov.tr\">rtuk.gov.tr</a>"
],
next:"Sonraki: Hafta 10 — Yatırım ve reklam: beğeninin değeri, yeni kapı bekçileri"
};
