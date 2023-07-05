import LayoutDefault from '@/layouts/LayoutDefault.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'List',
        component: () => import('../views/List.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
