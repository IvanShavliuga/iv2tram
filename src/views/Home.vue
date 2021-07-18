<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="page">
    <div
      v-if="lineflag"
      class="tramline"
    >
      <appline/>
    </div>
    <div
      v-if="wayflag"
      class="map"
    >
      <appway/>
    </div>
    <div
      v-if="depotflag"
      class="list"
    >
      <applistlinetram/>
    </div>
    <!-- <div class="control">
      <div class="control__panel">
        <div class="control__panel-group">
          trams:
          <button @click="newtramcl">
            new
          </button>
          <button @click="prevtramcl">
            prev
          </button>
          <button @click="nexttramcl">
            next
          </button>
        </div>
        <div class="control__panel-group">
          window:
          <button @click="wayview">
            map
          </button>
          <button @click="depotview">
            depot
          </button>
          <button @click="lineview">
            line
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import appline from '../components/line.vue'
import applistlinetram from '../components/listlinetram.vue'
export default {
  components: {
    appline,
    applistlinetram
  },
  data () {
    return {
      lineflag: true,
      wayflag: false,
      depotflag: false
    }
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
    },
    lineview () {
      console.log('line')
      this.lineflag = true
      this.wayflag = false
      this.depotflag = false
    },
    wayview () {
      console.log('way')
      this.lineflag = false
      this.wayflag = true
      this.depotflag = false
    },
    depotview () {
      console.log('depot')
      this.lineflag = false
      this.wayflag = false
      this.depotflag = true
    }
  }
}
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style>
button {
  border: 1px solid #238923;
  background-color: rgba(50, 120, 90, 0.7);
  color: white;
  padding: 5px;
  margin: 5px;
}

.tramline {
  position: relative;
  max-width: 100%;
  height: 250px;
  margin: 0;
  margin-top: -30px;
}
.box {
  display: none;
}
.control__panel {
  display: flex;
  width: 100%;
  margin: 15px;
  padding: 0 15px;
  background: rgba(60, 255, 255, 0.2);
}
.control__panel-group {
  color: white;
}
.control {
  display: block;
  width: 100%;
  height: 60px;
}
.list {
  width: 100%;
  height: 300px;
  margin: 0;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
}
@media (max-width: 640px) {
  .tramline {
    padding: 0 30px;
  }
}
@media (max-width: 635px) {
  .control {
    width: 500px;
    margin: 15px 0;
    height: auto;
  }
  .page {
    width: 520px;
    padding: 0 15px;
    margin: 0 auto;
  }
}
@media (max-width: 570px) {
  .tramline {
    max-width: 400px;
    padding: 0;
    margin: 0 15px;
    margin-top: -30px;
  }
  .page {
    width: 500px;
    padding: 0 5px;
    margin: 0 auto;
  }
  .control__panel {
    flex-direction: column;
  }
  .control__panel {
    width: 250px;
    margin: 10px auto;
  }
}
@media (max-width: 510px) {
  .tramline {
    max-width: 200px;
    padding: 0;
    margin: 0;
    margin-top: -30px;
    transform: scaleX(1.1);
  }
}
@media (max-width: 432px) {
  .tramline {
    max-width: 200px;
    padding: 0;
    margin: 0 auto;
    margin-top: -30px;
    transform: scaleX(1.5) translateX(-60px);
  }
  .control__panel {
    width: 250px;
    margin: 10px;
  }
}
@media (max-width: 265px) {
  .tramline {
    max-width: 200px;
    padding: 0;
    margin: 0 auto;
    margin-top: -30px;
    transform: scaleX(1.2) translateX(-100px);
  }
}
</style>
