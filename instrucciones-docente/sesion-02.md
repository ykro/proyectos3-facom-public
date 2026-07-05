# Sesión 2 — De idea a interfaz y prototipo

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Deck:** `slides/sesion-02.pptx`
**Proyecto:** Proyecto 1 — PWA "Ruta del Café" (semana 2)

## Objetivo de la sesión

Que el estudiante refuerce la **identidad visual** de su app, agregue un **filtro por categoría** y una **vista de detalle**, y aprenda a usar **AI Chips (Nano Banana)** para generar imágenes y el **modo de anotación** para cambios precisos.

## Preparación previa

- Ten tu "Ruta del Café" de la sesión 1 lista, con el refinamiento de colores aplicado.
- Ten a mano la mini-app de la demo del docente ("Adopta un Peludo"); prueba una vez el flujo completo en privado.
- Prueba una vez la generación de imágenes con Nano Banana (AI Chips) para conocer el flujo del día.
- Revisa los Pasos 5–9 de `guias-estudiante/proyecto-1-pwa.md`.

---

## Desarrollo de la sesión

### Bloque 1 — Repaso y prototipos (~15 min)

1. Portada del deck y repaso rápido: prompt inicial, checkpoint, refinamiento iterativo, View diff. Pregunta quién terminó el Laboratorio 1.

2. Explica con las slides qué es un **prototipo navegable**: pantallas conectadas con navegación real (lista → detalle → volver), estados y microinteracciones. Diferencia entre un mockup estático y un prototipo que se puede tocar.

3. Concepto de **identidad visual**: color, tipografía, nombre, tono. Conecta con la slide de "marca como sistema": colores en hexadecimal, consistencia, accesibilidad de contraste.

### Bloque 2 — AI Chips y generación de imágenes (~15 min)

4. Presenta los **AI Chips** de AI Studio: servicios de Google que se agregan sin configuración. Enfócate en **Nano Banana** para generar/editar imágenes.

5. Demo en vivo: genera una imagen de portada o una ilustración con Nano Banana y muéstrala. Explica que estas imágenes pueden alimentar el `imagenUrl` de las tarjetas o servir de banner (en la demo de hoy, fotos de las mascotas de "Adopta un Peludo").

6. Conecta con **Tarea 2 (identidad visual)**: cada quien definirá nombre, paleta y tono de su propia app. Muestra ejemplos de buenas paletas sobre fondo claro/oscuro.

### Bloque 3 — Demo en vivo: filtro y vista de detalle (~25 min)

> El laboratorio del estudiante sigue en "Ruta del Café". Para la demo usa una **mini-app distinta** que ilustre el filtro y el detalle sobre otro tema.

#### Demo del docente de la sesión: "Adopta un Peludo"

> 🎯 **Referencia visual del resultado esperado:** [ver captura](../demos/screenshots/adopta-un-peludo.png) · mock-up navegable: [`demos/adopta-un-peludo.html`](../demos/adopta-un-peludo.html). Reconstrúyela en vivo con el prompt de abajo (no la copies tal cual).

**Concepto:** un catálogo de mascotas en adopción con **filtro por tipo**, **vista de detalle** e imágenes generadas con **Nano Banana**. Sirve para enseñar filtro + detalle + AI Chips.

7. Crea una app nueva en AI Studio (o parte de un checkpoint). Pega el **prompt inicial** de la demo, que ya incluye filtro y detalle:

