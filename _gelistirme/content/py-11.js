window.WEEK={
id:"py-11",code:"PY",course:"Proje Yönetimi",short:"Kalite ve tedarik",week:11,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Kalite ve tedarik",
title:"Kalite ve <em>tedarik</em> yönetimi",
intro:"Bu hafta kalitenin projede ne anlama geldiğini, kalite güvencesi ile kalite kontrol arasındaki farkı, kalite maliyetlerini ve temel kalite araçlarını öğreneceksiniz. İkinci yarıda bir işi kendiniz mi yapmanız yoksa dışarıdan mı almanız gerektiğine karar vermeyi ve sözleşme türlerinin riski taraflar arasında nasıl paylaştırdığını çalışacaksınız. Okuma süresi yaklaşık 35 dakika; sayfada bir kalite maliyeti alıştırması, bir yap–satın al başabaş hesaplayıcısı, sözleşme türleri karşılaştırması ve 9 soruluk bir test var.",
goals:[
 "Kalite ile sınıf (grade) kavramlarını ayırt edebilirsiniz.",
 "Kalite planlama, kalite güvencesi ve kalite kontrolün farkını açıklayabilirsiniz.",
 "Kalite maliyetlerini önleme, değerlendirme, iç hata ve dış hata olarak sınıflandırabilirsiniz.",
 "Yap–satın al kararını maliyet ve diğer ölçütlerle verebilirsiniz.",
 "Sabit fiyat, maliyet artı ve zaman–malzeme sözleşmelerini risk açısından karşılaştırabilirsiniz."
],
sections:[
{n:"11.1",h:"Projede kalite nedir?",blocks:[
 {t:"p",html:"Gündelik dilde \"kaliteli\" lüks ya da pahalı anlamında kullanılır. Proje yönetiminde ise kalite, <b>gereksinimlere uygunluk</b> ve <b>kullanıma uygunluktur</b>. Philip Crosby birinci tanımı, Joseph Juran ikinci tanımı öne çıkardı. İkisi birlikte şunu söyler: ürün, söz verilen özellikleri taşımalı ve kullanıcının işini görmelidir."},
 {t:"p",html:"Kalite ile <b>sınıf</b> (grade) karıştırılmamalıdır. Sınıf, aynı işlevi gören ürünlerin özellik düzeyidir. Basit bir yaka kartı düşük sınıf, çipli ve fotoğraflı bir yaka kartı yüksek sınıftır. Düşük sınıf bir sorun değildir, müşterinin istediği buysa doğru seçimdir. Ama isimleri yanlış yazılmış, kopan yaka kartları düşük kalitedir ve bu her zaman bir sorundur."},
 {t:"box",lbl:"Kalite yönetiminin üç halkası",html:"<b>Kalite planlama:</b> Hangi kalite standartlarının geçerli olduğunu ve nasıl karşılanacağını belirlemek (\"Bütün stantlarda elektrik prizi ve isim levhası olacak\").<br><b>Kalite güvencesi:</b> <i>Süreçlerin</i> doğru işlediğinden emin olmak; hataları önlemeye odaklanır (\"Stant kurulumu bir kontrol listesiyle yapılacak\").<br><b>Kalite kontrol:</b> <i>Çıktıları</i> denetleyip standartlara uyup uymadığını ölçmek; hataları bulmaya odaklanır (\"Açılıştan bir saat önce her stant tek tek kontrol edilecek\")."}
]},
{n:"11.2",h:"Kalite maliyeti",blocks:[
 {t:"p",html:"Kalite bedava değildir, ama kalitesizlik daha pahalıdır. <b>Kalite maliyeti</b> iki ana gruba ayrılır. <b>Uygunluk maliyeti</b>, hataları önlemek ve bulmak için harcanan paradır: eğitim, test, denetim. <b>Uygunsuzluk maliyeti</b> ise hatalar ortaya çıktıktan sonra ödenen bedeldir: yeniden yapım, iade, itibar kaybı."},
 {t:"table",head:["Grup","Tür","Örnek"],rows:[
  ["Uygunluk","Önleme","Gönüllülere eğitim vermek; kontrol listesi hazırlamak"],
  ["Uygunluk","Değerlendirme","Kayıt sistemini test etmek; basılmadan önce afiş provası almak"],
  ["Uygunsuzluk","İç hata","Hatalı basılan afişleri yeniden bastırmak (müşteri görmeden fark edildi)"],
  ["Uygunsuzluk","Dış hata","Etkinlik günü kayıt sisteminin çökmesi; firmaların şikâyeti, itibar kaybı"]]},
 {t:"p",html:"Temel ilke şudur: hata ne kadar geç bulunursa o kadar pahalıdır. Afişteki yazım hatasını tasarım aşamasında düzeltmek birkaç dakikadır; baskıdan sonra yeni baskı demektir; afişler asıldıktan sonra ise hem baskı hem itibar kaybıdır. Bu yüzden kalite yönetimi denetimden çok önlemeye yatırım yapar. W. Edwards Deming'in yaygınlaştırdığı <b>Planla–Uygula–Kontrol et–Önlem al</b> (PUKÖ) döngüsü bu sürekli iyileştirme anlayışının özetidir."},
 {t:"widget",name:"classify",opts:{title:"Kalite maliyetini sınıflandırın",cats:["Önleme","Değerlendirme","İç hata","Dış hata"],items:[
  ["Yazılım ekibine güvenli kodlama eğitimi verilmesi",0],
  ["Teslimattan önce ürünlerin rastgele örneklemle test edilmesi",1],
  ["Fabrikada kusurlu çıkan parçaların hurdaya ayrılması",2],
  ["Müşteriye ulaşan arızalı ürünlerin garanti kapsamında değiştirilmesi",3],
  ["Tedarikçi seçiminde kalite belgesi istenmesi",0],
  ["Binanın teslimden önce bağımsız bir firmaya denetletilmesi",1],
  ["Müşteri fark etmeden önce hatalı raporun yeniden yazılması",2],
  ["Hatalı bir ürün nedeniyle şirket hakkında olumsuz haber çıkması",3]],
  note:"Önleme hatanın oluşmasını engeller, değerlendirme hatayı arar. Hata müşteriye ulaşmadan bulunursa iç hata, ulaştıktan sonra bulunursa dış hatadır. Dış hata en pahalı olanıdır."}}
]},
{n:"11.3",h:"Temel kalite araçları",blocks:[
 {t:"list",items:[
  "<b>Kontrol listesi:</b> Her seferinde aynı adımların atlanmadan yapılmasını sağlar. Havacılık ve cerrahide hayat kurtaran bu basit araç, stant kurulumu için de işe yarar.",
  "<b>Neden–sonuç (balık kılçığı) diyagramı:</b> Kaoru Ishikawa'nın geliştirdiği bu diyagram, bir sorunun olası nedenlerini insan, yöntem, malzeme, makine, ölçüm ve çevre gibi başlıklar altında gruplar.",
  "<b>Pareto analizi:</b> Sorunların sıklığını büyükten küçüğe sıralar. Çoğu durumda sorunların büyük bölümünün az sayıdaki nedenden kaynaklandığı görülür; Juran'ın \"hayati az, önemsiz çok\" dediği bu örüntü 80/20 kuralı olarak da bilinir. Kesin bir oran değil, çabayı nereye yoğunlaştıracağınızı gösteren bir eğilimdir.",
  "<b>Akış şeması:</b> Bir sürecin adımlarını görselleştirir; tıkanma ve tekrar noktalarını ortaya çıkarır."]},
 {t:"p",html:"Geçen yılki etkinliğin katılımcı şikâyetlerini düşünün: 120 şikâyetin 70'i kayıt kuyruğuyla, 25'i salonun sıcaklığıyla, geri kalanı çeşitli konularla ilgili olsun. Pareto analizi, bu yıl çabanın önce kayıt sürecine yoğunlaşması gerektiğini gösterir."}
]},
{n:"11.4",h:"Tedarik: yap mı, satın al mı?",blocks:[
 {t:"p",html:"Projelerin çoğu bazı işleri dışarıdan alır: stant kurulumu, ses sistemi, baskı, yazılım geliştirme. <b>Tedarik yönetimi</b>, neyin dışarıdan alınacağına karar vermek, tedarikçiyi seçmek, sözleşmeyi yapmak ve sözleşmenin uygulanmasını izlemektir."},
 {t:"p",html:"İlk karar <b>yap–satın al</b> kararıdır. Maliyet karşılaştırması önemlidir, ama tek ölçüt değildir: ekipte o işi yapacak yetkinlik var mı, iş gizli bilgi içeriyor mu, kurum bu yeteneği kalıcı olarak kazanmak istiyor mu, dışarıdan almak hangi riskleri doğurur?"},
 {t:"widget",name:"calc",opts:{title:"Yap–satın al başabaş noktası",inputs:[
  {id:"sabit",label:"Kendimiz yaparsak sabit maliyet (ekipman, eğitim)",min:0,max:200,step:1,value:30,unit:" bin TL"},
  {id:"dy",label:"Kendimiz yaparsak birim değişken maliyet",min:0,max:500,step:5,value:150,unit:" TL"},
  {id:"fiyat",label:"Dışarıdan alırsak birim fiyat",min:10,max:1000,step:5,value:400,unit:" TL"},
  {id:"adet",label:"İhtiyaç duyulan miktar",min:10,max:2000,step:10,value:100,unit:" adet"}],
  formula:"(function(){if(fiyat<=dy)return 'Satın alma birim fiyatı değişken maliyetin altında: her miktarda satın almak daha ucuz.';var be=sabit*1000/(fiyat-dy),yap=sabit*1000+dy*adet,al=fiyat*adet;return 'Başabaş miktarı ≈ '+Math.ceil(be)+' adet · '+adet+' adet için yap: '+Math.round(yap/1000)+' bin TL, satın al: '+Math.round(al/1000)+' bin TL → '+(yap<al?'yapmak daha ucuz':'satın almak daha ucuz');})()",
  result:"{r}",note:"Örnek: Etkinlik tişörtleri. Baskı makinesi alıp kendiniz basmak sabit maliyet yaratır; az sayıda tişört için dışarıdan bastırmak ucuzdur, miktar başabaş noktasını geçince kendiniz yapmak avantajlı hâle gelir."}}
]},
{n:"11.5",h:"Sözleşme türleri",blocks:[
 {t:"p",html:"Sözleşme türü, maliyet aşımı riskinin alıcı ile satıcı arasında nasıl paylaşılacağını belirler. Bir tür seçin."},
 {t:"choice",items:[
  {label:"Sabit fiyat",title:"Risk satıcıda",body:"Satıcı işi önceden belirlenmiş bir fiyatla yapmayı taahhüt eder. Maliyet artarsa fark satıcının kârından çıkar. Kapsam çok net olmalıdır; aksi hâlde satıcı yüksek fiyat verir ya da her değişikliği ek ücretle karşılar.",ex:"Uygun olduğu durum: Stant kurulumu gibi kapsamı net, daha önce çok kez yapılmış işler."},
  {label:"Maliyet artı",title:"Risk alıcıda",body:"Alıcı satıcının gerçekleşen maliyetlerini öder ve üzerine bir ücret ekler (sabit ücret, yüzde ya da teşvik primi). Satıcının maliyeti düşürme teşviki zayıftır; alıcının harcamaları yakından denetlemesi gerekir.",ex:"Uygun olduğu durum: Kapsamı baştan tanımlanamayan Ar-Ge veya ilk kez yapılan işler."},
  {label:"Zaman ve malzeme",title:"Risk paylaşılır",body:"Alıcı, çalışılan saat başına belirlenmiş bir ücret ile kullanılan malzemenin bedelini öder. Kısa süreli ve kapsamı netleşmemiş işler için pratiktir, ama süre uzarsa maliyet de büyür; genellikle bir üst sınır konur.",ex:"Uygun olduğu durum: Kayıt sistemine birkaç günlük danışmanlık veya küçük ek geliştirmeler."}
 ]},
 {t:"p",html:"Türkiye'de kamu kurumlarının mal, hizmet ve yapım işi alımları <b>4734 sayılı Kamu İhale Kanunu</b> (2002) ile düzenlenir; sözleşmelerin uygulanması ise <b>4735 sayılı Kamu İhale Sözleşmeleri Kanunu</b>na tabidir. İhaleler büyük ölçüde Kamu İhale Kurumu'nun Elektronik Kamu Alımları Platformu (EKAP) üzerinden yürütülür. Kamu destekli bir projede çalışacaksanız, tedarik kurallarının proje takvimini doğrudan etkileyeceğini baştan hesaba katın."},
 {t:"box",lbl:"Dönem projesi · Adım 11",html:"Projeniz için (1) 3–5 maddelik bir kalite planı yazın: her madde için standart, güvence önlemi ve kontrol yöntemi belirtin; (2) en az bir iş paketi için yap–satın al analizi yapın: maliyet karşılaştırmasının yanında en az iki nitel ölçüt kullanın; (3) dışarıdan alacağınız iş için hangi sözleşme türünü seçeceğinizi ve nedenini yazın."}
]},
{n:"11.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Kalite","Gereksinimlere ve kullanıma uygunluk."],
  ["Sınıf (grade)","Aynı işlevi gören ürünlerin özellik düzeyi."],
  ["Kalite güvencesi","Süreçlerin doğru işlemesini sağlayarak hatayı önlemeye odaklanır."],
  ["Kalite kontrol","Çıktıları denetleyerek hatayı bulmaya odaklanır."],
  ["Dış hata maliyeti","Hatanın müşteriye ulaştıktan sonra yarattığı maliyet."],
  ["Pareto analizi","Sorunların büyük bölümünü yaratan az sayıdaki nedeni bulma aracı."],
  ["Sabit fiyat sözleşme","Maliyet aşımı riskinin satıcıda olduğu sözleşme."],
  ["Maliyet artı sözleşme","Gerçekleşen maliyet artı ücretin ödendiği, riskin alıcıda olduğu sözleşme."]
 ]}
]},
{n:"11.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Basit ama hatasız bir yaka kartı için hangisi doğrudur?",o:["Düşük kaliteli, düşük sınıf","Yüksek kaliteli, düşük sınıf","Düşük kaliteli, yüksek sınıf","Yüksek kaliteli, yüksek sınıf"],a:1,e:"Sınıf özellik düzeyidir; hatasız olduğu için kalite yüksektir, özellikleri basit olduğu için sınıf düşüktür."},
  {q:"Stant kurulumunun bir kontrol listesiyle yapılmasını sağlamak hangi kalite faaliyetidir?",o:["Kalite güvencesi","Kalite kontrol","Dış hata","Yap–satın al"],a:0,e:"Süreci doğru işletmeye ve hatayı önlemeye yöneliktir; bu kalite güvencesidir."},
  {q:"Bir yazılımın müşteriye teslim edildikten sonra çöken modülünün düzeltilmesi hangi maliyettir?",o:["Önleme","Değerlendirme","İç hata","Dış hata"],a:3,e:"Hata müşteriye ulaştıktan sonra ortaya çıkmıştır; bu en pahalı kalite maliyeti türüdür."},
  {q:"Kalite yönetiminde hata ile maliyet arasındaki temel ilke nedir?",o:["Hata ne kadar geç bulunursa maliyeti o kadar düşer","Hata ne kadar geç bulunursa o kadar pahalıdır","Hatanın ne zaman bulunduğu maliyeti etkilemez","Hataları yalnızca müşteri bulmalıdır"],a:1,e:"Tasarımda düzeltilen hata ucuzdur; teslimden sonra bulunan hata yeniden yapım ve itibar kaybı demektir."},
  {q:"120 şikâyetin 70'i kayıt kuyruğuyla ilgiliyse, Pareto analizine göre ne yapılmalıdır?",o:["Bütün konulara eşit çaba harcanmalı","Çaba önce kayıt sürecine yoğunlaştırılmalı","Şikâyetler göz ardı edilmeli","Yalnızca en az şikâyet alan konu iyileştirilmeli"],a:1,e:"Pareto analizi, sorunların büyük bölümünü yaratan az sayıdaki nedene odaklanmayı önerir."},
  {q:"Sabit maliyet 20 bin TL, birim değişken maliyet 100 TL, dışarıdan birim fiyat 300 TL. Başabaş miktarı kaçtır?",o:["67 adet","100 adet","200 adet","50 adet"],a:1,e:"20.000 ÷ (300 − 100) = 100 adet. Bunun üzerindeki miktarlarda kendiniz yapmak daha ucuzdur."},
  {q:"Kapsamı baştan tanımlanamayan bir Ar-Ge çalışması için hangi sözleşme türü daha uygundur?",o:["Sabit fiyat","Maliyet artı","Hiç sözleşme yapmamak","Birim fiyatlı mal alımı"],a:1,e:"Kapsam belirsizken sabit fiyat vermek satıcı için çok risklidir; maliyet artı sözleşmede risk alıcıdadır."},
  {q:"Sabit fiyatlı sözleşmede maliyet aşımı riski kimdedir?",o:["Alıcıda","Satıcıda","Eşit olarak paylaşılır","Sigorta şirketinde"],a:1,e:"Satıcı belirlenen fiyatla işi yapmayı taahhüt eder; maliyet artarsa fark kendi kârından çıkar."},
  {q:"Türkiye'de kamu kurumlarının mal ve hizmet alımlarını düzenleyen temel kanun hangisidir?",o:["4734 sayılı Kamu İhale Kanunu","6102 sayılı Türk Ticaret Kanunu","5018 sayılı Kamu Mali Yönetimi ve Kontrol Kanunu","4857 sayılı İş Kanunu"],a:0,e:"Kamu alımları 4734 sayılı Kanun'la, bu alımlardan doğan sözleşmeler ise 4735 sayılı Kanun'la düzenlenir."}
 ]}
]}
],
refs:[
 "Juran, J. M., De Feo, J. A. (2010). <i>Juran's Quality Handbook</i>, 6. baskı. McGraw-Hill.",
 "Crosby, P. B. (1979). <i>Quality Is Free</i>. McGraw-Hill.",
 "Ishikawa, K. (1985). <i>What Is Total Quality Control? The Japanese Way</i>. Prentice Hall.",
 "Kamu İhale Kurumu — Mevzuat ve EKAP: <a href=\"https://www.kik.gov.tr\">kik.gov.tr</a>"
],
next:"Sonraki: Hafta 12 — İzleme ve kontrol: kazanılmış değer"
};
