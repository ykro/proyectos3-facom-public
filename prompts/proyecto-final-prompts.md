# Proyecto Final (App nativa Android) — Prompts: Bitácora Visual

App de referencia para el proyecto final: una **app nativa de Android** que funciona como un **diario visual privado**. El usuario inicia sesión con Google y captura, con la **cámara**, fotos que le inspiran (con una nota); solo él ve su bitácora. Se construye **en Google AI Studio**, que genera apps nativas con **Kotlin + Jetpack Compose**, sin escribir código y sin salir del navegador.

A diferencia de una PWA, aquí AI Studio genera un proyecto **nativo de Android**: lo ves en el **emulador integrado del navegador** y lo instalas en tu teléfono con **"Install on Device"** (WebUSB, sin ADB ni SDK). Firebase se configura solo (auto-provisioning).

**Cómo están escritos estos prompts.** Cada prompt separa **Funcionalidad (qué hace)** de **Interfaz (UI/UX)**, con UI/UX explícito y de alta calidad.

## Tips para el flujo nativo en AI Studio

- En AI Studio (Build), crea una app nueva y en el primer prompt pide una **app nativa de Android con Kotlin y Jetpack Compose**. Modelo por defecto: **Gemini 3.5 Flash**.
- La **vista previa** es un emulador de Android en el navegador; se actualiza sola tras cada cambio (no "corres" nada).
- Para probar en un teléfono real (cámara), usa **"Install on Device"**: conecta el teléfono por USB (modo desarrollador + depuración USB), elige el dispositivo en el selector de Chrome y AI Studio instala la app.
- Depura con el **modo de anotación**, **View diff** y la pestaña **Code**. Guarda **checkpoints** antes de cambios grandes.
- Cuando AI Studio ofrezca **"Enable Firebase"**, acepta. Configura Authentication, Firestore y Storage automáticamente; no entras a la consola ni manejas archivos de configuración ni SHA-1.

## Paleta de marca
Fondo crema #FDF6EC · Vino #6D2E46 (principal) · Terracota #C84B31 · Mostaza #E3B23C · Texto #2B2B2B.

## Colección `entradas`
`titulo` (texto) · `nota` (texto) · `imagenUrl` (texto) · `uid` (id del usuario) · `fecha` (serverTimestamp).

---

## Prompt inicial

> Crea una app nativa de Android usando Kotlin y Jetpack Compose (Material 3) llamada "Bitácora Visual", un diario visual personal donde el usuario guarda fotos que le inspiran con una nota. Toda la interfaz en español (Guatemala); identificadores de código en inglés. Quiero una UI/UX de altísima calidad, limpia y con carácter editorial.
>
> **Funcionalidad (qué hace):**
> - Pantalla principal (bitácora): muestra las entradas. Por ahora genera 6 entradas de ejemplo dentro de la app (luego conectamos la nube). Cada entrada tiene `titulo` (texto), `nota` (texto), `imagenUrl` (placeholder).
> - Un FAB "+" para agregar (por ahora solo el botón).
>
> **Interfaz (UI/UX):**
> - TopAppBar con "Bitácora Visual". Debajo, las entradas en una cuadrícula de 2 columnas (LazyVerticalGrid) tipo mosaico.
> - Tarjeta de entrada: foto arriba (dominante, esquinas redondeadas), debajo `titulo` en negrita y la fecha en texto secundario pequeño.
> - Cada imagen (campo `imagenUrl`) debe llevar **texto alternativo descriptivo** (por ejemplo, el título y el tipo de la entrada); los íconos puramente decorativos se marcan como decorativos para lectores de pantalla.
> - FAB "+" en la esquina inferior derecha, color vino #6D2E46.
> - Paleta (define en el tema Material 3): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B.
> - Tipografía con carácter editorial; espaciado en grid de 8dp con aire generoso.
> - Estado vacío amable: "Tu bitácora está en blanco. Captura tu primera inspiración."
> - Accesibilidad: contraste AA, áreas táctiles ≥ 48dp.
>
> **Estructura:** una función composable por pantalla; separa UI de la lógica de datos; comentarios CONCEPTO / QUE HACE / POR QUE.
>
> Cuando termines, dime cómo verla en la vista previa (emulador del navegador).

