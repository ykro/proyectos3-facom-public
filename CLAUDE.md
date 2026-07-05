# Proyectos III — Diseño de aplicaciones móviles · CLAUDE.md

Material del curso **Proyectos III** (Licenciatura en Comunicación y Diseño, Universidad Galileo; docente Adrián Catalán). Audiencia: **diseñadores, no programadores**. Construyen apps móviles reales **sin escribir código**, dirigiendo a la IA en español. **Trimestre julio–septiembre 2026**, 10 sesiones de 90 min, 2 secciones (lunes/miércoles) con contenido idéntico.

## Rediseño de julio 2026 (estado vigente)

- **Todo se construye en Google AI Studio (Build), desde el navegador** — tanto la PWA (React) como la app nativa Android (Kotlin + Jetpack Compose). **No se usa** el `android` CLI, terminal, SDK local, ni la marca **Antigravity** (el agente interno se llama Antigravity, pero no se nombra ante estudiantes; a lo sumo 1 nota al pie por archivo).
- El nativo se ve en el **emulador integrado del navegador** y se instala en el teléfono con **"Install on Device"** (WebUSB, sin ADB/SDK). Firebase se **auto-provisiona** ("Enable Firebase"). Cámara real → probar con Install on Device en teléfono físico.
- Modelo por defecto de AI Studio: **Gemini 3.5 Flash**.

## Dos proyectos integradores (evolucionan a lo largo del trimestre)

- **Proyecto 1 — PWA "Ruta del Café"** (semanas 1–3; se evalúa en Examen Parcial, sesión 5). Guía de cafés de especialidad de GT. Colección Firestore `cafeterias`: `nombre, zona, categoria, especialidad, descripcion, imagenUrl`. Categorías: **Para trabajar, Brunch, De barrio, Tostador, Al paso**.
- **Proyecto Final — App nativa "Bitácora Visual"** (semanas 4/6/7; se evalúa en Demo Day, sesión 10). Diario visual privado, cámara-first. Colección `entradas`: `titulo, nota, imagenUrl, uid, fecha`.
- **Simetría:** la PWA es un **catálogo público que se navega**; la nativa es una **herramienta privada que captura** con el teléfono.
- En cada proyecto el estudiante primero reconstruye la app de referencia con la guía y luego aplica lo aprendido a **su propia idea de app** (eso es lo que entrega).

## Convenciones obligatorias

- **Paleta vino (única, ambos proyectos):** fondo crema #FDF6EC · vino #6D2E46 · terracota #C84B31 · mostaza #E3B23C · texto #2B2B2B. Badges extra: Cine/Tostador #4F772D, azul #3A6B7E.
- **Prompts** con separación **Funcionalidad (qué hace) / Interfaz (UI/UX — cómo se ve y se siente)** y UI/UX explícito de alta calidad (jerarquía, tipografía, grid 8px, estados vacío/cargando/error, microinteracciones, accesibilidad AA, mobile-first). Cada guía/banco tiene un bloque **"Personalización de interfaz"** (prompts opcionales que tocan solo la UI).
- **Material 3** se enseña como *vocabulario de diseño* (componentes: TopAppBar, FAB, LazyVerticalGrid, cards, chips), **no como programación** en Compose.
- **Nunca** "vibe coding": siempre **"desarrollo de software asistido por IA"**.
- Regla de los **2 strikes**; **checkpoints** antes de cambios grandes; **modo de anotación** y **View diff** para depurar.
- Interfaz en **español (Guatemala)**; identificadores de código en inglés.
- Cada sesión de contenido (1,2,3,4,6,7) tiene una **Demo del docente** (mini-app distinta que el docente construye en vivo): Antojitos Chapines, Adopta un Peludo, Recetario Rápido, Mi Estantería, Diario de Viajes, Foto del Día. Viven en **`demos/`** (mock-up HTML + captura real `*-app.png`), se referencian en `instrucciones-docente/`, tienen sus prompts en `prompts/prompts-demos-docente.md`, y **cada una tiene un slide "Demo del docente" en su sesión** (decisión jul-2026: sí aparecen en slides; **no** en las guías del estudiante). El laboratorio del estudiante sigue siendo la app insignia + su propia idea.
- Curso **100% en vivo** (no hay videos grabados). **Todo se crea en AI Studio; no se compila nada en local** — las carpetas de `proyectos-referencia/` son solo referencia visual.
- Guías del estudiante: tiempos como **estimado por sección** (no timestamps). Instrucciones docente: duración **por bloque** (no relojes exactos ni timestamps por paso).

