# Sesión 4 — Desarrollo nativo I: fundamentos con IA

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Deck:** `slides/sesion-04.pptx`
**Proyecto que arranca:** Proyecto Final — App nativa "Bitácora Visual"

## Objetivo de la sesión

Que el estudiante entienda cuándo conviene una app **nativa**, cree una **app nativa de Android (Kotlin + Jetpack Compose)** en Google AI Studio, la vea en el **emulador integrado del navegador** y —si tiene teléfono— la instale con **"Install on Device"**, dirigiendo a la IA para construir la bitácora de "Bitácora Visual". Todo desde el navegador, sin terminal ni instalaciones.

## Preparación previa (todo en el navegador)

- Ten `aistudio.google.com` abierto en **Chrome** e inicia sesión con tu cuenta de Google.
- Crea una vez, en privado, una app **nativa** de prueba para ver cómo se comporta el **emulador del navegador** (tarda un poco más que una PWA en generar la primera vez).
- Si quieres demostrar **"Install on Device"**: ten un teléfono Android con **modo de desarrollador** y **depuración por USB** activados, y un cable **USB** que transmita datos. No necesitas ADB ni el SDK de Android; AI Studio instala la app directo desde Chrome.
- Ten a mano la mini-app de la demo del docente ("Mi Estantería").
- Revisa la Sección 1 de `guias-estudiante/proyecto-final-nativo.md`.

---

## Desarrollo de la sesión

### Bloque 1 — Repaso del Proyecto 1 y PWA vs nativo (~18 min)

1. Portada del deck. Repaso: el Proyecto 1 (PWA) quedó completo; recuérdales que el **examen parcial (escrito en línea)** y la **entrega del Proyecto 1** son en la sesión 5.

2. Explica con las slides **PWA vs nativo**: una PWA vive en el navegador y se instala; una app nativa se instala desde una tienda y accede mejor a capacidades del teléfono (cámara, notificaciones, rendimiento). Conecta con **Tarea 4 (PWA vs nativo)**.

3. **Cuándo conviene nativo**: necesidad de cámara/sensores, distribución en Play Store, mejor desempeño, experiencia más integrada. Cuándo basta una PWA: alcance rápido, web instalable, sin tienda.

4. Presenta la **anatomía de una app Android** en términos de diseño: pantallas (activities), componentes de UI, navegación, recursos (íconos, colores). Sin entrar al código.

### Bloque 2 — Una sola herramienta, del navegador al teléfono (~17 min)

5. Da la buena noticia: **no cambian de herramienta**. La **misma** AI Studio que usaron para la PWA también genera **apps nativas de Android con Kotlin y Jetpack Compose**. No hay terminal, ni SDK, ni emulador que instalar: todo pasa en el navegador.

6. Muestra el flujo nativo en AI Studio con las slides:
   - **Crear:** una app nueva y, en el primer prompt, pides una **app nativa de Android (Kotlin + Jetpack Compose)**.
   - **Ver:** un **emulador de Android integrado en el navegador** (panel de vista previa) que se **actualiza solo**; no "corres" nada.
   - **Probar en teléfono real:** el botón **"Install on Device"** instala la app por **USB (WebUSB)** directo desde Chrome.
   - **Depurar/inspeccionar:** **modo de anotación**, **View diff** y la pestaña **Code**, igual que en la PWA.

7. Refuerza que **los principios de prompting son idénticos** a los de la PWA: prompt claro con la separación **Funcionalidad / Interfaz**, un cambio a la vez, checkpoints y la **regla de los 2 strikes**. Lo único nuevo es que la primera línea del prompt pide una app **nativa**.

8. Aclara qué **no** hace falta (contra la idea de que "nativo = complicado"): sin terminal, sin instalar el SDK de Android, sin crear emuladores, sin `google-services.json`, sin consola de Firebase ni huellas SHA-1. Firebase se activa con **"Enable Firebase"** (auto-provisioning), igual que en la PWA. Lo único externo es, opcionalmente, un teléfono con depuración USB para "Install on Device".

### Bloque 3 — Demo en vivo: crear la app nativa en AI Studio (~23 min)

> El laboratorio del estudiante es "Bitácora Visual" (la app insignia de la guía). Para la demo en vivo usa una **mini-app nativa distinta** que ilustre el flujo nativo sobre otro tema.

#### Demo del docente de la sesión: "Mi Estantería"

> 🎯 **Referencia visual del resultado esperado:** [ver captura](../demos/screenshots/mi-estanteria.png) · mock-up navegable: [`demos/mi-estanteria.html`](../demos/mi-estanteria.html). Reconstrúyela en vivo con el prompt de abajo (no la copies tal cual).

**Concepto:** una colección de los libros que has leído en un **grid nativo** (título, autor, portada). Sirve para enseñar cómo se crea una **app nativa en AI Studio** y cómo se ve en el **emulador del navegador**.

9. En AI Studio (Build), crea una **app nueva**. Aclara que la diferencia con la PWA está en la **primera línea** del prompt: pedimos una app **nativa de Android con Kotlin y Jetpack Compose**.

10. Pega el **prompt inicial** de la demo:

