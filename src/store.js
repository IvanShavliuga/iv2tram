import Vue from 'vue'
import Vuex from 'vuex'
import models from './db/models.js'
import novopolotsk from './db/novopolotsk.js'
Vue.use(Vuex)
console.log(models)
export default new Vuex.Store({
  state: {
    currstop: null,
    counttrams: 0,
    money: 0,
    clientWidth: 1200,
    models: models.list,
    line: novopolotsk.line,
    appVersion: '0.2.1',
    datewrite: '',
    dateclear: ''
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
      const trmid = state.line.trams.findIndex((el) => {
        return el.id === obj.id
      })
      for (const t of state.line.trams) {
        if (t.id > obj.id && state.line.trams[trmid].mode === t.mode) return
      }
      if (state.line.trams[trmid].mode === 'to' && state.line.trams[trmid].moved && state.line.trams[trmid].idstop < state.line.way.length - 1) {
        state.line.trams[trmid].idstop++
        state.currstop = state.line.way[state.line.trams[trmid].idstop].name
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'to' && state.line.trams[trmid].idstop >= state.line.way.length - 1) {
        state.line.trams[trmid].mode = 'from'
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'from' && state.line.trams[trmid].moved && state.line.trams[trmid].idstop > 0) {
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
          state.money += inps * 0.1
        }
        if (state.line.trams[trmid].mode === 'from') {
          state.line.trams[trmid].count += outps
          state.line.trams[trmid].count -= inps
          if (state.line.trams[trmid].count >= state.line.trams[trmid].max) state.trams[trmid].count = state.trams[trmid].max
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
    },
    'STORAGE_SET' (state) {
      console.log('set')
      const obj = {
        currstop: state.currstop,
        counttrams: state.counttrams,
        money: state.money,
        models: state.models,
        line: state.line,
        appVersion: state.appVersion,
        datewrite: new Date().toString(),
        dateclear: ''
      }
      localStorage.iv2tramdata = JSON.stringify(obj)
    },
    'STORAGE_CLS' (state) {
      console.log('clear')
      const obj = {
        currstop: null,
        counttrams: 0,
        money: state.money,
        models: state.models,
        line: state.line,
        appVersion: state.appVersion,
        datewrite: new Date().toString(),
        dateclear: new Date().toString()
      }
      obj.line.trams = []
      obj.line.currtram = 0
      localStorage.iv2tramdata = JSON.stringify(obj)
    },
    STORAGE_GET (state) {
      console.log('get')
      if (localStorage.iv2tramdata) {
        const wd = JSON.parse(localStorage.iv2tramdata)
        state.currstop = wd.currstop
        state.counttrams = wd.counttrams
        state.money = wd.money
        state.models = wd.models
        state.line = wd.line
        state.datewrite = wd.datewrite
        state.dateclear = wd.dateclear
      }
    }
  },
  actions: {
    moveTram ({ commit }, obj) {
      commit('MOVE_TRAM', obj)
    },
    storageSet ({ commit }) {
      commit('STORAGE_SET')
    },
    storageGet ({ commit }) {
      commit('STORAGE_GET')
    },
    storageCls ({ commit }) {
      commit('STORAGE_CLS')
      commit('ADD_TRAM', {
        idline: 1
      })
      commit('STORAGE_SET')
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
      return state.line.trams
    },
    infogame: state => {
      return {
        counttrams: state.counttrams,
        money: state.money,
        appVersion: state.appVersion,
        datewrite: state.datewrite,
        dateclear: state.dateclear
      }
    }
  }
})
