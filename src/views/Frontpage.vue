<script setup lang="ts">
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Promo from '../components/sections/Promo.vue'
import Services from '../components/sections/Services.vue'
import World from '../components/sections/World.vue'
import Backstory from '../components/sections/Backstory.vue'
import Advantages from '../components/sections/Advantages.vue'
import Roadmap from '../components/sections/Roadmap.vue'
import Expertise from '../components/sections/Expertise.vue'
import Partners from '../components/sections/Partners.vue'
import Press from '../components/sections/Press.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { loadFull } from 'tsparticles'
import { onMounted, ref } from 'vue'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isScrollable = ref<boolean>(true)

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
</script>

<template>
    <main class="frontpage">
        <Header />
        <!--         <Particles
            id="tsparticles"
            class="frontpage__bg"
            :particlesInit="particlesInit"
            :options="options"
        /> -->
        <div class="frontpage__content">
            <Hero class="frontpage__hero section" />
            <About class="frontpage__about section" />
            <Promo class="frontpage__promo section" />
            <Services class="frontpage__services section" />
            <World class="frontpage__world section" />
            <Backstory class="frontpage__backstory section" />
            <Advantages class="frontpage__advantages section" />
            <div class="frontpage__section">
                <Roadmap class="frontpage__roadmap section" />
                <Expertise class="frontpage__expertise section" />
            </div>
            <Partners class="frontpage__partners" />
            <Press class="frontpage__partners section" />
            <Footer />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.frontpage {
    position: relative;
    overflow: hidden;
    &__bg {
        position: absolute;
        z-index: 1;
        height: 100%;
        top: 0;
        bottom: 0;
        pointer-events: none;
    }

    &__section {
        overflow: hidden;
    }
}
</style>
