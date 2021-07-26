import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Way from './views/Way.vue'
import Trams from './views/Trams.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/way',
      name: 'Way',
      component: Way
    },
    {
      path: '/trams',
      name: 'Trams',
      component: Trams
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ],
  mode: 'history',
  base: '/iv2tram/'
})
