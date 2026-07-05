# Sesión 3 — Datos y app instalable (PWA)

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Deck:** `slides/sesion-03.pptx`
**Proyecto:** Proyecto 1 — PWA "Ruta del Café" (semana 3, cierre del Proyecto 1)

## Objetivo de la sesión

Que el estudiante conecte su app a **Firebase Firestore** (datos en la nube en tiempo real), agregue un formulario para crear registros y convierta su app en una **PWA instalable**, dejando el Proyecto 1 listo para el Examen Parcial.

## Preparación previa

- Ten tu "Ruta del Café" con filtro y detalle (sesión 2).
- Ten a mano la mini-app de la demo del docente ("Recetario Rápido"); prueba el flujo de Firestore + PWA en privado.
- Prueba una vez el flujo de **"Enable Firebase"** (auto-provisioning) y, si vas a demostrarlo, el **Deploy a Cloud Run**.
- Revisa los Pasos 10–16 de `guias-estudiante/proyecto-1-pwa.md`.
- Ten un teléfono a mano para demostrar la instalación de la PWA.

---

## Desarrollo de la sesión

### Bloque 1 — Repaso y conceptos de datos (~18 min)

1. Portada del deck y repaso: hasta ahora los datos estaban **dentro del código**; hoy van a **la nube**.

2. Explica con las slides qué es **Firebase Firestore**: una base de datos en la nube organizada en **colecciones** y **documentos**. Dibuja la colección `cafeterias` y un documento con sus campos.

3. Concepto de **tiempo real (`onSnapshot`)**: cuando cambian los datos, la pantalla se actualiza sola. Conéctalo con la experiencia de usuario (no hace falta recargar).

4. Concepto de **CRUD** en términos de diseño: crear, leer, actualizar, borrar. Hoy se enfocan en **leer** (la lista) y **crear** (el formulario).

5. Recalca que los **nombres de campos son identificadores de código** (`nombre`, `zona`, `categoria`, `especialidad`, `descripcion`, `imagenUrl`), aunque el contenido sea en español. Conecta con **Tarea 3 (modelo de datos)**.

### Bloque 2 — Demo en vivo: conectar Firestore (~22 min)

> El laboratorio del estudiante sigue en "Ruta del Café". Para la demo usa una **mini-app distinta** que ilustre Firestore y la PWA instalable sobre otro tema.

#### Demo del docente de la sesión: "Recetario Rápido"

> 🎯 **Referencia visual del resultado esperado:** [ver captura](../demos/screenshots/recetario-rapido.png) · mock-up navegable: [`demos/recetario-rapido.html`](../demos/recetario-rapido.html). Reconstrúyela en vivo con el prompt de abajo (no la copies tal cual).

**Concepto:** un recetario sencillo con recetas en **Firestore**, un **formulario** para agregar y **PWA instalable**. Sirve para enseñar datos en la nube en tiempo real + app instalable.

6. Guarda un **checkpoint** (cambio grande). Pega el **prompt inicial** de la demo, que crea la app ya conectada a Firestore, con formulario e instalable como PWA:

```
Crea una aplicación web usando React con Tailwind CSS llamada "Recetario Rápido", un recetario sencillo. Toda la interfaz debe estar en español (Guatemala). UI/UX de alta calidad, mobile-first.

**Funcionalidad (qué hace):**
- Usa una colección de Firestore llamada "recetas". Cada documento tiene: nombre (texto), tiempo (texto, ejemplo "20 min"), dificultad (texto: una de "Fácil", "Media", "Difícil"), ingredientes (texto), pasos (texto).
- Lee las recetas con onSnapshot para que la lista se actualice en tiempo real; limpia la suscripción al desmontar.
- Si la colección está vacía, carga automáticamente 6 recetas de ejemplo (usa addDoc con creadoEn = serverTimestamp()).
- Un botón "Agregar receta" abre un formulario (nombre, tiempo, dificultad, ingredientes, pasos) que crea un documento nuevo; gracias a onSnapshot aparece sin recargar. Valida que nombre no esté vacío.
- Haz la app instalable como PWA (manifest, íconos y service worker).

**Interfaz (UI/UX — cómo se ve y se siente):**
- Header "Recetario Rápido". Lista de tarjetas: nombre en negrita como elemento dominante; tiempo y dificultad como etiquetas (badges).
- Formulario en un modal centrado, campos bien espaciados, botón primario "Guardar" en vino #6D2E46.
- Color (paleta de marca): fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B.
- Estado de carga (skeleton de tarjetas) y estado vacío amable. Grid de 8px, bordes redondeados, transiciones 200–300ms. Responsive.
- Manifest: name "Recetario Rápido", theme_color #6D2E46, background_color #FDF6EC, íconos 192x192 y 512x512.
```

