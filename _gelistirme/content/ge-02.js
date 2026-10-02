window.WEEK={
id:"ge-02",code:"GE",course:"Genel Ekonomi",short:"Kıtlık ve iki mercek",week:2,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Temel kavramlar",
title:"Kıtlık, fırsat maliyeti ve <em>iki mercek</em>",
intro:"Bu hafta iktisadın çıkış noktası olan kıtlığı, her seçimin bedeli olan fırsat maliyetini ve bunları tek bir grafikte toplayan üretim olanakları eğrisini öğreneceksiniz. Ardından iktisatçıların olaylara baktığı iki ayrımı ele alacağız: “ne olduğu” ile “ne olması gerektiği” (pozitif–normatif) ve parça ile bütün (mikro–makro). Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, iki sınıflandırma alıştırması ve 9 soruluk bir test var.",
goals:[
 "Kıtlık ile seçim arasındaki bağı ve dört temel iktisadi soruyu açıklayabilirsiniz.",
 "Bir kararın fırsat maliyetini parasal ve parasal olmayan unsurlarıyla belirleyebilirsiniz.",
 "Üretim olanakları eğrisi üzerinde etkin, israflı ve ulaşılamaz noktaları ayırt edebilirsiniz.",
 "Bir ifadenin pozitif mi normatif mi olduğunu gerekçesiyle sınıflandırabilirsiniz.",
 "Bir konunun mikroiktisadın mı makroiktisadın mı alanına girdiğini ve ikisinin nasıl bağlandığını açıklayabilirsiniz."
],
sections:[
{n:"2.1",h:"Kıtlık: her şeyin başladığı yer",blocks:[
 {t:"p",html:"Zamanımız, paramız, enerjimiz ve doğal kaynaklarımız sınırlıdır; bu kaynaklarla karşılamak istediğimiz ihtiyaçlar ise neredeyse sınırsızdır. Bu çelişkiye <b>kıtlık</b> denir. Kıtlık bizi seçim yapmaya zorlar, her seçim de bir bedel doğurur."},
 {t:"def",html:"Kıtlık, mevcut kaynakların insanların bütün ihtiyaç ve isteklerini karşılayamayacak kadar sınırlı olmasıdır.",src:"Kitaptaki zincir: kıtlık → sınırlı kaynak → sınırlı çıktı → her isteği karşılayamamak → seçim → fırsat maliyeti."},
 {t:"p",html:"Günün 24 saati bunun en yakın örneğidir. Ders, iş, uyku ve arkadaşlar arasında saatlerinizi bölüştürürken sürekli küçük bir “tahsis problemi” çözersiniz. Bir şirket bütçesini, bir belediye imar alanını, bir ülke vergi gelirini bölüştürürken aynı problemle karşılaşır."},
 {t:"p",html:"Kıtlık her toplumu dört soruya yanıt vermeye zorlar. Bir soru seçerek ne anlama geldiğine bakın."},
 {t:"choice",items:[
  {label:"Ne?",title:"Ne üretilecek?",body:"Sınırlı kaynaklarla hangi mal ve hizmetlerin üretileceğine karar verilir. Karar toplumun ihtiyaç ve önceliklerine göre değişir.",ex:"Örnek: Bir ülke kaynaklarını daha çok hastaneye mi, daha çok otoyola mı ayıracak?"},
  {label:"Nasıl?",title:"Nasıl üretilecek?",body:"Hangi üretim yöntemlerinin kullanılacağı sorusudur. Amaç kaynakları en verimli biçimde kullanmaktır.",ex:"Örnek: Pamuk hasadı makineyle mi, mevsimlik işçiyle mi yapılacak?"},
  {label:"Ne kadar?",title:"Ne kadar üretilecek?",body:"Kıt kaynakları heba etmeden her mal ve hizmetten yeterince üretmek gerekir.",ex:"Örnek: Tarlaya ihtiyaçtan fazla domates ekilirse ürün tarlada çürür, kaynak boşa gider."},
  {label:"Kim için?",title:"Kim için üretilecek?",body:"Üretilen mal ve hizmetlerin kimlere ulaşacağı sorusudur; gelir dağılımı ve adalet tartışmasını içerir.",ex:"Örnek: Bir aşı önce kime yapılmalı: yaşlılara mı, sağlık çalışanlarına mı, en yüksek ödeyene mi?"}
 ]},
 {t:"p",html:"Ekonomiler bu sorulara farklı sistemlerle yanıt verir: piyasa ekonomisinde fiyatlar, planlı ekonomide devlet, karma ekonomide ikisinin birleşimi karar verir. Hafta 03'te bu sistemleri ayrıntılı göreceğiz."},
 {t:"table",head:["","Kıt mal","Serbest mal"],rows:[
  ["Tanım","Sınırlı miktarda bulunur, talebi karşılamaya yetmez","Arzı ihtiyacı karşılamaya yeter ya da aşar"],
  ["Fiyat","Genellikle vardır; arz ve talep belirler","Genellikle yoktur ya da çok düşüktür"],
  ["Örnekler","Petrol, altın, kent merkezinde arsa","Hava, güneş ışığı, deniz suyu"]]},
 {t:"p",html:"Bu ayrım kalıcı değildir. Temiz hava eskiden serbest mal sayılırdı; kirlilik arttıkça kıt bir kaynağa dönüştü. İçme suyu da kuraklık yaşayan bölgelerde kıt mal hâline gelir."}
]},
{n:"2.2",h:"Fırsat maliyeti",blocks:[
 {t:"def",html:"Fırsat maliyeti, bir seçenek lehine karar verildiğinde vazgeçilen <b>en değerli</b> alternatifin değeridir.",src:"Parasal olmak zorunda değildir: zaman, emek, mutluluk gibi ölçülmesi zor değerler de dahildir."},
 {t:"p",html:"<b>Parasal maliyet</b> bir mal veya hizmet için doğrudan ödenen tutardır: hammadde, işçilik, kira. Fırsat maliyeti ise ödenen paraya ek olarak, o kaynağı başka bir yerde kullansaydınız elde edeceğiniz değeri de hesaba katar. İyi bir karar ikisine birlikte bakar."},
 {t:"box",lbl:"Kitaptan örnek: yaz tatili",html:"Bir öğrencinin üç seçeneği var: (A) ailesinin yanında çalışıp 5.000 TL biriktirmek, (B) ücretsiz staj yapıp sektör deneyimi kazanmak, (C) seyahat edip yeni kültürler tanımak. Öğrenci stajı seçerse fırsat maliyeti, kalan iki seçenekten <i>kendisi için</i> daha değerli olanıdır. Seyahat ona 5.000 TL'den daha değerliyse, stajın fırsat maliyeti para değil, seyahatin vereceği deneyim ve mutluluktur."},
 {t:"p",html:"Kitap bu düşünceyi basit bir puan tablosuyla yapılandırır: her seçeneğin faydasından, vazgeçilen en iyi alternatifin faydasını çıkarın. Akşamın iki saati için ders çalışma 8, sosyalleşme 7, film izleme 6 puan değerindeyse, ders çalışmanın net kazancı 8 − 7 = 1, film izlemeninki 6 − 8 = −2 olur. Sayılar tahminidir, ama düşünce sürecini düzene sokar."},
 {t:"widget",name:"calc",opts:{title:"Seçiminizin net kazancı",inputs:[{id:"a",label:"Seçtiğiniz seçeneğin faydası",min:0,max:10,step:1,value:8,unit:" puan"},{id:"b",label:"Vazgeçilen en iyi alternatifin faydası",min:0,max:10,step:1,value:7,unit:" puan"}],formula:"(a-b)+' puan'+(a>b?' — vazgeçtiğinizden daha değerli bir seçim':(a==b?' — iki seçenek eşdeğer':' — vazgeçtiğiniz seçenek daha değerliydi'))",result:"Net kazanç (fayda − fırsat maliyeti): {r}",note:"Kendi kararlarınızdan birini deneyin: bu akşam ne yapacaksınız, vazgeçtiğiniz en iyi seçenek hangisi?"}}
]},
{n:"2.3",h:"Üretim olanakları eğrisi",blocks:[
 {t:"p",html:"<b>Üretim olanakları eğrisi</b> (dönüşüm eğrisi), belirli bir dönemde mevcut kaynaklar ve teknoloji verildiğinde bir ekonominin üretebileceği iki mal arasındaki bütün bileşimleri gösterir. Kıtlığı, seçimi ve fırsat maliyetini tek bir şekilde toplar."},
 {t:"list",items:[
  "<b>Negatif eğim:</b> Kaynaklar sınırlı olduğu için bir maldan daha fazla üretmek, ötekinden vazgeçmeyi gerektirir.",
  "<b>Artan fırsat maliyeti:</b> Eğri genellikle orijine göre içbükeydir. Kaynaklar her iki mala eşit derecede uygun olmadığından, bir malın üretimi arttıkça her ek birimin bedeli büyür.",
  "<b>Eğrinin üzeri:</b> Kaynakların tam ve etkin kullanıldığı noktalar.",
  "<b>Eğrinin içi:</b> Atıl kaynak, işsizlik ya da israf; ekonomi potansiyelinin altında üretiyor.",
  "<b>Eğrinin dışı:</b> Mevcut kaynak ve teknolojiyle ulaşılamaz.",
  "<b>Dışa kayma:</b> Teknolojik gelişme veya kaynak artışı eğriyi dışa kaydırır; bu, ekonomik büyümenin göstergesidir."
 ]},
 {t:"p",html:"Aşağıdaki örnek ekonomi buğday ve traktör üretiyor. Tablodaki noktalar eğrinin üzerindedir. Her 10 traktörün bedeli giderek artıyor: önce 10, sonra 20, 30 ve 40 ton buğday."},
 {t:"table",head:["Nokta","Traktör (adet)","Buğday (ton)","Son 10 traktörün fırsat maliyeti"],rows:[
  ["A","0","100","—"],["B","10","90","10 ton buğday"],["C","20","70","20 ton buğday"],["D","30","40","30 ton buğday"],["E","40","0","40 ton buğday"]]},
 {t:"widget",name:"calc",opts:{title:"Üretim planınız eğrinin neresinde?",inputs:[{id:"x",label:"Traktör",min:0,max:40,step:10,value:20,unit:" adet"},{id:"y",label:"Buğday",min:0,max:110,step:5,value:60,unit:" ton"}],formula:"y>[100,90,70,40,0][x/10]?'ulaşılamaz (eğrinin dışında)':(y==[100,90,70,40,0][x/10]?'etkin (eğrinin üzerinde)':'mümkün ama kaynak boşa gidiyor (eğrinin içinde)')",result:"Bu plan: {r}",note:"Örnek: 20 traktörle en fazla 70 ton buğday üretilebilir. 60 ton seçerseniz 10 ton buğdaylık kapasite atıl kalır."}}
]},
{n:"2.4",h:"Pozitif ve normatif analiz",blocks:[
 {t:"p",html:"İktisatçılar bir olayı iki farklı soruyla ele alır. Birincisi <b>ne oluyor, neden oluyor?</b> sorusudur. İkincisi <b>ne olmalı?</b> sorusudur. Bu iki soruyu karıştırmak, tartışmaların en sık tıkandığı noktadır."},
 {t:"def",html:"<b>Pozitif analiz</b> ekonominin nasıl işlediğini nesnel olarak betimler; gözlemlenebilir ve test edilebilir verilere dayanır. <b>Normatif analiz</b> ne olması gerektiğine dair değer yargıları ve öneriler içerir.",src:"Kitaptaki benzetme: pozitif iktisat bir ayna, normatif iktisat bir pusuladır."},
 {t:"table",head:["Ölçüt","Pozitif analiz","Normatif analiz"],rows:[
  ["Soru","Ne oldu, ne oluyor, ne olacak?","Ne olmalı, nasıl olmalı?"],
  ["Dayanak","Veri, gözlem, test edilebilir hipotez","Etik, adalet anlayışı, toplumsal öncelikler"],
  ["Örnek","Sigara vergisi artınca sigara tüketimi ne kadar azalır?","Devlet sigarayı daha ağır vergilendirmeli midir?"],
  ["Sınanabilirlik","Veriyle doğrulanabilir ya da yanlışlanabilir","Veriyle doğrulanamaz; tartışılır"]]},
 {t:"p",html:"İki analiz birbirini tamamlar. Bir politika önerisi (normatif) ancak o politikanın sonuçları doğru bilindiğinde (pozitif) sağlam olur. Bir cümlenin içinde “-meli, -malı”, “adil”, “kabul edilemez” gibi ifadeler varsa normatif olma ihtimali yüksektir. Ancak dikkat: pozitif bir ifade yanlış da olabilir; pozitif olması doğru olduğu anlamına gelmez, sadece veriyle sınanabileceğini gösterir."},
 {t:"widget",name:"classify",opts:{title:"Pozitif mi, normatif mi?",cats:["Pozitif","Normatif"],items:[
  ["Asgari ücret artışı genç işsizliğini yükseltir.",0],
  ["Asgari ücret, bir ailenin geçimini sağlayacak düzeyde olmalıdır.",1],
  ["Türkiye'de yıllık enflasyon TÜİK verisine göre hesaplanır.",0],
  ["Zenginlerden daha yüksek oranda vergi alınması adildir.",1],
  ["Faiz oranları yükselince konut kredisi talebi azalır.",0],
  ["Devlet üniversite harçlarını tamamen kaldırmalıdır.",1],
  ["Sigara fiyatı %10 artarsa tüketim %4 azalır.",0],
  ["Kamu harcamalarında öncelik eğitime verilmelidir.",1]
 ],note:"İlk cümle tartışmalı olabilir ama yine de pozitiftir: veriyle sınanabilir. Normatif cümleler bir değer yargısı (“olmalı”, “adil”) taşır."}}
]},
{n:"2.5",h:"Mikroiktisat ve makroiktisat",blocks:[
 {t:"p",html:"<b>Mikroiktisat</b> (“küçük ekonomi”) ekonominin en küçük birimlerine odaklanır: bireyler, hanehalkları, firmalar ve tek tek piyasalar. Bu birimlerin kıt kaynaklarla nasıl karar verdiğini ve fiyatların nasıl oluştuğunu inceler. <b>Makroiktisat</b> (“büyük ekonomi”) ise ekonomiye bütün olarak bakar: toplam üretim, enflasyon, işsizlik, faiz ve dış ticaret."},
 {t:"choice",items:[
  {label:"Mikro bakış",title:"Bir kahve dükkânı",body:"Mikroiktisat dükkânın kahve çekirdeğini hangi fiyattan alacağını, çalışanlara ne kadar ücret ödeyeceğini, kahve fiyatını nasıl belirleyeceğini ve rakip dükkânların fiyatlarına nasıl tepki vereceğini inceler. Bir tüketicinin günlük kahve kararını da bu çerçevede ele alır.",ex:"Araçlar: arz-talep, maliyet, fayda, piyasa yapıları."},
  {label:"Makro bakış",title:"Türkiye'nin büyüme oranı",body:"Makroiktisat ekonominin ne kadar büyüdüğünü, büyümeyi hangi kalemlerin (tüketim, yatırım, ihracat) sürüklediğini, hükümetin hangi maliye ve para politikalarını kullanabileceğini inceler. Enflasyonun alım gücüne ve işsizliğin genel refaha etkisini de değerlendirir.",ex:"Araçlar: GSYH, toplam talep-toplam arz, para ve maliye politikası."},
  {label:"İkisi birlikte",title:"İşsizliği anlamak",body:"Yüksek işsizlik makro bir sorundur. Ama nedenini anlamak için firmaların işe alma kararlarına (işgücü talebi) ve bireylerin iş arama davranışına (işgücü arzı) yani mikro düzeye inmek gerekir.",ex:"Ekonomi, milyonlarca mikro kararın bir araya gelmesiyle oluşan bir bütündür."}
 ]},
 {t:"widget",name:"classify",opts:{title:"Mikro mu, makro mu?",cats:["Mikro","Makro"],items:[
  ["Bir fırının ekmek fiyatını belirlemesi",0],
  ["Türkiye'nin yıllık enflasyon oranı",1],
  ["Bir öğrencinin bütçesini kira ve yemek arasında bölüştürmesi",0],
  ["Merkez Bankası'nın politika faizini değiştirmesi",1],
  ["Otomobil piyasasında rekabetin fiyatlara etkisi",0],
  ["Ülke genelinde işsizlik oranının artması",1],
  ["Bir çiftçinin buğday yerine ayçiçeği ekmeye karar vermesi",0],
  ["Ülkenin cari açık vermesi",1]
 ],note:"Ölçüt tek bir birim mi (hane, firma, tek piyasa), yoksa bütün ekonomi mi sorusudur."}}
]},
{n:"2.6",h:"İki mercek birbirine nasıl bağlanır?",blocks:[
 {t:"p",html:"Mikro ve makro ayrımı analitik bir kolaylıktır; gerçekte iki düzey sürekli birbirini etkiler. Toplam tüketimi (makro) anlamak, bireylerin tüketim kararlarını (mikro) incelemeyi gerektirir. Ters yönde de etki vardır: yüksek enflasyon (makro) firmaların fiyatlandırma stratejisini (mikro) değiştirir, faiz oranları hanehalklarının tasarruf kararını etkiler."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Konut kredisi faizleri yükseldiğinde (makro bir gelişme), tek tek ailelerin ev alma kararları ertelenir, inşaat firmaları yeni proje başlatmayı yavaşlatır (mikro kararlar). Bu kararların toplamı da inşaat sektörünün büyümesini ve istihdamı (yeniden makro) etkiler."},
 {t:"p",html:"Pozitif–normatif ayrımı da her iki düzeyde geçerlidir. “Faiz artışı konut satışlarını azaltır” pozitif bir makro ifadedir; “Devlet ilk evini alan gençlere faiz desteği vermelidir” normatif bir öneridir."}
]},
{n:"2.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Kıtlık","Kaynakların bütün ihtiyaç ve istekleri karşılayamayacak kadar sınırlı olması."],
  ["Fırsat maliyeti","Bir seçim yapıldığında vazgeçilen en değerli alternatifin değeri."],
  ["Serbest mal","Arzı ihtiyacı karşılamaya yeten, genellikle fiyatı olmayan mal (hava, güneş ışığı)."],
  ["Üretim olanakları eğrisi","Mevcut kaynak ve teknolojiyle üretilebilecek iki mal bileşimlerinin sınırı."],
  ["Artan fırsat maliyeti","Bir malın üretimi arttıkça her ek birim için vazgeçilen öteki mal miktarının büyümesi."],
  ["Pozitif analiz","Ne olduğunu betimleyen, veriyle sınanabilen analiz."],
  ["Normatif analiz","Ne olması gerektiğine dair değer yargısı içeren analiz."],
  ["Mikroiktisat","Hanehalkı, firma ve tek tek piyasaların davranışını inceleyen dal."],
  ["Makroiktisat","Ekonomiyi bütün olarak; üretim, enflasyon, işsizlik düzeyinde inceleyen dal."]
 ]}
]},
{n:"2.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Kitaptaki zincire göre kıtlık neden fırsat maliyeti doğurur?",o:["Çünkü fiyatlar her zaman yükselir","Çünkü sınırlı çıktı seçim yapmayı zorunlu kılar","Çünkü devlet kaynakları dağıtır","Çünkü serbest malların fiyatı yoktur"],a:1,e:"Kıt kaynak sınırlı çıktı demektir; her isteği karşılayamayınca seçim yaparız, her seçim de vazgeçilen bir alternatif bırakır."},
  {q:"Ayşe akşamı film izleyerek geçirdi. Alternatifleri ders çalışmak (8 puan) ve arkadaşlarıyla buluşmaktı (7 puan). Film izlemenin fırsat maliyeti nedir?",o:["Ders çalışmanın 8 puanlık faydası","Arkadaşlarla buluşmanın 7 puanı","İki alternatifin toplamı, 15 puan","Sinema bileti ödemediği için sıfır"],a:0,e:"Fırsat maliyeti vazgeçilen alternatiflerin toplamı değil, en değerli olanıdır: 8 puan."},
  {q:"Örnek ekonomide 20 traktör ve 70 ton buğday etkin bir noktadır. 20 traktör ve 50 ton buğday üretiliyorsa ne söylenebilir?",o:["Nokta eğrinin dışında, ulaşılamaz","Kaynakların bir kısmı atıl kalıyor","Ekonominin kapasitesi büyümüştür","Buğdayın fırsat maliyeti sıfırdır"],a:1,e:"Aynı traktör sayısıyla daha fazla buğday üretilebiliyorken daha azı üretiliyor; nokta eğrinin içindedir ve kaynak israfı vardır."},
  {q:"Üretim olanakları eğrisinin orijine göre içbükey olmasının nedeni nedir?",o:["Talebin fiyatla ters yönlü olması","Kaynakların iki mala eşit uygun olmaması","Teknolojinin sürekli gelişmesi","Devletin üretime müdahale etmesi"],a:1,e:"Kaynaklar her iki malın üretimine eşit uygun olmadığından, bir malın üretimi arttıkça her ek birimin fırsat maliyeti yükselir."},
  {q:"Hangisi üretim olanakları eğrisini dışa kaydırır?",o:["İşsizliğin artması","Tarımda verimi artıran yeni bir tohum","Traktör yerine buğday üretmeyi seçmek","Fabrikalarda kapasite kullanımının düşmesi"],a:1,e:"Teknolojik gelişme aynı kaynaklarla daha çok üretmeyi sağlar ve eğriyi dışa kaydırır. İşsizlik ve düşük kapasite ise eğrinin içine düşürür."},
  {q:"“Kira artışlarına sınır getirilmesi kiracıları korumak için doğru bir politikadır.” Bu ifade hangi türdendir?",o:["Pozitif, çünkü kira verisine dayanıyor","Normatif, çünkü bir değer yargısı içeriyor","Pozitif, çünkü bir politikayı tanımlıyor","Hiçbiri, çünkü iktisadın konusu değil"],a:1,e:"“Doğru bir politikadır” ifadesi değer yargısıdır; veriyle doğrulanamaz, tartışılır."},
  {q:"“Kira sınırı getirilen şehirlerde kiralık konut ilanları azalır.” Bu ifade için hangisi doğrudur?",o:["Normatiftir, çünkü kiracıları ilgilendirir","Pozitiftir, çünkü veriyle sınanabilir","Doğru olduğu kesin olduğu için pozitiftir","Mikro değil makro olduğu için normatiftir"],a:1,e:"Pozitif ifade veriyle sınanabilen ifadedir. Doğru ya da yanlış çıkabilir; pozitif olması doğruluğunu garanti etmez."},
  {q:"Aşağıdakilerden hangisi makroiktisadın konusudur?",o:["Bir otelin sezon fiyatlarını belirlemesi","Ülke genelindeki enflasyon oranı","Bir tüketicinin çay-kahve tercihi","Bir firmanın işçi sayısı kararı"],a:1,e:"Enflasyon fiyatlar genel düzeyine, yani ekonominin bütününe ilişkindir. Diğerleri tek bir birimin kararıdır."},
  {q:"Yüksek işsizliğin nedenlerini anlamak için firmaların işe alım kararlarını incelemek neyi gösterir?",o:["Mikro ve makronun birbirinden bağımsız olduğunu","Makro sorunların mikro kararlarda kök saldığını","İşsizliğin yalnızca mikro bir sorun olduğunu","Pozitif analizin gereksiz olduğunu"],a:1,e:"Ekonomi milyonlarca mikro kararın toplamıdır; makro bir sorunu çözmek için çoğu zaman mikro davranışları anlamak gerekir."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 2–4, s. 21–41.",
 "Mankiw, N. G. <i>Principles of Economics</i>. Cengage Learning (Bölüm 1–2: iktisadın on ilkesi, iktisatçı gibi düşünmek).",
 "Robbins, L. (1932). <i>An Essay on the Nature and Significance of Economic Science</i>. Macmillan.",
 "Türkiye İstatistik Kurumu: <a href=\"https://www.tuik.gov.tr\">tuik.gov.tr</a>"
],
next:"Sonraki: Hafta 03 — İktisadi sistemler, düşünce okulları ve ekonominin döngüsü"
};
