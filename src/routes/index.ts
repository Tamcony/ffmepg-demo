import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import videoEdit from './modules/videoEdit'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  ...videoEdit
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = async (app: App) => {
  app.use(router)
  await router.isReady()
}

export default routes
