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

onMounted(() => {
    const sections = gsap.utils.toArray('.section')
    let scrollTween: any
    const goToSection = (i: any) => {
        scrollTween = gsap.to(window, {
            scrollTo: { y: i * innerHeight, autoKill: false },
            duration: 1.5,
            onComplete: () => {
                scrollTween = null
                console.log('complete')
            },
            overwrite: true,
        })
    }

    sections.forEach((section: any, i: any) => {
        ScrollTrigger.create({
            trigger: section,
            start: 'top bottom',
            end: '+=200%',
            onToggle: (self) => {
                const viewportHeight = window.innerHeight
                const sectionHeight = section.offsetHeight
                self.isActive && !scrollTween && goToSection(i)
            },
        })
    })

    /*   document.addEventListener('wheel', handleScroll) */
})
</script>

<style>
.section {
    height: 100vh;
}
</style>
