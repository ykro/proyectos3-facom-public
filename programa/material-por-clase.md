# Material por clase — checklist de preparación

Documento de apoyo para **preparar las clases** de *Proyectos III — Diseño de aplicaciones móviles* (julio–septiembre 2026). Resume, **sesión por sesión**, qué material existe y qué hay que producir antes de dar clase. Refleja el rediseño de julio 2026:

- **Todo en Google AI Studio, desde el navegador** (PWA y app nativa Android). Sin `android` CLI, sin terminal, sin Antigravity como herramienta aparte.
- **Apps de referencia nuevas:** PWA **"Ruta del Café"** (cafés de especialidad) y nativa **"Bitácora Visual"** (diario visual privado, cámara-first).
- **Paleta única (vino):** #6D2E46 · #C84B31 · #E3B23C · #FDF6EC · #2B2B2B.
- **Prompts** con separación **Funcionalidad / Interfaz (UI/UX)** y bloques de **personalización**.
- **Modelo por defecto:** Gemini 3.5 Flash.
- Cada sesión de contenido tiene una **Demo rotativa** (mini-app distinta) para dar variedad.

---

## Resumen: qué se necesita por sesión

| Sesión | Tema | Proyecto | Deck | Guía (sección) | Prompts | Quiz | Demo rotativa |
|--------|------|----------|------|----------------|---------|------|---------------|
| 1 | Intro, UX/UI móvil, IA | PWA | `slides/sesion-01.pptx` | `proyecto-1-pwa.md` §1 | `prompts/proyecto-1` | — | Antojitos Chapines |
| 2 | Idea → interfaz y prototipo | PWA | `sesion-02.pptx` | §2 + Personalización | " | — | Adopta un Peludo |
| 3 | Datos y PWA instalable | PWA | `sesion-03.pptx` | §3 | " | `u1-pwa` | Recetario Rápido |
| 4 | Nativo I: fundamentos en AI Studio | Nativa | `sesion-04.pptx` | `proyecto-final-nativo.md` §1 | `prompts/proyecto-final` | — | Mi Estantería |
| 5 | **Examen Parcial** (escrito en línea + entrega PWA) | PWA | — | — | — | — | — |
| 6 | Nativo II: login y datos por usuario | Nativa | `sesion-06.pptx` | §2 | " | — | Diario de Viajes |
| 7 | Nativo III: cámara y pulido | Nativa | `sesion-07.pptx` | §3 + Personalización | " | `u2-nativo` | Foto del Día |
| 8 | Distribución y marketing | — | `sesion-08.pptx` | — | — | `u3` | — (mini-taller) |
| 9 | Portafolio, pitch, empleabilidad | — | `sesion-09.pptx` | — | — | `u3` | — (mini-taller) |
| 10 | **Examen Final / Demo Day** | Nativa | — | — | — | — | — |

> Las sesiones 5 y 10 son exámenes **escritos en línea** (sin deck, sin defensa). Las 8 y 9 son ligeras (charla + mini-taller). La rúbrica del examen y la rúbrica de entrega del proyecto están en `instrucciones-docente/sesion-05.md` y `sesion-10.md`.

---

## Detalle por sesión

Para cada sesión, el guion paso a paso (con tiempos por bloque) está en `instrucciones-docente/sesion-XX.md`.

### Sesión 1 — Introducción, UX/UI móvil y el diseñador-creador con IA
- **Listo:** deck, guía PWA §1 (prompt inicial con split Funcionalidad/Interfaz), instrucciones docente, demo rotativa "Antojitos Chapines".
- **Preparar:** cuenta de Google + AI Studio abierto; crear una app vacía antes de clase para medir la latencia; tener listas las capturas de "entrar a Build".
- **Tareas que se asignan:** Tarea 1 (investigación UI/UX móvil), Laboratorio 1 (primera app + un refinamiento).

### Sesión 2 — De idea a interfaz y prototipo
- **Listo:** deck, guía PWA §2 (filtro, detalle) + sección Personalización de interfaz, demo "Adopta un Peludo" (usa **Nano Banana**).
- **Preparar:** probar Nano Banana antes de clase; capturas de filtro/detalle y del modo de anotación.
- **Tareas:** Tarea 2 (identidad visual), Laboratorio 2 (prototipo con identidad propia).

