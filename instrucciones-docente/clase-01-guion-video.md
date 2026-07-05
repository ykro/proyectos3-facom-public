# Clase 1 (Sesión 1) — Guion de grabación en video

**Curso:** Proyectos III — Diseño de aplicaciones móviles (Universidad Galileo)
**Docente:** Adrián Catalán · **Audiencia:** diseñadores, no programadores
**Deck:** `slides/sesion-01.pptx` · **Guías del alumno:** `guias-estudiante/s0-bienvenida-y-configuracion.md`, `guias-estudiante/proyecto-1-pwa.md`
**Demo del docente:** "Antojitos Chapines" (ver `demos/antojitos-chapines.html` y `demos/screenshots/antojitos-chapines.png`)
**Duración objetivo del video:** ~35–50 min (versión condensada, sin tiempos muertos ni laboratorio en vivo)

> **Por qué existe este video.** El curso tiene dos secciones (lunes y miércoles) con contenido idéntico. El docente imparte **una** sección en vivo y graba este video para la otra. El video **no** dura 90 minutos: condensa la clase, corta esperas de generación y **omite** el acompañamiento en vivo del laboratorio (eso lo hace el estudiante por su cuenta con la guía).

---

## 1. Objetivo del video

Que el estudiante que lo ve, **sin haber estado en la clase en vivo**, logre:

1. Entender de qué trata el curso y la promesa central: **construir apps móviles reales sin escribir código, dirigiendo a la IA en español** (esto se llama **"desarrollo de software asistido por IA"**, nunca "vibe coding").
2. Conocer los **dos proyectos** del trimestre (PWA "Ruta del Café" y app nativa "Bitácora Visual") y cómo se evalúan.
3. Reconocer los **principios de UX/UI móvil** (mobile-first, una columna, jerarquía, área táctil ~44px, contraste, estados) y los **patrones** (tarjetas, filtro, detalle, navegación).
4. Ubicarse en **Google AI Studio (modo Build)** desde el navegador y entender que la **misma** herramienta genera la PWA y la nativa.
5. Ver **de principio a fin** cómo un solo **prompt inicial detallado** —con **Funcionalidad / Interfaz** separadas— produce una app real (demo "Antojitos Chapines"), y cómo se **refina un cambio a la vez** con checkpoint y View diff.
6. Saber exactamente **qué hacer después**: configurar su cuenta (guía s0) y arrancar el **Laboratorio 1** con el prompt de "Ruta del Café".

Al terminar el video, el estudiante debe sentirse capaz de abrir AI Studio y pegar su primer prompt.

---

## 2. Setup de grabación

**Qué se muestra en pantalla (dos fuentes que alternas):**
- **Slides** (`slides/sesion-01.pptx`) en pantalla completa para los bloques conceptuales.
- **Google AI Studio en vivo** (Chrome, `aistudio.google.com`, modo Build) para la demo.

**Pantalla y video:**
- Resolución de grabación **1920×1080 (1080p)**; graba a pantalla completa, no una ventana pequeña.
- En AI Studio, usa el navegador **maximizado** y sube el **zoom del navegador a ~110–125%** (Ctrl/Cmd +) para que el texto del prompt y los botones se lean en video.
- Cuando pegues un prompt largo, **hazlo visible**: mantén el panel de chat lo bastante ancho para que se lea, o muestra el prompt también desde la guía/un documento antes de pegarlo.

**Audio:**
- Micrófono dedicado (no el de la laptop). Prueba niveles antes de grabar; ambiente en silencio.
- Habla claro y con energía; recuerda que no hay preguntas del público que rompan el ritmo.

**Cómo alternar entre slide y navegador:**
- Ten el **deck** y **Chrome (AI Studio)** ya abiertos antes de grabar, en escritorios/ventanas distintos, para cambiar con un atajo (Alt/Cmd+Tab o Mission Control) sin buscar ventanas en cámara.
- Anuncia el cambio de contexto en voz ("pasemos a AI Studio…") para que el corte no sea brusco.

**Privacidad (obligatorio, ver también §6):**
- **Usa una cuenta de Google de demostración**, no tu cuenta personal ni institucional.
- Antes de grabar: cierra pestañas ajenas, oculta la barra de marcadores, silencia notificaciones del sistema y del navegador, sal de sesiones de correo/mensajería.
- No muestres en pantalla: correos, nombres de proyectos ajenos, claves/API keys (Secrets), ni datos de otras personas.

---

## 3. Guion por segmentos

> Los tiempos son **estimados** de la versión condensada. La numeración de slides sigue el orden real del deck `sesion-01.pptx`.
>
> **Mapa de slides (sesión 1):** 1 Portada · 2 Agenda · 3 Desarrollo de software asistido por IA · 4 Dos proyectos · 5 Panorama de herramientas · 6 Principios de UX/UI móvil · 7 Diagrama "Cómo se dirige a la IA" · 8 Estadísticas "Por qué móvil y por qué ahora" · 9 Pantalla "Tu primera app: Ruta del Café" · 10 Laboratorio 1 · 11 Cierre y tareas.

