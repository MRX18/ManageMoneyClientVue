// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/global.css'
import './css/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// scripts
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(router).mount('#app')
