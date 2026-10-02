window.WEEK={
id:"en-12",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Geleceğin enerji sistemleri",week:12,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Enerji dönüşümü",
title:"Geleceğin enerji sistemi: <em>akıllı</em>, temiz, dayanıklı",
intro:"Bu hafta enerji dönüşümünün teknolojik ve politik yapı taşlarını öğreneceksiniz: akıllı şebeke ve elektrikli araçlar, hidrojenin renkleri, karbon yakalama (CCUS), yeni depolama teknolojileri, Avrupa Yeşil Mutabakatı ve net sıfır hedefi, enerji demokrasisi ve enerji güvenliği kavramının kritik hammaddelerle birlikte nasıl genişlediği. Okuma süresi yaklaşık 50 dakika; sayfada iki hesaplayıcı, iki sınıflandırma alıştırması, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Akıllı şebekeyi geleneksel şebekeden ayıran özellikleri ve bileşenlerini açıklayabilirsiniz.",
 "Elektrikli araçların şebekeye getirdiği yükü hesaplayıp akıllı şarj ve V2G'nin bu yükü nasıl fırsata çevirdiğini açıklayabilirsiniz.",
 "Hidrojeni üretim yöntemine göre gri, mavi ve yeşil olarak sınıflandırabilir, elektroliz emisyonunu elektriğin kaynağına bağlayabilirsiniz.",
 "Avrupa Yeşil Mutabakatı'nın araçlarını ve Türkiye'nin 2053 net sıfır hedefiyle ilişkisini açıklayabilirsiniz.",
 "Enerji güvenliğinin geleneksel ve güncel tanımını karşılaştırıp kritik hammadde riskini döngüsel ekonomiyle ilişkilendirebilirsiniz."
],
sections:[
{n:"12.1",h:"Akıllı şebeke ve elektrikli araçlar",blocks:[
 {t:"def",html:"Akıllı şebeke, elektrik üretimi, iletimi, dağıtımı ve tüketimini dijital teknolojiler, otomasyon ve çift yönlü iletişimle bütünleştiren gelişmiş enerji sistemidir.",src:"Yalnızca elektrik akışını değil, bilgi akışını da yöneten şebeke."},
 {t:"table",head:["Özellik","Geleneksel şebeke","Akıllı şebeke"],rows:[
  ["Akış ve iletişim","Tek yönlü (santral → tüketici), sınırlı","İki yönlü, sürekli"],
  ["Kontrol","Merkezî","Merkezî ve dağıtık, gerçek zamanlı"],
  ["Esneklik","Düşük","Yüksek: yenilenebilir ve depolama entegrasyonu"],
  ["Tüketicinin rolü","Pasif alıcı","Aktif; hem üretici hem tüketici (prosumer)"],
  ["Veri kullanımı","Sınırlı","Gerçek zamanlı, büyük veri analitiği"]]},
 {t:"p",html:"Bileşenleri şunlardır: tüketimi anlık ölçen <b>akıllı sayaçlar</b>, sayaçlardan merkeze sürekli veri taşıyan <b>ileri ölçüm altyapısı (AMI)</b>, arızaları otomatik bulup ayıran <b>iletim ve dağıtım otomasyonu</b>, çatı GES'i, batarya ve elektrikli araç gibi küçük kaynakları yöneten <b>dağıtık enerji kaynakları (DER) yönetimi</b> ve tüketimi esnekleştiren <b>talep tarafı yönetimi</b>."},
 {t:"p",html:"Elektrikli araçlar (EV) bu tablonun en iyi sınavıdır. Plansız yaygınlaşırlarsa yük, plansız gelirse sorun olurlar: herkes işten dönünce aynı anda şarj ederse akşam zirvesi büyür, mahalle trafoları ve dağıtım kabloları zorlanır, yeni trafo ve şarj altyapısı yatırımı gerekir. Akıllı yönetilirlerse fırsattırlar: <b>akıllı şarj</b> ile ucuz ve bol saatlerde şarj olurlar, <b>V2G</b> (araçtan şebekeye) ile zirvede bataryalarındaki enerjiyi şebekeye geri verirler, güneş ve rüzgâr fazlasını depolarlar."},
 {t:"widget",name:"calc",opts:{title:"Bir ilçede EV şarjının akşam zirvesine etkisi",inputs:[{id:"ev",label:"Elektrikli araç sayısı",min:500,max:50000,step:500,value:10000,unit:" araç"},{id:"kw",label:"Ev tipi şarj gücü",min:3,max:22,step:0.5,value:7.4,unit:" kW"},{id:"es",label:"Akşam aynı anda şarj eden pay",min:0,max:100,step:5,value:30,unit:" %"},{id:"akilli",label:"Akıllı şarjla geceye kaydırılan pay",min:0,max:100,step:5,value:0,unit:" %"}],formula:"(function(){var mw=ev*kw*(es/100)/1000,m2=mw*(1-akilli/100),h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'akşam zirvesine eklenen yük '+h(m2)+' MW'+(akilli>0?' (akıllı şarj olmadan '+h(mw)+' MW)':'');})()",result:"{r}",note:"Eşzamanlılık oranı en kritik varsayımdır: araçların hepsi aynı anda şarj olmaz. Varsayılan değerlerle 10.000 × 7,4 kW × 0,30 ≈ 22,2 MW ek yük çıkar; bu, orta büyüklükte bir santralin önemli bir kısmına denk gelir. Akıllı şarj sürgüsünü artırın: aynı enerji daha boş gece saatlerine kayar, zirve küçülür, yeni trafo yatırımı ertelenir."}}
]},
{n:"12.2",h:"Hidrojenin renkleri ve CCUS",blocks:[
 {t:"p",html:"Hidrojen kendisi bir enerji kaynağı değil, <b>enerji taşıyıcısıdır</b>: üretmek için enerji harcarsınız, sonra yakıt hücresinde ya da yakarak geri alırsınız. Kullanırken CO₂ salmaz; ama ne kadar temiz olduğu <b>nasıl üretildiğine</b> bağlıdır. Renkler bu farkı anlatır."},
 {t:"table",head:["Tür","Üretim yöntemi","Karbon ayak izi (kitaptaki şekil, kg CO₂ / kg H₂)","Durum"],rows:[
  ["Gri","Doğal gazdan buhar metan reformasyonu (SMR); CO₂ atmosfere salınır","≈ 10–12","En ucuz ve en yaygın; iklim hedefleriyle uyumsuz"],
  ["Mavi","SMR + karbon yakalama ve depolama (CCS)","≈ 3–5","Geçiş teknolojisi; CCS maliyeti ve depolama güvenliği sorun"],
  ["Yeşil","Yenilenebilir elektrikle suyun elektrolizi","≈ 0–1","Neredeyse sıfır emisyon; en pahalı, altyapı eksik"]]},
 {t:"widget",name:"classify",opts:{title:"Hidrojenin rengini bulun",cats:["Gri","Mavi","Yeşil"],items:[
  ["Rafinerideki SMR ünitesi, CO₂'yi bacadan atmosfere salıyor",0],
  ["Rüzgâr santraline doğrudan bağlı elektrolizör",2],
  ["SMR tesisi, çıkan CO₂'nin büyük kısmını yakalayıp tükenmiş bir gaz sahasına basıyor",1],
  ["Çatı GES'inden beslenen küçük ölçekli elektrolizör",2],
  ["Amonyak fabrikasının doğal gazdan, karbon yakalamasız ürettiği hidrojen",0],
  ["Doğal gaz reformasyonu ve CO₂'nin boru hattıyla jeolojik depoya taşınması",1],
  ["Hidroelektrik santralinin fazla elektriğiyle çalışan elektroliz tesisi",2],
  ["Kömür gazlaştırmasıyla, karbon yakalamadan üretilen hidrojen",0]
 ],note:"Belirleyici iki soru: hammadde fosil mi, su mu? Fosilse CO₂ yakalanıyor mu? Kömürden yakalamasız üretilen hidrojene literatürde kahverengi veya siyah da denir; burada iklim etkisi açısından gri ile birlikte gruplandı. Nükleer elektrikle elektrolize pembe, metan pirolizine turkuaz dendiği de olur; renkler resmî bir sınıflama değil, yaygın bir kısaltmadır."}},
 {t:"p",html:"Dikkat: elektroliz kendiliğinden yeşil değildir. Elektrolizör kömür ağırlıklı bir şebekeden beslenirse hidrojenin ayak izi gri hidrojeni bile geçebilir. Bir kilogram hidrojen için yaklaşık 50–55 kWh elektrik gerekir; hesaplayıcıda şebekenin emisyon yoğunluğunu değiştirin."},
 {t:"widget",name:"calc",opts:{title:"Elektroliz hidrojeni ne kadar temiz?",inputs:[{id:"kwh",label:"Elektrik tüketimi",min:45,max:65,step:1,value:53,unit:" kWh / kg H₂"},{id:"ef",label:"Elektriğin emisyon yoğunluğu",min:0,max:1000,step:10,value:400,unit:" g CO₂ / kWh"}],formula:"(function(){var k=kwh*ef/1000,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return h(k)+' kg CO₂ / kg H₂ → '+(k<=1?'yeşil hidrojen düzeyinde':(k<10?'gri hidrojenden (≈10–12) düşük ama yeşil değil':'gri hidrojen kadar ya da daha kirli'));})()",result:"{r}",note:"Hesap: ayak izi = kWh/kg × gCO₂/kWh ÷ 1000. Rüzgâr veya güneşten doğrudan beslenen elektrolizörde emisyon yoğunluğu sıfıra yakındır. Şebeke elektriğinin emisyon yoğunluğu ülkeye, yıla ve hatta saate göre değişir; burada sürgü değeri örnektir."}},
 {t:"p",html:"<b>CCUS</b> (karbon yakalama, kullanma ve depolama), bacadan çıkan CO₂'yi atmosfere ulaşmadan yakalar, boru hattı veya gemiyle taşır; ya kimya, gıda, yapı malzemesi sektörlerinde hammadde olarak kullanır ya da tükenmiş petrol ve gaz sahaları ile tuzlu akiferler gibi jeolojik formasyonlarda uzun süre depolar. Çimento, demir-çelik ve kimya gibi süreç emisyonu yüksek sektörlerde emisyonu sıfıra yaklaştırmanın gerçekçi yollarından biridir. Biyokütleyle birleştirildiğinde (<b>BECCS</b>) atmosferden net CO₂ çekilebilir. Engelleri yüksek yakalama maliyeti, sızıntı riski, toplumsal kabul ve yetersiz karbon fiyatıdır."}
]},
{n:"12.3",h:"Depolama: bataryanın ötesi",blocks:[
 {t:"p",html:"Güneş öğlen, rüzgâr estiğinde üretir; talep ise akşam zirve yapar. Aradaki boşluğu depolama kapatır. Bugün şebeke ölçeğinde en büyük kapasite <b>pompaj depolamalı hidroelektrikte</b>, yeni kurulumlarda ise <b>lityum-iyon bataryalardadır</b>. Kitap bunların yanında gelişmekte olan altı teknolojiyi tanıtır; farkları enerji yoğunluğu, tepki hızı, ölçek ve maliyettir."},
 {t:"table",head:["Teknoloji","Nasıl depolar?","Güçlü yanı","Zayıf yanı / kullanım"],rows:[
  ["Katı hal batarya","Sıvı yerine katı elektrolit","Yüksek enerji yoğunluğu, düşük yangın riski","Seri üretim henüz sınırlı; EV ve taşınabilir cihazlar"],
  ["Metal-hava batarya","Katot tepkimesinde havadaki oksijeni kullanır (lityum, çinko, alüminyum-hava)","Çok yüksek teorik enerji yoğunluğu","Şarj edilebilirlik ve kararlılık sorunları"],
  ["Termal depolama (TES)","Isı veya soğuk olarak; eriyik tuz, faz değişimli malzeme","Ucuz, büyük ölçekli","Yoğunlaştırılmış güneş (CSP), bölgesel ısıtma, sanayi"],
  ["Sıkıştırılmış hava (CAES)","Fazla elektrikle havayı yeraltı mağarasına basar, türbinle geri üretir","Büyük kapasite","Uygun jeoloji ve ısı yönetimi gerekir"],
  ["Süperkapasitör","Elektrostatik olarak","Çok hızlı şarj-deşarj, milyonlarca döngü","Düşük enerji yoğunluğu; frekans dengeleme, ani güç"],
  ["SMES","Süperiletken bobinde manyetik alan olarak","Anında tepki, çok yüksek verim","Yüksek maliyet ve soğutma ihtiyacı"]]},
 {t:"p",html:"Kitabın vardığı sonuç: geleceğin sistemi yalnızca \"batarya + hidrojen\" ikilisi olmayacak, saniyelik dengelemeden mevsimlik depolamaya kadar farklı ihtiyaçlara cevap veren bir <b>teknoloji karması</b> olacak."}
]},
{n:"12.4",h:"Avrupa Yeşil Mutabakatı ve net sıfır",blocks:[
 {t:"p",html:"<b>Avrupa Yeşil Mutabakatı</b>, AB'nin 2019'da açıkladığı ve 2050'ye kadar iklim-nötr bir kıta olmayı hedefleyen dönüşüm stratejisidir. Ara hedef, 2030'a kadar net sera gazı emisyonlarını 1990'a göre en az %55 azaltmaktır; bu hedefi uygulamaya koyan mevzuat paketinin adı <b>Fit for 55</b>'tir."},
 {t:"timeline",items:[
  ["2019","Yeşil Mutabakat açıklandı","AB 2050 iklim-nötrlük hedefini koydu."],
  ["2021","Türkiye: Paris Anlaşması ve 2053","Türkiye Eylül 2021'de 2053 net sıfır hedefini açıkladı, Ekim 2021'de Paris Anlaşması'nı onayladı.",1],
  ["2023","SKDM geçiş dönemi","AB'ye çimento, demir-çelik, alüminyum, gübre, elektrik ve hidrojen ithalatında gömülü emisyonların raporlanması başladı (Ekim 2023)."],
  ["2026","SKDM kesin dönem","Mali yükümlülük dönemi başladı: 2026'dan itibaren yapılan ithalatın gömülü emisyonu için SKDM sertifikası teslim edilmesi gerekir; teslim bir sonraki yıl yapılır.",1],
  ["2050 / 2053","Net sıfır hedefleri","AB için 2050, Türkiye için 2053."]]},
 {t:"p",html:"Mutabakatın dört temel aracı: <b>Sınırda Karbon Düzenleme Mekanizması</b> (SKDM / CBAM), yenilenebilir enerji hedefleri, binalarda \"renovasyon dalgası\" ile verimlilik ve yeşil yatırımı tanımlayan <b>AB Taksonomisi</b>. Türkiye için etkisi üç kanaldan gelir: AB en büyük ihracat pazarı olduğu için ihracatçının karbon ayak izi rekabet meselesine dönüşür; yenilenebilir potansiyel AB tedarik zincirleri için stratejik değer kazanır; AB uyumlu politikalar yeşil finansmana erişimi kolaylaştırır. SKDM'nin maliyetini Hafta 13'te hesaplayacağız."},
 {t:"def",html:"Net sıfır emisyon, atmosfere salınan sera gazı miktarının atmosferden uzaklaştırılan miktarla dengelenmesidir.",src:"Hiç emisyon olmaması değil; kalan emisyonun ormanlar, BECCS veya doğrudan hava yakalama gibi yutaklarla dengelenmesi."},
 {t:"choice",items:[
  {label:"Teknolojik",title:"Neyle?",body:"Yenilenebilir enerji, depolama, elektrifikasyon (EV, elektrikli sanayi prosesleri), yeşil hidrojen, CCUS, akıllı şebekeler ve enerji verimliliği.",ex:"Kitaba göre ağır sanayide (çelik, çimento, kimya) yeşil hidrojen ve CCUS öne çıkar."},
  {label:"Politik",title:"Hangi kurallarla?",body:"Karbon fiyatlaması (vergi veya ETS), fosil yakıt teşviklerinin azaltılması, bağlayıcı iklim yasaları, adil geçiş politikaları ve uluslararası işbirliği.",ex:"Türkiye'de 2025'te yürürlüğe giren İklim Kanunu, 2053 hedefini yasal çerçeveye bağladı ve ulusal emisyon ticaret sisteminin dayanağını oluşturdu."},
  {label:"Finansal",title:"Hangi parayla?",body:"Yeşil tahviller, sürdürülebilir fonlar, karbon kredileri, kamu-özel ortaklıkları, Yeşil İklim Fonu gibi iklim fonları, ESG kriterleriyle yönlendirilen özel sermaye ve iklim risklerine karşı sigorta.",ex:"Engeller: yüksek maliyet, süren fosil bağımlılığı, adil geçişte sosyal kırılganlık, yetersiz uluslararası işbirliği."}
 ]}
]},
{n:"12.5",h:"Enerji demokrasisi ve Türkiye için yol haritası",blocks:[
 {t:"p",html:"<b>Enerji demokrasisi</b>, enerjiyle ilgili kararların yalnızca devlet kurumlarının ve büyük şirketlerin elinde olmaması gerektiğini savunur. Enerjiyi sadece bir meta değil, bir vatandaşlık hakkı olarak görür; bireyleri, yerel toplulukları, kooperatifleri ve sivil toplumu sisteme aktif katılımcı yapar."},
 {t:"list",items:[
  "<b>Katılımcılık:</b> yurttaşların politika ve projelere doğrudan dahil olması.",
  "<b>Adalet:</b> gelir, bölge ve sınıf temelli erişim eşitsizliklerinin azaltılması.",
  "<b>Yerelleşme:</b> dev santraller yerine topluluk temelli, dağıtık üretim; üretimin tüketime yaklaşması.",
  "<b>Şeffaflık:</b> şirket ve düzenleyici kararlarının açık ve denetlenebilir olması.",
  "<b>Sürdürülebilirlik:</b> yenilenebilir ve düşük karbonlu teknolojilerin önceliklendirilmesi."
 ]},
 {t:"table",head:["Kitabın önerdiği adım","İçerik"],rows:[
  ["1. Yerel üretim modelleri","Enerji kooperatifleri; kırsalda çatı GES, küçük biyogaz, mikro HES; yeşil kredi ve devlet desteği"],
  ["2. Dijital altyapı","Akıllı sayaç, şebeke yönetim sistemleri, blokzincir tabanlı enerji ticareti"],
  ["3. Adil geçiş","Fosil yakıta bağımlı bölgelerde çalışanların korunması, yeniden eğitim, yeni iş alanları"],
  ["4. Mevzuat uyumu","2053 net sıfır hedefiyle uyumlu düzenlemeler; yerel yönetimlerin karar süreçlerine katılımı"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de kendi tüketimini karşılamak amacıyla kurulan çatı ve cephe GES'leri, <b>lisanssız elektrik üretimi</b> düzenlemesi kapsamında şebekeye bağlanabilir ve ihtiyaç fazlası enerji şebekeye verilebilir. Bu, \"prosumer\" modelinin yasal karşılığıdır. Kömür madenciliğine dayalı bölgeler ise adil geçiş tartışmasının en somut örnekleridir."}
]},
{n:"12.6",h:"Enerji güvenliğinin evrimi ve kritik hammaddeler",blocks:[
 {t:"choice",items:[
  {label:"20. yüzyıl",title:"Fosil yakıt arz güvenliği",body:"Enerji güvenliği, petrol, doğal gaz ve kömürün kesintisiz ve uygun maliyetle temin edilmesiydi. Odak noktaları: tedarikçi ülkelerden sürekli akış, boğazların, boru hatlarının ve deniz yollarının güvenliği, stratejik petrol ve gaz stokları.",ex:"Anahtar kavramlar: kaynağa erişim ve enerji bağımlılığı. Hafta 02'deki 4A çerçevesinden ulaşılabilirlik (mevcudiyet) ve erişilebilirlik boyutları bu anlayışın merkezindeydi."},
  {label:"21. yüzyıl",title:"Çok boyutlu güvenlik",body:"Kaynak çeşitliliği (yenilenebilir, nükleer, hidrojen, depolama), şebeke esnekliği, iklim uyumu, siber güvenlik, fiyat istikrarı ve enerji yoksulluğu artık güvenliğin parçasıdır.",ex:"2022 enerji krizi, fiyat şoklarının ekonomik istikrarı ve hane refahını doğrudan tehdit ettiğini gösterdi. Bir şebekeye yönelik siber saldırı, bir boru hattının kesilmesi kadar ciddi bir tehdit sayılır."}
 ]},
 {t:"p",html:"Dönüşüm yeni bir bağımlılık da yaratır. Bataryalar, rüzgâr türbinleri, güneş panelleri ve elektrik motorları <b>kritik hammaddelere</b> (lityum, kobalt, nikel, nadir toprak elementleri) dayanır ve bunların üretimi birkaç ülkede yoğunlaşmıştır. Kitaba göre kobalt üretiminin yaklaşık %70'i Kongo Demokratik Cumhuriyeti'nde, nadir toprak elementlerinin %60'tan fazlası Çin'dedir; Çin'in payı rafinaj ve işlemede daha da yüksektir. Petrolde OPEC'e bağımlılığın yerini mineral bağımlılığı alabilir."},
 {t:"widget",name:"classify",opts:{title:"Hangi döngüsel ekonomi ilkesi?",cats:["Geri dönüşüm","Yeniden kullanım / ikinci ömür","Ekotasarım ve kaynak verimliliği"],items:[
  ["Elektronik hurdadan kobalt ve nikel geri kazanmak (kentsel madencilik)",0],
  ["Kapasitesi %80'e düşen EV bataryasını sabit enerji depolamada kullanmak",1],
  ["Batarya hücrelerini kolay sökülecek biçimde tasarlamak",2],
  ["Kobalt içermeyen LFP batarya kimyasına geçmek",2],
  ["Ömrünü doldurmuş rüzgâr türbini kanatlarından malzeme geri kazanmak",0],
  ["Eski güneş panellerini düşük gereksinimli bir projede yeniden kurmak",1]
 ],note:"Kitap beş ilke sayar: geri dönüşüm, yeniden kullanım ve ikinci ömür, ekotasarım, kaynak verimliliği ve paylaşımlı modeller (batarya kiralama, araç paylaşımı). Hepsinin ortak sonucu yeni maden talebini azaltmak ve tek tedarikçiye bağımlılığı düşürmektir."}}
]},
{n:"12.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Prosumer","Hem elektrik tüketen hem de (ör. çatı GES'iyle) üreten aktif şebeke kullanıcısı."],
  ["V2G","Elektrikli aracın bataryasındaki enerjiyi zirve saatlerde şebekeye geri vermesi."],
  ["Gri hidrojen","Doğal gazdan karbon yakalamadan üretilen hidrojen; en yaygın ve en kirli tür."],
  ["Mavi hidrojen","Doğal gazdan üretilip çıkan CO₂'nin yakalanıp depolandığı hidrojen."],
  ["Yeşil hidrojen","Yenilenebilir elektrikle suyun elektrolizinden elde edilen hidrojen."],
  ["BECCS","Biyokütle enerjisinin karbon yakalamayla birleştirilip net negatif emisyon sağlaması."],
  ["SKDM (CBAM)","AB'ye ithal edilen karbon yoğun ürünlerin gömülü emisyonuna fiyat uygulayan mekanizma."],
  ["Net sıfır","Kalan emisyonların atmosferden uzaklaştırılan miktarla dengelenmesi."],
  ["Enerji demokrasisi","Enerji kararlarına yurttaş ve toplulukların katılımını, adalet ve yerelleşmeyi savunan yaklaşım."],
  ["Kritik hammaddeler","Enerji dönüşümü için vazgeçilmez, üretimi az sayıda ülkede yoğunlaşmış mineraller."]
 ]}
]},
{n:"12.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Akıllı şebekeyi geleneksel şebekeden ayıran temel özellik hangisidir?",o:["Daha yüksek gerilimde çalışması","İki yönlü enerji ve bilgi akışı ile aktif tüketici","Yalnızca yenilenebilir enerji taşıması","Merkezî kontrolün tamamen kaldırılması"],a:1,e:"Akıllı şebeke bilgi akışını da yönetir; tüketici üretici de olabilir. Merkezî kontrol kalkmaz, dağıtık kontrolle birlikte çalışır."},
  {q:"5.000 elektrikli aracın %40'ı akşam aynı anda 7 kW ile şarj olursa zirveye eklenen yük kaç MW olur?",o:["2,8 MW","14 MW","35 MW","140 MW"],a:1,e:"5.000 × 7 kW × 0,40 = 14.000 kW = 14 MW. Akıllı şarj bu yükün bir kısmını gece saatlerine kaydırabilir."},
  {q:"Doğal gazdan SMR ile üretilen ve çıkan CO₂'si yakalanıp jeolojik formasyonda depolanan hidrojen hangi renktedir?",o:["Gri","Mavi","Yeşil","Pembe"],a:1,e:"Hammadde fosil, ama CO₂ yakalanıyor: mavi hidrojen. Yakalama olmasa gri olurdu."},
  {q:"1 kg hidrojen için 50 kWh elektrik harcayan bir elektrolizör, 500 g CO₂/kWh yoğunluklu şebekeden besleniyor. Ayak izi yaklaşık kaçtır?",o:["0,5 kg CO₂/kg H₂","5 kg CO₂/kg H₂","25 kg CO₂/kg H₂","50 kg CO₂/kg H₂"],a:2,e:"50 × 500 ÷ 1000 = 25 kg CO₂/kg H₂; gri hidrojenden (≈10–12) bile kirli. Elektroliz ancak temiz elektrikle yeşildir."},
  {q:"BECCS'in iklim politikası açısından özel önemi nedir?",o:["En ucuz enerji kaynağı olması","Net negatif emisyon sağlayabilmesi","Hidrojen üretiminin tek yolu olması","Hiç arazi gerektirmemesi"],a:1,e:"Biyokütle büyürken CO₂ çeker; yakılınca çıkan CO₂ yakalanıp depolanırsa atmosferden net CO₂ uzaklaştırılmış olur."},
  {q:"Çok hızlı şarj-deşarj ve milyonlarca döngü ömrü sunan ama enerji yoğunluğu düşük depolama teknolojisi hangisidir?",o:["Sıkıştırılmış hava (CAES)","Termal depolama","Süperkapasitör","Metal-hava batarya"],a:2,e:"Süperkapasitörler enerjiyi elektrostatik depolar; ani güç ve frekans dengeleme için uygundur, uzun süreli depolama için değil."},
  {q:"Avrupa Yeşil Mutabakatı'nın 2030 ara hedefi nedir?",o:["Emisyonları 2005'e göre %20 azaltmak","Net emisyonları 1990'a göre en az %55 azaltmak","Kömürü tamamen yasaklamak","Yenilenebilir payını %100'e çıkarmak"],a:1,e:"Fit for 55 paketi adını bu hedeften alır: 1990'a göre en az %55 net azaltım."},
  {q:"Türkiye'nin net sıfır emisyon hedef yılı hangisidir?",o:["2040","2050","2053","2060"],a:2,e:"Türkiye hedefini Eylül 2021'de 2053 olarak açıkladı. AB'nin hedefi 2050'dir."},
  {q:"Enerji güvenliğinin 21. yüzyıldaki tanımına eklenen yeni boyutlardan biri hangisidir?",o:["Boğazların güvenliği","Stratejik petrol stokları","Şebekelere yönelik siber güvenlik","Tedarikçi ülkeden sürekli akış"],a:2,e:"Diğer üç seçenek geleneksel arz güvenliği anlayışına aittir. Dijitalleşmeyle birlikte siber saldırılar yeni bir tehdit hâline geldi."},
  {q:"Kapasitesi düşen EV bataryasının sabit enerji depolamada kullanılması hangi döngüsel ekonomi ilkesine örnektir?",o:["Malzemenin geri dönüştürülmesi","Yeniden kullanım / ikinci ömür","Ekotasarım (sökülebilir tasarım)","Kentsel madencilik (urban mining)"],a:1,e:"Batarya parçalanmadan başka bir işlevde kullanılır; bu, yeni mineral talebini erteler."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. s. 117–144.",
 "International Energy Agency (2021). <i>Net Zero by 2050: A Roadmap for the Global Energy Sector</i>. Paris: IEA.",
 "International Energy Agency — Global Hydrogen Review ve Critical Minerals raporları: <a href=\"https://www.iea.org\">iea.org</a>",
 "Avrupa Komisyonu — Avrupa Yeşil Mutabakatı ve SKDM: <a href=\"https://commission.europa.eu\">commission.europa.eu</a>"
],
next:"Sonraki: Hafta 13 — Karbon piyasaları ve karbon fiyatlaması"
};
