# Prompts de las demos del docente

Estos son los prompts de las **demos que el docente construye en vivo** en cada sesión de contenido. Son **mini-apps distintas de la app insignia del estudiante** (Ruta del Café / Bitácora Visual): sirven para que el profe muestre el flujo de **desarrollo de software asistido por IA** en Google AI Studio (Build) frente a la clase, con un ejemplo fresco, antes de que el estudiante trabaje su propia app.

**Cada demo tiene un slide "Demo del docente" en su sesión y sus prompts aquí** (decisión jul-2026: sí aparecen en slides; **no** en las guías del estudiante). Se referencian también desde `instrucciones-docente/`.

**Cómo están escritos.** Igual que los bancos del estudiante: cada prompt inicial separa la **Funcionalidad (qué hace)** de la **Interfaz (UI/UX — cómo se ve y se siente)**, seguido de 1–2 refinamientos y una nota de qué ilustra la demo. Nunca "vibe coding": siempre **desarrollo de software asistido por IA**. Material 3 se usa como **vocabulario de diseño**, no como programación.

## Una demo por sesión de contenido

| Sesión | Demo | Naturaleza | Ilustra |
|--------|------|-----------|---------|
| 1 | Antojitos Chapines | PWA React, datos en memoria | Primer prompt, tarjetas, paleta, chips |
| 2 | Adopta un Peludo | PWA React, datos en memoria | Identidad visual, hero, badges de estado |
| 3 | Recetario Rápido | PWA React + Firestore | Datos persistentes en la nube |
| 4 | Mi Estantería | Nativa Kotlin + Compose, en memoria | Primera app nativa, TopAppBar/FAB/lista |
| 6 | Diario de Viajes | Nativa + Auth + Firestore | Login y datos por usuario |
| 7 | Foto del Día | Nativa + cámara (CameraX) | Cámara y permisos |

## Paleta de marca (única, ambos proyectos)
Fondo crema #FDF6EC · Vino #6D2E46 (principal) · Terracota #C84B31 · Mostaza #E3B23C · Texto #2B2B2B. Badges extra: verde #4F772D, azul #3A6B7E.

---

# Sesión 1 — Antojitos Chapines (PWA React)

Catálogo de antojitos callejeros de Guatemala en tarjetas, con filtro por categoría con chips. Datos de ejemplo en memoria (aún sin base de datos). El docente lo construye en vivo para mostrar el **primer prompt** y cómo la paleta y las tarjetas aparecen "de un jalón".

## Prompt inicial

> Crea una aplicación web usando React con Tailwind CSS que funcione como un catálogo de antojitos callejeros de Guatemala llamado "Antojitos Chapines". Toda la interfaz en español (Guatemala). Quiero una UI/UX de altísima calidad, mobile-first, con jerarquía visual clara y aire generoso.
>
> **Funcionalidad (qué hace):**
> - Muestra antojitos en tarjetas. Genera 9 antojitos de ejemplo dentro de la app (aún sin base de datos). Cada antojito tiene: `nombre` (texto; ej. "Tostadas de frijol", "Chuchitos", "Shucos", "Rellenitos", "Atol de elote", "Elotes locos", "Garnachas", "Tamalitos de chipilín", "Champurradas"), `categoria` (una de: "Salados", "Dulces", "Bebidas"), `descripcion` (1–2 frases con antojo), `imagenUrl` (placeholder por ahora).
> - Variedad real: mezcla antojitos salados, dulces y bebidas típicas de la calle guatemalteca, con respeto y sin estereotipos.
>
> **Interfaz (UI/UX):**
> - Header con "Antojitos Chapines" y subtítulo "Sabores de la calle guatemalteca"; debajo, la cuadrícula de tarjetas.
> - Tarjeta (card): imagen arriba; luego `nombre` en negrita (dominante); `descripcion` como texto secundario; y un badge de color con la `categoria`.
> - Cada imagen (campo `imagenUrl`) debe llevar **texto alternativo descriptivo** (por ejemplo, el nombre del antojito); los íconos puramente decorativos se marcan como decorativos para lectores de pantalla.
> - Color: fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Color con propósito.
> - Tipografía con carácter editorial en títulos; espaciado en grid de 8px con aire generoso.
> - Estado vacío amable ("Aún no hay antojitos").
> - Microinteracciones: bordes redondeados, sombra suave, hover sutil (elevación + sombra) con transición 250ms.
> - Accesibilidad: contraste AA, áreas táctiles de mínimo 44×44 px. Responsive: 1 col teléfono, 2 tablet, 3 escritorio.
>
> **Estructura del código:**
> - Componentes separados: `Header`, `ListaAntojitos`, `TarjetaAntojito`, `FiltroCategoria`, más `App`. Datos de ejemplo en `data/antojitos.js`.
> - Comentarios en cada componente con el formato:
> ```
> // CONCEPTO: [...]
> // QUE HACE: [...]
> // POR QUE: [...]
> ```

