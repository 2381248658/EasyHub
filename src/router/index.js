import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'
import Category from '@/views/Category/CategoryIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import SubCategoryIndex from '@/views/SubCategory/SubCategoryIndex.vue'

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
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})

export default router
