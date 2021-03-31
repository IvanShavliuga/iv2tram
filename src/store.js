import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currstop: null,
    line: {
      moved: true,
      number: 1,
      position: 0,
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
    MOVE_TRAM (state) {
      console.log('move tram')
      if (state.line.moved && state.line.position < state.line.way.length - 1) {
        state.line.position++
        state.currstop = state.line.way[state.line.position].name
      } else {
        state.line.moved = false
      }
    }
  },
  actions: {
    moveTram ({ commit }) {
      commit('MOVE_TRAM')
    }
  },
  getters: {
    line: state => state.line,
    stop: state => state.currstop
  }
})
