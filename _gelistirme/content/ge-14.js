window.WEEK={
id:"ge-14",code:"GE",course:"Genel Ekonomi",short:"Borç ve dış ticaret",week:14,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Açık ekonomi ve kamu maliyesi",
title:"Bütçe açıkları, kamu borcu ve <em>dış ticaret</em>",
intro:"Dersin son haftasında iki büyük kısıtı ele alıyoruz: devletin bütçe kısıtı ve ülkenin dış dünyayla ilişkisi. Bütçe açığının nasıl finanse edildiğini, kamu borcunun hangi koşullarda sürdürülebilir olduğunu, döviz kurunun dış ticareti nasıl etkilediğini ve açık bir ekonomide politika yapıcının neden üç hedefi birden seçemediğini öğreneceksiniz. Okuma süresi yaklaşık 45 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Birincil ve genel bütçe dengesini ayırt edip bütçe açığının finansman yollarını ve etkilerini açıklayabilirsiniz.",
 "Borç dinamiği formülüyle (i − g) farkının ve birincil dengenin borç/GSYH oranına etkisini hesaplayabilirsiniz.",
 "Mali kural türlerini karşılaştırabilirsiniz.",
 "Döviz kurunun ihracat ve ithalata etkisini, dış ticaret çarpanını ve kur geçişkenliğini açıklayabilirsiniz.",
 "Ödemeler dengesi kalemlerini sınıflandırıp üçlü açmaz ve Mundell-Fleming modeliyle politika seçimlerini yorumlayabilirsiniz."
],
sections:[
{n:"14.1",h:"Bütçe açığı ve kamu borcu",blocks:[
 {t:"p",html:"Hanehalkı gibi devletin de gelirleri ve giderleri vardır. Bir yılda kamu harcamaları (G) kamu gelirlerini (T) aşarsa <b>bütçe açığı</b> oluşur. Faiz ödemeleri dışarıda bırakılarak hesaplanan dengeye <b>birincil (faiz dışı) denge</b> denir: devletin borç yükü dışındaki mali durumunu gösterir."},
 {t:"def",html:"Bütçe açığı bir <b>akım</b>, kamu borcu bir <b>stoktur</b>.",src:"Bütçe açığı bir yılda ne kadar ek borçlanma gerektiğini, kamu borcu ise geçmişten bugüne birikmiş toplam borcu gösterir. Küvete akan su ile küvetteki su gibi düşünün."},
 {t:"table",head:["Durum","Koşul","Anlamı"],rows:[
  ["Bütçe açığı","G > T","Devletin borçlanması gerekir"],
  ["Bütçe fazlası","G < T","Devlet borç ödeyebilir veya tampon biriktirebilir"],
  ["Denk bütçe","G = T","Borç stoku değişmez"]]},
 {t:"p",html:"Borcun büyüklüğü tek başına anlam taşımaz; ekonominin ödeme kapasitesiyle karşılaştırılmalıdır. Bu yüzden temel gösterge <b>borç/GSYH oranıdır</b>. Avrupa Birliği'nin Maastricht kriterleri bu oran için %60, bütçe açığı için GSYH'nin %3'ünü referans değer olarak alır."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de merkezi yönetim bütçe gerçekleşmelerini Hazine ve Maliye Bakanlığı her ay yayımlar; bültenlerde hem bütçe dengesi hem de faiz dışı denge ayrı ayrı yer alır. AB tanımlı genel yönetim borç stoku ve bunun GSYH'ye oranı da aynı bakanlıkça açıklanır. Güncel değerleri yorumlarken açığın ne kadarının faizden kaynaklandığına bakmak, bu haftanın temel alışkanlığıdır."}
]},
{n:"14.2",h:"Açık nasıl finanse edilir?",blocks:[
 {t:"p",html:"Devletin açığı kapatmak için üç yolu vardır ve her birinin farklı bir bedeli vardır. Bir yol seçin."},
 {t:"choice",items:[
  {label:"Borçlanma",title:"İç ve dış borçlanma",body:"Yurt içinden yerel para cinsinden ya da uluslararası piyasalardan döviz cinsinden borç alınır. En yaygın yoldur.",ex:"Bedeli: Fon talebi faizleri yükseltir ve özel yatırımı pahalandırır (dışlama etkisi). Döviz borcu kur riskini artırır."},
  {label:"Para basma",title:"Monetizasyon",body:"Hükümet açığı doğrudan merkez bankasından borçlanarak kapatır.",ex:"Bedeli: Mal arzı sabitken para arzı artar ve fiyatlar yükselir. Merkez bankası bağımsızlığı ve mali disiplin zedelenir."},
  {label:"Vergi / kısıntı",title:"Gelir artırmak, harcama kısmak",body:"Vergiler artırılır veya kamu harcamaları azaltılır.",ex:"Bedeli: Vergi artışı harcanabilir geliri ve kârları düşürür; eğitim, sağlık, altyapı kısıntıları uzun vadeli kalkınmayı zayıflatır."}
 ]},
 {t:"p",html:"Borç büyüdükçe <b>borç servisi</b> yani faiz ödemeleri bütçede daha çok yer kaplar. Borç/GSYH çok yükselirse yatırımcılar ödememe (temerrüt) riskini fiyatlar: <b>risk primi</b> ve CDS primleri artar, borçlanma faizi yükselir, sermaye çıkışı kuru zayıflatır ve enflasyonu besler. Ayrıca bir sonraki krizde kullanılabilecek <b>mali alan</b> daralır."},
 {t:"list",items:[
  "<b>Kısa vade – uzun vade:</b> Durgunlukta açığı artırmak işsizliği düşürür ama borç sorununu ağırlaştırabilir.",
  "<b>Büyüme – istikrar:</b> Büyüme için yapılan harcamalar enflasyon ve cari açık riski taşır.",
  "<b>Tüketim – yatırım:</b> Vergi indirimi tüketimi canlandırır ama eğitim ve altyapıya ayrılan kaynağı azaltır."]}
]},
{n:"14.3",h:"Borç sürdürülebilirliği ve mali kurallar",blocks:[
 {t:"p",html:"Borç sürdürülebilirliği, devletin mevcut borcunu ve gelecekteki faizlerini iflas etmeden ya da sonu gelmez biçimde borçlanmadan karşılayabilmesidir. Borç/GSYH oranındaki değişim yaklaşık olarak şöyle yazılır:"},
 {t:"def",html:"Δd ≈ (i − g) · dₜ₋₁ − pb",src:"d: borç/GSYH, i: borcun ortalama nominal faizi, g: nominal GSYH büyümesi, pb: birincil denge/GSYH (fazla pozitif, açık negatif)."},
 {t:"p",html:"Formülün mesajı nettir. <b>i &lt; g</b> ise ekonomi borçtan hızlı büyür, borç oranı kendiliğinden erir. <b>i &gt; g</b> ise faiz borcu büyümeden hızlı şişirir; oranı sabitlemek için birincil fazla vermek gerekir. Borcun vadesi ve para birimi de önemlidir: kısa vadeli ya da döviz cinsinden borç faiz ve kur şoklarına karşı kırılganlığı artırır."},
 {t:"widget",name:"calc",opts:{title:"Borç dinamiği",inputs:[
  {id:"d",label:"Başlangıç borç/GSYH",min:0,max:150,step:1,value:60,unit:"%"},
  {id:"i",label:"Ortalama nominal faiz (i)",min:0,max:60,step:0.5,value:8,unit:"%"},
  {id:"g",label:"Nominal GSYH büyümesi (g)",min:-5,max:60,step:0.5,value:5,unit:"%"},
  {id:"pb",label:"Birincil denge/GSYH",min:-6,max:6,step:0.5,value:0,unit:"%"}],
  formula:"(function(){var n=d*(1+i/100)/(1+g/100)-pb;var x=n-d;return 'Gelecek yıl borç/GSYH %'+n.toFixed(1).replace('.',',')+' ('+(x>=0?'+':'')+x.toFixed(1).replace('.',',')+' puan) · '+(x>0.05?'borç oranı artıyor':(x<-0.05?'borç oranı düşüyor':'borç oranı sabit'));})()",
  result:"{r}",
  note:"Hesap kesin biçimi kullanır: dₜ = dₜ₋₁ × (1+i)/(1+g) − pb. Varsayılan değerlerde i > g olduğu için birincil denge sıfırken bile borç artar. Birincil dengeyi kaç puan fazla vermeniz gerektiğini bulun; sonra g'yi i'nin üstüne çıkarın ve aynı borcun nasıl eridiğine bakın."}},
 {t:"p",html:"Mali disiplini kurala bağlamak için ülkeler <b>mali kurallar</b> kullanır. Amaç aşırı borçlanmayı önlemek ve maliye politikasının konjonktürü yatıştıracağına körüklemesini engellemektir."},
 {t:"table",head:["Kural","Hedef","Artısı","Eksisi"],rows:[
  ["Borç tavanı","Borç/GSYH ≤ X (ör. %60)","Net ve anlaşılır üst sınır","Daralmada çok sert olabilir"],
  ["Açık sınırı","Açık/GSYH ≤ Y (ör. %3)","İzlemesi kolay","Bütçe dışı ve yarı mali işlemlerle aşılabilir"],
  ["Harcama kuralı","Kamu harcama artışı ≤ potansiyel büyüme","Konjonktürle uyumlu","Gelir şoklarına duyarlı"],
  ["Altın kural","Yalnızca yatırım için borçlanma","Gelecek nesilleri korur","Yatırım–cari harcama ayrımı zor"]]}
]},
{n:"14.4",h:"Dış ticaret ve döviz kuru",blocks:[
 {t:"p",html:"Hiçbir ekonomi kapalı değildir. <b>Net ihracat</b> (NX = X − M) toplam talebin bir bileşenidir: dış ticaret fazlası GSYH'ye olumlu, açığı olumsuz katkı yapar. Bu ilişkinin merkezinde, ulusal paranın \"fiyat etiketi\" olan <b>döviz kuru</b> durur."},
 {t:"p",html:"Ulusal para değer kaybettiğinde yerli mallar yabancılar için ucuzlar, ithal mallar yurt içinde pahalanır. Kitaptaki örnekte 1.000 TL'lik bir ayakkabı, kur 20'den 25 TL'ye çıkınca 50 dolardan 40 dolara iner."},
 {t:"widget",name:"calc",opts:{title:"Kur değişince fiyat etiketleri",inputs:[
  {id:"tl",label:"Türk malının fiyatı",min:100,max:5000,step:50,value:1000,unit:" TL"},
  {id:"usd",label:"İthal malın fiyatı",min:10,max:500,step:5,value:40,unit:" $"},
  {id:"k",label:"Döviz kuru",min:5,max:60,step:0.5,value:25,unit:" TL/$"}],
  formula:"'Türk malı yurt dışında '+(tl/k).toFixed(2).replace('.',',')+' $ · İthal mal yurt içinde '+Math.round(usd*k).toLocaleString('tr-TR')+' TL'",
  result:"{r}",
  note:"Kuru 20'den 25'e çıkarın: ihraç malı dolar cinsinden ucuzlar, ithal mal TL cinsinden pahalanır. Etkinin dış dengeyi düzeltmesi talebin fiyata duyarlılığına bağlıdır: Marshall-Lerner koşuluna göre ihracat ve ithalat talep esnekliklerinin toplamı 1'den büyük olmalıdır."}},
 {t:"p",html:"İhracat gelirleri de harcandıkça yayılır; buna <b>dış ticaret çarpanı</b> denir. Ancak açık ekonomide ek gelirin bir kısmı ithal mallara gider (<b>marjinal ithalat eğilimi</b>, MPM). Bu bir sızıntıdır ve çarpanı kapalı ekonomiye göre küçültür. Basit biçimiyle k = 1 ÷ (1 − MPC + MPM): MPC = 0,8 ve MPM = 0,2 iken çarpan 5'ten 2,5'e iner."},
 {t:"p",html:"Enflasyon da rekabet gücünü belirler. Bir ülkenin enflasyonu ticaret ortaklarından yüksekse, kur değişmese bile malları göreli olarak pahalanır, ihracat düşer ve cari açık büyür. Bu yüzden sürdürülebilir dış denge yalnızca kuru değil enflasyonu da kontrol etmeyi gerektirir."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Kitap dış ticaret politikalarını gümrük vergisi, kota, ihracat sübvansiyonu ve ekonomik entegrasyon başlıklarında toplar. Gümrük birliği, üyeler arasındaki engellerin kaldırılmasının yanında üçüncü ülkelere <b>ortak dış tarife</b> uygulanmasını gerektirir. Türkiye ile Avrupa Birliği arasındaki Gümrük Birliği 1 Ocak 1996'da yürürlüğe girmiştir ve sanayi malları ile işlenmiş tarım ürünlerini kapsar."}
]},
{n:"14.5",h:"Ödemeler dengesi ve cari açık",blocks:[
 {t:"p",html:"Ödemeler dengesi, bir ülkenin bir dönemde dünyanın geri kalanıyla yaptığı tüm ekonomik işlemlerin kaydıdır: <b>Cari hesap + Sermaye hesabı + Finans hesabı + Rezerv değişimi = 0</b>. Cari hesap mal ve hizmet ticaretini, birincil geliri (faiz, kâr) ve ikincil geliri (işçi dövizleri gibi transferler) kapsar."},
 {t:"p",html:"<b>Cari açık</b>, ülkenin yurt içi tasarruflarının yatırımlarını karşılamadığını (S &lt; I) ve farkın dış kaynakla finanse edildiğini gösterir. Bölümün girişindeki söz özetler: cari açık tek başına günah değildir; nasıl finanse edildiği kaderini belirler. Doğrudan yatırımla finanse edilen açık, kısa vadeli portföy girişleriyle (\"sıcak para\") finanse edilene göre çok daha istikrarlıdır."},
 {t:"widget",name:"classify",opts:{title:"Bu işlem ödemeler dengesinin hangi bölümüne kaydedilir?",cats:["Cari hesap","Finans hesabı","Rezerv varlıklar"],items:[
  ["Türkiye'nin Almanya'ya otomobil ihracatı",0],
  ["Yabancı turistlerin İstanbul'daki otel harcamaları",0],
  ["Yurt dışında çalışan işçilerin ailelerine gönderdiği para",0],
  ["Yabancı bir şirketin Türkiye'de fabrika kurması",1],
  ["Yabancı yatırımcıların Borsa İstanbul'dan hisse alması",1],
  ["Türk bankasının yurt dışından sendikasyon kredisi alması",1],
  ["TCMB'nin döviz rezervlerinin azalması",2],
  ["Türkiye'deki yabancı şirketin kârını ana ortağına transfer etmesi",0]],
  note:"Mal, hizmet, faiz-kâr geliri ve karşılıksız transferler cari hesaba; doğrudan yatırım, portföy yatırımı ve krediler finans hesabına; merkez bankasının resmî döviz varlıklarındaki değişim rezerv varlıklara yazılır. Kâr transferi birincil gelir kalemidir, bu yüzden cari hesaptadır."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'nin ödemeler dengesi istatistiklerini <b>TCMB</b> her ay yayımlar. Cari dengeyi yorumlarken enerji ve altın ticaretinin payına ve açığın doğrudan yatırımla mı, portföy ve kredi girişleriyle mi finanse edildiğine ayrıca bakılır."}
]},
{n:"14.6",h:"Açık ekonomide politika: Mundell-Fleming ve üçlü açmaz",blocks:[
 {t:"p",html:"Sermayenin serbestçe dolaştığı açık bir ekonomide politikaların gücü kur rejimine bağlıdır. <b>Mundell-Fleming modeline</b> göre:"},
 {t:"table",head:["Kur rejimi","Para politikası","Maliye politikası"],rows:[
  ["Dalgalı kur","<b>Etkili.</b> Faiz düşer → sermaye çıkar → para değer kaybeder → net ihracat artar.","<b>Zayıf.</b> Harcama faizi artırır → sermaye girer → para değerlenir → net ihracat düşer."],
  ["Sabit kur","<b>Etkisiz.</b> Merkez bankası kuru savunmak için para arzını eski düzeyine çeker.","<b>Güçlü.</b> Faiz baskısıyla gelen sermayeyi karşılamak için para arzı artar, genişleme pekişir."]]},
 {t:"p",html:"Bunun ardındaki ilke <b>üçlü açmazdır</b> (imkânsız üçlü): bir ülke sabit kur, serbest sermaye hareketi ve bağımsız para politikasının üçünü birden sürdüremez, en fazla ikisini seçebilir. Bir köşe seçin."},
 {t:"choice",items:[
  {label:"Dalgalı kur",title:"Serbest sermaye + bağımsız para politikası",body:"Faizi ülke kendi koşullarına göre belirler; bunun bedeli kurun piyasada dalgalanmasıdır.",ex:"Örnek: ABD; Türkiye 2001 sonrasında dalgalı kura geçti."},
  {label:"Sabit kur",title:"Sabit kur + serbest sermaye",body:"Kur sabitlenir ve sermaye serbesttir; faiz, çıpa alınan paranın merkez bankasına bağlanır.",ex:"Örnek: ABD dolarına bağlı Hong Kong doları; ortak para kullanan euro bölgesi ülkeleri."},
  {label:"Sermaye kontrolü",title:"Sabit kur + bağımsız para politikası",body:"Hem kur hem faiz kontrol altında tutulur; bunun için uluslararası sermaye giriş-çıkışı sınırlanır.",ex:"Örnek: Çin'in geçmiş dönemleri; Bretton Woods sistemi."}
 ]},
 {t:"p",html:"Makro ihtiyati araçlar (kredi büyümesi sınırları, zorunlu karşılıklar) açmazın baskısını kısa vadede hafifletebilir ama açmazı ortadan kaldırmaz."}
]},
{n:"14.7",h:"Kur geçişkenliği ve kur rejimleri",blocks:[
 {t:"p",html:"<b>Kur geçişkenliği</b>, döviz kurundaki değişimin yurt içi fiyatlara ne ölçüde ve ne hızla yansıdığıdır. Sabit bir oran değildir: ithal girdiye bağımlılık (enerji, ara mallar) ve dövize endeksli sözleşmeler geçişkenliği artırır; güvenilir bir enflasyon hedeflemesi, durgun talep ve yoğun rekabet ise azaltır. Bu yüzden merkez bankaları beklentileri sağlam bir çıpaya bağlamaya önem verir."},
 {t:"table",head:["Ölçüt","Sabit kur","Dalgalı kur"],rows:[
  ["Kuru ne belirler?","Merkez bankası kararı ve müdahalesi","Piyasadaki arz ve talep"],
  ["Merkez bankasının rolü","Rezervlerle sürekli müdahale","Gözetim; genelde müdahale etmez"],
  ["Avantaj","Belirsizliği azaltır, ticaret ve yatırımı kolaylaştırır","Otomatik dengeleyici; dış şokları emer"],
  ["Dezavantaj","Bağımsız para politikası yok, yüksek rezerv, spekülatif atak riski","Kur oynaklığı planlamayı zorlaştırır"]]},
 {t:"p",html:"Pek çok ülke iki uç arasında <b>yönetilen dalgalı kur</b> uygular: kur esas olarak piyasada belirlenir, merkez bankası aşırı oynaklıkta müdahale eder. Türkiye 2001 sonrasında böyle bir rejime geçmiştir."}
]},
{n:"14.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Birincil denge","Faiz ödemeleri hariç kamu gelir-gider farkı."],
  ["Borç/GSYH","Kamu borç stokunun ekonominin yıllık üretimine oranı."],
  ["Monetizasyon","Bütçe açığının merkez bankası kaynağıyla, yani para basarak finansmanı."],
  ["(i − g) farkı","Faizin büyümeyi aşıp aşmamasına göre borcun kendiliğinden artması ya da erimesi."],
  ["Altın kural","Devletin yalnızca yatırım harcamaları için borçlanabileceğini söyleyen mali kural."],
  ["Marshall-Lerner koşulu","Devalüasyonun dış dengeyi düzeltmesi için ihracat ve ithalat esneklikleri toplamının 1'i aşması."],
  ["Cari açık","Cari hesabın açık vermesi; yurt içi tasarrufun yatırımı karşılamaması (S < I)."],
  ["Üçlü açmaz","Sabit kur, serbest sermaye ve bağımsız para politikasından en fazla ikisinin seçilebilmesi."],
  ["Kur geçişkenliği","Kur değişiminin yurt içi fiyatlara yansıma derecesi ve hızı."]
 ]}
]},
{n:"14.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Kamu harcamaları 1.200, faiz ödemeleri 200, kamu gelirleri 1.100 (milyar TL). Birincil denge nedir?",o:["100 açık","100 fazla","300 açık","200 fazla"],a:1,e:"Faiz dışı harcama 1.200 − 200 = 1.000; 1.100 − 1.000 = 100 fazla. Genel bütçe ise 100 açık verir."},
  {q:"Bütçe açığı ile kamu borcu arasındaki ilişki hangisidir?",o:["İkisi de stoktur","Açık akım, borç stoktur","Açık stok, borç akımdır","İkisi de akımdır"],a:1,e:"Bir yılın açığı, birikmiş borç stokuna eklenir."},
  {q:"Açığın merkez bankasından borçlanarak kapatılmasının temel riski nedir?",o:["Dışlama etkisi","Enflasyon","Dış borç artışı","Vergi yükünün artması"],a:1,e:"Mal arzı sabitken para arzının artması fiyatları yükseltir."},
  {q:"Borç/GSYH %50, i = %10, g = %15, birincil denge sıfır. Yaklaşık formüle göre borç oranı ne olur?",o:["Yaklaşık 2,5 puan artar","Yaklaşık 2,5 puan azalır","Değişmez","Yaklaşık 5 puan artar"],a:1,e:"Δd ≈ (10 − 15) × 0,50 = −2,5 puan. Büyüme faizi aştığı için borç oranı erir."},
  {q:"Faizin büyümeyi aştığı (i > g) bir ekonomide borç oranını sabit tutmak için ne gerekir?",o:["Birincil açık","Birincil fazla","Daha fazla borçlanma","Para basma"],a:1,e:"Δd = 0 için pb = (i − g) × d olmalıdır; i > g ise bu pozitif, yani birincil fazla demektir."},
  {q:"Kur 20 TL'den 25 TL'ye çıktığında 1.000 TL'lik Türk malının dolar fiyatı ne olur?",o:["50 $'dan 60 $'a çıkar","50 $'dan 40 $'a iner","Değişmez","40 $'dan 50 $'a çıkar"],a:1,e:"1.000 ÷ 20 = 50 $; 1.000 ÷ 25 = 40 $. Ulusal paranın değer kaybı ihraç malını yabancılar için ucuzlatır."},
  {q:"MPC = 0,8 ve MPM = 0,3 olan açık bir ekonomide basit dış ticaret çarpanı kaçtır?",o:["5","2","3,3","1,25"],a:1,e:"k = 1 ÷ (1 − 0,8 + 0,3) = 1 ÷ 0,5 = 2. İthalat sızıntısı çarpanı kapalı ekonomideki 5'ten 2'ye düşürür."},
  {q:"Yabancı bir şirketin Türkiye'de fabrika kurması ödemeler dengesinde nereye kaydedilir?",o:["Cari hesap","Finans hesabı","Rezerv varlıklar","Sermaye hesabı dışında tutulur"],a:1,e:"Doğrudan yatırım finans hesabında yer alır ve cari açığın istikrarlı finansman kaynaklarındandır."},
  {q:"Sabit kur uygulayan ve sermaye hareketleri serbest olan bir ülke üçlü açmaza göre neden vazgeçmiştir?",o:["Sermaye serbestliğinden","Bağımsız para politikasından","Dış ticaretten","Mali kurallardan"],a:1,e:"Üç hedeften yalnızca ikisi seçilebilir; kur ve sermaye serbestliği seçildiyse faiz politikası çıpa ülkeye bağlanır."},
  {q:"Mundell-Fleming modeline göre dalgalı kur rejiminde hangi politika daha etkilidir?",o:["Maliye politikası","Para politikası","İkisi eşit derecede","Hiçbiri"],a:1,e:"Faiz indirimi sermaye çıkışı ve kur değer kaybı yoluyla net ihracatı artırır; maliye genişlemesi ise kurun değerlenmesiyle zayıflar."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 28–29, s. 290–309.",
 "Krugman, P. R., Obstfeld, M., Melitz, M. J. <i>International Economics: Theory and Policy</i>. Pearson.",
 "Türkiye Cumhuriyet Merkez Bankası — Ödemeler dengesi istatistikleri: <a href=\"https://www.tcmb.gov.tr\">tcmb.gov.tr</a>",
 "T.C. Hazine ve Maliye Bakanlığı — Bütçe ve borç istatistikleri: <a href=\"https://www.hmb.gov.tr\">hmb.gov.tr</a>"
],
next:"Dersin sonu — tebrikler!"
};
