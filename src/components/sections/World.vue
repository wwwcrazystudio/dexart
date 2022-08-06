<template>
    <section class="world" ref="section">
        <div class="world__wrap">
            <div class="container">
                <div class="world__content">
                    <h2 class="world__heading" ref="heading" v-html="t('heading')">

                    </h2>

                    <div class="world__text-wrap" ref="text">
                        <div class="world__text" v-for="(step, key) in steps" :key="key" v-html="step" ref="stepItems">
                        </div>
                    </div>

                    <div class="world__map" ref="map">
                        <picture class="world__map-img" :style="mapPosition">
                            <img src="@/assets/map.jpg" alt="" />
                            <source srcset="@/assets/map.webp" type="image/webp" />
                        </picture>
                    </div>
                    <!--    <div class="world__controls">
                        <button
                            class="world__control"
                            @click="currentStep >= 1 && currentStep--"
                        >
                            <svg
                                width="13"
                                height="18"
                                viewBox="0 0 13 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.18761 8.17781L11.4308 1.08638C12.094 0.627216 13 1.10191 13 1.90857V16.0914C13 16.8981 12.094 17.3728 11.4308 16.9136L1.18761 9.82219C0.613224 9.42454 0.613223 8.57546 1.18761 8.17781Z"
                                    fill="#E9D4FF"
                                />
                            </svg>
                        </button>
                        <button
                            class="world__control"
                            @click="currentStep < 4 && currentStep++"
                        >
                            <svg
                                width="13"
                                height="18"
                                viewBox="0 0 13 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.8124 8.17781L1.56921 1.08638C0.905979 0.627216 0 1.10191 0 1.90857V16.0914C0 16.8981 0.905977 17.3728 1.56921 16.9136L11.8124 9.82219C12.3868 9.42454 12.3868 8.57546 11.8124 8.17781Z"
                                    fill="#E9D4FF"
                                />
                            </svg>
                        </button>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n';
import { useMedia } from '@/composables/useMedia'

gsap.config({
    force3D: true,
})

const { enter, leave, hide } = useAnimation()
const { isMobile } = useMedia()

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'World <span>DEXART</span>',
        },
        ru: {
            heading: 'Мир <span>DEXART</span>',
        }
    }
})

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const map = ref<HTMLElement>()
const currentStep = ref<number>(1)
const stepItems = ref<HTMLElement[]>()

const steps = computed(() => {

    if (locale.value === 'ru') {
        return [
            `<p> DEXART состоит из регионов, которые присоединяются к первому и главному району - центру мира... Каждый регион полон уникальных возможностей и персонажей, которые вовлекают пользователей в игровые механики.</p>`,
            `<p> The center of the world is the DEXART Portal. To the west of it lie flat lands, built up with cities. They go to the only DEXART sea in the world. </p> <p> To the north of the DEXART Portal lie mountainous regions, where unusual settlements and cities soar above the mountains. </p> <p> To the east of the DEXART Portal lies a huge forest, beyond which lie urban areas discovered by pioneers in search of new land for the development of business and technology companies. </p>`,
            `<p> New urban areas are a mixture of futuristic living spaces and entertainment centers. There is a lot of unusual real estate and opportunities for creating leisure centers, interactive arcades, etc. </p> <p> South of the DEXART Portal is the Great Desert. These are several regions united by an arid climate and a diverse desert landscape (from sandy desert to rocky and salty). </p>`,
            `<p> In the middle of the Great Desert lies the Oasis of the Way. </p> <p> This is the spiritual center of DEXART - here are the temples of all possible religions. </p>`,
        ]
    }

    return [
        `<p> DEXART consists of regions surrounding the main district in the center. Each region is divided into districts and has its own unique landscape, topography and urbanization. </p> <p> Each region is full of different possibilities and is inhabited by various characters, who engage the users into game interactions </p>`,
        `<p> The center of the world is the DEXART Portal. To the west of it lie flat lands, built up with cities. They go to the only DEXART sea in the world. </p> <p> To the north of the DEXART Portal lie mountainous regions, where unusual settlements and cities soar above the mountains. </p> <p> To the east of the DEXART Portal lies a huge forest, beyond which lie urban areas discovered by pioneers in search of new land for the development of business and technology companies. </p>`,
        `<p> New urban areas are a mixture of futuristic living spaces and entertainment centers. There is a lot of unusual real estate and opportunities for creating leisure centers, interactive arcades, etc. </p> <p> South of the DEXART Portal is the Great Desert. These are several regions united by an arid climate and a diverse desert landscape (from sandy desert to rocky and salty). </p>`,
        `<p> In the middle of the Great Desert lies the Oasis of the Way. </p> <p> This is the spiritual center of DEXART - here are the temples of all possible religions. </p>`,
    ]
})

onMounted(() => {
    if (!isMobile()) {
        map.value && hide(map.value)

        if (section.value)
            ScrollTrigger.create({
                trigger: section.value,
                start: 'top top',
                end: 'bottom bottom',
                pin: map.value,
            })

        ScrollTrigger.create({
            trigger: section.value,
            start: 'top 70%',
            end: 'bottom bottom',
            onEnter: () => {
                currentStep.value = 0
                map.value &&
                    gsap.to(map.value, {
                        opacity: 1,
                        duration: 1,
                    })
            },
            onEnterBack: () => {
                currentStep.value = 0
                map.value &&
                    gsap.to(map.value, {
                        opacity: 1,
                        duration: 1,
                    })
            },
            onLeave: () => {
                map.value &&
                    gsap.to(map.value, {
                        opacity: 0,
                        duration: 1,
                    })
            },
            onLeaveBack: () => {
                map.value &&
                    gsap.to(map.value, {
                        opacity: 0,
                        duration: 1,
                    })
            },
        })

        stepItems.value?.forEach((element, key) => {
            ScrollTrigger.create({
                trigger: element,
                start: 'top 70%',
                end: 'top 120px',
                onEnter: () => {
                    currentStep.value = key + 1
                    gsap.to(element, {
                        opacity: 1,
                        duration: 1,
                    })
                },
                onEnterBack: () => {
                    currentStep.value = key + 1
                    gsap.to(element, {
                        opacity: 1,
                        duration: 1,
                    })
                },
                onLeave: () => {
                    gsap.to(element, {
                        opacity: 0,
                        duration: 1,
                    })
                },
                onLeaveBack: () => {
                    gsap.to(element, {
                        opacity: 0,
                        duration: 1,
                    })
                },
            })
        })
    }
})

