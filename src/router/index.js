import Vue from 'vue'
import Router from 'vue-router'
// 路由文件
// Main
import account from '../components/main/Account'
import goodslist from '../components/main/Goodslist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/account', component: account},
    {path: '/goodslist', component: goodslist}
  ]
})