### Sesión 3 — Datos y app instalable (PWA)
- **Listo:** deck, guía PWA §3 (Firestore + formulario + PWA), demo "Recetario Rápido", quiz `u1`.
- **Preparar:** probar el flujo "Enable Firebase" (auto-provisioning) y el deploy a Cloud Run; capturas del aviso de Firebase y de "Instalar PWA".
- **Tareas:** Tarea 3 (modelo de datos), Laboratorio 3 (PWA con datos, instalable). Recordar Examen Parcial (sesión 5).

### Sesión 4 — Desarrollo nativo I: fundamentos en AI Studio
- **Listo:** deck, guía nativa §1 (crear app nativa en AI Studio, emulador del navegador, Install on Device), demo "Mi Estantería".
- **Preparar (clave):** verificar en vivo que AI Studio genera **app nativa (Kotlin/Compose)** y que el **emulador del navegador** + **"Install on Device"** funcionan; tener un **teléfono Android** (modo desarrollador + depuración USB) y **cable USB** para demostrar la instalación.
- **Tareas:** Tarea 4 (PWA vs nativo), Laboratorio 4 (app nativa con la galería/bitácora base).

### Sesión 5 — Examen Parcial escrito en línea + entrega del Proyecto 1 (PWA)
- **Listo:** rúbrica del examen escrito y rúbrica de entrega del Proyecto 1 en `instrucciones-docente/sesion-05.md`.
- **Preparar:** que lleguen con la **URL de su PWA publicada (Ruta del Café / su idea)** y su bitácora de prompts.

### Sesión 6 — Desarrollo nativo II: login y datos por usuario
- **Listo:** deck, guía nativa §2 (login Google, Firestore por usuario, Storage), demo "Diario de Viajes", + Investigación 1 (reglas de seguridad).
- **Preparar:** probar login con Google y subida a Storage en privado (latencia); tener respaldo por si el login falla en vivo.
- **Tareas:** Investigación 1, Laboratorio 5. Sugerir quiz `u2`.

### Sesión 7 — Desarrollo nativo III: cámara y pulido de marca
- **Listo:** deck, guía nativa §3 (cámara, ícono, splash) + Personalización, demo "Foto del Día", quiz `u2`.
- **Preparar:** **teléfono físico** para demostrar la cámara (con "Install on Device"); capturas del permiso de cámara y del ícono/splash. Cierra el desarrollo del Proyecto Final.
- **Tareas:** Laboratorio 6.

### Sesión 8 — Distribución y marketing (ligera, posible invitado)
- **Listo:** deck, estructura de charla + mini-taller de store listing en `instrucciones-docente/sesion-08.md`, quiz `u3`.
- **Preparar:** las capturas para el store listing salen de la **vista previa** (no de un CLI). Si hay invitado, coordinar.
- **Tareas:** Tarea 5 (estrategia de distribución).

### Sesión 9 — Portafolio, pitch y empleabilidad (ligera, posible invitado)
- **Listo:** deck, mini-taller de caso de portafolio + pitch, quiz `u3`.
- **Preparar:** ejemplos de pitch; ensayo general del Demo Day.

### Sesión 10 — Examen Final escrito en línea + Demo Day (showcase/entrega del Proyecto Final)
- **Listo:** rúbrica y guion en `instrucciones-docente/sesion-10.md`.
- **Preparar:** que lleguen con **Bitácora Visual (o su idea)** en el emulador del navegador **o instalada en el teléfono (Install on Device)**, login + cámara probados, pitch listo, capturas de respaldo.

---

## Qué falta (para dejar todo listo antes de arrancar)

Ordenado por prioridad:

1. **Capturas de pantalla reales (alta prioridad).** Todas las guías traen marcadores `[Captura: ...]` como *placeholder*; no hay imágenes. Con el cambio de herramienta hay que capturarlas en la **UI actual de AI Studio**. Prioridad:
   - `s0`: entrar a Build, panel chat/preview, **"Install on Device"** + selector USB de Chrome.
   - Guía PWA: crear app, primera versión de "Ruta del Café", aviso **"Enable Firebase"**, opción de instalar PWA.
   - Guía nativa: crear app nativa, **emulador del navegador**, **Install on Device**, pantalla de login, permiso y captura de **cámara**.
