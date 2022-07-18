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
</script>

<template>
    <main class="frontpage">
        <Hero class="frontpage__hero" />
        <About class="frontpage__about" />
        <Promo class="frontpage__promo" />
        <Services class="frontpage__services" />
        <World class="frontpage__world" />
        <Backstory class="frontpage__backstory" />
        <Advantages class="frontpage__advantages" />
        <Roadmap class="frontpage__roadmap" />
        <Expertise class="frontpage__expertise" />
        <Partners class="frontpage__partners" />
        <Press class="frontpage__partners" />
    </main>
</template>
