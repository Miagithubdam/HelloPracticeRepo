// sw.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('travel-schedule-v1').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/styles.css',
          '/scripts.js',
          '/apple-touch-icon.png' // Adjust path to your icon file
          // Add more URLs for other resources if needed
        ]).catch(error => {
          console.error('Failed to cache resources:', error);
        });
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  