// 封装购物车数据
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // 1.定义state
  const cartList = ref([])
  // 2.定义action

  // 添加购物车操作
  const addCart = (goods) => {
    // 1.已经添加过 count+1
    // 2.未添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    // 判断
    if (item) {
      item.count += goods.count
    } else {
      cartList.value.push(goods)
    }
  }
  // 删除购物车操作
  const delCart = (skuId) => {
    // 找到已经添加购物车的id 然后删除
    const idx = cartList.value.findIndex((goods) => goods.skuId === skuId)
    cartList.value.splice(idx, 1)
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
  return {
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
  }
})
