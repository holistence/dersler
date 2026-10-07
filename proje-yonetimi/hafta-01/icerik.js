window.WEEK={
id:"py-01",code:"PY",course:"Proje Yönetimi",short:"Giriş",week:1,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Temel kavramlar",
title:"Proje nedir, <em>yönetimi</em> neden gerekir?",
intro:"Bu hafta bir işi proje yapan özellikleri, projeyi süregelen işlerden (operasyonlardan) ayıran farkları, kapsam–zaman–maliyet dengesini ve proje yöneticisinin rolünü öğreneceksiniz. Dönem boyunca kendi küçük projenizi adım adım planlayacaksınız; ilk adım bu haftanın sonunda. Okuma süresi yaklaşık 30 dakika; sayfada bir sınıflandırma alıştırması, bir sapma hesaplayıcısı ve 9 soruluk bir test var.",
goals:[
 "Projeyi geçicilik, özgünlük ve aşamalı ayrıntılandırma özellikleriyle tanımlayabilirsiniz.",
 "Bir işin proje mi operasyon mu olduğunu gerekçesiyle ayırt edebilirsiniz.",
 "Proje, program ve portföy kavramlarını örnekle açıklayabilirsiniz.",
 "Kapsam, zaman, maliyet ve kalite arasındaki dengeyi bir senaryo üzerinde yorumlayabilirsiniz.",
 "Bütçe ve süre sapmasını yüzde olarak hesaplayıp projenin durumunu değerlendirebilirsiniz."
],
sections:[
{n:"1.1",h:"Proje nedir?",blocks:[
 {t:"p",html:"Hayatımızın büyük bölümü projelerle geçer: bir düğün organizasyonu, bir mezuniyet tezi, bir köprü, yeni bir mobil uygulama, bir öğrenci topluluğunun düzenlediği konferans. Hepsinin ortak noktası, belirli bir amaç için, belirli bir sürede, sınırlı kaynakla yapılan ve daha önce birebir aynısı yapılmamış işler olmalarıdır."},
 {t:"def",html:"Proje, benzersiz bir ürün, hizmet veya sonuç ortaya koymak için üstlenilen <b>geçici</b> bir çabadır.",src:"Project Management Institute (PMI) tanımı; PMBOK Kılavuzu."},
 {t:"p",html:"Bu tanımdaki iki kelime kilit önemdedir. <b>Geçici</b>, projenin bir başlangıcı ve bir sonu olduğu anlamına gelir; kısa sürdüğü anlamına gelmez. 1915 Çanakkale Köprüsü yıllar süren bir projeydi, ama 18 Mart 2022'de trafiğe açılınca proje bitti ve köprünün işletilmesi başladı. <b>Benzersiz</b> ise çıktının bir öncekinin kopyası olmadığını anlatır: aynı firma iki ev inşa etse bile arsa, zemin, komşular ve hava koşulları farklıdır."},
 {t:"p",html:"Üçüncü özellik <b>aşamalı ayrıntılandırmadır</b>. Proje başında her şeyi bilemeyiz. Plan, bilgi arttıkça adım adım ayrıntılanır. Bir kariyer günü düzenlerken ilk hafta yalnızca tarih ve yer bellidir; konuşmacılar, ikram ve afiş tasarımı sonraki haftalarda netleşir."}
]},
{n:"1.2",h:"Proje mi, operasyon mu?",blocks:[
 {t:"p",html:"Kurumlardaki işlerin çoğu proje değil, <b>operasyondur</b>: her gün ya da her ay tekrarlanan, süregelen işler. Bordro hazırlamak, fabrikada aynı ürünü üretmek, kütüphanede kitap ödünç vermek operasyondur. Projeler genellikle operasyonları değiştirmek için yapılır: yeni bir bordro yazılımına geçiş bir projedir, geçişten sonra yazılımı her ay kullanmak operasyondur."},
 {t:"table",head:["Ölçüt","Proje","Operasyon"],rows:[
  ["Süre","Başı ve sonu belli","Süregelen, tekrarlı"],
  ["Çıktı","Benzersiz","Standart, aynı"],
  ["Ekip","Geçici olarak bir araya gelir","Kalıcı birimler"],
  ["Belirsizlik","Yüksek; ilk kez yapılıyor","Düşük; süreç oturmuş"],
  ["Amaç","Değişim yaratmak","Mevcut düzeni sürdürmek"],
  ["Örnek","Yeni ders kayıt sistemi kurmak","Her dönem öğrenci kaydı almak"]]},
 {t:"widget",name:"classify",opts:{title:"Proje mi, operasyon mu?",cats:["Proje","Operasyon"],items:[
  ["Belediyenin yeni bir park inşa etmesi",0],
  ["Bir bankanın her gün müşteri hesaplarını güncellemesi",1],
  ["Öğrenci topluluğunun bahar şenliği düzenlemesi",0],
  ["Bir fırının her sabah ekmek üretmesi",1],
  ["Bir şirketin yeni bir muhasebe yazılımına geçmesi",0],
  ["Hastanenin acil serviste hasta kabul etmesi",1],
  ["Bir yüksek lisans tezinin yazılması",0],
  ["Muhasebe biriminin aylık KDV beyannamesi hazırlaması",1]],
  note:"Ayırt edici soru şudur: Bu iş bittiğinde ortada yeni ve benzersiz bir sonuç kalıyor mu, yoksa aynı iş yarın yeniden mi yapılacak? Bahar şenliği her yıl yapılsa bile her yılın programı, bütçesi ve ekibi farklı olduğu için her biri ayrı bir projedir."}}
]},
{n:"1.3",h:"Proje yönetimi ve kısa tarihi",blocks:[
 {t:"def",html:"Proje yönetimi, proje gereksinimlerini karşılamak için bilgi, beceri, araç ve tekniklerin proje faaliyetlerine uygulanmasıdır.",src:"PMI, PMBOK Kılavuzu."},
 {t:"p",html:"İnsanlık piramitleri ve su kemerlerini de planlayarak yaptı, ama proje yönetiminin ayrı bir disiplin hâline gelmesi 20. yüzyıldadır. Aşağıdaki zaman çizelgesi bu dönüşümün kilometre taşlarını gösteriyor."},
 {t:"timeline",items:[
  ["1910'lar","Gantt şeması","Henry Gantt işleri zaman ekseninde çubuklarla gösteren şemayı geliştirdi. Bugün hâlâ en yaygın planlama görselidir."],
  ["1957","Kritik Yol Yöntemi","DuPont ve Remington Rand mühendisleri bakım projelerini planlamak için Kritik Yol Yöntemi'ni (CPM) geliştirdi.",1],
  ["1958","PERT","ABD Donanması'nın Polaris füze programında belirsiz süreleri tahmin etmek için PERT tekniği kullanıldı."],
  ["1969","PMI kuruldu","Proje yöneticilerini bir araya getiren Project Management Institute ABD'de kuruldu."],
  ["1996","PMBOK Kılavuzu","PMI, proje yönetimi bilgi birikimini standartlaştıran PMBOK Kılavuzu'nun ilk baskısını yayımladı."],
  ["2001","Çevik Manifesto","Yazılım geliştiricileri, değişime hızlı uyum sağlamayı öne çıkaran Çevik Yazılım Geliştirme Manifestosu'nu yayımladı.",1],
  ["2021","PMBOK 7. baskı","Kılavuz süreç odaklı yapıdan ilke ve performans alanı odaklı bir yapıya geçti."]]}
]},
{n:"1.4",h:"Proje, program ve portföy",blocks:[
 {t:"p",html:"Kurumlar tek tek projelerden fazlasını yönetir. Birbiriyle ilişkili projeler bir <b>program</b>, kurumun stratejik hedeflerine hizmet eden bütün proje ve programlar ise bir <b>portföy</b> oluşturur. Bir seçenek seçerek farkı görün."},
 {t:"choice",items:[
  {label:"Proje",title:"Tek bir benzersiz çıktı",body:"Belirli bir sonucu üretmek için yapılan geçici çaba. Başarısı kapsam, zaman, maliyet ve kalite hedeflerine ulaşmasıyla ölçülür.",ex:"Örnek: Bir üniversitenin yeni kütüphane binasının inşaatı."},
  {label:"Program",title:"Birbirine bağlı projeler",body:"Tek tek yönetildiğinde elde edilemeyecek faydayı sağlamak için birlikte yönetilen ilişkili projeler topluluğu. Programın başarısı, ortak faydanın gerçekleşmesiyle ölçülür.",ex:"Örnek: Kampüs dijitalleşme programı: kablosuz ağ yenileme, e-kütüphane, mobil uygulama ve akıllı kart projeleri."},
  {label:"Portföy",title:"Stratejik seçim",body:"Kurumun stratejik hedeflerine ulaşmak için birlikte yönetilen proje, program ve operasyonların bütünü. Portföy yönetimi 'hangi projeleri yapalım?' sorusuna yanıt arar.",ex:"Örnek: Bir belediyenin beş yıllık yatırım planındaki bütün ulaşım, altyapı ve sosyal projeler."}
 ]}
]},
{n:"1.5",h:"Kapsam, zaman, maliyet ve kalite dengesi",blocks:[
 {t:"p",html:"Her proje üç temel kısıt arasında denge kurar: <b>kapsam</b> (ne yapılacak), <b>zaman</b> (ne zaman bitecek) ve <b>maliyet</b> (ne kadara mal olacak). Bu üçlü genellikle bir üçgenle gösterilir; ortasında <b>kalite</b> durur. Bir kenarı değiştirmek en az bir başka kenarı da etkiler."},
 {t:"box",lbl:"Örnek senaryo: Kariyer Günleri",html:"Bir öğrenci topluluğu iki günlük bir Kariyer Günleri düzenliyor. Etkinliğe üç hafta kala sponsor firma \"bir de mülakat simülasyonu salonu ekleyelim\" diyor. Bu <b>kapsam artışıdır</b>. Ekip üç seçenekle karşı karşıyadır: ek bütçe ve gönüllü bulmak (maliyet artar), etkinliği bir hafta ertelemek (süre uzar) ya da her şeyi aynı kaynakla yetiştirmeye çalışmak (kalite düşer). Hiçbir şey vermeden kapsamı büyütmek mümkün değildir."},
 {t:"p",html:"Günümüzde kısıtlar bu üçlüyle sınırlı görülmez: <b>risk</b>, <b>kaynaklar</b> ve <b>paydaş memnuniyeti</b> de dengeye eklenir. Yine de temel mantık aynıdır: proje yöneticisinin işi, kısıtlar arasında bilinçli ödünleşim kararları vermek ve bu kararları paydaşlara açıkça anlatmaktır."},
 {t:"p",html:"Projenin bu dengeyi ne kadar koruduğunu görmek için en basit ölçü, planlanan ile gerçekleşen arasındaki <b>sapmadır</b>. Aşağıdaki hesaplayıcıda bütçeyi ve süreyi değiştirerek deneyin."},
 {t:"widget",name:"calc",opts:{title:"Bütçe ve süre sapması",inputs:[
  {id:"pb",label:"Planlanan bütçe",min:50,max:500,step:10,value:200,unit:" bin TL"},
  {id:"gb",label:"Gerçekleşen maliyet",min:50,max:700,step:10,value:240,unit:" bin TL"},
  {id:"ps",label:"Planlanan süre",min:4,max:52,step:1,value:20,unit:" hafta"},
  {id:"gs",label:"Gerçekleşen süre",min:4,max:80,step:1,value:22,unit:" hafta"}],
  formula:"'Bütçe sapması: %'+((gb-pb)/pb*100).toFixed(1).replace('.',',')+' · Süre sapması: %'+((gs-ps)/ps*100).toFixed(1).replace('.',',')+' → '+(gb<=pb&&gs<=ps?'bütçe ve süre içinde':(gb>pb&&gs>ps?'hem bütçe hem süre aşıldı':(gb>pb?'bütçe aşıldı':'süre aşıldı')))",
  result:"{r}",note:"Pozitif sapma aşım, negatif sapma tasarruf demektir. Tek başına bu iki sayı yeterli değildir: kapsamın tamamı istenen kalitede teslim edildi mi, ona da bakmak gerekir."}}
]},
{n:"1.6",h:"Proje yöneticisi ve proje başarısı",blocks:[
 {t:"p",html:"Proje yöneticisi, ekibin hedefe ulaşmasından sorumlu kişidir. İşleri bizzat yapan değil, işlerin yapılmasını sağlayan kişidir: planlar, koordine eder, sorunları çözer, paydaşlarla iletişim kurar. Bir orkestra şefine benzer; her enstrümanı çalmak zorunda değildir ama hepsinin aynı notada buluşmasını sağlar."},
 {t:"list",items:[
  "<b>Teknik beceriler:</b> planlama, zaman çizelgesi, bütçe, risk analizi gibi proje yönetimi araçlarını kullanmak.",
  "<b>Liderlik ve insan becerileri:</b> motive etmek, çatışmayı yönetmek, müzakere etmek, net iletişim kurmak.",
  "<b>Stratejik ve iş bilgisi:</b> projenin kurumun hedeflerine nasıl hizmet ettiğini görmek ve kararları buna göre vermek."]},
 {t:"p",html:"Proje başarısı yalnızca \"zamanında ve bütçe içinde bitti mi?\" sorusuyla ölçülmez. Zamanında biten ama kimsenin kullanmadığı bir mobil uygulama başarılı sayılamaz. Bu yüzden başarı iki düzeyde değerlendirilir: <b>proje yönetimi başarısı</b> (planlanan çıktıyı kapsam, zaman ve bütçe içinde teslim etmek) ve <b>ürün başarısı</b> (çıktının beklenen faydayı sağlaması)."},
 {t:"box",lbl:"Dönem projesi · Adım 1",html:"3–5 kişilik bir ekip kurun ve dönem boyunca planlayacağınız gerçekçi bir proje seçin. Kampüste bir etkinlik, bir sosyal sorumluluk projesi, küçük bir web sitesi ya da bir yerel girişim fikri olabilir. Bu hafta yarım sayfalık bir not yazın: (1) Projenin adı, (2) neden bir proje olduğu (geçicilik ve benzersizlik), (3) kabaca süresi ve bütçesi, (4) başarılı olduğunu nasıl anlayacağınız."}
]},
{n:"1.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Proje","Benzersiz bir ürün, hizmet veya sonuç için üstlenilen geçici çaba."],
  ["Operasyon","Kurumun süregelen, tekrarlı ve standart işleri."],
  ["Aşamalı ayrıntılandırma","Planın, bilgi arttıkça adım adım ayrıntılandırılması."],
  ["Program","Ortak fayda için birlikte yönetilen ilişkili projeler."],
  ["Portföy","Stratejik hedeflere hizmet eden proje, program ve operasyonların bütünü."],
  ["Üçlü kısıt","Kapsam, zaman ve maliyet arasındaki karşılıklı bağımlılık."],
  ["Sapma","Planlanan değer ile gerçekleşen değer arasındaki fark."],
  ["Ürün başarısı","Proje çıktısının beklenen faydayı gerçekten sağlaması."]
 ]}
]},
{n:"1.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Aşağıdakilerden hangisi bir projeyi operasyondan ayıran temel özelliktir?",o:["Çok sayıda çalışanın aynı anda görev alması","Başı ve sonu belli, benzersiz bir çıktı üretmesi","Yüksek bütçeli ve uzun soluklu olması","Üst yönetim tarafından resmen onaylanması"],a:1,e:"Geçicilik ve benzersizlik projeyi tanımlar. Büyüklük ya da bütçe bir işi proje yapmaz."},
  {q:"Beş yıl süren bir baraj inşaatı için hangisi doğrudur?",o:["Uzun sürdüğü için operasyondur","Başı ve sonu belli olduğu için projedir","Kamu yatırımı olduğu için programdır","Tekrarlandığı için portföydür"],a:1,e:"Geçici, kısa demek değildir. Baraj tamamlanınca proje biter, barajın işletilmesi operasyon olarak başlar."},
  {q:"Bir hastanenin yeni randevu yazılımına geçmesi ve sonra bu yazılımla her gün randevu vermesi için doğru eşleştirme hangisidir?",o:["İkisi de projedir","İkisi de operasyondur","Geçiş projedir, günlük randevu operasyondur","Geçiş operasyondur, günlük randevu projedir"],a:2,e:"Projeler genellikle operasyonları değiştirmek için yapılır. Geçiş bittikten sonraki günlük kullanım süregelen bir iştir."},
  {q:"Kampüste kablosuz ağ yenileme, e-kütüphane ve mobil uygulama projelerinin ortak bir dijitalleşme hedefi için birlikte yönetilmesine ne denir?",o:["Portföy","Program","Operasyon","Alt proje"],a:1,e:"Birbiriyle ilişkili, ortak fayda için birlikte yönetilen projeler program oluşturur."},
  {q:"Bir projenin kapsamı genişletildi, ama bütçe ve süre aynı bırakıldı. En olası sonuç nedir?",o:["Kalite düşer veya ekip aşırı yüklenir","Ekip motive olur, proje kendiliğinden hızlanır","Ölçek etkisiyle toplam maliyet azalır","Kapsam netleştiği için riskler ortadan kalkar"],a:0,e:"Üçlü kısıtta bir kenarı büyütüp diğerlerini sabit tutarsanız fark genellikle kaliteden ya da ekibin aşırı yüklenmesinden çıkar."},
  {q:"Planlanan bütçe 200 bin TL, gerçekleşen maliyet 230 bin TL. Bütçe sapması yüzde kaçtır?",o:["%13","%15","%30","%−15"],a:1,e:"(230 − 200) ÷ 200 = 0,15. Pozitif sapma, bütçenin %15 aşıldığını gösterir."},
  {q:"\"Proje başında konuşmacılar belli değildi; liste haftalar içinde netleşti.\" Bu durum hangi kavramla açıklanır?",o:["Kapsam kayması","Aşamalı ayrıntılandırma","Operasyonel verimlilik","Portföy dengeleme"],a:1,e:"Plan, bilgi arttıkça adım adım ayrıntılanır. Bu, projelerin doğal bir özelliğidir."},
  {q:"Zamanında ve bütçe içinde tamamlanan bir uygulamayı hedef kullanıcılar hiç kullanmıyorsa ne söylenebilir?",o:["Proje her açıdan başarılıdır","Proje yönetimi başarılı olabilir, ama ürün başarısı yoktur","Proje başarısızdır, çünkü bütçe aşılmıştır","Ürün başarılıdır, çünkü teslim edilmiştir"],a:1,e:"Başarı iki düzeyde ölçülür: çıktıyı plana uygun teslim etmek ve çıktının beklenen faydayı sağlaması."},
  {q:"Proje yöneticisinin temel rolü aşağıdakilerden hangisidir?",o:["Ekibin bütün teknik işlerini bizzat kendisi yapmak","İşleri planlamak, koordine etmek ve engelleri kaldırmak","Yalnızca harcamaları ve bütçeyi onaylamak","Kurumda hangi projelerin yapılacağına karar vermek"],a:1,e:"Proje yöneticisi orkestra şefine benzer: her işi kendisi yapmaz, ama ekibin aynı hedefe uyumlu çalışmasını sağlar."}
 ]}
]}
],
refs:[
 "Project Management Institute (2021). <i>A Guide to the Project Management Body of Knowledge (PMBOK Guide)</i>, 7. baskı. PMI.",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 1.",
 "Kerzner, H. <i>Project Management: A Systems Approach to Planning, Scheduling, and Controlling</i>. Wiley. Bölüm 1.",
 "Project Management Institute: <a href=\"https://www.pmi.org\">pmi.org</a>"
],
next:"Sonraki: Hafta 02 — Yaşam döngüsü, süreç grupları ve yaklaşımlar"
};
