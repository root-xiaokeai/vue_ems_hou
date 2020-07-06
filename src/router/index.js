import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login'
import register from '../components/register'
import index from '../components/index'
import addemp from '../components/addemp'
import updateemp from '../components/updateemp'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Login},
    {path: '/login', component: Login},
    {path:'/register',component:register},
    {path:'/index',component:index},
    {path:'/addemp',component:addemp},
    {path:'/updateemp',component:updateemp}
  ]
})
