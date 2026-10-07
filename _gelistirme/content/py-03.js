window.WEEK={
id:"py-03",code:"PY",course:"Proje Yönetimi",short:"Proje seçimi",week:3,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Fikirden projeye",
title:"Proje fikri, ihtiyaç analizi ve <em>proje seçimi</em>",
intro:"Bu hafta iyi bir projenin doğru tanımlanmış bir sorundan doğduğunu, sorunu sorun ağacıyla nasıl çözümleyeceğinizi, hedefleri SMART ölçütlerine göre nasıl yazacağınızı ve birden çok proje fikri arasında puanlama, geri ödeme süresi ve net bugünkü değerle nasıl seçim yapacağınızı öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada bir SMART alıştırması, iki hesaplayıcı ve 9 soruluk bir test var.",
goals:[
 "İhtiyaç ile çözüm önerisini ayırt edebilirsiniz.",
 "Bir sorunu sorun ağacıyla neden ve sonuçlarına ayırabilirsiniz.",
 "Bir proje hedefini SMART ölçütlerine göre yazabilir ve zayıf hedefleri düzeltebilirsiniz.",
 "Ağırlıklı puanlama ile proje fikirlerini karşılaştırabilirsiniz.",
 "Geri ödeme süresini ve net bugünkü değeri hesaplayıp yorumlayabilirsiniz."
],
sections:[
{n:"3.1",h:"Önce sorun, sonra proje",blocks:[
 {t:"p",html:"Başarısız projelerin önemli bir kısmı yanlış yürütüldüğü için değil, yanlış sorunu çözdüğü için başarısız olur. \"Kampüse bir mobil uygulama yapalım\" bir çözüm önerisidir. Önce sorulması gereken şudur: <b>Hangi sorunu çözüyoruz ve bu sorun kimin sorunu?</b>"},
 {t:"p",html:"<b>İhtiyaç analizi</b>, mevcut durum ile olması istenen durum arasındaki farkı ortaya koyar. Bu fark verilerle, gözlemle ve sorunu yaşayan insanlarla konuşarak belirlenir. Örneğin öğrenciler yemekhane kuyruğunda ortalama ne kadar bekliyor, en yoğun saat hangisi, bekleme yüzünden derse geç kalan var mı? Bu sorulara yanıt vermeden \"uygulama yapalım\" demek, hastayı muayene etmeden reçete yazmaya benzer."},
 {t:"box",lbl:"İhtiyaç mı, çözüm mü?",html:"<b>Çözüm cümlesi:</b> \"Yemekhaneye ikinci bir kasa açılmalı.\"<br><b>İhtiyaç cümlesi:</b> \"Öğle saatinde öğrenciler yemekhanede uzun süre bekliyor ve bir kısmı yemeği atlıyor.\"<br>İhtiyaç cümlesi birden çok çözüme kapı açar: ikinci kasa, önceden sipariş, dağıtılmış ders saatleri, ek servis noktası. Doğru çözüm, bu seçenekler karşılaştırıldıktan sonra seçilir."}
]},
{n:"3.2",h:"Sorun ağacı",blocks:[
 {t:"p",html:"<b>Sorun ağacı</b>, ana sorunu gövdeye, nedenlerini köklere, sonuçlarını dallara yerleştiren basit bir çözümleme aracıdır. Avrupa Komisyonu'nun proje döngüsü yönetimi yaklaşımında ve kalkınma ajanslarının proje başvurularında yaygın olarak kullanılır."},
 {t:"table",head:["Katman","Soru","Yemekhane örneği"],rows:[
  ["Sonuçlar (dallar)","Sorun çözülmezse ne olur?","Öğrenciler öğünü atlıyor, derse geç kalıyor, memnuniyet düşüyor"],
  ["Ana sorun (gövde)","Temel sorun nedir?","Öğle saatinde yemekhanede uzun bekleme"],
  ["Doğrudan nedenler","Bu soruna ne yol açıyor?","Tek kasa; derslerin aynı saatte bitmesi; ödemenin yavaş olması"],
  ["Kök nedenler","Bu nedenlerin arkasında ne var?","Ders programının merkezi ve tek tip planlanması; kartlı ödeme altyapısının eski olması"]]},
 {t:"p",html:"Sorun ağacı daha sonra <b>amaç ağacına</b> dönüştürülür: her olumsuz ifade olumlu bir hedefe çevrilir. \"Uzun bekleme\" → \"Bekleme süresinin kısalması\"; \"Tek kasa\" → \"Ödeme noktası sayısının artırılması\". Böylece projenin hangi kökü hedeflediği netleşir. 14. haftada bu yapıyı mantıksal çerçeve matrisine taşıyacağız."}
]},
{n:"3.3",h:"SMART hedefler",blocks:[
 {t:"p",html:"Sorun netleşince hedef yazılır. \"Bekleme süresini azaltmak\" iyi niyetli ama ölçülemeyen bir hedeftir. Bir hedefin işe yaraması için beş ölçütü karşılaması beklenir; baş harflerinden <b>SMART</b> diye anılır."},
 {t:"table",head:["Harf","Ölçüt","Sorulacak soru"],rows:[
  ["S","Specific — Belirli","Tam olarak neyi, kim için değiştireceğiz?"],
  ["M","Measurable — Ölçülebilir","Başarıyı hangi göstergeyle ölçeceğiz?"],
  ["A","Achievable — Ulaşılabilir","Elimizdeki kaynakla gerçekçi mi?"],
  ["R","Relevant — İlgili","Ana sorunu ve kurumun amacını gerçekten etkiliyor mu?"],
  ["T","Time-bound — Zamana bağlı","Ne zamana kadar?"]]},
 {t:"box",lbl:"Zayıf hedef → SMART hedef",html:"<b>Zayıf:</b> \"Yemekhane hizmetini iyileştirmek.\"<br><b>SMART:</b> \"Bahar döneminin sonuna kadar, öğle saatinde (12.00–13.30) yemekhanede ortalama bekleme süresini, dönem başında ölçülen değerin yarısına indirmek.\""},
 {t:"widget",name:"classify",opts:{title:"Bu hedef SMART mı?",cats:["SMART","SMART değil"],items:[
  ["Topluluğumuzu daha tanınır yapmak",1],
  ["Haziran sonuna kadar topluluk Instagram hesabının takipçi sayısını 500'den 1.000'e çıkarmak",0],
  ["Kariyer Günleri'ne mümkün olduğunca çok firma getirmek",1],
  ["Kariyer Günleri'ne 15 Mart'a kadar en az 12 firmanın katılımını yazılı olarak kesinleştirmek",0],
  ["Öğrencilerin çevre bilincini artırmak",1],
  ["Dönem sonuna kadar fakültedeki geri dönüşüm kutusu sayısını 4'ten 12'ye çıkarmak",0],
  ["Bir haftada sıfır bütçeyle 50 bin kişilik festival düzenlemek",1],
  ["Proje bitimine kadar katılımcı memnuniyet anketinde 5 üzerinden en az 4 ortalama almak",0]],
  note:"\"Daha tanınır\", \"mümkün olduğunca çok\", \"bilinci artırmak\" ölçülemez. Sıfır bütçeyle bir haftada 50 bin kişilik festival ölçülebilir ama ulaşılabilir değildir; SMART'ın A harfini karşılamaz."}}
]},
{n:"3.4",h:"Proje seçimi: ağırlıklı puanlama",blocks:[
 {t:"p",html:"Kurumların her zaman yapabileceğinden fazla proje fikri vardır. Kaynak kıt olduğu için seçim gerekir. Bunun en yaygın nitel aracı <b>ağırlıklı puanlama modelidir</b>: önce ölçütler ve ağırlıkları belirlenir, sonra her proje her ölçütte puanlanır, puanlar ağırlıklarla çarpılıp toplanır."},
 {t:"p",html:"Aşağıdaki hesaplayıcıda üç ölçüt var: <b>stratejik uyum</b> (%50), <b>maliyet uygunluğu</b> (%30, ucuz proje yüksek puan alır) ve <b>uygulanabilirlik</b> (%20). Bir proje fikri için 1–10 arası puan verin."},
 {t:"widget",name:"calc",opts:{title:"Ağırlıklı puanlama",inputs:[
  {id:"uyum",label:"Stratejik uyum (ağırlık %50)",min:1,max:10,step:1,value:8},
  {id:"maliyet",label:"Maliyet uygunluğu (ağırlık %30)",min:1,max:10,step:1,value:5},
  {id:"uygulama",label:"Uygulanabilirlik (ağırlık %20)",min:1,max:10,step:1,value:6}],
  formula:"0.5*uyum+0.3*maliyet+0.2*uygulama",result:"Ağırlıklı puan: {r} / 10",digits:2,
  note:"Aynı hesabı ikinci bir fikir için yapın ve karşılaştırın. Ağırlıkları kimin, nasıl belirlediği sonucu ciddi biçimde etkiler; bu yüzden ağırlıklar puanlamadan önce ve gerekçesiyle kararlaştırılmalıdır."}}
]},
{n:"3.5",h:"Seçim yöntemleri bir arada",blocks:[
 {t:"p",html:"Hiçbir yöntem tek başına yeterli değildir. Kurumlar genellikle nitel ve nicel yöntemleri birlikte kullanır. Bir yöntem seçerek ne zaman işe yaradığını görün."},
 {t:"choice",items:[
  {label:"Zorunluluk",title:"Yapılmak zorunda olan projeler",body:"Yasal düzenleme, güvenlik veya sözleşme gereği yapılması zorunlu projeler puanlamaya girmeden listeye alınır. Bunlar için soru 'yapalım mı?' değil, 'en verimli nasıl yapalım?' sorusudur.",ex:"Örnek: Bir binanın deprem yönetmeliğine uygun hâle getirilmesi."},
  {label:"Ağırlıklı puanlama",title:"Çok ölçütlü karşılaştırma",body:"Stratejik uyum, risk, maliyet, toplumsal etki gibi parayla ölçülemeyen ölçütleri tek bir puanda birleştirir. Kamu kurumları ve sivil toplum için özellikle kullanışlıdır.",ex:"Örnek: Bir kalkınma ajansının başvuruları değerlendirme formu."},
  {label:"Geri ödeme süresi",title:"Hızlı ön eleme",body:"Basit ve anlaşılır olduğu için ilk elemede kullanılır. Nakit sıkıntısı çeken küçük işletmeler için 'paramız ne zaman geri döner?' sorusu hayati olabilir.",ex:"Örnek: Bir kafenin yeni kahve makinesi yatırımı."},
  {label:"Net bugünkü değer",title:"Finansal karar için standart",body:"Paranın zaman değerini ve projenin bütün ömrünü dikkate alır. Büyük ve uzun ömürlü yatırımlarda temel finansal ölçüttür.",ex:"Örnek: Bir fabrikanın yeni üretim hattı veya bir rüzgâr santrali."}
 ]}
]},
{n:"3.6",h:"Finansal ölçütler: geri ödeme süresi ve NBD",blocks:[
 {t:"p",html:"Gelir veya tasarruf getiren projelerde finansal ölçütler de kullanılır. En basiti <b>geri ödeme süresidir</b>: yatırımın, projenin sağladığı net nakit akışlarıyla kaç yılda geri döndüğü. 300 bin TL'lik bir güneş paneli yılda 75 bin TL elektrik tasarrufu sağlıyorsa geri ödeme süresi 4 yıldır. Kolay anlaşılır, ama iki zayıflığı vardır: paranın zaman değerini ve geri ödemeden sonraki yılları dikkate almaz."},
 {t:"def",html:"<b>Net bugünkü değer (NBD)</b>: Projenin gelecekteki bütün net nakit akışlarının bir iskonto oranıyla bugüne indirgenmiş toplamından ilk yatırımın çıkarılmasıyla bulunan değer.",src:"NBD > 0 ise proje, iskonto oranının gösterdiği asgari getiriden fazlasını sağlar."},
 {t:"box",lbl:"Formül",html:"NBD = −Yatırım + NA₁/(1+r) + NA₂/(1+r)² + … + NAₙ/(1+r)ⁿ<br>Her yıl aynı net nakit akışı (NA) varsa: NBD = −Yatırım + NA × [1 − (1+r)<sup>−n</sup>] / r"},
 {t:"widget",name:"calc",opts:{title:"Net bugünkü değer ve geri ödeme",inputs:[
  {id:"yat",label:"İlk yatırım",min:50,max:1000,step:10,value:300,unit:" bin TL"},
  {id:"na",label:"Yıllık net nakit akışı",min:10,max:300,step:5,value:75,unit:" bin TL"},
  {id:"n",label:"Proje ömrü",min:1,max:20,step:1,value:6,unit:" yıl"},
  {id:"r",label:"İskonto oranı",min:1,max:40,step:1,value:10,unit:"%"}],
  formula:"(function(){var v=-yat+na*(1-Math.pow(1+r/100,-n))/(r/100);return 'NBD: '+v.toFixed(1).replace('.',',')+' bin TL · Geri ödeme: '+(yat/na).toFixed(1).replace('.',',')+' yıl → '+(v>0?'kabul edilebilir':'reddedilmeli');})()",
  result:"{r}",note:"İskonto oranını artırın: aynı proje bir noktadan sonra negatif NBD verir. Yüksek faiz ortamında uzun vadeli projelerin daha zor kabul görmesinin nedeni budur."}}
]},
{n:"3.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["İhtiyaç analizi","Mevcut durum ile istenen durum arasındaki farkın verilerle ortaya konması."],
  ["Sorun ağacı","Ana sorunu, nedenlerini ve sonuçlarını görselleştiren çözümleme aracı."],
  ["Amaç ağacı","Sorun ağacındaki olumsuz ifadelerin olumlu hedeflere çevrilmiş hâli."],
  ["SMART","Belirli, ölçülebilir, ulaşılabilir, ilgili ve zamana bağlı hedef ölçütleri."],
  ["Ağırlıklı puanlama","Ölçüt puanlarının ağırlıklarla çarpılıp toplandığı proje seçim yöntemi."],
  ["Geri ödeme süresi","Yatırımın net nakit akışlarıyla geri dönmesi için gereken süre."],
  ["İskonto oranı","Gelecekteki parayı bugüne indirgemekte kullanılan asgari getiri oranı."],
  ["Net bugünkü değer","İndirgenmiş nakit akışları toplamı eksi ilk yatırım."]
 ]},
 {t:"box",lbl:"Dönem projesi · Adım 3",html:"Projeniz için (1) bir ihtiyaç cümlesi yazın (çözüm değil, sorun), (2) en az üç neden ve üç sonuç içeren bir sorun ağacı çizin, (3) projenin genel amacını ve 2–3 SMART hedefini yazın. Ekipte birden fazla fikir varsa, kendi belirlediğiniz üç ölçütle ağırlıklı puanlama yapıp seçiminizi gerekçelendirin."}
]},
{n:"3.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Aşağıdakilerden hangisi bir çözüm önerisi değil, ihtiyaç cümlesidir?",o:["Kütüphaneye sınav dönemi için 100 yeni masa alınmalı","Sınav haftalarında öğrenciler çalışacak yer bulamıyor","Kütüphane sınav haftalarında 24 saat açık olmalı","Kampüse yeni bir çalışma salonu inşa edilmeli"],a:1,e:"İhtiyaç cümlesi sorunu tanımlar ve birden çok çözüme kapı açar; diğer seçenekler tek bir çözümü baştan dayatır."},
  {q:"Sorun ağacında \"öğrencilerin öğünü atlaması\" hangi katmanda yer alır?",o:["Kök neden","Doğrudan neden","Ana sorun","Sonuç"],a:3,e:"Öğün atlamak uzun beklemenin bir sonucudur; ağacın dallarında yer alır."},
  {q:"\"Topluluğun sosyal medyada daha etkili olması\" hedefi SMART ölçütlerinden en açık biçimde hangilerini karşılamıyor?",o:["Yalnızca ilgili olma ölçütünü","Ölçülebilirlik ve zamana bağlılık ölçütlerini","Yalnızca ulaşılabilirlik ölçütünü","Bütün ölçütleri eksiksiz karşılıyor"],a:1,e:"\"Daha etkili\" bir gösterge değildir ve bir tarih de yoktur."},
  {q:"Ağırlıklar uyum %50, maliyet %30, uygulanabilirlik %20; puanlar 8, 4, 6 ise ağırlıklı puan kaçtır?",o:["6,0","6,4","6,6","7,2"],a:1,e:"0,5×8 + 0,3×4 + 0,2×6 = 4 + 1,2 + 1,2 = 6,4."},
  {q:"400 bin TL'lik bir yatırım yılda 100 bin TL net nakit akışı sağlıyorsa geri ödeme süresi kaç yıldır?",o:["2,5","4","5","40"],a:1,e:"400 ÷ 100 = 4 yıl."},
  {q:"Geri ödeme süresi yönteminin temel zayıflığı nedir?",o:["Hesaplamasının çok karmaşık olması","Paranın zaman değerini ve geri ödeme sonrasını dikkate almaması","Yalnızca kamu projelerinde kullanılabilmesi","Nakit akışı yerine kâr kullanması zorunluluğu"],a:1,e:"Bugünkü 1 lira ile beş yıl sonraki 1 lirayı eşit sayar ve geri ödemeden sonraki kazançları görmez."},
  {q:"Bir projenin NBD'si %10 iskonto oranında pozitif, %25'te negatif çıkıyor. Bu ne gösterir?",o:["Hesaplamada mutlaka bir hata yapılmıştır","Projenin getirisi %10 ile %25 arasındadır","Proje her durumda kesinlikle reddedilmelidir","İskonto oranının NBD üzerinde etkisi yoktur"],a:1,e:"NBD'yi sıfır yapan oran (iç verim oranı) bu iki oranın arasındadır; asgari getiri beklentisi bu aralığın altındaysa proje kabul edilebilir."},
  {q:"İskonto oranı yükseldiğinde, uzun vadede getiri sağlayan bir projenin NBD'si nasıl değişir?",o:["Artar","Azalır","Değişmez","Her zaman sıfır olur"],a:1,e:"Uzak yılların nakit akışları yüksek oranla daha çok küçülür; bu yüzden NBD azalır."},
  {q:"Sorun ağacından amaç ağacına geçerken ne yapılır?",o:["Nedenler silinir, yalnızca sonuçlar bırakılır","Her olumsuz ifade olumlu bir hedefe çevrilir","Sorun ağacı tersine çevrilip dallar köke taşınır","Bütçe ve takvim ağaca eklenir"],a:1,e:"\"Uzun bekleme\" → \"bekleme süresinin kısalması\" gibi her olumsuz durum ulaşılmak istenen bir duruma dönüştürülür."}
 ]}
]}
],
refs:[
 "European Commission (2004). <i>Project Cycle Management Guidelines</i>. EuropeAid. Sorun ve amaç analizi bölümleri.",
 "Doran, G. T. (1981). There's a S.M.A.R.T. way to write management's goals and objectives. <i>Management Review</i>, 70(11).",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 2: Strateji ve proje seçimi.",
 "T.C. Sanayi ve Teknoloji Bakanlığı — Kalkınma ajansları: <a href=\"https://www.sanayi.gov.tr\">sanayi.gov.tr</a>"
],
next:"Sonraki: Hafta 04 — Proje başlatma: başlatma belgesi ve paydaş analizi"
};
