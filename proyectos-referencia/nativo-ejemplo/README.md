# Bitacora Visual (App nativa de referencia)

Proyecto de **referencia** para el curso **Proyectos III - Diseno de aplicaciones moviles**
(Comunicacion y Diseno, Universidad Galileo).

> **Nota para el docente:** este es el esqueleto de una app **nativa de Android**
> (Kotlin + Jetpack Compose) que sirve de referencia. Los estudiantes la **construyen en
> Google AI Studio (modo Build)**, todo desde el navegador, usando desarrollo de software
> asistido por IA. No es obligatorio que escriban el codigo Kotlin a mano: **Kotlin y
> Jetpack Compose son la tecnologia que genera la IA**, y **Material 3** es su vocabulario
> de diseno.

---

## Que es

**Bitacora Visual** es una app nativa de Android que funciona como un **diario visual
privado** para creativos: capturas con la **camara** una foto de algo que te inspiro (una
textura, una paleta, una tipografia en la calle), le pones una nota, y queda guardado en
tu bitacora personal.

Simetria con la PWA del curso (Ruta del Cafe): la PWA es un **catalogo publico que se
navega**; Bitacora Visual es una **herramienta privada que captura** con el telefono.

Funciones objetivo:

- **Timeline / grid de entradas** (foto, titulo y fecha de cada momento capturado).
- **Camara-first**: agregar una entrada nueva empieza tomando una foto con la camara.
- **Login** y **datos por usuario**: cada persona ve solo su propia bitacora (privada).
- **Boton flotante "+"** (FAB) para crear una entrada nueva.

La app guarda la coleccion `entradas` en Firestore. Cada documento tiene estos campos:

| Campo       | Tipo   | Ejemplo                                   |
| ----------- | ------ | ----------------------------------------- |
| `titulo`    | texto  | "Paleta de un mural en la Zona 1"         |
| `nota`      | texto  | "Me gusto el contraste vino/mostaza..."   |
| `imagenUrl` | texto  | "https://.../foto.jpg"                     |
| `uid`       | texto  | id del usuario dueno de la entrada         |
| `fecha`     | fecha  | `serverTimestamp()` al crear la entrada    |

El esqueleto que esta en esta carpeta es un proyecto base de Android (una sola pantalla
con Jetpack Compose y Material 3). La funcionalidad de bitacora se agrega despues,
describiendosela a **la IA de AI Studio** (ver mas abajo).

> **Sobre el nombre del paquete:** el codigo de este esqueleto usa el paquete
> `com.example.portafoliocreativo` y el theme `PortafolioCreativoTheme`. Esos nombres son
> **ilustrativos** (heredados del esqueleto original): la app se llama **Bitacora Visual**
> (ver `res/values/strings.xml`). En el flujo de AI Studio no necesitas renombrar el
> paquete a mano; solo describes la app y la IA genera el proyecto con el nombre correcto.

---

## Paleta (identidad "vino")

La app usa la paleta canonica del curso (definida en `theme/Color.kt`):

- Crema / fondo: **#FDF6EC**
- Vino / primario: **#6D2E46**
- Terracota / secundario: **#C84B31**
- Mostaza / acento: **#E3B23C**
- Texto: **#2B2B2B**

En Compose estos colores se mapean al `ColorScheme` de **Material 3** (primary, secondary,
tertiary, background, surface). Material 3 es el vocabulario de diseno con el que la IA
construye la interfaz.

---

## Como se construye (Google AI Studio, modo Build)

Todo el flujo ocurre en **Google AI Studio (modo Build)**, dentro del navegador (Chrome).
No hay terminal, ni SDK, ni emuladores que instalar.

### 1. Crear la app nativa

En AI Studio crea una app nueva y, en el primer prompt, pide una **app nativa de Android
con Kotlin y Jetpack Compose**. Describe Bitacora Visual: un diario visual privado con un
grid de entradas y un boton "+" para agregar.

### 2. Ver la vista previa (emulador del navegador)

