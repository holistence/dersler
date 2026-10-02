window.WEEK={
id:"sk-12",code:"SK",course:"Sürdürülebilir Kalkınma",short:"İklim değişikliği",week:12,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"İklim",
title:"İklim değişikliği: <em>azaltım</em> ve uyum",
intro:"Bu hafta iklim değişikliğinin bilimsel temelini, karbon bütçesi fikrini, emisyonları azaltmanın ve değişen iklime uyum sağlamanın yollarını ve Türkiye'nin iklim politikasındaki başlıca adımları öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Sera gazı etkisini ve insan kaynaklı ısınmanın temel kanıtlarını açıklayabilirsiniz.",
 "Karbon bütçesi kavramını kullanarak kalan bütçenin kaç yıl yeteceğini hesaplayabilirsiniz.",
 "Net sıfır hedefine ulaşmak için gereken yıllık emisyon azaltım hızını hesaplayabilirsiniz.",
 "İklim politikalarını azaltım ve uyum olarak sınıflandırabilirsiniz.",
 "Paris Anlaşması'nın işleyişini ve Türkiye'nin 2053 net sıfır hedefini tartışabilirsiniz."
],
sections:[
{n:"12.1",h:"Sera etkisi ve insan kaynaklı ısınma",blocks:[
 {t:"p",html:"Güneşten gelen enerji yeryüzünü ısıtır; ısınan yeryüzü bu enerjinin bir kısmını kızılötesi ışınım olarak uzaya geri yollar. Atmosferdeki karbondioksit (CO₂), metan (CH₄) ve diyazot monoksit (N₂O) gibi gazlar bu ışınımın bir kısmını tutar. Bu doğal <b>sera etkisi</b> olmasaydı Dünya'nın ortalama sıcaklığı donma noktasının çok altında olurdu."},
 {t:"p",html:"Sorun, sanayi devriminden bu yana fosil yakıtların yakılması ve ormansızlaşma nedeniyle bu gazların yoğunluğunun hızla artmasıdır. Atmosferdeki CO₂ yoğunluğu sanayi öncesinde yaklaşık 280 ppm (milyonda kısım) iken bugün 420 ppm'in üzerine çıkmıştır. Hawaii'deki Mauna Loa gözlemevinde 1958'den bu yana sürdürülen ölçümler bu artışı yıl yıl kaydeder."},
 {t:"def",html:"İnsan etkisinin atmosferi, okyanusları ve karaları ısıttığı tartışmasızdır.",src:"IPCC Altıncı Değerlendirme Raporu, I. Çalışma Grubu, Politika Yapıcılar için Özet (2021) — ana bulgunun özeti"},
 {t:"p",html:"IPCC'ye göre 2011–2020 döneminde küresel yüzey sıcaklığı 1850–1900 dönemine göre yaklaşık <b>1,1 °C</b> daha yüksekti. Bu küçük görünebilir, ama bir küresel ortalamadır: karalar okyanuslardan, kutup bölgeleri ekvatordan daha hızlı ısınır. Sonuçlar; daha sık ve şiddetli sıcak hava dalgaları, deniz seviyesinin yükselmesi, buzulların erimesi, bazı bölgelerde kuraklık ve bazılarında aşırı yağış olarak ortaya çıkar."},
 {t:"box",lbl:"Akım ve stok",html:"İklim sorununu anlamanın anahtarı, CO₂'nin bir <b>stok</b> sorunu olmasıdır. Banyo küvetini düşünün: musluktan gelen su (yıllık emisyon) gidere akan sudan (doğal yutaklar) fazlaysa, musluğu kıssanız bile küvet dolmaya devam eder. Su seviyesinin yükselmesini durdurmak için musluğu neredeyse tamamen kapatmak gerekir. CO₂ atmosferde yüzyıllarca kaldığı için ısınmayı durdurmak da emisyonları <b>net sıfıra</b> indirmeyi gerektirir."}
]},
{n:"12.2",h:"Karbon bütçesi",blocks:[
 {t:"p",html:"Küresel ısınma, insanlığın bugüne kadar saldığı toplam CO₂ miktarıyla yaklaşık doğrusal bir ilişki içindedir. Bu bulgu, güçlü bir politika aracını mümkün kılar: belirli bir sıcaklık sınırının altında kalmak için atmosfere salınabilecek toplam CO₂ miktarı hesaplanabilir. Buna <b>kalan karbon bütçesi</b> denir."},
 {t:"p",html:"IPCC AR6'ya göre ısınmayı %50 olasılıkla 1,5 °C ile sınırlamak için 2020 başından itibaren kalan bütçe yaklaşık <b>500 milyar ton CO₂</b> (500 GtCO₂) idi. Küresel CO₂ emisyonları ise yılda yaklaşık 40 milyar ton düzeyindedir. Bu bütçe her yıl harcanmaya devam ettiği için güncel tahminler daha düşüktür. Aşağıdaki hesaplayıcıyla bütçenin kaç yıl yeteceğini görün."},
 {t:"widget",name:"calc",opts:{title:"Kalan karbon bütçesi kaç yıl yeter?",inputs:[{id:"b",label:"Kalan bütçe",min:100,max:1200,step:50,value:500,unit:" GtCO₂"},{id:"e",label:"Yıllık küresel CO₂ emisyonu",min:10,max:50,step:1,value:40,unit:" GtCO₂"}],formula:"b/e",result:"Emisyonlar bu düzeyde sürerse bütçe yaklaşık {r} yılda tükenir.",digits:1,note:"Başlangıç değerleri IPCC AR6'daki yuvarlatılmış büyüklüklerdir ve bütçe 2020 başından itibaren hesaplanmıştır. Emisyonlar doğrusal olarak sıfıra indirilirse aynı bütçe iki kat daha uzun sürede harcanır; çünkü ortalama emisyon başlangıç düzeyinin yarısı olur."}}
]},
{n:"12.3",h:"Net sıfıra giden yol",blocks:[
 {t:"p",html:"<b>Net sıfır</b>, salınan sera gazları ile atmosferden uzaklaştırılan miktarın (ormanlar, toprak ya da teknolojik yöntemlerle) eşitlenmesidir. Emisyonların tamamen sıfırlanması gerekmez, ama kalan emisyonların uzaklaştırmayla dengelenmesi gerekir. Uzaklaştırma kapasitesi sınırlı olduğu için yolun büyük kısmı emisyonların kendisini azaltmaktan geçer."},
 {t:"p",html:"Emisyonları belirli bir tarihe kadar belirli bir düzeye indirmek için gereken yıllık azaltım hızı, bileşik büyümenin tersine hesaplanır. Bugünkü emisyonu 100 kabul edin; hedef yılda kalmasına izin verilen düzeyi ve süreyi seçin."},
 {t:"widget",name:"calc",opts:{title:"Gereken yıllık emisyon azaltım hızı",inputs:[{id:"h",label:"Hedef yılda kalan emisyon (bugün = 100)",min:5,max:90,step:5,value:10,unit:""},{id:"n",label:"Süre",min:5,max:40,step:1,value:30,unit:" yıl"}],formula:"(1-Math.pow(h/100,1/n))*100",result:"Her yıl emisyonları ortalama %{r} azaltmak gerekir.",digits:1,note:"Hesap sabit oranlı azaltım varsayar. Kalan emisyonun ormanlar ve diğer yutaklarla dengelendiği varsayılırsa bu yol net sıfıra karşılık gelir. Karşılaştırma için: küresel CO₂ emisyonları 2020'de salgın nedeniyle yaklaşık %5–6 düşmüştü; bu, her yıl tekrarlanması gereken bir hızdır."}},
 {t:"p",html:"Azaltımın başlıca alanları şunlardır: elektrik üretiminde kömürden yenilenebilir enerjiye geçiş, ulaşım ve ısınmanın elektrikleştirilmesi, binalarda enerji verimliliği, sanayide (çelik, çimento) yeni üretim süreçleri, ormansızlaşmanın durdurulması ve tarımsal emisyonların azaltılması. IEA'ya göre güneş ve rüzgâr enerjisinin maliyetleri son on yılda hızla düşmüş ve pek çok ülkede yeni kömür santrallerinden daha ucuz hâle gelmiştir."}
]},
{n:"12.4",h:"Azaltım mı, uyum mu?",blocks:[
 {t:"p",html:"İklim politikası iki ayaklıdır. <b>Azaltım</b> (mitigation), sera gazı emisyonlarını düşürerek ya da yutakları artırarak ısınmanın kendisini sınırlamaktır. <b>Uyum</b> (adaptation), artık kaçınılamayan iklim etkilerine karşı insanları, ekonomiyi ve ekosistemleri hazırlamaktır. Isınma şimdiden yaşandığı için ikisine de ihtiyaç vardır: azaltım olmadan uyumun maliyeti sınırsız büyür, uyum olmadan ise bugünkü etkiler can ve mal kaybına yol açar."},
 {t:"widget",name:"classify",opts:{title:"Azaltım mı, uyum mu?",cats:["Azaltım","Uyum"],items:[
  ["Kömür santralinin kapatılıp yerine güneş santrali kurulması",0],
  ["Kıyı kentinde deniz seviyesi yükselmesine karşı set yapılması",1],
  ["Kuraklığa dayanıklı buğday çeşitlerinin geliştirilmesi",1],
  ["Binalarda ısı yalıtımının zorunlu hâle getirilmesi",0],
  ["Sıcak hava dalgaları için erken uyarı sistemi kurulması",1],
  ["Elektrikli toplu taşıma araçlarının yaygınlaştırılması",0],
  ["Orman yangınlarına karşı yangın şeritleri açılması",1],
  ["Çöp sahalarında açığa çıkan metanın toplanıp enerjiye dönüştürülmesi",0]
 ],note:"Bazı önlemler iki işlevi birden görür: örneğin ağaçlandırma hem karbon tutar (azaltım) hem de kentte gölge sağlayarak sıcağa karşı korur (uyum). Ayrıca yalıtım, sıcak hava dalgalarında da konforu artırdığı için uyuma da katkı verir. Sınıflandırma, önlemin birincil amacına göre yapılmıştır."}}
]},
{n:"12.5",h:"Uluslararası iklim rejimi",blocks:[
 {t:"p",html:"İklim, klasik bir <b>küresel kamu malı</b> sorunudur: bir ülkenin emisyon azaltımının faydası bütün dünyaya yayılır, maliyeti ise yalnızca o ülkeye kalır. Bu durum her ülkeyi başkalarının çabasından \"bedavaya yararlanma\"ya iter. Uluslararası iklim müzakereleri otuz yılı aşkın süredir bu sorunu çözmeye çalışmaktadır."},
 {t:"choice",items:[
  {label:"BMİDÇS (1992)",title:"Çerçeve Sözleşme",body:"Rio Zirvesi'nde imzaya açılan BM İklim Değişikliği Çerçeve Sözleşmesi, iklim sistemine tehlikeli insan müdahalesini önlemeyi amaçlar. \"Ortak ama farklılaştırılmış sorumluluklar\" ilkesini getirdi. Taraflar her yıl Taraflar Konferansı'nda (COP) toplanır.",ex:"Türkiye sözleşmeye 2004'te taraf oldu."},
  {label:"Kyoto (1997)",title:"Yukarıdan aşağıya hedefler",body:"Gelişmiş ülkelere (Ek-I) bağlayıcı emisyon azaltım hedefleri koydu; gelişmekte olan ülkelere yükümlülük getirmedi. ABD protokolü onaylamadı ve hızla büyüyen gelişmekte olan ülke emisyonları kapsam dışında kaldı.",ex:"Türkiye protokole 2009'da taraf oldu, ancak sayısal bir azaltım yükümlülüğü üstlenmedi."},
  {label:"Paris (2015)",title:"Aşağıdan yukarıya katkılar",body:"Isınmayı 2 °C'nin \"oldukça altında\" tutmayı ve 1,5 °C ile sınırlamak için çaba göstermeyi hedefler. Her ülke kendi <b>ulusal katkı beyanını</b> (NDC) belirler ve bunları beş yılda bir güncelleyerek iddiasını artırır. Hedefler bağlayıcı değildir, ama raporlama ve şeffaflık yükümlülükleri bağlayıcıdır.",ex:"Türkiye anlaşmayı Ekim 2021'de onayladı."}
 ]},
 {t:"p",html:"Paris Anlaşması'nın gücü evrensel katılımı, zayıflığı ise ulusal katkıların toplamının hedefe yetmemesidir. BM Çevre Programı'nın her yıl yayımladığı <i>Emisyon Açığı Raporu</i>, mevcut taahhütler ile 1,5 °C ya da 2 °C yolu arasındaki farkı ölçer ve bu farkın hâlâ büyük olduğunu göstermektedir."}
]},
{n:"12.6",h:"Türkiye'nin iklim politikası",blocks:[
 {t:"p",html:"Türkiye, BMİDÇS'nin kabul edildiği 1992'de OECD üyesi olduğu için Ek-I listesine alındı; bu durum uzun yıllar boyunca ülkenin özel koşullarının tanınması talebiyle müzakere konusu oldu. 2021'de Paris Anlaşması'nın onaylanmasıyla Türkiye'nin iklim politikası yeni bir döneme girdi."},
 {t:"timeline",items:[
  ["2004","BMİDÇS'ye taraf olma","Türkiye çerçeve sözleşmeye taraf oldu."],
  ["2009","Kyoto Protokolü","Türkiye protokole taraf oldu; sayısal azaltım yükümlülüğü üstlenmedi."],
  ["2021","Paris Anlaşması'nın onayı ve 2053 hedefi","Anlaşma Ekim 2021'de TBMM'de onaylandı; Türkiye 2053 yılı için net sıfır emisyon hedefini açıkladı. Aynı yıl Çevre ve Şehircilik Bakanlığı'nın adı Çevre, Şehircilik ve İklim Değişikliği Bakanlığı olarak değiştirildi.",1],
  ["2022","Güncellenmiş ulusal katkı","Türkiye, Mısır'daki COP27'de 2030 için güncellenmiş ve daha iddialı ulusal katkı hedefini açıkladı."],
  ["2025","İklim Kanunu","7552 sayılı İklim Kanunu kabul edildi; emisyon ticaret sistemi kurulması için yasal zemin oluşturuldu.",1],
  ["2053","Net sıfır hedef yılı","Türkiye'nin sera gazı emisyonlarını net sıfıra indirmeyi hedeflediği yıl."]
 ]},
 {t:"p",html:"Türkiye'nin sera gazı emisyonları <b>TÜİK</b>'in her yıl yayımladığı Sera Gazı Emisyon İstatistikleri ile izlenir. Bu istatistiklerde enerji sektörü, toplam emisyonların açık ara en büyük kaynağıdır. Avrupa Birliği'nin <b>Sınırda Karbon Düzenleme Mekanizması</b> (SKDM), AB'ye çelik, çimento, alüminyum ve gübre gibi ürünleri ihraç eden Türk şirketleri için karbon maliyetini doğrudan bir ticaret konusu hâline getirmektedir."}
]},
{n:"12.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Sera etkisi","Atmosferdeki bazı gazların yeryüzünden yayılan ısının bir kısmını tutması."],
  ["Kalan karbon bütçesi","Belirli bir sıcaklık sınırının altında kalmak için salınabilecek toplam CO₂ miktarı."],
  ["Net sıfır","Salınan sera gazlarının atmosferden uzaklaştırılanlarla eşitlenmesi."],
  ["Azaltım","Emisyonları düşürerek ya da yutakları artırarak ısınmayı sınırlama."],
  ["Uyum","Kaçınılamayan iklim etkilerine karşı insanları ve sistemleri hazırlama."],
  ["Ulusal katkı beyanı (NDC)","Paris Anlaşması kapsamında her ülkenin kendi belirlediği iklim taahhüdü."],
  ["Küresel kamu malı","Faydası herkese yayılan, bu yüzden bedavaya yararlanma sorununa açık mal."],
  ["SKDM","AB'nin karbon yoğun ithal ürünlere karbon maliyeti yansıtan sınır mekanizması."]
 ]}
]},
{n:"12.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Emisyonları yarıya indirmek, ısınmayı neden durdurmaz?",o:["Çünkü CO₂ birikir; emisyon sürdükçe stok artar","Çünkü yıllık emisyonların ısınmayla doğrudan ilişkisi yoktur","Çünkü ısınmanın neredeyse tamamı metandan kaynaklanır","Çünkü okyanuslar ve ormanlar CO₂'yi hiç tutmaz"],a:0,e:"Akım–stok ilişkisi: musluk kısılsa da açık kaldıkça küvet dolmaya devam eder. Isınmanın durması için net sıfır gerekir."},
  {q:"Kalan bütçe 400 GtCO₂, yıllık emisyon 40 GtCO₂ ise emisyonlar sabit kalırsa bütçe kaç yılda tükenir?",o:["4 yıl","10 yıl","40 yıl","16 yıl"],a:1,e:"400 ÷ 40 = 10 yıl. Emisyonlar azaldıkça bu süre uzar."},
  {q:"Emisyonların 20 yılda bugünkü düzeyin %10'una inmesi için yıllık azaltım hızı yaklaşık ne olmalıdır?",o:["%4,5","%11","%9","%5"],a:1,e:"1 − 0,10^(1/20) ≈ 0,109, yani yılda yaklaşık %11. 90 ÷ 20 = %4,5 doğrusal azaltımı ifade eder; sabit oranda bu yetmez."},
  {q:"Aşağıdakilerden hangisi bir uyum önlemidir?",o:["Eski bir kömür santralini kapatmak","Kıyıda yeni bir rüzgâr santrali kurmak","Sel riskine karşı dere yatağını genişletmek","Belediye filosuna elektrikli otobüs almak"],a:2,e:"Taşkın riskini azaltmak, ısınmanın kendisini değil, etkilerini yönetir; bu nedenle uyumdur."},
  {q:"Paris Anlaşması'nı Kyoto Protokolü'nden ayıran temel özellik nedir?",o:["Yalnızca gelişmiş ülkelere azaltım yükümlülüğü getirmesi","Her ülkenin kendi katkısını belirlediği aşağıdan yukarıya yapı","Hedefini aşan ülkelere bağlayıcı para cezaları öngörmesi","Herhangi bir küresel sıcaklık hedefi içermemesi"],a:1,e:"Kyoto yukarıdan hedef dağıtıyordu; Paris'te her ülke NDC'sini kendisi belirler ve beş yılda bir günceller."},
  {q:"Bir ülkenin emisyon azaltımının faydası bütün dünyaya yayılırken maliyetinin o ülkede kalması hangi sorunu doğurur?",o:["Bedavaya yararlanma","Kilitlenme","Yığılma ekonomisi","Gizli açlık"],a:0,e:"İklim küresel kamu malıdır; her ülke başkalarının çabasından yararlanıp kendi maliyetinden kaçınmaya eğilimlidir."},
  {q:"Türkiye Paris Anlaşması'nı hangi yıl onayladı ve net sıfır hedef yılı nedir?",o:["2015 ve 2050","2016 ve 2060","2021 ve 2053","2023 ve 2053"],a:2,e:"Türkiye anlaşmayı Ekim 2021'de onayladı ve aynı dönemde 2053 net sıfır hedefini açıkladı."},
  {q:"IPCC'ye göre 2011–2020 döneminde küresel yüzey sıcaklığı sanayi öncesine göre yaklaşık ne kadar yüksekti?",o:["0,2 °C","1,1 °C","2,5 °C","4 °C"],a:1,e:"IPCC AR6, 1850–1900 dönemine göre yaklaşık 1,1 °C'lik bir ısınma tespit etti."},
  {q:"Türkiye'den AB'ye çelik ihraç eden bir şirket için SKDM ne anlama gelir?",o:["İhracatın tamamen yasaklanması","Ürünün içerdiği karbon için maliyet ödenmesi","Gümrük vergisinin sıfırlanması","Çeliğe kalite sertifikası verilmesi"],a:1,e:"SKDM, karbon yoğun ithal ürünlere AB içindeki karbon fiyatına benzer bir maliyet yansıtır."},
  {q:"Kentte ağaçlandırma yapılması neden hem azaltım hem uyum önlemi sayılabilir?",o:["Çünkü kentin görünümünü güzelleştirip turizmi canlandırır","Çünkü karbon tutarken gölgesiyle kent sıcaklığını azaltır","Çünkü fotosentezle atmosferdeki metanı oksijene dönüştürür","Çünkü kıyıdaki deniz seviyesi yükselmesini doğrudan önler"],a:1,e:"Ağaçlar CO₂ bağlar (azaltım) ve kentsel ısı adası etkisini hafifletir (uyum)."}
 ]}
]}
],
refs:[
 "Sachs, J. D. (2015). <i>The Age of Sustainable Development</i>. Columbia University Press. Türkçe çevirisi: <i>Sürdürülebilir Kalkınma Çağı</i>. Bu haftanın konusu için iklim değişikliğiyle ilgili bölüm.",
 "IPCC (2021, 2022, 2023). <i>Altıncı Değerlendirme Raporu</i> (AR6) ve Politika Yapıcılar için Özetler: <a href=\"https://www.ipcc.ch\">ipcc.ch</a>",
 "BM İklim Değişikliği Çerçeve Sözleşmesi — Paris Anlaşması ve ulusal katkılar: <a href=\"https://unfccc.int\">unfccc.int</a>",
 "UNEP — <i>Emissions Gap Report</i>: <a href=\"https://www.unep.org\">unep.org</a>",
 "TÜİK — Sera Gazı Emisyon İstatistikleri: <a href=\"https://data.tuik.gov.tr\">data.tuik.gov.tr</a>"
],
next:"Sonraki: Hafta 13 — Biyoçeşitlilik ve ekosistemler"
};
