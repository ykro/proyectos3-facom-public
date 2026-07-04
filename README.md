# Proyectos III — Diseño de aplicaciones móviles

Material completo del curso **Proyectos III — Diseño de aplicaciones móviles**, de la **Licenciatura en Comunicación y Diseño** de la **Universidad Galileo**. Docente: **Adrián Catalán**.

Audiencia: estudiantes de **Comunicación y Diseño**, **no programadores**. En este curso construyen aplicaciones móviles reales **sin escribir código**, dirigiendo a la inteligencia artificial en español. **Todo se hace desde el navegador, en Google AI Studio** — tanto la app web instalable (PWA) como la app nativa de Android.

---

## De qué trata el curso

El curso es en línea, con **10 sesiones de 90 minutos**, una por semana, durante el trimestre **julio–septiembre 2026**. Hay dos secciones: **Sección 1 (lunes)** y **Sección 2 (miércoles)**.

A lo largo del trimestre construyes **dos aplicaciones móviles**:

1. **Proyecto 1 — PWA (Progressive Web App).** Una aplicación web instalable en el teléfono, construida en **Google AI Studio Build mode**. La app de referencia es **"Ruta del Café"**, una guía de cafés de especialidad de Guatemala.
2. **Proyecto Final — App nativa Android.** Una aplicación nativa construida **también en Google AI Studio** (que genera apps nativas con **Kotlin** y **Jetpack Compose**), con vista previa en el emulador integrado del navegador. La app de referencia es **"Bitácora Visual"**, un diario visual privado donde entras con Google, capturas fotos que te inspiran con la **cámara** del teléfono y las guardas por usuario en Firebase.

En ambos proyectos sigues primero la guía con la **app de referencia** y luego aplicas lo aprendido a **tu propia idea de app**, que es lo que entregas y se evalúa.

> **Simetría del curso:** la PWA es un **catálogo público que se navega**; la app nativa es una **herramienta privada que captura** con el teléfono (cámara + datos por usuario). Cada proyecto muestra para qué sirve cada formato.

---

## Estructura del curso

| Proyecto | Semanas | Se evalúa en | App de referencia | Qué aprendes |
|----------|---------|--------------|-------------------|--------------|
| **Proyecto 1 (PWA)** | 1–3 | Examen Parcial (semana 5) | Ruta del Café | Diseñar la interfaz con criterio de UI/UX, darle identidad visual, conectar datos en Firestore y hacer la app instalable como PWA en el teléfono. |
| **Proyecto Final (nativa)** | 4, 6, 7 | Examen Final / Demo Day (semana 10) | Bitácora Visual | Crear una app nativa Android en AI Studio, verla en el emulador del navegador e instalarla en el teléfono, construir la interfaz con Jetpack Compose, agregar login con Google, datos privados por usuario y captura con la cámara. |

> *Las semanas 5, 8 y 9 se dedican al examen parcial, asesorías de proyecto y preparación del Demo Day. Consulta el `programa/` para el detalle sesión por sesión.*

---

## Herramientas que vas a usar

| Herramienta | Para qué sirve |
|-------------|----------------|
| **Google AI Studio Build mode** | Construir **la PWA y la app nativa de Android** desde el navegador. Genera apps React + Tailwind (web) y Kotlin + Jetpack Compose (nativa). Modelo por defecto: **Gemini 3.5 Flash**. |
| **AI Chips** (Nano Banana, etc.) | Agregar servicios de Google sin configuración (por ejemplo, generar imágenes con Nano Banana). |
| **Emulador del navegador + "Install on Device"** | Ver la app nativa en un emulador de Android dentro del navegador, e instalarla en tu teléfono por USB con un clic (WebUSB), sin instalar nada. |
| **Firebase** | El backend: base de datos (**Firestore**), inicio de sesión (**Authentication** con Google Sign-In) y almacenamiento de archivos (**Storage**). AI Studio lo configura automáticamente (auto-provisioning). |
| **Cloud Run** | El servicio que publica tu PWA en internet con una dirección propia. |

No necesitas saber programar. Tu trabajo es **diseñar** la app —con criterio de UI/UX— y **dirigir a la IA** con instrucciones claras en español.

> Los prompts del curso separan siempre la **Funcionalidad (qué hace)** de la **Interfaz (UI/UX — cómo se ve y se siente)**, e incluyen prompts de **personalización de interfaz** para que hagas cada app tuya.

---

## Cómo usar este material

