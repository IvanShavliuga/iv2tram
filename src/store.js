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
        x: 60,
        y: 10,
        vectors: [{
          x: -10,
          y: 0
        }],
        name: 'Олимпийская',
        start: true,
        end: false,
        id: 0,
        instop: 0,
        outstop: 0
      }, {
        x: 50,
        y: 10,
        vectors: [{
          x: -10,
          y: 0
        }],
        name: '7-я школа',
        start: false,
        end: false,
        id: 1,
        instop: 0,
        outstop: 0
      }, {
        x: 40,
        y: 10,
        vectors: [{
          x: -10,
          y: 0
        }],
        name: 'Комсомольская',
        start: false,
        end: false,
        id: 2,
        instop: 0,
        outstop: 0
      }, {
        x: 30,
        y: 10,
        vectors: [{
          x: -10,
          y: 0
        }],
        name: 'Университет',
        start: false,
        end: false,
        id: 3,
        instop: 0,
        outstop: 0
      }, {
        x: 20,
        y: 10,
        vectors: [{
          x: -10,
          y: 0
        }],
        name: 'Автовокзал',
        start: false,
        end: false,
        id: 4,
        instop: 0,
        outstop: 0
      }, {
        x: 10,
        y: 10,
        vectors: [{
          x: 0,
          y: 10
        }],
        name: 'Техникум',
        start: false,
        end: false,
        id: 5,
        instop: 0,
        outstop: 0
      }, {
        x: 10,
        y: 20,
        vectors: [{
          x: 0,
          y: 10
        }],
        name: 'Депо',
        start: false,
        end: false,
        id: 6,
        instop: 0,
        outstop: 0
      }, {
        x: 10,
        y: 30,
        vectors: [{
          x: 0,
          y: 10
        }],
        name: 'Подстанция',
        start: false,
        end: false,
        id: 7,
        instop: 0,
        outstop: 0
      }, {
        x: 10,
        y: 40,
        vectors: [{
          x: 10,
          y: 0
        }],
        name: 'Автопарк',
        start: false,
        end: false,
        id: 8,
        instop: 0,
        outstop: 0
      }, {
        x: 20,
        y: 40,
        vectors: [{
          x: 0,
          y: 10
        }],
        name: 'ЖБИ',
        start: false,
        end: false,
        id: 9,
        instop: 0,
        outstop: 0
      }, {
        x: 20,
        y: 50,
        vectors: [{
          x: 0,
          y: 0
        }],
        name: 'КПД',
        start: false,
        end: false,
        id: 50,
        instop: 0,
        outstop: 0
      }, {
        x: 20,
        y: 50,
        vectors: [{
          x: 10,
          y: 0
        }],
        name: 'Заводуправление',
        start: false,
        end: false,
        id: 11,
        instop: 0,
        outstop: 0
      }, {
        x: 30,
        y: 50,
        vectors: [{
          x: 10,
          y: 0
        }],
        name: 'Полимир',
        start: false,
        end: false,
        id: 12,
        instop: 0,
        outstop: 0
      }, {
        x: 40,
        y: 50,
        vectors: [{
          x: 0,
          y: 0
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
        count: 20,
        price: 0.2
      }, {
        instop: 0,
        outstop: 4,
        count: 8,
        price: 0.2
      }, {
        instop: 1,
        outstop: 3,
        count: 8,
        price: 0.4
      }, {
        instop: 1,
        outstop: 4,
        count: 12,
        price: 0.2
      }, {
        instop: 2,
        outstop: 5,
        count: 10,
        price: 0.2
      }, {
        instop: 3,
        outstop: 6,
        count: 10,
        price: 0.8
      }, {
        instop: 4,
        outstop: 6,
        count: 4,
        price: 0.5
      }, {
        instop: 5,
        outstop: 6,
        count: 10,
        price: 0.7
      }, {
        instop: 0,
        outstop: 11,
        count: 18,
        price: 0.7
      }, {
        instop: 1,
        outstop: 13,
        count: 13,
        price: 0.7
      }, {
        instop: 5,
        outstop: 12,
        count: 10,
        price: 0.4
      }, {
        instop: 3,
        outstop: 10,
        count: 9,
        price: 0.5
      }, {
        instop: 2,
        outstop: 7,
        count: 10,
        price: 0.4
      }, {
        instop: 3,
        outstop: 13,
        count: 10,
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
      state.trams[trmid].money += inps * 0.2
      if (!state.line.position.length) {
        state.line.position.push({
          idtram: state.trams[trmid].id,
          idstop: state.trams[trmid].idstop,
          count: state.trams[trmid].count
        })
      } else {
        const id = state.line.position.findIndex((el) => {
          return el.idtram === state.trams[trmid].id
        })
        if (id >= 0) {
          state.line.position[id].idstop = state.trams[trmid].idstop
          state.line.position[id].count = state.trams[trmid].count
        } else {
          state.line.position.push({
            idtram: state.trams[trmid].id,
            idstop: state.trams[trmid].idstop,
            count: state.trams[trmid].count
          })
        }
      }
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
