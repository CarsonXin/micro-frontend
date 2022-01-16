import { createApp } from 'vue'
import App from './App.vue'



import '../config/qiankun/index'
import { router } from './router'

const app = createApp(App)
.use(router)
.mount('#app')
