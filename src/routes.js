import {createRouter, createWebHistory } from 'vue-router'
import Topbar from './Components/Topbar'
import Home from './Pages/Home';
import Project from './Pages/Project.vue'
import ProjectsOverview from './Pages/ProjectsOverview.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {  
            path: '', 
            redirect: '/Home', 
            component: Topbar,
            children: [
                { path: '/Home', component: Home },
                { path: '/projects', component: ProjectsOverview },
                { path: '/projects/:index', component: Project, props: true }
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