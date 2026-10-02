window.WEEK={
id:"en-11",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Verimlilik ve talep yönetimi",week:11,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Enerji yönetimi",
title:"En ucuz enerji, <em>tüketilmeyen</em> enerjidir",
intro:"Bu hafta enerji verimliliği ile enerji tasarrufu arasındaki farkı, verimlilik yatırımlarının ESCO modeliyle nasıl finanse edildiğini, sanayide atık ısı geri kazanımını ve ISO 50001 enerji yönetim sistemini öğreneceksiniz. Binalarda pasif tasarımı ve Enerji Kimlik Belgesi'ni, ardından zamana bağlı tarifeyi, yeşil tahvili ve döngüsel ekonomiyi ele alacağız. Okuma süresi yaklaşık 45 dakika; sayfada dört hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Enerji verimliliği ile enerji tasarrufunu örneklerle ayırt edebilirsiniz.",
 "ESCO modelinde tasarrufun nasıl paylaşıldığını ve riskin kime geçtiğini açıklayabilirsiniz.",
 "Bir atık ısı projesinin basit geri ödeme süresini hesaplayıp yorumlayabilirsiniz.",
 "Enerji Kimlik Belgesi'nin sınıflandırma mantığını ve pasif tasarım stratejilerini açıklayabilirsiniz.",
 "Zamana bağlı tarifede tüketimi kaydırmanın faturaya etkisini ve yeşil tahvilin işleyişini hesaplayabilirsiniz."
],
sections:[
{n:"11.1",h:"Verimlilik mi, tasarruf mu?",blocks:[
 {t:"p",html:"Yeni santral kurmak büyük yatırım gerektirir; oysa hiç tüketilmeyen enerjinin ne yakıt maliyeti ne de emisyonu vardır. Kitabın bölüm girişindeki cümle bunu özetler: <i>Bir watt tasarruf, bir watt üretmekten daha ucuzdur.</i> Ancak enerjiyi azaltmanın iki farklı yolu vardır ve sık karıştırılır."},
 {t:"table",head:["","Enerji verimliliği","Enerji tasarrufu"],rows:[
  ["Tanım","Aynı hizmeti, üretimi veya konforu daha az enerjiyle sağlamak","Hizmeti veya kullanımı azaltarak daha az enerji tüketmek"],
  ["Yöntem","Teknoloji: verimli cihaz, yalıtım, inverter, LED","Davranış: termostatı düşürmek, ışığı kapatmak, daha az kullanmak"],
  ["Konfor / üretim","Korunur veya artar","Düşebilir"],
  ["Yatırım","Genellikle ilk yatırım gerektirir","Genellikle gerektirmez"],
  ["Etki süresi","Kalıcı","Davranış sürdükçe; geri dönebilir"]]},
 {t:"p",html:"Ofis örneği: eski klimayı aynı soğutma gücündeki inverter klimayla değiştirmek <b>verimliliktir</b>; klimayı gün içinde daha az çalıştırmak <b>tasarruftur</b>. İkisi birbirinin rakibi değil, tamamlayıcısıdır."},
 {t:"widget",name:"classify",opts:{title:"Verimlilik mi, tasarruf mu?",cats:["Verimlilik","Tasarruf"],items:[
  ["Eski buzdolabını aynı hacimde ama daha üst enerji sınıfında bir modelle değiştirmek",0],
  ["Kışın termostatı 22°C'den 19°C'ye düşürmek",1],
  ["Fabrikada standart motorları yüksek verimli motorlarla değiştirmek",0],
  ["Kullanılmayan odaların ışığını kapatmak",1],
  ["Dış cepheye ısı yalıtımı yaptırmak",0],
  ["Asansör yerine merdiven kullanmak",1],
  ["Akkor ampulleri aynı ışığı veren LED'lerle değiştirmek",0],
  ["Çamaşır makinesini daha seyrek ve tam dolu çalıştırmak",1]
 ],note:"Ölçüt: aynı hizmet korunarak mı (verimlilik), yoksa hizmet ya da kullanım azaltılarak mı (tasarruf) enerji düşüyor? Teknoloji değişimi genellikle verimlilik, alışkanlık değişimi genellikle tasarruftur."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de alanın temel yasası 2007 tarihli <b>5627 sayılı Enerji Verimliliği Kanunu</b>'dur. Kanun; sanayide enerji yöneticisi görevlendirilmesi, verimlilik projelerine destek, binalarda enerji performansı ve Enerji Kimlik Belgesi gibi düzenlemelerin dayanağıdır."}
]},
{n:"11.2",h:"ESCO modeli: tasarrufla kendini ödeyen yatırım",blocks:[
 {t:"p",html:"Verimlilik yatırımlarının önündeki en büyük engel yüksek ilk maliyettir. Bir işletme, faydasını yıllar içinde göreceği bir yatırıma bugün sermaye ayırmak istemeyebilir. <b>ESCO</b> (Energy Service Company, enerji hizmet şirketi) modeli bu sorunu çözer: şirket tesiste enerji etüdü yapar, projeyi tasarlar, uygular ve çoğu zaman finansmanını da üstlenir."},
 {t:"list",items:[
  "<b>Geri dönüş tasarruftan gelir:</b> ESCO, sözleşme süresince elde edilen tasarrufun bir kısmını alır.",
  "<b>Performans garantisi:</b> Taahhüt edilen tasarruf gerçekleşmezse farkı ESCO karşılar.",
  "<b>Müşteri için:</b> başlangıçta sermaye gerekmez, teknik uzmanlık dışarıdan gelir, performans riski ESCO'ya geçer; sözleşme bitince tasarrufun tamamı müşteride kalır."
 ]},
 {t:"widget",name:"calc",opts:{title:"ESCO tasarruf paylaşımı",inputs:[{id:"yat",label:"ESCO'nun yatırımı",min:1,max:20,step:0.5,value:6,unit:" milyon TL"},{id:"tas",label:"Yıllık enerji tasarrufu",min:0.5,max:8,step:0.1,value:2.5,unit:" milyon TL"},{id:"pay",label:"ESCO'nun tasarruftan payı",min:30,max:100,step:5,value:70,unit:" %"},{id:"yil",label:"Sözleşme süresi",min:2,max:15,step:1,value:6,unit:" yıl"}],formula:"(function(){var e=tas*pay/100*yil,m=tas*(1-pay/100)*yil,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'ESCO '+yil+' yılda '+h(e)+' milyon TL alır (net '+h(e-yat)+') · müşteri sözleşme süresince '+h(m)+' milyon TL kazanır, sonrasında yılda '+h(tas)+' milyon TL tasarrufun tamamı onundur'+(e<yat?' · dikkat: ESCO yatırımını geri alamıyor':'');})()",result:"{r}",note:"Basitleştirilmiş hesap; iskonto ve bakım maliyeti yok. ESCO'nun payını ya da sözleşme süresini düşürdüğünüzde ESCO'nun yatırımını geri alamadığı noktayı bulun: pazarlık bu sınırın etrafında yapılır. Gerçek sözleşmelerde tasarruf, önceden kararlaştırılmış bir ölçüm ve doğrulama yöntemiyle hesaplanır."}},
 {t:"p",html:"Türkiye'de 5627 sayılı Kanun kapsamında yetkilendirilen <b>enerji verimliliği danışmanlık (EVD) şirketleri</b> etüt, proje ve uygulama hizmeti verebilir ve performans sözleşmesi yapabilir. Kitap ESCO'yu bu adla anar; uluslararası literatürde ise ESCO, finansmanı ve performans riskini üstlenen <i>enerji hizmet şirketi</i> anlamında kullanılır."}
]},
{n:"11.3",h:"Atık ısı geri kazanımı ve geri ödeme süresi",blocks:[
 {t:"def",html:"Atık ısı geri kazanımı, fırın, kazan ve buhar hatları gibi endüstriyel proseslerden atmosfere atılan yüksek sıcaklıktaki ısının eşanjörlerle geri kazanılarak başka bir prosesi (ön ısıtma, sıcak su) beslemesi veya elektrik üretiminde (Organik Rankine Çevrimi, ORC) kullanılmasıdır.",src:"Akış: sıcak baca gazı → eşanjör → ısıtılmış akışkan (hava, su, buhar) → proses; soğumuş gaz bacaya."},
 {t:"box",lbl:"Formül",html:"<p style=\"margin:0\">Basit geri ödeme süresi (yıl) = CAPEX ÷ (yıllık tasarruf − OPEX)</p><p style=\"margin:6px 0 0\">CAPEX: eşanjör, borulama, ORC tesisi ve kurulum maliyeti · Yıllık tasarruf: geri kazanılan enerjinin parasal değeri · OPEX: yıllık işletme ve bakım gideri. Kitaba göre sanayide 2–5 yıllık geri ödeme cazip kabul edilir.</p>"},
 {t:"widget",name:"calc",opts:{title:"Atık ısı projesi",inputs:[{id:"capex",label:"Yatırım (CAPEX)",min:1,max:30,step:0.5,value:8,unit:" milyon TL"},{id:"mwh",label:"Geri kazanılan ısı",min:500,max:20000,step:500,value:2500,unit:" MWh/yıl"},{id:"fiyat",label:"Yerini aldığı gazın birim maliyeti",min:500,max:5000,step:100,value:1500,unit:" TL/MWh"},{id:"opex",label:"Yıllık bakım (OPEX)",min:0,max:3,step:0.1,value:0.5,unit:" milyon TL"}],formula:"(function(){var tas=mwh*fiyat/1e6,net=tas-opex,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};if(net<=0)return 'yıllık tasarruf '+h(tas)+' milyon TL, bakımı karşılamıyor: proje kendini hiç ödemez';var p=capex/net;return 'yıllık tasarruf '+h(tas)+' milyon TL, net '+h(net)+' · geri ödeme '+h(p)+' yıl → '+(p<2?'çok cazip':(p<=5?'cazip (2–5 yıl aralığı)':'kitaptaki ölçüte göre zayıf'));})()",result:"{r}",note:"Örnek değerler gösterim amaçlıdır; gaz fiyatı ve tasarruf miktarı tesise göre değişir. Geri ödeme süresi hızlı bir ön eleme aracıdır; paranın zaman değerini ve geri ödemeden sonraki yılları görmez. Büyük kararlar için Hafta 09'daki NBD yöntemine dönün."}},
 {t:"p",html:"Çimento, cam, çelik ve seramik gibi yüksek sıcaklıklı süreçlerde atık ısı potansiyeli büyüktür. Bir fabrikanın atık ısısının başka bir fabrikada girdi olarak kullanılmasına <b>endüstriyel simbiyoz</b> denir; organize sanayi bölgeleri bunun için doğal bir ortamdır."}
]},
{n:"11.4",h:"ISO 50001 ve binalarda enerji",blocks:[
 {t:"p",html:"<b>ISO 50001 Enerji Yönetim Sistemi</b>, işletmelere enerji tüketimini sürekli ölçme, analiz etme ve iyileştirme için sistematik bir çerçeve sunan uluslararası standarttır. ISO 9001 (kalite) ve ISO 14001 (çevre) gibi \"planla, uygula, kontrol et, önlem al\" döngüsüne dayanır ve bir sürekli iyileştirme kültürü kurar. Kazanımları: maliyet düşüşü, daha düşük karbon ayak izi, mevzuata uyum kolaylığı, teşvik ve yeşil finansmana erişim, güvenilir kurumsal imaj."},
 {t:"p",html:"Binalarda ilk ve en ucuz adım <b>pasif tasarım</b>dır: binayı iklimle uyumlu bir sistem olarak tasarlayıp aktif sistemlere (klima, yapay aydınlatma) ihtiyacı baştan azaltmak."},
 {t:"list",items:[
  "<b>Yönelim ve form:</b> binanın güneşe ve rüzgâra göre konumlandırılması.",
  "<b>Doğal aydınlatma:</b> gündüz yapay aydınlatma ihtiyacının azaltılması.",
  "<b>Doğal ve çapraz havalandırma:</b> mekanik soğutma yükünün düşürülmesi.",
  "<b>Yalıtım ve termal kütle:</b> sıcaklık dalgalanmalarının dengelenmesi.",
  "<b>Gölgeleme:</b> yazın aşırı ısınmayı engelleyip kışın güneş kazancına izin veren saçak ve elemanlar.",
  "<b>Peyzaj:</b> ağaçlandırma ve çevre düzenlemesiyle mikroklimanın iyileştirilmesi."
 ]},
 {t:"def",html:"Enerji Kimlik Belgesi (EKB), binanın enerji performansını A (en verimli) ile G (en verimsiz) arasında sınıflandıran resmî belgedir.",src:"5627 sayılı Kanun ve Binalarda Enerji Performansı Yönetmeliği çerçevesinde düzenlenir."},
 {t:"p",html:"EKB'de binanın ısıtma, soğutma, sıcak su, havalandırma ve aydınlatma için yıllık enerji ihtiyacı hesaplanır ve aynı koşullarda tasarlanmış bir <b>referans bina</b> ile karşılaştırılır. Yeni binalarda yapı kullanma izni için gereklidir ve en az C sınıfı istenir; mevcut binalarda satış ve kiralama işlemlerinde aranır. Belge ayrıca yalıtımı, sistem verimlerini ve yenilenebilir enerji kullanımını gösterir."},
 {t:"box",lbl:"Türkiye'den örnek",html:"EKB sınıfı mutlak bir kWh/m² eşiğinden çok, binanın tüketiminin referans binaya oranına göre belirlenir: referans binadan çok daha az tüketen bina A–B, referansa yakın olan C, çok daha fazla tüketen bina E–G sınıfına düşer. Kitaptaki Tablo 10'daki kWh/m²-yıl aralıkları bu yüzden \"örnek\" olarak okunmalıdır. EKB'ler Çevre, Şehircilik ve İklim Değişikliği Bakanlığı'nın sistemi üzerinden yetkili uzmanlarca düzenlenir. Bir ev bakarken ilanda EKB sınıfını sormak, gelecekteki doğal gaz faturası hakkında ilk ipucunu verir."}
]},
{n:"11.5",h:"Zamana bağlı tarife ve katılımlı yük azaltma",blocks:[
 {t:"p",html:"Talep tarafı yönetimi (DSM), dengeyi yalnızca üretimi artırarak değil, tüketimi akıllıca yönlendirerek kurmayı hedefler. En yaygın iki araç zamana bağlı tarife ve katılımlı yük azaltmadır."},
 {t:"choice",items:[
  {label:"Zamana bağlı tarife (TOU)",title:"Saate göre değişen fiyat",body:"Gün dilimlere ayrılır: pik saatlerde fiyat yüksek, normal saatlerde orta, gece düşüktür. Tüketici enerji yoğun işlerini ucuz saatlere kaydırarak faturasını düşürür; şebekenin zirve yükü azalır.",ex:"Türkiye'de üç zamanlı tarifede gün; gündüz (06:00–17:00), puant (17:00–22:00) ve gece (22:00–06:00) olarak ayrılır. Kitaptaki örnek: bir sanayi tesisinin üretimi gece vardiyasına kaydırması."},
  {label:"Katılımlı yük azaltma",title:"Çağrı gelince tüketimi kısmak",body:"Tüketici programa kaydolur; şebekede ani talep artışı veya üretim düşüşü olduğunda sistem işletmecisi ya da tedarikçi tüketimi azaltmasını ister. Karşılığında ödeme veya indirim alır.",ex:"Kitaptaki örnek: bir çimento fabrikasının yaz aylarında klima talebi zirveye çıktığında üretimini birkaç saat düşürmesi. Bu, blackout riskini ve yedek santral ihtiyacını azaltır."}
 ]},
 {t:"widget",name:"calc",opts:{title:"Tüketimi kaydırınca fatura",inputs:[{id:"top",label:"Aylık tüketim",min:100,max:2000,step:50,value:400,unit:" kWh"},{id:"puant",label:"Puant saatlerdeki pay",min:0,max:60,step:5,value:35,unit:" %"},{id:"kay",label:"Puanttan geceye kaydırılan pay",min:0,max:30,step:5,value:15,unit:" puan"},{id:"pp",label:"Puant fiyatı",min:2,max:10,step:0.1,value:5.0,unit:" TL/kWh"},{id:"pg",label:"Gündüz fiyatı",min:1,max:8,step:0.1,value:3.5,unit:" TL/kWh"},{id:"pn",label:"Gece fiyatı",min:0.5,max:6,step:0.1,value:2.0,unit:" TL/kWh"}],formula:"(function(){var k=Math.min(kay,puant),gecepay=0.25,gun=1-puant/100-gecepay,f1=top*(puant/100*pp+gun*pg+gecepay*pn),f2=top*((puant-k)/100*pp+gun*pg+(gecepay+k/100)*pn),h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:0})};if(gun<0)return 'puant payı çok yüksek: gündüz payı negatif olamaz';return 'önce '+h(f1)+' TL → sonra '+h(f2)+' TL · aylık kazanç '+h(f1-f2)+' TL (%'+(100*(f1-f2)/f1).toLocaleString('tr-TR',{maximumFractionDigits:1})+')';})()",result:"{r}",note:"Fiyatlar gösterim amaçlı varsayımdır, güncel tarife değildir; güncel değerler için EPDK tarife tablolarına bakın. Hesapta gece payı başlangıçta %25, gündüz payı kalan kısım alınmıştır. Toplam tüketim değişmediği hâlde fatura düşer: kazanç, enerjiyi azaltmaktan değil zamanını değiştirmekten gelir."}}
]},
{n:"11.6",h:"Yeşil tahvil ve döngüsel ekonomi",blocks:[
 {t:"p",html:"<b>Yeşil tahvil</b>, geliri yalnızca çevre dostu ve iklimle ilgili projelerde kullanılmak üzere çıkarılan borçlanma aracıdır. Normal tahvil gibi kupon ve vade sonunda anapara öder; farkı, fonun kullanım amacının şeffaf biçimde sınırlanması ve raporlanmasıdır. İlk örneği 2007'de Avrupa Yatırım Bankası'nın ihraç ettiği İklim Farkındalığı Tahvili'dir. Gelir; yenilenebilir enerji, enerji verimliliği, sürdürülebilir ulaşım, atık ve su yönetimi, iklim uyumu ve düşük karbonlu sanayi projelerine gider."},
 {t:"p",html:"Talep yüksek olduğunda yatırımcılar yeşil tahvile benzer bir normal tahvilden biraz daha düşük getiriyi kabul edebilir. Bu farka <b>greenium</b> (yeşil prim) denir. Fark baz puan (1 baz puan = %0,01) ile ölçülür ve çoğu zaman küçüktür, bazen hiç görülmez; ama büyük ihraçlarda ihraççı için anlamlı bir tasarrufa dönüşür."},
 {t:"widget",name:"calc",opts:{title:"Greenium: yeşil tahvilin faiz avantajı",inputs:[{id:"nom",label:"İhraç tutarı",min:10,max:1000,step:10,value:500,unit:" milyon $"},{id:"bp",label:"Kupon farkı (greenium)",min:0,max:30,step:1,value:8,unit:" baz puan"},{id:"vade",label:"Vade",min:1,max:15,step:1,value:5,unit:" yıl"}],formula:"(function(){var y=nom*bp/10000,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:2})};return 'yıllık faiz tasarrufu '+h(y)+' milyon $ · vade boyunca toplam '+h(y*vade)+' milyon $ (iskontosuz)';})()",result:"{r}",note:"Örnek: 500 milyon $ × 0,0008 = yılda 0,4 milyon $, 5 yılda 2 milyon $. Greenium'un büyüklüğü piyasaya ve döneme göre değişir; burada kullanılan değerler örnektir. İhraççı bu avantajın bir kısmını raporlama, ikinci taraf görüşü ve izleme maliyetlerine harcar."}},
 {t:"p",html:"<b>Döngüsel ekonomi</b>, doğrusal \"al, üret, at\" modelinin yerine kaynakları mümkün olduğunca uzun süre sistemde tutmayı amaçlar. Enerjiyle bağı doğrudandır: bir malzemeyi geri dönüştürmek onu sıfırdan üretmekten çok daha az enerji gerektirir. Kitaptaki örnekte alüminyumun geri dönüşümü, birincil üretime göre enerjinin yaklaşık %95'ini tasarruf ettirir. Endüstriyel simbiyoz, tamir ve yenileme ile ürün ömrünü uzatma ve hammadde çıkarımını azaltma, döngüselliğin enerji yönetimine diğer katkılarıdır."}
]},
{n:"11.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Enerji verimliliği","Aynı hizmeti veya konforu daha az enerjiyle sağlamak; genellikle teknoloji yatırımı gerektirir."],
  ["Enerji tasarrufu","Kullanımı veya hizmeti azaltarak daha az enerji tüketmek; davranışa dayanır."],
  ["ESCO","Verimlilik projesini tasarlayıp finanse eden ve tasarruftan pay alarak performans garantisi veren şirket."],
  ["Basit geri ödeme süresi","CAPEX ÷ (yıllık tasarruf − OPEX); yatırımın kaç yılda kendini ödediği."],
  ["ORC","Düşük sıcaklıklı atık ısıdan organik akışkanla elektrik üreten Organik Rankine Çevrimi."],
  ["ISO 50001","Enerji tüketimini sürekli ölçmeye ve iyileştirmeye dayanan uluslararası enerji yönetim sistemi standardı."],
  ["Enerji Kimlik Belgesi","Binanın enerji performansını referans binaya göre A–G arasında sınıflandıran belge."],
  ["Zamana bağlı tarife","Elektrik fiyatının gün içindeki dilimlere göre değiştiği tarife; tüketimi ucuz saatlere kaydırır."],
  ["Greenium","Yeşil tahvilin benzer normal tahvile göre daha düşük getiriyle satılabilmesinden doğan fark."],
  ["Endüstriyel simbiyoz","Bir tesisin atık ısı, enerji veya malzemesinin başka bir tesiste girdi olarak kullanılması."]
 ]}
]},
{n:"11.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Aşağıdakilerden hangisi enerji tasarrufu değil, enerji verimliliği örneğidir?",o:["Klimayı gün içinde daha az çalıştırmak","Eski klimayı aynı güçte inverter klimayla değiştirmek","Kışın evi daha düşük sıcaklıkta ısıtmak","Aydınlatmayı yarı yarıya azaltmak"],a:1,e:"Verimlilikte konfor korunur, enerji teknolojiyle azalır. Diğer seçenekler kullanımı veya konforu azaltır."},
  {q:"ESCO modelinin müşteriye sağladığı temel avantaj nedir?",o:["Enerji fiyatlarının devlet tarafından sabitlenmesi","Başlangıçta sermaye ayırmadan verimlilik yatırımı yapabilmesi","Tasarrufun tamamının ilk günden müşteride kalması","Elektrik tüketiminin sıfırlanması"],a:1,e:"ESCO yatırımı finanse eder ve tasarruftan pay alarak geri kazanır; performans riskini de üstlenir."},
  {q:"ESCO 4 milyon TL yatırım yapıyor; yıllık tasarruf 1,6 milyon TL, ESCO'nun payı %75, sözleşme 4 yıl. ESCO'nun toplam tahsilatı kaçtır?",o:["3,2 milyon TL","4,0 milyon TL","4,8 milyon TL","6,4 milyon TL"],a:2,e:"1,6 × 0,75 × 4 = 4,8 milyon TL; yatırımı geri alır ve 0,8 milyon TL kazanır. Müşteri ise 4 yılda 1,6 milyon TL kazanır."},
  {q:"Atık ısı projesinde CAPEX 6 milyon TL, yıllık tasarruf 2,2 milyon TL, OPEX 0,2 milyon TL ise basit geri ödeme süresi kaç yıldır?",o:["2,0","2,7","3,0","3,3"],a:2,e:"6 ÷ (2,2 − 0,2) = 3 yıl. OPEX düşülmeden hesaplanırsa 2,7 yıl çıkar ve proje olduğundan iyi görünür."},
  {q:"ISO 50001'in ISO 9001 ve ISO 14001 ile ortak yönü nedir?",o:["Yalnızca küçük işletmelere uygulanabilmesi","Sürekli iyileştirme döngüsüne dayanması","Yasal olarak her işletme için zorunlu olması","Enerji satış fiyatını doğrudan belirlemesi"],a:1,e:"Üçü de planla-uygula-kontrol et-önlem al döngüsüyle çalışan yönetim sistemi standartlarıdır."},
  {q:"Pasif tasarımda gölgeleme elemanlarının amacı nedir?",o:["Kışın güneşi bütünüyle engellemek","Yazın ısınmayı kesip kışın güneşi almak","Gündüz yapay aydınlatmayı artırmak","Doğal havalandırmayı tamamen kapatmak"],a:1,e:"Doğru boyutlanmış saçak, yüksekteki yaz güneşini keser, alçaktaki kış güneşini içeri alır."},
  {q:"Enerji Kimlik Belgesi'nde bir binanın sınıfı neye göre belirlenir?",o:["Binanın yapım yılına ve yaşına","Enerji ihtiyacının referans binaya oranına","Binanın kat sayısına ve yüksekliğine","Binanın piyasadaki satış fiyatına"],a:1,e:"Isıtma, soğutma, sıcak su, havalandırma ve aydınlatma ihtiyacı hesaplanır ve aynı koşullardaki referans binayla kıyaslanır."},
  {q:"Zamana bağlı tarifede toplam tüketim aynı kalırken faturanın düşmesi nasıl mümkün olur?",o:["Tüketimin puanttan geceye kaydırılmasıyla","Sayaç okuma tarihinin ertelenmesiyle","Faturadaki vergi oranının düşürülmesiyle","Tüketimin başka sayaca aktarılmasıyla"],a:0,e:"Kazanç, enerjiyi azaltmaktan değil zamanını değiştirmekten gelir; şebekenin zirve yükü de bu sayede azalır."},
  {q:"500 milyon $'lık yeşil tahvil, benzer normal tahvile göre 10 baz puan düşük kuponla satılıyor. Yıllık faiz tasarrufu kaçtır?",o:["0,05 milyon $","0,5 milyon $","5 milyon $","50 milyon $"],a:1,e:"10 baz puan = %0,10; 500 × 0,001 = 0,5 milyon $. Baz puanı yüzde puan sanmak 100 kat hata yaptırır."},
  {q:"Döngüsel ekonominin enerji yönetimine en doğrudan katkısı hangisidir?",o:["Dünya fosil yakıt fiyatlarını düşürmesi","Geri dönüşümün çok daha az enerji gerektirmesi","Elektrik şebekesini daha da genişletmesi","Nüfus artış hızını yavaşlatması"],a:1,e:"Kitaptaki örnekte alüminyumun geri dönüşümü birincil üretime göre enerjinin yaklaşık %95'ini tasarruf ettirir."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. s. 99–116.",
 "Uluslararası Enerji Ajansı — Energy Efficiency raporları: <a href=\"https://www.iea.org\">iea.org</a>",
 "Uluslararası Standardizasyon Örgütü — ISO 50001 Energy management: <a href=\"https://www.iso.org\">iso.org</a>",
 "T.C. Enerji ve Tabii Kaynaklar Bakanlığı — enerji verimliliği: <a href=\"https://enerji.gov.tr\">enerji.gov.tr</a>"
],
next:"Sonraki: Hafta 12 — Geleceğin enerji sistemleri: akıllı şebeke, hidrojen, net sıfır"
};
