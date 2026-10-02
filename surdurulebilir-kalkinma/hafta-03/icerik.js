window.WEEK={
id:"sk-03",code:"SK",course:"Sürdürülebilir Kalkınma",short:"Küresel eşitsizlik",week:3,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Bölüşüm",
title:"Küresel <em>eşitsizlik</em>",
intro:"Bu hafta eşitsizliğin nasıl ölçüldüğünü, ülkeler arası ve ülke içi eşitsizliğin son otuz yılda nasıl değiştiğini ve eşitsizliğin neden yalnızca bir adalet sorunu değil, aynı zamanda bir kalkınma sorunu olduğunu öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması ve 9 soruluk bir test var.",
goals:[
 "Ülkeler arası, ülke içi ve küresel (bireyler arası) eşitsizliği birbirinden ayırabilirsiniz.",
 "Lorenz eğrisi, Gini katsayısı, S80/S20 ve Palma oranını yorumlayabilirsiniz.",
 "Basit bir gelir dağılımı için Gini ve Palma oranını hesaplayabilirsiniz.",
 "Satın alma gücü paritesinin neden kullanıldığını açıklayabilirsiniz.",
 "Fırsat eşitsizliği ile sonuç eşitsizliği arasındaki farkı örneklerle tartışabilirsiniz."
],
sections:[
{n:"3.1",h:"Üç tür eşitsizlik",blocks:[
 {t:"p",html:"\"Dünyada eşitsizlik artıyor mu?\" sorusunun cevabı, neyi karşılaştırdığınıza bağlıdır. Ülkelerin ortalama gelirlerini mi, bir ülkenin kendi vatandaşlarını mı, yoksa dünyadaki bütün bireyleri tek bir toplum gibi mi karşılaştırıyorsunuz? İktisatçı Branko Milanović bu üç bakışı açıkça ayırmayı önerir."},
 {t:"choice",items:[
  {label:"Ülkeler arası",title:"Ortalamaların karşılaştırılması",body:"Her ülke tek bir gözlemdir; Lüksemburg ile Hindistan aynı ağırlıkta sayılır. Ülkelerin kişi başına gelirleri arasındaki farkı gösterir.",ex:"Örnek: Norveç'in kişi başına geliri ile Nijer'inkinin oranı."},
  {label:"Nüfus ağırlıklı",title:"Ortalamalar, nüfusla tartılmış",body:"Yine ülke ortalamaları kullanılır, ama her ülke nüfusu kadar ağırlık alır. Çin ve Hindistan'ın hızlı büyümesi bu ölçüyü güçlü biçimde düşürür.",ex:"Örnek: 1,4 milyarlık bir ülkenin ortalaması, 5 milyonluk bir ülkeninkinden çok daha fazla sayılır."},
  {label:"Küresel",title:"Dünyadaki bütün bireyler",body:"Ülke sınırları yok sayılır; dünyadaki herkes tek bir gelir dağılımında sıralanır. Hem ülkeler arası hem ülke içi farkları içerir; hane anketleri gerektirdiği için ölçmesi en zor olanıdır.",ex:"Örnek: İstanbul'daki bir öğretmen ile Lagos'taki bir esnafın küresel sıralamadaki yeri."},
  {label:"Ülke içi",title:"Bir toplumun kendi içinde",body:"Aynı ülkede yaşayan hanelerin veya bireylerin gelir ya da servet farkları. Vergi, sosyal yardım ve eğitim politikalarının doğrudan etkilediği eşitsizlik budur.",ex:"Örnek: Türkiye'de en zengin %20'nin geliri ile en yoksul %20'nin geliri arasındaki oran."}
 ]},
 {t:"p",html:"Son otuz yılın genel resmi şöyle özetlenebilir: Çin, Hindistan ve diğer hızlı büyüyen Asya ekonomileri sayesinde nüfus ağırlıklı ülkeler arası eşitsizlik azaldı. Buna karşılık ABD başta olmak üzere pek çok ülkede ülke içi eşitsizlik arttı. İki eğilim birbirini kısmen dengeledi."}
]},
{n:"3.2",h:"Geliri karşılaştırılabilir kılmak",blocks:[
 {t:"p",html:"Ülkeleri karşılaştırmak için gelirleri ortak bir para birimine çevirmek gerekir. Piyasa döviz kuru bunun için yanıltıcıdır: bir saç tıraşı veya bir tabak yemek, yoksul ülkelerde zengin ülkelere göre çok daha ucuzdur. Döviz kuruyla çevrilen gelir, yoksul bir ülkedeki gerçek yaşam standardını olduğundan düşük gösterir."},
 {t:"def",html:"<b>Satın alma gücü paritesi (SGP)</b>: Aynı mal ve hizmet sepetinin farklı ülkelerde aynı maliyete gelmesini sağlayan dönüştürme oranı.",src:"Uluslararası Karşılaştırma Programı (ICP), Dünya Bankası koordinasyonunda"},
 {t:"p",html:"Bu nedenle uluslararası gelir ve yoksulluk karşılaştırmaları genellikle SGP'ye göre düzeltilmiş dolarla yapılır. SGP tahminleri birkaç yılda bir yenilenen ICP turlarına dayanır; yeni tur yayımlandığında ülkelerin göreli konumları da değişebilir. Bir veriyi kullanırken hangi yılın SGP'siyle hesaplandığına bakmak bu yüzden önemlidir."}
]},
{n:"3.3",h:"Eşitsizliği ölçmek",blocks:[
 {t:"p",html:"Hanelerin en yoksuldan en zengine sıralandığını düşünün. <b>Lorenz eğrisi</b>, nüfusun en yoksul belirli bir yüzdesinin toplam gelirin ne kadarını aldığını gösterir. Herkes eşit gelire sahip olsaydı eğri 45 derecelik doğru olurdu: nüfusun %20'si gelirin %20'sini, %50'si %50'sini alırdı. Eğri bu doğrudan ne kadar uzaklaşırsa eşitsizlik o kadar büyüktür."},
 {t:"table",head:["Ölçü","Nasıl hesaplanır","Yorumu"],rows:[
  ["Gini katsayısı","Lorenz eğrisi ile eşitlik doğrusu arasındaki alanın, doğrunun altındaki toplam alana oranı","0 tam eşitlik, 1 tam eşitsizlik; bazen 0–100 arasında verilir"],
  ["S80/S20","En zengin %20'nin geliri ÷ en yoksul %20'nin geliri","5 ise en zengin beşte bir, en yoksul beşte birin 5 katı gelir alır"],
  ["Palma oranı","En zengin %10'un geliri ÷ en yoksul %40'ın geliri","Dağılımın uçlarına odaklanır; değer yükseldikçe eşitsizlik artar"],
  ["En üst %1'in payı","En zengin %1'in toplam gelirdeki payı","Vergi kayıtlarından hesaplanır; servetin yoğunlaşmasını izlemek için kullanılır"]]},
 {t:"p",html:"Gini katsayısının bir sezgisi şudur: toplum yalnızca iki gruptan oluşsun. Nüfusun yoksul %p'si gelirin yalnızca %s'ini alıyorsa, bu toplumun Gini katsayısı (p − s) ÷ 100'dür. Gerçek dağılımlarda gruplar daha çoktur, bu yüzden gerçek Gini bu basit hesabın verdiğinden biraz yüksek çıkar. Aşağıda deneyin."},
 {t:"widget",name:"calc",opts:{title:"İki gruplu bir toplumda Gini",inputs:[{id:"p",label:"Yoksul grubun nüfus payı",min:10,max:90,step:5,value:50,unit:"%"},{id:"s",label:"Yoksul grubun gelir payı",min:1,max:90,step:1,value:20,unit:"%"}],formula:"s>p?'Yoksul grup nüfus payından fazla gelir alamaz; s ≤ p olmalı':((p-s)/100).toFixed(2).replace('.',',')",result:"Gini katsayısı: {r}",note:"Nüfusun yarısı gelirin yarısını alırsa Gini 0 olur. Nüfusun %50'si gelirin %20'sini alırsa Gini 0,30'dur."}},
 {t:"widget",name:"calc",opts:{title:"Palma oranı",inputs:[{id:"top",label:"En zengin %10'un gelir payı",min:15,max:50,step:1,value:30,unit:"%"},{id:"bot",label:"En yoksul %40'ın gelir payı",min:5,max:30,step:1,value:18,unit:"%"}],formula:"top/bot",result:"Palma oranı: {r}",digits:2,note:"Kuzey Avrupa ülkelerinde oran 1'e yakındır; Latin Amerika ve Güney Afrika'nın bazı ülkelerinde 3'ün üzerine çıkar. Kendi tahminlerinizi deneyin: en zengin %10'un payı arttıkça oran nasıl değişiyor?"}}
]},
{n:"3.4",h:"Fil eğrisi: küreselleşmenin kazananları",blocks:[
 {t:"p",html:"Christoph Lakner ve Branko Milanović'in 2016'da yayımladığı çalışma, 1988–2008 döneminde dünyadaki gelir dilimlerinin her birinin gelirinin ne kadar arttığını gösterdi. Ortaya çıkan grafik bir filin siluetine benzediği için <b>fil eğrisi</b> olarak tanındı."},
 {t:"list",items:[
  "<b>Filin sırtı:</b> Küresel dağılımın ortasındaki gruplar, büyük ölçüde Çin ve diğer Asya ülkelerinin yükselen orta sınıfları, gelirlerini en hızlı artıranlar oldu.",
  "<b>Hortumun dibi:</b> Küresel dağılımın yaklaşık %75–90'lık diliminde yer alan, ağırlıkla zengin ülkelerin alt ve orta gelirli kesimleri çok az kazanç sağladı.",
  "<b>Hortumun ucu:</b> En zengin %1 de büyük kazanç elde etti."]},
 {t:"p",html:"Bu tablo, küreselleşmenin hem dünya ölçeğinde eşitsizliği azaltabildiğini hem de zengin ülkelerin bazı kesimlerinde bir \"geride kalma\" duygusu yaratabildiğini gösterir. Grafiğin şeklinin hangi yılların ve hangi verinin seçildiğine duyarlı olduğu da sonradan tartışıldı."}
]},
{n:"3.5",h:"Eşitsizlik neden önemli?",blocks:[
 {t:"p",html:"Eşitsizliğin bir düzeyi, farklı emek, beceri ve risk alma tercihlerinin doğal sonucudur. Ancak eşitsizlik belli bir düzeyi aştığında kalkınmayı yavaşlatan sonuçlar doğurabilir. Yoksul aileler çocuklarının eğitimine yeterince yatırım yapamaz, yetenekler boşa gider; siyasi güç de ekonomik güçle birlikte yoğunlaşabilir."},
 {t:"p",html:"Burada önemli bir ayrım vardır. <b>Sonuç eşitsizliği</b>, gelir ve servet farklarıdır. <b>Fırsat eşitsizliği</b> ise kişinin kendi seçmediği koşulların, örneğin doğduğu bölgenin, ailesinin gelirinin veya cinsiyetinin, hayatındaki sonuçları belirlemesidir. Pek çok adalet kuramı, ikinci türü birincisinden çok daha sorunlu görür."},
 {t:"widget",name:"classify",opts:{title:"Fırsat mı, sonuç mu?",cats:["Fırsat eşitsizliği","Sonuç eşitsizliği"],items:[
  ["Kırsalda doğan bir çocuğun okul öncesi eğitime erişememesi",0],
  ["Bir yazılımcının bir garsondan daha yüksek ücret alması",1],
  ["Kız çocuklarının ailesi tarafından okuldan alınması",0],
  ["En zengin %10'un servetin yarısından fazlasına sahip olması",1],
  ["Anne-babasının eğitim düzeyinin çocuğun üniversite şansını belirlemesi",0],
  ["İki komşu ilin kişi başına gelirleri arasındaki fark",1],
  ["Engelli bir gencin okuluna ulaşım imkânının olmaması",0],
  ["Hanelerin S80/S20 oranının 7 olması",1]],note:"Fırsat eşitsizliği kişinin kontrolü dışındaki koşullardan (doğum yeri, aile, cinsiyet, engellilik) kaynaklanır. Sonuç eşitsizliği ise ölçülen gelir ve servet farklarıdır; içinde hem fırsat farklarının hem de çaba ve tercih farklarının izi vardır."}},
 {t:"p",html:"Eşitsizlik SKA'larda ayrı bir amaçtır: <b>SKA 10, Eşitsizliklerin azaltılması</b>. Bu amacın ilk alt hedefi, 2030'a kadar her ülkede nüfusun en yoksul %40'ının gelirinin ülke ortalamasından daha hızlı artmasıdır."}
]},
{n:"3.6",h:"Türkiye'de gelir dağılımı",blocks:[
 {t:"p",html:"Türkiye'de gelir dağılımı TÜİK'in her yıl yaptığı <b>Gelir ve Yaşam Koşulları Araştırması</b> ile ölçülür. Araştırma, hanelerin eşdeğer hane halkı kullanılabilir gelirine göre Gini katsayısını ve S80/S20 oranını yayımlar."},
 {t:"box",lbl:"Türkiye'den örnek",html:"OECD karşılaştırmalarında Türkiye, Şili, Meksika ve Kosta Rika gibi ülkelerle birlikte gelir eşitsizliği yüksek ülkeler arasında yer alır. Ülke içinde de belirgin bir bölgesel boyut vardır: batı illeri ile doğu ve güneydoğu illeri arasındaki kişi başına gelir farkı, bireyler arası eşitsizliğin önemli bir kaynağıdır. Güncel değerler için TÜİK'in son Gelir ve Yaşam Koşulları bültenine bakın; rakamı kullanırken araştırma yılını belirtin."},
 {t:"p",html:"Vergiler ve sosyal transferler eşitsizliği azaltır. Bu yüzden \"piyasa geliri\" ile \"kullanılabilir gelir\" (vergi ve transferler sonrası) Ginileri arasındaki fark, bir ülkenin yeniden dağıtım kapasitesini gösterir. Kuzey Avrupa ülkelerinde bu fark büyüktür; gelişmekte olan ülkelerin çoğunda daha küçüktür."}
]},
{n:"3.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Lorenz eğrisi","Nüfusun en yoksul belirli yüzdesinin toplam gelirden aldığı payı gösteren eğri."],
  ["Gini katsayısı","Lorenz eğrisinden türetilen, 0 (tam eşitlik) ile 1 (tam eşitsizlik) arası ölçü."],
  ["S80/S20","En zengin %20'nin gelirinin en yoksul %20'nin gelirine oranı."],
  ["Palma oranı","En zengin %10'un gelir payının en yoksul %40'ın payına oranı."],
  ["Satın alma gücü paritesi","Aynı sepetin farklı ülkelerde aynı maliyete gelmesini sağlayan dönüştürme oranı."],
  ["Fil eğrisi","1988–2008'de küresel gelir dilimlerinin gelir artışını gösteren, fil siluetine benzeyen grafik."],
  ["Fırsat eşitsizliği","Kişinin seçmediği koşulların hayatındaki sonuçları belirlemesi."],
  ["SKA 10","Ülke içinde ve ülkeler arasında eşitsizliklerin azaltılması amacı."]
 ]}
]},
{n:"3.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Çin ve Hindistan'ın hızlı büyümesi en güçlü biçimde hangi eşitsizlik ölçüsünü düşürmüştür?",o:["ABD'nin ülke içi Gini katsayısını","Nüfus ağırlıklı ülkeler arası eşitsizliği","Ağırlıksız ülkeler arası eşitsizliği","Avrupa'daki en üst %1'in payını"],a:1,e:"Nüfus ağırlıklı ölçüde bu iki ülke dünya nüfusunun büyük kısmını temsil eder; ortalamalarının yükselmesi ölçüyü güçlü biçimde düşürür."},
  {q:"Uluslararası gelir karşılaştırmalarında piyasa döviz kuru yerine neden SGP kullanılır?",o:["Döviz kurları hiç yayımlanmadığı için","Fiyat düzeyleri ülkeler arasında farklı olduğu için","SGP her zaman daha yüksek gelir gösterdiği için","Merkez bankaları bunu zorunlu tuttuğu için"],a:1,e:"Aynı sepet yoksul ülkelerde daha ucuzdur; SGP bu fiyat farkını düzelterek gerçek yaşam standardını karşılaştırılabilir kılar."},
  {q:"Bir ülkede Gini katsayısı 0,25'ten 0,40'a çıkmıştır. Bu ne anlama gelir?",o:["Gelir dağılımı daha eşit hâle gelmiştir","Gelir dağılımı daha eşitsiz hâle gelmiştir","Ortalama gelir %15 artmıştır","Yoksulluk oranı %15 azalmıştır"],a:1,e:"Gini 0'a yaklaştıkça eşitlik, 1'e yaklaştıkça eşitsizlik artar. Gini ortalama gelir veya yoksulluk hakkında doğrudan bilgi vermez."},
  {q:"Nüfusun yoksul %60'ı gelirin %25'ini alan iki gruplu bir toplumda Gini katsayısı kaçtır?",o:["0,25","0,35","0,60","0,85"],a:1,e:"İki gruplu dağılımda Gini = (p − s) ÷ 100 = (60 − 25) ÷ 100 = 0,35."},
  {q:"En zengin %10'un payı %36, en yoksul %40'ın payı %12 ise Palma oranı kaçtır?",o:["0,33","3","24","48"],a:1,e:"Palma oranı = 36 ÷ 12 = 3. En zengin onda bir, en yoksul yüzde kırkın üç katı gelir alıyor; bu yüksek bir eşitsizliktir."},
  {q:"Fil eğrisine göre 1988–2008 döneminde gelir artışı en düşük olan gruplardan biri hangisiydi?",o:["Asya'nın hızla yükselen kentli orta sınıfları","Zengin ülkelerin alt ve orta gelirli kesimleri","Dünya genelinde en zengin %1'lik gelir dilimi","Çin'in kıyı kentlerinde yaşayan ücretli haneler"],a:1,e:"Küresel dağılımın yaklaşık %75–90 dilimi, ağırlıkla zengin ülkelerin alt ve orta gelirlileri, çok az kazanç sağladı."},
  {q:"Aşağıdakilerden hangisi fırsat eşitsizliğine örnektir?",o:["Bir cerrahın bir kasiyerden fazla kazanması","Doğduğu ilin çocuğun okul başarısını belirlemesi","Bir girişimcinin riskli yatırımdan kâr etmesi","Fazla mesai yapanın daha çok kazanması"],a:1,e:"Doğum yeri kişinin seçmediği bir koşuldur; sonuçları bu koşula bağlıysa fırsat eşitsizliği vardır."},
  {q:"SKA 10'un ilk alt hedefi neyi amaçlar?",o:["Bütün ülkelerde Gini'nin 0,30'un altına inmesini","En yoksul %40'ın gelirinin ortalamadan hızlı artmasını","Ülkeler arasında gelirlerin eşitlenmesini","En zengin %1'in payının yarıya indirilmesini"],a:1,e:"SKA 10.1, 2030'a kadar en yoksul %40'ın gelir artışının ülke ortalamasının üzerinde olmasını hedefler."},
  {q:"Bir ülkede piyasa geliri Ginisi 0,48, vergi ve transfer sonrası Gini 0,30'dur. Bu fark neyi gösterir?",o:["Ekonominin o yıl hızla küçüldüğünü","Yeniden dağıtımın eşitsizliği belirgin azalttığını","Vergilerin eşitsizliği artırıcı etki yaptığını","Hane anketinde ölçüm hatası yapıldığını"],a:1,e:"Vergi ve transferler sonrası Gini'nin düşmesi, devletin yeniden dağıtım politikalarının eşitsizliği azalttığını gösterir."}
 ]}
]}
],
refs:[
 "Sachs, J. D. (2015). <i>The Age of Sustainable Development</i>. Columbia University Press. Türkçe çevirisi: <i>Sürdürülebilir Kalkınma Çağı</i>. Bu haftanın konusu için ilgili bölüm.",
 "Milanović, B. (2016). <i>Global Inequality: A New Approach for the Age of Globalization</i>. Harvard University Press.",
 "Lakner, C., Milanović, B. (2016). Global income distribution: From the fall of the Berlin Wall to the Great Recession. <i>World Bank Economic Review</i>, 30(2).",
 "TÜİK — Gelir ve Yaşam Koşulları Araştırması: <a href=\"https://data.tuik.gov.tr\">data.tuik.gov.tr</a>",
 "Dünya Bankası — Dünya Kalkınma Göstergeleri: <a href=\"https://data.worldbank.org\">data.worldbank.org</a>"
],
next:"Sonraki: Hafta 04 — Aşırı yoksulluk"
};
