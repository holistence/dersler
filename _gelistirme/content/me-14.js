window.WEEK={
id:"me-14",code:"ME",course:"Medya Ekonomisi",short:"Geleceğin medyası",week:14,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Gelecek trendleri",
title:"Geleceğin medyası: yaratıcı yıkım ve <em>yapay zekâ</em>",
intro:"Son haftada geleceğe bakıyoruz. Önümüzdeki on yılın üç büyük \"savaş alanını\", Schumpeter'in yaratıcı yıkım kavramıyla Netflix'in Blockbuster'ı, akış hizmetlerinin CD dükkânlarını nasıl ortadan kaldırdığını ve yapay zekânın bir sonraki büyük diziyi yazıp yazamayacağını tartışacağız. Bölümün sonunda dersin bütün kavramlarını birbirine bağlayan bir özet var. Okuma süresi yaklaşık 40 dakika; sayfada bir zaman şeridi, iki hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma paneli ve 10 soruluk bir test var.",
goals:[
 "Kitabın öngördüğü üç savaş alanını (metaverse, insan ve yapay zekâ, abonelik savaşları) gelir modelleri üzerinden açıklayabilirsiniz.",
 "Yaratıcı yıkım kavramını tanımlayıp Netflix–Blockbuster ve akış–CD örnekleriyle aşamalarını gösterebilirsiniz.",
 "Abonelik yorgunluğunu ve yeniden paketleme (rebundling) eğilimini basit bir maliyet hesabıyla değerlendirebilirsiniz.",
 "Yapay zekânın medya üretiminde maliyeti düşürebileceği alanları ve insan yaratıcılığının sınırlarını tartışabilirsiniz.",
 "Dönem boyunca öğrendiğiniz kavramları yeni bir medya olgusunu analiz etmek için birlikte kullanabilirsiniz."
],
sections:[
{n:"14.1",h:"Teknoloji medyanın rotasını yeniden çizer",blocks:[
 {t:"p",html:"Kitap son bölümü bir sözle açar: \"Gelecek, bugünü anlamayanların elinden kayıp gider.\" Matbaayla başlayan dönüşüm radyo ve televizyonla hızlandı, internet ve sosyal medyayla bambaşka bir boyuta taşındı. Bugün yapay zekâ, artırılmış gerçeklik ve blokzincir gibi teknolojiler yalnızca üretim biçimlerini değil, iş modellerini ve tüketim alışkanlıklarını da değiştiriyor."},
 {t:"p",html:"Yapay zekâ destekli algoritmalar hangi haberin görüneceğine saniyeler içinde karar veriyor; sanal gerçeklik izleyiciyi deneyimin bir parçası yapıyor; blokzincir tabanlı sistemler içerik sahipliğini ve telif haklarını yeniden tanımlamaya aday. Kitabın sorusu şu: Geleceğin teknolojilerini biz mi şekillendireceğiz, yoksa onlar mı bizim düşünme ve yaşama biçimimizi belirleyecek?"}
]},
{n:"14.2",h:"Önümüzdeki on yılın üç savaş alanı",blocks:[
 {t:"p",html:"Geleceği birebir tahmin etmek imkânsızdır, ama bugünkü ekonomik ve teknolojik eğilimlere bakarak kitap üç büyük savaş alanı öngörür. Her birinin arkasında aynı soru vardır: <b>değer ve para kimin elinde toplanacak?</b>"},
 {t:"choice",items:[
  {label:"Metaverse",title:"Mekânın sahibi kim olacak?",body:"Bugün savaşı en çok kullanıcıya sahip uygulama kazanıyor. Kitaba göre geleceğin savaşı, içinde en çok vakit geçirdiğimiz sanal evrenin sahibi olmak üzerine olabilir. Meta, Apple (Vision Pro) ve Epic Games (Fortnite) gibi şirketlerin yatırımları bu yönü gösteriyor. Gelir modeli abonelik ve reklamdan sanal arsa, avatar kıyafetleri (skin) ve sanal konser biletine kayar.",ex:"Kitabın yorumu: kendi para birimi ve kuralları olan bir sanal evrenin sahibi, algoritmik kapı bekçiliğinin bir üst düzeyine ulaşır."},
  {label:"İnsan ve yapay zekâ",title:"Yaratıcılığın değeri ne olacak?",body:"Yapay zekânın içerik üretebildiğini biliyoruz. Asıl soru, insan yapımı ile yapay zekâ üretimi içerik arasındaki ekonomik değer farkının ne olacağıdır. Bir olasılık hiper-kişiselleştirmedir: herkes için aynı gişe filmi yerine her izleyiciye özel üretilmiş mikro filmler. Öbür olasılık, yapay zekâ içeriği ucuzladıkça \"insan yapımı\"nın el yapımı bir çanta gibi premium bir kalite işaretine dönüşmesidir.",ex:"Telif hukuku da \"yapay zekânın ürettiği eserin sahibi kim?\" sorusuyla yeniden yazılmak zorunda kalacak."},
  {label:"Abonelik savaşları",title:"Paranın yolu nereden geçecek?",body:"\"Abonelik yorgunluğu\" şimdiden başladı: kimse onlarca platforma ayrı ayrı ödeme yapmak istemiyor. Kitap iki olası gelecek görür: Apple, Amazon veya Google gibi devlerin müzik, film, haber, oyun ve bulut depolamayı tek ücrette birleştirdiği \"büyük yeniden paketleme\" (rebundling); ya da aracıların zayıfladığı ve izleyicilerin sevdikleri 10–15 yaratıcıyı doğrudan desteklediği bir model.",ex:"Birincisi kolaylık getirir ama gücü birkaç devde toplar; ikincisi gücü dağıtır ama tüketiciye daha çok karar yükü bindirir."}
 ]},
 {t:"p",html:"Abonelik yorgunluğu basit bir hesap sorusudur. Platform sayısı arttıkça toplam fatura büyür, ama her platformu izlemeye ayrılan zaman küçülür. Bir paket (bundle), tüketicinin her platforma tek tek ödeyeceğinden daha azını isteyerek onu kazanmaya çalışır."},
 {t:"widget",name:"calc",opts:{title:"Ayrı abonelikler mi, süper paket mi?",inputs:[
  {id:"sayi",label:"Abone olunan platform sayısı",min:1,max:15,step:1,value:5},
  {id:"fiyat",label:"Platform başına ortalama aylık ücret",min:50,max:400,step:10,value:150,unit:" TL"},
  {id:"indirim",label:"Paketin toplam fiyata göre indirimi",min:0,max:60,step:5,value:30,unit:"%"},
  {id:"saat",label:"Ayda toplam izleme süresi",min:5,max:150,step:5,value:40,unit:" saat"}],
  formula:"(function(){var ayri=sayi*fiyat;var paket=ayri*(1-indirim/100);var f=function(x){return Math.round(x).toLocaleString('tr-TR');};return 'ayrı ayrı '+f(ayri)+' TL · paket '+f(paket)+' TL · yıllık tasarruf '+f((ayri-paket)*12)+' TL · izleme saati başına maliyet '+f(ayri/saat)+' TL → '+f(paket/saat)+' TL';})()",
  result:"Aylık maliyet: {r}",note:"Rakamlar örnektir. İzleme süresi sabitken platform sayısını artırın: saat başına maliyet hızla yükselir; abonelik yorgunluğunun ekonomik karşılığı budur. Paketi sunan şirket bu tasarrufu tüketiciye verirken karşılığında tüketicinin bütün harcamasını ve verisini tek elde toplar."}}
]},
{n:"14.3",h:"Yaratıcı yıkım: Schumpeter'in fırtınası",blocks:[
 {t:"def",html:"<b>Yaratıcı yıkım</b> (creative destruction): Yeni bir teknolojinin, ürünün veya iş modelinin mevcut pazara yalnızca eklenmeyip eski teknolojiyi, ürünü ve iş modelini yıkarak onun yerini alması süreci.",src:"Joseph A. Schumpeter, <i>Capitalism, Socialism and Democracy</i> (1942)."},
 {t:"p",html:"Schumpeter'e göre kapitalizmin motoru sakin ve yavaş bir ilerleme değil, sürekli bir endüstriyel devrim fırtınasıdır. Süreç <b>yaratıcıdır</b>, çünkü sonunda daha verimli bir sistem doğar; aynı zamanda <b>yıkıcıdır</b>, çünkü bu süreçte mevcut şirketler, meslekler ve alışkanlıklar ortadan kalkar."},
 {t:"p",html:"Netflix ile Blockbuster vakası teorinin ders kitabı örneğidir. Aşağıdaki zaman şeridi kitaptaki aşamaları tarihleriyle gösteriyor."},
 {t:"timeline",items:[
  ["1985","Eski düzen: Blockbuster","Binlerce fiziksel dükkân, sınırlı raf, günlük kiralama. Gelirin önemli bir kısmı müşterilerin nefret ettiği gecikme cezalarından geliyordu. Yüksek kira maliyeti, sınırlı seçenek; uzun kuyruk yok."],
  ["1997–1999","Netflix: DVD postalama","1997'de kurulan Netflix, DVD'leri postayla gönderdi ve 1999'da aylık sabit abonelik modeline geçerek gecikme cezasını kaldırdı. İlk darbe.",1],
  ["2007","Netflix: akış","İnternet hızlandıkça Netflix filmleri anında izlemeyi sağlayan akış hizmetine geçti. Fiziksel medya anlamını yitirmeye başladı.",1],
  ["2010","Yaratıcı yıkım anı","Dev dükkân ağına ve kemikleşmiş iş modeline bağlı kalan Blockbuster iflas başvurusunda bulundu. En büyük gücü, binlerce dükkân, en büyük yükü olmuştu."],
  ["2008 →","Aynı döngü müzikte","2008'de kullanıma açılan Spotify'ın \"müziğe erişim\" modeli, CD dükkânlarının \"müziğe sahip olma\" modelini yıktı."]
 ]},
 {t:"p",html:"Kitabın vardığı ders: medya ekonomisinde istikrar bir yanılsamadır. Bugünün devleri olan Netflix'in veya Spotify'ın da yarın yapay zekâ ya da metaverse gibi yeni bir fırtınayla yıkılmayacağının hiçbir garantisi yoktur. Aşağıdaki örneklerde kimin yıkan, kimin yıkılan olduğunu belirleyin."},
 {t:"widget",name:"classify",opts:{title:"Yaratıcı yıkımda kim hangi tarafta?",cats:["Yıkılan eski düzen","Yaratıcı yenilik"],items:[
  ["Fotoğraf filmi ve banyo laboratuvarları",0],
  ["Dijital fotoğraf makinesi ve akıllı telefon kamerası",1],
  ["Gecikme cezalı video kiralama dükkânları",0],
  ["Aylık sabit ücretli akış hizmeti",1],
  ["Gazetelerin seri ilan sayfaları",0],
  ["Çevrimiçi ilan siteleri",1],
  ["Müzik CD'si satan dükkânlar",0],
  ["Müziğe erişim satan akış platformları",1]],note:"Kitabın sorusundaki Kodak örneği ilginçtir: ilk dijital fotoğraf makinesi prototipi 1975'te Kodak'ta geliştirildi, ama şirket film satışından gelen gelirini korumak için bu teknolojiye geç yöneldi ve 2012'de iflas koruması istedi. Yaratıcı yıkım çoğu zaman yeniliği bilmeyenleri değil, eski gelirine bağlı kalanları yıkar."}}
]},
{n:"14.4",h:"Bir sonraki Game of Thrones'u yapay zekâ yazabilir mi?",blocks:[
 {t:"p",html:"Yapay zekâ medya üretim süreçlerini şimdiden dönüştürüyor. Kitap iki büyük ekonomik potansiyel görür."},
 {t:"list",items:[
  "<b>Verimlilik ve maliyet düşüşü:</b> Senaryo ilk taslakları, görsel efektler (CGI), afiş ve fragman gibi pazarlama malzemeleri, hatta müzik besteleri daha hızlı ve ucuz üretilebilir.",
  "<b>Kişiselleştirme:</b> Netflix'in \"beğenebileceğin diziler\" önerisini yapan algoritma bir yapay zekâ uygulamasıdır. İzleyiciyi platformda daha uzun tutarak abonelik modelini güçlendirir."
 ]},
 {t:"p",html:"Ancak kültürel bir fenomen olacak, karmaşık karakterlere, derin duygusal çatışmalara ve öngörülemez olay örgüsüne sahip bir eser yaratmaya gelince, kitaba göre mevcut yapay zekâ yetersiz kalıyor. Yapay zekâ mevcut verilerden öğrenerek kalıpları taklit etmekte çok başarılıdır, ama özgünlük, ironi ve insan ruhunun derinliklerini anlamada henüz insanın yerini alamaz."},
 {t:"p",html:"Kitabın en olası gördüğü senaryo, yapay zekânın yazarın veya yönetmenin yerini alması değil, onun en güçlü <b>yardımcı pilotu</b> olmasıdır. Ekonomik olarak en büyük verimlilik, insan yaratıcılığı ile yapay zekânın hesaplama gücünü birleştirebilen stüdyolardan gelecektir. Hesaplayıcıyla bu iş bölümünün bir yapımın maliyetine etkisini görün."},
 {t:"widget",name:"calc",opts:{title:"Yardımcı pilot: yapay zekâ bir yapımın maliyetini ne kadar düşürür?",inputs:[
  {id:"butce",label:"Bir bölümün toplam bütçesi",min:1,max:50,step:1,value:10,unit:" milyon TL"},
  {id:"senaryo",label:"Bütçede senaryo geliştirmenin payı",min:1,max:30,step:1,value:8,unit:"%"},
  {id:"efekt",label:"Bütçede görsel efekt ve kurgu sonrası payı",min:0,max:50,step:1,value:20,unit:"%"},
  {id:"tanitim",label:"Bütçede tanıtım malzemesinin payı",min:0,max:30,step:1,value:10,unit:"%"},
  {id:"tasarruf",label:"Yapay zekânın bu kalemlerde sağladığı tasarruf",min:0,max:80,step:5,value:30,unit:"%"}],
  formula:"(function(){var pay=(senaryo+efekt+tanitim)/100;var t=butce*pay*tasarruf/100;var f=function(x,d){return x.toLocaleString('tr-TR',{maximumFractionDigits:d});};return f(t,2)+' milyon TL (toplam bütçenin %'+f(t/butce*100,1)+'\\'i)';})()",
  result:"Bölüm başına tasarruf: {r}",note:"Rakamlar örnektir. Oyuncu ücretleri, çekim ve ekip giderleri hesapta tutulmadığı için tasarruf toplam bütçede sınırlı kalır. Bu, 2023 grevlerinde yaratıcıların neden en çok yazı ve dijital suret konusunda koruma istediğini de açıklar: tasarrufun en kolay sağlanacağı kalemler doğrudan onların emeğidir."}},
 {t:"box",lbl:"Emek boyutu",html:"Dokuzuncu haftada gördüğümüz 2023 WGA ve SAG-AFTRA grevleri, yapay zekâ tartışmasının ekonomik tarafını gösterir. Teknoloji pastayı büyütür, ama dilimlerin nasıl paylaşılacağını teknoloji değil, pazarlık gücü ve kurallar belirler. Yardımcı pilot senaryosunun gerçekleşip gerçekleşmeyeceği de büyük ölçüde bu kurallara bağlıdır."}
]},
{n:"14.5",h:"Sonuç: medya ekonomisi gözlüğü",blocks:[
 {t:"p",html:"Kitap, okura bir \"medya ekonomisi gözlüğü\" hediye etme hedefiyle başlamıştı. On dört hafta boyunca bu gözlüğün camlarını tek tek taktık. Artık bir YouTube videosuna bakarken yalnızca içeriği değil, üreticinin gelir modelini; bir sinema bileti alırken ilk kopya maliyetini ve gişe filmi stratejisini; bir haber sitesinin ödeme duvarını ve sevdiğiniz bir dizinin neden aniden kaldırıldığını görebilirsiniz."},
 {t:"table",head:["Gördüğünüz olgu","Sorulacak soru","Kullanacağınız kavramlar"],rows:[
  ["Ücretsiz bir uygulama","Ürün kim, müşteri kim?","Çift taraflı piyasa, dikkat ekonomisi, verinin metalaşması"],
  ["Pahalı bir dizi ve ucuz kopyası","Maliyet nerede, kopya neden bedava?","İlk kopya maliyeti, rakipsizlik, korsan"],
  ["Bir platformun büyümesi","Kullanıcı arttıkça değer neden artıyor?","Ağ etkileri, uzun kuyruk, kapı bekçiliği"],
  ["Bir sanatçının düşük geliri","Para hangi havuzdan, hangi kurala göre dağılıyor?","Pro-rata, süperstar ekonomisi"],
  ["Bir haberin yayınlanmaması","Kim ödüyor, kim sahip?","Reklam bağımlılığı, holding medyası, propaganda modeli"],
  ["Eski bir devin çöküşü","Hangi yenilik hangi iş modelini yıktı?","Yaratıcı yıkım, kablolu TV'den akışa geçiş"]]},
 {t:"p",html:"Medya endüstrisi durmuyor: yarın yeni bir platform, öbür gün yapay zekânın yarattığı bambaşka bir format ortaya çıkabilir. Ama artık bu değişimleri anlamak, analiz etmek ve sorgulamak için temel araçlara sahipsiniz. Kitabın son cümlesiyle: merak etmeye, sorgulamaya ve ekranın arkasını görmeye devam edin."}
]},
{n:"14.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Metaverse","İçinde avatarlarla gezilen, alışveriş ve etkinliklerin yapıldığı üç boyutlu sanal dünyalar."],
  ["Hiper-kişiselleştirme","İçeriğin her izleyici için ayrı, anlık olarak üretilmesi."],
  ["Abonelik yorgunluğu","Çok sayıda ayrı abonelik ödemekten doğan maliyet ve karar yükü."],
  ["Yeniden paketleme (rebundling)","Farklı hizmetlerin tek bir ücret karşılığında paket olarak sunulması."],
  ["Yaratıcı yıkım","Yeniliğin eski teknoloji ve iş modellerini yıkarak yerini alması (Schumpeter)."],
  ["Erişim modeli","Ürüne sahip olmak yerine ona erişim için ödeme yapılması (akış hizmetleri)."],
  ["Yardımcı pilot","Yapay zekânın yaratıcının yerini almadan ona destek veren araç olarak kullanılması."],
  ["İnsan yapımı premium","Yapay zekâ içeriği ucuzladıkça insan emeğinin kalite işaretine dönüşmesi."]
 ]}
]},
{n:"14.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Kitaba göre bir metaverse evreninde öne çıkması beklenen gelir modeli hangisidir?",o:["Basılı dergi tirajı satışı","Sanal arsa ve skin satışı","Yayın frekansı kiralama","Kamu yayın lisans ücreti"],a:1,e:"Gelir abonelik ve reklamdan sanal arsa, avatar kıyafetleri ve sanal etkinlik biletlerine kayabilir."},
  {q:"\"İnsan yapımı\" içeriğin gelecekte premium bir ürüne dönüşebileceği fikrinin ekonomik mantığı nedir?",o:["İnsan emeğinin yasayla korunması","Bol yapay içerik karşısında görece kıtlık","Devletin insan yapımını sübvanse etmesi","Yapay zekânın bütünüyle yasaklanması"],a:1,e:"Bir şey bollaştıkça değeri düşer; kıt kalan alternatif, el yapımı ürünler gibi bir kalite işaretine dönüşebilir."},
  {q:"Ayda 150 TL'lik 5 platforma abone olan biri, aynı içeriği %30 indirimli bir paketle alırsa yıllık tasarrufu ne olur?",o:["225 TL","2.700 TL","750 TL","1.800 TL"],a:1,e:"Ayrı ayrı 750 TL, paket 525 TL; aylık 225 TL fark, yılda 2.700 TL eder."},
  {q:"Kitaba göre \"büyük yeniden paketleme\"nin temel riski nedir?",o:["Tüketicinin daha fazla ödemesi","Gücün birkaç dev şirkette toplanması","İçerik üretiminin durması","Reklamın tamamen ortadan kalkması"],a:1,e:"Paket tüketiciye kolaylık sağlar, ama müzik, film, haber ve oyunun tek elde toplanması piyasa gücünü yoğunlaştırır."},
  {q:"Yaratıcı yıkım süreci neden hem \"yaratıcı\" hem \"yıkıcı\" olarak adlandırılır?",o:["Hem kâr hem zarar getirdiği için","Verimli düzen kurarken eskiyi yok ettiği için","Devletin hem destekleyip hem yasakladığı için","Hem sanatçıyı hem izleyiciyi etkilediği için"],a:1,e:"Yeni ve daha verimli bir düzen kurulurken eski iş modelleri, şirketler ve alışkanlıklar yok olur."},
  {q:"Blockbuster'ın çöküşünde en büyük gücünün en büyük yükü hâline gelmesi neyi ifade eder?",o:["Gecikme cezalarının kaldırılmasını","Dükkân ağının maliyetli bir yüke dönüşmesini","Film stüdyolarıyla yaşanan anlaşmazlığı","Üst yönetimin sık sık değişmesini"],a:1,e:"Dükkân ağı fiziksel kiralama döneminde rekabet avantajıydı; akış modelinde ise yüksek kira maliyetli bir yük oldu."},
  {q:"Spotify'ın CD dükkânlarını yıkması hangi iki model arasındaki geçiştir?",o:["Reklam modelinden lisans modeline","Sahiplik modelinden erişim modeline","Kamu modelinden piyasa modeline","Donanım modelinden bağış modeline"],a:1,e:"Tüketici artık müziği satın alıp sahip olmak yerine kataloğa erişim için abonelik ödüyor."},
  {q:"Kitaba göre yapay zekânın medya üretimindeki en olası rolü nedir?",o:["Yazar ve yönetmenlerin tamamen yerini almak","Yaratıcıların yardımcı pilotu olmak","Yalnızca reklam satmak","Telif hakkı sahibi olmak"],a:1,e:"Yapay zekâ taslakları hızlandırır ve alternatifler üretir; esere özgünlük ve derinlik katan insan dokunuşu olarak kalır."},
  {q:"Bölüm başı 10 milyon TL bütçenin %38'i yapay zekânın etkileyebileceği kalemlerden oluşuyor ve bu kalemlerde %30 tasarruf sağlanıyor. Toplam tasarruf nedir?",o:["3 milyon TL","3,8 milyon TL","1,14 milyon TL","0,38 milyon TL"],a:2,e:"10 × 0,38 = 3,8 milyon TL etkilenebilir; bunun %30'u 1,14 milyon TL. Toplam bütçenin yalnızca %11,4'ü."},
  {q:"Netflix'in öneri algoritması platform ekonomisine en doğrudan hangi yolla katkı sağlar?",o:["Lisans maliyetlerini sıfırlayarak","Abone kaybını azaltarak","Reklam fiyatlarını artırarak","Frekans kıtlığını aşarak"],a:1,e:"Arama maliyetini düşüren öneriler izleyiciyi daha uzun tutar ve aboneliğin değerli görünmesini sağlar."}
 ]}
]}
],
refs:[
 "<i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications, 2025. s. 119–128.",
 "Schumpeter, J. A. (1942). <i>Capitalism, Socialism and Democracy</i>. Harper & Brothers.",
 "Christensen, C. M. (1997). <i>The Innovator's Dilemma</i>. Harvard Business School Press.",
 "Ekonomik Kalkınma ve İşbirliği Örgütü — Yapay zekâ politikaları: <a href=\"https://oecd.ai\">oecd.ai</a>"
],
next:"Dersin sonu — tebrikler!"
};
