<template>
  <div class="info">
    <h3>Разработчик</h3>
    <h4><a href="https://ivanshavliuga.github.io/">Иван Шавлюга</a></h4>
    <p>Версия сборки: {{ infogame.appVersion }}</p>
    <p>Количество трамваев: {{ infogame.counttrams }}</p>
    <p>Сумма денег: {{ infogame.money }}</p>
    <button @click="clsCash">Очистить кеш</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['infogame'])
  },
  methods: {
    clsCash () {
      this.$store.dispatch('storageCls')
    }
  }
}
</script>
<style>
.info {
  position: relative;
  width: 750px;
  height: 250px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 5px 5px rgba(255, 255, 255, 0.5);
  color: white;
}
a {
  color: blueviolet;
  text-decoration: none;
}
.info > * {
  margin: 10px;
}
</style>
