import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 1. 导入 Pinia 持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 引入插件
import imgLazy from './directives/imgLazy'
import { PluginManager } from './components'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 2. 创建 Pinia 实例
const pinia = createPinia()

// 3. 将持久化插件安装到 Pinia 实例中
pinia.use(piniaPluginPersistedstate)

// 4. 使用 Pinia 实例
app.use(pinia)
app.use(router)

// 使用其他插件
app.use(imgLazy)
app.use(PluginManager)

app.mount('#app')
