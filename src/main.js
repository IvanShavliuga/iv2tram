import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = true

new Vue({
  // router,
  store,
  mounted () {
    if (window.screen.lockOrientation) {
      window.screen.lockOrientation('landscape')
    }
    if (window.screen.mozLockOrientation) {
      window.screen.mozLockOrientation('landscape')
    }
    if (window.screen.msLockOrientation) {
      window.screen.msLockOrientation('landscape')
    }
    this.$store.dispatch('appResize', {
      width: window.innerWidth,
      height: window.innerHeight
    })
    window.addEventListener('resize', () => {
      console.log('win resize')
      this.$store.dispatch('appResize', {
        width: window.innerWidth,
        height: window.innerHeight
      })
    })
    fetch('/api/models.json').then((response) => {
      return response.json()
    })
      .then((data) => {
        console.log(data)
      })
    fetch('/api/lines.json').then((response) => {
      return response.json()
    })
      .then((data) => {
        console.log(data)
      })
  },
  render: h => h(App)
}).$mount('#app')
