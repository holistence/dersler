window.WEEK={
id:"me-07",code:"ME",course:"Medya Ekonomisi",short:"Dikkat, algı, enformasyon",week:7,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Dikkat ve bilgi ekonomisi",
title:"Dikkat, algı ve <em>enformasyon</em> ekonomisi",
intro:"Bu hafta medyanın sattığı ve şekillendirdiği üç soyut kaynağı inceleyeceksiniz: dikkat, algı ve bilgi. Sonsuz kaydırmanın dikkat ekonomisinin aracı olarak nasıl çalıştığını, dikkat ekonomisini odaklanma ekonomisinden ayıran farkları, medyanın gündem belirleme ve çerçeveleme yoluyla algıyı nasıl ürettiğini, enformasyon ekonomisindeki rolünü ve kamu ekonomisi açısından neden “dördüncü kuvvet” sayıldığını öğreneceksiniz. Okuma süresi yaklaşık 45 dakika; sayfada bir hesaplayıcı, bir sınıflandırma alıştırması, bir çerçeveleme deneyi, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Sonsuz kaydırmanın kullanım süresini ve reklam gelirini nasıl artırdığını hesaplayarak açıklayabilirsiniz.",
 "Dikkat ekonomisi ile odaklanma ekonomisini amaç, mücadele alanı ve ölçüt bakımından ayırt edebilirsiniz.",
 "Gündem belirleme, çerçeveleme, duygu üretimi ve itibar yönetimini haber örnekleri üzerinde tanıyabilirsiniz.",
 "Medyanın enformasyon ekonomisindeki üretim, dağıtım, değer yaratma ve manipülasyon rollerini açıklayabilirsiniz.",
 "Medyanın kamu ekonomisindeki rollerini, özellikle bilgi asimetrisini azaltma ve hesap verebilirliği, örneklerle tartışabilirsiniz."
],
sections:[
{n:"7.1",h:"Sonsuz kaydırma girdabı",blocks:[
 {t:"p",html:"<b>Sonsuz kaydırma</b> (infinite scrolling), sosyal medya ve video platformlarının dikkatimizi kesintisiz çekmek için kullandığı bir arayüz tasarımıdır. Sayfanın sonuna geldiğinizde yeni içerik kendiliğinden yüklenir; sayfayı yenilemenize ya da bir düğmeye basmanıza gerek kalmaz. Sonuç bir “girdap”tır: Kullanıcı uygulamanın içinde kalır."},
 {t:"p",html:"Geleneksel sayfa yapısında sayfanın sonu doğal bir <b>durma noktasıdır</b>. “Sonraki sayfa” düğmesine basmak küçük de olsa bir karar ister ve o an, kullanıcıya “yeterli mi?” diye sorma fırsatı verir. Sonsuz kaydırma bu engeli kaldırır. “Bir sonraki kaydırmada daha iyi bir şey olabilir” hissi tetiklenir, zaman algısı kaybolur. Algoritmalar da her kaydırmada ilgi alanınıza en uygun içeriği getirerek girdabı kişiselleştirir."},
 {t:"p",html:"Hafta 03'te dikkatin reklam gelirine nasıl dönüştüğünü hesaplamıştık. Şimdi durma noktalarının kaldırılmasının etkisine bakalım. Rakamlar örnek amaçlıdır."},
 {t:"widget",name:"calc",opts:{title:"Sonsuz kaydırmanın ekonomisi",inputs:[{id:"kullanici",label:"Günlük aktif kullanıcı",min:1,max:50,step:1,value:10,unit:" milyon"},{id:"sure",label:"Sayfalı tasarımda günlük süre",min:5,max:120,step:5,value:30,unit:" dk"},{id:"artis",label:"Sonsuz kaydırmayla süre artışı",min:0,max:100,step:5,value:25,unit:"%"},{id:"gelir",label:"Kullanıcı başına dakikalık reklam geliri",min:0.01,max:0.2,step:0.01,value:0.04,unit:" TL"}],formula:"(function(){var ek=kullanici*1e6*sure*artis/100*gelir*365;return Math.round(ek/1e6).toLocaleString('tr-TR')+' milyon TL (kullanıcı başına günde '+(sure*artis/100).toLocaleString('tr-TR',{maximumFractionDigits:1})+' dk fazladan)';})()",result:"Yıllık ek reklam geliri: {r}",note:"Örnekte 10 milyon kullanıcı günde 30 yerine 37,5 dakika kalıyor; bu ek 7,5 dakika yılda yaklaşık 1,1 milyar TL (1.095 milyon TL) ek gelir demek. Platformlar için kullanım süresindeki küçük artışların neden çok değerli olduğunu bu hesap gösterir. Aynı mantık “sıradaki videoyu otomatik oynat” özelliği için de geçerlidir."}},
 {t:"box",lbl:"Tartışma",html:"Sonsuz kaydırma “kullanıcı dostu” olarak sunulur: Akış kesintisizdir, bekleme yoktur. Ama kullanıcının o anki rahatlığı ile uzun vadeli çıkarı (uyku, ders çalışma, odaklanma) çatışabilir. Bu yüzden bazı uygulamalar “bir süredir geziniyorsunuz” uyarısı ya da günlük süre sınırı gibi durma noktalarını isteğe bağlı olarak geri getirdi."}
]},
{n:"7.2",h:"Dikkat ekonomisi mi, odaklanma ekonomisi mi?",blocks:[
 {t:"p",html:"Dikkat ekonomisi, sınırlı insan dikkatini en değerli kaynak ya da “meta” olarak görür. Geleneksel ekonomide petrol ve altın gibi somut şeyler değer taşırken dijital çağda en büyük rekabet, insanların sınırlı dikkat süresini ele geçirmek için yapılır. Kitap bu modelin karşısına <b>odaklanma ekonomisini</b> koyar: Dikkat ekonomisi “beni izle” der ve bizi bir girdaba çeker; odaklanma ekonomisi “birlikte bir şey inşa edelim” der ve amaçlı bir eyleme yönlendirir."},
 {t:"table",head:["","Dikkat ekonomisi","Odaklanma ekonomisi"],rows:[
  ["Bakış","Dikkatimiz bir hammaddedir","Odağımızın kendisi bir değerdir"],
  ["Bizi nasıl görür?","Pasif içerik tüketicisi","Üreten ve değer yaratan birey"],
  ["Mücadele alanı","Dikkati ele geçirmek; sonsuz kaydırma, bağımlılık yaratan algoritmalar","Dikkat dağıtıcıları azaltmak; derin çalışma araçları, engelleyiciler, eğitim programları"],
  ["Başarı ölçütü","Harcanan zaman, tıklama sayısı, izlenme süresi","Tamamlanan proje, öğrenilen beceri, üretilen nitelikli içerik"],
  ["Gelir kaynağı (tipik)","Reklam ve veri","Abonelik ya da tek seferlik satış"]]},
 {t:"p",html:"Son satır önemli bir ipucu verir: Bir ürünün hangi ekonomiye ait olduğunu anlamanın en kolay yolu nasıl para kazandığına bakmaktır. Reklamla kazanan bir uygulamanın, sizi ekranda daha uzun tutmak için güçlü bir teşviki vardır. Aylık ücretle kazanan bir odaklanma uygulaması ise işinizi bitirip uygulamadan çıkmanızdan zarar görmez."},
 {t:"widget",name:"classify",opts:{title:"Dikkat ekonomisi mi, odaklanma ekonomisi mi?",cats:["Dikkat ekonomisi","Odaklanma ekonomisi"],items:[
  ["Sonsuz kaydırmalı kısa video akışı",0],
  ["Belirli sürede bildirimleri kapatan bir odaklanma uygulaması",1],
  ["Bir dizinin bitiminde sıradaki bölümü otomatik başlatma",0],
  ["Not alma ve proje yönetimi yazılımı",1],
  ["“Bunu kaçırma!” diye sürekli bildirim gönderen haber uygulaması",0],
  ["Tamamlanan derslere göre ilerleme gösteren dil öğrenme kursu",1],
  ["Beğeni sayısını öne çıkaran ve sürekli yenilenen akış",0],
  ["Derin çalışma için sosyal medyayı engelleyen tarayıcı eklentisi",1]
 ],note:"Başarısı harcanan süreyle ölçülen ürünler dikkat ekonomisine, başarısı tamamlanan iş ve kazanılan beceriyle ölçülenler odaklanma ekonomisine aittir. Bazı ürünler arada kalabilir: Dil uygulamaları da seri (streak) bildirimleriyle dikkat ekonomisi tekniklerini kullanır."}}
]},
{n:"7.3",h:"Medya, algı ekonomisinde nasıl bir rol oynar?",blocks:[
 {t:"p",html:"Algı ekonomisi en çok medya aracılığıyla işler. Medya bir konunun ya da kişinin kamuoyundaki algısını şekillendirme gücüne sahip olduğu için algı ekonomisinin temel aracıdır. Kitabın ifadesiyle medya artık olanı yansıtan bir <b>ayna</b> değil, olanı nasıl göreceğimizi şekillendiren bir <b>mercek</b>tir."},
 {t:"choice",items:[
  {label:"Gündem belirleme",title:"Neyi düşüneceğimizi belirlemek",body:"Medya neye dikkat edeceğimizi ve ne hakkında konuşacağımızı belirler. Bir konu ne kadar çok yer alırsa insanlar onu o kadar önemli sanır. Kavramı Maxwell McCombs ve Donald Shaw, 1968 ABD başkanlık seçimi üzerine 1972'de yayımladıkları çalışmayla ortaya koydu.",ex:"Örnek: Bir hafta boyunca her bültenin açılışında aynı konunun yer alması, o konunun anketlerde “en önemli sorun” olarak öne çıkmasına yol açabilir."},
  {label:"Çerçeveleme",title:"Nasıl düşüneceğimizi etkilemek",body:"Bir olayın hangi açıyla sunulduğu algıyı doğrudan etkiler. Aynı siyasi eylem “protesto” olarak da çerçevelenebilir, “ayaklanma” olarak da. Kelimeler, imgeler ve anlatı izleyicinin duygusunu kökten değiştirir.",ex:"Örnek: Bir doğal afetin “felaket” yerine “dayanışma ve umut hikâyesi” olarak sunulması."},
  {label:"Duygu üretimi",title:"Öfke, korku, sevinç",body:"Sosyal medya ve haber siteleri içeriği çoğunlukla duygusal tepki yaratacak biçimde sunar. Duyguyla beslenen bir haber yalnızca dikkat çekmez, bir inanç ya da önyargı da yerleştirir.",ex:"Duygu, dikkat ekonomisiyle algı ekonomisini birbirine bağlar: Öfke uyandıran içerik daha çok paylaşılır, daha çok paylaşılan içerik daha çok reklam geliri getirir."},
  {label:"İtibar yönetimi",title:"Kriz anında algıyı onarmak",body:"Şirketler kriz anlarında itibarlarını korumak için olumlu haberleri öne çıkarır, halkla ilişkiler kampanyaları yürütür, sosyal medyada olumlu yorumların yayılmasını sağlar.",ex:"Örnek: Bir siyasetçinin “halkın adamı” imajı için fabrikada işçilerle yemek yerken çekilmiş fotoğraflarının sürekli paylaşılması."}
 ]},
 {t:"p",html:"Çerçevelemenin gücünü kendiniz deneyin. Aşağıdaki deney, Daniel Kahneman ve Amos Tversky'nin 1981'de yayımladıkları ünlü çalışmasına dayanır: Aynı sonuç “kurtulan” ya da “ölen” kişi sayısıyla anlatıldığında tercihler değişir. Medyanın kelime seçimi aynı mekanizmayla çalışır."},
 {t:"widget",name:"framing"}
]},
{n:"7.4",h:"Medya, enformasyon ekonomisinde nasıl bir rol üstlenir?",blocks:[
 {t:"def",html:"<b>Enformasyon ekonomisi</b>, bilginin ve verinin birincil ekonomik kaynak sayıldığı; bilginin üretimi, dağıtımı, kullanımı ve satışının değer yarattığı ekonomik sistemdir.",src:"Ders kitabı, s. 45: Medya bu sistemin “ana fabrikasıdır”."},
 {t:"p",html:"Medya enformasyon ekonomisinin hem üreticisi hem dağıtımcısıdır. Kitap bu rolü dört katmanda ele alır. <b>Bilgi üretimi:</b> Medya ham veriyi işleyerek anlamlı bilgiye dönüştürür; borsadaki sayılar bir “ekonomi haberi” olur. <b>Bilgi dağıtımı:</b> Geleneksel ve dijital medya bilgiyi geniş kitlelere yayar; dağıtım hızı bilginin değerini doğrudan etkiler. <b>Değer yaratma:</b> Bilgi ticari bir ürüne dönüşür; özel bir rapor yalnızca abonelere sunulur. <b>Manipülasyon:</b> Bir bilginin öne çıkarılması, gizlenmesi ya da farklı bağlamda sunulması değerini ve algısını değiştirir; dezenformasyon ve propaganda bu katmanın sorunlarıdır."},
 {t:"p",html:"Bilginin bir ekonomik özelliği daha vardır: Değeri çoğu zaman <b>zamana</b> bağlıdır. Bir şirketin bilanço sonucunu herkesten birkaç dakika önce öğrenen yatırımcı kazanç sağlayabilir; aynı bilgi bir gün sonra herkesin elindedir ve ticari değeri büyük ölçüde kaybolur. Finans haber ajanslarının yüksek ücretli anlık veri terminalleri satabilmesinin nedeni budur."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye İstatistik Kurumu (TÜİK) enflasyon, büyüme ve işsizlik verilerini önceden ilan ettiği bir takvime göre ve belirli bir saatte herkese aynı anda açıklar. Bu uygulamanın amacı, bazı kişilerin bilgiye başkalarından önce ulaşarak avantaj elde etmesini önlemektir. Medya bu ham veriyi dakikalar içinde haberleştirir, yorumlar ve geniş kitlelere ulaştırır; burada üretim, dağıtım ve değer yaratma katmanlarını birlikte görürüz."}
]},
{n:"7.5",h:"Medya kamu ekonomisi açısından neden önemlidir?",blocks:[
 {t:"p",html:"Kamu ekonomisi, devletin gelirlerini, harcamalarını ve bunların toplum üzerindeki etkilerini inceler. Medya çoğu zaman özel sektör aktörü gibi görünse de bu alanda kritik bir rol oynar, çünkü sağlıklı bir kamu ekonomisinin temeli <b>bilgi akışı ve şeffaflıktır</b>."},
 {t:"table",head:["Rol","Ne yapar?","Örnek"],rows:[
  ["Şeffaflık ve hesap verebilirlik","Kamu harcamalarını ve kurumları denetler; “dördüncü kuvvet” işlevi görür","Bir belediyenin inşaat projesindeki maliyet artışlarının araştırılıp duyurulması"],
  ["Bilgi asimetrisini azaltma","Vatandaşı politikalar ve kararlar hakkında bilgilendirerek bilgi açığını kapatır","Bir vergi değişikliğinin kimi nasıl etkileyeceğinin anlatılması"],
  ["Vatandaş katılımı","Kamusal tartışma alanı yaratır, farklı görüşlerin ifade edilmesini sağlar","Seçim vaatlerinin bütçe üzerindeki etkilerinin tartışılması"],
  ["Piyasa başarısızlıklarını gösterme","Dışsallıkları ve eksik kamu mallarını gündeme getirerek müdahale baskısı oluşturur","Çevre kirliliği ya da tükenen doğal kaynaklar üzerine haber dizisi"],
  ["Ekonomik güveni etkileme","Ekonomi haberlerinin sunuluş biçimi tüketici ve yatırımcı güvenini etkiler","Kriz dönemlerinde haber dilinin harcama ve yatırım kararlarına yansıması"]]},
 {t:"p",html:"<b>Bilgi asimetrisi</b>, bir tarafın diğerinden daha fazla bilgiye sahip olmasıdır. George Akerlof 1970'te kullanılmış otomobil piyasası (“limon piyasası”) üzerine yazdığı makalesinde, satıcının arabanın kusurlarını alıcıdan iyi bilmesinin piyasanın işleyişini nasıl bozabildiğini gösterdi. Kamu ekonomisinde asimetri devlet ile vatandaş arasındadır: Bir ihalenin ayrıntısını yöneticiler bilir, vergi ödeyen bilmez. Bağımsız medya bu açığı kapatarak kamu kaynaklarının daha etkin kullanılmasını teşvik eder."},
 {t:"p",html:"Kitabın vardığı sonuç şudur: Medya kamu ekonomisinin görünmez denetçisi, bilgi akışının atardamarı ve demokratik katılımın itici gücüdür. Medyanın <b>bağımsızlığı ve kalitesi</b>, bir ülkenin kamu ekonomisinin sağlığıyla yakından ilişkilidir. Hafta 08'de medyanın “dördüncü kuvvet” rolünün ekonomik gücüyle nasıl kesiştiğini ele alacağız."}
]},
{n:"7.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Sonsuz kaydırma","Sayfa sonunda yeni içeriği kendiliğinden yükleyerek durma noktasını kaldıran arayüz tasarımı."],
  ["Dikkat ekonomisi","Sınırlı insan dikkatini hammadde olarak gören, başarıyı harcanan süreyle ölçen model."],
  ["Odaklanma ekonomisi","Dikkat dağıtıcıları azaltarak değer üretmeyi hedefleyen, başarıyı sonuçla ölçen model."],
  ["Algı ekonomisi","Medyanın algıyı biçimlendirme gücünü ekonomik ya da politik çıkar için kullanması."],
  ["Gündem belirleme","Medyanın hangi konuların önemli sayılacağını belirlemesi."],
  ["Çerçeveleme","Bir olayın sunuluş açısının ve kelime seçiminin algıyı değiştirmesi."],
  ["Enformasyon ekonomisi","Bilginin birincil ekonomik kaynak olduğu sistem."],
  ["Dezenformasyon","Bilerek yayılan yanlış ya da yanıltıcı bilgi."],
  ["Bilgi asimetrisi","Bir tarafın diğerinden daha fazla bilgiye sahip olması."],
  ["Dördüncü kuvvet","Medyanın yasama, yürütme ve yargının yanında denetleyici bir güç olarak görülmesi."]
 ]}
]},
{n:"7.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Sonsuz kaydırma, kullanıcının uygulamada daha uzun kalmasını temelde nasıl sağlar?",o:["İçeriği daha yüksek çözünürlükte göstererek","Sayfa sonundaki doğal durma noktasını kaldırarak","Kullanıcıdan ek ücret alarak","Reklam sayısını azaltarak"],a:1,e:"Yeni sayfaya geçmek için gereken küçük karar anı ortadan kalkar; kullanıcı fark etmeden kaydırmaya devam eder."},
  {q:"5 milyon kullanıcı günde 4 dakika fazladan kalıyor, dakikalık kullanıcı başı reklam geliri 0,05 TL. Günlük ek gelir nedir?",o:["100 bin TL","1 milyon TL","10 milyon TL","20 milyon TL"],a:1,e:"5.000.000 × 4 × 0,05 = 1.000.000 TL; yılda 365 milyon TL eder."},
  {q:"Odaklanma ekonomisinde başarı hangi ölçütle değerlendirilir?",o:["Harcanan süre ve tıklama sayısı","Tamamlanan proje ve öğrenilen beceri","Reklam gösterimi ve izlenme süresi","Takipçi ve beğeni sayısı"],a:1,e:"Odaklanma ekonomisi sonuç odaklıdır; dikkat ekonomisi ise süre ve tıklama gibi kullanım metrikleriyle ölçer."},
  {q:"Aynı eylemi bir kanalın “protesto”, diğerinin “ayaklanma” olarak sunması hangi mekanizmaya örnektir?",o:["Gündem belirleme","Çerçeveleme","İtibar yönetimi","Bilgi dağıtımı"],a:1,e:"Olay aynıdır; seçilen kelime ve açı izleyicinin algısını ve duygusunu değiştirir."},
  {q:"Bir konunun haftalarca bültenlerin açılışında yer almasıyla halkın onu “en önemli sorun” saymaya başlaması hangi kavramla açıklanır?",o:["Çerçeveleme","Gündem belirleme","Uzun kuyruk","Ağ etkisi"],a:1,e:"Medya neyi düşüneceğimizi belirler; sık yer verilen konu önemli algılanır (McCombs ve Shaw)."},
  {q:"Bir siyasetçinin işçilerle yemek yerken çekilmiş fotoğraflarının sürekli paylaşılması hangi algı mekanizmasıyla ilgilidir?",o:["Bilgi asimetrisi","İtibar ve imaj yönetimi","Kapsam ekonomisi","Sonsuz kaydırma"],a:1,e:"Belirli bir imajı (“halkın adamı”) pekiştirmek için olumlu görsellerin öne çıkarılması algı yönetimidir."},
  {q:"Bir haber kuruluşunun derinlemesine raporunu yalnızca abonelerine sunması enformasyon ekonomisinin hangi katmanını gösterir?",o:["Bilgi dağıtımı","Değer yaratma","Enformasyon manipülasyonu","Gündem belirleme"],a:1,e:"Bilgi, erişimi sınırlandırılarak satılabilir bir ürüne dönüştürülüyor."},
  {q:"TÜİK'in verileri önceden ilan edilmiş saatte herkese aynı anda açıklamasının temel amacı nedir?",o:["Haberlerin daha geç yapılmasını sağlamak","Erken erişimden doğan haksız avantajı önlemek","Verilerin değerini artırmak için gizli tutmak","Verileri yalnızca abonelere satabilmek"],a:1,e:"Bilginin değeri zamana bağlıdır; eşzamanlı açıklama erken erişimden doğacak haksız avantajı engeller."},
  {q:"Bir gazetenin belediyenin inşaat projesindeki maliyet artışlarını ortaya çıkarması, medyanın kamu ekonomisindeki hangi rolüdür?",o:["Ekonomik güveni artırma","Şeffaflık ve hesap verebilirlik sağlama","Piyasa başarısızlığı yaratma","Dikkat ekonomisini besleme"],a:1,e:"Vergi mükelleflerinin parasının nasıl harcandığını denetlemek medyanın “dördüncü kuvvet” işlevidir."},
  {q:"Kamu ekonomisinde bilgi asimetrisi en iyi hangi örnekle açıklanır?",o:["İki rakip kanalın aynı diziyi yayınlaması","İhale ayrıntısını yöneticinin bilip vatandaşın bilmemesi","Bir şarkının milyonlarca kişi tarafından dinlenmesi","Bir platformun abonelik ücretini artırması"],a:1,e:"Bir tarafın diğerinden çok daha fazla bilgiye sahip olması bilgi asimetrisidir; medya bu açığı kapatabilir."}
 ]}
]}
],
refs:[
 "Şahin, M. (2025). <i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications. s. 37–50.",
 "McCombs, M. E., Shaw, D. L. (1972). The Agenda-Setting Function of Mass Media. <i>Public Opinion Quarterly</i>, 36(2), 176–187.",
 "Tversky, A., Kahneman, D. (1981). The Framing of Decisions and the Psychology of Choice. <i>Science</i>, 211(4481), 453–458.",
 "Akerlof, G. A. (1970). The Market for “Lemons”: Quality Uncertainty and the Market Mechanism. <i>Quarterly Journal of Economics</i>, 84(3), 488–500.",
 "Türkiye İstatistik Kurumu — Veri yayımlama takvimi: <a href=\"https://www.tuik.gov.tr\">tuik.gov.tr</a>"
],
next:"Sonraki: Hafta 08 — Dijitalleşme: bilişsel artık, filtre balonu, dördüncü kuvvet"
};
