window.WEEK={
id:"me-03",code:"ME",course:"Medya Ekonomisi",short:"Reyting ve reklam",week:3,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Reklam piyasası",
title:"Reyting, reklam ve <em>“ürün sizsiniz”</em>",
intro:"Bu hafta çift taraflı piyasa modelini iki güncel soruya uygulayacaksınız: Çok sevilen bir dizi neden yayından kalkar? Sosyal medya bedavaysa bu işten kim, nasıl para kazanır? Reyting ile demografinin farkını, hedefli reklamın veriyle nasıl çalıştığını ve Herbert Simon'ın dikkat kıtlığı fikrini öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması ve 9 soruluk bir test var.",
goals:[
 "Reyting, pay (share) ve hedef kitle kavramlarını ayırt edebilirsiniz.",
 "Daha az izlenen bir dizinin neden daha kârlı olabileceğini hedef kitle reklam geliriyle hesaplayabilirsiniz.",
 "“Ürün için para ödemiyorsanız ürün sizsiniz” sözünü çift taraflı piyasa ve veri ekonomisiyle açıklayabilirsiniz.",
 "Dijital izlerin profile, profilin hedefli reklama dönüşme sürecini adım adım anlatabilirsiniz.",
 "Dikkat ekonomisinin temel fikrini ve mahremiyet açısından yarattığı riskleri tartışabilirsiniz."
],
sections:[
{n:"3.1",h:"Neden en sevdiğiniz dizi yayından kaldırıldı?",blocks:[
 {t:"p",html:"Yanıt yine çift taraflı piyasa modelinde gizli. Bir dizi eleştirmenlerden tam not alsa, sadık bir hayran kitlesi olsa bile reklamverenlerin hedeflediği <b>demografik kitleyi</b> çekemiyorsa kanal için ekonomik olarak başarısız sayılabilir. Kanalın asıl müşterisi reklamverendir; reklamveren de ürününü satabileceği kişilere ulaşmak ister."},
 {t:"p",html:"Bu yüzden toplam izleyici sayısından çok <b>kimin</b> izlediği önemlidir. Kitapta verilen klasik örnek 18–49 yaş arası, satın alma gücü yüksek izleyicilerdir. Düşük reytingli ama reklamverenin “altın” gördüğü kitleyi çeken bir dizi, toplamda daha çok izlenen ama reklamverenin ilgilenmediği bir kitleye sahip diziden daha kârlı olabilir. Kitabın deyişiyle diziniz muhtemelen “yanlış” kişiler tarafından sevildiği için kaldırılmıştır."},
 {t:"def",html:"Medya ekonomisinde <b>demografi</b>, izleyici kitlesinin yaş, cinsiyet, gelir, eğitim ve yaşadığı yer gibi özelliklere göre dağılımıdır. Reklamveren için bir izleyicinin değeri bu özelliklere göre değişir.",src:"Ders kitabı, s. 15–16: “Kimin izlediği, kaç kişinin izlediğinden daha önemlidir.”"}
]},
{n:"3.2",h:"Reyting nasıl okunur?",blocks:[
 {t:"p",html:"Haberlerde “dizi dün akşam reyting birincisi oldu” cümlesini sık duyarsınız. Bu cümlenin arkasında birkaç farklı ölçü vardır. Hangisine bakıldığı, programın kaderini değiştirebilir."},
 {t:"table",head:["Ölçü","Neyi gösterir?","Örnek"],rows:[
  ["Reyting","Programı izleyenlerin, ölçülen evrendeki tüm kişilere oranı","Evrenin %5'i izlediyse reyting 5"],
  ["Pay (share)","Programı izleyenlerin, o saatte televizyon izleyenlere oranı","O saatte TV izleyenlerin %20'si bu kanaldaysa pay %20"],
  ["Hedef kitle reytingi","Yalnızca belirli bir grupta (yaş, gelir) ölçülen reyting","Toplamda üçüncü olan dizi, gelir düzeyi yüksek grupta birinci olabilir"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de televizyon izlenme ölçümleri sektör adına TİAK (Televizyon İzleme Araştırma Komitesi) çatısı altında yapılır. Sonuçlar yalnızca toplam izleyici (Total) için değil, AB ve ABC1 gibi sosyo-ekonomik statü grupları için de ayrı ayrı açıklanır. Bir dizinin “Total'de üçüncü, AB'de birinci” olması reklam satışı açısından çok değerlidir; kanallar bu yüzden iki listeyi de duyurur."},
 {t:"p",html:"Abonelikle çalışan reklamsız platformlar için de demografi önemini korur, ama başka bir nedenle. Orada amaç reklamverene kitle satmak değil, abonelik iptal etme eğilimi yüksek grupları elde tutmak ve yeni abone kazandıracak içeriği bulmaktır."}
]},
{n:"3.3",h:"Az izlenen dizi neden daha kârlı olabilir?",blocks:[
 {t:"p",html:"İki dizi düşünün. A dizisi daha çok izleniyor ama izleyicilerinin küçük bir kısmı reklamverenin hedeflediği gruptan. B dizisi daha az izleniyor ama izleyicilerinin çoğu hedef gruptan. Reklamveren yalnızca hedef gruba ulaşan izlenmeler için yüksek fiyat öder. Aşağıdaki hesaplayıcıda rakamlar örnek amaçlıdır; değerleri değiştirerek hangi dizinin kanal için daha değerli olduğunu bulun."},
 {t:"widget",name:"calc",opts:{title:"Toplam izleyici mi, hedef kitle mi?",inputs:[{id:"a",label:"A dizisinin izleyicisi",min:1,max:15,step:0.5,value:8,unit:" milyon"},{id:"ap",label:"A'da hedef kitlenin payı",min:0,max:100,step:5,value:20,unit:"%"},{id:"b",label:"B dizisinin izleyicisi",min:1,max:15,step:0.5,value:4,unit:" milyon"},{id:"bp",label:"B'de hedef kitlenin payı",min:0,max:100,step:5,value:60,unit:"%"},{id:"cpm",label:"Hedef kitle için CPM",min:10,max:200,step:10,value:100,unit:" TL"}],formula:"(function(){var ga=a*1000*ap/100*cpm,gb=b*1000*bp/100*cpm;var f=function(x){return Math.round(x).toLocaleString('tr-TR')+' TL';};return 'A: '+f(ga)+' · B: '+f(gb)+' → '+(ga>gb?'A dizisi daha değerli':(gb>ga?'B dizisi daha değerli':'eşit'));})()",result:"Spot başına hedef kitle geliri: {r}",note:"Örnekte A'yı 8 milyon, B'yi 4 milyon kişi izliyor; ama A'nın hedef kitlesi 1,6 milyon, B'ninki 2,4 milyon. Toplam izlenmesi yarı yarıya düşük olan B dizisi, reklamveren için daha değerli. Sadeleştirmek için hedef dışı izleyicinin reklam değeri sıfır kabul edildi."}},
 {t:"p",html:"Aynı mantık çocuk kanallarında da işler. Yalnızca çocuklara yayın yapan bir kanalın en değerli reklamverenleri oyuncak, atıştırmalık ve çocuk ürünü üreticileridir; bir bankanın kredi kartı reklamı için bu kitle değersizdir. Türkiye'de çocuklara yönelik yayınlarda reklam içeriği RTÜK düzenlemeleriyle ayrıca sınırlandırılır."}
]},
{n:"3.4",h:"“Ürün için para ödemiyorsanız, ürün sizsiniz”",blocks:[
 {t:"p",html:"Bu meşhur söz, reklama dayalı dijital platformların (arama motorları, sosyal medya, video siteleri) iş modelini özetler. Bu platformlar hizmetlerini size “bedava” sunar, çünkü sizden paradan daha değerli bir şey alırlar: <b>dikkatinizi ve verilerinizi</b>. Fikrin kökü yenidir de denemez: 1973'te sanatçılar Richard Serra ve Carlota Fay Schoolman, “Television Delivers People” (Televizyon insan teslim eder) adlı video çalışmalarında televizyonun ürününün izleyici olduğunu söylüyordu."},
 {t:"p",html:"Fark, dijital platformların izleyiciyi televizyondan çok daha ayrıntılı tanımasıdır. Televizyon “18–49 yaş” gibi geniş gruplar satar. Platform ise tek tek kişilerin ilgi alanlarını bilir ve reklamı tam o kişiye gösterebilir. Süreç dört adımda işler."},
 {t:"choice",items:[
  {label:"1. İz",title:"Dijital izler bırakırsınız",body:"Platformda gezinirken, bir gönderiyi beğenirken, bir video izlerken, bir arama yaparken ardınızda izler bırakırsınız: tıklamalar, harcanan süre, etkileşimler, tarayıcı geçmişi.",ex:"Örnek: “yeni bisiklet modelleri” diye arama yaptınız ve iki inceleme videosunu sonuna kadar izlediniz."},
  {label:"2. Profil",title:"İzler profile dönüşür",body:"Platform milyarlarca izi toplayıp analiz eder ve sizin hakkınızda bir profil çıkarır: neleri seversiniz, neye ihtiyacınız var, ilgi alanlarınız neler?",ex:"Örnek: “25–30 yaş, bisiklet ve açık hava sporlarıyla ilgileniyor, satın alma niyeti yüksek.”"},
  {label:"3. Satış",title:"Profil reklamverene sunulur",body:"Reklamveren kimi hedeflemek istediğini söyler; platform bu profile uyan kişilere reklamı gösterme hakkını satar. Platform verinizi değil, size erişimi satar.",ex:"Örnek: Bir bisiklet markası “25–30 yaş, bisikletle ilgilenen kullanıcılar” için kampanya açar."},
  {label:"4. Reklam",title:"Reklam ekranınıza gelir",body:"Sonraki günlerde gezdiğiniz sitelerde ve akışınızda bisiklet reklamları belirir. Her tıklama ve izlenme yeni bir iz olarak döngüye geri döner.",ex:"Döngü kendini besler: daha çok veri, daha isabetli reklam, daha yüksek reklam fiyatı."}
 ]},
 {t:"p",html:"Bu iş modelinin en büyük riski <b>mahremiyettir</b>. Kişisel veriler izinsiz paylaşılabilir, çalınabilir ya da kişinin bilmediği amaçlarla kullanılabilir. Türkiye'de kişisel verilerin işlenmesi 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Avrupa Birliği'nde ise Genel Veri Koruma Tüzüğü (GDPR) ile düzenlenir. Bu düzenlemeler platformlardan veriyi hangi amaçla topladıklarını açıklamalarını ve çoğu durumda açık rıza almalarını ister."}
]},
{n:"3.5",h:"Bedeli nasıl ödüyorsunuz?",blocks:[
 {t:"p",html:"Her medya hizmeti bir bedel ister; mesele bedelin hangi para birimiyle ödendiğidir. Aşağıdaki hizmetlerde kullanıcı esas olarak doğrudan para mı ödüyor, yoksa dikkatini ve verisini mi veriyor?"},
 {t:"widget",name:"classify",opts:{title:"Para mı, dikkat ve veri mi?",cats:["Doğrudan para","Dikkat ve veri"],items:[
  ["Ücretsiz bir sosyal medya uygulamasında gezinmek",1],
  ["Reklamsız bir dizi platformuna aylık abonelik",0],
  ["Bir arama motorunda ücretsiz arama yapmak",1],
  ["Bayiden basılı dergi satın almak",0],
  ["Şifresiz bir televizyon kanalında dizi izlemek",1],
  ["Bir video sitesinin reklamsız premium paketini almak",0],
  ["Ücretsiz bir haber sitesinde makale okumak",1],
  ["Sinema bileti satın almak",0]
 ],note:"Şifresiz televizyon izleyicisi de dikkatiyle öder, ama televizyon kişisel veri toplamaz; dijital platformlar dikkatin yanında ayrıntılı davranış verisini de alır. Bazı hizmetler (ör. reklamlı ucuz abonelik) iki bedeli birden ister."}}
]},
{n:"3.6",h:"Dikkat ekonomisi: bilgi bolsa kıt olan nedir?",blocks:[
 {t:"p",html:"Nobel ödüllü iktisatçı Herbert A. Simon 1971'de yayımlanan bir makalesinde şunu öngördü: Bilginin bol olduğu bir dünyada bilgi, alıcısının bir şeyini tüketir: <b>dikkatini</b>. Bilgi bolluğu dikkat kıtlığı yaratır. İktisat kıt olanla ilgilendiğine göre, yeni çağın kıt kaynağı dikkattir."},
 {t:"def",html:"<b>Dikkat ekonomisi</b>: İnsan dikkatini sınırlı ve değerli bir kaynak olarak gören; şirketlerin bu dikkati ele geçirip reklamverene satmak için rekabet ettiği ekonomik düzen.",src:"Ders kitabı, s. 18; kavramın kökü: Simon (1971)."},
 {t:"p",html:"Dikkatin bir hesabı da yapılabilir. Bir kullanıcının günde ne kadar süre geçirdiği ve o sürede kaç reklam gördüğü, platformun o kullanıcıdan kazandığı parayı belirler. Rakamlar örnek amaçlıdır."},
 {t:"widget",name:"calc",opts:{title:"Bir kullanıcının dikkatinin yıllık değeri",inputs:[{id:"dakika",label:"Günlük kullanım süresi",min:5,max:240,step:5,value:90,unit:" dk"},{id:"reklam",label:"Dakikada gösterilen reklam",min:0.1,max:3,step:0.1,value:1},{id:"cpm",label:"Bin gösterim başına fiyat (CPM)",min:5,max:200,step:5,value:40,unit:" TL"}],formula:"dakika*reklam*365*cpm/1000",result:"Platformun bu kullanıcıdan yıllık reklam geliri: {r} TL",digits:0,note:"90 dakika × dakikada 1 reklam × 365 gün = 32.850 gösterim; 40 TL CPM ile yaklaşık 1.314 TL. Platformun kullanım süresini uzatmak için neden bu kadar çaba gösterdiğini bu hesap açıklar. Hafta 07'de sonsuz kaydırmayı bu gözle inceleyeceğiz."}}
]},
{n:"3.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Demografi","İzleyici kitlesinin yaş, gelir, eğitim gibi özelliklere göre dağılımı."],
  ["Reyting","Programı izleyenlerin, ölçülen evrendeki tüm kişilere oranı."],
  ["Pay (share)","Programı izleyenlerin, o saatte TV izleyenlere oranı."],
  ["Hedef kitle","Reklamverenin ulaşmak istediği, satın alma olasılığı yüksek izleyici grubu."],
  ["Hedefli reklam","Kullanıcı profiline göre seçilip yalnızca ilgili kişilere gösterilen reklam."],
  ["Dijital iz","Tıklama, arama, beğeni, izleme süresi gibi çevrimiçi davranış kayıtları."],
  ["Dikkat ekonomisi","Kıt insan dikkatinin ele geçirilip satıldığı ekonomik düzen."],
  ["KVKK / GDPR","Türkiye'de ve AB'de kişisel verilerin işlenmesini düzenleyen temel kurallar."]
 ]}
]},
{n:"3.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Eleştirmenlerin çok beğendiği, sadık izleyicisi olan bir dizi yayından kaldırıldı. Kitaba göre en olası ekonomik neden nedir?",o:["Yapım maliyetinin sıfır olması","Reklamverenin hedeflediği kitleyi çekememesi","Telif süresinin dolmuş olması","İzleyicilerin diziyi korsan izlemesi"],a:1,e:"Kanalın asıl müşterisi reklamverendir; hedef kitleyi getirmeyen dizi çok sevilse de ekonomik olarak başarısız sayılır."},
  {q:"Bir saat diliminde TV izleyenlerin %25'i bir kanalı izliyor. Bu oran hangi ölçüdür?",o:["Reyting oranı","Pay (share)","CPM değeri","Tiraj sayısı"],a:1,e:"Pay, programı izleyenlerin o anda televizyon izleyen kişilere oranıdır; reyting ise tüm evrene oranlanır."},
  {q:"A dizisini 8 milyon kişi izliyor, %20'si hedef kitle; B dizisini 4 milyon kişi izliyor, %60'ı hedef kitle. Reklamveren yalnız hedef kitleye ödüyorsa hangisi daha değerli?",o:["A, çünkü toplam izleyicisi iki kat","B, çünkü hedef kitlesi 2,4 milyon","İkisi eşit değerde","Hesaplamak için tiraj gerekir"],a:1,e:"A'nın hedef kitlesi 1,6 milyon, B'ninki 2,4 milyon; reklamveren için B daha değerlidir."},
  {q:"Yalnızca çocuklara yayın yapan bir kanalın en değerli reklamvereni hangisi olur?",o:["Bir oyuncak üreticisi","Bir konut kredisi veren banka","Bir lüks otomobil markası","Bir emeklilik fonu şirketi"],a:0,e:"Reklamveren, ürününü satabileceği kitleye ulaşmak ister; çocuk kanalının kitlesi oyuncak üreticisi için değerlidir."},
  {q:"“Ürün için para ödemiyorsanız ürün sizsiniz” sözünde “ürün” aslında nedir?",o:["Platformun yazılım kodu ve tasarımı","Kullanıcının dikkati ve verisine erişim","Platformun sunucuları ve veri merkezleri","Reklamverenin fabrikada ürettiği mal"],a:1,e:"Platform ücretsiz hizmet karşılığında dikkati ve davranış verisini alır, bu kişilere reklamla erişim hakkını reklamverene satar."},
  {q:"İnternette “yeni bisiklet modelleri” aradıktan sonra her yerde bisiklet reklamı görmenizin doğru sıralaması hangisidir?",o:["Reklam → profil → iz → satış","İz → profil → satış → reklam","Profil → iz → reklam → satış","Satış → reklam → iz → profil"],a:1,e:"Arama bir iz bırakır; iz profile eklenir; reklamveren bu profile erişim satın alır; reklam ekranınıza gelir."},
  {q:"Herbert Simon'ın fikrine göre bilgi bolluğu neyin kıtlığını yaratır?",o:["Paranın","Dikkatin","Reklam alanının","Kişisel verinin"],a:1,e:"Bilgi, alıcısının dikkatini tüketir; bilgi arttıkça dikkat kıt ve değerli hâle gelir."},
  {q:"Kullanıcı günde 60 dakika geçiriyor, dakikada 1 reklam görüyor, CPM 50 TL. Platformun bu kullanıcıdan günlük reklam geliri nedir?",o:["0,3 TL","3 TL","30 TL","300 TL"],a:1,e:"60 gösterim × 50 TL ÷ 1.000 = 3 TL. Yılda yaklaşık 1.095 TL eder."},
  {q:"Reklama dayalı veri modelinin kullanıcı açısından en büyük riski hangisidir?",o:["Hizmetin aylık fiyatının hızla artması","Kişisel verilerin izinsiz kullanılması","İçeriğin marjinal maliyetinin yükselmesi","Reklamveren sayısının hızla azalması"],a:1,e:"Model sürekli veri toplamaya dayanır; mahremiyet ihlali, veri sızıntısı ve gözetlenme hissi başlıca risklerdir."}
 ]}
]}
],
refs:[
 "Şahin, M. (2025). <i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications. s. 15–18.",
 "Simon, H. A. (1971). Designing Organizations for an Information-Rich World. M. Greenberger (Ed.), <i>Computers, Communications, and the Public Interest</i> içinde. Johns Hopkins Press.",
 "Wu, T. (2016). <i>The Attention Merchants</i>. Knopf.",
 "Kişisel Verileri Koruma Kurumu: <a href=\"https://www.kvkk.gov.tr\">kvkk.gov.tr</a>"
],
next:"Sonraki: Hafta 04 — Abonelik modelleri ve platform kapitalizmi"
};
