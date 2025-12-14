// 管理登录用户数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    // 1.定义管理用户数据的
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      // console.log('请求参数：', { account, password })
      const res = await loginAPI({ account, password })
      // console.log('接口返回完整数据：', res)
      userInfo.value = res.data.result
    }

    return {
      userInfo,
      getUserInfo,
    }
  },
  {
    persist: true,
  },
)
