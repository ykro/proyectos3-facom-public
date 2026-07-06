# Proyecto 1 (PWA) — Prompts: Ruta del Café

App de referencia para construir en **Google AI Studio Build Mode**. "Ruta del Café" es una guía de **cafés de especialidad de Guatemala** que se ve y se instala como una app de teléfono. La construyes dirigiendo a la IA en español, sin escribir código.

**Cómo están escritos estos prompts.** Cada prompt separa la **Funcionalidad (qué hace)** de la **Interfaz (UI/UX — cómo se ve y se siente)**. Así diriges a la IA con criterio de diseño y puedes cambiar el aspecto sin romper la lógica.

## Tips para Google AI Studio

- Abre [aistudio.google.com](https://aistudio.google.com), selecciona **Build** y crea una app nueva. Modelo por defecto: **Gemini 3.5 Flash**.
- Escribe el prompt inicial y espera a que AI Studio genere la app. Revisa el **Live preview** antes de continuar.
- Usa el **modo de anotación**: haz clic sobre un elemento del preview para señalar qué cambiar. Más preciso que describir con palabras.
- Guarda un **checkpoint** antes de cada refinamiento importante.
- Usa **View diff** después de cada cambio para ver qué archivos se modificaron.
- Cuando AI Studio ofrezca habilitar **Firebase**, acepta. Auto-provisiona Firestore y configura todo.
- Prueba en ventana angosta (o modo dispositivo móvil de Chrome): es una app pensada para el teléfono.

## Paleta de marca (cálida, cafetera)
Fondo crema #FDF6EC · Vino #6D2E46 (principal) · Terracota #C84B31 · Mostaza #E3B23C · Texto #2B2B2B.
Categorías y color de badge (mapeo oficial): Para trabajar #3A6B7E (azul, texto blanco) · Brunch #E3B23C (mostaza, texto oscuro #3a2c00) · De barrio #C84B31 (terracota, texto blanco) · Tostador #4F772D (verde, texto blanco) · Al paso #6D2E46 (vino, texto blanco).

---

## Prompt inicial

> Crea una aplicación web usando React con Tailwind CSS que funcione como una guía de cafés de especialidad de Guatemala llamada "Ruta del Café". Toda la interfaz en español (Guatemala). Quiero una UI/UX de altísima calidad, mobile-first, con jerarquía visual clara y aire generoso.
>
> **Funcionalidad (qué hace):**
> - Muestra cafeterías en tarjetas. Genera 8 cafeterías de ejemplo dentro de la app (aún sin base de datos). Cada café tiene: `nombre` (texto), `zona` (texto; ejemplos reales de GT: "Zona 10, Ciudad de Guatemala", "Cuatro Grados Norte", "Antigua Guatemala", "Xela"), `categoria` (una de: "Para trabajar", "Brunch", "De barrio", "Tostador", "Al paso"), `especialidad` (texto; ej. "Filtrado de Huehuetenango", "Grano de cooperativa maya de Atitlán/Sololá", "Tueste de Cobán, Alta Verapaz"), `descripcion` (1–2 frases), `imagenUrl` (placeholder por ahora).
> - Cafeterías variadas en categorías, zonas y especialidades. Refleja la diversidad cafetalera de GT: 1–2 cafés que resalten granos de **cooperativas mayas** (Atitlán/Sololá, Cobán/Alta Verapaz, San Marcos, Huehuetenango) y, si cabe natural, una mención a la **costa caribeña (cultura garífuna)**. Con respeto, sin estereotipos.
>
> **Interfaz (UI/UX):**
> - Header con "Ruta del Café" y subtítulo "Cafés de especialidad en Guatemala"; debajo, la cuadrícula de tarjetas.
> - Tarjeta (card): imagen arriba; luego `nombre` en negrita (dominante); `zona` con ícono de ubicación; `especialidad` como texto secundario; y un badge de color con la `categoria`.
> - Cada imagen (campo `imagenUrl`) debe llevar **texto alternativo descriptivo** (por ejemplo, el nombre y el tipo del café); los íconos puramente decorativos se marcan como decorativos para lectores de pantalla.
> - Color: fondo crema #FDF6EC, principal vino #6D2E46, secundario terracota #C84B31, acento mostaza #E3B23C, texto #2B2B2B. Color con propósito.
> - Tipografía con carácter editorial en títulos; espaciado en grid de 8px con aire generoso.
> - Estados: estado vacío amable ("Aún no hay cafés").
> - Microinteracciones: bordes redondeados, sombra suave, hover sutil (elevación + sombra) con transición 250ms.
> - Accesibilidad: contraste AA, áreas táctiles de mínimo 44×44 px. Responsive: 1 col teléfono, 2 tablet, 3 escritorio.
>
> **Estructura del código:**
> - Componentes separados: `Header`, `ListaCafes`, `TarjetaCafe`, `FiltroCategoria`, `DetalleCafe`, más `App`. Datos de ejemplo en `data/cafeterias.js`.
> - Comentarios en cada componente con el formato:
> ```
> // CONCEPTO: [...]
> // QUE HACE: [...]
> // POR QUE: [...]
> ```

---

## Refinamiento 1: Sistema de color por categoría (badges)

*Casi puro Interfaz. Revisa el diff para ver dónde se define la relación categoría→color.*

> **Qué construimos:** el sistema de color por categoría.
>
> **Interfaz (UI/UX):**
> - Badge de categoría con color: "Para trabajar" #3A6B7E (azul), "Brunch" #E3B23C (mostaza, texto oscuro #3a2c00 por contraste), "De barrio" #C84B31 (terracota), "Tostador" #4F772D (verde), "Al paso" #6D2E46 (vino). Texto blanco en todas excepto "Brunch", que usa texto oscuro #3a2c00. Bordes redondeados, padding horizontal.
> - Usa estos colores de forma consistente en tarjeta y detalle. Padding interno cómodo en la tarjeta y hover afinado (250ms).

---

## Refinamiento 2: Filtro por categoría

> **Qué construimos:** un filtro por categoría bajo el header.
>
> **Funcionalidad (qué hace):**
> - Un chip por categoría (Para trabajar, Brunch, De barrio, Tostador, Al paso) más un chip "Todos". Al tocarlo, la lista muestra solo esa categoría; "Todos" muestra todas. Se aplica de inmediato.
>
> **Interfaz (UI/UX):**
> - Chips redondeados en fila horizontal. Seleccionado: fondo vino #6D2E46 y texto blanco; los demás con fondo claro y borde sutil. En teléfono, scroll horizontal sin romper el layout. Transición 200ms.

---

## Refinamiento 3: Vista de detalle

> **Qué construimos:** vista de detalle del café al tocar su tarjeta.
>
> **Funcionalidad (qué hace):**
> - Al tocar una tarjeta, abre el detalle de ese café (usa estado de React, no React Router). Botón "Volver" a la lista.
>
> **Interfaz (UI/UX):**
> - Imagen grande arriba a todo el ancho; debajo `nombre` en grande, badge de categoría, `zona` con ícono, `especialidad` destacada y `descripcion` completa con buen interlineado. Botón "Volver" siempre visible. Excelente en teléfono.

---

## Refinamiento 4: Firestore en tiempo real

*Cuando AI Studio ofrezca habilitar Firebase, acepta. Si no, escribe: "Habilita Firebase Firestore para esta aplicación".*

> **Qué construimos:** los cafés vienen de Firestore.
>
> **Funcionalidad (qué hace):**
> - Colección "cafeterias"; documentos con nombre, zona, categoria, especialidad, descripcion, imagenUrl. Lee con onSnapshot (tiempo real) y limpia la suscripción al desmontar. Si está vacía, carga las 8 de ejemplo con addDoc y un campo creadoEn = serverTimestamp(). Mantén filtro y detalle.
>
> **Interfaz (UI/UX):**
> - Estado de carga (skeleton de tarjetas o "Cargando cafés…") y estado vacío amable. El resto no cambia.

---

## Refinamiento 5: Formulario para agregar un café

*Guarda un checkpoint antes: agregar escritura a la base es un cambio grande.*

> **Qué construimos:** formulario para crear una cafetería nueva.
>
> **Funcionalidad (qué hace):**
> - Botón "Agregar café" abre un formulario con nombre, zona, categoria (menú con las 5), especialidad, descripcion, imagenUrl. Al guardar, crea un documento en "cafeterias" con creadoEn = serverTimestamp(). onSnapshot lo muestra sin recargar. Valida que nombre y zona no estén vacíos (error debajo del campo).
>
> **Interfaz (UI/UX):**
> - Modal centrado (o panel), campos bien espaciados, etiquetas claras, botón primario "Guardar" en vino #6D2E46. Buen aspecto en teléfono. Mensaje de éxito al guardar.

---

## Refinamiento 6: PWA instalable

> **Qué construimos:** convertir la app en PWA instalable.
>
> **Funcionalidad (qué hace):**
> - manifest.json con name "Ruta del Café", short_name "Café", start_url "/", display "standalone". Service worker con cache del shell. Que el navegador ofrezca "Instalar".
>
> **Interfaz (UI/UX):**
> - theme_color vino #6D2E46, background_color crema #FDF6EC. Íconos 192x192 y 512x512 (fondo vino con una taza en mostaza #E3B23C; si no puedes generar imágenes, SVG/data URI).

---

## Personalización de interfaz (opcional, solo interfaz)

**Paleta / theme.**
> Cambia solo la paleta: fondo [#HEX], principal [#HEX], secundario [#HEX], acento [#HEX], texto [#HEX]. Aplícala en header, tarjetas, chips, badges y detalle, cuidando contraste AA. No cambies la funcionalidad.

**Tipografía.**
> Cambia solo la tipografía: fuente display con carácter para títulos y una legible para el cuerpo, con escala tipográfica clara y buen interlineado.

**Estilo de tarjetas.**
> Rediseña solo el estilo de las tarjetas: [esquinas / sombra / tamaño de imagen / borde de acento por categoría]. Misma información y comportamiento.

**Header / hero.**
> Convierte el header en un hero con el nombre, subtítulo y un gradiente sutil de la paleta (vino a terracota), con buen contraste. Solo interfaz.

**Modo oscuro.**
> Agrega modo oscuro con botón para alternarlo, versiones oscuras coherentes de la paleta y contraste AA. No cambies la funcionalidad.

**Ilustración e iconografía (imagen propia).**
> Prepara **por tu cuenta** un ícono/ilustración de marca (una taza estilizada) —dibújalo, usa uno libre de derechos, o genéralo aparte (por ejemplo en el playground de AI Studio con Nano Banana)— y luego pídele a la app que lo use en el header y como imagen de respaldo cuando falte imagenUrl.

**Estado vacío con personalidad.**
> Rediseña el estado vacío del filtro ("No encontramos cafés en esta categoría… todavía") con un ícono/ilustración sencillo. Solo interfaz.

**Estados de foco visibles (navegación por teclado).**
> Agrega estados de **foco visibles** en chips, botones y enlaces (un anillo/borde de foco claro con buen contraste) para que la app se pueda navegar con teclado en escritorio. No cambies la funcionalidad.

---

## Prompts de rescate

### Los cafés no aparecen
> El listado está vacío. Revisa: 1) que la lectura de "cafeterias" use onSnapshot y actualice el estado; 2) que cada documento se mapee con doc.id y doc.data(); 3) que los nombres de campos coincidan (nombre, zona, categoria, especialidad, descripcion, imagenUrl); 4) que si está vacía se carguen las 8 de ejemplo; 5) agrega "Aún no hay cafés" para distinguir datos vacíos de un error de renderizado.

