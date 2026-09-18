# Examen Parcial — Proyectos III (Diseño de aplicaciones móviles)

**Universidad Galileo · Licenciatura en Comunicación y Diseño**
**Docente:** Adrián Catalán
**Cubre:** Semanas 1 a 4 — Proyecto 1 (PWA "Ruta del Café") + fundamentos de desarrollo nativo (sesión 4)
**Modalidad:** en línea, escrito, **individual**

> Este examen **es** el Examen Parcial completo: **100 % escrito y en línea**. Tu **Proyecto 1 (tu PWA)** se entrega en línea y se evalúa por separado dentro de *Proyectos* (no forma parte de este examen).

---

## Instrucciones para el estudiante

- **Formato:** examen en línea, escrito. Respondes en el formulario/documento que te indique el docente.
- **Tiempo sugerido:** **60–75 minutos**. No es un examen de velocidad; es de criterio.
- **Es individual.** Cada quien responde con sus propias palabras y su propio criterio de diseño.
- **Materiales permitidos:** tus apuntes, las guías del curso, tu bitácora de prompts y tus propios proyectos. Puedes consultar la paleta y el vocabulario del curso.
- **Sobre el uso de IA:** en este curso la IA es una **herramienta de trabajo**, no un sustituto de tu criterio. Puedes usarla para consultar, pero las respuestas de este examen deben ser **tuyas**: en la Parte B se evalúa **tu** juicio de diseño y **tu** forma de dirigir a la IA, no lo que la IA opine. Si te apoyas en una fuente o herramienta para una respuesta concreta, **cítala** en una línea (por ejemplo: "consulté X para confirmar el dato Y"). Copiar respuestas sin criterio propio se nota y se penaliza.
- **Integridad académica:** entregar un prompt o un texto genérico que no responde al caso pedido cuenta como respuesta incompleta.
- **Idioma:** responde en **español**. Los **nombres de campos, colecciones y componentes** van en **inglés** (identificadores de código), tal como en clase.

### Puntaje por sección

| Parte | Contenido | Ítems | Puntos | Ponderación |
|-------|-----------|-------|--------|-------------|
| **A** | Teoría (opción múltiple, verdadero/falso razonado, respuesta corta) | 14 | **40** | 40 % |
| **B** | Práctica aplicada (tareas escritas, sin programar) | 5 | **60** | 60 % |
| | **Total** | | **100** | **100 %** |

---

# PARTE A — Teoría (40 puntos)

## A.1 Opción múltiple (8 ítems · 2 puntos c/u · 16 puntos)

> Marca **una sola** respuesta por ítem.

**1.** En el diseño **mobile-first**, ¿cuál es la decisión de layout más coherente para la pantalla principal de una app de catálogo?

- a) Tres o cuatro columnas fijas, porque así se aprovecha el ancho.
- b) Empezar por **una columna** pensada para el teléfono y luego ampliar a más columnas en pantallas grandes.
- c) Diseñar primero para escritorio y dejar el teléfono para el final.
- d) Un menú lateral siempre abierto que ocupe la mitad de la pantalla.

**2.** ¿Por qué las guías del curso recomiendan **áreas táctiles cómodas (alrededor de 44–48 px)** en botones y chips?

- a) Porque ocupan menos memoria del teléfono.
- b) Porque el dedo (sobre todo el pulgar) es impreciso y un objetivo pequeño provoca toques fallidos y frustración.
- c) Porque Tailwind exige ese tamaño mínimo.
- d) Porque los botones grandes cargan más rápido.

**3.** Una lista de cafeterías tarda en llegar desde Firestore. ¿Qué estado de interfaz corresponde mostrar **mientras** los datos vienen en camino?

- a) El estado vacío ("Aún no hay cafés").
- b) Un estado de **carga** (skeleton de tarjetas o "Cargando cafés…").
- c) Un estado de error con un botón de reintentar.
- d) Nada; se deja la pantalla en blanco hasta que lleguen.

**4.** En este curso, ¿cómo se nombra correctamente lo que hacen los estudiantes?

- a) "Vibe coding".
- b) **Desarrollo de software asistido por IA.**
- c) Programación tradicional en React.
- d) Diseño gráfico sin componente técnico.

