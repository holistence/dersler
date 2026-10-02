window.WEEK={
id:"ge-10",code:"GE",course:"Genel Ekonomi",short:"Milli gelir",week:10,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Makroiktisada giriş",
title:"Makroekonomiye giriş ve <em>milli gelir</em>",
intro:"Bu hafta tek tek piyasalardan ekonominin bütününe geçiyoruz. Makroekonominin hangi soruları sorduğunu, hangi hedefleri ve araçları kullandığını, ekonominin toplam büyüklüğünün nasıl ölçüldüğünü ve bu ölçünün neleri gösteremediğini öğreneceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Makroekonominin konusunu mikroekonomiden ayırıp temel kavramlarını açıklayabilirsiniz.",
 "Makroekonominin dört hedefini ve başlıca politika araçlarını sayabilir, hedefler arasındaki çatışmaları örnekleyebilirsiniz.",
 "GSYH'yi üretim, gelir ve harcama yöntemleriyle hesaplayabilirsiniz.",
 "Nominal GSYH, reel GSYH ve GSYH deflatörünü birbirinden ayırıp reel büyümeyi hesaplayabilirsiniz.",
 "GSYH'den kullanılabilir kişisel gelire uzanan zinciri kurabilir, milli gelirin neyi ölçemediğini tartışabilirsiniz."
],
sections:[
{n:"10.1",h:"Ormana bakmak: makroekonominin konusu",blocks:[
 {t:"p",html:"Mikroekonomi tek tek ağaçlara, makroekonomi ormanın bütününe bakar. Elma fiyatının nasıl oluştuğu mikroekonominin, ülkedeki <b>fiyatlar genel düzeyinin</b> nasıl oluştuğu makroekonominin sorusudur. Makroekonomi toplulaştırılmış büyüklüklerle çalışır: milli gelir, toplam tüketim, toplam yatırım, işsizlik oranı, enflasyon, faiz ve döviz kuru."},
 {t:"p",html:"Makroekonomi bağımsız bir disiplin olarak 20. yüzyılda doğdu. Kitap üç dönüm noktasına dikkat çeker: hükümetlerin kriz ve savaş dönemlerinde ihtiyaç duyduğu bilgi nedeniyle ekonomik verilerin sistemli toplanması (milli gelir hesapları 1930'lar ve 1940'larda kurumsallaştı), bu veriler sayesinde konjonktür dalgalanmalarının düzenli bir olgu olarak görülmesi ve 1970'lerde Keynesyen iktisada yöneltilen eleştirilerle yeni okulların doğması."},
 {t:"timeline",items:[
  ["1776–1870","Klasik dönem","Adam Smith, David Ricardo, J. S. Mill. Piyasalar kendi kendini dengeler."],
  ["1870–1930","Neoklasik dönem","Alfred Marshall ve marjinalist iktisatçılar. Marjinal analiz ve arz-talep dengesi."],
  ["1936","Keynesyen devrim","J. M. Keynes, <i>Genel Teori</i>. Büyük Buhran sonrası toplam talep ve devlet müdahalesi.",1],
  ["1970'ler","Monetarizm ve Yeni Klasikler","Milton Friedman, Anna Schwartz; Robert Lucas, Thomas Sargent, Robert Barro. Para arzı ve rasyonel beklentiler."],
  ["1980–","Yeni Keynesyen iktisat","Gregory Mankiw, Joseph Stiglitz. Fiyat yapışkanlığı ve bilgi asimetrisi."]]},
 {t:"p",html:"Makroekonomik analiz bazı temel varsayımlara dayanır: <b>toplulaştırma</b> (bireyler yerine toplamlar), <b>ceteris paribus</b>, <b>kısa dönem – uzun dönem ayrımı</b> (kısa dönemde fiyatlar katı, uzun dönemde esnek) ve paranın uzun dönemde yansız olup olmadığı tartışması. Klasik ve Keynesyen okullar bu varsayımların bazılarında ayrışır."}
]},
{n:"10.2",h:"Hedefler ve araçlar",blocks:[
 {t:"p",html:"Makroekonominin nihai amacı yaşam standardını sürdürülebilir biçimde yükseltmektir. Bu amaç dört ana hedefe ayrılır. Bir hedef seçerek ne anlama geldiğini ve nasıl izlendiğini görün."},
 {t:"choice",items:[
  {label:"Büyüme",title:"Ekonomik büyüme",body:"Belirli bir dönemde üretilen mal ve hizmetlerin reel değerindeki artış. Kişi başına geliri ve üretim kapasitesini yükseltir.",ex:"İzlenen gösterge: reel GSYH'deki yıllık yüzde değişim (TÜİK)."},
  {label:"Tam istihdam",title:"Atıl emeğin en aza inmesi",body:"Çalışmaya hazır ve istekli olanların iş bulabilmesi. Hedef işsizliğin sıfırlanması değil, doğal oranda (geçici + yapısal) kalmasıdır.",ex:"İzlenen gösterge: işsizlik oranı (TÜİK Hanehalkı İşgücü Anketi)."},
  {label:"Fiyat istikrarı",title:"Düşük ve öngörülebilir enflasyon",body:"Paranın satın alma gücünü korur, uzun vadeli planlamayı mümkün kılar.",ex:"İzlenen gösterge: TÜFE yıllık değişimi; Türkiye'de sorumlu kurum TCMB."},
  {label:"Dış denge",title:"Sürdürülebilir cari denge",body:"İhracat ile ithalat arasındaki dengenin, cari açığın finanse edilebilir düzeyde tutulması.",ex:"İzlenen gösterge: ödemeler dengesi ve cari işlemler hesabı (TCMB)."}
 ]},
 {t:"p",html:"Hedefler her zaman uyumlu değildir. Büyümeyi hızlandırmak için uygulanan genişletici politikalar enflasyonu artırabilir; işsizliği düşürmeye yönelik talep artışı ithalatı büyütüp dış dengeyi bozabilir. Bu nedenle politika yapıcılar araçları bir <b>bileşim</b> hâlinde kullanır."},
 {t:"table",head:["Araç","Kim kullanır?","Nasıl işler?"],rows:[
  ["Maliye politikası","Hükümet","Vergiler ve kamu harcamalarıyla toplam talebi yönlendirir."],
  ["Para politikası","Merkez bankası","Politika faizi ve para arzıyla kredi koşullarını değiştirir."],
  ["Gelir politikası","Hükümet","Ücret ve fiyatlar üzerinde doğrudan ya da dolaylı kontrol."],
  ["Dış ticaret politikası","Hükümet","Gümrük vergisi, kota ve ihracat teşvikleri."],
  ["Yapısal politikalar","Hükümet","Eğitim, sağlık, altyapı ve teknoloji yatırımlarıyla uzun dönem kapasite."]]}
]},
{n:"10.3",h:"GSYH: ekonominin büyüklüğünü ölçmek",blocks:[
 {t:"def",html:"<b>Gayrisafi yurt içi hasıla (GSYH)</b>: Bir ülkenin sınırları içinde belirli bir dönemde üretilen nihai mal ve hizmetlerin piyasa değerleri toplamı.",src:"Tanımdaki üç anahtar: yurt içinde (kimin ürettiğine değil, nerede üretildiğine bakılır), nihai (ara mallar ayrıca sayılmaz) ve belirli bir dönem (genellikle bir yıl veya bir çeyrek)."},
 {t:"p",html:"Aynı büyüklük üç farklı kapıdan ölçülebilir; hepsi teoride aynı sonucu verir, çünkü bir tarafın harcaması bir başkasının gelirdir."},
 {t:"choice",items:[
  {label:"Üretim",title:"Katma değer yöntemi",body:"Her firmanın satış değerinden satın aldığı ara malların değeri çıkarılır; bulunan katma değerler toplanır. Böylece çift sayım önlenir.",ex:"Ekmek zinciri: çiftçi 0,50 + değirmenci 0,70 + fırıncı 1,30 + market 0,50 = 3,00 TL; ekmeğin nihai fiyatına eşit."},
  {label:"Gelir",title:"Faktör gelirleri yöntemi",body:"Üretime katılan faktörlerin gelirleri toplanır: ücret + faiz + rant + kâr; üzerine amortisman ve (dolaylı vergiler − sübvansiyonlar) eklenir.",ex:"500 + 75 + 25 + 150 + 50 + (80 − 30) = 850 milyar TL."},
  {label:"Harcama",title:"Nihai harcamalar yöntemi",body:"GSYH = C + I + G + (X − M). En sık kullanılan yöntemdir; bileşenleri makro analizde temel rol oynar.",ex:"600 + 200 + 180 + (150 − 130) = 1.000 milyar TL."}
 ]},
 {t:"widget",name:"calc",opts:{title:"Harcama yöntemiyle GSYH",inputs:[
  {id:"c",label:"Tüketim (C)",min:0,max:1000,step:10,value:600,unit:" mlr TL"},
  {id:"i",label:"Yatırım (I)",min:0,max:500,step:10,value:200,unit:" mlr TL"},
  {id:"g",label:"Kamu alımları (G)",min:0,max:500,step:10,value:180,unit:" mlr TL"},
  {id:"x",label:"İhracat (X)",min:0,max:500,step:10,value:150,unit:" mlr TL"},
  {id:"m",label:"İthalat (M)",min:0,max:500,step:10,value:130,unit:" mlr TL"}],
  formula:"c+i+g+x-m",result:"GSYH = <b>{r}</b> milyar TL",digits:0,
  note:"Varsayılan değerler kitaptaki örnektir. İthalatı artırın: GSYH düşer, çünkü ithal mallar yurt içinde üretilmemiştir ve C, I, G içinde zaten sayılmıştır."}},
 {t:"p",html:"Bir harcamanın GSYH'ye girip girmediğine karar vermek sanıldığı kadar kolay değildir. Aşağıdaki kalemleri sınıflandırın."},
 {t:"widget",name:"classify",opts:{title:"Bu yılın GSYH'sine dahil mi?",cats:["Dahil","Dahil değil"],items:[
  ["Bu yıl yurt içinde üretilip satılan yeni bir otomobil",0],
  ["İkinci el bir dairenin el değiştirmesi",1],
  ["Emekli maaşı ödemesi (transfer)",1],
  ["Bir firmanın yeni aldığı üretim makinesi",0],
  ["Fırıncının ekmek yapmak için aldığı un",1],
  ["Devletin öğretmenlere ödediği maaş",0],
  ["Evde ücretsiz yapılan yemek ve temizlik",1],
  ["Yurt dışına satılan Türk malı halı",0]],
  note:"İkinci el satışlar yeni üretim değildir; transferler karşılığında mal ya da hizmet üretilmez; ara mallar nihai malın fiyatında zaten vardır; piyasada alınıp satılmayan ev içi üretim ise ölçüme girmez."}}
]},
{n:"10.4",h:"Nominal, reel ve deflatör",blocks:[
 {t:"p",html:"GSYH bir yılda %15 arttıysa ekonomi gerçekten %15 daha fazla mı üretti? Bunun bir kısmı yalnızca fiyat artışı olabilir. Bu yüzden iki ölçü kullanılır."},
 {t:"list",items:[
  "<b>Nominal GSYH</b> = Σ (cari fiyat × cari miktar). Hem fiyat hem miktar değişiminden etkilenir.",
  "<b>Reel GSYH</b> = Σ (baz yıl fiyatı × cari miktar). Yalnızca miktar değişimini, yani gerçek büyümeyi gösterir.",
  "<b>GSYH deflatörü</b> = (Nominal GSYH ÷ Reel GSYH) × 100. Ekonomideki tüm nihai mal ve hizmetlerin fiyat düzeyini ölçer; TÜFE'den farklı olarak sepeti sabit değildir."]},
 {t:"table",head:["Yıl","Nominal GSYH","Reel GSYH","Deflatör","Reel büyüme","Enflasyon (deflatör)"],rows:[
  ["0","1.000","1.000","100,0","—","—"],
  ["1","1.150","1.050","109,5","%5,0","%9,5"]]},
 {t:"widget",name:"calc",opts:{title:"Deflatör ve reel büyüme",inputs:[
  {id:"n0",label:"Önceki yıl nominal GSYH",min:500,max:2000,step:10,value:1000},
  {id:"n1",label:"Bu yıl nominal GSYH",min:500,max:3000,step:10,value:1150},
  {id:"r1",label:"Bu yıl reel GSYH (baz: önceki yıl)",min:500,max:2000,step:10,value:1050}],
  formula:"('Deflatör '+(n1/r1*100).toFixed(1).replace('.',',')+' · Reel büyüme %'+((r1/n0-1)*100).toFixed(1).replace('.',',')+' · Nominal büyüme %'+((n1/n0-1)*100).toFixed(1).replace('.',',')).replace(/%-/g,'−%')",
  result:"{r}",
  note:"Önceki yıl baz yıl kabul edildiği için onun nominal ve reel değeri aynıdır. Nominal büyümeyi sabit tutup reel GSYH'yi düşürün: büyümenin ne kadarının fiyat artışından geldiği ortaya çıkar."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"TÜİK, GSYH'yi her çeyrek hem cari fiyatlarla hem de zincirlenmiş hacim endeksiyle (reel) açıklar. Haberlerde verilen \"büyüme oranı\" reel GSYH'deki değişimdir. Yüksek enflasyon dönemlerinde cari fiyatlı GSYH çok hızlı artar; bu artışı büyüme sanmak, haftanın en sık yapılan hatasıdır."}
]},
{n:"10.5",h:"GSYH'den harcanabilir gelire",blocks:[
 {t:"p",html:"GSYH hesaplandıktan sonra farklı amaçlara hizmet eden gelir göstergelerine adım adım geçilir. Kitaptaki varsayımsal verilerle zincir şöyledir (milyar TL):"},
 {t:"table",head:["Gösterge","Nasıl bulunur?","Değer"],rows:[
  ["GSYH","Harcama yöntemiyle","1.000"],
  ["GSMH","GSYH + net dış âlem faktör gelirleri (+20)","1.020"],
  ["Safi milli hasıla (SMH)","GSMH − amortisman (50)","970"],
  ["Milli gelir (MG)","SMH − dolaylı vergiler (80) + sübvansiyonlar (10)","900"],
  ["Kişisel gelir (KG)","MG − kurumlar vergisi ve dağıtılmayan kârlar (100) + transferler (120)","920"],
  ["Kullanılabilir kişisel gelir","KG − dolaysız vergiler (150)","770"]]},
 {t:"p",html:"GSYH ile GSMH arasındaki fark \"nerede\" ile \"kim\" sorusudur. Almanya'da çalışan bir Türk mühendisin ücreti Türkiye'nin GSMH'sine girer, GSYH'sine girmez. Kullanılabilir kişisel gelir ise hanehalkının tüketim ve tasarruf için gerçekten elinde kalan paradır; gelecek haftalarda tüketim fonksiyonunda bu büyüklüğü kullanacağız."}
]},
{n:"10.6",h:"Milli gelir neyi ölçemez?",blocks:[
 {t:"p",html:"GSYH ekonominin büyüklüğünü, büyüme hızını ve kişi başına ortalama çıktıyı gösteren vazgeçilmez bir göstergedir. Ama refahın tek ölçüsü değildir."},
 {t:"list",items:[
  "<b>Kayıt dışı ekonomi:</b> Elden ödemeler ve kayıt dışı çalıştırma istatistiklere yansımaz; GSYH olduğundan düşük ölçülür.",
  "<b>Ev içi üretim ve gönüllü emek:</b> Evde yapılan yemek, çocuk ve yaşlı bakımı refahı artırır ama piyasada alınıp satılmadığı için sayılmaz.",
  "<b>Çevresel bozulma:</b> Ormansızlaşma ve kirlilik katma değer olarak kaydedilir; doğal sermayedeki kayıp düşülmez.",
  "<b>Gelir dağılımı:</b> Aynı kişi başına GSYH'ye sahip iki ülkede yaşam çok farklı olabilir.",
  "<b>Kalite artışı ve boş zaman:</b> Aynı fiyata satılan telefonun kat kat gelişmesi veya çalışma saatlerinin kısalması tam yansıtılamaz.",
  "<b>Üretimin sosyal maliyeti:</b> Trafik sıkışıklığı daha çok yakıt satışı demektir; GSYH artar ama refah azalır."]},
 {t:"p",html:"Bu yüzden GSYH; gelir dağılımı ölçüleri, Birleşmiş Milletler Kalkınma Programı'nın (UNDP) <b>İnsani Gelişme Endeksi</b>, yaşam memnuniyeti anketleri ve çevresel göstergelerle birlikte okunmalıdır."}
]},
{n:"10.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Makroekonomi","Ekonominin bütününü toplulaştırılmış büyüklüklerle inceleyen dal."],
  ["GSYH","Yurt içinde bir dönemde üretilen nihai mal ve hizmetlerin piyasa değeri."],
  ["GSMH","Bir ülke vatandaşlarının yurt içinde ve dışında ürettiği nihai mal ve hizmetlerin değeri."],
  ["Katma değer","Satış değeri eksi satın alınan ara malların değeri."],
  ["Reel GSYH","Baz yıl fiyatlarıyla hesaplanan, yalnızca miktar değişimini gösteren GSYH."],
  ["GSYH deflatörü","Nominal GSYH'nin reel GSYH'ye oranı × 100; en geniş kapsamlı fiyat endeksi."],
  ["Transfer ödemesi","Karşılığında mal veya hizmet üretilmeyen ödeme; G'ye dahil edilmez."],
  ["Kullanılabilir kişisel gelir","Dolaysız vergiler ödendikten sonra hanehalkının elinde kalan gelir."]
 ]}
]},
{n:"10.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Aşağıdakilerden hangisi makroekonominin sorusudur?",o:["Bir fırının ekmek fiyatını nasıl belirlediği","Ülkede fiyatlar genel düzeyinin neden yükseldiği","Bir tüketicinin iki mal arasında nasıl seçim yaptığı","Bir firmanın kaç işçi çalıştıracağı"],a:1,e:"Genel fiyat düzeyi toplulaştırılmış bir büyüklüktür; diğer üçü tek bir birimin kararına ilişkindir."},
  {q:"Genişletici bir politikayla büyüme hızlanırken enflasyonun yükselmesi neyi gösterir?",o:["Makroekonomik hedeflerin çatışabileceğini","Para politikasının etkisiz olduğunu","GSYH'nin yanlış ölçüldüğünü","Dış dengenin her zaman iyileştiğini"],a:0,e:"Büyüme ve fiyat istikrarı hedefleri kısa dönemde birbirine ters düşebilir; bu yüzden politikalar bileşim hâlinde kullanılır."},
  {q:"C = 500, I = 150, G = 120, X = 100, M = 140 (milyar TL) ise GSYH kaçtır?",o:["730","770","910","1.010"],a:0,e:"500 + 150 + 120 + (100 − 140) = 730 milyar TL. Net ihracat negatif olduğu için GSYH'yi düşürür."},
  {q:"Katma değer yönteminin temel amacı nedir?",o:["Firmaların ödeyeceği vergileri hesaplamak","Ara malların iki kez sayılmasını önlemek","İthal edilen malları hesaptan dışlamak","Fiyat artışlarının etkisini arındırmak"],a:1,e:"Her aşamada yalnızca eklenen değer sayıldığında toplam, nihai malın değerine eşit olur ve çift sayım engellenir."},
  {q:"Emekli maaşları harcama yöntemindeki G kalemine neden dahil edilmez?",o:["Toplam içinde çok küçük kaldıkları için","Karşılığında mal veya hizmet üretilmediği için","Emekli maaşları vergiden muaf olduğu için","Yalnızca GSMH hesabına girdikleri için"],a:1,e:"G yalnızca devletin mal ve hizmet alımlarını kapsar; transferler gelirin el değiştirmesidir."},
  {q:"Nominal GSYH 1.000'den 1.210'a, reel GSYH 1.000'den 1.100'e çıktı. Reel büyüme ve deflatör enflasyonu yaklaşık kaçtır?",o:["Büyüme %21, enflasyon %0","Büyüme %10, enflasyon %10","Büyüme %11, enflasyon %10","Büyüme %10, enflasyon %21"],a:1,e:"Reel büyüme 1.100/1.000 − 1 = %10. Deflatör 1.210/1.100 × 100 = 110, yani %10 fiyat artışı."},
  {q:"GSYH deflatörünü TÜFE'den ayıran özellik hangisidir?",o:["Yalnızca gıda ve enerji fiyatlarını izler","Sabit sepet yerine tüm nihai malları kapsar","Her ay TÜFE'den önce açıklanır","İthal malların fiyatlarını da kapsar"],a:1,e:"Deflatör yurt içinde üretilen tüm nihai malları kapsar ve sepeti üretim yapısıyla değişir; ithal mallar kapsam dışıdır."},
  {q:"Kitaptaki zincirde SMH = 970, dolaylı vergiler = 80, sübvansiyonlar = 10 ise milli gelir kaçtır?",o:["890","900","960","1.060"],a:1,e:"MG = SMH − dolaylı vergiler + sübvansiyonlar = 970 − 80 + 10 = 900."},
  {q:"Almanya'da çalışan bir Türk mühendisin ücreti hangi göstergeye girer?",o:["Türkiye'nin GSYH'sine","Türkiye'nin GSMH'sine","Hiçbirine","Yalnızca Almanya'nın GSMH'sine"],a:1,e:"GSMH vatandaşlık ölçütüne dayanır; üretim Almanya'da yapıldığı için Almanya'nın GSYH'sine girer."},
  {q:"Bir şehirde trafik sıkışıklığı nedeniyle benzin tüketimi arttı. Bu durum GSYH ve refah için ne ifade eder?",o:["İkisi de artar","GSYH artar, refah azalabilir","GSYH azalır, refah artar","İkisi de azalır"],a:1,e:"Daha fazla yakıt satışı GSYH'ye eklenir, ama zaman kaybı ve kirlilik refahı düşürür; GSYH üretimin sosyal maliyetini göstermez."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 18–20, s. 198–218.",
 "Mankiw, N. G. (2018). <i>Principles of Economics</i> (8th ed.). Cengage Learning.",
 "Türkiye İstatistik Kurumu — Ulusal hesaplar: <a href=\"https://www.tuik.gov.tr\">tuik.gov.tr</a>",
 "UNDP — İnsani Gelişme Raporları: <a href=\"https://hdr.undp.org\">hdr.undp.org</a>"
],
next:"Sonraki: Hafta 11 — Büyüme, kalkınma, istihdam ve işsizlik"
};
