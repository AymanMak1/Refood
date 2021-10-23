import Home from '../views/Home.vue'
import About from '../views/About.vue'

import {
    createWebHistory,
    createRouter
   } from "vue-router";
const history = createWebHistory();


const routes = [
        {
            path : '/',
            component: Home, 
            name : 'home'
        },
        {
            path : '/About',
            component: About, 
            name : 'about'
        },
]


const router = createRouter({
    history: createWebHistory(),
    routes
  });
  export default router;