**5.** La **regla de los 2 strikes** dice que, si un prompt de corrección no arregla el problema:

- a) Repites el mismo prompt tantas veces como haga falta hasta que salga.
- b) Lo intentas **una vez más**; si tampoco funciona, **regresas al último checkpoint** estable en lugar de seguir insistiendo.
- c) Borras toda la app y empiezas de cero.
- d) Cambias de modelo de IA inmediatamente.

**6.** ¿Cuál de estas situaciones justifica mejor construir una app **nativa** en lugar de una **PWA**?

- a) Quieres que la app sea instalable y funcione desde el navegador sin pasar por una tienda.
- b) Necesitas **acceso pleno a la cámara y a sensores del teléfono**, mejor desempeño y distribución en la Play Store.
- c) Quieres publicarla rápido con una sola URL.
- d) Tu app solo muestra información de texto y no toca hardware del teléfono.

**7.** En AI Studio, **Nano Banana** es:

- a) Una regla de seguridad de Firestore.
- b) El **modelo de generación de imágenes** de Google; vive en el **playground** de AI Studio (aparte del modo Build) y sirve para crear íconos o ilustraciones que luego usas en tu app (por ejemplo, en el campo `imagenUrl`).
- c) La herramienta para instalar la app en el teléfono por USB.
- d) El emulador de Android integrado en el navegador.

**8.** En el curso se enseña **Material 3** (TopAppBar, FAB, LazyVerticalGrid, cards, chips) principalmente como:

- a) Un lenguaje de programación que debes memorizar.
- b) Un **vocabulario de diseño**: componentes y patrones que nombras para dirigir a la IA con precisión.
- c) Una base de datos para apps nativas.
- d) Un servicio de publicación equivalente a Cloud Run.

---

## A.2 Verdadero / Falso **razonado** (3 ítems · 3 puntos c/u · 9 puntos)

> Indica **Verdadero** o **Falso** y **justifica en una o dos frases**. Sin justificación válida, el ítem no suma.

**9.** "Separar el prompt en **Funcionalidad (qué hace)** e **Interfaz (cómo se ve y se siente)** sirve para poder cambiar el diseño después sin romper el comportamiento de la app."

**10.** "Para que una app web sea una **PWA instalable** basta con que esté hecha con Tailwind CSS y se vea bonita en el teléfono."

**11.** "Guardar un **checkpoint** en AI Studio también respalda los datos que ya creaste en Firestore, así que si regresas a un checkpoint pierdes esos registros."

---

## A.3 Respuesta corta (3 ítems · 5 puntos c/u · 15 puntos)

> Responde en 2–4 frases. Usa el vocabulario del curso.

**12.** Explica, en términos de diseño, qué es **Firestore** y qué significan **colección** y **documento**. Da un ejemplo con la app "Ruta del Café".

**13.** ¿Qué ventaja de experiencia de usuario aporta leer los datos con **`onSnapshot`** (tiempo real) frente a una lectura única? Describe qué **ve** la persona usuaria cuando alguien agrega un registro nuevo.

**14.** Menciona **dos herramientas o hábitos** del flujo de trabajo en AI Studio que sirven para **depurar / entender** qué hizo la IA (no para diseñar), y explica brevemente para qué sirve cada uno.

---

# PARTE B — Práctica aplicada (60 puntos)

> En esta parte **no programas**: **escribes**. Se evalúa tu criterio de diseño (UX/UI móvil) y tu forma de **dirigir a la IA**. Usa contextos de Guatemala. Respeta la separación **Funcionalidad / Interfaz** cuando se pida y mantén los identificadores de código en **inglés**.

---

## B.1 Redactar un prompt inicial (16 puntos)

**Caso:** vas a construir, en Google AI Studio, una PWA llamada **"Miradores de Guate"**: una guía de **miradores y lugares con vista** en Guatemala (por ejemplo, Cerro de la Cruz en Antigua, miradores de la Ciudad, lagos, volcanes accesibles). Es un **catálogo público que se navega**, con la misma estructura que "Ruta del Café": lista de tarjetas, filtro por categoría y vista de detalle.

**Tu tarea:** escribe el **prompt inicial** que le darías a la IA, con la estructura del curso. Debe incluir, claramente separadas:

