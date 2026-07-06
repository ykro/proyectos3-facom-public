# Proyectos III — Diseño de aplicaciones móviles

Material del curso **Proyectos III — Diseño de aplicaciones móviles**, de la **Licenciatura en Comunicación y Diseño** de la **Universidad Galileo**. Docente: **Adrián Catalán**.

Este repositorio es el **material para estudiantes**. Aquí construyes aplicaciones móviles reales **sin escribir código**, dirigiendo a la inteligencia artificial en español. **Todo se hace desde el navegador, en Google AI Studio** — tanto la app web instalable (PWA) como la app nativa de Android.

---

## De qué trata el curso

El curso es en línea, con **10 sesiones de 90 minutos**, una por semana, durante el trimestre **julio–septiembre 2026**. Hay dos secciones: **Sección 1 (lunes)** y **Sección 2 (miércoles)**.

A lo largo del trimestre construyes **dos aplicaciones móviles**:

1. **Proyecto 1 — PWA (Progressive Web App).** Una aplicación web instalable en el teléfono, construida en **Google AI Studio Build mode**. La app de referencia es **"Ruta del Café"**, una guía de cafés de especialidad de Guatemala.
2. **Proyecto Final — App nativa Android.** Una aplicación nativa construida **también en Google AI Studio** (que genera apps nativas con **Kotlin** y **Jetpack Compose**), con vista previa en el emulador integrado del navegador. La app de referencia es **"Bitácora Visual"**, un diario visual privado donde entras con Google, capturas fotos con la **cámara** del teléfono y las guardas por usuario en Firebase.

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
| **Emulador del navegador + "Install on Device"** | Ver la app nativa en un emulador de Android dentro del navegador, e instalarla en tu teléfono por USB con un clic (WebUSB), sin instalar nada. |
| **Firebase** | El backend: base de datos (**Firestore**), inicio de sesión (**Authentication** con Google Sign-In) y almacenamiento de archivos (**Storage**). AI Studio lo configura automáticamente (auto-provisioning). |
| **Cloud Run** | El servicio que publica tu PWA en internet con una dirección propia. |

No necesitas saber programar. Tu trabajo es **diseñar** la app —con criterio de UI/UX— y **dirigir a la IA** con instrucciones claras en español.

> Si necesitas una imagen (un ícono, una ilustración de marca), puedes generarla **aparte** en el **playground de AI Studio** con el modelo de imágenes **Nano Banana** —o usar una imagen propia— y luego usarla en tu app. Es un recurso opcional, separado del flujo de construir la app.

> Los prompts del curso separan siempre la **Funcionalidad (qué hace)** de la **Interfaz (UI/UX — cómo se ve y se siente)**, e incluyen prompts de **personalización de interfaz** para que hagas cada app tuya.

---

## Cómo usar este material

1. Sigue la sesión **en vivo** con el docente (el curso es en línea y en vivo; no hay videos grabados).
2. Si es tu primera vez, empieza por `guias-estudiante/s0-bienvenida-y-configuracion.md`.
3. Abre la guía del proyecto que estás trabajando:
   - `guias-estudiante/proyecto-1-pwa.md` para la PWA (semanas 1–3).
   - `guias-estudiante/proyecto-final-nativo.md` para la app nativa (semanas 4, 6, 7).
4. Copia los prompts de la guía y pégalos en AI Studio.
5. Verifica el resultado en cada paso (vista previa).
6. Cuando termines la app de referencia, ve a la sección **"Tu proyecto"** al final de cada guía y aplica lo aprendido a **tu propia idea de app**. Eso es lo que entregas.

---

## Qué hay en este repositorio

```
proyectos3-facom/
  README.md               -- Este archivo (overview del curso)
  guias-estudiante/        -- Guías paso a paso (la fuente principal: prompts listos para copiar)
  prompts/                 -- Bancos de prompts por proyecto (inicial + refinamientos + personalización)
  slides/                  -- Presentaciones del curso (.pptx), por sesión
  programa/                -- El programa del curso (temario, evaluación, cronograma)
  proyectos-referencia/    -- Cómo se ven las apps de referencia terminadas (capturas)
```

Cada carpeta tiene su propio `README.md` explicando qué contiene.

> **Este repositorio es tu material de referencia.** El docente comparte el enlace en la primera clase. Tú construyes tus apps en **Google AI Studio** desde el navegador y usas este repo como guía y apoyo.

---

## Requisitos

- Computadora con navegador web (**Chrome** recomendado).
- **Cuenta de Google (Gmail).** Si no tienes una, créala gratis en [accounts.google.com](https://accounts.google.com). Se recomienda una cuenta **personal** (las institucionales suelen bloquear estos servicios).
- Acceso a **Google AI Studio**: [aistudio.google.com](https://aistudio.google.com).
- Para el **Proyecto 1 (PWA)** eso es todo: no necesitas instalar nada.
- Para el **Proyecto Final (app nativa)** tampoco instalas nada: se construye y se ve en el navegador. Solo si quieres **probarla en un teléfono real** (recomendado para la cámara) necesitas un **teléfono Android** con **depuración por USB** activada y un **cable USB**; AI Studio la instala desde Chrome con "Install on Device".

---

## Notas importantes

- La interfaz de las aplicaciones se escribe en **español de Guatemala**. Los nombres técnicos dentro del código se mantienen en **inglés** (por ejemplo, los campos de Firestore de "Ruta del Café": `nombre`, `zona`, `categoria`, `especialidad`, `descripcion`, `imagenUrl`).
- Los prompts están diseñados para **copiarse y pegarse tal cual** en AI Studio, y separan **Funcionalidad** de **Interfaz (UI/UX)**.
- Firebase se configura **automáticamente** (auto-provisioning) desde AI Studio. No necesitas entrar a la consola de Firebase.
- Este curso usa siempre el término **"desarrollo de software asistido por IA"**. Nunca usamos el término "vibe coding".
- Las guías están también en **PDF con marca** en `guias-estudiante/pdf/`.
- **Evaluación:** combina tareas/investigaciones, laboratorios, proyectos y dos exámenes; cada examen es **100 % escrito en línea (teoría + práctica), sin defensa**. Los proyectos se entregan en línea y se evalúan dentro de *Proyectos*. El detalle está en `programa/`.
