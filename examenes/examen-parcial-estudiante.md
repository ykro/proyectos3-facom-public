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

---

*(La clave de respuestas y los criterios de calificación están en la versión completa del docente.)*
