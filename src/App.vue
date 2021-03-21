<template>
  <div id="app">
    <!-- <img :src="'http://localhost:8080/img/tram.svg'"> -->
    <div>
      <tram
        :count="passCount"
        :id="id"
        :line="line"
        :stop="stop"
        @enter="getpass"
        @move="move"
      />
    </div>
  </div>
</template>
<script>
import tram from '@/components/images/tram.vue'
export default {
  components: {
    tram
  },
  data () {
    return {
      passCount: 0,
      stop: 'Олимпийская',
      id: 1,
      line: {
        id: 1,
        start: 'Олимпийская',
        end: 'Нейтрон'
      }
    }
  },
  methods: {
    getpass () {
      this.passCount += 5
    },
    move () {
      this.stop = '7-я школа'
    }
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
