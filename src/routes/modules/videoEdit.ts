import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name:'video-edit',
    path: '/video-edit',
    component: () => import('@/views/video-edit/index.vue'),
  }
]

export default routes