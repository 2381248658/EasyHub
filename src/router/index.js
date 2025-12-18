import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/LayoutIndex.vue'
import Login from '@/views/Login/LoginIndex.vue'
import Category from '@/views/Category/CategoryIndex.vue'
import Home from '@/views/Home/HomeIndex.vue'
import SubCategoryIndex from '@/views/SubCategory/SubCategoryIndex.vue'
import Detail from '@/views/Detail/detailIndex.vue'
import CartList from '@/views/CartList/cartListindex.vue'
import Checkout from '@/views/Checkout/checkoutIndex.vue'
import Pay from '@/views/Pay/payIndex.vue'
import PayBack from '@/views/Pay/payBack.vue'
import Member from '@/views/Member/memberIndex.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

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
        {
          path: 'cartlist',
          component: CartList,
        },
        {
          path: 'checkout',
          component: Checkout,
        },
        {
          path: 'pay',
          component: Pay,
        },
        {
          path: 'paycallback',
          component: PayBack,
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo,
            },
            {
              path: 'order',
              component: UserOrder,
            },
          ],
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
