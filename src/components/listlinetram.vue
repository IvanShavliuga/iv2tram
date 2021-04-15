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
      <span> {{ t.money }} $</span>
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
button {
  border: 1px solid #238923;
  background-color: rgba(50, 120, 90, 0.7);
  color: white;
  padding: 5px;
  margin: 5px;
}
</style>
