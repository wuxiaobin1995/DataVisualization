/*
 * @Author      : 吴晓斌
 * @CreateData  : 2020-07-15 11:02:53
 * @LastEditTime: 2020-07-16 16:33:34
 * @Description : main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 引入echarts */
import Echarts from 'echarts'
/* 引入vue-echarts */
import VueEcharts from 'vue-echarts'
/* 引入v-charts */
import VCharts from 'v-charts'

/* 引入全局scss（注意，放到vue-echarts后面引入，就能覆盖原本vue-echarts的样式） */
import './style/index.scss'

/* 插件挂载element-ui */
Vue.use(ElementUI)
/* 原型链挂载echarts */
Vue.prototype.$echarts = Echarts
/* 组件注册vue-echarts */
Vue.component('v-chart', VueEcharts)
/* 插件挂载v-charts */
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
