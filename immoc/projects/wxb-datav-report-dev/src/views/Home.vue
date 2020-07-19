<!--
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 11:02:53
 * @LastEditTime: 2020-07-19 20:07:13
 * @Description : 首页
-->
<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import BottomView from '../components/BottomView'
import MapView from '../components/MapView'

export default {
  name: 'Home',

  components: {
    TopView,
    SalesView,
    BottomView,
    MapView
  }
}
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: #eeeeee;
  padding: 20px;
}
</style>
