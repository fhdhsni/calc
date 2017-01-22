const CACHE_NAME = "v1";
const urlsToCache = [
  "/calc",
  "/calc/",
  "/calc/app.js",
  "/calc/index.html",
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then((fetchResponse) => {
            if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== "basic") {
              return fetchResponse;
            }
            const responseToCache = fetchResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          });
      })
  );
});

self.addEventListener("activate", e => e.waitUntil(
  caches.keys()
    .then(cacheNames => Promise.all(cacheNames.map(thisCacheName => {
      if (thisCacheName !== CACHE_NAME) {
        return caches.delete(thisCacheName);
      }

      return null;
    })))));
