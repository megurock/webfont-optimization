(function() {
  importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js')

  // quit the process unless workbox loaded
  if (!workbox) return
  
  // Cache font stylesheet
  workbox.routing.registerRoute(
    '/css/fonts.css',
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'font-stylesheets',
    })
  )
  
  // Cache font files
  workbox.routing.registerRoute(
    /.*\.woff2?$/,
    workbox.strategies.cacheFirst({
      cacheName: 'web-fonts',
    })
  )

  // Precache font files (.woff and woff2)
  workbox.precaching.precacheAndRoute([]);

})()