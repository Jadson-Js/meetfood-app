// IMPORTS TO THE APP
import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css" // IMPORTANDO O BOOTSTRAP
import "bootstrap/dist/js/bootstrap.min.js"
import router from './router/router' // IMPORTANDO O ROUTER
import store from './store/store' // IMPORTANDO O STORE

// START THE APP
createApp(App)
.use(router)
.use(store)
.mount('#app')
