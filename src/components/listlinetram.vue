<template>
  <table class="listlinetram">
    <tr
      v-for="t in line.trams"
      :key="t.id"
      :style="(t.id === line.currtram)?('color: white'):('color: #aaa')"
      class="listlinetram__item"
    >
      <td style="color: plum">id:</td><td title="id"> {{ t.id }} </td>
      <td style="color: plum">model:</td><td title="model"> {{ t.model }} </td>
      <td style="color: plum">count:</td><td title="count"> {{ t.count }} /  {{ t.max }} </td>
      <td style="color: plum">dir:</td><td title="mode"> {{ t.mode.toUpperCase() }} </td>
      <td style="color: plum">price:</td><td title="price"> {{ t.price }}$ </td>
      <td title="status"> {{ (t.depot)?('depot'):('') }} {{ (t.blocked)?('blocked'):('drive') }} </td>
      <td style="color: plum">loops:</td><td title="loops"> {{ t.loops }} </td>
    </tr>
  </table>
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
</style>
