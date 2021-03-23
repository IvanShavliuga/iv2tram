<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="board">
    <appline/>
  </div>
</template>

<script>
import appline from '../components/line.vue'
export default {
  components: {
    appline
  }
}
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
.board {
  position: relative;
  width: 80%;
  height: 100vh;
  margin: 25px auto;
  border: 1px dashed #a759b9;
  background: #999999;
}
</style>
