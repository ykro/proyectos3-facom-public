# Sesión 7 — Desarrollo nativo III: pulido y capacidades del teléfono

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Deck:** `slides/sesion-07.pptx`
**Proyecto:** Proyecto Final — App nativa "Bitácora Visual" (semana 7, cierre del desarrollo)

## Objetivo de la sesión

Que el estudiante agregue una **capacidad del teléfono** (la **cámara**), aprenda a **depurar con evidencia** (capturas de la vista previa y **modo de anotación**) y **pula la marca** (ícono y splash), dejando el Proyecto Final listo para el Demo Day.

## Preparación previa

- Ten "Bitácora Visual" con login, datos por usuario y Storage (sesión 6) abierta en AI Studio.
- Si vas a demostrar la cámara, ten un **teléfono físico** listo con **"Install on Device"** (en el emulador del navegador la cámara puede ser simulada).
- Prueba tomar **capturas de la vista previa** y el **modo de anotación** en privado.
- Revisa la Sección 3 de `guias-estudiante/proyecto-final-nativo.md`.
- Prepara la mini-app de la **Demo del docente** ("Foto del Día"): ten a mano el prompt inicial para construirla en vivo.

---

## Desarrollo de la sesión

### Bloque 1 — Repaso y capacidades del teléfono (~16 min)

1. Portada del deck. Repaso: ya tenemos login, datos por usuario y fotos. Hoy: cámara, depuración con evidencia y marca.

2. Explica con las slides las **capacidades del teléfono**: cámara, notificaciones, ubicación. Hoy se enfocan en la **cámara**.

3. Concepto de **permisos**: las funciones sensibles (cámara, ubicación) requieren pedir permiso al usuario con un mensaje claro de para qué se usan. Buen permiso = buena UX y confianza.

4. Concepto de **pulido de marca**: ícono propio, splash screen, color consistente. Conecta con su formación: el pulido es justo lo que diferencia un ejercicio de un producto presentable.

### Bloque 2 — Demo en vivo: cámara (~18 min)

5. Agrega la cámara al formulario. Pega este prompt en AI Studio:

```
**Qué construimos:** capturar la foto de una entrada con la cámara del teléfono.

**Funcionalidad (qué hace):**
- En "Nueva entrada", además de elegir de la galería, agrega un botón "Tomar foto" que abre la cámara.
- Solicita el permiso de cámara en tiempo de ejecución. Si el usuario lo niega, explica por qué se usa y deja disponible la galería.
- Al tomar la foto, súbela a Storage igual que las de la galería (misma ruta y mismos campos).

**Interfaz (UI/UX — cómo se ve y se siente):**
- El botón "Tomar foto" es la acción primaria del formulario (más prominente que "elegir de la galería"), acorde a que la bitácora es cámara-first.
- Muestra una vista previa de la foto capturada antes de guardar.
- El diálogo de permiso incluye un mensaje claro en español sobre para qué se usa la cámara.
```

6. Prueba tomar una foto instalando en tu teléfono con **"Install on Device"** (la cámara funciona de verdad en un teléfono físico; en el emulador del navegador puede ser simulada).

7. Resalta cómo el prompt resolvió el **caso del permiso negado**, dejando disponible la opción de la galería. Buena UX = anticipar el "no".

### Bloque 3 — Demo en vivo: depurar con evidencia (~16 min)

8. Explica que en nativo se depura **con evidencia, no a ciegas**. Toma una **captura de la vista previa** (el emulador del navegador) y revísala en clase.

9. Si algo está mal ubicado, usa el **modo de anotación**: haz clic sobre el elemento en la vista previa y describe el ajuste. Explica que esto le da a la IA de AI Studio el punto exacto a corregir, en lugar de adivinar. Apóyate también en **View diff** y en la pestaña **Code**.

10. Demuestra el flujo completo: captura de la vista previa → detectar un detalle → anotar el elemento y describir el ajuste con precisión → la vista previa se actualiza sola.

### Bloque 4 — Demo en vivo: pulido de marca (~8 min)

11. Pule ícono y splash. Pega este prompt:

```
**Qué construimos:** ícono de app y pantalla de inicio (splash) con la marca.

**Funcionalidad (qué hace):**
- Configura un ícono de app (adaptive icon) para todas las densidades y una splash screen con la Splash Screen API de Android.

**Interfaz (UI/UX):**
- Ícono: fondo vino #6D2E46 con un símbolo sencillo (una cámara/ojo/marcador) en mostaza #E3B23C.
- Splash: fondo crema #FDF6EC con el ícono al centro y el nombre "Bitácora Visual" en vino #6D2E46, antes de mostrar login o bitácora.
- Aplica la paleta (#6D2E46, #C84B31, #E3B23C, #FDF6EC, #2B2B2B) de forma consistente en TopAppBar, botones y status bar.
```

