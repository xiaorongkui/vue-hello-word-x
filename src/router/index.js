import Vue from 'vue'
import Router from 'vue-router'
// 路由文件
// Main
import HomeContainer from '../components/maintablebar/HomeContainer.vue'
import MemberContainer from '../components/maintablebar/MemberContainer.vue'
import ShopcarContainer from '../components/maintablebar/ShopcarContainer.vue'
import SearchContainer from '../components/maintablebar/SearchContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/serach', component: SearchContainer}
  ],
  linkActiveClass: 'mui-active' // router-link-active
})
