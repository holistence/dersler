window.WEEK={
id:"ge-12",code:"GE",course:"Genel Ekonomi",short:"Enflasyon ve para",week:12,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Makroiktisat",
title:"Enflasyon ve <em>para</em>",
intro:"Bu hafta fiyatlar genel düzeyinin neden yükseldiğini, enflasyonun nasıl ölçüldüğünü ve kime ne kaybettirdiğini öğreneceksiniz. Ardından paranın ne olduğuna, bankaların nasıl kaydi para yarattığına, merkez bankasının araçlarına ve nominal faiz ile reel faiz arasındaki farka geçeceğiz. Okuma süresi yaklaşık 45 dakika; sayfada üç hesaplayıcı, bir grafik, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Talep ve maliyet enflasyonunu ayırt edip stagflasyon, deflasyon ve hiperenflasyonu tanımlayabilirsiniz.",
 "Fiyat endeksinden enflasyon oranını hesaplayıp TÜFE, ÜFE ve GSYH deflatörünü karşılaştırabilirsiniz.",
 "Enflasyonun ekonomik ve sosyal maliyetlerini, kazananları ve kaybedenleriyle açıklayabilirsiniz.",
 "Paranın işlevlerini, para arzı tanımlarını ve kaydi para yaratma sürecini açıklayıp para çarpanını hesaplayabilirsiniz.",
 "Fisher denklemiyle reel faizi hesaplayıp merkez bankasının araçlarının etkisini yorumlayabilirsiniz."
],
sections:[
{n:"12.1",h:"Enflasyon nedir, neden olur?",blocks:[
 {t:"def",html:"<b>Enflasyon</b>: Mal ve hizmetlerin genel fiyat düzeyinin sürekli ve yaygın olarak artması.",src:"Tek bir malın pahalanması enflasyon değildir; belirleyici olan genel fiyat düzeyinin sürekli artmasıdır. Sonuç olarak aynı parayla daha az mal alınır, paranın satın alma gücü düşer."},
 {t:"p",html:"Enflasyonun nedenleri iki ana kümede toplanır. <b>Talep enflasyonunda</b> toplam harcama ekonominin üretebileceğini aşar: \"çok fazla para, çok az mal\". Kamu harcamalarının artması, ihracatın canlanması, güvenin yükselmesi veya faizlerin düşürülmesi talebi büyütür. <b>Maliyet enflasyonunda</b> ise fiyatlar talep artmadan, üretim maliyetleri yükseldiği için artar: enerji ve ham madde fiyatları, ücretler, döviz kurundaki yükseliş, dolaylı vergiler."},
 {t:"widget",name:"classify",opts:{title:"Talep mi, maliyet mi?",cats:["Talep enflasyonu","Maliyet enflasyonu"],items:[
  ["Petrol fiyatlarının dünya piyasasında sert yükselmesi",1],
  ["Faizlerin düşmesiyle kredili tüketimin hızla artması",0],
  ["Döviz kurunun yükselmesiyle ithal girdilerin pahalanması",1],
  ["Seçim öncesi kamu harcamalarının büyük ölçüde artırılması",0],
  ["Akaryakıtta ÖTV'nin artırılması",1],
  ["İhracat siparişlerinin patlaması ve kapasitenin dolması",0],
  ["Asgari ücrete verimlilik artışının üzerinde zam yapılması",1],
  ["Tüketici güveninin yükselmesiyle harcamaların öne çekilmesi",0]],
  note:"Talep enflasyonu harcama tarafından gelir ve toplam talep eğrisini sağa kaydırır; maliyet enflasyonu üretim tarafından gelir ve arz eğrisini sola kaydırır. Gerçekte ikisi çoğu zaman birlikte görülür: kur artışı maliyeti, gevşek para politikası talebi besler."}},
 {t:"table",head:["Durum","Tanım","Örnek"],rows:[
  ["Hiperenflasyon","Aylık %50'nin üzerinde fiyat artışı; para işlevini yitirir","1920'ler Almanyası, 2000'ler Zimbabve'si"],
  ["Stagflasyon","Durgunluk ile yüksek enflasyonun bir arada görülmesi","1970'lerin petrol şokları"],
  ["Deflasyon","Fiyatlar genel düzeyinin sürekli düşmesi; harcama ertelenir","Durgunluk-deflasyon sarmalı"],
  ["Daralma enflasyonu (shrinkflation)","Fiyat aynı kalırken miktarın azaltılması; örtülü fiyat artışı","150 g çikolatanın 135 grama inmesi"]]}
]},
{n:"12.2",h:"Enflasyonu ölçmek",blocks:[
 {t:"p",html:"Enflasyon, sabit bir mal ve hizmet sepetinin fiyatındaki değişimi izleyen fiyat endeksleriyle ölçülür. Formül her endeks için aynıdır: <b>Enflasyon (%) = (Cari endeks − Önceki endeks) ÷ Önceki endeks × 100</b>."},
 {t:"widget",name:"calc",opts:{title:"Endeksten enflasyon oranına",inputs:[
  {id:"e0",label:"Önceki dönem endeksi",min:100,max:1000,step:5,value:250},
  {id:"e1",label:"Cari dönem endeksi",min:100,max:1500,step:5,value:300}],
  formula:"(e1-e0)/e0*100",result:"Enflasyon oranı: %{r}",digits:1,
  note:"Kitaptaki örnek: Ocak 2023 endeksi 250, Ocak 2024 endeksi 300 → %20. Endeks puanındaki farkı (50) değil, yüzde değişimi okuyun: aynı 50 puanlık artış, endeks 500'den başlasaydı %10 olurdu."}},
 {t:"table",head:["Endeks","Neyi ölçer?","Güçlü yanı","Zayıf yanı"],rows:[
  ["TÜFE","Tüketicinin satın aldığı sabit sepetin fiyatı","Yaşam maliyetini doğrudan gösterir, aylık açıklanır","Sabit sepet ikameyi ve kalite artışını tam yansıtmaz"],
  ["ÜFE","Üreticilerin sattığı malların fiyatı","Tüketici fiyatlarına gelecek baskının öncü sinyali","Tüketiciye ne kadar ve ne hızla yansıyacağı belirsiz"],
  ["GSYH deflatörü","Yurt içinde üretilen tüm nihai malların fiyatı","En geniş kapsam, sepet sabit değil","Çeyreklik açıklanır, ithal malları içermez"]]},
 {t:"p",html:"Merkez bankaları ayrıca <b>çekirdek enflasyonu</b> izler: gıda ve enerji gibi oynak kalemler çıkarıldığında kalan eğilim. Çekirdek göstergeler, geçici şokları kalıcı fiyat eğiliminden ayırmaya yarar."},
 {t:"widget",name:"chart",opts:{title:"Türkiye: TÜFE yıllık değişim (Aralık ayları)",unit:"%",kind:"bar",labels:["2018","2019","2020","2021","2022","2023","2024","2025"],series:[{name:"TÜFE",values:[20.30,11.84,14.60,36.08,64.27,64.77,44.38,30.89]}],source:"TÜİK, Tüketici Fiyat Endeksi bültenleri (yıllık % değişim, Aralık)."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"TÜFE'yi TÜİK her ayın başında açıklar; Türkiye Cumhuriyet Merkez Bankası (TCMB) para politikasını bu veriye göre yönetir. TCMB'nin orta vadeli enflasyon hedefi %5'tir; kitapta belirtildiği gibi gelişmiş ülkelerin merkez bankalarında bu oran genellikle %2'dir. Yukarıdaki grafikte enflasyonun hedeften ne kadar uzaklaştığını görebilirsiniz."}
]},
{n:"12.3",h:"Enflasyonun maliyetleri: kim kaybeder, kim kazanır?",blocks:[
 {t:"p",html:"Enflasyon sık sık \"görünmez bir vergi\" olarak nitelenir. Kimse fatura kesmez, ama paranın değeri sessizce erir. Maliyetleri ekonomik ve sosyal olarak ikiye ayırabiliriz."},
 {t:"choice",items:[
  {label:"Sabit gelirliler",title:"Satın alma gücünün erimesi",body:"Geliri fiyatlarla aynı hızda artmayan emekliler, memurlar ve asgari ücretliler en çok kaybedenlerdir.",ex:"%30 zam, %40 enflasyon ortamında reel kayıp demektir (1,30 ÷ 1,40 − 1 ≈ −%7)."},
  {label:"Alacaklı ve borçlu",title:"Servetin el değiştirmesi",body:"Borçlu, borcunu değeri düşmüş parayla öder; tasarruf sahibi ve alacaklı kaybeder. Sonuç tasarruf sahiplerinden borçlulara bir servet transferidir.",ex:"Sabit faizli konut kredisi kullanan biri, enflasyon beklenenden yüksek çıkarsa reel olarak kazançlı çıkar."},
  {label:"Belirsizlik",title:"Yatırımın azalması",body:"Gelecekteki maliyet ve fiyatları kestiremeyen firmalar uzun vadeli yatırımı erteler; tasarruflar üretken alanlardan döviz, altın ve emlak gibi spekülatif alanlara kayar.",ex:"Uzun vadeli kredi ve sabit fiyatlı sözleşme piyasası daralır."},
  {label:"Menü maliyeti",title:"Fiyat etiketlerini değiştirmek",body:"Sürekli değişen fiyatları menülere, etiketlere ve kataloglara yansıtmanın zaman ve kaynak maliyeti.",ex:"Restoranın her ay menüsünü yeniden bastırması."},
  {label:"Ayakkabı eskitme",title:"Parayı korumanın maliyeti",body:"İnsanlar paralarını değer kaybından korumak için sık sık bankaya, döviz bürosuna gider; harcanan zaman ve emek israftır.",ex:"Maaş yatar yatmaz dövize ya da altına çevirmek."}
 ]},
 {t:"p",html:"Sosyal maliyetler de ağırdır: geçim sıkıntısının yarattığı stres, ekonomik kurumlara güvenin aşınması, kısa vadeli düşünmenin yaygınlaşması ve kendini enflasyondan koruyabilenler ile koruyamayanlar arasındaki uçurumun büyümesi."}
]},
{n:"12.4",h:"Para nedir?",blocks:[
 {t:"p",html:"Paradan önce takas vardı ve dört sorunu vardı: ihtiyaçların karşılıklı çakışması gerekiyordu, ortak bir değer ölçüsü yoktu, büyük mallar bölünemiyordu ve çoğu mal zamanla bozuluyordu. Para bu sorunları çözen, toplumca genel kabul görmüş bir araçtır ve üç temel işlev görür:"},
 {t:"list",items:[
  "<b>Değişim aracı:</b> Ekmek almak için fırıncıya buğday değil para verirsiniz.",
  "<b>Hesap birimi:</b> Her malın değeri aynı ölçüyle ifade edilir; bir otomobil ile bir simidin fiyatı karşılaştırılabilir.",
  "<b>Değer saklama aracı:</b> Bu ayın gelirinin bir kısmını gelecek ay harcayabilirsiniz. Enflasyon en çok bu işlevi zayıflatır."]},
 {t:"timeline",items:[
  ["Takas","Doğrudan değişim","Buğday verip kumaş almak."],
  ["Mal para","Değeri kendinden","Tuz, deniz kabuğu, sığır, değerli metaller."],
  ["MÖ 7. yy","Sikke","Lidyalılar standart ağırlık ve saflıkta madeni para bastı.",1],
  ["Temsilî para","Metale çevrilebilir kâğıt","Altın veya gümüş karşılığı banknot."],
  ["İtibari para","Devletin güvencesi","Maden karşılığı olmayan Türk lirası, ABD doları, euro."],
  ["Kaydi para","Banka mevduatı","Modern ekonomide para arzının büyük çoğunluğu."],
  ["Dijital varlıklar","Kriptografi","Bitcoin, Ethereum; devletin para tekeline meydan okuma iddiası."]]},
 {t:"p",html:"Bir varlığın para olabilmesi için genel kabul görmesi, dayanıklı, taşınabilir, bölünebilir ve homojen olması, taklit edilmesinin zor olması ve değerini koruması gerekir. Hiperenflasyon yaşayan ülkelerde ulusal paranın genel kabulü zayıflar ve insanlar yabancı paralara yönelir."}
]},
{n:"12.5",h:"Para arzı ve kaydi para yaratımı",blocks:[
 {t:"p",html:"Para arzı, belirli bir anda ekonomide bulunan para stokudur ve <b>likiditeye</b>, yani nakde ne kadar kolay çevrilebildiğine göre katmanlara ayrılır. TCMB tanımlarında M1 dolaşımdaki para ile vadesiz mevduattan; M2, M1'e vadeli mevduatın eklenmesinden; M3 ise M2'ye repo, para piyasası fonları ve benzeri likit varlıkların eklenmesinden oluşur."},
 {t:"p",html:"Paranın büyük kısmını merkez bankası değil, bankalar yaratır. Bir kişi bankaya 1.000 TL yatırsın ve zorunlu karşılık oranı %10 olsun. Banka 100 TL'yi ayırır, 900 TL'yi kredi olarak verir. Kredi harcanır ve başka bir bankaya mevduat olarak döner; o banka 90 TL ayırıp 810 TL kredi açar. Zincir her turda küçülerek sürer."},
 {t:"widget",name:"calc",opts:{title:"Para çarpanı",inputs:[
  {id:"d",label:"İlk mevduat",min:100,max:10000,step:100,value:1000,unit:" TL"},
  {id:"rr",label:"Zorunlu karşılık oranı",min:1,max:50,step:1,value:10,unit:"%"}],
  formula:"'Çarpan '+(100/rr).toFixed(1).replace('.',',')+' · Toplam mevduat potansiyeli '+Math.round(d*100/rr).toLocaleString('tr-TR')+' TL'",
  result:"{r}",
  note:"Para çarpanı = 1 ÷ zorunlu karşılık oranı. Bu teorik bir üst sınırdır: gerçekte insanlar paranın bir kısmını nakit tutar ve bankalar zorunlu olandan fazla rezerv ayırabilir, bu yüzden gerçek çarpan daha küçüktür."}}
]},
{n:"12.6",h:"Para talebi, merkez bankası ve politika araçları",blocks:[
 {t:"p",html:"Keynes'in likidite tercihi teorisine göre insanlar parayı üç güdüyle elde tutar: günlük alışveriş için <b>işlem</b>, beklenmedik durumlar için <b>ihtiyat</b>, faiz değişimlerinden yararlanmak için <b>spekülasyon</b>. İlk ikisi gelirle artar; üçüncüsü faizle ters yönlüdür, çünkü faiz yükseldikçe parayı elde tutmanın fırsat maliyeti artar. Kısaca Md = L(Y, i)."},
 {t:"p",html:"Para piyasasında denge, para arzı ile para talebinin kesiştiği noktada faiz oranını belirler. Merkez bankası bu dengeyi dört araçla etkiler:"},
 {t:"table",head:["Araç","Daraltıcı (enflasyonla mücadele)","Genişletici (canlandırma)"],rows:[
  ["Açık piyasa işlemleri","Tahvil satar, piyasadan para çeker","Tahvil alır, piyasaya para sürer"],
  ["Zorunlu karşılık oranı","Artırır, bankaların kredi kapasitesi azalır","Düşürür, kredi kapasitesi artar"],
  ["Politika faizi","Artırır, tüm piyasa faizleri yükselir","Düşürür, krediler ucuzlar"],
  ["Reeskont oranı","Artırır, bankaların MB'den borçlanması pahalanır","Düşürür, borçlanma kolaylaşır"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"TCMB'nin temel politika aracı <b>bir hafta vadeli repo ihale faiz oranıdır</b>. Para Politikası Kurulu bu oranı toplantılarında belirler ve kararlar TCMB'nin internet sitesinde duyurulur. Politika faizindeki değişiklik önce bankalar arası piyasaya, oradan kredi ve mevduat faizlerine yayılır."}
]},
{n:"12.7",h:"Nominal faiz, reel faiz ve Fisher denklemi",blocks:[
 {t:"p",html:"Bankanın ilan ettiği faiz <b>nominal faizdir</b> (i). Tasarruf sahibini asıl ilgilendiren, enflasyondan arındırılmış getiri yani <b>reel faizdir</b> (r). İkisi arasındaki bağı Irving Fisher'ın adını taşıyan denklem kurar:"},
 {t:"def",html:"(1 + i) = (1 + r) × (1 + πᵉ) &nbsp;&nbsp;→&nbsp;&nbsp; yaklaşık olarak r ≈ i − πᵉ",src:"πᵉ beklenen enflasyondur. Yaklaşık formül düşük oranlarda iyi çalışır; oranlar yükseldikçe kesin formülle arasındaki fark büyür."},
 {t:"widget",name:"calc",opts:{title:"Reel faiz (Fisher)",inputs:[
  {id:"i",label:"Nominal faiz (i)",min:0,max:100,step:1,value:50,unit:"%"},
  {id:"p",label:"Beklenen enflasyon (πᵉ)",min:0,max:100,step:1,value:55,unit:"%"}],
  formula:"('kesin %'+(((1+i/100)/(1+p/100)-1)*100).toFixed(1).replace('.',',')+' · yaklaşık %'+(i-p).toFixed(1).replace('.',',')).replace(/%-/g,'−%')",
  result:"Reel faiz: {r}",
  note:"Kitaptaki örnek: %50 nominal faiz, %55 beklenen enflasyon. Yaklaşık formül −%5 verir; kesin hesap −%3,2'dir. İkisi de aynı sonuca götürür: reel faiz negatiftir ve bankadaki para satın alma gücü kaybeder."}},
 {t:"p",html:"<b>Negatif reel faiz</b> tasarruf sahibini cezalandırır, borçlanmayı ödüllendirir. Kısa vadede tüketim ve kredi artar; ama insanlar ulusal para yerine döviz ve altına yöneldikçe enflasyonist baskı güçlenebilir. Bu yüzden yatırım, tasarruf ve borçlanma kararlarında her zaman reel faize bakılmalıdır."},
 {t:"p",html:"Enflasyon, faiz ve döviz kuru birlikte okunmalıdır. Yüksek enflasyon ortamında nominal faizler de yüksektir. Ulusal paranın değer kaybetmesi ithal girdileri pahalandırır ve maliyet enflasyonunu besler (<b>kur geçişkenliği</b>, Hafta 14)."}
]},
{n:"12.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Talep enflasyonu","Toplam harcamanın üretim kapasitesini aşmasından doğan fiyat artışı."],
  ["Maliyet enflasyonu","Girdi maliyetlerinin artıp fiyatlara yansımasıyla oluşan enflasyon."],
  ["Stagflasyon","Durgunluk ile yüksek enflasyonun bir arada görülmesi."],
  ["Çekirdek enflasyon","Gıda ve enerji gibi oynak kalemler çıkarılarak hesaplanan enflasyon."],
  ["Değer saklama","Paranın satın alma gücünü geleceğe taşıma işlevi."],
  ["Kaydi para","Bankaların kredi yoluyla mevduat hesaplarında yarattığı para."],
  ["Para çarpanı","1 ÷ zorunlu karşılık oranı; teorik kaydi para yaratma potansiyeli."],
  ["Açık piyasa işlemleri","Merkez bankasının tahvil alıp satarak para arzını ayarlaması."],
  ["Reel faiz","Nominal faizin beklenen enflasyondan arındırılmış hâli."]
 ]}
]},
{n:"12.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Dünya petrol fiyatlarının sert yükselmesiyle hem fiyatların arttığı hem üretimin düştüğü durum nasıl adlandırılır?",o:["Deflasyon","Stagflasyon","Hiperenflasyon","Talep enflasyonu"],a:1,e:"Olumsuz arz şoku üretimi düşürürken fiyatları yükseltir; durgunluk ile enflasyonun bir arada görülmesi stagflasyondur."},
  {q:"TÜFE bir yıl önce 400, bugün 460'tır. Yıllık enflasyon kaçtır?",o:["%13,0","%15,0","%60,0","%46,0"],a:1,e:"(460 − 400) ÷ 400 × 100 = %15."},
  {q:"ÜFE'nin TÜFE için öncü gösterge sayılmasının nedeni nedir?",o:["TÜFE'den daha sık ve daha erken açıklanması","Üretici fiyatlarının zamanla perakendeye yansıması","İthal edilen malların fiyatlarını kapsamaması","Oynak gıda ve enerji fiyatlarını dışlaması"],a:1,e:"Üretim aşamasındaki fiyat artışları bir gecikmeyle perakende fiyatlara aktarılır."},
  {q:"Beklenmedik yüksek enflasyondan aşağıdakilerden hangisi kazançlı çıkar?",o:["Bankada vadesiz parası olan emekli","Sabit faizli konut kredisi kullanan kişi","Maaşı yılda bir güncellenen memur","Sabit faizle uzun vadeli borç veren banka"],a:1,e:"Borçlu, borcunu değeri düşmüş parayla geri öder; reel borç yükü azalır."},
  {q:"\"Bu ay maaşımın bir kısmını gelecek ay harcamak üzere biriktiriyorum.\" Para burada hangi işlevi görür?",o:["Değişim aracı","Hesap birimi","Değer saklama aracı","Ertelenmiş ödeme standardı"],a:2,e:"Satın alma gücünün geleceğe taşınması değer saklama işlevidir; enflasyon en çok bu işlevi zayıflatır."},
  {q:"Zorunlu karşılık oranı %20 ise 5.000 TL'lik ilk mevduatın teorik toplam mevduat potansiyeli nedir?",o:["6.000 TL","10.000 TL","25.000 TL","100.000 TL"],a:2,e:"Çarpan 1 ÷ 0,20 = 5; 5.000 × 5 = 25.000 TL."},
  {q:"Merkez bankası enflasyonla mücadele için açık piyasa işlemlerinde ne yapar?",o:["Tahvil alır","Tahvil satar","Zorunlu karşılığı düşürür","Reeskont oranını indirir"],a:1,e:"Tahvil satarak piyasadan para çeker; para arzı daralır, faizler yükselir."},
  {q:"Keynes'e göre faiz oranı yükselince hangi güdüyle tutulan para talebi azalır?",o:["İşlem güdüsü","İhtiyat güdüsü","Spekülasyon güdüsü","Hepsi eşit oranda"],a:2,e:"Faiz yükseldikçe parayı elde tutmanın fırsat maliyeti artar; spekülatif para talebi faizle ters yönlüdür."},
  {q:"Nominal faiz %30, beklenen enflasyon %20 ise yaklaşık reel faiz kaçtır?",o:["%50","%10","%1,5","−%10"],a:1,e:"r ≈ i − πᵉ = 30 − 20 = %10. Kesin hesap: 1,30 ÷ 1,20 − 1 ≈ %8,3."},
  {q:"Yüksek enflasyon dönemlerinde reel faiz için yaklaşık formülü kullanmanın sakıncası nedir?",o:["Formül işaret hatası verir","Oranlar yükseldikçe kesin sonuçtan sapma büyür","Yalnızca negatif faizlerde çalışır","Beklenen enflasyonu hesaba katmaz"],a:1,e:"r ≈ i − πᵉ, (1+r)(1+πᵉ) çarpımındaki r×πᵉ terimini ihmal eder; oranlar büyüdükçe bu terim de büyür."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 23–24, s. 236–259.",
 "Mankiw, N. G. (2018). <i>Principles of Economics</i> (8th ed.). Cengage Learning.",
 "Türkiye Cumhuriyet Merkez Bankası — Para politikası ve TCMB Öğretici: <a href=\"https://www.tcmb.gov.tr\">tcmb.gov.tr</a>",
 "Türkiye İstatistik Kurumu — Tüketici fiyat endeksi: <a href=\"https://data.tuik.gov.tr\">data.tuik.gov.tr</a>"
],
next:"Sonraki: Hafta 13 — Toplam talep–toplam arz ve makro politikalar"
};
