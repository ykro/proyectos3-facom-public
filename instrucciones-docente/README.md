# Instrucciones para el docente — Proyectos III

Estas son las **instrucciones de clase sesión por sesión** para el curso **Proyectos III — Diseño de aplicaciones móviles** (Licenciatura en Comunicación y Diseño, Universidad Galileo). Docente: **Adrián Catalán**.

Cada archivo `sesion-XX.md` describe, **paso a paso**, qué hace el docente durante los **90 minutos** de la sesión: qué explicar, qué demostrar en vivo, qué prompts pegar (incluidos inline, listos para copiar), tiempos aproximados por bloque y notas pedagógicas.

## Cómo usar estas instrucciones

1. **Antes de la sesión:** lee el archivo `sesion-XX.md` completo. Ten abierto en **Chrome** todo lo que se usa ese día (Google AI Studio en modo Build; para la sesión nativa, un teléfono Android con depuración USB para "Install on Device") y prueba el flujo una vez en privado.
2. **Durante la sesión:** sigue los pasos numerados. Los tiempos son una guía para no quedarte sin minutos en el laboratorio.
3. **Los prompts** que aparecen en bloques de código son los mismos que están en las guías del estudiante (`guias-estudiante/`) y en `prompts/`. Pégalos tal cual; no hace falta retocarlos.
4. **Las slides** de cada sesión de contenido están en `slides/sesion-XX.pptx`. Proyéctalas durante el bloque de exposición.

## Mismo material para ambas secciones

El curso se imparte en **dos secciones con contenido idéntico**:

- **Sección 1 — lunes**
- **Sección 2 — miércoles**

**Usa el mismo archivo de instrucciones, las mismas slides y los mismos prompts en ambas secciones.** No hay variantes por sección. La única diferencia es la fecha del calendario. Si das primero la sección de lunes, anota cualquier ajuste de ritmo que descubras y aplícalo igual el miércoles.

## Estructura del trimestre (10 sesiones)

| Sesión | Tema | Tipo | Deck |
|--------|------|------|------|
| 1 | Introducción, UX/UI móvil y el diseñador-creador con IA | Contenido + Lab 1 | `slides/sesion-01.pptx` |
| 2 | De idea a interfaz y prototipo | Contenido + Lab 2 | `slides/sesion-02.pptx` |
| 3 | Datos y app instalable (PWA) | Contenido + Lab 3 | `slides/sesion-03.pptx` |
| 4 | Desarrollo nativo I: fundamentos con IA | Contenido + Lab 4 | `slides/sesion-04.pptx` |
| 5 | **Examen Parcial:** entrega y defensa del Proyecto 1 (PWA) | Evaluación | — |
| 6 | Desarrollo nativo II: producto real | Contenido + Lab 5 | `slides/sesion-06.pptx` |
| 7 | Desarrollo nativo III: pulido y capacidades del teléfono | Contenido + Lab 6 | `slides/sesion-07.pptx` |
| 8 | Distribución y marketing de apps (ligera, posible invitado) | Charla + mini-taller | `slides/sesion-08.pptx` |
| 9 | Portafolio, pitch y empleabilidad (ligera, posible invitado) | Charla + mini-taller | `slides/sesion-09.pptx` |
| 10 | **Examen Final / Demo Day:** defensa del Proyecto Final + portafolio + pitch | Evaluación | — |

Las sesiones **5 y 10 son exámenes** (sin deck de contenido): en sus archivos encontrarás la **rúbrica, qué pedir en la defensa y cómo dar retroalimentación**.

Las sesiones **8 y 9 son ligeras**: sus archivos traen la **estructura de charla, qué hacer si hay invitado y el guion del mini-taller**.

## Dos proyectos integradores

- **Proyecto 1 — PWA "Ruta del Café"** (semanas 1–3): guía de cafés de especialidad de Guatemala, app web instalable construida en AI Studio. Se evalúa en el Examen Parcial (sesión 5).
- **Proyecto Final — App nativa "Bitácora Visual"** (semanas 4, 6, 7): diario visual privado, app nativa Android (Kotlin + Jetpack Compose) construida en AI Studio, todo desde el navegador. Se evalúa en el Demo Day (sesión 10).

> Nota: cada sesión de contenido (1–4, 6, 7) incluye además una **"Demo rotativa"**: una mini-app distinta que el docente construye en vivo para ilustrar el concepto del día, mientras el laboratorio del estudiante sigue en el proyecto insignia y en su propia app.

En ambos, el estudiante primero reconstruye la **app de referencia** con la guía y luego aplica lo aprendido a **su propia idea de app**, que es lo que entrega.

## Convenciones del curso

- Lenguaje de la interfaz: **español de Guatemala**. Identificadores de código (campos de Firestore, nombres de colección): **inglés**.
- Usa siempre el término **"desarrollo de software asistido por IA"**. **Nunca** uses "vibe coding".
- Recuérdales la **regla de los 2 strikes**: si un prompt de corrección no funciona dos veces, regresar al último checkpoint en lugar de insistir.
- Audiencia: estudiantes de **Comunicación y Diseño, no programadores**. El valor está en el criterio de diseño y en dirigir bien a la IA, no en entender el código.

## Materiales relacionados

- `guias-estudiante/` — guías paso a paso del estudiante (fuente de los prompts).
- `prompts/` — prompts iniciales, de refinamiento y de rescate por proyecto.
- `slides/` — presentaciones de cada sesión de contenido.
- `quiz/` — quizzes de verificación por unidad.
- `proyectos-referencia/` — apps de referencia terminadas (apoyo del docente; los estudiantes las reconstruyen, no las copian).
