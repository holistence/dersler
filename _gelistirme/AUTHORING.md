# Hafta yazım kılavuzu

Her hafta tek bir dosyadır: `content/<kod>-<hafta>.js` (ör. `content/ge-05.js`). Görünüm ve etkileşim `engine/ders.js` + `engine/ders.css` içindedir; **motor dosyalarını değiştirmeyin.**

Onaylanmış örnek: `content/ge-01.js`. Yeni haftaları bu dosyanın yapısını, tonunu ve uzunluğunu örnek alarak yazın. Önce onu baştan sona okuyun.

## Kitle ve ton
- Lisans öğrencisi (1.–3. sınıf), Türkçe, sade ve açık. Ders kitabının yerine geçmez; kitabı okumaya hazırlayan ve pekiştiren bir çalışma sayfasıdır.
- Kısa paragraflar (en fazla 4–5 cümle). Kavramı tanımla → gündelik bir örnekle bağla → Türkiye'den örnek ver (mümkünse).
- Etken çatı, düz anlatım. Süslü giriş cümleleri, "önemle belirtmek gerekir ki" gibi kalıplar yok.
- Yazar: "Prof. Dr. Mehmet Şahin".

## Dosya yapısı (zorunlu alanlar)
```js
window.WEEK={
id:"ge-05", code:"GE", course:"Genel Ekonomi", short:"Talep", week:5, total:14,
author:"Prof. Dr. Mehmet Şahin",
eyebrow:"Mikroiktisat",                 // kısa konu etiketi
title:"Talep ve <em>esneklik</em>",      // bir kelime <em> ile vurgulanır
intro:"Bu hafta … Okuma süresi yaklaşık NN dakika; sayfada … var.",
goals:["…","…","…","…"],               // 4–5 ölçülebilir hedef ("açıklayabilirsiniz", "hesaplayabilirsiniz")
sections:[ {n:"5.1", h:"Başlık", blocks:[ … ]}, … ],
refs:["…"],
next:"Sonraki: Hafta 06 — …"            // 14. haftada: "Dersin sonu — tebrikler!"
};
```
- Bölüm numaraları `<hafta>.<sıra>` (5.1, 5.2 …).
- Yapı: 5–7 konu bölümü → "Kavram kartları" bölümü → "Kendinizi test edin" bölümü (en sonda).

## Blok türleri
- `{t:"p",html:"…"}` paragraf (<b>, <i>, <em> kullanılabilir)
- `{t:"def",html:"…",src:"…"}` öne çıkan tanım
- `{t:"list",items:["…"]}`
- `{t:"box",lbl:"Etiket",html:"…"}` vurgulu kutu (ör. "Türkiye'den örnek", "Formül")
- `{t:"table",head:[…],rows:[[…]]}`
- `{t:"timeline",items:[["1973","Başlık","Açıklama",1 /*vurgu, isteğe bağlı*/]]}`
- `{t:"choice",items:[{label,title,body,ex}]}` — sekmeli karşılaştırma (3–5 seçenek)
- `{t:"cards",items:[["Kavram","Tanım"]]}` — 6–10 kart
- `{t:"quiz",items:[{q,o:[4 seçenek],a:doğruIndex,e:"açıklama"}]}` — **8–10 soru**
- `{t:"widget",name,opts}` — aşağıda

### Widget'lar
- `calc` — genel hesaplayıcı:
  `{t:"widget",name:"calc",opts:{title:"Fiyat esnekliği",inputs:[{id:"dp",label:"Fiyat değişimi",min:-50,max:50,step:1,value:10,unit:"%"},{id:"dq",label:"Miktar değişimi",min:-50,max:50,value:-20,unit:"%"}],formula:"dq/dp",result:"Talebin fiyat esnekliği: {r}",digits:2,note:"…"}}`
  `formula` geçerli bir JS ifadesidir (Math.* kullanılabilir; koşul için `x>1?"esnek":"esnek değil"` gibi metin de döndürebilir — o zaman `{r}` metin olur). `id` yalnız harf.