const mapPosition = computed(() => {
    switch (currentStep.value) {
        case 1:
            return {
                transform: 'scale3d(1.5, 1.5, 1.5) translate3d(560px, 0, 0)',
            }
        case 2:
            return {
                transform: 'scale3d(2.2, 2.2, 2.2) translate3d(210px, 30px, 0)',
            }
        case 3:
            return {
                transform: 'scale3d(1.6, 1.6, 1.6) translate3d(-100px, -50px, 0)',
            }
        case 4:
            return {
                transform: 'scale3d(1.3, 1.3, 1.3) translate3d(390px, -20px, 0)',
            }
        default:
            return {
                transform: 'scale3d(1 ,1, 1) translate3d(560px, 0, 0)',
            }
    }
})
</script>

<style lang="scss">
.world {
    overflow: hidden;

    &__wrap {
        min-height: 100vh;
        position: relative;
        padding: rem(80px 0);

        display: grid;
        overflow: hidden;
        z-index: 10;
        background: #1c0b2b;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            background-image: linear-gradient(90deg,
                    #1c0b2b 30%,
                    transparent 100%);
            width: 100%;
            height: 100%;

            @include media-breakpoint-down(lg) {
                background-image: linear-gradient(90deg,
                        #1c0b2b 50%,
                        transparent 100%);
            }
        }

        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            background-image: linear-gradient(178deg, #1c0b2b 30%, transparent 35%);
            width: 100%;
            height: 100%;

            @include media-breakpoint-down(xl) {
                content: none;
            }
        }

        @include media-breakpoint-down(md) {
            padding: rem(64px 0);
            background: linear-gradient(132deg, #1c0b2b 40%, transparent 100%);
        }

        @include media-breakpoint-down(sm) {
            padding: rem(32px 0);
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(32px);
        position: relative;
        z-index: 10;

        span {
            display: block;
            width: fit-content;
            background: -webkit-linear-gradient(0deg,
                    #bf81ff 1.88%,
                    #d17558 98.37%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__text {
        @include p_type_1;

        color: #faf5ff;
        max-width: 595px;
        min-height: calc(100vh - 220px);
        transform: translateZ(0);

        @include media-breakpoint-down(sm) {
            min-height: 0;
        }

        &:nth-of-type(n + 2) {
            opacity: 0;

            @include media-breakpoint-down(sm) {
                opacity: 1;
            }
        }
    }

    &__text-wrap {
        position: relative;
        z-index: 10;
        transform: translateZ(0);
    }

    &__map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        will-change: transform;
        transform: translateZ(0);
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-perspective: 1000;
        -webkit-backface-visibility: hidden;


        &::after {
            content: '';
            background: url('@/assets/blurs/promoBlur.png');
            position: absolute;
            background-size: contain;
            right: 10vw;
            bottom: 0;
            top: 0;
            margin: auto;
            width: 700px;
            height: 700px;

            @include media-breakpoint-down(md) {
                right: 0;
                opacity: 0.5;
                background-repeat: no-repeat;
                background-position: 30%;
                width: 100%;
                height: 100%;
            }
        }

        @include media-breakpoint-down(lg) {
            height: auto;
            left: 0;
            width: 100%;
            height: 100%;
        }

        @include media-breakpoint-down(sm) {
            display: none;
        }

        img,
        picture {
            width: 100%;
            transition: 1000ms;
            transition-delay: 200ms;
            transform: translateZ(0);
            will-change: transform;
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-perspective: 1000;
            -webkit-backface-visibility: hidden;
            display: block;
            height: 100vh;
            object-fit: contain;

            @include media-breakpoint-down(lg) {
                position: relative;
                left: -50px;
            }

            @include media-breakpoint-down(lg) {
                left: -120px;
                width: 130%;
            }
        }
    }

    &__controls {
        align-items: center;
        margin-top: auto;
        display: none;

        @include media-breakpoint-down(sm) {
            display: flex;
        }
    }

    &__control {
        position: relative;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: 350ms;
        margin-right: rem(8px);

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 2px;
            border-radius: 8px;
            z-index: -1;
            background: linear-gradient(90deg,
                    #7c1dd3 2.02%,
                    #912eef 49.93%,
                    #ee40ff 96.86%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: 350ms;
        }

        &::after {
            content: '';
            position: absolute;
            background: linear-gradient(90deg,
                    #7c1dd3 2.02%,
                    #912eef 49.93%,
                    #ee40ff 96.86%);
            background-repeat: no-repeat;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            top: 1px;
            left: 1px;
            margin: auto;
            opacity: 0;
            transition: 350ms;
            z-index: -1;
            border-radius: 8px;
        }

        &:hover {
            &::after {
                opacity: 1;
                transition: 350ms;
            }
        }

        &:active {
            will-change: transform;
            transform: translateZ(0) scale(0.85);
            transition: 350ms;
        }
    }
}
</style>
