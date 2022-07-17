<script setup lang="ts">
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <Header />

    <RouterView />

    <Footer />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap');
@import 'bootstrap/scss/reboot';
@import 'bootstrap/scss/containers';
@import 'bootstrap/scss/grid';
@import '@/assets/scss/main';
@import '@/assets/scss/reset';
@import '@/assets/scss/typography';
@import '@/assets/scss/fonts';
/* @import '~/assets/scss/base/base';
; */
</style>
