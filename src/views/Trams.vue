<template>
  <div class="list">
    <applistlinetram/>
  </div>
</template>
<style>
.list {
  position: relative;
  width: 750px;
  height: 250px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
</style>
<script>
import applistlinetram from '../components/listlinetram.vue'
export default {
  components: {
    applistlinetram
  }
}
</script>
