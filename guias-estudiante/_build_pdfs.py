#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera PDFs con marca (paleta vino) de las guías del estudiante.

Pipeline:  Markdown --(pandoc)--> HTML --(Google Chrome vía Playwright)--> PDF

Produce en guias-estudiante/pdf/:
    s0-bienvenida-y-configuracion.pdf
    proyecto-1-pwa.pdf
    proyecto-final-nativo.pdf

Ejecutar:
    uv run --with playwright python guias-estudiante/_build_pdfs.py
(requiere pandoc y Google Chrome instalados)
"""

import os
import subprocess
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "pdf")
os.makedirs(OUT, exist_ok=True)

GUIDES = [
    {"file": "s0-bienvenida-y-configuracion.md", "emoji": "☕",
     "kicker": "Antes de empezar",
     "title": "Bienvenida y configuración",
     "subtitle": "Prepara tu cuenta y tu navegador para construir apps con IA"},
    {"file": "proyecto-1-pwa.md", "emoji": "☕",
     "kicker": "Proyecto 1 · PWA",
     "title": "Ruta del Café",
     "subtitle": "Guía paso a paso: una guía de cafés de especialidad, instalable en el teléfono"},
    {"file": "proyecto-final-nativo.md", "emoji": "📸",
     "kicker": "Proyecto Final · App nativa Android",
     "title": "Bitácora Visual",
     "subtitle": "Guía paso a paso: un diario visual privado, cámara-first"},
]

CSS = """
:root{
  --crema:#FDF6EC; --crema2:#F6ECDD; --vino:#6D2E46; --terracota:#C84B31;
  --mostaza:#E3B23C; --texto:#2B2B2B; --muted:#6f645b; --line:#E7D8C4;
  --verde:#4F772D; --azul:#3A6B7E;
}
*{box-sizing:border-box}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
  color:var(--texto);font-size:11.2pt;line-height:1.55;margin:0}
.cover{background:linear-gradient(150deg,#6D2E46,#8a4a63 60%,#C84B31);
  color:#fff;padding:64px 54px 52px;border-radius:0}
.cover .emoji{font-size:52px;line-height:1}
.cover .kicker{font-size:13pt;font-weight:800;letter-spacing:.6px;text-transform:uppercase;
  color:#F2D9A8;margin:18px 0 6px}
.cover h1{font-size:40pt;font-weight:800;letter-spacing:-.5px;margin:0 0 12px;
  color:#fff;border-bottom:none;padding:0}
.cover .sub{font-size:13.5pt;opacity:.92;max-width:80%;line-height:1.45}
.cover .course{margin-top:30px;font-size:10.5pt;opacity:.8;border-top:1px solid rgba(255,255,255,.25);
  padding-top:14px}
.content{padding:34px 54px 40px}
h1,h2,h3{color:var(--vino);line-height:1.25;font-weight:800}
h1{font-size:22pt;margin:30px 0 10px;border-bottom:3px solid var(--mostaza);padding-bottom:6px}
h2{font-size:16.5pt;margin:26px 0 8px}
h3{font-size:13pt;margin:20px 0 6px;color:var(--terracota)}
p{margin:9px 0}
a{color:var(--azul);text-decoration:none}
strong{color:#4a2030}
ul,ol{margin:9px 0 9px 6px;padding-left:22px}
li{margin:5px 0}
hr{border:none;border-top:1px solid var(--line);margin:22px 0}
/* prompts y bloques de código */
pre{background:var(--crema2);border:1px solid var(--line);border-left:5px solid var(--vino);
  border-radius:10px;padding:14px 16px;overflow:auto;font-size:9.6pt;line-height:1.45;
  page-break-inside:avoid;white-space:pre-wrap;word-wrap:break-word}
code{font-family:'SF Mono',Menlo,Consolas,monospace;font-size:9.6pt}
p code,li code{background:var(--crema2);padding:1.5px 6px;border-radius:6px;color:var(--vino);
  border:1px solid var(--line)}
/* callouts / blockquotes (tips, [Captura:], notas) */
blockquote{background:var(--crema);border:1px solid var(--line);border-left:5px solid var(--mostaza);
  border-radius:10px;margin:14px 0;padding:12px 16px;color:#5b5147;page-break-inside:avoid}
blockquote p{margin:4px 0}
/* tablas */
table{border-collapse:collapse;width:100%;margin:14px 0;font-size:10pt;page-break-inside:avoid}
th{background:var(--vino);color:#fff;text-align:left;padding:9px 12px;font-weight:700}
td{border:1px solid var(--line);padding:8px 12px;vertical-align:top}
tr:nth-child(even) td{background:#FBF3E6}
img{max-width:100%}
h1,h2,h3{page-break-after:avoid}
"""

TEMPLATE = """<!doctype html><html lang="es"><head><meta charset="utf-8">
<style>{css}</style></head><body>
<div class="cover">
  <div class="emoji">{emoji}</div>
  <div class="kicker">{kicker}</div>
  <h1>{title}</h1>
  <div class="sub">{subtitle}</div>
  <div class="course">Proyectos III — Diseño de aplicaciones móviles · Licenciatura en Comunicación y Diseño · Universidad Galileo</div>
</div>
<div class="content">
{body}
</div>
</body></html>"""

FOOTER = ('<div style="width:100%;font-size:8px;color:#8a7c70;padding:0 12mm;'
          'display:flex;justify-content:space-between;">'
          '<span>Proyectos III · Diseño de aplicaciones móviles</span>'
          '<span>Página <span class="pageNumber"></span> / <span class="totalPages"></span></span>'
          '</div>')


def md_to_html_fragment(md_path):
    return subprocess.run(
        ["pandoc", md_path, "-f", "gfm", "-t", "html"],
        capture_output=True, text=True, check=True).stdout


def main():
    tmp_dir = os.path.join(OUT, "_tmp")
    os.makedirs(tmp_dir, exist_ok=True)
    with sync_playwright() as p:
        b = p.chromium.launch(channel="chrome")
        page = b.new_page()
        for g in GUIDES:
            body = md_to_html_fragment(os.path.join(HERE, g["file"]))
            html = TEMPLATE.format(css=CSS, emoji=g["emoji"], kicker=g["kicker"],
                                   title=g["title"], subtitle=g["subtitle"], body=body)
            tmp_html = os.path.join(tmp_dir, g["file"].replace(".md", ".html"))
            with open(tmp_html, "w") as f:
                f.write(html)
            page.goto("file://" + tmp_html)
            page.wait_for_timeout(200)
            out_pdf = os.path.join(OUT, g["file"].replace(".md", ".pdf"))
            page.pdf(path=out_pdf, format="A4", print_background=True,
                     display_header_footer=True, header_template="<span></span>",
                     footer_template=FOOTER,
                     margin={"top": "14mm", "bottom": "16mm", "left": "0mm", "right": "0mm"})
            print("PDF:", os.path.basename(out_pdf))
        b.close()
    print("Listo ->", OUT)


if __name__ == "__main__":
    main()