| # | Duración | Qué mostrar | Qué decir / hacer |
|---|----------|-------------|-------------------|
| **A. Bienvenida y encuadre** | ~4 min | Slides 1–2 (portada + agenda) | Preséntate. Aclara que ambas secciones ven el **mismo** material y que este es el **video de la clase 1**. Da la promesa central: *"Van a construir apps móviles reales sin escribir código, dirigiendo a la IA en español. Su fortaleza —diseño, UX, identidad visual, narrativa— es justo lo que se necesita para dirigir bien a la IA."* Recorre la agenda en 30 s. |
| **B. La idea central** | ~3 min | Slide 3 (Desarrollo de software asistido por IA) | Fija el término correcto desde el primer minuto: **"desarrollo de software asistido por IA"**, y di explícitamente que en este curso **no** decimos "vibe coding". Refuerza que el criterio de diseño del estudiante es lo que dirige a la IA. |
| **C. Los dos proyectos** | ~3 min | Slide 4 (Dos proyectos) | Presenta **Proyecto 1 (PWA) "Ruta del Café"** —guía de cafés de especialidad de GT, semanas 1–3, se evalúa en el **Examen Parcial (sesión 5)**— y **Proyecto Final (nativa) "Bitácora Visual"** —diario visual privado, semanas 4/6/7, **Demo Day (sesión 10)**. Menciona la **simetría**: la PWA es un **catálogo público que se navega**; la nativa es una **herramienta privada que captura** con el teléfono. Aclara que en cada proyecto reconstruyen la app de referencia y luego aplican lo aprendido a **su propia idea** (eso entregan). |
| **D. Panorama de herramientas** | ~4 min | Slide 5 (Panorama) | **Google AI Studio (modo Build)**: todo desde el navegador (Chrome). La **misma** herramienta genera la PWA (React) y la nativa (Kotlin + Jetpack Compose). Menciona **Firebase** (Firestore, Authentication, Storage), **Cloud Run** para publicar y **AI Chips (Nano Banana)**. Recalca: **todo es gratis, solo se necesita una cuenta de Google**, y el modelo por defecto es **Gemini 3.5 Flash**. Nota de privacidad: aquí puedes mostrar la pantalla de inicio de AI Studio (con la cuenta de demo). |
| **E. Principios de UX/UI móvil** | ~6 min | Slide 6 (Principios) + Slide 7 (Diagrama) | Explica **mobile-first**: pantalla pequeña, una columna, jerarquía clara, **áreas táctiles ~44px**, contraste suficiente. Enumera los **patrones**: tarjetas (cards), filtros, vista de detalle, navegación, y los **estados** (vacío, cargando, error). Cierra con **"diseñar para el pulgar"**. Conecta cada patrón con "Ruta del Café". Con el diagrama (slide 7) enseña el **flujo de trabajo**: **Prompt inicial → Vista previa → Refinar (un cambio) → Checkpoint**, y menciona **View diff** y la **regla de los 2 strikes**. |
| **F. Por qué móvil, por qué ahora** | ~2 min | Slide 8 (Estadísticas) | Da 2–3 datos con su fuente citada en el slide (tráfico móvil mundial, conexiones móviles en Guatemala, adopción de IA en diseño/desarrollo). Úsalos para justificar por qué vale la pena aprender esto ahora. No te detengas mucho. |
| **G. Puente a la demo** | ~1 min | Slide 9 (Tu primera app: Ruta del Café) | Muestra a dónde llegan: una app con encabezado, filtro por categoría y tarjetas. Anuncia: *"Para la demo voy a construir una app distinta —Antojitos Chapines— para que vean la técnica; su laboratorio será Ruta del Café."* Cambia a AI Studio. |
| **H. Demo en vivo: primera app (Antojitos Chapines)** | ~12–16 min | **AI Studio en vivo** | Ver el guion detallado de la demo en el bloque de abajo. Es el corazón del video. |
| **I. Arranque del Proyecto 1** | ~3 min | AI Studio + Slide 10 (Laboratorio 1) | Muestra el **prompt inicial de "Ruta del Café"** (Paso 2 de `proyecto-1-pwa.md`) en pantalla y explica que es el **mismo patrón** de la demo, cambiando el tema. Deja claro que el estudiante hará **su** laboratorio con ese prompt. No hace falta esperar a que genere en el video: puedes mostrar la captura del resultado (slide 9 / `slides/assets/`) y decir "esto es lo que deben obtener". |
| **J. Cierre y tareas** | ~2 min | Slide 11 (Cierre) | Recapitula: **prompt inicial detallado → vista previa → refinar un cambio → checkpoint → View diff**, y la regla de 2 strikes. Asigna Tarea 1 y Laboratorio 1 (ver §4). Adelanta la sesión 2 (identidad visual, filtro, vista de detalle y AI Chips). Despídete. |

