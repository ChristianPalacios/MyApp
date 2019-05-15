
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('simple-sw-v4').then(function(cache) {
      return cache.addAll([
        'assets/css/mma.css',
        'assets/css/bootstrap.css',
        'assets/img/logo.png',
        'assets/js/main.js',
        'assets/js/bootstrap.min.js',
        'assets/js/custom.js',
        'assets/js/jquery.min.js',
        'assets/js/popper.min.js',
        'paginas/agregar.js',
        'paginas/listar.js',
        'assets/img/loading-gears-animation-10.gif',
        'assets/img/favicon-32x32.png',
        'assets/img/favicon-96x96.png'       
      ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          if(cacheName !== 'simple-sw-v4'){return true}
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

//Eventos posibles: install, activate, message, fetch, sync, push
//install


self.addEventListener('sync', function(event){
  if(event.tag === 'sincronizar'){
    event.waitUntil(
      new Promise((resolve, reject)=>{
        fetch('a nuestra api').then((result)=>{
          
          resolve();
        })
        .catch(()=>{
          reject();
        });
      })
      //promesa a repetirse hasta que de true
      //una vez que da true, se vuelve a registrar un evento sync "sincronizar"
    );  
  }
});





self.addEventListener('push', function(event) {
  //console.log('[Service Worker] Push Received.');
  //console.log(event.data);

  const title = 'Push Prueba';
  const options = {
    body: 'funciona!.',
    icon: 'apple-icon-60x60.png',
    badge: 'apple-icon-60x60.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// The fetch event happens for the page request with the
// ServiceWorker's scope, and any request made within that
// page

self.addEventListener('fetch', function(event) {
  
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