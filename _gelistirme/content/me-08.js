window.WEEK={
id:"me-08",code:"ME",course:"Medya Ekonomisi",short:"Dijitalleşme",week:8,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Dijital medya",
title:"Dijitalleşme: bilişsel artık, filtre balonu ve <em>dördüncü kuvvet</em>",
intro:"Bu hafta dijitalleşmenin medyaya getirdiği üç büyük değişimi inceliyoruz: izleyicinin boş zamanının içerik üretimine dönüşmesi (bilişsel artık), algoritmaların bizi kendi görüşlerimizin içine kapatması (filtre balonu) ve medyanın denetim gücünün yanında taşıdığı ekonomik güç. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, iki karşılaştırma paneli ve 9 soruluk bir test var.",
goals:[
 "Bilişsel artık kavramını tanımlayıp platformların bu kaynağı nasıl gelire dönüştürdüğünü açıklayabilirsiniz.",
 "Filtre balonunun oluşma mekanizmasını ve reklam gelirleriyle bağını açıklayabilirsiniz.",
 "Platformda geçirilen sürenin reklam gelirine etkisini basit bir hesapla gösterebilirsiniz.",
 "Filtre balonunun ekonomik faydalarını toplumsal maliyetlerinden ayırt edebilirsiniz.",
 "Medyanın \"dördüncü kuvvet\" rolü ile ekonomik çıkarları arasındaki gerilimi örneklerle tartışabilirsiniz."
],
sections:[
{n:"8.1",h:"Dijitalleşme medyayı özgürleştirdi mi?",blocks:[
 {t:"p",html:"Dijitalleşme medyanın iki temel kısıtını gevşetti: üretim maliyetini ve dağıtım maliyetini. Eskiden bir gazete çıkarmak için matbaa, bir kanal kurmak için verici ve frekans gerekiyordu. Bugün bir akıllı telefon ve internet bağlantısıyla herkes yayıncı olabiliyor."},
 {t:"p",html:"Ancak bu özgürleşmenin bir bedeli var. İçeriği üretmek kolaylaştıkça, içeriği <b>kime göstereceğine</b> karar veren platformlar güç kazandı. Kitap bu haftaki bölümü bir soruyla açıyor: dijitalleşme medyayı gerçekten özgürleştirdi mi, yoksa yeni bağımlılıklar mı yarattı? Bu hafta göreceğimiz üç kavram bu sorunun üç ayrı cevabıdır."},
 {t:"table",head:["Kavram","Dijitalleşmenin açtığı kapı","Yarattığı yeni bağımlılık"],rows:[
  ["Bilişsel artık","Herkes içerik üretebilir","Üretilen değerin büyük kısmını platform toplar"],
  ["Filtre balonu","Herkese ilgisini çeken içerik ulaşır","Farklı görüşlerle karşılaşma azalır"],
  ["Dördüncü kuvvet","Denetim için daha çok kanal var","Medya gücü ticari çıkarlarla iç içe geçer"]]}
]},
{n:"8.2",h:"Bilişsel artık: boş zamanın ekonomik değeri",blocks:[
 {t:"def",html:"<b>Bilişsel artık</b> (cognitive surplus), bir toplumun toplam boş zamanı ve bu zamanda yaratıcılık, bilgi paylaşımı ve işbirliği için kullanılabilecek zihinsel enerjidir.",src:"Kavram, Clay Shirky'nin 2010 tarihli <i>Cognitive Surplus</i> kitabıyla yaygınlaştı."},
 {t:"p",html:"En basit hâliyle bilişsel artık, televizyon karşısında pasif geçirdiğimiz saatlerin üretken bir şeye dönüşme potansiyelidir. Bir öğrencinin akşam bir saat dizi izlemek yerine bir yemek tarifi videosu çekip paylaşması, bu potansiyelin gerçeğe dönüşmesidir. Tek başına küçük görünür; milyonlarca kişiyle çarpıldığında devasa bir üretim kapasitesi ortaya çıkar."},
 {t:"p",html:"Aşağıdaki hesaplayıcıyla bir toplumun yıllık boş zamanının büyüklüğünü görün. Shirky'nin kaba tahminine göre Vikipedi'nin tamamı yaklaşık 100 milyon saatlik insan emeğinin ürünüdür; hesap, toplam boş zamanın kaç \"Vikipedi\" ettiğini gösteriyor."},
 {t:"widget",name:"calc",opts:{title:"Bir toplumun bilişsel artığı",inputs:[
  {id:"kisi",label:"Kişi sayısı (milyon)",min:1,max:90,step:1,value:60},
  {id:"dakika",label:"Günlük ekran başı boş zaman",min:10,max:300,step:10,value:120,unit:" dk"},
  {id:"pay",label:"Bu zamanın üretime dönüşen payı",min:0,max:20,step:1,value:1,unit:"%"}],
  formula:"(function(){var saat=kisi*1e6*dakika/60*365;var ur=saat*pay/100;return (saat/1e9).toLocaleString('tr-TR',{maximumFractionDigits:1})+' milyar saat boş zaman; üretime dönüşen '+(ur/1e6).toLocaleString('tr-TR',{maximumFractionDigits:0})+' milyon saat ≈ '+(ur/1e8).toLocaleString('tr-TR',{maximumFractionDigits:1})+' Vikipedi';})()",
  result:"Yıllık toplam: {r}",note:"Boş zamanın yalnızca %1'inin üretime dönüşmesi bile her yıl onlarca Vikipedi büyüklüğünde bir emek demektir. Platformların iş modeli bu küçük payı toplamaya dayanır."}}
]},
{n:"8.3",h:"Bilişsel artık medya iş modelini nasıl değiştirdi?",blocks:[
 {t:"p",html:"Kitap, bilişsel artığın medya ekonomisini üç yoldan dönüştürdüğünü söyler. Geleneksel modelde içeriği profesyoneller üretir, izleyici pasif tüketirdi. Yeni modelde izleyici aynı zamanda üreticidir."},
 {t:"list",items:[
  "<b>Üretim kaynağı:</b> YouTube, TikTok ve Instagram gibi platformlar, kullanıcıların boş zamanlarında ürettiği içeriği (kullanıcı üretimli içerik, <i>user-generated content</i>) birincil üretim kaynağı olarak kullanır.",
  "<b>İş modeli:</b> Platform içeriği barındırır, düzenler ve milyonlara ulaştırır; geliri reklamdan veya abonelikten elde eder. Kullanıcıların ücretsiz emeği böylece büyük bir ekonomik değere dönüşür. Vikipedi'nin tamamı gönüllülerin bilişsel artığıyla oluşturulmuştur.",
  "<b>Değer ve bağımlılık:</b> Beğenme, yorum yapma ve paylaşma gibi küçük etkileşimler de platformun değerini artırır. Bu küçük katkıların toplamı dikkat ekonomisini besler ve bağımlılık yapıcı döngüleri güçlendirir."
 ]},
 {t:"box",lbl:"Kitaptaki benzetme",html:"Medya şirketleri için bilişsel artık, işlenmeyi bekleyen <b>petrol gibi bir hammaddedir</b>. Bu kaynak sayesinde geleneksel medyanın üretim maliyetlerine katlanmadan sınırsız ve sürekli yeni içerik akışı yaratılabilir."},
 {t:"p",html:"Türkiye'den bir örnek: bir haber sitesinin okur yorumlarını ve okur anketlerini bir araya getirip bir \"okuyucu içeriği\" bölümü oluşturması, bilişsel artığın üretim kaynağı olarak kullanılmasıdır. Site bu bölüm için muhabir maaşı ödemez, ama bölüm sayfa görüntülenmesi ve reklam geliri getirir."}
]},
{n:"8.4",h:"Filtre balonu: algoritmanın bize seçtiği dünya",blocks:[
 {t:"def",html:"<b>Filtre balonu</b>, algoritmaların çevrimiçi deneyimi kişiselleştirmesi sonucu kullanıcının kendi inançlarını ve ilgi alanlarını pekiştiren, farklı görüş ve bilgilere maruz kalmadığı bir bilgi baloncuğunda yaşamasıdır.",src:"Terim, Eli Pariser'ın 2011 tarihli <i>The Filter Bubble</i> kitabıyla yaygınlaştı."},
 {t:"p",html:"Balon, arama motorlarının, sosyal medya akışlarının ve haber sitelerinin geçmiş tıklamalarımıza, beğenilerimize ve etkileşimlerimize bakarak bize yalnızca \"seveceğimizi düşündüğü\" içerikleri sunmasıyla oluşur. Futbol videolarına bakan bir kullanıcının akışı giderek daha çok futbolla, belli bir siyasi görüşe yakın haberlere tıklayan birinin akışı giderek o görüşle dolar."},
 {t:"p",html:"Platformun bunu yapmasının nedeni ekonomiktir. Kullanıcı ilgisini çeken içerikle karşılaştıkça platformda daha uzun kalır, daha çok içerik tüketir ve daha çok reklam görür. \"Sonsuz kaydırma\" gibi tasarımlarla birleşince filtre balonu dikkat ekonomisinin en güçlü araçlarından biri olur. Hesaplayıcıyla kişiselleştirmenin platformda geçirilen süreyi artırmasının reklam gelirine etkisini görün."},
 {t:"widget",name:"calc",opts:{title:"Kişiselleştirme, süre ve reklam geliri",inputs:[
  {id:"kullanici",label:"Günlük aktif kullanıcı (milyon)",min:1,max:50,step:1,value:10},
  {id:"dakika",label:"Kişi başı günlük süre",min:5,max:180,step:5,value:40,unit:" dk"},
  {id:"artis",label:"Kişiselleştirmenin süreye etkisi",min:0,max:100,step:5,value:25,unit:"%"},
  {id:"bin",label:"Bin reklam gösterimi başına gelir",min:5,max:200,step:5,value:40,unit:" TL"}],
  formula:"(function(){var g=function(d){return kullanici*1e6*d*1/1000*bin;};var once=g(dakika),sonra=g(dakika*(1+artis/100));return (once/1e6).toLocaleString('tr-TR',{maximumFractionDigits:1})+' milyon TL → '+(sonra/1e6).toLocaleString('tr-TR',{maximumFractionDigits:1})+' milyon TL (yıllık ek gelir ≈ '+((sonra-once)*365/1e9).toLocaleString('tr-TR',{maximumFractionDigits:2})+' milyar TL)';})()",
  result:"Günlük reklam geliri: {r}",note:"Varsayım: kullanıcı dakikada bir reklam görüyor. Gelir, süreyle doğru orantılı artar; bu yüzden platformlar kullanıcıyı ekranda tutan her algoritmik değişikliğe yatırım yapar."}}
]},
{n:"8.5",h:"Filtre balonunun faydası ve bedeli",blocks:[
 {t:"p",html:"Kitap, filtre balonunun medya ekonomisindeki etkilerini dört başlıkta toplar. İlk üçü platformlar ve medya kuruluşları için ekonomik fırsattır; dördüncüsü toplumun ödediği bedeldir."},
 {t:"choice",items:[
  {label:"Hedefli reklam",title:"Kişiselleştirilmiş reklam ekonomisi",body:"Algoritmalar kullanıcıların ilgi alanlarını ayrıntılı biçimde analiz eder; reklamlar tam bu ilgi alanlarına göre gösterilir. Reklamın etkinliği arttıkça platform reklam alanını daha pahalıya satar.",ex:"Kamp videoları izleyen kullanıcıya çadır reklamı gösterilir."},
  {label:"Tüketim artışı",title:"İçerik tüketimini artırma",body:"Kullanıcı sürekli ilgisini çeken içerikle karşılaştığı için platformda daha uzun kalır ve daha fazla reklam görür.",ex:"\"Bir video daha\" diyerek bir saatin geçmesi."},
  {label:"Niş abonelik",title:"Niş içerik ve abonelik",body:"Kendi ilgi alanına odaklanan kullanıcı, o alanda içerik sunan platformlara ve yayınlara abone olmaya daha yatkın hâle gelir. Bu, medya kuruluşları için yeni gelir akışı yaratabilir.",ex:"Yalnızca basketbol analizine odaklanan ücretli bir bülten."},
  {label:"Dezenformasyon",title:"Toplumsal bedel",body:"Kullanıcılar yalnızca görüşlerini destekleyen bilgiyi aldığında yanlış bilgi ve komplo teorileri hızla yayılır. Bu algıları besleyen yayıncılar bundan ekonomik çıkar sağlayabilir; bilgi çeşitliliği azalır, kutuplaşma artar.",ex:"Doğrulanmamış bir iddianın yalnızca ona inananların akışında dolaşması."}
 ]},
 {t:"p",html:"Ekonomik açıdan filtre balonu bir <b>dışsallık</b> örneğidir: platformun kazancı kendi gelir tablosuna yazılır, ama kutuplaşma ve yanlış bilginin maliyetini toplum öder. Aşağıdaki alıştırmada her durumun hangi tarafa düştüğüne karar verin."},
 {t:"widget",name:"classify",opts:{title:"Filtre balonu: kim kazanıyor, kim ödüyor?",cats:["Platform/medya için ekonomik kazanç","Toplum için maliyet"],items:[
  ["Reklamların ilgi alanına göre daha pahalıya satılması",0],
  ["Farklı görüşlerle karşılaşma olasılığının azalması",1],
  ["Kullanıcının uygulamada geçirdiği sürenin uzaması",0],
  ["Komplo teorilerinin kapalı gruplarda hızla yayılması",1],
  ["Niş bir konuda ücretli abone sayısının artması",0],
  ["Toplumsal kutuplaşmanın derinleşmesi",1],
  ["Kullanıcı verisinden ayrıntılı kitle segmentleri oluşturulması",0],
  ["Ortak bir gündem etrafında tartışmanın zorlaşması",1]],note:"Filtre balonunun faydaları gelir tablosunda görünür; maliyetleri ise kimsenin bilançosunda yer almaz. Bu yüzden piyasa kendi hâline bırakıldığında balonlar küçülmez, büyür."}}
]},
{n:"8.6",h:"Dördüncü kuvvet ve medyanın ekonomik gücü",blocks:[
 {t:"p",html:"Medya, yasama, yürütme ve yargıdan sonra <b>\"dördüncü kuvvet\"</b> olarak adlandırılır, çünkü iktidarı denetleme ve kamuoyunu bilgilendirme gücüne sahiptir. Ancak medya aynı zamanda büyük bir endüstridir: bir yandan kamusal hizmet sunar, öte yandan kendi ekonomik çıkarları doğrultusunda hareket edebilir."},
 {t:"p",html:"Kitap, medyanın ekonomik gücünü beş kanalda inceler. Her birine tıklayarak nasıl işlediğini görün."},
 {t:"choice",items:[
  {label:"Pazar yaratma",body:"Medya, tüketim alışkanlıklarını ve trendleri, hatta yeni sektörleri yaratabilir. Bir ürünü veya yaşam tarzını öne çıkararak talebi doğrudan etkiler; bu da reklam ekonomisini ve medyanın kendi gelirini büyütür.",ex:"Bir dizide kullanılan ürünün ertesi gün çok satılanlara girmesi."},
  {label:"Bilgi akışı",body:"Bilgiyi işleme, filtreleme ve sunma gücü ekonomik değer taşır. Medya bu akıştan abonelik, özel içerik veya veri satışı yoluyla gelir elde eder. Kamusal haber bile reklamverenler için bir hedef kitle yaratır.",ex:"Ekonomi haberlerini okuyan kitlenin bankalara reklam alanı olarak satılması."},
  {label:"Çıkar koruma",body:"Büyük medya kuruluşları çoğu zaman başka sektörlerde yatırımı olan holdinglerin parçasıdır. Bu yapı, medyanın denetim rolünü yerine getirirken bağlı şirketlerin çıkarlarını koruma potansiyelini ve çıkar çatışmasını beraberinde getirir.",ex:"Kitaptaki soru: bir medya şirketinin kendi gıda firmasının ürünleri hakkında sürekli olumlu haber yapması."},
  {label:"İtibar",body:"Medya şirketlerin, markaların ve kişilerin itibarını inşa edebilir veya yıkabilir. Olumlu görünürlük piyasa değerini ve satışları artırır, olumsuz yayın ciddi zarar verir. Kitap bunu \"algı ekonomisi\"nin doğrudan yansıması olarak görür.",ex:"Olumsuz bir haberin ardından bir şirketin hisse fiyatının düşmesi."},
  {label:"Tekelleşme",body:"Ölçek ve kapsam ekonomileri nedeniyle medya şirketleri birleşerek büyük konglomeralar oluşturur. Bilgi ve içerik az sayıda aktörün elinde toplanır; farklı seslerin duyulması zorlaşır.",ex:"Gazete, kanal, radyo ve haber sitesinin aynı çatı altında toplanması."}
 ]}
]},
{n:"8.7",h:"Denetçi mi, çıkar sahibi mi?",blocks:[
 {t:"p",html:"Bu beş kanal, medyanın iki rolü arasında bir gerilim yaratır. Denetçi rolü bağımsızlık ister; ekonomik rol ise reklamverenlere, ortaklara ve sahiplerine bağımlılık getirir. Kitabın vardığı sonuç şudur: medya yalnızca bir siyasi denetim aracı değil, bilgi, dikkat ve algı üzerinden büyük bir ekonomik güce sahip bir endüstridir; bu güç toplum yararına bir gözetleme rolü de üstlenebilir, manipülasyona da açık hâle gelebilir."},
 {t:"box",lbl:"Etik ikilem",html:"Bir yayın kuruluşu yeni çıkan bir teknoloji ürününün reklamını yayınlarken aynı ürün hakkında \"bağımsız inceleme\" de yayınlıyorsa, okur incelemenin ne kadar bağımsız olduğunu bilemez. Reklam ile haberin açıkça ayrılması ve ilişkinin okura bildirilmesi bu yüzden önemlidir."},
 {t:"p",html:"Tekelleşmenin demokratik sonucu da buradan çıkar: birkaç büyük şirket bütün medya kuruluşlarına sahip olduğunda, denetlenecek iktidar ile denetleyen medya arasındaki mesafe kısalabilir. Önümüzdeki haftalarda medya sahipliği ve holding medyası konusunu bu çerçeveyle ayrıntılı ele alacağız."}
]},
{n:"8.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Bilişsel artık","Toplumun boş zamanında yaratıcılık ve işbirliği için kullanılabilecek toplam zihinsel enerji."],
  ["Kullanıcı üretimli içerik","Profesyoneller yerine platform kullanıcılarının ürettiği video, yorum, fotoğraf gibi içerikler."],
  ["Filtre balonu","Algoritmik kişiselleştirme sonucu kullanıcının yalnızca kendi görüşünü pekiştiren içerikle karşılaşması."],
  ["Sonsuz kaydırma","Akışın hiç bitmemesi; kullanıcıyı platformda tutmaya yönelik tasarım."],
  ["Hedefli reklam","Reklamın, kullanıcı verisiyle belirlenen ilgi alanlarına göre gösterilmesi."],
  ["Dördüncü kuvvet","Medyanın yasama, yürütme ve yargıyı denetleme ve kamuoyunu bilgilendirme rolü."],
  ["Algı ekonomisi","Medyanın itibar inşa etme ya da yıkma gücünün piyasa değerine yansıması."],
  ["Konglomera","Farklı medya ve medya dışı işleri tek çatı altında toplayan büyük şirket grubu."]
 ]}
]},
{n:"8.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Bilişsel artık kavramı en iyi hangisiyle tanımlanır?",o:["Bir şirketin dağıtılmamış kârı","Boş zamanda kullanılabilecek zihinsel enerji","Çalışanların ücretsiz fazla mesai süresi","Bir yayının hedeflenen reyting fazlası"],a:1,e:"Bilişsel artık, boş zamanın yaratıcılık, bilgi paylaşımı ve işbirliğine dönüşme potansiyelidir."},
  {q:"Bir haber sitesi okur yorumlarını ve anketlerini derleyerek \"okuyucu içeriği\" bölümü açıyor. Bu, bilişsel artığın hangi yönüne örnektir?",o:["Kullanıcıların üretim kaynağı olması","Frekans kıtlığının ortadan kalkması","Kamu hizmeti yayıncılığının genişlemesi","Kültürel indirimin azaltılması"],a:0,e:"Site, kullanıcıların boş zamanında ürettiği içeriği ücret ödemeden kendi içeriği olarak kullanıyor."},
  {q:"Bir platformda 10 milyon günlük kullanıcı var, kişi başı günde 40 dakika kalıyor ve dakikada bir reklam görüyor. Kişiselleştirme süreyi %25 artırırsa günlük reklam gösterimi kaç olur?",o:["400 milyon","500 milyon","425 milyon","250 milyon"],a:1,e:"10 milyon × 40 dk × 1,25 = 500 milyon gösterim. Gelir de süreyle aynı oranda artar."},
  {q:"Platformlar filtre balonunu neden kendiliğinden azaltmak istemez?",o:["Yasal olarak yasak olduğu için","Kişiselleştirme süreyi ve reklam gelirini artırdığı için","Teknik olarak imkânsız olduğu için","Reklamverenler kişiselleştirmeden hoşlanmadığı için"],a:1,e:"Kişiselleştirme kullanıcıyı platformda tutar ve reklam etkinliğini artırır; maliyeti ise topluma yansır."},
  {q:"Filtre balonunun yol açtığı kutuplaşmanın maliyetinin platform yerine topluma kalması hangi iktisadi kavramla açıklanır?",o:["Ölçek ekonomisi","Olumsuz dışsallık","Fiyat ayrımcılığı","Ağ etkisi"],a:1,e:"Bir faaliyetin maliyetinin, karar vericinin dışındaki üçüncü kişilere yansıması olumsuz dışsallıktır."},
  {q:"Aşağıdakilerden hangisi kitapta filtre balonunun ekonomik fırsatlarından biri olarak sayılır?",o:["Niş içerik abonelikleri","Frekans tahsisi","Kamu ilanı gelirleri","Basılı tirajın artması"],a:0,e:"İlgi alanına odaklanan kullanıcılar, o alanda içerik sunan yayınlara abone olmaya daha yatkındır."},
  {q:"Medyanın \"dördüncü kuvvet\" olarak adlandırılmasının nedeni nedir?",o:["Dört büyük medya grubunun varlığı","İktidarı denetleme ve kamuoyunu bilgilendirme gücü","Anayasada dördüncü sırada sayılması","Reklam pazarının dörtte birini alması"],a:1,e:"Medya, yasama, yürütme ve yargının yanında onları denetleyen bir güç olarak görülür."},
  {q:"Bir medya şirketi, aynı holdinge bağlı gıda firmasının ürünleri hakkında sürekli olumlu haber yapıyor. Bu durum en çok hangi kavramla açıklanır?",o:["Bilişsel artık","Kültürel indirim","Çıkar çatışması","Sonsuz kaydırma"],a:2,e:"Medyanın denetim rolü ile holdingin ticari çıkarı çatışıyor; habercilik bağımsızlığı zarar görüyor."},
  {q:"Medyada tekelleşmenin temel ekonomik nedeni olarak kitapta ne gösterilir?",o:["Ölçek ve kapsam ekonomileri","Frekans bolluğu","Gazetelerin lisansa tabi olması","İzleyicilerin bağış yapması"],a:0,e:"Büyüdükçe birim maliyetin düşmesi ve farklı ürünlerin aynı altyapıyla üretilmesi, birleşmeleri kârlı kılar."}
 ]}
]}
],
refs:[
 "<i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications, 2025. s. 50–57.",
 "Shirky, C. (2010). <i>Cognitive Surplus: Creativity and Generosity in a Connected Age</i>. Penguin Press.",
 "Pariser, E. (2011). <i>The Filter Bubble: What the Internet Is Hiding from You</i>. Penguin Press.",
 "Radyo ve Televizyon Üst Kurulu: <a href=\"https://www.rtuk.gov.tr\">rtuk.gov.tr</a>"
],
next:"Sonraki: Hafta 09 — Küresel içerik, lisans, gazetecilik ve medya emeği"
};
