import { createRouter, createWebHistory } from 'vue-router'
import Frontpage from '../views/Frontpage.vue'
import History from '../views/History.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'frontpage',
            component: Frontpage,
        },
        { path: '/history', component: History, name: 'history' },  
        { path: '/404', component: NotFound,  name: '404' },  
        { path: '/:pathMatch(.*)*', component: NotFound }
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
