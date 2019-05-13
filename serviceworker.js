// Chrome's currently missing some useful cache methods,
// this polyfill adds them.
//importScripts('serviceworker-cache-polyfill.js');

// Here comes the install event!
// This only happens once, when the browser sees this
// version of the ServiceWorker for the first time.
self.addEventListener('install', function(event) {
  // We pass a promise to event.waitUntil to signal how 
  // long install takes, and if it failed
  event.waitUntil(
    // We open a cache…
    caches.open('simple-sw-v1').then(function(cache) {
      // And add resources to it
      
      return cache.addAll([
        'assets/img/logo.png',
        'assets/img/android-icon-144x144.png',
        'assets/img/apple-icon-57x57.png',
        'assets/img/apple-icon-60x60.png',
        'assets/img/apple-icon-72x72.png',
        'assets/img/apple-icon-76x76.png',
        'assets/img/apple-icon-114x114.png',
        'assets/img/apple-icon-120x120.png',
        'assets/img/apple-icon-144x144.png',
        'assets/img/apple-icon-152x152.png',
        'assets/img/apple-icon-180x180.png',
        'assets/img/android-icon-192x192.png', 
        'assets/img/favicon-32x32.png',        
        'assets/img/favicon-96x96.png',        
        'assets/img/favicon-16x16.png',        
        'assets/img/ms-icon-144x144.png',
        'index.html',
        'paginas/agregar.js',
        'paginas/listar.js',
        'assets/css/bootstrap.css',
        'assets/css/mma.css',
        'manifest.json',
        'assets/js/jquery.min.js',
        'assets/js/popper.min.js',
        'assets/js/bootstrap.min.js',
        'assets/js/custom.js',
        'assets/js/main.js',
        'https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.2/handlebars.js',
      ]);
    })
  );
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page
self.addEventListener('fetch', function(event) {
  // Calling event.respondWith means we're in charge
  // of providing the response. We pass in a promise
  // that resolves with a response object
  event.respondWith(
    // First we look for something in the caches that
    // matches the request
    caches.match(event.request).then(function(response) {
      // If we get something, we return it, otherwise
      // it's null, and we'll pass the request to
      // fetch, which will use the network.
      return response || fetch(event.request);
    })
  );
});


