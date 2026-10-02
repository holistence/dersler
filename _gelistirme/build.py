"""Ders sayfalarını üretir.
preview/<id>.html  : tek dosyalık önizleme (artifact için)
repos/dersler/      : GitHub Pages'e gidecek tek repo (assets/ + <ders>/hafta-XX/ + <ders>/index.html + index.html)
"""
import json, re, shutil
from pathlib import Path
R = Path(__file__).parent
FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Figtree:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap">'
css = (R/'engine/ders.css').read_text(); js = (R/'engine/ders.js').read_text()
C = json.loads((R/'courses.json').read_text())
bycode = {c['code']: c for c in C['courses']}
(R/'preview').mkdir(exist_ok=True)
for f in sorted((R/'content').glob('*.js')):
    src = f.read_text()
    code = re.search(r'code:"(\w+)"', src).group(1); wk = int(re.search(r'week:(\d+)', src).group(1))
    title = f"{code} Hafta {wk:02d}"
    # önizleme
    (R/'preview'/f"{f.stem}.html").write_text(f"<title>{title}</title>\n{FONTS}\n<style>{css}</style>\n<script>{src}</script>\n<script>{js}</script>\n")
    # repo
    c = bycode[code]; repo = R/'repos'/'dersler'/c['slug']
    A = R/'repos'/'dersler'/'assets'; A.mkdir(parents=True, exist_ok=True)
    shutil.copy(R/'engine/ders.css', A/'ders.css'); shutil.copy(R/'engine/ders.js', A/'ders.js')
    d = repo/f"hafta-{wk:02d}"; d.mkdir(parents=True, exist_ok=True)
    (d/'icerik.js').write_text(src)
    (d/'index.html').write_text(f'<!doctype html>\n<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{title} · {c["name"]}</title>\n{FONTS}\n<link rel="stylesheet" href="../../assets/ders.css"></head>\n<body><script src="icerik.js"></script><script src="../../assets/ders.js"></script></body></html>\n')
# ders ana sayfaları
for c in C['courses']:
    repo = R/'repos'/'dersler'/c['slug']; repo.mkdir(parents=True, exist_ok=True)
    rows = []
    for i, (t, ref) in enumerate(c['weeks'], 1):
        ready = (repo/f"hafta-{i:02d}/index.html").exists()
        cell = f'<a href="hafta-{i:02d}/">{t}</a>' if ready else t
        rows.append(f'<li class="{"ok" if ready else ""}"><span>Hafta {i:02d}</span>{cell}<small>{ref}</small></li>')
    (repo/'index.html').write_text(f'''<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{c["name"]} · {C["author"]}</title>
{FONTS}<link rel="stylesheet" href="../assets/ders.css">
<style>ol{{list-style:none;padding:0;margin:24px 0}}li{{display:grid;grid-template-columns:90px minmax(0,1fr);gap:4px 14px;padding:12px 0;border-top:1px solid var(--line);color:var(--muted)}}li span{{font-family:var(--f-mono);font-size:.8rem;padding-top:3px}}li small{{grid-column:2;font-size:.8rem}}li.ok{{color:var(--ink)}}</style></head>
<body><main class="wrap"><p class="eyebrow">{c["code"]} · 14 hafta</p><h1>{c["name"]}</h1><p>{c["src"]}</p><ol>{"".join(rows)}</ol>
<p class="note">{C["author"]} · Çanakkale Onsekiz Mart Üniversitesi</p></main></body></html>
''')

print("ok", [p.name for p in (R/'preview').iterdir()])

# kök sayfa + README
D = R/'repos'/'dersler'
items = "".join(f'<li class="ok"><span>{c["code"]}</span><a href="{c["slug"]}/">{c["name"]}</a><small>{c["src"]}</small></li>' for c in C['courses'])
(D/'index.html').write_text(f'''<!doctype html>
<html lang="tr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dersler · {C["author"]}</title>
{FONTS}<link rel="stylesheet" href="assets/ders.css">
<style>ol{{list-style:none;padding:0;margin:24px 0}}li{{display:grid;grid-template-columns:60px minmax(0,1fr);gap:4px 14px;padding:14px 0;border-top:1px solid var(--line)}}li span{{font-family:var(--f-mono);font-size:.8rem;padding-top:3px;color:var(--muted)}}li a{{font-family:var(--f-display);font-size:1.3rem}}li small{{grid-column:2;font-size:.82rem;color:var(--muted)}}</style></head>
<body><main class="wrap"><p class="eyebrow">Etkileşimli çalışma sayfaları</p><h1>Dersler</h1><p>{C["author"]} · Her ders 14 haftalık konu anlatımı, etkileşimli alıştırma ve öz-değerlendirme testinden oluşur.</p><ol>{items}</ol></main></body></html>
''')
(D/'README.md').write_text(f"# Dersler\n\n{C['author']} — etkileşimli haftalık çalışma sayfaları.\n\n" + "".join(f"- [{c['name']}]({c['slug']}/)\n" for c in C['courses']) + "\nYayın: GitHub Pages (main dalı, kök klasör). Haftalar `courses` çalışma alanındaki `build.py` ile üretilir; `assets/ders.js` ortak motordur, her hafta yalnızca `icerik.js` dosyasından oluşur.\n")
(D/'.nojekyll').write_text('')
