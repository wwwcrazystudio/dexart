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
                DEXART состоит из регионов, которые присоединяются к первому и главному району - центру мира... </br>
                Каждый регион полон уникальных возможностей и персонажей, которые вовлекают пользователей в игровые механики.
            </p>`,
            `<p>
                В центре мира – портал DEXART. К западу от него лежат равнины, застроенные городами, открытые первопроходцами в поисках новых возможностей для развития бизнеса и технологических компаний. Они заканчиваются у единственного в мире моря DEXART.
            </p>
            <p>
                К востоку от портала DEXART расположились горные районы, где в вышине парят необычные поселения и города.
            </p> 
            <p>
                К северу от портала DEXART лежит огромный лес, а за ним лежат городские районы.
            </p>`,
            `<p>
                Новые городские районы представляют собой жилую застройку будущего и развлекательные центры. Здесь много необычной недвижимости и возможностей для создания центров развлечений, игровых зон...
            </p>
            <p>
                К югу от портала DEXART находится Великая пустыня. Это несколько регионов, объединенных засушливым климатом и разнообразным пустынным ландшафтом.
            </p>`,
            `<p>
                Посреди Великой Пустыни находится Оазис Пути
            </p>
            <p>
                Это духовный центр DEXART – здесь находятся храмы всех возможных религий.
            </p>`,
        ]
    }

    return [
        `<p>
            DEXART consists of regions surrounding the main district in the center. Each region is divided into districts and has its own unique landscape, topography and urbanization. </br>
            Each region is full of different possibilities and is inhabited by various characters, who engage the users into game interactions. 
        </p>`,
        `<p>
            The center of the world is the DEXART Portal. To the west of it lie flat lands, built up with cities. They go to the only DEXART sea in the world.
        </p>
        <p>
            To the north of the DEXART Portal lie mountainous regions, where unusual settlements and cities soar above the mountains.
        </p> 
        <p>
            To the east of the DEXART Portal lies a huge forest, beyond which lie urban areas discovered by pioneers in search of new land for the development of business and technology companies.
        </p>`,
        `<p>
            New urban areas are a mixture of futuristic living spaces and entertainment centers. There is a lot of unusual real estate and opportunities for creating leisure centers, interactive arcades, etc.
        </p> 
        <p>
            South of the DEXART Portal is the Great Desert. These are several regions united by an arid climate and a diverse desert landscape (from sandy desert to rocky and salty).
        </p>`,
        `<p>
            In the middle of the Great Desert lies the Oasis of the Way.
        </p>
        <p>
            This is the spiritual center of DEXART - here are the temples of all possible religions.
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
                start: 'top top',
                end: 'bottom bottom',
                pin: heading.value,
            })
        }
    }

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

        /*   &::after {
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
 */
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
            width: 43vw;
            height: 34vh;
            z-index: -1;
            filter: blur(30px);

            @media (max-width: 1600px) {
                width: 50vw;
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
        width: 35vw;
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
