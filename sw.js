var cacheName = "https://github.com/billiebobbel23/PWA-boilerplate";
var filesToCache = [
  "/",
  "/index.html",
  "/dist/img/icon.png",
  "/dist/js/test.min.js"
];
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
/* Serve cached content when offline */
self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