---

## Refinamiento 1: Login con Google

> **Qué construimos:** login con Google para que la bitácora sea privada de cada usuario.
>
> **Funcionalidad (qué hace):**
> - Google Sign-In de Firebase Authentication. Si no hay sesión, muestra login; si la hay, muestra la bitácora. Opción "Cerrar sesión". (Aprobaré "Enable Firebase" cuando lo pidas.)
>
> **Interfaz (UI/UX):**
> - Login: tarjeta centrada con "Bitácora Visual" en vino #6D2E46, la frase "Tu diario visual privado" y un botón "Iniciar sesión con Google" claro y con área táctil de mínimo 48dp, sobre fondo crema.
> - En la bitácora, avatar/nombre del usuario en la TopAppBar con la opción "Cerrar sesión".

---

## Refinamiento 2: Entradas en Firestore (por usuario)

> **Qué construimos:** las entradas se guardan/leen desde Firestore, privadas por usuario.
>
> **Funcionalidad (qué hace):**
> - Colección "entradas"; documentos con titulo, nota, imagenUrl, uid, fecha (serverTimestamp()). La bitácora muestra solo las entradas del usuario actual (filtra por uid), ordenadas por fecha descendente. Lee en tiempo real (snapshots). Reemplaza los datos de ejemplo por los de Firestore.
>
> **Interfaz (UI/UX):**
> - Estado de carga (skeleton de tarjetas) y estado vacío amable para el usuario sin entradas. La cuadrícula no cambia de aspecto.

---

## Refinamiento 3: Crear entrada con foto (Storage)

> **Qué construimos:** un formulario para crear una entrada con foto.
>
> **Funcionalidad (qué hace):**
> - El FAB "+" abre "Nueva entrada" con titulo, nota y la opción de elegir foto de la galería. Al guardar, sube la foto a Storage en "entradas/{uid}/{timestamp}.jpg", obtén la URL y guárdala en imagenUrl al crear el documento (uid + fecha serverTimestamp()). Snapshots la muestran automáticamente. Valida que el título no esté vacío.
>
> **Interfaz (UI/UX):**
> - Vista previa de la foto arriba, campos titulo y nota bien espaciados, botón primario "Guardar" en vino #6D2E46. Muestra progreso al subir y deshabilita "Guardar" hasta terminar. Mensaje de éxito. Carga imágenes con Coil.

---

## Refinamiento 4: Cámara (captura en el momento)

*La cámara funciona de verdad en un teléfono físico; instala con "Install on Device".*

> **Qué construimos:** capturar la foto de una entrada con la cámara.
>
> **Funcionalidad (qué hace):**
> - En "Nueva entrada", además de la galería, un botón "Tomar foto" abre la cámara. Solicita el permiso de cámara en tiempo de ejecución; si lo niega, explica el uso y deja la galería. Sube la foto tomada igual que las de la galería.
>
> **Interfaz (UI/UX):**
> - "Tomar foto" es la acción primaria del formulario (más prominente que la galería), porque la bitácora es cámara-first. Muestra vista previa de la foto capturada antes de guardar. Mensaje de permiso claro en español.

---

## Refinamiento 5: Ícono, splash y branding

> **Qué construimos:** ícono de app y splash con la marca.
>
> **Funcionalidad (qué hace):** ícono adaptive para todas las densidades y splash con la Splash Screen API.
>
> **Interfaz (UI/UX):**
> - Ícono: fondo vino #6D2E46 con un símbolo sencillo (cámara/ojo) en mostaza #E3B23C.
> - Splash: fondo crema #FDF6EC, ícono al centro y "Bitácora Visual" en vino #6D2E46.
> - Paleta consistente en TopAppBar, botones y status bar.

---

## Refinamiento 6: Reglas de seguridad

*Pídele a la IA que ajuste las reglas; en AI Studio no entras a la consola manualmente.*

