<template>
  <div id="app">
    <!-- <img :src="'http://localhost:8080/img/tram.svg'"> -->
    <div>
      <tram/>
    </div>
  </div>
</template>
<script>
import tram from '@/components/images/tram.vue'
export default {
  components: {
    tram
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
