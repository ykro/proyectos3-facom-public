# Sesión 0: Bienvenida y Configuración

Bienvenida y bienvenido a **Proyectos III — Diseño de aplicaciones móviles**. En este curso vas a construir aplicaciones móviles reales **sin escribir código**: tu trabajo es diseñarlas —con buen criterio de UI/UX— y dirigir a la inteligencia artificial con instrucciones claras en español. **Todo se hace desde el navegador, en Google AI Studio.** Esta guía te prepara para empezar.

---

## Qué vas a aprender

Durante el trimestre vas a construir **dos aplicaciones móviles**, una por cada proyecto del curso:

1. **Proyecto 1 — Una PWA (app web instalable en el teléfono).** La construyes en **Google AI Studio Build mode**, todo desde el navegador. La app de referencia es **"Ruta del Café"**, una guía de cafés de especialidad de Guatemala con tarjetas, filtro por categoría, vista de detalle e identidad visual propia. Aprendes a diseñar la interfaz, conectar datos reales en la nube y hacer que la app se instale en el teléfono. Se trabaja en las **semanas 1 a 3** y se evalúa en el **Examen Parcial (semana 5)**.

2. **Proyecto Final — Una app nativa Android.** La construyes **también en Google AI Studio**, que genera apps nativas de Android con **Kotlin** y **Jetpack Compose** y las muestra en un **emulador integrado en el navegador**. La app de referencia es **"Bitácora Visual"**, un diario visual privado: entras con tu cuenta de Google y capturas, con la **cámara** del teléfono, fotos que te inspiran (con una nota), guardadas por usuario. Se trabaja en las **semanas 4, 6 y 7** y se evalúa en el **Examen Final / Demo Day (semana 10)**.

En ambos proyectos primero sigues la guía con la app de referencia y luego aplicas lo aprendido a **tu propia idea de app**, que es lo que entregas y se califica.

> **Simetría del curso:** la PWA es un **catálogo público que se navega**; la app nativa es una **herramienta privada que captura** con el teléfono. Así ves para qué sirve cada formato.

Al terminar, vas a entender cómo funciona el **desarrollo de software asistido por IA** y vas a poder crear tus propias aplicaciones móviles.

---

## Qué necesitas

### Para todo el curso

