# Especificación de asignaciones — Proyectos III (Diseño de aplicaciones móviles)

Documento maestro que **especifica todas las asignaciones del curso** *Proyectos III — Diseño de aplicaciones móviles* (Licenciatura en Comunicación y Diseño, Universidad Galileo; docente Adrián Catalán; trimestre julio–septiembre 2026) y **verifica su coherencia** con el programa.

**Fuentes de verdad consultadas:**

- `programa/programa-proyectos-iii-2026.md` — esquema de evaluación + cronograma semana por semana.
- `programa/material-por-clase.md` — checklist de preparación por sesión.
- `instrucciones-docente/sesion-01.md` … `sesion-10.md` — qué asigna el docente en cada sesión (incluye rúbricas en la 05 y la 10).
- `guias-estudiante/proyecto-1-pwa.md`, `proyecto-final-nativo.md`, `s0-bienvenida-y-configuracion.md` — qué construye y entrega el estudiante.
- `quiz/u1-pwa-quiz.md`, `u2-nativo-datos-quiz.md`, `u3-distribucion-portafolio-quiz.md` — quizzes de verificación.
- `CLAUDE.md` (raíz del repo) — convenciones y estado de la evaluación vigente.

**Evaluación vigente (confirmada en el programa):** exámenes **100 % escritos y en línea, sin defensa**; los dos proyectos se **entregan en línea** y cuentan en *Proyectos* (**30 pts en total**, repartidos por el docente entre Proyecto 1 y Proyecto Final; rúbricas por criterio en `sesion-05.md`/`sesion-10.md`); los quizzes son **formativos** dentro de *Tareas / investigaciones*; la **bitácora de prompts** se pondera dentro de *Proyectos*. El Demo Day (sesión 10) es un **showcase de celebración y entrega**, no una defensa calificada.

---

## 1. Tabla resumen de la evaluación

| Categoría | Puntos | Qué agrupa |
|-----------|:-----:|------------|
| Tareas / investigaciones | 10 | Tareas 1–5, Investigación 1 y los 3 quizzes formativos (u1, u2, u3) |
| Laboratorios | 20 | Laboratorios 1–6 (uno por sesión de contenido) |
| Proyectos | 30 | Proyecto 1 (PWA) + Proyecto Final (nativa + portafolio + pitch), repartidos por el docente entre ambos; incluye bitácora de prompts y caso de portafolio |
| Examen Parcial | 20 | Examen escrito en línea (sesiones 1–4), 100 pts convertidos a 20 |
| Examen Final | 20 | Examen escrito en línea (sesiones 5–9), 100 pts convertidos a 20 |
| **Total del curso** | **100** | |

> **Suma verificada:** 10 + 20 + 30 + 20 + 20 = **100**. ✅

---

## 2. Mapa de asignaciones por sesión

| Sesión / semana | Tema | Se asigna | Categoría |
|---|---|---|---|
| 1 (sem. 1) | Intro, UX/UI móvil, IA | Tarea 1 (investigación UI/UX móvil); Laboratorio 1 | Tareas; Laboratorios |
| 2 (sem. 2) | Idea → interfaz y prototipo | Tarea 2 (identidad visual); Laboratorio 2 | Tareas; Laboratorios |
| 3 (sem. 3) | Datos y PWA instalable | Tarea 3 (modelo de datos); Laboratorio 3; quiz u1 | Tareas; Laboratorios; Tareas |
| 4 (sem. 4) | Nativo I: fundamentos | Tarea 4 (investigación PWA vs nativo); Laboratorio 4 | Tareas; Laboratorios |
| 5 (sem. 5) | **Examen Parcial** + entrega Proyecto 1 | Examen Parcial (escrito); entrega Proyecto 1 (PWA) | Examen Parcial; Proyectos |
| 6 (sem. 6) | Nativo II: login y datos por usuario | Investigación 1 (reglas de seguridad); Laboratorio 5; quiz u2 | Tareas; Laboratorios; Tareas |
| 7 (sem. 7) | Nativo III: cámara y pulido | Laboratorio 6 | Laboratorios |
| 8 (sem. 8) | Distribución y marketing | Tarea 5 (estrategia de distribución); mini-taller ficha de tienda; quiz u3 | Tareas; Tareas (alimenta Tarea 5); Tareas |
| 9 (sem. 9) | Portafolio y pitch | Mini-taller caso de portafolio + guion de pitch | Proyectos (alimenta Proyecto Final) |
| 10 (sem. 10) | **Examen Final** + Demo Day | Examen Final (escrito); entrega Proyecto Final + portafolio + pitch | Examen Final; Proyectos |

