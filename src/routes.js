import {createRouter, createWebHistory } from 'vue-router'
import Home from './Pages/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {  
            path: '', 
            redirect: '/home', 
            children: [
                { path: '/home', component: Home }
            ]
        } 
    ]
});

router.beforeEach((to, from, next) => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    next();
  });

export default router;