window.WEEK={
id:"me-04",code:"ME",course:"Medya Ekonomisi",short:"Abonelik ve platformlar",week:4,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Gelir modelleri",
title:"Abonelik modelleri ve <em>platform</em> kapitalizmi",
intro:"Bu hafta reklam modelinin karşısına çıkan abonelik modelini, bu modelin yarattığı abonelik yorgunluğunu ve hibrit çözümleri inceleyeceksiniz. Ardından içerik üretmeden değer yaratan dijital platformları, yani platform kapitalizmini, medya sektörüne sunduğu fırsatlar ve zorluklarla birlikte ele alacaksınız. Okuma süresi yaklaşık 40 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, iki karşılaştırma ve 9 soruluk bir test var.",
goals:[
 "Abonelik modelinde müşterinin kim olduğunu reklam modeliyle karşılaştırarak açıklayabilirsiniz.",
 "Abone başına gelir ile kullanıcı başına reklam gelirini karşılaştırıp bir platform için hangi modelin daha çok kazandırdığını hesaplayabilirsiniz.",
 "Abonelik yorgunluğunu ve hibrit (reklamlı ucuz) paketlerin ortaya çıkışını açıklayabilirsiniz.",
 "Platform kapitalizmini tanımlayıp medya sektörü için fırsat ve zorlukları sınıflandırabilirsiniz.",
 "Veri odaklı üretimin avantajlarını veri gizliliği riskleriyle tartabilirsiniz."
],
sections:[
{n:"4.1",h:"Neden artık her platform bizden aylık ücret istiyor?",blocks:[
 {t:"p",html:"Çünkü oyunun kuralları değişti. Reklam modelinin yarattığı veri gizliliği endişeleri ve sürekli kesintiye uğrayan izleme deneyimi yeni bir modele kapı araladı: <b>abonelik</b>. Netflix ve Spotify gibi öncüler şunu söyledi: “Bize her ay belirli bir ücret ödeyin, biz de size reklamsız, kaliteli ve geniş bir arşiv sunalım.”"},
 {t:"p",html:"Bu modelde, çift taraflı piyasanın aksine, <b>müşteri doğrudan sizsiniz</b>. Şirketin temel amacı reklamvereni memnun etmek değil, sizin üyeliğinizi sürdürmektir. Kitaba göre bu durum daha kaliteli ve cesur yapımların önünü açtı: Reklamverenin “marka güvenliği” kaygısı ortadan kalkınca, geniş kitleyi rahatsız etmekten çekinmeyen içerikler üretilebildi."},
 {t:"table",head:["","Reklam modeli","Abonelik modeli"],rows:[
  ["Müşteri","Reklamveren","İzleyici / dinleyici"],
  ["Kullanıcı ne öder?","Dikkat ve veri","Aylık ücret"],
  ["Şirket neyi en üst düzeye çıkarmak ister?","İzlenme süresi ve hedef kitle büyüklüğü","Abone sayısı ve aboneliğin sürmesi"],
  ["Kullanıcı için avantaj","Para ödemeden erişim","Reklamsız, kesintisiz deneyim"],
  ["Kullanıcı için dezavantaj","Reklam kesintisi, mahremiyet kaygısı","Her hizmete ayrı ödeme, bütçe yükü"],
  ["Temel başarı ölçüsü","Reyting, CPM","Abone sayısı, kayıp oranı (churn)"]]},
 {t:"p",html:"Gazetelerin dijitalde ödeme duvarına (paywall) geçmesinin en büyük nedeni de budur. İnternette reklam gelirleri büyük platformlara kaydı; bir haber sitesinin bir okurdan kazandığı reklam geliri, basılı gazetenin okur başına kazandığının çok gerisinde kaldı. Abonelik, okuru yeniden doğrudan müşteri yapmanın yoludur."}
]},
{n:"4.2",h:"Reklam mı, abonelik mi? Hesaplayın",blocks:[
 {t:"p",html:"Bir dijital platform iki seçenekle karşı karşıya: Ücretsiz kalıp reklam satmak ya da aylık ücret istemek. Ücretsiz olunca kullanıcı sayısı yüksek kalır ama kullanıcı başına gelir düşüktür. Ücret istenince kullanıcıların yalnızca bir kısmı abone olur, ama her biri daha çok getirir. Rakamlar örnek amaçlıdır."},
 {t:"box",lbl:"Formül",html:"Reklam modeli aylık gelir = Kullanıcı sayısı × Kullanıcı başına aylık reklam geliri<br>Abonelik modeli aylık gelir = Kullanıcı sayısı × Abone olma oranı × Aylık ücret"},
 {t:"widget",name:"calc",opts:{title:"Abonelik ve reklam modeli: aylık gelir karşılaştırması",inputs:[{id:"kullanici",label:"Ücretsizken kullanıcı sayısı",min:0.1,max:20,step:0.1,value:5,unit:" milyon"},{id:"arpu",label:"Kullanıcı başına aylık reklam geliri",min:1,max:50,step:1,value:8,unit:" TL"},{id:"oran",label:"Ücretli olursa abone olanların payı",min:1,max:100,step:1,value:15,unit:"%"},{id:"ucret",label:"Aylık abonelik ücreti",min:20,max:400,step:10,value:150,unit:" TL"}],formula:"(function(){var r=kullanici*arpu,a=kullanici*oran/100*ucret;var f=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:1})+' milyon TL';};return 'Reklam: '+f(r)+' · Abonelik: '+f(a)+' → '+(a>r?'abonelik daha çok kazandırıyor':(r>a?'reklam daha çok kazandırıyor':'eşit'));})()",result:"Aylık gelir: {r}",note:"Örnekte reklam modeli 40 milyon TL, abonelik 112,5 milyon TL getiriyor. Ama abone olma oranını %5'e düşürün: abonelik geliri 37,5 milyon TL'ye iner ve reklam öne geçer. Platformun kararı, kullanıcılarının ödeme isteğine bağlıdır. Abonelikte reklam satamadığınız kullanıcıların ilgisini de kaybettiğinizi unutmayın."}},
 {t:"p",html:"Hesap, hibrit modelin neden cazip olduğunu da gösterir. Platform hem reklam geliri hem de abonelik geliri elde etmek ister: Ödemeye hazır olanlara reklamsız pahalı paket, daha az ödemek isteyenlere reklamlı ucuz paket sunar. Netflix 2022'nin sonunda bazı ülkelerde reklamlı ve daha ucuz bir paket başlatarak bu yola girdi."}
]},
{n:"4.3",h:"Abonelik yorgunluğu",blocks:[
 {t:"p",html:"Abonelik modelinin yaygınlaşması yeni bir sorun getirdi: <b>abonelik yorgunluğu</b>. Müzik için ayrı, dizi ve film için ayrı, spor için ayrı, haber için ayrı ödeme yapmak kullanıcının bütçesini zorlar. Kullanıcı her ay hangi aboneliği iptal edeceğini düşünmeye başlar. Kanal kanal paket satan kablolu televizyondan kaçan izleyici, bu kez kendi “paketini” platform platform yeniden kurmuş olur."},
 {t:"choice",items:[
  {label:"Hibrit paket",title:"Reklamlı ama ucuz",body:"Platform aynı içeriği iki fiyattan sunar: reklamsız tam fiyat ve reklamlı indirimli fiyat. Fiyata duyarlı kullanıcı kaybedilmez, reklam geliri de geri kazanılır.",ex:"Reklam ve abonelik modelleri birleşir; kullanıcı hem parayla hem dikkatle öder."},
  {label:"Paketleme",title:"Birden çok hizmet tek fiyata",body:"Farklı hizmetler tek bir indirimli pakette toplanır: müzik, dizi, oyun ya da bulut depolama birlikte satılır. Kullanıcı için toplam fatura düşer, şirket için iptal olasılığı azalır.",ex:"Mobil operatörlerin tarifelerine dijital platform üyeliği eklemesi Türkiye'de yaygın bir örnektir."},
  {label:"Döngüsel abonelik",title:"Abone ol, izle, iptal et",body:"Kullanıcılar bir platforma bir dizi bitene kadar abone olur, sonra iptal edip başka bir platforma geçer. Bu davranış platformları abonelik kaybını (churn) azaltmak için içerik takvimini yaymaya iter.",ex:"Dizilerin bölümlerinin bir anda değil haftalık yayınlanması bu stratejinin bir parçası olabilir."}
 ]},
 {t:"p",html:"Kendi durumunuzu hesaplayın. Bir öğrencinin aylık bütçesinde birkaç küçük abonelik toplandığında hangi büyüklüğe ulaşıyor? Varsayılan değerleri kendi aboneliklerinizle değiştirin."},
 {t:"widget",name:"calc",opts:{title:"Abonelik yorgunluğu: aylık ve yıllık yük",inputs:[{id:"muzik",label:"Müzik aboneliği",min:0,max:300,step:5,value:60,unit:" TL"},{id:"dizi",label:"Dizi-film platformları (toplam)",min:0,max:1000,step:10,value:250,unit:" TL"},{id:"diger",label:"Spor, haber, oyun, bulut (toplam)",min:0,max:1000,step:10,value:150,unit:" TL"},{id:"butce",label:"Aylık harcanabilir bütçe",min:1000,max:40000,step:500,value:8000,unit:" TL"}],formula:"(function(){var t=muzik+dizi+diger;return t.toLocaleString('tr-TR')+' TL/ay · '+(t*12).toLocaleString('tr-TR')+' TL/yıl · bütçenin %'+(100*t/butce).toLocaleString('tr-TR',{maximumFractionDigits:1})+'\\'i';})()",result:"Toplam abonelik: {r}",note:"Rakamlar örnektir; güncel fiyatlar platforma ve döneme göre değişir. Tek tek küçük görünen ödemeler yıllık toplamda büyür. Bu fark edildiğinde kullanıcılar abonelikleri gözden geçirir; platformlar da tam bu noktada indirimli yıllık paket ve hibrit paket sunar."}}
]},
{n:"4.4",h:"Platform kapitalizmi nedir?",blocks:[
 {t:"def",html:"<b>Platform kapitalizmi</b>, dijital platformlar aracılığıyla veri toplayarak, işgücünü ve kaynakları koordine ederek değer yaratan ve kâr elde eden ekonomik modeldir. Platformlar çoğu zaman mal ya da hizmeti kendileri üretmez; kullanıcılar ile hizmet sağlayıcılar arasındaki etkileşimi kolaylaştıran altyapıyı sunar.",src:"Ders kitabı, s. 21. Kavram Nick Srnicek'in <i>Platform Capitalism</i> (2016) kitabıyla yaygınlaştı."},
 {t:"p",html:"Bir video paylaşım sitesi videoların neredeyse hiçbirini kendisi çekmez. Bir pazar yeri sattığı malların çoğunu üretmez. Değeri, milyonlarca üreticiyi milyonlarca tüketiciyle buluşturmasından ve bu buluşmanın ürettiği veriden gelir. Medya açısından bunun anlamı şudur: İçeriği üreten ile içeriğin kitleye ulaştığı yerin sahibi artık farklı aktörlerdir."},
 {t:"choice",items:[
  {label:"Fırsatlar",title:"Platformlar medyaya ne kazandırdı?",body:"<b>Küresel erişim:</b> Bir içerik üreticisi dünya çapında kitleye ulaşabilir. <b>Yeni gelir modelleri:</b> Reklam payı, abonelik, mikro ödeme, sponsorluk. <b>Veri tabanlı içerik:</b> Kullanıcı verisi neyin izlendiğini gösterir, kişiselleştirme bağlılığı artırır. <b>Düşük giriş engeli:</b> Bağımsız üreticiler pahalı dağıtım kanallarına muhtaç değildir.",ex:"Odasında video çeken biri, eskiden bir televizyon kanalı kurmayı gerektirecek kitleye ulaşabilir."},
  {label:"Zorluklar",title:"Platformlar medyadan ne aldı?",body:"<b>Platform bağımlılığı:</b> Bir algoritma değişikliği erişimi ve geliri bir gecede düşürebilir. <b>Veri mahremiyeti:</b> Sürekli veri toplama ihlal ve güvenlik riski yaratır. <b>Algoritma taraflılığı:</b> Neyin öne çıkacağına platform karar verir. <b>Gig ekonomisi:</b> Üreticiler sosyal güvenceden yoksun kalabilir. <b>Tekelleşme:</b> Dev platformlar küçük kuruluşların rekabetini zorlaştırır.",ex:"Trafiğinin çoğunu sosyal medyadan alan bir haber sitesi, akış algoritması değiştiğinde okurunun büyük kısmını kaybedebilir."}
 ]},
 {t:"widget",name:"classify",opts:{title:"Fırsat mı, zorluk mu?",cats:["Fırsat","Zorluk"],items:[
  ["Çanakkale'deki küçük bir müzik grubunun şarkısının yurt dışında dinlenmesi",0],
  ["Algoritma güncellemesinden sonra bir haber sitesinin trafiğinin yarıya inmesi",1],
  ["Bağımsız bir belgeselcinin dağıtımcı bulmadan filmini yayınlaması",0],
  ["Bir içerik üreticisinin hastalandığında hiçbir sosyal güvenceye sahip olmaması",1],
  ["İzlenme verisine bakarak hangi tür dizinin tuttuğunun anlaşılması",0],
  ["Kullanıcı verilerinin bir siber saldırıyla sızdırılması",1],
  ["Birkaç dev platformun reklam pazarının büyük kısmını alması",1],
  ["Bir podcast'in hem reklam hem de dinleyici bağışıyla gelir elde etmesi",0]
 ],note:"Aynı özellik iki yüzlü olabilir: Veri, içerik geliştirmede fırsattır ama mahremiyette risktir; geniş erişim fırsattır ama erişimin anahtarı platformun elindedir."}}
]},
{n:"4.5",h:"Veri odaklı üretim ve gizlilik gerilimi",blocks:[
 {t:"p",html:"Platformların gücü veriden gelir. Ne izlediğimiz, nerede durdurduğumuz, neyi yarıda bıraktığımız, hangi içeriğin üretileceğine kadar her kararı etkiler. Kitap bu gerilimi iki tarafıyla birlikte özetler."},
 {t:"table",head:["Kavram","Avantajlar","Dezavantajlar / riskler"],rows:[
  ["Veri odaklı üretim","Kişiselleştirilmiş ürün ve hizmet; rekabet avantajı; pazarlama ve reklam verimliliği; talep tahminiyle düşen maliyetler","Tercihlerin algoritmalara hapsolması ve çeşitliliğin azalması; platform bağımlılığı; kullanıcıda “gözetlenme” hissi"],
  ["Veri gizliliği riskleri","Farkındalık güvenlik yatırımlarını artırır; KVKK ve GDPR gibi düzenlemelerle daha şeffaf veri yönetimi","Verilerin izinsiz paylaşılması ya da çalınması; kimlik hırsızlığı ve dolandırıcılık; kullanıcı güveninin kaybı; hukuki ve mali yaptırımlar"]]},
 {t:"p",html:"Bu dengeyi kurmanın yolları da tartışılır: kullanıcıya verisi üzerinde daha çok kontrol vermek (açık rıza, silme hakkı), platformların algoritmalarını denetime açması ve rekabet hukukuyla tek bir platformun veri tekeli kurmasını engellemek. Avrupa Birliği'nin Dijital Pazarlar Yasası (DMA) ve Dijital Hizmetler Yasası (DSA) bu yönde atılmış adımlardır."}
]},
{n:"4.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Abonelik modeli","Kullanıcının içeriğe erişim için düzenli ücret ödediği, müşterinin doğrudan kullanıcı olduğu model."],
  ["Ödeme duvarı (paywall)","İçeriğin tamamına ya da bir kısmına yalnızca abonelerin erişebilmesini sağlayan engel."],
  ["Abonelik yorgunluğu","Çok sayıda ayrı aboneliğin kullanıcı bütçesini zorlaması ve iptal kararlarını tetiklemesi."],
  ["Hibrit model","Reklamlı ucuz paket ile reklamsız pahalı paketin birlikte sunulması."],
  ["Kayıp oranı (churn)","Belirli bir dönemde aboneliğini iptal edenlerin toplam abonelere oranı."],
  ["Platform kapitalizmi","Üretmek yerine etkileşimi aracılayıp veri toplayarak değer yaratan ekonomik model."],
  ["Platform bağımlılığı","Medya kuruluşunun dağıtım ve gelir için tek bir platformun kurallarına bağlı kalması."],
  ["Gig ekonomisi","Kısa süreli, proje bazlı ve güvencesi zayıf esnek çalışmaya dayalı ekonomi."]
 ]}
]},
{n:"4.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Abonelik modelinde şirketin asıl müşterisi kimdir?",o:["Reklamveren","Aboneliği ödeyen kullanıcı","İçeriği üreten yapımcı","Yayın lisansını veren kurum"],a:1,e:"Reklam modelinin aksine abonelikte gelir doğrudan kullanıcıdan gelir; şirketin amacı üyeliği sürdürmektir."},
  {q:"Gazetelerin dijitalde ödeme duvarına geçmesinin en önemli nedeni nedir?",o:["Kâğıt ve baskı fiyatlarının düşmesi","Okur başına dijital reklam gelirinin düşük kalması","Devletin ücretsiz haber yayınını yasaklaması","Okurların reklamlı içeriği daha çok sevmesi"],a:1,e:"İnternet reklam gelirinin büyük kısmı dev platformlara kaydı; okur başına reklam geliri basılı dönemin gerisinde kaldı."},
  {q:"5 milyon kullanıcı, kullanıcı başına aylık reklam geliri 8 TL. Ücretli olunca %10'u 150 TL'ye abone oluyor. Hangisi daha çok kazandırır?",o:["Reklam: 40 milyon TL","Abonelik: 75 milyon TL","İkisi eşit: 40 milyon TL","Reklam: 75 milyon TL"],a:1,e:"Reklam: 5 × 8 = 40 milyon TL. Abonelik: 5 × 0,10 × 150 = 75 milyon TL."},
  {q:"“Abonelik yorgunluğu” platformları hangi yöne itebilir?",o:["Tüm içeriği tamamen ücretsiz yapmaya","Reklamlı ama daha ucuz hibrit paketlere","Yalnızca basılı yayına dönmeye","Abonelik ücretlerini sürekli artırmaya"],a:1,e:"Bütçesi zorlanan kullanıcıyı kaybetmemek için platformlar reklam ve aboneliği birleştiren ucuz paketler sunar."},
  {q:"Platform kapitalizminin ayırt edici özelliği hangisidir?",o:["Platformun bütün içeriği kendisinin üretmesi","Etkileşimi aracılayıp veri toplayarak değer yaratması","Yalnızca devlet tarafından işletilmesi","Reklam geliri elde etmemesi"],a:1,e:"Platformlar çoğunlukla üretmez; üreticiyle tüketiciyi buluşturan altyapıyı sunar ve bu etkileşimden değer çıkarır."},
  {q:"Bir haber sitesinin trafiği, sosyal medya algoritmasının değişmesiyle yarıya iniyor. Bu hangi zorluğun örneğidir?",o:["Tekelleşme","Platform bağımlılığı","Gig ekonomisi","Ölçek ekonomisi"],a:1,e:"Dağıtım ve gelir bir platformun kurallarına bağlı olduğunda, o kurallardaki bir değişiklik kuruluşu doğrudan etkiler."},
  {q:"Aşağıdakilerden hangisi platform kapitalizminin medyaya sunduğu bir fırsattır?",o:["Algoritma taraflılığı","Düşük giriş engelleri","Veri ihlalleri","İş güvencesinin zayıflaması"],a:1,e:"Bağımsız üreticiler pahalı geleneksel dağıtım kanallarına ihtiyaç duymadan kitleye ulaşabilir."},
  {q:"Bir öğrencinin aylık abonelikleri 60, 250 ve 150 TL. Yıllık toplam ne kadardır?",o:["460 TL","4.600 TL","5.520 TL","5.020 TL"],a:2,e:"Aylık toplam 460 TL; 460 × 12 = 5.520 TL."},
  {q:"Veri odaklı üretimin kitapta sayılan bir dezavantajı hangisidir?",o:["Talep tahminiyle maliyetlerin düşmesi","Tüketici tercihlerinin algoritmalara hapsolması","Reklam verimliliğinin artması","Kişiselleştirilmiş hizmet sunulması"],a:1,e:"Algoritma yalnızca sevdiğiniz türü önerdikçe karşılaştığınız içerik çeşitliliği azalır; diğer seçenekler avantajdır."}
 ]}
]}
],
refs:[
 "Şahin, M. (2025). <i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications. s. 19–23.",
 "Srnicek, N. (2016). <i>Platform Capitalism</i>. Polity Press.",
 "Parker, G. G., Van Alstyne, M. W., Choudary, S. P. (2016). <i>Platform Revolution</i>. W. W. Norton.",
 "Kişisel Verileri Koruma Kurumu: <a href=\"https://www.kvkk.gov.tr\">kvkk.gov.tr</a>"
],
next:"Sonraki: Hafta 05 — Yaratıcı ekonomisi: YouTuber, influencer ve bedava oyunlar"
};