## Refinamiento 1: Filtro por categoría con chips

> **Qué construimos:** un filtro por categoría bajo el header.
>
> **Funcionalidad (qué hace):**
> - Un chip por categoría (Salados, Dulces, Bebidas) más un chip "Todos". Al tocarlo, la lista muestra solo esa categoría; "Todos" muestra todas. Se aplica de inmediato.
>
> **Interfaz (UI/UX):**
> - Chips redondeados en fila horizontal. Seleccionado: fondo vino #6D2E46 y texto blanco; los demás con fondo claro y borde sutil. En teléfono, scroll horizontal sin romper el layout. Transición 200ms.

## Refinamiento 2: Color de badge por categoría

> **Qué construimos:** el sistema de color por categoría (casi puro Interfaz).
>
> **Interfaz (UI/UX):**
> - Badge de categoría con color: "Salados" #C84B31 (terracota, texto blanco), "Dulces" #E3B23C (mostaza, texto oscuro #3a2c00 por contraste), "Bebidas" #3A6B7E (azul, texto blanco). Bordes redondeados, padding horizontal. Usa estos colores de forma consistente en todas las tarjetas.

**Qué ilustra en la sesión:** el **primer prompt de la vida** del estudiante. Que un solo prompt bien escrito (Funcionalidad + Interfaz) produce una app con **tarjetas**, la **paleta vino** aplicada y datos de ejemplo. Los **chips** de filtro muestran el primer refinamiento y la lógica de "seleccionar → filtrar" sin tocar el código a mano.

---

# Sesión 2 — Adopta un Peludo (PWA React)

Catálogo de mascotas en adopción, con foto, estado (En adopción / Vacunado) y filtro por especie. Datos en memoria. El docente lo usa para subir el nivel de **identidad visual**: un **hero** con carácter y **badges de estado** (no solo de categoría).

## Prompt inicial

