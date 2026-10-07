window.WEEK={
id:"py-14",code:"PY",course:"Proje Yönetimi",short:"Kapanış ve öneri",week:14,total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Kapanış",
title:"Kapanış, öğrenilen dersler ve <em>proje önerisi</em>",
intro:"Son haftada bir projenin nasıl düzgün kapatılacağını, öğrenilen derslerin nasıl kayda geçirileceğini ve bir projenin ne zaman erken sonlandırılması gerektiğini öğreneceksiniz. Ardından dönem boyunca hazırladığınız parçaları, kalkınma ajansları ve benzeri fon kuruluşlarının kullandığı mantıksal çerçeve matrisiyle bir proje önerisinde birleştireceksiniz. Okuma süresi yaklaşık 35 dakika; sayfada bir mantıksal çerçeve alıştırması, iki hesaplayıcı ve 9 soruluk bir test var.",
goals:[
 "Proje kapanışının adımlarını sıralayabilirsiniz.",
 "Kullanılabilir bir öğrenilen dersler kaydı yazabilirsiniz.",
 "Batık maliyet yanılgısına düşmeden devam ya da sonlandırma kararı verebilirsiniz.",
 "Mantıksal çerçeve matrisinin satır ve sütunlarını doğru doldurabilirsiniz.",
 "Dönem projenizi bir fon kuruluşuna sunulabilecek bir proje önerisine dönüştürebilirsiniz."
],
sections:[
{n:"14.1",h:"Projeyi düzgün kapatmak",blocks:[
 {t:"p",html:"Birçok proje bitmez, sönümlenir: etkinlik yapılır, herkes kendi işine döner, faturalar bir kenarda kalır, kimse \"ne öğrendik?\" diye sormaz. Oysa kapanış, projenin resmen sona erdiği ve kurumun deneyimden kalıcı olarak öğrendiği evredir."},
 {t:"timeline",items:[
  ["1","Teslim ve kabul","Çıktılar kabul ölçütlerine göre doğrulanır ve sponsordan veya müşteriden yazılı kabul alınır.",1],
  ["2","Sözleşmelerin kapatılması","Tedarikçilerle hesaplar kapatılır, açık kalan taahhüt ve uyuşmazlık olup olmadığı kontrol edilir.",0],
  ["3","Mali ve idari kapanış","Son harcamalar işlenir, bütçe kapatılır, belgeler arşivlenir; destekli projelerde nihai rapor sunulur.",0],
  ["4","Öğrenilen dersler","Ekip ve paydaşlarla neyin iyi gittiği, neyin gitmediği ve bir dahakinde neyin farklı yapılacağı konuşulup kayda geçirilir.",1],
  ["5","Ekibin serbest bırakılması","Ekip üyeleri teşekkürle yeni görevlerine döner; katkılar tanınır ve kutlanır.",0]]},
 {t:"p",html:"Proje kapanışı ile fayda değerlendirmesi farklı şeylerdir. Kapanış, çıktının teslim edildiğini doğrular. Fayda ise çoğu zaman aylar sonra ortaya çıkar: Kariyer Günleri'ne katılan öğrencilerden kaçının staj veya iş bulduğu ancak dönem sonunda ölçülebilir. Bu yüzden bazı kurumlar proje kapandıktan birkaç ay sonra bir <b>proje sonrası değerlendirme</b> yapar."}
]},
{n:"14.2",h:"Öğrenilen dersler",blocks:[
 {t:"p",html:"Öğrenilen dersler toplantıları çoğu zaman ya bir suçlama seansına ya da \"iletişim daha iyi olmalıydı\" gibi genel cümlelere dönüşür. İkisi de işe yaramaz. İyi bir öğrenilen dersler kaydı <b>somut</b>, <b>suçlayıcı olmayan</b> ve <b>uygulanabilir</b>dir: bir sonraki projenin ekibi okuduğunda ne yapacağını bilmelidir."},
 {t:"table",head:["Ne oldu?","Etkisi","Neden?","Bir dahakine"],rows:[
  ["Firma onayları planlanandan 6 gün geç tamamlandı","Stant planı sıkıştı, kurulum gece yarısına kaldı","Büyük firmaların bütçe onay süreci hesaba katılmamıştı","Firma davetlerini etkinlikten en az 10 hafta önce başlat; büyük firmalara ayrı takvim uygula"],
  ["Kayıt sistemi yoğun saatte yavaşladı","Kuyruk oluştu, 40 dakikalık gecikme","Yük testi gerçek katılımcı sayısının yarısıyla yapılmıştı","Yük testini beklenen katılımın en az iki katıyla yap"],
  ["Gönüllü fazlası planı işe yaradı","Sınav haftasına rağmen kurulum zamanında bitti","Risk kaydında erken tespit edilmişti","%30 fazla gönüllü kuralını şablona ekle"]]},
 {t:"p",html:"Son satıra dikkat edin: öğrenilen dersler yalnızca hatalardan çıkmaz. İyi giden şeyleri de kayda geçirmek, başarılı uygulamaların bir sonraki projede tekrarlanmasını sağlar."}
]},
{n:"14.3",h:"Erken sonlandırma ve batık maliyet",blocks:[
 {t:"p",html:"Her proje tamamlanmamalıdır. Koşullar değişmiş, iş gerekçesi ortadan kalkmış ya da maliyet beklenen faydayı açıkça aşacak hâle gelmiş olabilir. Bu durumda en doğru karar projeyi bilinçli olarak durdurmaktır; aşama kapıları bu kararın verilmesi için vardır."},
 {t:"p",html:"Bu kararı en çok zorlaştıran şey <b>batık maliyet yanılgısıdır</b>: geri alınamayacak biçimde harcanmış paraya ve emeğe bakarak karar vermek. \"Bu kadar para harcadık, şimdi bırakırsak hepsi boşa gider\" cümlesi yanlış bir akıl yürütmedir. Harcanan para her iki seçenekte de geri gelmez. Doğru soru şudur: <b>Bundan sonra harcayacağımız para, bundan sonra elde edeceğimiz faydaya değer mi?</b>"},
 {t:"widget",name:"calc",opts:{title:"Devam mı, sonlandırma mı?",inputs:[
  {id:"harcanan",label:"Bugüne kadar harcanan (batık)",min:0,max:1000,step:10,value:400,unit:" bin TL"},
  {id:"kalan",label:"Tamamlamak için gereken ek harcama",min:0,max:1000,step:10,value:300,unit:" bin TL"},
  {id:"fayda",label:"Tamamlanırsa beklenen fayda",min:0,max:2000,step:10,value:250,unit:" bin TL"}],
  formula:"(function(){var net=fayda-kalan;return 'İleriye dönük net değer: '+net+' bin TL → '+(net>0?'Devam etmek mantıklı.':(net===0?'Kayıtsız: nitel ölçütlere bakın.':'Sonlandırmayı ciddi biçimde değerlendirin.'))+' (Harcanan '+harcanan+' bin TL kararı etkilememeli.)';})()",
  result:"{r}",note:"Harcanan tutarı değiştirin: sonuç değişmez. Karar yalnızca kalan maliyet ile beklenen faydaya bağlıdır. Gerçek kararlarda itibar, yasal yükümlülükler ve kısmi çıktıların değeri gibi nitel ölçütler de hesaba katılır."}}
]},
{n:"14.4",h:"Proje önerisi ve mantıksal çerçeve",blocks:[
 {t:"p",html:"Dönem boyunca bir projenin bütün parçalarını hazırladınız. Bir kurumdan destek almak istediğinizde bu parçaları bir <b>proje önerisinde</b> birleştirmeniz gerekir. Türkiye'de öğrenciler ve genç araştırmacılar için yaygın destek kaynakları arasında TÜBİTAK'ın 2209-A Üniversite Öğrencileri Araştırma Projeleri Destekleme Programı, 26 kalkınma ajansının mali destek programları ve Erasmus+ gibi Avrupa Birliği programları sayılabilir. Her programın kendi başvuru formu ve takvimi vardır; başvurmadan önce ilgili kurumun güncel çağrı metnini okuyun."},
 {t:"p",html:"Kalkınma projelerinde önerinin özü çoğu zaman bir <b>mantıksal çerçeve matrisidir</b>. 1960'ların sonunda ABD Uluslararası Kalkınma Ajansı (USAID) için geliştirilen bu araç, bugün Avrupa Komisyonu başta olmak üzere birçok fon kuruluşu tarafından kullanılır. Matris, 3. haftada hazırladığınız amaç ağacını tek bir tabloya dönüştürür."},
 {t:"table",head:["","Müdahale mantığı","Ölçülebilir göstergeler","Doğrulama kaynakları","Varsayımlar"],rows:[
  ["<b>Genel amaç</b>","Fakülte mezunlarının işgücü piyasasına geçişinin kolaylaşması","Mezuniyetten sonraki 6 ayda iş veya staj bulanların oranı","Kariyer merkezi mezun izleme anketi","—"],
  ["<b>Özel amaç</b>","Son sınıf öğrencilerinin işverenlerle doğrudan bağlantı kurması","Etkinlikte en az bir firmayla görüşen öğrenci sayısı","Kayıt sistemi ve firma görüşme formları","Firmalar etkinlikte işe alım niyetiyle bulunur"],
  ["<b>Sonuçlar</b>","Kariyer fuarı ve paneller gerçekleştirilmiş","12 firma, 6 panel, 600 katılımcı","Katılım listeleri, fotoğraflar, sonuç raporu","Öğrenciler sınav dönemine rağmen katılır"],
  ["<b>Faaliyetler</b>","Firma davetleri, tanıtım, kayıt sistemi, salon düzeni","Kaynaklar ve bütçe","Harcama belgeleri","Salon tahsisi zamanında yapılır"]]},
 {t:"p",html:"Matris iki yönde okunur. <b>Dikey mantık</b> aşağıdan yukarıya bir \"eğer… ise…\" zinciridir: Faaliyetler yapılırsa ve varsayımlar gerçekleşirse sonuçlara ulaşılır; sonuçlar elde edilirse ve varsayımlar tutarsa özel amaca ulaşılır. <b>Yatay mantık</b> ise her düzey için \"başarıyı nasıl ölçeceğiz ve bu ölçümün kanıtı ne olacak?\" sorusuna yanıt verir. Varsayımlar sütunu, 9. haftadaki risk kaydıyla doğrudan bağlantılıdır."},
 {t:"widget",name:"classify",opts:{title:"Mantıksal çerçevede hangi düzey?",cats:["Genel amaç","Özel amaç","Sonuç","Faaliyet"],items:[
  ["İlçedeki kadın girişimcilerin gelirlerinin artması",0],
  ["Proje kapsamındaki 40 kadın girişimcinin e-ticaret satışına başlaması",1],
  ["40 girişimciye 8 haftalık e-ticaret eğitimi verilmiş olması",2],
  ["Eğitim içeriğinin hazırlanması ve eğitmenlerin seçilmesi",3],
  ["Kentte okul terkinin azalması",0],
  ["Hedef okullardaki risk grubundaki öğrencilerin devamsızlığının azalması",1],
  ["120 öğrenciye haftalık mentorluk sağlanmış olması",2],
  ["Gönüllü mentorların başvurularının alınıp eğitilmesi",3]],
  note:"Genel amaç projenin katkı verdiği geniş hedeftir ve tek başına projeyle gerçekleşmez. Özel amaç projenin kendi süresi içinde ulaşmayı taahhüt ettiği değişimdir. Sonuçlar projenin ürettiği somut çıktılardır, faaliyetler ise bu çıktılar için yapılan işlerdir."}}
]},
{n:"14.5",h:"Önerinizi değerlendirin",blocks:[
 {t:"p",html:"Fon kuruluşları önerileri genellikle benzer ölçütlerle puanlar: ihtiyacın açıklığı, amaç ve hedeflerin tutarlılığı, uygulama planının gerçekçiliği, bütçenin maliyet etkinliği ve sürdürülebilirlik. Kendi önerinizi göndermeden önce bu ölçütlerle dürüstçe puanlayın."},
 {t:"widget",name:"calc",opts:{title:"Öneri öz değerlendirmesi",inputs:[
  {id:"ihtiyac",label:"İhtiyaç verilerle ve açıkça ortaya konmuş mu? (1–5)",min:1,max:5,step:1,value:4},
  {id:"tutarlilik",label:"Amaç, hedef ve faaliyetler tutarlı mı? (1–5)",min:1,max:5,step:1,value:3},
  {id:"plan",label:"Takvim, sorumlular ve riskler gerçekçi mi? (1–5)",min:1,max:5,step:1,value:3},
  {id:"butce",label:"Bütçe faaliyetlerle uyumlu ve gerekçeli mi? (1–5)",min:1,max:5,step:1,value:2},
  {id:"surd",label:"Proje bittikten sonra sonuçlar sürecek mi? (1–5)",min:1,max:5,step:1,value:3}],
  formula:"(function(){var t=ihtiyac+tutarlilik+plan+butce+surd,m=Math.min(ihtiyac,tutarlilik,plan,butce,surd),z=[];if(ihtiyac===m)z.push('ihtiyaç analizi');if(tutarlilik===m)z.push('mantıksal çerçeve');if(plan===m)z.push('uygulama planı');if(butce===m)z.push('bütçe');if(surd===m)z.push('sürdürülebilirlik');return 'Toplam '+t+' / 25 → '+(t>=20?'Güçlü bir öneri.':(t>=15?'Geliştirilebilir.':'Göndermeden önce ciddi revizyon gerekli.'))+' Öncelikle güçlendirin: '+z.join(', ');})()",
  result:"{r}",note:"Bu, resmi bir puanlama tablosu değil, öz değerlendirme aracıdır. Başvuracağınız programın kendi değerlendirme ölçütlerini çağrı metninden mutlaka kontrol edin."}},
 {t:"box",lbl:"Dönem projesi · Final",html:"Dönem boyunca hazırladığınız bütün çıktıları tek bir proje önerisi dosyasında birleştirin: (1) proje özeti (yarım sayfa), (2) ihtiyaç analizi ve sorun ağacı, (3) mantıksal çerçeve matrisi, (4) kapsam beyanı ve İKY, (5) Gantt şeması ve kritik yol, (6) bütçe, (7) risk kaydı, (8) RACI ve iletişim planı, (9) kalite planı, (10) izleme planı ve kullanacağınız göstergeler. Son olarak ekibinizle dönem boyunca yaşadıklarınızı üç maddelik bir öğrenilen dersler tablosuna dökün. Öneriyi 10 dakikalık bir sunumla sınıfa savunun."}
]},
{n:"14.6",h:"Kavram kartları",blocks:[
 {t:"p",html:"Kartın üstüne dokunun, arka yüzü açılsın."},
 {t:"cards",items:[
  ["Teslim kabul","Çıktının kabul ölçütlerini karşıladığının sponsor veya müşteri tarafından yazılı onayı."],
  ["İdari kapanış","Hesapların, belgelerin ve kayıtların kapatılıp arşivlenmesi."],
  ["Öğrenilen dersler","Somut, suçlayıcı olmayan ve uygulanabilir deneyim kaydı."],
  ["Batık maliyet","Geri alınamayacak biçimde harcanmış, gelecekteki kararı etkilememesi gereken maliyet."],
  ["Proje sonrası değerlendirme","Kapanıştan sonra faydanın gerçekleşip gerçekleşmediğinin ölçülmesi."],
  ["Mantıksal çerçeve","Amaç hiyerarşisini göstergeler, kaynaklar ve varsayımlarla birleştiren matris."],
  ["Dikey mantık","Faaliyetlerden genel amaca uzanan eğer–ise zinciri."],
  ["Doğrulama kaynağı","Bir göstergenin değerinin hangi belge veya veriyle kanıtlanacağı."]
 ]}
]},
{n:"14.7",h:"Kendinizi test edin",blocks:[
 {t:"p",html:"Her soruda tek doğru cevap var. Cevabınızı seçtiğinizde açıklama görünür."},
 {t:"quiz",items:[
  {q:"Proje kapanışında ilk yapılması gereken adım genellikle hangisidir?",o:["Ekibin teşekkürle yeni görevlerine dağıtılması","Çıktıların doğrulanıp yazılı kabul alınması","Proje belgelerinin arşivlenip imha edilmesi","Bir sonraki projenin hemen planlanması"],a:1,e:"Kabul alınmadan sözleşmeler ve bütçe kapatılamaz; kabul, projenin çıktısını teslim ettiğinin resmi kanıtıdır."},
  {q:"Aşağıdakilerden hangisi kullanılabilir bir öğrenilen ders ifadesidir?",o:["İletişim daha iyi olmalıydı","Ekip yeterince çalışmadı","Yük testini beklenen katılımın iki katıyla yap","Bir dahaki sefere daha dikkatli oluruz"],a:2,e:"Somut ve uygulanabilir olan yalnızca bu ifadedir; diğerleri genel ya da suçlayıcıdır."},
  {q:"500 bin TL harcanmış bir projeyi bitirmek için 200 bin TL daha gerekiyor, beklenen fayda 150 bin TL. Ekonomik açıdan doğru karar nedir?",o:["Devam etmek, çünkü harcanan 500 bin TL boşa gider","Sonlandırmayı düşünmek; kalan maliyet faydayı aşıyor","Kalan işi hızlandırmak için bütçeyi ikiye katlamak","Kararı proje tamamen bitene kadar ertelemek"],a:1,e:"Harcanan 500 bin TL her iki seçenekte de geri gelmez; kalan 200 bin TL'lik harcama 150 bin TL'lik fayda sağlar."},
  {q:"\"Bu kadar emek verdik, şimdi bırakamayız\" düşüncesi hangi yanılgıya örnektir?",o:["Planlama yanılgısı","Batık maliyet yanılgısı","Çıpalama etkisi","Altın kaplama hatası"],a:1,e:"Geri alınamayacak geçmiş harcamaya bakarak gelecek kararı vermek batık maliyet yanılgısıdır."},
  {q:"Mantıksal çerçeve matrisinde \"projenin kendi süresi içinde ulaşmayı taahhüt ettiği değişim\" hangi düzeydir?",o:["Genel amaç","Özel amaç","Sonuç","Faaliyet"],a:1,e:"Genel amaç daha geniş ve uzun vadelidir; özel amaç projenin doğrudan hedeflediği değişimdir."},
  {q:"Mantıksal çerçevede \"doğrulama kaynakları\" sütununa ne yazılır?",o:["Projenin kalem kalem toplam bütçesi","Göstergenin hangi belgeyle kanıtlanacağı","Projeyi destekleyen kurumun adı ve adresi","Faaliyetlerin başlangıç ve bitiş tarihleri"],a:1,e:"Her göstergenin ölçümünün kanıtı, örneğin anket sonuçları veya katılım listeleri, bu sütunda yer alır."},
  {q:"Mantıksal çerçevenin dikey mantığı nasıl okunur?",o:["Yukarıdan aşağı, bütçe sırasıyla","Aşağıdan yukarı, eğer–ise zinciriyle","Soldan sağa, yalnızca göstergelerle","Rastgele"],a:1,e:"Faaliyetler yapılır ve varsayımlar tutarsa sonuçlar, sonuçlar elde edilirse özel amaç gerçekleşir."},
  {q:"Mantıksal çerçevedeki varsayımlar sütunu en çok hangi proje yönetimi aracıyla bağlantılıdır?",o:["RACI matrisi","Risk kaydı","Gantt şeması","Kalite maliyeti tablosu"],a:1,e:"Varsayımlar, projenin kontrolü dışında olup tutmazsa sonuçları tehlikeye atacak koşullardır; risk kaydının doğal girdisidir."},
  {q:"Kariyer Günleri'nin öğrencilerin iş bulmasına katkısının dönem sonunda ölçülmesi neye örnektir?",o:["Teslim kabul süreci","Proje sonrası değerlendirme","İdari kapanış işlemi","Değişiklik kontrol süreci"],a:1,e:"Fayda çoğu zaman proje kapandıktan sonra ortaya çıkar; bu ölçüm proje sonrası değerlendirmedir."}
 ]}
]}
],
refs:[
 "European Commission (2004). <i>Project Cycle Management Guidelines</i>. EuropeAid. Mantıksal çerçeve yaklaşımı bölümü.",
 "Project Management Institute (2021). <i>PMBOK Kılavuzu</i>, 7. baskı. PMI. Teslimat performans alanı.",
 "Arkes, H. R., Blumer, C. (1985). The psychology of sunk cost. <i>Organizational Behavior and Human Decision Processes</i>, 35(1).",
 "TÜBİTAK Bilim İnsanı Destek Programları: <a href=\"https://www.tubitak.gov.tr\">tubitak.gov.tr</a> · Kalkınma ajansları: <a href=\"https://www.sanayi.gov.tr\">sanayi.gov.tr</a>"
],
next:"Dersin sonu — tebrikler!"
};
