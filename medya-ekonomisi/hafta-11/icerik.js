window.WEEK={
id:"me-11",code:"ME",course:"Medya Ekonomisi",short:"Müzik akışı, sahiplik, reklam",week:11,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Gelir dağılımı ve sahiplik",
title:"Müzik akışı, medya sahipliği ve reklamın <em>satışa etkisi</em>",
intro:"Bu hafta üç soruya cevap arıyoruz: Bir şarkı bir milyon kez dinlendiğinde sanatçının eline neden bu kadar az para geçer? Medya grubunun sahibi aynı zamanda inşaat ya da enerji şirketlerinin de sahibiyse ne olur? Şirketlerin reklama harcadığı para satışlarını gerçekte ne kadar artırır? Okuma süresi yaklaşık 40 dakika; sayfada bir zaman şeridi, üç hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma paneli ve 9 soruluk bir test var.",
goals:[
 "Pro-rata (oransal paylaşım) modelinin işleyişini adım adım açıklayabilirsiniz.",
 "Bir şarkının dinlenme sayısından hak sahiplerine düşen geliri hesaplayabilir, pro-rata ile kullanıcı merkezli modeli karşılaştırabilirsiniz.",
 "Çapraz mülkiyet ve holding medyasının ekonomik ve toplumsal sonuçlarını yapısal düzeyde açıklayabilirsiniz.",
 "Medya harcamasının satışlara etkisini belirleyen faktörleri sayabilirsiniz.",
 "Reklam esnekliği ve yatırım getirisi (ROI) kavramlarıyla bir kampanyanın kârlılığını değerlendirebilirsiniz."
],
sections:[
{n:"11.1",h:"Bir milyon dinlenme neden servet etmez?",blocks:[
 {t:"p",html:"Bir milyon dinlenme kulağa servet gibi gelir, ama sanatçının eline geçen tutar çoğu zaman şaşırtıcı derecede küçüktür. Bunun nedeni, Spotify gibi platformların kullandığı <b>pro-rata</b> (oransal paylaşım) gelir modelidir. Para dinleyiciden doğrudan sanatçıya gitmez; önce büyük bir havuza girer, orada pazar payına göre bölüştürülür."},
 {t:"timeline",items:[
  ["1","Para havuzda toplanır","Ay sonunda bütün abonelerin ödediği ücretler ve reklam gelirleri tek bir havuzda toplanır."],
  ["2","Platform payını alır","Kitaba göre platform havuzun yaklaşık %30'unu kendi operasyonları, maaşları ve kârı için ayırır."],
  ["3","Telif havuzu ayrılır","Kalan yaklaşık %70, şarkıların hak sahiplerine (plak şirketleri, yayıncılar, besteciler, söz yazarları, sanatçılar) ödenmek üzere ayrılır."],
  ["4","Pazar payına göre dağıtım","Telif havuzu \"şarkı başına sabit ücret\" olarak değil, o ayki toplam dinlenmelerdeki paya göre dağıtılır. Tartışmalı olan kısım budur.",1],
  ["5","Sözleşmeler devreye girer","Hak sahibine düşen pay, plak şirketi ve dağıtımcı sözleşmelerindeki kesintilerden sonra sanatçıya ulaşır. Sanatçının eline geçen, havuzdan çıkan tutarın yalnızca bir kısmıdır."]
 ]},
 {t:"p",html:"Kitaptaki örnek: şarkınız o ay platformdaki toplam 100 milyar dinlenmenin %0,001'ini oluşturduysa (yani 1 milyon dinlenme), telif havuzunun da yalnızca %0,001'ini alırsınız. En çok dinlenen yıldızlar ve büyük plak şirketleri pastanın aslan payını alır; az dinlenen milyonlarca bağımsız sanatçıya kırıntılar kalır. Sizin 1 milyon dinlenmeniz, bir süperstarın 1 milyar dinlenmesiyle aynı havuzda yarışır."}
]},
{n:"11.2",h:"Pro-rata hesabını kendiniz yapın",blocks:[
 {t:"p",html:"Aşağıdaki hesaplayıcı, kitaptaki akış şemasını sayılara döker. Havuzun büyüklüğünü, platformun payını ve dinlenme sayılarını değiştirerek bir şarkıya düşen geliri görün."},
 {t:"widget",name:"calc",opts:{title:"Pro-rata: akış başına telif dağılımı",inputs:[
  {id:"havuz",label:"Aylık toplam gelir (abonelik + reklam)",min:100,max:2000,step:50,value:1000,unit:" milyon $"},
  {id:"platform",label:"Platformun payı",min:10,max:50,step:1,value:30,unit:"%"},
  {id:"toplam",label:"Aylık toplam dinlenme",min:10,max:200,step:5,value:100,unit:" milyar"},
  {id:"sarki",label:"Şarkının dinlenme sayısı",min:0.1,max:100,step:0.1,value:1,unit:" milyon"},
  {id:"sanatci",label:"Sözleşmeye göre sanatçıya kalan oran",min:5,max:100,step:5,value:20,unit:"%"}],
  formula:"(function(){var telif=havuz*1e6*(1-platform/100);var oran=telif/(toplam*1e9);var hak=oran*sarki*1e6;var f=function(x,d){return x.toLocaleString('tr-TR',{maximumFractionDigits:d});};return 'dinlenme başına '+f(oran,4)+' $ · hak sahiplerine '+f(hak,0)+' $ · sanatçının eline '+f(hak*sanatci/100,0)+' $';})()",
  result:"Sonuç: {r}",note:"Varsayılan değerler örnektir. Dinlenme başına oran sabit değildir: toplam dinlenme arttıkça her dinlenmenin değeri düşer. Aynı havuzu daha çok kişi paylaştıkça pay küçülür."}},
 {t:"p",html:"Pro-rata modeline yöneltilen temel eleştiri şudur: siz ayda yalnızca birkaç bağımsız sanatçıyı dinleseniz bile, ödediğiniz ücret havuza girer ve büyük kısmı sizin hiç dinlemediğiniz, en popüler sanatçılara gider. Buna alternatif olarak tartışılan <b>kullanıcı merkezli</b> (user-centric) modelde her abonenin ücreti yalnızca o abonenin dinlediği sanatçılar arasında, dinleme payına göre bölünür."},
 {t:"widget",name:"calc",opts:{title:"Tek bir abonenin parası kime gidiyor?",inputs:[
  {id:"ucret",label:"Aylık abonelik ücreti",min:20,max:300,step:5,value:100,unit:" TL"},
  {id:"dinleme",label:"Bu abonenin aylık dinleme sayısı",min:50,max:3000,step:50,value:300},
  {id:"ortalama",label:"Platformda abone başı ortalama dinleme",min:100,max:3000,step:50,value:1000},
  {id:"pay",label:"Bu abonenin dinlemelerinde bağımsız sanatçının payı",min:1,max:100,step:1,value:50,unit:"%"}],
  formula:"(function(){var havuz=ucret*0.7;var pr=dinleme*pay/100*havuz/ortalama;var uc=havuz*pay/100;var f=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:2});};return 'pro-rata '+f(pr)+' TL · kullanıcı merkezli '+f(uc)+' TL';})()",
  result:"Bağımsız sanatçıya bu aboneden düşen: {r}",note:"Telif havuzu ücretin %70'i varsayıldı. Abone ortalamadan az dinliyorsa pro-rata modelinde parasının bir kısmı yoğun dinleyicilerin sevdiği sanatçılara akar. Dinleme sayısını ortalamaya eşitleyin: iki model aynı sonucu verir."}}
]},
{n:"11.3",h:"Holding medyası: çapraz mülkiyetin ekonomisi",blocks:[
 {t:"p",html:"Kitap, Türkiye'de medya ekonomisinin en belirleyici özelliği olarak <b>çapraz mülkiyeti</b> gösterir: büyük medya gruplarının sahiplerinin inşaat, enerji, bankacılık veya turizm gibi başka sektörlerde de büyük yatırımlarının olması. Bu yapı literatürde \"holding medyası\" veya \"patron medyası\" olarak adlandırılır."},
 {t:"def",html:"<b>Çapraz mülkiyet</b>: Bir şirketler grubunun hem medya kuruluşlarına hem de medya dışındaki sektörlerde faaliyet gösteren şirketlere sahip olması.",src:"Kitaptaki temsilî örnekte holding gelirinin belki yalnızca %5'ini medyadan, %95'ini diğer sektörlerden elde eder."},
 {t:"p",html:"Burada önemli olan kişiler değil, <b>yapının yarattığı teşviklerdir</b>. Gelirin çok küçük bir kısmı medyadan geliyorsa, medya şirketinin kâr etmesi holding için ikincil hâle gelir. Medya artık gazetecilik yapıp program satarak kâr eden bir işletmeden çok, holdingin diğer ticari çıkarlarını koruyan ve geliştiren stratejik bir araca dönüşebilir. Basit bir hesap bunu gösterir: medyadaki 1 TL'lik kâr ile diğer işlerdeki 1 TL'lik kâr holding için aynı değerdedir; ama diğer işler 19 kat büyükse karar mekanizmasında onların ağırlığı da o ölçüde büyük olur."},
 {t:"choice",items:[
  {label:"Çıkar çatışması",title:"Ekonomik sonuç",body:"Medya grubunun sahibi olan holding kamudan büyük bir ihale aldığında, aynı holdinge ait gazete veya kanalın o ihaleyi ya da ihaleyi veren otoriteyi tarafsız biçimde haberleştirmesi zorlaşır. Gazetecilik çıkarı ile holdingin ticari çıkarı çatışır.",ex:"Kitaptaki soru: bir medya patronunun kendi bankasıyla ilgili olumsuz bir ekonomi haberini yayınlatmaması."},
  {label:"Baskı aracı",title:"Ekonomik sonuç",body:"Medya gücü ticari pazarlıklarda bir koz olarak kullanılabilir: rakip şirketleri veya holdingin işlerini zorlaştıran bürokratları hedef alan yayınlar yapılabilir.",ex:"Yayın gücü, medya dışı bir pazarlıkta karşı tarafa yönelik örtük bir tehdit hâline gelir."},
  {label:"Otosansür",title:"Toplumsal sonuç",body:"Gazeteciler ve editörler, patronlarının ticari çıkarlarına zarar vermemek için açık bir talimat olmasa bile kendi kendilerini sansürleyebilir. Editoryal bağımsızlık aşınır.",ex:"Bir muhabirin, haberinin yayınlanmayacağını önceden tahmin ederek konuyu hiç önermemesi."},
  {label:"Kamu yararı",title:"Toplumsal sonuç",body:"Medyanın \"dördüncü kuvvet\" olarak devleti denetleme ve halkı bilgilendirme görevi ikinci plana itilir; öncelik holdingin genel kârlılığı olur.",ex:"Kitabın vardığı sonuç: böyle bir medya kuruluşu, bir holdingin halkla ilişkiler ve lobi departmanı gibi çalışabilir."}
 ]},
 {t:"box",lbl:"Piyasa açısından okuma",html:"Çapraz mülkiyet yalnızca gazetecilik sorunu değildir, <b>rekabet sorunudur</b> da. Medya gücüne sahip bir holding, medya gücü olmayan rakiplerine karşı inşaat, enerji veya bankacılık piyasasında eşit olmayan bir avantaj elde edebilir. Bu yüzden birçok ülkede medya sahipliği, yalnızca yayın düzenleyicisinin değil rekabet otoritesinin de ilgi alanıdır."}
]},
{n:"11.4",h:"Medya harcaması satışları nasıl etkiler?",blocks:[
 {t:"p",html:"Medya harcaması (reklam ve tanıtım), bir şirketin varlığını duyurmaktan ürününü satmaya kadar geniş bir alanda rol oynar. Kitap bunu bir zincir olarak özetler: <b>medya harcaması → görünürlük → bilinirlik → ikna → potansiyel satış</b>. Ancak bu etki tek yönlü ve basit bir nedensellik değildir; beş faktöre bağlıdır."},
 {t:"list",items:[
  "<b>Bilinirlik ve farkındalık:</b> Tüketici varlığından haberdar olmadığı ürünü satın alamaz. İlk adım farkındalıktır.",
  "<b>İkna ve tercih:</b> Bilinmek yetmez; reklam ürünün faydalarını anlatır, duygusal bağ kurar ve \"neden bu ürünü almalıyım?\" sorusunu cevaplar.",
  "<b>Pazar payı kazanımı:</b> Yoğun ve stratejik harcama, özellikle rekabetin yoğun olduğu sektörlerde rakiplerden pay almayı sağlar.",
  "<b>Doğru hedefleme ve platform seçimi:</b> Hedef kitlenin özellikleri ve medya alışkanlıkları iyi analiz edilip doğru platform seçildiğinde yatırım getirisi en yükseğe çıkar. Dijital reklam bu konuda daha hassas hedefleme sunar.",
  "<b>Mevsimsellik ve konjonktür:</b> Bayram ve tatil dönemlerinde yapılan reklam, normal bir döneme göre çok daha yüksek satış getirisi sağlayabilir."
 ]},
 {t:"p",html:"Kitaptaki görsel, reklamın etkisinin tek bir ayda bitmediğini, karşılaşmadan sonraki aylara (görselde 24 aya) yayıldığını gösterir. Reklamın bu gecikmeli ve birikimli etkisi, pazarlama literatüründe <b>reklam stoku</b> (adstock) olarak bilinir. Bu yüzden bir kampanyanın getirisini yalnızca yayın ayındaki satışlara bakarak ölçmek, etkiyi olduğundan küçük gösterir."},
 {t:"widget",name:"classify",opts:{title:"Bu kampanya hangi faktöre odaklanıyor?",cats:["Farkındalık","İkna/tercih","Hedefleme"],items:[
  ["Yeni kurulan bir markanın şehirdeki bütün otobüs duraklarına logo afişi asması",0],
  ["Bir deterjan reklamının iki gömleği yan yana gösterip farkı anlatması",1],
  ["Yerel bir pastanenin yalnızca 3 km çevresindeki kullanıcılara sosyal medya reklamı göstermesi",2],
  ["Bir telefon markasının yeni modelini büyük bir spor finalinin arasında tanıtması",0],
  ["Bir bankanın reklamında ailesine ev alan bir babanın duygusal hikâyesini anlatması",1],
  ["Bir kitap sitesinin yalnızca polisiye okuyan üyelerine yeni polisiye romanı önermesi",2],
  ["Bir otomobil reklamının rakip modelle yakıt tüketimini karşılaştırması",1],
  ["Bir spor salonunun yalnızca 20–35 yaş arası, fitness ilgisi olan kullanıcılara reklam vermesi",2]],note:"Gerçek kampanyalar çoğu zaman birden çok amaca hizmet eder; burada baskın amaç soruldu. Kitaptaki soruya göre büyük bir spor finalinde yapılan pahalı reklam, öncelikle geniş farkındalık hedefler."}}
]},
{n:"11.5",h:"Reklam esnekliği ve yatırım getirisi",blocks:[
 {t:"p",html:"Reklamın satışa etkisini ölçmenin iki temel aracı vardır. <b>Reklam esnekliği</b>, reklam harcamasındaki %1'lik artışın satışları yüzde kaç artırdığını gösterir. <b>Yatırım getirisi</b> (ROI) ise kampanyanın getirdiği ek kârın harcamaya oranıdır."},
 {t:"box",lbl:"Formül",html:"Reklam esnekliği = satışlardaki % değişim ÷ reklam harcamasındaki % değişim<br>ROI = (ek satış × brüt kâr marjı − reklam harcaması) ÷ reklam harcaması"},
 {t:"p",html:"Marka reklamlarına ilişkin yüzlerce çalışmayı birleştiren bir meta-analiz (Sethuraman, Tellis ve Briesch, 2011), kısa dönem reklam esnekliğinin ortalama 0,12 civarında olduğunu buldu. Yani reklam bütçesini %10 artırmak satışları ortalama yalnızca %1,2 kadar artırıyor. Bu, reklamın etkisiz olduğu anlamına gelmez; harcama artışının satış artışından çok daha büyük olduğu ve kârlılığın marja bağlı olduğu anlamına gelir."},
 {t:"widget",name:"calc",opts:{title:"Reklam bütçesini artırmak kârlı mı?",inputs:[
  {id:"satis",label:"Yıllık satış",min:10,max:1000,step:10,value:200,unit:" milyon TL"},
  {id:"butce",label:"Mevcut reklam bütçesi",min:1,max:100,step:1,value:10,unit:" milyon TL"},
  {id:"artis",label:"Reklam bütçesindeki artış",min:1,max:100,step:1,value:20,unit:"%"},
  {id:"esneklik",label:"Reklam esnekliği",min:0.01,max:0.5,step:0.01,value:0.12},
  {id:"marj",label:"Brüt kâr marjı",min:5,max:80,step:5,value:40,unit:"%"}],
  formula:"(function(){var ek=butce*artis/100;var eksatis=satis*esneklik*artis/100;var roi=(eksatis*marj/100-ek)/ek*100;var f=function(x,d){return x.toLocaleString('tr-TR',{maximumFractionDigits:d});};return 'ek harcama '+f(ek,1)+' mn TL · ek satış '+f(eksatis,1)+' mn TL · ROI %'+f(roi,0)+(roi>0?' → kârlı':' → zarar');})()",
  result:"Sonuç: {r}",note:"Esnekliği 0,12'de tutup marjı %20'ye düşürün: aynı satış artışı zarara döner. Reklam, yüksek marjlı ürünlerde ve düşük reklam/satış oranlı şirketlerde daha kolay kendini amorti eder. Hesap yalnızca kısa dönem etkiyi içerir; reklam stoku etkisi eklenirse getiri yükselir."}}
]},
{n:"11.6",h:"Tarihe dönüş: içerik mi değişiyor, iş mantığı mı?",blocks:[
 {t:"p",html:"Bu haftanın üç konusu da aynı soruyu soruyor: medyada para nereden giriyor ve kimin cebine çıkıyor? Akış platformunda bu soru pro-rata havuzla, holding medyasında sahiplik yapısıyla, reklamda esneklik ve getiriyle cevaplanıyor."},
 {t:"p",html:"Kitap bir sonraki bölüme \"Geçmişi bilmeyen, bugünü anlayamaz\" sözüyle geçer ve bir soru sorar: medya tarihinden aldığımız en büyük ders, içeriğin mi yoksa işin ekonomik mantığının mı değiştiğidir? Gazetenin ilk döneminde abonelik ve reklam iş modelinin temelini oluşturdu; radyo ve televizyonla yeni gelir modelleri ortaya çıktı; internet bu süreci baştan dönüştürdü. Gelecek hafta bu tarihsel evrimi izleyeceğiz."}
]},
{n:"11.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Pro-rata model","Telif havuzunun, toplam dinlenmelerdeki paya göre dağıtılması."],
  ["Telif havuzu","Platform payı düşüldükten sonra hak sahiplerine ayrılan gelir."],
  ["Kullanıcı merkezli model","Her abonenin ücretinin yalnızca kendi dinlediği sanatçılar arasında bölünmesi."],
  ["Hak sahibi","Bir eserden gelir alma hakkına sahip plak şirketi, yayıncı, besteci, söz yazarı veya sanatçı."],
  ["Çapraz mülkiyet","Aynı grubun hem medya hem medya dışı sektörlerde şirket sahibi olması."],
  ["Holding medyası","Ana geliri medya dışından gelen bir grubun sahip olduğu medya kuruluşu."],
  ["Reklam esnekliği","Reklam harcamasındaki %1 artışın satışlarda yarattığı yüzde değişim."],
  ["ROI","Yatırımın getirdiği net kârın yatırım tutarına oranı."],
  ["Reklam stoku (adstock)","Reklam etkisinin sonraki dönemlere yayılan, birikimli kısmı."]
 ]}
]},
{n:"11.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Pro-rata modelinde bir sanatçıya düşen telif neye göre belirlenir?",o:["Her şarkı için sabit bir ücrete göre","Toplam dinlenmelerdeki payına göre","Kendi dinleyicilerinin ödediği ücrete göre","Plak şirketinin büyüklüğüne göre"],a:1,e:"Telif havuzu, şarkının o ayki toplam dinlenmelerdeki payı oranında dağıtılır."},
  {q:"Aylık gelir 1 milyar $, platform payı %30, toplam dinlenme 100 milyar. Dinlenme başına telif oranı nedir?",o:["0,01 $","0,007 $","0,003 $","0,07 $"],a:1,e:"Telif havuzu 700 milyon $; 700 milyon ÷ 100 milyar = 0,007 $."},
  {q:"Önceki sorudaki oranla 1 milyon kez dinlenen bir şarkının hak sahiplerine düşen toplam pay nedir?",o:["700 $","70.000 $","7.000 $","10.000 $"],a:2,e:"1.000.000 × 0,007 $ = 7.000 $. Sanatçının eline bunun sözleşmeye bağlı bir kısmı geçer."},
  {q:"Ayda az müzik dinleyen ve yalnızca bağımsız sanatçıları seven bir abone için hangisi doğrudur?",o:["Pro-rata'da parasının bir kısmı popüler sanatçılara akar","Pro-rata'da parasının tamamı dinlediği sanatçılara gider","Kullanıcı merkezli modelde parasının tamamı platformda kalır","İki model her durumda kuruşu kuruşuna aynı sonucu verir"],a:0,e:"Havuz ortak olduğu için az dinleyen abonenin parası, yoğun dinleyicilerin tercih ettiği sanatçılara kayar."},
  {q:"Kitaba göre holding medyasında medyanın temel ekonomik amacı nasıl değişir?",o:["Daha çok gazeteci istihdam etmeye yönelir","Holdingin diğer çıkarlarını koruyan araca dönüşür","Yalnızca abonelik gelirine dayanmaya başlar","Kamu hizmeti yayıncılığına dönüşür"],a:1,e:"Gelirin küçük kısmı medyadan geldiğinde medya, holdingin diğer işlerini destekleyen stratejik bir araç hâline gelebilir."},
  {q:"Gazetecilerin patronlarının ticari çıkarlarını düşünerek bazı haberleri kendiliğinden yapmaması hangi kavramdır?",o:["Kültürel indirim","Otosansür","Seçim paradoksu","Pro-rata dağıtım"],a:1,e:"Açık bir yasak olmadan, olası sonuçları öngörerek kendi kendini sınırlamaya otosansür denir."},
  {q:"Bir şirket reklam bütçesini %10 artırıyor; reklam esnekliği 0,12. Satışların yaklaşık ne kadar artması beklenir?",o:["%12","%10","%1,2","%0,12"],a:2,e:"Satış değişimi = esneklik × reklam değişimi = 0,12 × %10 = %1,2."},
  {q:"Yıllık satışı 200 milyon TL olan bir şirket 2 milyon TL ek reklam harcıyor ve satışlar 4,8 milyon TL artıyor. Brüt marj %40 ise kampanyanın ROI'si nedir?",o:["%140","%−4","%92","%−60"],a:1,e:"Ek brüt kâr 4,8 × 0,40 = 1,92 milyon TL; (1,92 − 2) ÷ 2 = −0,04, yani %−4. Satış arttı ama harcamayı karşılamadı."},
  {q:"Yerel bir pastanenin yalnızca 3 km çevresindeki kullanıcılara düşük bütçeli reklam vermesi, medya harcamasının hangi yönünü vurgular?",o:["Geniş kitlede farkındalık yaratma","Doğru hedefleme ve platform seçimi","Mevsimsellik ve bayram etkisi","Rakiplerle pazar payı savaşı"],a:1,e:"Küçük bütçe, yalnızca potansiyel müşterilere ulaşacak biçimde hedeflenerek verimli kullanılıyor."}
 ]}
]}
],
refs:[
 "<i>Medya Ekonomisi: İktisatçı Olmayanlar İçin Bir Rehber</i>. Holistence Publications, 2025. s. 84–90.",
 "Sethuraman, R., Tellis, G. J., Briesch, R. A. (2011). How well does advertising work? Generalizations from meta-analysis of brand advertising elasticities. <i>Journal of Marketing Research</i>, 48(3), 457–471.",
 "Sözeri, C., Güney, Z. (2011). <i>Türkiye'de Medyanın Ekonomi Politiği: Sektör Analizi</i>. TESEV Yayınları.",
 "Rekabet Kurumu: <a href=\"https://www.rekabet.gov.tr\">rekabet.gov.tr</a>"
],
next:"Sonraki: Hafta 12 — Tarihsel evrim: kuruşluk gazeteden kablolu TV'ye"
};