---

## 3. Especificación de cada asignación

### 3.1 Tareas / investigaciones (categoría: 10 pts en total)

> **Reparto interno:** los 10 pts se distribuyen de forma **equitativa** entre las entregas de la categoría (Tareas 1–5, Investigación 1 y los 3 quizzes formativos). Cada entrega se califica con una **rúbrica breve de 3 bandas** — **Excelente** (cumple con claridad y criterio propio), **Aceptable** (lo esencial con fallas menores), **Insuficiente** (falta lo esencial o se copia sin criterio) — según la definición del programa. *Resuelto — ver I-4.*

#### Tarea 1 — Investigación sobre principios de UI/UX móvil
- **Sesión / semana:** 1 (semana 1). Asignada en el cierre de `sesion-01.md`.
- **En qué consiste:** investigar los principios fundamentales del diseño mobile-first (jerarquía visual, áreas táctiles, contraste, estados vacío/cargando/error, diseñar "para el pulgar").
- **Entregable:** documento escrito breve con **3–5 principios**, cada uno con un ejemplo.
- **Criterios de evaluación:** claridad, pertinencia de los principios elegidos y calidad de los ejemplos (aplicación al contexto móvil).
- **Cuenta en:** *Tareas / investigaciones*.

#### Tarea 2 — Definir la identidad visual de su app
- **Sesión / semana:** 2 (semana 2). Cierre de `sesion-02.md`.
- **En qué consiste:** definir la marca de su propia idea de app para el Proyecto 1.
- **Entregable:** ficha con **nombre**, **paleta en hexadecimal**, **tono** y **tipografía**.
- **Criterios de evaluación:** coherencia de la identidad, uso del color con propósito, contraste accesible (AA), adecuación al concepto de la app.
- **Cuenta en:** *Tareas / investigaciones*. Alimenta directamente el Proyecto 1.

#### Tarea 3 — Definir el modelo de datos de su app
- **Sesión / semana:** 3 (semana 3). Cierre de `sesion-03.md`.
- **En qué consiste:** diseñar la estructura de datos de su PWA (colección Firestore + campos).
- **Entregable:** nombre de la **colección** y sus **4–6 campos** (identificadores en inglés), con el tipo de cada campo.
- **Criterios de evaluación:** modelo coherente con la app, campos suficientes y bien nombrados (inglés), incluye un campo apto para el filtro por categoría.
- **Cuenta en:** *Tareas / investigaciones*. Alimenta el Proyecto 1.

#### Tarea 4 — Investigación PWA vs nativo
- **Sesión / semana:** 4 (semana 4). Cierre de `sesion-04.md`. (El programa la nombra a la vez "Tarea 4" y "Investigación PWA vs nativo".)
- **En qué consiste:** comparar cuándo conviene una PWA y cuándo una app nativa (cámara/sensores, distribución en tienda, rendimiento, experiencia integrada).
- **Entregable:** documento escrito con la comparación y una conclusión (para qué caso elegiría cada una).
- **Criterios de evaluación:** comprensión de las diferencias, criterio para elegir según el caso de uso, claridad.
- **Cuenta en:** *Tareas / investigaciones*.

#### Tarea 5 — Estrategia de distribución y marketing de su app
- **Sesión / semana:** 8 (semana 8). Cierre de `sesion-08.md`.
- **En qué consiste:** definir la estrategia de distribución y marketing del Proyecto Final; **integra el store listing** producido en el mini-taller de la misma sesión.
- **Entregable:** documento con la **vía de distribución** (PWA vs Play Store), **público objetivo**, **posicionamiento/ASO** y el **store listing** (título, descripción corta, descripción larga, ícono, 2–3 capturas, categoría).
- **Criterios de evaluación:** estrategia coherente con el producto y el público; descripciones orientadas a **beneficios** (no solo funciones); capturas que comuniquen valor.
- **Cuenta en:** *Tareas / investigaciones*.

