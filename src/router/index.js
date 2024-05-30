import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ManageEventsView from '@/views/ManageEventsView.vue'
import ManageMembersView from '@/views/ManageMembersView.vue'

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
            path: '/events',
            name: 'Manage Events',
            component: ManageEventsView
        },
        {
            path: '/members',
            name: 'Manage Members',
            component: ManageMembersView
        },
        {
            path: '/dashboard',
            redirect: {
                name: 'Manage Events'
            }
        }
    ]
})

export default router
