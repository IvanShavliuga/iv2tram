<template>
  <div class="line">
    <div
      ref="tram"
      :style="'left:' + (gettrampos * 120) + 'px'"
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
      :style="'left:' + (k * 120) + 'px'"
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
          id: 0,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 100,
          name: '7-я школа',
          start: false,
          end: false,
          id: 1,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 200,
          name: 'Комсомольская',
          start: false,
          end: false,
          id: 2,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 300,
          name: 'Университет',
          start: false,
          end: false,
          id: 3,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 400,
          name: 'Автовокзал',
          start: false,
          end: false,
          id: 4,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 500,
          name: 'Техникум',
          start: false,
          end: false,
          id: 5,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 600,
          name: 'Депо',
          start: false,
          end: false,
          id: 6,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 700,
          name: 'Подстанция',
          start: false,
          end: false,
          id: 7,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 800,
          name: 'Автопарк',
          start: false,
          end: false,
          id: 8,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 900,
          name: 'ЖБИ',
          start: false,
          end: false,
          id: 9,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 1000,
          name: 'КПД',
          start: false,
          end: false,
          id: 10,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 1100,
          name: 'Заводуправление',
          start: false,
          end: false,
          id: 11,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 1200,
          name: 'Полимир',
          start: false,
          end: false,
          id: 12,
          instop: 0,
          outstop: 0
        }, {
          top: 0,
          left: 1300,
          name: 'Нейтрон',
          start: false,
          end: true,
          id: 13,
          instop: 0,
          outstop: 0
        }]
      },
      pass: [{
        instop: 0,
        outstop: 3,
        count: 40,
        price: 0.2
      }, {
        instop: 0,
        outstop: 4,
        count: 15,
        price: 0.2
      }, {
        instop: 1,
        outstop: 3,
        count: 15,
        price: 0.4
      }, {
        instop: 1,
        outstop: 4,
        count: 25,
        price: 0.2
      }, {
        instop: 2,
        outstop: 5,
        count: 10,
        price: 0.2
      }, {
        instop: 3,
        outstop: 6,
        count: 20,
        price: 0.8
      }, {
        instop: 4,
        outstop: 6,
        count: 7,
        price: 0.5
      }, {
        instop: 5,
        outstop: 6,
        count: 18,
        price: 0.7
      }, {
        instop: 0,
        outstop: 11,
        count: 18,
        price: 0.7
      }, {
        instop: 1,
        outstop: 13,
        count: 23,
        price: 0.7
      }, {
        instop: 5,
        outstop: 12,
        count: 18,
        price: 0.4
      }, {
        instop: 3,
        outstop: 10,
        count: 29,
        price: 0.5
      }, {
        instop: 2,
        outstop: 7,
        count: 32,
        price: 0.4
      }, {
        instop: 3,
        outstop: 13,
        count: 18,
        price: 0.3
      }]
    }
  },
  computed: {
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
      const next = this.line.way[(p < l) ? (p + 1) : l]
      return [prev, curr, next]
    },
    getmoney () {
      let countps = 0
      const pfl = this.pass.filter((el) => {
        return el.instop === this.line.position
      })
      for (let el of pfl) {
        countps += el.count * el.price
        console.log(el)
      }
      return countps
    },
    getpassstop () {
      return this.pass.filter((el) => {
        return el.instop === this.line.position
      })
    },
    getinpass () {
      let countps = 0
      const pfl = this.pass.filter((el) => {
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
      const pfl = this.pass.filter((el) => {
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
      if (this.line.position < this.line.way.length - 1) {
        this.line.position++
        this.stop = this.line.way[this.line.position].name
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
</style>