### Guion detallado del bloque H — Demo "Antojitos Chapines"

> **Concepto:** menú de antojitos típicos de Guatemala con tarjetas (nombre, precio, lugar, tipo). Sirve para enseñar el **prompt inicial detallado**, las **tarjetas (cards)** y la **identidad visual**. Reconstrúyela en vivo; no copies el mock-up tal cual.

1. **Abre AI Studio → Build → app nueva.** Muestra el **panel de chat** (izquierda) y la **vista previa** (derecha). Nombra las pestañas **Code**, **View diff** y el botón de **checkpoint**. (~1 min)

2. **Antes de enviar, lee en voz alta las partes clave del prompt:** React + Tailwind, la separación **Funcionalidad / Interfaz**, los datos de ejemplo con campos definidos, las tarjetas, y la **paleta con hexadecimales exactos**. Deja el prompt visible en pantalla y pégalo. Este es el **prompt inicial** de la demo:

   ```
   Crea una aplicación web usando React con Tailwind CSS llamada "Antojitos Chapines", un menú de antojitos típicos de Guatemala. Toda la interfaz debe estar en español (Guatemala). Quiero una UI/UX de altísima calidad, mobile-first, con jerarquía visual clara y aire generoso.

   **Funcionalidad (qué hace):**
   - Muestra una lista de antojitos en tarjetas. Genera 8 antojitos de ejemplo dentro de la app (aún no conectamos base de datos). Cada antojito tiene exactamente estos campos:
     - nombre (texto): el nombre del antojito (ejemplos: rellenitos, tostadas, chuchitos, elotes locos, atol de elote).
     - precio (texto): precio corto (ejemplo: "Q15").
     - lugar (texto): dónde conseguirlo (ejemplo: "Mercado Central, Zona 1").
     - tipo (texto): uno de estos cuatro: "Dulce", "Salado", "Bebida", "Callejero".
   - Que los antojitos sean variados: distintos tipos, precios y lugares.

   **Interfaz (UI/UX — cómo se ve y se siente):**
   - Layout y jerarquía: un encabezado (header) con el nombre "Antojitos Chapines" y el subtítulo "Sabores de Guatemala". Debajo, una cuadrícula de tarjetas.
   - Componentes — tarjeta (card), de arriba hacia abajo: una imagen de placeholder; luego el nombre en negrita como elemento dominante; el precio destacado; el lugar con un ícono de ubicación; y una etiqueta (badge) de color con el tipo.
   - Color (paleta de marca, cálida): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Usa el color con propósito, no para decorar.
   - Tipografía y espaciado: títulos con carácter editorial; cuerpo legible; espaciado en grid de 8px con aire generoso entre tarjetas.
   - Estados: incluye un estado vacío amable por si la lista queda sin datos.
   - Microinteracciones: bordes redondeados, sombra suave y hover sutil (elevación + sombra, transición 250ms).
   - Accesibilidad: contraste AA, áreas táctiles cómodas. Responsive: 1 columna en teléfono, 2–3 en pantallas grandes.

   **Estructura del código:**
   - Separa la app en componentes (por ejemplo: Header, ListaAntojitos, TarjetaAntojito). No pongas todo en un solo archivo.
   - Agrega comentarios en cada componente con el formato:
     // CONCEPTO: [nombre del concepto]
     // QUE HACE: [descripción breve]
     // POR QUE: [razón]
   ```

3. **Mientras genera (1–2 min):** explica **por qué el prompt funciona** — separa **Funcionalidad** (datos con campos definidos) de **Interfaz** (jerarquía y paleta con hexadecimales exactos) y es específico en tecnologías y estructura. Menciona que AI Studio usa **Gemini 3.5 Flash** por defecto. **En el video, corta la espera** (edición o pausa de grabación): no dejes silencios largos. Al retomar, abre la pestaña **Code** y di: *"todo esto salió de un solo prompt; no escribimos ni una sola línea."* (~2 min de contenido, espera recortada)

4. **Revisa la vista previa:** encabezado "Antojitos Chapines" y las 8 tarjetas. Crea un **checkpoint** y compáralo con "guardar la partida en un videojuego". (~1 min)

