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
    appVersion: '0.3.0',
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
      const flp = state.line.position.filter((el) => el.idstop === 0)
      if (flp.length > 0) return
      if (state.money >= tr.price || !state.counttrams) {
        if (state.counttrams) state.money -= tr.price
        tr.idline = obj.idline
        state.line.trams.push({
          ...tr,
          idstop: 0,
          id: state.counttrams + 1
        })
        state.line.position.push({
          idtram: state.counttrams + 1,
          idstop: 0,
          count: 0,
          mode: 'to'
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
      if (state.line.trams[trmid].blocked) {
        const poscurrtram = state.line.position.filter((el) => {
          return el.idstop === state.line.trams[trmid].idstop && el.mode === state.line.trams[trmid].mode
        })
        const bll = state.line.trams.filter((el) => {
          return (el.blocked === true && el.idstop === state.line.trams[trmid].idstop)
        })
        console.log('blocked: ' + bll.length)
        console.log('poscurrtram: ' + poscurrtram.length)
        console.log(bll)
        if (poscurrtram.length > 1 && poscurrtram.length !== bll.length) return
        let minidbl = obj.id
        for (let i = 0; i < bll.length; i++) {
          if (minidbl > bll[i].id) minidbl = bll[i].id
        }
        if (minidbl === obj.id) {
          console.log('yes')
          state.line.trams[trmid].blocked = false
        } else return
      }
      if (state.line.trams[trmid].mode === 'to' && state.line.trams[trmid].moved && state.line.trams[trmid].idstop < state.line.way.length - 1) {
        state.line.trams[trmid].idstop++
        state.currstop = state.line.way[state.line.trams[trmid].idstop].name
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'to' && state.line.trams[trmid].idstop >= state.line.way.length - 1) {
        state.line.trams[trmid].mode = 'from'
        state.line.trams[trmid].enter = false
        const endtr = state.line.trams.filter((el) => {
          return el.idstop === state.line.trams[trmid].idstop && state.line.trams[trmid].mode === 'from'
        })
        if (endtr.length > 0) state.line.trams[trmid].blocked = true
      } else if (state.line.trams[trmid].mode === 'from' && state.line.trams[trmid].moved && state.line.trams[trmid].idstop > 0) {
        state.line.trams[trmid].idstop--
        state.currstop = state.line.way[state.line.trams[trmid].idstop].name
        state.line.trams[trmid].enter = false
      } else if (state.line.trams[trmid].mode === 'from' && state.line.trams[trmid].idstop <= 0) {
        state.line.trams[trmid].mode = 'to'
        state.line.trams[trmid].enter = false
        const starttr = state.line.trams.filter((el) => {
          return el.idstop === state.line.trams[trmid].idstop && state.line.trams[trmid].mode === 'to'
        })
        if (starttr.length > 0) state.line.trams[trmid].blocked = true
      }
      const posid = state.line.position.findIndex((el) => {
        return el.idtram === state.line.trams[trmid].id
      })
      state.line.position[posid] = {
        idtram: state.line.trams[trmid].id,
        idstop: state.line.trams[trmid].idstop,
        count: state.line.trams[trmid].count,
        mode: state.line.trams[trmid].mode
      }
      const poscurrtram = state.line.position.filter((el) => {
        return el.idstop === state.line.trams[trmid].idstop && el.mode === state.line.trams[trmid].mode
      })
      console.log(poscurrtram)
      if (poscurrtram.length > 1) {
        let minid = state.line.trams[trmid].id
        for (let tr of poscurrtram) {
          if (tr.idtram <= minid) {
            minid = tr.idtram
          }
        }
        for (let i = 0; i < state.line.trams.length; i++) {
          if (state.line.trams[i].id !== minid) state.line.trams[i].blocked = true
        }
      }
      console.log(state.line.position)
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
      obj.line.position = []
      state.currstop = null
      state.counttrams = 0
      state.appVersion = state.appVersion
      state.datewrite = new Date().toString()
      state.dateclear = new Date().toString()
      localStorage.iv2tramdata = JSON.stringify(obj)
    },
    STORAGE_GET (state) {
      console.log('get')
      if (localStorage.iv2tramdata) {
        const wd = JSON.parse(localStorage.iv2tramdata)
        if (wd.appVersion === state.appVersion) state.models = wd.models
        state.currstop = wd.currstop
        state.counttrams = wd.counttrams
        state.money = wd.money
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
