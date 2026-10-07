window.WEEK={
id:"py-02",code:"PY",course:"Proje Yönetimi",short:"Yaşam döngüsü",week:2,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Yaşam döngüsü",
title:"Yaşam döngüsü, süreç grupları ve <em>yaklaşımlar</em>",
intro:"Bu hafta bir projenin doğumdan kapanışa hangi evrelerden geçtiğini, beş süreç grubunu ve öngörücü (şelale), çevik ve hibrit yaklaşımlar arasında nasıl seçim yapılacağını öğreneceksiniz. Okuma süresi yaklaşık 30 dakika; sayfada bir sınıflandırma alıştırması, bir yaklaşım seçici ve 9 soruluk bir test var.",
goals:[
 "Proje yaşam döngüsünün evrelerini ve aşama kapısı kavramını açıklayabilirsiniz.",
 "Başlatma, planlama, yürütme, izleme-kontrol ve kapanış süreç gruplarına ait faaliyetleri ayırt edebilirsiniz.",
 "Öngörücü, çevik ve hibrit yaklaşımları karşılaştırabilirsiniz.",
 "Bir projenin belirsizlik düzeyine bakarak uygun yaklaşımı gerekçesiyle seçebilirsiniz.",
 "Değişikliğin maliyetinin proje ilerledikçe neden arttığını yorumlayabilirsiniz."
],
sections:[
{n:"2.1",h:"Proje yaşam döngüsü",blocks:[
 {t:"p",html:"Her proje, fikirden teslimata uzanan bir yolculuktur. Bu yolculuğun evrelerine <b>proje yaşam döngüsü</b> denir. Evrelerin adı sektöre göre değişir: inşaatta tasarım–ihale–yapım, yazılımda analiz–tasarım–kodlama–test, etkinlik organizasyonunda konsept–hazırlık–uygulama–değerlendirme. Ama genel kalıp hep aynıdır: başlangıç, organizasyon ve hazırlık, işin yürütülmesi, kapanış."},
 {t:"timeline",items:[
  ["Evre 1","Başlangıç","İhtiyaç tanımlanır, fikir değerlendirilir, proje resmen başlatılır. Harcama düşüktür.",0],
  ["Evre 2","Organizasyon ve hazırlık","Kapsam, takvim, bütçe ve ekip planlanır. Kararların çoğu burada verilir.",1],
  ["Evre 3","İşin yürütülmesi","Ürün ortaya çıkar. Harcama ve ekip büyüklüğü en yüksek düzeyine ulaşır.",0],
  ["Evre 4","Kapanış","Çıktı teslim edilir, sözleşmeler kapatılır, öğrenilen dersler kaydedilir.",0]]},
 {t:"p",html:"İki önemli örüntü vardır. Birincisi, maliyet ve ekip büyüklüğü başta düşüktür, yürütme evresinde zirve yapar, kapanışta hızla azalır. İkincisi, paydaşların sonucu etkileme gücü başta en yüksektir ve zamanla azalır; değişiklik yapmanın maliyeti ise tersine, zamanla artar. Bir binanın kat planını çizim aşamasında değiştirmek bir silgi kadar ucuzdur; beton döküldükten sonra değiştirmek yıkım demektir."},
 {t:"def",html:"<b>Aşama kapısı</b> (phase gate): Bir evrenin sonunda, projenin sonraki evreye geçip geçmeyeceğine karar verilen resmi gözden geçirme noktası.",src:"Kararlar genellikle üçtür: devam et, düzeltip yeniden değerlendir, durdur."}
]},
{n:"2.2",h:"Beş süreç grubu",blocks:[
 {t:"p",html:"Yaşam döngüsü projenin <i>zaman içindeki</i> evrelerini anlatır. <b>Süreç grupları</b> ise her evrede tekrar tekrar yaptığımız yönetim işlerini sınıflar. PMI bu işleri beş grupta toplar. Bir grubu seçerek içeriğine bakın."},
 {t:"choice",items:[
  {label:"Başlatma",title:"Projeyi resmen doğurmak",body:"Projenin amacı tanımlanır, iş gerekçesi ortaya konur, proje başlatma belgesi onaylanır ve paydaşlar belirlenir. Proje yöneticisine yetki bu aşamada verilir.",ex:"Kariyer Günleri: Topluluk yönetim kurulu etkinliği onaylar, bir koordinatör atar."},
  {label:"Planlama",title:"Yol haritası çizmek",body:"Kapsam, iş kırılım yapısı, zaman çizelgesi, bütçe, risk, kalite ve iletişim planları hazırlanır. Planlama tek seferlik değildir; proje boyunca güncellenir.",ex:"Kariyer Günleri: Salon, konuşmacı, ikram ve tanıtım işleri listelenir, takvim ve bütçe çıkarılır."},
  {label:"Yürütme",title:"İşi yapmak",body:"Ekip planlanan işleri yapar, kaynaklar kullanılır, tedarikçilerle çalışılır, paydaşlarla iletişim sürdürülür. Bütçenin büyük bölümü burada harcanır.",ex:"Kariyer Günleri: Afişler basılır, firmalarla görüşülür, salon hazırlanır."},
  {label:"İzleme ve kontrol",title:"Plana göre neredeyiz?",body:"Gerçekleşen ilerleme planla karşılaştırılır, sapmalar tespit edilir, değişiklik talepleri değerlendirilir, düzeltici önlem alınır. Diğer bütün grupların üstünde, proje boyunca sürer.",ex:"Kariyer Günleri: Haftalık toplantıda firma onayları ve harcamalar planla karşılaştırılır."},
  {label:"Kapanış",title:"Resmen bitirmek",body:"Çıktı teslim edilir ve kabul alınır, sözleşmeler ve hesaplar kapatılır, ekip dağıtılır, öğrenilen dersler kayda geçirilir.",ex:"Kariyer Günleri: Katılımcı anketi analiz edilir, sponsorlara teşekkür ve rapor gönderilir."}
 ]},
 {t:"widget",name:"classify",opts:{title:"Bu faaliyet hangi süreç grubunda?",cats:["Başlatma","Planlama","Yürütme","İzleme-kontrol","Kapanış"],items:[
  ["Proje başlatma belgesinin imzalanması",0],
  ["Proje bütçesinin kalem kalem hazırlanması",1],
  ["Yazılım ekibinin kodlama yapması",2],
  ["Gerçekleşen harcamaların bütçeyle karşılaştırılması",3],
  ["Müşteriden yazılı teslim kabulünün alınması",4],
  ["Risklerin listelenip olasılıklarının tahmin edilmesi",1],
  ["Bir değişiklik talebinin etkisinin değerlendirilmesi",3],
  ["Öğrenilen dersler raporunun yazılması",4]],
  note:"İpucu: \"Ne yapacağız?\" sorusu planlamaya, \"Yapıyoruz\" yürütmeye, \"Planla tutuyor mu?\" izleme-kontrole aittir. Değişiklik talepleri her zaman izleme ve kontrol içinde değerlendirilir."}}
]},
{n:"2.3",h:"Öngörücü yaklaşım: şelale",blocks:[
 {t:"p",html:"<b>Öngörücü</b> (geleneksel, şelale) yaklaşımda kapsam, takvim ve bütçe projenin başında mümkün olduğunca ayrıntılı belirlenir. Evreler sırayla ilerler: biri bitmeden öteki başlamaz, tıpkı bir şelalede suyun yalnızca aşağı akması gibi."},
 {t:"p",html:"Bu yaklaşım, ne istendiğinin baştan açıkça bilindiği ve değişikliğin pahalı olduğu projelerde çok iyi çalışır: köprü, bina, tünel, fabrika kurulumu. 1915 Çanakkale Köprüsü'nün yarısı inşa edildikten sonra tasarımını değiştirmek düşünülemez; bu yüzden tasarım yapımdan önce eksiksiz tamamlanır."},
 {t:"box",lbl:"Güçlü ve zayıf yanlar",html:"<b>Güçlü:</b> Öngörülebilir takvim ve bütçe, net sözleşmeler, ayrıntılı belgeleme. <b>Zayıf:</b> Müşteri ürünü ancak sonda görür; gereksinimler yanlış anlaşıldıysa hata geç fark edilir ve düzeltmesi pahalıdır."}
]},
{n:"2.4",h:"Çevik ve hibrit yaklaşımlar",blocks:[
 {t:"p",html:"<b>Çevik</b> (agile) yaklaşımda ürün, kısa döngülerle (genellikle 1–4 hafta) parça parça geliştirilir. Her döngünün sonunda çalışan bir parça kullanıcıya gösterilir, geri bildirime göre bir sonraki döngünün önceliği belirlenir. Kapsam baştan dondurulmaz; zaman ve ekip sabit tutulur, kapsam öğrenildikçe şekillenir."},
 {t:"p",html:"Bu yaklaşım, ne istendiğinin baştan tam bilinmediği ve değişikliğin ucuz olduğu işlerde öne çıkar: yazılım, dijital ürün, yeni bir hizmet tasarımı. Yeni bir mobil uygulamada kullanıcıların hangi özelliği seveceğini önceden bilmek zordur; küçük bir sürüm çıkarıp denemek daha akıllıcadır. Çevik yaklaşımı 13. haftada Scrum ve Kanban üzerinden ayrıntılı göreceğiz."},
 {t:"p",html:"<b>Hibrit</b> yaklaşım ikisini birleştirir. Örneğin yeni bir hastane bilgi sisteminin donanım kurulumu öngörücü yöntemle, yazılım ekranları çevik yöntemle yönetilebilir. Uygulamada kurumların büyük bölümü saf bir model yerine projeye uyarlanmış bir karışım kullanır."},
 {t:"table",head:["Ölçüt","Öngörücü","Çevik","Hibrit"],rows:[
  ["Gereksinimler","Baştan net ve sabit","Belirsiz, öğrenildikçe gelişir","Bir bölümü net, bir bölümü belirsiz"],
  ["Teslimat","Projenin sonunda tek seferde","Kısa döngülerle sık sık","Bileşene göre değişir"],
  ["Değişiklik","Resmi süreçle, pahalı","Olağan, döngü başında","Bileşene göre"],
  ["Müşteri katılımı","Başta ve sonda","Sürekli","Kritik noktalarda yoğun"],
  ["Tipik alan","İnşaat, altyapı","Yazılım, dijital ürün","Kurumsal dönüşüm, Ar-Ge"]]}
]},
{n:"2.5",h:"Hangi yaklaşım?",blocks:[
 {t:"p",html:"Yaklaşım seçimi bir zevk meselesi değil, projenin doğasına uyum meselesidir. İki soru yol gösterir: <b>Gereksinimler ne kadar net?</b> ve <b>Çıktının bir kısmını erken teslim edip geri bildirim almak mümkün mü?</b> Aşağıdaki seçicide iki değişkeni kaydırarak deneyin."},
 {t:"widget",name:"calc",opts:{title:"Yaklaşım seçici",inputs:[
  {id:"belirsiz",label:"Gereksinim belirsizliği (1 = çok net, 10 = çok belirsiz)",min:1,max:10,step:1,value:7},
  {id:"parca",label:"Parça parça teslim edilebilirlik (1 = imkânsız, 10 = çok kolay)",min:1,max:10,step:1,value:8}],
  formula:"belirsiz<=4&&parca<=4?'Öngörücü yaklaşım uygun: gereksinimler net ve çıktı ancak bütün olarak işe yarıyor.':(belirsiz>=6&&parca>=6?'Çevik yaklaşım uygun: belirsizlik yüksek, erken teslim ve geri bildirim mümkün.':(belirsiz>=6&&parca<=5?'Hibrit düşünün: belirsizlik yüksek ama erken teslim zor; prototip ve aşama kapılarıyla riski azaltın.':'Öngörücü ağırlıklı hibrit uygun: net kısımları planlayın, değişebilecek kısımlar için esneklik bırakın.'))",
  result:"{r}",note:"Örnek: Köprü (belirsizlik 2, parça 1) → öngörücü. Yeni mobil uygulama (8, 9) → çevik. Yeni ilaç geliştirme (9, 2) → hibrit, aşama kapılı."}}
]},
{n:"2.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Yaşam döngüsü","Projenin başlangıçtan kapanışa geçtiği evreler dizisi."],
  ["Aşama kapısı","Bir evre sonunda devam, düzelt veya durdur kararının verildiği gözden geçirme."],
  ["Süreç grubu","Her evrede tekrarlanan yönetim işlerinin beşli sınıflaması."],
  ["İzleme ve kontrol","Gerçekleşeni planla karşılaştırıp sapmaları yöneten, proje boyu süren süreç grubu."],
  ["Öngörücü yaklaşım","Kapsam, takvim ve bütçenin baştan ayrıntılı planlandığı sıralı yaklaşım."],
  ["Çevik yaklaşım","Ürünün kısa döngülerle parça parça geliştirildiği uyarlanabilir yaklaşım."],
  ["Hibrit yaklaşım","Öngörücü ve çevik öğelerin projeye göre birleştirilmesi."],
  ["Değişiklik maliyeti","Proje ilerledikçe değişiklik yapmanın giderek pahalılaşması."]
 ]},
 {t:"box",lbl:"Dönem projesi · Adım 2",html:"Geçen hafta seçtiğiniz projenin yaşam döngüsünü 4–5 evre olarak yazın ve her evrenin sonuna bir aşama kapısı sorusu koyun (ör. \"Sponsor bütçesi kesinleşti mi? Evet ise devam\"). Ardından yaklaşım seçicideki iki soruyu kendi projeniz için yanıtlayın ve hangi yaklaşımı kullanacağınızı iki cümleyle gerekçelendirin."}
]},
{n:"2.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Proje yaşam döngüsünde maliyet ve ekip büyüklüğü genellikle hangi evrede en yüksektir?",o:["Başlangıç","Organizasyon ve hazırlık","İşin yürütülmesi","Kapanış"],a:2,e:"Ürün yürütme evresinde ortaya çıkar; malzeme, ekip ve tedarikçi harcamaları burada zirve yapar."},
  {q:"Paydaşların proje sonucunu etkileme gücü ile değişiklik maliyeti zaman içinde nasıl değişir?",o:["İkisi de proje boyunca birlikte artar","Etki gücü azalır, değişiklik maliyeti artar","Etki gücü artar, değişiklik maliyeti azalır","İkisi de proje boyunca sabit kalır"],a:1,e:"Başta her şey kâğıt üzerindedir ve değiştirmek ucuzdur; ilerledikçe kararlar somutlaşır, değişiklik pahalılaşır."},
  {q:"Gerçekleşen harcamaların bütçeyle karşılaştırılması hangi süreç grubuna aittir?",o:["Planlama ve bütçeleme","Yürütme ve uygulama","İzleme ve kontrol","Kapanış ve teslim"],a:2,e:"Plan ile gerçekleşeni karşılaştırmak ve sapmayı tespit etmek izleme ve kontrolün özüdür."},
  {q:"Aşama kapısında verilebilecek kararlardan biri değildir:",o:["Projeye devam etmek","Düzeltip yeniden değerlendirmek","Projeyi durdurmak","Kapıyı atlayıp onaysız ilerlemek"],a:3,e:"Aşama kapısının amacı, sonraki evreye ancak bilinçli bir kararla geçilmesini sağlamaktır."},
  {q:"Gereksinimleri baştan net olan ve yarıda değiştirilmesi çok pahalı olan bir tünel inşaatı için en uygun yaklaşım hangisidir?",o:["Çevik","Öngörücü","Yaklaşım seçmeden doğaçlama","Yalnızca Kanban"],a:1,e:"Net gereksinim ve yüksek değişiklik maliyeti öngörücü yaklaşımı gerektirir."},
  {q:"Kullanıcıların hangi özellikleri seveceği belirsiz olan yeni bir mobil uygulama için en uygun yaklaşım hangisidir?",o:["Öngörücü","Çevik","Bütün özellikleri baştan dondurmak","Projeyi ertelemek"],a:1,e:"Belirsizlik yüksek, parça parça teslim kolay: kısa döngülerle geri bildirim almak riski azaltır."},
  {q:"Çevik yaklaşımda genellikle hangisi sabit tutulur, hangisi esnek bırakılır?",o:["Kapsam sabit, zaman ve ekip esnek","Zaman ve ekip sabit, kapsam esnek","Kapsam, zaman ve bütçe sabit","Bütçe esnek, kapsam ve zaman sabit"],a:1,e:"Çevik yaklaşımda döngü süresi ve ekip sabittir; her döngüde en değerli işler seçilir, kapsam öğrenildikçe şekillenir."},
  {q:"Bir hastane projesinde donanım kurulumunun şelale, ekran tasarımının çevik yöntemle yönetilmesi hangi yaklaşımdır?",o:["Saf öngörücü","Saf çevik","Hibrit","Portföy yönetimi"],a:2,e:"Farklı bileşenlere farklı yaklaşım uygulamak hibrit yaklaşımdır."},
  {q:"Proje başlatma belgesinin onaylanması ve proje yöneticisinin atanması hangi süreç grubundadır?",o:["Başlatma","Planlama","Yürütme","Kapanış"],a:0,e:"Proje resmen başlatma süreç grubunda doğar; yöneticiye yetki de bu belgeyle verilir."}
 ]}
]}
],
refs:[
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Geliştirme yaklaşımı ve yaşam döngüsü performans alanı.",
 "Project Management Institute (2022). <i>Process Groups: A Practice Guide</i>. PMI.",
 "Beck, K. ve diğerleri (2001). <i>Manifesto for Agile Software Development</i>: <a href=\"https://agilemanifesto.org\">agilemanifesto.org</a>",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 1 ve 15."
],
next:"Sonraki: Hafta 03 — Proje fikri, ihtiyaç analizi ve proje seçimi"
};
