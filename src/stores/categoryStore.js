import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layoutAPI'
export const useCategoryStore = defineStore('category', () => {
  // 导航列表中的数据
  const categoryList = ref([])

  // 定义函数操作数据
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.data.result
  }

  return {
    categoryList,
    getCategory,
  }
})
