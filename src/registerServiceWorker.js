/* eslint-disable no-console */

import { register } from 'register-service-worker'
/* const staticAssets = [
  './',
  './index.html',
  './img/icons/iv2tram-512x512.png',
  './img/icons/iv2tram-128x128.png',
  './img/icons/iv2-512x512.png',
  './img/icons/iv2-128x128.png',
  './img/icons/iv2-32x32.png',
  './img/icons/iv2-16x16.png',
  './img/icons/msapplication-icon-144x144.png',
  './img/icons/safari-pinned-tab.svg',
  './img/tram.svg',
  './js/*.js',
  './css/*.css',
  './manifest.json',
  './service-worker.js',
  './iv2.ico',
  './digital.ttf'
]
const staticCacheName = 'static-iv2tram-v0'
const dynamicCacheName = 'dynamic-iv2tram-v0' */

if (process.env.NODE_ENV === 'production') {
  register('https://ivanshavliuga.github.io/iv2tram/service-worker.js', {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      // const cache = caches.open(staticCacheName)
      // cache.addAll(staticAssets)
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      /* const cachesKeys = caches.keys()
      const checkKeys = cachesKeys.map(async key => {
        if (![staticCacheName, dynamicCacheName].includes(key)) {
          caches.delete(key)
        }
      })
      Promise.all(checkKeys) */
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
