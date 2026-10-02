window.WEEK={
id:"en-13",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Karbon piyasaları",week:13,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"İklim politikası",
title:"Karbona <em>fiyat</em> biçmek",
intro:"Bu hafta karbon salımına neden ve nasıl fiyat konduğunu öğreneceksiniz: zorunlu ve gönüllü karbon piyasaları, emisyon ticaret sistemi ile karbon vergisi arasındaki fark, sosyal karbon maliyeti ve kirleten öder ilkesinin adalet boyutu, karbon ayak izi ve karbon kaçağı, karbon sertifikaları, yeşil vergi reformu ve yeşil teknoloji yatırımları. Okuma süresi yaklaşık 50 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması, bir karşılaştırma ve 10 soruluk bir test var.",
goals:[
 "Emisyon ticaret sisteminin (tavan ve ticaret) işleyişini adım adım açıklayabilirsiniz.",
 "Karbon vergisi ile ETS'yi fiyat ve miktar kesinliği açısından karşılaştırabilirsiniz.",
 "Karbon fiyatının elektrik üretim maliyetine etkisini emisyon faktörüyle hesaplayabilirsiniz.",
 "Sosyal karbon maliyetini, kirleten öder ilkesini ve karbon vergisinin gerileyen etkisini açıklayabilirsiniz.",
 "Karbon kaçağını ve SKDM'nin bir ihracatçıya maliyetini hesaplayabilirsiniz."
],
sections:[
{n:"13.1",h:"Karbon piyasası nedir?",blocks:[
 {t:"p",html:"Hava görünmezdir ve kimsenin malı değildir; bu yüzden içine CO₂ salmanın bir fiyatı yoktur. Bir fabrikanın bacasından çıkan karbonun zararını fabrika değil, bütün dünya öder. İktisatta buna <b>negatif dışsallık</b> denir. Karbon piyasaları ve karbon fiyatlaması, bu görünmez maliyeti görünür bir fiyata çevirerek \"kirleten öder\" ilkesini ekonomik bir mekanizmaya dönüştürür."},
 {t:"p",html:"Karbon piyasaları iki gruba ayrılır. <b>Zorunlu piyasalar</b> (compliance markets) yasayla kurulur; en yaygın modeli emisyon ticaret sistemidir (ETS). <b>Gönüllü piyasalar</b> ise yasal zorunluluğa değil; kurumsal sorumluluk, marka itibarı ve \"karbon nötr\" olma hedefine dayanır."},
 {t:"timeline",items:[
  ["1","Tavan (cap)","Devlet, kapsanan sektörler için belirli bir dönemde salınabilecek toplam emisyonu belirler ve zamanla düşürür."],
  ["2","Tahsisat (allowance)","Tavan kadar emisyon izni oluşturulur; her biri genellikle 1 ton CO₂ eşdeğeri salma hakkıdır. Ücretsiz dağıtılır veya açık artırmayla satılır.",1],
  ["3","İzleme ve raporlama","Şirketler yıl sonunda fiili emisyonlarını doğrulanmış biçimde raporlar."],
  ["4","Ticaret","Az salan, kalan iznini satar; fazla salan, eksiğini piyasadan satın alır. Açığını kapatmayana ağır para cezası uygulanır.",1],
  ["5","Sonuç","Azaltımı en ucuza yapabilen şirket azaltır ve kazanır; azaltım maliyeti yüksek olan izin satın alarak esneklik kazanır."]]},
 {t:"table",head:["","Zorunlu piyasa (ETS)","Gönüllü piyasa"],rows:[
  ["Katılımcı","Yasayla belirlenen sanayi tesisleri ve şirketler","Şirketler, kurumlar, STK'lar, bireyler"],
  ["Amaç","Yasal emisyon hedefine uyum","Kurumsal sorumluluk, karbon nötrlük, itibar"],
  ["Araç","Emisyon tahsisatı (allowance)","Karbon kredisi / ofset sertifikası"],
  ["Fiyat","Tavan (arz) ve talebe göre","Projenin türüne, standardına ve talebe göre"],
  ["Örnek","AB ETS, Kaliforniya karbon piyasası","Gold Standard, Verified Carbon Standard (VCS) projeleri"]]},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye'de 2025'te yürürlüğe giren <b>İklim Kanunu</b>, 2053 net sıfır hedefini yasal çerçeveye bağladı ve <b>Türkiye Emisyon Ticaret Sistemi</b>'nin (TR-ETS) kurulmasını öngördü. Sistemin, uyum için bir pilot dönemle başlaması planlanmıştır. Türkiye'de büyük sanayi tesisleri sera gazı emisyonlarını 2015'ten bu yana izleme, raporlama ve doğrulama (İRD) yönetmeliği kapsamında raporlamaktadır; bu altyapı, bir ETS'nin ön koşuludur. Uygulama ayrıntıları ikincil mevzuatla belirlendiği için güncel durum Çevre, Şehircilik ve İklim Değişikliği Bakanlığı kaynaklarından izlenmelidir."}
]},
{n:"13.2",h:"Karbon vergisi mi, emisyon ticareti mi?",blocks:[
 {t:"p",html:"Karbon fiyatlamanın iki ana yolu vardır ve ikisi de aynı amaca hizmet eder: kirletmeyi pahalılaştırıp temiz enerjiyi, verimliliği ve düşük karbonlu teknolojiyi cazip kılmak. Fark, neyin kesin olduğundadır."},
 {t:"choice",items:[
  {label:"Karbon vergisi",title:"Fiyatı belirle, miktar piyasada oluşsun",body:"Devlet her ton CO₂ eşdeğeri için sabit bir vergi belirler. Genellikle yakıtın çıkarıldığı veya ithal edildiği ilk noktada (maden, rafineri, liman) uygulanır ve karbon içeriğiyle orantılıdır. Maliyet zincir boyunca ilerleyip benzin ve elektrik fiyatına yansır.",ex:"Kesin olan: karbonun fiyatı. Belirsiz olan: emisyonun ne kadar azalacağı. Mevcut vergi sistemine eklendiği için uygulaması daha basittir; gelir görece öngörülebilirdir."},
  {label:"Emisyon ticareti (ETS)",title:"Miktarı belirle, fiyat piyasada oluşsun",body:"Toplam emisyon tavanı konur, izinler dağıtılır veya satılır, fiyat arz ve talebe göre oluşur.",ex:"Kesin olan: toplam emisyon (tavan). Belirsiz olan: karbonun fiyatı. Ayrı bir piyasa ve izleme sistemi gerektirir; açık artırma geliri fiyatla birlikte dalgalanır."},
  {label:"Pigou vergisi",title:"Fikrin kökeni",body:"Karbon vergisi, İngiliz iktisatçı Arthur C. Pigou'nun (1920) dışsallık vergisi fikrinin iklime uygulanmasıdır. İdeal vergi, faaliyetin topluma verdiği marjinal zarara eşit olmalıdır; böylece üretici zararı kendi maliyetine katar (içselleştirir).",ex:"Kitaptaki örnek: nehre atık bırakan fabrikanın balıkçılara verdiği zarar, fabrikanın maliyetinde yer almaz. Vergi bu zararı fabrikanın hesabına sokar."}
 ]},
 {t:"p",html:"Karbon fiyatı elektrik fiyatına nasıl yansır? Bir santralin her MWh başına saldığı CO₂ (emisyon faktörü) ile karbon fiyatı çarpılır. Kömür santrali doğal gaz santralinin yaklaşık iki katı, yenilenebilir santral ise hiç karbon maliyeti taşımaz; bu yüzden karbon fiyatı yükseldikçe sıralama değişir."},
 {t:"widget",name:"calc",opts:{title:"Karbon fiyatı üretim maliyetini ne kadar artırır?",inputs:[{id:"cp",label:"Karbon fiyatı",min:0,max:200,step:5,value:80,unit:" €/t CO₂"},{id:"komur",label:"Kömür santrali yakıt + işletme maliyeti",min:20,max:150,step:5,value:60,unit:" €/MWh"},{id:"gaz",label:"Gaz santrali yakıt + işletme maliyeti",min:20,max:200,step:5,value:85,unit:" €/MWh"}],formula:"(function(){var ek=0.95,eg=0.37,ck=komur+ek*cp,cg=gaz+eg*cp,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'kömür: +'+h(ek*cp)+' → '+h(ck)+' €/MWh · gaz: +'+h(eg*cp)+' → '+h(cg)+' €/MWh · '+(ck>cg?'gaz artık daha ucuz (yakıt geçişi)':(ck<cg?'kömür hâlâ daha ucuz':'eşit'));})()",result:"{r}",note:"Emisyon faktörleri yaklaşık değerlerdir: kömür santrali ≈ 0,95 t CO₂/MWh, verimli doğal gaz kombine çevrim ≈ 0,37 t CO₂/MWh; gerçek değer santralin verimine ve yakıt kalitesine göre değişir. Karbon fiyatını sıfırdan artırın: kömür ile gazın maliyet sıralamasının yer değiştirdiği fiyata \"yakıt geçiş fiyatı\" denir. Bu, karbon fiyatının iklim etkisini yaratan temel kanaldır."}}
]},
{n:"13.3",h:"Sosyal karbon maliyeti ve adalet",blocks:[
 {t:"p",html:"<b>Kirleten öder ilkesi</b>, çevreye zarar veren faaliyetin maliyetini onu gerçekleştirenin karşılamasıdır; karbon fiyatlamanın ahlaki ve hukuki zemini budur. Ama hemen bir soru doğar: kirleten <i>ne kadar</i> ödemeli?"},
 {t:"def",html:"Sosyal karbon maliyeti (SCC), atmosfere salınan ek bir ton CO₂'nin bugün ve gelecekte yol açacağı tüm ekonomik zararların bugünkü değeridir.",src:"Tarımsal verim kaybı, aşırı hava olaylarının mülk hasarı, sağlık maliyetleri, deniz seviyesi yükselmesiyle kaybedilen araziler gibi zararları kapsar."},
 {t:"p",html:"SCC, karbon vergisinin düzeyini belirlemede ve iklim düzenlemelerinin fayda-maliyet analizinde referans alınır. Sonucu en çok etkileyen varsayım <b>iskonto oranıdır</b>: zararların çoğu on yıllar sonra gerçekleştiği için düşük iskonto oranı gelecek kuşakların refahına daha çok ağırlık verir ve SCC'yi büyütür. Hafta 09'daki NBD mantığının aynısı burada kuşaklar arası adaletin aracına dönüşür. Örneğin ABD Çevre Koruma Ajansı'nın 2023 tahmini, %2 iskonto oranıyla ton başına yaklaşık 190 dolardır (2020 doları)."},
 {t:"table",head:["Adalet boyutu","Sorun","Politika çözümü"],rows:[
  ["Uluslararası (iklim adaleti)","Tarihsel emisyonların büyük kısmı zengin ülkelerin; en ağır etkiler yoksul ülkelerde","İklim finansmanı (Yeşil İklim Fonu), teknoloji transferi, \"ortak fakat farklılaştırılmış sorumluluklar\" ilkesi"],
  ["Ulusal (gerileyen etki)","Düşük gelirli hane gelirinin daha büyük kısmını enerji ve ulaşıma harcar; vergi onu orantısız etkiler","Karbon temettüsü (gelirin halka eşit dağıtılması), enerji yardımı, yeşil toplu taşıma yatırımı"],
  ["Nesiller arası","Bugünün emisyonunun faturası gelecek kuşaklara kalır","SCC'de düşük iskonto oranı, iddialı ve hızlı azaltım hedefleri"]]},
 {t:"p",html:"<b>Gerileyen etki</b>yi bir örnekle görelim: Karbon vergisi bir hanenin aylık enerji faturasını 300 TL artırsın. Aylık geliri 20.000 TL olan hane için bu gelirin %1,5'i, 100.000 TL olan hane için %0,3'üdür. Bu yüzden <b>adil geçiş</b> yaklaşımı, karbon gelirlerinin bir kısmının düşük gelirli haneleri korumaya ve fosil yakıt sektöründeki çalışanların dönüşümüne harcanmasını savunur."}
]},
{n:"13.4",h:"Karbon ayak izi, karbon kaçağı ve SKDM",blocks:[
 {t:"p",html:"<b>Karbon ayak izi</b>, bir bireyin, kurumun, ürünün veya faaliyetin neden olduğu toplam sera gazının ölçüsüdür; genellikle yıllık ve ton CO₂ eşdeğeri (tCO₂e) olarak ifade edilir. Metan ve diazot monoksit gibi güçlü sera gazları da ısınma potansiyellerine göre CO₂ eşdeğerine çevrilir."},
 {t:"table",head:["Kim?","Doğrudan ayak izi","Dolaylı ayak izi"],rows:[
  ["Birey","Evde yakılan doğal gaz, benzinli/dizel araç","Tüketilen elektrik, satın alınan gıda ve giysi, uçak yolculuğu, atık"],
  ["Şirket","Baca emisyonları, şirket araçları, proses tepkimeleri","Satın alınan elektrik ve ısı; hammadde tedariki ve nakliye; çalışanların ulaşımı; ürün dağıtımı"],
  ["Ürün","Genellikle yok","\"Beşikten mezara\": hammadde, üretim, paketleme, nakliye, kullanım, atık yönetimi"]]},
 {t:"p",html:"Şirket raporlamasında yaygın kullanılan Sera Gazı Protokolü bu ayrımı üç kapsamla yapar: <b>Kapsam 1</b> doğrudan emisyonlar, <b>Kapsam 2</b> satın alınan elektrik ve ısıdan kaynaklanan dolaylı emisyonlar, <b>Kapsam 3</b> ise tedarik zincirindeki diğer bütün dolaylı emisyonlardır."},
 {t:"p",html:"<b>Karbon kaçağı</b>, sıkı iklim politikası uygulayan bir ülkeden karbon yoğun üretimin gevşek politikalı ülkelere kaymasıdır. A ülkesi karbona yüksek fiyat koyar; çimento ve çelik üreticisi maliyet artışı yüzünden B ülkesindeki rakiplerle rekabet edemez, üretimi oraya taşır. A'nın emisyon raporu iyileşir, ama küresel emisyon yalnızca yer değiştirmiştir; B'deki teknoloji daha kirliyse artmış bile olabilir."},
 {t:"p",html:"AB'nin <b>Sınırda Karbon Düzenleme Mekanizması</b> (SKDM, CBAM) bu kaçağı önlemek için tasarlandı. İthalatçı, ithal ettiği üründeki gömülü emisyon için AB ETS fiyatına bağlı SKDM sertifikası almak zorundadır; menşe ülkede fiilen ödenmiş karbon fiyatı düşülebilir. Hesaplayıcıda bir Türk çelik ihracatçısının durumunu deneyin."},
 {t:"widget",name:"calc",opts:{title:"SKDM maliyeti",inputs:[{id:"ton",label:"AB'ye ihraç edilen çelik",min:1000,max:200000,step:1000,value:50000,unit:" ton"},{id:"yog",label:"Gömülü emisyon yoğunluğu",min:0.3,max:3,step:0.1,value:1.9,unit:" t CO₂ / t ürün"},{id:"ets",label:"AB ETS fiyatı",min:20,max:150,step:5,value:80,unit:" €/t"},{id:"yerel",label:"Türkiye'de fiilen ödenen karbon fiyatı",min:0,max:150,step:5,value:0,unit:" €/t"}],formula:"(function(){var e=ton*yog,fark=Math.max(0,ets-yerel),m=e*fark,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:0})};return 'gömülü emisyon '+h(e)+' t CO₂ · SKDM yükü ≈ '+h(m)+' € (ton ürün başına '+h(m/ton)+' €)';})()",result:"{r}",note:"Basitleştirilmiş hesap: SKDM yükü ≈ gömülü emisyon × (AB ETS fiyatı − menşe ülkede ödenen karbon fiyatı). AB'deki üreticilerin aldığı ücretsiz tahsisat 2026–2034 arasında kademeli kaldırıldığı için gerçek yük bu dönemde azdan çoğa artar. Emisyon yoğunluğu üretim yöntemine göre büyük fark gösterir: elektrik ark ocağı, yüksek fırına göre çok daha düşük yoğunlukludur. Yoğunluğu düşürmek ve yurt içinde karbon fiyatı ödemek, yükü azaltmanın iki yoludur."}},
 {t:"box",lbl:"Neden önemli?",html:"Türkiye için AB en büyük ihracat pazarıdır ve SKDM'nin kapsadığı demir-çelik, alüminyum, çimento ve gübre Türk sanayisinin önemli kalemleridir. Yerli bir karbon fiyatı (TR-ETS) olursa, ödenen bedel AB'ye değil Türkiye'nin kendi bütçesine kalır ve SKDM'den düşülebilir. Ulusal ETS tartışmasının en somut ekonomik gerekçesi budur."}
]},
{n:"13.5",h:"Karbon sertifikaları",blocks:[
 {t:"p",html:"Karbon sertifikası, soyut bir \"emisyon azaltımını\" ölçülebilir ve alınıp satılabilir bir araca dönüştürür; genellikle 1 sertifika 1 ton CO₂ eşdeğerini temsil eder. İki türü vardır ve sık karıştırılır."},
 {t:"table",head:["","Emisyon tahsisatı (allowance)","Karbon kredisi (offset)"],rows:[
  ["Temsil ettiği","1 ton salma izni (kirletme hakkı)","1 ton azaltımın veya uzaklaştırmanın kanıtı (çevresel fayda)"],
  ["Oluşturan","Devlet veya düzenleyici kurum","Bağımsız standartlarca doğrulanmış projeler"],
  ["Piyasa","Genellikle zorunlu (ETS)","Genellikle gönüllü"],
  ["İşlevi","Yasal emisyon sınırına uyum","Kaçınılmaz emisyonu dengelemek"],
  ["Dayandığı ilke","Tavan ve ticaret","Proje bazlı azaltım"]]},
 {t:"p",html:"Karbon kredisinin değeri tamamen güvenilirliğine bağlıdır. Doğrulama sürecinde azaltımın <b>gerçek</b>, <b>ölçülebilir</b>, <b>kalıcı</b> ve <b>ek</b> (additional, yani proje olmasaydı gerçekleşmeyecek) olduğu kanıtlanmalıdır. Örneğin zaten korunan bir ormanın \"korunması\" için kredi satılırsa ortada ek bir fayda yoktur; bu tür kredilere dayanan \"karbon nötr\" iddiaları yeşil aklama (greenwashing) eleştirisiyle karşılaşır."}
]},
{n:"13.6",h:"Yeşil vergi reformu ve yeşil teknoloji yatırımı",blocks:[
 {t:"p",html:"<b>Yeşil vergi reformu</b>, vergi yükünü toplumun istediği \"iyi\" faaliyetlerden (emek, istihdam, yatırım) istenmeyen \"kötü\" faaliyetlere (kirlilik, kaynak israfı, atık) kaydırmaktır. Genellikle <b>gelir nötrlüğü</b> ilkesine dayanır: amaç devletin toplam gelirini artırmak değil, verginin kimden ve neden alındığını değiştirmektir. Kirlilikten alınan yeni gelir, gelir vergisini, kurumlar vergisini veya işveren sosyal güvenlik primlerini düşürmek için kullanılır."},
 {t:"p",html:"Bu yaklaşımın vaadi <b>çifte kazanç hipotezidir</b> (double dividend): hem çevre iyileşir hem de istihdam üzerindeki vergi azaldığı için ekonomi daha verimli çalışır. İkinci kazancın her koşulda gerçekleşip gerçekleşmediği literatürde tartışmalıdır; kitabın araştırma sorusu da bunu sorar."},
 {t:"widget",name:"calc",opts:{title:"Gelir nötr yeşil vergi kaydırması",inputs:[{id:"emis",label:"Ülkenin vergilendirilen emisyonu",min:50,max:500,step:10,value:300,unit:" milyon t CO₂"},{id:"vergi",label:"Karbon vergisi",min:0,max:100,step:5,value:20,unit:" $/t"},{id:"azal",label:"Vergiye tepkiyle emisyon azalması",min:0,max:40,step:1,value:10,unit:" %"},{id:"prim",label:"İşveren primlerinin toplam tutarı",min:20,max:200,step:5,value:60,unit:" milyar $"}],formula:"(function(){var g=emis*(1-azal/100)*vergi/1000,h=function(v){return v.toLocaleString('tr-TR',{maximumFractionDigits:1})};return 'karbon vergisi geliri '+h(g)+' milyar $ · gelir nötr kaydırmada işveren primleri %'+h(100*g/prim)+' oranında düşürülebilir';})()",result:"{r}",note:"Örnek ve basitleştirilmiş değerler; gerçek bir ülkeye ait değildir. Vergi gelirinin, azalmadan sonra kalan emisyon üzerinden hesaplandığına dikkat edin: vergi başarılı oldukça vergi tabanı küçülür. Bu, karbon vergisi gelirine uzun vadede güvenmenin sınırıdır."}},
 {t:"p",html:"<b>Yeşil teknoloji yatırımları</b> (clean tech) çevresel etkiyi azaltan teknolojilere yapılan ve rekabetçi getiri hedefleyen yatırımlardır: \"iyilik yaparak kâr etmek\". Kitap dört itici güç sayar: karbon fiyatı ve teşvik gibi politikalar; tüketici talebi ve şirketlerin ESG hedefleri; güneş, rüzgâr ve batarya maliyetlerindeki sert düşüş; iklim kaynaklı fiziksel riskler ve atıl varlık (stranded asset) gibi geçiş risklerinden korunma isteği. Başlıca alanlar yenilenebilir enerji, verimlilik ve depolama, sürdürülebilir ulaşım, döngüsel ekonomi, su ve tarım teknolojileridir."}
]},
{n:"13.7",h:"Sınıflandırma: hangi araç?",blocks:[
 {t:"p",html:"Bu haftanın kavramları birbirine çok yakın. Aşağıdaki durumları doğru araçla eşleştirin."},
 {t:"widget",name:"classify",opts:{title:"Karbon politikası aracı",cats:["Karbon vergisi","Emisyon ticareti (ETS)","Gönüllü karbon kredisi","Sınırda düzenleme (SKDM)"],items:[
  ["Devlet, rafineri çıkışında her ton CO₂ için sabit bir tutar alıyor",0],
  ["Toplam emisyon tavanı her yıl %2 düşürülüyor, izinler borsada işlem görüyor",1],
  ["Bir havayolu şirketi, müşterilerinin uçuşlarını dengelemek için Brezilya'daki bir orman projesinden sertifika alıyor",2],
  ["AB'deki bir ithalatçı, Türkiye'den aldığı çeliğin gömülü emisyonu için sertifika teslim ediyor",3],
  ["Fazla izni olan bir çimento fabrikası, izin açığı olan bir santrale satış yapıyor",1],
  ["Karbonun fiyatı kesin ama emisyonun ne kadar azalacağı belirsiz",0],
  ["Bir STK, bireylere ağaçlandırma projesine dayalı Gold Standard sertifikası satıyor",2],
  ["Menşe ülkede ödenmiş karbon fiyatı, ithalatta ödenecek tutardan düşülüyor",3]
 ],note:"Vergi fiyatı, ETS miktarı sabitler; gönüllü krediler proje bazlıdır ve yasal zorunluluğa dayanmaz; SKDM ise sınırda, ithal ürünün gömülü emisyonuna uygulanır ve karbon kaçağını önlemeyi amaçlar."}}
]},
{n:"13.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Negatif dışsallık","Bir faaliyetin, fiyatına yansımadan üçüncü kişilere yüklediği zarar."],
  ["Tavan ve ticaret","Toplam emisyonu sınırlayıp izinlerin alınıp satılmasına izin veren sistem (ETS)."],
  ["Pigou vergisi","Dışsallığın marjinal zararına eşit, zararı üreticinin maliyetine katan vergi."],
  ["Sosyal karbon maliyeti","Ek bir ton CO₂'nin bugün ve gelecekte yol açacağı zararların bugünkü değeri."],
  ["Gerileyen etki","Bir verginin düşük gelirlileri gelirlerine oranla daha ağır etkilemesi."],
  ["Karbon temettüsü","Karbon vergisi gelirinin vatandaşlara eşit olarak geri dağıtılması."],
  ["Karbon kaçağı","Sıkı iklim politikası yüzünden üretim ve emisyonun gevşek politikalı ülkelere kayması."],
  ["SKDM","AB'ye ithal edilen karbon yoğun ürünlerin gömülü emisyonuna fiyat uygulayan mekanizma."],
  ["Ek olma (additionality)","Karbon kredisindeki azaltımın, proje olmasaydı gerçekleşmeyeceğinin kanıtı."],
  ["Çifte kazanç","Yeşil vergi reformunun hem çevreyi hem ekonomik verimliliği iyileştirebileceği hipotezi."]
 ]}
]},
{n:"13.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Emisyon ticaret sisteminde kesin olan nedir?",o:["Karbonun fiyatı","Toplam emisyon miktarı (tavan)","Devletin vergi geliri","Her şirketin azaltım miktarı"],a:1,e:"ETS miktar odaklıdır: tavan toplam emisyonu sınırlar, fiyat piyasada dalgalanır. Karbon vergisinde ise fiyat kesindir."},
  {q:"ETS'de bir şirket kendisine tanınan izinden daha az salarsa ne olur?",o:["Ceza öder","Kalan iznini piyasada satabilir","İzni devlete iade etmek zorundadır","Bir sonraki yıl izin alamaz"],a:1,e:"Ucuza azaltım yapabilen şirket fazla iznini satarak kazanç sağlar; sistemin teşvik mekanizması budur."},
  {q:"Karbon fiyatı 60 €/t, bir kömür santralinin emisyon faktörü 0,9 t CO₂/MWh ise üretim maliyetine eklenen tutar nedir?",o:["0,9 €/MWh","6,7 €/MWh","54 €/MWh","66,7 €/MWh"],a:2,e:"0,9 × 60 = 54 €/MWh. Aynı fiyatla 0,37 t/MWh'lik gaz santraline yalnızca yaklaşık 22 €/MWh eklenir."},
  {q:"Karbon vergisinin \"gerileyen\" (regressive) etkisi ne demektir?",o:["Vergi oranının zaman içinde kademeli azalması","Düşük gelirlileri gelirine oranla daha ağır vurması","Büyük şirketlerin küçüklerden fazla vergi ödemesi","Geçmiş yılların emisyonunun da vergilendirilmesi"],a:1,e:"Düşük gelirliler gelirinin daha büyük kısmını enerji ve ulaşıma harcar; aynı fiyat artışı onlar için daha büyük bir yüktür."},
  {q:"Sosyal karbon maliyeti hesabında daha düşük bir iskonto oranı kullanmak ne sonuç verir?",o:["SCC küçülür, gelecek zararlar önemsizleşir","SCC büyür, gelecek zararlar ağırlık kazanır","SCC değişmez, çünkü zararlar sabittir","Hesap matematiksel olarak tanımsız olur"],a:1,e:"Zararların çoğu uzak gelecekte gerçekleşir; düşük oranla indirgenen gelecek zararların bugünkü değeri yükselir."},
  {q:"A ülkesi karbon vergisi koyunca çimento üretiminin vergisiz B ülkesine taşınmasına ne denir?",o:["Çifte kazanç","Karbon kaçağı","Ek olma","Karbon temettüsü"],a:1,e:"Emisyon azalmaz, yer değiştirir; SKDM gibi sınırda düzenlemeler bunu önlemek için tasarlanır."},
  {q:"Bir ihracatçı AB'ye 10.000 ton çelik satıyor; gömülü emisyon 2 t CO₂/t, AB ETS fiyatı 80 €/t, Türkiye'de ödenen karbon fiyatı 30 €/t. Basit SKDM yükü kaçtır?",o:["600.000 €","1.000.000 €","1.600.000 €","2.200.000 €"],a:1,e:"20.000 t CO₂ × (80 − 30) = 1.000.000 €. Yurt içinde ödenen karbon fiyatı düşülmeseydi 1,6 milyon € olurdu."},
  {q:"Emisyon tahsisatını karbon kredisinden ayıran özellik hangisidir?",o:["Tahsisat bir azaltımın kanıtıdır","Tahsisat devletçe oluşturulan bir salma iznidir","Karbon kredisi yalnızca devletlerce satılır","İkisi arasında fark yoktur"],a:1,e:"Tahsisat zorunlu piyasada salma hakkıdır; kredi ise doğrulanmış bir projenin sağladığı azaltımın kanıtıdır."},
  {q:"Gelir nötr yeşil vergi reformunun amacı nedir?",o:["Devletin toplam vergi gelirini artırmak","Vergi yükünü emekten kirliliğe kaydırmak","Gelir ve kurumlar vergisini tümden kaldırmak","Vergiyi yalnızca sanayi sektörüne yüklemek"],a:1,e:"Toplam gelir aynı kalır; kirlilikten alınan gelirle gelir vergisi, kurumlar vergisi veya işveren primleri düşürülür."},
  {q:"Bir şirketin satın aldığı elektriğin üretiminden kaynaklanan emisyon, Sera Gazı Protokolü'nde hangi kapsamdadır?",o:["Kapsam 1","Kapsam 2","Kapsam 3","Hiçbir kapsama girmez"],a:1,e:"Kapsam 2, satın alınan elektrik, ısı ve buhardan kaynaklanan dolaylı emisyonlardır. Baca emisyonu Kapsam 1, tedarik zinciri Kapsam 3'tür."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. s. 145–167.",
 "Pigou, A. C. (1920). <i>The Economics of Welfare</i>. London: Macmillan.",
 "Dünya Bankası — State and Trends of Carbon Pricing (yıllık rapor): <a href=\"https://www.worldbank.org\">worldbank.org</a>",
 "T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı — İklim Değişikliği Başkanlığı: <a href=\"https://iklim.gov.tr\">iklim.gov.tr</a>"
],
next:"Sonraki: Hafta 14 — Sürdürülebilir kalkınma, yeşil ve mavi ekonomi, vaka çalışması"
};
