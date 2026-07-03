# Proyecto Final (app nativa): Bitácora Visual

## Objetivo

Al finalizar esta guía habrás construido **"Bitácora Visual"**, una **app nativa de Android** que funciona como tu **diario visual privado**: entras con tu cuenta de Google y capturas, con la **cámara del teléfono**, fotos de cosas que te inspiran (un color, una tipografía en la calle, una textura, una composición), cada una con una nota. Solo tú ves tu bitácora. La construyes en **Google AI Studio**, que además de PWAs genera **apps nativas de Android con Kotlin y Jetpack Compose**, dirigiendo a la IA con prompts en español, sin escribir código y **sin salir del navegador**.

Esta guía cubre el contenido de las **semanas 4, 6 y 7** y prepara el **Examen Final / Demo Day (semana 10)**. Vas a:

- Crear una app nativa de Android en AI Studio y verla en el **emulador integrado del navegador**.
- Instalarla en tu **teléfono** con **"Install on Device"** (por cable USB), sobre todo para probar la cámara.
- Agregar **login con Google** (Authentication), guardar entradas **por usuario** en **Firestore** y fotos en **Storage**.
- Usar la **cámara** como forma principal de capturar una entrada.
- Pulir la marca con **ícono y splash**, y personalizar la interfaz.

> **Por qué una bitácora y no un portafolio.** Un portafolio se consume mejor como un enlace web. Una app nativa brilla cuando lo nativo importa de verdad: la **cámara**, los **datos privados por usuario** y la **captura en el momento**. Por eso el Proyecto 1 (PWA) es un catálogo público que se *navega*, y el Proyecto Final (nativa) es una herramienta privada que *captura* con el teléfono.

> **Cómo están escritos los prompts.** Igual que en el Proyecto 1, cada prompt separa la **Funcionalidad (qué hace)** de la **Interfaz (UI/UX — cómo se ve y se siente)**, con UI/UX explícito y de alta calidad.

---

## Prerrequisitos