#### Investigación 1 — Reglas de seguridad de Firebase
- **Sesión / semana:** **6 (semana 6)**. Asignada al cierre de `sesion-06.md`; el cronograma del programa se ajustó para ubicarla también en la semana 6 (antes aparecía en la semana 7). *Resuelto — ver I-2.*
- **En qué consiste:** investigar qué son las reglas de seguridad de Firestore/Storage y por qué importan.
- **Entregable:** documento escrito: **qué son**, **por qué importan** y **un ejemplo aplicado** a la colección `entradas` (que cada `uid` lea/escriba solo lo suyo: `uid == request.auth.uid`).
- **Criterios de evaluación:** comprensión del rol de las reglas, ejemplo correcto aplicado al proyecto, claridad.
- **Cuenta en:** *Tareas / investigaciones*.

#### Quiz u1 — Tramo PWA "Ruta del Café"
- **Sesión / semana:** se sugiere responderlo tras la **sesión 3**. Archivo `quiz/u1-pwa-quiz.md`.
- **En qué consiste:** cuestionario de verificación (opción múltiple) sobre desarrollo asistido por IA en AI Studio, modo de anotación, prompting Funcionalidad/Interfaz, Firestore y PWA.
- **Entregable:** quiz respondido en línea (repo privado del docente).
- **Criterios de evaluación:** respuestas correctas; **formativo** (verificación de comprensión de la unidad PWA).
- **Cuenta en:** *Tareas / investigaciones*.

#### Quiz u2 — Tramo Nativo + Datos/Usuarios "Bitácora Visual"
- **Sesión / semana:** se sugiere tras la **sesión 6** (repaso hacia la 7). Archivo `quiz/u2-nativo-datos-quiz.md`.
- **En qué consiste:** cuestionario sobre app nativa (Kotlin/Compose), emulador del navegador, Install on Device, login/`uid`, Firestore por usuario y Storage.
- **Entregable:** quiz respondido en línea.
- **Criterios de evaluación:** respuestas correctas; **formativo**.
- **Cuenta en:** *Tareas / investigaciones*.

#### Quiz u3 — Tramo Distribución + Portafolio y Empleabilidad
- **Sesión / semana:** se sugiere en las **sesiones 8–9** (`material-por-clase.md` lo lista en ambas). Archivo `quiz/u3-distribucion-portafolio-quiz.md`.
- **En qué consiste:** cuestionario sobre PWA vs Play Store, store listing, ASO, monetización, portafolio y pitch.
- **Entregable:** quiz respondido en línea.
- **Criterios de evaluación:** respuestas correctas; **formativo**.
- **Cuenta en:** *Tareas / investigaciones*.

---

### 3.2 Laboratorios (categoría: 20 pts en total)

Los laboratorios se hacen **en vivo en clase** y se completan como entregable. En cada sesión de contenido el estudiante trabaja sobre la **app insignia** (Ruta del Café / Bitácora Visual) siguiendo la guía; la "Demo del docente" es solo del docente.

> **Reparto interno:** los 20 pts se distribuyen de forma **equitativa** entre los 6 laboratorios. Cada laboratorio se califica con la **rúbrica breve de 3 bandas** — **Excelente** (funciona completo con calidad de UI/UX e identidad propia), **Aceptable** (lo esencial con fallas menores), **Insuficiente** (no funciona lo esencial o no se entrega). *Resuelto — ver I-4.*

#### Laboratorio 1 — Primera app en AI Studio
- **Sesión / semana:** 1 (semana 1). Guía `proyecto-1-pwa.md` §1.
- **En qué consiste:** crear una app en AI Studio y pegar el prompt inicial de "Ruta del Café", aplicando al menos **un refinamiento** y usando **View diff**.
- **Entregable:** app generada en AI Studio con lista de tarjetas y un refinamiento aplicado.
- **Criterios de evaluación:** app funcional con tarjetas, identidad visual básica y uso del ciclo prompt → checkpoint → refinamiento.
- **Cuenta en:** *Laboratorios*.

