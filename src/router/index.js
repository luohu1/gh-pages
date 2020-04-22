import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
    redirect: '/index',
    children: [
      {
        name: 'Index',
        path: 'index',
        component: () => import('@/views/Index'),
      },
      {
        name: 'Other',
        path: 'other',
        component: () => import('@/views/Other'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
