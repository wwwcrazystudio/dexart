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

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'


gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

gsap.config({
    force3D: true,
})


</script>

<template>
    <main class="frontpage">
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
    </main>
</template>

<style lang="scss" scoped>
.frontpage {
    position: relative;
    overflow: hidden;

    &__section {
        overflow: hidden;
    }
}
</style>
