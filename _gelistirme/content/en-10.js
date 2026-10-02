window.WEEK={
id:"en-10",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Risk ve finansman",week:10,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Enerji yatırımları",
title:"Riski kim taşır? <em>Finansman</em> ve korunma",
intro:"Bu hafta bir enerji projesini tehdit eden başlıca riskleri ve bu risklerin sözleşmeler, sigortalar ve finansal araçlarla kime aktarıldığını öğreneceksiniz: inşaat riski, siyasi risk, özkaynak-borç dengesi ve kaldıraç, hedging (riskten korunma), varlığa dayalı menkul kıymetleştirme (VDMK) ve devlet destekleri. Okuma süresi yaklaşık 40 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "İnşaat riskinin zaman, maliyet ve performans boyutlarını ve EPC sözleşmesinin bu riski nasıl aktardığını açıklayabilirsiniz.",
 "Siyasi risk türlerini ve tahkim, siyasi risk sigortası gibi azaltma araçlarını sayabilirsiniz.",
 "Borç kullanımının özkaynak getirisini nasıl büyüttüğünü (kaldıraç etkisi) hesaplayıp riskini yorumlayabilirsiniz.",
 "Doğal gaz santrali için spark spread'i hesaplayıp hedging araçlarını karşılaştırabilirsiniz.",
 "VDMK'nın işleyişini ve devlet destek mekanizmalarının bankalar için kabul edilebilirliği (bankability) nasıl artırdığını açıklayabilirsiniz."
],
sections:[
{n:"10.1",h:"İnşaat riski",blocks:[
 {t:"p",html:"Bir santral bitmeden elektrik satılamaz, gelir başlamaz; ama kredi faizi işlemeye devam eder. Bu yüzden <b>inşaat riski</b> enerji yatırımının en kritik belirsizliklerinden biridir. Üç boyutu vardır: <b>zaman</b> (gecikme, ceza ve artan finansman yükü), <b>maliyet</b> (malzeme, işçilik, döviz kuru kaynaklı bütçe aşımı) ve <b>teknik performans</b> (santralin söz verilen verimle çalışmaması). İzin gecikmeleri ve yükleniciler arası koordinasyon sorunları da riski büyütür."},
 {t:"widget",name:"calc",opts:{title:"Gecikmenin bedeli",inputs:[{id:"ay",label:"İnşaatta gecikme",min:0,max:24,step:1,value:6,unit:" ay"},{id:"gelir",label:"Kaybedilen aylık net gelir",min:1,max:30,step:1,value:8,unit:" milyon TL"},{id:"kredi",label:"Kullanılan kredi",min:50,max:1000,step:50,value:400,unit:" milyon TL"},{id:"faiz",label:"Yıllık kredi faizi",min:2,max:40,step:1,value:12,unit:" %"}],formula:"(function(){var g=ay*gelir,f=kredi*(faiz/100)*ay/12,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'kaçan gelir '+h(g)+' + ek faiz '+h(f)+' = toplam '+h(g+f)+' milyon TL';})()",result:"Gecikmenin yaklaşık maliyeti: {r}",note:"Basitleştirilmiş hesap: gecikme süresince hem satış geliri kaçar hem de kredinin faizi (basit faizle) birikir. Varsayılan değerlerle 6 aylık gecikme 48 + 24 = 72 milyon TL'ye mal olur. EPC sözleşmelerindeki gecikme cezaları tam da bu kaybı yükleniciye yansıtmak için konur."}},
 {t:"p",html:"En yaygın yönetim aracı <b>EPC</b> (Engineering, Procurement, Construction) sözleşmesidir. Anahtar teslim modelde yüklenici projeyi belirlenen bütçe ve sürede bitirmeyi taahhüt eder; risk büyük ölçüde yatırımcıdan yükleniciye geçer. Buna eşlik eden araçlar: sabit fiyatlı ve tarihli sözleşmeler, <b>performans garantileri</b>, banka teminat mektupları ve performans bonoları, inşaat dönemi için <b>all-risk</b> ve gecikme sigortaları ve finansörlerin tuttuğu bağımsız teknik denetim firmaları."},
 {t:"box",lbl:"Unutmayın",html:"Risk yok olmaz, el değiştirir. Yüklenici bu riski üstlenirken fiyatına bir risk payı ekler. Anahtar teslim sabit fiyatlı EPC, genellikle kalemlere bölünmüş sözleşmelerden daha pahalıdır; yatırımcı aradaki farkı, öngörülebilirlik karşılığında öder."}
]},
{n:"10.2",h:"Siyasi risk",blocks:[
 {t:"p",html:"<b>Siyasi risk</b>, yatırım yapılan ülkenin politik ve hukuki ortamındaki değişimlerden doğar. Enerji projeleri 20–30 yıl sürdüğü için bu süre içinde birkaç hükümet değişebilir. Kitabın saydığı başlıca türler şunlardır:"},
 {t:"list",items:[
  "<b>Mevzuat değişikliği:</b> vergi artışı, alım garantisinin iptali, tarifenin değiştirilmesi.",
  "<b>Kamulaştırma veya millileştirme:</b> devletin tesise el koyması; yatırımcının en çok çekindiği risk.",
  "<b>Sözleşmenin tek taraflı feshi:</b> devlet kurumlarıyla yapılan uzun vadeli sözleşmelerin bozulması.",
  "<b>Döviz transfer kısıtı:</b> kazancın yurt dışına transferinin engellenmesi.",
  "<b>Politik istikrarsızlık ve uluslararası yaptırımlar.</b>"
 ]},
 {t:"table",head:["Azaltma aracı","Nasıl korur?"],rows:[
  ["Uluslararası tahkim","Uyuşmazlık yerel mahkemeler yerine bağımsız bir platformda çözülür"],
  ["Siyasi risk sigortası","Kamulaştırma, sözleşme ihlali, transfer kısıtına karşı tazminat (ör. Dünya Bankası Grubu'ndan MIGA)"],
  ["İkili yatırım anlaşmaları (BIT)","Ev sahibi devletin yabancı yatırımcıya karşı yükümlülüklerini uluslararası hukuka bağlar"],
  ["Yerel ortaklık","Riski paylaştırır, yerel bilgi ve meşruiyet sağlar"],
  ["Çok taraflı kalkınma bankaları","Dünya Bankası, EBRD, IFC gibi kurumların finansmana katılması devlet açısından caydırıcıdır"],
  ["Çeşitlendirme","Yatırımı farklı ülkelere ve kaynaklara dağıtmak riski tek noktada toplamaz"]]},
 {t:"widget",name:"classify",opts:{title:"Hangi risk türü?",cats:["İnşaat riski","Siyasi risk","Piyasa (fiyat) riski"],items:[
  ["Türbin tedarikçisinin teslimatı 8 ay geciktirmesi",0],
  ["Hükümetin daha önce verilen alım garantisini geriye dönük değiştirmesi",1],
  ["Gün öncesi piyasa fiyatlarının bir yıl boyunca beklenenden %30 düşük seyretmesi",2],
  ["Çelik fiyatlarının artması nedeniyle bütçenin aşılması",0],
  ["Kazancın yurt dışındaki ana şirkete transferinin yasaklanması",1],
  ["İthal doğal gazın hub fiyatının iki katına çıkması",2],
  ["Kurulan santralin söz verilen verimin altında çalışması",0],
  ["Ülkeye uluslararası yaptırım uygulanması",1]
 ],note:"İnşaat riski santral bitmeden önceki süreçle, siyasi risk devletin kararlarıyla, piyasa riski ise elektrik ve yakıt fiyatlarıyla ilgilidir. İlkine EPC ve sigorta, ikincisine tahkim ve siyasi risk sigortası, üçüncüsüne PPA ve hedging çözüm olarak kullanılır."}}
]},
{n:"10.3",h:"Özkaynak, borç ve kaldıraç",blocks:[
 {t:"p",html:"<b>Özkaynak</b>, yatırımcıların projeye koyduğu sermayedir; geri ödemesi zorunlu değildir, ama en son o kazanır, bu yüzden en risklidir ve en yüksek getiriyi bekler. <b>Borç</b> ise banka veya sermaye piyasasından gelir; faiz ve anapara ödemesi zorunludur, bu nedenle alacaklı için daha az risklidir ve daha ucuzdur. Enerji projelerinde sık görülen yapı yaklaşık <b>%70 borç, %30 özkaynaktır</b>."},
 {t:"p",html:"Yüksek borç, <b>kaldıraç etkisi</b> yaratır: daha az özkaynakla daha büyük proje yapılır ve proje iyi giderse ortakların getirisi büyür. Ayrıca faiz giderleri çoğu ülkede vergi matrahından düşülür. Ama kaldıraç iki yönlüdür: nakit akışı beklenenin altında kalırsa borç servisi aksar, temerrüt riski doğar. Hesaplayıcıda proje getirisini faiz oranının altına çekin."},
 {t:"widget",name:"calc",opts:{title:"Kaldıraç etkisi",inputs:[{id:"roa",label:"Projenin toplam varlık getirisi",min:0,max:25,step:0.5,value:12,unit:" %"},{id:"bp",label:"Borç payı",min:0,max:90,step:5,value:70,unit:" %"},{id:"i",label:"Kredi faizi",min:2,max:25,step:0.5,value:9,unit:" %"}],formula:"(function(){var d=bp/100,e=1-d,roe=(roa-d*i)/e,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'özkaynak getirisi %'+h(roe)+(roe>roa?' — kaldıraç ortakların lehine çalışıyor':(roe<roa?' — kaldıraç ortakların aleyhine çalışıyor (proje getirisi faizin altında)':' — kaldıraç etkisiz'));})()",result:"{r}",note:"Vergi dikkate alınmadan: özkaynak getirisi = (proje getirisi − borç payı × faiz) ÷ özkaynak payı. Varsayılan değerlerle (12 − 0,7 × 9) ÷ 0,3 = %19. Proje getirisini %6'ya indirin: özkaynak getirisi −%1'e düşer. Aynı borç, iyi yılda kazancı, kötü yılda kaybı büyütür."}},
 {t:"p",html:"Bankalar bu riski sınırlamak için projeyi yakından izler, temettü dağıtımını borç servisine bağlar ve yatırımcının esnekliğini daraltır. Borç-özkaynak dengesinin nerede kurulacağı; projenin risk profiline, ülke koşullarına ve finansörlerin risk iştahına bağlıdır."}
]},
{n:"10.4",h:"Hedging: fiyat riskinden korunma",blocks:[
 {t:"p",html:"<b>Hedging</b>, piyasa fiyatlarındaki belirsizliğin gelirde yaratacağı dalgalanmayı azaltmak için kullanılan finansal ve ticari stratejilerdir. Doğal gaz çevrim santrali iki taraftan risk altındadır: aldığı gazın fiyatı ve sattığı elektriğin fiyatı. Üstelik gaz ithal olduğu için bir de kur riski vardır."},
 {t:"choice",items:[
  {label:"Vadeli işlem",title:"Forward ve futures",body:"Gelecekteki bir tarihte belirli miktarı bugünden sabitlenen fiyatla alma veya satma yükümlülüğü. Forward taraflar arasında, futures borsada işlem görür.",ex:"Santral, gelecek yılın gaz ihtiyacının bir kısmını bugünden sabit fiyatla alır."},
  {label:"Opsiyon",title:"Hak, ama yükümlülük değil",body:"Belirli fiyattan alma (veya satma) hakkı verir. Fiyat aleyhe giderse kullanılır, lehe giderse kullanılmaz; karşılığında prim ödenir.",ex:"Bir sigorta poliçesi gibi düşünülebilir: prim, kötü senaryoya karşı ödenen bedeldir."},
  {label:"Swap",title:"Sabit ile değişkeni takas",body:"Taraflar belirli bir süre boyunca sabit fiyat ile değişken piyasa fiyatı arasındaki farkı birbirine öder. Kur riskine karşı döviz swapları da kullanılır.",ex:"Spark spread swap, elektrik satış fiyatı ile gaz alım maliyeti arasındaki farkı sabitler."},
  {label:"PPA / GSA",title:"Uzun vadeli fiziksel sözleşme",body:"Elektrik tarafında PPA, gaz tarafında gaz satış anlaşması (GSA) gelir ve maliyet öngörülebilirliği sağlar.",ex:"Santral elektriğini 10 yıllık PPA ile, gazını 10 yıllık GSA ile bağlarsa iki uçtaki fiyat riski büyük ölçüde azalır."},
  {label:"Çapraz hedging",title:"İlişkili emtia üzerinden",body:"Doğrudan işlem gören bir piyasa yoksa, fiyatı benzer hareket eden bir emtia üzerinden korunma yapılır.",ex:"LNG fiyat riskine karşı petrol veya hub fiyatlarına dayalı kontratlar kullanmak. Risk tam kapanmaz; iki fiyat arasındaki fark (baz riski) kalır."}
 ]},
 {t:"p",html:"Doğal gaz santrali için asıl önemli olan tek tek fiyatlar değil, aralarındaki farktır. Bu farka <b>spark spread</b> denir: 1 MWh elektriğin satış fiyatından, o elektriği üretmek için yakılan gazın maliyeti çıkarılır. Karbon maliyeti de düşülürse <b>temiz spark spread</b> (clean spark spread) elde edilir."},
 {t:"widget",name:"calc",opts:{title:"Spark spread",inputs:[{id:"pe",label:"Elektrik fiyatı",min:20,max:300,step:5,value:110,unit:" €/MWh"},{id:"pg",label:"Gaz fiyatı",min:10,max:150,step:5,value:40,unit:" €/MWh (ısıl)"},{id:"v",label:"Santral verimi",min:35,max:62,step:1,value:55,unit:" %"},{id:"co",label:"Karbon fiyatı",min:0,max:150,step:5,value:70,unit:" €/t"}],formula:"(function(){var yak=pg/(v/100),em=0.202/(v/100),kar=em*co,ss=pe-yak,css=ss-kar,h=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'yakıt maliyeti '+h(yak)+' €/MWh · spark spread '+h(ss)+' · karbon maliyeti '+h(kar)+' (emisyon '+h(em)+' t/MWh) · temiz spark spread '+h(css)+' €/MWh'+(css<0?' → santral çalıştıkça zarar eder':'');})()",result:"{r}",note:"Yakıt maliyeti = gaz fiyatı ÷ verim. Doğal gazın emisyon faktörü yaklaşık 0,202 tCO₂/MWh (ısıl) alınmıştır (IPCC varsayılan değeri 56,1 tCO₂/TJ). %55 verimli bir santral 1 MWh elektrik için yaklaşık 0,37 t CO₂ salar. Spark spread swap bu farkı sabitleyerek iki taraflı riski birlikte yönetir."}}
]},
{n:"10.5",h:"Varlığa dayalı menkul kıymetleştirme (VDMK)",blocks:[
 {t:"p",html:"Banka kredisi ve özkaynak her zaman yetmeyebilir. <b>VDMK</b>'da (asset-backed securitization) projenin gelecekte yaratacağı düzenli nakit akışları, örneğin PPA ödemeleri veya YEKDEM gelirleri, menkul kıymete dönüştürülerek yatırımcılara satılır. Gelecekteki geliri bugünden paraya çevirmek gibidir."},
 {t:"timeline",items:[
  ["1","Gelir havuzu","Proje gelirleri (PPA, kapasite ödemesi, alım garantili gelirler) özel amaçlı şirkete (SPV) devredilir."],
  ["2","İhraç","SPV, bu gelirleri teminat göstererek tahvil veya sertifika çıkarır.",1],
  ["3","Fonlama","Satıştan elde edilen para proje finansmanında kullanılır; proje şirketi klasik borçlanmaya gitmemiş olur."],
  ["4","Geri ödeme","Yatırımcılar düzenli kupon ve vade sonunda anapara alır; ödeme kaynağı projenin nakit akışıdır."]]},
 {t:"p",html:"Proje sahibi için VDMK daha uzun vadeli ve çoğu zaman daha ucuz fon, bilançosunda daha az borç demektir. Yatırımcı için düzenli nakit akışı sunan bir araçtır. Finansal sistem açısından ise emeklilik fonları ve sigorta şirketleri gibi uzun vadeli yatırımcıları enerji projelerine bağlar. Kitap, Türkiye'de YEKDEM ödemelerinin menkul kıymetleştirilmesine ilişkin çalışmaların sürdüğünü belirtir."}
]},
{n:"10.6",h:"Devlet destekleri ve bankability",blocks:[
 {t:"p",html:"Bankalar bir projeye bakarken tek bir soru sorar: <b>bu proje kredisini geri öder mi?</b> Buna \"bankability\" (bankalar için kabul edilebilirlik) denir. Devlet destekleri tam bu noktada devreye girer: riskleri azaltır, sermaye maliyetini düşürür ve yatırım kararını hızlandırır."},
 {t:"table",head:["Mekanizma","Nasıl çalışır?","Finansal etkisi"],rows:[
  ["Yeşil tarife / alım garantisi (feed-in tariff)","Üreticiye uzun vadeli sabit fiyatlı alım güvencesi","Nakit akışı öngörülebilir olur; kredi riski ve iskonto oranı düşer"],
  ["Kapasite mekanizması","Yalnızca üretilen MWh'ye değil, hazırda tutulan kapasiteye de ödeme","Baz yük ve dengeleme santrallerinin geliri istikrar kazanır"],
  ["Yatırım indirimi, vergi teşviki, hızlandırılmış amortisman","Vergi yükünü ve ilk yatırım maliyetini düşürür","Özkaynak ihtiyacı azalır; NBD ve İVO yükselir"],
  ["Karbon kredileri ve yeşil sertifikalar","Ek gelir kaynağı yaratır","Projeyi sürdürülebilirlik odaklı fonlar için cazip kılar"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de yenilenebilir enerji için <b>YEKDEM</b> (5346 sayılı Kanun kapsamında alım garantisi), yerli ve yenilenebilir kaynaklara yer tahsisi ile alım güvencesini birleştiren <b>YEKA</b> yarışmaları ve 2018'den beri uygulanan <b>kapasite mekanizması</b> en bilinen destek araçlarıdır. Ayrıca yatırım teşvik belgesi kapsamında KDV istisnası ve gümrük vergisi muafiyeti gibi araçlar kullanılabilir. Destek tutarları ve fiyatlar dönem dönem değiştiği için güncel değerler EPDK ve Enerji ve Tabii Kaynaklar Bakanlığı kaynaklarından izlenmelidir."}
]},
{n:"10.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Anahtar teslim EPC","Yüklenicinin santrali belirli fiyat ve sürede çalışır hâlde teslim etmeyi taahhüt ettiği sözleşme."],
  ["Performans garantisi","Santralin belirli verim ve kapasitede çalışacağına dair yüklenici güvencesi."],
  ["Siyasi risk sigortası","Kamulaştırma, sözleşme ihlali ve transfer kısıtına karşı tazminat sağlayan sigorta."],
  ["Kaldıraç etkisi","Borç kullanımının özkaynak getirisini iyi yılda büyütmesi, kötü yılda küçültmesi."],
  ["Spark spread","Elektrik satış fiyatı ile o elektriği üretmek için gereken gazın maliyeti arasındaki fark."],
  ["Opsiyon","Belirli fiyattan alma veya satma hakkı veren, yükümlülük doğurmayan türev araç."],
  ["Çapraz hedging","Doğrudan piyasa yokken ilişkili bir emtia üzerinden riskten korunma."],
  ["VDMK","Gelecekteki düzenli nakit akışlarının SPV aracılığıyla menkul kıymete dönüştürülüp satılması."],
  ["Bankability","Bir projenin, nakit akışı ve risk yapısı itibarıyla bankalarca kredilendirilebilir olması."]
 ]}
]},
{n:"10.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Anahtar teslim EPC sözleşmesinin yatırımcıya temel faydası nedir?",o:["Santralin elektrik fiyatını garanti etmesi","İnşaat riskinin önemli kısmını yükleniciye aktarması","Kredi faizini sıfırlaması","Siyasi riski tamamen ortadan kaldırması"],a:1,e:"Yüklenici, belirlenen bütçe ve sürede teslimi taahhüt eder; gecikme ve maliyet aşımı riski büyük ölçüde ona geçer."},
  {q:"400 milyon TL kredili bir projede inşaat 6 ay gecikiyor; yıllık faiz %12, kaçan aylık gelir 5 milyon TL. Gecikmenin basit maliyeti kaçtır?",o:["24 milyon TL","30 milyon TL","54 milyon TL","78 milyon TL"],a:2,e:"Kaçan gelir 6 × 5 = 30; ek faiz 400 × 0,12 × 6/12 = 24; toplam 54 milyon TL."},
  {q:"Aşağıdakilerden hangisi siyasi riske örnektir?",o:["Türbin teslimatının gecikmesi","Elektrik fiyatlarının düşmesi","Kazancın yurt dışına transferinin yasaklanması","Rüzgâr hızının beklenenden düşük çıkması"],a:2,e:"Döviz transfer kısıtı devletin kararından doğar. Diğerleri sırasıyla inşaat, piyasa ve kaynak (üretim) riskidir."},
  {q:"Dünya Bankası Grubu'na bağlı MIGA hangi riske karşı güvence sunar?",o:["Döviz kurundaki günlük oynaklık","Kamulaştırma, sözleşme ihlali gibi siyasi riskler","Elektrik piyasa fiyatlarının düşmesi","Yüklenici kaynaklı inşaat gecikmesi"],a:1,e:"MIGA (Çok Taraflı Yatırım Garanti Ajansı), yabancı yatırımları siyasi risklere karşı sigortalar."},
  {q:"Proje getirisi %12, borç payı %70, faiz %9 ise (vergisiz) özkaynak getirisi yaklaşık kaçtır?",o:["%12","%15","%19","%21"],a:2,e:"(12 − 0,7 × 9) ÷ 0,3 = 5,7 ÷ 0,3 = %19. Proje getirisi faizden yüksek olduğu için kaldıraç ortakların lehine çalışır."},
  {q:"Proje getirisi kredi faizinin altına düşerse yüksek borç oranı ne yapar?",o:["Özkaynak getirisini her durumda artırır","Özkaynak getirisini proje getirisinin altına çeker","Özkaynak getirisine hiçbir etkisi olmaz","Kredi faizini otomatik olarak düşürür"],a:1,e:"Kaldıraç iki yönlüdür: borcun maliyeti varlıkların getirisinden yüksekse fark ortakların payından çıkar."},
  {q:"Elektrik 100 €/MWh, gaz 45 €/MWh (ısıl), santral verimi %50 ise spark spread kaçtır?",o:["55 €/MWh","10 €/MWh","22,5 €/MWh","−10 €/MWh"],a:1,e:"Yakıt maliyeti 45 ÷ 0,50 = 90 €/MWh; 100 − 90 = 10 €/MWh. Verimi hesaba katmadan 100 − 45 demek yaygın bir hatadır."},
  {q:"Opsiyonu vadeli işlem (forward) sözleşmesinden ayıran özellik nedir?",o:["Opsiyon borsada işlem göremez","Opsiyon alma hakkı verir ama yükümlülük doğurmaz","Opsiyonda fiyat sabitlenmez","Opsiyon yalnızca elektrikte kullanılır"],a:1,e:"Forward iki tarafı da bağlar. Opsiyon sahibi fiyat aleyhe giderse hakkını kullanır, lehe giderse kullanmaz; bunun için prim öder."},
  {q:"VDMK'da yatırımcıya yapılan ödemelerin kaynağı nedir?",o:["Ana şirketin bilançosundaki tüm varlıklar","Devlet bütçesinden aktarılan kaynak","SPV'ye devredilen proje gelirleri","Merkez bankasının sağladığı likidite"],a:2,e:"Menkul kıymetler projenin gelecekteki nakit akışlarıyla teminatlandırılır; yatırımcı şirketin geneline değil bu akışa yatırım yapar."},
  {q:"Kapasite mekanizması bir santralin finansmanını nasıl kolaylaştırır?",o:["Yalnızca üretilen MWh'ye ek prim öder","Hazır tutulan kapasiteye de ödeme yapar","Santralin vergi yükünü tamamen sıfırlar","Elektrik satış fiyatını yıllarca sabitler"],a:1,e:"Az çalışan ama sistem için gerekli dengeleme santralleri, beklemenin karşılığını alarak daha öngörülebilir gelir elde eder."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. s. 88–98.",
 "Yescombe, E. R. (2014). <i>Principles of Project Finance</i> (2. baskı). Academic Press.",
 "Hull, J. C. <i>Options, Futures, and Other Derivatives</i>. Pearson.",
 "Multilateral Investment Guarantee Agency (MIGA): <a href=\"https://www.miga.org\">miga.org</a>"
],
next:"Sonraki: Hafta 11 — Enerji verimliliği ve talep tarafı yönetimi"
};
