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
                            <img src="@/assets/map.png" alt="" />
                            <source srcset="@/assets/map.webp" type="image/webp" />
                        </picture>
                    </div>
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
const { isMobile, isLargeTablet } = useMedia()

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
            `<p>
                DEXART состоит из&nbsp;регионов, которые присоединяются к&nbsp;первому и&nbsp;главному району&nbsp;&mdash; центру мира... </br>
                Каждый регион полон уникальных возможностей и&nbsp;персонажей, которые вовлекают пользователей в&nbsp;игровые механики.
            </p>`,
            `<p>
                В&nbsp;центре мира&nbsp;&mdash; портал DEXART. К&nbsp;западу от&nbsp;него лежат равнины, застроенные городами, открытые первопроходцами в&nbsp;поисках новых возможностей для развития бизнеса и&nbsp;технологических компаний. Они заканчиваются у&nbsp;единственного в&nbsp;мире моря DEXART.
            </p>
            <p>
                К&nbsp;востоку от&nbsp;портала DEXART расположились горные районы, где в&nbsp;вышине парят необычные поселения и&nbsp;города.
            </p> 
            <p>
                К&nbsp;северу от&nbsp;портала DEXART лежит огромный лес, а&nbsp;за&nbsp;ним лежат городские районы.
            </p>`,
            `<p>
                Новые городские районы представляют собой жилую застройку будущего и&nbsp;развлекательные центры. Здесь много необычной недвижимости и&nbsp;возможностей для создания центров развлечений, игровых зон...
            </p>
            <p>
                К&nbsp;югу от&nbsp;портала DEXART находится Великая пустыня. Это несколько регионов, объединенных засушливым климатом и&nbsp;разнообразным пустынным ландшафтом.
            </p>`,
            `<p>
                Посреди Великой Пустыни находится Оазис Пути
            </p>
            <p>
                Это духовный центр DEXART&nbsp;&mdash; здесь находятся храмы всех возможных религий.
            </p>`,
        ]
    }

    return [
        `<p>
            DEXART consists of&nbsp;regions surrounding the main district in&nbsp;the center. Each region is&nbsp;divided into districts and has its own unique landscape, topography and urbanization. </br>
            Each region is&nbsp;full of&nbsp;different possibilities and is&nbsp;inhabited by&nbsp;various characters, who engage the users into game interactions.
        </p>`,
        `<p>
           The center of&nbsp;the world is&nbsp;the DEXART Portal. To&nbsp;the west of&nbsp;it&nbsp;lie flat lands, built up&nbsp;with cities. They go&nbsp;to&nbsp;the only DEXART sea in&nbsp;the world.
        </p>
        <p>
            To&nbsp;the north of&nbsp;the DEXART Portal lie mountainous regions, where unusual settlements and cities soar above the mountains.
        </p> 
        <p>
            To&nbsp;the east of&nbsp;the DEXART Portal lies a&nbsp;huge forest, beyond which lie urban areas discovered by&nbsp;pioneers in&nbsp;search of&nbsp;new land for the development of&nbsp;business and technology companies.
        </p>`,
        `<p>
           New urban areas are a&nbsp;mixture of&nbsp;futuristic living spaces and entertainment centers. There is&nbsp;a&nbsp;lot of&nbsp;unusual real estate and opportunities for creating leisure centers, interactive arcades, etc.
        </p> 
        <p>
            South of&nbsp;the DEXART Portal is&nbsp;the Great Desert. These are several regions united by&nbsp;an&nbsp;arid climate and a&nbsp;diverse desert landscape (from sandy desert to&nbsp;rocky and salty).
        </p>`,
        `<p>
            In&nbsp;the middle of&nbsp;the Great Desert lies the Oasis of&nbsp;the Way.
        </p>
        <p>
           This is&nbsp;the spiritual center of&nbsp;DEXART&nbsp;&mdash; here are the temples of&nbsp;all possible religions.
        </p>`,
    ]
})

onMounted(() => {
    if (!isMobile()) {
        map.value && hide(map.value)

        if (section.value) {

            ScrollTrigger.create({
                trigger: section.value,
                start: 'top 70%',
                end: 'bottom bottom',
                onEnter: () => {
                    map.value &&
                        gsap.to(map.value, {
                            opacity: 1,
                            duration: 0.5,
                        })
                },
                onEnterBack: () => {
                    map.value &&
                        gsap.to(map.value, {
                            opacity: 1,
                            duration: 0.5,
                        })
                },
                onLeave: () => {
                    map.value &&
                        gsap.to(map.value, {
                            opacity: 0,
                            duration: 0.5,
                        })
                },
                onLeaveBack: () => {
                    map.value &&
                        gsap.to(map.value, {
                            opacity: 0,
                            duration: 0.5,
                        })
                },
            })
        }
    }

    if (section.value) {

        ScrollTrigger.create({
            trigger: section.value,
            start: 'top top',
            end: 'bottom bottom',
            pin: map.value,
        })

        if (heading.value) {
            ScrollTrigger.create({
                trigger: section.value,
                start: 'top 20px',
                end: 'bottom bottom',
                pin: heading.value,
            })
        }
    }

    stepItems.value?.forEach((element, key) => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 70%',
            end: 'top 200px',
            onEnter: () => {
                currentStep.value = key + 1
                gsap.to(element, {
                    opacity: 1,
                    duration: 0.5,
                })
            },
            onEnterBack: () => {
                currentStep.value = key + 1
                gsap.to(element, {
                    opacity: 1,
                    duration: 0.5,
                })
            },
            onLeave: () => {
                gsap.to(element, {
                    opacity: 0,
                    duration: 0.5,
                })
            },
            onLeaveBack: () => {
                gsap.to(element, {
                    opacity: 0,
                    duration: 0.5,
                })
            },
        })
    })
})

