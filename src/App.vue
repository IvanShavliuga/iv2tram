<template>
  <div id="app">
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
  width: 90%;
  margin: 5px auto;
}
@media (max-width: 800px) {
  #app {
    margin: 0;
  }
}
</style>
