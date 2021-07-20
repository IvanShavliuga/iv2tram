<template>
  <div id="app">
    <nav class="menu">
      <p class="item">
        <router-link to="/">Линия</router-link>
      </p>
      <p class="item">
        <router-link to="/way">Карта</router-link>
      </p>
      <p class="item">
        <router-link to="/trams">Депо</router-link>
      </p>
      <p class="item">
        <router-link to="/info">Инфо</router-link>
      </p>
    </nav>
    <router-view/>
    <div class="control">
      <div class="control__panel">
        <div class="control__panel-group">
          trams:
          <button @click="newtramcl">
            new
          </button>
          <button @click="prevtramcl">
            prev
          </button>
          <button @click="nexttramcl">
            next
          </button>
          {{ filterprice }}$
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import appHome from '@/views/Home.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    appHome
  },
  computed: {
    ...mapGetters(['money']),
    filterprice () {
      if (!this.money) return '0.0'
      const el = ('' + this.money).split('.')
      const dr = (el[1] !== undefined) ? (el[1].slice(0, 2)) : (this.money)
      return el[0] + '.' + dr
    }
  },
  created () {
    this.$store.dispatch('addTram', {
      idline: 1
    })
  },
  methods: {
    newtramcl () {
      console.log('new')
      this.$store.dispatch('addTram', {
        idline: 1
      })
      this.$store.dispatch('storageSet')
    },
    prevtramcl () {
      this.$store.dispatch('selTram', {
        mode: 'prev'
      })
    },
    nexttramcl () {
      this.$store.dispatch('selTram', {
        mode: 'next'
      })
    }
  }
}
</script>
<style>
body,
html {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  background: #000;
}
#app {
  height: 100vh;
  width: 60%;
  margin: 5px auto;
}
.menu {
  display: flex;
  justify-content: space-around;
  width: 750px;
  margin: 15px auto;
  background-color: blueviolet;
}
.item a {
  color: white;
  text-transform: uppercase;
  text-decoration: none;
}

@media (max-width: 1074px) {
  #app {
    margin: 0 auto;
    width: 95%;
  }
}
@media (max-width: 736px) {
  #app {
    margin: 0;
    width: 100%;
  }
}
@media (max-width: 774px) {
  .menu {
    justify-content: center;
  }
  .item {
    margin-left: 20px;
  }
}
@media (max-width: 520px) {
  .menu {
    width: 500px;
    margin-left: 0;
    margin-right: 0;
  }
}
@media (max-width: 640px) {
  .menu {
    justify-content: flex-start;
  }
  .item {
    margin-left: 20px;
    font-size: 0.8em;
  }
}
@media (max-width: 300px) {
  .menu {
    justify-content: flex-start;
    flex-direction: column;
  }
  .item {
    margin: 5px;
  }
}
</style>
