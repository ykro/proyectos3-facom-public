/**
 * CONCEPTO: Service Worker (corazon de la PWA)
 * QUE HACE: Guarda en cache los archivos principales de la app para que pueda
 *           abrirse incluso sin conexion a internet.
 * POR QUE: Lo que convierte una pagina web normal en una "Aplicacion Web Progresiva"
 *          (PWA) es justamente este archivo. Corre en segundo plano, separado de la
 *          pagina, e intercepta las peticiones de red para responder desde el cache.
 *
 * NOTA EDUCATIVA: Este es un Service Worker minimo, escrito a mano para fines didacticos.
 * En un proyecto real con Create React App se suele generar uno automaticamente con
 * herramientas como Workbox. Aqui lo dejamos simple y comentado para que se entienda.
 */

// Nombre de la "version" del cache. Si cambias archivos, sube el numero
// (v1 -> v2) para que el navegador descarte el cache viejo.
const NOMBRE_CACHE = "ruta-del-cafe-v1";

// Lista de archivos basicos que queremos disponibles sin conexion (app shell).
const ARCHIVOS_BASE = ["./", "./index.html", "./manifest.json"];

/**
 * Evento "install": ocurre cuando el navegador instala el Service Worker.
 * Aprovechamos para guardar en cache los archivos base de la app.
 */
self.addEventListener("install", (evento) => {
  evento.waitUntil(
    caches.open(NOMBRE_CACHE).then((cache) => cache.addAll(ARCHIVOS_BASE))
  );
});

/**
 * Evento "activate": ocurre cuando el nuevo Service Worker toma control.
 * Aprovechamos para borrar caches de versiones anteriores.
 */
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((nombres) =>
      Promise.all(
        nombres
          .filter((nombre) => nombre !== NOMBRE_CACHE)
          .map((nombre) => caches.delete(nombre))
      )
    )
  );
});

/**
 * Evento "fetch": intercepta cada peticion de red de la app.
 * Estrategia "cache primero": si el archivo ya esta en cache lo devolvemos
 * de ahi (rapido y offline); si no, lo pedimos a la red.
 *
 * IMPORTANTE: Las lecturas a Firestore NO se cachean aqui; el SDK de Firebase
 * maneja su propia persistencia offline.
 */
self.addEventListener("fetch", (evento) => {
  evento.respondWith(
    caches.match(evento.request).then((respuestaCache) => {
      return respuestaCache || fetch(evento.request);
    })
  );
});
