<template>
    <div class="wrap">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
/* import { debounce } from 'debounce'
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export interface SectionData {
    index: number
    offset: number
    el: HTMLElement
}

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const sectionsArray: Array<SectionData> = []
const currentIndex = ref<number>(0)

onMounted(() => {
    const sections = gsap.utils.toArray('.section')
    let scrollTween: any
    const goToSection = (i: any) => {
        /*  gsap.set('body', { overflow: 'hidden', height: window.innerHeight }) */

        console.log(innerHeight)
        scrollTween = gsap.to(window, {
            scrollTo: { y: i * innerHeight, autoKill: false },
            duration: 1,
            onComplete: () => (scrollTween = null),
            overwrite: true,
        })
    }

    sections.forEach((panel: any, i: any) => {
        ScrollTrigger.create({
            trigger: panel,
            start: 'top bottom',
            end: '+=200%',
            onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
        })
    })

    /*   document.addEventListener('wheel', handleScroll) */
})
</script>

<style>
.section {
    height: 100vh;
    position: sticky;
    top: 0;
}
</style>
