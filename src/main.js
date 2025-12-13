import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 引入插件
import imgLazy from './directives/imgLazy'
import { PluginManager } from './components'

import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// 使用插件
app.use(imgLazy)
app.use(PluginManager)

app.mount('#app')
