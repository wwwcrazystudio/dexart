<script setup lang="ts">
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Promo from '../components/sections/Promo.vue'
import Services from '../components/sections/Services.vue'
import World from '../components/sections/World.vue'
</script>

<template>
    <main class="frontpage">
        <Hero class="frontpage__hero" />
        <About class="frontpage__about" />
        <Promo class="frontpage__promo" />
        <Services class="frontpage__services" />
        <World class="frontpage__world" />
    </main>
</template>
