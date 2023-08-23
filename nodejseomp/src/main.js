import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MotionPlugin } from '@vueuse/motion'
createApp(App).use(store).use(router).use(MotionPlugin).mount('#app')
