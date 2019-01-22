importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ecc12e8087874127360.js",
    "revision": "604294d33954c857faeb985709b93ab5"
  },
  {
    "url": "/_nuxt/12a7e228e1d81807eb32.js",
    "revision": "56c0fc362bffcf16d832bd33eab7add3"
  },
  {
    "url": "/_nuxt/4226c35f4f5fa0c4e430.js",
    "revision": "b201103b149d844ff053b0d8166c573e"
  },
  {
    "url": "/_nuxt/9ffef180fed58df8a747.js",
    "revision": "7ad1267ff856f7bfee9870755666a0f2"
  },
  {
    "url": "/_nuxt/be5846c061c1fa628625.js",
    "revision": "82bf01f52e132de591e1aeddbe203a87"
  },
  {
    "url": "/_nuxt/c46f8320d374e1cc7ee1.js",
    "revision": "98078422a6ac9a8581d3589a9898d707"
  },
  {
    "url": "/_nuxt/cea780f8faa1cb61edc1.js",
    "revision": "e6a4ec14373b975ea957c0bd0f7ec83f"
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
