import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* 引入element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 引入echarts */
import Echarts from 'echarts'

/* 挂载element-ui */
Vue.use(ElementUI)
/* 挂载echarts */
Vue.prototype.$echarts = Echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
