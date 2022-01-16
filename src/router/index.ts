import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard.vue')
    },
    {
        path: '/helloWorld',
        name: 'HelloWorld',
        component: () => import('../views/HelloWorld.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})