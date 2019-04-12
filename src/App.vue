<template>
  <div id="app">
   <!--Header-->
    <mt-header fixed title="我的vue项目"></mt-header>
    <h3>nei荣</h3>
    <router-view/>

    <!--Tabber-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