### Para estudiantes

1. Sigue la sesión **en vivo** con el docente (el curso es en línea y en vivo; no hay videos grabados).
2. Si es tu primera vez, empieza por `guias-estudiante/s0-bienvenida-y-configuracion.md`.
3. Abre la guía del proyecto que estás trabajando:
   - `guias-estudiante/proyecto-1-pwa.md` para la PWA (semanas 1–3).
   - `guias-estudiante/proyecto-final-nativo.md` para la app nativa (semanas 4, 6, 7).
4. Copia los prompts de la guía y pégalos en AI Studio.
5. Verifica el resultado en cada paso (vista previa).
6. Cuando termines la app de referencia, ve a la sección **"Tu proyecto"** al final de cada guía y aplica lo aprendido a **tu propia idea de app**. Eso es lo que entregas.
7. El docente aplica un breve **quiz de verificación** al cerrar cada unidad, y los **exámenes escritos en línea** (parcial y final, teoría + práctica; **100 % escritos, sin defensa**). Los quizzes y los exámenes —con sus claves— viven en el **repositorio privado del docente**; en este repo público están las **rúbricas del examen y de entrega del proyecto** (en `instrucciones-docente/`) y las guías del estudiante.

### Para el docente

- El detalle sesión por sesión está en `programa/` y en `instrucciones-docente/`.
- Las guías de `guias-estudiante/` son la fuente principal: cada una tiene los prompts inlineados, listos para copiar y pegar en clase.
- Cada sesión de contenido incluye una **"Demo rotativa"**: una mini-app distinta que el docente construye en vivo para ilustrar el concepto del día, para dar variedad sin perder profundidad.
- Las presentaciones están en `slides/`.
- Los proyectos de referencia terminados (Ruta del Café y Bitácora Visual) están en `proyectos-referencia/` solo como apoyo; los estudiantes no los copian, los reconstruyen con la IA.
- Las notas pedagógicas, rúbricas y guías de evaluación están en `instrucciones-docente/`.

---

## Estructura de directorios

```
proyectos3-facom/
  README.md                    -- Este archivo (overview del curso)
  programa/                    -- Programa del curso, sesion por sesion
  guias-estudiante/            -- Guias paso a paso para los estudiantes
    s0-bienvenida-y-configuracion.md
    proyecto-1-pwa.md          -- PWA "Ruta del Cafe" (semanas 1-3)
    proyecto-final-nativo.md   -- App nativa "Bitacora Visual" (semanas 4, 6, 7)
  prompts/                     -- Prompts (inicial + refinamientos + personalizacion + rescate) por proyecto
  demos/                       -- Mini-apps que el docente construye en vivo (mock-ups + capturas)
  slides/                      -- Presentaciones de cada sesion
  proyectos-referencia/        -- Apps de referencia terminadas (apoyo, no las copian)
  instrucciones-docente/       -- Notas pedagogicas, rubricas y evaluacion
```

---

## Requisitos para estudiantes

- Computadora con navegador web (**Chrome** recomendado).
- **Cuenta de Google (Gmail).** Si no tienes una, créala gratis en [accounts.google.com](https://accounts.google.com).
- Acceso a **Google AI Studio**: [aistudio.google.com](https://aistudio.google.com).
- Para el **Proyecto 1 (PWA)** eso es todo: no necesitas instalar nada.
- Para el **Proyecto Final (app nativa)** tampoco instalas nada: se construye y se ve en el navegador. Solo si quieres **probarla en un teléfono real** (recomendado para la cámara) necesitas un **teléfono Android** con el **modo de desarrollador** y la **depuración por USB** activados y un **cable USB**; AI Studio la instala desde Chrome con "Install on Device".

---

## Notas importantes

- La interfaz de las aplicaciones se escribe en **español de Guatemala**. Los nombres técnicos dentro del código se mantienen en **inglés** (por ejemplo, los campos de Firestore de "Ruta del Café": `nombre`, `zona`, `categoria`, `especialidad`, `descripcion`, `imagenUrl`).
- Los prompts están diseñados para **copiarse y pegarse tal cual** en AI Studio, y separan **Funcionalidad** de **Interfaz (UI/UX)**.
- Firebase se configura **automáticamente** (auto-provisioning) desde AI Studio. No necesitas entrar a la consola de Firebase.
- Este curso usa siempre el término **"desarrollo de software asistido por IA"**. Nunca usamos el término "vibe coding".
