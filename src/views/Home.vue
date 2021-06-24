<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="page">
    <div class="tramline">
      <appline/>
    </div>
    <div class="control">
      <div class="control__panel">
        <button @click="newtramcl">
          new
        </button>
        <!-- <button @click="deltramcl">
          delete
        </button> -->
        <button @click="prevtramcl">
          prev
        </button>
        <button @click="nexttramcl">
          next
        </button>
      </div>
    </div>
    <div class="box">
      <div class="map">
        <appway/>
      </div>
      <div class="list">
        <applistlinetram/>
      </div>
    </div>
  </div>
</template>

<script>
import appline from '../components/line.vue'
import appway from '../components/way.vue'
import applistlinetram from '../components/listlinetram.vue'
export default {
  components: {
    appline,
    appway,
    applistlinetram
  },
  methods: {
    newtramcl () {
      this.$store.dispatch('addTram', {
        idline: 1
      })
    },
    prevtramcl () {
      this.$store.dispatch('selTram', {
        mode: 'prev'
      })
    },
    nexttramcl () {
      this.$store.dispatch('selTram', {
        mode: 'next'
      })
    }
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
.box {
  display: flex;
}
.control {
  width: 800px;
  height: 60px;
}
.control__panel {
  width: 250px;
  margin: 15px auto 15px auto;
}
.list {
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
/* @media (max-width: 865px) {
  .map {
    transform: scaleX(0.8);
    margin-left: -40px;
  }
}
@media (max-width: 690px) {
  .map {
    transform: scaleX(0.7);
    margin-left: -80px;
  }
}
@media (max-width: 600px) {
  .map {
    transform: scaleX(0.6);
    margin-left: -120px;
  }
}
@media (max-width: 570px) {
  .map {
    transform: scaleX(0.5);
    margin-left: -200px;
  }
} */
</style>
