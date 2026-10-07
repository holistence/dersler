window.WEEK={
id:"py-12",code:"PY",course:"Proje Yönetimi",short:"Kazanılmış değer",week:12,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"İzleme ve kontrol",
title:"Plana göre neredeyiz? <em>Kazanılmış değer</em>",
intro:"Bu hafta projenin gerçek durumunu ölçmenin en güçlü aracı olan kazanılmış değer yönetimini (KDY) öğreneceksiniz: planlanan değer, kazanılmış değer ve gerçekleşen maliyetten başlayarak sapmaları, performans endekslerini ve proje sonu maliyet tahminini hesaplayacaksınız. Ardından değişiklik kontrol sürecini ve iyi bir durum raporunun nasıl yazıldığını göreceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada bir KDY hesaplayıcısı, bir hedef performans hesaplayıcısı, bir yorumlama alıştırması ve 10 soruluk bir test var.",
goals:[
 "Planlanan değer, kazanılmış değer ve gerçekleşen maliyeti tanımlayıp hesaplayabilirsiniz.",
 "Maliyet ve takvim sapmasını, CPI ve SPI endekslerini hesaplayıp yorumlayabilirsiniz.",
 "Proje sonu maliyet tahminini (EAC) farklı varsayımlarla hesaplayabilirsiniz.",
 "Bir değişiklik talebinin hangi adımlardan geçerek onaylandığını açıklayabilirsiniz.",
 "Kısa, sayıya dayalı ve karar odaklı bir durum raporu yazabilirsiniz."
],
sections:[
{n:"12.1",h:"Neden yalnızca harcamaya bakmak yetmez?",blocks:[
 {t:"p",html:"Bir projenin 4. ayındasınız. Bütçe 100 bin TL, bugüne kadar 40 bin TL harcanmış, planda da bu tarihe kadar 40 bin TL harcanması öngörülüyordu. Her şey yolunda mı? <b>Bilemeyiz.</b> Çünkü harcanan paranın karşılığında ne kadar iş yapıldığını bilmiyoruz. İşin yalnızca %25'i bitmişse proje hem pahalıya hem geç gidiyordur."},
 {t:"p",html:"Kazanılmış değer yönetimi bu sorunu çözer: kapsam, zaman ve maliyeti tek bir çerçevede birleştirir. Temel fikri basittir: tamamlanan işin, <b>planlanan bütçeye göre değerini</b> hesaplamak ve bunu hem plandaki değerle hem de gerçekte harcananla karşılaştırmak."}
]},
{n:"12.2",h:"Üç temel değer",blocks:[
 {t:"list",items:[
  "<b>BAC — Tamamlanmadaki bütçe:</b> Projenin toplam onaylanmış bütçesi (maliyet temel çizgisi).",
  "<b>PV — Planlanan değer:</b> Bugüne kadar planda yapılmış olması öngörülen işin bütçedeki değeri. \"Plana göre şimdiye kadar ne kadarlık iş bitmiş olmalıydı?\"",
  "<b>EV — Kazanılmış değer:</b> Bugüne kadar fiilen tamamlanan işin bütçedeki değeri. EV = Tamamlanma yüzdesi × BAC. \"Yaptığımız işin, bütçeye göre değeri ne?\"",
  "<b>AC — Gerçekleşen maliyet:</b> Bugüne kadar tamamlanan iş için fiilen harcanan para. \"Bu iş için gerçekte ne kadar harcadık?\""]},
 {t:"box",lbl:"Formüller",html:"<b>Maliyet sapması:</b> CV = EV − AC &nbsp;(negatifse bütçe aşımı)<br><b>Takvim sapması:</b> SV = EV − PV &nbsp;(negatifse gecikme)<br><b>Maliyet performans endeksi:</b> CPI = EV / AC &nbsp;(1'in altı: harcanan her liranın karşılığında daha az iş)<br><b>Takvim performans endeksi:</b> SPI = EV / PV &nbsp;(1'in altı: planlanandan daha yavaş ilerleme)"},
 {t:"p",html:"Bir örnekle bağlayalım. BAC = 100 bin TL. Bugün itibarıyla planda işin %40'ının bitmiş olması gerekiyordu: PV = 40. Fiilen %30'u bitti: EV = 30. Bunun için 36 bin TL harcandı: AC = 36. O hâlde CV = 30 − 36 = −6 (6 bin TL aşım), SV = 30 − 40 = −10 (10 bin TL'lik iş geride), CPI = 30 / 36 ≈ 0,83 (harcanan her 1 liranın karşılığında 83 kuruşluk iş), SPI = 30 / 40 = 0,75 (planlanan hızın %75'i)."}
]},
{n:"12.3",h:"KDY hesaplayıcısı",blocks:[
 {t:"p",html:"Sürgüleri değiştirerek dört temel göstergenin nasıl tepki verdiğini izleyin. Özellikle tamamlanma yüzdesini planlanan yüzdenin üzerine çıkarıp harcamayı düşürdüğünüzde ne olduğuna bakın."},
 {t:"widget",name:"calc",opts:{title:"Kazanılmış değer analizi",inputs:[
  {id:"bac",label:"Toplam bütçe (BAC)",min:10,max:1000,step:10,value:100,unit:" bin TL"},
  {id:"plan",label:"Bugüne kadar planlanan tamamlanma",min:0,max:100,step:1,value:40,unit:"%"},
  {id:"gercek",label:"Fiilen tamamlanan iş",min:0,max:100,step:1,value:30,unit:"%"},
  {id:"ac",label:"Gerçekleşen maliyet (AC)",min:1,max:1500,step:1,value:36,unit:" bin TL"}],
  formula:"(function(){var pv=bac*plan/100,ev=bac*gercek/100,cv=ev-ac,sv=ev-pv,cpi=ev/ac,spi=pv>0?ev/pv:NaN,eac=cpi>0?bac/cpi:NaN,f=function(x,d){return isFinite(x)?x.toFixed(d).replace('.',','):'—';};return 'PV '+f(pv,1)+' · EV '+f(ev,1)+' · CV '+f(cv,1)+' · SV '+f(sv,1)+' · CPI '+f(cpi,2)+' · SPI '+f(spi,2)+' · EAC ≈ '+f(eac,1)+' bin TL → '+(cpi>=1?'bütçenin altında':'bütçe aşımı')+', '+(spi>=1?'takvimin önünde':'takvimin gerisinde');})()",
  result:"{r}",note:"EAC burada BAC / CPI ile hesaplandı: bugüne kadarki maliyet verimliliğinin proje sonuna kadar süreceği varsayıldı. Örnekte proje yaklaşık 120 bin TL'ye mal olacak gibi görünüyor."}}
]},
{n:"12.4",h:"Göstergeleri yorumlamak",blocks:[
 {t:"p",html:"CPI ve SPI birlikte okunduğunda projenin dört olası durumundan birinde olduğu görülür. Yorumu bir adım ileri götürün: göstergeler size <i>ne</i> olduğunu söyler, <i>neden</i> olduğunu söylemez. SPI'nin düşük olmasının nedeni bir tedarikçinin gecikmesi mi, ekibin aşırı yüklenmesi mi, kapsamın büyümesi mi? Sayı, doğru soruyu sormanızı sağlar."},
 {t:"widget",name:"classify",opts:{title:"Proje durumu nedir?",cats:["Bütçe altı · önde","Bütçe altı · geride","Bütçe üstü · önde","Bütçe üstü · geride"],items:[
  ["CPI = 1,10 · SPI = 1,05",0],
  ["CPI = 0,85 · SPI = 0,90",3],
  ["CPI = 1,20 · SPI = 0,80",1],
  ["CPI = 0,90 · SPI = 1,15",2],
  ["EV = 50 · AC = 45 · PV = 60",1],
  ["EV = 70 · AC = 80 · PV = 60",2],
  ["EV = 40 · AC = 50 · PV = 55",3],
  ["EV = 65 · AC = 60 · PV = 62",0]],
  note:"CPI = EV/AC, SPI = EV/PV. Bütçe altı ama geride (CPI > 1, SPI < 1) durumu çoğu zaman kaynakların planlandığı kadar kullanılmadığını gösterir: para harcanmadığı için ucuz, iş yapılmadığı için geç. Bütçe üstü ama önde durumu ise fazla mesai gibi hızlandırma önlemlerine işaret edebilir."}}
]},
{n:"12.5",h:"Proje sonu tahmini",blocks:[
 {t:"p",html:"KDY'nin en değerli yanı geleceğe dair tahmin üretmesidir. <b>EAC</b> (tamamlanmadaki tahmin), projenin bugünkü bilgilerle toplam kaça mal olacağını; <b>ETC</b> (tamamlanmaya kadar tahmin) kalan iş için ne kadar daha harcanacağını; <b>VAC</b> (tamamlanmadaki sapma) ise proje sonunda bütçenin ne kadar aşılacağını gösterir. Hangi formülün kullanılacağı, bugüne kadarki performansın devam edip etmeyeceğine dair varsayıma bağlıdır."},
 {t:"choice",items:[
  {label:"EAC = BAC / CPI",title:"Verimlilik aynen sürecek",body:"Bugüne kadarki maliyet verimliliğinin projenin geri kalanında da aynı kalacağı varsayılır. En sık kullanılan formüldür.",ex:"BAC 100, CPI 0,83 → EAC ≈ 120."},
  {label:"EAC = AC + (BAC − EV)",title:"Sorun tek seferlikti",body:"Bugüne kadarki sapmanın tek seferlik bir olaydan kaynaklandığı ve kalan işin planlanan maliyetle yapılacağı varsayılır.",ex:"AC 36, BAC 100, EV 30 → EAC = 36 + 70 = 106."},
  {label:"EAC = AC + (BAC − EV) / (CPI × SPI)",title:"Maliyet ve takvim birlikte",body:"Hem maliyet hem takvim performansının kalan işi etkileyeceği varsayılır; örneğin gecikmeyi kapatmak için yapılacak fazla mesai maliyeti artıracaksa kullanılır.",ex:"36 + 70 / (0,83 × 0,75) ≈ 148."},
  {label:"ETC ve VAC",title:"Kalan ve sapma",body:"ETC = EAC − AC: kalan işin tahmini maliyeti. VAC = BAC − EAC: proje sonunda beklenen bütçe sapması; negatifse aşım vardır.",ex:"EAC 120, AC 36 → ETC = 84; VAC = 100 − 120 = −20."}
 ]},
 {t:"p",html:"Bir de şu soru sorulur: Kalan işi mevcut bütçeyle bitirmek için bundan sonra ne kadar verimli çalışmamız gerekiyor? Yanıtı <b>tamamlanma performans endeksi</b> verir: TCPI = (BAC − EV) / (BAC − AC). Kalan iş, kalan paraya bölünür."},
 {t:"widget",name:"calc",opts:{title:"Hedef performans (TCPI)",inputs:[
  {id:"B",label:"Toplam bütçe (BAC)",min:10,max:1000,step:10,value:100,unit:" bin TL"},
  {id:"E",label:"Kazanılmış değer (EV)",min:0,max:1000,step:1,value:30,unit:" bin TL"},
  {id:"A",label:"Gerçekleşen maliyet (AC)",min:0,max:1000,step:1,value:36,unit:" bin TL"}],
  formula:"A>=B?'Bütçe tükenmiş: kalan iş mevcut bütçeyle bitirilemez.':(function(){var t=(B-E)/(B-A);return 'TCPI = '+t.toFixed(2).replace('.',',')+' → '+(t>1.05?'Kalan işi bütçeyle bitirmek için şimdiye kadarkinden belirgin biçimde verimli çalışmak gerekiyor; gerçekçi değilse ek bütçe veya kapsam görüşmesi yapılmalı.':(t>1?'Biraz daha verimli çalışmak gerekiyor.':'Mevcut verimlilik yeterli.'));})()",
  result:"{r}",note:"Örnekte TCPI ≈ 1,09: bugüne kadar CPI 0,83 iken kalan işte 1,09 verimlilik beklemek iyimserdir. Bu durumda sponsorla erkenden konuşmak, son ayda sürpriz yaşatmaktan iyidir."}}
]},
{n:"12.6",h:"Değişiklik kontrolü ve durum raporu",blocks:[
 {t:"p",html:"Sapmalar düzeltici önlem, kapsam istekleri ise değişiklik talebi gerektirir. <b>Bütünleşik değişiklik kontrolü</b>, bütün değişikliklerin aynı yoldan geçmesini sağlar: talep yazılı olarak alınır, kapsam, süre, maliyet, kalite ve risk etkisi analiz edilir, yetkili kişi ya da <b>değişiklik kontrol kurulu</b> karar verir, onaylanırsa plan ve temel çizgiler güncellenir ve ilgili herkese duyurulur. Onaylanmayan değişiklik de kayda geçirilir."},
 {t:"p",html:"İzlemenin sonuçları <b>durum raporuyla</b> paylaşılır. İyi bir durum raporu kısa, sayıya dayalı ve karar odaklıdır. Sık kullanılan bir biçim trafik ışığı (yeşil, sarı, kırmızı) gösterimidir; ama renk tek başına yetmez, nedenini ve ne yapılacağını söylemek gerekir."},
 {t:"box",lbl:"Örnek durum raporu (iki haftalık)",html:"<b>Genel durum: Sarı.</b> CPI 0,94 · SPI 0,88.<br><b>Bu dönem tamamlananlar:</b> Afişler basıldı; 9 firma katılımını onayladı.<br><b>Sorun:</b> Firma onayları planın 3 firma gerisinde (kritik yol). Neden: iki büyük firmanın İK birimi bütçe onayı bekliyor.<br><b>Önlem:</b> Sponsorluk sorumlusuna bir gönüllü desteği verildi; yedek listedeki 4 firmayla görüşme başlatıldı.<br><b>Karar beklenen konu:</b> 15 Mart'a kadar 12 firmaya ulaşılamazsa stant sayısının 30'dan 25'e düşürülmesi. Sponsor onayı gerekiyor."},
 {t:"box",lbl:"Dönem projesi · Adım 12",html:"Projenizin ortasında bir tarih seçin ve gerçekçi bir senaryo kurgulayın: hangi iş paketleri ne kadar tamamlandı, ne kadar harcandı? Bu senaryoyla PV, EV, AC, CV, SV, CPI, SPI, EAC ve TCPI değerlerini hesaplayın. Sonuçları yorumlayan, yukarıdaki örnek biçiminde yarım sayfalık bir durum raporu yazın ve bir değişiklik talebi formu doldurun."}
]},
{n:"12.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["PV — Planlanan değer","Bugüne kadar planda yapılmış olması gereken işin bütçedeki değeri."],
  ["EV — Kazanılmış değer","Fiilen tamamlanan işin bütçedeki değeri: tamamlanma % × BAC."],
  ["AC — Gerçekleşen maliyet","Tamamlanan iş için fiilen harcanan para."],
  ["CPI","EV / AC; 1'in altı bütçe aşımını gösterir."],
  ["SPI","EV / PV; 1'in altı gecikmeyi gösterir."],
  ["EAC","Projenin bugünkü bilgilerle toplam tahmini maliyeti; sık kullanılan biçimi BAC / CPI."],
  ["TCPI","Kalan işi kalan bütçeyle bitirmek için gereken verimlilik: (BAC − EV) / (BAC − AC)."],
  ["Değişiklik kontrol kurulu","Değişiklik taleplerini değerlendirip karar veren yetkili grup."]
 ]}
]},
{n:"12.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Bir projede yalnızca planlanan ve gerçekleşen harcamayı karşılaştırmanın temel eksikliği nedir?",o:["Projenin toplam bütçesini hiç göstermemesi","Harcamanın karşılığındaki işi göstermemesi","Hesaplamasının uzman bilgisi gerektirmesi","Yalnızca kamu projelerinde geçerli olması"],a:1,e:"Harcama plana uysa bile iş geride olabilir; kazanılmış değer bu boşluğu doldurur."},
  {q:"BAC 200 bin TL, işin %25'i tamamlandı. Kazanılmış değer (EV) nedir?",o:["25 bin TL","50 bin TL","150 bin TL","200 bin TL"],a:1,e:"EV = 0,25 × 200 = 50 bin TL."},
  {q:"EV = 50, AC = 60 ise maliyet sapması ve CPI nedir?",o:["CV = 10, CPI = 1,20","CV = −10, CPI ≈ 0,83","CV = −10, CPI = 1,20","CV = 10, CPI ≈ 0,83"],a:1,e:"CV = 50 − 60 = −10 (aşım); CPI = 50 ÷ 60 ≈ 0,83."},
  {q:"EV = 45, PV = 60 ise SPI nedir ve ne anlama gelir?",o:["1,33; proje takvimin önünde","0,75; proje takvimin gerisinde","0,75; proje bütçenin altında","1,33; proje bütçe aşımında"],a:1,e:"SPI = 45 ÷ 60 = 0,75; planlanan hızın %75'iyle ilerleniyor."},
  {q:"CPI = 1,15 ve SPI = 0,85 olan bir proje için hangisi doğrudur?",o:["Bütçe üstü, takvimin önünde","Bütçe altı, takvimin gerisinde","Bütçe üstü, takvimin gerisinde","Bütçe altı, takvimin önünde"],a:1,e:"CPI > 1 bütçenin altında, SPI < 1 takvimin gerisinde olunduğunu gösterir."},
  {q:"BAC = 300 bin TL ve CPI = 0,75 ise, verimliliğin süreceği varsayımıyla EAC nedir?",o:["225 bin TL","300 bin TL","375 bin TL","400 bin TL"],a:3,e:"EAC = BAC ÷ CPI = 300 ÷ 0,75 = 400 bin TL."},
  {q:"EAC = 400, AC = 150 ise kalan iş için tahmini maliyet (ETC) nedir?",o:["150","250","400","550"],a:1,e:"ETC = EAC − AC = 400 − 150 = 250."},
  {q:"BAC = 100, EV = 40, AC = 50 ise TCPI nedir?",o:["0,80","1,00","1,20","1,25"],a:2,e:"TCPI = (100 − 40) ÷ (100 − 50) = 60 ÷ 50 = 1,20; kalan işte şimdiye kadarkinden çok daha verimli olmak gerekir."},
  {q:"Bir sapmanın tek seferlik bir olaydan kaynaklandığı düşünülüyorsa hangi EAC formülü uygundur?",o:["BAC / CPI","AC + (BAC − EV)","AC + (BAC − EV) / (CPI × SPI)","BAC × SPI"],a:1,e:"Kalan işin planlanan maliyetle yapılacağı varsayılırsa bugüne kadarki harcamaya kalan işin bütçesi eklenir."},
  {q:"Bir değişiklik talebi değişiklik kontrol kurulunca reddedildi. Doğru uygulama hangisidir?",o:["Talep kayıtlardan tamamen silinir","Talep ve ret kararı gerekçesiyle kayda geçirilir","Ekip değişikliği yine de sessizce uygular","Proje durdurulur"],a:1,e:"Onaylanan ya da reddedilen bütün talepler kayıt altına alınır; ileride aynı tartışmanın tekrarlanmasını önler."}
 ]}
]}
],
refs:[
 "Project Management Institute (2019). <i>The Standard for Earned Value Management</i>. PMI.",
 "Fleming, Q. W., Koppelman, J. M. (2010). <i>Earned Value Project Management</i>, 4. baskı. PMI.",
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Ölçüm performans alanı.",
 "Larson, E. W., Gray, C. F. <i>Project Management: The Managerial Process</i>. McGraw-Hill. Bölüm 13: İlerleme ve performans ölçümü."
],
next:"Sonraki: Hafta 13 — Çevik proje yönetimi: Scrum ve Kanban"
};
