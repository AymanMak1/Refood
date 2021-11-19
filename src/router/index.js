import Home from '../views/Home.vue'
import Features from '../components/Features.vue'   
import NotFound404 from '../views/NotFound404.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Checkout from '../views/Checkout.vue'

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
            path : '/Features',
            component: Features, 
            name : 'features'
        },
        {
            path : '/Login',
            component: Login, 
            name : 'signin'
        },
        {
            path : '/Signup',
            component: Signup, 
            name : 'signup'
        },
        {
            path : '/Checkout',
            component: Checkout, 
            name : 'checkout'
        },
        {
            path: "/:catchAll(.*)",
            component: NotFound404,
          }
]


const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;