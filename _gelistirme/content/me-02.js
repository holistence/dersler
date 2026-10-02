window.WEEK={
id:"me-02",code:"ME",course:"Medya Ekonomisi",short:"Medya ürününün iktisadı",week:2,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Medya ürününün özellikleri",
title:"İlk kopya pahalı, sonrası <em>bedava</em>: medya ürününün iktisadı",
intro:"Bu hafta medya ürünlerini sıradan mallardan ayıran üç özelliği öğreneceksiniz: yüksek ilk kopya maliyeti ve sıfıra yakın marjinal maliyet, tüketimde rakip olmama (kamusal mal özelliği) ve bunların doğal sonucu olan korsanlık sorunu. Telif hakkının neden var olduğunu ekonomik bir mantıkla açıklayabileceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması ve 9 soruluk bir test var.",
goals:[
 "İlk kopya maliyeti ile marjinal maliyeti ayırt edip ortalama maliyetin izleyici sayısıyla nasıl düştüğünü hesaplayabilirsiniz.",
 "Bu maliyet yapısının stüdyoları neden “hit” ve bilinen markalara yönelttiğini açıklayabilirsiniz.",
 "Malları rakiplik ve dışlanabilirlik ölçütlerine göre dört gruba ayırabilirsiniz.",
 "Abonelik ve şifreleme sistemlerinin rakip olmayan bir ürünü nasıl dışlanabilir hâle getirdiğini açıklayabilirsiniz.",
 "Telif hakkının ekonomik amacını ve korsanlığın teşvik mekanizmasına etkisini tartışabilirsiniz."
],
sections:[
{n:"2.1",h:"Neden bir filmi çekmek 200 milyon dolar, bir kopyası neredeyse bedava?",blocks:[
 {t:"p",html:"Bir Hollywood filminin tamamlanmış ilk hâlini üretmek senaryo, oyuncu ücretleri, setler ve görsel efektlerle devasa bir yatırım gerektirir. Kitaptaki örnekte bu tutar 200 milyon dolardır. Ama ilk kopya bir kez hazırlandıktan sonra filmi bir sinemaya daha göndermenin ya da internette bir kişiye daha izletmenin maliyeti sıfıra yakındır."},
 {t:"def",html:"<b>İlk kopya maliyeti</b>: Bir medya ürününün ilk tamamlanmış hâlini üretmenin maliyeti. <b>Marjinal maliyet</b>: Aynı ürünü bir kişiye daha ulaştırmanın ek maliyeti.",src:"Medya ürünlerinin en belirgin ekonomik özelliği: yüksek ilk kopya maliyeti, çok düşük marjinal maliyet (ders kitabı, s. 9)."},
 {t:"p",html:"Bu yapıyı sıradan bir malla karşılaştırın. Bir fırın her yeni ekmek için yeniden un, maya ve enerji harcar; ekmeğin marjinal maliyeti belirgindir. Bir dizi bölümünün ise milyonuncu izleyicisi, birinci izleyicisi kadar ek maliyet getirmez. Maliyetin neredeyse tamamı <b>sabit</b> ve <b>batık</b>tır: film tutmasa da harcanan para geri gelmez."},
 {t:"table",head:["Ürün","İlk kopya maliyetinin kalemleri","Bir kopya daha"],rows:[
  ["Sinema filmi","Senaryo, oyuncu, set, çekim, görsel efekt, kurgu","Dijital kopya ya da akış (streaming): sıfıra yakın"],
  ["Bilgisayar oyunu","Yazılım geliştirme, tasarım, ses, test","İndirme: sıfıra yakın"],
  ["Şarkı","Beste, stüdyo, prodüksiyon, miksaj","Bir dinleme daha: sıfıra yakın"],
  ["Basılı gazete","Haber toplama, yazı işleri, sayfa tasarımı","Kâğıt, mürekkep, dağıtım: düşük ama sıfır değil"]]},
 {t:"p",html:"Son satır önemli bir ayrımı gösterir: basılı ürünlerde marjinal maliyet düşük ama gerçektir. Dijitalleşme bu son maliyeti de büyük ölçüde ortadan kaldırdı. Haber sitesinin bir okura daha sayfa göstermesi neredeyse hiçbir şeye mal olmaz."}
]},
{n:"2.2",h:"Ortalama maliyet nasıl erir?",blocks:[
 {t:"p",html:"İlk kopya maliyeti sabit olduğu için ürün ne kadar çok kişiye ulaşırsa kişi başına düşen maliyet o kadar düşer. Bu, medya endüstrisinde ölçeğin neden bu kadar önemli olduğunu açıklar. Aşağıdaki hesaplayıcıda izleyici sayısını artırın ve kişi başı maliyetin nasıl eridiğini izleyin."},
 {t:"box",lbl:"Formül",html:"Kişi başına ortalama maliyet = (İlk kopya maliyeti ÷ İzleyici sayısı) + Marjinal maliyet"},
 {t:"widget",name:"calc",opts:{title:"İlk kopya maliyeti ve izleyici başına ortalama maliyet",inputs:[{id:"ilk",label:"İlk kopya maliyeti",min:1,max:300,step:1,value:200,unit:" milyon $"},{id:"izleyici",label:"İzleyici / alıcı sayısı",min:1,max:200,step:1,value:20,unit:" milyon"},{id:"mc",label:"Kişi başına marjinal maliyet",min:0,max:2,step:0.05,value:0.1,unit:" $"}],formula:"ilk/izleyici+mc",result:"İzleyici başına ortalama maliyet: {r} $",digits:2,note:"200 milyon $'lık bir film 20 milyon kişiye ulaşırsa kişi başı maliyet ≈ 10 $; 100 milyon kişiye ulaşırsa ≈ 2 $. Marjinal maliyet ise hep küçük kalır. Kitlenin büyüklüğü, maliyeti karşılamanın neredeyse tek yoludur."}},
 {t:"p",html:"Ekonomist Richard Caves, yaratıcı endüstrileri inceleyen çalışmasında bu sektörlerin yüksek belirsizlik ve büyük batık maliyetlerle çalıştığını vurgular. Yatırılan 200 milyon doları geri almak için filmin milyonlarca kişiye ulaşması gerekir. Bu yüzden stüdyolar riski azaltmak için küresel pazarlara hitap eden, <b>bilinen markalara</b> (süper kahramanlar, devam filmleri) dayalı yapımlara yönelir. Bu stratejiyi Hafta 06'da ayrıntılı inceleyeceğiz."},
 {t:"box",lbl:"Bağımsız yapımcı için anlamı",html:"Düşük bütçeli bir yapımcı da aynı maliyet yapısıyla karşı karşıyadır, ama milyonlarca kişiye ulaşacak dağıtım ve pazarlama gücü yoktur. İlk kopyayı finanse etmek zordur, kopyalar ucuz olsa bile kitleye ulaşmak pahalıdır. Bu yüzden festivaller, kamu destekleri ve dijital platformların lisans alımları bağımsız sinema için hayati önemdedir."}
]},
{n:"2.3",h:"Bir şarkıyı dinlediğinizde başkası için tükenir mi?",blocks:[
 {t:"p",html:"Bir elmayı yediğinizde o elma başkası için yok olur. İktisatta buna <b>rakip mal</b> denir. Ama bir şarkıyı dinlemeniz, bir filmi izlemeniz ya da bir haberi okumanız başka birinin aynı şeyi yapmasını engellemez. Medya ürünlerinin çoğu bu anlamda <b>rakip olmayan</b> mallardır ve bu onları <b>kamusal mal</b> karakterine yaklaştırır."},
 {t:"def",html:"Saf kamusal mal iki özellik taşır: <b>rakip olmama</b> (bir kişinin tüketimi başkasının tüketimini azaltmaz) ve <b>dışlanamama</b> (ödemeyen kişiyi tüketimden alıkoymak mümkün değildir ya da çok pahalıdır).",src:"Rakiplik ve dışlanabilirlik ölçütleri birlikte dört mal türü verir."},
 {t:"table",head:["","Dışlanabilir","Dışlanamaz"],rows:[
  ["<b>Rakip</b>","Özel mal: elma, basılı bir gazete nüshası, sinema koltuğu","Ortak kaynak: denizdeki balık, kalabalık bir şehir yolu"],
  ["<b>Rakip değil</b>","Kulüp malı: Netflix ya da Spotify aboneliği, şifreli dijital yayın","Kamusal mal: şifresiz radyo-TV yayını, deniz feneri"]]},
 {t:"p",html:"Bu özellik endüstri için hem bir lütuf hem bir lanettir. Lütuftur, çünkü aynı ürün sonsuz sayıda kişiye satılabilir. Lanettir, çünkü ödemeyeni dışarıda tutmak zorlaşır: içeriği bir kez ele geçiren onu ücretsiz çoğaltabilir. Abonelik platformları bu sorunu şifre ve üyelik sistemleriyle çözer; rakip olmayan ürünü <b>dışlanabilir</b> hâle getirir."},
 {t:"widget",name:"classify",opts:{title:"Hangi mal türü?",cats:["Özel mal","Kulüp malı","Kamusal mal","Ortak kaynak"],items:[
  ["Bayiden satın alınan basılı gazete nüshası",0],
  ["Spotify Premium'da bir şarkı dinlemek",1],
  ["Şifresiz yayın yapan bir radyo kanalı",2],
  ["Sinema salonundaki bir koltuk",0],
  ["Şifreli dijital platformda maç yayını",1],
  ["Deniz feneri",2],
  ["Açık denizdeki balık stoku",3],
  ["Sürekli sıkışan ücretsiz bir şehir içi yol",3]
 ],note:"Medya ürününün kendisi (şarkı, film) rakip değildir. Hangi kutuya gireceğini belirleyen, dışlanabilir kılınıp kılınmadığıdır: şifre ve abonelik onu kulüp malına, şifresiz yayın ise kamusal mala yaklaştırır. Basılı nüsha ve sinema koltuğu fiziksel olduğu için rakiptir."}}
]},
{n:"2.4",h:"Korsan indirmek gerçekten hırsızlık mıdır?",blocks:[
 {t:"p",html:"Ekonomik açıdan korsanlık, kamusal mal özelliğinin bir sonucudur. Kopyalama neredeyse bedavadır ve tüketim rakip değildir; içerik kolayca yayılır. Bir bisikleti çaldığınızda sahibi bisikletsiz kalır. Bir filmi korsan indirdiğinizde ise kimse filmini kaybetmez. Ekonomik zarar başka yerdedir: yaratıcının <b>alabileceği bir ödeme</b> kaybolur."},
 {t:"p",html:"<b>Telif hakkının</b> ekonomik amacı tam da bu sorunu çözmektir. Yaratıcılara eserleri üzerinde belirli bir süre için yasal bir tekel hakkı tanınır. Böylece yüksek ilk yatırımlarının karşılığını alabilir ve yeni eserler üretmeye teşvik edilirler. Korsanlık bu teşvik mekanizmasını zayıflattığı için endüstri tarafından bir tehdit olarak görülür."},
 {t:"choice",items:[
  {label:"Telif yoksa",title:"Kopyalama serbest",body:"Herkes eseri ücretsiz çoğaltabilir. Yaratıcı ilk kopya maliyetini geri alamaz, yeni üretim için teşvik azalır.",ex:"Sonuç: Kısa vadede herkes için ucuz erişim; uzun vadede daha az ve daha düşük bütçeli içerik, piyasanın kalitesizleşmesi."},
  {label:"Güçlü telif",title:"Süreli yasal tekel",body:"Yaratıcı ve yapımcı yatırımlarını geri alabilir; yeni üretim teşvik edilir.",ex:"Bedeli: Tekel fiyatları yüksek tutabilir, eserlere erişim kısıtlanabilir. Telif süresinin sınırlı tutulmasının nedeni bu dengedir."},
  {label:"Korsan yaygın",title:"Yasa var ama uygulanamıyor",body:"Teşvik mekanizması zayıflar, endüstri gelir kaybeder. Yasal kanaldan içerik alanlar için maliyet artabilir.",ex:"Sonuç: Ödeyenler, ödemeyenlerin yükünü de taşır; şirketler şifreleme ve hukuki takibe daha çok harcar."}
 ]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de eser sahiplerinin hakları 5846 sayılı Fikir ve Sanat Eserleri Kanunu ile korunur. Koruma, kural olarak eser sahibinin yaşamı boyunca ve ölümünden sonra 70 yıl sürer. Süre dolan eser kamu malı (public domain) hâline gelir; isteyen herkes basabilir, uyarlayabilir. Bu süre sınırı, “teşvik” ile “erişim” arasındaki dengenin yasal ifadesidir."},
 {t:"p",html:"Bazı sanatçıların eserlerini internette ücretsiz paylaşmasının da bir ekonomik mantığı vardır. Ücretsiz şarkı tanınırlık getirir; sanatçı parayı konser bileti, ürün satışı ya da sponsorlukla kazanır. Burada ücretsiz içerik, başka bir ürünün <b>reklamı</b> işlevi görür."}
]},
{n:"2.5",h:"Korsanlık geliri nasıl etkiler?",blocks:[
 {t:"p",html:"Korsanlığın gelir kaybı, “her korsan indirme kaybedilmiş bir satıştır” varsayımıyla hesaplanırsa abartılır. Korsan indiren herkes, korsan seçeneği olmasaydı ürünü satın almazdı. İktisatçılar bu yüzden bir <b>ikame oranı</b> kullanır: korsan indirmelerin yüzde kaçı gerçekten bir satışın yerini alıyor? Aşağıdaki örnek rakamlarla deneyin."},
 {t:"widget",name:"calc",opts:{title:"Korsanlığın tahmini gelir kaybı",inputs:[{id:"korsan",label:"Korsan indirme sayısı",min:0,max:5000,step:100,value:1000,unit:" bin"},{id:"oran",label:"Satışın yerini alan pay (ikame oranı)",min:0,max:100,step:5,value:20,unit:"%"},{id:"fiyat",label:"Yasal fiyat",min:10,max:500,step:10,value:100,unit:" TL"}],formula:"korsan*1000*(oran/100)*fiyat",result:"Tahmini gelir kaybı: {r} TL",digits:0,note:"İkame oranı %100 seçilirse kayıp en yüksek görünür; gerçekte bu oran çok daha düşüktür. Bu yüzden “korsanlık X milyar liralık kayıp” başlıklı haberlerde varsayımı sormak gerekir. Yine de kayıp sıfır değildir: ödeme yapanların azalması ilk kopya maliyetini karşılamayı zorlaştırır."}}
]},
{n:"2.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["İlk kopya maliyeti","Bir medya ürününün ilk tamamlanmış hâlini üretmenin maliyeti; çoğunlukla çok yüksek ve batıktır."],
  ["Marjinal maliyet","Bir kopya daha üretmenin ya da bir kişiye daha ulaştırmanın ek maliyeti; dijital ürünlerde sıfıra yakın."],
  ["Batık maliyet","Ürün başarısız olsa da geri alınamayan harcama."],
  ["Rakip mal","Bir kişinin tüketiminin başkasının tüketimini azalttığı mal (elma)."],
  ["Dışlanabilirlik","Ödemeyen kişiyi tüketimden alıkoyabilme imkânı."],
  ["Kamusal mal","Rakip olmayan ve dışlanamayan mal; şifresiz yayın buna yakındır."],
  ["Kulüp malı","Rakip olmayan ama dışlanabilir mal; abonelik platformları."],
  ["Telif hakkı","Yaratıcıya eseri üzerinde süreli yasal tekel tanıyarak yatırımın geri dönüşünü sağlayan hak."],
  ["İkame oranı","Korsan indirmelerin gerçekten kaybedilmiş bir satışın yerini alan payı."]
 ]}
]},
{n:"2.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Medya ürünlerinin en belirgin maliyet özelliği hangisidir?",o:["Düşük ilk kopya maliyeti, yüksek marjinal maliyet","Yüksek ilk kopya maliyeti, çok düşük marjinal maliyet","İlk kopya ve marjinal maliyetin eşit olması","Her kopyanın ilk kopyadan daha pahalı olması"],a:1,e:"İlk kopya senaryo, oyuncu, efekt gibi büyük harcamalar ister; sonraki kopyaları dağıtmak neredeyse bedavadır."},
  {q:"İlk kopya maliyeti 100 milyon $ olan bir film 50 milyon kişiye ulaşıyor; marjinal maliyet ihmal edilebilir. Kişi başı ortalama maliyet nedir?",o:["0,5 $","2 $","5 $","50 $"],a:1,e:"100 milyon ÷ 50 milyon = 2 $. İzleyici arttıkça bu tutar düşmeye devam eder."},
  {q:"Bu maliyet yapısı stüdyoları hangi tür yapımlara yöneltir?",o:["Küçük yerel kitleye yönelik deneysel filmlere","Küresel kitleye hitap eden, bilinen markalara dayalı filmlere","Yalnızca belgesel ve kısa filmlere","Kopyası pahalı olan fiziksel ürünlere"],a:1,e:"Büyük ve batık ilk yatırımı geri almak için çok geniş bir kitle gerekir; bilinen markalar bu kitleyi daha güvenilir biçimde getirir."},
  {q:"Bir şarkının milyonlarca kişi tarafından aynı anda dinlenebilmesi hangi özelliği gösterir?",o:["Dışlanabilirlik","Tüketimde rakip olmama","Yüksek marjinal maliyet","Ortak kaynak sorunu"],a:1,e:"Bir kişinin dinlemesi başkasının dinlemesini azaltmaz; şarkı tükenmez."},
  {q:"Netflix rakip olmayan bir ürünü nasıl dışlanabilir hâle getirir?",o:["Filmleri yalnızca sinemada göstererek","Şifre ve abonelik sistemiyle erişimi ödeyenlere sınırlayarak","Her filmden yalnızca bir kopya üreterek","İçeriği şifresiz yayın kanalında sunarak"],a:1,e:"Ürün yine rakip değildir, ama ödemeyen kişi dışarıda tutulur; böylece ürün kulüp malına dönüşür."},
  {q:"Şifresiz yayın yapan bir radyo kanalı hangi mal türüne en yakındır?",o:["Özel mal","Kulüp malı","Kamusal mal","Ortak kaynak"],a:2,e:"Dinleyiciler birbirinin tüketimini azaltmaz ve frekansı yakalayan herkes dinleyebilir: rakip değil, dışlanamaz."},
  {q:"Telif hakkı yasalarının temel ekonomik amacı nedir?",o:["Eserlerin satış fiyatını devletin belirlemesini sağlamak","Yatırımın geri dönüşünü koruyarak yeni üretimi teşvik etmek","İçeriğin herkese ücretsiz ve sınırsız ulaşmasını sağlamak","Medya şirketlerinin ödediği vergi yükünü azaltmak"],a:1,e:"Süreli tekel hakkı, korsanlığın yok edeceği gelir imkânını korur ve yeni eser üretme teşvikini sürdürür."},
  {q:"Lisanssız yazılım kullanmak ile bir bisikleti çalmak arasındaki temel ekonomik fark nedir?",o:["Yazılımın bisikletten her zaman daha ucuz olması","Bisiklet rakip maldır; yazılımın sahibi ürününü kaybetmez","Bisikletin dışlanamayan bir kamusal mal olması","Yazılımın marjinal maliyetinin çok yüksek olması"],a:1,e:"Bisiklet rakip maldır; yazılım değildir. Yazılımda kayıp, ürünün kendisi değil, alınabilecek ödemedir."},
  {q:"1 milyon korsan indirme var, ikame oranı %20, yasal fiyat 100 TL. Tahmini gelir kaybı nedir?",o:["100 milyon TL","20 milyon TL","2 milyon TL","200 milyon TL"],a:1,e:"1.000.000 × 0,20 × 100 = 20.000.000 TL. İkame oranını hesaba katmayan 100 milyon TL'lik tahmin kaybı beş kat abartır."}
 ]}
]}
],
refs:[
 "Şahin, M. (2025). <i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications. s. 9–14.",
 "Caves, R. E. (2000). <i>Creative Industries: Contracts between Art and Commerce</i>. Harvard University Press.",
 "Shapiro, C., Varian, H. R. (1999). <i>Information Rules: A Strategic Guide to the Network Economy</i>. Harvard Business School Press.",
 "5846 sayılı Fikir ve Sanat Eserleri Kanunu: <a href=\"https://www.mevzuat.gov.tr\">mevzuat.gov.tr</a>"
],
next:"Sonraki: Hafta 03 — Reyting, reklam ve “ürün sizsiniz”"
};
