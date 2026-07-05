# Ruta del Cafe (PWA de referencia)

Proyecto de **referencia** para el curso **Proyectos III - Diseno de aplicaciones moviles**
(Comunicacion y Diseno, Universidad Galileo).

> Este codigo lo usa el docente como referencia. Los estudiantes lo **construyen en
> Google AI Studio (modo Build)** usando desarrollo de software asistido por IA, todo
> desde el navegador (no es obligatorio que lo corran a mano).

---

## Que es

**Ruta del Cafe** es una PWA (Aplicacion Web Progresiva) que funciona como una guia de
**cafes de especialidad en Guatemala**: un catalogo publico que se navega para descubrir
donde tomar un buen cafe segun lo que buscas.

Funciones principales:

- **Tarjetas de cafeterias** en una cuadricula adaptable (responsive).
- **Filtro por categoria** (Para trabajar, Brunch, De barrio, Tostador, Al paso).
- **Vista detalle** de cada cafeteria (ventana modal con la informacion completa).
- **Conexion a Firebase Firestore** en tiempo real con `onSnapshot`.
- **Instalable como app** (PWA): incluye `manifest.json` y un Service Worker.

La app lee la coleccion `cafeterias` de Firestore. Cada documento tiene estos campos:

| Campo          | Tipo  | Ejemplo                                       |
| -------------- | ----- | --------------------------------------------- |
| `nombre`       | texto | "Cafe con Altura"                             |
| `zona`         | texto | "Zona 10, Ciudad de Guatemala"                |
| `categoria`    | texto | "Para trabajar"                               |
| `especialidad` | texto | "Filtrado V60 de Huehuetenango"               |
| `descripcion`  | texto | "Un espacio amplio y silencioso..."           |
| `imagenUrl`    | texto | "https://.../imagen.jpg"                      |

Las cinco categorias tienen un color propio de la paleta para leer el catalogo de un
vistazo:

| Categoria       | Color        |
| --------------- | ------------ |
| Para trabajar   | azul #3A6B7E |
| Brunch          | mostaza #E3B23C (texto oscuro #2B2B2B) |
| De barrio       | terracota #C84B31 |
| Tostador        | verde #4F772D |
| Al paso         | vino #6D2E46 |

Si la coleccion `cafeterias` todavia esta vacia (o la config de Firebase es el placeholder),
la app muestra automaticamente los **datos de ejemplo** de `src/data/cafeterias.json` para
que siempre haya contenido visible en clase.

---

## Paleta (identidad "vino")

Toda la app usa la paleta canonica del curso, que combina bien con la estetica cafetera:

- Crema / fondo: **#FDF6EC**
- Vino / primario: **#6D2E46**
- Terracota / secundario: **#C84B31**
- Mostaza / acento: **#E3B23C**
- Texto: **#2B2B2B**

Estos colores estan definidos como `marca-fondo`, `marca-vino`, `marca-naranja`,
`marca-amarillo` y `marca-texto` en la configuracion de Tailwind (ver `public/index.html`).

---

## Estructura del proyecto

```
pwa-ejemplo/
├── package.json
├── public/
│   ├── index.html          # Carga Tailwind (CDN) y registra el Service Worker
│   ├── manifest.json       # Metadatos de la PWA (nombre, iconos, colores)
│   ├── service-worker.js   # Cache offline (lo que hace "instalable" a la app)
│   └── icons/              # Iconos de la app (192px y 512px)
└── src/
    ├── index.js            # Punto de entrada de React
    ├── App.jsx             # Cerebro: estado, lectura de Firestore, filtro
    ├── firebase.js         # Configuracion de Firebase (placeholder)
    ├── data/
    │   └── cafeterias.json # 8 cafeterias de ejemplo (ambientadas en Guatemala)
    └── components/
        ├── Header.jsx
        ├── CategoryFilter.jsx
        ├── CafeGrid.jsx
        ├── CafeCard.jsx
        └── CafeDetail.jsx
```

Todos los componentes incluyen comentarios academicos con el formato
`// CONCEPTO:`, `// QUE HACE:` y `// POR QUE:` para explicar las decisiones.

---

## Como se construye (Google AI Studio, modo Build)

Esta app esta pensada para construirse en **Google AI Studio (modo Build)**, todo desde el
navegador (Chrome):

1. Crea una app nueva en AI Studio y describe, en lenguaje natural, la Ruta del Cafe:
   catalogo de cafes de especialidad, tarjetas, filtro por categoria y vista detalle.
2. AI Studio genera el codigo (React + Tailwind) y lo muestra en su **vista previa**
   integrada, que se actualiza sola.
3. Firebase se **auto-aprovisiona** ("Enable Firebase"): AI Studio crea el proyecto de
   Firebase y conecta Firestore por ti. **No necesitas pegar llaves a mano** ni entrar a
   ninguna consola.
4. Refinas la app con mas prompts (paleta, estados vacios, microinteracciones) y publicas
   cuando quede lista.

> El modelo por defecto de AI Studio Build es **Gemini 3.5 Flash** (y Gemini 3.5 Pro para
> tareas mas complejas).

---

## Como correrlo a mano (opcional)

El docente puede correr el codigo localmente como referencia. Requiere
[Node.js](https://nodejs.org):

```bash
npm install
npm start
```

Esto abre la app en `http://localhost:3000`.

> **Importante:** la configuracion de Firebase en `src/firebase.js` es un **placeholder**
> (valores `TU-API-KEY`, `TU-PROYECTO`, etc.). La app **igual funciona** porque cae en los
> datos de ejemplo de `src/data/cafeterias.json`. En el flujo de AI Studio no tienes que
> tocar este archivo: la configuracion se conecta automaticamente.

---

## Probar que es instalable (PWA)

1. Corre la app (`npm start`) o abre la version publicada.
2. Abrela en Chrome.
3. En la barra de direcciones aparece un icono de **"Instalar"**.
4. Tambien puedes revisar en *DevTools > Application > Manifest / Service Workers*
   que el manifest y el Service Worker esten activos.
