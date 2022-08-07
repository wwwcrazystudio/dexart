<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useMedia } from '@/composables/useMedia'
import { loadFull } from 'tsparticles'
import { useI18n } from 'vue-i18n'
import { onMounted, watch } from 'vue'

const { isMobile } = useMedia()
const { locale } = useI18n()

const particlesInit = async (engine: any) => {
    await loadFull(engine)
}

const isLaptop = () => {
    return window.matchMedia('(max-width: 1600px)').matches
}

const options = {
    fpsLimit: 60,
    fullScreen: {
        enable: false,
        zIndex: 10,
    },

    particles: {
        color: {
            value: '#ffffff',
        },
        collisions: {
            enable: true,
        },
        number: {
            value: isLaptop() ? 50 : 150,
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
            },
        },
        shape: {
            type: 'circle',
        },
        size: {
            value: { min: 1, max: 2 },
        },
    },
    detectRetina: true,
}

watch(() => locale.value, () => {
    localStorage.setItem('lang', locale.value)
})

onMounted(() => {
    const langInStorage = localStorage.getItem('lang')
    const browserLang = navigator.language.split('-')[0]

    if (langInStorage) {
        locale.value = langInStorage
        return
    }

    locale.value = browserLang


})

</script>

<template>
    <div class="relative">
        <Header />
        <Particles v-if="!isMobile()" id="tsparticles" class="app__stars" :particlesInit="particlesInit"
            :options="options" />
        <RouterView />
        <Footer />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
@import 'bootstrap/scss/maps';
@import 'bootstrap/scss/reboot';
@import 'bootstrap/scss/containers';
@import 'bootstrap/scss/grid';
@import '@/assets/scss/main';
@import '@/assets/scss/reset';
@import '@/assets/scss/typography';
@import '@/assets/scss/fonts';

.relative {
    position: relative;
}

.app__stars {
    position: absolute;
    z-index: 10;
    height: 100%;
    top: 0;
    bottom: 0;
    pointer-events: none;
}
</style>
