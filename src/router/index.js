import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ManageEventsView from '@/views/ManageEventsView.vue'
import ManageOrganizationsView from '@/views/ManageOrganizationsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginView,
            beforeEnter: (to, from, next) => {
                const credentials = window.$cookies.get('credentials')
                if (credentials && credentials.user_id) next({ name: 'Manage Events' })
                else next()
            }
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
            component: RegisterView,
            beforeEnter: (to, from, next) => {
                const credentials = window.$cookies.get('credentials')
                if (credentials && credentials.user_id) next({ name: 'Manage Events' })
                else next()
            }
        },
        {
            path: '/events',
            name: 'Manage Events',
            component: ManageEventsView,
            beforeEnter: (to, from, next) => {
                const credentials = window.$cookies.get('credentials')
                if (!credentials || !credentials.user_id) next({ name: 'Login' })
                else next()
            }
        },
        {
            path: '/organizations',
            name: 'Manage Organizations',
            component: ManageOrganizationsView,
            beforeEnter: (to, from, next) => {
                const credentials = window.$cookies.get('credentials')
                if (!credentials || !credentials.user_id) next({ name: 'Login' })
                else next()
            }
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