> Crea una aplicación web usando React con Tailwind CSS que funcione como un catálogo de mascotas en adopción llamado "Adopta un Peludo". Toda la interfaz en español (Guatemala). Quiero una UI/UX de altísima calidad, mobile-first, cálida y con mucha personalidad, con jerarquía visual clara y aire generoso.
>
> **Funcionalidad (qué hace):**
> - Muestra mascotas en tarjetas. Genera 8 mascotas de ejemplo dentro de la app (aún sin base de datos). Cada mascota tiene: `nombre` (texto; ej. "Canela", "Firulais", "Michi", "Pelusa"), `especie` (una de: "Perro", "Gato"), `edad` (texto; ej. "2 meses", "3 años"), `descripcion` (1–2 frases con personalidad del animal), `estado` (una de: "En adopción", "Vacunado", "En proceso"), `imagenUrl` (placeholder por ahora).
> - Variedad de perros y gatos, edades y personalidades.
>
> **Interfaz (UI/UX):**
> - **Hero** arriba: título "Adopta un Peludo" grande, subtítulo "Encuentra a tu nuevo mejor amigo en Guatemala" y un gradiente sutil de la paleta (vino #6D2E46 a terracota #C84B31), con buen contraste del texto. Debajo, la cuadrícula de tarjetas.
> - Tarjeta (card): foto arriba (dominante, esquinas redondeadas); luego `nombre` en negrita; `edad` en texto secundario; `descripcion` corta; y un **badge de estado** con color.
> - Cada imagen (campo `imagenUrl`) debe llevar **texto alternativo descriptivo** (por ejemplo, el nombre y la especie); los íconos puramente decorativos se marcan como decorativos para lectores de pantalla.
> - Color: fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Color con propósito.
> - Tipografía con carácter editorial en títulos; espaciado en grid de 8px con aire generoso.
> - Estado vacío amable ("Por ahora no hay peluditos en adopción").
> - Microinteracciones: bordes redondeados, sombra suave, hover sutil (elevación + sombra) con transición 250ms.
> - Accesibilidad: contraste AA, áreas táctiles de mínimo 44×44 px. Responsive: 1 col teléfono, 2 tablet, 3 escritorio.
>
> **Estructura del código:**
> - Componentes separados: `Hero`, `ListaMascotas`, `TarjetaMascota`, `FiltroEspecie`, más `App`. Datos de ejemplo en `data/mascotas.js`.
> - Comentarios en cada componente con el formato:
> ```
> // CONCEPTO: [...]
> // QUE HACE: [...]
> // POR QUE: [...]
> ```

## Refinamiento 1: Badges de estado con color

> **Qué construimos:** el sistema de color por estado (casi puro Interfaz).
>
> **Interfaz (UI/UX):**
> - Badge de estado con color: "En adopción" #4F772D (verde, texto blanco), "Vacunado" #3A6B7E (azul, texto blanco), "En proceso" #E3B23C (mostaza, texto oscuro #3a2c00 por contraste). Bordes redondeados, padding horizontal. Colócalo sobre la foto (esquina) o justo bajo el nombre, consistente en todas las tarjetas.

## Refinamiento 2: Filtro por especie

> **Qué construimos:** un filtro por especie bajo el hero.
>
> **Funcionalidad (qué hace):**
> - Un chip por especie (Perro, Gato) más un chip "Todos". Al tocarlo, la lista muestra solo esa especie; "Todos" muestra todas. Se aplica de inmediato.
>
> **Interfaz (UI/UX):**
> - Chips redondeados en fila horizontal. Seleccionado: fondo vino #6D2E46 y texto blanco; los demás con fondo claro y borde sutil. Transición 200ms.

**Qué ilustra en la sesión:** cómo darle **identidad visual** a una app con un **hero** (gradiente de la paleta, no solo un header plano) y cómo los **badges de estado** comunican información distinta de la categoría (situación de la mascota). Refuerza el patrón catálogo → tarjeta → filtro que el estudiante ya vio, en un dominio nuevo.

---

# Sesión 3 — Recetario Rápido (PWA React + Firebase Firestore)

Formulario "Nueva receta" + lista en tiempo real desde Firestore. El docente lo usa para mostrar el **salto a datos persistentes en la nube**: lo que se guarda ya no se pierde al recargar, y aparece solo (onSnapshot) con **estados de vacío / cargando / error**.

## Prompt inicial

> Crea una aplicación web usando React con Tailwind CSS que funcione como un recetario personal llamado "Recetario Rápido", donde puedo anotar recetas rápidas y verlas en una lista. Toda la interfaz en español (Guatemala). Quiero una UI/UX de altísima calidad, mobile-first, con jerarquía visual clara y aire generoso.
>
> **Funcionalidad (qué hace):**
> - Un formulario "Nueva receta" con `nombre` (texto), `tiempo` (texto; ej. "20 minutos"), `descripcion` (texto, pasos breves). Al guardar, agrega la receta a la lista.
> - Debajo, la **lista de recetas** en tarjetas. Por ahora genera 4 recetas de ejemplo dentro de la app (aún sin base de datos): ej. "Frijoles volteados", "Licuado de banano", "Huevos rancheros chapines", "Ponche de frutas".
> - Valida que `nombre` no esté vacío (muestra el error debajo del campo).
>
> **Interfaz (UI/UX):**
> - Header con "Recetario Rápido" y subtítulo "Tus recetas, siempre a la mano".
> - Formulario arriba (o en un panel): campos bien espaciados, etiquetas claras, botón primario "Guardar receta" en vino #6D2E46. Mensaje de éxito al guardar.
> - Tarjeta de receta: `nombre` en negrita (dominante), `tiempo` con un ícono de reloj como texto secundario, `descripcion` con buen interlineado.
> - Color: fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Color con propósito.
> - Tipografía con carácter editorial en títulos; espaciado en grid de 8px con aire generoso.
> - Estado vacío amable ("Aún no tienes recetas. Agrega la primera.").
> - Microinteracciones: bordes redondeados, sombra suave, transición 250ms.
> - Accesibilidad: contraste AA, áreas táctiles de mínimo 44×44 px. Responsive.
>
> **Estructura del código:**
> - Componentes separados: `Header`, `FormularioReceta`, `ListaRecetas`, `TarjetaReceta`, más `App`. Datos de ejemplo en `data/recetas.js`.
> - Comentarios en cada componente con el formato:
> ```
> // CONCEPTO: [...]
> // QUE HACE: [...]
> // POR QUE: [...]
> ```

## Refinamiento 1: Firestore en tiempo real

*Cuando AI Studio ofrezca habilitar Firebase, acepta. Si no, escribe: "Habilita Firebase Firestore para esta aplicación".*

> **Qué construimos:** las recetas se guardan y se leen desde Firestore.
>
> **Funcionalidad (qué hace):**
> - Colección "recetas"; documentos con `nombre`, `tiempo`, `descripcion` y `creadoEn` = serverTimestamp(). Lee con onSnapshot (tiempo real) y limpia la suscripción al desmontar. El formulario "Nueva receta" crea un documento con addDoc; onSnapshot lo muestra sin recargar. Si la colección está vacía, siembra las 4 recetas de ejemplo con addDoc.
>
> **Interfaz (UI/UX):**
> - Estado de carga (skeleton de tarjetas o "Cargando recetas…") y estado vacío amable. El resto no cambia.

## Refinamiento 2: Estado de error con "Reintentar"

> **Qué construimos:** un estado de error distinto del estado vacío.
>
> **Interfaz (UI/UX):**
> - Cuando la lectura de "recetas" falle (sin conexión o error de Firestore), muestra un **estado de error**: un mensaje amable en español ("No pudimos cargar las recetas. Revisa tu conexión.") y un botón **"Reintentar"** que vuelve a intentar la lectura. No lo confundas con "Aún no tienes recetas" (ese es el estado vacío, cuando no hay error).

**Qué ilustra en la sesión:** el **salto a la nube**. Con la versión en memoria, al recargar se pierde todo; con Firestore, lo que se guarda **persiste y aparece solo** (tiempo real). El docente muestra los tres estados que toda app con datos necesita —**cargando, vacío, error (con Reintentar)**— y cómo Firebase se **auto-provisiona** en AI Studio sin entrar a la consola.

---

# Sesión 4 — Mi Estantería (App nativa Kotlin + Jetpack Compose)

Lista de libros leídos (título, autor, estrellas), datos en memoria, con un FAB para agregar. Es la **primera app nativa** de la clase: el docente la usa para mostrar que AI Studio genera un proyecto **Android nativo** (no una web) y el **vocabulario Material 3**: TopAppBar, FAB, lista.

## Prompt inicial

> Crea una app nativa de Android usando Kotlin y Jetpack Compose (Material 3) llamada "Mi Estantería", donde llevo la cuenta de los libros que he leído y cuánto me gustaron. Toda la interfaz en español (Guatemala); identificadores de código en inglés. Quiero una UI/UX de altísima calidad, limpia y con carácter editorial.
>
> **Funcionalidad (qué hace):**
> - Pantalla principal (mi estantería): muestra los libros leídos. Por ahora genera 6 libros de ejemplo dentro de la app (aún sin base de datos). Cada libro tiene `titulo` (texto), `autor` (texto) y `estrellas` (número del 1 al 5).
> - Un FAB "+" para agregar (por ahora solo el botón).
>
> **Interfaz (UI/UX):**
> - **TopAppBar** con "Mi Estantería". Debajo, los libros en una **lista** vertical (LazyColumn).
> - Cada libro es una tarjeta (fila): `titulo` en negrita (dominante), `autor` en texto secundario, y las `estrellas` como íconos (1 a 5, las llenas en mostaza #E3B23C).
> - Las estrellas deben tener **texto alternativo** que diga la calificación (ej. "4 de 5 estrellas") para lectores de pantalla; los íconos decorativos se marcan como decorativos.
> - **FAB** "+" en la esquina inferior derecha, color vino #6D2E46.
> - Paleta (define en el tema Material 3): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B.
> - Tipografía con carácter editorial; espaciado en grid de 8dp con aire generoso.
> - Estado vacío amable: "Tu estantería está vacía. Agrega el primer libro."
> - Accesibilidad: contraste AA, áreas táctiles ≥ 48dp.
>
> **Estructura:** una función composable por pantalla; separa UI de la lógica de datos; comentarios CONCEPTO / QUE HACE / POR QUE.
>
> Cuando termines, dime cómo verla en la vista previa (emulador del navegador).

## Refinamiento 1: Agregar libro con un formulario

> **Qué construimos:** que el FAB "+" abra un formulario para agregar un libro (aún en memoria).
>
> **Funcionalidad (qué hace):**
> - El FAB "+" abre "Nuevo libro" con `titulo`, `autor` y un selector de `estrellas` (1 a 5). Al guardar, agrega el libro a la lista en memoria. Valida que el título no esté vacío.
>
> **Interfaz (UI/UX):**
> - Formulario (pantalla o diálogo Material 3): campos bien espaciados, etiquetas claras, un selector de estrellas tocable, botón primario "Guardar" en vino #6D2E46. Mensaje de éxito.

## Refinamiento 2: Aspecto de las estrellas

> **Qué construimos:** afinar el indicador de calificación (solo Interfaz).
>
> **Interfaz (UI/UX):**
> - Muestra siempre 5 estrellas: las de la calificación en mostaza #E3B23C (llenas) y el resto en contorno gris suave, para que se lea la nota de un vistazo. Alínealas con el título y deja aire alrededor.

**Qué ilustra en la sesión:** la **primera app nativa**. Que el mismo AI Studio genera Android real (Kotlin + Compose) y se ve en el **emulador del navegador**. Introduce el **vocabulario Material 3 como diseño**: **TopAppBar**, **FAB**, **lista** — sin enseñar a programar Compose. El estudiante reconoce estos componentes como piezas de diseño que puede pedir.

---

# Sesión 6 — Diario de Viajes (Nativa + Firebase Auth + Firestore)

Login con Google y entradas privadas por usuario en tiempo real. El docente la usa para mostrar **login y datos por usuario**: cada quien ve **solo sus** viajes, y las reglas por `uid` protegen la privacidad.

## Prompt inicial

> Crea una app nativa de Android usando Kotlin y Jetpack Compose (Material 3) llamada "Diario de Viajes", donde cada usuario guarda los lugares que ha visitado con una nota, de forma privada. Toda la interfaz en español (Guatemala); identificadores de código en inglés. Quiero una UI/UX de altísima calidad, limpia y con carácter editorial.
>
> **Funcionalidad (qué hace):**
> - Pantalla principal (mi diario): muestra las entradas de viaje del usuario. Por ahora genera 5 entradas de ejemplo dentro de la app (luego conectamos la nube). Cada entrada tiene `lugar` (texto; ej. "Semuc Champey", "Tikal", "Lago de Atitlán", "Antigua Guatemala", "Volcán de Pacaya"), `nota` (texto) y `fecha`.
> - Un FAB "+" para agregar (por ahora solo el botón).
>
> **Interfaz (UI/UX):**
> - **TopAppBar** con "Diario de Viajes". Debajo, las entradas en una **lista** vertical (LazyColumn).
> - Tarjeta de entrada: `lugar` en negrita (dominante), `nota` con buen interlineado, y la `fecha` en texto secundario pequeño.
> - **FAB** "+" en la esquina inferior derecha, color vino #6D2E46.
> - Paleta (tema Material 3): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B.
> - Tipografía con carácter editorial; espaciado en grid de 8dp con aire generoso.
> - Estado vacío amable: "Tu diario está en blanco. Anota tu primer viaje."
> - Accesibilidad: contraste AA, áreas táctiles ≥ 48dp.
>
> **Estructura:** una función composable por pantalla; separa UI de la lógica de datos; comentarios CONCEPTO / QUE HACE / POR QUE.
>
> Cuando termines, dime cómo verla en la vista previa (emulador del navegador).

## Refinamiento 1: Login con Google

*Cuando AI Studio ofrezca "Enable Firebase", acepta.*

> **Qué construimos:** login con Google para que el diario sea privado de cada usuario.
>
> **Funcionalidad (qué hace):**
> - Google Sign-In de Firebase Authentication. Si no hay sesión, muestra login; si la hay, muestra el diario. Opción "Cerrar sesión". (Aprobaré "Enable Firebase" cuando lo pidas.)
>
> **Interfaz (UI/UX):**
> - Login: tarjeta centrada con "Diario de Viajes" en vino #6D2E46, la frase "Tus viajes, solo tuyos" y un botón "Iniciar sesión con Google" claro y con área táctil de mínimo 48dp, sobre fondo crema.
> - En el diario, avatar/nombre del usuario en la TopAppBar con la opción "Cerrar sesión".

## Refinamiento 2: Entradas en Firestore (por usuario)

> **Qué construimos:** las entradas se guardan/leen desde Firestore, privadas por usuario, y el FAB crea una entrada nueva.
>
> **Funcionalidad (qué hace):**
> - Colección "viajes"; documentos con `lugar`, `nota`, `fecha` (serverTimestamp()) y `uid`. El diario muestra solo las entradas del usuario actual (filtra por uid), ordenadas por fecha descendente. Lee en tiempo real (snapshots). El FAB "+" abre "Nuevo viaje" con `lugar` y `nota`; al guardar, crea el documento con el uid del usuario. Reemplaza los datos de ejemplo por los de Firestore. Valida que el lugar no esté vacío.
> - Pídele a la IA que ajuste las **reglas de seguridad**: solo autenticados leen/escriben; un usuario solo crea documentos con su propio uid (request.auth.uid == request.resource.data.uid) y solo lee/actualiza/borra donde uid == request.auth.uid. Explícamelas.
>
> **Interfaz (UI/UX):**
> - Estado de carga (skeleton de tarjetas) y estado vacío amable para el usuario sin entradas. Formulario "Nuevo viaje" con campos bien espaciados y botón primario "Guardar" en vino #6D2E46. La lista no cambia de aspecto.

**Qué ilustra en la sesión:** **login y datos por usuario**. El docente inicia sesión con dos cuentas (o cierra y abre sesión) para mostrar que cada usuario ve **solo sus** viajes: los datos están **filtrados por `uid`** y las **reglas de seguridad** impiden ver los de otro. Es el concepto de privacidad que sostiene la Bitácora Visual del estudiante.

---

# Sesión 7 — Foto del Día (Nativa + cámara CameraX)

Un botón "Tomar la foto de hoy" que abre la **cámara** (con permiso en tiempo de ejecución) y una galería de días anteriores. El docente la usa para mostrar **cámara y permisos** en un teléfono real con "Install on Device".

## Prompt inicial

> Crea una app nativa de Android usando Kotlin y Jetpack Compose (Material 3) llamada "Foto del Día", donde cada día tomo una foto para recordar el día, y veo una galería con las fotos de días anteriores. Toda la interfaz en español (Guatemala); identificadores de código en inglés. Quiero una UI/UX de altísima calidad, limpia y con carácter editorial.
>
> **Funcionalidad (qué hace):**
> - Pantalla principal: un botón grande **"Tomar la foto de hoy"** y, debajo, una **galería** con las fotos de días anteriores. Por ahora genera 4 fotos de ejemplo dentro de la app (luego conectamos la cámara). Cada foto tiene `imagenUrl` (placeholder) y `fecha`.
>
> **Interfaz (UI/UX):**
> - **TopAppBar** con "Foto del Día". Debajo, el botón primario "Tomar la foto de hoy" (grande, prominente, en vino #6D2E46), y luego la galería en una cuadrícula de 2 columnas (LazyVerticalGrid) tipo mosaico.
> - Tarjeta de foto: la imagen (esquinas redondeadas, dominante) y la `fecha` en texto secundario pequeño.
> - Cada imagen (campo `imagenUrl`) debe llevar **texto alternativo descriptivo** (por ejemplo, "Foto del [fecha]"); los íconos puramente decorativos se marcan como decorativos para lectores de pantalla.
> - Paleta (tema Material 3): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B.
> - Tipografía con carácter editorial; espaciado en grid de 8dp con aire generoso.
> - Estado vacío amable: "Aún no tienes fotos. Captura la de hoy."
> - Accesibilidad: contraste AA, áreas táctiles ≥ 48dp.
>
> **Estructura:** una función composable por pantalla; separa UI de la lógica de datos; comentarios CONCEPTO / QUE HACE / POR QUE.
>
> Cuando termines, dime cómo verla en la vista previa (emulador del navegador).

## Refinamiento 1: Cámara con permiso en tiempo de ejecución

*La cámara funciona de verdad en un teléfono físico; instala con "Install on Device".*

> **Qué construimos:** que "Tomar la foto de hoy" abra la cámara y agregue la foto a la galería.
>
> **Funcionalidad (qué hace):**
> - El botón "Tomar la foto de hoy" abre la cámara (CameraX). **Solicita el permiso de cámara en tiempo de ejecución**; si el usuario lo concede, toma la foto y la agrega a la galería con la fecha de hoy; si lo niega, explica con calma para qué se usa la cámara y deja la app utilizable. Muestra **vista previa** de la foto capturada antes de agregarla.
>
> **Interfaz (UI/UX):**
> - "Tomar la foto de hoy" es la acción principal, la más prominente de la pantalla. Vista previa de la foto capturada antes de guardar. **Mensaje de permiso claro en español** ("Necesitamos la cámara para tomar tu foto del día"). Si el permiso está denegado permanentemente, ofrece un enlace a los ajustes.

## Refinamiento 2: Una sola foto por día

> **Qué construimos:** la regla de "una foto por día" (Funcionalidad + Interfaz).
>
> **Funcionalidad (qué hace):**
> - Si ya se tomó la foto de hoy, el botón cambia a "Ya tomaste la foto de hoy" (deshabilitado o con opción de "Volver a tomar"), y la foto de hoy encabeza la galería.
>
> **Interfaz (UI/UX):**
> - Destaca la foto de hoy arriba (más grande o con un borde de acento mostaza #E3B23C) y el resto en la cuadrícula. Estado claro entre "pendiente hoy" y "ya tomada".

**Qué ilustra en la sesión:** **cámara y permisos**. El docente conecta un teléfono con **"Install on Device"** y toma una foto en vivo, mostrando el **diálogo de permiso en tiempo de ejecución** y qué hacer si el usuario lo niega. Es la capacidad clave que hace que la Bitácora Visual sea **cámara-first**, probada en hardware real.
