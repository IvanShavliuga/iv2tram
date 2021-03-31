import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currstop: null,
    trams: [{
      id: 1,
      model: 'KTM5',
      max: 120,
      sections: 1,
      idline: 1,
      count: 0,
      money: 0,
      idstop: 0,
      moved: true
    }],
    line: {
      moved: true,
      number: 1,
      position: [],
      way: [{
        y: 60,
        x: 50,
        vectors: [{
          y: -10,
          x: 0
        }],
        name: 'Олимпийская',
        start: true,
        end: false,
        id: 0,
        instop: 0,
        outstop: 0
      }, {
        y: 50,
        x: 50,
        vectors: [{
          y: -10,
          x: 0
        }],
        name: '7-я школа',
        start: false,
        end: false,
        id: 1,
        instop: 0,
        outstop: 0
      }, {
        y: 40,
        x: 50,
        vectors: [{
          y: -10,
          x: 0
        }],
        name: 'Комсомольская',
        start: false,
        end: false,
        id: 2,
        instop: 0,
        outstop: 0
      }, {
        y: 30,
        x: 50,
        vectors: [{
          y: -10,
          x: 0
        }],
        name: 'Университет',
        start: false,
        end: false,
        id: 3,
        instop: 0,
        outstop: 0
      }, {
        y: 20,
        x: 50,
        vectors: [{
          y: -10,
          x: 0
        }],
        name: 'Автовокзал',
        start: false,
        end: false,
        id: 4,
        instop: 0,
        outstop: 0
      }, {
        y: 10,
        x: 50,
        vectors: [{
          y: 0,
          x: -10
        }],
        name: 'Техникум',
        start: false,
        end: false,
        id: 5,
        instop: 0,
        outstop: 0
      }, {
        y: 10,
        x: 40,
        vectors: [{
          y: 0,
          x: -10
        }],
        name: 'Депо',
        start: false,
        end: false,
        id: 6,
        instop: 0,
        outstop: 0
      }, {
        y: 10,
        x: 30,
        vectors: [{
          y: 0,
          x: -10
        }],
        name: 'Подстанция',
        start: false,
        end: false,
        id: 7,
        instop: 0,
        outstop: 0
      }, {
        y: 10,
        x: 20,
        vectors: [{
          y: 10,
          x: 0
        }],
        name: 'Автопарк',
        start: false,
        end: false,
        id: 8,
        instop: 0,
        outstop: 0
      }, {
        y: 20,
        x: 20,
        vectors: [{
          y: 0,
          x: -10
        }],
        name: 'ЖБИ',
        start: false,
        end: false,
        id: 9,
        instop: 0,
        outstop: 0
      }, {
        y: 20,
        x: 10,
        vectors: [{
          y: 0,
          x: -10
        }],
        name: 'КПД',
        start: false,
        end: false,
        id: 10,
        instop: 0,
        outstop: 0
      }, {
        y: 20,
        x: 0,
        vectors: [{
          y: 10,
          x: 0
        }],
        name: 'Заводуправление',
        start: false,
        end: false,
        id: 11,
        instop: 0,
        outstop: 0
      }, {
        y: 30,
        x: 0,
        vectors: [{
          y: 10,
          x: 0
        }],
        name: 'Полимир',
        start: false,
        end: false,
        id: 12,
        instop: 0,
        outstop: 0
      }, {
        y: 40,
        x: 0,
        vectors: [{
          y: 0,
          x: 0
        }],
        name: 'Нейтрон',
        start: false,
        end: true,
        id: 13,
        instop: 0,
        outstop: 0
      }],
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
  mutations: {
    MOVE_TRAM (state, obj) {
      console.log('MVT')
      console.log(obj)
      const trmid = state.trams.findIndex((el) => {
        return el.id === obj.id
      })
      console.log(trmid)
      if (state.trams[trmid].moved && state.trams[trmid].idstop < state.line.way.length - 1) {
        console.log('move tram')
        state.trams[trmid].idstop++
        state.currstop = state.line.way[state.trams[trmid].idstop].name
      } else {
        state.trams[trmid].moved = false
      }
    },
    ENTER_TRAM (state, obj) {
      let inps = 0
      const trmid = state.trams.findIndex((el) => {
        return el.id === obj.id
      })
      const inpfl = state.line.pass.filter((el) => {
        return el.instop === state.trams[trmid].idstop
      })
      for (let el of inpfl) {
        inps += el.count
      }
      let outps = 0
      const outpfl = state.line.pass.filter((el) => {
        return el.outstop === state.trams[trmid].idstop
      })
      for (let el of outpfl) {
        outps += el.count
      }
      state.trams[trmid].count -= outps
      state.trams[trmid].count += inps
      if (state.trams[trmid].count >= state.trams[trmid].max) state.trams[trmid].count = state.trams[trmid].max
      state.trams[trmid].money += outps * 0.2
    }
  },
  actions: {
    moveTram ({ commit }, obj) {
      commit('MOVE_TRAM', obj)
    },
    enterTram ({ commit }, obj) {
      commit('ENTER_TRAM', obj)
    }
  },
  getters: {
    line: state => state.line,
    stop: state => state.currstop,
    tramsline: state => (idline) => {
      return state.trams.filter((t) => {
        return t.idline === idline
      })
    }
  }
})
