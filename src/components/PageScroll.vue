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
import { is } from 'dom7'

export interface SectionData {
    index: number
    offset: number
    el: HTMLElement
}

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const isScrolling = ref<boolean>(false)

onMounted(() => {
    const sections = gsap.utils.toArray('.section')
    let scrollTween: any
    const goToSection = (i: any) => {
        scrollTween = gsap.to(window, {
            scrollTo: { y: i * innerHeight, autoKill: false },
            duration: 1.5,
            onComplete: () => {
                scrollTween = null
                setTimeout(() => {
                    isScrolling.value = false
                }, 600)
            },
            overwrite: true,
        })
    }

    sections.forEach((section: any, i: any) => {
   /*      gsap.set(section, {
            height: window.innerHeight,
        }) */
        ScrollTrigger.create({
            trigger: section,
            start: 'top bottom',
            end: '+=200%',
            onToggle: ({ isActive }) => {
                isScrolling.value = true
                isActive && !scrollTween && goToSection(i)
            },
        })
    })

    const preventDefault = (e: Event) => {
        if (isScrolling.value) {
            if (e.cancelable) e.preventDefault()
        }
    }

    document.addEventListener('wheel', preventDefault, {
        passive: false,
    })

    document.addEventListener('touchstart', preventDefault, {
        passive: false,
    })

    document.addEventListener('touchend', preventDefault, {
        passive: false,
    })

    /*   document.addEventListener('wheel', handleScroll) */
})
</script>

<style lang="scss">
.section {
    height: 100vh;
/*     height: -webkit-fill-available; */
}
</style>
