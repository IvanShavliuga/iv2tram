<template>
  <ul class="listlinetram">
    <li
      v-for="t in line.trams"
      :key="t.id"
      :style="(t.id === line.currtram)?('color: white'):('color: #aaa')"
      class="listlinetram__item"
    >
      <span style="color: plum">id:</span><span title="id"> {{ t.id }} </span>
      <span style="color: plum">model:</span><span title="model"> {{ t.model }} </span>
      <span style="color: plum">count:</span><span title="count"> {{ t.count }} /  {{ t.max }} </span>
      <span style="color: plum">dir:</span><span title="mode"> {{ t.mode.toUpperCase() }} </span>
      <span style="color: plum">price:</span><span title="price"> {{ t.price }}$ </span>
      <span style="color: plum">loops:</span><span title="loops"> {{ t.loops }} </span>
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
span {
  display: inline-block;
  width: 75px;
  padding-left: 5px;
  text-align: left;
}
span:first-child {
  width: 15px;
}
span:nth-child(2) {
  width: 25px;
}
span:nth-child(5) {
  width: 45px;
}
span:nth-child(7) {
  width: 25px;
}
span:nth-child(9) {
  width: 35px;
}
</style>