#### Laboratorio 2 — Prototipo navegable con identidad propia
- **Sesión / semana:** 2 (semana 2). Guía `proyecto-1-pwa.md` §2 + Personalización.
- **En qué consiste:** agregar **filtro por categoría** y **vista de detalle** (lista → detalle → volver), con identidad propia; usar el **modo de anotación**.
- **Entregable:** prototipo navegable con filtro y detalle funcionando.
- **Criterios de evaluación:** navegación correcta, filtro con chip "Todos", identidad propia aplicada, estados.
- **Cuenta en:** *Laboratorios*.

#### Laboratorio 3 — PWA con datos persistentes, instalable
- **Sesión / semana:** 3 (semana 3). Guía `proyecto-1-pwa.md` §3.
- **En qué consiste:** conectar a **Firestore** (colección `cafeterias`), agregar formulario de creación y dejar la app **instalable como PWA** (idealmente publicada en Cloud Run).
- **Entregable:** PWA con datos en tiempo real (`onSnapshot`), formulario de alta e instalable.
- **Criterios de evaluación:** datos en Firestore, creación reflejada sin recargar, manifest/íconos/service worker presentes.
- **Cuenta en:** *Laboratorios*.

#### Laboratorio 4 — App nativa en el emulador del navegador
- **Sesión / semana:** 4 (semana 4). Guía `proyecto-final-nativo.md` §1.
- **En qué consiste:** crear la app **nativa** (Kotlin + Jetpack Compose) de "Bitácora Visual" en AI Studio y verla en el **emulador del navegador**; opcionalmente instalarla con **Install on Device**.
- **Entregable:** app nativa con la cuadrícula de la bitácora corriendo en el emulador del navegador.
- **Criterios de evaluación:** app nativa real (no web disfrazada) que renderiza el grid; uso de vocabulario Material 3 (TopAppBar, LazyVerticalGrid, FAB).
- **Cuenta en:** *Laboratorios*.

#### Laboratorio 5 — App nativa con datos y login
- **Sesión / semana:** 6 (semana 6). Guía `proyecto-final-nativo.md` §2.
- **En qué consiste:** agregar **login con Google** (Authentication), **datos por usuario** en Firestore (`uid`, tiempo real) y **subida de fotos a Storage**.
- **Entregable:** app nativa con login, entradas privadas por usuario y fotos en Storage.
- **Criterios de evaluación:** login funcionando, cada `uid` ve solo lo suyo, foto sube a Storage y su URL queda en `imagenUrl`.
- **Cuenta en:** *Laboratorios*. (Meta mínima aceptable: login + leer/crear entrada solo con título y nota; la foto es ampliación.)

#### Laboratorio 6 — App nativa con una capacidad del teléfono, pulida
- **Sesión / semana:** 7 (semana 7). Guía `proyecto-final-nativo.md` §3 + Personalización.
- **En qué consiste:** agregar la **cámara** (con permiso en runtime), **depurar con evidencia** (capturas de la vista previa + modo de anotación) y **pulir la marca** (ícono + splash). Cierra el desarrollo del Proyecto Final.
- **Entregable:** app nativa con cámara (o galería, por equidad), ícono y splash con marca.
- **Criterios de evaluación:** permiso de cámara con mensaje claro y caso "negado" resuelto (galería disponible), ícono/splash con la paleta, UI consistente y accesible.
- **Cuenta en:** *Laboratorios*.

---

### 3.3 Proyectos (categoría: 30 pts en total)

> Ambos proyectos se **entregan en línea** y se evalúan sobre el entregable, **no** como defensa en vivo. Las rúbricas por criterio están en `instrucciones-docente/sesion-05.md` (Proyecto 1) y `sesion-10.md` (Proyecto Final). **Proyectos = 30 pts en total, repartidos por el docente entre Proyecto 1 y Proyecto Final;** cada proyecto se califica con su rúbrica por criterio (bandas Excelente / Aceptable / Insuficiente).

