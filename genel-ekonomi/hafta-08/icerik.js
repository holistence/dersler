window.WEEK={
id:"ge-08",code:"GE",course:"Genel Ekonomi",short:"Devlet ve piyasa",week:8,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Mikroiktisat",
title:"Devlet müdahaleleri ve <em>piyasa başarısızlıkları</em>",
intro:"Bu hafta devletin piyasaya neden ve nasıl müdahale ettiğini öğreneceksiniz: tavan ve taban fiyat, vergi ve sübvansiyon, kota ve stok politikası. Ardından piyasanın kendi başına iyi sonuç veremediği durumları, yani kamu mallarını, dışsallıkları, ortak kaynakları ve bilgi asimetrisini; son olarak da bu sorunlara hangi aracın uygun olduğunu inceleyeceğiz. Okuma süresi yaklaşık 45 dakika; sayfada üç hesaplayıcı, bir arz-talep grafiği, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Tavan ve taban fiyatın kıtlık ve fazlalık yaratma mekanizmasını hesapla gösterebilirsiniz.",
 "Vergi yükünün alıcı ile satıcı arasında esnekliklere göre nasıl paylaşıldığını açıklayabilirsiniz.",
 "Kamu malı, ortak kaynak, dışsallık ve bilgi asimetrisini örneklerle ayırt edebilirsiniz.",
 "Ters seçim ile ahlaki tehlikeyi ve bunlara karşı geliştirilen araçları karşılaştırabilirsiniz.",
 "Bir piyasa başarısızlığına bağlama göre Pigou vergisi, Coase pazarlığı veya doğrudan düzenlemeden hangisinin uygun olduğunu gerekçelendirebilirsiniz."
],
sections:[
{n:"8.1",h:"Devlet neden müdahale eder?",blocks:[
 {t:"p",html:"Hafta 06'da rekabetçi dengenin toplam refahı (tüketici + üretici rantı) en büyük kılan nokta olduğunu gördük. Peki devlet neden bu dengeye karışır? Kitap üç gerekçe sayar: <b>piyasa başarısızlıkları</b> (piyasanın etkin sonuç veremediği durumlar), <b>gelir dağılımındaki adaletsizlikler</b> ve belirli <b>sosyal hedefler</b> (temel ihtiyaçlara erişim, gıda güvenliği, stratejik üretim)."},
 {t:"p",html:"Müdahaleler doğrudan (fiyatı ya da miktarı belirlemek) veya dolaylı (vergi ve sübvansiyonla teşvikleri değiştirmek) olabilir. Hangisi seçilirse seçilsin, temel ilke aynıdır: “İnsanlar teşviklere tepki verir.” Bir müdahalenin sonucunu tahmin etmek, insanların yeni teşviklere nasıl tepki vereceğini tahmin etmektir."},
 {t:"box",lbl:"Adalet–etkinlik gerilimi",html:"Politika yapıcılar çoğu zaman iki hedef arasında bir takasla karşılaşır. <b>Etkinlik</b>, toplam refahın olabildiğince büyütülmesidir; <b>eşitlik</b>, bu refahın nasıl paylaşıldığıdır. Vergiler etkinliği azaltabilir ama dağılımı düzeltebilir; fiyat kontrolleri kiracıları korurken kıtlık yaratabilir. Kritik olan bu takası kabul edip en az etkinlik kaybıyla en çok eşitlik kazancı sağlayan aracı seçmektir. Örneğin hedefli bir nakit transferi, geniş kapsamlı bir fiyat sübvansiyonuna göre çok daha az refah kaybıyla aynı amaca hizmet edebilir."}
]},
{n:"8.2",h:"Fiyat kontrolleri: tavan ve taban",blocks:[
 {t:"choice",items:[
  {label:"Tavan fiyat",title:"Denge fiyatının altına konan yasal üst sınır",body:"Amaç tüketiciyi, özellikle temel ihtiyaç mallarında (ekmek, enerji, ilaç, kira) korumaktır. Düşük fiyatta talep artar, üretici ise kârlılık düştüğü için üretimi kısar. Sonuç <b>kıtlıktır</b>: kuyruklar, karne uygulamaları, kalite düşüşü, kayırmacılık ve karaborsa.",ex:"Örnekler: kira kontrolleri, savaş dönemi fiyat kontrolleri. Kira sınırının uygulandığı şehirlerde yasal sınırın üzerinde “elden ödeme” talep edilebilir."},
  {label:"Taban fiyat",title:"Denge fiyatının üstüne konan yasal alt sınır",body:"Amaç üreticiyi korumak, gelirini güvenceye almaktır. Yüksek fiyatta üretici daha çok üretir, tüketici daha az alır. Sonuç <b>fazlalıktır</b> (stok fazlası). Devlet çoğu zaman fazlayı satın alarak piyasadan çeker; bu da bütçeye yük olur.",ex:"Örnekler: buğday ve şeker pancarı gibi ürünlerde destekleme alımları. Kitap asgari ücreti de emek piyasasında bir taban fiyat örneği olarak gösterir."},
  {label:"Ortak sonuç",title:"Fiyat sinyali bozulur",body:"Fiyat yapay olarak baskılandığında malı elde etmenin gerçek maliyeti yasal fiyatın üzerine çıkar: kuyrukta geçen zaman, aracıya ödenen fark, karaborsa fiyatı. Mal, en çok ihtiyacı olana değil, en şanslı olana gidebilir.",ex:"Kitabın önerisi: mümkünse doğrudan fiyat sınırı yerine hedefli nakit transferi veya gelir desteği."}
 ]},
 {t:"p",html:"Hafta 06'daki örnek piyasaya dönelim: talep P = 12 − 0,4Q, arz P = 0,4Q, denge 6 TL ve 15 birim. Devletin belirleyeceği fiyatı seçin."},
 {t:"widget",name:"calc",opts:{title:"Fiyat kontrolü uygulayın",inputs:[{id:"p",label:"Yasal fiyat",min:2,max:10,step:0.5,value:4,unit:" TL"}],formula:"(function(){var qd=(12-p)/0.4,qs=p/0.4,g=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};if(p<6)return 'tavan fiyat: talep '+g(qd)+', arz '+g(qs)+' → '+g(qd-qs)+' birim kıtlık; satılan miktar '+g(qs)+' birime düşer, refah kaybı '+g(0.5*(15-qs)*(12-0.4*qs-0.4*qs))+' TL';if(p>6)return 'taban fiyat: talep '+g(qd)+', arz '+g(qs)+' → '+g(qs-qd)+' birim fazla; devlet fazlayı alırsa maliyeti '+g((qs-qd)*p)+' TL';return 'denge fiyatı: müdahale bağlayıcı değil';})()",result:"{r}",note:"Tavan fiyat 4 TL'de talep 20, arz 10 birimdir: 10 birim kıtlık. Satılan miktar 15'ten 10'a düşer; gerçekleşmeyen alışverişlerin kaybı (ölü ağırlık kaybı) 10 TL'dir. Fiyatı 6 TL'nin üzerine çıkarıp taban fiyatı deneyin."}}
]},
{n:"8.3",h:"Vergiler, sübvansiyonlar ve vergi yükü",blocks:[
 {t:"p",html:"Bir mala konan <b>vergi</b> üretim maliyetini artırır ve arz eğrisini sola (yukarı) kaydırır. Denge fiyatı yükselir, denge miktarı düşer. Gerçekleşmeyen alışverişler nedeniyle tüketici ve üretici rantının toplamı vergi gelirinden fazla azalır; bu ek kayba <b>ölü ağırlık kaybı</b> denir. ÖTV, sigara ve alkol üzerindeki “günah vergileri” bu tür dolaylı müdahalelerdir. <b>Sübvansiyon</b> ise ters yönde işler: arzı sağa kaydırır, fiyatı düşürür, miktarı artırır. Güneş paneli kurulum destekleri ve çiftçilere gübre desteği örnektir."},
 {t:"widget",name:"supplyDemand",opts:{title:"Vergi ve sübvansiyon",a:100,b:1,c:10,d:1,note:"Arz sürgüsünü sola (negatif) çekin: birim başına vergi. Denge fiyatı yükselir, miktar düşer. Arz sürgüsü −20 iken fiyat 55'ten 65'e çıkar: 20 TL'lik verginin yarısını alıcı öder, çünkü bu örnekte talep ve arz eğimleri eşittir. Sağa (pozitif) çekin: sübvansiyon."}},
 {t:"p",html:"Verginin yasal olarak kimden alındığı ile <b>yükünü kimin taşıdığı</b> farklı şeylerdir. Vergi, alıcının ödediği fiyat ile satıcının eline geçen fiyat arasına bir kama sokar. Kitabın özlü ifadesiyle: “Verginin adresi yasa, yükün adresi esnekliktir.” Genel kural: <b>görece daha inelastik olan taraf vergi yükünün daha büyük kısmını taşır</b>, çünkü fiyat değişimine tepki verip piyasadan çekilme imkânı azdır."},
 {t:"table",head:["Durum","Vergi yükü kime yansır?","Örnek"],rows:[
  ["Talep inelastik, arz esnek","Büyük kısmı alıcılara","Benzin, sigara, temel ilaçlar"],
  ["Arz inelastik, talep esnek","Büyük kısmı satıcılara","Kısa dönemde konut arzı"],
  ["İki taraf da esnek","Görece eşit paylaşılır","Lüks tüketim malları"]]},
 {t:"widget",name:"calc",opts:{title:"Vergi yükünü kim taşır?",inputs:[{id:"t",label:"Birim başına vergi",min:1,max:50,step:1,value:10,unit:" TL"},{id:"ed",label:"Talep esnekliği (mutlak)",min:0.1,max:3,step:0.1,value:0.4},{id:"es",label:"Arz esnekliği",min:0.1,max:3,step:0.1,value:1.6}],formula:"(function(){var b=es/(es+ed),g=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'alıcı '+g(t*b)+' TL (%'+g(100*b)+'), satıcı '+g(t*(1-b))+' TL (%'+g(100*(1-b))+')';})()",result:"Verginin paylaşımı: {r}",note:"Yaklaşık formül: alıcı payı = arz esnekliği ÷ (arz esnekliği + talep esnekliği). Akaryakıt gibi talebi inelastik bir malda verginin büyük kısmı pompa fiyatına yansır."}}
]},
{n:"8.4",h:"Kotalar ve stok politikası",blocks:[
 {t:"p",html:"<b>Kota</b>, bir malın ithalatına veya üretimine getirilen miktar sınırıdır. İthalat kotası yerli üreticiyi yabancı rekabetten korur; balık avı kotası doğal kaynağın sürdürülebilirliğini hedefler. Arz sınırlandığı için fiyat yükselir: yerli üretici kazanır, tüketici daha yüksek fiyattan daha az mal alır ve tüketici rantı azalır."},
 {t:"widget",name:"calc",opts:{title:"Kota uygulaması",inputs:[{id:"k",label:"İzin verilen en fazla miktar",min:20,max:60,step:5,value:40,unit:" birim"}],formula:"k>=55?'kota serbest dengenin (55 birim, 22,5 TL) üzerinde: bağlayıcı değil':(function(){var p=50-0.5*k,g=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'fiyat '+g(p)+' TL (serbest piyasada 22,5 TL), satılan '+k+' birim · tüketici rantı '+g(0.5*(50-p)*k)+' TL (serbest piyasada 756,3 TL)';})()",result:"{r}",note:"Talep P = 50 − 0,5Q; kitaptaki Şekil 28'deki değerlerle (serbest denge yaklaşık 22,5 TL ve 55 birim, kota 40 birimde fiyat 30 TL) tutarlıdır."}},
 {t:"p",html:"Tarım ürünleri hava koşullarına bağlı, üretim süreci uzun ve talebi inelastik olduğu için fiyatları çok dalgalanır. <b>Tampon stok politikasında</b> devlet veya bir kamu kurumu bol ve ucuz dönemde (hasatta) ürün alıp stoklar, kıt ve pahalı dönemde stoğu piyasaya sürer."},
 {t:"table",head:["Artıları","Eksileri"],rows:[
  ["Üretici gelirini istikrara kavuşturur","Depolama, sigorta, fire ve finansman maliyeti yüksektir"],
  ["Tüketici fiyatlarındaki sıçramaları yumuşatır","Alım-satım zamanlaması yanlış olursa zarar veya etkisizlik"],
  ["Kuraklık, savaş, salgın gibi dönemler için stratejik rezerv oluşturur","Çiftçi piyasa talebine değil devlet alımına göre üretim yapmaya yönelebilir"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de Toprak Mahsulleri Ofisi (TMO) hububatta alım fiyatı açıklayıp stok tutarak, Fındık Tarım Satış Kooperatifleri Birliği (FİSKOBİRLİK) ise uzun yıllar fındıkta destekleme alımı yaparak bu tür politikaların araçları oldu."},
 {t:"p",html:"<b>Endeksleme</b> de bir otomatik ayarlama müdahalesidir: ücret, kira veya sözleşme bedellerinin TÜFE gibi bir göstergeye bağlanması. Alım gücünü korur ve sürekli pazarlık ihtiyacını azaltır; ama geçici bir enflasyon şokunu kalıcı hâle getirebilir ve sistemi katılaştırabilir."}
]},
{n:"8.5",h:"Kamu malları, dışsallıklar ve ortak kaynaklar",blocks:[
 {t:"p",html:"Mallar iki soruyla sınıflandırılır. <b>Rakip mi?</b> Bir kişinin tüketimi başkasınınkini azaltıyor mu? <b>Dışlanabilir mi?</b> Ödemeyen kişi tüketimden mahrum bırakılabilir mi?"},
 {t:"table",head:["","Dışlanabilir","Dışlanamaz"],rows:[
  ["Rakip","<b>Özel mal</b>: ekmek, giysi","<b>Ortak havuz kaynağı</b>: balık stokları, mera, yeraltı suyu"],
  ["Rakip değil","<b>Kulüp malı</b>: ücretli dijital yayın, paralı yol","<b>Kamu malı</b>: ulusal savunma, sokak aydınlatması, deniz feneri"]]},
 {t:"p",html:"<b>Kamu mallarında</b> sorun <b>bedavacılıktır</b> (free-riding): herkes başkasının ödemesini bekler, çünkü mal sağlandığında ödemeyen de yararlanır. Özel sektör bu malları yeterince üretmez; devlet vergiyle finanse ederek sunar. Gönüllü bağış kampanyaları, sosyal norm vurgusu, koşullu bağış (“1.000 kişi katılırsa proje başlar”) ve teknolojiyle dışlanabilir kılma (üyelik duvarı) diğer çözümlerdir."},
 {t:"p",html:"<b>Ortak havuz kaynaklarında</b> sorun <b>ortakların trajedisidir</b>: her kullanıcı kaynağı kullanmanın getirisinin tamamını alır, tükenmenin maliyeti ise herkese paylaştırılır. Herkes için kullanmaya devam etmek rasyoneldir, ta ki kaynak tükenene kadar. Nobel ödüllü Elinor Ostrom, toplulukların bu sorunu devlete ya da özelleştirmeye gerek kalmadan çözebildiğini gösterdi: net sınırlar, yerel koşullara uygun kurallar, kullanıcıların kural yapımına katılımı, izleme, kademeli yaptırımlar, düşük maliyetli çatışma çözümü ve yerel özerkliğin tanınması."},
 {t:"def",html:"<b>Dışsallık</b>, bir faaliyetin üçüncü kişiler üzerinde piyasa dışında yarattığı olumlu ya da olumsuz etkidir.",src:"Olumsuz dışsallıkta sosyal maliyet özel maliyetten yüksektir (fabrika kirliliği, trafik gürültüsü, sigara dumanı); piyasa çok fazla üretir. Olumlu dışsallıkta sosyal fayda özel faydadan yüksektir (aşı, eğitim, arıcılığın tozlaşmaya katkısı); piyasa çok az üretir."},
 {t:"p",html:"Olumsuz dışsallığa karşı klasik araç <b>Pigou vergisidir</b>: kirletenin maliyetini toplumsal maliyete eşitleyen bir vergi. Olumlu dışsallık ise sübvansiyon, doğrudan üretim ya da patent gibi araçlarla teşvik edilir. Dünyadaki en büyük olumsuz dışsallık iklim değişikliğidir; buna karşı geliştirilen <b>karbon fiyatlaması</b> iki biçimde uygulanır: ton başına sabit bir <b>karbon vergisi</b> (maliyet öngörülebilir, ama azaltım miktarı belirsiz) veya toplam emisyona tavan koyup izinlerin alınıp satıldığı <b>emisyon ticaret sistemi</b> (çevresel hedef garanti, ama izin fiyatı dalgalı)."},
 {t:"widget",name:"classify",opts:{title:"Hangi piyasa başarısızlığı?",cats:["Kamu malı","Ortak kaynak","Olumsuz dışsallık","Olumlu dışsallık"],items:[
  ["Bir şehrin deprem erken uyarı sistemi",0],
  ["Marmara Denizi'nde aşırı avlanma nedeniyle balık stoklarının azalması",1],
  ["Bir termik santralin bacasından çıkan duman",2],
  ["Bir çocuğun aşı olmasının çevresindekileri de koruması",3],
  ["Köydeki ortak meranın aşırı otlatılması",1],
  ["Gece yarısı yüksek sesle müzik çalan komşu",2],
  ["Bir sokağın aydınlatılması",0],
  ["Arıcının kovanlarının çevredeki meyve bahçelerini tozlaştırması",3]
 ],note:"Kamu malı ve ortak kaynak ikisi de dışlanamaz; fark rakipliktir. Balık ve mera tükenir (rakip), sokak lambasının ışığı tükenmez."}}
]},
{n:"8.6",h:"Bilgi asimetrisi: ters seçim ve ahlaki tehlike",blocks:[
 {t:"p",html:"Bir işlemde taraflardan biri ötekinden daha fazla bilgiye sahipse piyasa bozulabilir. Bu bilgi asimetrisi iki soruna yol açar."},
 {t:"table",head:["","Ters seçim","Ahlaki tehlike"],rows:[
  ["Ne zaman?","İşlemden <b>önce</b>","İşlemden <b>sonra</b>"],
  ["Ne olur?","Kötü kaliteli ürün ve riskli aktörler iyileri piyasadan dışlar","Bir taraf anlaşmadan sonra davranışını değiştirip daha çok risk alır"],
  ["Örnek","İkinci el araç piyasasında “limon”lar; sağlık sigortasına önce riskli kişilerin başvurması","Kasko yaptıran sürücünün daha dikkatsiz park etmesi; kurtarılacağını bilen büyük şirketin aşırı risk alması"],
  ["Çözümler","Sinyal verme (diploma, garanti belgesi), eleme (sağlık anketi, kredi başvuru formu), zorunlu sigorta","Katılım payı ve hasar taksiti, denetim ve gözetim, ayrıntılı sözleşmeler"]]},
 {t:"p",html:"İkinci el araç örneğinde alıcı aracın gerçek durumunu bilemediği için ortalama kaliteye göre fiyat teklif eder. Bu fiyat iyi araç sahipleri için düşüktür; onlar piyasadan çekilir. Ortalama kalite düşer, teklif edilen fiyat daha da azalır ve piyasa kötü araçlarla dolar. Ekspertiz raporu ve garanti gibi araçlar bu yüzden vardır."}
]},
{n:"8.7",h:"Doğru aracı seçmek",blocks:[
 {t:"p",html:"Bir piyasa başarısızlığıyla karşılaşan politika yapıcının elinde üç temel seçenek vardır. Hangisinin uygun olduğu sorunun yapısına bağlıdır."},
 {t:"table",head:["Bağlam","Önerilen araç"],rows:[
  ["Az sayıda taraf, düşük işlem maliyeti","<b>Coase pazarlığı</b>: taraflar kendi aralarında anlaşır; ya da Ostrom tipi yerel kurallar"],
  ["Çok taraf, ama zarar kolay ölçülebiliyor","<b>Fiyat temelli araçlar</b>: Pigou vergisi veya sübvansiyonu, emisyon ticaret sistemi"],
  ["Ölçüm zor veya risk çok yüksek","<b>Doğrudan düzenleme</b>: standartlar, yasaklar, miktar kısıtlamaları"],
  ["Bilgi asimetrisi","Şeffaflık zorunlulukları, sinyal standartları, lisanslama"]]},
 {t:"p",html:"Fabrika ile tek bir komşu çiftçi arasındaki toz sorunu pazarlıkla çözülebilir. Bir şehrin bütün araçlarının egzoz kirliliği için milyonlarca kişinin pazarlık etmesi imkânsızdır; yakıt vergisi veya emisyon standardı gerekir. Zehirli bir kimyasal içinse fiyat değil yasak uygundur."},
 {t:"box",lbl:"İyi düzenlemenin ilkeleri",html:"Açıklık ve şeffaflık (taslak kamuoyuna açılır), kanıta dayalılık, orantılılık (maliyet sorunun büyüklüğüyle orantılı), hedefleme (sorunun kaynağına odaklanma), basitlik ve gözden geçirme (gereksizleşen kuralın kaldırılması). Bu ilkeleri hayata geçirmenin temel aracı <b>Düzenleyici Etki Analizi</b>dir (DEA): bir düzenlemenin ekonomik, sosyal ve çevresel etkilerinin önceden değerlendirilmesi."},
 {t:"p",html:"Dijital platformlar yeni bir başarısızlık türü üretir. <b>Ağ etkisi</b>, bir ürünün değerinin kullanıcı sayısı arttıkça artmasıdır (mesajlaşma uygulamaları, işletim sistemleri). Bu, kullanıcıların büyük platforma kilitlenmesine ve “kazanan her şeyi alır” yapısına yol açar. Veri taşınabilirliği, birlikte çalışabilirlik standartları ve rekabet hukuku bu soruna karşı kullanılan araçlardır."}
]},
{n:"8.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Tavan fiyat","Denge fiyatının altına konan yasal üst sınır; kıtlık ve karaborsa yaratır."],
  ["Taban fiyat","Denge fiyatının üstüne konan yasal alt sınır; arz fazlası yaratır."],
  ["Ölü ağırlık kaybı","Müdahale nedeniyle gerçekleşmeyen alışverişlerin yol açtığı net refah kaybı."],
  ["Vergi yükü","Verginin fiilen kimin refahını azalttığı; inelastik taraf daha çok taşır."],
  ["Kamu malı","Rakip olmayan ve dışlanamayan mal; bedavacılık nedeniyle piyasa az üretir."],
  ["Ortakların trajedisi","Dışlanamaz ama rakip bir kaynağın bireysel çıkar yüzünden tükenmesi."],
  ["Pigou vergisi","Olumsuz dışsallığın maliyetini kirletene yükleyen düzeltici vergi."],
  ["Ters seçim","İşlem öncesi bilgi asimetrisiyle kötü kalitenin iyiyi piyasadan dışlaması."],
  ["Ahlaki tehlike","İşlem sonrası bir tarafın davranışını değiştirip daha çok risk alması."],
  ["Coase pazarlığı","Az sayıda taraf arasındaki dışsallık sorununun karşılıklı anlaşmayla çözülmesi."]
 ]}
]},
{n:"8.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Denge kirası 20.000 TL olan bir şehirde kiraya 15.000 TL tavan konuyor. En olası sonuç hangisidir?",o:["Kiralık daire fazlası","Kiralık daire kıtlığı ve elden ödeme","Kiraların kendiliğinden 20.000 TL'ye çıkması","Kira piyasasının dengeye gelmesi"],a:1,e:"Tavan fiyat denge fiyatının altında olduğu için talep artar, arz düşer; kıtlık oluşur ve yasal sınırın üzerinde gizli ödemeler ortaya çıkar."},
  {q:"Talep P = 12 − 0,4Q, arz P = 0,4Q. Devlet 8 TL taban fiyat koyup fazlayı satın alıyor. Kaç birim satın alması gerekir?",o:["5 birim","10 birim","20 birim","15 birim"],a:1,e:"8 TL'de arz 8/0,4 = 20, talep (12−8)/0,4 = 10 birimdir. Fazla 10 birim; devletin maliyeti 80 TL."},
  {q:"Akaryakıta ek vergi konuluyor. Talep çok inelastik, arz görece esnek. Vergi yükünü büyük ölçüde kim taşır?",o:["Rafineriler ve dağıtıcılar","Sürücüler (alıcılar)","Devlet","Yük eşit paylaşılır"],a:1,e:"Görece inelastik taraf yükün daha büyük kısmını taşır; sürücüler fiyat artsa da akaryakıt almaya devam eder."},
  {q:"Bir mala birim başına vergi konduğunda piyasada ne olur?",o:["Arz sağa kayar, fiyat düşer","Arz sola kayar, fiyat yükselir, miktar düşer","Talep sağa kayar, fiyat yükselir","Fiyat ve miktar değişmez"],a:1,e:"Vergi maliyeti artırır, arz sola kayar; alıcı fiyatı yükselir, satılan miktar azalır ve ölü ağırlık kaybı doğar."},
  {q:"İthalat kotasının yerli piyasadaki etkisi hangisidir?",o:["Fiyat düşer, tüketici rantı artar","Fiyat yükselir, yerli üretici kazanır","Fiyat değişmez, yalnızca miktar artar","Gümrük vergisi geliri kendiliğinden artar"],a:1,e:"Arz sınırlandığı için iç fiyat yükselir; yerli üretici daha yüksek fiyattan satar, tüketici rantı azalır."},
  {q:"Sokak aydınlatmasının özel sektör tarafından yeterince sağlanmamasının nedeni nedir?",o:["Talebinin çok elastik olması","Bedavacılık: ödemeyen de yararlanır","Üretim maliyetinin çok yüksek olması","Ahlaki tehlike"],a:1,e:"Kamu malı dışlanamaz; herkes başkasının ödemesini bekler. Bu yüzden genellikle vergiyle finanse edilir."},
  {q:"Bir köyün ortak merasında herkesin hayvan sayısını artırması sonucu mera çoraklaşıyor. Bu hangi kavramdır?",o:["Kamu malı sorunu","Ortakların trajedisi","Ters seçim","Olumlu dışsallık"],a:1,e:"Mera rakip ama dışlanamaz bir ortak havuz kaynağıdır; bireysel çıkar kaynağın tükenmesine yol açar."},
  {q:"Kasko yaptırdıktan sonra aracını daha az dikkatle kullanan sürücü hangi soruna örnektir?",o:["Ters seçim","Ahlaki tehlike","Bedavacılık","Ortakların trajedisi"],a:1,e:"Sözleşmeden sonra davranış değişikliği ve risk alma ahlaki tehlikedir; çözümü katılım payı gibi araçlardır."},
  {q:"Bir fabrika ile tek bir komşu çiftlik arasında toz sorunu var; ikisi de kolayca bir araya gelebiliyor. Hangi çözüm en uygundur?",o:["Ulusal emisyon ticaret sistemi","Coase pazarlığı","Fabrikanın kapatılması","Çiftliğe tavan fiyat"],a:1,e:"Taraf sayısı az ve işlem maliyeti düşükken taraflar pazarlıkla etkin çözüme ulaşabilir."},
  {q:"Karbon vergisinin emisyon ticaret sistemine göre avantajı ve dezavantajı nedir?",o:["Maliyeti öngörülebilir; azaltım miktarı belirsiz","Azaltım miktarı kesin; maliyeti dalgalı","Hem maliyeti hem miktarı kesin","İkisi de belirsiz, fark yok"],a:0,e:"Vergi fiyatı sabitler, miktarı piyasaya bırakır. ETS ise miktara tavan koyar, fiyatı piyasaya bırakır."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 16, s. 138–159.",
 "Ostrom, E. (1990). <i>Governing the Commons: The Evolution of Institutions for Collective Action</i>. Cambridge University Press.",
 "Akerlof, G. A. (1970). The Market for “Lemons”: Quality Uncertainty and the Market Mechanism. <i>Quarterly Journal of Economics</i>, 84(3), 488–500.",
 "Toprak Mahsulleri Ofisi: <a href=\"https://www.tmo.gov.tr\">tmo.gov.tr</a>"
],
next:"Sonraki: Hafta 09 — Piyasa yapıları: tam rekabetten oligopole"
};
