import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'
import Catagory from '@/views/Catagory/CatagoryIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'

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
          component: Catagory,
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
