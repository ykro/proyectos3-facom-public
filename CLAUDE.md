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
- Cada sesión de contenido (1,2,3,4,6,7) tiene una **Demo rotativa** (mini-app distinta que el docente construye en vivo): Antojitos Chapines, Adopta un Peludo, Recetario Rápido, Mi Estantería, Diario de Viajes, Foto del Día. El laboratorio del estudiante sigue siendo la app insignia + su propia idea.
- Curso **100% en vivo** (no hay videos grabados). **Todo se crea en AI Studio; no se compila nada en local** — las carpetas de `proyectos-referencia/` son solo referencia visual.
- Guías del estudiante: tiempos como **estimado por sección** (no timestamps). Instrucciones docente: duración **por bloque** (no relojes exactos ni timestamps por paso).

## Estructura de directorios

- `guias-estudiante/` — s0-bienvenida, proyecto-1-pwa (Ruta del Café), proyecto-final-nativo (Bitácora Visual). **Fuente principal de los prompts.**
- `prompts/` — bancos de prompts por proyecto (inicial + refinamientos + personalización + rescate).
- `instrucciones-docente/` — guion sesión por sesión (README + sesion-01..10). Sesiones 5 y 10 son exámenes; 8 y 9 son charlas/mini-taller.
- `slides/` — `generar_slides.py` genera 8 `.pptx` (sesiones 1–4, 6–9). Regenerar: `uv run --with python-pptx python slides/generar_slides.py`.
- `demos/` — mini-apps que el docente construye en vivo (mock-ups HTML + capturas), referenciadas desde `instrucciones-docente/`.
- Los **quizzes** (u1-pwa, u2-nativo-datos, u3-distribucion-portafolio) y los **exámenes escritos** (parcial y final, teoría + práctica, con claves) viven en el **repositorio privado del docente**, no en este repo público. Aquí quedan las **rúbricas de defensa** (`instrucciones-docente/sesion-05.md`, `sesion-10.md`).
- `programa/` — `programa-proyectos-iii-2026.md` (fuente de verdad); `_build_docx.py` regenera el `.docx` (`uv run --with python-docx python programa/_build_docx.py`); `material-por-clase.md` (inventario/checklist por clase).
- `proyectos-referencia/` — pwa-ejemplo (Ruta del Café) y nativo-ejemplo (Bitácora Visual): referencia visual, no se compilan.

## Pendientes conocidos (ver `programa/material-por-clase.md`)

1. **Capturas de pantalla reales** — los `[Captura: ...]` son placeholders; producir en la UI actual de AI Studio (único gran pendiente).
2. Probar en vivo el flujo nativo (emulador del navegador + Install on Device son de mayo 2026) con teléfono + cable USB.
3. Menor: nombres de campos/colección difieren por proyecto (coherente dentro de cada uno).
