<template>
  <div class="line">
    <div
      ref="tram"
      :style="'left:' + (gettrampos * 220) + 'px'"
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
      v-for="(s,k) in getcurrstop"
      :key="k"
      :style="'left:' + (k * 220) + 'px'"
      class="line__stop"
    >
      <stop
        :name="s.name"
        :active="s.name === stop"
        :count-in="getinpass"
        :count-out="getoutpass"
      />
    </div>
  </div>
</template>
<script>
import tram from './images/tram.vue'
import stop from './images/stop.vue'
import way from './way.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    tram,
    stop,
    way
  },
  data () {
    return {
      passCount: 0,
      stop: 'Олимпийская',
      id: 1,
      idout: 0,
      idin: 0,
      currmoney: 0,
      moved: true
    }
  },
  computed: {
    ...mapGetters(['line']),
    gettrampos () {
      const l = this.line.way.length - 1
      const p = this.line.position
      return (!p) ? (0) : ((p < l) ? 1 : 2)
    },
    getcurrstop () {
      const l = this.line.way.length - 1
      const p = this.line.position
      const prev = this.line.way[(!p) ? 0 : (p - 1)]
      const curr = this.line.way[(!p) ? 1 : (p)]
      const next = this.line.way[(!p) ? (2) : ((p < l) ? (p + 1) : l)]
      return [prev, curr, next]
    },
    getmoney () {
      let countps = 0
      const pfl = this.line.pass.filter((el) => {
        return el.instop === this.line.position
      })
      for (let el of pfl) {
        countps += el.count * el.price
        console.log(el)
      }
      return countps
    },
    getpassstop () {
      return this.line.pass.filter((el) => {
        return el.instop === this.line.position
      })
    },
    getinpass () {
      let countps = 0
      const pfl = this.line.pass.filter((el) => {
        return el.instop === this.line.position
      })
      for (let el of pfl) {
        countps += el.count
        console.log(el)
      }
      return countps
    },
    getoutpass () {
      let countps = 0
      const pfl = this.line.pass.filter((el) => {
        return el.outstop === this.line.position
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
      if (this.moved && this.line.position < this.line.way.length - 1) {
        this.line.position++
        this.stop = this.line.way[this.line.position].name
      } else {
        this.moved = false
      }
    },
    genstopspass () {
      this.pass = []
      const len = this.line.way.length
      for (let el of this.line.way) {
        const outst = Math.floor(Math.random() * el.id) + (len - el.id)
        const inst = el.id
        const count = Math.floor(Math.random() * 30)
        const pass = {
          instop: inst,
          outstop: outst,
          count: count,
          price: 0.3
        }
        if (el.end) {
          pass.instop = 0
        }
        if (el.start) {
          pass.outstop = 0
        }
        this.pass.push(pass)
      }
    }
  }
}
</script>
<style scoped>
.line {
  position: relative;
  width: 500px;
  margin: 45px auto;
}
.line__tram {
  position: absolute;
  top: 0;
  left: 0;
}
.line__stop {
  position: absolute;
  top: 100px;
  left: 0;
}
.list {
  position: absolute;
  top: 160px;
  left:30px;
  border: 1px solid red;
}
li {
  list-style: none;
  margin-left: 0;
  font-size: 20px;
}
ul {
  margin: 0;
  padding: 15px;
}
.map {
  position: absolute;
  top: 120px;
  left: 0;
  width: 800px;
  height: 800px;
  border: 1px dotted #de2020;
}
</style>