const mapPosition = computed(() => {
    if (!isLargeTablet()) {
        switch (currentStep.value) {
            case 1:
                return {
                    transform: 'scale3d(1.3, 1.3, 1.3) translate3d(40vw, 150px, 0)',
                }
            case 2:
                return {
                    transform: 'scale3d(1.3, 1.3, 1.3) translate3d(20vw, 200px, 0)',
                }
            case 3:
                return {
                    transform: 'scale3d(1.3, 1.3, 1.3) translate3d(4vw, 250px, 0)',
                }
            case 4:
                return {
                    transform: 'scale3d(1.3, 1.3, 1.3) translate3d(5vw, -30px, 0)',
                }
            default:
                return {
                    transform: 'scale3d(1 ,1, 1) translate3d(560px, 0, 0)',
                }
        }
    }

    switch (currentStep.value) {
        case 1:
            return {
                transform: 'scale3d(2.5, 2.5, 2.5) translate3d(24vw, -160px, 0)',
            }
        case 2:
            return {
                transform: 'scale3d(3, 3, 3) translate3d(-3vw, -190px, 0px)',
            }
        case 3:
            return {
                transform: 'scale3d(3, 3, 3) translate3d(-15vw, -170px, 0)',
            }
        case 4:
            return {
                transform: 'scale3d(2, 2, 2) translate3d(-15vw, -170px, 0)',
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
        background: #1c0b2b;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            background-image: linear-gradient(90deg,
                    #1c0b2b 45%,
                    transparent 100%);
            width: 100%;
            height: 100%;
            z-index: 11;

            @include media-breakpoint-down(lg) {
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
        margin-top: rem(24px);
        margin-bottom: rem(84px);
        position: relative;
        z-index: 12;


        &::before {
            content: "";
            position: absolute;
            left: -10vw;
            top: -80px;
            background-image: linear-gradient(180deg, #1c0b2b 60%, transparent 80%);
            width: 35vw;
            height: 34vh;
            z-index: -1;
            /*      filter: blur(30px); */

            @media (max-width: 1600px) {
                width: 42vw;
                height: 38vh;
            }

            @include media-breakpoint-down(lg) {
                width: 100vw;
                height: 24vh;
            }

            @include media-breakpoint-down(sm) {
                height: 35vh;
            }
        }

        &::after {
            content: "";
            position: absolute;
            left: -10vw;
            top: -200px;
            background-image: linear-gradient(180deg, #1c0b2b 60%, transparent 80%);
            width: 35vw;
            height: 200px;
            z-index: -1;
            /*      filter: blur(30px); */

            @media (max-width: 1600px) {
                width: 42vw;
                height: 38vh;
            }

            @include media-breakpoint-down(lg) {
                width: 100vw;
                height: 24vh;
            }

            @include media-breakpoint-down(sm) {
                height: 35vh;
            }
        }



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
        width: 24vw;
        min-height: calc(100vh - 220px);
        transform: translateZ(0);
        font-size: rem(28px);

        @media (max-width: 1600px) {
            font-size: rem(24px);
        }

        @include media-breakpoint-down(lg) {
            width: auto;
        }

        @include media-breakpoint-down(sm) {
            font-size: rem(18px);
        }

        &:nth-of-type(n + 2) {
            opacity: 0;

            /*     @include media-breakpoint-down(sm) {
                opacity: 1;
            } */
        }
    }

    &__text-wrap {
        position: relative;
        z-index: 11;
        transform: translateZ(0);
    }

    &__map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
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

        &::before {
            content: none;
            width: 100%;
            top: 50vh;
            height: 50vh;
            background-image: linear-gradient(0deg,
                    #1c0b2b 0%,
                    transparent 100%);
            position: absolute;
            z-index: 1;

            @include media-breakpoint-down(lg) {
                content: '';
            }
        }


        /*        @include media-breakpoint-down(sm) {
            display: none;
        } */

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
                object-position: bottom;
            }

            @include media-breakpoint-down(sm) {
                position: static;
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
