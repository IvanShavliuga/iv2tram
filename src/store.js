import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currstop: null,
    counttrams: 0,
    money: 0,
    clientWidth: 1200,
    models: [{
      id: 1,
      model: 'KTM5',
      max: 120,
      sections: 1,
      idline: 1,
      count: 0,
      money: 0,
      idstop: 0,
      moved: true,
      enter: false,
      mode: 'to',
      price: 100
    }],
    line: {
      moved: true,
      number: 1,
      trams: [],
      position: [],
      currtram: 0,
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
          y: 10
        }],
        name: 'КПД',
        start: false,
        end: false,
        id: 10,
        instop: 0,
        outstop: 0
      }, {
        x: 20,
        y: 60,
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
        y: 60,
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
        y: 60,
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
        instop: 3,
        outstop: 8,
        count: 12,
        price: 0.2
      }, {
        instop: 1,
        outstop: 3,
        count: 8,
        price: 0.4
      }, {
        instop: 1,
        outstop: 3,
        count: 15,
        price: 0.2
      }, {
        instop: 2,
        outstop: 5,
        count: 10,
        price: 0.2
      }, {
        instop: 3,
        outstop: 9,
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
    CHANGE_DIR (state, obj) {
      const trmid = state.line.trams.findIndex((el) => {
        return el.id === obj.id
      })
      if (obj.dirtram === 'to') state.line.trams[trmid].mode = 'from'
      if (obj.dirtram === 'from') state.line.trams[trmid].mode = 'to'
    },
    SEL_TRAM (state, obj) {
      if (obj.mode === 'next' && state.line.currtram < state.counttrams) {
        state.line.currtram++
      }
      if (obj.mode === 'prev' && state.line.currtram > 1) {
        state.line.currtram--
      }
    },
    ADD_TRAM (state, obj) {
      const tr = state.models[0]
      if (state.money >= tr.price || !state.counttrams) {
        if (state.counttrams) state.money -= tr.price
        tr.idline = obj.idline
        state.line.trams.push({
          ...tr,
          idstop: 0,
          id: state.counttrams + 1
        })
        state.line.position.push({
          idtram: tr.id,
          idstop: 0,
          count: 0
        })
        state.counttrams++
        state.line.currtram++
        state.currstop = state.line.way[0].name
      }
    },
    MOVE_TRAM (state, obj) {
      console.log('MVT')
      console.log(obj)
      const trmid = state.line.trams.findIndex((el) => {
        return el.id === obj.id
      })
      if (state.line.trams[trmid].mode === 'to' && state.line.trams[trmid].moved && state.line.trams[trmid].idstop < state.line.way.length - 1) {
        console.log('move tram')
        state.line.trams[trmid].idstop++
        state.currstop = state.line.way[state.line.trams[trmid].idstop].name
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'to' && state.line.trams[trmid].idstop >= state.line.way.length - 1) {
        state.line.trams[trmid].mode = 'from'
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'from' && state.line.trams[trmid].moved && state.line.trams[trmid].idstop > 0) {
        console.log('move tram')
        state.line.trams[trmid].idstop--
        state.currstop = state.line.way[state.line.trams[trmid].idstop].name
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'from' && state.line.trams[trmid].idstop <= 0) {
        state.line.trams[trmid].mode = 'to'
        state.line.trams[trmid].enter = false
      }
    },
    ENTER_TRAM (state, obj) {
      const trmid = state.line.trams.findIndex((el) => {
        return el.id === obj.id
      })
      if (!state.line.trams[trmid].enter) {
        let inps = 0
        const inpfl = state.line.pass.filter((el) => {
          return el.instop === state.line.trams[trmid].idstop
        })
        for (let el of inpfl) {
          inps += el.count
        }
        let outps = 0
        const outpfl = state.line.pass.filter((el) => {
          return el.outstop === state.line.trams[trmid].idstop
        })
        for (let el of outpfl) {
          outps += el.count
        }
        if (state.line.trams[trmid].mode === 'to') {
          state.line.trams[trmid].count -= outps
          state.line.trams[trmid].count += inps
          if (state.line.trams[trmid].count >= state.line.trams[trmid].max) state.trams[trmid].count = state.trams[trmid].max
          state.line.trams[trmid].money += inps * 0.1
          state.money += inps * 0.1
        }
        if (state.line.trams[trmid].mode === 'from') {
          state.line.trams[trmid].count += outps
          state.line.trams[trmid].count -= inps
          if (state.line.trams[trmid].count >= state.line.trams[trmid].max) state.trams[trmid].count = state.trams[trmid].max
          state.line.trams[trmid].money += outps * 0.1
          state.money += outps * 0.1
        }
        state.line.trams[trmid].enter = true
        if (!state.line.position.length) {
          state.line.position.push({
            idtram: state.line.trams[trmid].id,
            idstop: state.line.trams[trmid].idstop,
            count: state.line.trams[trmid].count
          })
        } else {
          const id = state.line.position.findIndex((el) => {
            return el.idtram === state.line.trams[trmid].id
          })
          if (id >= 0) {
            state.line.position[id].idstop = state.line.trams[trmid].idstop
            state.line.position[id].count = state.line.trams[trmid].count
          } else {
            state.line.position.push({
              idtram: state.line.trams[trmid].id,
              idstop: state.line.trams[trmid].idstop,
              count: state.line.trams[trmid].count
            })
          }
        }
      }
    },
    'APP_RESIZE' (state, obj) {
      state.clientWidth = obj.width
      state.clientHeight = obj.height
      console.log('resize')
      console.log(obj)
    }
  },
  actions: {
    moveTram ({ commit }, obj) {
      commit('MOVE_TRAM', obj)
    },
    enterTram ({ commit }, obj) {
      commit('ENTER_TRAM', obj)
    },
    addTram ({ commit }, obj) {
      commit('ADD_TRAM', obj)
    },
    selTram ({ commit }, obj) {
      commit('SEL_TRAM', obj)
    },
    appResize ({ commit }, obj) {
      commit('APP_RESIZE', obj)
    }
  },
  getters: {
    line: state => state.line,
    money: state => state.money,
    clientWidth: state => state.clientWidth,
    stop: state => state.currstop,
    currtram: state => {
      return state.line.trams.filter((el) => {
        return el.id === state.line.currtram
      })[0]
    },
    tramsline: state => {
      console.log(state.line.currtram)
      return state.line.trams
    }
  }
})
