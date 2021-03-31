<template>
  <div id="app">
    <!-- <img :src="'http://localhost:8080/img/tram.svg'"> -->
    <router-view/>
  </div>
</template>
<script>

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
  background: #999999;
}
#app {
  height: 100vh;
  width: 100vw;
  color: #999999;
}

</style>
