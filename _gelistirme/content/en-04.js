window.WEEK={
id:"en-04",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Doğal gaz ve kömür",week:4,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Fosil yakıtlar II",
title:"Doğal gaz, LNG, kömür ve <em>geçiş</em> sürecindeki şirketler",
intro:"Bu hafta doğal gaz ticaretini biçimlendiren uzun vadeli sözleşmeleri ve take-or-pay yükümlülüğünü, LNG ile boru hattı gazının artılarını ve eksilerini, kömürün kalitesini belirleyen ölçütleri, fosil yakıt şirketlerinin enerji geçişindeki stratejilerini ve enerji bağımsızlığı ile enerji güvenliği arasındaki farkı öğreneceksiniz. Okuma süresi yaklaşık 45 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, sekmeli karşılaştırmalar ve 10 soruluk bir test var.",
goals:[
 "Take-or-pay yükümlülüğünü açıklayıp eksik çekilen gaz için ödenecek tutarı hesaplayabilirsiniz.",
 "LNG ve boru hattı gaz ticaretini esneklik, maliyet ve risk açısından karşılaştırabilirsiniz.",
 "Kömür türlerini ısıl değere göre sıralayıp bir santralin yakıt ihtiyacını hesaplayabilirsiniz.",
 "Fosil yakıt şirketlerinin geçiş stratejilerini (çekirdek işte verimlilik, çeşitlendirme, CCUS; yatay ve dikey entegrasyon) ayırt edebilirsiniz.",
 "Enerji bağımsızlığı ile enerji güvenliği arasındaki farkı örneklerle açıklayabilirsiniz."
],
sections:[
{n:"4.1",h:"Uzun vadeli gaz sözleşmeleri ve take-or-pay",blocks:[
 {t:"p",html:"Bir doğal gaz sahasını geliştirmek ve binlerce kilometrelik bir boru hattı ya da bir sıvılaştırma tesisi kurmak milyarlarca dolarlık yatırım ister. Üretici bu yatırımı ancak gazını yıllarca satabileceğinden emin olursa yapar. Bu yüzden uluslararası gaz ticaretinin önemli bir bölümü 15–25 yıllık <b>uzun vadeli sözleşmelerle</b> yürür."},
 {t:"def",html:"<b>Take-or-pay</b> (al ya da öde) maddesi, alıcının sözleşmede belirlenen asgari gaz miktarını almayı ya da almasa bile bedelini ödemeyi taahhüt ettiği hükümdür.",src:"Satıcı için gelir ve yatırım güvencesi, alıcı için ise talep düştüğünde bile sürecek bir ödeme yükümlülüğüdür."},
 {t:"p",html:"Sözleşmede genellikle yıllık bir <b>sözleşme miktarı</b> ve bunun belirli bir yüzdesi olarak <b>asgari çekiş yükümlülüğü</b> yer alır. Alıcı yıl sonunda bu asgari miktarın altında kalırsa, eksik kalan kısmın bedelini öder. Çoğu sözleşmede ödenen ama çekilmeyen gazın sonraki yıllarda çekilebilmesine izin veren <b>telafi gazı</b> (make-up) hakkı da bulunur; yine de bu, alıcının nakdini bugünden bağlar."},
 {t:"widget",name:"calc",opts:{title:"Take-or-pay yükümlülüğü",inputs:[{id:"s",label:"Yıllık sözleşme miktarı",min:1000,max:20000,step:500,value:10000,unit:" milyon m³"},{id:"o",label:"Asgari çekiş oranı",min:50,max:100,step:5,value:80,unit:"%"},{id:"c",label:"Fiilen çekilen gaz",min:0,max:20000,step:500,value:7000,unit:" milyon m³"},{id:"f",label:"Sözleşme fiyatı",min:100,max:800,step:10,value:300,unit:" $/bin m³"}],formula:"(function(){var asg=s*o/100,eks=Math.max(0,asg-c);var f2=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:0})};if(eks===0)return 'yok · asgari miktara ('+f2(asg)+' milyon m³) ulaşıldı';return f2(eks*f/1000)+' milyon $ · eksik çekiş '+f2(eks)+' milyon m³';})()",result:"Kullanılmayan gaz için ödeme: {r}",note:"Hesap: eksik miktar = sözleşme × asgari oran − fiilî çekiş; ödeme = eksik miktar × fiyat. 1 milyon m³ = 1.000 bin m³ olduğu için milyon m³ × ($/bin m³) ÷ 1.000 = milyon $. Varsayılan değerlerde ekonomik daralma nedeniyle talebin düştüğü bir yılda alıcı, kullanmadığı 1 milyar m³ gaz için 300 milyon $ öder."}},
 {t:"choice",items:[
  {label:"Finansal risk",title:"Kullanılmayan gaza ödeme",body:"Ekonomik kriz, ılık geçen bir kış, verimlilik artışı ya da yenilenebilir üretimin yükselmesiyle talep düşse bile ödeme sürer. İthalatçı ülkenin bütçesine ve ödemeler dengesine gereksiz yük bindirebilir.",ex:"Bu risk özellikle tek bir alıcı kurumun (çoğunlukla devlet şirketinin) uzun vadeli sözleşmelerin tamamını üstlendiği ülkelerde belirgindir."},
  {label:"Operasyonel risk",title:"Esneklik kaybı",body:"Alıcı, daha ucuz ya da daha temiz bir kaynağa yönelmek istese bile asgari miktarı çekmek zorunda kalabilir. Örneğin elektrik üretiminde gaz yerine ucuzlayan yenilenebilir kaynakları kullanmak ekonomik olsa da sözleşme yükümlülüğü bunu sınırlar.",ex:"Bu yüzden ithalatçılar yeni sözleşmelerde daha düşük asgari oranlar, daha kısa süreler ve daha fazla esneklik talep eder."},
  {label:"Satıcı açısından",title:"Yatırımın güvencesi",body:"Satıcı için take-or-pay, büyük sabit yatırımın geri dönüşünü garanti eden bir sigortadır. Bankalar da proje finansmanı verirken bu gelir güvencesini arar.",ex:"Hafta 09'da proje finansmanını işlerken aynı mantığı uzun vadeli elektrik alım anlaşmalarında (PPA) göreceğiz."}
 ]}
]},
{n:"4.2",h:"LNG mi, boru hattı mı?",blocks:[
 {t:"p",html:"Doğal gaz uluslararası ticarette iki yoldan taşınır: <b>boru hatlarıyla</b> ya da sıvılaştırılarak <b>LNG</b> (sıvılaştırılmış doğal gaz) olarak. Gaz yaklaşık −162 °C'ye soğutulunca sıvılaşır ve hacmi yaklaşık <b>600'de birine</b> iner; böylece özel tankerlerle okyanus aşırı taşınabilir."},
 {t:"p",html:"LNG değer zinciri dört ana halkadan oluşur: sahada üretim ve işleme, <b>sıvılaştırma</b> tesisi, <b>tankerle taşıma</b> ve alıcı ülkede <b>depolama ve yeniden gazlaştırma</b>. Zincirin en pahalı halkaları sıvılaştırma ve taşımadır; bu yüzden LNG'nin fiyatı yalnızca üretim maliyetine değil, küresel navlun koşullarına da bağlıdır."},
 {t:"table",head:["Ölçüt","Boru hattı gazı","LNG"],rows:[
  ["Coğrafi esneklik","Yalnızca hattın bağladığı iki noktayı birleştirir","Tankerle terminali olan her limana ulaşabilir"],
  ["Tedarikçi çeşitliliği","Hat kurulduktan sonra satıcı ve alıcı birbirine bağlıdır","Alıcı farklı ülkelerden kargo alabilir"],
  ["Yatırım","Hat boyunca yüksek; mesafe kısaldıkça ekonomik","Sıvılaştırma, tanker ve yeniden gazlaştırma tesisleri çok pahalı"],
  ["Enerji kaybı","Kompresör istasyonlarında görece az","Sıvılaştırma ve yeniden gazlaştırma ciddi enerji tüketir"],
  ["Fiyat","Uzun vadeli sözleşmelerle genellikle daha istikrarlı","Spot piyasaya açık, daha dalgalı"],
  ["Ana risk","Geçiş ülkesi ve tedarikçiye siyasi bağımlılık","Küresel fiyat sıçramaları ve kargo rekabeti"]]},
 {t:"p",html:"Kural olarak kısa ve orta mesafede boru hattı daha ucuzdur; mesafe uzadıkça ve deniz aşmak gerektikçe LNG rekabetçi hâle gelir. Ama karar yalnızca maliyetle verilmez. Boru hattı istikrar, LNG ise <b>esneklik ve çeşitlilik</b> sağlar; ithalatçı ülkeler genellikle ikisini birlikte kullanarak riski dağıtır."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye her iki yolu da kullanır. Boru hatlarıyla Rusya'dan (Karadeniz altından geçen Mavi Akım ve 2020'de açılan TürkAkım) ve Azerbaycan'dan (2018'de işletmeye giren TANAP ile Şah Deniz gazı) gaz alır; İran'dan da uzun yıllar boru hattıyla gaz ithal edilmiştir. TürkAkım iki hattan oluşur: biri Türkiye'ye, öteki Avrupa'ya gaz taşır. LNG tarafında Marmara Ereğlisi ve Aliağa'daki kara terminallerine ek olarak Hatay Dörtyol ve Saros körfezinde yüzer depolama ve yeniden gazlaştırma birimleri (FSRU) bulunur. Silivri ve Tuz Gölü'ndeki yeraltı depoları kış talebini dengeler. 2020'de keşfedilen Sakarya sahasından ise 2023'te ilk yerli gaz üretimine başlandı."},
 {t:"widget",name:"classify",opts:{title:"Hangisinin özelliği?",cats:["Boru hattı","LNG"],items:[
  ["Kargo farklı ülkelerden spot piyasada satın alınabilir",1],
  ["Geçiş ülkesindeki siyasi kriz akışı kesebilir",0],
  ["Gaz −162 °C'ye soğutulur",1],
  ["Kompresör istasyonlarıyla basınç korunur",0],
  ["Alıcı ülkede yeniden gazlaştırma terminali gerekir",1],
  ["Satıcı ve alıcı kurulan hatla birbirine fiziksel olarak bağlanır",0],
  ["Fiyatı küresel navlun ve tanker kiralarından etkilenir",1],
  ["Kısa ve orta mesafede genellikle daha ucuzdur",0]
 ],note:"LNG'nin gücü esneklik ve çeşitliliktir; boru hattının gücü maliyet ve istikrardır. Hafta 08'de gaz fiyatlamasında petrole endeksleme ile piyasa merkezi (hub) fiyatlamasını karşılaştıracağız."}}
]},
{n:"4.3",h:"Kömürün kalitesi",blocks:[
 {t:"p",html:"Her kömür aynı değildir. Kömürün kalitesini iki ölçüt öne çıkarır: <b>ısıl değer</b> (yakıldığında açığa çıkan enerji, kcal/kg ya da MJ/kg) ve <b>uçucu madde içeriği</b> (yanma karakteristiği). Uçucu madde oranı yüksek kömür kolay tutuşur ve hızlı yanar; bu genellikle düşük kaliteli kömürlerde görülür. Uçucu maddesi düşük kömür (ör. antrasit) daha yavaş ve daha yüksek sıcaklıkta yanar. Çelik üretiminde kullanılan kok kömürü ise uçucu maddesi orta düzeyde olan, ısıtılınca yumuşayıp kok hâline gelebilen özel bitümlü kömürlerden seçilir."},
 {t:"p",html:"Bunlara ek olarak <b>kül</b>, <b>kükürt</b> ve <b>nem</b> oranı da kaliteyi belirler. Nem ve kül yanmaz; taşınan her ton kömürün bir kısmının enerji vermeyen yük olduğu anlamına gelir. Kükürt ise yanmada kükürt dioksite dönüşür ve baca gazı arıtma yatırımı gerektirir."},
 {t:"table",head:["Kömür türü","Isıl değer (kcal/kg, yaklaşık)","Karbon içeriği","Başlıca kullanım"],rows:[
  ["Antrasit","8.000 – 8.500","Çok yüksek","Isınma, sanayi"],
  ["Bitümlü (taşkömürü)","6.000 – 7.500","Yüksek","Elektrik üretimi, kok"],
  ["Alt bitümlü","4.500 – 6.000","Orta","Elektrik üretimi"],
  ["Linyit","2.500 – 4.500 (bazı yataklarda daha düşük)","Düşük","Elektrik üretimi (çoğunlukla maden ağzında)"]]},
 {t:"p",html:"Düşük kalorili kömürü uzağa taşımak ekonomik değildir; taşıma maliyetinin büyük kısmı nem ve küle gider. Bu yüzden linyit santralleri genellikle <b>maden sahasının hemen yanına</b> kurulur. Aşağıdaki hesaplayıcıyla ısıl değerin yakıt ihtiyacını nasıl değiştirdiğini görün."},
 {t:"widget",name:"calc",opts:{title:"Santralin kömür ihtiyacı",inputs:[{id:"h",label:"Kömürün ısıl değeri",min:1000,max:8500,step:100,value:2000,unit:" kcal/kg"},{id:"v",label:"Santral verimi",min:25,max:47,step:1,value:35,unit:"%"},{id:"p",label:"Santral gücü",min:100,max:1500,step:50,value:600,unit:" MW"},{id:"k",label:"Kapasite faktörü",min:30,max:90,step:5,value:75,unit:"%"}],formula:"(function(){var kg=860000/(h*v/100);var mwh=p*8760*k/100;var t=kg*mwh/1000;var f=function(x){return Math.round(x).toLocaleString('tr-TR')};return f(kg)+' kg/MWh · yılda yaklaşık '+(t/1e6).toLocaleString('tr-TR',{maximumFractionDigits:2})+' milyon ton ('+f(mwh/1000)+' GWh üretim için)';})()",result:"Kömür ihtiyacı: {r}",note:"Hesap: 1 kWh = 860 kcal. 1 MWh elektrik için gereken kömür = 860.000 ÷ (ısıl değer × verim) kg. Isıl değeri 2.000'den 6.000 kcal/kg'a çıkarın: aynı elektrik için gereken kömür üçte birine iner. Türkiye'nin linyit yataklarının büyük bölümü düşük kalorilidir; bu nedenle yerli linyit santralleri büyük miktarda kömür yakar ve maden ağzında kurulur."}}
]},
{n:"4.4",h:"Fosil yakıt şirketleri ve enerji geçişi",blocks:[
 {t:"p",html:"<b>Enerji geçişi</b>, enerji sisteminin fosil yakıtlardan yenilenebilir ve düşük karbonlu kaynaklara yönelmesidir. İklim politikaları, karbon fiyatlaması ve kamuoyu baskısı, petrol, gaz ve kömür şirketlerini iş modellerini yeniden düşünmeye zorluyor. Şirketler hem bugünkü nakit akışını korumak hem de geleceğin piyasalarında yer edinmek ister."},
 {t:"choice",items:[
  {label:"Çekirdek işte verimlilik",title:"Mevcut işi daha ucuz ve daha temiz yapmak",body:"Fosil yakıt faaliyetlerinde maliyetleri düşürüp kârlılığı artırmak. Metan kaçaklarını azaltmak, sahaları elektrikle çalıştırmak bu stratejinin parçasıdır.",ex:"Amaç: geçiş sürecinde finansal gücü korumak, yeni yatırımlar için nakit yaratmak."},
  {label:"Çeşitlendirme",title:"Nakdi yeni alanlara yönlendirmek",body:"Fosil işlerden elde edilen nakit akışını güneş ve rüzgâr santrallerine, depolamaya, hidrojen altyapısına ya da elektrikli araç şarj ağlarına yatırmak. Yenilenebilir şirketleriyle ortaklık ya da satın alma da bu yoldur.",ex:"Kitap bu stratejiye “yatay çeşitlendirme” der: aynı enerji sektöründe yeni ürün alanlarına yayılmak."},
  {label:"CCUS",title:"Kaçınılmaz emisyonları yakalamak",body:"Karbon yakalama, kullanma ve depolama (CCUS), karbondioksitin tesislerden yakalanarak yer altında depolanması ya da ürün hammaddesi olarak kullanılmasıdır. Fosil yakıt kullanımı bir anda bitemeyeceği için kaçınılmaz emisyonları azaltmayı hedefler.",ex:"Ekonomik uygulanabilirliği büyük ölçüde karbon fiyatına bağlıdır; Hafta 12'de ayrıntılı göreceğiz."}
 ]},
 {t:"p",html:"Şirketlerin büyüme biçimini anlatan iki kavram da önemlidir. <b>Yatay entegrasyon</b>, şirketin kendi faaliyet alanındaki rakiplerini satın alması ya da onlarla birleşmesidir (bir petrol şirketinin başka bir petrol şirketini alması); ölçek ekonomisi ve pazar gücü sağlar. <b>Dikey entegrasyon</b> ise değer zincirinin farklı halkalarını kontrol etmektir (aynı şirketin arama-üretim, rafineri ve akaryakıt istasyonlarını yönetmesi); arz güvencesi ve fiyat üzerinde kontrol sağlar."},
 {t:"box",lbl:"Atıl varlık riski",html:"Karbon fiyatlarının yükselmesi ve talebin dönüşmesi, bugün yapılan bazı fosil yakıt yatırımlarının ömrü dolmadan ekonomik değerini yitirmesine yol açabilir. Bu varlıklara <b>atıl varlık</b> (stranded asset) denir. Kırk yıllık ömür için tasarlanmış bir kömür santrali, yirmi yıl sonra karbon maliyeti nedeniyle zararına çalışır hâle gelebilir. Yatırımcılar bu riski artık proje değerlendirmesine dahil ediyor."}
]},
{n:"4.5",h:"Enerji bağımsızlığı ve enerji güvenliği",blocks:[
 {t:"p",html:"Bu iki kavram siyasette sık karıştırılır. <b>Enerji bağımsızlığı</b>, bir ülkenin enerji ihtiyacını tamamen kendi kaynaklarıyla karşılamasıdır. <b>Enerji güvenliği</b> ise enerjinin kesintisiz, ödenebilir, çevresel açıdan kabul edilebilir ve güvenilir yollarla temin edilmesidir; Hafta 02'deki 4A çerçevesini hatırlayın."},
 {t:"table",head:["","Enerji bağımsızlığı","Enerji güvenliği"],rows:[
  ["Odak","Kaynağın ülke içinde olması","Arzın kesintisiz ve uygun koşullarda sağlanması"],
  ["Araçlar","Yerli üretim, yerli yenilenebilir kaynaklar","Çeşitlendirme, uzun vadeli sözleşmeler, depolama, LNG terminalleri, verimlilik, yerli üretim"],
  ["Ulaşılabilirlik","Küresel piyasalarda çoğu ülke için çok zor","İthalata rağmen ulaşılabilir"]]},
 {t:"p",html:"Bir ülke bağımsız olmadan güvende olabilir mi? Evet. Kitaptaki örnek <b>Japonya</b>dır: enerjisinin büyük bölümünü ithal etmesine rağmen tedarikçi ve yakıt çeşitliliği, uzun vadeli sözleşmeler, LNG altyapısı ve büyük stratejik stoklarla yüksek bir güvenlik düzeyi sağlar. Tersine, kendi kaynağı bol bir ülke de tek bir ihraç güzergâhına ya da tek bir yakıta bağımlıysa kırılgan olabilir."},
 {t:"p",html:"Kısacası tam bağımsızlık çoğu ülke için ulaşılması zor bir idealdir; asıl hedef güvenliktir. Yerli kaynak geliştirmek bu hedefin <i>araçlarından</i> biridir, kendisi değil. Türkiye'nin yerli linyit, yenilenebilir kaynaklar ve Sakarya gazına yatırımı ile kaynak ve güzergâh çeşitlendirmesi aynı stratejinin iki ayağıdır."}
]},
{n:"4.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Take-or-pay","Asgari gaz miktarını almayı ya da almasa bile bedelini ödemeyi taahhüt eden sözleşme maddesi."],
  ["Telafi gazı (make-up)","Ödenip çekilmeyen gazın sonraki yıllarda çekilebilme hakkı."],
  ["LNG","−162 °C'de sıvılaştırılmış, hacmi yaklaşık 600'de birine inmiş doğal gaz."],
  ["FSRU","Yüzer depolama ve yeniden gazlaştırma birimi; LNG'yi gemi üzerinde gaza çevirir."],
  ["Isıl değer","Kömürün yakıldığında açığa çıkardığı enerji (kcal/kg)."],
  ["Uçucu madde","Kömürün yanma hızını ve tutuşma kolaylığını belirleyen bileşenler."],
  ["Yatay entegrasyon","Aynı faaliyet alanındaki rakiplerle birleşme ya da onları satın alma."],
  ["Dikey entegrasyon","Değer zincirinin farklı halkalarını aynı şirket bünyesinde kontrol etme."],
  ["Atıl varlık","Ömrü dolmadan ekonomik değerini yitiren yatırım; örneğin karbon maliyeti nedeniyle kapanan santral."],
  ["Enerji bağımsızlığı","Enerji ihtiyacının tamamen yerli kaynaklarla karşılanması; güvenlikle aynı şey değil."]
 ]}
]},
{n:"4.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Take-or-pay maddesi en çok kimin riskini azaltır?",o:["Alıcının fiyat riskini","Satıcının gelir ve yatırım riskini","Geçiş ülkesinin siyasi riskini","Tüketicinin fatura riskini"],a:1,e:"Satıcı, talep düşse bile asgari gelirini güvenceye alır; risk büyük ölçüde alıcıya geçer."},
  {q:"Yıllık sözleşme 8.000 milyon m³, asgari çekiş %75, fiilî çekiş 5.000 milyon m³ ve fiyat 400 $/bin m³'tür. Take-or-pay ödemesi ne kadardır?",o:["400 milyon $","1.200 milyon $","800 milyon $","2.000 milyon $"],a:0,e:"Asgari miktar 8.000 × 0,75 = 6.000 milyon m³; eksik çekiş 6.000 − 5.000 = 1.000 milyon m³ = 1 milyar m³. 1.000.000 bin m³ × 400 $ = 400 milyon $."},
  {q:"LNG ticaretinin boru hattına göre en önemli avantajı nedir?",o:["Her mesafede daha ucuz olması","Tedarikçi ve güzergâh esnekliği sağlaması","Fiyatlarının hiç dalgalanmaması","Yeniden gazlaştırma gerektirmemesi"],a:1,e:"Tankerle farklı ülkelerden kargo alınabilir; tek bir tedarikçiye ve geçiş ülkesine bağımlılık azalır."},
  {q:"Doğal gaz sıvılaştırıldığında hacmi yaklaşık ne kadar küçülür?",o:["2 kat","60 kat","600 kat","6.000 kat"],a:2,e:"−162 °C'de sıvılaşan gazın hacmi yaklaşık 600'de birine iner; okyanus aşırı taşımayı mümkün kılan budur."},
  {q:"Aşağıdaki kömür türlerinden hangisinin ısıl değeri en yüksektir?",o:["Linyit","Alt bitümlü","Bitümlü","Antrasit"],a:3,e:"Antrasit en yüksek karbon içeriğine ve yaklaşık 8.000–8.500 kcal/kg ısıl değere sahiptir; linyit en düşüktür."},
  {q:"Verimi %40 olan bir santral 6.000 kcal/kg kömür yakıyor. 1 MWh elektrik için yaklaşık ne kadar kömür gerekir?",o:["~144 kg","~358 kg","~860 kg","~2.150 kg"],a:1,e:"860.000 ÷ (6.000 × 0,40) = 860.000 ÷ 2.400 ≈ 358 kg."},
  {q:"Linyit santrallerinin genellikle maden sahasının yanına kurulmasının nedeni nedir?",o:["Linyitin ısıl değerinin çok yüksek olması","Nemli ve küllü kömürü taşımanın pahalı olması","Linyitin boru hattıyla taşınabilmesi","Yasaların başka bir yere kurulmayı yasaklaması"],a:1,e:"Taşınan tonajın önemli kısmı enerji vermeyen nem ve küldür; taşıma maliyeti yakıtın değerine göre çok yüksektir."},
  {q:"Bir petrol şirketinin hem arama-üretim hem rafineri hem de akaryakıt istasyonlarını işletmesi hangi stratejidir?",o:["Yatay entegrasyon","Dikey entegrasyon","Karbon yakalama","Çekirdek işte verimlilik"],a:1,e:"Değer zincirinin farklı halkalarını aynı şirketin kontrol etmesi dikey entegrasyondur."},
  {q:"“Atıl varlık” (stranded asset) riski en iyi hangi örnekle açıklanır?",o:["Bir güneş santralinin gece hiç üretim yapmaması","Kömür santralinin karbon fiyatı yüzünden erken kapanması","Bir rafinerinin planlı bakım için birkaç hafta durması","Bir LNG tankerinin boşaltma için limanda beklemesi"],a:1,e:"Atıl varlık, düzenleme ya da piyasa değişimi nedeniyle ömrü dolmadan ekonomik değerini yitiren yatırımdır."},
  {q:"Japonya örneği enerji bağımsızlığı ve güvenliği hakkında ne gösterir?",o:["Bağımsızlık olmadan güvenliğin sağlanamayacağını","İthalatçı ülkenin çeşitlendirmeyle güvende olabileceğini","Yerli kaynağı olan her ülkenin her zaman güvende olduğunu","LNG ithalatının enerji güvenliğini her durumda azalttığını"],a:1,e:"Japonya enerjisinin büyük bölümünü ithal eder, ama tedarik çeşitliliği, LNG altyapısı ve stoklarla yüksek güvenlik sağlar."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 2, s. 25–39.",
 "International Energy Agency — Natural gas: <a href=\"https://www.iea.org\">iea.org</a>",
 "Boru Hatları ile Petrol Taşıma A.Ş. (BOTAŞ): <a href=\"https://www.botas.gov.tr\">botas.gov.tr</a>",
 "T.C. Enerji ve Tabii Kaynaklar Bakanlığı: <a href=\"https://enerji.gov.tr\">enerji.gov.tr</a>"
],
next:"Sonraki: Hafta 05 — Yenilenebilir enerji I: güneş, rüzgâr, hidroelektrik"
};
