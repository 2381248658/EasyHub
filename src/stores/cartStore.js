// 封装购物车数据
import { defineStore } from 'pinia'
import { ref } from 'vue'

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

  return {
    cartList,
    addCart,
  }
})
