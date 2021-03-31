<template>
  <div
    ref="lineref"
    class="line"
    @resize="rsize"
  >
    <div
      ref="tram"
      :style="'left:' + (gettrampos * 220 + 50) + 'px'"
      class="line__tram"
    >
      <tram
        :id="currtram.id"
        :linenumber="currtram.idline"
        :idstop="currtram.idstop"
        :count="currtram.count"
        :money="currtram.money"
        :max="currtram.max"
        @enter="getpass"
        @move="move"
      />
    </div>
    <div
      v-for="(s,k) in getcurrstop"
      :key="k"
      :id="'stop_'+(k+1)"
      :style="'left:' + (k * 220 + 50) + 'px'"
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
      id: 1,
      idout: 0,
      idin: 0,
      currmoney: 0,
      moved: true,
      cwidth: 800,
      lnnumber: 1,
      tramid: 1
    }
  },
  computed: {
    ...mapGetters(['line', 'stop', 'tramsline']),
    trams () {
      return this.tramsline(this.lnnumber)
    },
    currtram () {
      const trm = this.tramsline(this.lnnumber)
      const ind = trm.findIndex((el) => {
        return this.tramid === el.id
      })
      return trm[ind]
    },
    gettrampos () {
      const l = this.line.way.length - 1
      const p = this.currtram.idstop
      console.log('GTP')
      console.log(l, p)
      return (!p) ? (0) : ((p < l) ? 1 : 2)
    },
    getcurrstop () {
      const l = this.line.way.length - 1
      const p = this.currtram.idstop
      console.log('GCS')
      console.log(l, p)
      const prev = this.line.way[(!p) ? 0 : (p - 1)]
      const curr = this.line.way[(!p) ? 1 : ((p <= l - 1) ? (p) : l - 1)]
      const next = this.line.way[(!p) ? (2) : ((p < l - 1) ? (p + 1) : l)]
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
        return el.instop === this.currtram.idstop
      })
    },
    getinpass () {
      let countps = 0
      const pfl = this.line.pass.filter((el) => {
        return el.instop === this.currtram.idstop
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
        return el.outstop === this.currtram.idstop
      })
      for (let el of pfl) {
        countps += el.count
        console.log(el)
      }
      return countps
    }
  },
  methods: {
    rsize () {
      this.cwidth = window.clientWidth
    },
    getpass () {
      this.$store.dispatch('enterTram', {
        lineid: this.lnnumber,
        id: this.currtram.id
      })
    },
    move () {
      this.$store.dispatch('moveTram', {
        lineid: this.lnnumber,
        id: this.currtram.id
      })
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
  width: 90vw;
  margin: 0;
}
.line__tram {
  position: absolute;
  top: 37px;
  left: 0;
}
.line__stop {
  position: absolute;
  top: 125px;
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
@media (max-width: 720px) {
  .line {
    transform: scale(0.8);
    margin-left: -50px;
  }
}
@media (max-width: 560px) {
  .line {
    transform: scale(0.6);
    margin-left: -50px;
  }
}
@media (max-width: 470px) {
  .line {
    margin-left: -100px;
  }
}
</style>
