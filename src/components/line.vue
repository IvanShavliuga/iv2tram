<template>
  <div class="line">
    <div
      ref="tram"
      class="line__tram"
    >
      <tram
        :id="id"
        :linenumber="line.number"
        :idstop="id"
        :idin="getinpass"
        :idout="getoutpass"
        :count="passCount"
        :money="currmoney"
        @enter="getpass"
        @move="move"
      />
    </div>
    <div
      v-for="(s,k) in line.way"
      :key="k"
      :style="'left:' + s.left + 'px'"
      class="line__stop"
    >
      <stop
        :name="s.name"
        :active="s.name === stop"
        :count="getinpass"
      />
    </div>
  </div>
</template>
<script>
import tram from './images/tram.vue'
import stop from './images/stop.vue'
import { TimelineMax, Back } from 'gsap'

export default {
  components: {
    tram,
    stop
  },
  data () {
    return {
      passCount: 0,
      stop: 'Олимпийская',
      id: 1,
      idout: 0,
      idin: 0,
      currmoney: 0,
      line: {
        number: 1,
        position: 0,
        way: [{
          top: 0,
          left: 0,
          name: 'Олимпийская',
          start: true,
          end: false,
          id: 0
        }, {
          top: 0,
          left: 100,
          name: '7-я школа',
          start: false,
          end: false,
          id: 1
        }, {
          top: 0,
          left: 200,
          name: 'Комсомольская',
          start: false,
          end: false,
          id: 2
        }, {
          top: 0,
          left: 300,
          name: 'Университет',
          start: false,
          end: false,
          id: 3
        }, {
          top: 0,
          left: 400,
          name: 'Автовокзал',
          start: false,
          end: false,
          id: 4
        }, {
          top: 0,
          left: 500,
          name: 'Техникум',
          start: false,
          end: false,
          id: 5
        }, {
          top: 0,
          left: 600,
          name: 'Депо',
          start: false,
          end: true,
          id: 6
        }]
      },
      pass: [{
        indid: 0,
        outid: 3,
        count: 40,
        price: 0.2
      }, {
        indid: 0,
        outid: 4,
        count: 15,
        price: 0.2
      }, {
        indid: 1,
        outid: 3,
        count: 15,
        price: 0.4
      }, {
        indid: 1,
        outid: 4,
        count: 25,
        price: 0.2
      }, {
        indid: 2,
        outid: 5,
        count: 10,
        price: 0.2
      }, {
        indid: 3,
        outid: 6,
        count: 20,
        price: 0.8
      }, {
        indid: 4,
        outid: 6,
        count: 7,
        price: 0.5
      }, {
        indid: 5,
        outid: 6,
        count: 18,
        price: 0.7
      }]
    }
  },
  computed: {
    getmoney () {
      let countps = 0
      const pfl = this.pass.filter((el) => {
        return el.indid === this.line.position
      })
      for (let el of pfl) {
        countps += el.count * el.price
        console.log(el)
      }
      return countps
    },
    getpassstop () {
      return this.pass.filter((el) => {
        return el.indid === this.line.position
      })
    },
    getinpass () {
      let countps = 0
      const pfl = this.pass.filter((el) => {
        return el.indid === this.line.position
      })
      for (let el of pfl) {
        countps += el.count
        console.log(el)
      }
      return countps
    },
    getoutpass () {
      let countps = 0
      const pfl = this.pass.filter((el) => {
        return el.outid === this.line.position
      })
      for (let el of pfl) {
        countps += el.count
        console.log(el)
      }
      return countps
    }
  },
  methods: {
    getpass () {
      this.passCount -= this.getoutpass
      this.passCount += this.getinpass
      this.currmoney += this.getmoney
    },
    move () {
      if (this.line.position < this.line.way.length - 1) {
        this.line.position++
        this.stop = this.line.way[this.line.position].name
        const tl = new TimelineMax()
        tl.to(this.$refs.tram, 0.01, {
          left: this.line.way[this.line.position].left,
          delay: 0.3,
          ease: Back.easeOut
        })
      }
    }
  }
}
</script>
<style scoped>
.line {
  position: relative;
}
.line__tram {
  position: absolute;
  top: 0;
  left: 0;
}
.line__stop {
  position: absolute;
  top: 70px;
  left: 0;
}
</style>
