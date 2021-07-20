import { register } from 'register-service-worker'
/* import dbModule from './indexedDB'

console.log(dbModule)
console.log(dbModule.db) */

if (process.env.NODE_ENV === 'production') {
  register('https://ivanshavliuga.github.io/iv2tram/service-worker.js', {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
