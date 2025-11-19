const CACHE = 'isaac-pwa-v1';
const FILES = [
  '/',
  '/index.html','/home.html','/leccion.html','/problemas.html',
  '/manifest.json','/styles.css','/script.js',
  '/data/problemas.json',
  '/assets/logo2.png','/assets/logo1.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES).then(()=>self.skipWaiting())));
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});