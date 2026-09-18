# Examen Final — Proyectos III (Diseño de aplicaciones móviles)

**Titulación:** Licenciatura en Comunicación y Diseño · Universidad Galileo
**Curso:** Proyectos III — Diseño de aplicaciones móviles · **Docente:** Adrián Catalán
**Trimestre:** julio–septiembre 2026 · **Sesión 10 · Examen Final escrito en línea (100 %)**
**Cubre:** semanas 4–9 (Proyecto Final — app nativa + distribución + portafolio/empleabilidad), con base acumulativa del curso.

---

## Instrucciones generales (léelas antes de empezar)

- **Modalidad:** en línea, **escrito** e **individual**. Responde con tus propias palabras.
- **Tiempo sugerido:** **75–90 minutos**.
- **Estructura:** dos partes.
  - **Parte A — Teoría (40 puntos, 40 %):** 14 ítems (opción múltiple, verdadero/falso razonado y respuesta corta).
  - **Parte B — Práctica escrita (60 puntos, 60 %):** 5 tareas aplicadas. **No programas nada:** todo se responde **escribiendo** (prompts, modelos de datos, fichas, guiones), tal como dirigirías a la IA en AI Studio.
- **Total:** **100 puntos**.
- **Materiales permitidos:** tus apuntes, las guías del curso y tu bitácora de prompts. **No** está permitido copiar respuestas de otra persona ni presentar como propio un texto generado íntegramente por la IA sin tu criterio.
- **Integridad académica:** en este curso la IA es una **herramienta** que tú diriges; el **criterio de diseño y las decisiones son tuyas**. Se evalúa **tu** capacidad de dirigirla, no la de la máquina. Copiar, suplantar o entregar trabajo ajeno anula el examen.
- **Recuerda el vocabulario del curso:** decimos **"desarrollo de software asistido por IA"**, nunca "vibe coding". Los prompts separan **Funcionalidad (qué hace)** de **Interfaz (UI/UX — cómo se ve y se siente)**.
- **Idioma:** responde en **español**. Los identificadores de código (nombres de colecciones y campos) van **en inglés/tal como se usan** (por ejemplo `uid`, `imagenUrl`, `serverTimestamp()`).

### Resumen de puntaje

| Parte | Sección | Ítems | Puntos |
|-------|---------|-------|--------|
| A | A1 · Opción múltiple | 8 | 16 |
| A | A2 · Verdadero/Falso razonado | 3 | 9 |
| A | A3 · Respuesta corta | 3 | 15 |
| **A** | **Teoría** | **14** | **40 (40 %)** |
| B | B1 · Prompt de una función nativa | 1 | 14 |
| B | B2 · Modelo de datos por usuario | 1 | 10 |
| B | B3 · Prompt de rescate | 1 | 12 |
| B | B4 · Ficha de tienda (store listing) + ASO | 1 | 12 |
| B | B5 · Guion de pitch **o** crítica de accesibilidad | 1 | 12 |
| **B** | **Práctica** | **5** | **60 (60 %)** |
| | **TOTAL** | | **100** |

---

# PARTE A — Teoría (40 puntos)

## A1 · Opción múltiple (8 ítems × 2 pts = 16 pts)

Marca **una** sola respuesta.

**1.** Un estudio de fotografía en Antigua quiere una app para que sus clientes **reserven sesiones y vean su galería privada de fotos entregadas**, con inicio de sesión y descarga de imágenes en alta resolución. ¿Qué enfoque conviene más y por qué?

- a) PWA, porque una app de fotos nunca necesita cámara ni datos privados.
- b) App nativa, porque saca provecho de datos privados por usuario y del manejo de archivos/almacenamiento en el teléfono, con una experiencia formal instalable.
- c) Da exactamente lo mismo: PWA y nativa son la misma cosa con otro nombre.
- d) Ninguna de las dos; eso solo se hace con un sitio web tradicional sin instalar.

**2.** En Google AI Studio, ¿cómo se **crea** una app **nativa** de Android (en vez de una PWA)?

