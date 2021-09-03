import Vue from 'vue'
import Vuex from 'vuex'
import models from './db/models.js'
import novopolotsk from './db/novopolotsk.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currstop: novopolotsk.depot,
    depot: novopolotsk.depot,
    counttrams: 0,
    money: 0,
    clientWidth: 1200,
    models: models.list,
    map: novopolotsk.mapcity,
    line: novopolotsk.line[0],
    stopslist: novopolotsk.stopslist,
    levels: [novopolotsk],
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
      if (state.money >= tr.price || !state.counttrams) {
        if (state.counttrams) state.money -= tr.price
        tr.idline = obj.idline
        tr.mode = 'from'
        tr.depot = false
        tr.color = tr.types[state.counttrams % tr.types.length]
        state.line.trams.push({
          ...tr,
          idstop: state.depot.id,
          id: state.counttrams + 1
        })
        state.counttrams++
        state.line.currtram++
        state.currstop = state.depot
      }
    },
    MOVE_TRAM (state, obj) {
      /* поиск трамвая по его номеру */
      const trmid = state.line.trams.findIndex((el) => {
        return el.id === obj.id
      })
      if (trmid < 0) return
      const trmcurr = state.line.trams[trmid]
      /* получение текущей остановки */
      const idposmap = state.line.map.filter((el) => el === trmcurr.idstop)[0]
      const stop = state.stopslist.filter((el) => el.id === idposmap)[0]
      if (!trmcurr.blocked) {
        /* Разворотное кольцо */
        if (stop.loop && trmcurr.moved && !trmcurr.reverse) {
          if (trmcurr.mode === 'from') {
            trmcurr.mode = 'to'
            trmcurr.loops++
            // trmcurr.enter = false
            // trmcurr.moved = false
          } else if (trmcurr.mode === 'to') {
            trmcurr.mode = 'from'
            // trmcurr.moved = false
          }
          trmcurr.enter = false
          trmcurr.reverse = true
        } else if (stop.loop && trmcurr.reverse) {
          console.log('reverse return')
          return
        } else if (!stop.loop && trmcurr.moved) {
          if (trmcurr.mode === 'from') {
            if (trmcurr.idstop >= 0) trmcurr.idstop--
          } else if (trmcurr.mode === 'to') {
            if (trmcurr.idstop <= state.line.map.length - 1) trmcurr.idstop++
          }
          const nextposmap = state.line.map.filter((el) => el === trmcurr.idstop)[0]
          state.currstop = state.stopslist.filter((el) => el.id === nextposmap)[0]
          trmcurr.enter = false
        }
      }
      const nexttrams = state.line.trams.filter((el) => {
        if (trmcurr.mode === 'to' && el.mode === 'to') return trmcurr.idstop === (el.idstop - 1)
        if (trmcurr.mode === 'from' && el.mode === 'from') return trmcurr.idstop === (el.idstop + 1)
      })
      if (nexttrams.length) {
        trmcurr.blocked = true
      } else if (!nexttrams.length && trmcurr.blocked) {
        trmcurr.blocked = false
      }
      state.line.trams[trmid] = trmcurr
    },
    ENTER_TRAM (state, obj) {
      const trmid = state.line.trams.findIndex((el) => {
        return el.id === obj.id
      })
      // генерация пассажиропотока
      if (!state.line.trams[trmid].enter) {
        let inps = 0
        let outps = 0
        state.line.pass.reduce((acc, curr) => {
          if (state.line.trams[trmid].mode === 'from') {
            if (curr.outstop === state.line.trams[trmid].idstop) {
              inps += curr.count
            }
            if (curr.instop === state.line.trams[trmid].idstop) {
              outps += curr.count
            }
          }
          if (state.line.trams[trmid].mode === 'to') {
            if (curr.instop === state.line.trams[trmid].idstop) {
              inps += curr.count
            }
            if (curr.outstop === state.line.trams[trmid].idstop) {
              outps += curr.count
            }
          }
        })
        state.line.trams[trmid].count += inps
        if (state.line.trams[trmid].count > outps) state.line.trams[trmid].count -= outps
        state.money += inps * 0.1
        state.line.trams[trmid].enter = true
        if (state.line.trams[trmid].reverse) {
          console.log('reverse')
          state.line.trams[trmid].reverse = false
          if (state.line.trams[trmid].mode === 'to') {
            state.line.trams[trmid].idstop++
          } else if (state.line.trams[trmid].mode === 'from') {
            state.line.trams[trmid].idstop--
          }
          state.line.trams[trmid].moved = true
          const nextposmap = state.line.map.filter((el) => el === state.line.trams[trmid].idstop)[0]
          state.currstop = state.stopslist.filter((el) => el.id === nextposmap)[0]
          console.log(state.currstop)
          console.log(state.line.trams[trmid].idstop)
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
    'STORAGE_CLS' (state, dispatch) {
      console.log('clear')
      const obj = {
        currstop: novopolotsk.depot,
        counttrams: 0,
        money: 0,
        models: models.list,
        line: novopolotsk.line[0],
        appVersion: state.appVersion,
        datewrite: new Date().toString(),
        dateclear: new Date().toString()
      }
      obj.line.trams = []
      obj.line.currtram = 0
      state.counttrams = 0
      state.appVersion = state.appVersion
      state.datewrite = new Date().toString()
      state.dateclear = new Date().toString()
      localStorage.iv2tramdata = JSON.stringify(obj)
    },
    STORAGE_GET (state) {
      if (localStorage.iv2tramdata) {
        const wd = JSON.parse(localStorage.iv2tramdata)
        if (wd.appVersion !== state.appVersion) return
        state.models = wd.models
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
    stopslist: state => state.stopslist,
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