12. Menciona que el ícono/splash pueden generarse con un **AI Chip como Nano Banana** y luego pedirle a la IA de AI Studio que lo use. Revisa la vista previa (o instala en tu teléfono con "Install on Device") y muestra el resultado.

### Bloque 5 — Laboratorio de hoy y cierre (~32 min)

13. Indica el **Laboratorio 6**: agregar la cámara (con permiso), depurar con **capturas de la vista previa** y el **modo de anotación**, y pulir ícono + splash. Esta sesión **cierra el desarrollo del Proyecto Final**.

14. Acompaña en vivo. Atención a:
    - Cámara: si en el emulador del navegador aparece simulada, probar en teléfono físico con "Install on Device" (Rescate de la guía).
    - Permisos: verificar el mensaje claro en español.
    - Usar capturas de la vista previa y el modo de anotación para diagnosticar antes de pedir cambios.

15. Quien termine, que tome una **captura final** de la vista previa (o del teléfono) para su portafolio.

16. Recapitula: cámara, permisos, depuración con evidencia, marca.

17. Asigna y anuncia:
    - **Laboratorio 6 — App nativa con una capacidad del teléfono, pulida.**
    - Recuérdales que las **sesiones 8 y 9** son de distribución, portafolio y pitch (mini-talleres), y que la **sesión 10** es el **Examen Final escrito en línea** + **Demo Day** (showcase y entrega del Proyecto Final).

18. Sugiere empezar a reunir capturas y notas para su portafolio. Cierra.

---

### Demo del docente de la sesión

> 🎯 **Referencia visual del resultado esperado:** [ver captura](../demos/screenshots/foto-del-dia.png) · mock-up navegable: [`demos/foto-del-dia.html`](../demos/foto-del-dia.html). Reconstrúyela en vivo con el prompt de abajo (no la copies tal cual).

Para ilustrar el concepto del día (cámara + pulido de marca) sin tocar el proyecto insignia, construye en vivo una mini-app distinta: **"Foto del Día"** — tomar una foto diaria con la cámara del teléfono, con ícono y splash propios. El laboratorio del estudiante sigue siendo su **Bitácora Visual** (con la guía); esta demo es solo para mostrar el patrón desde cero (~10 min).

Pega este **prompt inicial** en AI Studio:

```
**Qué construimos:** una app nativa de Android (Kotlin + Jetpack Compose, Material 3) llamada "Foto del Día": cada día el usuario toma una foto con la cámara y la guarda con una frase corta. Toda la interfaz en español.

**Funcionalidad (qué hace):**
- Un botón grande "Tomar la foto de hoy" abre la cámara del teléfono. Solicita el permiso de cámara en tiempo de ejecución con un mensaje claro en español; si lo niega, explícalo y ofrece elegir de la galería.
- Al capturar, muestra una vista previa y un campo para una frase corta; al guardar, conserva la foto y la frase con la fecha del día.
- Una lista/cuadrícula muestra las fotos de días anteriores, la más reciente primero. (Por ahora pueden vivir en la app; lo importante es la cámara y la marca.)
- Configura un ícono de app (adaptive icon) y una splash screen con la Splash Screen API de Android.

**Interfaz (UI/UX — cómo se ve y se siente):**
- Pantalla principal cámara-first: la acción "Tomar la foto de hoy" domina, en vino #6D2E46, sobre fondo crema #FDF6EC.
- Tarjetas de días pasados: foto grande con esquinas redondeadas, frase y fecha en texto secundario.
- Ícono: fondo vino #6D2E46 con un símbolo de cámara en mostaza #E3B23C. Splash: fondo crema con el ícono al centro y el nombre "Foto del Día".
- Paleta con propósito (#6D2E46, #C84B31, #E3B23C, #FDF6EC, #2B2B2B), contraste AA y áreas táctiles ≥ 48dp.
```

**Qué resaltar mientras se construye:**
- La **cámara es el corazón**: la acción primaria domina la pantalla, igual que en Bitácora Visual (cámara-first).
- El **permiso de cámara** se pide con un mensaje claro y se anticipa el "no" dejando la galería disponible: buena UX = confianza.
- **Ícono + splash** convierten un ejercicio en un producto presentable; genéralos con **Nano Banana** si necesitas la imagen.

---

## Notas

- La cámara es la demo que más impacta; si tienes teléfono físico, instala con "Install on Device" para que se vea funcionando de verdad.
- Insiste en depurar con **capturas de la vista previa** + **modo de anotación** en vez de adivinar; es una habilidad transferible y ahorra mucho tiempo en el laboratorio.
- A partir de aquí el desarrollo está completo: las próximas semanas son comunicación de producto y empleabilidad. Anímalos a personalizar su bitácora con entradas reales.

[^1]: El agente interno de AI Studio se llama Antigravity; no necesitas usar ese nombre.
