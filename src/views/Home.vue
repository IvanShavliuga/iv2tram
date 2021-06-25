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
.page {
  width: 90vw;
  margin: auto;
}
.tramline {
  position: relative;
  max-width: 100%;
  height: 250px;
  margin: 0;
  margin-top: -30px;
}
.map {
  position: relative;
  width: 400px;
  height: 300px;
  margin: 0 50px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
.box {
  display: none;
}
.control__panel {
  width: 250px;
  margin: 15px;
}
.control {
  display: none;
  width: 250px;
  height: 60px;
}
.list {
  width: 200px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
@media (max-width: 640px) {
  .tramline {
    padding: 0 30px;
  }
  .map {
    position: relative;
    width: 400px;
    height: 300px;
    margin: 0 10px;
  }
  /* .box {
    display: flex;
    flex-direction: column;
  } */
}
@media (max-width: 535px) {
  .page {
    max-width: 80vw;
    margin: 0;
  }
  .tramline {
    max-width: 400px;
    padding: 0;
    margin: 0 auto;
    margin-top: -30px;
  }
}
@media (max-width: 400px) {
  .tramline {
    max-width: 200px;
    padding: 0;
    margin: 0 auto;
    margin-top: -30px;
    transform: scaleX(1.3);
  }
}
@media (max-width: 322px) {
  .tramline {
    max-width: 200px;
    padding: 0;
    margin: 0 auto;
    margin-top: -30px;
    transform: scaleX(1.1);
  }
}
@media (max-width: 265px) {
  .tramline {
    max-width: 200px;
    padding: 0;
    margin: 0 auto;
    margin-top: -30px;
    transform: scaleX(0.9);
  }
}
</style>
