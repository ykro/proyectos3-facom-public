# Sesión 1 — Introducción, UX/UI móvil y el diseñador-creador con IA

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Deck:** `slides/sesion-01.pptx`
**Proyecto que arranca:** Proyecto 1 — PWA "Ruta del Café"

## Objetivo de la sesión

Que el estudiante entienda de qué trata el curso, configure su entorno y construya su **primera app** en Google AI Studio con un solo prompt, comprobando que se puede crear software real dirigiendo a la IA en español, sin programar.

## Preparación previa (antes de clase)

- Ten una cuenta de Google lista y `aistudio.google.com` abierto en Chrome.
- Crea una app vacía en AI Studio una vez para conocer la latencia de generación del día.
- Ten a mano la guía `guias-estudiante/proyecto-1-pwa.md` y `guias-estudiante/s0-bienvenida-y-configuracion.md`.
- Comparte por adelantado el enlace de la guía de configuración (s0) para quien quiera adelantarse.

---

## Desarrollo de la sesión

### Bloque 1 — Bienvenida y presentación del curso (~15 min)

1. Da la bienvenida y proyecta la **portada del deck** (`slides/sesion-01.pptx`). Preséntate y aclara que ambas secciones (lunes y miércoles) ven exactamente el mismo material.

2. Explica la promesa central del curso con la slide de "El diseñador-creador con IA": *"Van a construir apps móviles reales sin escribir código, dirigiendo a la IA en español. Su fortaleza —diseño, UX, identidad visual, narrativa— es justo lo que se necesita para dirigir bien a la IA."*

3. Usa el término correcto desde el primer minuto: **"desarrollo de software asistido por IA"**. Aclara explícitamente que en este curso **no** decimos "vibe coding".

4. Presenta los **dos proyectos** del trimestre con la slide correspondiente:
   - Proyecto 1 (PWA): "Ruta del Café" —guía de cafés de especialidad de Guatemala—, semanas 1–3, se evalúa en el Examen Parcial.
   - Proyecto Final (nativa): "Bitácora Visual" —diario visual privado—, semanas 4/6/7, se evalúa en el Demo Day.

5. Muestra el **panorama de herramientas**: Google AI Studio (modo **Build**) —todo desde el navegador—, Firebase (Firestore, Authentication, Storage), Cloud Run, AI Chips (Nano Banana). Aclara que la **misma** herramienta genera tanto la PWA (React) como la app nativa de Android (Kotlin + Jetpack Compose), que todo es gratuito y solo requiere cuenta de Google.[^ag]

[^ag]: El agente interno de AI Studio se llama Antigravity; no necesitas usar ese nombre con los estudiantes.

### Bloque 2 — Principios de UX/UI móvil (~20 min)

6. Explica con las slides de contenido los principios de **diseño mobile-first**: pantalla pequeña, una columna, jerarquía visual clara, áreas táctiles grandes (mínimo ~44px), contraste suficiente.

7. Cubre los **patrones móviles comunes**: lista de tarjetas (cards), filtros, vista de detalle, navegación, estados (vacío, cargando, error). Conecta cada patrón con "Ruta del Café" para que vean a dónde van.

8. Cierra el bloque conceptual con la idea de **diseñar para el pulgar** y la importancia de los estados. Anota que la Tarea 1 profundiza en estos principios.

### Bloque 3 — Demo en vivo: primera app en AI Studio (~20 min)

> El laboratorio del estudiante es "Ruta del Café" (la app insignia de la guía). Para la demo en vivo usa una **mini-app distinta** —así ven la técnica aplicada a otro tema y no copian el resultado tal cual—.

#### Demo del docente de la sesión: "Antojitos Chapines"

> 🎯 **Referencia visual del resultado esperado:** [ver captura](../demos/screenshots/antojitos-chapines.png) · mock-up navegable: [`demos/antojitos-chapines.html`](../demos/antojitos-chapines.html). Reconstrúyela en vivo con el prompt de abajo (no la copies tal cual).

**Concepto:** un menú de antojitos típicos de Guatemala con tarjetas (nombre, precio, lugar, tipo). Sirve para enseñar el **prompt inicial detallado**, las **tarjetas (cards)** y la **identidad visual**.

