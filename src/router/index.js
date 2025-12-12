import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'
import Category from '@/views/Category/CategoryIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import SubCategoryIndex from '@/views/SubCategory/SubCategoryIndex.vue'
import Detail from '@/views/Detail/detailIndex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home,
        },
        {
          path: 'category/:id',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          component: SubCategoryIndex,
        },
        {
          path: 'detail/:id',
          component: Detail,
        },
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
