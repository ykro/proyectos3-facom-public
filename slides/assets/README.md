# slides/assets

Capturas reales de las **apps de referencia** del curso, usadas en los slides:

- `ruta-home.png`, `ruta-detalle.png` — PWA **Ruta del Café** (Proyecto 1).
- `bitacora-login.png`, `bitacora-grid.png`, `bitacora-captura.png` — app nativa **Bitácora Visual** (Proyecto Final).

Son pantallas móviles (390×844) con la paleta vino del curso. `generar_slides.py` las incrusta en los slides de "capturas". Si cambias las apps de `proyectos-referencia/`, regenera las capturas y vuelve a correr:

```
uv run --with python-pptx python slides/generar_slides.py
```