## Estructura de directorios

- `guias-estudiante/` — s0-bienvenida, proyecto-1-pwa (Ruta del Café), proyecto-final-nativo (Bitácora Visual). **Fuente principal de los prompts.**
- `prompts/` — bancos de prompts por proyecto (inicial + refinamientos + personalización + rescate).
- `instrucciones-docente/` — guion sesión por sesión (README + sesion-01..10). Sesiones 5 y 10 son exámenes; 8 y 9 son charlas/mini-taller.
- `slides/` — `generar_slides.py` genera 8 `.pptx` (sesiones 1–4, 6–9). **Tema claro (paleta vino), tipografía grande**; incluye slides de **diagramas de flujo**, **estadísticas con fuente citada** y **capturas reales** de las apps (`slides/assets/*.png`). Regenerar: `uv run --with python-pptx python slides/generar_slides.py` (requiere las capturas en `slides/assets/`).
- `guias-estudiante/pdf/` — PDFs con marca vino de las 3 guías; `_build_pdfs.py` los regenera (pandoc → HTML → Chrome vía Playwright): `uv run --with playwright python guias-estudiante/_build_pdfs.py`.
- `demos/` — mini-apps del docente (mock-up HTML + `screenshots/`), compartiendo `base.css`; solo referenciadas desde `instrucciones-docente/`.
- `quiz/` — u1-pwa, u2-nativo-datos, u3-distribucion-portafolio. **Se entrega en el repo privado del docente** (no va al público).
- `examenes/` — **exámenes escritos en línea** (parcial y final), teoría + práctica, con clave y bandas + versión `-estudiante` (solo preguntas). **Repo privado.** Cada examen es **100 % escrito en línea, sin defensa**: los 100 pts (Teoría 40 % / Práctica 60 %) se convierten **íntegramente** a los 20 pts del examen. El **proyecto** se entrega en línea y se evalúa dentro de *Proyectos* con su **rúbrica de entrega** (bandas en `instrucciones-docente/sesion-05.md` y `sesion-10.md`); el Demo Day (sesión 10) es showcase, no defensa.
- `programa/` — `programa-proyectos-iii-2026.md` (fuente de verdad); `_build_docx.py` regenera el `.docx` (`uv run --with python-docx python programa/_build_docx.py`); `material-por-clase.md` (inventario/checklist por clase).
- `proyectos-referencia/` — pwa-ejemplo (Ruta del Café) y nativo-ejemplo (Bitácora Visual): referencia visual, no se compilan; cada uno con `screenshots/` de la app terminada.

## Dos repos (entregable, jul-2026)

Este directorio es el **workspace de autoría (master)** con TODO (incluye `quiz/`). El material se entrega dividido en dos repos git (siblings, creados con `rsync` desde aquí):
- `../proyectos3-facom-public` — todo **menos `quiz/`** (material, guías + PDFs, prompts, slides, demos, instrucciones docente, programa, referencias). README/CLAUDE ajustados para no mandar al alumno a `quiz/`.
- `../proyectos3-facom-private` — **quizzes** + **exámenes** (`examenes/`), ambos con claves, + README. **No hacer público.**
Para re-dividir tras editar aquí: `rsync -a --exclude '.git' --exclude 'quiz/' --exclude 'examenes/' --exclude 'guias-estudiante/pdf/_tmp/' ./ ../proyectos3-facom-public/` y copiar `quiz/` + `examenes/` al privado. **Ojo:** el README/CLAUDE del público tienen ajustes propios (quizzes/exámenes → privado); no los sobrescribas con un rsync total.

## Estado (2ª iteración, jul-2026)