9. Abre `aistudio.google.com`, entra a **Build** y crea una app nueva. Muestra el panel de chat (izquierda) y la vista previa (derecha); menciona las pestañas **Code**, **View diff** y el botón de **checkpoint**.

10. Explica que vas a usar **un prompt detallado** y lee en voz alta las partes clave antes de enviar (React + Tailwind, la separación **Funcionalidad / Interfaz**, datos de ejemplo, tarjetas, paleta con hexadecimales). Pega este **prompt inicial** de la demo:

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

11. Mientras genera (1–2 min), explica **por qué el prompt funciona**: separa **Funcionalidad** (datos con campos definidos) de **Interfaz** (jerarquía y paleta con hexadecimales exactos), y es específico en tecnologías y estructura. (AI Studio usa por defecto el modelo **Gemini 3.5 Flash**.) Aprovecha para mostrar la pestaña **Code** y decir: *"todo esto salió de un solo prompt; no escribimos ni una línea."*

12. Cuando termine, revisa la vista previa: encabezado "Antojitos Chapines" y las 8 tarjetas. Crea un **checkpoint** y compáralo con "guardar la partida en un videojuego".

13. Demuestra **un refinamiento** en vivo (colores por tipo) para que vean el ciclo iterativo. Este es casi puro **Interfaz**. Pega:

```
**Qué construimos:** el sistema de color por tipo, para que cada antojito se lea de un vistazo.

**Interfaz (UI/UX):**
- A la etiqueta (badge) de tipo dale un color distinto según el tipo: "Dulce" #C84B31, "Salado" #6D2E46, "Bebida" #E3B23C (con texto oscuro #2B2B2B para que se lea), "Callejero" #4F772D. El resto del texto del badge en blanco. Bordes redondeados y padding horizontal cómodo.
- Agrega un poco de padding dentro de cada tarjeta para que respire y afina el efecto hover (transición 250ms, sombra un poco más marcada).
```

**Qué resaltar (di esto en voz alta):**
- El prompt **separa Funcionalidad de Interfaz** con la misma plantilla que usarán en su proyecto: primero qué hace, luego cómo se ve.
- Un solo prompt produce **cards, identidad visual y estados** sin escribir código.
- La **paleta con hexadecimales exactos** es diseñar con criterio: color con propósito, no decorativo.

14. Usa **View diff** para mostrar exactamente qué cambió la IA. Refuerza la idea de **un cambio a la vez** y la **regla de los 2 strikes**.

### Bloque 4 — Laboratorio de hoy (~25 min)

15. Indica el **Laboratorio 1**: cada estudiante crea su app en AI Studio y pega el prompt inicial de "Ruta del Café" (Paso 2 de la guía). Comparte el enlace a `guias-estudiante/proyecto-1-pwa.md`. Aclara que la demo fue "Antojitos Chapines" para ilustrar la técnica; su laboratorio es la app insignia de la guía y, más adelante, su propia idea de app.

16. Acompaña en vivo. Verifica que todos pasaron la configuración (s0). Resuelve dudas comunes:
    - Si la app sale distinta a lo pedido, casi siempre es que el prompt no se pegó completo (Rescate de la guía).
    - Recuérdales no cerrar la pestaña durante la generación.

17. Quien termine la generación inicial que aplique el refinamiento de colores y use **View diff**.

### Bloque 5 — Cierre y tareas (~10 min)

18. Recapitula con la slide de cierre: prompt detallado, checkpoint, refinamiento iterativo, View diff.

19. Asigna:
    - **Tarea 1 — Investigación sobre principios de UI/UX móvil** (entregable escrito breve; 3–5 principios con ejemplos).
    - **Laboratorio 1 — Primera app en AI Studio** (su app generada, con al menos un refinamiento aplicado).

20. Adelanta la sesión 2 (identidad visual, filtro, vista de detalle y AI Chips). Cierra.

---

## Notas

- Si la generación va lenta, sigue explicando UX/UI mientras tanto; nunca esperes en silencio.
- No te detengas a explicar el código: la audiencia es de diseño, el valor está en dirigir a la IA.
- Anima a que guarden sus prompts en un documento desde hoy; los reutilizarán en su propio proyecto y en el examen.
- Bloque de rescate disponible en `guias-estudiante/proyecto-1-pwa.md` (sección "Rescate").
