# Sesión 5 — Examen Parcial escrito en línea (sesiones 1–4)

**Curso:** Proyectos III — Diseño de aplicaciones móviles
**Duración:** 90 minutos · **Modalidad:** en línea · **Mismo material para Sección 1 (lunes) y Sección 2 (miércoles)**
**Tipo:** Evaluación (sin deck de contenido)
**Se evalúa:** Examen Parcial escrito (teoría + práctica) sobre las sesiones 1–4
**Valor:** Examen Parcial = 20 puntos (según la evaluación del curso), **100 % escrito en línea**

> El Examen Parcial es **totalmente escrito y en línea** — no hay defensa ni presentación en vivo. El **Proyecto 1 (PWA)** se entrega en línea y se evalúa por separado dentro de *Proyectos* (ver rúbrica de entrega abajo), no como parte del examen.

## Objetivo de la sesión

Aplicar el **Examen Parcial escrito en línea**: teoría y práctica escrita sobre prompting, UI/UX móvil, modelo de datos y PWA instalable. Evalúa el **criterio de diseño y la dirección de la IA**, no el código.

## Preparación previa

- Arma el examen en línea (formulario/plataforma institucional) a partir de `examenes/examen-parcial-estudiante.md` (solo preguntas). La clave y las bandas están en `examenes/examen-parcial.md` (repo privado).
- Define ventana de tiempo, reglas (individual, libro abierto de sus propias notas/bitácora si así lo decides) e instrucciones de integridad académica.
- Fija la **fecha límite de entrega del Proyecto 1** (PWA): URL publicada (Cloud Run) o app instalable + **bitácora de prompts**, entregada en línea.

## Cómo organizar el tiempo (90 min)

- **(~10 min)** Bienvenida, instrucciones del examen en línea, reglas e integridad académica.
- **(~70 min)** **Examen escrito en línea** individual (teoría + práctica). Ajusta la duración a tu instrumento.
- **(~10 min)** Cierre: recordatorio de la fecha de entrega del Proyecto 1 y anuncio de la sesión 6.

> *Si prefieres que el examen se resuelva fuera del horario de clase,* usa la sesión para resolver dudas de la entrega del Proyecto 1 y abre el examen en línea con una ventana propia.

---

## Rúbrica del Examen Parcial (20 puntos) — 100 % escrito en línea

Examen individual en línea con **teoría** (opción múltiple, V/F razonado, respuesta corta) y **práctica escrita** (redactar un prompt Funcionalidad/Interfaz, diseñar un modelo de datos, escribir un prompt de rescate, criticar/mejorar una interfaz). El instrumento completo con clave y bandas está en `examenes/examen-parcial.md` (repo privado del docente). El examen es de 100 pts (Teoría 40 % / Práctica 60 %) y **se convierte íntegramente a los 20 puntos del Examen Parcial**.

---

## Rúbrica de entrega del Proyecto 1 (cuenta en *Proyectos*, no en el examen)

El **Proyecto 1 (PWA propia)** se entrega **en línea** (URL publicada o app instalable + **bitácora de prompts** + capturas). Se evalúa sobre lo entregado —**no es una defensa en vivo**— y sus puntos cuentan dentro de la categoría **Proyectos** del curso. Estos criterios reparten los puntos que el docente asigne a este proyecto dentro de la categoría *Proyectos* (30 pts en total para ambos proyectos). Califícalo con esta rúbrica:

| Criterio | Qué se evalúa | Peso relativo |
|----------|---------------|---------------|
| **Identidad visual y UX** | Mobile-first, identidad propia (no la de referencia), jerarquía, contraste/**accesibilidad AA**, estados. | Alto |
| **Proceso y dirección de IA** | **Bitácora de prompts** (prompts clave, una decisión de diseño, un problema resuelto); criterio al dirigir a la IA. | Medio |
| **Funcionalidad** | Lista de tarjetas, filtro por categoría y vista de detalle funcionan; navegación correcta. | Alto |
| **Datos + PWA instalable** | Datos en Firestore en tiempo real (`onSnapshot`) y app instalable (manifest/íconos/service worker; idealmente en Cloud Run). | Alto |

> **Bandas por criterio:** califica cada criterio como **Excelente** (cumple todo con calidad), **Aceptable** (cumple lo esencial con fallas menores) o **Insuficiente** (falta lo esencial), y asigna el puntaje dentro de su rango.
>
> *Penalización sugerida:* entregar la app de referencia "Ruta del Café" sin personalizar (misma idea, nombre y datos) baja **Identidad visual y UX** a la mitad, porque el entregable pide su **propia idea de app**.

## Cómo dar retroalimentación

- **Del examen escrito:** comparte la clave y las bandas después de calificar; señala patrones comunes de error del grupo.
- **De la entrega del Proyecto 1:** por escrito sobre lo entregado, con **una fortaleza concreta** y **una mejora accionable** (ejemplo: "el filtro funciona muy bien; trabaja el contraste del texto sobre las tarjetas").
- **Orientada a diseño y a dirección de IA:** valora el criterio de UX y la calidad de los prompts, no el código.
- **Constructiva:** enmarca las mejoras como pasos hacia el Proyecto Final.

---

## Notas

- Verifica que cada quien entregue **su propia app**, no la de referencia ("Ruta del Café"). Coteja con su bitácora de prompts.
- Si una app no carga (problema de red o de deploy), acepta la versión en preview de AI Studio o capturas como respaldo y no penalices el contratiempo técnico si la funcionalidad está.
- Cierra recordando que el Proyecto Final (app nativa) es el siguiente gran entregable y que mucho de lo aprendido hoy aplica igual ahí.
