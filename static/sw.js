importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7410bc55850db96246bc.js",
    "revision": "19fb343bc07952c4bc34667b8e2602c0"
  },
  {
    "url": "/_nuxt/888834ad31e235bfa28c.js",
    "revision": "b7fb77fc1312ef2efe2b6260a90510ca"
  },
  {
    "url": "/_nuxt/8def1de3bcc078674e6b.js",
    "revision": "c1337bae827d61a33661e72bf88e7484"
  },
  {
    "url": "/_nuxt/aa32e495f7b6161df9e1.js",
    "revision": "50d5baae0cdffa27d571c3a10d5258b7"
  },
  {
    "url": "/_nuxt/c6cbef16f8c1a38ade2c.js",
    "revision": "9041c72853d9208cc84cdafb8b3a74c2"
  },
  {
    "url": "/_nuxt/d0638dd1ae8ecd3beb34.js",
    "revision": "9a136d3d67998f54c346a3322713c9a8"
  },
  {
    "url": "/_nuxt/d62cb5b2f4ea177c0e32.js",
    "revision": "b08ed6ddd2fb3f28de79e8a098d01814"
  }
], {
  "cacheId": "nuxt-reddit-pwa",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