#### Proyecto 1 — PWA "Ruta del Café" / su propia idea
- **Sesión / semana:** se construye en las semanas 1–3; se **entrega en línea en la sesión 5** (semana 5), junto al Examen Parcial.
- **En qué consiste:** tras reconstruir "Ruta del Café" con la guía, el estudiante crea **su propia idea de app** con la misma estructura (lista de tarjetas + filtro por categoría + vista de detalle, datos en Firestore, instalable como PWA).
- **Entregable (guía `proyecto-1-pwa.md` §"Qué entregas"):**
  - **URL** de su PWA publicada (Cloud Run) o app instalable.
  - App con lista de tarjetas, filtro, vista de detalle, **identidad visual propia** y datos en Firestore.
  - **Bitácora de prompts** (prompts clave, una decisión de diseño, un problema resuelto).
- **Criterios de evaluación (rúbrica por criterio, sesión 5):**
  - Identidad visual y UX (mobile-first, identidad propia, jerarquía, contraste AA, estados) — peso **Alto**
  - Proceso y dirección de IA (bitácora de prompts, criterio al dirigir la IA) — peso **Medio**
  - Funcionalidad (lista, filtro, detalle, navegación) — peso **Alto**
  - Datos + PWA instalable (Firestore en tiempo real; manifest/íconos/service worker) — peso **Alto**
  - Bandas por criterio: Excelente / Aceptable / Insuficiente. *Penalización:* entregar la app de referencia sin personalizar baja "Identidad visual y UX" a la mitad.
- **Cuenta en:** *Proyectos*.

#### Proyecto Final — App nativa "Bitácora Visual" / su propia idea (+ portafolio + pitch)
- **Sesión / semana:** se construye en las semanas 4, 6 y 7; se **entrega en línea en la sesión 10** (semana 10) y se muestra en el **Demo Day** (showcase, no calificado).
- **En qué consiste:** tras reconstruir "Bitácora Visual" con la guía, el estudiante entrega **su propia bitácora visual personalizada** (diario visual privado, cámara-first) con login, datos por usuario, fotos y marca; más su **caso de portafolio** y su **pitch**.
- **Entregable (guía `proyecto-final-nativo.md` §"Qué entregas" + rúbrica sesión 10):**
  - App nativa personalizada corriendo en el emulador del navegador o instalada en el teléfono.
  - Login con Google, entradas privadas por `uid` en Firestore, fotos en Storage, captura con cámara (o galería).
  - Ícono y splash con marca; 1–2 capturas finales.
  - **Caso de portafolio** (problema → proceso → resultado) y **guion de pitch** (2–3 min).
  - **Bitácora de prompts**.
- **Criterios de evaluación (rúbrica por criterio, sesión 10):**
  - App nativa funcional (emulador o teléfono; datos reales; login) — peso **Alto**
  - Datos, fotos y seguridad (Firestore por `uid`, Storage, reglas) — peso **Medio**
  - Capacidad del teléfono y pulido (cámara o galería; ícono/splash; UI accesible) — peso **Medio**
  - Pitch y comunicación (claro, 2–3 min, comunica valor) — peso **Alto**
  - Portafolio y proceso (caso problema/proceso/resultado; bitácora de prompts) — peso **Medio**
  - Bandas por criterio: Excelente / Aceptable / Insuficiente. *Equidad:* sin teléfono Android se puede entregar con emulador y galería, sin penalización.
- **Cuenta en:** *Proyectos*.

#### Mini-taller — Caso de portafolio + guion de pitch (sesión 9)
- **Sesión / semana:** 9 (semana 9). `sesion-09.md`.
- **En qué consiste:** redactar en clase el **caso de portafolio** (problema/proceso/resultado, con 1–2 prompts clave y capturas) y el **guion de pitch** (gancho, demo, proceso, cierre); ensayo rápido de 2–3 voluntarios.
- **Entregable:** caso de portafolio + guion de pitch (se terminan como parte del Proyecto Final para el Demo Day).
- **Criterios de evaluación:** ver criterios "Pitch y comunicación" y "Portafolio y proceso" del Proyecto Final.
- **Cuenta en:** *Proyectos* (alimenta el Proyecto Final; no es una nota aparte).

