window.WEEK={
id:"en-09",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Yatırım değerlendirme",week:9,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Enerji yatırımları",
title:"Bir santral kârlı mı? <em>NBD</em>, İVO ve PPA",
intro:"Bu hafta bir enerji yatırımının \"yapılmaya değer\" olup olmadığına nasıl karar verildiğini öğreneceksiniz: proje finansmanı ile şirket finansmanı arasındaki fark, net bugünkü değer (NBD), iç verimlilik oranı (İVO), iskonto oranının ve sermaye maliyetinin (WACC) rolü ve uzun vadeli alım anlaşmalarının (PPA) finansmanı nasıl kolaylaştırdığı. Okuma süresi yaklaşık 45 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Proje finansmanı ile şirket finansmanını borcun dayanağı ve risk dağılımı açısından ayırt edebilirsiniz.",
 "Sabit nakit akışlı bir projenin NBD'sini hesaplayıp karar kuralını uygulayabilirsiniz.",
 "İVO'yu tanımlayıp sermaye maliyetiyle karşılaştırarak yorumlayabilirsiniz.",
 "Ağırlıklı ortalama sermaye maliyetini (WACC) hesaplayıp iskonto oranını etkileyen riskleri sayabilirsiniz.",
 "PPA'nın yatırımcı, finansör ve alıcı açısından işlevini açıklayabilirsiniz."
],
sections:[
{n:"9.1",h:"Enerji yatırımı neden özel bir finansman ister?",blocks:[
 {t:"p",html:"Bir hidroelektrik santral, rüzgâr çiftliği ya da doğal gaz boru hattı yalnızca mühendislik eseri değil, aynı zamanda büyük tutarlı ve uzun ömürlü bir finansal girişimdir. Parayı bugün harcarsınız, karşılığını 20–30 yıl boyunca parça parça alırsınız. Arada fiyatlar, kur, faiz ve mevzuat değişebilir."},
 {t:"p",html:"Bu yüzden enerji projeleri iki soruya yanıt vermek zorundadır: <b>Para nereden ve hangi güvenceyle gelecek?</b> (finansman modeli) ve <b>Gelecekteki nakit akışları bugünkü yatırımı karşılıyor mu?</b> (yatırım değerlendirme). Kitabın bölüm girişindeki soru da bunu özetler: enerji yatırımında belirleyici olan sermaye midir, yoksa belirsizliği yönetebilme becerisi mi?"}
]},
{n:"9.2",h:"Proje finansmanı ve şirket finansmanı",blocks:[
 {t:"choice",items:[
  {label:"Şirket finansmanı",title:"Borç şirketin bilançosuna dayanır",body:"Kredi veya özkaynak artırımı doğrudan şirket bilançosu üzerinden yapılır. Kredi veren, şirketin bütün varlıklarını ve nakit akışlarını güvence olarak görür; borcun geri ödenmesinden şirketin tamamı sorumludur.",ex:"Avantajı: hızlı ve hukuken basit. Dezavantajı: şirketin borçluluk oranını artırır; büyük projelerde şirketin finansal kapasitesi sınırlayıcı olur."},
  {label:"Proje finansmanı",title:"Borç yalnızca projenin nakit akışına dayanır",body:"Proje için <b>özel amaçlı şirket</b> (SPV) kurulur. Kredi yalnızca projenin üreteceği nakitten geri ödenir; ana şirketin bilançosu doğrudan risk altında değildir (bilanço dışı yapı).",ex:"Avantajı: risk yatırımcı, kredi veren ve hatta devlet arasında paylaşılır; kalkınma bankalarının ilgisini çeker. Dezavantajı: EPC, PPA, O&M gibi sözleşmelerle karmaşık yapı ve genellikle daha yüksek kredi maliyeti."}
 ]},
 {t:"p",html:"Proje finansmanının dayandığı üç temel sözleşme şunlardır: <b>EPC</b> (mühendislik, tedarik, inşaat; santrali kim, kaça, ne zamana kuracak), <b>PPA</b> (elektriği kim, hangi fiyattan, kaç yıl alacak) ve <b>O&M</b> (işletme ve bakım). Banka, bu sözleşmeler nakit akışını güvenceye almadan kredi vermez."},
 {t:"widget",name:"classify",opts:{title:"Hangi finansman modeline uyar?",cats:["Şirket finansmanı","Proje finansmanı"],items:[
  ["Kredi verenler, şirketin tüm varlıklarını teminat olarak görür",0],
  ["Yatırım için ayrı bir özel amaçlı şirket (SPV) kurulur",1],
  ["Borcun geri ödemesi yalnızca santralin elektrik satış gelirine dayanır",1],
  ["Kredi süreci hızlıdır, karmaşık sözleşme ağı gerekmez",0],
  ["Ana şirketin borçluluk oranı doğrudan yükselir",0],
  ["EPC, PPA ve O&M sözleşmeleri ayrıntılı biçimde hazırlanmalıdır",1],
  ["Çok taraflı kalkınma bankalarının katılımı yaygındır",1],
  ["Küçük bir çatı GES'inin şirketin kendi kaynağı ve kredisiyle kurulması",0]
 ],note:"Ayırt edici soru: banka kime güveniyor? Şirkete güveniyorsa şirket finansmanı, projenin kendi nakit akışına güveniyorsa proje finansmanıdır. Proje finansmanı özellikle büyük, uzun ömürlü ve geliri öngörülebilir (PPA'lı) projelerde tercih edilir."}}
]},
{n:"9.3",h:"Net bugünkü değer (NBD)",blocks:[
 {t:"p",html:"Bugünkü 100 lira, bir yıl sonraki 100 liradan değerlidir: bugün alırsanız faize yatırabilir ya da başka bir işte kullanabilirsiniz. Bu yüzden gelecekteki nakit akışları, bir <b>iskonto oranıyla</b> bugüne indirgenerek toplanır."},
 {t:"def",html:"Net bugünkü değer, bir yatırımın gelecekte sağlayacağı bütün net nakit akışlarının iskonto oranıyla bugüne indirgenmiş toplamından başlangıç yatırımının çıkarılmasıdır.",src:"Kitaptaki tanım; iskonto oranı genellikle sermaye maliyeti veya WACC'tır."},
 {t:"box",lbl:"Formül",html:"<p style=\"margin:0\">NBD = Σ<sub>t=1..n</sub> CF<sub>t</sub> / (1 + r)<sup>t</sup> − I<sub>0</sub></p><p style=\"margin:6px 0 0\">CF<sub>t</sub>: t. yıldaki net nakit akışı · r: iskonto oranı · I<sub>0</sub>: başlangıç yatırımı · n: proje ömrü. Her yıl aynı CF geliyorsa toplam kısalır: NBD = CF × [1 − (1 + r)<sup>−n</sup>] / r − I<sub>0</sub>.</p>"},
 {t:"table",head:["NBD","Anlamı","Karar"],rows:[
  ["NBD > 0","Proje sermaye maliyetini karşılar ve üstüne değer yaratır","Kabul"],
  ["NBD = 0","Proje sermaye maliyetini tam karşılar, ek değer yaratmaz","Kayıtsız (başa baş)"],
  ["NBD < 0","Proje beklenen getiriyi sağlamaz; para başka yerde daha çok kazandırır","Ret"]]},
 {t:"p",html:"Negatif NBD her zaman muhasebe zararı demek değildir. Proje kâr da edebilir; ama bu kâr, aynı paranın aynı riskte başka yerde getireceğinden azdır. Aşağıdaki hesaplayıcıda yatırımı, yıllık net nakit akışını, ömrü ve iskonto oranını değiştirin."},
 {t:"widget",name:"calc",opts:{title:"NBD, İVO ve geri ödeme",inputs:[{id:"yat",label:"Başlangıç yatırımı (I₀)",min:50,max:500,step:10,value:200,unit:" milyon TL"},{id:"cf",label:"Yıllık net nakit akışı",min:10,max:150,step:5,value:60,unit:" milyon TL"},{id:"n",label:"Proje ömrü",min:3,max:25,step:1,value:5,unit:" yıl"},{id:"r",label:"İskonto oranı",min:1,max:40,step:0.5,value:12,unit:" %"}],formula:"(function(){var i=r/100,pv=cf*(1-Math.pow(1+i,-n))/i,nbd=pv-yat,f=function(x){return -yat+cf*(1-Math.pow(1+x,-n))/x},irr;if(cf*n<=yat){irr=null}else{var lo=1e-6,hi=10;for(var k=0;k<200;k++){var m=(lo+hi)/2;if(f(m)>0)lo=m;else hi=m;}irr=lo*100;}var g=function(v,d){return v.toLocaleString('tr-TR',{maximumFractionDigits:d})};return 'NBD = '+g(nbd,1)+' milyon TL ('+(nbd>0?'kabul':(nbd<0?'ret':'başa baş'))+') · İVO ≈ '+(irr===null?'pozitif değil':'%'+g(irr,1))+' · basit geri ödeme '+g(yat/cf,1)+' yıl';})()",result:"{r}",note:"Varsayılan değerler (200 milyon yatırım, 5 yıl boyunca 60 milyon, %12): nakit akışlarının bugünkü değeri ≈ 216,3 milyon, NBD ≈ +16,3 milyon, İVO ≈ %15,2. İskonto oranını %15,2'nin üzerine çıkarınca NBD'nin eksiye döndüğüne dikkat edin: İVO, NBD'yi sıfırlayan orandır. Basit geri ödeme süresi paranın zaman değerini dikkate almaz."}}
]},
{n:"9.4",h:"İç verimlilik oranı (İVO)",blocks:[
 {t:"def",html:"İç verimlilik oranı (İVO, IRR), NBD'yi sıfıra eşitleyen iskonto oranıdır; projenin kendi iç getiri oranıdır.",src:"0 = Σ CF<sub>t</sub> / (1 + İVO)<sup>t</sup> − I<sub>0</sub>"},
 {t:"p",html:"İVO genellikle elle doğrudan çözülemez; deneme-yanılma (iterasyon) ya da Excel'deki IRR fonksiyonu gibi yazılımlarla bulunur. Yukarıdaki hesaplayıcı da arka planda bu aramayı yapıyor. Karar kuralı basittir: <b>İVO sermaye maliyetinin üzerindeyse kabul</b>, eşitse başa baş, altındaysa ret. Kitaptaki örnekte bir rüzgâr santralinin İVO'su %12, sermaye maliyeti %9'dur; proje caziptir."},
 {t:"table",head:["","NBD","İVO"],rows:[
  ["Ölçüt türü","Mutlak değer (milyon TL)","Oran (%)"],
  ["Sorduğu soru","Proje bugünün parasıyla ne kadar değer yaratıyor?","Proje yüzde kaç getiri sağlıyor?"],
  ["Karşılaştırma","Sıfırla","Sermaye maliyetiyle"],
  ["Projeler arasında seçim","Daha yüksek NBD tercih edilir","Ölçek farkını göremez; tek başına yanıltabilir"]]},
 {t:"p",html:"İki ölçüt çoğu zaman aynı kararı verir. Ayrıştıklarında, örneğin küçük ama yüksek İVO'lu bir GES ile büyük ama daha düşük İVO'lu bir RES arasında seçim yaparken, kitap mutlak değer yaratımını gösterdiği için <b>NBD'si yüksek olanı</b> önerir."}
]},
{n:"9.5",h:"İskonto oranı ve sermaye maliyeti (WACC)",blocks:[
 {t:"p",html:"İskonto oranı, fizibilitenin en kritik parametresidir: oran yükseldikçe gelecekteki nakit akışlarının bugünkü değeri düşer. Aynı proje %8'de kârlı, %15'te zararlı görünebilir. Oran, yatırımcının <b>fırsat maliyetini</b> ve projenin risklerini yansıtır: bu parayla aynı riskte başka nerede ne kazanabilirdim?"},
 {t:"p",html:"Şirketler genellikle <b>ağırlıklı ortalama sermaye maliyetini</b> (WACC) kullanır. Proje kısmen ortakların parasıyla (özkaynak), kısmen krediyle (borç) finanse edilir; her kaynağın maliyeti payıyla ağırlıklandırılır. Faiz giderleri vergiden düşülebildiği için borcun maliyeti vergi sonrası alınır."},
 {t:"box",lbl:"Formül",html:"<p style=\"margin:0\">WACC = (Ö / V) × r<sub>ö</sub> + (B / V) × r<sub>b</sub> × (1 − t)</p><p style=\"margin:6px 0 0\">Ö: özkaynak · B: borç · V = Ö + B · r<sub>ö</sub>: ortakların beklediği getiri · r<sub>b</sub>: kredi faizi · t: kurumlar vergisi oranı.</p>"},
 {t:"widget",name:"calc",opts:{title:"WACC hesaplayıcı",inputs:[{id:"op",label:"Özkaynak payı (Ö / V)",min:10,max:100,step:5,value:30,unit:" %"},{id:"ro",label:"Özkaynak maliyeti",min:5,max:50,step:0.5,value:20,unit:" %"},{id:"rb",label:"Borç maliyeti (faiz)",min:3,max:45,step:0.5,value:12,unit:" %"},{id:"t",label:"Kurumlar vergisi oranı",min:0,max:35,step:1,value:25,unit:" %"}],formula:"(op/100)*ro+(1-op/100)*rb*(1-t/100)",result:"WACC ≈ %{r}",digits:2,note:"Varsayılan değerler: 0,30 × 20 + 0,70 × 12 × 0,75 = 6 + 6,3 = %12,3. Özkaynak payını artırınca WACC'ın yükseldiğini görün: özkaynak daha risklidir, ortaklar daha yüksek getiri ister. Vergi oranı burada örnek değerdir."}},
 {t:"list",items:[
  "<b>Ülke ve makro riskler:</b> enflasyon, kur riski, ülke risk primi. Türkiye için CDS (kredi temerrüt takası) primi bu açıdan izlenen göstergelerdendir.",
  "<b>Piyasa riski:</b> elektrik fiyatlarının oynaklığı, yakıt fiyatları, güneş ve rüzgârda üretim belirsizliği.",
  "<b>Düzenleyici risk:</b> alım garantileri (ör. YEKDEM), kapasite mekanizmaları, vergi ve karbon politikaları.",
  "<b>Proje özellikleri:</b> ölçek, teknolojinin kanıtlanmış olup olmadığı, proje süresi."
 ]},
 {t:"p",html:"Uygulamada üç yaklaşım kullanılır: WACC'ı doğrudan iskonto oranı almak, yatırımcının kendi beklenen getirisini (kitapta örnek: %12–15) kullanmak ya da risksiz faiz oranına ülke ve proje risk primi eklemek. Ortak kural: risk arttıkça iskonto oranı yükselir."},
 {t:"box",lbl:"Dikkat: nominal mi, reel mi?",html:"Nakit akışları cari fiyatlarla (enflasyon dahil) tahmin edildiyse iskonto oranı da nominal olmalıdır; sabit fiyatlarla tahmin edildiyse reel oran kullanılır. Yüksek enflasyonlu ekonomilerde bu ikisini karıştırmak NBD'yi ciddi biçimde saptırır. Pek çok enerji projesinin dolar bazında değerlendirilmesinin bir nedeni de budur."}
]},
{n:"9.6",h:"Uzun vadeli alım anlaşması (PPA)",blocks:[
 {t:"def",html:"PPA (Power Purchase Agreement), üretilen elektriğin genellikle 10–20 yıl boyunca sabit veya formüle bağlı koşullarla belirli bir alıcıya (off-taker) satılmasını garanti eden sözleşmedir.",src:"Yenilenebilir projelerde, özellikle proje finansmanıyla yatırım yapılıyorsa, PPA neredeyse vazgeçilmezdir."},
 {t:"table",head:["Taraf","PPA ne sağlar?"],rows:[
  ["Yatırımcı","Öngörülebilir gelir; fiyat ve talep riskinin azalması; fizibilitenin güvenle yapılması"],
  ["Finansör (banka, fon)","Kredi geri ödeme güvencesi; daha düşük faiz; PPA'nın teminat unsuru sayılması"],
  ["Alıcı (off-taker)","Fiyat istikrarı; kurumsal alıcılar için yeşil enerji ve daha düşük karbon ayak izi"],
  ["Piyasa","Yüksek başlangıç yatırımlı RES ve GES'lerin hayata geçmesi; aşırı dalgalanmanın azalması"]]},
 {t:"p",html:"PPA'nın finansal etkisini NBD üzerinden düşünün: sözleşme nakit akışlarının belirsizliğini azaltır, bu da projenin risk primini ve dolayısıyla iskonto oranını düşürür. Aynı nakit akışı daha düşük oranla indirgenince NBD yükselir. Yukarıdaki NBD hesaplayıcısında oranı 2–3 puan düşürerek bu etkiyi görebilirsiniz."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de yenilenebilir projeler uzun süre devletin alım garantisi niteliğindeki <b>YEKDEM</b> ile desteklendi (5346 sayılı Kanun). Son yıllarda şirketlerin doğrudan yenilenebilir üreticiyle anlaştığı <b>kurumsal (korporatif) PPA</b>'lar da gündeme geldi. Kitabın vaka çalışmasında öğrenciden gelir modeli olarak GÖP, kurumsal PPA ve YEKDEM arasında seçim yapması istenir; bu seçim NBD'deki iskonto oranını ve nakit akışının riskini doğrudan değiştirir."}
]},
{n:"9.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["SPV","Proje finansmanında yalnızca o yatırım için kurulan özel amaçlı şirket."],
  ["Bilanço dışı finansman","Borcun ana şirketin değil, proje şirketinin bilançosunda yer alması."],
  ["EPC","Mühendislik, tedarik ve inşaatı tek bir yükleniciye veren anahtar teslim sözleşme."],
  ["NBD","İndirgenmiş nakit akışlarının toplamından başlangıç yatırımının çıkarılması; pozitifse değer yaratılır."],
  ["İVO","NBD'yi sıfırlayan iskonto oranı; sermaye maliyetiyle karşılaştırılır."],
  ["İskonto oranı","Gelecekteki nakit akışlarını bugüne indirgeyen, fırsat maliyetini ve riski yansıtan oran."],
  ["WACC","Özkaynak ve borç maliyetlerinin paylarıyla ağırlıklandırılmış ortalaması."],
  ["PPA","Elektriğin uzun süre önceden belirlenmiş koşullarla satılmasını garanti eden alım anlaşması."],
  ["Off-taker","PPA'da elektriği satın almayı taahhüt eden alıcı."]
 ]}
]},
{n:"9.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Proje finansmanını şirket finansmanından ayıran temel özellik nedir?",o:["Kredinin her zaman devlet bankasından alınması","Borcun yalnızca projenin nakit akışına dayanması","Faiz oranının her zaman daha düşük olması","Hiç özkaynak kullanılmaması"],a:1,e:"Proje finansmanında SPV kurulur ve kredi yalnızca projenin gelirlerinden geri ödenir; ana şirketin bilançosu doğrudan risk altında değildir."},
  {q:"Bir projenin NBD'si −5 milyon TL çıktı. Bu ne anlama gelir?",o:["Proje muhasebe açısından kesinlikle zarar eder","Getirisi sermaye maliyetini karşılamaz","İVO sermaye maliyetinden kesinlikle yüksektir","Geri ödeme süresi sonsuz demektir"],a:1,e:"Negatif NBD, aynı paranın aynı riskte başka yerde daha çok kazandıracağını gösterir. Proje muhasebe açısından kâr edebilir ama yeterli değildir."},
  {q:"100 milyon TL'lik bir yatırım, 1 yıl sonra tek seferde 121 milyon TL getiriyor. İskonto oranı %10 ise NBD kaçtır?",o:["0","+10 milyon TL","+11 milyon TL","+21 milyon TL"],a:1,e:"121 / 1,10 = 110; 110 − 100 = +10 milyon TL. Basitçe 121 − 100 = 21 demek paranın zaman değerini yok sayar."},
  {q:"Aynı projede iskonto oranı %8'den %14'e çıkarılırsa NBD'ye ne olur?",o:["Artar","Azalır","Değişmez","Önce artar sonra azalır"],a:1,e:"Oran yükseldikçe gelecekteki nakit akışlarının bugünkü değeri düşer; ilk yatırım aynı kaldığı için NBD azalır."},
  {q:"İVO için doğru tanım hangisidir?",o:["Projenin muhasebe kâr oranı","Kredi faiz oranı","NBD'yi sıfıra eşitleyen iskonto oranı","Merkez bankası politika faizi"],a:2,e:"İVO, projenin kendi getiri oranıdır ve sermaye maliyetiyle karşılaştırılarak yorumlanır."},
  {q:"Bir RES'in İVO'su %12, sermaye maliyeti %9'dur. Karar ne olmalıdır?",o:["Ret, çünkü İVO %15'in altında","Kabul, çünkü İVO sermaye maliyetinin üzerinde","Kayıtsız, çünkü fark küçük","NBD bilinmeden karar verilemez"],a:1,e:"İVO > sermaye maliyeti olduğunda NBD pozitiftir; proje kabul edilir. Kitaptaki örnek de budur."},
  {q:"Özkaynak payı %40, özkaynak maliyeti %20; borç payı %60, faiz %10, vergi oranı %25. WACC kaçtır?",o:["%12,5","%14,0","%15,0","%16,0"],a:0,e:"0,40 × 20 + 0,60 × 10 × 0,75 = 8 + 4,5 = %12,5. Borç maliyeti vergi kalkanı nedeniyle (1 − t) ile çarpılır."},
  {q:"İki projeden A'nın İVO'su %25, NBD'si 4 milyon; B'nin İVO'su %16, NBD'si 30 milyon TL. Yalnızca birini seçebiliyorsanız kitap hangisini önerir?",o:["A, çünkü İVO'su yüksek","B, çünkü NBD'si yüksek","İkisi de eşit derecede iyi","Hiçbiri, çünkü İVO'lar farklı"],a:1,e:"Birbirini dışlayan projelerde NBD mutlak değer yaratımını gösterir. İVO ölçek farkını görmez."},
  {q:"PPA'nın bir projenin NBD'sini artırmasının finansal mekanizması nedir?",o:["Santralin elektrik üretimini fiziksel olarak artırması","Gelir riskini azaltıp iskonto oranını düşürmesi","Başlangıç yatırım maliyetini tamamen sıfırlaması","Projeyi her türlü vergiden muaf tutması"],a:1,e:"Öngörülebilir gelir riski azaltır; finansör daha uygun koşul sunar, iskonto oranı düşer ve aynı nakit akışlarının bugünkü değeri artar."},
  {q:"Basit geri ödeme süresinin NBD'ye göre temel zayıflığı nedir?",o:["Hesaplanmasının uzman yazılım gerektirmesi","Paranın zaman değerini ve sonraki yılları görmemesi","Yalnızca dolar cinsinden hesaplanabilmesi","Başlangıç yatırımını hesaba hiç katmaması"],a:1,e:"Geri ödeme süresi yatırım ÷ yıllık nakit akışıdır; iskonto yapmaz ve geri ödemeden sonra gelen yılları görmez. Hızlı bir ön eleme aracıdır."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. s. 79–87.",
 "Brealey, R. A., Myers, S. C., Allen, F. <i>Principles of Corporate Finance</i>. McGraw-Hill (NBD, İVO ve sermaye maliyeti bölümleri).",
 "Yescombe, E. R. (2014). <i>Principles of Project Finance</i> (2. baskı). Academic Press.",
 "Enerji Piyasası Düzenleme Kurumu — YEKDEM: <a href=\"https://www.epdk.gov.tr\">epdk.gov.tr</a>"
],
next:"Sonraki: Hafta 10 — Risk ve finansman: inşaat ve siyasi risk, hedging, devlet destekleri"
};