7. Cuando AI Studio ofrezca **"Enable Firebase"**, apruébalo en vivo. Explica que el **auto-provisioning** configura Firebase solo; no entramos a la consola de Firebase.

8. Verifica que las recetas aparecen (desde Firestore). Muestra la pestaña **Code** un momento y recuerda que no escribimos ni una línea.

9. Crea una receta en vivo con el formulario y muestra cómo **aparece de inmediato** sin recargar (tiempo real). Esto suele provocar el momento "ajá" de la sesión.

### Bloque 3 — Demo en vivo: PWA instalable (~18 min)

11. Explica con la slide las **tres piezas de una PWA**: manifest, íconos y service worker (ya los pediste en el prompt inicial). Si necesitas reforzarlo, pega este prompt de ajuste:

```
**Qué construimos:** confirmar que la app es una PWA instalable.

**Funcionalidad (qué hace):**
- Verifica el manifest con name "Recetario Rápido", short_name "Recetas", start_url "/", display "standalone", theme_color #6D2E46 y background_color #FDF6EC.
- Verifica que hay un service worker registrado y los íconos 192x192 y 512x512.
- Configura todo para que el navegador ofrezca "Instalar" / "Agregar a pantalla de inicio".
```

12. Verifica la opción de instalar (ícono en la barra de Chrome). Aclara que a veces solo aparece cuando la app está **publicada por https**.

**Qué resaltar (di esto en voz alta):**
- **"Enable Firebase" (auto-provisioning)**: la IA configura la base de datos sola, sin consola.
- **onSnapshot = tiempo real**: crear un documento se refleja en la lista sin recargar.
- Las **tres piezas de la PWA** (manifest, íconos, service worker) convierten una web en app instalable.

13. (Si el tiempo lo permite) Demuestra el **Deploy a Cloud Run**: aprueba la publicación, espera la URL y ábrela en tu teléfono para **instalar la PWA** en vivo. Muéstrala en la pantalla de inicio del teléfono.

14. Nota de seguridad: antes de publicar, no dejar claves en el cliente (usar **Secrets** en Settings) y revisar las **reglas de seguridad** de Firestore que generó la IA. Adelanta que esto se profundiza en la Investigación 1 (semana 6).

### Bloque 4 — Laboratorio de hoy (~24 min)

15. Indica el **Laboratorio 3**: sobre su "Ruta del Café" (Pasos 10–16 de la guía, colección `cafeterias`), conectar a Firestore, agregar el formulario de creación y dejarla **instalable como PWA**. Idealmente, publicar en Cloud Run. La demo ("Recetario Rápido") fue solo para ilustrar la técnica.

16. Acompaña en vivo. Atención a:
    - Aprobar "Enable Firebase" cuando aparezca.
    - Verificar que la colección y los campos coinciden con su modelo de datos (Tarea 3).
    - Usar el prompt de rescate de Firebase si no aparecen datos.

17. Quien termine, que publique en Cloud Run e instale su PWA en el teléfono.

### Bloque 5 — Cierre y tareas (~8 min)

18. Recapitula: Firestore, tiempo real, crear datos, PWA instalable. Recuerda que el **Proyecto 1 queda completo** con esta sesión.

19. Asigna y anuncia el examen:
    - **Tarea 3 — Definir el modelo de datos de su app** (colección + campos en inglés).
    - **Laboratorio 3 — PWA con datos persistentes, instalable.**
    - **Examen Parcial (sesión 5):** examen **escrito en línea** + **entrega en línea del Proyecto 1**. Pídeles tener la URL publicada y sus prompts guardados.

20. Sugiere responder **el quiz de la unidad** (disponible en el repositorio privado del docente). Adelanta la sesión 4 (desarrollo nativo). Cierra.

---

## Notas

- Aclara que los **checkpoints guardan código, no datos**: si regresan a un checkpoint, los registros creados en Firestore siguen ahí.
- **Aviso de facturación (Cloud Run):** publicar en Cloud Run puede requerir **habilitar la facturación** del proyecto de Google Cloud (asociar una tarjeta), aunque el uso del curso se mantenga dentro del **nivel gratuito**. Avísalo a los estudiantes antes de publicar y no obligues a nadie a habilitarla. **Alternativa sin facturación:** dejar la PWA **instalable desde la vista previa** (o compartir la URL de preview) y publicar en Cloud Run más adelante si lo desean.
- Si el deploy a Cloud Run es lento o falla en clase, no bloquees el laboratorio: que avancen con la PWA instalable en preview y publiquen después con la guía.
- Recuérdales guardar todos sus prompts para la bitácora y la entrega del Proyecto 1.
