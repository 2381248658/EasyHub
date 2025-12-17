// 封装购物车数据
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import {
  insertCartAPI,
  findNewCartListAPI,
  delCartAPI,
  updateNewCartAPI,
  batchUpdateCartAPI,
} from '@/apis/carts'
import { useUserStore } from './userStore'

export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  // 1.定义state
  const cartList = ref([])
  // 2.定义action
  // 获取最新购物车列表
  const updateNewCart = async () => {
    const res = await findNewCartListAPI()
    cartList.value = res.data.result
  }

  // 添加购物车操作
  const addCart = async (goods) => {
    const { skuId, count } = goods
    // 1.已经添加过 count+1
    // 2.未添加过
    if (isLogin.value) {
      // 登录之后的购物车逻辑
      await insertCartAPI({ skuId, count })
      updateNewCart()
    } else {
      // 未登录时
      const item = cartList.value.find((item) => goods.skuId === item.skuId)
      // 判断
      if (item) {
        item.count += goods.count
      } else {
        cartList.value.push(goods)
      }
    }
  }
  // 删除购物车操作
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await delCartAPI([skuId])
      updateNewCart()
    } else {
      // 找到已经添加购物车的id 然后删除
      const idx = cartList.value.findIndex((goods) => goods.skuId === skuId)
      cartList.value.splice(idx, 1)
    }
  }

  // 清除购物车列表
  const clearCart = () => {
    cartList.value = []
  }

  // 商品总数
  const allCount = computed(() =>
    cartList.value.reduce((sum, item) => {
      return sum + (item.count || 0)
    }, 0),
  )
  // 商品总价
  const allPrice = computed(() =>
    cartList.value
      .reduce((sum, item) => {
        return sum + (item.count || 0) * (item.price || 0)
      }, 0)
      .toFixed(2),
  )

  // 单选框被选择
  const singleCheck = async (i, selected) => {
    // 找到被选择的数组元素,改变他的选择状态
    const index = cartList.value.findIndex((goods) => goods.skuId === i.skuId)
    cartList.value[index].selected = selected

    // 如果已经登录 调用接口同步状态
    if (isLogin.value) {
      await updateNewCartAPI(i.skuId, { selected })
    }
  }

  // 是否全选
  const isAll = computed(() => {
    if (!cartList.value.length) {
      return false
    } else {
      return cartList.value.every((item) => item.selected)
    }
  })

  // 全选功能
  const allCheck = async (selected) => {
    // 把cartList中的每一项的selected都设置为当前的全选框状态
    cartList.value.forEach((item) => {
      item.selected = selected
    })
    // 如果已经登陆，同步全选状态
    if (isLogin.value) {
      const ids = cartList.value.map((item) => item.skuId)
      await batchUpdateCartAPI({ ids, selected })
    }
  }

  //3. 已选择数量
  const selectedCount = computed(() =>
    cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0),
  )
  //4. 已选择商品合计
  const selectedPrice = computed(() =>
    cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0),
  )

  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck,
    selectedCount,
    selectedPrice,
    clearCart,
    updateNewCart,
  }
})
