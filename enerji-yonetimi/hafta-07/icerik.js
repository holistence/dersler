window.WEEK={
id:"en-07",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Elektrik piyasaları",week:7,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Piyasalar ve fiyatlama",
title:"Elektrik piyasaları: GÖP, GİP ve <em>marjinal</em> fiyatlama",
intro:"Bu hafta elektriğin toptan fiyatının nasıl oluştuğunu öğreneceksiniz: Gün Öncesi Piyasası'nda saatlik fiyatın belirlenmesi, Gün İçi Piyasası'nın işlevi, santrallerin maliyet sırasına (merit order) dizilmesi ve fiyatı son devreye giren santralin belirlemesi. Ardından sabit fiyatlı satış yapan tedarik şirketlerinin dalgalı piyasa fiyatından doğan riski nasıl yönettiğini hesaplayacaksınız. Okuma süresi yaklaşık 45 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması, sekmeli karşılaştırmalar ve 10 soruluk bir test var.",
goals:[
 "Gün Öncesi Piyasası ile Gün İçi Piyasası'nın işlevlerini, zamanlamasını ve risklerini karşılaştırabilirsiniz.",
 "Türkiye'de PTF ile SMF'yi ayırt edip hangi piyasada oluştuklarını açıklayabilirsiniz.",
 "Verilen santral maliyetleri ve talep düzeyiyle merit order üzerinden piyasa fiyatını ve santrallerin marjını hesaplayabilirsiniz.",
 "Yenilenebilir üretimin artmasının marjinal fiyatı nasıl etkilediğini (merit order etkisi) açıklayabilirsiniz.",
 "Bir tedarik şirketinin fiyat riskini hesaplayıp vadeli sözleşme, PPA, portföy çeşitlendirme ve talep yönetimi gibi korunma araçlarını eşleştirebilirsiniz."
],
sections:[
{n:"7.1",h:"Elektrik neden özel bir maldır?",blocks:[
 {t:"p",html:"Elektrik piyasası, birkaç özelliği nedeniyle başka hiçbir mal piyasasına benzemez. Elektrik büyük ölçekte ucuza <b>depolanamaz</b>; bu yüzden üretim her an tüketime eşit olmak zorundadır. Bu eşitlik bozulursa şebeke frekansı 50 Hz'den sapar, ciddi durumlarda kesintiler başlar. Talep kısa vadede fiyata çok az tepki verir (Hafta 02) ve gün içinde, mevsimler arasında büyük dalgalanmalar gösterir (Hafta 01)."},
 {t:"p",html:"Bu nedenle elektrik ticareti tek bir piyasada değil, <b>zamana göre katmanlanmış</b> bir piyasalar dizisinde yapılır: aylar, yıllar öncesinden yapılan ikili anlaşmalar ve vadeli işlemler, bir gün önceden yapılan saatlik ticaret, gün içinde yapılan düzeltmeler ve en sonda sistem işletmecisinin gerçek zamanlı dengelemesi. Ticaret teslim anına yaklaştıkça miktarlar küçülür, belirsizlik ve fiyat oynaklığı artar."},
 {t:"timeline",items:[
  ["Yıllar–aylar önce","İkili anlaşmalar ve vadeli işlemler","Uzun vadeli alım anlaşmaları (PPA), ikili anlaşmalar ve vadeli elektrik sözleşmeleri; fiyat riskini önceden sabitler."],
  ["Bir gün önce","Gün Öncesi Piyasası (GÖP)","Ertesi günün her saati için teklifler 12:30'a kadar verilir; saatlik fiyat arz-talep eşleşmesiyle belirlenir.",1],
  ["Teslimden 1 saat öncesine kadar","Gün İçi Piyasası (GİP)","Tahmin hataları ve beklenmedik değişiklikler sürekli ticaretle düzeltilir.",1],
  ["Gerçek zaman","Dengeleme Güç Piyasası (DGP)","Sistem işletmecisi (TEİAŞ) kalan dengesizliği santrallere yük alma ve yük atma talimatlarıyla giderir."],
  ["Sonrasında","Dengesizlik uzlaştırması","Programından sapan katılımcılar dengesizliklerinin bedelini öder ya da alır."]
 ]}
]},
{n:"7.2",h:"Gün Öncesi ve Gün İçi Piyasası",blocks:[
 {t:"choice",items:[
  {label:"GÖP",title:"Planlama piyasası",body:"Katılımcılar bir gün önceden ertesi günün her saati için alış ve satış tekliflerini verir. Teklifler saat 12:30'a kadar toplanır; ardından her saat için arz ve talep eşleştirilir ve tek bir saatlik fiyat oluşur. Bu fiyattan bütün eşleşen alıcılar alır, bütün eşleşen satıcılar satar.",ex:"Türkiye'de GÖP'te oluşan saatlik fiyata Piyasa Takas Fiyatı (PTF) denir. PTF, ikili anlaşmalardan YEKDEM ödemelerine kadar pek çok işlemde referans fiyattır."},
  {label:"GİP",title:"Düzeltme ve telafi piyasası",body:"Aynı gün içinde, teslim saatine yaklaşırken sürekli ticaret yapılır. Her işlem kendi fiyatıyla gerçekleşir; tek bir saatlik fiyat yoktur. Amaç, GÖP'ten sonra ortaya çıkan sapmaları, özellikle rüzgâr ve güneşin tahmin hatalarını ve santral arızalarını piyasa içinde telafi etmektir.",ex:"Türkiye'de ertesi güne ait GİP kontratları bir gün önce akşam saatlerinde açılır ve her saat için fiziksel teslimattan 60 dakika öncesine kadar işlem yapılabilir."},
  {label:"DGP ve SMF",title:"Son sözü sistem işletmecisi söyler",body:"GİP kapandıktan sonra kalan dengesizliği iletim sistemi işletmecisi giderir. Yük alma ve yük atma teklifleri arasından seçim yapar; bu talimatlardan oluşan saatlik fiyata Sistem Marjinal Fiyatı (SMF) denir.",ex:"Dikkat: PTF GÖP'ün, SMF ise Dengeleme Güç Piyasası'nın fiyatıdır. Programından sapan katılımcıların dengesizlik bedeli PTF ve SMF'ye göre hesaplanır."}
 ]},
 {t:"table",head:["Özellik","Gün Öncesi Piyasası (GÖP)","Gün İçi Piyasası (GİP)"],rows:[
  ["İşlev","Planlama","Dengeleme ve telafi"],
  ["Zaman","Ertesi gün için, bir gün önce","Aynı gün, teslimden kısa süre öncesine kadar"],
  ["Fiyat oluşumu","Her saat için tek fiyat (PTF)","Sürekli ticaret; her işlemin kendi fiyatı"],
  ["Hacim","Toptan ticaretin büyük bölümü","Daha küçük, düzeltme amaçlı hacim"],
  ["Risk","Daha düşük, planlanabilir","Daha yüksek, belirsiz"]]},
 {t:"p",html:"İki piyasa birbirini tamamlar: GÖP ertesi gün için güvenilir bir plan ve referans fiyat üretir, GİP ise planla gerçek arasındaki farkı kapatır. Yenilenebilir payı arttıkça tahmin hataları büyür ve GİP'in önemi artar. Bir rüzgâr santrali, ertesi günkü tahmini üretimini GÖP'te satar; sabah güncel tahmin daha düşük çıkarsa açığını GİP'te alarak kapatır, böylece daha pahalı olabilecek dengesizlik bedelinden kaçınır."}
]},
{n:"7.3",h:"Merit order ve marjinal fiyatlama",blocks:[
 {t:"def",html:"<b>Marjinal fiyatlama</b>: piyasa fiyatını, talebi karşılamak için devreye giren en pahalı (marjinal) santralin teklifi belirler; devreye giren bütün santraller bu fiyattan satar. Santrallerin tekliflerinin ucuzdan pahalıya sıralanmasına <b>merit order</b> denir.",src:"Bu yönteme tek fiyatlı ya da marjinal fiyatlı ihale (İngilizce pay-as-clear) da denir."},
 {t:"p",html:"Santraller tekliflerini genellikle <b>kısa dönem marjinal maliyetlerine</b>, yani bir MWh daha üretmenin ek maliyetine (çoğunlukla yakıt ve karbon) göre verir. Rüzgâr ve güneşin yakıtı olmadığı için marjinal maliyetleri sıfıra yakındır ve sıranın en başına yerleşirler. Hidroelektrik, nükleer ve linyit genellikle onları izler; ithal kömür ve doğal gaz santralleri sıranın sonuna doğrudur."},
 {t:"p",html:"Kitaptaki örnek: rüzgâr 0, hidroelektrik 20, doğal gaz 50 ve kömür 70 €/MWh maliyetle üretiyor; talep 1.000 MWh ve son 200 MWh'i kömür karşılıyor. Fiyat 70 €/MWh olur ve rüzgâr dahil bütün santraller bu fiyattan satar. Aşağıdaki hesaplayıcıda talebi değiştirerek hangi santralin marjinal olduğunu görün."},
 {t:"widget",name:"calc",opts:{title:"Merit order: talep fiyatı nasıl belirler?",inputs:[{id:"d",label:"Saatlik talep",min:100,max:1400,step:10,value:1000,unit:" MWh"},{id:"w",label:"Rüzgâr ve güneş üretimi (maliyet 0)",min:0,max:600,step:10,value:300,unit:" MWh"},{id:"g",label:"Doğal gaz maliyeti",min:30,max:150,step:5,value:50,unit:" €/MWh"}],formula:"(function(){var s=[['rüzgâr-güneş',w,0],['hidroelektrik',300,20],['doğal gaz',300,g],['kömür',400,70]];s.sort(function(x,y){return x[2]-y[2]});var top=0;for(var i=0;i<s.length;i++){top+=s[i][1];if(top>=d&&s[i][1]>0){var p=s[i][2];return p+' €/MWh · marjinal santral: '+s[i][0]+' · toplam ödeme '+(p*d).toLocaleString('tr-TR')+' € · rüzgâr-güneşin marjı '+p+' €/MWh';}}return 'talep toplam kapasiteyi ('+top.toLocaleString('tr-TR')+' MWh) aşıyor: arz yetersiz, kesinti riski';})()",result:"Piyasa fiyatı: {r}",note:"Kapasiteler: hidroelektrik 300, doğal gaz 300, kömür 400 MWh; rüzgâr-güneş sürgüyle değişir. Varsayılan durumda talebin son kısmını kömür karşılar ve fiyat 70 €/MWh olur (kitaptaki örnek). Rüzgâr-güneşi 300'den 500'e çıkarın: kömüre gerek kalmaz, fiyat doğal gazın maliyetine iner. Bu, yenilenebilirin fiyatı düşüren “merit order etkisi”dir. Ardından talebi 1.100'e, doğal gaz maliyetini 120'ye çıkarın: sıra değişir, gaz en sona geçer ve marjinal santral olur; 2022'de Avrupa'da yaşandığı gibi gaz fiyatı bütün elektriğin fiyatını yukarı çeker."}},
 {t:"choice",items:[
  {label:"Tüketici açısından",title:"Önce en ucuz kaynaklar",body:"Merit order, talebi her saat mümkün olan en ucuz santral bileşimiyle karşılar; bu, toplam üretim maliyetini en aza indirir. Fiyatın şeffaf bir kuralla oluşması dış müdahaleyi sınırlar.",ex:"Eksisi: gaz ve kömür fiyatları yükseldiğinde ucuz kaynaklardan gelen elektrik de marjinal fiyattan ödenir; yenilenebilir payı düşük sistemlerde faturalar sert yükselebilir."},
  {label:"Üretici açısından",title:"Ucuz santralin marjı yatırımı geri öder",body:"Marjinal fiyat ile santralin kendi marjinal maliyeti arasındaki fark (inframarjinal rant), santralin sabit maliyetlerini ve yatırımını geri ödemesini sağlar. Düşük maliyetli üretim kârlı olur; bu, yeni ve verimli yatırımları teşvik eder.",ex:"Rüzgâr santrali neredeyse sıfır marjinal maliyetle üretir ama yatırımını, fiyat ile bu sıfır maliyet arasındaki farkla geri öder."},
  {label:"Neden “teklif ettiğin fiyattan” değil?",title:"Teklif fiyatından ödeme (pay-as-bid)",body:"Her santrale kendi teklif fiyatı ödenseydi santraller maliyetlerini değil, tahmin ettikleri son fiyatı teklif etmeye başlardı. Sonuçta fiyat çok değişmez, ama verimli santrallerin devreye girme sırası tahmin hatalarıyla bozulabilir.",ex:"Kitap bu konuyu araştırma sorusu olarak bırakıyor; iki yöntemin karşılaştırması piyasa tasarımının klasik tartışmalarındandır."}
 ]}
]},
{n:"7.4",h:"Yenilenebilir üretim ve fiyat profili",blocks:[
 {t:"p",html:"Merit order etkisi gün içindeki fiyat profilini de değiştirir. Güneşin bol olduğu öğle saatlerinde sıfır maliyetli üretim artar, pahalı santraller sıranın dışında kalır ve fiyat düşer. Güneş battığında talep hâlâ yüksekken güneş üretimi biter, gaz santralleri devreye girer ve fiyat yükselir. Bu yüzden güneşi bol sistemlerde öğle ile akşam arasındaki fiyat farkı büyür; depolamanın (Hafta 06) arbitraj geliri tam da bu farktan doğar."},
 {t:"p",html:"Bu durum yenilenebilir yatırımcıları için bir paradoks yaratır: aynı kaynaktan ne kadar çok kurulursa, o kaynağın ürettiği saatlerdeki fiyat o kadar düşer. Buna <b>yamyamlaşma</b> (cannibalization) etkisi denir. Destek mekanizmaları, uzun vadeli alım anlaşmaları ve depolama bu riski azaltmanın yollarıdır."},
 {t:"widget",name:"classify",opts:{title:"Bu gelişme GÖP fiyatını (PTF) nasıl etkiler? (diğer her şey sabitken)",cats:["Yükseltir","Düşürür"],items:[
  ["Rüzgârlı ve güneşli bir bahar öğlesi",1],
  ["Uluslararası doğal gaz fiyatının sert yükselmesi",0],
  ["Kurak bir yıl nedeniyle barajlarda suyun azalması",0],
  ["Büyük bir nükleer ünitenin devreye girmesi",1],
  ["Yaz sıcak dalgasında klima talebinin artması",0],
  ["Karbon fiyatının yükselmesi",0],
  ["Bayram tatilinde sanayi talebinin düşmesi",1],
  ["Büyük bir ithal kömür santralinin plansız arızası",0]
 ],note:"Fiyatı yükselten gelişmeler ya talebi artırır ya ucuz arzı azaltır ya da marjinal santralin maliyetini yükseltir. Fiyatı düşürenler sıfıra yakın marjinal maliyetli arzı artırır ya da talebi azaltarak pahalı santralleri sıranın dışına iter."}}
]},
{n:"7.5",h:"Tedarik şirketinin fiyat riski",blocks:[
 {t:"p",html:"Elektrik tedarik şirketleri müşterilerine çoğu zaman belirli bir dönem için <b>sabit fiyatlı</b> sözleşme sunar. Müşteri faturasını öngörebilir; ama tedarikçi elektriği dalgalı fiyatlı GÖP ve GİP'ten alıyorsa piyasa fiyatı yükseldiğinde zarar eder. Bu, sabit fiyattan satıp değişken fiyattan almanın doğal sonucudur."},
 {t:"widget",name:"calc",opts:{title:"Sabit fiyatla satan tedarikçinin kârı",inputs:[{id:"m",label:"Aylık satış",min:1000,max:100000,step:1000,value:20000,unit:" MWh"},{id:"s",label:"Müşteriye sabit satış fiyatı",min:1000,max:6000,step:50,value:3000,unit:" TL/MWh"},{id:"p",label:"Gerçekleşen ortalama piyasa fiyatı",min:1000,max:6000,step:50,value:3400,unit:" TL/MWh"},{id:"h",label:"Vadeli sözleşmeyle önceden sabitlenen pay",min:0,max:100,step:5,value:0,unit:"%"},{id:"v",label:"Vadeli sözleşme fiyatı",min:1000,max:6000,step:50,value:2700,unit:" TL/MWh"}],formula:"(function(){var k=m*h/100,a=m-k;var maliyet=k*v+a*p;var kar=m*s-maliyet;var g=function(x){return Math.round(x).toLocaleString('tr-TR')};return g(Math.abs(kar))+' TL '+(kar>=0?'kâr':'zarar')+' · ortalama alış maliyeti '+g(maliyet/m)+' TL/MWh';})()",result:"Aylık sonuç: {r}",note:"Değerler örnektir. Korunmasız (pay %0) bir tedarikçi, piyasa fiyatı satış fiyatını aştığında zarar eder. Vadeli pay %80 yapın: piyasa fiyatı ne olursa olsun sonuç büyük ölçüde sabitlenir. Ardından piyasa fiyatını 2.000 TL'ye indirin: korunan tedarikçi düşük piyasa fiyatından yararlanamaz. Hedging kârı en üst düzeye çıkarmak için değil, sonucu öngörülebilir kılmak için yapılır."}},
 {t:"p",html:"Tedarik şirketlerinin fiyat riskini yönetmek için kullandığı başlıca araçlar şunlardır. Bir araç seçerek nasıl çalıştığını okuyun."},
 {t:"choice",items:[
  {label:"Vadeli ve opsiyon",title:"Türev ürünlerle fiyatı sabitlemek",body:"Vadeli işlem (forward, futures) sözleşmeleriyle gelecekteki bir dönem için bugünden sabit fiyatlı alım yapılır. Opsiyonlar ise belirli bir fiyattan alma hakkı verir: fiyat yükselirse hak kullanılır, düşerse kullanılmaz; bu esnekliğin bedeli opsiyon primidir.",ex:"Türkiye'de elektrik vadeli işlemleri Borsa İstanbul'un Vadeli İşlem ve Opsiyon Piyasası'nda (VİOP) ve EPİAŞ'ın Vadeli Elektrik Piyasası'nda (VEP) işlem görür."},
  {label:"PPA ve ikili anlaşmalar",title:"Üreticiyle uzun vadeli sabit fiyat",body:"Özellikle yenilenebilir santrallerle yapılan uzun vadeli alım anlaşmaları (PPA), üreticiye finansman güvencesi, tedarikçiye ise fiyat istikrarı sağlar. Fiyat çoğu zaman yıllarca sabittir ya da belirli bir formülle güncellenir.",ex:"Hafta 09'da PPA'yı proje finansmanı açısından ayrıntılı ele alacağız."},
  {label:"Portföy çeşitlendirme",title:"Tek bir kaynağa bağlı kalmamak",body:"Elektriği farklı kaynaklardan (rüzgâr, güneş, hidro, doğal gaz) ve farklı piyasalardan (ikili anlaşma, GÖP, GİP, vadeli) temin ederek riski dağıtmak. Bütün alımı spot piyasadan yapmak en riskli stratejidir.",ex:"Farklı kaynakların üretim profilleri birbirini dengeleyebilir: rüzgâr çoğu zaman gece ve kışın, güneş gündüz ve yazın güçlüdür."},
  {label:"Talep yönetimi",title:"Pahalı saatte daha az tüketmek",body:"Müşteri tarafında tüketim pahalı saatlerden ucuz saatlere kaydırılır ya da pahalı saatlerde azaltılır. Akıllı sayaçlar, zamana bağlı tarifeler ve kesintiye razı müşterilerle yapılan anlaşmalar bu yöntemin araçlarıdır.",ex:"Hafta 11'de zamana bağlı tarifeler ve talep tarafı katılımıyla ayrıntılı göreceğiz."}
 ]}
]},
{n:"7.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["GÖP","Ertesi günün her saati için bir gün önceden yapılan, tek saatlik fiyatlı elektrik ticareti."],
  ["PTF","Piyasa Takas Fiyatı: Türkiye'de GÖP'te oluşan saatlik elektrik fiyatı."],
  ["GİP","Aynı gün içinde, teslimden kısa süre öncesine kadar sürekli ticaret; tahmin hatalarını düzeltir."],
  ["SMF","Sistem Marjinal Fiyatı: Dengeleme Güç Piyasası'nda yük alma-atma talimatlarından oluşan fiyat."],
  ["Merit order","Santral tekliflerinin marjinal maliyete göre ucuzdan pahalıya sıralanması."],
  ["Marjinal santral","Talebi karşılamak için devreye giren son ve en pahalı santral; fiyatı belirler."],
  ["İnframarjinal rant","Marjinal fiyat ile ucuz santralin kendi maliyeti arasındaki fark; yatırımı geri öder."],
  ["Merit order etkisi","Sıfır maliyetli yenilenebilir üretimin artmasıyla piyasa fiyatının düşmesi."],
  ["Hedging","Vadeli sözleşme, opsiyon ya da PPA ile gelecekteki fiyatı bugünden sabitleyerek riski azaltma."],
  ["Dengesizlik","Katılımcının gerçek üretim ya da tüketiminin piyasadaki programından sapması."]
 ]}
]},
{n:"7.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Türkiye'de Gün Öncesi Piyasası'nda oluşan saatlik fiyatın adı nedir?",o:["Sistem Marjinal Fiyatı (SMF)","Piyasa Takas Fiyatı (PTF)","YEKDEM birim fiyatı","Ağırlıklı ortalama GİP fiyatı"],a:1,e:"GÖP'ün saatlik fiyatı PTF'dir. SMF, Dengeleme Güç Piyasası'nda sistem işletmecisinin talimatlarından oluşur."},
  {q:"Bir rüzgâr santralinin sabah güncellenen tahmini, GÖP'te sattığı miktardan düşük çıktı. En uygun hamlesi nedir?",o:["Hiçbir şey yapmamak","Açığını GİP'te satın almak","GÖP teklifini geri çekmek","Üretimi artırmak için yakıt almak"],a:1,e:"GİP, GÖP'ten sonra ortaya çıkan sapmaları teslimden önce düzeltmek içindir; aksi hâlde dengesizlik bedeli ödenir."},
  {q:"Marjinal fiyatlamada piyasa fiyatını ne belirler?",o:["Bütün santrallerin ortalama maliyeti","Talebi karşılayan en pahalı santralin teklifi","En ucuz santralin maliyeti","Düzenleyici kurumun ilan ettiği tarife"],a:1,e:"Merit order'a göre devreye giren son (marjinal) santralin teklifi fiyatı belirler ve bütün santraller bu fiyattan satar."},
  {q:"Rüzgâr 0, hidro 20, gaz 50, kömür 70 €/MWh maliyetli; talep yalnızca rüzgâr, hidro ve gazla karşılanıyor. Fiyat ve rüzgârın MWh başına marjı nedir?",o:["70 € ve 70 €","50 € ve 50 €","50 € ve 0 €","20 € ve 20 €"],a:1,e:"Marjinal santral gazdır, fiyat 50 €/MWh olur. Rüzgâr maliyeti sıfır olduğu için MWh başına 50 € marj elde eder."},
  {q:"Rüzgâr ve güneş üretiminin artmasının piyasa fiyatını düşürmesine ne ad verilir?",o:["Yük faktörü etkisi","Merit order etkisi","Take-or-pay etkisi","Gelir etkisi"],a:1,e:"Sıfıra yakın marjinal maliyetli arz sıranın başına girer, pahalı santralleri sıranın dışına iter ve marjinal fiyatı düşürür."},
  {q:"Doğal gaz fiyatlarının sert yükseldiği bir dönemde, yenilenebilir payı düşük sistemlerde elektrik fiyatlarına ne olur?",o:["Değişmez, çünkü fiyatı yenilenebilirler belirler","Gaz çoğu saatte marjinal olduğu için fiyatlar yükselir","Fiyatlar düşer, çünkü talep artar","Yalnızca gaz santrallerinin satış fiyatı yükselir"],a:1,e:"Marjinal santral gaz olduğunda gazın maliyeti bütün elektriğin fiyatını belirler; ucuz kaynaklardan gelen elektrik de bu fiyattan ödenir."},
  {q:"Aşağıdakilerden hangisi GÖP fiyatını düşürür (diğer her şey sabitken)?",o:["Sıcak dalgasında klima talebinin artması","Kuraklık nedeniyle barajlarda suyun azalması","Bayram tatilinde sanayi talebinin düşmesi","Karbon fiyatının yükselmesi"],a:2,e:"Talep azalınca pahalı santraller sıranın dışında kalır ve marjinal fiyat düşer."},
  {q:"Bir tedarikçi 20.000 MWh'i 3.000 TL/MWh sabit fiyatla satıyor ve tamamını 3.400 TL/MWh ortalama piyasa fiyatından alıyor. Sonuç nedir?",o:["8 milyon TL kâr","8 milyon TL zarar","400 bin TL zarar","Sonuç sıfırdır"],a:1,e:"MWh başına 400 TL zarar × 20.000 MWh = 8.000.000 TL zarar."},
  {q:"Aynı tedarikçi satışının %80'ini önceden 2.700 TL/MWh'den vadeli sözleşmeyle aldıysa, kalanı 3.400 TL'den alındığında sonucu ne olur?",o:["3,2 milyon TL kâr","8 milyon TL zarar","Sıfır","1,6 milyon TL zarar"],a:0,e:"16.000 × 2.700 + 4.000 × 3.400 = 56,8 milyon TL maliyet; gelir 60 milyon TL. Sonuç 3,2 milyon TL kâr."},
  {q:"Opsiyon sözleşmesini vadeli sözleşmeden ayıran temel özellik nedir?",o:["Opsiyonun hiçbir maliyeti yoktur","Opsiyon alma hakkı verir, zorunluluk getirmez","Opsiyon fiyatı sabitlemez","Opsiyon yalnızca üreticiler için geçerlidir"],a:1,e:"Opsiyon sahibi fiyat yükselirse hakkını kullanır, düşerse kullanmaz; bu esnekliğin bedeli opsiyon primidir."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 4, s. 58–64.",
 "Enerji Piyasaları İşletme A.Ş. (EPİAŞ) — Şeffaflık Platformu: <a href=\"https://seffaflik.epias.com.tr\">seffaflik.epias.com.tr</a>",
 "Enerji Piyasası Düzenleme Kurumu (EPDK): <a href=\"https://www.epdk.gov.tr\">epdk.gov.tr</a>",
 "Kirschen, D. S., Strbac, G. (2018). <i>Fundamentals of Power System Economics</i> (2. bs.). Wiley."
],
next:"Sonraki: Hafta 08 — Gaz fiyatlaması, yan hizmetler, likidite ve sınır ötesi ticaret"
};