```
Crea una app nativa de Android usando Kotlin y Jetpack Compose (Material 3) llamada "Mi Estantería", una colección de los libros que has leído. Toda la interfaz debe estar en español. Quiero una UI/UX de altísima calidad, limpia.

**Funcionalidad (qué hace):**
- Pantalla principal: muestra los libros en una cuadrícula de 2 columnas (LazyVerticalGrid). Por ahora genera 6 libros de ejemplo dentro de la app (luego se conectaría la nube). Cada libro tiene: titulo (texto), autor (texto) y portadaUrl (texto, usa imágenes de placeholder).
- Un botón flotante (FAB) "+" para agregar un libro (por ahora solo el botón).

**Interfaz (UI/UX — cómo se ve y se siente):**
- Layout y jerarquía: una barra superior (TopAppBar) con el título "Mi Estantería". Debajo, la cuadrícula tipo estantería.
- Componentes — tarjeta de libro: la portada arriba (dominante, esquinas redondeadas), debajo el titulo en negrita y el autor en texto secundario.
- FAB "+" en la esquina inferior derecha, en color vino #6D2E46.
- Color (paleta de marca, en el tema Material 3): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Define estos colores en el tema y úsalos con propósito.
- Tipografía y espaciado: títulos con carácter editorial; espaciado en grid de 8dp con aire generoso entre tarjetas.
- Estados: incluye un estado vacío amable para cuando no haya libros.
- Accesibilidad: contraste AA, áreas táctiles ≥ 48dp, texto legible.

**Estructura:**
- Una función composable por pantalla; separa la UI de la lógica de datos.
- Agrega comentarios con el formato:
  // CONCEPTO: [nombre]
  // QUE HACE: [descripción]
  // POR QUE: [razón]
```

11. Mientras genera (varios minutos; más que una PWA), explica **por qué el prompt funciona** y recuerda que usa por defecto **Gemini 3.5 Flash**. No cierres la pestaña.

12. Cuando termine, revisa la **vista previa**: AI Studio muestra un **emulador de Android integrado en el navegador** con la barra "Mi Estantería" y la cuadrícula de libros con el botón "+". Recalca que **se actualiza solo**; no "corres" nada.

13. (Si tienes teléfono) Demuestra **"Install on Device"**: conéctalo por USB, toca el botón, elige el teléfono en el selector USB de Chrome (WebUSB) y la app se instala y abre sola. Si no tienes teléfono, describe el flujo con la slide. Muestra también **Code** y **View diff** para ver qué generó la IA.

14. Celebra el hito: *"misma forma de trabajar que la PWA, pero ahora es una app Android nativa de verdad, hecha entera en el navegador."*

**Qué resaltar (di esto en voz alta):**
- La **primera línea** del prompt ("app nativa de Android con Kotlin y Jetpack Compose") es lo único que cambia respecto a la PWA.
- El **emulador del navegador** se actualiza solo: no hay terminal, ni SDK, ni emulador que arrancar.
- **"Install on Device"** lleva la app a un teléfono real por USB, directo desde Chrome.

### Bloque 4 — Laboratorio de hoy (~24 min)

15. Indica el **Laboratorio 4**: cada estudiante crea su app **nativa** en AI Studio y construye la bitácora de "Bitácora Visual" (Sección 1 de la guía), viéndola en el **emulador del navegador**. La demo ("Mi Estantería") fue solo para ilustrar la técnica; su laboratorio es la app insignia y, más adelante, su propia idea.

16. Acompaña en vivo. La fricción aquí es menor que antes (todo en el navegador); prioriza desbloquear:
    - La IA generó una **web** en vez de una app nativa → verificar que la primera línea del prompt pide una app **nativa de Android con Kotlin y Jetpack Compose**; si el chat está confuso, crear app nueva y pegar el prompt como primer mensaje (Rescate de la guía).
    - El **emulador del navegador** no carga o se queda en blanco → pedir a la IA el error de compilación exacto y corregirlo (Rescate de la guía).
    - **"Install on Device"** no encuentra el teléfono → activar modo de desarrollador y depuración USB, usar cable de datos y Chrome, aceptar el aviso de depuración en el teléfono. (Es opcional: pueden trabajar solo con el emulador del navegador.)

17. Quien tenga la bitácora en el emulador, que personalice color y nombre hacia su propia idea.

### Bloque 5 — Cierre y tareas (~8 min)

18. Recapitula: nativo vs PWA, **una sola herramienta (AI Studio) del navegador al teléfono**, app nativa Kotlin + Compose, emulador del navegador e "Install on Device".

19. Asigna y recuerda el examen:
    - **Tarea 4 — Investigación PWA vs nativo.**
    - **Laboratorio 4 — App nativa en el emulador del navegador** (o instalada en el teléfono) con la bitácora.
    - **Recordatorio: Examen Parcial en la próxima sesión (5)** — examen **escrito en línea** + entrega del Proyecto 1 (PWA "Ruta del Café"). Que lleguen con la URL publicada y sus prompts.

20. Adelanta que tras el parcial seguimos con login, datos por usuario y fotos (sesión 6). Cierra.

---

## Notas

- Todo se hace en el navegador: no hay instalaciones que enviar con anticipación. Basta con que lleguen a AI Studio en Chrome con su cuenta lista.
- Genera tu app nativa de demo **antes** de clase (la primera generación nativa tarda varios minutos); así en vivo solo muestras el resultado o iteras.
- "Install on Device" es opcional para esta sesión: si nadie tiene teléfono con depuración USB, el **emulador del navegador** basta para el laboratorio.
- Mantén el foco en diseño: no expliques el código generado, solo verifica el resultado en el emulador del navegador.
