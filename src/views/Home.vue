<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div>
    <div class="tramline">
      <appline/>
    </div>
    <div class="map">
      <appway/>
    </div>
  </div>
</template>

<script>
import appline from '../components/line.vue'
import appway from '../components/way.vue'
export default {
  components: {
    appline,
    appway
  }
}
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
.tramline {
  position: relative;
  width: 100vw;
  height: 70vh;
  margin: 0;
  background: #999999;
}
.map {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 50px 25px;
  background: #f0f0f0;
  border: 1px dotted blackk
}
</style>
