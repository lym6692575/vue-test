import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
import '@/views/vue2test/test/index'
// 引入全局样式文件
import '@/assets/scss/index.scss'
// 注册一个全局自定义指令
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  },
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
