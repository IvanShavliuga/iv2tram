<template>
  <div
    ref="lineref"
    class="line"
    @resize="rsize"
  >
    <div
      v-for="(s,k) in getcurrstop"
      :key="'cntnet' + k"
      :style="'left:' + (k * 246) + 'px'"
      class="contactnet"
    >
      <contactnetwork/>
    </div>
    <div
      ref="tram"
      :class="'line__tram tram__'+ gettrampos"
    >
      <tram
        :id="currtram.id"
        :linenumber="currtram.idline"
        :idstop="currtram.idstop"
        :count="currtram.count"
        :money="currtram.money"
        :max="currtram.max"
        :mode="currtram.mode"
        @enter="getpass"
        @move="move"
      />
    </div>
    <div class="line__stops">
      <div
        v-for="(s,k) in getcurrstop"
        :key="k"
        :id="'stop_'+(k+1)"
        :style="'left:' + (k * 250) + 'px'"
        class="line__stop"
      >
        <stop
          :name="s.name"
          :active="s.name === stop"
          :count-in="getinpass"
          :count-out="getoutpass"
          :line-number="lnnumber"
        />
      </div>
    </div>
  </div>
</template>
<script>
import tram from './images/tram.vue'
import stop from './images/stop.vue'
import contactnetwork from './images/contactnetwork.vue'
import way from './way.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    tram,
    stop,
    way,
    contactnetwork
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
    ...mapGetters(['line', 'stop', 'tramsline', 'currtram']),
    trams () {
      return this.tramsline
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
      const prev = this.line.way[(!p) ? 0 : ((p <= l - 1) ? (p - 1) : l - 2)]
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
    nexttram () {
      this.tramid = 2
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
  margin-left: 40px;
  margin-top: 20px;
}
.contactnet {
  position: absolute;
  top: 15px;
}
.contactnet svg {
  width: 260px;
}
.contactnet svg:last-child {
  width: 293px;
}

.line__tram {
  position: absolute;
  top: 37px;
}
.line__stop {
  position: absolute;
  top: 125px;
  left: 0;
}
.line__control {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 250px;
  height: 20px;
}
.line__control-button {
  background-color: rgba(123,250,23, 0.5);
  border-radius: 15%;
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 7px;
  border: none;
  width: 90px;
  height: 35px;
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
.tram__0 {
  left: 0;
}
.tram__1 {
  left: 220px;
}
.tram__2 {
  left: 440px;
}
@media (max-width: 720px) {
  .line {
    transform: scaleX(0.9);
    margin-left: 10px;
  }
  .line__tram {
    position: absolute;
    top: 37px;
  }
  .contactnet svg {
    width: 250px;
  }
  .contactnet svg:last-child {
    width: 270px;
  }
}
@media (max-width: 560px) {
  .line {
    transform: scaleX(0.7);
    margin-left: -70px;
  }
  /* .tram__0 {
    left: -20px;
  }
  .tram__1 {
    left: 120px;
  }
  .tram__2 {
    left: 300px;
  } */
}
@media (max-width: 410px) {
  .line {
    transform: scaleX(0.6);
    margin-left: -50px;
  }
}
@media (max-width: 380px) {
  .line {
    margin-left: -60px;
  }
}
</style>