AI Studio muestra un **emulador de Android integrado en el navegador**, en el panel de
vista previa. Se actualiza solo conforme la IA genera o cambia el codigo: no tienes que
crear ni arrancar nada.

### 3. Agregar la funcionalidad con la IA de AI Studio

Le describes a **la IA de AI Studio**, en lenguaje natural, que quieres lograr; la IA edita
el codigo Kotlin/Compose. Prompts sugeridos, en orden:

1. **Grid de entradas**
   > "Muestra las entradas de la bitacora en un grid de Jetpack Compose. Cada entrada
   > tiene una imagen, un titulo y la fecha. Por ahora usa datos de ejemplo."

2. **Login y datos por usuario**
   > "Agrega inicio de sesion (Firebase Authentication) y haz que cada usuario vea solo
   > sus propias entradas. Es un diario privado."

3. **Guardar entradas (camara-first)**
   > "Agrega un boton flotante '+' que abra la camara del telefono para tomar una foto,
   > pedir un titulo y una nota, y guardar la entrada en Firestore (coleccion `entradas`)
   > con los campos titulo, nota, imagenUrl, uid y fecha (serverTimestamp)."

> **Tip:** trabaja un prompt a la vez y revisa la vista previa despues de cada paso. Si algo
> no queda como esperas, describele el problema a la IA. Regla de los 2 strikes: si un mismo
> prompt falla dos veces, cambia el enfoque en lugar de repetirlo.

### 4. Firebase (auto-provisioning)

Firebase se **auto-aprovisiona**: usa "Enable Firebase" y AI Studio crea el proyecto y
conecta Firestore, Authentication y Storage por ti. **No hay consola, ni archivos de
configuracion, ni pasos manuales**: igual que en la PWA.

### 5. Probar en un telefono real ("Install on Device")

En el panel de vista previa hay un boton **"Install on Device"**:

1. Pulsa **"Install on Device"**.
2. Elige tu telefono en el **selector USB de Chrome** (WebUSB).
3. AI Studio instala y abre la app en tu telefono.

Requisitos del telefono: Android con **modo de desarrollador** activado, **depuracion USB**
activada, un cable **USB** y Chrome en la computadora. No necesitas ADB ni instalar el SDK.

### 6. Capturas, inspeccion y depuracion

- **Capturas:** tomalas desde la **vista previa del navegador** o desde el propio telefono.
- **Inspeccionar / ajustar la UI:** usa el **modo de anotacion** (senalas sobre la vista
  previa lo que quieres cambiar), **View diff** (ves que cambio la IA) y la pestana
  **Code**.

---

## Tu proyecto (idea para el estudiante)

Reusando el concepto de filtro de la PWA, puedes pedirle a la IA que agregue una
**etiqueta / categoria** a cada entrada (por ejemplo: **Color, Tipografia, Textura,
Composicion, Idea**) y un filtro para ver solo las entradas de un tipo. Es una forma
natural de organizar la bitacora visual.

---

## Estructura del esqueleto (referencia)

```
nativo-ejemplo/
├── build.gradle.kts
├── settings.gradle.kts
├── gradle/
│   └── libs.versions.toml          # Versiones de dependencias
└── app/
    ├── build.gradle.kts            # Dependencias del modulo de la app
    └── src/main/
        ├── AndroidManifest.xml
        ├── java/com/example/portafoliocreativo/   # (nombre de paquete ilustrativo)
        │   ├── MainActivity.kt     # Punto de entrada de la app
        │   ├── Navigation.kt       # Navegacion entre pantallas
        │   ├── theme/              # Colores (paleta vino), tipografia, tema
        │   ├── data/               # Repositorio de datos
        │   └── ui/main/            # Pantalla principal (Compose)
        └── res/                    # Iconos, strings, estilos
```

> Recordatorio: esta carpeta es **material de referencia para el docente**. Sirve como
> punto de partida y guia del flujo; el alumno reproduce el resultado construyendo la app
> en Google AI Studio.

---

_El agente interno de AI Studio se llama Antigravity; no necesitas usar ese nombre._
