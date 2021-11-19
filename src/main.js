import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* Dependencies */
import $ from 'jquery'
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/js/bootstrap.min.js'
//import 'bootstrap/dist/js/bootstrap.min.js'

import AOS from 'aos'
import 'aos/dist/aos.css'
import AnimateCSS from 'animate.css';


const app = createApp(App);
app.use(router)
app.use(AOS.init())
app.mount('#app')