```
Crea una aplicación web usando React con Tailwind CSS llamada "Adopta un Peludo", un catálogo de mascotas en adopción en Guatemala. Toda la interfaz debe estar en español (Guatemala). Quiero una UI/UX de altísima calidad, mobile-first.

**Funcionalidad (qué hace):**
- Muestra una lista de mascotas en tarjetas. Genera 8 mascotas de ejemplo dentro de la app. Cada mascota tiene: nombre (texto), tipo (texto: uno de "Perro", "Gato", "Conejo", "Otro"), edad (texto, ejemplo "2 años"), ciudad (texto, ejemplo "Xela"), descripcion (texto de 1 o 2 frases), imagenUrl (usa placeholder por ahora).
- Un filtro por tipo arriba: un chip por cada tipo más un chip "Todos". Al tocar un chip, la lista muestra solo las mascotas de ese tipo; "Todos" muestra todas.
- Al tocar una tarjeta, abre una vista de detalle con la foto grande, todos los datos y un botón "Volver". Usa estado de React (no React Router) para alternar entre lista y detalle.

**Interfaz (UI/UX — cómo se ve y se siente):**
- Layout: header "Adopta un Peludo" con subtítulo; debajo, la fila de chips y luego la cuadrícula de tarjetas.
- Chips redondeados en fila horizontal; el seleccionado con fondo vino #6D2E46 y texto blanco; los demás con fondo claro y borde sutil; en teléfono la fila se desplaza en horizontal.
- Tarjeta: imagen; nombre en negrita; una etiqueta (badge) de color con el tipo; edad y ciudad en texto secundario.
- Color (paleta de marca): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B.
- Espaciado en grid de 8px, bordes redondeados, sombra suave, transiciones 200–300ms, estado vacío amable. Responsive: 1 columna en teléfono, 2–3 en pantallas grandes.
```

8. Prueba el filtro en la vista previa: toca un tipo y luego "Todos". Resalta el detalle de pedir el chip "Todos" explícito y el estado seleccionado.

9. Prueba la **navegación completa**: toca una tarjeta → detalle → "Volver". Este es el prototipo navegable que pide el laboratorio. Si quieres reforzar el ciclo iterativo, agrega un refinamiento de detalle con un prompt corto (solo Interfaz).

10. Conecta con **Nano Banana**: genera un par de fotos de mascotas y pídele a la IA que las use como `imagenUrl`, mostrando cómo las imágenes generadas alimentan las tarjetas.

11. Muestra el **modo de anotación**: haz clic sobre un elemento en la vista previa y describe un ajuste puntual (por ejemplo, agrandar el título del detalle). Explica que es más preciso que describirlo con palabras.

**Qué resaltar (di esto en voz alta):**
- El **filtro y el detalle** salen de un solo prompt inicial que separa **Funcionalidad** (comportamiento del filtro, navegación) de **Interfaz** (chips, badges, colores).
- **Nano Banana** cierra el círculo: las imágenes generadas alimentan el `imagenUrl` de las tarjetas.
- El **modo de anotación** es la forma más precisa de pedir un ajuste visual puntual.

### Bloque 4 — Laboratorio de hoy (~25 min)

12. Indica el **Laboratorio 2**: sobre su "Ruta del Café" (Pasos 5–9 de la guía), agregar el filtro por categoría y la vista de detalle, dejándola como **prototipo navegable** con identidad propia. La demo ("Adopta un Peludo") fue solo para ilustrar la técnica.

13. Acompaña en vivo. Recuérdales:
    - Un cambio a la vez; checkpoint antes de cada refinamiento.
    - Si el filtro no funciona, usar el prompt de rescate de la guía.
    - Aplicar su propia paleta (Tarea 2) si ya la definieron.

14. Quien termine, que use el **modo de anotación** para pulir un detalle visual.

### Bloque 5 — Cierre y tareas (~10 min)

15. Recapitula con la slide de cierre: identidad visual, filtro, detalle, anotación, Nano Banana.

16. Asigna:
    - **Tarea 2 — Definir la identidad visual de su app** (nombre, paleta en hexadecimal, tono, tipografía).
    - **Laboratorio 2 — Prototipo navegable** (filtro + detalle funcionando, identidad propia).

17. Adelanta la sesión 3: datos en Firestore y app instalable como PWA. Cierra.

---

## Notas

- Nano Banana es opcional para el entregable, pero motiva mucho; reserva tiempo para mostrarlo.
- Si la cámara de ideas se traba, sugiere ideas de app de la guía (recetas, lugares, podcasts, emprendimientos).
- Refuerza accesibilidad de contraste al elegir paletas; conecta con su formación en diseño.
