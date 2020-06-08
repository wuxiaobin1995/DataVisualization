<template>
  <div id="app">
    <sales-report></sales-report>
  </div>
</template>

<script>
import SalesReport from './components/SalesReport/index.vue'

export default {
  name: 'App',

  components: {
    SalesReport
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: #eeeeee;
}
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
</style>
