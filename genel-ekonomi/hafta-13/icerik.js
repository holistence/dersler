window.WEEK={
id:"ge-13",code:"GE",course:"Genel Ekonomi",short:"AD–AS ve politikalar",week:13,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Makroiktisat",
title:"Toplam talep–toplam arz ve <em>makro politikalar</em>",
intro:"Bu hafta önceki haftalarda tek tek gördüğümüz büyüme, işsizlik ve enflasyonu tek bir modelde birleştiriyoruz. Toplam talep ve toplam arz eğrilerinin neden o biçimde olduğunu, şokların ekonomiyi nasıl saptırdığını, enflasyon ile işsizlik arasındaki ödünleşimi ve hükümetle merkez bankasının bu dengeye nasıl müdahale ettiğini öğreneceksiniz. Okuma süresi yaklaşık 45 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Toplam talep eğrisinin neden aşağı eğimli olduğunu üç etkiyle açıklayıp kaydıran etkenleri sayabilirsiniz.",
 "Kısa ve uzun dönem toplam arz eğrilerini ayırt edip talep ve arz şoklarının etkisini AD–AS modeliyle yorumlayabilirsiniz.",
 "Kısa ve uzun dönem Phillips eğrisini beklentilerin rolüyle açıklayabilirsiniz.",
 "Tüketim fonksiyonunu kullanıp MPC, MPS ve harcama çarpanını hesaplayabilirsiniz.",
 "Para politikası rejimlerini karşılaştırıp Taylor kuralıyla önerilen politika faizini hesaplayabilirsiniz."
],
sections:[
{n:"13.1",h:"Toplam talep",blocks:[
 {t:"p",html:"<b>Toplam talep (AD)</b>, belirli bir fiyat düzeyinde hanehalklarının, firmaların, devletin ve yabancıların yurt içinde üretilen nihai mallara yapmayı planladığı toplam harcamadır: <b>AD = C + I + G + NX</b>. Eğri, fiyat düzeyi ile talep edilen reel GSYH arasındaki ilişkiyi gösterir ve aşağı eğimlidir. Nedeni tek bir malın talebindeki gibi ikame değil, üç makro etkidir."},
 {t:"list",items:[
  "<b>Faiz oranı etkisi:</b> Fiyatlar yükselince aynı işlemler için daha fazla para gerekir, para talebi ve faizler artar, kredili harcama ve yatırım azalır.",
  "<b>Servet etkisi:</b> Fiyatlar yükselince cebinizdeki paranın ve mevduatınızın satın alma gücü düşer, kendinizi daha yoksul hissedip tüketimi kısarsınız.",
  "<b>Dış ticaret etkisi:</b> Yurt içi fiyatlar yükselince yerli mallar yabancılara göre pahalanır, ihracat düşer, ithalat artar."]},
 {t:"p",html:"Fiyat düzeyi dışında herhangi bir bileşeni değiştiren olay eğriyi <b>kaydırır</b>. Tüketici güveninin artması, faizlerin düşmesi, kamu harcamalarının artması veya ihracat talebinin canlanması AD'yi sağa; bunların tersi sola kaydırır."}
]},
{n:"13.2",h:"Toplam arz: kısa dönem ve uzun dönem",blocks:[
 {t:"p",html:"<b>Kısa dönem toplam arz (SRAS)</b> pozitif eğimlidir. Ücretler ve bazı girdi fiyatları sözleşmeler nedeniyle \"yapışkandır\". Ürün fiyatları yükselirken maliyetler hemen artmayınca kâr marjı genişler ve firmalar daha çok üretir. Kitap üç açıklama verir: yapışkan ücretler, yapışkan fiyatlar (menü maliyetleri) ve göreli fiyat yanılgısı. Ekonomi potansiyel çıktıya yaklaştıkça SRAS dikleşir; çünkü boş kapasite kalmamıştır."},
 {t:"p",html:"<b>Uzun dönem toplam arz (LRAS)</b> ise potansiyel çıktı (Y*) düzeyinde <b>dikeydir</b>. Uzun dönemde tüm fiyat ve ücretler aynı oranda ayarlanır; reel maliyetler değişmediği için üretim kararı da değişmez. LRAS'ı yalnızca reel etkenler kaydırır: emeğin miktarı ve kalitesi, sermaye stoku, doğal kaynaklar ve teknoloji. Bunlar Hafta 11'de gördüğümüz büyüme kaynaklarıdır."},
 {t:"box",lbl:"Denge",html:"<b>Kısa dönem dengesi</b> AD ile SRAS'ın kesiştiği noktadır; ekonomi potansiyelin altında (durgunluk), üstünde (aşırı ısınma) ya da tam üzerinde olabilir. <b>Uzun dönem dengesi</b> AD, SRAS ve LRAS'ın aynı noktada kesiştiği, işsizliğin doğal oranında olduğu durumdur."}
]},
{n:"13.3",h:"Şoklar: ekonomiyi dengeden ne saptırır?",blocks:[
 {t:"p",html:"Ekonomiyi dengesinden saptıran beklenmedik olaylara <b>şok</b> denir. Hangi eğriyi kaydırdığına bakarak sonucunu öngörebilirsiniz. Bir şok türü seçin."},
 {t:"choice",items:[
  {label:"Olumlu talep",title:"AD sağa kayar",body:"Tüketici güveninin artması, vergi indirimi, kamu harcaması artışı, faiz indirimi veya ihracat patlaması.",ex:"Kısa dönem: üretim ve fiyat artar, ekonomi aşırı ısınır. Uzun dönem: ücretler ayarlanır, üretim Y*'ye döner, fiyat düzeyi kalıcı olarak yükselir."},
  {label:"Olumsuz talep",title:"AD sola kayar",body:"Güvenin çökmesi, vergi artışı, kamu harcamalarının kısılması, faiz artışı veya dış talebin daralması.",ex:"Kısa dönem: üretim ve fiyat düşer, durgunluk ve konjonktürel işsizlik. Uzun dönem: maliyetler düşer, üretim Y*'ye döner, fiyat düzeyi daha düşüktür."},
  {label:"Olumsuz arz",title:"SRAS sola kayar",body:"Petrol fiyatlarında sert artış, doğal afet, savaş, kötü hasat.",ex:"Kısa dönem: üretim düşer, fiyat yükselir. Buna stagflasyon denir ve politika yapıcı için en zor durumdur."},
  {label:"Olumlu arz",title:"SRAS (ve LRAS) sağa kayar",body:"Teknolojik ilerleme, verimlilik artışı, girdi fiyatlarında düşüş.",ex:"Kısa dönem: üretim artar, fiyat düşer. LRAS da kayarsa potansiyel çıktı kalıcı olarak yükselir."}
 ]},
 {t:"widget",name:"classify",opts:{title:"Hangi eğri kayar?",cats:["AD sağa","AD sola","SRAS sola","SRAS/LRAS sağa"],items:[
  ["Merkez bankası politika faizini sert biçimde artırıyor",1],
  ["Dünya petrol fiyatı bir yılda ikiye katlanıyor",2],
  ["Hükümet büyük bir altyapı programı başlatıyor",0],
  ["Yapay zekâ uygulamaları ofis verimliliğini kalıcı olarak artırıyor",3],
  ["Büyük bir deprem sanayi bölgesindeki üretim tesislerini yıkıyor",2],
  ["Ana ihracat pazarında derin bir resesyon başlıyor",1],
  ["Tüketiciler gelecekten iyimser olup harcamalarını artırıyor",0],
  ["İşgücünün eğitim düzeyi on yıl içinde belirgin biçimde yükseliyor",3]],
  note:"Harcama kararlarını değiştiren olaylar AD'yi, üretim maliyetini ya da kapasitesini değiştiren olaylar AS'yi kaydırır. Deprem hem kısa dönem arzı hem de sermaye stokunu azalttığı için potansiyel çıktıyı da düşürebilir."}}
]},
{n:"13.4",h:"Phillips eğrisi: enflasyon mu, işsizlik mi?",blocks:[
 {t:"p",html:"A. W. Phillips 1958'de İngiltere verilerinde ücret enflasyonu ile işsizlik arasında ters yönlü bir ilişki gözlemledi. Modern biçimiyle <b>kısa dönem Phillips eğrisi</b> şunu söyler: talebi artıran genişletici politika işsizliği düşürür ama enflasyonu yükseltir; daraltıcı politika enflasyonu düşürür ama işsizliği artırır. Bu, AD–AS modelinde AD'nin SRAS boyunca kaymasının başka bir görünümüdür."},
 {t:"p",html:"1970'lerin stagflasyonu bu basit ödünleşimi sarstı. Milton Friedman ve Edmund Phelps, ödünleşimin yalnızca <b>beklenen enflasyon sabitken</b> geçerli olduğunu savundu. Politika işsizliği doğal oranın altında tutmaya çalışırsa yüksek enflasyon beklentilere yerleşir, ücretler ona göre ayarlanır ve işsizlik doğal orana geri döner; geriye yalnızca daha yüksek enflasyon kalır."},
 {t:"def",html:"Uzun dönem Phillips eğrisi doğal işsizlik oranında <b>dikeydir</b>.",src:"Uzun dönemde politika yapıcı enflasyon ile işsizlik arasında seçim yapamaz, yalnızca enflasyonun düzeyini seçer. Doğal işsizliği düşürmenin yolu talep politikası değil, yapısal reformdur. Dikey LRPC, dikey LRAS'ın işgücü piyasasındaki karşılığıdır."}
]},
{n:"13.5",h:"Tüketim, tasarruf ve çarpan",blocks:[
 {t:"p",html:"Tüketim toplam talebin en büyük bileşenidir. Keynesyen <b>tüketim fonksiyonu</b> onu harcanabilir gelire bağlar: <b>C = a + b·Yd</b>. Burada a, gelir sıfır olsa bile yapılan <b>otonom tüketim</b>; b ise <b>marjinal tüketim eğilimidir</b> (MPC = ΔC ÷ ΔYd, 0 ile 1 arasında). Geliri 1.000 TL artan biri tüketimini 800 TL artırıyorsa MPC = 0,8'dir."},
 {t:"p",html:"Harcanmayan gelir tasarruftur: S = −a + (1 − b)·Yd. Ek gelirin harcanmayan kısmı <b>marjinal tasarruf eğilimidir</b> ve MPC + MPS = 1. Gelirin yanında servet, faiz, beklentiler, enflasyon beklentisi, gelir dağılımı ve demografi de tüketimi etkiler."},
 {t:"p",html:"Bir kişinin harcaması bir başkasının gelirdir. Devlet 1 milyon TL harcadığında bu para inşaat işçisinin geliri olur; işçi %80'ini markette harcar, market sahibi de aldığının %80'ini harcar. Zincir her turda küçülerek sürer ve toplam gelir artışı ilk harcamanın katları kadar olur. Bu <b>harcama çarpanıdır</b>: <b>k = 1 ÷ (1 − MPC)</b>."},
 {t:"widget",name:"calc",opts:{title:"Harcama çarpanı",inputs:[
  {id:"b",label:"Marjinal tüketim eğilimi (MPC)",min:0.1,max:0.95,step:0.05,value:0.8},
  {id:"g",label:"İlk kamu harcaması",min:1,max:100,step:1,value:1,unit:" milyon TL"}],
  formula:"'Çarpan '+(1/(1-b)).toFixed(2).replace('.',',')+' · Toplam gelir artışı '+(g/(1-b)).toFixed(1).replace('.',',')+' milyon TL'",
  result:"{r}",
  note:"Kitaptaki örnek: MPC = 0,8 → çarpan 5; 1 milyon TL'lik harcama gelirde 5 milyon TL artış yaratır. Bu basit kapalı ekonomi çarpanıdır; vergiler, ithalat (Hafta 14) ve faiz tepkisi gerçek çarpanı küçültür."}},
 {t:"box",lbl:"Tasarruf paradoksu",html:"Belirsizlik arttığında herkes aynı anda daha fazla tasarruf etmeye karar verirse tüketim düşer, firmaların satışları azalır, üretim ve istihdam daralır, gelir düşer. Sonunda toplam tasarruf da artmayabilir. Birey için doğru olan, toplumun tamamı için ters sonuç verebilir. Keynes'e göre bu durumda devlet ve merkez bankası toplam talebi desteklemelidir."}
]},
{n:"13.6",h:"Maliye ve para politikası",blocks:[
 {t:"p",html:"<b>Maliye politikası</b> hükümetin vergi ve kamu harcamalarıyla toplam talebi yönetmesidir. Durgunlukta genişletici (harcama artışı, vergi indirimi), yüksek enflasyonda daraltıcı (harcama kısıntısı, vergi artışı) uygulanır. <b>Para politikası</b> ise merkez bankasının faiz ve para arzı üzerinden kredi koşullarını yönetmesidir."},
 {t:"p",html:"Para politikasının ekonomiye ulaştığı yola <b>aktarım mekanizması</b> denir. Genişletici bir adımda zincir şöyle işler: merkez bankası faizi düşürür veya tahvil alır → piyasa faizleri ve kredi maliyeti düşer → konut, taşıt ve yatırım kredileri cazipleşir → tüketim ve yatırım artar → kısa vadede üretim ve istihdam yükselir. Uzun vadede etki ağırlıklı olarak fiyatlar genel düzeyine yansır."},
 {t:"table",head:["Görüş","Maliye politikası","Para politikası"],rows:[
  ["Keynesyen","Durgunlukta çok etkili; çarpan sayesinde talebi doğrudan artırır","Likidite tuzağında (faiz sıfıra yakınken) etkisiz kalabilir"],
  ["Monetarist (Friedman)","Geçici ve zayıf; borçlanma faizleri yükseltip özel yatırımı <b>dışlar</b>","Asıl görevi fiyat istikrarıdır; kurala bağlı, şeffaf ve öngörülebilir olmalıdır"]]},
 {t:"p",html:"İki politika birbirini destekleyebilir de engelleyebilir de. Durgunlukta ikisi birlikte genişletici olursa toparlanma hızlanır. Ama hükümet harcamayı artırırken merkez bankası faizi yükseltiyorsa araçlar birbirini nötralize eder. Kısa vadede amaç talebi dengelemek; uzun vadede ise yapısal reformlarla potansiyel büyümeyi artırmaktır."}
]},
{n:"13.7",h:"Para politikası rejimleri ve Taylor kuralı",blocks:[
 {t:"p",html:"Merkez bankası hangi çıpaya bağlanacağını seçer. Rejim seçimi; kurumların güvenilirliğine, ekonominin yapısına ve karşılaşılan şoklara bağlıdır."},
 {t:"choice",items:[
  {label:"Enflasyon hedeflemesi",title:"Açık bir enflasyon hedefi",body:"Merkez bankası hedefi ilan eder ve araçlarını bu hedefe göre kullanır. Esnektir, beklenti yönetimi için şeffaftır; ama güvenilir bir merkez bankası ve güçlü kurumlar ister.",ex:"Türkiye 2002–2005 döneminde örtük, 2006'dan itibaren açık enflasyon hedeflemesi uygulamaya başladı."},
  {label:"Parasal hedef",title:"Para arzı büyümesini hedeflemek",body:"M1, M2 veya M3'ün büyüme hızı hedeflenir. Para ile enflasyon arasındaki ilişkinin istikrarlı olmasını gerektirir.",ex:"Finansal yenilikler bu ilişkiyi zayıflattığı için bugün az kullanılır."},
  {label:"Kur çıpası",title:"Ulusal parayı bir dövize bağlamak",body:"Öngörülebilirlik sağlar; ama para politikası bağımsızlığından vazgeçilir, yüksek rezerv gerekir ve spekülatif ataklara açıktır.",ex:"Türkiye 2001 krizinden sonra kur çıpasını bırakıp dalgalı kura geçti."}
 ]},
 {t:"p",html:"<b>Taylor kuralı</b>, politika faizinin enflasyona ve çıktı açığına nasıl tepki vermesi gerektiğini gösteren bir rehberdir, katı bir kural değildir: <b>i = r* + π + 0,5(π − π*) + 0,5·ỹ</b>. Burada r* denge reel faizi, π mevcut enflasyon, π* hedef enflasyon, ỹ ise yüzde çıktı açığıdır."},
 {t:"widget",name:"calc",opts:{title:"Taylor kuralı",inputs:[
  {id:"r",label:"Denge reel faiz (r*)",min:0,max:5,step:0.5,value:1,unit:"%"},
  {id:"p",label:"Mevcut enflasyon (π)",min:0,max:80,step:0.5,value:8,unit:"%"},
  {id:"t",label:"Hedef enflasyon (π*)",min:0,max:10,step:0.5,value:5,unit:"%"},
  {id:"y",label:"Çıktı açığı (ỹ)",min:-6,max:6,step:0.5,value:-1,unit:"%"}],
  formula:"r+p+0.5*(p-t)+0.5*y",result:"Önerilen politika faizi: %{r}",digits:1,
  note:"Kitaptaki örnek: r* = 1, π = 8, π* = 5, ỹ = −1 → %10. Enflasyon hedefin 1 puan üstüne çıktığında kural faizi 1,5 puan artırmayı önerir; böylece reel faiz de yükselir. Merkez bankaları finansal istikrar, kur ve küresel koşullar nedeniyle bu değerden sapabilir."}}
]},
{n:"13.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Toplam talep","Belirli bir fiyat düzeyinde nihai mallara yapılması planlanan toplam harcama (C+I+G+NX)."],
  ["SRAS","Yapışkan ücret ve fiyatlar nedeniyle pozitif eğimli kısa dönem toplam arz."],
  ["LRAS","Potansiyel çıktıda dikey uzun dönem toplam arz; yalnızca reel etkenlerle kayar."],
  ["Stagflasyon","Olumsuz arz şokuyla üretim düşerken fiyatların yükselmesi."],
  ["Phillips eğrisi","Kısa dönemde enflasyon ile işsizlik arasındaki ters yönlü ilişki."],
  ["MPC","Ek bir liralık harcanabilir gelirin tüketime giden kısmı."],
  ["Harcama çarpanı","1 ÷ (1 − MPC); ilk harcamanın gelirde yarattığı toplam etki."],
  ["Dışlama etkisi","Kamu borçlanmasının faizleri artırıp özel yatırımı azaltması."],
  ["Taylor kuralı","Politika faizini enflasyon ve çıktı açığına bağlayan rehber formül."],
  ["Tasarruf paradoksu","Herkesin aynı anda tasarrufu artırmasının toplam geliri ve tasarrufu düşürebilmesi."]
 ]}
]},
{n:"13.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Fiyatlar genel düzeyi yükselince yerli malların yabancı mallara göre pahalanması ve net ihracatın düşmesi hangi etkidir?",o:["Servet etkisi","Faiz oranı etkisi","Dış ticaret etkisi","Dışlama etkisi"],a:2,e:"AD eğrisinin aşağı eğimini açıklayan üç etkiden biridir; fiyat artışı ihracatı azaltıp ithalatı artırır."},
  {q:"Uzun dönem toplam arz eğrisi neden dikeydir?",o:["Fiyatlar uzun dönemde hiç değişmediği için","Ücret ve fiyatlar ayarlanınca üretim fiyattan bağımsızlaştığı için","Toplam talep uzun dönemde sabit kaldığı için","Devlet uzun dönemde üretimi kotayla sabitlediği için"],a:1,e:"Uzun dönemde tüm nominal büyüklükler aynı oranda ayarlanır; reel maliyetler değişmediği için üretim potansiyel düzeyde kalır."},
  {q:"Petrol fiyatlarında sert bir artış kısa dönemde ne yaratır?",o:["Üretim artar, fiyatlar düşer","Üretim düşer, fiyatlar yükselir","Üretim artar, fiyatlar yükselir","Üretim düşer, fiyatlar düşer"],a:1,e:"Olumsuz arz şoku SRAS'ı sola kaydırır; durgunluk ile enflasyonun birlikte görüldüğü stagflasyon ortaya çıkar."},
  {q:"Genişletici bir talep şokunun uzun dönem sonucu hangisidir?",o:["Üretim potansiyelin üstünde kalıcı olarak artar","Üretim potansiyele döner, fiyat düzeyi yükselir","Üretim artar, fiyat düzeyi başlangıca döner","İşsizlik doğal oranın altında kalıcı olarak düşer"],a:1,e:"Ücret ve beklentiler ayarlandıkça SRAS sola kayar; üretim Y*'ye döner, geriye yalnızca daha yüksek fiyat düzeyi kalır."},
  {q:"Friedman ve Phelps'e göre uzun dönem Phillips eğrisi neden dikeydir?",o:["İşsizlik oranı uzun dönemde hiç değişmediği için","Beklentiler uyum sağlayınca işsizlik doğal orana döndüğü için","Merkez bankası işsizlik oranını doğrudan hedeflediği için","Enflasyon uzun dönemde kendiliğinden sıfıra indiği için"],a:1,e:"Kalıcı yüksek enflasyon beklentilere yerleşir; ödünleşim ortadan kalkar, işsizlik doğal oranında kalır."},
  {q:"MPC = 0,75 ise harcama çarpanı kaçtır?",o:["1,33","3","4","7,5"],a:2,e:"k = 1 ÷ (1 − 0,75) = 1 ÷ 0,25 = 4."},
  {q:"Geliri 2.000 TL artan bir hanenin tüketimi 1.200 TL artıyor. MPS kaçtır?",o:["0,4","0,6","0,8","1,2"],a:0,e:"MPC = 1.200 ÷ 2.000 = 0,6; MPS = 1 − 0,6 = 0,4."},
  {q:"Monetaristlerin maliye politikasına yönelttiği temel eleştiri nedir?",o:["Çarpanın beklenenden çok büyük olması","Kamu borçlanmasının özel yatırımı dışlaması","Vergilerin kısa vadede hiç değiştirilememesi","Faizler sıfırdayken likidite tuzağına düşülmesi"],a:1,e:"Dışlama etkisi nedeniyle kamu harcamasının talebe katkısının bir bölümü özel yatırımın azalmasıyla geri alınır."},
  {q:"Kitaptaki Taylor örneğinde (r* = 1, π* = 5, ỹ = −1) enflasyon 8'den 10'a çıkarsa önerilen faiz kaç olur?",o:["%10","%12","%13","%15"],a:2,e:"1 + 10 + 0,5(10 − 5) + 0,5(−1) = 1 + 10 + 2,5 − 0,5 = %13. Enflasyondaki 2 puanlık artış faizi 3 puan yükseltir."},
  {q:"Herkesin aynı anda tasarrufu artırması toplam tasarrufu neden artırmayabilir?",o:["Bankalar mevduatı kabul etmediği için","Tüketimin düşmesi üretimi ve geliri azalttığı için","Faizler sıfıra indiği için","Devlet tasarrufu vergilendirdiği için"],a:1,e:"Harcama düşünce gelir düşer; gelir düşünce tasarruf kapasitesi de azalır. Bu tasarruf paradoksudur."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 25–27, s. 260–288.",
 "Mankiw, N. G. (2018). <i>Principles of Economics</i> (8th ed.). Cengage Learning.",
 "Taylor, J. B. (1993). Discretion versus policy rules in practice. <i>Carnegie-Rochester Conference Series on Public Policy</i>, 39, 195–214.",
 "Türkiye Cumhuriyet Merkez Bankası — Para politikası: <a href=\"https://www.tcmb.gov.tr\">tcmb.gov.tr</a>"
],
next:"Sonraki: Hafta 14 — Bütçe açıkları, kamu borcu ve dış ticaret"
};
