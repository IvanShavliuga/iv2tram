<template>
  <ul class="listlinetram">
    <li
      v-for="t in line.trams"
      :key="t.id"
      :style="(t.id === line.currtram)?('color: white'):('color: #aaa')"
      class="listlinetram__item"
    >
      <span> {{ t.id }} </span>
      <span> {{ t.model }} </span>
      <span> {{ filterprice(t) }} $</span>
      <span> {{ t.count }} / </span>
      <span> {{ t.max }} </span>
    </li>
  </ul>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['line'])

  },
  methods: {
    findactive (id) {
      return this.line.position.findIndex((el) => {
        return el.idstop === id
      })
    },
    newtramcl () {
      console.log('new tram')
      this.$store.dispatch('addTram', {
        idline: this.line.number
      })
    },
    filterprice (t) {
      if (!t.money) return '0.0'
      const el = ('' + t.money).split('.')
      const dr = (el[1] !== undefined) ? (el[1].slice(0, 2)) : (t.money)
      return el[0] + '.' + dr
    }
  }
}
</script>
<style>
.listlinetram {
  padding: 0 5px;
}
.listlinetram__item {
  list-style: none;
  font-size: 15px;
  font-weight: bold;
}
</style>
