# Quiz -- Tramo Nativo + Datos/Usuarios: Bitacora Visual

---

### Pregunta 1

Cual es una diferencia clave entre la **PWA** (Ruta del Cafe) y la **app nativa de Android** (Bitacora Visual), si ambas se construyen en AI Studio?

- a) La PWA no puede usar Firebase y la nativa si
- b) La app nativa no puede estar en espanol
- c) No hay ninguna diferencia, son lo mismo con otro nombre
- d) Las dos se construyen en AI Studio, pero la nativa es una app de Android real (Kotlin + Jetpack Compose) que instalas en un dispositivo con "Install on Device", mientras que la PWA es una app web que se instala desde el navegador

---

### Pregunta 2

Como creas la app nativa "Bitacora Visual" en Google AI Studio?

- a) Creas una app nueva en Build y en el primer prompt le pides a la IA una app nativa de Android con Kotlin y Jetpack Compose
- b) Instalando el SDK de Android y ejecutando un comando en la terminal
- c) Descargando una plantilla y compilandola con Gradle en tu computadora
- d) Publicando primero en Google Play y luego editandola

---

### Pregunta 3

Mientras construyes la app nativa, como la ves sin necesidad de un telefono fisico?

- a) Tienes que compilar el proyecto y arrancar un emulador desde la terminal
- b) Debes conectar siempre un telefono por USB, no hay otra forma de verla
- c) AI Studio muestra un emulador de Android integrado en el navegador (panel de vista previa) que se actualiza solo con cada cambio; no arrancas ni corres nada
- d) Se abre automaticamente en Google Play para probarla

---

### Pregunta 4

Cuando quieres probar la app en un **telefono Android real** (por ejemplo, para usar la camara), como la instalas desde AI Studio?

- a) Ejecutando comandos de ADB y el SDK de Android desde la terminal
- b) Con el boton "Install on Device": conectas el telefono por USB, lo eliges en el selector USB de Chrome (WebUSB) y la app se instala y abre sola, sin ADB ni SDK
- c) Subiendola a la Play Store y descargandola desde la tienda
- d) Enviandote el archivo APK por correo e instalandolo a mano

---

### Pregunta 5

En "Bitacora Visual", para que sirve **Firebase Authentication con Google Sign-In**?

- a) Para subir las fotos al servidor
- b) Para definir el icono y la splash screen
- c) Para tomar fotos con la camara
- d) Para identificar quien es el usuario, de modo que sus entradas se guarden y se muestren asociadas a el (a su `uid`), como un diario privado

---

### Pregunta 6

Cuando el usuario agrega una entrada con foto, como se reparte la informacion entre **Storage** y **Firestore**?

- a) La foto (el archivo) se sube a Firebase Storage y en Firestore se guarda un documento con los metadatos (titulo, nota, uid, fecha) mas la URL de descarga de la imagen (imagenUrl)
- b) Todo se guarda en Firestore, incluida la imagen completa
- c) La foto se guarda en Storage y nada se guarda en Firestore
- d) Storage guarda los metadatos y Firestore guarda la imagen

---

### Pregunta 7

Por que la app debe solicitar el **permiso de camara en tiempo de ejecucion** (runtime permission)?

- a) Porque Firebase lo exige para subir fotos
- b) Porque sin el permiso la app no se puede construir en AI Studio
- c) Porque Android obliga a pedirle permiso explicito al usuario para acceder a recursos sensibles como la camara, y el usuario puede aceptarlo o denegarlo
- d) Porque el emulador del navegador no tiene camara

---

### Pregunta 8

Cual es el proposito de unas **reglas de seguridad** como "un usuario solo puede leer y modificar documentos donde `uid == request.auth.uid`"?

- a) Acelerar las consultas a Firestore
- b) Asegurar que cada usuario solo pueda ver y modificar sus propias entradas, y no las de otras personas
- c) Cambiar el color de las entradas segun el usuario
- d) Permitir que cualquiera, autenticado o no, edite todo

---

## Respuestas

1. d
2. a
3. c
4. b
5. d
6. a
7. c
8. b
