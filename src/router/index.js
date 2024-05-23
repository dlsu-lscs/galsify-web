import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/login',
            redirect: {
                name: 'Login'
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterView
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: DashboardView
        }
    ]
})

export default router
