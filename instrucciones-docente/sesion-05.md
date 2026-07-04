# Sesión 5 — Examen Parcial: entrega y defensa del Proyecto 1 (PWA)

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Tipo:** Evaluación (sin deck de contenido)
**Se evalúa:** Proyecto 1 — PWA propia del estudiante (basada en "Ruta del Café")
**Valor:** Examen Parcial = 20 puntos (según la evaluación del curso)

## Objetivo de la sesión

Evaluar de forma práctica el **Proyecto 1**: cada estudiante presenta y defiende su PWA instalable con datos. Esta es una **evaluación de desempeño**, no un examen escrito.

## Preparación previa

- Avisa con anticipación el orden de presentaciones (lista o sorteo) y el tiempo por estudiante.
- Pide que lleguen con: la **URL publicada** (Cloud Run) abierta, la app **instalada en su teléfono** si pudieron, y su **bitácora de prompts**.
- Ten lista la rúbrica (abajo) en una hoja de cálculo para calificar en vivo.

## Cómo organizar el tiempo (90 min)

- **(~8 min)** Bienvenida, recordatorio del formato y la rúbrica.
- **(~72 min)** Defensas individuales. Con grupos grandes, calcula **~5–6 min por estudiante** (3 min de demo + 2–3 min de preguntas). Si el grupo es muy numeroso, divide en dos bloques o usa defensas en paralelo por sala.
- **(~10 min)** Cierre, retroalimentación general del grupo y anuncio de la sesión 6.

---

## Qué pedir en la defensa (cada estudiante)

1. **Presentar su app (1 min):** qué hace, a quién sirve, su identidad visual (nombre, colores, tono).
2. **Demostrarla en vivo (2 min):**
   - Mostrar la **lista de tarjetas**.
   - Usar el **filtro por categoría** (incluyendo "Todas").
   - Abrir la **vista de detalle** y regresar.
   - **Crear un registro nuevo** y mostrar que aparece sin recargar (tiempo real, Firestore).
   - Mostrar que es **instalable como PWA** (ícono de instalar o app en el teléfono).
3. **Explicar su proceso (1 min):** mostrar 1–2 prompts clave de su bitácora y explicar una decisión de diseño o un problema que resolvió (uso de checkpoints, View diff, modo de anotación, regla de 2 strikes).

### Preguntas sugeridas para la defensa

- ¿Por qué elegiste esa colección y esos campos? ¿Por qué los nombres van en inglés?
- ¿Qué cambiarías de tu prompt inicial si lo volvieras a hacer?
- ¿Cómo resolviste un cambio que no salió a la primera?
- ¿Cómo se ve tu app en un teléfono pequeño?

---

## Rúbrica del Examen Parcial (20 puntos)

El parcial tiene **dos componentes**: un **escrito en línea** (teoría + práctica) y la **defensa** del proyecto.

### Componente 1 — Escrito en línea (8 puntos)

Examen individual en línea con teoría (opción múltiple, V/F razonado, respuesta corta) y práctica escrita (redactar un prompt Funcionalidad/Interfaz, diseñar un modelo de datos, escribir un prompt de rescate, criticar una interfaz). El instrumento completo con clave y bandas está en `examenes/examen-parcial.md` (repo privado del docente). El examen es de 100 pts (Teoría 40 % / Práctica 60 %) y **se convierte a estos 8 puntos**.

### Componente 2 — Defensa del Proyecto 1 (12 puntos)

| Criterio | Qué se evalúa | Puntos |
|----------|---------------|--------|
| **Identidad visual y UX** | Mobile-first, identidad propia (no la de referencia), jerarquía, contraste/**accesibilidad AA**, estados. | 4 |
| **Proceso y dirección de IA** | **Bitácora de prompts** (prompts clave, una decisión de diseño, un problema resuelto); criterio al dirigir a la IA. | 2 |
| **Funcionalidad** | Lista de tarjetas, filtro por categoría y vista de detalle funcionan; navegación correcta. | 3 |
| **Datos + PWA instalable** | Datos en Firestore en tiempo real (`onSnapshot`) y app instalable (manifest/íconos/service worker; idealmente en Cloud Run). | 3 |
| **Total defensa** | | **12** |

> **Bandas por criterio:** califica cada criterio como **Excelente** (cumple todo con calidad), **Aceptable** (cumple lo esencial con fallas menores) o **Insuficiente** (falta lo esencial), y asigna el puntaje dentro de su rango.
>
> *Penalización sugerida:* entregar la app de referencia "Ruta del Café" sin personalizar (misma idea, nombre y datos) baja **Identidad visual y UX** a la mitad, porque el entregable pide su **propia idea de app**.

## Cómo dar retroalimentación

- **Inmediata y específica:** justo al terminar cada defensa, di **una fortaleza concreta** y **una mejora accionable** (ejemplo: "el filtro funciona muy bien; trabaja el contraste del texto sobre las tarjetas").
- **Orientada a diseño y a dirección de IA:** valora el criterio de UX y la calidad de los prompts, no el código.
- **Constructiva:** enmarca las mejoras como pasos hacia el Proyecto Final.
- **Registro:** anota la nota por criterio en el momento; comparte la retroalimentación escrita después si tu institución lo requiere.

---

## Notas

- Si una app no carga en vivo (problema de red o de deploy), pide la versión en preview de AI Studio como respaldo y no penalices el contratiempo técnico si la funcionalidad está.
- Verifica que cada quien defienda **su propia app**, no la de referencia ("Ruta del Café"). Coteja con su bitácora de prompts.
- Cierra recordando que el Proyecto Final (app nativa) es el siguiente gran entregable y que mucho de lo evaluado hoy aplica igual ahí.