1. **Encabezado:** tecnología (web con React + Tailwind), nombre de la app, idioma (español, Guatemala) y la exigencia de **UI/UX de alta calidad, mobile-first**.
2. **Funcionalidad (qué hace):** tarjetas con datos de ejemplo; **entre 4 y 6 campos** (nombres **en inglés**), incluyendo al menos un campo de **categoría**; y **entre 3 y 5 categorías** para el filtro (por ejemplo: "Volcán", "Lago", "Ciudad", "Pueblo colonial").
3. **Interfaz (UI/UX):** paleta con **colores hexadecimales** (puedes usar la paleta vino del curso), jerarquía visual, grid de 8px, **al menos un estado** (vacío / carga), microinteracciones y una nota de **accesibilidad (contraste AA / áreas táctiles)**, y responsive.

> No necesitas escribir la sección de "Estructura del código"; concéntrate en Encabezado + Funcionalidad + Interfaz.

---

## B.2 Criticar y mejorar un mal prompt (12 puntos)

Una compañera quiere una app de **artesanías guatemaltecas** y le escribió a la IA este prompt:

> *"Hazme una app bien bonita de artesanías de Guatemala con fotos y que se vea profesional. Ponle colores lindos y que tenga de todo."*

**Tu tarea:**

**(a)** Identifica **tres problemas concretos** de este prompt (por qué la IA no puede dar un buen resultado con él). *(6 pts)*

**(b)** **Reescríbelo** para que sea un prompt inicial útil, aplicando la separación **Funcionalidad / Interfaz** y siendo específico en al menos: campos de datos (en inglés), una paleta con hexadecimales, y un requisito de UI/UX (jerarquía, estados o accesibilidad). No tiene que ser largo, pero sí específico. *(6 pts)*

---

## B.3 Diseñar un modelo de datos (12 puntos)

**Caso:** una app llamada **"Murales de la Ciudad"** para descubrir **arte urbano y murales** de la Ciudad de Guatemala. Cada mural se muestra como tarjeta y tiene su vista de detalle; hay un filtro por categoría.

**Tu tarea:** diseña el **modelo de datos** en Firestore:

1. El **nombre de la colección** (en inglés). *(2 pts)*
2. **Entre 4 y 6 campos** (nombres **en inglés**), cada uno con su **tipo** (texto, número, etc.) y una frase de **para qué sirve**. Incluye un campo que sirva para el **filtro por categoría**. *(7 pts)*
3. Lista **3 a 5 valores de categoría** posibles para ese campo (por ejemplo: "Realismo", "Abstracto", "Social", "Rótulo"). *(2 pts)*
4. En una frase: **¿por qué los nombres de los campos van en inglés** aunque el contenido esté en español? *(1 pt)*

---

## B.4 Escribir un prompt de refinamiento / rescate (10 puntos)

**Caso:** ya conectaste tu app "Miradores de Guate" a Firestore, pero el resultado tiene **dos defectos**:

- El **filtro por categoría** no filtra: al tocar cualquier chip (incluido "Volcán"), la lista sigue mostrando **todos** los miradores.
- Cuando un mirador **no tiene imagen** (`imagenUrl` vacío), la tarjeta muestra un **ícono roto** en lugar de una imagen de respaldo.

**Tu tarea:** escribe **un prompt de refinamiento/rescate** dirigido a la IA que le indique **qué revisar y qué corregir** en ambos puntos, de forma clara y verificable (por ejemplo, pidiéndole que confirme el resultado en la vista previa). Escríbelo como se lo dirías realmente a la IA.

---

## B.5 Justificar decisiones de UI/UX y accesibilidad (10 puntos)

**Caso:** en la **vista de detalle** de un mirador estás decidiendo cómo mostrar el nombre del lugar sobre una **foto grande** que ocupa todo el ancho, y una compañera propone poner el nombre en **texto gris claro directamente encima de la foto**, sin ningún fondo.

**Tu tarea:**

**(a)** Explica **por qué esa decisión es un problema de UX/accesibilidad** y qué principio del curso incumple. *(4 pts)*

**(b)** Propón **dos soluciones** concretas que mantengan una **jerarquía visual clara** y un **contraste AA** legible sobre la foto (por ejemplo, tratamientos del texto, del fondo o del layout), y justifica brevemente por qué funcionan. *(6 pts)*

