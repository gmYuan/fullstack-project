import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 注释1: 查看vite环境变量
console.log('环境变量--', import.meta.env)
console.log('环境变量的myName--', import.meta.env.VITE_myName)
createApp(App).mount('#app')
