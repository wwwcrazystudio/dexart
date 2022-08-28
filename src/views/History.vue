<template>
    <main class="history-page">
        <History class="history-page__history" />
        <Geography class="history-page__history" />
    </main>
</template>

<script setup lang="ts">
import History from '../components/sections/History.vue';
import Geography from '../components/sections/Geography.vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

gsap.config({
    force3D: true,
})

</script>