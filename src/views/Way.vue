<template>
  <div class="map">
    <appway/>
  </div>
</template>
<style>
.map {
  position: relative;
  width: 750px;
  height: 300px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
</style>
<script>
import appway from '../components/way.vue'
export default {
  components: {
    appway
  }
}
</script>
