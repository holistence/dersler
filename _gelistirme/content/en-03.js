window.WEEK={
id:"en-03",code:"EN",course:"Enerji Kaynakları, Yatırımı ve Yönetimi",short:"Petrol",week:3,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Fosil yakıtlar I",
title:"Petrol: kalite, OPEC ve <em>fiyatın</em> belirlenmesi",
intro:"Bu hafta ham petrolün neden tek bir mal olmadığını, API gravitesi ve kükürt içeriğinin fiyatı nasıl belirlediğini, OPEC ile OPEC dışı üreticilerin (özellikle ABD ve Rusya) piyasadaki rolünü ve küçük bir arz değişiminin neden büyük fiyat hareketlerine yol açtığını öğreneceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada iki hesaplayıcı, bir sınıflandırma alıştırması, bir zaman çizelgesi ve 9 soruluk bir test var.",
goals:[
 "API gravitesini özgül ağırlıktan hesaplayıp ham petrolü hafif, orta, ağır ve çok ağır olarak sınıflandırabilirsiniz.",
 "Kükürt içeriğine göre tatlı ve ekşi petrolü ayırıp kalitenin fiyata etkisini açıklayabilirsiniz.",
 "Brent ve WTI gibi referans petrollerin işlevini açıklayabilirsiniz.",
 "OPEC'in, OPEC+ işbirliğinin ve ABD kaya petrolünün fiyat oluşumundaki rolünü tartışabilirsiniz.",
 "Talebin düşük esnekliğini kullanarak bir arz kesintisinin fiyata etkisini yaklaşık olarak hesaplayabilirsiniz."
],
sections:[
{n:"3.1",h:"Fosil yakıtlar: geçmişin gücü, geleceğin sorusu",blocks:[
 {t:"p",html:"Kömür, petrol ve doğal gaz son iki yüzyılın en güçlü aktörleri oldu: fabrikaları çalıştırdılar, şehirleri aydınlattılar, ulaşımı dönüştürdüler. Aynı zamanda savaşlara, krizlere ve çevre sorunlarına da yol açtılar. Fosil yakıtlar bugün de küresel jeopolitiği şekillendiren en güçlü unsurlardan biridir."},
 {t:"p",html:"Bu hafta petrolle başlıyoruz, Hafta 04'te doğal gaz ve kömürle devam edeceğiz. Petrolü anlamak için iki soruya yanıt arayacağız: <b>Hangi petrol daha değerlidir?</b> ve <b>Petrolün fiyatını kim belirler?</b>"},
 {t:"box",lbl:"Birim notu",html:"Petrol hacmi <b>varil</b> ile ölçülür: 1 varil = 42 ABD galonu ≈ 159 litre. Üretim ve tüketim genellikle <b>günlük varil</b> (varil/gün, İngilizce bpd) cinsinden verilir. Fiyatlar ise dolar/varil olarak açıklanır."}
]},
{n:"3.2",h:"API gravitesi: hafif mi, ağır mı?",blocks:[
 {t:"p",html:"Ham petrol, yoğunluğu, kükürt oranı ve içerdiği hidrokarbonlar bakımından sahadan sahaya farklıdır. Rafineri açısından en önemli iki özellik <b>yoğunluk</b> ve <b>kükürt içeriğidir</b>."},
 {t:"def",html:"<b>API gravitesi</b>, Amerikan Petrol Enstitüsü'nün (API) geliştirdiği, ham petrolün suya göre ne kadar hafif ya da ağır olduğunu gösteren yoğunluk ölçüsüdür.",src:"API = (141,5 ÷ özgül ağırlık) − 131,5. Özgül ağırlık, petrolün 60 °F'deki (15,6 °C) yoğunluğunun aynı sıcaklıktaki suyun yoğunluğuna oranıdır."},
 {t:"p",html:"Formülün mantığı terstir: <b>petrol hafifledikçe API yükselir</b>. Özgül ağırlığı 1 olan, yani suyla aynı yoğunluktaki bir sıvının API değeri tam 10'dur. API 10'dan büyükse petrol suda yüzer, küçükse batar."},
 {t:"p",html:"Hafif petrol rafineride daha kolay işlenir ve benzin, jet yakıtı, motorin gibi yüksek katma değerli ürünlere daha büyük oranda dönüşür. Ağır petrol daha yoğun ve viskozdur; işlenmesi zordur ve daha çok fuel oil ve asfalt gibi düşük değerli ürünler verir. Ağır petrolden değerli ürün almak için ek dönüştürme üniteleri (ör. hidrokraker, koker) gerekir."},
 {t:"widget",name:"calc",opts:{title:"API gravitesi",inputs:[{id:"d",label:"Özgül ağırlık (60 °F)",min:0.75,max:1.05,step:0.005,value:0.835}],formula:"(function(){var a=141.5/d-131.5;var s=a>31.1?'hafif':(a>=22.3?'orta':(a>=10?'ağır':'çok ağır'));return a.toLocaleString('tr-TR',{maximumFractionDigits:1})+'° → '+s+' ham petrol'+(a<10?' (sudan ağır, suda batar)':'');})()",result:"API gravitesi: {r}",note:"Varsayılan 0,835 özgül ağırlık, Brent gibi hafif bir petrolün değerine yakındır (yaklaşık 38°). 1,000'a çekin: API tam 10 olur. 0,93'e çekin: ağır petrol bölgesine geçersiniz. Sınır değerler: hafif > 31,1°; orta 22,3–31,1°; ağır 10–22,3°; çok ağır < 10°."}},
 {t:"table",head:["Sınıf","API gravitesi","Özgül ağırlık (yaklaşık)","Tipik ürün verimi"],rows:[
  ["Hafif","31,1°'nin üzeri","0,87'nin altı","Benzin, nafta, jet yakıtı ve motorin payı yüksek"],
  ["Orta","22,3° – 31,1°","0,87 – 0,92","Dengeli ürün yelpazesi"],
  ["Ağır","10° – 22,3°","0,92 – 1,00","Fuel oil, asfalt payı yüksek; ek işlem gerekir"],
  ["Çok ağır","10°'nin altı","1,00'ın üzeri","Bitüm benzeri; taşımak için seyreltme gerekir"]]}
]},
{n:"3.3",h:"Kükürt: tatlı ve ekşi petrol",blocks:[
 {t:"p",html:"Kükürt içeriği petrolün çevresel ve ekonomik işlenebilirliğini belirler. Kükürt oranı düşük petrole <b>tatlı</b> (sweet), yüksek olana <b>ekşi</b> (sour) denir. Sektörde yaygın eşik, ağırlıkça yaklaşık <b>%0,5 kükürttür</b>."},
 {t:"p",html:"Ekşi petrol işlenirken kükürt dioksit gibi zararlı emisyonlar oluşur; çevre düzenlemeleri nedeniyle ek kükürt giderme işlemleri gerekir. Bu da rafineriye ek yatırım ve işletme maliyeti demektir. Sonuç olarak piyasada <b>hafif-tatlı petrol pahalı</b>, ağır-ekşi petrol ise iskontolu işlem görür; iki tür arasındaki fiyat farkına İngilizce <i>spread</i> denir."},
 {t:"p",html:"Dikkat: yoğunluk ile kükürt birbirinden bağımsız iki özelliktir. Hafif ama ekşi, ya da ağır ama görece tatlı petroller de vardır. Değerlendirmede ikisine birlikte bakılır."},
 {t:"widget",name:"classify",opts:{title:"Ham petrolü sınıflandırın (eşikler: API 31,1° ve kükürt %0,5)",cats:["Hafif-tatlı","Hafif-ekşi","Orta/ağır-tatlı","Orta/ağır-ekşi"],items:[
  ["API 38°, kükürt %0,4",0],["API 40°, kükürt %0,3",0],["API 34°, kükürt %1,8",1],["API 22°, kükürt %3,3",3],
  ["API 28°, kükürt %0,3",2],["API 31°, kükürt %1,7",3],["API 36°, kükürt %2,0",1],["API 19°, kükürt %0,4",2]
 ],note:"API 31° sınırın hemen altındadır, bu yüzden orta sınıftadır. Rafineriler en çok hafif-tatlı petrolü ister; en ucuz işlem gören ise ağır-ekşi petroldür. Bir rafineri ağır-ekşi petrol işleyecek donanıma (kükürt giderme, koker) sahipse ucuz hammaddeden kâr elde edebilir."}},
 {t:"box",lbl:"Referans petroller: Brent ve WTI",html:"Dünyada yüzlerce farklı ham petrol türü vardır; fiyatları birkaç <b>referans</b> (gösterge) petrole göre belirlenir. En bilinen iki gösterge, Kuzey Denizi'nden gelen <b>Brent</b> ile ABD'nin <b>WTI</b> (West Texas Intermediate) petrolüdür; ikisi de hafif ve tatlıdır. Diğer petroller, kalitelerine göre bu göstergelerin üstünde ya da altında (iskontolu) fiyatlanır. Haberlerde “petrol fiyatı” denince çoğunlukla Brent'in vadeli fiyatı kastedilir."},
 {t:"box",lbl:"Türkiye'den örnek",html:"Türkiye ham petrol ihtiyacının büyük bölümünü ithal eder. Ceyhan, iki uluslararası ham petrol boru hattının Akdeniz'deki çıkış noktasıdır: Irak'tan gelen <b>Kerkük–Ceyhan</b> hattı ve Azerbaycan petrolünü taşıyan, 2006'da işletmeye giren <b>Bakü–Tiflis–Ceyhan (BTC)</b> hattı. Ülkedeki rafineriler farklı ham petrol türlerini işleyebilecek şekilde tasarlanmıştır; hangi petrolün alınacağı, fiyat farkı ve rafinerinin donanımına göre seçilir."}
]},
{n:"3.4",h:"OPEC ve OPEC dışı üreticiler",blocks:[
 {t:"p",html:"<b>OPEC</b> (Petrol İhraç Eden Ülkeler Örgütü), 1960'ta Bağdat'ta İran, Irak, Kuveyt, Suudi Arabistan ve Venezuela tarafından kuruldu. Temel amacı, üretim kotalarıyla petrol arzını düzenleyerek fiyatlarda istikrar ve üye gelirlerinde güvence sağlamaktır. Üye sayısı zaman içinde değişti; Angola'nın 2024 başında ayrılmasıyla örgütün 12 üyesi kaldı. Üyeler dünya kanıtlanmış petrol rezervlerinin büyük bölümüne sahiptir."},
 {t:"p",html:"İktisadi açıdan OPEC bir <b>kartel</b>dir: üyeler üretimi kısıtlayarak fiyatı rekabetçi düzeyin üzerinde tutmaya çalışır. Ama her kartelin iki zayıflığı vardır. İçeride, her üye kota üzerinde üretme dürtüsü taşır; dışarıda, yüksek fiyat kartel dışı üreticilerin üretimini kârlı kılar."},
 {t:"choice",items:[
  {label:"OPEC",title:"Kotalarla arz yönetimi",body:"Üretim kotalarını artırarak ya da azaltarak piyasadaki arzı ve dolayısıyla fiyatı etkiler. Suudi Arabistan, büyük atıl (yedek) üretim kapasitesi nedeniyle örgütün kilit ülkesidir: üretimini hızla artırıp azaltabilir.",ex:"Fiyat düştüğünde kota kesintisi, arz sıkıştığında kota artışı kararları alınır."},
  {label:"OPEC+",title:"OPEC + OPEC dışı büyük üreticiler",body:"2016'nın sonunda OPEC üyeleri ile Rusya'nın başını çektiği OPEC dışı bir grup üretici, üretimi birlikte ayarlamak için bir işbirliği bildirgesi imzaladı. Bu yapıya OPEC+ denir. Rusya resmî üye değildir ama kararlara katılır.",ex:"OPEC+ kararları bugün tek başına OPEC kararlarından daha fazla arzı etkiler."},
  {label:"ABD kaya petrolü",title:"Yatay sondaj ve hidrolik çatlatma",body:"2010'lardan itibaren kaya (shale) petrolü üretimindeki artış ABD'yi dünyanın en büyük ham petrol üreticisi yaptı. Kaya petrolü kuyuları hızla açılıp kapanabildiği için fiyat yükseldiğinde ABD üretimi artar.",ex:"Bu durum OPEC'in fiyatı uzun süre yüksek tutma gücünü sınırlar: fiyat yükseldikçe kartel dışı arz devreye girer."},
  {label:"Talep ve jeopolitik",title:"Fiyatın öbür yarısı",body:"Fiyatı yalnızca üreticiler belirlemez. Küresel büyüme, Çin ve Hindistan'ın talebi, stok seviyeleri, faiz ve dolar kuru ile savaş ve yaptırım gibi jeopolitik olaylar da fiyatı hareket ettirir.",ex:"2020'deki salgın döneminde talep çöktü ve fiyatlar kısa sürede sert biçimde düştü."}
 ]},
 {t:"timeline",items:[
  ["1960","OPEC kuruldu","Bağdat'ta beş kurucu üyeyle."],
  ["1973","Arap petrol ambargosu","Ambargo ve üretim kısıntısı ile fiyatlar birkaç ayda yaklaşık dört katına çıktı; ilk petrol şoku.",1],
  ["1979","İkinci petrol şoku","İran Devrimi sonrası arz kesintisi fiyatları yeniden sıçrattı."],
  ["1986","Fiyat çöküşü","OPEC dışı arzın artması ve Suudi Arabistan'ın pazar payı stratejisiyle fiyatlar sert düştü."],
  ["2014","Kaya petrolü ve fiyat düşüşü","ABD arzının hızla artmasıyla fiyatlar yaklaşık yarı yarıya geriledi."],
  ["2016","OPEC+ doğdu","OPEC ve Rusya'nın başını çektiği üreticiler üretimi birlikte ayarlamaya başladı.",1],
  ["2024","Angola ayrıldı","OPEC'in üye sayısı 12'ye indi."]
 ]}
]},
{n:"3.5",h:"Küçük arz şoku, büyük fiyat hareketi",blocks:[
 {t:"p",html:"Hafta 02'de enerji talebinin kısa vadede çok az esnek olduğunu gördük. Bunun petrol piyasası için çarpıcı bir sonucu vardır: arz biraz azaldığında, talebin aynı oranda azalması için fiyatın <b>çok</b> yükselmesi gerekir. OPEC kararlarının ve jeopolitik kesintilerin fiyatları bu kadar sarsmasının nedeni budur."},
 {t:"box",lbl:"Formül",html:"Arz %ΔQ kadar azalırsa, piyasayı yeniden dengeye getirecek fiyat değişimi yaklaşık olarak:<br><b>%ΔP ≈ %ΔQ ÷ |esneklik|</b><br>(Basitleştirme: kısa vadede arzın fiyata tepki vermediği varsayılır.)"},
 {t:"widget",name:"calc",opts:{title:"Arz kesintisi fiyatı ne kadar artırır?",inputs:[{id:"k",label:"Küresel arzdaki azalma",min:0.5,max:10,step:0.5,value:2,unit:"%"},{id:"e",label:"Talebin kısa vadeli esnekliği (mutlak)",min:0.02,max:1,step:0.01,value:0.1},{id:"p",label:"Başlangıç fiyatı",min:30,max:150,step:1,value:80,unit:" $/varil"}],formula:"(function(){var dp=k/e;var f=function(x){return x.toLocaleString('tr-TR',{maximumFractionDigits:1})};return '%'+f(dp)+' artış → yaklaşık '+f(p*(1+dp/100))+' $/varil';})()",result:"Fiyat değişimi: {r}",note:"Yaklaşım küçük değişimler için iyidir; büyük şoklarda sonucu bir üst sınır gibi okuyun. Varsayılan değerlerle arzdaki %2'lik azalma fiyatı yaklaşık %20 yükseltir. Esnekliği 0,05'e çekin: aynı kesinti fiyatı %40 artırır. Uzun vadede esneklik büyür, kartel dışı arz da devreye girer; bu yüzden şokların etkisi zamanla söner."}},
 {t:"p",html:"Aynı mantık ters yönde de çalışır. Talepteki küçük bir düşüş ya da beklenmedik bir arz fazlası, fiyatları sert biçimde aşağı çekebilir. OPEC'in kota kararlarıyla yapmaya çalıştığı şey, bu oynaklığı bastırmak ve fiyatı üyelerin bütçe ihtiyaçlarına uygun bir bantta tutmaktır."}
]},
{n:"3.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın. Teste geçmeden önce her birini kendi cümlelerinizle açıklamayı deneyin."},
 {t:"cards",items:[
  ["API gravitesi","Ham petrolün suya göre hafifliğini gösteren ölçü: 141,5 ÷ özgül ağırlık − 131,5."],
  ["Hafif petrol","API'si 31,1°'nin üzerinde; değerli ürün verimi yüksek, işlenmesi kolay."],
  ["Ağır petrol","API'si 10–22,3°; yoğun ve viskoz, ek işlem ister."],
  ["Tatlı / ekşi","Kükürt oranı düşük (yaklaşık %0,5'in altı) / yüksek ham petrol."],
  ["Spread","Hafif-tatlı ve ağır-ekşi petrol arasındaki fiyat farkı."],
  ["Brent ve WTI","Diğer petrollerin fiyatlandığı hafif-tatlı referans (gösterge) petroller."],
  ["Varil","Petrolün hacim birimi: yaklaşık 159 litre."],
  ["OPEC","1960'ta kurulan, kotalarla arzı yöneten petrol ihracatçıları karteli."],
  ["OPEC+","OPEC üyeleri ile Rusya'nın başını çektiği OPEC dışı üreticilerin 2016'dan beri süren işbirliği."],
  ["Yedek kapasite","Hızla devreye alınabilecek, kullanılmayan üretim kapasitesi; piyasa gücünün kaynağı."]
 ]}
]},
{n:"3.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Özgül ağırlığı 0,85 olan bir ham petrolün API gravitesi yaklaşık kaçtır?",o:["25°","35°","45°","10°"],a:1,e:"141,5 ÷ 0,85 − 131,5 ≈ 166,5 − 131,5 = 35°. Bu değer hafif petrol sınıfına girer."},
  {q:"API gravitesi yükseldikçe ham petrol için ne söylenebilir?",o:["Daha yoğun ve viskoz hâle gelir","Daha hafiftir, değerli ürün payı artar","Kükürt oranı da mutlaka yükselir","Sudan ağır olduğu için suda batar"],a:1,e:"API formülü terstir: yoğunluk düştükçe API yükselir. Hafif petrol daha çok benzin, jet yakıtı ve motorin verir."},
  {q:"API gravitesi tam 10° olan bir sıvı için hangisi doğrudur?",o:["Sudan çok daha hafiftir","Suyla aynı yoğunluktadır","Kükürt içermez","Hafif petrol sınıfındadır"],a:1,e:"Özgül ağırlık 1 iken 141,5 − 131,5 = 10. Yani API 10, suyun yoğunluğuna karşılık gelir."},
  {q:"Ekşi petrolün tatlı petrole göre iskontolu fiyatlanmasının temel nedeni nedir?",o:["Varil başına daha az enerji içermesi","Kükürt giderme için ek maliyet gerektirmesi","Boru hatlarıyla hiç taşınamaması","Yalnızca asfalt üretiminde kullanılabilmesi"],a:1,e:"Yüksek kükürt, emisyon kuralları nedeniyle ek arıtma ister; bu rafineri maliyetini artırır ve fiyata iskonto olarak yansır."},
  {q:"API'si 36°, kükürt oranı %1,9 olan bir ham petrol nasıl sınıflandırılır?",o:["Hafif-tatlı","Hafif-ekşi","Ağır-tatlı","Ağır-ekşi"],a:1,e:"36° hafif sınıftadır; %1,9 kükürt %0,5 eşiğinin çok üstündedir, yani ekşidir. Yoğunluk ve kükürt bağımsız özelliklerdir."},
  {q:"OPEC'in fiyatı uzun süre yüksek tutmasını en çok zorlaştıran etken hangisidir?",o:["Üyelerin hepsinin aynı üretim maliyetine sahip olması","Yüksek fiyatın kartel dışı üretimi, örneğin ABD kaya petrolünü kârlı kılması","Petrol talebinin kısa vadede çok esnek olması","Brent fiyatının OPEC tarafından ilan edilmesi"],a:1,e:"Fiyat yükseldikçe kartel dışı arz artar ve OPEC'in pazar payı düşer. Ayrıca üyelerin kota üstü üretme dürtüsü de karteli zayıflatır."},
  {q:"Rusya'nın OPEC ile ilişkisi en iyi nasıl tanımlanır?",o:["1960'tan beri kurucu üyedir","Angola'nın yerine 2024'te üye olmuştur","Üye değildir, OPEC+ kararlarına katılır","Üreticilerle hiçbir koordinasyona girmez"],a:2,e:"OPEC+ 2016 sonunda kuruldu; Rusya resmî OPEC üyesi değildir ama ortak üretim ayarlamalarına katılır."},
  {q:"Talebin kısa vadeli esnekliği 0,1 iken küresel arz %3 azalırsa fiyat yaklaşık ne kadar artar?",o:["%3","%10","%30","%0,3"],a:2,e:"%ΔP ≈ %ΔQ ÷ |esneklik| = 3 ÷ 0,1 = %30. Düşük esneklik küçük arz şoklarını büyük fiyat hareketlerine dönüştürür."},
  {q:"Brent ve WTI'ın uluslararası referans petrol olarak kullanılmasının bir nedeni nedir?",o:["Dünyanın en ağır petrolleri olmaları","Hafif-tatlı olup likit piyasada işlem görmeleri","Yalnızca OPEC üyesi ülkelerde üretilmeleri","Kükürt oranlarının en yüksek düzeyde olması"],a:1,e:"Her ikisi de hafif-tatlıdır ve derin, likit vadeli işlem piyasaları vardır; diğer petroller onlara göre primli ya da iskontolu fiyatlanır."}
 ]}
]}
],
refs:[
 "<i>Enerji Kaynakları, Yatırımı ve Yönetimi: Soru ve Yanıtlarla Uygulamalı Bir Rehber</i>. Holistence Publications, 2025. Bölüm 2, s. 21–24.",
 "Yergin, D. (1991). <i>The Prize: The Epic Quest for Oil, Money, and Power</i>. Simon & Schuster.",
 "Organization of the Petroleum Exporting Countries (OPEC): <a href=\"https://www.opec.org\">opec.org</a>",
 "U.S. Energy Information Administration — Petroleum & other liquids: <a href=\"https://www.eia.gov\">eia.gov</a>"
],
next:"Sonraki: Hafta 04 — Doğal gaz, LNG, kömür ve fosil şirketlerinin geçişi"
};
