window.WEEK={
id:"ge-05",code:"GE",course:"Genel Ekonomi",short:"Talep",week:5,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Mikroiktisat",
title:"Talep ve talep <em>esnekliği</em>",
intro:"Bu hafta talep kanununu, talep eğrisi üzerindeki hareket ile eğrinin kaymasını, piyasa talebinin nasıl oluştuğunu ve talep kanununun istisnalarını öğreneceksiniz. Haftanın ikinci yarısı esnekliğe ayrıldı: fiyat, çapraz ve gelir esnekliğini hesaplayacak, esneklik ile toplam hasılat arasındaki bağı göreceksiniz. Okuma süresi yaklaşık 45 dakika; sayfada bir arz-talep grafiği, üç hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Talep kanununu ikame ve gelir etkileriyle açıklayabilirsiniz.",
 "Talep eğrisi üzerinde hareket ile talep eğrisinin kaymasını ayırt edip kaydıran faktörleri sayabilirsiniz.",
 "Orta nokta yöntemiyle talebin fiyat esnekliğini hesaplayıp yorumlayabilirsiniz.",
 "Fiyat değişiminin toplam hasılata etkisini esnekliğe bakarak tahmin edebilirsiniz.",
 "Çapraz ve gelir esnekliğinin işaretinden malları ikame/tamamlayıcı ve normal/düşük/lüks olarak sınıflandırabilirsiniz."
],
sections:[
{n:"5.1",h:"Talep ve talep kanunu",blocks:[
 {t:"def",html:"Talep, belirli bir dönemde, farklı fiyat düzeylerinde tüketicilerin satın almak istediği <b>ve satın alma gücüne sahip olduğu</b> mal ve hizmet miktarıdır.",src:"Yalnızca istemek yetmez: bir otomobili isteyip parası olmayan kişi o piyasanın talebine dahil değildir."},
 {t:"p",html:"<b>Talep kanunu</b>, diğer her şey sabitken bir malın fiyatı ile talep edilen miktarı arasında ters yönlü bir ilişki olduğunu söyler. Fiyat artınca talep edilen miktar azalır, fiyat düşünce artar. Bu ters ilişkinin iki nedeni vardır."},
 {t:"list",items:[
  "<b>İkame etkisi:</b> Bir malın fiyatı arttığında, göreli olarak ucuzlayan benzer mallara yönelinir. Dana eti pahalanınca tavuk tüketimi artar.",
  "<b>Gelir etkisi:</b> Fiyat arttığında aynı parayla daha az şey alınabilir; tüketicinin reel geliri düşer, o maldan daha az alır."
 ]},
 {t:"p",html:"Talep kanunu grafikte, sol üstten sağ alta inen <b>talep eğrisiyle</b> gösterilir. Dikey eksende fiyat (P), yatay eksende miktar (Q) yer alır. Kitaptaki ekmek örneğinde fiyat 2 TL iken haftada 10 ekmek alınıyor; fiyat 3 TL'ye çıkınca 8'e düşüyor, 1 TL'ye inince 12'ye çıkıyor."}
]},
{n:"5.2",h:"Hareket, kayma ve piyasa talebi",blocks:[
 {t:"p",html:"“Bir eğri üzerinde yürümek başka, eğrinin yerini değiştirmek başka.” Piyasa yorumlarında en sık yapılan hata bu ikisini karıştırmaktır."},
 {t:"table",head:["","Talep edilen miktarın değişmesi","Talebin değişmesi"],rows:[
  ["Nedeni","Yalnızca malın <b>kendi fiyatı</b>","Fiyat dışındaki faktörler"],
  ["Grafikte","Aynı eğri üzerinde bir noktadan ötekine","Bütün eğri sağa ya da sola kayar"],
  ["Örnek","Kahve ucuzlayınca daha çok kahve alınması","Gelir artınca her fiyatta daha çok kahve alınması"]]},
 {t:"table",head:["Faktör","Talebi sağa kaydırır (artırır)","Talebi sola kaydırır (azaltır)"],rows:[
  ["Gelir (normal mal)","Gelir artarsa","Gelir azalırsa"],
  ["Gelir (düşük mal)","Gelir azalırsa","Gelir artarsa"],
  ["İkame malın fiyatı","Artarsa","Azalırsa"],
  ["Tamamlayıcı malın fiyatı","Azalırsa","Artarsa"],
  ["Zevk ve tercihler","Mal popülerleşirse","Mal popülerliğini yitirirse"],
  ["Beklentiler","Gelecekte fiyat artışı beklenirse","Gelecekte fiyat düşüşü beklenirse"],
  ["Alıcı sayısı","Nüfus artarsa","Nüfus azalırsa"]]},
 {t:"p",html:"Aşağıdaki grafikte talep sürgüsünü sağa çekin: gelir artışı ya da malın popülerleşmesi gibi bir etkiyi temsil eder. Arz değişmezken talep artışı hem denge fiyatını hem denge miktarını yükseltir."},
 {t:"widget",name:"supplyDemand",opts:{title:"Talep kayması",a:100,b:1,c:10,d:1,note:"Talep sürgüsü pozitif: gelir artışı, ikame malın pahalanması, tamamlayıcı malın ucuzlaması, fiyat artışı beklentisi. Negatif: bunların tersi. Arz sürgüsüne bu hafta dokunmayın; Hafta 06'da arzı ele alacağız."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"Ramazan Bayramı öncesi şeker ve lokum, Kurban Bayramı öncesi kurbanlık hayvan talebi her yıl belirgin biçimde artar. Fiyat değiştiği için değil, mevsimsel ve kültürel bir etkenle talep eğrisinin kendisi sağa kaydığı için."}
,
 {t:"p",html:"<b>Piyasa talebi</b> ise bütün tüketicilerin bireysel talep eğrilerinin <b>yatay toplanmasıyla</b> bulunur: her fiyat düzeyinde herkesin talep ettiği miktarlar toplanır. Kitaptaki örnekte fiyat 6 TL iken Tüketici A 15, Tüketici B 10 birim talep ediyor; piyasa talebi bu fiyatta 25 birimdir."},
 {t:"p",html:"Dikkat: toplanan şey fiyatlar değil miktarlardır. “Fiyat 6 TL iken kaç birim?” sorusu her tüketici için ayrı sorulur, yanıtlar toplanır. Pazara yeni alıcılar girdikçe piyasa talep eğrisi sağa kayar; bu da bir önceki tablodaki “alıcı sayısı” faktörünün grafiksel karşılığıdır."}
]},
{n:"5.3",h:"Talep kanununun istisnaları: Giffen ve Veblen",blocks:[
 {t:"choice",items:[
  {label:"Giffen malı",title:"Fiyatı artınca talebi artan zorunlu mal",body:"Çok yoksul hanelerin bütçesinde büyük yer tutan, yakın ikamesi olmayan temel bir gıda düşünün. Fiyatı artınca hane daha pahalı gıdaları (et, sebze) alamaz hâle gelir ve açığı o ucuz temel gıdayla kapatır. Gelir etkisi ikame etkisinden güçlü olduğu için talep artar.",ex:"Kavram Robert Giffen'in adıyla anılır; klasik örnek 19. yüzyıl İrlanda'sında patatestir, ama bu örneğin tarihsel kanıtı tartışmalıdır. Daha güçlü kanıt, 2000'lerde Çin'in Hunan bölgesindeki yoksul hanelerin pirinç tüketimine ilişkin bir saha deneyinden gelir (Jensen ve Miller, 2008)."},
  {label:"Veblen malı",title:"Fiyatı artınca cazibesi artan lüks mal",body:"Bazı lüks ürünlerde yüksek fiyat statü sinyali verir. Fiyat yükseldikçe ürün daha seçkin algılanır, talep artabilir. Sosyal sinyal, ayrıcalık duygusu, yüksek kalite algısı ve duygusal tatmin bu etkiyi besler.",ex:"Örnekler: pahalı saatler, lüks otomobiller, tasarımcı çantaları, antikalar. Adını “gösterişçi tüketim” kavramını geliştiren Thorstein Veblen'den alır."},
  {label:"Ortak nokta",title:"Neden önemliler?",body:"İkisi de nadir istisnalardır, ama tüketici davranışının yalnızca fiyatla değil, gelir düzeyi, psikoloji ve sosyal statüyle de şekillendiğini gösterir.",ex:"Gündelik malların neredeyse tamamında talep kanunu geçerlidir."}
 ]}
]},
{n:"5.4",h:"Talebin fiyat esnekliği",blocks:[
 {t:"p",html:"Talep kanunu yönü söyler: fiyat artınca miktar azalır. Ama <b>ne kadar</b> azalır? Bu sorunun yanıtı <b>esnekliktir</b>. Esneklik, iki değişkendeki yüzde değişimlerin oranıdır; birimlerden bağımsızdır, bu yüzden ekmekle otomobili karşılaştırabiliriz."},
 {t:"box",lbl:"Formül",html:"Talebin fiyat esnekliği (E<sub>d</sub>) = %ΔQ ÷ %ΔP<br>Orta nokta yöntemi: %ΔQ = (Q₂ − Q₁) ÷ [(Q₁ + Q₂)/2], %ΔP = (P₂ − P₁) ÷ [(P₁ + P₂)/2]<br>Esneklik genellikle negatif çıkar; yorumlarken mutlak değerine bakılır."},
 {t:"table",head:["|E<sub>d</sub>|","Adı","Anlamı","Örnek"],rows:[
  ["0","Tam inelastik","Fiyat ne olursa olsun miktar değişmez (dikey eğri)","Hayati bir ilaç"],
  ["0 – 1","İnelastik","Miktar fiyattan daha az oranda değişir","Ekmek, elektrik, benzin"],
  ["1","Birim esnek","Miktar fiyatla aynı oranda değişir","—"],
  ["1'den büyük","Elastik","Miktar fiyattan daha çok oranda değişir","Restoran yemeği, belirli bir marka kola"],
  ["∞","Tam elastik","Belirli bir fiyatta sınırsız miktar (yatay eğri)","Tam rekabette tek bir üreticinin malı"]]},
 {t:"p",html:"Kitaptaki örnekte fiyat 100 TL'den 80 TL'ye düşüyor, miktar 20'den 30'a çıkıyor. Orta nokta yöntemiyle fiyat %22,2 düşer, miktar %40 artar; esneklik −1,8'dir. Talep elastiktir. Değerleri değiştirerek deneyin."},
 {t:"widget",name:"calc",opts:{title:"Fiyat esnekliği (orta nokta yöntemi)",inputs:[{id:"pa",label:"Eski fiyat",min:10,max:200,step:5,value:100,unit:" TL"},{id:"pb",label:"Yeni fiyat",min:10,max:200,step:5,value:80,unit:" TL"},{id:"qa",label:"Eski miktar",min:1,max:100,step:1,value:20},{id:"qb",label:"Yeni miktar",min:1,max:100,step:1,value:30}],formula:"pa==pb?'fiyat değişmedi, esneklik hesaplanamaz':(function(){var e=((qb-qa)/((qa+qb)/2))/((pb-pa)/((pa+pb)/2));var m=Math.abs(e);return e.toLocaleString('tr-TR',{maximumFractionDigits:2})+' → '+(m>1.005?'elastik':(m<0.995?'inelastik':'birim esnek'))+' · toplam hasılat '+(pa*qa).toLocaleString('tr-TR')+' TL → '+(pb*qb).toLocaleString('tr-TR')+' TL';})()",result:"E<sub>d</sub> = {r}",note:"Elastik talepte fiyat düşünce hasılat artar (2.000 → 2.400 TL). Yeni miktarı 22 yapın: talep inelastik olur ve fiyat indirimi hasılatı düşürür."}}
]},
{n:"5.5",h:"Esneklik ve toplam hasılat",blocks:[
 {t:"p",html:"Toplam hasılat (TR) fiyat × miktardır. Fiyat değiştiğinde iki etki çatışır: fiyat etkisi (birim başına daha çok/az para) ve miktar etkisi (daha az/çok satış). Hangisinin ağır basacağını esneklik söyler."},
 {t:"table",head:["Talep","Fiyat artarsa","Fiyat düşerse"],rows:[
  ["Elastik (|E|>1)","Hasılat azalır","Hasılat artar"],
  ["Birim esnek (|E|=1)","Hasılat değişmez","Hasılat değişmez"],
  ["İnelastik (|E|<1)","Hasılat artar","Hasılat azalır"]]},
 {t:"p",html:"Kitaptaki örnek: fiyatı 10 TL, satışı 100 birim olan bir firma fiyatı %10 artırıp 11 TL yapıyor. Esneklik 2 ise miktar %20 azalarak 80'e iner; hasılat 1.000 TL'den 880 TL'ye düşer. Doğrusal bir talep eğrisinde üst kısım elastik, alt kısım inelastiktir; orta noktada esneklik 1'dir ve hasılat en yüksek düzeyine ulaşır."},
 {t:"widget",name:"calc",opts:{title:"Fiyat değişikliği hasılatı nasıl etkiler?",inputs:[{id:"p",label:"Bugünkü fiyat",min:1,max:100,step:1,value:10,unit:" TL"},{id:"q",label:"Bugünkü satış",min:10,max:1000,step:10,value:100,unit:" birim"},{id:"dp",label:"Fiyat değişimi",min:-30,max:30,step:1,value:10,unit:"%"},{id:"e",label:"Esneklik (mutlak değer)",min:0,max:4,step:0.1,value:2}],formula:"(function(){var q2=Math.max(0,q*(1-e*dp/100)),p2=p*(1+dp/100);return (p*q).toLocaleString('tr-TR')+' TL → '+(p2*q2).toLocaleString('tr-TR',{maximumFractionDigits:0})+' TL ('+(p2*q2>p*q+0.5?'artış':(p2*q2<p*q-0.5?'azalış':'değişmedi'))+')';})()",result:"Toplam hasılat: {r}",note:"Basit yaklaşım: %ΔQ ≈ −E × %ΔP. Esnekliği 0,5'e çekin; aynı %10'luk zam bu kez hasılatı artırır. Devletin sigara ve akaryakıta yüksek vergi koymasının bir nedeni budur: talep inelastik olduğu için vergi geliri yüksek kalır."}}
,
 {t:"p",html:"<b>Fiyat esnekliğini ne belirler?</b>"},
 {t:"list",items:[
  "<b>Yakın ikamelerin varlığı:</b> İkame ne kadar çoksa talep o kadar elastiktir. Belirli bir kola markasının talebi elastiktir; genel olarak “meşrubat” talebi çok daha az elastiktir.",
  "<b>Zorunlu mu, lüks mü:</b> Zorunlu malların (ekmek, ilaç, elektrik) talebi inelastik, ertelenebilir lüks malların (tatil, restoran) talebi daha elastiktir.",
  "<b>Bütçedeki pay:</b> Gelirin büyük bölümünü tutan mallarda fiyat değişimi daha çok hissedilir; tuz gibi küçük kalemlerde neredeyse hiç fark edilmez.",
  "<b>Zaman:</b> Kısa vadede talep genellikle inelastiktir; uzun vadede tüketiciler alternatif bulur ve talep daha elastik hâle gelir. Akaryakıt pahalanınca hemen araç değiştirilmez, ama yıllar içinde daha az yakan araçlara geçilir."
 ]}
]},
{n:"5.6",h:"Çapraz esneklik ve gelir esnekliği",blocks:[
 {t:"p",html:"<b>Çapraz esneklik</b>, bir malın fiyatındaki değişimin <i>başka</i> bir malın talebini nasıl etkilediğini ölçer: %ΔQ₂ ÷ %ΔP₁. İşareti iki malın ilişkisini gösterir. Kitaptaki örnekte kola fiyatı %10 artınca rakip kolanın talebi %5 artıyor: çapraz esneklik +0,5; mallar ikamedir."},
 {t:"p",html:"<b>Gelir esnekliği</b>, gelirdeki değişimin talebi nasıl etkilediğini ölçer: %ΔQ ÷ %ΔY. Gelir %10 artınca et talebi %20 artıyorsa gelir esnekliği 2'dir; et bu tüketici için lüks maldır. Ernst Engel'in 19. yüzyıl çalışmalarına dayanan <b>Engel yasası</b>, gelir arttıkça gıdaya harcanan payın düştüğünü söyler; bu, gıdanın zorunlu mal olmasının sonucudur."},
 {t:"table",head:["Ölçü","Değer","Yorum","Örnek"],rows:[
  ["Çapraz esneklik","> 0","İkame mallar","Tereyağı–margarin, çay–kahve"],
  ["Çapraz esneklik","< 0","Tamamlayıcı mallar","Otomobil–benzin, yazıcı–kartuş"],
  ["Çapraz esneklik","≈ 0","İlişkisiz mallar","Ekmek–çorap"],
  ["Gelir esnekliği","< 0","Düşük mal","Gelir artınca bırakılan ucuz, düşük kaliteli ürünler"],
  ["Gelir esnekliği","0 – 1","Normal–zorunlu mal","Ekmek, temel gıda"],
  ["Gelir esnekliği","> 1","Normal–lüks mal","Yurt dışı tatil, restoran"]]},
 {t:"widget",name:"calc",opts:{title:"Esnekliğin işareti malı tanımlar",inputs:[{id:"x",label:"Fiyat ya da gelirdeki değişim",min:-20,max:20,step:1,value:10,unit:"%"},{id:"q",label:"Talep edilen miktardaki değişim",min:-40,max:40,step:1,value:5,unit:"%"}],formula:"x==0?'değişim girin':(function(){var e=q/x;var s=e.toLocaleString('tr-TR',{maximumFractionDigits:2});return s+' — çapraz esneklik olarak: '+(e>0.05?'ikame':(e<-0.05?'tamamlayıcı':'ilişkisiz'))+' · gelir esnekliği olarak: '+(e<0?'düşük mal':(e<1?'normal-zorunlu mal':'normal-lüks mal'));})()",result:"Esneklik = {r}",note:"Aynı oran iki farklı soruya yanıt verebilir. İlk girdi başka bir malın fiyatıysa çapraz esnekliği, tüketicinin geliriyse gelir esnekliğini okuyun."}},
 {t:"widget",name:"classify",opts:{title:"İkame mi, tamamlayıcı mı?",cats:["İkame","Tamamlayıcı","İlişkisiz"],items:[
  ["Çay ve kahve",0],["Otomobil ve benzin",1],["Akıllı telefon ve mobil internet paketi",1],["Tereyağı ve margarin",0],
  ["Otobüs bileti ve metro bileti",0],["Yazıcı ve kartuş",1],["Ekmek ve çorap",2],["Oyun konsolu ve oyun",1]
 ],note:"İkame mallarda çapraz esneklik pozitif, tamamlayıcılarda negatif, ilişkisiz mallarda sıfıra yakındır."}}
]},
{n:"5.7",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Talep kanunu","Diğer her şey sabitken fiyat ile talep edilen miktar arasındaki ters ilişki."],
  ["İkame etkisi","Pahalanan malın yerine göreli olarak ucuzlayan benzer mallara yönelme."],
  ["Gelir etkisi","Fiyat artışının reel geliri düşürerek talebi azaltması."],
  ["Talebin kayması","Fiyat dışı bir faktörle bütün talep eğrisinin sağa ya da sola gitmesi."],
  ["Giffen malı","Gelir etkisi ikame etkisinden güçlü olduğu için fiyatı artınca talebi artan zorunlu mal."],
  ["Veblen malı","Yüksek fiyatın statü sinyali verdiği, fiyat artınca cazibesi artan lüks mal."],
  ["Fiyat esnekliği","Talep edilen miktardaki yüzde değişimin fiyattaki yüzde değişime oranı."],
  ["Çapraz esneklik","Bir malın talebinin başka bir malın fiyatına duyarlılığı; işareti ikame/tamamlayıcıyı gösterir."],
  ["Gelir esnekliği","Talebin gelire duyarlılığı; düşük, zorunlu ve lüks malları ayırır."],
  ["Engel yasası","Gelir arttıkça gıdaya harcanan payın düşmesi."]
 ]}
]},
{n:"5.8",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Kahvenin fiyatı düştü ve tüketiciler daha çok kahve almaya başladı. Grafikte ne olur?",o:["Bütün talep eğrisi sağa kayar","Aynı eğri üzerinde aşağı hareket edilir","Bütün talep eğrisi sola kayar","Arz eğrisi sağa doğru kayar"],a:1,e:"Yalnızca malın kendi fiyatı değiştiği için eğrinin kendisi yerinde kalır; talep edilen miktar değişir."},
  {q:"Hangisi bir malın talep eğrisini sola kaydırır?",o:["Malın kendi fiyatının artması","İkame malın fiyatının düşmesi","Tüketici gelirlerinin artması (normal mal)","Gelecekte fiyat artışı beklentisi"],a:1,e:"İkame ucuzlayınca tüketiciler ona yönelir; her fiyatta bu maldan daha az talep edilir. Kendi fiyat değişimi kayma değil harekettir."},
  {q:"Fiyat 6 TL iken A 15, B 10, C 5 birim talep ediyor. Piyasa talebi bu fiyatta kaç birimdir?",o:["10 birim","18 birim","30 birim","90 birim"],a:2,e:"Piyasa talebi bireysel miktarların yatay toplamıdır: 15 + 10 + 5 = 30."},
  {q:"Bir malın fiyatı 100 TL'den 80 TL'ye düşüyor, satış 20'den 30'a çıkıyor. Orta nokta yöntemiyle esneklik ve yorumu nedir?",o:["−0,5; inelastik","−1,8; elastik","−1,0; birim esnek","−2,5; elastik"],a:1,e:"%ΔQ = 10/25 = %40, %ΔP = −20/90 ≈ −%22,2; oran ≈ −1,8. Mutlak değer 1'den büyük, talep elastik."},
  {q:"Talebi inelastik bir malın fiyatını artıran firmanın toplam hasılatına ne olur?",o:["Artar","Azalır","Değişmez","Sıfıra iner"],a:0,e:"İnelastik talepte miktar fiyattan daha az oranda düşer; fiyat etkisi ağır basar ve hasılat artar."},
  {q:"Esnekliği 2 olan bir malın fiyatı 10 TL'den 11 TL'ye çıkarılıyor, satış 100 birimdi. Yeni toplam hasılat yaklaşık nedir?",o:["1.100 TL","1.000 TL","880 TL","1.200 TL"],a:2,e:"Fiyat %10 artınca miktar %20 düşer: 80 birim. 11 × 80 = 880 TL; elastik talepte zam hasılatı azaltır."},
  {q:"Aşağıdakilerden hangisinin talebinin en elastik olması beklenir?",o:["Evlerde kullanılan şebeke elektriği","Belirli bir markanın hazır kahvesi","Diyabet hastasının insülini","Mahalle fırınındaki ekmek"],a:1,e:"Belirli bir markanın çok sayıda yakın ikamesi vardır; fiyatı artınca tüketici kolayca başka markaya geçer."},
  {q:"Çay fiyatı %10 artınca kahve talebi %6 artıyor. Çapraz esneklik ve ilişki nedir?",o:["−0,6; tamamlayıcı","+0,6; ikame","+1,67; lüks mal","0; ilişkisiz"],a:1,e:"6 ÷ 10 = +0,6. Pozitif çapraz esneklik ikame mallara işaret eder."},
  {q:"Gelir %10 artınca bir ürünün talebi %4 azalıyor. Bu ürün hangi mal grubundadır?",o:["Lüks mal","Zorunlu mal","Düşük mal","Veblen malı"],a:2,e:"Gelir esnekliği −0,4'tür; negatif gelir esnekliği düşük malı tanımlar."},
  {q:"Giffen paradoksunun ortaya çıkması için hangi koşul gerekir?",o:["Malın lüks ve statü sembolü olması","Gelir etkisinin ikame etkisinden güçlü olması","Malın çok sayıda yakın ikamesinin bulunması","Tüketicilerin fiyat artışı beklemesi"],a:1,e:"Bütçede büyük yer tutan, ikamesi olmayan bir zorunlu malda fiyat artışı reel geliri o kadar düşürür ki tüketici daha pahalı mallardan vazgeçip bu mala yönelir."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 12, s. 93–116.",
 "Mankiw, N. G. <i>Principles of Economics</i>. Cengage Learning (Bölüm 4–5: arz ve talep, esneklik).",
 "Jensen, R. T., Miller, N. H. (2008). Giffen Behavior and Subsistence Consumption. <i>American Economic Review</i>, 98(4), 1553–1577.",
 "Veblen, T. (1899). <i>The Theory of the Leisure Class</i>. Macmillan."
],
next:"Sonraki: Hafta 06 — Arz, piyasa dengesi, üretici ve tüketici rantı"
};
