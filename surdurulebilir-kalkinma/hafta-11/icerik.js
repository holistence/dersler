window.WEEK={
id:"sk-11",code:"SK",course:"Sürdürülebilir Kalkınma",short:"Sürdürülebilir şehirler",week:11,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Kentleşme",
title:"Sürdürülebilir ve <em>dirençli</em> şehirler",
intro:"Bu hafta dünyanın neden hızla kentleştiğini, iyi tasarlanmış bir şehrin sürdürülebilirliğe nasıl katkı verdiğini ve 6 Şubat 2023 depremlerinin bize afet direnci hakkında ne öğrettiğini ele alacaksınız. Okuma süresi yaklaşık 30 dakika; sayfada bir grafik, bir hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma ve 9 soruluk bir test var.",
goals:[
 "Kentleşmenin kalkınmayla ilişkisini ve kentleşme oranının nasıl değiştiğini açıklayabilirsiniz.",
 "Kentsel ve kırsal nüfus artış hızlarından gelecekteki kentleşme oranını hesaplayabilirsiniz.",
 "Yoğun ve yayılmacı kent biçimlerini ulaşım, enerji ve arazi kullanımı açısından karşılaştırabilirsiniz.",
 "Afet riski yönetiminin aşamalarını tanıyıp önlemleri bu aşamalara yerleştirebilirsiniz.",
 "SKA 11'in temel bileşenlerini Türkiye'deki deprem deneyimiyle ilişkilendirebilirsiniz."
],
sections:[
{n:"11.1",h:"Kentli bir gezegen",blocks:[
 {t:"p",html:"İnsanlık tarihinin büyük bölümünde insanların çoğu kırsalda yaşadı. Bu durum 2000'lerin sonunda değişti: BM tahminlerine göre 2007 civarında dünya nüfusunun yarısından fazlası ilk kez şehirlerde yaşamaya başladı. Kentleşme, bugün kalkınmanın en belirgin eğilimlerinden biridir."},
 {t:"p",html:"BM Ekonomik ve Sosyal İşler Dairesi'nin (UN DESA) <i>Dünya Kentleşme Beklentileri 2018</i> raporuna göre dünya nüfusunun kentlerde yaşayan payı 1950'de yaklaşık %30 iken 2018'de %55'e ulaştı; 2050'de %68'e çıkması bekleniyor. Bu artışın büyük bölümü Asya ve Afrika'daki şehirlerde gerçekleşecek."},
 {t:"widget",name:"chart",opts:{title:"Dünyada kentlerde yaşayan nüfusun payı",unit:"%",kind:"bar",labels:["1950","2018","2050 (projeksiyon)"],series:[{name:"Kentli nüfus payı",values:[30,55,68]}],source:"UN DESA, World Urbanization Prospects: The 2018 Revision (yuvarlatılmış değerler)."}},
 {t:"p",html:"Kentleşme ile kişi başına gelir arasında güçlü bir ilişki vardır. Şehirler işletmeleri, işçileri ve fikirleri bir araya getirir; buna <b>yığılma ekonomileri</b> denir. Aynı sektördeki firmaların yan yana olması tedarikçi bulmayı, nitelikli işçiye ulaşmayı ve bilginin yayılmasını kolaylaştırır. Bu yüzden üretkenlik genellikle büyük şehirlerde daha yüksektir."}
]},
{n:"11.2",h:"Kentleşme oranı nasıl değişir?",blocks:[
 {t:"p",html:"<b>Kentleşme oranı</b>, kentlerde yaşayan nüfusun toplam nüfusa oranıdır. Bu oran iki yolla artar: kentlerin kırsaldan daha hızlı büyümesiyle (doğal artış ve kırdan kente göç) ve kırsal yerleşimlerin büyüyerek kent sayılmaya başlamasıyla. Ülkeler \"kent\"i farklı tanımladığı için uluslararası karşılaştırmalarda dikkatli olmak gerekir."},
 {t:"p",html:"Aşağıdaki hesaplayıcıda bugünkü kentleşme oranını ve kent ile kırın yıllık nüfus artış hızlarını seçin; belirli bir süre sonra oranın ne olacağını görün."},
 {t:"widget",name:"calc",opts:{title:"Gelecekteki kentleşme oranı",inputs:[{id:"u",label:"Bugünkü kentleşme oranı",min:10,max:90,step:1,value:50,unit:"%"},{id:"gu",label:"Kentsel nüfus artış hızı (yıllık)",min:0,max:5,step:0.1,value:2.5,unit:"%"},{id:"gr",label:"Kırsal nüfus artış hızı (yıllık)",min:-3,max:3,step:0.1,value:0.5,unit:"%"},{id:"t",label:"Süre",min:5,max:50,step:5,value:20,unit:" yıl"}],formula:"100*u*Math.pow(1+gu/100,t)/(u*Math.pow(1+gu/100,t)+(100-u)*Math.pow(1+gr/100,t))",result:"Dönem sonunda kentleşme oranı: %{r}",digits:1,note:"Hesap, iki grubun sabit hızlarla büyüdüğünü varsayar. Gerçekte kırdan kente göç hızlanıp yavaşlar ve kırsal nüfus bir noktadan sonra azalmaya başlar. Kırsal artış hızını eksiye çekerek bunu deneyin."}},
 {t:"p",html:"Hızlı kentleşme, altyapının nüfusa yetişememesi riskini taşır. UN-Habitat'a göre dünyada bir milyardan fazla insan gecekondu ve enformel yerleşimlerde yaşamaktadır. Bu yerleşimlerde güvenli konut, temiz su, sanitasyon ve tapu güvencesi çoğu zaman yoktur. Türkiye de 1950'lerden itibaren yoğun kırdan kente göç ve gecekondulaşma dönemi yaşamıştır."}
]},
{n:"11.3",h:"SKA 11 ve Yeni Kentsel Gündem",blocks:[
 {t:"def",html:"Şehirleri ve insan yerleşimlerini kapsayıcı, güvenli, dirençli ve sürdürülebilir kılmak.",src:"SKA 11'in resmî ifadesinin özeti (BM, 2015)"},
 {t:"p",html:"SKA 11'in alt hedefleri; herkes için uygun fiyatlı ve güvenli konut, erişilebilir toplu taşıma, katılımcı kent planlaması, kültürel ve doğal mirasın korunması, afetlerden kaynaklanan kayıpların azaltılması, hava kalitesi ve atık yönetimi ile yeşil ve kamusal alanlara erişimi kapsar. 2016'da Quito'da (Ekvador) düzenlenen Habitat III konferansında kabul edilen <b>Yeni Kentsel Gündem</b>, bu hedeflerin nasıl uygulanacağına dair küresel çerçeveyi sunar."},
 {t:"p",html:"Şehirler iklim açısından da belirleyicidir. IPCC'nin Altıncı Değerlendirme Raporu (2022), kentsel alanların küresel karbondioksit ve metan emisyonlarının yaklaşık <b>%70</b>'inden sorumlu olduğunu belirtir. Binaların ısıtılması, ulaşım ve tüketim kentlerde yoğunlaştığı için çözümler de büyük ölçüde kentlerde aranır."}
]},
{n:"11.4",h:"Kent biçimi ve ulaşım",blocks:[
 {t:"p",html:"Bir şehrin fiziksel biçimi, onlarca yıl boyunca enerji tüketimini ve yaşam tarzını belirler. Bir kez yapılan yol, köprü ve konut alanı kolay değiştirilemez; buna <b>kilitlenme</b> (lock-in) etkisi denir. Bir yaklaşım seçerek farklarını görün."},
 {t:"choice",items:[
  {label:"Yoğun kent",title:"Kompakt ve karma kullanımlı",body:"Konut, iş ve hizmetlerin birbirine yakın olduğu, yürüme ve toplu taşımanın kolay olduğu kent biçimidir. Kişi başına altyapı maliyeti ve ulaşım enerjisi düşüktür; ancak iyi planlanmazsa kalabalık, gürültü ve yeşil alan eksikliği doğabilir.",ex:"Örnek: Metro istasyonları çevresinde konut ve iş alanlarının bir arada planlanması."},
  {label:"Yayılmacı kent",title:"Düşük yoğunluklu ve otomobile bağımlı",body:"Şehrin çevresindeki tarım ve doğal alanlara doğru yayılan, kullanımların birbirinden ayrıldığı biçimdir. Ulaşım büyük ölçüde özel otomobile dayanır; kişi başına yol, boru ve kablo uzunluğu artar.",ex:"Örnek: Şehir merkezine 30 km uzaklıkta, toplu taşıması olmayan yeni konut siteleri."},
  {label:"Toplu taşıma odaklı gelişme",title:"Yatırım ile arazi kullanımının birlikte planlanması",body:"Raylı sistem ya da hızlı otobüs hatları boyunca yoğunluğun artırıldığı, istasyon çevresinin yaya dostu tasarlandığı planlama yaklaşımıdır.",ex:"Örnek: Hızlı otobüs hattı güzergâhında kaldırımların genişletilmesi ve bisiklet yollarının hatta bağlanması."},
  {label:"Yeşil altyapı",title:"Doğayı kentin bir parçası yapmak",body:"Parklar, kent ormanları, yeşil çatılar ve geçirgen yüzeyler; yağmur suyunu tutar, ısı adası etkisini azaltır ve sağlığa katkı verir. Gri altyapıyı (beton kanallar, barajlar) tamamlar.",ex:"Örnek: Taşkın riskli dere yataklarının betonlanmak yerine park olarak düzenlenmesi."}
 ]},
 {t:"box",lbl:"Kentsel ısı adası",html:"Asfalt ve beton gün boyu ısıyı depolar, gece yavaşça salar. Bu nedenle şehir merkezleri çevredeki kırsal alanlardan daha sıcak olur. İklim değişikliğiyle sıklaşan sıcak hava dalgaları, özellikle yaşlılar ve dış mekânda çalışanlar için kentlerde daha tehlikelidir. Ağaçlandırma, açık renkli yüzeyler ve yeşil çatılar bu etkiyi azaltır."}
]},
{n:"11.5",h:"Dirençli şehirler ve 6 Şubat depremleri",blocks:[
 {t:"p",html:"<b>Direnç</b> (dayanıklılık), bir şehrin bir şoku karşılayıp temel işlevlerini sürdürebilmesi ve hızla toparlanabilmesidir. Afetler doğal tehlike ile insan yapımı kırılganlığın birleşiminden doğar: deprem bir doğa olayıdır, ama yıkılan binalar, yetersiz denetim ve plansız yapılaşma insan kararlarının sonucudur."},
 {t:"p",html:"6 Şubat 2023'te Kahramanmaraş merkezli, büyüklükleri 7,7 ve 7,6 olan iki deprem birkaç saat arayla meydana geldi ve 11 ili doğrudan etkiledi. Türkiye'de 50 binden fazla kişi hayatını kaybetti; on binlerce bina yıkıldı ya da ağır hasar gördü. Depremler, yapı denetiminin, imar uygulamalarının ve mevcut yapı stokunun güçlendirilmesinin direnç açısından ne kadar belirleyici olduğunu bir kez daha gösterdi."},
 {t:"timeline",items:[
  ["1999","Marmara (Gölcük) depremi","17 Ağustos 1999 depremi, yapı denetimi ve afet yönetiminde kapsamlı reformların başlangıcı oldu.",1],
  ["2000","Zorunlu Deprem Sigortası","Doğal Afet Sigortaları Kurumu (DASK) bünyesinde konutlar için zorunlu deprem sigortası uygulaması başladı."],
  ["2012","6306 sayılı Kanun","Afet riski altındaki alanların ve riskli yapıların dönüştürülmesine ilişkin kanun kabul edildi; \"kentsel dönüşüm\" süreci hızlandı."],
  ["2015","Sendai Çerçevesi","BM üyeleri, 2015–2030 dönemi için afet riskinin azaltılmasına yönelik küresel çerçeveyi kabul etti."],
  ["2023","6 Şubat depremleri","Kahramanmaraş merkezli iki büyük deprem 11 ili etkiledi; yeniden yapılanma ve dirençli kentleşme gündemin merkezine yerleşti.",1]
 ]},
 {t:"p",html:"Afet riski yönetimi bir döngü olarak düşünülür. Afetten <b>önce</b> riskin azaltılması ve hazırlık, afet <b>sırasında</b> müdahale, afetten <b>sonra</b> ise iyileştirme ve yeniden yapılanma yer alır. Sendai Çerçevesi'nin temel mesajı, kaynakların afet sonrası müdahaleden afet öncesi risk azaltmaya kaydırılmasıdır. Yeniden yapılanma aşamasında \"eskisinden daha iyi inşa etmek\" (<i>build back better</i>) ilkesi öne çıkar. Aşağıdaki önlemleri aşamalarına yerleştirin."},
 {t:"widget",name:"classify",opts:{title:"Bu önlem hangi aşamada?",cats:["Risk azaltma","Hazırlık","Müdahale","Yeniden yapılanma"],items:[
  ["Eski binaların deprem yönetmeliğine göre güçlendirilmesi",0],
  ["Fay hattı üzerine yapılaşmanın imar planıyla yasaklanması",0],
  ["Okullarda düzenli deprem tatbikatı yapılması",1],
  ["Mahallelerde afet toplanma alanlarının belirlenip işaretlenmesi",1],
  ["Enkaz altındaki kişilerin arama-kurtarma ekiplerince çıkarılması",2],
  ["Afetzedelere çadır, su ve sıcak yemek ulaştırılması",2],
  ["Yıkılan kent merkezinin zemin etüdüne dayanarak yeniden planlanması",3],
  ["Kalıcı konutların eskisinden daha dayanıklı standartla inşa edilmesi",3]
 ],note:"Risk azaltma, tehlikenin zarara dönüşme olasılığını kalıcı olarak düşürür; hazırlık, afet anında doğru davranmayı sağlar. Yeniden yapılanma iyi yapılırsa bir sonraki afetin risk azaltma adımına dönüşür; döngü buradan adını alır."}}
]},
{n:"11.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Kentleşme oranı","Kentlerde yaşayan nüfusun toplam nüfusa oranı."],
  ["Yığılma ekonomileri","Firma ve işçilerin bir arada bulunmasının sağladığı verimlilik avantajı."],
  ["Kentsel yayılma","Şehrin düşük yoğunlukla ve otomobile bağımlı biçimde çevreye yayılması."],
  ["Kilitlenme etkisi","Bir kez kurulan altyapının onlarca yıl boyunca davranış ve emisyonları belirlemesi."],
  ["Kentsel ısı adası","Şehir merkezlerinin yapay yüzeyler nedeniyle çevresinden daha sıcak olması."],
  ["Direnç","Şokları karşılama, temel işlevleri sürdürme ve hızla toparlanma kapasitesi."],
  ["Sendai Çerçevesi","2015–2030 dönemi için afet riskini azaltmaya yönelik küresel BM çerçevesi."],
  ["Eskisinden daha iyi inşa","Afet sonrası yeniden yapılanmayı gelecekteki riski azaltma fırsatı olarak kullanma ilkesi."]
 ]}
]},
{n:"11.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"UN DESA'ya göre 2050'de dünya nüfusunun yaklaşık ne kadarının kentlerde yaşaması bekleniyor?",o:["%30","%55","%68","%90"],a:2,e:"2018 Dünya Kentleşme Beklentileri raporu 2050 için %68 öngörür; %55, 2018'deki orandır."},
  {q:"Bir ülkede 100 kişinin 40'ı kentte yaşıyor. Kent nüfusu ikiye katlanırken kırsal nüfus sabit kalırsa kentleşme oranı ne olur?",o:["%57","%60","%80","%50"],a:0,e:"Kent 80, kır 60 kişi olur; 80 ÷ 140 ≈ %57. Oran yalnızca kent nüfusuna değil, toplama göre hesaplanır."},
  {q:"Yazılım şirketlerinin aynı semtte toplanmasıyla nitelikli çalışan bulmanın kolaylaşması hangi kavramla açıklanır?",o:["Kentsel yayılma","Yığılma ekonomileri","Kentsel ısı adası","Kilitlenme etkisi"],a:1,e:"Firmaların bir arada bulunması işgücü, tedarik ve bilgi paylaşımı yoluyla verimlilik sağlar."},
  {q:"Aşağıdakilerden hangisi yayılmacı kent biçiminin tipik sonucudur?",o:["Kişi başına ulaşım enerjisinin düşmesi","Özel otomobile bağımlılığın artması","Toplu taşımanın daha kârlı hâle gelmesi","Tarım arazilerinin korunması"],a:1,e:"Düşük yoğunluk ve birbirinden ayrılmış kullanımlar, mesafeleri uzatır ve otomobil kullanımını zorunlu kılar."},
  {q:"Taşkın riski olan bir dere yatağının betonlanmak yerine park olarak düzenlenmesi neye örnektir?",o:["Gri altyapı","Yeşil altyapı","Kentsel yayılma","Afet sonrası müdahale"],a:1,e:"Yeşil altyapı doğal süreçleri (suyun toprağa sızması, taşkın alanı) kentin işleyişine katar."},
  {q:"Sendai Çerçevesi'nin afet yönetimindeki temel mesajı nedir?",o:["Afet sonrası yardımın tek başına yeterli olduğu","Kaynakların müdahaleden önceden risk azaltmaya kaydırılması","Afetlerin yalnızca doğal olaylar olduğu","Afet yönetiminin yalnızca merkezi hükümetin işi olduğu"],a:1,e:"Çerçeve, önlenebilir kayıpların büyük kısmının afetten önce alınan önlemlerle engellenebileceğini vurgular."},
  {q:"Eski bir okul binasının deprem öncesinde güçlendirilmesi afet riski yönetiminin hangi aşamasıdır?",o:["Müdahale","Yeniden yapılanma","Risk azaltma","Hazırlık"],a:2,e:"Güçlendirme, tehlikenin zarara dönüşme olasılığını kalıcı olarak düşürdüğü için risk azaltma önlemidir."},
  {q:"\"Deprem öldürmez, bina öldürür\" sözü afetlerle ilgili hangi fikri yansıtır?",o:["Depremlerin tahmin edilebildiğini","Afet kaybının insan yapımı kırılganlıktan kaynaklandığını","Depremlerin yalnızca kırsalda etkili olduğunu","Sigortanın kayıpları önlediğini"],a:1,e:"Doğal tehlike kaçınılmaz olabilir; kaybın büyüklüğünü yapı kalitesi, denetim ve planlama belirler."},
  {q:"IPCC'ye göre kentsel alanlar küresel CO₂ ve metan emisyonlarının yaklaşık ne kadarından sorumludur?",o:["%10","%30","%50","%70"],a:3,e:"IPCC AR6 (2022), kentsel alanların bu emisyonların yaklaşık %70'inden sorumlu olduğunu belirtir; bu yüzden iklim çözümlerinin önemli kısmı kentlerdedir."}
 ]}
]}
],
refs:[
 "Sachs, J. D. (2015). <i>The Age of Sustainable Development</i>. Columbia University Press. Türkçe çevirisi: <i>Sürdürülebilir Kalkınma Çağı</i>. Bu haftanın konusu için sürdürülebilir şehirlerle ilgili bölüm.",
 "UN DESA — <i>World Urbanization Prospects</i>: <a href=\"https://population.un.org\">population.un.org</a>",
 "UN-Habitat — Yeni Kentsel Gündem ve SKA 11: <a href=\"https://unhabitat.org\">unhabitat.org</a>",
 "BM Afet Riskini Azaltma Ofisi (UNDRR) — Sendai Çerçevesi: <a href=\"https://www.undrr.org\">undrr.org</a>",
 "AFAD — Afet ve Acil Durum Yönetimi Başkanlığı: <a href=\"https://www.afad.gov.tr\">afad.gov.tr</a>"
],
next:"Sonraki: Hafta 12 — İklim değişikliği"
};