---
---

# CLAVE DE RESPUESTAS Y CRITERIOS DE CALIFICACIÓN

> **Sección exclusiva para el docente.** No se comparte con el estudiante. Va en el repo privado.

## Parte A — respuestas y justificación

### A.1 Opción múltiple (2 pts c/u)

| Ítem | Respuesta | Por qué |
|------|-----------|---------|
| **1** | **b** | Mobile-first: se diseña primero para el teléfono (1 columna) y se amplía a 2–3 columnas en pantallas mayores. |
| **2** | **b** | Áreas táctiles grandes (~44–48 px) porque el dedo es impreciso; evita toques fallidos. No tiene que ver con memoria ni con Tailwind. |
| **3** | **b** | Mientras cargan los datos corresponde el **estado de carga** (skeleton / "Cargando…"). El vacío es cuando de verdad no hay datos; el error es cuando falla. |
| **4** | **b** | El término correcto del curso es **desarrollo de software asistido por IA**; nunca "vibe coding". |
| **5** | **b** | Regla de 2 strikes: un intento más y, si no, volver al último checkpoint estable. |
| **6** | **b** | Nativo se justifica por cámara/sensores, desempeño y distribución en Play Store. Las otras opciones describen cuándo basta una PWA. |
| **7** | **b** | Nano Banana es el modelo de generación de imágenes de Google; vive en el playground de AI Studio (no en Build) y genera íconos/ilustraciones que luego usas en la app. |
| **8** | **b** | Material 3 se enseña como **vocabulario de diseño**, no como programación. |

### A.2 Verdadero / Falso razonado (3 pts c/u)

- **9 — Verdadero.** (1 pt V/F + 2 pts justificación.) Separar Funcionalidad de Interfaz permite cambiar el aspecto (color, tipografía, layout) sin tocar el comportamiento, y viceversa; es la razón didáctica de la plantilla del curso. *Justificación mínima aceptable:* menciona que se puede cambiar el diseño sin romper la lógica.

- **10 — Falso.** Tailwind y "verse bonita" no hacen instalable a una PWA. Se requieren las **tres piezas**: un **manifest** válido (name, íconos, `display: standalone`), un **service worker** registrado y servirse por **HTTPS** (normalmente al publicar en Cloud Run). *Debe nombrar al menos manifest + service worker (idealmente HTTPS/íconos) para el crédito completo.*

- **11 — Falso.** Los **checkpoints guardan el código, no los datos** de Firestore. Si regresas a un checkpoint, los registros creados en la base **siguen ahí**. *Debe señalar la distinción código vs datos.*

### A.3 Respuesta corta (5 pts c/u)

- **12 (Firestore / colección / documento).** Firestore es la **base de datos en la nube** de Firebase. Una **colección** es un conjunto de registros del mismo tipo; un **documento** es un registro individual con sus campos. Ejemplo: colección `cafeterias`, y cada café es un documento con `nombre`, `zona`, `categoria`, `especialidad`, `descripcion`, `imagenUrl`.
  - *Bandas:* **5** define ambos términos + ejemplo correcto con `cafeterias`; **3** define los términos pero con ejemplo débil o incompleto; **1** solo idea vaga de "base de datos"; **0** incorrecto.

- **13 (`onSnapshot` / tiempo real).** Mantiene una **suscripción activa**: cuando los datos cambian, la lista **se actualiza sola sin recargar**. Si alguien agrega un registro, aparece **de inmediato** en pantalla. Mejora la UX porque la información siempre está al día sin acción del usuario.
  - *Bandas:* **5** explica tiempo real + describe que el registro nuevo aparece sin recargar; **3** menciona tiempo real sin describir el efecto visible; **1** confunde con lectura única; **0** incorrecto.

- **14 (herramientas de depuración/entender).** Válidas: **View diff** (muestra qué archivos/líneas cambió la IA tras un prompt), **modo de anotación** (clic sobre un elemento del preview para señalar con precisión qué ajustar), **pestaña Code** (ver el código generado), **checkpoints** (volver a una versión estable). *Nota:* el modo de anotación sirve tanto para señalar como para depurar visualmente; se acepta.
  - *Bandas:* **5** dos herramientas correctas con su para qué; **3** dos herramientas pero explicación floja, o solo una bien explicada; **1** nombra sin explicar; **0** incorrecto. *(No dar crédito si solo repite "prompt".)*

