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
    window.addEventListener('resize', () => {
      console.log('win resize')
      this.$store.dispatch('appResize', { width: window.innerWidth })
    })
  },
  render: h => h(App)
}).$mount('#app')
