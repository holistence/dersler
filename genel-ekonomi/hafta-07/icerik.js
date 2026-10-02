window.WEEK={
id:"ge-07",code:"GE",course:"Genel Ekonomi",short:"Üretim ve maliyet",week:7,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Mikroiktisat",
title:"Üretim ve <em>maliyetler</em>",
intro:"Bu hafta arz eğrisinin arkasına geçiyoruz: firmalar nasıl üretir, üretim arttıkça maliyetler nasıl değişir? Üretimin türlerini ve faktörlerini, kısa dönemde azalan verimleri, ekonomik kâr ile muhasebe kârı arasındaki farkı, maliyet eğrilerini, ölçek ekonomilerini ve batık maliyet yanılgısını öğreneceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada dört hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Üretimi şekil, mekân, zaman ve mülkiyet yönünden tanımlayıp dört üretim faktörünü sayabilirsiniz.",
 "Toplam, ortalama ve marjinal ürünü hesaplayıp üretimin üç aşamasını ayırt edebilirsiniz.",
 "Açık ve örtük maliyetleri kullanarak muhasebe kârı ile ekonomik kârı hesaplayabilirsiniz.",
 "Sabit, değişken, ortalama ve marjinal maliyeti hesaplayıp marjinal maliyetin ortalamayı nasıl etkilediğini açıklayabilirsiniz.",
 "Ölçek ekonomilerini ve batık maliyet yanılgısını örneklerle açıklayabilirsiniz."
],
sections:[
{n:"7.1",h:"Üretim nedir?",blocks:[
 {t:"p",html:"Üretim, insan ihtiyaçlarını karşılamak için mal ve hizmetlerin <b>miktarını ya da faydasını artıran</b> bütün faaliyetlerdir. Yalnızca fabrikada bir şey imal etmek değildir; var olan bir malın değerini artıran her faaliyet üretimdir. Bu yüzden imalat üretimin bir parçasıdır, ama üretim çok daha geniş bir kavramdır."},
 {t:"choice",items:[
  {label:"Şekil",title:"Şekil yönünden üretim",body:"Hammaddenin işlenerek yeni bir mala dönüştürülmesi.",ex:"Kerestenin masa ve sandalyeye dönüşmesi."},
  {label:"Mekân",title:"Mekân yönünden üretim",body:"Malın üretildiği yerden ihtiyaç duyulan yere taşınması faydasını artırır; taşımacılık da üretimdir.",ex:"Diyarbakır'da yetişen karpuzun Erzurum'daki tüketiciye ulaştırılması."},
  {label:"Zaman",title:"Zaman yönünden üretim",body:"Bol olduğu dönemde depolanıp kıt olduğu dönemde piyasaya sunulan mal daha fazla fayda sağlar.",ex:"Hasatta ucuza alınan buğdayın depolanıp kışın satılması."},
  {label:"Mülkiyet",title:"Mülkiyet yönünden üretim",body:"Malın el değiştirmesi de üretimdir; iki taraf da daha yüksek fayda elde edebilir.",ex:"Bir emlakçının bir evin el değiştirmesine aracılık etmesi."}
 ]},
 {t:"p",html:"Üretim farklı ölçütlerle de sınıflandırılır: ürün tipine göre <b>tüketim malları</b> (gıda, giyim) ve <b>sermaye malları</b> (makine, teçhizat); sürecine göre <b>sürekli</b> ve <b>aralıklı</b> üretim; miktarına göre <b>toplu</b> (aynı üründen büyük miktarda) ve <b>seri</b> (farklı ürünlerden küçük partiler) üretim."},
 {t:"table",head:["Üretim faktörü","İçeriği","Getirisi"],rows:[
  ["Emek","İnsan gücü ve becerisi","Ücret"],
  ["Sermaye","Makine, teçhizat, bina gibi fiziksel üretim araçları","Faiz"],
  ["Doğal kaynaklar (toprak)","Hammadde, enerji ve doğadan elde edilen her şey","Rant (kira)"],
  ["Girişimcilik","Fikir üreten, risk üstlenen, üretimi yöneten kişi","Kâr"]]},
 {t:"widget",name:"classify",opts:{title:"Hangi üretim faktörü?",cats:["Emek","Sermaye","Doğal kaynak","Girişimcilik"],items:[
  ["Bir tekstil fabrikasındaki dikiş makineleri",1],
  ["Fırında çalışan ustanın emeği ve becerisi",0],
  ["Bir çiftliğin tarım arazisi",2],
  ["Yeni bir kafe açmak için riski üstlenen kişi",3],
  ["Bir yazılım şirketindeki programcının mesaisi",0],
  ["Hidroelektrik santralini döndüren nehir suyu",2],
  ["Kargo şirketinin teslimat kamyonları",1],
  ["Pazara yeni bir ürün sunmaya karar veren şirket kurucusu",3]
 ],note:"Sermaye, para değil, üretimde kullanılan fiziksel araçlardır. Girişimci ise diğer üç faktörü bir araya getirip riski üstlenir."}}
]},
{n:"7.2",h:"Üretim fonksiyonu ve azalan verimler",blocks:[
 {t:"p",html:"<b>Üretim fonksiyonu</b>, bir firmanın belirli girdi bileşimiyle ulaşabileceği en yüksek çıktıyı gösterir: <b>Q = f(L, K, M)</b>. Burada L emek, K sermaye, M hammaddedir; f ise girdilerin nasıl bir araya getirileceğini belirleyen teknolojidir. Teknoloji geliştikçe aynı girdiyle daha çok üretilir."},
 {t:"p",html:"Zaman boyutu önemlidir. <b>Kısa dönemde</b> en az bir faktör (genellikle fabrika binası, makine parkı) sabittir; yalnızca işçi sayısı veya hammadde değiştirilebilir. <b>Uzun dönemde</b> bütün faktörler değiştirilebilir: yeni fabrika kurulur, teknoloji yenilenir."},
 {t:"box",lbl:"Formül",html:"Toplam ürün (TP): üretilen toplam miktar<br>Ortalama ürün (AP<sub>L</sub>) = TP ÷ L<br>Marjinal ürün (MP<sub>L</sub>) = ΔTP ÷ ΔL — bir işçi daha eklenince üretimdeki artış"},
 {t:"p",html:"Sabit büyüklükteki bir fırına işçi ekleyelim. İlk işçiler iş bölümü yaparak verimi hızla artırır. Bir noktadan sonra fırın ve tezgâh paylaşılmaya başlanır; her yeni işçinin katkısı azalır. Çok fazla işçi olursa birbirlerinin ayağına dolanırlar ve toplam üretim düşer. Bu, <b>azalan verimler yasasıdır</b>."},
 {t:"table",head:["İşçi (L)","Toplam ürün (TP)","Marjinal ürün (MP)","Ortalama ürün (AP)","Aşama"],rows:[
  ["1","20","20","20","1. Artan verimler"],
  ["2","50","30","25","1. Artan verimler"],
  ["3","90","40","30","1. Artan verimler"],
  ["4","120","30","30","2. Azalan verimler"],
  ["5","140","20","28","2. Azalan verimler"],
  ["6","150","10","25","2. Azalan verimler"],
  ["7","150","0","21,4","TP en yüksek, MP = 0"],
  ["8","140","−10","17,5","3. Negatif verimler"]]},
 {t:"list",items:[
  "<b>1. Artan verimler:</b> Hem TP hem MP hem AP yükselir; faktörler daha etkin kullanılır.",
  "<b>2. Azalan verimler:</b> TP artmaya devam eder ama MP düşer. Kitap bu aşamayı “pozitif azalan verimler” olarak adlandırır ve <b>rasyonel üretim bölgesi</b> sayar.",
  "<b>3. Negatif verimler:</b> MP negatif olur, TP azalır; fazla işçi süreci verimsizleştirir."
 ]},
 {t:"widget",name:"calc",opts:{title:"Bir işçi daha alırsam ne olur?",inputs:[{id:"l",label:"Çalışan sayısı",min:2,max:8,step:1,value:4,unit:" işçi"}],formula:"(function(){var t=[0,20,50,90,120,140,150,150,140],m=t[l]-t[l-1];return 'TP '+t[l]+', son işçinin marjinal ürünü '+m+', ortalama ürün '+(t[l]/l).toLocaleString('tr-TR',{maximumFractionDigits:1})+' → '+(m<0?'negatif verimler: işçi çıkarmak üretimi artırır':(m==0?'toplam ürün zirvede':(t[l]-t[l-1]>t[l-1]-t[l-2]?'artan verimler':'azalan verimler')));})()",result:"{r}",note:"Tablodaki fırın örneği. MP, AP'nin üzerindeyken AP yükselir; altına inince AP düşer. İkisi 3–4 işçide (AP = 30) buluşur."}}
]},
{n:"7.3",h:"Muhasebe kârı ve ekonomik kâr",blocks:[
 {t:"p",html:"Maliyetler ikiye ayrılır. <b>Açık maliyetler</b> firmanın fiilen ödediği tutarlardır: maaş, kira, hammadde. <b>Örtük maliyetler</b> ise doğrudan ödeme yapılmayan, ama alternatif bir kullanımı olan kaynakların fırsat maliyetidir. Girişimci kendi binasında işletme açtıysa, o binayı kiraya verseydi alacağı kira örtük bir maliyettir."},
 {t:"box",lbl:"Formül",html:"Muhasebe kârı = Toplam gelir − Açık maliyetler<br>Ekonomik kâr = Toplam gelir − (Açık maliyetler + Örtük maliyetler)"},
 {t:"p",html:"Muhasebe kârı finansal raporlama ve vergi için kullanılır. Ekonomik kâr ise işletmenin gerçekten değer yaratıp yaratmadığını gösterir. Ekonomik kâr genellikle muhasebe kârından düşüktür; bir işletme muhasebe açısından kârlı görünürken ekonomik açıdan zarar ediyor olabilir."},
 {t:"widget",name:"calc",opts:{title:"Kafem gerçekten kâr ediyor mu?",inputs:[{id:"r",label:"Yıllık satış geliri",min:500,max:3000,step:50,value:1500,unit:" bin TL"},{id:"e",label:"Açık maliyetler (malzeme, personel, fatura)",min:200,max:2500,step:50,value:1000,unit:" bin TL"},{id:"w",label:"Vazgeçtiğiniz maaş",min:0,max:1000,step:25,value:450,unit:" bin TL"},{id:"k",label:"Kendi dükkânınızı kiraya verseydiniz alacağınız kira",min:0,max:500,step:10,value:120,unit:" bin TL"}],formula:"'muhasebe kârı '+(r-e).toLocaleString('tr-TR')+' bin TL · ekonomik kâr '+(r-e-w-k).toLocaleString('tr-TR')+' bin TL → '+(r-e-w-k>0?'kaynaklarınız en iyi alternatifinden fazla kazandırıyor':(r-e-w-k==0?'normal kâr: alternatif kadar kazanıyorsunuz':'muhasebe kârına rağmen alternatifiniz daha kazançlı'))",result:"{r}",note:"Örnekte muhasebe kârı 500 bin TL, ama maaşlı işte kalıp dükkânı kiraya verseydiniz 570 bin TL elde edecektiniz. Ekonomik kâr −70 bin TL'dir."}}
]},
{n:"7.4",h:"Kısa dönem maliyetleri",blocks:[
 {t:"table",head:["Maliyet","Tanım","Formül / örnek"],rows:[
  ["Sabit maliyet (FC)","Üretim miktarından bağımsız; hiç üretilmese de ödenir","Kira, sigorta, amortisman"],
  ["Değişken maliyet (VC)","Üretim miktarıyla birlikte değişir","Hammadde, elektrik, su"],
  ["Toplam maliyet (TC)","Sabit ve değişkenin toplamı","TC = FC + VC"],
  ["Ortalama sabit maliyet (AFC)","Birim başına sabit maliyet; üretim arttıkça sürekli düşer","AFC = FC ÷ Q"],
  ["Ortalama toplam maliyet (ATC)","Birim başına toplam maliyet","ATC = TC ÷ Q"],
  ["Marjinal maliyet (MC)","Bir birim daha üretmenin ek maliyeti","MC = ΔTC ÷ ΔQ"]]},
 {t:"p",html:"Üretim arttıkça sabit maliyet daha çok birime yayılır; bu yüzden ortalama maliyet başta düşer. Bir noktadan sonra azalan verimler devreye girer: her ek birimi üretmek daha çok işçi ve girdi gerektirir, marjinal maliyet yükselir ve ortalamayı yukarı çeker. Kısa dönem ortalama ve marjinal maliyet eğrileri bu yüzden <b>U şeklindedir</b>."},
 {t:"box",lbl:"Marjinal–ortalama kuralı",html:"Marjinal maliyet ortalamanın <b>altındaysa</b> ortalamayı aşağı çeker; <b>üstündeyse</b> yukarı çeker. Bu yüzden MC eğrisi, ATC ve AVC eğrilerini onların en düşük noktasından keser. Sınıfın not ortalaması 70 iken 50 alan yeni bir öğrenci gelirse ortalama düşer; 90 alan gelirse yükselir."},
 {t:"p",html:"Aşağıdaki hesaplayıcıda maliyet yapısı TC = FC + 10Q + 0,1875Q² biçimindedir; marjinal maliyet 10 + 0,375Q olarak doğrusal artar. Sabit maliyeti kitaptaki şekildeki gibi 300 alırsanız ortalama maliyet 40 birimde en düşük düzeyine iner ve orada marjinal maliyete eşit olur. Kitaptaki Şekil 11'de MC ile ATC'nin kesiştiği nokta da 40 birimdir."},
 {t:"widget",name:"calc",opts:{title:"Maliyet eğrileri",inputs:[{id:"f",label:"Sabit maliyet (FC)",min:0,max:600,step:50,value:300,unit:" TL"},{id:"q",label:"Üretim miktarı (Q)",min:5,max:80,step:5,value:20,unit:" birim"}],formula:"(function(){var tc=f+10*q+0.1875*q*q,atc=tc/q,mc=10+0.375*q,g=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'TC '+g(tc)+' · AFC '+g(f/q)+' · ATC '+g(atc)+' · MC '+g(mc)+' → '+(Math.abs(mc-atc)<0.05?'ATC en düşük noktasında (MC = ATC)':(mc<atc?'MC < ATC: ortalama düşüyor':'MC > ATC: ortalama yükseliyor'));})()",result:"{r}",note:"Q'yu 20'den 60'a doğru kaydırın; 40'ta ATC en düşük değerine (25 TL) iner. FC'yi değiştirince MC değişmez; sabit maliyet marjinal kararları etkilemez."}}
]},
{n:"7.5",h:"Ölçek ekonomileri ve uzun dönem",blocks:[
 {t:"p",html:"Uzun dönemde bütün faktörler değişkendir; firma tesisini büyütebilir ya da küçültebilir. Soru artık “ne kadar üreteceğim?” değil, “hangi ölçekte üreteceğim?” olur. Bütün girdiler aynı oranda artırıldığında üretim:"},
 {t:"list",items:[
  "girdiden daha hızlı artarsa <b>ölçeğe göre artan getiri</b> (ölçek ekonomisi: birim maliyet düşer),",
  "girdiyle aynı oranda artarsa <b>ölçeğe göre sabit getiri</b>,",
  "girdiden daha yavaş artarsa <b>ölçeğe göre azalan getiri</b> (ölçek eksi ekonomisi: birim maliyet yükselir) vardır."
 ]},
 {t:"p",html:"Ölçek ekonomilerinin kaynakları: sabit maliyetlerin daha geniş üretime yayılması, işgücünün uzmanlaşması, toplu hammadde alımında indirimler ve büyük ölçekte gelişmiş teknoloji kullanabilme. Otomobil üretimi, elektrik santralleri ve havayolu taşımacılığı klasik örneklerdir. Ancak yüksek sermaye ihtiyacı küçük firmalar için giriş engeli olabilir, büyüklük tekelleşmeye ve aşırı büyüyen işletmelerde hantallığa yol açabilir."},
 {t:"p",html:"<b>Uzun dönem ortalama maliyet eğrisi</b> (LRAC), farklı tesis büyüklüklerine ait kısa dönem ortalama maliyet eğrilerini saran bir <b>zarf eğrisidir</b>. Firma henüz kurulmadan hangi ölçeği seçeceğini bu eğriye bakarak planladığı için ona <b>planlama eğrisi</b> de denir. LRAC'nin en düşük noktasındaki tesis, <b>optimum tesis büyüklüğüdür</b>."},
 {t:"table",head:["","Kısa dönem","Uzun dönem"],rows:[
  ["Sabit maliyet","Vardır (kira, faiz, sabit personel)","Yoktur; bütün maliyetler değişkendir"],
  ["Karar esnekliği","Sınırlı; yalnızca emek ve malzeme ayarlanır","Yüksek; fabrika büyüklüğü, teknoloji, yer değişebilir"],
  ["Maliyet eğrileri","SRAC ve SRMC","LRAC (zarf eğrisi)"],
  ["Temel soru","Ne kadar üreteceğim?","Hangi ölçekte üreteceğim?"]]}
]},
{n:"7.6",h:"Batık maliyet yanılgısı",blocks:[
 {t:"def",html:"Batık maliyet, geri alınamaz biçimde harcanmış para, zaman veya emektir. Rasyonel bir karar verici için batık maliyetler bugünkü kararı etkilememelidir.",src:"Kitaptaki özlü ifade: “Akılcı karar, geçmişin bedelini geleceğin terazisine koymaz.”"},
 {t:"p",html:"Tek bakılması gereken soru şudur: <b>bundan sonra</b> yapılacak ek harcamanın getireceği ek fayda, ek maliyeti aşıyor mu? Ama insanlar “zaten bu kadar emek verdik” diyerek kötü giden projeleri sürdürür. Buna <b>batık maliyet yanılgısı</b> denir; iyi para kötü paranın peşinden gider."},
 {t:"widget",name:"calc",opts:{title:"Projeye devam mı, dur mu?",inputs:[{id:"s",label:"Şimdiye kadar harcanan (batık)",min:0,max:2000,step:50,value:800,unit:" bin TL"},{id:"c",label:"Bitirmek için gereken ek harcama",min:0,max:2000,step:50,value:600,unit:" bin TL"},{id:"b",label:"Proje bitince beklenen getiri",min:0,max:2000,step:50,value:500,unit:" bin TL"}],formula:"(b>c?'devam edin: ek getiri ('+b.toLocaleString('tr-TR')+') ek maliyeti ('+c.toLocaleString('tr-TR')+') aşıyor':(b==c?'kayıtsız: ek getiri ek maliyete eşit':'durun: devam etmek '+(c-b).toLocaleString('tr-TR')+' bin TL ek kayıp demek'))+'. Batık '+s.toLocaleString('tr-TR')+' bin TL karara girmez.'",result:"Karar: {r}",note:"Batık maliyet sürgüsünü istediğiniz kadar oynatın; karar değişmez. Değişmiyorsa doğru düşünüyorsunuz demektir."}},
 {t:"box",lbl:"Gündelik örnek",html:"İki saatlik bir filmin ilk yarım saati çok kötü. Bileti zaten aldınız, para geri gelmeyecek. Kalan bir buçuk saatinizi orada geçirmek mi, yoksa başka bir şey yapmak mı daha değerli? Bilet parası bu sorunun cevabını değiştirmemeli."}
]},
{n:"7.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Üretim fonksiyonu","Girdiler ile ulaşılabilecek en yüksek çıktı arasındaki ilişki: Q = f(L, K, M)."],
  ["Marjinal ürün","Bir birim daha girdi (ör. bir işçi) eklenince üretimdeki artış."],
  ["Azalan verimler","Sabit faktöre değişken faktör eklendikçe marjinal ürünün bir noktadan sonra düşmesi."],
  ["Örtük maliyet","Ödeme yapılmayan ama alternatif kullanımı olan kaynağın fırsat maliyeti."],
  ["Ekonomik kâr","Toplam gelirden açık ve örtük maliyetlerin düşülmesiyle kalan kâr."],
  ["Marjinal maliyet","Bir birim daha üretmenin ek maliyeti: ΔTC ÷ ΔQ."],
  ["Ölçek ekonomisi","Üretim ölçeği büyüdükçe birim maliyetin düşmesi."],
  ["Zarf eğrisi (LRAC)","Kısa dönem ortalama maliyet eğrilerini saran uzun dönem ortalama maliyet eğrisi; planlama eğrisi."],
  ["Batık maliyet","Geri alınamaz biçimde harcanmış ve bugünkü kararı etkilememesi gereken maliyet."]
 ]}
]},
{n:"7.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Hasat zamanı ucuza alınan fındığın depolanıp aylar sonra satılması hangi tür üretimdir?",o:["Şekil yönünden üretim","Mekân yönünden üretim","Zaman yönünden üretim","Mülkiyet yönünden üretim"],a:2,e:"Mal fiziksel olarak değişmedi, yer de değiştirmedi; kıt olduğu döneme taşınarak faydası arttı."},
  {q:"Bir fırında 3 işçiyle günde 90, 4 işçiyle 120 ekmek üretiliyor. Dördüncü işçinin marjinal ürünü nedir?",o:["120 ekmek","30 ekmek","90 ekmek","210 ekmek"],a:1,e:"MP = ΔTP ÷ ΔL = (120 − 90) ÷ 1 = 30 ekmek."},
  {q:"Azalan verimler aşamasında (2. bölge) hangisi doğrudur?",o:["Toplam ürün azalmaya başlıyor","TP artıyor ama marjinal ürün düşüyor","Marjinal ürün negatife dönüyor","Hem toplam hem marjinal ürün artıyor"],a:1,e:"Bu aşamada her yeni işçi hâlâ katkı yapar (TP artar) ama katkısı bir öncekinden azdır (MP düşer)."},
  {q:"Bir avukat 600 bin TL maaşlı işinden ayrılıp kendi bürosunu açıyor. Yıllık gelir 1.200 bin, açık maliyetler 700 bin TL. Ekonomik kârı nedir?",o:["500 bin TL","−100 bin TL","1.200 bin TL","600 bin TL"],a:1,e:"Muhasebe kârı 1.200 − 700 = 500 bin TL; vazgeçilen maaş (örtük maliyet) düşülünce 500 − 600 = −100 bin TL."},
  {q:"Hangisi kısa dönemde sabit maliyettir?",o:["Kullanılan un","Fabrikanın yıllık kirası","Üretimde harcanan elektrik","Parça başı ücret"],a:1,e:"Kira üretim miktarından bağımsızdır; hiç üretim yapılmasa da ödenir."},
  {q:"FC = 300 TL, 20 birim üretiliyor. Ortalama sabit maliyet nedir ve üretim 30'a çıkınca ne olur?",o:["15 TL; 10 TL'ye düşer","15 TL; değişmez","6.000 TL; artar","300 TL; değişmez"],a:0,e:"AFC = 300 ÷ 20 = 15 TL. Üretim 30'a çıkınca 300 ÷ 30 = 10 TL olur; sabit maliyet daha çok birime yayılır."},
  {q:"Ortalama toplam maliyet 25 TL iken bir birim daha üretmenin marjinal maliyeti 18 TL ise ne olur?",o:["Ortalama maliyet yükselir","Ortalama maliyet düşer","Ortalama maliyet değişmez","Sabit maliyet düşer"],a:1,e:"Marjinal maliyet ortalamanın altındaysa ortalamayı aşağı çeker."},
  {q:"Bir otomobil fabrikası üretimi ikiye katladığında birim maliyeti %15 düşüyor. Bu neyin göstergesidir?",o:["Azalan verimler","Ölçek ekonomisi","Batık maliyet yanılgısı","Ölçeğe göre azalan getiri"],a:1,e:"Ölçek büyüdükçe birim maliyetin düşmesi ölçek ekonomisidir (ölçeğe göre artan getiri)."},
  {q:"Bir proje için 800 bin TL harcandı. Bitirmek için 600 bin TL daha gerekiyor, bitince 500 bin TL getiri bekleniyor. Rasyonel karar nedir?",o:["Devam etmek, 800 bin heba olmasın","Durmak, ek getiri ek maliyetin altında","Devam etmek, toplam maliyet 1,4 milyon","Ek 800 bin harcayıp genişletmek"],a:1,e:"800 bin batıktır ve karara girmez. Ek 600 bin TL harcayıp 500 bin TL almak 100 bin TL ek kayıptır."},
  {q:"Uzun dönem ortalama maliyet eğrisine neden “zarf eğrisi” denir?",o:["Bütün maliyetleri sabit kabul ettiği için","Farklı ölçeklerdeki kısa dönem eğrilerini sardığı için","Yalnızca marjinal maliyeti gösterdiği için","Toplam hasılatı da içerdiği için"],a:1,e:"LRAC, her ölçek için en düşük kısa dönem ortalama maliyetleri birleştirir; kısa dönem eğrilerini dıştan saran bir eğridir."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 10–11, s. 71–92.",
 "Mankiw, N. G. <i>Principles of Economics</i>. Cengage Learning (Bölüm 13: üretim maliyetleri).",
 "Pindyck, R. S., Rubinfeld, D. L. <i>Microeconomics</i>. Pearson (Bölüm 6–7: üretim ve maliyet).",
 "Arkes, H. R., Blumer, C. (1985). The Psychology of Sunk Cost. <i>Organizational Behavior and Human Decision Processes</i>, 35(1), 124–140."
],
next:"Sonraki: Hafta 08 — Devlet müdahaleleri ve piyasa başarısızlıkları"
};