#### Bitácora de prompts (entregable transversal)
- **Sesión / semana:** se construye durante todo el trimestre; se entrega con el Proyecto 1 (sesión 5) y con el Proyecto Final (sesión 10).
- **En qué consiste / entregable:** documento con **prompts clave**, **una decisión de diseño** y **un problema resuelto** (formato mínimo, según observaciones del programa).
- **Criterios de evaluación:** evidencia de dirección de IA con criterio (ponderada dentro de "Proceso y dirección de IA" en cada rúbrica de proyecto).
- **Cuenta en:** *Proyectos*.

---

### 3.4 Examen Parcial (categoría: 20 pts)

- **Sesión / semana:** 5 (semana 5). `sesion-05.md`; instrumento en `examenes/examen-parcial.md` (clave) y `examenes/examen-parcial-estudiante.md` (solo preguntas, repo privado).
- **En qué consiste:** examen **individual, 100 % escrito y en línea**, sobre las sesiones 1–4. **Teoría** (opción múltiple, V/F razonado, respuesta corta) + **práctica escrita** (redactar un prompt con separación Funcionalidad/Interfaz, diseñar un modelo de datos, escribir un prompt de rescate, criticar/mejorar una interfaz). **No se programa.**
- **Entregable:** examen resuelto en línea.
- **Criterios de evaluación:** instrumento de 100 pts (**Teoría 40 % / Práctica 60 %**), **convertido íntegramente a los 20 puntos** del Examen Parcial; bandas en la clave.
- **Cuenta en:** *Examen Parcial*.

### 3.5 Examen Final (categoría: 20 pts)

- **Sesión / semana:** 10 (semana 10). `sesion-10.md`; instrumento en `examenes/examen-final.md` (clave) y `examenes/examen-final-estudiante.md` (solo preguntas, repo privado).
- **En qué consiste:** examen **individual, 100 % escrito y en línea**, sobre las sesiones 5–9. **Teoría** (nativo, Material 3 como vocabulario, login/`uid`, Storage, reglas, distribución/ASO, portafolio/pitch) + **práctica escrita** (redactar un prompt, diseñar un modelo de datos por usuario, escribir un prompt de rescate, redactar una ficha de tienda o un pitch).
- **Entregable:** examen resuelto en línea.
- **Criterios de evaluación:** instrumento de 100 pts (**Teoría 40 % / Práctica 60 %**), **convertido íntegramente a los 20 puntos** del Examen Final; bandas en la clave.
- **Cuenta en:** *Examen Final*.

---

## 4. Verificación de coherencia

**¿Los pesos suman 100?** Sí. 10 (Tareas) + 20 (Laboratorios) + 30 (Proyectos) + 20 (Parcial) + 20 (Final) = **100**. ✅

**¿Cada actividad del cronograma tiene lugar en la evaluación?**

| Actividad del cronograma | ¿Especificada? | Categoría |
|---|---|---|
| Tarea 1 (sem. 1) | Sí | Tareas |
| Tarea 2 (sem. 2) | Sí | Tareas |
| Tarea 3 (sem. 3) | Sí | Tareas |
| Tarea 4 (sem. 4) | Sí | Tareas |
| Tarea 5 (sem. 8) | Sí | Tareas |
| Investigación 1 (sem. 6) | Sí | Tareas |
| Laboratorios 1–6 (sem. 1–4, 6, 7) | Sí (6/6) | Laboratorios |
| Mini-taller ficha de tienda (sem. 8) | Sí | Tareas (dentro de Tarea 5) |
| Mini-taller portafolio + pitch (sem. 9) | Sí | Proyectos (dentro de Proyecto Final) |
| Quizzes u1, u2, u3 | Sí | Tareas (formativos) |
| Proyecto 1 — entrega (sem. 5) | Sí | Proyectos |
| Proyecto Final — entrega (sem. 10) | Sí | Proyectos |
| Examen Parcial (sem. 5) | Sí | Examen Parcial |
| Examen Final (sem. 10) | Sí | Examen Final |

