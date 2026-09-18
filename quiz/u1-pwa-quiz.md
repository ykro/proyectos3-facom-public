# Quiz -- Tramo PWA: Ruta del Cafe

---

### Pregunta 1

En el desarrollo de software asistido por IA con Google AI Studio Build, cual es tu rol principal como estudiante de Comunicacion y Diseno?

- a) Escribir el codigo React linea por linea
- b) Configurar manualmente los servidores donde corre la app
- c) Describir en lenguaje natural (espanol) lo que quieres construir y dirigir a la IA para que genere y refine la app
- d) Traducir el codigo de un lenguaje de programacion a otro

---

### Pregunta 2

Que es el **modo de anotacion** en AI Studio Build y para que sirve?

- a) Una herramienta donde haces clic directamente sobre un elemento del preview para senalar con precision que parte de la interfaz quieres cambiar
- b) Una funcion para escribir comentarios dentro del codigo
- c) Un editor de texto para tomar notas sobre el proyecto
- d) Un sistema que califica la calidad de tu prompt

---

### Pregunta 3

Por que el prompt inicial de "Ruta del Cafe" especifica codigos de color exactos (#6D2E46, #C84B31, #E3B23C), los campos de cada cafeteria y la cantidad de columnas por tamano de pantalla?

- a) Porque AI Studio solo acepta prompts con codigos hexadecimales
- b) Porque los colores con nombre (rojo, azul) no funcionan en React
- c) Porque es obligatorio incluir exactamente cinco colores en toda app
- d) Porque mientras mas especifico y detallado sea el prompt, el resultado se acerca mas a lo que necesitas y reduces las vueltas de correccion

---

### Pregunta 4

En "Ruta del Cafe", para que se usa la coleccion `cafeterias` de Firestore?

- a) Para guardar las contrasenas de los usuarios
- b) Para almacenar las cafeterias con sus campos (nombre, zona, categoria, especialidad, descripcion, imagenUrl) que alimentan las tarjetas y la vista de detalle
- c) Para definir los colores de la identidad visual
- d) Para configurar el service worker de la PWA

---

### Pregunta 5

Cual es la principal ventaja de leer las cafeterias con **onSnapshot** en lugar de hacer una lectura unica?

- a) Mantiene una suscripcion activa y actualiza el listado en tiempo real cuando se agregan, editan o eliminan cafeterias, sin recargar la pagina
- b) Consume menos datos del telefono
- c) Ordena las cafeterias automaticamente por categoria
- d) Cifra los datos antes de mostrarlos

---

### Pregunta 6

Que hace que una app web sea una **PWA instalable** en el telefono?

- a) Que use Tailwind CSS para los estilos
- b) Que tenga muchas tarjetas en pantalla
- c) Que este escrita en espanol
- d) Que tenga un web app manifest (manifest.json) con nombre, iconos y display "standalone", un service worker registrado, y que se sirva por HTTPS

---

### Pregunta 7

Despues de pedirle a la IA un cambio importante, por que conviene usar **View diff** y guardar un **checkpoint**?

- a) Porque View diff publica la app y el checkpoint la borra
- b) Porque son obligatorios para que Firebase funcione
- c) Porque View diff te muestra exactamente que archivos/lineas cambio el agente (para entender la app) y el checkpoint te permite regresar a una version estable si algo se rompe
- d) Porque aceleran la velocidad de internet del preview

---

### Pregunta 8

Si confirmas una cafeteria nueva en el formulario pero NO aparece en el listado, cual es el primer paso razonable para diagnosticar el problema?

- a) Reinstalar el navegador
- b) Abrir la consola del navegador (F12) y la pestana Code para revisar si hubo un error al escribir en Firestore o si las reglas de seguridad bloquean la escritura
- c) Cambiar la paleta de colores de la app
- d) Borrar todas las cafeterias de ejemplo

---

## Respuestas

1. c
2. a
3. d
4. b
5. a
6. d
7. c
8. b