5. **Refinamiento en vivo (un cambio a la vez):** aplica el sistema de color por tipo. Es casi puro **Interfaz**. Muestra y pega:

   ```
   **Qué construimos:** el sistema de color por tipo, para que cada antojito se lea de un vistazo.

   **Interfaz (UI/UX):**
   - A la etiqueta (badge) de tipo dale un color distinto según el tipo: "Dulce" #C84B31, "Salado" #6D2E46, "Bebida" #E3B23C (con texto oscuro #2B2B2B para que se lea), "Callejero" #4F772D. El resto del texto del badge en blanco. Bordes redondeados y padding horizontal cómodo.
   - Agrega un poco de padding dentro de cada tarjeta para que respire y afina el efecto hover (transición 250ms, sombra un poco más marcada).
   ```

6. **Usa View diff** para mostrar exactamente qué cambió la IA. Refuerza **un cambio a la vez** y la **regla de los 2 strikes**. (~2 min)

7. **Cierra la demo resaltando en voz alta (dilo tal cual):**
   - El prompt **separa Funcionalidad de Interfaz** con la **misma plantilla** que usarán en su proyecto: primero qué hace, luego cómo se ve.
   - Un solo prompt produce **tarjetas, identidad visual y estados** sin escribir código.
   - La **paleta con hexadecimales exactos** es diseñar con criterio: **color con propósito, no decorativo**.

---

## 4. Qué debe hacer el estudiante después de ver el video

1. **Configurar su entorno (guía `s0`):** entrar a `aistudio.google.com` con una **cuenta de Gmail personal** (no institucional @galileo.edu, que suele estar bloqueada por el administrador), entrar a **Build** y confirmar que puede crear una app. Recomienda hacerlo **antes** de empezar el laboratorio.

2. **Laboratorio 1 — Tu primera app en AI Studio** (con `guias-estudiante/proyecto-1-pwa.md`, Sección 1):
   - Crear una app nueva en AI Studio (modo Build).
   - Pegar el **prompt inicial de "Ruta del Café"** (Paso 2 de la guía), completo.
   - Verificar en la vista previa el encabezado "Ruta del Café" y las 8 tarjetas de cafeterías.
   - Crear un **checkpoint** y aplicar **al menos un refinamiento** (el de colores por categoría, Paso 5) y usar **View diff**.
   - Si algo sale mal, usar la sección **"Rescate"** de la guía.

3. **Tarea 1 — Investigación sobre principios de UI/UX móvil:** entregable escrito breve, **3–5 principios con ejemplos**.

4. **Hábito desde hoy:** guardar todos los prompts en un documento; se reutilizan en su propia app y en el examen parcial.

> **Entregables de la sesión 1:** Laboratorio 1 (app generada con al menos un refinamiento) + Tarea 1 (investigación breve).

---

## 5. Tips de grabación

- **Ritmo:** más ágil que en vivo. Sin preguntas del público, evita silencios; si algo se explica en 20 s, no lo estires a 2 min.
- **Muestra el prompt en pantalla** antes de pegarlo y **léelo en voz alta** en sus partes clave (Funcionalidad / Interfaz, campos, paleta). El estudiante debe poder pausar y leerlo.
- **Corta las esperas de generación:** cuando AI Studio esté generando (1–2 min), pausa la grabación o edita el corte. Nunca dejes tiempo muerto en cámara; si prefieres no editar, sigue explicando por qué funciona el prompt mientras genera.
- **Un cambio a la vez:** modela el buen hábito. Aplica el refinamiento, muestra el resultado y el **View diff** antes de pasar a otra cosa.
- **Si AI Studio falla o da error** (por ejemplo *"An internal error occurred"* o una generación que sale distinta): explica con calma que **es normal** y que la respuesta es **reintentar** —volver a enviar el prompt, o crear una app nueva y pegar el prompt como **primer** mensaje si el chat quedó con contexto confuso—. Es el mismo patrón de rescate de la guía. Ten **grabado de respaldo** un intento que sí funcionó, o usa las capturas del resultado esperado (`slides/assets/`, `demos/screenshots/antojitos-chapines.png`) para no dejar al estudiante sin ver el resultado.
- **No respondas modales de consentimiento** en cámara que no correspondan (p. ej. avisos de consentimiento de AI Studio): si aparece uno, corta y retoma en un estado limpio.
- **Nombra los botones en inglés y su significado** (Build, Send, Code, View diff, checkpoint), igual que en la guía s0, porque la interfaz de AI Studio está en inglés.
- **No expliques el código** línea por línea: la audiencia es de diseño; el valor está en dirigir a la IA. Abre Code solo para mostrar que "todo salió de un prompt".
- **Cierra cada bloque conceptual** conectándolo con "Ruta del Café" para que el estudiante siempre sepa a dónde va.

---

## 6. Nota de privacidad (recordatorio)

Al grabar, **no muestres información personal ni cuentas sensibles**: usa una **cuenta de Google de demostración**, oculta correos y nombres de otros proyectos, silencia notificaciones, no expongas claves ni Secrets, y no muestres datos de terceros. Revisa el video antes de publicarlo para confirmar que no quedó nada personal en pantalla.