2. **Slides `.pptx`** — ya regenerados desde `slides/generar_slides.py` (`uv run --with python-pptx python slides/generar_slides.py`). ✅
3. **`.docx` del programa** — ya **regenerado** en `programa/programa-proyectos-iii-2026.docx` desde `programa/_build_docx.py` (rutas ya apuntan a este repo). El `.docx` viejo `propuesta programa-...docx` queda superseded. Fuente de verdad: el markdown `programa/programa-proyectos-iii-2026.md`. ✅
4. **Verificar en vivo el flujo nativo en AI Studio.** La construcción nativa (Kotlin/Compose), el emulador del navegador y "Install on Device" (WebUSB) son funciones recientes (I/O 2026, mayo). Confirmar que se comportan como describe el material y tener el teléfono + cable listos para las sesiones 4, 6 y 7.
5. **Cuentas y accesos.** Confirmar que AI Studio (gratis), Firebase (auto-provisioning) y Cloud Run están disponibles para las cuentas de los estudiantes; revisar cualquier costo de Cloud Run.
6. **Pendiente menor de consistencia.** Los nombres de campos/colección difieren por proyecto (PWA en español: `cafeterias`/`nombre`; nativa: `entradas`/`titulo`,`nota`). Es coherente dentro de cada proyecto; documentado aquí por si se quiere unificar el criterio.

---

## Checklist de verificación técnica pre-clase (obligatorio)

Como varias funciones del flujo nativo son recientes, **prueba en vivo con una cuenta real ANTES** de cada sesión técnica. (Estos son pasos de verificación, no un proyecto alterno.)

**Antes de la sesión 3 (PWA / Firestore):**
- [ ] Con **Gmail personal** (no institucional), construir "Ruta del Café" completa.
- [ ] "Enable Firebase" → los datos aparecen vía `onSnapshot`; crear un registro se refleja **sin recargar**.
- [ ] Deploy a **Cloud Run** end-to-end: ¿pide **facturación/tarjeta**? Medir latencia. Confirmar que "Instalar PWA" aparece bajo HTTPS.

**Antes de la sesión 4 (nativo — el gran desconocido):**
- [ ] Confirmar que AI Studio **genera proyecto nativo Kotlin/Compose** (no una web disfrazada).
- [ ] El **emulador de Android del navegador** carga y renderiza el grid.
- [ ] **"Install on Device"** (WebUSB) con teléfono + cable de datos reales: ¿instala y abre? Probar en al menos un teléfono.

**Antes de la sesión 6 (login + datos + Storage):**
- [ ] **Google Sign-In en teléfono físico** (no solo emulador): verificar que no da error de `SHA-1` / `DEVELOPER_ERROR (code 10)`.
- [ ] "Enable Firebase" habilita **Storage** (no solo Firestore/Auth); subir una foto real y obtener su `downloadURL`.
- [ ] Provocar y resolver el **índice compuesto** de Firestore (filtrar por `uid` + `orderBy fecha`): capturar el rescate.
- [ ] Probar con **dos cuentas** que cada `uid` ve solo lo suyo (valida las reglas de seguridad).

**Antes de la sesión 7 (cámara):**
- [ ] Permiso de cámara en runtime + captura + subida, en teléfono físico.
- [ ] Nano Banana genera un ícono usable; el ícono adaptativo y el splash se ven instalados.

**Transversal:** ten a mano **2 teléfonos Android** de distinto fabricante, un **cable de datos** verificado, y confirma en pantalla el **nombre del modelo por defecto** de AI Studio antes de sacar capturas.

---

> **Notas del docente:** el curso es **100% en vivo** (no hay videos grabados que actualizar). **Todas las apps se crean en AI Studio, desde el navegador** — no hay que compilar nada en local. Las carpetas de `proyectos-referencia/` son **referencia visual** de cómo queda la app terminada (apoyo docente); no se compilan ni se corren localmente. El esqueleto nativo mantiene un nombre de paquete ilustrativo (`com.example.portafoliocreativo`), sin efecto en el curso.

---

## Convenciones vigentes (recordatorio para el docente)

- Herramienta única: **Google AI Studio** (Build), todo en el navegador. No decir "Antigravity" ni usar `android` CLI/terminal.
- **Nunca** decir "vibe coding": siempre **"desarrollo de software asistido por IA"**.
- Prompts con **Funcionalidad / Interfaz** separadas y bloques de **personalización de interfaz**.
- Regla de los **2 strikes**; **checkpoints** antes de cambios grandes; **modo de anotación** y **View diff** para depurar.
- Interfaz en **español (Guatemala)**; identificadores de código en inglés.
- **Material 3** se enseña como *vocabulario de diseño* (componentes), no como programación en Compose.