- a) Instalando el SDK de Android y compilando con Gradle en la computadora.
- b) Creando una app nueva en **Build** y pidiendo en el **primer prompt** una app **nativa de Android con Kotlin y Jetpack Compose**.
- c) Publicándola primero en Google Play y luego editándola.
- d) Descargando un archivo APK y abriéndolo en el navegador.

**3.** Durante el desarrollo, la app nativa se ve en el **emulador integrado del navegador**. Para probar de verdad la **cámara** en un teléfono físico, se usa **"Install on Device"**. ¿Qué necesitas?

- a) Cuenta de desarrollador de Google Play y una revisión aprobada.
- b) Ejecutar comandos de **ADB** y tener el **SDK de Android** instalado.
- c) Un teléfono con **modo de desarrollador** y **depuración por USB** activados, y un **cable USB**; Chrome instala la app por WebUSB, **sin ADB ni SDK**.
- d) Enviarte el APK por correo e instalarlo a mano.

**4.** En una app nativa con login con Google, ¿qué representa el **`uid`** de un usuario?

- a) El nombre de la app en la tienda.
- b) Un **identificador único** que Firebase Authentication asigna a cada usuario, y que se usa para asociar y separar sus datos de los de los demás.
- c) La URL de descarga de una foto guardada en Storage.
- d) El color principal del tema Material 3.

**5.** Al guardar una entrada con foto, ¿cómo se reparte la información entre **Storage** y **Firestore**?

- a) Todo (incluida la imagen completa) se guarda dentro del documento de Firestore.
- b) La imagen (el archivo) va a **Storage**, y en **Firestore** se guarda el documento con los datos (título, nota, `uid`, `fecha`) **más la URL de descarga** de la foto en `imagenUrl`.
- c) La foto va a Firestore y los textos van a Storage.
- d) La foto va a Storage y en Firestore no se guarda absolutamente nada.

**6.** En Material 3, el componente que muestra un **botón de acción principal flotante** (por ejemplo, "+" para agregar algo nuevo) se llama:

- a) TopAppBar
- b) LazyVerticalGrid
- c) FAB (Floating Action Button)
- d) Chip

**7.** ¿Cuál es una diferencia clave entre **distribuir una PWA** y **publicar en la Google Play Store**?

- a) La PWA se comparte por **enlace** y se instala desde el navegador (sin tienda ni revisión); la app de Play Store se sube a la **consola de desarrollador**, pasa una **revisión** y se descarga desde la tienda.
- b) La PWA no se puede compartir con nadie.
- c) La Play Store es siempre gratis y la PWA siempre cobra.
- d) Ambas requieren exactamente el mismo proceso de revisión.

**8.** ¿Qué es **ASO (App Store Optimization)** y por qué le conviene a un perfil de Comunicación y Diseño?

- a) Un lenguaje de programación para apps nativas.
- b) Optimizar la **ficha de la tienda** (título, palabras clave, descripción, capturas, ícono) para que más gente **encuentre y descargue** la app; es comunicación visual aplicada, la fortaleza del diseñador.
- c) Un servicio para almacenar fotos en la nube.
- d) La velocidad de arranque de la app en el teléfono.

---

## A2 · Verdadero / Falso razonado (3 ítems × 3 pts = 9 pts)

Indica **Verdadero (V)** o **Falso (F)** y **justifica en 1–2 frases**. Sin la justificación correcta, el ítem no obtiene el puntaje completo.

**9.** *"Como AI Studio genera el código de la app nativa por mí, aprender Material 3 (TopAppBar, cards, chips, LazyVerticalGrid) no me sirve de nada."*

**10.** *"Si la regla de seguridad de Firestore permite que cualquier usuario autenticado lea todos los documentos de la colección, la app sigue siendo un diario privado siempre que la pantalla solo muestre las entradas del usuario actual."*

**11.** *"Pedir el permiso de cámara con un mensaje claro que explique para qué se usa —y dejar una alternativa si el usuario lo niega— es una decisión de UX y de confianza, no solo un requisito técnico de Android."*

---

## A3 · Respuesta corta (3 ítems × 5 pts = 15 pts)