---

## Parte B — rúbricas con bandas

> Para cada tarea: **Excelente** (rango alto), **Aceptable** (rango medio), **Insuficiente** (rango bajo). Asignar el punto dentro de la banda según qué tan completo esté.

### B.1 Prompt inicial (16 pts)

Evaluar cuatro dimensiones (4 pts c/u):

1. **Estructura del prompt:** separa claramente **Encabezado + Funcionalidad + Interfaz** (no todo mezclado).
2. **Funcionalidad concreta:** 4–6 campos **en inglés**, con un campo de categoría y 3–5 categorías coherentes con "miradores".
3. **Interfaz con criterio:** paleta con hexadecimales, jerarquía, grid 8px, al menos un estado (vacío/carga), microinteracciones.
4. **Accesibilidad y responsive:** menciona contraste AA / áreas táctiles y comportamiento por tamaño de pantalla.

| Banda | Descripción | Rango |
|-------|-------------|-------|
| **Excelente** | Prompt claro y específico, con las tres secciones bien separadas, campos en inglés coherentes, categorías pertinentes, paleta con hex, estados y accesibilidad explícitos. Se nota criterio de diseño. | **13–16** |
| **Aceptable** | Cumple la separación y da campos y algo de UI/UX, pero es genérico en 1–2 dimensiones (faltan estados, o accesibilidad, o categorías flojas, o algún campo en español). | **8–12** |
| **Insuficiente** | Prompt vago o sin separación Funcionalidad/Interfaz; campos ausentes o todos en español; sin criterio de UI/UX; o copia literal del prompt de "Ruta del Café" sin adaptarlo al caso. | **0–7** |

> *Penalización:* si entrega el prompt de "Ruta del Café" tal cual (cafeterías) en vez de "Miradores de Guate", máximo **banda Aceptable baja**.

### B.2 Criticar y mejorar un mal prompt (12 pts)

**(a) Problemas — 6 pts (2 c/u).** Problemas válidos: es **vago/subjetivo** ("bonita", "profesional", "lindos") sin criterios medibles; **no define los datos** (qué campos tiene cada artesanía); **no separa Funcionalidad de Interfaz**; **no da paleta con hex** ni jerarquía; "que tenga de todo" no define alcance ni categorías; no menciona idioma, mobile-first ni estados.
- 2 pts por cada problema real y distinto (hasta 3). Ideas repetidas cuentan como una.

**(b) Reescritura — 6 pts.**

| Banda | Descripción | Rango |
|-------|-------------|-------|
| **Excelente** | Prompt reescrito con separación Funcionalidad/Interfaz, campos en inglés (p. ej. `nombre`, `tipo`, `region`, `precio`, `imagenUrl`), paleta con hex y al menos un requisito UX (jerarquía/estados/accesibilidad). Corrige los problemas señalados. | **5–6** |
| **Aceptable** | Mejora clara respecto al original y agrega especificidad, pero le falta una de las piezas (separación, o hex, o campos en inglés). | **3–4** |
| **Insuficiente** | Sigue siendo vago; no corrige los defectos; sin campos ni paleta. | **0–2** |

### B.3 Modelo de datos (12 pts)

- **Nombre de colección (2 pts):** en inglés, plural, coherente (p. ej. `murales`, `murals`, `artworks`). *(1 pt si en español pero razonable; 0 si ausente.)*
- **Campos (7 pts):** 4–6 campos **en inglés**, cada uno con tipo y para qué; debe incluir un campo de categoría (p. ej. `categoria`/`category`) usable en el filtro, e idealmente `nombre`, `imagenUrl`, ubicación/`zona`, `descripcion`. Aproximar ~1 pt por campo bien definido (nombre inglés + tipo + propósito), hasta 7.
- **Categorías (2 pts):** 3–5 valores coherentes con murales/arte urbano.
- **Por qué en inglés (1 pt):** porque son **identificadores de código** y así los entiende/usa el sistema; el contenido sí va en español.

