//封装分类数据相关代码
import { ref, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '@/apis/category'
export function useCategory() {
  // 获取分类数据
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    try {
      const res = await getCategoryAPI(id)
      categoryData.value = res.data.result
    } catch (err) {
      console.error('面包屑导航获取失败', err)
    }
  }
  onMounted(() => getCategory())
  // 期望在路由参数变化的时候 可以把路由参数接口重新发送
  onBeforeRouteUpdate((to) => {
    // 存在问题,要更新参数分类数据请求
    getCategory(to.params.id)
  })
  return {
    categoryData,
  }
}