- Una computadora con navegador web (**Chrome** recomendado).
- Una **cuenta de Google (Gmail)**. Si no tienes una, créala gratis en [accounts.google.com](https://accounts.google.com).
- Acceso a **Google AI Studio** en [aistudio.google.com](https://aistudio.google.com).

> **Importante: usa una cuenta de Gmail personal**, no una cuenta institucional (@galileo.edu u otra de Workspace). Las cuentas institucionales suelen tener **bloqueos del administrador** que impiden usar AI Studio, crear proyectos de Firebase o autorizar apps (OAuth). **Verifícalo antes de la sesión 1**: entra a [aistudio.google.com](https://aistudio.google.com) con tu cuenta personal y confirma que puedes crear una app. Si tu única cuenta es institucional y no te deja, crea una cuenta de Gmail personal gratis.

**No necesitas instalar nada.** Los dos proyectos —la PWA y la app nativa— se construyen y se ven **dentro del navegador**.

### Solo si quieres probar la app nativa en un teléfono real

Para el Proyecto Final puedes ver todo en el **emulador de Android del navegador**. Pero si quieres instalarla en un teléfono de verdad (recomendado para probar la **cámara**), necesitas:

- Un **teléfono Android** con el **modo de desarrollador** y la **depuración por USB** activados.
- Un **cable USB** (que transmita datos, no solo carga).

AI Studio instala la app en tu teléfono directo desde Chrome con el botón **"Install on Device"**. **No necesitas instalar el SDK de Android, ni ADB, ni una terminal.**

> *Tip: el emulador del navegador funciona bien para la mayoría de funciones, pero para probar la cámara de verdad es más cómodo un teléfono físico.*

> *Dato: existe también una **app móvil de Google AI Studio (Android)** para capturar ideas sobre la marcha y seguir en el escritorio; es opcional.*

---

## Cómo entrar a Google AI Studio

1. Abre tu navegador y ve a [aistudio.google.com](https://aistudio.google.com).

   > [Captura: página principal de Google AI Studio con el botón de inicio de sesión]

2. Inicia sesión con tu cuenta de Google. Si ya tienes sesión abierta en Gmail, puede que entre automáticamente.

   > [Captura: pantalla de selección de cuenta de Google]

3. Si es la primera vez, acepta los términos de servicio.

4. En el menú lateral izquierdo, haz clic en **Build** para entrar al modo de construcción de aplicaciones.

   > [Captura: pantalla principal de AI Studio con la opción "Build" resaltada]

5. Selecciona la opción para crear una aplicación nueva. Se abre el editor con un **panel de chat** a la izquierda y una **vista previa (Live preview)** a la derecha.

   > [Captura: editor de AI Studio con el panel de chat y la vista previa]

Ya estás listo para empezar. El mismo editor sirve para la PWA (Proyecto 1) y para la app nativa de Android (Proyecto Final): la diferencia es solo qué tipo de app le pides a la IA.

---

## Partes de la interfaz de AI Studio

| Elemento | Dónde está | Para qué sirve |
|----------|-----------|----------------|
| **Chat** | Panel izquierdo | Aquí escribes tus instrucciones (prompts) para la IA. |
| **Vista previa (Preview)** | Panel derecho | Aquí aparece tu app funcionando. En el Proyecto Final es un **emulador de Android** dentro del navegador. |
| **Botón de enviar (Send)** | Parte inferior del chat | Envía tu mensaje a la IA. |
| **Pestaña de código (Code)** | Parte superior del panel derecho | Ver el código que la IA generó. No necesitas entenderlo. |
| **Install on Device** | Panel de vista previa (app nativa) | Instala la app nativa en tu teléfono por USB, desde Chrome, con un clic. |
| **AI Chips** | Cerca de la caja de prompts | Servicios de Google sin configurar (por ejemplo, **Nano Banana** para generar imágenes). |
| **Modo de anotación** | Dentro de la vista previa | Haz clic o dibuja sobre un elemento para indicar qué cambiar. |
| **Checkpoints** | Panel izquierdo, junto al historial | Puntos de guardado para regresar si algo sale mal. |
| **Ver diferencias (View diff)** | Junto a Code | Muestra qué cambió la IA después de cada prompt. |
| **Settings / Secrets** | Menú superior | Configuración y valores confidenciales (claves). |

> [Captura: interfaz de AI Studio con las partes señaladas]

> *Modelo: AI Studio usa por defecto **Gemini 3.5 Flash**. No tienes que configurarlo.*

---

## Cómo escribimos los prompts en este curso

Todos los prompts de las guías separan dos cosas:

- **Funcionalidad (qué hace):** el comportamiento, los datos, la lógica.
- **Interfaz (UI/UX — cómo se ve y se siente):** el diseño, el color, la tipografía, el espaciado, los estados, las microinteracciones.

Esto te enseña a dirigir a la IA con **criterio de diseño** y te deja cambiar el aspecto sin romper la lógica. Cada guía incluye además prompts de **personalización de interfaz** para que hagas tu app tuya.

---

## Nota sobre el idioma

Google AI Studio tiene su interfaz en inglés, pero **tú le escribes tus instrucciones en español sin problema**. Estos son los botones que verás en inglés:

| En inglés | Qué significa |
|-----------|--------------|
| **Build** | Construir (entrar al modo de creación de apps) |
| **Send** | Enviar |
| **Preview** | Vista previa |
| **Code** | Ver el código generado |
| **Install on Device** | Instalar en el teléfono (app nativa, por USB) |
| **Annotation mode** | Modo de anotación |
| **AI Chips** | Servicios de Google que agregas sin configuración |
| **Checkpoint** | Punto de guardado |
| **View diff** | Ver qué cambió |
| **Settings / Secrets** | Configuración / valores confidenciales |

> *No necesitas saber inglés para seguir el curso. Cuando aparezca un botón en inglés, te indicamos cuál es.*

---

## Qué NO necesitas

- **No necesitas saber programar.** La IA escribe el código por ti. Tú diseñas y diriges.
- **No necesitas saber inglés.** Escribes todos los prompts en español.
- **No necesitas instalar nada** (ni para la PWA ni para la app nativa): todo es en el navegador. Solo un cable USB si quieres probar la nativa en tu teléfono.
- **No necesitas una terminal** ni el SDK de Android.
- **No necesitas una computadora potente.** Cualquiera con un navegador moderno funciona.

---

## Cómo funciona este curso

1. **Sigue la clase en vivo.** El curso es en línea y en vivo (no hay videos grabados): el docente muestra todo el proceso, del primer prompt a la app funcionando.
2. **Sigue la guía** paso a paso, a tu ritmo.
3. **Copia y pega los prompts.** Están escritos en la guía; cópialos tal cual.
4. **Verifica el resultado** en la vista previa después de cada prompt. Si algo no se ve bien, la guía incluye una sección de **rescate**.
5. **Aplica a tu propia app** en la sección **"Tu proyecto"** de cada guía. Eso es lo que entregas.
6. **Responde el quiz** para verificar que entendiste.

---

## Consejos para todo el curso

- **Copia los prompts exactamente como aparecen.** Cambiar detalles puede dar un resultado distinto.
- **Verifica después de cada paso.** Es más fácil arreglar algo enseguida que al final.
- **Aprovecha los checkpoints.** Guarda un punto antes de cada cambio importante; es un "deshacer" a nivel de proyecto.
- **Regla de los 2 strikes.** Si una corrección no funciona, intenta **una vez más**. Si tampoco, **regresa al último checkpoint** que sí funcionaba en lugar de insistir.
- **Usa el modo de anotación** para cambios puntuales: haz clic sobre el elemento y describe el cambio.
- **Revisa View diff** cuando algo cambie de forma inesperada.
- **No te preocupes por entender el código.** El objetivo es que aprendas a dirigir a la IA y a diseñar buenas apps.

---

## Glosario de términos

| Término | Qué significa |
|---------|--------------|
| **AI Studio** | Google AI Studio. La plataforma del navegador donde construyes **las dos apps** (PWA y nativa) con Build mode. |
| **PWA** | "Progressive Web App". Una app web que se **instala en el teléfono** como una app normal (ícono, pantalla completa, funciona sin conexión). Es el Proyecto 1. |
| **App nativa** | Una aplicación hecha para Android (con **Kotlin** y **Jetpack Compose**) que aprovecha el teléfono (cámara, almacenamiento). En este curso también se construye en AI Studio. Es el Proyecto Final. |
| **Kotlin / Jetpack Compose** | El lenguaje y la forma moderna de construir la interfaz de apps Android. La IA los usa por ti; tú no los escribes. |
| **Emulador** | Un teléfono Android **simulado**. En este curso vive **dentro del navegador**, en la vista previa de AI Studio. |
| **Install on Device** | El botón de AI Studio que **instala la app nativa en tu teléfono** por cable USB, desde Chrome (sin ADB ni SDK). |
| **APK** | El archivo de instalación de una app de Android. AI Studio lo genera e instala por ti con "Install on Device". |
| **AI Chips** | Servicios de Google que agregas sin configurar (por ejemplo, **Nano Banana** para generar imágenes). |
| **Firebase** | Servicios de Google para apps: base de datos, login y almacenamiento. Es el "backend". AI Studio lo configura solo (auto-provisioning). |
| **Firestore** | La **base de datos** de Firebase, en la nube (por ejemplo, las cafeterías de "Ruta del Café" o las entradas de "Bitácora Visual"). |
| **Authentication (Auth)** | El servicio de Firebase que verifica quién es el usuario. Usamos **Google Sign-In**. |
| **Storage** | El servicio de Firebase para guardar **archivos** (fotos) en la nube. |
| **Cloud Run** | El servicio que **publica tu PWA en internet** con una dirección propia. |
| **Prompt** | La instrucción que le escribes a la IA. Mientras más clara, mejor el resultado. |
| **Funcionalidad / Interfaz** | La forma en que escribimos los prompts: qué hace (lógica) separado de cómo se ve (UI/UX). |
| **Checkpoint** | Un punto de guardado al que puedes regresar. |
| **Annotation mode** | El modo de anotación: haces clic sobre un elemento para indicar qué cambiar. |
| **View diff** | La vista que muestra qué cambió la IA tras un prompt. |

---

## Qué sigue

Cuando termines esta guía, estás listo para empezar el **Proyecto 1 (PWA)**. Abre `proyecto-1-pwa.md` y empieza a construir "Ruta del Café" paso a paso. ¡Nos vemos ahí!
