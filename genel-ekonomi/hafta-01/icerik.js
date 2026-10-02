window.WEEK={
id:"ge-01",code:"GE",course:"Genel Ekonomi",short:"İktisat neden öğrenilir",week:1,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"İktisada giriş",
title:"İktisat neden öğrenilir? <em>Düşünme tarzı</em> ve tuzakları",
intro:"Bu hafta iktisadın ne incelediğini, iktisatçı gibi düşünmenin hangi kavramlara dayandığını ve gündelik kararlarda en sık düştüğümüz hataları öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, iki küçük deney ve 8 soruluk bir test var.",
goals:[
 "İktisadın konusunu kıtlık ve seçim kavramlarıyla açıklayabilirsiniz.",
 "Fırsat maliyeti, marjinal analiz ve teşvik kavramlarını günlük örneklerle kullanabilirsiniz.",
 "Nominal ve reel değişimi ayırt edip reel gelir değişimini hesaplayabilirsiniz.",
 "Yanlış nedensellik, eksen oyunu ve çerçeveleme gibi yanıltıcı akıl yürütmeleri tanıyabilirsiniz.",
 "Başlıca davranışsal önyargıları ve dürtme (nudge) yaklaşımını açıklayabilirsiniz."
],
sections:[
{n:"1.1",h:"İktisat neyi inceler?",blocks:[
 {t:"p",html:"İktisat; bireylerin, şirketlerin, hükümetlerin ve toplumların <b>sınırlı kaynakları</b> nasıl dağıttığını, nasıl üretip tükettiğini inceleyen bir sosyal bilimdir. Çıkış noktası basit bir çatışmadır: istekler sınırsız, kaynaklar sınırlıdır. Bu yüzden her birey ve her toplum seçim yapmak zorundadır."},
 {t:"p",html:"Bu temel soruya farklı dönemlerin iktisatçıları farklı vurgularla yaklaştı. Bir isim seçerek tanımlarını karşılaştırın."},
 {t:"choice",items:[
  {label:"Adam Smith",title:"Ulusların zenginliği (1776)",body:"Smith'e göre iktisat, bir ulusun zenginliğinin doğasını ve nedenlerini araştırır. Bireyler kendi çıkarlarını izlerken \"görünmez el\" aracılığıyla toplumun refahını da artırır.",ex:"Vurgu: piyasa ve iş bölümü."},
  {label:"David Ricardo",title:"Üretim ve bölüşüm",body:"Ricardo iktisadı, toplumda üretilen değerin toprak sahipleri, sermaye sahipleri ve emekçiler arasında nasıl paylaşıldığını inceleyen bir bilim olarak gördü.",ex:"Vurgu: gelir dağılımı."},
  {label:"J. S. Mill",title:"Refahın yasaları",body:"Mill'e göre iktisat, insan refahını artırmaya yönelik üretim, dağıtım ve tüketim yasalarını inceler. Üretim yasalarının doğaya, dağıtımın ise toplumsal tercihlere bağlı olduğunu savundu.",ex:"Vurgu: refah ve kurumlar."},
  {label:"Karl Marx",title:"Üretim ilişkileri",body:"Marx için iktisat, üretim ilişkilerini ve bu ilişkilerden doğan sınıf mücadelesini inceleyen toplumsal bir bilimdir.",ex:"Vurgu: sınıflar ve güç."},
  {label:"Alfred Marshall",title:"Gündelik hayatın bilimi (1890)",body:"Marshall iktisadı, insanın hayatın olağan işleri içindeki davranışını inceleyen bir bilim olarak tanımladı. Mikroiktisadi analizin temellerini o attı.",ex:"Vurgu: bireysel karar ve refah."}
 ]}
]},
{n:"1.2",h:"İktisat okuryazarlığı",blocks:[
 {t:"p",html:"İktisat okuryazarlığı, karmaşık modeller çözmek değil, <b>hayatı daha iyi okuyabilmektir</b>: haberleri, devlet politikalarını ve kişisel finansal kararları doğru yorumlayabilmek. Alışverişten kariyer seçimine, kredi kullanmaktan oy vermeye kadar pek çok karar bu becerinin kalitesine bağlıdır."},
 {t:"p",html:"Okuryazarlığın en temel sınavı nominal ve reel değişimi ayırmaktır. Maaşınız %30 arttı, ama fiyatlar %40 arttıysa, aslında daha az şey satın alabilirsiniz. Aşağıdaki hesaplayıcıyla deneyin."},
 {t:"widget",name:"realIncome",opts:{z:30,p:40}},
 {t:"table",head:["Alan","İktisadın somut katkısı","Tipik araç"],rows:[
  ["Sağlık","Sınırlı sağlık bütçesini en fazla faydayı sağlayacak biçimde kullanmak","Maliyet-etkinlik analizi"],
  ["Mühendislik","Projeleri ekonomik fizibiliteye göre sıralamak","Net bugünkü değer, iç verim oranı"],
  ["Medya","Veri haberciliği yapmak, nedenselliği sorgulamak","Enflasyon verisi okuma"],
  ["Kamu yönetimi","Vergi gelirinin hangi alana harcanacağına karar vermek","Fayda-maliyet analizi"],
  ["Girişimcilik","Doğru fiyatlama ve kârlılık analizi","Talep esnekliği, marjinal maliyet"]]}
]},
{n:"1.3",h:"İktisatçı gibi düşünmek",blocks:[
 {t:"p",html:"İktisadi düşünme tarzı, kıt kaynaklarla karar verirken maliyetleri ve faydaları sistemli biçimde tartmaktır. Beş temel kavram bu tarzın iskeletini oluşturur."},
 {t:"choice",items:[
  {label:"Fırsat maliyeti",body:"Bir seçeneği seçtiğinizde vazgeçtiğiniz bir sonraki en iyi seçenektir. Her kararın bir fırsat maliyeti vardır.",ex:"Örnek: Akşamı sınava çalışarak geçirmenin maliyeti, o akşam yarı zamanlı işte kazanabileceğiniz ücrettir."},
  {label:"Marjinal analiz",body:"Kararlar toplam üzerinden değil, bir birim daha fazlasının getirdiği ek fayda ve ek maliyet üzerinden verilir.",ex:"Örnek: İkinci dilim pastanın verdiği keyif, birincisininkinden azdır."},
  {label:"Teşvikler",body:"Ödüller ve cezalar insanların ve kurumların davranışını biçimlendirir. Bir politika teşvikleri değiştirir, davranış da buna göre değişir.",ex:"Örnek: Poşet ücretli olunca bez çanta kullanımı artar."},
  {label:"Fiyatlar",body:"Fiyatlar arz ile talebi dengeler ve kaynakların nereye gideceğine dair bilgi taşır.",ex:"Örnek: Domates fiyatı yükselince hem tüketici azaltır hem üretici seraya yatırım yapar."},
  {label:"Ticaret",body:"Gönüllü değişim genellikle iki tarafa da fayda sağlar; herkes en iyi yaptığı işte uzmanlaşabilir.",ex:"Örnek: Çiftçi buğday, fırıncı ekmek üretir; ikisi de kendi başına ikisini birden yapmaktan daha iyi durumdadır."}
 ]}
]},
{n:"1.4",h:"Modeller ve \"diğer her şey sabitken\"",blocks:[
 {t:"p",html:"İktisadi modeller gerçek dünyanın basitleştirilmiş temsilleridir. Metro haritası şehrin bütün binalarını göstermez; yalnızca hatları ve durakları gösterir, ama yolunuzu bulmanızı sağlar. İyi bir model de yalnızca incelenmek istenen temel ilişkiyi gösterir."},
 {t:"def",html:"<i>Ceteris paribus</i>: diğer her şey sabitken.",src:"Bir değişkenin (örneğin fiyatın) bir başkası (talep edilen miktar) üzerindeki etkisini ayrı görmek için kullanılan temel varsayım."},
 {t:"p",html:"Gerçekte gelirler, zevkler ve başka malların fiyatları da değişir. Model bu karmaşık etkileşimi adım adım anlamamızı sağlar; amacı gerçeği birebir kopyalamak değil, yol göstermektir."}
]},
{n:"1.5",h:"Analizde sık yapılan hatalar",blocks:[
 {t:"p",html:"Rakamlar kendi başına yalan söylemez, ama yanlış okunabilir ve yanlış sunulabilir. Aşağıdaki hatalar hem haberlerde hem politika tartışmalarında sık görülür."},
 {t:"choice",items:[
  {label:"Yanlış nedensellik",body:"İki olayın birlikte hareket etmesi, birinin ötekine yol açtığı anlamına gelmez.",ex:"Dondurma satışları arttıkça boğulma vakaları da artar. Dondurma boğulmaya yol açmaz; ikisinin ortak nedeni sıcak havadır."},
  {label:"Post hoc",body:"\"Ondan sonra geldi, öyleyse ondan dolayı geldi\" yanılgısı. Yalnızca zamanda arka arkaya gelen iki olaya nedensellik yüklenir.",ex:"Bir yasa çıktı, ertesi yıl kriz yaşandı; kriz yasadan değil, dış piyasalardaki bir şoktan kaynaklanmış olabilir."},
  {label:"Sıfır toplam",body:"Bir tarafın kazancının mutlaka diğerinin kaybı olduğunu varsaymak. Oysa gönüllü değişimde genellikle iki taraf da kazanır.",ex:"Kitap satın aldığınızda siz kitaba, satıcı paraya daha çok değer verir."},
  {label:"Kısa dönemcilik",body:"Uzun dönem etkileri göz ardı edip yalnızca anlık faydalara odaklanmak.",ex:"Bakım harcamasını kısmak bu yılın bütçesini rahatlatır, birkaç yıl sonra çok daha pahalı bir onarıma yol açar."},
  {label:"Ceteris paribus ihmali",body:"Diğer etkenlerin de değiştiğini unutup tek bir nedene bakarak sonuç çıkarmak.",ex:"Fiyat düştü ama satış da düştü; çünkü aynı dönemde gelirler de azalmıştı."}
 ]},
 {t:"p",html:"Grafikler bilgiyi hızla aktarır, ama yanıltmak için de kullanılabilir. En yaygın hile, dikey ekseni sıfır yerine yüksek bir değerden başlatmaktır. Bir grafiğe bakarken ilk bakılacak yer eksenlerin nereden başladığıdır."},
 {t:"widget",name:"axis"}
]},
{n:"1.6",h:"Davranışsal tuzaklar",blocks:[
 {t:"p",html:"Klasik iktisat insanların rasyonel karar verdiğini varsayar. Daniel Kahneman ve Amos Tversky'nin <b>beklenti teorisi</b> ise insanların aynı bilgiye, sunuluş biçimine göre farklı tepki verdiğini gösterdi. Önce kendiniz deneyin."},
 {t:"widget",name:"framing"},
 {t:"p",html:"<b>Kayıptan kaçınma</b> teorinin en önemli bulgusudur: aynı büyüklükteki bir kayıp, kazancın verdiği hazzın yaklaşık iki katı acı verir. Kazanç ve kayıp da mutlak değil, bir başvuru noktasına göre değerlendirilir: %15 zam beklerken %10 alan kişi bunu kayıp olarak yaşar."},
 {t:"table",head:["Önyargı","Kısaca","Tipik sonuç"],rows:[
  ["Aşırı özgüven","Gerçekte olduğundan daha emin hissetmek","\"En fazla 3 ay sürer\" denen işin 6 ay sürmesi, bütçe aşımı"],
  ["Onaylama","Fikrimizi destekleyen kanıtı aramak, karşıtını görmezden gelmek","Alternatiflerin göz ardı edilmesi, grup düşüncesi"],
  ["Bulunabilirlik","Kolay hatırlanan örneklere fazla güvenmek","Uçak kazası riskini abartıp araba kazası riskini küçümsemek"],
  ["Çıpalama","İlk duyulan bilgiye aşırı bağlanmak","Pazarlıkta ilk teklifin sonucu belirlemesi"],
  ["Statüko","Mevcut durumu değiştirmekten kaçınmak","Varsayılan seçeneğin kendiliğinden kabul edilmesi"]]},
 {t:"p",html:"Zaman konusunda da tutarsızız. Bugüne yakın ödüllere orantısız değer veririz; buna <b>bugün yanlılığı</b> (hiperbolik iskonto) denir. \"Diyete yarın başlarım\" cümlesi bunun özetidir."},
 {t:"widget",name:"reversal"}
]},
{n:"1.7",h:"Dürtme ve belirsizlik altında karar",blocks:[
 {t:"p",html:"Richard Thaler ve Cass Sunstein'ın yaygınlaştırdığı <b>dürtme</b> (nudge), seçim özgürlüğünü kısıtlamadan karar ortamını insanların kendi yararına olacak biçimde düzenlemektir. Zorlamak değil, kolaylaştırmak esastır. Emeklilik planlarına otomatik katılım uygulayan işyerlerinde katılım, gönüllü başvuru isteyenlere göre çok daha yüksektir."},
 {t:"box",lbl:"Etik dürtmenin dört ilkesi",html:"<ul style=\"margin:0;padding-left:20px\"><li><b>Şeffaflık:</b> Dürtmenin varlığı ve amacı gizlenmez.</li><li><b>Kolay çıkış:</b> İsteyen kişi dürtülen seçimden kolayca çıkabilir.</li><li><b>İyi niyet:</b> Dürtme, dürtülen kişinin çıkarına olmalıdır.</li><li><b>Ampirik test:</b> İşe yaradığı ölçülerek gösterilmelidir.</li></ul>"},
 {t:"p",html:"Belirsizlik altında tek bir \"en olası\" senaryoya güvenmek tehlikelidir. Daha sağlam kararlar için üç araç kullanılır: <b>senaryo analizi</b> (iyimser, temel, kötümser), <b>duyarlılık analizi</b> (sonucu en çok hangi değişken etkiliyor?) ve <b>stres testi</b> (plan aşırı ama makul bir şoka dayanır mı?)."}
]},
{n:"1.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Kıtlık","Sınırsız isteklere karşın kaynakların sınırlı olması; iktisadın çıkış noktası."],
  ["Fırsat maliyeti","Bir seçim yapıldığında vazgeçilen bir sonraki en iyi seçenek."],
  ["Marjinal analiz","Bir birim daha fazlasının getirdiği ek fayda ile ek maliyetin karşılaştırılması."],
  ["Ceteris paribus","Diğer her şey sabitken; tek bir ilişkiyi ayrı görmek için yapılan varsayım."],
  ["Reel değişim","Enflasyondan arındırılmış değişim; satın alma gücündeki gerçek değişim."],
  ["Post hoc","Zamanda ardışıklığı nedensellik sanma yanılgısı."],
  ["Kayıptan kaçınma","Kaybın, aynı büyüklükteki kazançtan daha güçlü hissedilmesi."],
  ["Dürtme","Seçimi kısıtlamadan karar ortamını kişinin yararına düzenleme."]
 ]}
]},
{n:"1.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"İktisadın temel sorunu aşağıdakilerden hangisidir?",o:["Paranın icadı ve yaygınlaşması","Kaynakların isteklere göre kıt olması","Devletin ekonomiye müdahalesi","Ülkeler arası ticaretin dengesi"],a:1,e:"Kıtlık her seçimi zorunlu kılar; iktisadın bütün soruları bu temel çatışmadan doğar."},
  {q:"Bir öğrenci akşamı sınava çalışarak geçiriyor. Alternatifi, saatlik ücretle garsonluk yapmaktı. Çalışmanın fırsat maliyeti nedir?",o:["Ders kitabının fiyatı","Garsonlukta kazanacağı ücret","Sınavdan alacağı not","Sıfır, çünkü para harcamadı"],a:1,e:"Fırsat maliyeti vazgeçilen en iyi seçenektir; para harcanmasa da vazgeçilen ücret gerçek bir maliyettir."},
  {q:"Maaşınız %30 arttı, enflasyon %40 oldu. Reel gelirinizdeki değişim yaklaşık ne kadardır?",o:["+%10","−%10","−%7","Değişmedi"],a:2,e:"1,30 ÷ 1,40 − 1 ≈ −0,071. Basit çıkarma (−%10) yüksek oranlarda hatalı sonuç verir."},
  {q:"\"Dondurma satışları arttığında boğulma vakaları da artıyor, öyleyse dondurma tehlikelidir.\" Bu çıkarımdaki hata nedir?",o:["Sıfır toplam yanılgısı","Korelasyonu nedensellik sanmak","Marjinal faydayı göz ardı etmek","İlk duyulan bilgiye çıpalanmak"],a:1,e:"İkisinin ortak nedeni sıcak havadır. Birlikte hareket etmek, neden-sonuç ilişkisi kanıtlamaz."},
  {q:"\"Ceteris paribus\" varsayımı ne işe yarar?",o:["Bütün değişkenleri aynı anda incelemeyi","Tek bir ilişkiyi, diğer etkenleri sabit tutarak görmeyi","Modeli gerçeğin birebir kopyası yapmayı","Fiyat değişimlerini enflasyondan arındırmayı"],a:1,e:"Gerçekte her şey birlikte değişir; varsayım tek bir ilişkiyi ayrı görmemizi sağlar."},
  {q:"Kâr 95 milyon TL'den 100 milyon TL'ye çıkmış. Grafikte dikey eksen 94'ten başlatılırsa ne olur?",o:["Artış olduğundan küçük görünür","Artış olduğundan çok büyük görünür","Grafik ve algı hiç değişmez","Verinin kendisi değişmiş olur"],a:1,e:"Eksen kırpıldığında %5'lik artış, kâr ikiye katlanmış gibi görünür. Veri aynıdır, algı değişir."},
  {q:"Aynı sonuç \"200 kişi kurtulur\" yerine \"200 kişi ölür\" diye sunulunca insanların tercihinin değişmesine ne denir?",o:["Çerçeveleme etkisi","Statüko önyargısı","Ölçek ekonomisi","Bulunabilirlik"],a:0,e:"Beklenti teorisine göre insanlar kazanım çerçevesinde riskten kaçınır, kayıp çerçevesinde risk arar."},
  {q:"Emeklilik planına otomatik kayıt yapılıp çıkmak isteyene kolay çıkış imkânı tanınması hangi kavrama örnektir?",o:["Zorunlu tasarruf","Dürtme (nudge)","Ahlaki tehlike","Fiyat kontrolü"],a:1,e:"Seçim özgürlüğü korunur, yalnızca varsayılan seçenek kişinin yararına düzenlenir."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 1, s. 1–19.",
 "Kahneman, D. (2011). <i>Hızlı ve Yavaş Düşünme</i>. Varlık Yayınları.",
 "Thaler, R. H., Sunstein, C. R. (2008). <i>Dürtme</i>. Pegasus Yayınları.",
 "Türkiye İstatistik Kurumu — Tüketici fiyat endeksi: <a href=\"https://data.tuik.gov.tr\">data.tuik.gov.tr</a>"
],
next:"Sonraki: Hafta 02 — Kıtlık, fırsat maliyeti ve üretim olanakları"
};
