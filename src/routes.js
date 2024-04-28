import {createRouter, createWebHashHistory } from 'vue-router'
import Topbar from './Components/Topbar'
import Home from './Pages/Home';
import Project from './Pages/Project.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            redirect: 'Home', 
            component: Topbar,
            children: [
                { path: 'Home', component: Home },
                { path: 'project', component: Project}
            ]
        }
    ]
});

export default router;