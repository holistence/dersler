window.WEEK={
id:"ge-11",code:"GE",course:"Genel Ekonomi",short:"Büyüme ve işsizlik",week:11,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Makroiktisat",
title:"Büyüme, kalkınma, <em>istihdam</em> ve işsizlik",
intro:"Bu hafta bir ekonominin nasıl büyüdüğünü, büyümenin neden kalkınma ile aynı şey olmadığını ve işgücü piyasasının nasıl ölçüldüğünü öğreneceksiniz. Büyüme oranını, ikiye katlanma süresini ve işsizlik oranını kendiniz hesaplayacak, işsizliğin türlerini ayırt edeceksiniz. Okuma süresi yaklaşık 40 dakika; sayfada üç hesaplayıcı, bir sınıflandırma alıştırması ve 10 soruluk bir test var.",
goals:[
 "Reel büyüme oranını ve kişi başına büyümeyi hesaplayıp 70 kuralıyla ikiye katlanma süresini bulabilirsiniz.",
 "Büyümenin üç kaynağını üretim fonksiyonu üzerinden açıklayıp başlıca büyüme teorilerini karşılaştırabilirsiniz.",
 "Büyüme ile kalkınmayı ayırt edip İnsani Gelişme Endeksi'nin boyutlarını sayabilirsiniz.",
 "İşgücü, işsizlik oranı ve işgücüne katılım oranını hesaplayabilirsiniz.",
 "Geçici, yapısal ve konjonktürel işsizliği ayırt edip her birine uygun politikayı önerebilirsiniz."
],
sections:[
{n:"11.1",h:"Büyüme nedir, nasıl hesaplanır?",blocks:[
 {t:"def",html:"<b>Ekonomik büyüme</b>: Bir ekonomide belirli bir dönemde reel GSYH'de meydana gelen artış.",src:"Niceliksel ve ölçülebilir bir kavramdır. Büyüme oranı g = (Yₜ − Yₜ₋₁) ÷ Yₜ₋₁ × 100 formülüyle bulunur; burada Y reel GSYH'dir."},
 {t:"p",html:"Toplam büyüme bir ekonominin genel gücünü gösterir; ama nüfus da artıyorsa ortalama vatandaşın durumu aynı hızla iyileşmez. Bu yüzden refah karşılaştırmalarında <b>kişi başına reel GSYH</b> daha anlamlıdır. Ekonomi %3 büyürken nüfus %3 artıyorsa kişi başına gelir yerinde sayar."},
 {t:"widget",name:"calc",opts:{title:"Büyüme oranı ve kişi başına büyüme",inputs:[
  {id:"y0",label:"Geçen yıl reel GSYH",min:500,max:1500,step:10,value:850,unit:" mlr TL"},
  {id:"y1",label:"Bu yıl reel GSYH",min:500,max:1500,step:10,value:900,unit:" mlr TL"},
  {id:"n",label:"Nüfus artışı",min:-2,max:5,step:0.1,value:1,unit:"%"}],
  formula:"('Büyüme %'+((y1/y0-1)*100).toFixed(2).replace('.',',')+' · Kişi başına büyüme yaklaşık %'+(((y1/y0)/(1+n/100)-1)*100).toFixed(2).replace('.',',')).replace(/%-/g,'−%')",
  result:"{r}",
  note:"Kitaptaki örnek: 850'den 900 milyar TL'ye çıkan reel GSYH ≈ %5,88 büyüme. Nüfus artışını yükseltin: toplam büyüme aynı kalırken kişi başına büyüme küçülür."}}
]},
{n:"11.2",h:"Bileşik büyümenin gücü: 70 kuralı",blocks:[
 {t:"p",html:"Büyüme bileşik işler: her yıl bir önceki yılın daha büyük tabanı üzerine eklenir. Bir büyüklüğün kaç yılda ikiye katlanacağını hızlıca tahmin etmek için <b>70 kuralı</b> kullanılır: ikiye katlanma süresi ≈ 70 ÷ büyüme oranı (%)."},
 {t:"widget",name:"calc",opts:{title:"70 kuralı",inputs:[
  {id:"g",label:"Yıllık büyüme oranı",min:0.5,max:10,step:0.1,value:2,unit:"%"}],
  formula:"'yaklaşık '+(70/g).toFixed(1).replace('.',',')+' yıl (kesin hesap: '+(Math.log(2)/Math.log(1+g/100)).toFixed(1).replace('.',',')+' yıl)'",
  result:"İkiye katlanma süresi: {r}",
  note:"%2 ile %6 arasındaki fark küçük görünür: biri ekonomiyi 35 yılda, öteki yaklaşık 12 yılda ikiye katlar. Bir insan ömründe bu, refahta kat kat fark demektir."}},
 {t:"p",html:"Kural yalnızca GSYH için değil, her bileşik büyüyen değişken için geçerlidir: yıllık %7 artan fiyatlar yaklaşık 10 yılda iki katına çıkar; yıllık %10 getiri sağlayan birikim yaklaşık 7 yılda ikiye katlanır."}
]},
{n:"11.3",h:"Büyümenin kaynakları ve teorileri",blocks:[
 {t:"p",html:"Büyüme, üretim olanakları eğrisinin dışa kaymasıdır. Kaynaklarını görmek için toplam üretim fonksiyonu kullanılır: <b>Y = A × F(K, L)</b>. Burada Y reel GSYH, K fiziksel sermaye, L emek, A ise teknoloji düzeyi yani <b>toplam faktör verimliliğidir</b>."},
 {t:"list",items:[
  "<b>Sermaye birikimi (K↑):</b> Daha fazla makine, fabrika ve altyapı.",
  "<b>İşgücü artışı (L↑):</b> Nüfus artışı, işgücüne katılımın yükselmesi veya göç.",
  "<b>Teknolojik gelişme (A↑):</b> Yenilik, daha iyi organizasyon ve beşeri sermaye. Diğer iki girdinin verimini de artırdığı için en önemli kaynaktır."]},
 {t:"choice",items:[
  {label:"Malthus",title:"Klasik kötümserlik",body:"Nüfus geometrik, gıda arzı aritmetik artar. Kişi başına gelir sürekli geçim düzeyine geri çekilir.",ex:"Sonuç: \"Malthus tuzağı\"; uzun vadeli kişi başına büyüme imkânsız görünür."},
  {label:"Solow-Swan",title:"Neoklasik büyüme modeli",body:"Sermaye birikimi kişi başına gelirin düzeyini yükseltir, ama azalan getiriler nedeniyle kalıcı büyüme oranını değiştirmez. Uzun dönemde kişi başına büyümeyi yalnızca teknolojik ilerleme sağlar; teknoloji modelde dışsaldır.",ex:"Sonuç: Yalnızca makine biriktirerek sonsuza dek büyünmez."},
  {label:"İçsel büyüme",title:"Romer ve Lucas",body:"Teknolojik ilerleme dışarıdan gelmez; eğitim, Ar-Ge ve yenilik kararlarıyla üretilir. Bilgi rakip olmayan bir maldır, kullanıldıkça tükenmez ve yayılır.",ex:"Sonuç: Beşeri sermaye ve Ar-Ge politikası büyüme oranını kalıcı olarak yükseltebilir."}
 ]}
]},
{n:"11.4",h:"Büyümeden kalkınmaya",blocks:[
 {t:"p",html:"Büyüme niceliksel, <b>kalkınma</b> niteliksel bir kavramdır. Kalkınma; gelir artışının yanında eğitim, sağlık, gelir dağılımı ve kurumlarda ilerlemeyi kapsar. Gelir eşitsizliği çok yüksek ülkelerde hızlı büyüme ile zayıf kalkınma bir arada görülebilir."},
 {t:"box",lbl:"İnsani Gelişme Endeksi (İGE)",html:"Birleşmiş Milletler Kalkınma Programı'nın (UNDP) hesapladığı bileşik endeks üç boyutu birleştirir:<ul style=\"margin:6px 0 0;padding-left:20px\"><li><b>Uzun ve sağlıklı yaşam:</b> doğuşta beklenen yaşam süresi.</li><li><b>Bilgiye erişim:</b> ortalama ve beklenen öğrenim süresi.</li><li><b>İnsana yakışır yaşam standardı:</b> satın alma gücü paritesine göre kişi başına milli gelir.</li></ul>"},
 {t:"p",html:"<b>Sürdürülebilir kalkınma</b> ise \"gelecek nesillerin kendi ihtiyaçlarını karşılama yeteneğinden ödün vermeden bugünün ihtiyaçlarını karşılayan\" kalkınmadır. Ekonomik, sosyal ve çevresel boyutlar birbirine bağlıdır: denetimsiz sanayileşme hava kirliliğine, kirlilik sağlık harcamalarına ve verimlilik kaybına dönüşür. Yeşil büyüme ve döngüsel ekonomi bu bağı kurmaya çalışan yaklaşımlardır."},
 {t:"p",html:"Gelişmekte olan ülkeler çoğu zaman <b>düşük düzeyde denge tuzağıyla</b> karşılaşır: düşük gelir → düşük tasarruf → yetersiz yatırım → düşük verimlilik → yine düşük gelir. Döngüyü kırmak için doğrudan yabancı yatırım, kamu öncülüğünde yatırım hamleleri veya uluslararası finansman gibi dışarıdan bir itki gerekir."}
]},
{n:"11.5",h:"İşgücü piyasasını ölçmek",blocks:[
 {t:"p",html:"Türkiye'de işgücü istatistikleri TÜİK'in <b>Hanehalkı İşgücü Anketi</b> ile derlenir. 15 yaş ve üzeri kurumsal olmayan nüfus üç gruba ayrılır:"},
 {t:"table",head:["Grup","Tanım","Örnek","Hesaptaki yeri"],rows:[
  ["İstihdam edilenler","Referans döneminde en az bir saat bir işte çalışanlar","İşçi, esnaf, memur","İşgücünün parçası"],
  ["İşsizler","Çalışmayan, son 4 haftada aktif iş arayan ve işe başlamaya hazır olanlar","Yeni mezun, işten çıkarılmış kişi","İşsizlik oranının payı"],
  ["İşgücüne dahil olmayanlar","Çalışmayan ve iş aramayanlar","Öğrenci, emekli, ev işleriyle uğraşan, umudu kırık kişi","Hesap dışında"]]},
 {t:"list",items:[
  "<b>İşgücü</b> = İstihdam edilenler + İşsizler",
  "<b>İşsizlik oranı</b> = İşsizler ÷ İşgücü × 100",
  "<b>İşgücüne katılım oranı</b> = İşgücü ÷ 15+ yaş kurumsal olmayan nüfus × 100"]},
 {t:"widget",name:"calc",opts:{title:"İşsizlik ve katılım oranı",inputs:[
  {id:"pop",label:"15+ yaş nüfus",min:20,max:80,step:1,value:60,unit:" milyon"},
  {id:"emp",label:"İstihdam edilenler",min:5,max:50,step:0.5,value:26,unit:" milyon"},
  {id:"un",label:"İşsizler",min:0,max:15,step:0.5,value:4,unit:" milyon"}],
  formula:"emp+un>pop?'İşgücü nüfustan büyük olamaz; değerleri kontrol edin':'İşgücü '+(emp+un).toLocaleString('tr-TR')+' milyon · İşsizlik oranı %'+(un/(emp+un)*100).toFixed(1).replace('.',',')+' · Katılım oranı %'+((emp+un)/pop*100).toFixed(1).replace('.',',')",
  result:"{r}",
  note:"Kitaptaki örnek: 26 milyon istihdam, 4 milyon işsiz, 60 milyon nüfus → işsizlik %13,3, katılım %50. Şimdi 1 milyon işsizin umudunu yitirip iş aramayı bıraktığını düşünün (işsizleri 3'e indirin): işsizlik oranı düşer, ama kimse iş bulmamıştır."}},
 {t:"box",lbl:"Türkiye'den örnek",html:"Resmî işsizlik oranı tek başına işgücü piyasasının tamamını göstermez. Bu yüzden TÜİK, temel göstergelerin yanında <b>atıl işgücü oranını</b> da yayımlar: işsizlere ek olarak zamana bağlı eksik istihdam edilenleri ve potansiyel işgücünü (çalışmaya hazır olduğu hâlde iş aramayanlar ile iş arayıp hemen işbaşı yapamayacak olanlar) kapsar. Kayıt dışı istihdamın yaygın olduğu ekonomilerde katılım oranı ve atıl işgücü, işsizlik oranı kadar önemlidir. Güncel değerler için TÜİK'in aylık İşgücü İstatistikleri bültenine bakın."}
]},
{n:"11.6",h:"İşsizlik türleri",blocks:[
 {t:"p",html:"Doğru politikayı seçmek için önce işsizliğin nedenini teşhis etmek gerekir. Ekonomistler üç ana tür ayırır."},
 {t:"table",head:["Tür","Ana neden","Süre","Çözüm önerisi"],rows:[
  ["Geçici (friksiyonel)","İş değiştirme, yeni mezuniyet, arama süreci","Kısa","İş eşleştirme hizmetleri, bilgi şeffaflığı"],
  ["Yapısal","Beceri veya coğrafya uyumsuzluğu, teknolojik dönüşüm","Uzun","Mesleki eğitim, yeniden beceri kazandırma"],
  ["Konjonktürel (devrevi)","Durgunlukta toplam talep yetersizliği","Orta","Genişletici para ve maliye politikası"]]},
 {t:"p",html:"Geçici ve yapısal işsizliğin toplamı <b>doğal işsizlik oranını</b> oluşturur; ekonomi tam istihdamda olsa bile bu oran sıfır olmaz. Ayrıca tarım ve aile işletmelerinde yaygın olan <b>gizli işsizlik</b> vardır: kişi çalışıyor görünür, ama üretimden çekilse toplam üretim azalmaz."},
 {t:"widget",name:"classify",opts:{title:"Bu kişi hangi tür işsizliğe örnek?",cats:["Geçici","Yapısal","Konjonktürel"],items:[
  ["Yeni mezun olmuş, iki aydır uygun bir iş arayan mühendis",0],
  ["Maden kapanınca işsiz kalan ve başka beceri edinmemiş madenci",1],
  ["Durgunlukta satışları düşen inşaat firmasından çıkarılan usta",2],
  ["Daha iyi bir iş için istifa edip başvuru yapan muhasebeci",0],
  ["Kasaların otomatik ödeme sistemine geçmesiyle işini kaybeden kasiyer",1],
  ["Krizde ihracat siparişleri azalan fabrikadan çıkarılan işçi",2],
  ["Başka bir şehre taşınıp orada iş arayan hemşire",0],
  ["Matbaacılık daralırken dijital beceri arayan ilanlara uymayan dizgici",1]],
  note:"Soru şu: İşsizlik, kişi ile iş arasındaki eşleşmenin zaman almasından mı (geçici), becerilerin artık aranmamasından mı (yapısal), yoksa ekonomide genel talebin düşmesinden mi (konjonktürel) kaynaklanıyor?"}}
]},
{n:"11.7",h:"İşsizliğin maliyeti ve politikalar",blocks:[
 {t:"p",html:"Arthur Okun işsizlik ile üretim kaybı arasında ampirik bir ilişki gözlemledi. Kitaptaki sadeleştirilmiş biçimiyle <b>Okun yasası</b>: reel GSYH büyümesi ≈ %3 − 2 × (işsizlik oranındaki değişim). İşsizlik bir yılda 5'ten 8'e çıkarsa büyüme, %3'lük potansiyel büyümenin yaklaşık 6 puan altına, yani −%3'e iner. Katsayı ülkeye ve döneme göre değişir; kural bir büyüklük sırası verir."},
 {t:"p",html:"Maliyet yalnızca kaybedilen üretim değildir. Uzun süren işsizlik <b>beceri aşınmasına</b> yol açar, hanehalkı gelirini düşürüp borçlanmayı artırır, sosyal dışlanma riskini büyütür ve sosyal güvenlik sistemine yük bindirir."},
 {t:"choice",items:[
  {label:"Konjonktürel",title:"Toplam talebi canlandırmak",body:"Hükümet kamu harcamalarını artırır veya vergileri düşürür; merkez bankası faizi indirir. Amaç durgunlukta düşen harcamayı telafi etmektir.",ex:"Dikkat: Gecikmeler nedeniyle zamanlama önemlidir; geç gelen teşvik enflasyonu körükleyebilir."},
  {label:"Yapısal",title:"Arz yönlü, uzun vadeli çözümler",body:"Aktif işgücü piyasası politikaları: mesleki eğitim, yeniden beceri kazandırma, işsizliğin yüksek olduğu bölgelere yatırım teşviki.",ex:"Örnek: Yeşil enerji veya bilişim gibi büyüyen sektörlere yönelik kurslar."},
  {label:"Geçici",title:"Eşleşmeyi hızlandırmak",body:"İş bulma kurumlarının etkinleştirilmesi, açık pozisyonlar hakkında bilginin hızlı yayılması, taşınma yardımları.",ex:"Türkiye'de kamu istihdam hizmetlerini İŞKUR yürütür."}
 ]},
 {t:"p",html:"Politika yapıcıların aklında dört kısıt durur: işsizliği düşürmeye yönelik talep artışının enflasyonu yükseltebilmesi (Phillips eğrisi, Hafta 13), para ve maliye politikasının birbiriyle tutarlı olması, etkilerin gecikmeyle ortaya çıkması ve programların mali açıdan sürdürülebilir olması."}
]},
{n:"11.8",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["Büyüme oranı","Reel GSYH'deki yıllık yüzde değişim."],
  ["70 kuralı","İkiye katlanma süresi ≈ 70 ÷ yüzde büyüme oranı."],
  ["Toplam faktör verimliliği","Sermaye ve emek artışıyla açıklanamayan, teknoloji ve organizasyondan gelen üretim artışı."],
  ["Kalkınma","Gelirin yanında sağlık, eğitim, dağılım ve kurumlarda niteliksel ilerleme."],
  ["İşgücü","İstihdam edilenler ile işsizlerin toplamı."],
  ["İşgücüne katılım oranı","İşgücünün 15+ yaş kurumsal olmayan nüfusa oranı."],
  ["Yapısal işsizlik","Beceri veya coğrafya uyumsuzluğundan doğan, uzun süreli işsizlik."],
  ["Doğal işsizlik oranı","Geçici ve yapısal işsizliğin toplamı; tam istihdamda bile kalan işsizlik."],
  ["Okun yasası","İşsizlik oranındaki artış ile reel üretim kaybı arasındaki ampirik ilişki."]
 ]}
]},
{n:"11.9",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Reel GSYH 400 milyar TL'den 420 milyar TL'ye çıktı. Büyüme oranı kaçtır?",o:["%4,8","%5,0","%20,0","%2,0"],a:1,e:"(420 − 400) ÷ 400 × 100 = %5. Payda her zaman önceki yılın değeridir."},
  {q:"Bir ekonomi yılda %3,5 büyürse 70 kuralına göre yaklaşık kaç yılda ikiye katlanır?",o:["10 yıl","20 yıl","35 yıl","7 yıl"],a:1,e:"70 ÷ 3,5 = 20 yıl."},
  {q:"Reel GSYH %3 büyürken nüfus %3 artıyorsa kişi başına reel gelir ne olur?",o:["Yaklaşık %6 artar","Yaklaşık %3 artar","Yaklaşık değişmez","Yaklaşık %3 azalır"],a:2,e:"Toplam çıktıdaki artış nüfus artışıyla aynı hızda olduğu için kişi başına düşen pay yaklaşık sabit kalır."},
  {q:"Solow-Swan modeline göre uzun dönemde kişi başına sürekli büyümeyi ne sağlar?",o:["Sermaye birikimi","Nüfus artışı","Teknolojik ilerleme","Kamu harcaması"],a:2,e:"Sermayeye azalan getiri nedeniyle birikim yalnızca gelir düzeyini yükseltir; kalıcı büyüme oranını teknoloji belirler."},
  {q:"İnsani Gelişme Endeksi hangi üç boyutu birleştirir?",o:["Enflasyon, işsizlik, büyüme","Sağlık, eğitim, yaşam standardı","İhracat, ithalat, cari denge","Vergi, harcama, borç"],a:1,e:"İGE doğuşta beklenen yaşam süresi, öğrenim süreleri ve kişi başına milli geliri birleştirir."},
  {q:"15+ yaş nüfus 50 milyon, istihdam 27 milyon, işsiz 3 milyon. İşsizlik oranı ve katılım oranı kaçtır?",o:["%6 ve %54","%10 ve %60","%11,1 ve %60","%10 ve %54"],a:1,e:"İşgücü 30 milyon. İşsizlik 3 ÷ 30 = %10; katılım 30 ÷ 50 = %60."},
  {q:"İş bulma umudunu yitirip aramayı bırakan bir kişi işsizlik oranını nasıl etkiler?",o:["Oranı artırır","Oranı düşürür","Oranı etkilemez","Katılım oranını artırır"],a:1,e:"Kişi işsizlerden çıkıp işgücü dışına geçer; pay ve payda azalır, oran düşer. Bu, istatistiğin iyileşmesinin her zaman gerçek iyileşme olmadığını gösterir."},
  {q:"Otomasyon nedeniyle işini kaybeden ve yeni işlerin istediği becerilere sahip olmayan işçi hangi işsizlik türündedir?",o:["Geçici","Yapısal","Konjonktürel","Gizli"],a:1,e:"Sorun talebin genel düşüklüğü değil, beceri uyumsuzluğudur; çözüm mesleki eğitimdir."},
  {q:"Durgunlukta artan işsizlikle mücadelede en uygun araç hangisidir?",o:["Mesleki eğitim kursları","Genişletici para ve maliye politikası","İş bulma kurumunun bilgi sistemi","Taşınma yardımı"],a:1,e:"Konjonktürel işsizliğin nedeni toplam talep yetersizliğidir; talebi canlandıran politikalar en doğrudan çözümdür."},
  {q:"Kitaptaki Okun formülüne göre işsizlik oranı 2 puan artarsa reel büyüme yaklaşık kaç olur?",o:["%3","%1","−%1","−%4"],a:2,e:"%3 − 2 × 2 = −%1. Ekonomi potansiyelinin yaklaşık 4 puan altında büyür."}
 ]}
]}
],
refs:[
 "<i>Ekonomiyi Anlamak: Teorik Temeller ve Pratik Yansımalar</i>. Holistence Publications, 2025. Bölüm 21–22, s. 220–235.",
 "Mankiw, N. G. (2018). <i>Principles of Economics</i> (8th ed.). Cengage Learning.",
 "Türkiye İstatistik Kurumu — İşgücü İstatistikleri ve ulusal hesaplar: <a href=\"https://www.tuik.gov.tr\">tuik.gov.tr</a>",
 "UNDP — İnsani Gelişme Raporları: <a href=\"https://hdr.undp.org\">hdr.undp.org</a>"
],
next:"Sonraki: Hafta 12 — Enflasyon ve para"
};
