import ViewIndex from './imageView/ViewIndex.vue'
import Sku from './XtxSku/index.vue'

export const PluginManager = {
  install(app) {
    // 注册全局组件（名称 = 模板中使用的标签名）
    app.component('ViewIndex', ViewIndex)
    app.component('SkuIndex', Sku)
  },
}
