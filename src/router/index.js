import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Signin from '../views/Signin.vue'
import Signup from '../views/Signup.vue'

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
            path : '/Signin',
            component: Signin, 
            name : 'signin'
        },
        {
            path : '/Signup',
            component: Signup, 
            name : 'signup'
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