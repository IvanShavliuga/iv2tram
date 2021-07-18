<template>
  <div id="app">
    <nav class="menu">
      <p class="item">
        <router-link to="/">Линия</router-link>
      </p>
      <p class="item">
        <router-link to="/way">Карта</router-link>
      </p>
      <p class="item">
        <router-link to="/trams">Депо</router-link>
      </p>
      <p class="item">
        <router-link to="/info">Инфо</router-link>
      </p>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import appHome from '@/views/Home.vue'
export default {
  components: {
    appHome
  },
  created () {
    this.$store.dispatch('addTram', {
      idline: 1
    })
  }
}
</script>
<style>
body,
html {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  background: #000;
}
#app {
  height: 100vh;
  width: 60%;
  margin: 5px auto;
}
.menu {
  display: flex;
  justify-content: space-around;
  width: 750px;
  margin: 15px auto;
  background-color: blueviolet;
}
.item a {
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}
@media (max-width: 800px) {
  #app {
    margin: 0;
  }
}
</style>