Todas las actividades listadas en el cronograma tienen entregable y ubicación en la nota. ✅

**¿Los quizzes y la bitácora están bien ubicados?** Sí:
- Los 3 quizzes son **formativos** y el programa los ubica en *Tareas / investigaciones*. Coherente con `material-por-clase.md` (u1→s3, u2→s6/7, u3→s8/9).
- La **bitácora de prompts** se pondera en *Proyectos* (criterio "Proceso y dirección de IA" en ambas rúbricas). Coherente con las observaciones del programa.

**¿Hay actividades en el cronograma sin entregable claro, o entregables sin actividad?** No se detectan huérfanos: cada Tarea, Laboratorio, Investigación, mini-taller, quiz y proyecto tiene entregable y categoría. Las únicas fricciones son de **reparto de puntos** y **fechas**, descritas abajo.

---

## 5. Inconsistencias detectadas

> Reporte para el docente. Las marcadas **RESUELTAS** ya se corrigieron en el programa y/o en las sesiones 05/10 (iteración de evaluación, jul-2026); las **PENDIENTES** quedan fuera del alcance de esta iteración.

**I-1 · RESUELTA — Rúbricas de entrega de *Proyectos*.**
Antes las rúbricas de entrega mezclaban totales numéricos por proyecto (vestigio del esquema con defensa). **Corregido:** *Proyectos* vale **30 pts en total** y el docente reparte esos puntos entre Proyecto 1 y Proyecto Final; cada proyecto se evalúa con su **rúbrica por criterio** (bandas Excelente / Aceptable / Insuficiente), sin fijar un total numérico por proyecto. Declarado en el programa, en `sesion-05.md`, en `sesion-10.md` y en §1/§3.3 de este documento.

**I-2 · RESUELTA — Semana de Investigación 1.**
Antes el programa la listaba en la **Semana 7** y las instrucciones/`material-por-clase.md` en la **sesión 6**. **Corregido:** se unificó a la **semana 6** (donde realmente se asigna, al cierre de `sesion-06.md`); el cronograma del programa (md y `_build_docx.py`) se ajustó para moverla de la semana 7 a la 6. §2 y §3.1 de este documento ya reflejan la semana 6.

**Defensa del proyecto · RESUELTA — Residuo "se entrega y defiende".**
El programa decía que el Proyecto 1 "se entrega y **defiende**" en el parcial (modelo viejo). **Corregido:** ahora dice que se **entrega en línea y se evalúa** dentro de *Proyectos* (el examen es 100 % escrito, sin defensa). Las demás menciones de "defensa" en estos archivos son negaciones correctas ("sin defensa", "no una defensa calificada").

**I-4 · RESUELTA — Reparto interno de *Tareas* (10) y *Laboratorios* (20) + rúbrica.**
Antes ningún documento fijaba el peso de cada entrega. **Corregido:** se declaró **distribución equitativa** entre las entregas de cada categoría y una **rúbrica breve de 3 bandas** (Excelente / Aceptable / Insuficiente) aplicable a Tareas/investigaciones y a Laboratorios (en el programa y en §3.1/§3.2 de este documento). *Nota residual:* los quizzes se describen como "formativos" y a la vez cuentan dentro de *Tareas*; se conserva ese criterio (cuentan como parte de la distribución equitativa de la categoría).

**I-3 · PENDIENTE (fuera de alcance) — Nomenclatura mixta "Tarea" vs "Investigación".**
El programa rotula como *investigaciones* a Tarea 1, Tarea 4 e Investigación 1, pero solo una lleva "Investigación N". No es error de contenido; queda para una futura unificación de nombres.

**I-5 · RESUELTA — `CLAUDE.md` alineado.** `CLAUDE.md` ya describe la evaluación vigente (**examen 100 % escrito en línea, 20 pts, sin defensa**; proyecto evaluado dentro de *Proyectos*). Todo el repo (programa, sesiones 05/10, material-por-clase, CLAUDE.md) refleja el mismo esquema.

---

*Documento de especificación de referencia. Las correcciones de evaluación (I-1, I-2, defensa, I-4) ya se aplicaron en `programa/` y en las sesiones 05/10.*
