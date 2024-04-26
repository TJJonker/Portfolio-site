import {createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home';
import ProjectPage from './ProjectPage';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: ProjectPage }
    ]
});

export default router;