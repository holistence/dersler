window.WEEK={
id:"py-09",code:"PY",course:"Proje Yönetimi",short:"Risk",week:9,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Risk yönetimi",
title:"Belirsizliği yönetmek: <em>risk</em>",
intro:"Bu hafta riski sorundan ayırmayı, riskleri doğru bir kalıpla yazmayı, olasılık–etki matrisiyle önceliklendirmeyi, beklenen parasal değerle yedek akçeyi hesaplamayı ve tehditlere ve fırsatlara uygun yanıt stratejileri seçmeyi öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada bir risk puanı hesaplayıcısı, bir beklenen parasal değer hesaplayıcısı, bir strateji alıştırması ve 9 soruluk bir test var.",
goals:[
 "Risk ile sorun arasındaki farkı açıklayabilirsiniz.",
 "Bir riski neden–olay–etki kalıbıyla yazabilirsiniz.",
 "Olasılık–etki matrisiyle riskleri önceliklendirebilirsiniz.",
 "Beklenen parasal değeri hesaplayıp yedek akçeyi belirleyebilirsiniz.",
 "Tehditler ve fırsatlar için uygun yanıt stratejisini seçip bir risk kaydı hazırlayabilirsiniz."
],
sections:[
{n:"9.1",h:"Risk nedir?",blocks:[
 {t:"def",html:"<b>Risk</b>: Gerçekleşmesi durumunda bir veya daha fazla proje hedefi üzerinde olumlu ya da olumsuz etkisi olacak belirsiz bir olay veya koşul.",src:"PMI tanımı. Olumsuz riskler tehdit, olumlu riskler fırsat olarak adlandırılır."},
 {t:"p",html:"Tanımdaki kilit sözcük <b>belirsizliktir</b>. Henüz gerçekleşmemiş, gerçekleşme olasılığı olan bir olay risktir. Gerçekleşmiş olan ise artık bir <b>sorundur</b>. \"Etkinlik günü yağmur yağabilir\" bir risktir; sabah kalktığınızda yağmur yağıyorsa bu bir sorundur. Risk yönetiminin amacı, olabildiğince çok riski sorun hâline gelmeden ele almaktır."},
 {t:"p",html:"Risk her zaman kötü değildir. Bir firmanın son anda ana sponsor olmak istemesi, bir konuşmacının etkinliği kendi takipçilerine duyurması birer <b>fırsattır</b>. İyi bir risk yönetimi yalnızca tehditleri azaltmaya değil, fırsatları büyütmeye de çalışır."}
]},
{n:"9.2",h:"Riskleri tanımlamak",blocks:[
 {t:"p",html:"Riskleri tanımlamanın en yaygın yolları ekip ve paydaşlarla beyin fırtınası, geçmiş projelerin öğrenilen dersleri, kontrol listeleri, uzman görüşü ve varsayımların sorgulanmasıdır. Başlatma belgesindeki her varsayım (\"En az 20 gönüllü bulunacak\") aslında bir risk adayıdır: varsayım tutmazsa ne olur?"},
 {t:"p",html:"Riskleri belirsiz cümlelerle yazmak yaygın bir hatadır. \"Bütçe\" ya da \"gönüllüler\" bir risk değil, bir başlıktır. İyi bir risk ifadesi üç parçadan oluşur: <b>neden</b>, <b>belirsiz olay</b> ve <b>etki</b>."},
 {t:"box",lbl:"Risk ifadesi kalıbı",html:"\"<b>[Neden]</b> nedeniyle <b>[belirsiz olay]</b> olabilir; bu da <b>[hedef üzerindeki etki]</b> ile sonuçlanır.\"<br><br><b>Zayıf:</b> \"Gönüllü sorunu.\"<br><b>İyi:</b> \"Etkinlik tarihi ara sınavlardan bir hafta sonraya denk geldiği için gönüllülerin bir kısmı son hafta görev alamayabilir; bu da stant kurulumunun gecikmesine ve açılışın ertelenmesine yol açar.\""}
]},
{n:"9.3",h:"Olasılık–etki matrisi",blocks:[
 {t:"p",html:"Her riske aynı çabayı harcayamazsınız. <b>Nitel risk analizi</b>, riskleri olasılık ve etkilerine göre puanlayarak önceliklendirir. En yaygın araç 5×5'lik <b>olasılık–etki matrisidir</b>: olasılık ve etki 1'den 5'e puanlanır, çarpımları risk puanını verir."},
 {t:"table",head:["Puan","Olasılık","Etki (örnek: takvim)"],rows:[
  ["1","Çok düşük (neredeyse hiç)","Fark edilmeyecek kadar küçük gecikme"],
  ["2","Düşük","1–2 günlük gecikme, tamponla karşılanır"],
  ["3","Orta","Bir dönüm noktası kayar"],
  ["4","Yüksek","Etkinlik tarihi tehlikeye girer"],
  ["5","Çok yüksek (neredeyse kesin)","Etkinlik ertelenir veya iptal edilir"]]},
 {t:"widget",name:"calc",opts:{title:"Risk puanı",inputs:[
  {id:"o",label:"Olasılık (1–5)",min:1,max:5,step:1,value:3},
  {id:"e",label:"Etki (1–5)",min:1,max:5,step:1,value:4}],
  formula:"(function(){var p=o*e;return 'Risk puanı '+p+' / 25 → '+(p>=15?'Kırmızı bölge: yüksek öncelik. Yanıt planı ve sorumlu hemen belirlenmeli.':(p>=8?'Sarı bölge: orta öncelik. Yanıt planı hazırlanmalı, düzenli izlenmeli.':'Yeşil bölge: düşük öncelik. Risk kaydında tutulup dönemsel olarak izlenmeli.'));})()",
  result:"{r}",note:"Eşik değerler kurumdan kuruma değişir; burada 15 ve üzeri kırmızı, 8–14 sarı, 7 ve altı yeşil alındı. Olasılığı düşük ama etkisi 5 olan riskleri yalnızca puana bakarak gözden kaçırmayın: bir binada yangın gibi."}}
]},
{n:"9.4",h:"Beklenen parasal değer ve yedek akçe",blocks:[
 {t:"p",html:"<b>Nicel risk analizi</b>, riskin etkisini sayıyla ifade eder. En basit araç <b>beklenen parasal değerdir</b> (BPD): riskin gerçekleşme olasılığı ile gerçekleşirse yaratacağı parasal etkinin çarpımı."},
 {t:"box",lbl:"Formül",html:"BPD = Olasılık × Parasal etki<br>Tehditlerin BPD'si maliyet olarak, fırsatlarınki kazanç olarak yazılır. Tanımlanmış risklerin BPD'lerinin toplamı, <b>yedek akçe</b> için mantıklı bir başlangıç noktasıdır."},
 {t:"p",html:"Neden olasılıkla çarpıyoruz? Çünkü bütün riskler aynı anda gerçekleşmez. Üç risk için tam etkiyi ayırırsanız bütçe gereksiz şişer; hiç ayırmazsanız ilk sürprizde proje açık verir. BPD, tek tek projelerde değilse de birçok proje ve riskin ortalamasında doğru tutarı verir."},
 {t:"widget",name:"calc",opts:{title:"Üç risk için beklenen parasal değer",inputs:[
  {id:"p1",label:"Risk 1: Ses sistemi firmasının vazgeçmesi · olasılık",min:0,max:100,step:5,value:20,unit:"%"},
  {id:"e1",label:"Risk 1 · ek maliyet",min:0,max:50,step:1,value:12,unit:" bin TL"},
  {id:"p2",label:"Risk 2: Yağmur nedeniyle açık alanın kapanması · olasılık",min:0,max:100,step:5,value:30,unit:"%"},
  {id:"e2",label:"Risk 2 · ek çadır kirası",min:0,max:50,step:1,value:20,unit:" bin TL"},
  {id:"p3",label:"Risk 3: Bir sponsorun ek destek vermesi (fırsat) · olasılık",min:0,max:100,step:5,value:25,unit:"%"},
  {id:"e3",label:"Risk 3 · ek gelir",min:0,max:50,step:1,value:16,unit:" bin TL"}],
  formula:"(function(){var b1=p1/100*e1,b2=p2/100*e2,b3=p3/100*e3,f=function(x){return x.toFixed(1).replace('.',',');};return 'BPD₁ = '+f(b1)+' · BPD₂ = '+f(b2)+' · BPD₃ = −'+f(b3)+' (fırsat) → Net yedek akçe ≈ '+f(b1+b2-b3)+' bin TL';})()",
  result:"{r}",note:"Fırsatlar yedek akçeyi azaltır, ama ihtiyatlı kurumlar fırsatları genellikle bütçeye yazmaz; gerçekleşirse fazla olarak değerlendirir. Kendi tercihinizi ve gerekçenizi risk kaydına yazın."}}
]},
{n:"9.5",h:"Yanıt stratejileri",blocks:[
 {t:"p",html:"Risk önceliklendirildikten sonra bir yanıt seçilir. Tehditler ve fırsatlar için ayna simetrisinde stratejiler vardır. Bir strateji seçin."},
 {t:"choice",items:[
  {label:"Kaçınma",title:"Tehdit · riski ortadan kaldır",body:"Planı değiştirerek tehdidin gerçekleşme olasılığını sıfırlamak ya da projeyi ondan tamamen korumak.",ex:"Yağmur riski var: etkinliği açık alan yerine kapalı fuayede yapmak."},
  {label:"Aktarma",title:"Tehdit · etkiyi başkasına devret",body:"Riskin sonuçlarını ve sorumluluğunu üçüncü bir tarafa aktarmak. Risk ortadan kalkmaz, ama maliyetini başkası üstlenir.",ex:"Ekipman hasarı riskine karşı sigorta yaptırmak; sözleşmeye gecikme cezası koymak."},
  {label:"Azaltma",title:"Tehdit · olasılığı veya etkiyi düşür",body:"Riskin olasılığını veya gerçekleşirse etkisini kabul edilebilir düzeye indirmek için önlem almak.",ex:"Gönüllü riskine karşı gerekenden %30 fazla gönüllü kaydetmek."},
  {label:"Kabul",title:"Tehdit veya fırsat · bilinçli olarak üstlen",body:"Önlem almak riskin kendisinden pahalıysa riski kabul etmek. Aktif kabulde yedek akçe veya acil durum planı hazırlanır, pasif kabulde hiçbir şey yapılmaz.",ex:"Küçük bir baskı hatası riskini kabul edip birkaç fazla afiş bastırmak."},
  {label:"Yükseltme",title:"Tehdit veya fırsat · yetkiliye taşı",body:"Risk proje yöneticisinin yetkisini aşıyorsa sponsor ya da üst yönetime iletmek.",ex:"Fakültenin aynı tarihte başka bir etkinlik planladığı söylentisini dekanlığa iletmek."},
  {label:"Yararlanma · artırma · paylaşma",title:"Fırsat stratejileri",body:"Yararlanma fırsatın kesin gerçekleşmesini sağlamaya, artırma olasılığını veya etkisini büyütmeye, paylaşma ise fırsatı en iyi değerlendirebilecek bir ortakla birlikte kullanmaya yöneliktir.",ex:"Bir konuşmacının geniş takipçi kitlesi var: duyuru metnini ona önceden hazırlayıp göndermek (artırma)."}
 ]},
 {t:"widget",name:"classify",opts:{title:"Hangi strateji?",cats:["Kaçınma","Aktarma","Azaltma","Kabul"],items:[
  ["Riskli bir tedarikçi yerine güvenilir bir tedarikçiyle çalışmak",0],
  ["Kiralanan projeksiyon cihazı için sigorta yaptırmak",1],
  ["Kayıt sistemine yoğun saatlerden önce yük testi yapmak",2],
  ["Kuyrukta beş dakikalık bekleme olasılığını önlem almadan kabul etmek",3],
  ["Stant kurulumunu yükleniciye sabit fiyatlı ve gecikme cezalı sözleşmeyle vermek",1],
  ["Elektrik kesintisine karşı jeneratör bulundurmak",2],
  ["Kış aylarında açık hava etkinliği yapmaktan vazgeçmek",0],
  ["Bir panelistin son dakika iptali için yedek konuşmacı belirlemeden yedek akçe ayırmak",3]],
  note:"Kaçınma riski ortadan kaldırır, aktarma etkisini başkasına yükler, azaltma olasılığı veya etkiyi düşürür, kabul ise önlem almadan riski üstlenmektir. Jeneratör kesintiyi engellemez, etkisini azaltır."}}
]},
{n:"9.6",h:"Risk kaydı",blocks:[
 {t:"p",html:"Bütün bu bilgiler bir <b>risk kaydında</b> toplanır ve proje boyunca canlı tutulur. Risk yönetimi bir kez yapılıp rafa kaldırılan bir iş değildir: her haftalık toplantıda yeni riskler eklenir, kapananlar işaretlenir, puanlar güncellenir."},
 {t:"table",head:["No","Risk ifadesi","O","E","Puan","Strateji ve önlem","Sorumlu","Durum"],rows:[
  ["R1","Ara sınavlar nedeniyle gönüllüler son hafta görev alamayabilir; kurulum gecikir","4","4","16","Azaltma: %30 fazla gönüllü, kurulum görevlerini sınav öncesine almak","Gönüllü koordinatörü","Açık"],
  ["R2","Ses sistemi firması son anda vazgeçebilir; ek maliyet doğar","2","3","6","Aktif kabul: yedek firma listesi, yedek akçe","Teknik sorumlu","Açık"],
  ["R3","Bir sponsor ek destek verebilir; bütçe rahatlar","2","3","6","Artırma: sponsorlara erken ve ayrıntılı katılımcı profili göndermek","Sponsorluk sorumlusu","Açık"]]},
 {t:"box",lbl:"Dönem projesi · Adım 9",html:"Projeniz için en az 10 risk içeren bir risk kaydı hazırlayın; en az 2'si fırsat olsun. Her riski neden–olay–etki kalıbıyla yazın, olasılık ve etkiyi 1–5 arası puanlayın, kırmızı ve sarı bölgedeki riskler için bir strateji, somut bir önlem ve bir sorumlu belirleyin. Parasal etkisi tahmin edilebilen riskler için BPD hesaplayıp geçen haftaki bütçenizdeki yedek akçeyi güncelleyin."}
]},
{n:"9.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Risk","Gerçekleşirse hedefleri etkileyecek belirsiz olay veya koşul."],
  ["Sorun","Gerçekleşmiş bir risk ya da hâlihazırda var olan bir engel."],
  ["Fırsat","Olumlu etkisi olacak belirsiz olay."],
  ["Olasılık–etki matrisi","Riskleri olasılık ve etki puanlarının çarpımıyla önceliklendiren araç."],
  ["Beklenen parasal değer","Olasılık × parasal etki; yedek akçe hesabının temeli."],
  ["Aktarma","Riskin sonuçlarını sigorta veya sözleşmeyle üçüncü tarafa devretmek."],
  ["Aktif kabul","Önlem almadan riski üstlenip yedek akçe veya acil durum planı hazırlamak."],
  ["Risk kaydı","Risklerin, puanlarının, stratejilerinin ve sorumlularının canlı listesi."]
 ]}
]},
{n:"9.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Aşağıdakilerden hangisi bir sorundur, risk değildir?",o:["Tedarikçinin teslimatı geciktirebilmesi","Ana konuşmacının dün iptal ettiğini bildirmesi","Döviz kurunun yükselebilmesi","Gönüllülerin hastalanabilmesi"],a:1,e:"Gerçekleşmiş bir olay belirsiz değildir; artık yönetilmesi gereken bir sorundur."},
  {q:"Aşağıdaki ifadelerden hangisi risk kalıbına en uygun yazılmıştır?",o:["Bütçe konusunda ciddi sıkıntılar ve belirsizlikler yaşanması","Etkinlik günü hava durumunun genel olarak kötü olması","Yağmur yağarsa açık alan kapanabilir; etkinlik daralır","Projede çeşitli teknik aksaklıkların ve hataların olması"],a:2,e:"İyi bir risk ifadesi neden, belirsiz olay ve etkiyi birlikte içerir; diğerleri yalnızca başlıktır."},
  {q:"Olasılığı 4, etkisi 3 olan bir riskin puanı ve bölgesi (15+ kırmızı, 8–14 sarı) nedir?",o:["7, yeşil","12, sarı","16, kırmızı","12, kırmızı"],a:1,e:"4 × 3 = 12; 8 ile 14 arasında olduğu için sarı bölgededir."},
  {q:"Olasılığı %25, gerçekleşirse maliyeti 40 bin TL olan bir tehdidin beklenen parasal değeri nedir?",o:["10 bin TL","25 bin TL","40 bin TL","65 bin TL"],a:0,e:"0,25 × 40 = 10 bin TL."},
  {q:"Üç tehdidin BPD'leri 4, 6 ve 5 bin TL'dir. Yedek akçe için mantıklı başlangıç tutarı nedir?",o:["6 bin TL","15 bin TL","Üç riskin tam etkilerinin toplamı","Sıfır"],a:1,e:"Tanımlanmış risklerin BPD'lerinin toplamı (4 + 6 + 5) yedek akçe için başlangıç noktasıdır."},
  {q:"Ekipman hasarı riskine karşı sigorta yaptırmak hangi stratejidir?",o:["Kaçınma","Aktarma","Azaltma","Kabul"],a:1,e:"Risk ortadan kalkmaz, ama parasal sonucu sigorta şirketine aktarılır."},
  {q:"Elektrik kesintisi riskine karşı jeneratör bulundurmak hangi stratejidir?",o:["Kaçınma","Aktarma","Azaltma","Pasif kabul"],a:2,e:"Jeneratör kesintiyi engellemez, gerçekleşirse etkisini azaltır."},
  {q:"Bir konuşmacının geniş takipçi kitlesini, duyuru metnini önceden ona göndererek değerlendirmek hangi fırsat stratejisidir?",o:["Kaçınma","Aktarma","Artırma","Pasif kabul"],a:2,e:"Fırsatın gerçekleşme olasılığını ve etkisini büyütmeye yönelik adım artırmadır."},
  {q:"Risk kaydı ile ilgili hangisi doğrudur?",o:["Proje başında bir kez hazırlanıp arşivlenir","Proje boyunca güncellenen canlı bir belgedir","Yalnızca büyük projelerde gereklidir","Yalnızca tehditleri içerir"],a:1,e:"Riskler değişir; yeni riskler çıkar, eskileri kapanır. Kayıt her toplantıda güncellenmelidir."}
 ]}
]}
],
refs:[
 "Project Management Institute (2019). <i>The Standard for Risk Management in Portfolios, Programs, and Projects</i>. PMI.",
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Belirsizlik performans alanı.",
 "Hillson, D. (2004). <i>Effective Opportunity Management for Projects: Exploiting Positive Risk</i>. Marcel Dekker.",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 7: Risk yönetimi."
],
next:"Sonraki: Hafta 10 — Kaynaklar, ekip ve iletişim"
};
