import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import "../public/index.css"
createApp(App).use(createPinia()).mount('#app')
