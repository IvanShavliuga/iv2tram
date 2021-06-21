<template>
  <div id="app">
    <!-- <img :src="'http://localhost:8080/img/tram.svg'"> -->
    <app-home/>
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
  background: black;
}
#app {
  height: 100vh;
  width: 100vw;
  color: black;
}

</style>
