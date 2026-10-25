
const CACHE_NAME = "rideshare-public-v1";
const OFFLINE_PAGE = "/offline.html";
const API_URL = "/api/udhetimet";

const STATIC_FILES = [
  "/offline.html",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_FILES))
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("rideshare-public-") && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin || request.method !== "GET") {
    return;
  }

  if (url.pathname === API_URL) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);

        try {
          const response = await fetch(request);

          if (response.ok) {
            const headers = new Headers(response.headers);
            headers.set("x-rideshare-saved-at", new Date().toISOString());

            const savedResponse = new Response(response.clone().body, {
              status: response.status,
              statusText: response.statusText,
              headers,
            });

            await cache.put(request, savedResponse);
          }

          return response;
        } catch {
          const cached = await cache.match(request);

          if (cached) {
            return cached;
          }

          return new Response(
            JSON.stringify({ error: "Udhëtimet nuk janë të disponueshme offline." }),
            {
              status: 503,
              headers: { "Content-Type": "application/json; charset=utf-8" },
            }
          );
        }
      })()
    );

    return;
  }


 
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);

        // Nese Wi-Fi eshte i fikur, hape faqen offline.
        if (!self.navigator.onLine) {
          const offlinePage = await cache.match(OFFLINE_PAGE);

          if (offlinePage) {
            return offlinePage;
          }
        }

        // Nese rrjeti deshton, provo perseri faqen offline.
        try {
          return await fetch(request);
        } catch {
          const offlinePage = await cache.match(OFFLINE_PAGE);

          if (offlinePage) {
            return offlinePage;
          }

          return new Response("Nuk ka lidhje me internetin.", {
            status: 503,
            headers: {
              "Content-Type": "text/plain; charset=utf-8",
            },
          });
        }
      })()
    );
  }
});