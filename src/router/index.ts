import { createRouter, createWebHistory } from 'vue-router'
import Frontpage from '../views/Frontpage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'frontpage',
            component: Frontpage,
        },
        { 
            path: '/history', 
            component: () => import('../views/History.vue'),  
            name: 'history' 
        },  
        { 
            path: '/404',
            component: () => import('../views/NotFound.vue'),  
            name: '404'
        },  
        {
            path: '/:pathMatch(.*)*', 
            component: () => import('../views/NotFound.vue'),  
        }
    ],

    scrollBehavior (to, from, savedPosition) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
          });
      }
    
})

export default router
