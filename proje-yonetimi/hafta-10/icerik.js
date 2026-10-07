window.WEEK={
id:"py-10",code:"PY",course:"Proje Yönetimi",short:"Ekip ve iletişim",week:10,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"İnsan tarafı",
title:"Kaynaklar, ekip ve <em>iletişim</em>",
intro:"Bu hafta projenin insan tarafını ele alıyoruz: kimin neyden sorumlu olduğunu RACI matrisiyle netleştirmeyi, kişilerin iş yükünü dengelemeyi, ekiplerin geçtiği gelişim aşamalarını, çatışmayı yönetme biçimlerini ve bir iletişim planı hazırlamayı öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada bir RACI alıştırması, iki hesaplayıcı ve 9 soruluk bir test var.",
goals:[
 "Fonksiyonel, matris ve proje odaklı organizasyon yapılarını karşılaştırabilirsiniz.",
 "Bir RACI matrisi hazırlayıp her iş için tek bir hesap veren belirleyebilirsiniz.",
 "Kaynak aşırı yüklenmesini tespit edip kaynak dengeleme seçeneklerini açıklayabilirsiniz.",
 "Tuckman'ın ekip gelişim aşamalarını ve beş çatışma yönetimi tarzını tanıyabilirsiniz.",
 "İletişim kanalı sayısını hesaplayıp projeniz için bir iletişim planı hazırlayabilirsiniz."
],
sections:[
{n:"10.1",h:"Proje hangi yapının içinde?",blocks:[
 {t:"p",html:"Proje yöneticisinin ekip üzerindeki yetkisi, projenin içinde bulunduğu kurumun yapısına bağlıdır. Aynı kişi bir kurumda ekibini kendisi seçip yönetirken, başka bir kurumda her şey için birim müdürlerinden izin istemek zorunda kalabilir. Bir yapı seçin."},
 {t:"choice",items:[
  {label:"Fonksiyonel",title:"Birimler güçlü, proje zayıf",body:"Çalışanlar uzmanlık birimlerine (muhasebe, üretim, pazarlama) bağlıdır. Projeler birimler içinde ya da birimler arası koordinasyonla yürür. Proje yöneticisinin yetkisi çok sınırlıdır; çoğu zaman yarı zamanlı bir koordinatördür.",ex:"Bir üniversitede fakültelerin ortak bir etkinliği, her fakültenin kendi personeliyle yürütmesi."},
  {label:"Matris",title:"İki patronlu düzen",body:"Çalışanlar hem birim müdürüne hem proje yöneticisine bağlıdır. Proje yöneticisinin gücü zayıf matristen güçlü matrise doğru artar. Kaynakları verimli kullanır ama 'iki patron' gerilimi yaratabilir.",ex:"Bir yazılım firmasında yazılımcının hem yazılım birim müdürüne hem de çalıştığı müşteri projesinin yöneticisine bağlı olması."},
  {label:"Proje odaklı",title:"Proje güçlü",body:"Kurum projeler etrafında örgütlenir. Ekip tam zamanlı olarak projeye atanır, proje yöneticisi geniş yetkiye sahiptir. Proje bitince ekibin nereye döneceği belirsizleşebilir.",ex:"Bir inşaat firmasında her şantiyenin kendi müdürü, ekibi ve bütçesiyle yönetilmesi."}
 ]}
]},
{n:"10.2",h:"Kim ne yapıyor? RACI matrisi",blocks:[
 {t:"p",html:"Projelerde en sık duyulan cümlelerden biri \"Ben onu senin yapacağını sanıyordum\"dur. <b>Sorumluluk atama matrisi</b>, her iş paketini ya da faaliyeti kişilerle eşleştirerek bu belirsizliği ortadan kaldırır. En yaygın biçimi <b>RACI</b> matrisidir."},
 {t:"list",items:[
  "<b>R — Responsible (Sorumlu):</b> İşi fiilen yapan kişi veya kişiler.",
  "<b>A — Accountable (Hesap veren):</b> İşin sonucundan hesap veren, son onayı veren kişi. <b>Her iş için yalnızca bir A olur.</b>",
  "<b>C — Consulted (Danışılan):</b> İş yapılırken görüşü alınan kişiler; iletişim iki yönlüdür.",
  "<b>I — Informed (Bilgilendirilen):</b> İşin durumu ve sonucu hakkında bilgi verilen kişiler; iletişim tek yönlüdür."]},
 {t:"table",head:["İş paketi","Koordinatör","Tasarım ekibi","Sponsorluk sorumlusu","Danışman öğretim üyesi"],rows:[
  ["Afiş ve sosyal medya","A","R","C","I"],
  ["Firma davetleri","A","I","R","C"],
  ["Panel programı","R, A","I","C","C"],
  ["Sonuç raporu","A","C","R","I"]]},
 {t:"widget",name:"classify",opts:{title:"Bu kişi RACI'de hangi harfi alır?",cats:["R","A","C","I"],items:[
  ["Kayıt sistemini kodlayan öğrenci",0],
  ["Kayıt sisteminin yayına alınmasını onaylayan koordinatör",1],
  ["Kayıt formundaki KVKK metni için görüşü alınan hukuk birimi",2],
  ["Kayıt sistemi yayına girince e-postayla haber verilen dekanlık",3],
  ["Afişi tasarlayan grafik tasarımcı",0],
  ["Afiş metni için görüşü alınan sponsor firma",2],
  ["Etkinlik sonrası raporun bir kopyası gönderilen kariyer merkezi",3],
  ["Bütçenin harcanmasından sponsor karşısında hesap veren koordinatör",1]],
  note:"Bir işte birden çok R olabilir, ama A her zaman tektir: sorumluluk paylaşılabilir, hesap verebilirlik paylaşılamaz. Bir satırda hiç R yoksa iş sahipsizdir; çok fazla C varsa iş yavaşlar."}}
]},
{n:"10.3",h:"Kaynak yükü ve dengeleme",blocks:[
 {t:"p",html:"Takvim çıkarılırken kişilerin aynı günlerde kaç işe atandığına bakılmazsa, kâğıt üzerinde mükemmel görünen plan uygulamada çöker. Bir gönüllüye aynı hafta hem afiş basımı, hem firma görüşmeleri, hem de stant planı verilmiş olabilir. Buna <b>kaynak aşırı yüklenmesi</b> denir."},
 {t:"widget",name:"calc",opts:{title:"Kaynak yükü",inputs:[
  {id:"g1",label:"Görev 1: Firma görüşmeleri",min:0,max:30,step:1,value:12,unit:" saat/hafta"},
  {id:"g2",label:"Görev 2: Afiş basımı takibi",min:0,max:30,step:1,value:6,unit:" saat/hafta"},
  {id:"g3",label:"Görev 3: Stant planı",min:0,max:30,step:1,value:8,unit:" saat/hafta"},
  {id:"kap",label:"Kişinin bu haftaki kullanılabilir süresi",min:5,max:45,step:1,value:15,unit:" saat"}],
  formula:"(function(){var t=g1+g2+g3,y=Math.round(t/kap*100);return 'Toplam atama '+t+' saat · Kullanım oranı %'+y+' → '+(y>100?'Aşırı yük: '+(t-kap)+' saat fazlası var. Bolluğu olan bir görevi kaydırın veya başka birine verin.':(y>=85?'Sınırda: beklenmedik işlere pay kalmıyor.':'Uygun.'));})()",
  result:"{r}",note:"Öğrenci gönüllülerin kullanılabilir süresi ders programı ve sınav haftalarıyla birlikte değişir. Planınızı yaparken kişilerin takvimini de sorun."}},
 {t:"p",html:"Aşırı yükü gidermenin iki yolu vardır. <b>Kaynak yumuşatma</b>, faaliyetleri yalnızca bollukları içinde kaydırır; proje süresi değişmez. <b>Kaynak dengeleme</b> ise kaynağın sınırına uymak için gerekirse kritik faaliyetleri de kaydırır; proje süresi uzayabilir. Geçen haftaların bilgisiyle düşünün: firma görüşmeleri kritik yoldaysa, kaydırılacak olan stant planı ya da afiş takibidir."}
]},
{n:"10.4",h:"Ekip gelişimi ve çatışma",blocks:[
 {t:"p",html:"Bir grup insanı aynı projeye atamak onları ekip yapmaz. Psikolog Bruce Tuckman 1965'te küçük grupların dört aşamadan geçtiğini öne sürdü; 1977'de Mary Ann Jensen ile beşinci aşamayı ekledi."},
 {t:"timeline",items:[
  ["1","Oluşma (forming)","Üyeler kibar ve çekingendir; görevler ve kurallar belirsizdir. Proje yöneticisi yön gösterir.",0],
  ["2","Çatışma (storming)","Fikir ayrılıkları ve rol mücadeleleri ortaya çıkar. Doğal ve gereklidir; bastırılırsa ekip bu aşamada takılır.",1],
  ["3","Normlaşma (norming)","Çalışma kuralları oturur, güven gelişir, ekip kimliği oluşur.",0],
  ["4","Performans (performing)","Ekip yüksek verimle ve özerk çalışır. Yönetici daha çok engelleri kaldırır.",1],
  ["5","Dağılma (adjourning)","Proje biter, ekip dağılır. Başarıların kutlanması ve öğrenilen derslerin paylaşılması bu aşamanın işidir.",0]]},
 {t:"p",html:"Çatışma projelerin doğal bir parçasıdır; önemli olan nasıl yönetildiğidir. Kenneth Thomas ve Ralph Kilmann, insanların çatışmaya beş farklı tarzda yaklaştığını tanımladı: <b>rekabet</b> (kendi çıkarını öne çıkarmak; acil ve tartışmasız kararlar gerektiğinde), <b>iş birliği</b> (iki tarafın çıkarını da karşılayan çözüm aramak; önemli ve zaman tanıyan konularda en iyi sonuç), <b>uzlaşma</b> (iki tarafın da bir şeyden vazgeçmesi), <b>kaçınma</b> (sorunu ertelemek; önemsiz konularda veya ortalık sakinleşene kadar) ve <b>uyma</b> (karşı tarafın isteğini kabul etmek; ilişkiyi korumak önemliyse)."},
 {t:"box",lbl:"Örnek",html:"Tasarım ekibi afişte koyu renkler, sponsor firma kurumsal mavi istiyor. <b>Rekabet:</b> \"Tasarımcı biziz, böyle kalacak.\" <b>Uyma:</b> \"Siz nasıl isterseniz.\" <b>Uzlaşma:</b> Yarısı koyu, yarısı mavi. <b>İş birliği:</b> Sponsorun asıl amacının logonun görünür olması olduğu anlaşılır; koyu zeminde logo için beyaz bir alan açılır. İki taraf da istediğini alır."}
]},
{n:"10.5",h:"İletişim",blocks:[
 {t:"p",html:"Proje yöneticileri zamanlarının büyük bölümünü iletişime harcar. İletişimin karmaşıklığı ekip büyüdükçe hızla artar: n kişilik bir ekipte iki kişi arasındaki olası iletişim kanalı sayısı <b>n(n − 1) / 2</b>'dir. 5 kişide 10 kanal vardır; 10 kişide 45, 20 kişide 190 kanal."},
 {t:"widget",name:"calc",opts:{title:"İletişim kanalı sayısı",inputs:[
  {id:"n",label:"Ekipteki ve iletişime dahil kişi sayısı",min:2,max:50,step:1,value:8,unit:" kişi"},
  {id:"k",label:"Eklenecek yeni kişi",min:0,max:20,step:1,value:2,unit:" kişi"}],
  formula:"(function(){var a=n*(n-1)/2,m=n+k,b=m*(m-1)/2;return 'Şu an '+a+' kanal · '+m+' kişiyle '+b+' kanal (+'+(b-a)+')';})()",
  result:"{r}",note:"Brooks yasasının arkasındaki mekanizmalardan biri budur: iki kişi eklemek iş gücünü %25 artırırken iletişim kanallarını çok daha fazla artırabilir."}},
 {t:"p",html:"İletişim yöntemleri üç gruba ayrılır. <b>Etkileşimli</b> iletişim (toplantı, telefon, görüntülü görüşme) karmaşık ve hassas konular için uygundur. <b>İtme</b> iletişimi (e-posta, durum raporu, duyuru) bilgiyi alıcıya gönderir ama okunduğunu garanti etmez. <b>Çekme</b> iletişimi (paylaşılan klasör, proje sitesi, bilgi panosu) bilgiyi bir yere koyar, ihtiyacı olan gelip alır; çok sayıda alıcı için uygundur."},
 {t:"table",head:["Kime","Ne","Ne sıklıkla","Nasıl","Kim hazırlar"],rows:[
  ["Proje ekibi","Görev durumu, engeller","Haftalık","15 dakikalık toplantı + ortak görev panosu","Koordinatör"],
  ["Sponsor firma","İlerleme özeti, kritik kararlar","İki haftada bir","Bir sayfalık e-posta raporu","Sponsorluk sorumlusu"],
  ["Dekanlık","Salon ve güvenlik ihtiyaçları","Dönüm noktalarında","Resmi yazı","Koordinatör"],
  ["Öğrenciler","Program, kayıt bilgisi","Etkinlikten önceki 4 hafta","Sosyal medya, kayıt sayfası","Tanıtım ekibi"]]},
 {t:"box",lbl:"Dönem projesi · Adım 10",html:"Projeniz için (1) bütün iş paketlerini içeren ve her satırda tek bir A bulunan bir RACI matrisi hazırlayın, (2) en yoğun haftanızda her ekip üyesinin saat cinsinden yükünü hesaplayıp aşırı yük varsa nasıl gidereceğinizi yazın, (3) en az 4 paydaş grubu için bir iletişim planı tablosu oluşturun. Ekibinizin şu an Tuckman'ın hangi aşamasında olduğunu ve bir sonraki aşamaya geçmek için ne yapacağınızı iki cümleyle değerlendirin."}
]},
{n:"10.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Matris yapı","Çalışanların hem birim müdürüne hem proje yöneticisine bağlı olduğu yapı."],
  ["RACI","Sorumlu, hesap veren, danışılan ve bilgilendirilen rollerini gösteren matris."],
  ["Hesap veren (A)","İşin sonucundan hesap veren tek kişi."],
  ["Kaynak dengeleme","Kaynak sınırına uymak için faaliyetleri kaydırma; süre uzayabilir."],
  ["Kaynak yumuşatma","Faaliyetleri yalnızca bollukları içinde kaydırma; süre değişmez."],
  ["Tuckman aşamaları","Oluşma, çatışma, normlaşma, performans ve dağılma."],
  ["İş birliği tarzı","Çatışmada iki tarafın çıkarını da karşılayan çözüm aramak."],
  ["İletişim kanalı","n kişilik ekipte n(n − 1)/2 olası ikili bağlantı."]
 ]}
]},
{n:"10.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Çalışanların hem birim müdürüne hem de proje yöneticisine bağlı olduğu yapı hangisidir?",o:["Fonksiyonel","Matris","Proje odaklı","Sanal"],a:1,e:"Matris yapıda çalışanın iki bağlantısı vardır; bu da kaynakları verimli kullanmayı sağlar ama \"iki patron\" gerilimi yaratabilir."},
  {q:"RACI matrisinde bir iş için en fazla kaç tane A (hesap veren) bulunmalıdır?",o:["Bir","İki","Ekip sayısı kadar","Sınır yoktur"],a:0,e:"Hesap verebilirlik paylaşılamaz; birden çok A olduğunda kimse gerçekten hesap vermez."},
  {q:"İş yapılırken görüşü alınan ve iki yönlü iletişim kurulan kişi RACI'de hangi harfle gösterilir?",o:["R","A","C","I"],a:2,e:"Danışılan (Consulted) kişiyle iki yönlü, bilgilendirilen (Informed) kişiyle tek yönlü iletişim kurulur."},
  {q:"Bir kişiye haftada 30 saatlik iş atanmış, kullanılabilir süresi 20 saattir. Kullanım oranı ve durum nedir?",o:["%67, uygun","%150, aşırı yük","%100, sınırda","%50, düşük"],a:1,e:"30 ÷ 20 = 1,5; kişi kapasitesinin %150'sine yüklenmiştir."},
  {q:"Faaliyetleri yalnızca bollukları içinde kaydırarak kaynak yükünü dengelemeye ne denir ve proje süresi ne olur?",o:["Kaynak dengeleme; süre uzar","Kaynak yumuşatma; süre değişmez","Sıkıştırma; süre kısalır","Hızlı izleme; süre kısalır"],a:1,e:"Yumuşatma bolluk sınırları içinde kalır, bu yüzden bitiş tarihi değişmez."},
  {q:"Fikir ayrılıklarının ve rol mücadelelerinin ortaya çıktığı ekip aşaması hangisidir?",o:["Oluşma","Çatışma","Normlaşma","Performans"],a:1,e:"Çatışma aşaması doğaldır; doğru yönetilirse ekip normlaşmaya geçer."},
  {q:"İki tarafın da asıl ihtiyacını anlayıp her ikisini karşılayan bir çözüm bulmak hangi çatışma tarzıdır?",o:["Uzlaşma tarzı","İş birliği tarzı","Uyma tarzı","Kaçınma tarzı"],a:1,e:"Uzlaşmada iki taraf da bir şeyden vazgeçer; iş birliğinde ise iki tarafın da istediği karşılanır."},
  {q:"6 kişilik bir ekipte kaç iletişim kanalı vardır?",o:["6","12","15","30"],a:2,e:"6 × 5 ÷ 2 = 15."},
  {q:"Yüzlerce öğrenciye etkinlik programını ulaştırmak için en uygun iletişim yöntemi hangisidir?",o:["Her öğrenciyle tek tek telefon görüşmesi","Çekme iletişimi: kayıt sayfası ve sosyal medya","Etkileşimli birebir toplantılar","Hiç iletişim kurmamak"],a:1,e:"Çok sayıda alıcı için bilgiyi herkesin erişebileceği bir yere koymak en verimli yoldur."}
 ]}
]}
],
refs:[
 "Tuckman, B. W. (1965). Developmental sequence in small groups. <i>Psychological Bulletin</i>, 63(6).",
 "Tuckman, B. W., Jensen, M. A. C. (1977). Stages of small-group development revisited. <i>Group & Organization Studies</i>, 2(4).",
 "Thomas, K. W., Kilmann, R. H. (1974). <i>Thomas-Kilmann Conflict Mode Instrument</i>. Xicom.",
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Ekip ve paydaş performans alanları."
],
next:"Sonraki: Hafta 11 — Kalite ve tedarik yönetimi"
};
