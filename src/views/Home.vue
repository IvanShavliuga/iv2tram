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
  height: 250px;
  margin: 0;
  margin-top: -30px;
}
.map {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 50px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
@media (max-width: 365px) {
  .map {
    transform: scaleX(0.8);
    margin-left: -10px;
  }
}
@media (max-width: 330px) {
  .map {
    margin-left: -10px;
  }
}
</style>