- Cuenta de Google (Gmail).
- Navegador **Chrome** actualizado.
- Acceso a Google AI Studio: [aistudio.google.com](https://aistudio.google.com).
- **No necesitas instalar nada.** Todo se hace desde el navegador, igual que en el Proyecto 1.
- Solo para **probar la cámara en un teléfono real** (recomendado): un teléfono Android con el **modo de desarrollador** y la **depuración por USB** activados, y un cable **USB**. AI Studio instala la app directo desde Chrome; no necesitas ADB ni el SDK de Android.
- No necesitas saber programar: la IA de AI Studio genera todo el código por ti.

Si aún no hiciste la bienvenida, ve primero a `s0-bienvenida-y-configuracion.md`.

---

## Resultado esperado

Una app nativa de Android, "Bitácora Visual", con:

- Una **pantalla de inicio de sesión** con Google.
- Una **bitácora** (timeline/cuadrícula) con las entradas del usuario (foto, título y fecha).
- La opción de **agregar una entrada** tomando una foto con la **cámara** (o eligiéndola de la galería), con una nota.
- Datos guardados en **Firestore** y fotos en **Storage**, **privados por usuario**.
- **Ícono propio** y pantalla de inicio (**splash**) con la marca.
- Identidad visual con la paleta de marca: vino #6D2E46, terracota #C84B31, mostaza #E3B23C, fondo crema #FDF6EC y texto #2B2B2B.

## La colección de datos: `entradas`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `titulo` | texto | Título corto de la entrada (ejemplo: "Rótulo pintado a mano") |
| `nota` | texto | Tu reflexión o por qué te inspiró |
| `imagenUrl` | texto | La foto capturada (dirección en Storage) |
| `uid` | texto | El id del usuario dueño de la entrada |
| `fecha` | fecha | serverTimestamp() de cuándo se creó |

---

### Sección 1 (semana 4): Crear la app nativa y verla en el emulador

> ⏱ **Tiempo estimado:** ~50–60 min de laboratorio (después de la demo en clase). La generación inicial toma varios minutos.

**Paso 1.** Abre [aistudio.google.com](https://aistudio.google.com), inicia sesión, entra a **Build** y crea una app nueva, igual que en el Proyecto 1. La diferencia es que esta vez le pides una **app nativa de Android**.

> [Captura: editor de AI Studio recién abierto, listo para el primer prompt]

**Paso 2.** Pega este **prompt inicial**. Fíjate en que la primera línea deja claro que queremos una app **nativa de Android con Kotlin y Jetpack Compose**, y en la separación **Funcionalidad / Interfaz**:

```
Crea una app nativa de Android usando Kotlin y Jetpack Compose (Material 3) llamada "Bitácora Visual", un diario visual personal donde el usuario guarda fotos que le inspiran con una nota. Toda la interfaz debe estar en español. Quiero una UI/UX de altísima calidad, limpia y con carácter editorial.

**Funcionalidad (qué hace):**
- Pantalla principal (bitácora): muestra las entradas del diario. Por ahora genera 6 entradas de ejemplo dentro de la app (luego conectamos la nube). Cada entrada tiene: titulo (texto), nota (texto) e imagenUrl (texto, usa imágenes de placeholder).
- Un botón flotante (FAB) "+" para agregar una entrada nueva (por ahora solo el botón; la lógica de guardar viene después).

**Interfaz (UI/UX — cómo se ve y se siente):**
- Layout y jerarquía: una barra superior (TopAppBar) con el título "Bitácora Visual". Debajo, las entradas en una cuadrícula de 2 columnas (LazyVerticalGrid) tipo mosaico visual.
- Componentes — tarjeta de entrada: la foto arriba (dominante, con esquinas redondeadas), debajo el titulo en negrita y la fecha en texto secundario pequeño.
- FAB "+" en la esquina inferior derecha, en color vino #6D2E46.
- Color (paleta de marca): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Define estos colores en el tema (Material 3) y úsalos con propósito.
- Tipografía y espaciado: títulos con carácter editorial; espaciado en grid de 8dp con aire generoso entre tarjetas.
- Estados: incluye un estado vacío amable ("Tu bitácora está en blanco. Captura tu primera inspiración.") para cuando no haya entradas.
- Accesibilidad: contraste AA, áreas táctiles ≥ 48dp, texto legible.

**Estructura:**
- Una función composable por pantalla; separa la UI de la lógica de datos.
- Agrega comentarios con el formato:
  // CONCEPTO: [nombre]
  // QUE HACE: [descripción]
  // POR QUE: [razón]
```

**Por qué funciona:** dice el tipo de app (nativa, Kotlin + Compose) en la primera línea y **separa qué hace de cómo se ve**, con dirección de UI/UX explícita.

**Paso 3.** Presiona **Send** y espera (varios minutos). No cierres la pestaña. (AI Studio usa por defecto **Gemini 3.5 Flash**.)

> [Captura: AI Studio generando el proyecto nativo]

**Paso 4.** Revisa la **vista previa**: AI Studio muestra un **emulador de Android integrado en el navegador**. Deberías ver la barra "Bitácora Visual" y la cuadrícula de entradas de ejemplo con el botón "+".

> [Captura: emulador del navegador con la bitácora de ejemplo]

> *Tip: la vista previa se actualiza sola tras cada cambio; no "corres" nada. Usa **Code** para ver los archivos Kotlin y **View diff** para ver qué cambió.*

**Paso 5.** (Recomendado) Prueba la app en tu **teléfono real**. Conéctalo por USB (con modo de desarrollador y depuración USB activados) y usa **"Install on Device"** en el panel de vista previa. Chrome muestra un selector para elegir tu teléfono; acepta, y la app se instala y abre sola.

> [Captura: botón "Install on Device" y el selector de dispositivo USB de Chrome]

> *No necesitas ADB ni el SDK de Android: AI Studio instala la app directo desde el navegador.*

#### Checklist — Sección 1

- [ ] App nativa creada en AI Studio (Kotlin + Jetpack Compose)
- [ ] Emulador del navegador mostrando la bitácora
- [ ] Cuadrícula con 6 entradas de ejemplo
- [ ] Botón flotante "+" presente
- [ ] Paleta de marca y estado vacío aplicados
- [ ] (Recomendado) App instalada en tu teléfono con "Install on Device"

---

### Sección 2 (semana 6): Login con Google y entradas privadas por usuario

> ⏱ **Tiempo estimado:** ~60–70 min de laboratorio (login + datos + Storage; es la sección más densa).

> *Tip: este es el corazón del proyecto. Un prompt a la vez y revisa la vista previa. Guarda un **checkpoint** antes de conectar Firebase.*

**Paso 6.** Agreguemos el **inicio de sesión con Google**:

```
**Qué construimos:** inicio de sesión con Google para que la bitácora sea privada de cada usuario.

**Funcionalidad (qué hace):**
- Usa Google Sign-In de Firebase Authentication.
- Si el usuario no ha iniciado sesión, muestra una pantalla de login. Si ya lo hizo, muéstrale su bitácora directamente.
- Agrega la opción "Cerrar sesión".

**Interfaz (UI/UX):**
- Pantalla de login: una tarjeta centrada con el nombre "Bitácora Visual" en vino #6D2E46, una frase corta ("Tu diario visual privado") y un botón "Iniciar sesión con Google" claro y con buena área táctil, sobre fondo crema.
- En la bitácora, muestra el avatar/nombre del usuario en la TopAppBar, con la opción "Cerrar sesión".
```

Cuando AI Studio detecte que necesitas autenticación, te ofrecerá **"Enable Firebase"**. Apruébalo. AI Studio configura Firebase automáticamente (Authentication, Firestore y Storage); tú no entras a la consola ni manejas archivos de configuración.

> [Captura: pantalla de login con "Iniciar sesión con Google" en el emulador]

**Paso 7.** Prueba el login. Para probarlo de verdad con tu cuenta, usa **"Install on Device"** en tu teléfono.

**Paso 8.** Conectemos las entradas a **Firestore**, privadas por usuario:

```
**Qué construimos:** las entradas se guardan y se leen desde Firestore, separadas por usuario.

**Funcionalidad (qué hace):**
- Usa una colección "entradas". Cada documento tiene: titulo (texto), nota (texto), imagenUrl (texto), uid (id del usuario) y fecha (serverTimestamp()).
- La bitácora muestra solo las entradas del usuario con sesión abierta (filtra por uid), ordenadas por fecha descendente (lo más reciente primero).
- Lee en tiempo real (snapshots) para que se actualice sola. Reemplaza los datos de ejemplo por los de Firestore.

**Interfaz (UI/UX):**
- Mientras cargan las entradas, muestra un estado de carga (skeleton de tarjetas).
- Si el usuario no tiene entradas, muestra el estado vacío amable invitándolo a capturar su primera inspiración.
- La cuadrícula y las tarjetas no cambian de aspecto.
```

**Paso 9.** Agreguemos **crear una entrada** subiendo una foto a **Storage**:

```
**Qué construimos:** un formulario para crear una entrada con foto.

**Funcionalidad (qué hace):**
- Al tocar el FAB "+", abre una pantalla/formulario "Nueva entrada" con: titulo, nota y la opción de elegir una foto de la galería del teléfono.
- Al guardar: sube la foto a Firebase Storage en la ruta "entradas/{uid}/{timestamp}.jpg", obtén la URL de descarga y guárdala en imagenUrl al crear el documento en "entradas" (con uid del usuario y fecha = serverTimestamp()).
- Gracias a los snapshots, la entrada nueva aparece en la bitácora automáticamente. Valida que el título no esté vacío.

**Interfaz (UI/UX):**
- Formulario limpio: vista previa de la foto elegida arriba, campos titulo y nota bien espaciados, botón primario "Guardar" en vino #6D2E46.
- Muestra el progreso mientras sube la foto y deshabilita "Guardar" hasta que termine. Mensaje de éxito al guardar.
- Carga las imágenes de la bitácora con Coil.
```

**Paso 10.** Revisa la vista previa (o instala en tu teléfono) y crea una entrada eligiendo una foto.

> *Tip de seguridad: AI Studio genera **reglas de seguridad**. Pídele que cada usuario solo pueda leer y modificar sus propias entradas (donde `uid == request.auth.uid`). Revísalas antes del Demo Day.*

#### Checklist — Sección 2

- [ ] Login con Google funcionando (bitácora privada)
- [ ] La bitácora muestra solo las entradas del usuario (filtra por `uid`)
- [ ] Entradas en Firestore (colección `entradas`), orden por fecha descendente
- [ ] Formulario para crear entrada con subida de foto a Storage
- [ ] La entrada nueva aparece automáticamente
- [ ] "Cerrar sesión" funcionando

---

### Sección 3 (semana 7): Cámara y pulido de marca

> ⏱ **Tiempo estimado:** ~50–60 min de laboratorio (la cámara conviene probarla en un teléfono real).

**Paso 11.** Agreguemos la **cámara** como forma principal de capturar una entrada (el corazón de una bitácora visual):

```
**Qué construimos:** capturar la foto de una entrada con la cámara del teléfono.

**Funcionalidad (qué hace):**
- En "Nueva entrada", además de elegir de la galería, agrega un botón "Tomar foto" que abre la cámara.
- Solicita el permiso de cámara en tiempo de ejecución. Si el usuario lo niega, explica por qué se usa y deja disponible la galería.
- Al tomar la foto, súbela a Storage igual que las de la galería (misma ruta y mismos campos).

**Interfaz (UI/UX):**
- El botón "Tomar foto" es la acción primaria del formulario (más prominente que "elegir de la galería"), acorde a que la bitácora es cámara-first.
- Muestra una vista previa de la foto capturada antes de guardar.
- El diálogo de permiso incluye un mensaje claro en español sobre para qué se usa la cámara.
```

> *Tip: la cámara funciona de verdad en un **teléfono físico**. Instala con **"Install on Device"** y pruébala ahí; en el emulador del navegador la cámara puede ser simulada.*

**Paso 12.** Revisa e instala en tu teléfono para probar tomar una foto.

**Paso 13.** Toma una **captura** de la vista previa (o del teléfono) para tu portafolio y para diagnosticar la UI.

**Paso 14.** Si algo no se ve donde debería, usa el **modo de anotación**: haz clic sobre el elemento en la vista previa y describe el ajuste. Usa también **View diff** y la pestaña **Code**.

**Paso 15.** Pulamos la **marca**: ícono y splash.

```
**Qué construimos:** ícono de app y pantalla de inicio (splash) con la marca.

**Funcionalidad (qué hace):**
- Configura un ícono de app (adaptive icon) para todas las densidades y una splash screen con la Splash Screen API de Android.

**Interfaz (UI/UX):**
- Ícono: fondo vino #6D2E46 con un símbolo sencillo (una cámara/ojo/marcador) en mostaza #E3B23C.
- Splash: fondo crema #FDF6EC con el ícono al centro y el nombre "Bitácora Visual" en vino #6D2E46, antes de mostrar login o bitácora.
- Aplica la paleta (#6D2E46, #C84B31, #E3B23C, #FDF6EC, #2B2B2B) de forma consistente en TopAppBar, botones y status bar.
```

> *Tip de AI Chips: si necesitas una imagen para el ícono o el splash, genérala con **Nano Banana** y pídele a la IA que la use.*

**Paso 16.** Revisa (o instala) y verifica el ícono y el splash. Toma una captura final para tu portafolio.

#### Checklist — Sección 3

- [ ] "Tomar foto" con la cámara funcionando (con permiso)
- [ ] La foto tomada se sube a Storage igual que las de la galería
- [ ] Captura de la vista previa (o del teléfono) guardada
- [ ] Ícono de app propio
- [ ] Splash con la marca
- [ ] Paleta aplicada de forma consistente

---

### Personalización de interfaz (haz tuya la app)

> ⏱ **Tiempo estimado:** ~10–20 min (opcional; aplica los que quieras).

Prompts **opcionales** que tocan **solo la interfaz**. Aplica uno a la vez.

**Cambiar la paleta / theme.**
```
Cambia solo la paleta de color del tema (Material 3), sin tocar la funcionalidad. Nueva paleta: fondo [#HEX], principal [#HEX], secundario [#HEX], acento [#HEX], texto [#HEX]. Aplícala en TopAppBar, tarjetas, FAB, botones y status bar, cuidando el contraste AA.
```

**Estilo del mosaico.**
```
Rediseña solo el aspecto de la cuadrícula de entradas: [elige] mosaico tipo Pinterest con alturas variables (staggered grid) / tarjetas más grandes a 1 columna / esquinas y sombras distintas. Mantén la misma información y comportamiento.
```

**Tipografía editorial.**
```
Cambia solo la tipografía a una combinación editorial: una fuente display con carácter para títulos y una legible para el cuerpo, con una escala tipográfica clara. No cambies la funcionalidad.
```

**Modo oscuro.**
```
Agrega modo oscuro coherente con Material 3 (fondos oscuros, texto claro, acentos legibles) que respete el ajuste del sistema y el contraste AA. No cambies la funcionalidad.
```

**Detalle de entrada.**
```
Agrega una pantalla de detalle al tocar una entrada: foto grande, título, la nota completa con buen interlineado y la fecha. Botón "Volver" siempre visible. Solo interfaz y navegación; no cambies el modelo de datos.
```

---

## Rescate: problemas comunes

> *Regla de los **2 strikes**: si una corrección no funciona, intenta una vez más; si tampoco, regresa al último **checkpoint** funcional.*

### Generó una web en vez de una app nativa

Verifica que pegaste **todo** el prompt del Paso 2 y que la primera línea pide una **app nativa de Android con Kotlin y Jetpack Compose**. Si el chat tiene contexto confuso, crea una app nueva y pega el prompt como primer mensaje.

### La vista previa (emulador del navegador) no carga

```
La vista previa de la app nativa no carga o se queda en blanco. Revisa y corrige:
1. Verifica que es un proyecto nativo de Android con Kotlin y Jetpack Compose.
2. Verifica que la bitácora se dibuja con las 6 entradas de ejemplo.
3. Si hay un error de compilación, muéstrame el error exacto y corrígelo.
```

### "Install on Device" no encuentra mi teléfono

- Activa el **modo de desarrollador** y la **depuración por USB** en el teléfono.
- Usa un cable **USB** que transmita datos y acepta el aviso de "permitir depuración" en el teléfono.
- Usa **Chrome** y vuelve a tocar **"Install on Device"**.

### El login con Google falla

```
El inicio de sesión con Google no funciona. Revisa Firebase Authentication con Google Sign-In: que el proveedor de Google esté habilitado, que la app detecte el estado de la sesión y que tras iniciar sesión se muestre la bitácora. Muéstrame qué falta.
```

> *Nota: en AI Studio, Firebase se configura solo (auto-provisioning). No necesitas la consola, ni archivos de configuración, ni huellas SHA-1.*

### Las fotos no se suben a Storage

```
La subida de fotos a Storage no funciona. Revisa y corrige:
1. Que la foto se suba a "entradas/{uid}/{timestamp}.jpg".
2. Que después se obtenga la URL de descarga y se guarde en imagenUrl.
3. Que las reglas de Storage permitan a un usuario autenticado subir a su propia carpeta.
4. Que se muestre un error claro si la subida falla.
```

### La cámara no funciona o no pide permiso

```
"Tomar foto" no abre la cámara o la app se cierra. Verifica que el permiso de cámara está declarado, que se solicita en tiempo de ejecución con un mensaje en español, y que si se concede, la foto se sube igual que las de la galería. Si se niega, deja disponible la galería.
```

> *Prueba la cámara en un teléfono físico (con "Install on Device"); en el emulador puede ser simulada.*

---

## Tu proyecto (entregable del Proyecto Final)

Ya construiste la app de referencia. **Ahora la haces tuya.** Puedes quedarte con la bitácora visual o enfocarla en un tema que te apasione: caza de **tipografías** en la calle, **paletas de color** que encuentras, **texturas**, **composiciones**, **murales**… La estructura es la misma; cambia el enfoque, el nombre y la marca.

### Pasos para tu proyecto

1. **Enfoca tu bitácora.** Escribe en una frase qué capturas y para quién sirve.
2. **Personaliza la marca:** nombre, paleta (hexadecimales) y tono.
3. **Agrega una etiqueta/categoría** a cada entrada (por ejemplo: Color, Tipografía, Textura, Composición, Idea) y un **filtro**, reusando lo que aprendiste en el Proyecto 1.
4. **Personaliza la interfaz** con los prompts de "Personalización de interfaz" hasta que se sienta tuya.
5. **Cuida los detalles:** ícono, splash y capturas.
6. **Prepara tu pitch para el Demo Day.** En 2–3 minutos: qué es, demo en vivo (login, capturar una entrada con la cámara, verla en la bitácora) y por qué te sirve como creativo.

### Qué entregas

- La app nativa "Bitácora Visual" personalizada, corriendo en el emulador del navegador o instalada en tu teléfono.
- Login con Google, entradas privadas por usuario en Firestore, fotos en Storage y captura con la cámara.
- Ícono y splash con tu marca.
- Tu **pitch del Demo Day** preparado.
- Una o dos capturas de tu app terminada.

> *Tip de empleabilidad: construir una app nativa real es una pieza fuerte para tu CV y tus redes. Demuestra que sabes diseñar y llevar una app hasta el dispositivo.*

---

## Conceptos clave de este proyecto

- **Una sola herramienta, del navegador al dispositivo:** AI Studio genera tanto la PWA como la app nativa (Kotlin + Jetpack Compose). La ves en el emulador del navegador y la instalas con "Install on Device", sin terminal ni instalaciones.
- **Funcionalidad e Interfaz separadas:** defines qué hace y cómo se ve por separado, con UI/UX de alta calidad.
- **Lo nativo importa:** cámara, datos privados por usuario y captura en el momento — cosas que una web no hace bien.
- **Identidad de usuario:** con Authentication y el campo `uid`, cada quien ve solo su bitácora.
- **Archivos en la nube:** Storage guarda las fotos; Firestore guarda solo su dirección (`imagenUrl`).
- **Cámara y permisos:** pedir permiso con un mensaje claro es buena UX.
- **Marca y empleabilidad:** ícono, splash y un buen pitch convierten un ejercicio en una pieza real.

---

## Qué sigue

Con tu bitácora terminada, estás listo para el **Demo Day (semana 10)**. Practica tu pitch, ten el emulador del navegador o tu teléfono listo, y muestra con orgullo lo que construiste. ¡Mucho éxito!
