import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* Dependencies */
/*
import JQuery from 'jquery'
window.$ = JQuery
console.log($("#app"))
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/js/active.js'
import './assets/js/plugins/plugins.min.js'
*/

import AOS from 'aos'
import 'aos/dist/aos.css'
import AnimateCSS from 'animate.css';





const app = createApp(App);
app.use(router)
app.use(AOS.init())
app.mount('#app')

