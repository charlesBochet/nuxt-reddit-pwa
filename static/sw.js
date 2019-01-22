importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3e2534926a8a245405b5.js",
    "revision": "75daa8408a35cce46493e6155b1c082c"
  },
  {
    "url": "/_nuxt/511a42d196f752f0d63c.js",
    "revision": "2378e38150e87f060da33f8de5204eb2"
  },
  {
    "url": "/_nuxt/a099a27aab28da0277e7.js",
    "revision": "02642527217b192f176ed8a5080e5714"
  },
  {
    "url": "/_nuxt/a2d1bfd3d21f3d9e27ce.js",
    "revision": "6daa09710d1c754865cd24be5b3af930"
  },
  {
    "url": "/_nuxt/c2510518a27a2c6aa28a.js",
    "revision": "11af8f421441f82d89ee4f3cccb7b562"
  },
  {
    "url": "/_nuxt/ede57537c7a813ad2df4.js",
    "revision": "028286e1d0eb9a376adbe992a3569a7d"
  },
  {
    "url": "/_nuxt/f88735ac6728e959469c.js",
    "revision": "97b1ddc139f06f44187013eea80d1996"
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
