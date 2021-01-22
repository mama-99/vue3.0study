import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes
})

export default router;