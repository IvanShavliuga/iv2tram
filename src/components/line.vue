<template>
  <div class="line">
    <div class="line__tram">
      <tram
        :count="passCount"
        :id="id"
        :linenumber="line.number"
        :stop="stop"
        @enter="getpass"
        @move="move"
      />
    </div>
    <div class="line__stop">
      {{ stop }}
    </div>
  </div>
</template>
<script>
import tram from './images/tram.vue'
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
        number: 1,
        position: 0,
        way: [{
          top: 0,
          left: 0,
          name: 'Олимпийская'
        }, {
          top: 0,
          left: 100,
          name: '7-я школа'
        }, {
          top: 0,
          left: 200,
          name: 'Комсомольская'
        }, {
          top: 0,
          left: 200,
          name: 'Университет'
        }, {
          top: 0,
          left: 200,
          name: 'Автовокзал'
        }, {
          top: 0,
          left: 200,
          name: 'Техникум'
        }, {
          top: 0,
          left: 200,
          name: 'Депо'
        }]
      }
    }
  },
  methods: {
    getpass () {
      this.passCount += 5
    },
    move () {
      if (this.line.position < this.line.way.length - 1) {
        this.line.position++
        this.stop = this.line.way[this.line.position].name
      }
    }
  }
}
</script>
