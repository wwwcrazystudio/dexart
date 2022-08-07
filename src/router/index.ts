import { createRouter, createWebHistory } from 'vue-router'
import Frontpage from '../views/Frontpage.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'frontpage',
            component: Frontpage,
        },
        { path: '/404', component: NotFound },  
        { path: '/:pathMatch(.*)*', component: NotFound }
    ],
    
})

export default router
