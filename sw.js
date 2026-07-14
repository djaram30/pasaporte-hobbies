// Service worker del Pasaporte de Hobbies — cache para uso offline.
// Al publicar un pack nuevo, subir la VERSION para refrescar el cache.
const VERSION = "pasaporte-v4";
const ARCHIVOS = ["./", "./index.html", "./expediciones.js", "./manifest.webmanifest", "./icon.svg"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Red primero (para recibir packs nuevos), cache como respaldo offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copia = res.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copia));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
