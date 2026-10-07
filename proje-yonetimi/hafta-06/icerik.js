window.WEEK={
id:"py-06",code:"PY",course:"Proje Yönetimi",short:"Süre tahmini",week:6,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Zaman yönetimi I",
title:"Faaliyetler, bağımlılıklar ve <em>süre tahmini</em>",
intro:"Bu hafta İKY'deki iş paketlerini faaliyetlere nasıl ayıracağınızı, faaliyetler arasındaki bağımlılık türlerini, ağ diyagramını ve süreleri analog, parametrik ve üç nokta (PERT) yöntemleriyle nasıl tahmin edeceğinizi öğreneceksiniz. Gelecek hafta bu bilgilerle kritik yolu bulacağız. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, bir bağımlılık alıştırması ve 9 soruluk bir test var.",
goals:[
 "İş paketlerini faaliyetlere ayırıp bir faaliyet listesi hazırlayabilirsiniz.",
 "Bitiş–başlangıç, başlangıç–başlangıç, bitiş–bitiş ve başlangıç–bitiş bağımlılıklarını ayırt edebilirsiniz.",
 "Faaliyetleri düğüm üzerinde faaliyet yöntemiyle ağ diyagramına dönüştürebilirsiniz.",
 "Analog, parametrik ve üç nokta tahmin yöntemlerini uygun durumda kullanabilirsiniz.",
 "PERT ile beklenen süreyi, standart sapmayı ve bir hedef tarihe yetişme olasılığını hesaplayabilirsiniz."
],
sections:[
{n:"6.1",h:"İş paketinden faaliyete",blocks:[
 {t:"p",html:"İKY projede <i>ne</i> üretileceğini gösterir. Takvim için ise bu çıktıları üretmek için <i>ne yapılacağını</i> bilmemiz gerekir. Her iş paketi, fiille ifade edilen <b>faaliyetlere</b> ayrılır. \"1.4.1 Afiş ve sosyal medya kampanyası\" iş paketi şu faaliyetlere ayrılabilir: afiş metnini yazmak, afişi tasarlamak, tasarıma onay almak, afişi bastırmak, afişleri asmak, sosyal medya paylaşım takvimini hazırlamak."},
 {t:"p",html:"Faaliyet listesindeki her faaliyetin bir kodu, açık bir adı ve bağlı olduğu İKY öğesi olur. Ayrıca takvimde süresi sıfır olan önemli anlar da işaretlenir: bunlara <b>dönüm noktası</b> (milestone) denir. \"Firma katılımları kesinleşti\", \"Kayıt sistemi yayında\" birer dönüm noktasıdır; bir iş değil, bir işin tamamlandığı andır."}
]},
{n:"6.2",h:"Bağımlılık türleri",blocks:[
 {t:"p",html:"Faaliyetler rastgele sırayla yapılamaz. Afiş tasarlanmadan basılamaz, basılmadan asılamaz. Faaliyetler arasındaki bu mantıksal ilişkilere <b>bağımlılık</b> denir. Dört tür vardır; bir tür seçerek inceleyin."},
 {t:"choice",items:[
  {label:"Bitiş–Başlangıç (BB)",title:"En yaygın bağımlılık",body:"A faaliyeti bitmeden B başlayamaz. Ağ diyagramlarındaki bağımlılıkların büyük çoğunluğu bu türdendir ve yazılımlar varsayılan olarak bunu kullanır.",ex:"Örnek: Afiş basılmadan afişler asılamaz."},
  {label:"Başlangıç–Başlangıç (SS)",title:"Birlikte başlayanlar",body:"A başlamadan B başlayamaz. İki iş paralel yürür, ama ikincisi birincinin başlamasını bekler.",ex:"Örnek: Salon düzenlemesi başlamadan ses sistemi kurulumuna başlanamaz; ikisi sonra birlikte sürer."},
  {label:"Bitiş–Bitiş (FF)",title:"Birlikte bitenler",body:"A bitmeden B bitemez. İki iş farklı zamanlarda başlayabilir, ama ikincisi birincinin tamamlanmasını beklemek zorundadır.",ex:"Örnek: Konuşmacı listesi kesinleşmeden panel kitapçığının son hâli bitirilemez."},
  {label:"Başlangıç–Bitiş (SF)",title:"Nadir görülen tür",body:"A başlamadan B bitemez. Genellikle vardiya ve devir teslim işlerinde görülür.",ex:"Örnek: Yeni kayıt sistemi devreye girmeden eski kayıt formu kapatılamaz."}
 ]},
 {t:"p",html:"Bağımlılıklar kaynağına göre de ayrılır. <b>Zorunlu</b> bağımlılık işin doğasından gelir (temel atılmadan duvar örülmez). <b>İsteğe bağlı</b> bağımlılık ekibin tercihidir (önce ana sayfayı, sonra alt sayfaları tasarlamak). <b>Dış</b> bağımlılık proje dışındaki bir tarafa bağlıdır (belediyeden izin gelmeden stant kurulamaz). İsteğe bağlı bağımlılıklar, takvim sıkıştığında ilk sorgulanacak olanlardır."},
 {t:"p",html:"Bazen iki faaliyet arasında bekleme süresi gerekir. Beton döküldükten sonra kalıp sökülmeden önce betonun prizini alması beklenir. Bu beklemeye <b>gecikme</b> (lag) denir. Tersine, bir faaliyetin öncülü bitmeden biraz önce başlatılmasına <b>öne alma</b> (lead) denir: tasarımın son günü baskı evine ön bilgi vermek gibi."},
 {t:"widget",name:"classify",opts:{title:"Bağımlılık türünü bulun",cats:["BB","SS","FF","SF"],items:[
  ["Sınav soruları yazılmadan sınav kitapçığı basılamaz",0],
  ["Çeviri bitmeden çeviri redaksiyonu bitirilemez",2],
  ["Kazı başlamadan zemin etüdü ölçümlerine başlanamaz",1],
  ["Yeni nöbetçi göreve başlamadan önceki nöbetçinin nöbeti bitemez",3],
  ["Davetiyeler gönderilmeden katılım onayı toplanamaz",0],
  ["Veri girişi bitmeden veri kontrolü bitirilemez",2]],
  note:"Soru sormanın kolay yolu: İkinci iş, birinci işin başlamasını mı, bitmesini mi bekliyor? Ve ikinci işin başlaması mı, bitmesi mi engelleniyor?"}}
]},
{n:"6.3",h:"Ağ diyagramı",blocks:[
 {t:"p",html:"Faaliyetler ve bağımlılıklar bir <b>ağ diyagramında</b> gösterilir. Bugün en yaygın gösterim <b>düğüm üzerinde faaliyet</b> yöntemidir: her faaliyet bir kutu (düğüm), her bağımlılık bir oktur. Diyagram soldan sağa okunur; başlangıç düğümünden bitiş düğümüne giden her hat bir <b>yoldur</b>."},
 {t:"table",head:["Kod","Faaliyet","Öncül","Süre (gün)"],rows:[
  ["A","Firma listesini hazırlamak","—","3"],
  ["B","Firmalara davet göndermek ve onay toplamak","A","10"],
  ["C","Afiş tasarlamak","A","4"],
  ["D","Afiş basmak ve asmak","C","3"],
  ["E","Stant yerleşim planını hazırlamak","B","2"],
  ["F","Etkinliği gerçekleştirmek","D, E","2"]]},
 {t:"p",html:"Bu tabloda iki yol vardır: A→B→E→F (3+10+2+2 = 17 gün) ve A→C→D→F (3+4+3+2 = 12 gün). Proje en uzun yol kadar sürer: 17 gün. Bu en uzun yola <b>kritik yol</b> denir; gelecek hafta ayrıntılı göreceğiz. Şimdilik şuna dikkat edin: afişte yaşanacak 5 günlük bir gecikme projeyi geciktirmez, ama firma onaylarında yaşanacak tek bir günlük gecikme etkinlik tarihini kaydırır."}
]},
{n:"6.4",h:"Süre tahmin yöntemleri",blocks:[
 {t:"p",html:"Süre tahmini, proje yönetiminin en zor ve en çok hata yapılan işlerinden biridir. Üç temel yöntem vardır."},
 {t:"list",items:[
  "<b>Analog tahmin:</b> Benzer bir geçmiş projenin süresi temel alınır. \"Geçen yılki fuarda firma onayları 12 gün sürmüştü.\" Hızlı ve ucuzdur, ama projeler gerçekten benzer değilse yanıltır.",
  "<b>Parametrik tahmin:</b> Birim başına süre ile miktar çarpılır. Bir gönüllü saatte 40 davet zarfı hazırlıyorsa, 600 zarf için 15 saat gerekir. Birim verisi güvenilirse oldukça isabetlidir.",
  "<b>Üç nokta tahmin:</b> Tek bir sayı yerine üç tahmin yapılır: iyimser (a), en olası (m) ve kötümser (b). Belirsizliği açıkça hesaba katar."]},
 {t:"box",lbl:"Formül",html:"<b>Üçgen dağılım:</b> tₑ = (a + m + b) / 3<br><b>PERT (beta dağılımı):</b> tₑ = (a + 4m + b) / 6 &nbsp;·&nbsp; σ = (b − a) / 6<br>PERT, en olası değere dört kat ağırlık verir. Standart sapma σ, tahminin ne kadar belirsiz olduğunu gösterir: iyimser ile kötümser arasındaki fark büyüdükçe σ da büyür."},
 {t:"p",html:"PERT tekniği 1958'de ABD Donanması'nın Polaris füze programında, daha önce hiç yapılmamış işlerin süresini tahmin etmek için kullanıldı. Bugün özellikle Ar-Ge, yazılım ve ilk kez yapılan işlerde değerlidir."}
]},
{n:"6.5",h:"PERT hesaplayıcısı",blocks:[
 {t:"p",html:"\"Firmalara davet göndermek ve onay toplamak\" faaliyetini düşünün. En iyi durumda 6 gün, en olası 10 gün, en kötü durumda 20 gün sürebilir. Sizin için kaç gün ayırmanız gerektiğini ve 12 günde bitme olasılığını hesaplayalım."},
 {t:"widget",name:"calc",opts:{title:"PERT: beklenen süre ve olasılık",inputs:[
  {id:"a",label:"İyimser süre (a)",min:1,max:30,step:1,value:6,unit:" gün"},
  {id:"m",label:"En olası süre (m)",min:1,max:40,step:1,value:10,unit:" gün"},
  {id:"b",label:"Kötümser süre (b)",min:1,max:60,step:1,value:20,unit:" gün"},
  {id:"T",label:"Hedef süre (T)",min:1,max:60,step:1,value:12,unit:" gün"}],
  formula:"(function(){if(!(a<=m&&m<=b))return 'a ≤ m ≤ b olmalı; sürgüleri düzeltin.';var te=(a+4*m+b)/6,s=(b-a)/6;var p;if(s===0){p=T>=te?1:0;}else{var z=(T-te)/s,t=1/(1+0.2316419*Math.abs(z)),d=0.3989423*Math.exp(-z*z/2),q=d*t*(0.3193815+t*(-0.3565638+t*(1.781478+t*(-1.821256+t*1.330274))));p=z>0?1-q:q;}return 'Beklenen süre tₑ = '+te.toFixed(1).replace('.',',')+' gün · σ = '+s.toFixed(2).replace('.',',')+' gün · '+T+' günde bitme olasılığı ≈ %'+Math.round(p*100);})()",
  result:"{r}",note:"Olasılık, sürenin normal dağıldığı varsayımıyla yaklaşık hesaplanır. tₑ'ye eşit bir hedef yalnızca yaklaşık %50 güvence verir. Kötümser süreyi artırın: en olası süre değişmese bile beklenen süre uzar ve olasılık düşer."}}
]},
{n:"6.6",h:"Tahminleri neden şaşırırız?",blocks:[
 {t:"p",html:"İnsanlar işlerin ne kadar süreceğini sistematik olarak olduğundan kısa tahmin eder. Daniel Kahneman ve Amos Tversky bu eğilime <b>planlama yanılgısı</b> adını verdi. Ödevini \"bir akşamda biter\" diye planlayıp üç akşamda bitiren her öğrenci bu yanılgıyı tanır."},
 {t:"list",items:[
  "<b>Parkinson yasası:</b> İş, kendisine ayrılan süreyi dolduracak kadar uzar. Bir işe 10 gün verirseniz, 6 günde bitebilecek olsa bile çoğu zaman 10 gün sürer.",
  "<b>Öğrenci sendromu:</b> Tanınan ek süre başta harcanır; asıl çalışma son ana bırakılır. Eliyahu Goldratt bu davranışı projelerde gecikmenin başlıca nedenlerinden biri olarak gösterdi.",
  "<b>Gizli tampon:</b> Herkes kendi tahminine sessizce pay ekler. Toplamda takvim şişer, ama paylar yine de boşa harcanır."]},
 {t:"box",lbl:"Daha iyi tahmin için",html:"Tahmini işi yapacak kişiye yaptırın; geçmiş projelerden gerçek veri tutun; tek sayı yerine aralık verin; tampon payını faaliyetlere dağıtmak yerine proje sonunda açıkça tek bir tampon olarak tutun."},
 {t:"box",lbl:"Dönem projesi · Adım 6",html:"İKY'nizdeki her iş paketini 2–5 faaliyete ayırın (toplam 15–25 faaliyet). Her faaliyet için öncülleri yazın ve en az 3 dönüm noktası belirleyin. En belirsiz gördüğünüz 3 faaliyet için üç nokta tahmini yapıp PERT ile beklenen süreyi ve standart sapmayı hesaplayın. Diğer faaliyetler için hangi yöntemi kullandığınızı belirtin."}
]},
{n:"6.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Faaliyet","Bir iş paketini üretmek için yapılan, fiille ifade edilen iş."],
  ["Dönüm noktası","Süresi sıfır olan, önemli bir aşamanın tamamlandığı an."],
  ["Bitiş–Başlangıç","Öncül bitmeden ardıl başlayamaz; en yaygın bağımlılık."],
  ["Gecikme (lag)","İki faaliyet arasında zorunlu bekleme süresi."],
  ["Ağ diyagramı","Faaliyetleri ve bağımlılıkları gösteren düğüm ve ok şeması."],
  ["Parametrik tahmin","Birim başına süre ile miktarın çarpılmasıyla yapılan tahmin."],
  ["PERT","tₑ = (a + 4m + b) / 6 formülüyle yapılan üç nokta tahmini."],
  ["Planlama yanılgısı","İşlerin süresini sistematik olarak olduğundan kısa tahmin etme eğilimi."]
 ]}
]},
{n:"6.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"\"Kayıt sistemi yayında\" ifadesi takvimde neyi temsil eder?",o:["Bir faaliyeti","Bir dönüm noktasını","Bir iş paketini","Bir gecikmeyi"],a:1,e:"Süresi sıfır olan, bir işin tamamlandığı anı gösterir; bu yüzden dönüm noktasıdır."},
  {q:"\"Duvar sıvası bitmeden boya bitemez\" ilişkisi hangi bağımlılık türüdür?",o:["Bitiş–Başlangıç","Başlangıç–Başlangıç","Bitiş–Bitiş","Başlangıç–Bitiş"],a:2,e:"Boya sıva bitmeden başlayabilir, ama sıva bitmeden boyanın tamamlanması mümkün değildir."},
  {q:"Belediyeden izin gelmeden stant kurulamaması hangi tür bağımlılıktır?",o:["Zorunlu","İsteğe bağlı","Dış","Gecikme"],a:2,e:"Bağımlılık proje ekibinin kontrolü dışındaki bir tarafa bağlıdır."},
  {q:"Bir gönüllü saatte 50 broşür katlıyor. 1.000 broşür için kaç saat gerekir ve bu hangi tahmin yöntemidir?",o:["20 saat, parametrik","20 saat, analog","50 saat, parametrik","10 saat, üç nokta"],a:0,e:"1.000 ÷ 50 = 20 saat. Birim başına üretim hızıyla miktarı çarpmak parametrik tahmindir."},
  {q:"a = 4, m = 7, b = 16 gün ise PERT beklenen süresi kaç gündür?",o:["7","8","9","9,5"],a:1,e:"(4 + 4×7 + 16) ÷ 6 = 48 ÷ 6 = 8 gün."},
  {q:"Aynı faaliyet için σ değeri neyi gösterir?",o:["Faaliyetin kaç kişiyle yapılacağını","Tahmindeki belirsizliğin büyüklüğünü","Faaliyetin maliyetini","Kritik yolda olup olmadığını"],a:1,e:"σ = (b − a) ÷ 6; iyimser ve kötümser tahmin arasındaki fark büyüdükçe belirsizlik artar."},
  {q:"Yukarıdaki ağda (A→B→E→F = 17 gün, A→C→D→F = 12 gün) afiş tasarımı 4 gün gecikirse proje süresi ne olur?",o:["17 gün, değişmez","21 gün, 4 gün uzar","16 gün, kısalır","20 gün, 3 gün uzar"],a:0,e:"A→C→D→F yolu 16 güne çıkar, ama hâlâ 17 günlük kritik yoldan kısadır; proje süresi değişmez."},
  {q:"10 günde bitebilecek bir işe 15 gün verildiğinde işin 15 gün sürmesi hangi kavramla açıklanır?",o:["Planlama yanılgısı","Parkinson yasası","Altın kaplama","Kapsam kayması"],a:1,e:"Parkinson yasasına göre iş, kendisine ayrılan süreyi dolduracak kadar uzar."},
  {q:"PERT hedef süresi beklenen süreye (tₑ) eşit seçilirse işin zamanında bitme olasılığı yaklaşık kaçtır?",o:["%10","%50","%84","%100"],a:1,e:"Normal dağılım varsayımında ortalama değer %50 olasılığa karşılık gelir; daha yüksek güvence için tampon gerekir."}
 ]}
]}
],
refs:[
 "Project Management Institute (2019). <i>Practice Standard for Scheduling</i>, 3. baskı. PMI.",
 "Malcolm, D. G., Roseboom, J. H., Clark, C. E., Fazar, W. (1959). Application of a technique for research and development program evaluation. <i>Operations Research</i>, 7(5).",
 "Kahneman, D., Tversky, A. (1979). Intuitive prediction: Biases and corrective procedures. <i>TIMS Studies in Management Science</i>, 12.",
 "Goldratt, E. M. (1997). <i>Critical Chain</i>. North River Press."
],
next:"Sonraki: Hafta 07 — Zaman II: kritik yol, Gantt şeması ve sıkıştırma"
};
