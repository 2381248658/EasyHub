import httpInstance from '@/utils/http'

// 获取banner图
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
    method: 'get',
  })
}

// 获取新鲜好物
export function findNewAPI() {
  return httpInstance({
    url: '/home/new',
    method: 'get',
  })
}

// 获取人气推荐
export const findHotAPI = () => {
  return httpInstance({
    url: '/home/hot',
  })
}

// 获取所有商品模块
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods',
  })
}