Responde en **2–4 frases** cada una.

**12.** Explica con tus palabras **cuándo conviene una PWA y cuándo una app nativa**. Da **un ejemplo** de cada caso (pueden ser de contexto guatemalteco) y di **qué capacidad del teléfono** justifica ir a nativo.

**13.** En el curso separamos cada prompt en **Funcionalidad (qué hace)** e **Interfaz (UI/UX — cómo se ve y se siente)**. Explica **por qué** esta separación produce mejores resultados al dirigir a la IA y qué tipo de detalles van en cada bloque.

**14.** ¿Qué hace fuerte a un **caso de portafolio** de un proyecto hecho con IA? Menciona la estructura **problema → proceso → resultado** y explica por qué el **proceso** (tu bitácora de prompts y decisiones de diseño) es tan valioso para tu empleabilidad.

---

# PARTE B — Práctica escrita (60 puntos)

> En esta parte **no programas**: **escribes** lo que le dirías a la IA o lo que produce un diseñador. Usa el vocabulario del curso (Funcionalidad/Interfaz, Material 3 como vocabulario de diseño, `uid`, Storage/Firestore, reglas de seguridad, store listing, pitch). Los contextos son **distintos** a "Bitácora Visual".

---

## B1 · Redacta el prompt de una función nativa (14 pts)

**Contexto — "Cuaderno de Campo" (app nativa de Android).**
Una bióloga de la Reserva de Biosfera Maya quiere una app nativa donde cada guardarrecursos lleve su **registro privado de avistamientos de aves**: cada quien inicia sesión con Google y ve **solo sus propios** avistamientos.

**Tu tarea.** Escribe el **prompt** (en español, como lo pegarías en AI Studio) para agregar **login con Google** y hacer que los avistamientos sean **privados por usuario en Firestore**. El prompt debe:

- Estar **separado en "Funcionalidad (qué hace)"** e **"Interfaz (UI/UX — cómo se ve y se siente)"**.
- En Funcionalidad: usar **Google Sign-In (Firebase Authentication)**; mostrar login si no hay sesión y la lista si la hay; guardar/leer los avistamientos en una colección de Firestore **filtrando por `uid`** y ordenando por fecha (lo más reciente primero) **en tiempo real**; incluir **"Cerrar sesión"**.
- En Interfaz: describir la pantalla de login y cómo se ve la lista, con al menos **dos estados** (cargando y vacío) y una nota de **accesibilidad**.

*(No escribas código Kotlin: escribe el prompt en lenguaje natural.)*

**Tu respuesta:**

```
[Escribe aquí tu prompt]
```

---

## B2 · Diseña el modelo de datos por usuario (10 pts)

**Contexto — "Ruta de Murales" (app nativa).**
Una gestora cultural documenta los **murales del Centro Histórico de la Ciudad de Guatemala**. Quiere una app nativa donde cada usuaria registre los murales que fotografía, **privados por usuario**, con la foto tomada con la cámara.

**Tu tarea.** Diseña la **colección de Firestore** para esta app. Entrega:

1. El **nombre de la colección** (en inglés/tal como se usa).
2. Una **tabla de campos** con: **nombre del campo**, **tipo** y **para qué sirve**. Debes incluir obligatoriamente los campos que hacen posible: (a) **separar los datos por usuario**, (b) **ordenar por fecha**, y (c) **guardar la foto** correctamente (recordando dónde vive el archivo y qué guarda Firestore).
3. Una frase que explique **por qué Firestore no guarda la imagen completa** y qué guarda en su lugar.

**Tu respuesta:**

```
[Colección, tabla de campos y explicación]
```

---

## B3 · Escribe un prompt de rescate (12 pts)

**Contexto — fallo típico.**
En "Cuaderno de Campo" (la app de B1), tras conectar Firestore, **la lista muestra los avistamientos de TODOS los usuarios**, no solo los de quien tiene la sesión abierta. Además, sospechas que las **reglas de seguridad** quedaron demasiado abiertas.

**Tu tarea.** Escribe el **prompt de rescate** que le darías a la IA para diagnosticar y corregir el problema. Debe pedir explícitamente:

