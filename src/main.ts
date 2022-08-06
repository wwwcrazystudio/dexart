import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import 'vue-fullpage.js/dist/style.css'
import Particles from 'particles.vue3'

const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en', // set locale
    fallbackLocale: 'ru', // set fallback locale  
  })

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(Particles)

app.mount('#app')
