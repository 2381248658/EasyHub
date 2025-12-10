// 定义懒加载插件
export default {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // 设置占位图
        el.src = binding.arg // ||'default-loading.png'

        // 检测浏览器是否支持IntersectionObserver
        if (!window.IntersectionObserver) {
          el.src = binding.value
          return
        }

        // 创建IntersectionObserver来监听元素
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            // 检测图片是否进入视口
            if (entry.isIntersecting) {
              el.src = binding.value
              // 如果加载失败
              el.onerror = () => {
                el.src = 'default-loading.png'
              }
              observer.unobserve(el)
            }
          })
        })
        observer.observe(el)
      },
    })
  },
}