1. Que la lista **filtre por `uid`** del usuario con sesión abierta (y siga en tiempo real, ordenada por fecha descendente).
2. Que ajuste las **reglas de seguridad** para que **cada usuario solo pueda leer y modificar sus propios documentos** (a nivel conceptual: donde `uid == request.auth.uid`).
3. Que, si la consulta ordenada por fecha **pide crear un índice**, te lo indique y explique **por qué** (en lenguaje sencillo).

Además, responde en **una frase**: según la **regla de los 2 strikes**, ¿qué haces si esta corrección no funciona tras un segundo intento?

**Tu respuesta:**

```
[Prompt de rescate]
```

Regla de los 2 strikes: `[tu respuesta en una frase]`

---

## B4 · Ficha de tienda (store listing) + ASO (12 pts)

**Contexto — "Antojitos Cerca" (app nativa).**
Una app nativa que ayuda a encontrar y guardar los mejores **puestos de comida callejera chapina** (chuchitos, tostadas, rellenitos, elotes locos) cerca del usuario, con fotos y notas. Va dirigida a Google Play.

**Tu tarea.** Redacta su **ficha de tienda**. Entrega:

1. **Título** de la app en la tienda (incluye **una palabra clave**; máx. ~30 caracteres).
2. **Descripción corta** (1 frase de **gancho**, orientada a **beneficio**; máx. ~80 caracteres).
3. **Descripción larga** (4–6 frases: qué hace, para quién, beneficios, y **qué la hace distinta**).
4. **3 palabras clave de ASO** (los términos por los que la gente la buscaría).
5. **Categoría** sugerida en la tienda.

**Tu respuesta:**

```
Título:
Descripción corta:
Descripción larga:
Palabras clave ASO (3):
Categoría:
```

---

## B5 · Elige UNA: guion de pitch **o** crítica de accesibilidad (12 pts)

Resuelve **solo una** de las dos opciones. Indica cuál elegiste.

### Opción 5A — Guion de pitch (2–3 min)

**Contexto — "Recetario de la Abuela" (app nativa).**
Una app nativa privada donde cada persona guarda las **recetas familiares** que va rescatando (foto del platillo con la cámara, ingredientes y el paso a paso), con login para que solo el dueño las vea.

Escribe el **guion de pitch** para el Demo Day, con las **cuatro partes** trabajadas en el curso:

- **Gancho** (qué es y para quién, 1 frase).
- **Demo en vivo** (qué mostrarías funcionando, en orden: login, la lista/recetas, agregar una con la cámara).
- **Proceso** (cómo lo dirigiste con IA: menciona **una** decisión de diseño o de seguridad).
- **Cierre** (por qué representa tu valor como creativo/profesional).

### Opción 5B — Crítica de accesibilidad

Un compañero presenta su app nativa "Recetario de la Abuela" con estas decisiones de UI:

- Texto gris claro (#BBBBBB) sobre fondo crema.
- Botones de "guardar" y "borrar" de 24×24 dp, juntos.
- Las fotos de los platillos no tienen ninguna descripción alternativa.
- El único aviso de error ("algo salió mal") aparece 1 segundo y desaparece.
- El diálogo del permiso de cámara solo dice "Permitir cámara".

Escribe una **crítica de accesibilidad y UX**: identifica **al menos 4 problemas**, explica **por qué** cada uno afecta a personas reales (incluyendo quienes usan lectores de pantalla o tienen baja visión) y da una **recomendación concreta** para cada uno. Menciona los criterios del curso (contraste **AA**, áreas táctiles **≥ 48 dp**, textos alternativos, estados claros).

**Tu respuesta (indica 5A o 5B):**

```
[Tu respuesta]
```

---

# FIN DEL EXAMEN

> Revisa que respondiste **las 14 preguntas de la Parte A** y **las 5 tareas de la Parte B** (en B5 solo una opción). Cuida la ortografía y la claridad: la comunicación es parte de tu evaluación.

---
---

---

*(La clave de respuestas y los criterios de calificación están en la versión completa del docente.)*
