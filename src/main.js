import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = true

new Vue({
  router,
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
    this.$store.dispatch('appResize', { width: window.innerWidth })
    window.addEventListener('resize', () => {
      console.log('win resize')
      this.$store.dispatch('appResize', { width: window.innerWidth })
    })
    /* window.addEventListener('orientationchange', () => {
      // Выводим числовое значение ориентации
      if (!window.orientation) {
        this.$store.dispatch('appResize', { width: window.innerWidth })
      }
    }, false) */
  },
  render: h => h(App)
}).$mount('#app')