> Define reglas de seguridad para que cada usuario solo pueda ver y modificar sus propias entradas. Explícamelas:
> - **Firestore (colección `entradas`):** solo autenticados leen/escriben; un usuario solo crea documentos con su propio uid (request.auth.uid == request.resource.data.uid) y solo actualiza/borra donde uid == request.auth.uid.
> - **Storage (ruta `entradas/{uid}/...`):** solo el dueño sube/borra (request.auth.uid == uid), máximo 5MB y solo imágenes (content-type "image/").
> Dame el bloque listo con comentarios que expliquen cada línea.

---

## Personalización de interfaz (opcional, solo interfaz)

**Paleta / theme.**
> Cambia solo la paleta del tema Material 3: fondo [#HEX], principal [#HEX], secundario [#HEX], acento [#HEX], texto [#HEX], en TopAppBar, tarjetas, FAB, botones y status bar, con contraste AA.

**Estilo del mosaico.**
> Rediseña solo el aspecto de la cuadrícula: [mosaico staggered tipo Pinterest / 1 columna con tarjetas grandes / esquinas y sombras distintas]. Misma información y comportamiento.

**Tipografía editorial.**
> Cambia solo la tipografía a una combinación editorial (display + cuerpo) con escala clara.

**Modo oscuro.**
> Agrega modo oscuro Material 3 coherente que respete el sistema y el contraste AA. No cambies la funcionalidad.

**Detalle de entrada.**
> Agrega una pantalla de detalle al tocar una entrada: foto grande, título, nota completa y fecha, con botón "Volver". Solo interfaz y navegación.

---

## Prompts de rescate

### Generó una web en vez de nativa
> Verifica que es un proyecto nativo de Android con Kotlin y Jetpack Compose (no una web). Si no, recréalo dejando claro en la primera línea que quiero una app nativa de Android.

### La vista previa no carga
> La vista previa (emulador del navegador) no carga. Revisa: 1) proyecto nativo Kotlin/Compose; 2) la bitácora se dibuja con las 6 entradas de ejemplo; 3) si hay error de compilación, muéstramelo y corrígelo.

### "Install on Device" no encuentra el teléfono
> Activa modo de desarrollador y depuración USB en el teléfono, usa un cable USB de datos y acepta el aviso de depuración. Usa Chrome y vuelve a tocar "Install on Device".

### El login con Google falla
> El login con Google no funciona. Revisa Firebase Authentication (proveedor Google habilitado), la detección del estado de sesión y que tras iniciar sesión se muestre la bitácora. En AI Studio, Firebase se auto-provisiona: no necesito consola ni SHA-1.

### Firestore pide crear un índice compuesto
> Al filtrar por `uid` y ordenar por `fecha` descendente, Firestore muestra un error tipo "The query requires an index" (índice compuesto). Ayúdame: 1) crea el **índice compuesto** que pide la consulta (campos `uid` + `fecha` descendente) y explícame dónde queda; **o** 2) si es más simple, deja la consulta filtrando solo por `uid` y **ordena las entradas por fecha en el cliente** (en el código, no en Firestore). Elige la opción más sencilla y dime cuál usaste.

### Estado de error al leer datos (con "Reintentar")
> **Interfaz (UI/UX):** cuando la lectura de "entradas" falle (sin conexión o error de Firestore), muestra un **estado de error** distinto del estado vacío: un mensaje amable en español ("No pudimos cargar tu bitácora. Revisa tu conexión.") y un botón **"Reintentar"** que vuelve a intentar la lectura. No lo confundas con el estado vacío ("Tu bitácora está en blanco…"), que es cuando no hay entradas pero tampoco error.

### Las fotos no se suben a Storage
> La subida a Storage no funciona. Revisa: ruta "entradas/{uid}/{timestamp}.jpg"; obtener la URL de descarga y guardarla en imagenUrl; reglas de Storage que permitan al usuario subir a su carpeta; mensaje de error claro si falla.

### La cámara no abre
> "Tomar foto" no abre la cámara o la app se cierra. Revisa: permiso de cámara declarado; solicitud en tiempo de ejecución con mensaje en español; que al concederlo la foto se suba igual que las de la galería; que al negarlo quede disponible la galería.