### Estado de error al leer datos (con "Reintentar")
> **Interfaz (UI/UX):** cuando la lectura de "cafeterias" falle (sin conexión o error de Firestore), muestra un **estado de error** distinto del estado vacío: un mensaje amable en español ("No pudimos cargar los cafés. Revisa tu conexión.") y un botón **"Reintentar"** que vuelve a intentar la lectura. No lo confundas con "Aún no hay cafés" (ese es el estado vacío, cuando no hay error).

### Firestore da error de permisos
> Aparece "Missing or insufficient permissions". En AI Studio, Firebase se auto-provisiona; pídele a la IA que ajuste las reglas de Firestore para permitir lectura/escritura durante el desarrollo, y recuérdame endurecerlas antes de publicar. No dejes reglas abiertas en producción.

### Los estilos se ven rotos
> Los estilos se ven rotos. Revisa: 1) Tailwind configurado; 2) paleta correcta (fondo #FDF6EC, principal #6D2E46, #C84B31, #E3B23C, texto #2B2B2B); 3) el root con fondo crema y min-h-screen; 4) sin conflictos entre CSS custom y Tailwind. Regenera los estilos respetando la paleta.

### No se instala como PWA
> No aparece la opción de instalar. Revisa: manifest.json enlazado en el head; name/short_name/start_url/display "standalone"; íconos 192 y 512 que carguen; service worker registrado; meta theme-color. Recuerda que la instalación requiere https (en el deploy de Cloud Run ya se cumple).
