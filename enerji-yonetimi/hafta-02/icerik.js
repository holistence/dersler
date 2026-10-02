window.WEEK={
id:"en-02",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Enerji güvenliği ve piyasa",week:2,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Güvenlik ve piyasa yapısı",
title:"Enerji güvenliği, değer zinciri ve <em>piyasa</em> modelleri",
intro:"Bu hafta enerji güvenliğini dört boyutuyla (4A) tanıyacak, doğal gaz ve elektriğin kaynaktan tüketiciye uzanan değer zincirlerini karşılaştıracak, enerji talebinin fiyata neden kısa vadede pek tepki vermediğini hesaplayacak ve düzenlenmiş piyasadan serbest piyasaya geçişi Türkiye örneğiyle izleyeceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada bir sınıflandırma alıştırması, iki hesaplayıcı, sekmeli karşılaştırmalar, bir zaman çizelgesi ve 10 soruluk bir test var.",
goals:[
 "Enerji güvenliğinin dört boyutunu (4A) tanımlayıp gündelik olayları bu boyutlara göre sınıflandırabilirsiniz.",
 "Doğal gaz ve elektrik değer zincirlerinin aşamalarını sıralayıp farklarını açıklayabilirsiniz.",
 "Enerji talebinin fiyat esnekliğini kullanarak bir fiyat artışının tüketime etkisini kısa ve uzun vade için hesaplayabilirsiniz.",
 "Düzenlenmiş ve serbest piyasa modellerini karşılaştırıp Türkiye'deki dönüşümün ana adımlarını sayabilirsiniz."
],
sections:[
{n:"2.1",h:"Enerji güvenliği nedir?",blocks:[
 {t:"p",html:"Elektriğin kesilmesi, doğal gazın kışın ortasında azalması ya da akaryakıt fiyatlarının birkaç ayda ikiye katlanması: hepsi enerji güvenliği sorunudur. Enerji güvenliği, bir ülkenin kalkınma hedeflerine ulaşabilmesi ve toplumsal refahı koruyabilmesi için enerji sistemlerinin bugünkü ve gelecekteki ihtiyaçlara cevap verebilmesidir."},
 {t:"p",html:"Kavramı somutlaştırmak için yaygın kullanılan çerçeve, İngilizce baş harfleri A olan dört boyuttan oluşur. Bu çerçeve Asya-Pasifik Enerji Araştırma Merkezi'nin (APERC) 2007 tarihli raporuyla yaygınlaştı. Bir boyut seçerek tanımları okuyun."},
 {t:"choice",items:[
  {label:"Availability",title:"Ulaşılabilirlik (mevcudiyet)",body:"Enerji kaynağının fiziksel olarak var olması ve çıkarılabilir durumda bulunmasıdır. Jeolojik rezervler, üretim kapasitesi ve tedarik zincirinin fiziksel yeterliliği bu boyuttadır.",ex:"Soru: Dünyada ve ülkede yeterli kaynak var mı? Örnek: kanıtlanmış petrol rezervleri, yerli linyit sahaları."},
  {label:"Accessibility",title:"Erişilebilirlik",body:"Var olan kaynağa siyasi, coğrafi ya da askerî engeller olmadan ulaşabilmektir. Kaynak dünyada bol olsa da bir boğazın kapanması, bir boru hattının kesilmesi ya da yaptırımlar erişimi engelleyebilir.",ex:"Soru: Kaynağa engelsiz ulaşabiliyor muyuz? Örnek: tek bir tedarikçiye ya da tek bir güzergâha bağımlılık."},
  {label:"Acceptability",title:"Kabul edilebilirlik",body:"Enerji üretim ve tüketiminin toplum ve çevre açısından kabul görmesidir. Emisyonlar, yerel kirlilik, güvenlik kaygıları ve toplumsal muhalefet bu boyuttadır.",ex:"Soru: Toplum ve doğa bu kaynağı kabul ediyor mu? Örnek: kömür santrallerine yönelik iklim baskısı, bir HES projesine yerel itiraz."},
  {label:"Affordability",title:"Karşılanabilirlik",body:"Enerjinin ve enerji hizmetlerinin bireyler, işletmeler ve devlet için ödenebilir fiyatlarla sunulmasıdır. İthalata bağımlı ülkelerde küresel fiyat dalgalanmaları bu boyutu kırılganlaştırır.",ex:"Soru: Bu enerjiyi ödeyebiliyor muyuz? Örnek: hanelerin faturası, sanayinin rekabet gücü, cari açık."}
 ]},
 {t:"p",html:"İdeal enerji güvenliği dört boyutun kesişimindedir ve boyutlar çoğu zaman birbiriyle çatışır. Fosil yakıtların rezervleri hâlâ geniştir (ulaşılabilirlik), ama emisyonları nedeniyle kabul edilebilirlikte zayıftır. Yenilenebilir kaynaklar kabul edilebilirlikte güçlüdür, ama kesintili olmaları ve şebeke kısıtları nedeniyle her zaman ve her yerde aynı ölçüde yararlanılamaz."},
 {t:"box",lbl:"Terim notu",html:"Türkçe literatürde availability ve accessibility için hem “ulaşılabilirlik” hem “erişilebilirlik” kullanılır ve kaynaktan kaynağa yer değiştirir. Karışıklığı önlemenin yolu İngilizce karşılığa bakmaktır: <b>availability</b> kaynağın <i>var olması</i>, <b>accessibility</b> kaynağa <i>ulaşabilmektir</i>. Bu sayfada ilkine “ulaşılabilirlik (mevcudiyet)”, ikincisine “erişilebilirlik” diyoruz."}
]},
{n:"2.2",h:"4A ile olayları okumak",blocks:[
 {t:"p",html:"Enerji haberlerinin çoğu, dört boyuttan birini ya da birkaçını etkileyen bir olayı anlatır. Haberi doğru boyuta yerleştirmek, hangi politikanın çözüm olacağını da gösterir: mevcudiyet sorununa arama ve üretim, erişim sorununa çeşitlendirme, kabul sorununa temiz teknoloji, karşılanabilirlik sorununa verimlilik ve fiyat politikası."},
 {t:"widget",name:"classify",opts:{title:"Bu haber hangi boyutu anlatıyor?",cats:["Ulaşılabilirlik","Erişilebilirlik","Kabul edilebilirlik","Karşılanabilirlik"],items:[
  ["Bir ülkenin kanıtlanmış doğal gaz rezervleri tükenmeye yaklaşıyor",0],
  ["Bir boğazdaki çatışma nedeniyle tankerler geçemiyor",1],
  ["Köylüler, derelerine yapılacak bir santrale karşı dava açıyor",2],
  ["Elektrik zammı sonrası hanelerin faturası gelirlerinin önemli bir kısmına ulaşıyor",3],
  ["Tedarikçi ülke siyasi bir anlaşmazlık sonrası boru hattı akışını durduruyor",1],
  ["Karbon fiyatı nedeniyle kömür santrallerinin kapatılması tartışılıyor",2],
  ["Yeni bir sahada keşif yapılarak üretilebilir rezerv artıyor",0],
  ["Dövizdeki sert artış ithal yakıtın maliyetini yükseltiyor",3]
 ],note:"Bazı olaylar birden fazla boyuta dokunur: boru hattının kesilmesi erişimi bozar, ardından fiyatları yükselterek karşılanabilirliği de etkiler. Alıştırmada olayın ilk ve doğrudan etkisini seçtik."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye petrol ve doğal gazının büyük bölümünü ithal eder. Bu yüzden erişilebilirlik ve karşılanabilirlik boyutları en hassas olanlardır. Son yirmi yılda izlenen yol, kaynak ve güzergâh <b>çeşitlendirmesidir</b>: farklı ülkelerden boru hattı gazı, LNG terminalleri ve yüzer depolama ve yeniden gazlaştırma birimleri (FSRU), yeraltı gaz depoları ile yerli ve yenilenebilir kaynaklara yatırım. Hafta 04'te bu araçlara ayrıntılı döneceğiz."}
]},
{n:"2.3",h:"Enerji değer zinciri",blocks:[
 {t:"def",html:"Enerji değer zinciri, bir enerji kaynağının ham hâlinden nihai tüketiciye ulaşıncaya kadar geçtiği bütün aşamalardır.",src:"Her halka ayrı yatırım, ayrı maliyet ve ayrı risk taşır; sektörün yapısını anlamanın en kısa yoludur."},
 {t:"choice",items:[
  {label:"Doğal gaz zinciri",title:"Uzun ve lojistik ağırlıklı",body:"Arama ve çıkarma → işleme ve sıvılaştırma (LNG için) → taşıma (boru hattı veya LNG gemisi) → depolama → dağıtım (şehir şebekesi) → perakende satış. Gaz çoğunlukla uzak sahalardan geldiği için taşıma ve depolama aşamaları kritiktir.",ex:"Türkiye'de iletim şebekesini BOTAŞ işletir; şehir içi dağıtımı ise her ilde lisanslı dağıtım şirketleri yapar."},
  {label:"Elektrik zinciri",title:"Kısa ve anlık",body:"Üretim (santraller) → iletim (yüksek gerilim hatları) → dağıtım (şehir şebekeleri) → perakende satış (tedarik şirketleri) → nihai tüketici. Elektrik büyük ölçekte ucuza depolanamadığı için üretim her an tüketime eşit olmak zorundadır.",ex:"Türkiye'de iletim sistemini TEİAŞ işletir; dağıtım bölgesel dağıtım şirketlerince, satış ise tedarik şirketlerince yapılır."},
  {label:"Temel fark",title:"Depolama ve zamanlama",body:"Gaz zincirinde fiziksel taşıma ve depolama basamakları fazladır; gaz depolanabilir ve mevsimsel talebe göre kullanılabilir. Elektrik zincirinde ise akış doğrudan ve anlıktır; depolama sınırlı olduğu için arz-talep dengesi saniye saniye korunmalıdır.",ex:"Bu fark, elektrik piyasasında saatlik fiyatların (Hafta 07) ve dengeleme mekanizmalarının neden bu kadar önemli olduğunu açıklar."}
 ]},
 {t:"p",html:"Değer zinciri düşüncesi şirket stratejisini de açıklar. Bir şirket zincirin tek halkasında uzmanlaşabilir (yalnızca üretim) ya da birden fazla halkayı kontrol edebilir (üretimden perakendeye). İkinci duruma <b>dikey entegrasyon</b> denir; Hafta 04'te fosil yakıt şirketlerinin geçiş stratejilerinde bu kavramı yeniden kullanacağız."},
 {t:"p",html:"Zincirin halkaları aynı ekonomik nitelikte değildir. Üretim ve perakende satış rekabete açılabilir; ama iki şehir arasına ikinci bir yüksek gerilim hattı ya da ikinci bir gaz boru hattı döşemek ekonomik değildir. İletim ve dağıtım bu yüzden <b>doğal tekel</b> niteliği taşır ve düzenlenir. Bu ayrım, piyasa modellerinin temelini oluşturur."}
]},
{n:"2.4",h:"Enerji talebinin fiyat esnekliği",blocks:[
 {t:"def",html:"Enerji talebinin fiyat esnekliği, enerji fiyatındaki yüzde değişimin talep edilen enerji miktarında yol açtığı yüzde değişimdir.",src:"Esneklik = %ΔMiktar ÷ %ΔFiyat. İşareti negatiftir: fiyat artınca talep azalır."},
 {t:"p",html:"Enerji gündelik hayatın ve üretimin vazgeçilmez girdisi olduğu için esnekliği genellikle düşüktür. Kısa vadede bu daha da belirgindir: benzin pahalandı diye arabanızı ertesi gün satamaz, faturanız arttı diye evinizi bir haftada yalıtamazsınız. Sanayi de üretim sürecindeki enerjiyi kısa sürede ikame edemez."},
 {t:"p",html:"Orta ve uzun vadede ise talep daha esnek hâle gelir: daha az yakan araçlar alınır, yalıtım yapılır, verimli makinelere geçilir, toplu taşımaya yönelinir. Kitapta verilen tahmini değerler bu farkı açıkça gösterir."},
 {t:"table",head:["Ürün / kesim","Kısa vadeli esneklik","Uzun vadeli esneklik"],rows:[
  ["Benzin","≈ −0,05","≈ −0,40"],
  ["Konutlarda doğal gaz","≈ −0,10","≈ −0,50"],
  ["Sanayide elektrik","≈ −0,15","≈ −0,70"]]},
 {t:"widget",name:"calc",opts:{title:"Fiyat artışı tüketimi ne kadar azaltır?",inputs:[{id:"z",label:"Fiyat artışı",min:1,max:100,step:1,value:20,unit:"%"},{id:"k",label:"Kısa vadeli esneklik (mutlak)",min:0,max:1,step:0.05,value:0.05},{id:"u",label:"Uzun vadeli esneklik (mutlak)",min:0,max:1.5,step:0.05,value:0.4},{id:"q",label:"Bugünkü tüketim",min:100,max:5000,step:100,value:1000,unit:" litre/yıl"}],formula:"(function(){var f=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:1})};var qk=Math.max(0,q*(1-k*z/100)),qu=Math.max(0,q*(1-u*z/100));var bk=(1+z/100)*qk/q*100-100,bu=(1+z/100)*qu/q*100-100;return 'kısa vade: '+f(qk)+' (harcama %'+f(Math.abs(bk))+(bk>=0?' artar':' azalır')+') · uzun vade: '+f(qu)+' (harcama %'+f(Math.abs(bu))+(bu>=0?' artar':' azalır')+')';})()",result:"Yeni tüketim: {r}",note:"Basit yaklaşım: %ΔQ ≈ −esneklik × %ΔP. Varsayılan değerler kitaptaki benzin esneklikleridir: %20'lik zam kısa vadede tüketimi yalnızca %1 azaltır, toplam harcama ise yaklaşık %19 artar. Esnekliği 1'in üstüne çıkarın: talep elastik olur ve zam harcamayı düşürür. Enerji vergilerinin kısa vadede yüksek gelir getirmesinin nedeni bu düşük esnekliktir."}},
 {t:"p",html:"Bu tablo politika için de önemli bir ders içerir. Kısa vadeli fiyat sinyali tüketimi pek değiştirmez, ama kalıcı bir fiyat sinyali yatırım kararlarını değiştirerek uzun vadede talebi belirgin biçimde düşürebilir. Karbon fiyatlaması ve enerji verimliliği teşvikleri bu mantığa dayanır."}
]},
{n:"2.5",h:"Düzenlenmiş ve serbest piyasa modelleri",blocks:[
 {t:"choice",items:[
  {label:"Düzenlenmiş model",title:"Tek kurum, devlet tarifesi",body:"Genellikle devlete ait tek bir kurum üretim, iletim, dağıtım ve satışın tamamını üstlenir (dikey bütünleşik tekel). Fiyatları piyasa koşulları değil, devletin belirlediği tarifeler belirler. Yatırım kararları merkezî planlamayla verilir.",ex:"Artısı: öngörülebilirlik, sosyal tarifeler. Eksisi: verimsizlik riski, yatırımın kamu bütçesine bağlı olması, fiyatların maliyeti yansıtmaması."},
  {label:"Serbest (rekabetçi) model",title:"Rekabet + bağımsız düzenleyici",body:"Üretim ve satış özel şirketlerin rekabetine açılır; iletim ve dağıtım doğal tekel olarak düzenlenmeye devam eder. Fiyatlar arz-talep dengesiyle oluşur. Rekabetin adil ve şeffaf işlemesini bağımsız bir düzenleyici kurum denetler.",ex:"Türkiye'de düzenleyici kurum Enerji Piyasası Düzenleme Kurumu'dur (EPDK); elektrik ve doğal gaz piyasalarının işletmecisi Enerji Piyasaları İşletme A.Ş.'dir (EPİAŞ)."},
  {label:"Ayrıştırma",title:"Geçişin anahtarı",body:"Düzenlenmiş modelden serbest modele geçmek için dikey bütünleşik yapı faaliyetlerine göre ayrıştırılır: üretim, iletim, dağıtım ve perakende ayrı şirketlere bölünür. Böylece rekabete açılabilecek halkalar ile doğal tekel halkaları birbirinden ayrılır.",ex:"Ayrıştırma olmadan, şebekeye sahip bir üretici rakiplerine şebekeyi kapatabilir ya da pahalı kullandırabilir."}
 ]},
 {t:"p",html:"Türkiye'nin elektrik sektörü tek kurumlu bir yapıdan bugünkü piyasa yapısına adım adım geçti. Aşağıdaki çizelge ana kilometre taşlarını gösterir."},
 {t:"timeline",items:[
  ["1970","TEK kuruldu","Türkiye Elektrik Kurumu, üretim, iletim ve dağıtımı tek elde topladı."],
  ["1993","TEK ikiye ayrıldı","Üretim-iletim TEAŞ'a, dağıtım TEDAŞ'a verildi."],
  ["2001","4628 sayılı Elektrik Piyasası Kanunu","EPDK kuruldu; TEAŞ, üretim (EÜAŞ), iletim (TEİAŞ) ve toptan satış (TETAŞ) olarak ayrıldı. Serbestleşmenin temel kanunu.",1],
  ["2011","Gün Öncesi Piyasası","Ertesi günün saatlik fiyatlarının arz-talep eşleşmesiyle belirlendiği piyasa işlemeye başladı."],
  ["2013","6446 sayılı Elektrik Piyasası Kanunu","4628 sayılı kanunun yerini aldı; piyasa işletim faaliyetinin ayrı bir şirkete devredilmesinin yolunu açtı."],
  ["2015","EPİAŞ faaliyete geçti","Piyasa işletmecisi olarak GÖP'ü devraldı; aynı yıl Gün İçi Piyasası da açıldı.",1]
 ]},
 {t:"box",lbl:"Dikkat",html:"Serbestleşme “devletin çekilmesi” demek değildir. Devlet, oyun kurucu olmaktan çıkıp <b>hakem</b> rolüne geçer: lisans verir, tarifeleri ve şebeke kullanım bedellerini düzenler, piyasayı denetler. Türkiye'de iletim şebekesi (TEİAŞ) ve büyük üretim varlıklarının bir kısmı (EÜAŞ) hâlâ kamunundur."}
]},
{n:"2.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Ulaşılabilirlik (availability)","Enerji kaynağının fiziksel olarak var ve çıkarılabilir olması."],
  ["Erişilebilirlik (accessibility)","Kaynağa siyasi, coğrafi ya da askerî engel olmadan ulaşabilmek."],
  ["Kabul edilebilirlik (acceptability)","Enerji üretim ve tüketiminin toplum ve çevre açısından kabul görmesi."],
  ["Karşılanabilirlik (affordability)","Enerjinin ödenebilir fiyatlarla sunulması."],
  ["Değer zinciri","Kaynağın ham hâlinden nihai tüketiciye kadar geçtiği bütün aşamalar."],
  ["Doğal tekel","Tek bir şebekenin birden fazlasından ucuz olduğu, rekabetin ekonomik olmadığı faaliyet: iletim ve dağıtım."],
  ["Fiyat esnekliği","Talepteki yüzde değişimin fiyattaki yüzde değişime oranı; enerjide kısa vadede çok düşük."],
  ["Ayrıştırma","Dikey bütünleşik yapının üretim, iletim, dağıtım ve satış olarak bölünmesi."],
  ["EPDK","Türkiye'de elektrik, doğal gaz, petrol ve LPG piyasalarının bağımsız düzenleyicisi."],
  ["EPİAŞ","Türkiye'de elektrik ve doğal gaz piyasalarını işleten şirket."]
 ]}
]},
{n:"2.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Dünyada bol rezervi bulunan bir kaynağın, tedarikçi ülkedeki savaş nedeniyle alınamaması hangi boyutta bir sorundur?",o:["Ulaşılabilirlik (mevcudiyet)","Erişilebilirlik","Kabul edilebilirlik","Karşılanabilirlik"],a:1,e:"Kaynak fiziksel olarak vardır; sorun ona engelsiz ulaşamamaktır."},
  {q:"Fosil yakıtlar için 4A çerçevesinde en sık dile getirilen zayıflık hangisidir?",o:["Rezervlerin hiç kalmamış olması","Kabul edilebilirlik: emisyonlar ve çevresel etkiler","Hiçbir ülkenin bunlara erişememesi","Fiyatlarının hiç dalgalanmaması"],a:1,e:"Fosil yakıt rezervleri hâlâ geniştir; asıl baskı iklim ve çevre etkileri nedeniyle kabul edilebilirlik boyutundadır."},
  {q:"Doğal gaz değer zincirini elektrik değer zincirinden ayıran temel özellik nedir?",o:["Gaz zincirinde perakende satış aşaması yoktur","Gaz zincirinde taşıma ve depolama basamakları daha fazladır","Elektrik zincirinde iletim aşaması yoktur","Elektrik büyük ölçekte ucuza depolanabilir"],a:1,e:"Gaz uzak sahalardan gelir ve depolanabilir; elektrikte akış anlıktır ve depolama sınırlıdır."},
  {q:"İletim ve dağıtım şebekelerinin serbest piyasa modelinde de düzenlenmeye devam etmesinin nedeni nedir?",o:["Devletin bu alanlardan çok kâr etmesi","Doğal tekel niteliği taşımaları","Bu alanlarda teknolojinin değişmemesi","Tüketicilerin şebeke seçme hakkı olmaması"],a:1,e:"Aynı güzergâha ikinci bir şebeke kurmak ekonomik değildir; rekabet yerine düzenleme gerekir."},
  {q:"Benzinin kısa vadeli fiyat esnekliği −0,05 ise %20'lik bir zam tüketimi yaklaşık ne kadar değiştirir?",o:["%20 azaltır","%4 azaltır","%1 azaltır","%5 artırır"],a:2,e:"%ΔQ ≈ −0,05 × 20 = −1. Tüketim yaklaşık %1 azalır."},
  {q:"Aynı %20'lik zam, uzun vadeli esneklik −0,40 iken tüketimi ne kadar değiştirir?",o:["Yaklaşık %8 azaltır","Yaklaşık %40 azaltır","Yaklaşık %0,4 azaltır","Hiç değiştirmez"],a:0,e:"−0,40 × 20 = −8. Uzun vadede araç değişimi ve alışkanlıklar talebi daha duyarlı hâle getirir."},
  {q:"Enerji talebinin uzun vadede kısa vadeye göre daha esnek olmasının ana nedeni nedir?",o:["Uzun vadede enerji fiyatlarının hep düşmesi","Tüketicilerin zamanla alternatiflere geçebilmesi","Uzun vadede hane gelirlerinin azalması","Düzenleyicinin uzun vadede fiyatı sabitlemesi"],a:1,e:"Araç, ev ve makine gibi sermaye mallarını değiştirmek zaman alır; zaman geçtikçe tüketiciler alternatife geçebilir."},
  {q:"Talebin fiyat esnekliği mutlak değerce 0,1 olan bir enerji ürününe zam yapılırsa toplam harcamaya ne olur?",o:["Artar","Azalır","Değişmez","Sıfıra düşer"],a:0,e:"İnelastik talepte miktar fiyattan çok daha az oranda düşer; fiyat etkisi baskın gelir ve harcama artar."},
  {q:"Türkiye'de EPDK'yı kuran ve elektrik piyasasında serbestleşmenin temelini atan kanun hangisidir?",o:["1970 tarihli TEK kuruluş kanunu","2001 tarihli 4628 sayılı kanun","2013 tarihli 6446 sayılı kanun","2015 tarihli EPİAŞ kuruluş kararı"],a:1,e:"EPDK 2001'de 4628 sayılı kanunla kuruldu; 6446 sayılı kanun 2013'te bunun yerini aldı."},
  {q:"Serbest piyasa modelinde aşağıdakilerden hangisi rekabete açılan bir faaliyettir?",o:["Yüksek gerilim iletimi","Şehir içi dağıtım şebekesi","Elektrik üretimi","Şebekenin frekans standardının belirlenmesi"],a:2,e:"Üretim ve perakende satış rekabete açılır; iletim ve dağıtım doğal tekel olarak düzenlenir."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 1, s. 12–13 ve 16–20.",
 "Asia Pacific Energy Research Centre (2007). <i>A Quest for Energy Security in the 21st Century: Resources and Constraints</i>. APERC, Tokyo.",
 "Enerji Piyasası Düzenleme Kurumu (EPDK): <a href=\"https://www.epdk.gov.tr\">epdk.gov.tr</a>",
 "Enerji Piyasaları İşletme A.Ş. (EPİAŞ): <a href=\"https://www.epias.com.tr\">epias.com.tr</a>"
],
next:"Sonraki: Hafta 03 — Petrol: kalite, OPEC ve fiyatın belirlenmesi"
};