Aplicadas las mejoras de un **panel de expertos** (pedagogía, UX/UI, realismo AI Studio, accesibilidad, evaluación+GT): accesibilidad enseñable (alt text, método de verificación de contraste, área táctil 44px, foco), mapeo de badges unificado a las capturas, estado de error con "Reintentar", rescate del índice compuesto de Firestore, meta mínima en el nativo §2, NavigationBar en el vocabulario, cámara/galería con equidad, diversidad regional/indígena en ejemplos, Gmail personal en `s0`, y **checklist de verificación técnica pre-clase** en `programa/material-por-clase.md`. En el sistema de diseño (`demos/base.css`) se corrigió el FAB (sobre la navbar), `--muted` a AA (#6F645B) y chips a 44px; capturas y slides regenerados. Evaluación rediseñada: examen = **100 % escrito en línea (20 pts), sin defensa** (jul-2026, decisión del docente); el **proyecto** se entrega en línea y cuenta en *Proyectos* con rúbrica de entrega (bandas); Demo Day = showcase; bitácora de prompts como entregable; cláusula de integridad académica; aviso de facturación de Cloud Run/Storage.
**3ª iteración (jul-2026):** (1) **8 apps construidas en AI Studio real** y capturadas —2 insignia (Ruta del Café PWA, Bitácora Visual nativa) + 6 demos (Antojitos, Adopta, Recetario, Mi Estantería, Diario, Foto del Día)—; capturas recortadas vía `screencapture` de la ventana de Chrome (macOS, permiso de grabación de pantalla). (2) **Capturas del flujo de AI Studio** (Build, Enable Firebase, emulador) en `guias-estudiante/img/` e insertadas en las guías; las de teléfono Android (selector USB, cámara en dispositivo) **eliminadas** (el docente no tiene teléfono). PDFs regenerados con las imágenes. (3) **Slides:** slide "Demo del docente" por sesión (con captura real), + GitHub, glosario GenAI, "cómo genera la IA", estructura de archivos/personalización manual (PWA y Android); `MUTED` de slides corregido a AA. (4) **Guías:** GitHub/glosario/overview, personalización manual + estructura de archivos, recuadro "Tu bitácora de prompts". (5) **Prompts de las 6 demos** en `prompts/prompts-demos-docente.md`. (6) **Nuevos docs:** `programa/especificacion-asignaciones.md`, `programa/material-de-apoyo-links.md`, `instrucciones-docente/clase-01-guion-video.md`, plantillas `guias-estudiante/plantilla-{ficha-tienda,caso-portafolio,pitch}.md`. (7) **Evaluación:** reafirmado sin defensa; *Proyectos* = 30 **sin** split numérico por proyecto (el docente reparte); quizzes barajados (clave sin sesgo posicional); rúbrica de bandas para Tareas/Labs; aviso de facturación en sesiones 3 y 6. (8) **NO se usa "Plan B"** en ningún archivo (el docente lo rechazó). (9) Badges corregidos en `pwa-ejemplo/README.md`; terminología unificada a "Demo del docente".

**Pendiente:** confirmar el nombre real del modelo ("Gemini 3.5 Flash") y verificar el flujo nativo (emulador; "Install on Device" solo si algún estudiante tiene teléfono) contra la UI real de AI Studio, con el checklist de `programa/material-por-clase.md`.

## Pendientes conocidos (ver `programa/material-por-clase.md`)

1. **Capturas de la UI de AI Studio** — ✅ hechas las 3 posibles y ya insertadas en las guías (`guias-estudiante/img/aistudio-build.png`, `aistudio-enable-firebase.png`, `aistudio-emulador.png`). Las que requerían **teléfono Android** (selector USB de "Install on Device", permiso de cámara en dispositivo) se **eliminaron** de las guías (el docente no tiene teléfono Android). Las capturas de las apps resultantes están en `slides/assets/`, `demos/screenshots/` (`*-app.png`), `proyectos-referencia/*/screenshots/`.
2. Probar en vivo el flujo nativo (emulador del navegador; "Install on Device" solo si algún estudiante tiene teléfono + cable USB).
3. Menor: nombres de campos/colección difieren por proyecto (coherente dentro de cada uno).
