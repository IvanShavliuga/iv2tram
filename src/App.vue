<template>
  <div id="app">
    <!-- <img :src="'http://localhost:8080/img/tram.svg'"> -->
    <router-view/>
    <div
      id="test_varss_senv"
      style="color: white"
    >
      {{ test }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      test: './not/test__faild/'
    }
  },
  mounted () {
    this.test = process.env.VUE_APP_BASE_URL
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
  background: black;
}
#app {
  height: 100vh;
  width: 100vw;
  color: black;
}

</style>
