window.WEEK={
id:"py-08",code:"PY",course:"Proje Yönetimi",short:"Maliyet ve bütçe",week:8,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Maliyet yönetimi",
title:"Maliyet tahmini ve <em>bütçe</em>",
intro:"Bu hafta proje maliyetlerinin türlerini, maliyet tahmin yöntemlerini ve tahmin doğruluğunun proje ilerledikçe nasıl arttığını öğreneceksiniz. Ardından iş paketi maliyetlerinden başlayıp yedek akçe ve yönetim yedeğiyle toplam bütçeye ulaşmayı, bütçeyi zamana yayıp nakit ihtiyacını görmeyi çalışacaksınız. Okuma süresi yaklaşık 35 dakika; sayfada bir maliyet sınıflandırma alıştırması, iki hesaplayıcı ve 9 soruluk bir test var.",
goals:[
 "Doğrudan ve dolaylı, sabit ve değişken maliyetleri ayırt edebilirsiniz.",
 "Analog, parametrik ve aşağıdan yukarı tahmin yöntemlerini karşılaştırabilirsiniz.",
 "Kaba büyüklük tahmini ile kesin tahmin arasındaki doğruluk farkını açıklayabilirsiniz.",
 "İş paketi maliyetlerinden yedek akçe ve yönetim yedeğini ekleyerek toplam bütçeyi hesaplayabilirsiniz.",
 "Maliyet temel çizgisini ve S-eğrisini yorumlayabilirsiniz."
],
sections:[
{n:"8.1",h:"Proje maliyetleri",blocks:[
 {t:"p",html:"Proje bütçesi, projenin bütün işlerinin parasal karşılığıdır. İyi bir bütçe iki soruya yanıt verir: <b>Toplam ne kadar para gerekiyor?</b> ve <b>Bu para ne zaman gerekiyor?</b> İkinci soru çoğu zaman unutulur, ama nakit doğru zamanda yoksa toplam bütçe yeterli olsa bile proje durabilir."},
 {t:"list",items:[
  "<b>Doğrudan maliyet:</b> Doğrudan bu projeye ait olan ve projeye bire bir yüklenebilen maliyet: proje ekibinin ücreti, projeye özel malzeme, kiralanan ekipman.",
  "<b>Dolaylı maliyet:</b> Birden çok projeye ya da kurumun geneline hizmet eden ve paylaştırılarak yüklenen maliyet: ofis kirası, muhasebe birimi, genel yönetim giderleri.",
  "<b>Sabit maliyet:</b> Proje çıktısının miktarı değişse de değişmeyen maliyet: salon kirası, yazılım lisansı.",
  "<b>Değişken maliyet:</b> Miktarla birlikte değişen maliyet: katılımcı başına yaka kartı, ikram, broşür."]},
 {t:"widget",name:"classify",opts:{title:"Kariyer Günleri: doğrudan mı, dolaylı mı?",cats:["Doğrudan","Dolaylı"],items:[
  ["Stant kurulumu için kiralanan paravanlar",0],
  ["Fakültenin genel elektrik ve temizlik gideri",1],
  ["Etkinlik için basılan afişler",0],
  ["Topluluğun yıllık web sitesi barındırma ücreti",1],
  ["Panel konuşmacılarının yol masrafı",0],
  ["Kariyer merkezinin yıllık personel gideri",1],
  ["Katılımcılara dağıtılan yaka kartları",0],
  ["Rektörlüğün genel idari giderleri",1]],
  note:"Soru şudur: Bu proje olmasaydı bu maliyet yine de oluşur muydu? Oluşacaksa ve birçok işe hizmet ediyorsa dolaylıdır; yalnızca bu proje için ortaya çıkıyorsa doğrudandır."}}
]},
{n:"8.2",h:"Tahmin yöntemleri",blocks:[
 {t:"p",html:"Süre tahmininde gördüğünüz yöntemlerin çoğu maliyet için de geçerlidir. Fark şudur: maliyet tahmini süre tahminine dayanır. Bir işin kaç gün süreceğini bilmeden kaç kişinin kaç gün çalışacağını, dolayısıyla işçilik maliyetini bilemezsiniz. Bir yöntem seçin."},
 {t:"choice",items:[
  {label:"Analog (yukarıdan aşağı)",title:"Benzer projeden yola çıkmak",body:"Geçmişteki benzer bir projenin gerçek maliyeti temel alınır, gerekirse ölçeğe ve fiyat artışlarına göre düzeltilir. Hızlıdır, ayrıntılı bilgi gerektirmez; proje başında ve seçim aşamasında kullanılır.",ex:"\"Geçen yılki fuar, bugünkü fiyatlarla yaklaşık şu kadara mal olmuştu; bu yıl stant sayısı %20 fazla.\""},
  {label:"Parametrik",title:"Birim maliyetle çarpmak",body:"Güvenilir bir birim maliyet ile miktar çarpılır. İnşaatta metrekare maliyeti, yazılımda ekran başına maliyet, etkinlikte katılımcı başına maliyet gibi.",ex:"\"Katılımcı başına ikram ve yaka kartı maliyeti × beklenen katılımcı sayısı.\""},
  {label:"Aşağıdan yukarı",title:"İş paketlerinden toplamak",body:"Her iş paketinin maliyeti ayrı ayrı tahmin edilir ve İKY boyunca yukarı doğru toplanır. En isabetli ama en zahmetli yöntemdir; ayrıntılı bir İKY gerektirir.",ex:"\"Afiş: 4 bin TL, stant paravanları: 18 bin TL, ses sistemi: 9 bin TL… → toplam.\""},
  {label:"Üç nokta",title:"Belirsizliği hesaba katmak",body:"İyimser, en olası ve kötümser maliyetler PERT formülüyle birleştirilir: (a + 4m + b) / 6. Fiyatı oynak kalemler için uygundur.",ex:"\"Ses sistemi kirası iyimser 7, en olası 9, kötümser 15 bin TL → beklenen 9,7 bin TL.\""}
 ]},
 {t:"p",html:"Tahminin doğruluğu bilgi arttıkça artar. Proje başında yapılan <b>kaba büyüklük tahmini</b> (rough order of magnitude) PMI kaynaklarında yaklaşık −%25 ile +%75 arasında bir doğruluk aralığıyla anılır; planlama sonunda yapılan <b>kesin tahminin</b> aralığı ise yaklaşık −%5 ile +%10'a daralır. Bu yüzden proje başında tek bir sayı vermek yerine bir aralık vermek daha dürüsttür."}
]},
{n:"8.3",h:"Bütçenin katmanları",blocks:[
 {t:"p",html:"Toplam bütçe, iş paketlerinin maliyetlerinin basit toplamı değildir. Üst üste binen katmanlardan oluşur:"},
 {t:"table",head:["Katman","İçeriği","Kim kontrol eder?"],rows:[
  ["1. İş paketi maliyetleri","Her iş paketinin faaliyet maliyetlerinin toplamı","Proje yöneticisi"],
  ["2. Yedek akçe (contingency)","Tanımlanmış risklere karşı ayrılan pay (\"bilinen bilinmeyenler\")","Proje yöneticisi"],
  ["= Maliyet temel çizgisi","Onaylanmış, zamana yayılmış bütçe; performans buna göre ölçülür","—"],
  ["3. Yönetim yedeği","Öngörülemeyen durumlar için ayrılan pay (\"bilinmeyen bilinmeyenler\")","Sponsor / üst yönetim"],
  ["= Toplam proje bütçesi","Proje için ayrılan azami tutar","—"]]},
 {t:"p",html:"Ayrım önemlidir. <b>Yedek akçe</b>, risk analizinde tespit edilen belirli riskler için ayrılır: \"Ses sistemi kiralayan firma son anda vazgeçerse daha pahalı bir firmayla çalışmak zorunda kalabiliriz.\" <b>Yönetim yedeği</b> ise kimsenin aklına gelmeyen durumlar içindir ve kullanılması sponsorun onayını gerektirir. Gelecek hafta risk yönetiminde yedek akçenin beklenen parasal değerle nasıl hesaplanacağını göreceğiz."},
 {t:"widget",name:"calc",opts:{title:"Aşağıdan yukarı bütçe",inputs:[
  {id:"saat",label:"Ücretli işçilik",min:0,max:1000,step:10,value:200,unit:" saat"},
  {id:"ucret",label:"Saatlik ücret",min:50,max:1000,step:10,value:250,unit:" TL"},
  {id:"malz",label:"Malzeme, kira ve hizmet alımı",min:0,max:300,step:5,value:60,unit:" bin TL"},
  {id:"dol",label:"Dolaylı gider payı",min:0,max:30,step:1,value:10,unit:"%"},
  {id:"yed",label:"Yedek akçe",min:0,max:30,step:1,value:10,unit:"%"},
  {id:"yon",label:"Yönetim yedeği",min:0,max:20,step:1,value:5,unit:"%"}],
  formula:"(function(){var dog=saat*ucret/1000+malz,ip=dog*(1+dol/100),tc=ip*(1+yed/100),top=tc*(1+yon/100);var f=function(x){return x.toFixed(1).replace('.',',');};return 'Doğrudan maliyet '+f(dog)+' · İş paketleri (dolaylı dahil) '+f(ip)+' · Maliyet temel çizgisi '+f(tc)+' · Toplam bütçe '+f(top)+' bin TL';})()",
  result:"{r}",note:"Yedek akçe ve yönetim yedeğini sıfırlayın: bütçe ilk bakışta daha 'iyi' görünür, ama ilk sürprizde proje ek ödenek istemek zorunda kalır. Yüksek enflasyon dönemlerinde fiyat artışı riski de yedek akçede ayrıca düşünülmelidir."}}
]},
{n:"8.4",h:"Bütçeyi zamana yaymak: S-eğrisi",blocks:[
 {t:"p",html:"Maliyet temel çizgisi, bütçenin zaman içinde nasıl harcanacağını gösterir. Her faaliyetin maliyeti, Gantt şemasındaki tarihlerine yayılır; dönem dönem toplanır ve kümülatif olarak çizilir. Ortaya çıkan eğri genellikle bir <b>S</b> harfine benzer: başta harcama yavaştır (planlama), ortada hızlanır (yürütme), sonda yeniden yavaşlar (kapanış)."},
 {t:"p",html:"S-eğrisi iki işe yarar. Birincisi <b>finansman planlaması</b>dır: hangi ay ne kadar nakit gerektiğini gösterir. Sponsorluk geliri etkinlikten sonra gelecekse, afiş ve paravan ödemeleri için önceden nakit bulunması gerekir. İkincisi <b>performans ölçümüdür</b>: 12. haftada gerçekleşen harcamayı ve tamamlanan işi bu eğriyle karşılaştırarak projenin bütçenin önünde mi gerisinde mi olduğunu ölçeceğiz."},
 {t:"box",lbl:"Nakit akışı uyarısı",html:"Kârlı ve bütçesi yeterli projeler de nakit sıkıntısıyla durabilir. Kamu ve kalkınma ajansı destekli projelerde destek ödemeleri çoğu zaman harcama yapıldıktan ve belgelendikten sonra yapılır. Bu yüzden proje sahibinin, destek gelene kadar harcamaları karşılayacak <b>ön finansmanı</b> planlaması gerekir."},
 {t:"widget",name:"calc",opts:{title:"Tahmin aralığı",inputs:[
  {id:"t",label:"Tahmin edilen maliyet",min:10,max:1000,step:10,value:200,unit:" bin TL"},
  {id:"evre",label:"Proje evresi (1 = fikir, 2 = ön planlama, 3 = ayrıntılı plan)",min:1,max:3,step:1,value:1}],
  formula:"(function(){var lo=[0,-25,-10,-5][evre],hi=[0,75,25,10][evre],ad=['','Kaba büyüklük tahmini','Bütçe tahmini','Kesin tahmin'][evre];return ad+': '+Math.round(t*(1+lo/100))+' – '+Math.round(t*(1+hi/100))+' bin TL arası (−%'+(-lo)+' / +%'+hi+')';})()",
  result:"{r}",note:"Aralıklar sektörel uygulamalarda sık kullanılan yaklaşık değerlerdir; kurumdan kuruma değişir. Önemli olan ilkedir: proje başında verilen tek bir sayıya kesinmiş gibi güvenmeyin."}}
]},
{n:"8.5",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Doğrudan maliyet","Yalnızca bu proje için ortaya çıkan, bire bir yüklenebilen maliyet."],
  ["Dolaylı maliyet","Birden çok işe hizmet eden, paylaştırılarak yüklenen maliyet."],
  ["Aşağıdan yukarı tahmin","İş paketi maliyetlerinin İKY boyunca toplanmasıyla yapılan tahmin."],
  ["Kaba büyüklük tahmini","Proje başında yapılan, geniş doğruluk aralıklı ilk tahmin."],
  ["Yedek akçe","Tanımlanmış risklere karşı ayrılan, proje yöneticisinin kontrolündeki pay."],
  ["Yönetim yedeği","Öngörülemeyen durumlar için ayrılan, sponsor onayıyla kullanılan pay."],
  ["Maliyet temel çizgisi","Onaylanmış, zamana yayılmış bütçe; performans buna göre ölçülür."],
  ["S-eğrisi","Kümülatif harcamanın zaman içindeki S biçimli seyri."]
 ]},
 {t:"box",lbl:"Dönem projesi · Adım 8",html:"İKY'nizdeki her iş paketi için aşağıdan yukarı maliyet tahmini yapın: işçilik (gönüllü emek bile olsa saatini yazın), malzeme, kira ve hizmet alımları. Ardından dolaylı gider payı, yedek akçe ve yönetim yedeğini ekleyerek toplam bütçeyi hesaplayın. Son olarak Gantt şemanızı kullanarak haftalık harcama tablosunu ve kümülatif S-eğrisini bir hesap tablosunda çizin."}
]},
{n:"8.6",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Bir mühendislik firmasının merkez ofis kirası, firmanın yürüttüğü bir proje için nasıl bir maliyettir?",o:["Doğrudan maliyet","Dolaylı maliyet","Değişken maliyet","Batık maliyet"],a:1,e:"Kira birçok projeye hizmet eder ve paylaştırılarak yüklenir; bu yüzden dolaylı maliyettir."},
  {q:"Katılımcı başına maliyeti sabit olan yaka kartları, katılımcı sayısına göre nasıl bir maliyettir?",o:["Sabit","Değişken","Dolaylı","Yönetim yedeği"],a:1,e:"Katılımcı sayısı arttıkça toplam tutar artar; bu değişken maliyettir."},
  {q:"En isabetli ama en zahmetli maliyet tahmin yöntemi hangisidir?",o:["Analog","Parametrik","Aşağıdan yukarı","Uzman sezgisi"],a:2,e:"Her iş paketinin ayrı ayrı tahmin edilmesi ayrıntılı bilgi gerektirir ama en isabetli sonucu verir."},
  {q:"Proje başında 400 bin TL'lik bir kaba büyüklük tahmini yapıldı. −%25 / +%75 aralığına göre gerçek maliyet hangi aralıkta olabilir?",o:["380–440 bin TL","300–700 bin TL","350–450 bin TL","100–700 bin TL"],a:1,e:"400 × 0,75 = 300 ve 400 × 1,75 = 700 bin TL. Proje başında belirsizlik çok yüksektir."},
  {q:"Risk analizinde tespit edilen \"tedarikçinin son anda vazgeçmesi\" riskine karşı ayrılan pay nedir?",o:["Yönetim yedeği","Yedek akçe","Dolaylı maliyet","Batık maliyet"],a:1,e:"Belirli, tanımlanmış risklere karşı ayrılan pay yedek akçedir; yönetim yedeği öngörülemeyen durumlar içindir."},
  {q:"Maliyet temel çizgisi hangi kalemleri içerir?",o:["Yalnızca doğrudan maliyetleri","İş paketi maliyetleri ve yedek akçeyi","İş paketi maliyetleri, yedek akçe ve yönetim yedeğini","Yalnızca yönetim yedeğini"],a:1,e:"Yönetim yedeği temel çizginin dışındadır; temel çizgiye eklenince toplam proje bütçesi elde edilir."},
  {q:"İş paketleri 100, yedek akçe %10, yönetim yedeği %5 ise (her biri bir önceki toplama uygulanarak) toplam bütçe kaçtır?",o:["115,0","115,5","110,0","105,0"],a:1,e:"100 × 1,10 = 110 (temel çizgi); 110 × 1,05 = 115,5 toplam bütçe."},
  {q:"Kümülatif harcama eğrisinin S biçiminde olmasının nedeni nedir?",o:["Harcamanın proje boyunca her ay sabit kalması","Başta yavaş, ortada hızlı, sonda yavaş harcanması","Harcanan bütçenin her ay ikiye katlanması","Harcamanın yalnızca kapanış evresinde yapılması"],a:1,e:"Planlamada harcama az, yürütmede yüksek, kapanışta yine azdır; kümülatif toplam bu yüzden S çizer."},
  {q:"Toplam bütçesi yeterli olan bir proje neden durma noktasına gelebilir?",o:["S-eğrisi çizilmediği için","Harcama zamanında nakit bulunamadığı için","Yedek akçe fazla ayrıldığı için","Analog tahmin kullanıldığı için"],a:1,e:"Bütçe toplamı kadar zamanlaması da önemlidir; özellikle destek ödemeleri harcamadan sonra geliyorsa ön finansman gerekir."}
 ]}
]}
],
refs:[
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Planlama ve ölçüm performans alanları.",
 "Project Management Institute (2011). <i>Practice Standard for Project Estimating</i>. PMI.",
 "Kerzner, H. <i>Project Management: A Systems Approach to Planning, Scheduling, and Controlling</i>. Wiley. Fiyatlama ve tahmin bölümü.",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 5: Süre ve maliyet tahmini."
],
next:"Sonraki: Hafta 09 — Risk yönetimi"
};
