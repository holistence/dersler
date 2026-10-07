window.WEEK={
id:"py-13",code:"PY",course:"Proje Yönetimi",short:"Çevik",week:13,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Çevik yaklaşım",
title:"Çevik proje yönetimi: <em>Scrum</em> ve Kanban",
intro:"Bu hafta 2. haftada tanıştığınız çevik yaklaşımı derinleştiriyoruz: Çevik Manifesto'nun değerlerini, Scrum'ın rollerini, olaylarını ve eserlerini, kullanıcı hikâyesi yazmayı, hız ve kalan iş grafiğiyle planlamayı ve Kanban'ın iş akışını yönetme mantığını öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada bir Scrum alıştırması, iki hesaplayıcı ve 9 soruluk bir test var.",
goals:[
 "Çevik Manifesto'nun dört değerini açıklayabilirsiniz.",
 "Scrum'ın üç sorumluluğunu, beş olayını ve üç eserini tanıyabilirsiniz.",
 "Kullanıcı hikâyesi yazıp kabul ölçütleri tanımlayabilirsiniz.",
 "Ekip hızıyla kalan işin kaç sprintte biteceğini tahmin edebilirsiniz.",
 "Kanban panosu kurup devam eden iş sınırının akışa etkisini açıklayabilirsiniz."
],
sections:[
{n:"13.1",h:"Çevik Manifesto",blocks:[
 {t:"p",html:"Şubat 2001'de 17 yazılım geliştirici ABD'nin Utah eyaletindeki Snowbird'de bir araya geldi. Ağır belgelendirmeye ve katı planlara dayalı yöntemlerin yazılım projelerinde iyi sonuç vermediği konusunda hemfikirdiler. Toplantının ürünü, kısa bir metin olan <b>Çevik Yazılım Geliştirme Manifestosu</b> oldu. Manifesto dört değer ve on iki ilkeden oluşur. Bir değer seçin."},
 {t:"choice",items:[
  {label:"Bireyler ve etkileşim",title:"…süreçler ve araçlardan önce",body:"Yazılım aracı ya da süreç ne kadar iyi olursa olsun, işi insanlar yapar. Ekip içi doğrudan konuşma, en ayrıntılı süreç belgesinden daha etkilidir.",ex:"Uygulamada: Uzun e-posta zincirleri yerine 10 dakikalık bir yüz yüze konuşma."},
  {label:"Çalışan ürün",title:"…kapsamlı belgelerden önce",body:"İlerlemenin asıl ölçüsü çalışan üründür. Belge gereklidir, ama kullanıcıya değer sağlayan şey belgede değil üründe ortaya çıkar.",ex:"Uygulamada: 80 sayfalık gereksinim belgesi yerine iki haftada bir gösterilen çalışan bir sürüm."},
  {label:"Müşteriyle iş birliği",title:"…sözleşme pazarlığından önce",body:"Müşteri, projenin başında ve sonunda değil, sürekli olarak sürece dahil edilir. Sözleşme önemlidir, ama ilişkinin yerini tutmaz.",ex:"Uygulamada: Müşteri temsilcisinin her döngü sonunda ürünü görüp önceliklere karar vermesi."},
  {label:"Değişime yanıt",title:"…bir planı izlemekten önce",body:"Plan gereklidir, ama koşullar değişince planı değil hedefi korumak esastır. Değişiklik bir aksaklık değil, öğrenmenin doğal sonucudur.",ex:"Uygulamada: Kullanıcı testleri bir özelliğin gereksiz olduğunu gösterince onu listeden çıkarmak."}
 ]},
 {t:"p",html:"Manifestonun ifadesi dikkatle okunmalıdır: sağdaki öğelerin (süreç, belge, sözleşme, plan) değeri yok sayılmaz; soldakilere <b>daha çok</b> değer verilir. Çeviklik plansızlık değil, sık ve kısa döngülerle planlamaktır."}
]},
{n:"13.2",h:"Scrum çerçevesi",blocks:[
 {t:"p",html:"Scrum, çevik yaklaşımın en yaygın çerçevesidir. Ken Schwaber ve Jeff Sutherland tarafından geliştirilmiş ve kurallarını kısa bir metin olan <b>Scrum Rehberi</b>nde tanımlamışlardır; güncel sürümü 2020'de yayımlandı. Scrum'da iş, <b>sprint</b> adı verilen ve en fazla bir ay süren sabit uzunluktaki döngülerle yürür. Her sprintin sonunda kullanılabilir bir ürün parçası (artırım) ortaya çıkar."},
 {t:"table",head:["Öğe","Ne?","Kısaca"],rows:[
  ["Ürün Sahibi","Sorumluluk","Ürünün değerini en üst düzeye çıkarmaktan ve ürün iş listesini yönetmekten sorumlu tek kişi"],
  ["Scrum Master","Sorumluluk","Scrum'ın doğru uygulanmasından ve ekibin önündeki engellerin kaldırılmasından sorumlu kişi"],
  ["Geliştiriciler","Sorumluluk","Her sprintte kullanılabilir artırımı üreten ekip üyeleri"],
  ["Sprint","Olay","Diğer bütün olayları içeren, en fazla bir aylık sabit döngü"],
  ["Sprint Planlama","Olay","Sprintin hedefinin ve yapılacak işlerin belirlendiği toplantı"],
  ["Günlük Scrum","Olay","Geliştiricilerin sprint hedefine göre ilerlemeyi gözden geçirdiği 15 dakikalık toplantı"],
  ["Sprint Gözden Geçirme","Olay","Artırımın paydaşlara gösterildiği ve geri bildirim alındığı toplantı"],
  ["Sprint Retrospektifi","Olay","Ekibin çalışma biçimini değerlendirip iyileştirme kararı aldığı toplantı"],
  ["Ürün İş Listesi","Eser","Ürün için yapılabilecek bütün işlerin öncelik sıralı listesi; taahhüdü Ürün Hedefi"],
  ["Sprint İş Listesi","Eser","Sprint için seçilen işler ve planı; taahhüdü Sprint Hedefi"],
  ["Artırım","Eser","Sprint sonunda ortaya çıkan kullanılabilir ürün parçası; taahhüdü Bitti Tanımı"]]},
 {t:"p",html:"Scrum Rehberi'ne göre Scrum ekibi genellikle 10 kişi veya daha azdır. Ekipte ayrıca bir \"proje yöneticisi\" rolü tanımlanmaz: geleneksel proje yöneticisinin işleri Ürün Sahibi (ne yapılacak, hangi öncelikle), Scrum Master (süreç ve engeller) ve kendi işini organize eden Geliştiriciler arasında paylaşılır."},
 {t:"widget",name:"classify",opts:{title:"Scrum'da bu bir sorumluluk mu, olay mı, eser mi?",cats:["Sorumluluk","Olay","Eser"],items:[
  ["Ürün Sahibi",0],
  ["Günlük Scrum",1],
  ["Ürün İş Listesi",2],
  ["Sprint Retrospektifi",1],
  ["Scrum Master",0],
  ["Artırım",2],
  ["Sprint Planlama",1],
  ["Sprint İş Listesi",2]],
  note:"Sorumluluklar kişilerdir, olaylar belirli zamanlarda yapılan buluşmalardır, eserler ise işi ve değeri görünür kılan çıktılardır. Sprint'in kendisi de bir olaydır: diğer bütün olayları içine alan kapsayıcı olay."}}
]},
{n:"13.3",h:"Kullanıcı hikâyesi ve Bitti Tanımı",blocks:[
 {t:"p",html:"Çevik ekipler gereksinimleri çoğu zaman <b>kullanıcı hikâyesi</b> biçiminde yazar. Bu biçim Scrum Rehberi'nin bir parçası değildir, ama çok yaygın bir uygulamadır. Hikâye, özelliği kullanıcının gözünden ve amacıyla birlikte anlatır."},
 {t:"box",lbl:"Kalıp",html:"\"Bir <b>[kullanıcı rolü]</b> olarak, <b>[amaç]</b> için <b>[özellik]</b> istiyorum.\"<br><br>Örnek: \"Bir son sınıf öğrencisi olarak, gün içinde kaçırmamak için ilgilendiğim firmaların stant saatlerini telefonuma hatırlatma olarak eklemek istiyorum.\"<br><b>Kabul ölçütleri:</b> (1) Öğrenci en az bir firmayı listesine ekleyebilir. (2) Stant saatinden 15 dakika önce bildirim gelir. (3) Liste internet bağlantısı olmadan da görüntülenir."},
 {t:"p",html:"İyi bir hikâye bağımsız, konuşulabilir, değerli, tahmin edilebilir, küçük ve test edilebilir olmalıdır. <b>Bitti Tanımı</b> ise bir işin ne zaman gerçekten \"bitti\" sayılacağına dair ekibin ortak ölçütüdür: \"kod yazıldı\" değil, \"kod yazıldı, test edildi, gözden geçirildi ve yayına alınabilir durumda\". Bitti Tanımı olmayan ekiplerde \"yüzde doksan bitti\" diye aylarca süren işler görülür."}
]},
{n:"13.4",h:"Hız ve kalan iş grafiği",blocks:[
 {t:"p",html:"Çevik ekipler hikâyelerin büyüklüğünü çoğu zaman saat yerine göreli bir ölçüyle, <b>hikâye puanıyla</b> tahmin eder: \"Bu iş, şu işin yaklaşık iki katı büyüklükte.\" Bir ekibin bir sprintte tamamladığı hikâye puanlarının toplamına <b>hız</b> (velocity) denir. Birkaç sprintin ortalama hızı, kalan işin kaç sprintte biteceğini tahmin etmeye yarar."},
 {t:"widget",name:"calc",opts:{title:"Kaç sprint kaldı?",inputs:[
  {id:"kalan",label:"Ürün iş listesinde kalan iş",min:10,max:500,step:5,value:120,unit:" puan"},
  {id:"hiz",label:"Son sprintlerin ortalama hızı",min:5,max:100,step:1,value:24,unit:" puan/sprint"},
  {id:"uz",label:"Sprint uzunluğu",min:1,max:4,step:1,value:2,unit:" hafta"}],
  formula:"(function(){var n=Math.ceil(kalan/hiz);return 'Yaklaşık '+n+' sprint ≈ '+(n*uz)+' hafta';})()",
  result:"{r}",note:"Hız bir verimlilik puanı değil, bir tahmin aracıdır. Farklı ekiplerin hızlarını karşılaştırmak anlamsızdır, çünkü her ekip puanı kendi ölçeğiyle verir. Kalan iş grafiği (burndown) bu hesabı her sprint sonunda görselleştirir: dikey eksende kalan puan, yatay eksende sprintler."}}
]},
{n:"13.5",h:"Kanban",blocks:[
 {t:"p",html:"Kanban, kökleri Toyota üretim sistemine dayanan ve bilgi işine uyarlanmış bir akış yönetimi yöntemidir. Sabit uzunlukta sprintler yoktur; iş, sürekli bir akış içinde ilerler. Üç temel uygulaması vardır."},
 {t:"list",items:[
  "<b>İşi görselleştir:</b> İşler kartlar hâlinde, \"Yapılacak – Yapılıyor – Kontrolde – Bitti\" gibi sütunlardan oluşan bir panoda gösterilir. Herkes işin nerede tıkandığını bir bakışta görür.",
  "<b>Devam eden işi sınırla:</b> Her sütuna aynı anda bulunabilecek azami kart sayısı konur (WIP sınırı). Bir sütun doluysa yeni iş başlatılmaz, önce mevcut iş bitirilir. \"Başlamayı bırak, bitirmeye başla.\"",
  "<b>Akışı yönet ve ölç:</b> Bir işin başlangıçtan bitişe kadar geçen süresi (döngü süresi) ve birim zamanda biten iş sayısı (verim) izlenir."]},
 {t:"p",html:"Devam eden işi sınırlamanın neden hızlandırdığını <b>Little yasası</b> açıklar: istikrarlı bir sistemde ortalama döngü süresi, ortalama devam eden iş miktarının ortalama verime bölünmesine eşittir. Aynı anda yürüyen iş sayısını azaltırsanız, her bir iş daha kısa sürede biter."},
 {t:"widget",name:"calc",opts:{title:"Little yasası: devam eden iş ve döngü süresi",inputs:[
  {id:"wip",label:"Panoda aynı anda devam eden iş",min:1,max:40,step:1,value:12,unit:" kart"},
  {id:"verim",label:"Haftada tamamlanan iş (verim)",min:1,max:20,step:1,value:4,unit:" kart/hafta"}],
  formula:"'Ortalama döngü süresi ≈ '+(wip/verim).toFixed(1).replace('.',',')+' hafta: yeni başlayan bir iş ortalama bu sürede biter.'",
  result:"{r}",note:"Devam eden işi 12'den 6'ya indirin: verim aynı kaldığında döngü süresi yarıya iner. Öğrenci ekiplerinde de aynı kural geçerlidir: herkes aynı anda beş işe başlamak yerine ikişer işi bitirirse proje daha hızlı ilerler."}}
]},
{n:"13.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Çevik Manifesto","2001'de yayımlanan, dört değer ve on iki ilkeden oluşan metin."],
  ["Sprint","En fazla bir ay süren, sonunda kullanılabilir artırım üretilen sabit döngü."],
  ["Ürün Sahibi","Ürünün değerinden ve ürün iş listesinin önceliklerinden sorumlu tek kişi."],
  ["Scrum Master","Scrum'ın uygulanmasından ve engellerin kaldırılmasından sorumlu kişi."],
  ["Bitti Tanımı","Bir işin gerçekten bitmiş sayılması için ekibin ortak kalite ölçütü."],
  ["Kullanıcı hikâyesi","Bir özelliği kullanıcının rolü ve amacıyla anlatan kısa ifade."],
  ["Hız","Ekibin bir sprintte tamamladığı hikâye puanlarının toplamı."],
  ["WIP sınırı","Kanban'da bir sütunda aynı anda bulunabilecek azami iş sayısı."]
 ]},
 {t:"box",lbl:"Dönem projesi · Adım 13",html:"Projenizin bir bölümünü (ör. web sayfası, tanıtım kampanyası ya da kayıt süreci) çevik yaklaşımla yeniden planlayın: (1) en az 8 kullanıcı hikâyesi ve her biri için kabul ölçütleri yazın, (2) hikâyelere göreli puan verip öncelik sıralı bir ürün iş listesi oluşturun, (3) ekibiniz için bir Bitti Tanımı yazın, (4) ücretsiz bir araçla (Trello benzeri bir pano veya bir hesap tablosu) WIP sınırlı bir Kanban panosu kurup bir hafta kullanın ve gözlemlerinizi yazın."}
]},
{n:"13.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Çevik Manifesto'ya göre hangisine daha çok değer verilir?",o:["Kapsamlı belgelere","Çalışan ürüne","Sözleşme pazarlığına","Bir planı izlemeye"],a:1,e:"Manifesto çalışan ürünü kapsamlı belgelerden önce tutar; belgeleri yok saymaz ama daha az önceliklendirir."},
  {q:"Scrum Rehberi'ne göre bir sprintin azami süresi nedir?",o:["Bir hafta","İki hafta","Bir ay","Üç ay"],a:2,e:"Sprintler en fazla bir ay süren sabit uzunlukta döngülerdir; birçok ekip iki hafta seçer."},
  {q:"Ürün iş listesinin önceliklerinden sorumlu tek kişi kimdir?",o:["Scrum Master","Ürün Sahibi","Geliştiriciler","Paydaşlar"],a:1,e:"Ürün Sahibi ürünün değerini en üst düzeye çıkarmaktan ve iş listesini yönetmekten sorumludur."},
  {q:"Ekibin kendi çalışma biçimini değerlendirip iyileştirme kararı aldığı Scrum olayı hangisidir?",o:["Sprint Planlama","Günlük Scrum","Sprint Gözden Geçirme","Sprint Retrospektifi"],a:3,e:"Gözden geçirme ürünü, retrospektif ise ekibin çalışma biçimini değerlendirir."},
  {q:"\"Bir kütüphane kullanıcısı olarak, boş masa aramakla vakit kaybetmemek için anlık doluluk oranını görmek istiyorum.\" ifadesi nedir?",o:["Bir risk ifadesi","Bir kullanıcı hikâyesi","Bir kapsam beyanı","Bir Bitti Tanımı"],a:1,e:"Rol, amaç ve özellikten oluşan bu kalıp kullanıcı hikâyesidir."},
  {q:"Kalan iş 90 puan, ekibin ortalama hızı 18 puan/sprint, sprintler 2 hafta. İş yaklaşık ne zaman biter?",o:["5 hafta","10 hafta","18 hafta","9 hafta"],a:1,e:"90 ÷ 18 = 5 sprint; 5 × 2 = 10 hafta."},
  {q:"Kanban'da bir sütunun WIP sınırı dolduğunda ne yapılır?",o:["Yeni işler başlatılmaya aynen devam edilir","Yeni iş başlatılmaz, önce mevcut iş bitirilir","Sınır o hafta için kendiliğinden kaldırılır","Pano temizlenip bütün kartlar sıfırlanır"],a:1,e:"WIP sınırının amacı aynı anda çok iş başlatmayı engelleyip bitirmeye odaklanmaktır."},
  {q:"Little yasasına göre devam eden iş 20, haftalık verim 5 ise ortalama döngü süresi nedir?",o:["2 hafta","4 hafta","5 hafta","25 hafta"],a:1,e:"Döngü süresi = Devam eden iş ÷ Verim = 20 ÷ 5 = 4 hafta."},
  {q:"İki farklı Scrum ekibinin hızlarını karşılaştırmak neden anlamlı değildir?",o:["Ekiplerin hızı yönetimden gizli tutulduğu için","Her ekip puanı kendi göreli ölçeğiyle verdiği için","Hız yalnızca Kanban panolarında ölçüldüğü için","Hız her sprintin başında sıfırlandığı için"],a:1,e:"Hikâye puanı göreli bir ölçüdür; bir ekibin 5 puanı başka bir ekibin 5 puanıyla aynı büyüklükte değildir."}
 ]}
]}
],
refs:[
 "Schwaber, K., Sutherland, J. (2020). <i>Scrum Rehberi</i>. Türkçe dahil çeviriler: <a href=\"https://scrumguides.org\">scrumguides.org</a>",
 "Beck, K. ve diğerleri (2001). <i>Manifesto for Agile Software Development</i>: <a href=\"https://agilemanifesto.org\">agilemanifesto.org</a>",
 "Anderson, D. J. (2010). <i>Kanban: Successful Evolutionary Change for Your Technology Business</i>. Blue Hole Press.",
 "Little, J. D. C. (1961). A proof for the queuing formula: L = λW. <i>Operations Research</i>, 9(3)."
],
next:"Sonraki: Hafta 14 — Kapanış, öğrenilen dersler ve proje önerisi yazımı"
};