| Banda | Descripción | Rango |
|-------|-------------|-------|
| **Excelente** | Colección + 4–6 campos en inglés con tipo y propósito, campo de categoría claro, categorías pertinentes y justificación correcta del inglés. | **10–12** |
| **Aceptable** | Modelo razonable pero con campos incompletos, algún nombre en español, o categorías flojas. | **6–9** |
| **Insuficiente** | Campos ausentes o sin sentido, sin campo de filtro, o todo en español sin justificar. | **0–5** |

### B.4 Prompt de refinamiento / rescate (10 pts)

Debe atacar **ambos** defectos y ser **verificable**:

- **Filtro (≈4 pts):** pide revisar que, al tocar un chip, la lista muestre **solo** los registros cuyo campo `categoria` coincide exactamente, y que "Todos" muestre todos; que el chip seleccionado se resalte.
- **Imagen de respaldo (≈4 pts):** pide que, si `imagenUrl` está vacío o no carga, se muestre una **imagen/ícono de respaldo (placeholder)** en lugar del ícono roto.
- **Verificable (≈2 pts):** pide a la IA confirmar el resultado en la **vista previa** (o describir cómo comprobarlo). Refleja un cambio **acotado** (no "rehaz toda la app").

| Banda | Descripción | Rango |
|-------|-------------|-------|
| **Excelente** | Aborda los dos defectos con instrucciones claras y específicas + pide verificación en el preview; tono de "corregir esto", no de rehacer. | **8–10** |
| **Aceptable** | Aborda ambos pero de forma general, o solo uno muy bien y el otro apenas mencionado. | **4–7** |
| **Insuficiente** | Vago, solo un defecto, o pide regenerar todo sin diagnóstico. | **0–3** |

### B.5 Justificar UI/UX y accesibilidad (10 pts)

**(a) Problema — 4 pts.** Debe reconocer que **texto gris claro sobre una foto** da **contraste insuficiente / ilegible** (incumple **contraste AA** y **jerarquía visual**), y que la legibilidad varía según la zona de la foto (fondos claros y oscuros).
- **4** identifica contraste AA + jerarquía/legibilidad sobre imagen; **2** intuye que "se ve mal / no se lee" sin nombrar el principio; **0** no ve el problema.

**(b) Dos soluciones — 6 pts (3 c/u).** Soluciones válidas: **overlay/gradiente oscuro** detrás del texto; **text shadow**/capa semitransparente; poner el nombre en una **franja o card** debajo de la foto (no encima); usar **texto claro sobre zona oscurecida** con contraste AA; aumentar peso/tamaño del texto para reforzar jerarquía. Cada solución vale 3 pts (2 por la propuesta concreta + 1 por justificar que asegura contraste/jerarquía).

| Banda | Descripción | Rango |
|-------|-------------|-------|
| **Excelente** | Diagnóstico correcto con el principio nombrado + dos soluciones concretas y bien justificadas (mantienen contraste AA y jerarquía). | **8–10** |
| **Aceptable** | Diagnóstico razonable + al menos una solución sólida (la segunda floja o repetida). | **4–7** |
| **Insuficiente** | No identifica el problema de contraste o no propone soluciones viables. | **0–3** |

---

## Resumen de puntaje

| Parte | Puntos |
|-------|--------|
| A.1 Opción múltiple (8 × 2) | 16 |
| A.2 Verdadero/Falso razonado (3 × 3) | 9 |
| A.3 Respuesta corta (3 × 5) | 15 |
| **Subtotal Parte A (Teoría — 40 %)** | **40** |
| B.1 Prompt inicial | 16 |
| B.2 Criticar/mejorar prompt | 12 |
| B.3 Modelo de datos | 12 |
| B.4 Prompt de refinamiento/rescate | 10 |
| B.5 Justificar UI/UX y accesibilidad | 10 |
| **Subtotal Parte B (Práctica — 60 %)** | **60** |
| **TOTAL** | **100** |

> **Conversión al parcial del curso (20 pts):** nota del Examen Parcial = (puntos obtenidos / 100) × 20. El examen es **100 % escrito en línea**; no hay defensa. El Proyecto 1 se evalúa aparte dentro de *Proyectos* (rúbrica de entrega en `instrucciones-docente/sesion-05.md`).
