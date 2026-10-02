window.WEEK={
id:"en-06",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"LCOE, depolama, hidrojen",week:6,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Yenilenebilir enerji II",
title:"Biyokütle, jeotermal ve <em>LCOE</em>: maliyeti hesaplamak",
intro:"Bu hafta biyoyakıt nesillerini ve jeotermal santral teknolojilerini tanıyacak, ardından enerji yatırımlarının ortak dili olan seviyelendirilmiş enerji maliyetini (LCOE) kendiniz hesaplayacaksınız. Depolama teknolojilerini, panel ömrü ve degradasyonun maliyete etkisini, yeşil hidrojenin maliyetini ve şebeke bağlantı anlaşmalarını da ele alacağız. Okuma süresi yaklaşık 50 dakika; sayfada dört hesaplayıcı, bir sınıflandırma alıştırması, sekmeli karşılaştırmalar ve 10 soruluk bir test var.",
goals:[
 "Birinci, ikinci ve üçüncü nesil biyoyakıtları hammaddelerine göre sınıflandırabilirsiniz.",
 "Kuru buhar, flaş buhar ve ikili çevrim jeotermal teknolojilerini kaynak sıcaklığına göre eşleştirebilirsiniz.",
 "Yıllıklandırılmış yatırım, işletme gideri ve yıllık üretimden basitleştirilmiş LCOE hesaplayıp kapasite faktörünün etkisini yorumlayabilirsiniz.",
 "Li-ion bataryaları ve pompaj depolamayı karşılaştırıp ömür ve degradasyonun ömür boyu üretime etkisini hesaplayabilirsiniz.",
 "Yeşil hidrojen maliyetinin bileşenlerini hesaplayıp şebeke bağlantısının yatırım için neden kritik olduğunu açıklayabilirsiniz."
],
sections:[
{n:"6.1",h:"Biyokütle ve biyoyakıt nesilleri",blocks:[
 {t:"p",html:"<b>Biyokütle enerjisi</b>, bitkiler, hayvansal atıklar ve tarımsal kalıntılar gibi organik maddelerden elde edilen yenilenebilir enerjidir. Doğrudan yakılarak ısı ve elektrik üretiminde, anaerobik çürütmeyle biyogaz üretiminde ya da işlenerek sıvı biyoyakıta dönüştürülerek kullanılabilir. Biyoyakıtlar, kullanılan <b>hammaddeye göre</b> nesillere ayrılır."},
 {t:"choice",items:[
  {label:"Birinci nesil",title:"Gıda olarak da tüketilebilen ürünlerden",body:"Mısır, buğday ve şeker kamışı gibi nişastalı ve şekerli bitkilerden etanol; soya, ayçiçeği, kolza ve palm yağından biyodizel üretilir. Teknoloji olgun ve ucuzdur.",ex:"Sorun: “Gıda mı, enerji mi?” tartışması. Aynı ürün hem gıda hem yakıt için kullanılınca tarım alanı ihtiyacı ve gıda fiyatları artabilir; orman alanlarının tarıma açılması emisyon kazancını silebilir."},
  {label:"İkinci nesil",title:"Gıda dışı biyokütleden",body:"Tarımsal atıklar (saman, mısır sapı), odunsu biyokütle (odun yongası), atık yağlar ve switchgrass gibi enerji bitkileri hammaddedir. Selülozu şekere çevirmek daha karmaşık ve pahalı bir süreç gerektirir.",ex:"Artısı: gıda güvenliğiyle doğrudan rekabet etmez, atıkları değerlendirir; yaşam döngüsü emisyonları genellikle birinci nesilden düşüktür."},
  {label:"Üçüncü nesil",title:"Alglerden",body:"Mikroalgler, birim alandan kara bitkilerinden çok daha fazla yağ üretebilir ve tarım arazisi gerektirmez. Ancak üretim maliyeti hâlâ yüksektir ve ticari ölçeğe ulaşmamıştır.",ex:"Kitap birinci ve ikinci nesli ele alıyor; üçüncü nesil literatürde sık kullanılan bir ek sınıftır."}
 ]},
 {t:"widget",name:"classify",opts:{title:"Bu biyoyakıt hangi nesilden?",cats:["Birinci nesil","İkinci nesil","Üçüncü nesil"],items:[
  ["Mısırdan üretilen etanol",0],["Buğday samanından üretilen selülozik etanol",1],["Kolza yağından biyodizel",0],
  ["Atık kızartma yağından biyodizel",1],["Mikroalg yağından biyodizel",2],["Şeker kamışından etanol",0],
  ["Orman atığı odun yongasından yakıt",1],["Şeker pancarından etanol",0]
 ],note:"Ölçüt hammaddedir: gıda olarak tüketilebilen ürün birinci, gıda dışı ve atık temelli hammadde ikinci, algler üçüncü nesildir. Üretim teknolojisi aynı olsa bile (ör. biyodizel) hammadde nesli belirler."}}
]},
{n:"6.2",h:"Jeotermal: kaynağın sıcaklığı teknolojiyi seçer",blocks:[
 {t:"p",html:"Jeotermal santraller yer altındaki sıcak su ve buhardan elektrik üretir. Her kaynağın sıcaklığı, basıncı ve akışkanı farklıdır; teknoloji kaynağa göre seçilir. Jeotermal santraller hava koşullarından bağımsız ve sürekli çalıştığı için yüksek kapasite faktörlü <b>baz yük</b> santralleridir."},
 {t:"table",head:["Teknoloji","Kaynak","Nasıl çalışır?","Artı / eksi"],rows:[
  ["Kuru buhar","Doğrudan buhar üreten, çok sıcak rezervuarlar (kitapta 180–300 °C)","Kuyudan gelen buhar doğrudan türbini döndürür","Basit ve verimli / bu tür kaynaklar dünyada çok az (ör. ABD'de The Geysers)"],
  ["Flaş buhar","Basınç altında sıcak su; genellikle 180 °C'nin üzeri","Yüzeye çıkan suyun basıncı düşünce bir kısmı aniden buhara dönüşür (flaş), buhar türbini çevirir","Dünyada en yaygın yöntem / korozyon ve mineral birikimi"],
  ["İkili çevrim","Orta sıcaklıklı akışkan, yaklaşık 70–170 °C","Jeotermal akışkan ısı değiştiricide düşük kaynama noktalı ikinci bir akışkanı (izobütan, pentan) buharlaştırır; türbini bu ikinci akışkan çevirir","Düşük sıcaklıklı yaygın sahalarda üretim, kapalı devre / verim daha düşük"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'nin jeotermal kaynakları ağırlıkla Batı Anadolu'da, özellikle Büyük Menderes ve Gediz grabenlerinde (Aydın, Denizli, Manisa) toplanır. Türkiye'nin ilk jeotermal elektrik santrali, 1984'te Denizli'de işletmeye giren <b>Kızıldere</b> santralidir. Bölgedeki sahaların çoğu orta-yüksek sıcaklıklıdır; flaş ve ikili çevrim teknolojileri birlikte kullanılır. Jeotermal suyun içerdiği karbondioksit ve mineraller bu sahalarda önemli bir çevre ve işletme konusudur."}
]},
{n:"6.3",h:"Seviyelendirilmiş enerji maliyeti (LCOE)",blocks:[
 {t:"def",html:"LCOE, bir santralin ekonomik ömrü boyunca ürettiği her birim elektriğin ortalama maliyetidir; “1 MWh elektriğin ortalama maliyeti nedir?” sorusuna yanıt verir.",src:"LCOE = Ömür boyu toplam maliyetlerin bugünkü değeri ÷ Ömür boyu üretimin bugünkü değeri"},
 {t:"p",html:"Payda yatırım, işletme, bakım, yakıt ve finansman giderleri; paydada santralin ömrü boyunca üreteceği elektrik vardır. LCOE farklı teknolojileri tek bir ölçüyle karşılaştırmayı sağlar: güneş mi, rüzgâr mı, doğal gaz mı daha ucuza elektrik üretir? Devletler destek politikalarının etkinliğini, yatırımcılar projelerinin rekabet gücünü bu ölçüyle değerlendirir."},
 {t:"box",lbl:"Basitleştirilmiş formül",html:"Yıllık eşit üretim ve gider varsayımıyla:<br><b>LCOE = (Yatırım × SGF + Yıllık işletme gideri + Yıllık yakıt gideri) ÷ Yıllık üretim</b><br>Sermaye geri kazanım faktörü: <b>SGF = r(1+r)<sup>n</sup> ÷ [(1+r)<sup>n</sup> − 1]</b> (r: iskonto oranı, n: ömür). SGF, bugünkü bir yatırımı ömür boyunca her yıl ödenecek eşit taksite çevirir; konut kredisinin aylık taksitini hesaplamakla aynı mantıktır."},
 {t:"widget",name:"calc",opts:{title:"Basitleştirilmiş LCOE",inputs:[{id:"k",label:"Kurulu güç",min:1,max:500,step:1,value:100,unit:" MW"},{id:"c",label:"Yatırım maliyeti",min:300,max:6000,step:50,value:800,unit:" $/kW"},{id:"o",label:"Yıllık işletme-bakım",min:5,max:150,step:1,value:15,unit:" $/kW-yıl"},{id:"y",label:"Yakıt maliyeti",min:0,max:100,step:1,value:0,unit:" $/MWh"},{id:"f",label:"Kapasite faktörü",min:5,max:95,step:1,value:22,unit:"%"},{id:"r",label:"İskonto oranı",min:2,max:15,step:0.5,value:8,unit:"%"},{id:"n",label:"Ekonomik ömür",min:10,max:60,step:1,value:25,unit:" yıl"}],formula:"(function(){var i=r/100,q=Math.pow(1+i,n),sgf=i*q/(q-1);var yat=c*1000*k*sgf,iob=o*1000*k,mwh=k*8760*f/100;var L=(yat+iob)/mwh+y;var g=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:1})};return g(L)+' $/MWh (yatırım '+g(yat/mwh)+' + işletme '+g(iob/mwh)+' + yakıt '+g(y)+') · yıllık üretim '+Math.round(mwh).toLocaleString('tr-TR')+' MWh';})()",result:"LCOE ≈ {r}",note:"Varsayılan değerler kabaca bir güneş santralini temsil eder; değerler örnektir, belirli bir yılın piyasa verisi değildir. Kapasite faktörünü %22'den %11'e indirin: yakıtsız bir santralde LCOE neredeyse ikiye katlanır. Yatırımı 1.400 $/kW, kapasite faktörünü %35 yapın: rüzgâra benzer bir santral. Doğal gaz için yatırımı düşük, kapasite faktörünü yüksek tutup yakıt maliyeti ekleyin: LCOE'nin büyük kısmının yakıttan geldiğini göreceksiniz. İskonto oranını %8'den %12'ye çıkarın: sermaye yoğun yenilenebilir projeler finansman maliyetine çok duyarlıdır."}},
 {t:"p",html:"Hesaplayıcı LCOE'nin üç temel ders verdiğini gösteriyor. (1) Yakıtsız teknolojilerde maliyetin neredeyse tamamı yatırımdır; bu yüzden <b>kapasite faktörü</b> ve <b>finansman maliyeti</b> belirleyicidir. (2) Fosil yakıtlı santrallerde maliyet büyük ölçüde <b>yakıt fiyatına</b> bağlıdır. (3) Yenilenebilir teknolojilerin yatırım maliyetleri son on beş yılda hızla düştüğü için birçok piyasada LCOE'leri fosil yakıtlı santrallerin altına indi; enerji dönüşümünü hızlandıran en önemli etkenlerden biri budur."},
 {t:"box",lbl:"LCOE'nin söylemedikleri",html:"LCOE, bir MWh'in ne zaman üretildiğini dikkate almaz. Öğle saatinde üretilen güneş elektriği ile akşam puantında üretilen elektriğin piyasa değeri farklıdır. Kesintili kaynakların şebekeye getirdiği dengeleme ve depolama ihtiyacı da LCOE'ye yansımaz. Bu yüzden LCOE, karşılaştırmanın başlangıç noktasıdır, son sözü değil."}
]},
{n:"6.4",h:"Ömür ve degradasyon",blocks:[
 {t:"p",html:"Yenilenebilir projelerde ilk yatırım kadar iki parametre daha önemlidir: <b>kullanım ömrü</b> ve <b>degradasyon oranı</b>. Kullanım ömrü, santralin ekonomik olarak çalışabileceği süredir; güneş santralleri için tipik olarak 25–30 yıl, rüzgâr santralleri için 20–25 yıl kabul edilir. Ömür uzadıkça yatırım daha fazla yıla ve daha çok üretime yayılır, LCOE düşer."},
 {t:"p",html:"<b>Degradasyon</b>, ekipmanın zamanla üretim kapasitesini kaybetmesidir. Yıllık %0,5 degradasyonlu bir PV panel, 20 yıl sonunda ilk yılki üretiminin yaklaşık %90'ını korur (0,995<sup>20</sup> ≈ 0,905). Yüksek degradasyon ömür boyu üretimi, yani LCOE formülünün paydasını küçültür."},
 {t:"widget",name:"calc",opts:{title:"Ömür ve degradasyonun toplam üretime etkisi",inputs:[{id:"e",label:"İlk yıl üretimi",min:100,max:5000,step:100,value:1000,unit:" MWh"},{id:"d",label:"Yıllık degradasyon",min:0,max:2,step:0.1,value:0.5,unit:"%"},{id:"n",label:"Kullanım ömrü",min:10,max:40,step:1,value:25,unit:" yıl"}],formula:"(function(){var q=1-d/100,t=0;for(var k=0;k<n;k++)t+=e*Math.pow(q,k);var son=Math.pow(q,n-1)*100;var g=function(x,m){return x.toLocaleString('tr-TR',{maximumFractionDigits:m})};return g(t,0)+' MWh · son yılın üretimi / ilk yıl: %'+g(son,1)+' · degradasyonsuz duruma göre kayıp %'+g((1-t/(e*n))*100,1);})()",result:"Ömür boyu üretim: {r}",note:"Kitaptaki karşılaştırmayı deneyin: 25 yıl ve %0,5 degradasyon ile 30 yıl ve %0,2 degradasyon. İkinci santral aynı yatırımla belirgin biçimde daha çok elektrik üretir, bu yüzden LCOE'si daha düşüktür. (Bu hesap üretimleri iskonto etmez; LCOE hesabında gelecek yılların üretimi ayrıca iskonto edilir.)"}}
]},
{n:"6.5",h:"Enerji depolama",blocks:[
 {t:"p",html:"Güneş ve rüzgârın kesintili doğası depolama ihtiyacını doğurur: öğle saatlerinde üretilen fazla güneş enerjisi depolanıp akşam puantında şebekeye verilebilir. Bugün öne çıkan iki teknoloji <b>lityum-iyon bataryalar</b> ve <b>pompaj depolamalı hidroelektrik</b> (PSH) santrallerdir."},
 {t:"table",head:["Ölçüt","Li-ion batarya","Pompaj depolamalı HES"],rows:[
  ["Ölçek","kW'tan yüzlerce MW'a","Yüzlerce MW'tan GW ölçeğine"],
  ["Depolama süresi","Dakikalar – birkaç saat","Saatler – günler"],
  ["Gidiş-dönüş verimi","Genellikle %85–90 civarı","Genellikle %70–85"],
  ["Kurulum","Hızlı; coğrafyaya bağlı değil","Uzun inşaat; uygun topoğrafya ve su gerekir"],
  ["Ömür","Çevrim sayısıyla sınırlı, genellikle 10–20 yıl","Onlarca yıl"],
  ["Tepki hızı","Milisaniyeler; frekans hizmetine çok uygun","Dakikalar"]]},
 {t:"p",html:"<b>Gidiş-dönüş verimi</b> (round-trip efficiency), depoya konan elektriğin ne kadarının geri alınabildiğidir. Depolama, ucuz saatte alıp pahalı saatte satarak (arbitraj) para kazanır; ama kaybolan enerji nedeniyle iki saat arasındaki fiyat farkının bu kaybı karşılaması gerekir."},
 {t:"widget",name:"calc",opts:{title:"Depolama arbitrajı",inputs:[{id:"a",label:"Şarj (alış) fiyatı",min:0,max:200,step:5,value:40,unit:" $/MWh"},{id:"s",label:"Deşarj (satış) fiyatı",min:0,max:300,step:5,value:120,unit:" $/MWh"},{id:"v",label:"Gidiş-dönüş verimi",min:50,max:95,step:1,value:88,unit:"%"},{id:"m",label:"Günlük şarj edilen enerji",min:10,max:1000,step:10,value:100,unit:" MWh"}],formula:"(function(){var b=a/(v/100);var kar=m*(v/100)*s-m*a;var g=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:1})};return g(kar)+' $/gün · başabaş satış fiyatı: '+g(b)+' $/MWh';})()",result:"Günlük brüt arbitraj kazancı: {r}",note:"Hesap: depoya m MWh konur, m × verim MWh geri alınır. Verimi %88'den %75'e (pompaj depolamaya yakın) indirin: aynı fiyat farkı daha az kazanç sağlar. Bu hesap yalnızca enerji maliyetini içerir; yatırımın geri dönmesi için bu kazancın yıllar boyunca tekrarlanması gerekir. Depolama gelirinin bir kısmı da yan hizmetlerden (Hafta 08) gelir."}}
]},
{n:"6.6",h:"Yeşil hidrojenin maliyeti",blocks:[
 {t:"p",html:"<b>Yeşil hidrojen</b>, suyun yenilenebilir elektrikle elektroliz edilerek hidrojen ve oksijene ayrıştırılmasıyla üretilir; üretiminde karbon salınmaz. Sanayide (çelik, gübre, rafineri), ağır taşımacılıkta ve uzun süreli enerji depolamada umut vadeder. Önündeki en büyük engel maliyettir."},
 {t:"list",items:[
  "<b>Elektrik fiyatı:</b> Toplam maliyetin en büyük kalemidir; kitaba göre yaklaşık %60–70'i. 1 kg hidrojen için bugünkü elektrolizörlerde yaklaşık 50–55 kWh elektrik harcanır.",
  "<b>Elektrolizör yatırımı ve kullanım oranı:</b> Alkali, PEM ve katı oksit elektrolizörlerin maliyet ve verimleri farklıdır. Elektrolizör yılın az saatinde çalışırsa yatırımı az hidrojene bölünür ve birim maliyet yükselir.",
  "<b>İşletme, su arıtma ve ölçek:</b> Saflaştırılmış su gerekir; deniz suyu kullanımı ek arıtma maliyeti getirir. Gigawatt ölçekli tesislerde birim maliyet belirgin biçimde düşer."
 ]},
 {t:"widget",name:"calc",opts:{title:"Yeşil hidrojen üretim maliyeti (basitleştirilmiş)",inputs:[{id:"p",label:"Elektrik fiyatı",min:10,max:150,step:5,value:45,unit:" $/MWh"},{id:"t",label:"Elektrik tüketimi",min:40,max:65,step:1,value:53,unit:" kWh/kg"},{id:"c",label:"Elektrolizör yatırımı",min:300,max:2500,step:50,value:900,unit:" $/kW"},{id:"f",label:"Elektrolizörün kapasite faktörü",min:10,max:95,step:1,value:55,unit:"%"}],formula:"(function(){var i=0.08,n=20,q=Math.pow(1+i,n),sgf=i*q/(q-1);var kg=8760*f/100/t;var yat=(c*sgf+c*0.03)/kg;var el=p*t/1000;var top=el+yat;var g=function(x){return x.toLocaleString('tr-TR',{minimumFractionDigits:2,maximumFractionDigits:2})};return g(top)+' $/kg (elektrik '+g(el)+' + yatırım ve işletme '+g(yat)+') · elektriğin payı %'+Math.round(el/top*100);})()",result:"Hidrojen maliyeti: {r}",note:"Varsayımlar: %8 iskonto, 20 yıl ömür, yıllık işletme gideri yatırımın %3'ü; su ve sıkıştırma maliyetleri dahil değil. Varsayılan değerlerde elektrik, kitaptaki gibi maliyetin yaklaşık üçte ikisini oluşturur. Elektrik fiyatını 45'ten 20 $/MWh'e indirin: maliyet belirgin biçimde düşer. Kapasite faktörünü %55'ten %20'ye indirin (yalnızca güneşli saatlerde çalışan elektrolizör): ucuz elektriğe rağmen yatırım payı büyür. Ucuz elektrik ile yüksek kullanım oranı arasındaki bu gerilim, yeşil hidrojen projelerinin temel tasarım sorusudur."}},
 {t:"p",html:"Maliyeti düşürmenin yolları kitapta şöyle sıralanır: yenilenebilir elektriğin ucuzlaması, elektrolizör teknolojisinde Ar-Ge, büyük ölçekli projelerle ölçek ekonomisi, yenilenebilir santral ile elektrolizörün entegre tasarlanması, karbon fiyatlaması ve devlet teşvikleri, depolama ve taşımada amonyak gibi taşıyıcıların kullanılması."}
]},
{n:"6.7",h:"Şebeke bağlantı anlaşması",blocks:[
 {t:"p",html:"Bir santral ne kadar ucuza elektrik üretirse üretsin, şebekeye bağlanamıyorsa gelir elde edemez. <b>Şebeke bağlantı anlaşması</b>, projenin teknik ve idari açıdan şebekeye uygunluğunu resmîleştirir. Finansman sağlayıcılar da kredi vermeden önce bu anlaşmayı güvence olarak görmek ister; bu yüzden bağlantı yalnızca teknik bir izin değil, aynı zamanda <b>finansal bir teminattır</b>."},
 {t:"table",head:["İncelenen kriter","Neden önemli?"],rows:[
  ["Şebeke kapasitesi","Bölgedeki iletim ve dağıtım hatları ek üretimi taşıyabilmeli; kapasite doluysa bağlantı verilmez"],
  ["Gerilim ve frekans uyumu","Üretilen elektrik şebeke standartlarına (Türkiye'de 50 Hz) uymalı"],
  ["Güç kalitesi","Harmonikler, reaktif güç ve gerilim dalgalanmaları sınırlar içinde kalmalı"],
  ["Koruma ekipmanı","Arıza anında şebekeyi ve santrali korumak için kesici ve röleler yeterli olmalı"],
  ["Şebeke istikrarına etki","Rüzgâr ve güneş gibi değişken kaynaklarda ayrıntılı incelenir"]]},
 {t:"p",html:"Bağlantı sürecinin başlıca riskleri <b>gecikme</b> (altyapı hazır değilse santral devreye alınamaz), <b>ek yatırım</b> (trafo merkezi ya da hat güçlendirme), <b>kapasite yetersizliği</b> ve <b>idari süreçlerin uzamasıdır</b>. Bir yıllık bağlantı gecikmesi, LCOE hesaplayıcısındaki yatırımın bir yıl boyunca hiç üretim yapmadan faiz yükü taşıması demektir."}
]},
{n:"6.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Birinci nesil biyoyakıt","Gıda olarak da tüketilebilen ürünlerden (mısır, şeker kamışı, bitkisel yağ) üretilen yakıt."],
  ["İkinci nesil biyoyakıt","Tarımsal atık, odunsu biyokütle ve atık yağ gibi gıda dışı hammaddeden üretilen yakıt."],
  ["Flaş buhar","Basınçlı sıcak suyun yüzeyde basınç düşünce buhara dönüşmesiyle çalışan jeotermal teknoloji."],
  ["İkili çevrim","Jeotermal ısıyı düşük kaynama noktalı ikinci bir akışkana aktaran kapalı devre teknoloji."],
  ["LCOE","Ömür boyu maliyetlerin ömür boyu üretime oranı; birim elektrik maliyeti."],
  ["Sermaye geri kazanım faktörü","Bugünkü yatırımı ömür boyu eşit yıllık taksite çeviren katsayı."],
  ["Degradasyon","Ekipmanın yıllar içinde üretim kapasitesini kaybetme oranı."],
  ["Gidiş-dönüş verimi","Depoya konan elektriğin geri alınabilen oranı."],
  ["Yeşil hidrojen","Yenilenebilir elektrikle suyun elektrolizinden üretilen hidrojen."],
  ["Şebeke bağlantı anlaşması","Santralin şebekeye bağlanma koşullarını resmîleştiren, finansmanın da ön şartı olan anlaşma."]
 ]}
]},
{n:"6.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Biyoyakıtın hangi nesilden olduğunu belirleyen temel ölçüt nedir?",o:["Üretim teknolojisi","Kullanılan hammadde","Yakıtın ısıl değeri","Üretildiği ülke"],a:1,e:"Gıda temelli hammadde birinci, gıda dışı ve atık temelli hammadde ikinci, algler üçüncü nesil olarak sınıflandırılır."},
  {q:"Birinci nesil biyoyakıtlara yöneltilen “gıda mı, enerji mi?” eleştirisinin özü nedir?",o:["Biyoyakıtların araç motorlarına zarar vermesi","Gıda ürününün yakıta gidip fiyatları artırması","Biyoyakıtların yenilenebilir kaynak sayılmaması","Tarımsal atıkların hiç değerlendirilememesi"],a:1,e:"Gıda olarak tüketilebilen ürünlerin yakıta yönelmesi tarım alanı ihtiyacını ve gıda fiyatlarını artırabilir."},
  {q:"Yaklaşık 120 °C sıcaklıkta su veren bir jeotermal saha için en uygun teknoloji hangisidir?",o:["Kuru buhar","Flaş buhar","İkili çevrim","Pompaj depolama"],a:2,e:"İkili çevrim, orta sıcaklıklı akışkanın ısısını düşük kaynama noktalı ikinci bir akışkana aktararak düşük sıcaklıkta da üretim sağlar."},
  {q:"Yakıt maliyeti sıfır olan bir güneş santralinde kapasite faktörü yarıya inerse LCOE'ye ne olur?",o:["Yakıt olmadığı için değişmez","Üretimle birlikte yarıya iner","Yaklaşık iki katına çıkar","Yalnızca işletme payı kadar artar"],a:2,e:"Yıllık maliyetler sabitken payda (üretim) yarıya iner; LCOE yaklaşık iki katına çıkar."},
  {q:"Yatırımın yıllık eşdeğeri 8 milyon $, yıllık işletme gideri 2 milyon $, yıllık üretim 200.000 MWh ise basitleştirilmiş LCOE kaçtır?",o:["40 $/MWh","50 $/MWh","10 $/MWh","25 $/MWh"],a:1,e:"(8 + 2) milyon $ ÷ 200.000 MWh = 50 $/MWh."},
  {q:"Sermaye yoğun bir rüzgâr projesinde iskonto oranının yükselmesi LCOE'yi nasıl etkiler?",o:["LCOE düşer","LCOE yükselir","Etkisi yoktur, çünkü yakıt yoktur","Yalnızca yakıt maliyeti artar"],a:1,e:"Yüksek iskonto oranı sermaye geri kazanım faktörünü, yani yatırımın yıllık taksitini büyütür; yakıtsız projelerde LCOE'nin ana bileşeni budur."},
  {q:"Yıllık %0,5 degradasyonlu bir panel 20 yıl sonra ilk yılki üretiminin yaklaşık ne kadarını korur?",o:["%80","%90","%95","%99"],a:1,e:"0,995²⁰ ≈ 0,905; yani yaklaşık %90."},
  {q:"Gidiş-dönüş verimi %80 olan bir depo 50 $/MWh'den şarj ediliyor. Zarar etmemek için satış fiyatı en az kaç olmalıdır?",o:["40 $/MWh","50 $/MWh","62,5 $/MWh","90 $/MWh"],a:2,e:"Depoya konan her MWh'in yalnızca 0,8'i geri alınır: 50 ÷ 0,8 = 62,5 $/MWh."},
  {q:"Elektroliz için 50 kWh/kg harcanıyor ve elektrik 30 $/MWh ise 1 kg hidrojenin elektrik maliyeti kaçtır?",o:["0,6 $","1,5 $","15 $","3 $"],a:1,e:"50 kWh = 0,05 MWh; 0,05 × 30 = 1,5 $/kg."},
  {q:"Şebeke bağlantı anlaşması neden finansal bir teminat olarak görülür?",o:["Satış fiyatını ömür boyu sabitlediği için","Bağlantı olmadan satış ve gelir olmayacağı için","Bütün projelere otomatik olarak verildiği için","Santralin yatırım maliyetini doğrudan düşürdüğü için"],a:1,e:"Şebekeye bağlanamayan santralin satış geliri yoktur; kreditörler bu yüzden bağlantı anlaşmasını finansmanın ön şartı sayar."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 3, s. 46–57.",
 "International Renewable Energy Agency (IRENA) — Renewable power generation costs ve Green hydrogen cost reduction raporları: <a href=\"https://www.irena.org\">irena.org</a>",
 "International Energy Agency — Global Hydrogen Review: <a href=\"https://www.iea.org\">iea.org</a>",
 "Lazard — Levelized Cost of Energy+ (yıllık rapor): <a href=\"https://www.lazard.com\">lazard.com</a>"
],
next:"Sonraki: Hafta 07 — Elektrik piyasaları: GÖP, GİP, marjinal fiyatlama ve fiyat riski"
};
