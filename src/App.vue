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

@media (max-width: 1074px) {
  #app {
    margin: 0 auto;
    width: 95%;
  }
}
@media (max-width: 736px) {
  #app {
    margin: 0;
    width: 100%;
  }
}
@media (max-width: 774px) {
  .menu {
    justify-content: center;
  }
  .item {
    margin-left: 20px;
  }
}
@media (max-width: 520px) {
  .menu {
    width: 500px;
    margin-left: 0;
    margin-right: 0;
  }
}
@media (max-width: 640px) {
  .menu {
    justify-content: flex-start;
  }
  .item {
    margin-left: 20px;
    font-size: 0.8em;
  }
}
@media (max-width: 300px) {
  .menu {
    justify-content: flex-start;
    flex-direction: column;
  }
  .item {
    margin: 5px;
  }
}
</style>
