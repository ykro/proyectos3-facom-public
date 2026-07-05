# Sesión 6 — Desarrollo nativo II: producto real

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Deck:** `slides/sesion-06.pptx`
**Proyecto:** Proyecto Final — App nativa "Bitácora Visual" (semana 6)

## Objetivo de la sesión

Que el estudiante convierta su bitácora nativa en un **producto real**: agrega **login con Google** (Authentication), conecta las entradas a **Firestore separadas por usuario** y sube fotos a **Storage**, comprendiendo las **reglas de seguridad**.

## Preparación previa

- Ten "Bitácora Visual" de la sesión 4 abierta en AI Studio, con su vista previa en el **emulador del navegador**.
- Prueba el flujo de login con Google y la subida a Storage en privado para conocer la latencia.
- Revisa la Sección 2 de `guias-estudiante/proyecto-final-nativo.md`.
- Conecta con la **Investigación 1 (reglas de seguridad de Firebase)** que se asigna hoy.
- Prepara la mini-app de la **Demo del docente** ("Diario de Viajes"): ten a mano el prompt inicial para construirla en vivo.

---

## Desarrollo de la sesión

### Bloque 1 — Repaso del parcial y conceptos del día (~18 min)

1. Portada del deck. Retroalimentación general del Examen Parcial (sin nombres): aciertos comunes y mejoras frecuentes.

2. Explica con las slides el salto de hoy: pasar de una bitácora de ejemplo a un **producto multiusuario** con identidad, datos por persona y archivos en la nube.

3. **Authentication / Google Sign-In**: cada usuario entra con su cuenta de Google y obtiene un identificador único (`uid`). Conecta `uid` con la idea de "cada quien ve solo lo suyo".

4. **Firebase Storage**: dónde viven los **archivos** (las fotos). En Firestore se guarda solo la **dirección** de la foto (`imagenUrl`), no la foto en sí.

5. Introduce **reglas de seguridad** a alto nivel: son las reglas que deciden quién puede leer/escribir qué. Anuncia la **Investigación 1** sobre este tema.

### Bloque 2 — Demo en vivo: login con Google (~16 min)

6. Agrega el inicio de sesión. Pega este prompt en AI Studio:

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

7. Aprueba la activación de Firebase cuando AI Studio la pida (**"Enable Firebase"**, auto-provisioning: Authentication, Firestore y Storage).

8. Revisa la vista previa (o instala en tu teléfono con **"Install on Device"**) y prueba el login en vivo. Inicia sesión, entra a la bitácora y prueba "Cerrar sesión".

### Bloque 3 — Demo en vivo: datos por usuario y fotos (~24 min)

9. Conecta las entradas a Firestore, separadas por usuario. Pega:

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

10. Explica por qué el `uid` separa los datos por persona y por qué resolvemos el caso del usuario sin entradas (estado vacío).

11. Agrega la subida de fotos a Storage con formulario. Pega:

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

12. Revisa la vista previa (o instala en tu teléfono con "Install on Device") y crea una entrada eligiendo una foto. Muestra cómo aparece en la bitácora al terminar la subida.

13. Nota de seguridad en vivo: pide a la IA de AI Studio que cada usuario solo pueda leer/modificar sus propias entradas (`uid == request.auth.uid`). Conecta directamente con la Investigación 1.

### Bloque 4 — Laboratorio de hoy (~24 min)

14. Indica el **Laboratorio 5**: agregar a su app login con Google, datos por usuario en Firestore y subida de fotos a Storage.

15. Acompaña en vivo. Atención a:
    - Aprobar la activación de Firebase cuando aparezca.
    - Si el login falla, usar el prompt de rescate de la guía.
    - Si las fotos no suben, revisar ruta y reglas de Storage (prompt de rescate).

16. Quien termine, que verifique con dos cuentas distintas que cada usuario ve solo sus entradas.

### Bloque 5 — Cierre y tareas (~8 min)

17. Recapitula: login con Google, `uid`, Firestore por usuario, Storage, reglas de seguridad.