- `supplyDemand` — arz-talep grafiği, talep ve arz kaydırma sürgüleri: `opts:{title:"…",a:100,b:1,c:10,d:1,note:"…"}` (talep P=a−bQ, arz P=c+dQ)
- `classify` — sınıflandırma alıştırması: `opts:{title:"…",cats:["Mikro","Makro"],items:[["Enflasyon oranı",1],["Bir firmanın fiyat kararı",0]],note:"Kontrolden sonra gösterilecek açıklama"}` (6–10 madde)
- `chart` — çubuk/çizgi grafik: `opts:{title:"…",unit:"…",kind:"bar"|"line",labels:[…],series:[{name:"…",values:[…]}],source:"…"}` — **yalnızca kitapta yer alan veya kaynağı kesin, köklü bir kurumun yayımladığı veriyle.** Emin olmadığınız sayıyla grafik çizmeyin.
- Hazır olanlar: `realIncome`, `axis`, `framing`, `reversal`, `sdg` (ge-01 / sk-01'de nasıl kullanıldığına bakın).

Her hafta **en az 2 widget** ve toplamda **en az 3 etkileşim** (widget + choice) içermeli. Etkileşimi süs olsun diye değil, haftanın asıl kavramını denetmek için kullanın (ör. esneklik haftasında esneklik hesaplayıcı, piyasa yapıları haftasında sınıflandırma).

## Test soruları
- 8–10 soru, 4 seçenek. Ezber değil anlama ve uygulama ölçsün; en az 2 soru hesaplama veya senaryo yorumu olsun.
- Çeldiriciler makul olsun. **Doğru seçenek diğerlerinden belirgin biçimde uzun olmasın** (doğrulayıcı uyarır). Seçenekleri motor karıştırır; `a` doğru seçeneğin yazdığınız listedeki sırasıdır.
- Her soruda `e` alanında neden doğru olduğunu 1–2 cümleyle açıklayın.

## Doğruluk ve kaynak
- Kaynak kitap Prof. Şahin'in kendi kitabıdır (SK hariç). İçeriği kitaba sadık kalarak ama öğretim için yeniden düzenleyerek yazın. Uzun pasajları aynen kopyalamayın; kısa tanımlar kitaptaki gibi kalabilir.
- Kitapta **olgusal hata, yanlış atıf (ör. bir sözün yanlış kişiye atfedilmesi), tutarsız sayı** görürseniz düzeltmeden sayfaya taşımayın: doğru bilgiyi kullanın ve `content/NOTLAR-<kod>.md` dosyasına "Hafta, kitap sayfası, kitapta yazan, doğrusu, gerekçe" olarak not düşün.
- Kitap dışından eklediğiniz her olgusal bilgi (tarih, sayı, kurum, isim) kesin olmalı. Emin değilseniz yazmayın.
- Güncel değişebilecek rakamları (enflasyon oranı, petrol fiyatı, kurulu güç) belirli bir yıl ve kaynakla verin veya hiç vermeyin.
- `refs`: ilk satır ders kitabı (bölüm ve sayfa aralığıyla), ardından 2–3 gerçek ve güvenilir kaynak (kesin var olduğunu bildiğiniz kitaplar; web için yalnızca köklü kurumların ana sayfaları: tuik.gov.tr, tcmb.gov.tr, epdk.gov.tr, iea.org, worldbank.org, sdgs.un.org …).

## Kaynak metinler
- `sources/ge.txt` — Ekonomiyi Anlamak (pdftotext). **Not:** metinde bazı "i" harfleri düşmüş görünür ("b r" = "bir", "kt sat" = "iktisat"); anlamdan çıkarın. Sayfa başları `=== SAYFA PDF n ===`; kitap sayfa numarası metindeki sayfa sonundaki numaradır.
- `sources/me.txt` — Medya Ekonomisi (OCR). `sources/en.txt` — Enerji Kaynakları, Yatırımı ve Yönetimi (OCR). OCR'da küçük harf hataları olabilir; şekil/tablo metinleri bozuk olabilir.
- Haftaların hangi bölüm/sayfalara karşılık geldiği: `courses.json`.
- SK (Sürdürülebilir Kalkınma): kaynak metin yok ve temel kaynak (Sachs) telifli. **Tamamen özgün** anlatım yazın; Sachs'tan alıntı, şekil, tablo kullanmayın. Kitabı yalnızca `refs` içinde "ilgili bölüm" olarak gösterin. Bilgiler genel kabul görmüş akademik bilgi ve BM, Dünya Bankası, TÜİK gibi resmi kaynaklara dayansın.

## Kontrol
Her dosyayı yazdıktan sonra çalıştırın ve HATA kalmayana, uyarılar giderilene kadar düzeltin:
```
cd /home/claude/courses && node validate.cjs content/ge-05.js
```
