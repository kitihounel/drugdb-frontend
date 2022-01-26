import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DrugInfo from '../views/DrugInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drugs/:drugId(\\d+)',
    name: 'DrugPage',
    component: DrugInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'has-text-white',
  linkExactActiveClass: 'has-text-white'
})

export default router
