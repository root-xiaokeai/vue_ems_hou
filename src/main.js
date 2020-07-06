// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入全局css样式
import "../static/css/style.css"

// 导入
import axios from "axios"
// 将axios注入到Vue的实例中
Vue.prototype.$axios = axios

// 导入Element UI的组件
import ElementUI from 'element-ui'
// 导入样式
import "element-ui/lib/theme-chalk/index.css"
// 全局注册element组件
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
