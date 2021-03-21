<template>
  <div id="app">
    <!-- <img :src="'http://localhost:8080/img/tram.svg'"> -->
    <div>
      <appline/>
    </div>
  </div>
</template>
<script>
import appline from '@/components/line.vue'
export default {
  components: {
    appline
  }
}
</script>

<style>
body,
html {
  height: 100%;
}
#app {
  height: 100%;
  color: #0c0c0c;
}
</style>
