import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia) // Use Pinia first
app.use(router) // Tell Vue to use the router

app.mount('#app')