18. Asigna:
    - **Investigación 1 — Reglas de seguridad de Firebase** (qué son, por qué importan, ejemplo aplicado a `entradas`).
    - **Laboratorio 5 — App nativa con datos y login.**

19. Sugiere **el quiz de la unidad** (disponible en el repositorio privado del docente). Adelanta la sesión 7 (cámara y pulido). Cierra.

---

### Demo del docente de la sesión

> 🎯 **Referencia visual del resultado esperado:** [ver captura](../demos/screenshots/diario-de-viajes.png) · mock-up navegable: [`demos/diario-de-viajes.html`](../demos/diario-de-viajes.html). Reconstrúyela en vivo con el prompt de abajo (no la copies tal cual).

Para ilustrar el concepto del día (login + datos por usuario + Storage) sin tocar el proyecto insignia, construye en vivo una mini-app distinta: **"Diario de Viajes"** — login con Google y fotos de viajes privadas por usuario guardadas en Storage. El laboratorio del estudiante sigue siendo su **Bitácora Visual** (con la guía); esta demo es solo para mostrar el patrón desde cero (~10 min).

Pega este **prompt inicial** en AI Studio:

```
**Qué construimos:** una app nativa de Android (Kotlin + Jetpack Compose, Material 3) llamada "Diario de Viajes": un diario de viajes privado donde cada usuario guarda fotos de sus viajes con una nota. Toda la interfaz en español.

**Funcionalidad (qué hace):**
- Login con Google usando Firebase Authentication. Sin sesión, muestra una pantalla de login; con sesión, muestra los viajes del usuario. Incluye "Cerrar sesión".
- Colección "viajes" en Firestore: cada documento tiene lugar (texto), nota (texto), imagenUrl (texto), uid (id del usuario) y fecha (serverTimestamp()). Muestra solo los viajes del usuario con sesión (filtra por uid), en tiempo real.
- Un FAB "+" abre un formulario para agregar un viaje: elige una foto de la galería, súbela a Storage en "viajes/{uid}/{timestamp}.jpg", guarda su URL en imagenUrl.

**Interfaz (UI/UX — cómo se ve y se siente):**
- Pantalla de login centrada con el nombre "Diario de Viajes" en vino #6D2E46 y un botón "Iniciar sesión con Google" con buena área táctil, sobre fondo crema #FDF6EC.
- Lista/cuadrícula de tarjetas: foto arriba (esquinas redondeadas), lugar en negrita y fecha en texto secundario. FAB "+" en vino #6D2E46.
- Paleta: fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B, con propósito.
- Estados: vacío con personalidad ("Aún no hay viajes. Sube tu primera aventura."), carga con skeleton, contraste AA y áreas táctiles ≥ 48dp.
```

**Qué resaltar mientras se construye:**
- El **`uid`** es lo que hace privados los datos: cada usuario ve solo sus viajes, exactamente el mismo patrón que aplicarán en su Bitácora Visual.
- La **foto va a Storage** y a Firestore solo su **dirección** (`imagenUrl`): mismo principio que en el proyecto insignia.
- Firebase se activa solo con **"Enable Firebase"** (auto-provisioning); no se toca ninguna consola.

---

## Notas

- **Aviso de facturación (Storage):** activar **Firebase Storage** puede pedir **habilitar la facturación** del proyecto (plan Blaze) para aprovisionar el bucket, aunque el uso del curso quede dentro del **nivel gratuito**. Avísalo antes de la demo y no obligues a nadie a habilitarla en vivo. Si no quieres activarla en clase, usa una app de **respaldo ya aprovisionada** y narra el flujo con las capturas.
- El login con Google funciona mejor en un teléfono real (**"Install on Device"**); ten un respaldo listo por si falla en vivo.
- Recalca que las fotos van a **Storage** y solo su **dirección** a Firestore; es un error común confundirlo.
- Las reglas de seguridad son el puente con la Investigación 1: no las dejes como un detalle, son parte del "producto real".

[^1]: El agente interno de AI Studio se llama Antigravity; no necesitas usar ese nombre.
