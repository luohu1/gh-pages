import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import BasicLayout from '@/layouts/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout
  }
]

const router = new VueRouter({
  routes
})

export default router
