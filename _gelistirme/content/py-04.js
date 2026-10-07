window.WEEK={
id:"py-04",code:"PY",course:"Proje Yönetimi",short:"Başlatma",week:4,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Başlatma",
title:"Proje başlatma belgesi ve <em>paydaş</em> analizi",
intro:"Bu hafta bir projenin resmen nasıl başlatıldığını, proje başlatma belgesinin (project charter) hangi bölümlerden oluştuğunu, paydaşları nasıl belirleyip güç–ilgi matrisine yerleştireceğinizi ve her paydaş grubuna hangi stratejiyle yaklaşacağınızı öğreneceksiniz. Okuma süresi yaklaşık 30 dakika; sayfada bir paydaş sınıflandırma alıştırması, bir strateji hesaplayıcısı ve 9 soruluk bir test var.",
goals:[
 "Proje başlatma belgesinin amacını ve temel bölümlerini açıklayabilirsiniz.",
 "Proje sponsoru, proje yöneticisi ve ekip arasındaki rol farkını ayırt edebilirsiniz.",
 "Bir projenin iç ve dış paydaşlarını sistemli biçimde listeleyebilirsiniz.",
 "Paydaşları güç–ilgi matrisine yerleştirip her gruba uygun stratejiyi seçebilirsiniz.",
 "Paydaşların mevcut ve istenen katılım düzeyini bir paydaş kaydında gösterebilirsiniz."
],
sections:[
{n:"4.1",h:"Bir proje ne zaman resmen başlar?",blocks:[
 {t:"p",html:"Bir fikir konuşulmaya başlandığında proje henüz başlamış değildir. Proje, onu destekleyecek yetkili kişi ya da kurul tarafından resmen onaylandığında başlar. Bu onayın yazılı biçimi <b>proje başlatma belgesidir</b>."},
 {t:"def",html:"<b>Proje başlatma belgesi</b> (project charter): Projenin varlığını resmen onaylayan ve proje yöneticisine, kurumun kaynaklarını proje faaliyetleri için kullanma yetkisi veren belge.",src:"PMI, PMBOK Kılavuzu."},
 {t:"p",html:"Belge genellikle kısadır, birkaç sayfayı geçmez. Ayrıntılı plan değildir; \"neden, ne, kim, ne kadar, ne zamana kadar\" sorularına üst düzeyde yanıt verir. En önemli işlevi, projenin arkasında kimin durduğunu ve proje yöneticisinin hangi yetkiyle hareket ettiğini netleştirmektir. Yazılı bir başlatma belgesi olmayan projelerde, ilk anlaşmazlıkta \"bu işi kim istedi?\" sorusu yanıtsız kalır."}
]},
{n:"4.2",h:"Başlatma belgesinin bölümleri",blocks:[
 {t:"table",head:["Bölüm","Ne yazılır?","Kariyer Günleri örneği"],rows:[
  ["Amaç ve iş gerekçesi","Proje neden yapılıyor, hangi soruna yanıt veriyor?","Öğrencilerin işverenlerle doğrudan tanışma fırsatı sınırlı"],
  ["Ölçülebilir hedefler","SMART hedefler ve başarı ölçütleri","En az 12 firma, 600 katılımcı, memnuniyet ≥ 4/5"],
  ["Üst düzey kapsam","Ana çıktılar; açıkça kapsam dışı olanlar","2 günlük fuar ve 6 panel; yemekli gala kapsam dışı"],
  ["Ana dönüm noktaları","Kritik tarihler","Firma onayları 15 Mart; etkinlik 10–11 Nisan"],
  ["Özet bütçe","Toplam bütçe ve kaynakları","Sponsorluk ve fakülte desteği"],
  ["Üst düzey riskler","Projeyi baştan tehdit eden başlıca riskler","Salonun başka etkinliğe verilmesi"],
  ["Paydaşlar","Ana paydaş listesi","Öğrenciler, firmalar, dekanlık, kariyer merkezi"],
  ["Roller ve yetki","Sponsor, proje yöneticisi, yöneticinin yetkileri","Koordinatör 20 bin TL'ye kadar harcamayı onaylar"],
  ["Onay","İmza ve tarih","Topluluk başkanı ve danışman öğretim üyesi"]]},
 {t:"p",html:"Projede üç rol sık karıştırılır. <b>Sponsor</b>, projeyi finanse eden ya da kurum içinde arkasında duran, belgeyi imzalayan ve büyük kararlarda son sözü söyleyen kişidir. <b>Proje yöneticisi</b>, projenin günlük yönetiminden sorumludur. <b>Ekip</b>, işi fiilen yapanlardır. Sponsor \"ne ve neden\", proje yöneticisi \"nasıl ve ne zaman\" sorusunun sahibidir."}
]},
{n:"4.3",h:"Paydaşlar kimlerdir?",blocks:[
 {t:"def",html:"<b>Paydaş</b>: Projeden etkilenen, projeyi etkileyen ya da projeden etkilendiğini düşünen kişi, grup veya kurum.",src:"Tanımdaki \"düşünen\" ifadesi önemlidir: algı da gerçek kadar etkilidir."},
 {t:"p",html:"Paydaşları gözden kaçırmak, projelerin en sık rastlanan başarısızlık nedenlerinden biridir. Bir mahallede yapılacak park projesinde belediye, müteahhit ve bütçe düşünülür, ama parkın yanındaki esnaf, inşaat gürültüsünden etkilenecek okul ya da köpek gezdiren sakinler unutulursa, proje ilerleyen aşamada şikâyet ve itirazlarla karşılaşabilir."},
 {t:"p",html:"Paydaşların beklentileri çoğu zaman birbiriyle çatışır. Sponsor firma stantların görünür bir yerde olmasını, dekanlık fuaye alanında ders saatlerinde gürültü olmamasını, öğrenciler ise panellerin ders çıkışı saatlerine konmasını ister. Proje yöneticisinin işi bu beklentileri önceden görmek, açıkça konuşmak ve gerekiyorsa sponsorun kararına sunmaktır. Beklentiler ne kadar erken bilinirse, uzlaşma o kadar ucuzdur."},
 {t:"list",items:[
  "<b>İç paydaşlar:</b> sponsor, proje ekibi, kurumun diğer birimleri, üst yönetim.",
  "<b>Dış paydaşlar:</b> müşteri ve kullanıcılar, tedarikçiler, düzenleyici kurumlar, yerel halk, medya, rakipler.",
  "<b>Pratik yöntem:</b> Ekiple 15 dakikalık beyin fırtınası yapın; \"Bu proje kimin hayatını değiştirir? Kim durdurabilir? Kimin onayı gerekir? Kim kaynak sağlar?\" sorularını sorun."]}
]},
{n:"4.4",h:"Güç–ilgi matrisi",blocks:[
 {t:"p",html:"Bütün paydaşlara aynı ilgiyi göstermek mümkün değildir. <b>Güç–ilgi matrisi</b>, paydaşları iki eksene yerleştirir: projeyi etkileme <b>gücü</b> ve projeye <b>ilgisi</b>. Ortaya dört grup ve dört strateji çıkar."},
 {t:"table",head:["","Düşük ilgi","Yüksek ilgi"],rows:[
  ["<b>Yüksek güç</b>","<b>Memnun tut:</b> İhtiyaç duydukları bilgiyi verin, gereksiz ayrıntıyla yormayın","<b>Yakından yönet:</b> Kararlara katın, düzenli ve yüz yüze görüşün"],
  ["<b>Düşük güç</b>","<b>İzle:</b> Asgari çabayla takip edin, değişiklik olursa yeniden değerlendirin","<b>Bilgilendir:</b> Düzenli bilgi verin, önerilerini dinleyin"]]},
 {t:"widget",name:"calc",opts:{title:"Paydaş stratejisi",inputs:[
  {id:"guc",label:"Paydaşın gücü (1–10)",min:1,max:10,step:1,value:8},
  {id:"ilgi",label:"Paydaşın projeye ilgisi (1–10)",min:1,max:10,step:1,value:3}],
  formula:"guc>5&&ilgi>5?'Yakından yönet: kilit paydaş. Kararlara katın, düzenli toplantı yapın.':(guc>5?'Memnun tut: güçlü ama ilgisi düşük. Kısa ve öz bilgi verin; ilgisi artarsa kilit paydaşa dönüşebilir.':(ilgi>5?'Bilgilendir: ilgili ama gücü sınırlı. Düzenli bilgi verin, destekçiye dönüştürün.':'İzle: asgari çaba. Konumunun değişip değişmediğini zaman zaman kontrol edin.'))",
  result:"{r}",note:"Paydaşların konumu sabit değildir. Bir bakan yardımcısının projeye ilgisi düşükken bir basın haberi onu bir gecede yüksek ilgili ve yüksek güçlü bir paydaşa dönüştürebilir."}},
 {t:"widget",name:"classify",opts:{title:"Kariyer Günleri: paydaşları yerleştirin",cats:["Yakından yönet","Memnun tut","Bilgilendir","İzle"],items:[
  ["Ana sponsor firma",0],
  ["Etkinlik salonunu tahsis eden dekanlık",0],
  ["Rektörlük",1],
  ["Katılmayı planlayan öğrenciler",2],
  ["Gönüllü olarak çalışan topluluk üyeleri",2],
  ["Kampüsteki kırtasiye işletmesi",3],
  ["Yerel gazete",1],
  ["Diğer fakültelerin öğrenci toplulukları",3]],
  note:"Tartışmaya açık yerleşimler doğaldır; önemli olan gerekçedir. Rektörlüğün gücü yüksek ama bu etkinliğe ilgisi sınırlıdır: kısa bir bilgi notu yeterlidir. Ana sponsor ve salonu veren dekanlık olmadan etkinlik olmaz: yakından yönetilmeleri gerekir."}}
]},
{n:"4.5",h:"Katılım düzeyi ve paydaş kaydı",blocks:[
 {t:"p",html:"Paydaşı matrise yerleştirmek ilk adımdır. İkinci adım, paydaşın projeye bugün nasıl yaklaştığını ve sizin onu nerede görmek istediğinizi belirlemektir. PMBOK beş katılım düzeyi tanımlar. Bir düzey seçin."},
 {t:"choice",items:[
  {label:"Habersiz",body:"Paydaş projeden ve olası etkilerinden haberdar değildir.",ex:"Örnek: Etkinlik günü otoparkı dolacak olan komşu birimin personeli."},
  {label:"Direnen",body:"Projeden ve etkilerinden haberdardır ama değişikliğe karşıdır.",ex:"Örnek: Aynı salonu aynı hafta kullanmak isteyen başka bir topluluk."},
  {label:"Tarafsız",body:"Projeden haberdardır, ne destekler ne karşı çıkar.",ex:"Örnek: Yerel gazete."},
  {label:"Destekleyen",body:"Projeden haberdardır ve değişikliği destekler.",ex:"Örnek: Öğrencilere duyuru yapmayı kabul eden kariyer merkezi."},
  {label:"Yönlendiren",body:"Projeden haberdardır ve başarısı için aktif olarak çalışır.",ex:"Örnek: Etkinliği kendi ağıyla diğer firmalara tanıtan ana sponsor."}
 ]},
 {t:"p",html:"Bu bilgiler bir <b>paydaş kaydında</b> toplanır: ad, rol, beklenti, güç, ilgi, mevcut katılım, istenen katılım ve strateji. Mevcut ile istenen düzey arasındaki fark, kime ne kadar emek harcamanız gerektiğini gösterir. Direnen bir dekanlığı destekleyene taşımak, tarafsız bir gazeteyi destekleyene taşımaktan çok daha önceliklidir."},
 {t:"box",lbl:"Dönem projesi · Adım 4",html:"Projeniz için bir sayfalık <b>proje başlatma belgesi</b> hazırlayın (4.2'deki tabloyu şablon olarak kullanın). Ardından en az 8 paydaş içeren bir <b>paydaş kaydı</b> oluşturun: her biri için güç, ilgi, mevcut ve istenen katılım düzeyi ile bir cümlelik strateji yazın. Paydaşları güç–ilgi matrisine yerleştirip bir görsel olarak ekleyin."}
]},
{n:"4.6",h:"Başlatma toplantısı",blocks:[
 {t:"p",html:"Belge imzalandıktan sonra proje genellikle bir <b>başlatma toplantısıyla</b> (kick-off) ekibe ve kilit paydaşlara duyurulur. Bu toplantının amacı herkesin aynı resmi görmesini sağlamaktır: projenin neden yapıldığı, neyin başarı sayılacağı, kimin hangi rolü üstlendiği ve ilk haftalarda neler olacağı."},
 {t:"list",items:[
  "<b>Sponsorun açılış konuşması:</b> Projenin neden önemli olduğunu sponsorun kendisinden duymak ekibe güven verir.",
  "<b>Hedefler ve kapsam:</b> Neyin kapsamda, neyin kapsam dışında olduğu açıkça söylenir.",
  "<b>Roller ve iletişim kuralları:</b> Kim neyden sorumlu, hangi kanaldan, ne sıklıkla haberleşilecek?",
  "<b>İlk adımlar:</b> Önümüzdeki iki haftanın somut görevleri ve sorumluları belirlenir.",
  "<b>Sorular ve kaygılar:</b> Ekip üyelerinin çekincelerini baştan dile getirmesine alan açılır."]},
 {t:"p",html:"İyi bir başlatma toplantısı bir saati geçmez ve yazılı bir notla kapanır. Toplantı notu, ileride \"bunu kim kabul etmişti?\" sorusunun yanıtıdır."}
]},
{n:"4.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Proje başlatma belgesi","Projeyi resmen onaylayan ve proje yöneticisine yetki veren belge."],
  ["Sponsor","Projeyi finanse eden veya kurum içinde arkasında duran, son kararı veren kişi."],
  ["İş gerekçesi","Projenin neden yapılmaya değer olduğunun açıklaması."],
  ["Paydaş","Projeden etkilenen, projeyi etkileyen veya etkilendiğini düşünen taraf."],
  ["Güç–ilgi matrisi","Paydaşları etkileme gücü ve ilgilerine göre dört gruba ayıran araç."],
  ["Kilit paydaş","Hem gücü hem ilgisi yüksek, yakından yönetilmesi gereken paydaş."],
  ["Katılım düzeyi","Paydaşın projeye yaklaşımı: habersizden yönlendirene beş düzey."],
  ["Paydaş kaydı","Paydaş bilgilerini, beklentilerini ve stratejileri toplayan tablo."]
 ]}
]},
{n:"4.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Proje başlatma belgesinin en önemli işlevi aşağıdakilerden hangisidir?",o:["Bütün faaliyetlerin ayrıntılı takvimini vermek","Projeyi resmen onaylamak ve proje yöneticisine yetki vermek","Tedarikçilerle sözleşme imzalamak","Kalite kontrol listelerini tanımlamak"],a:1,e:"Belge üst düzeydir; ayrıntılı plan değildir. Asıl işlevi projeyi resmen başlatmak ve yetkiyi tanımlamaktır."},
  {q:"Projenin arkasında duran, bütçeyi sağlayan ve büyük kararlarda son sözü söyleyen kişi kimdir?",o:["Proje yöneticisi","Sponsor","Ekip lideri","Kalite sorumlusu"],a:1,e:"Sponsor \"ne ve neden\" sorusunun sahibidir; proje yöneticisi günlük yönetimden sorumludur."},
  {q:"Bir park projesinde inşaat gürültüsünden etkilenecek okul için hangisi doğrudur?",o:["Projeyle doğrudan ilgisi olmadığı için paydaş sayılmaz","Projeden etkilendiği için paydaştır","Yalnızca sözleşme imzalarsa paydaş olur","Yalnızca belediyeye şikâyet ederse paydaş olur"],a:1,e:"Paydaş tanımı projeden etkilenen herkesi kapsar; etkilendiğini düşünmesi bile yeterlidir."},
  {q:"Gücü yüksek, projeye ilgisi düşük bir paydaşa uygulanacak strateji hangisidir?",o:["Yakından yönet","Memnun tut","Bilgilendir","İzle"],a:1,e:"Güçlü ama ilgisiz paydaşı gereksiz ayrıntıyla yormadan memnun tutmak gerekir; ilgisi artarsa kilit paydaşa dönüşür."},
  {q:"Etkinliğe katılacak öğrencilerin gücü düşük, ilgisi yüksektir. Hangi strateji uygundur?",o:["İzle","Memnun tut","Bilgilendir","Görmezden gel"],a:2,e:"İlgili ama gücü sınırlı paydaşlar düzenli bilgilendirilir ve destekçiye dönüştürülür."},
  {q:"Projeden haberdar olan ama değişikliğe karşı çıkan paydaşın katılım düzeyi nedir?",o:["Habersiz","Direnen","Tarafsız","Destekleyen"],a:1,e:"Direnen paydaş bilgilidir ama projenin yarattığı değişikliğe karşıdır."},
  {q:"Paydaş kaydında mevcut ve istenen katılım düzeyi arasındaki fark neyi gösterir?",o:["Projenin toplam bütçesinin ne kadar olacağını","Paydaşa ne kadar emek harcanacağını","Projenin kritik yolunun hangi işlerden geçtiğini","Paydaşla yapılan sözleşmenin ne kadar süreceğini"],a:1,e:"Fark büyüdükçe, o paydaşla ilişkiye ayrılması gereken çaba artar."},
  {q:"Aşağıdakilerden hangisi proje başlatma belgesinde yer almaz?",o:["Projenin ölçülebilir hedefleri ve başarı ölçütleri","Ana dönüm noktaları ve kritik tarihler","Faaliyet bazında günlük görev listesi","Proje yöneticisinin harcama ve karar yetkileri"],a:2,e:"Günlük görev listesi planlama aşamasında hazırlanır; başlatma belgesi üst düzeyde kalır."},
  {q:"Bir basın haberinden sonra ilgisiz bir bakanlık biriminin projeyle yakından ilgilenmeye başlaması neyi gösterir?",o:["Matrisin yanlış hazırlandığını","Paydaş konumlarının zamanla değişebileceğini","Projenin iptal edilmesi gerektiğini","Paydaşın artık paydaş olmadığını"],a:1,e:"Paydaş analizi tek seferlik değildir; konumlar değiştikçe güncellenmelidir."}
 ]}
]}
],
refs:[
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Paydaş performans alanı.",
 "Mendelow, A. (1991). Stakeholder mapping. <i>Proceedings of the 2nd International Conference on Information Systems</i>.",
 "Freeman, R. E. (1984). <i>Strategic Management: A Stakeholder Approach</i>. Pitman.",
 "Kerzner, H. <i>Project Management: A Systems Approach to Planning, Scheduling, and Controlling</i>. Wiley. Proje başlatma bölümü."
],
next:"Sonraki: Hafta 05 — Kapsam yönetimi ve İş Kırılım Yapısı"
};
