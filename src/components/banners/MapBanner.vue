<template>
    <div class="map-banner" ref="banner">
        <div class="map-banner__wrap">
            <div class="map-banner__scene" ref="scene">
                <div class="map-banner__star map-banner__star--1" data-depth="0.2">
                    <img src="@/assets/icons/star.svg" alt="" ref="star1" />
                </div>
                <div class="map-banner__star map-banner__star--2" data-depth="0.2">
                    <img src="@/assets/icons/star.svg" ref="star2" />
                </div>
            </div>
            <div class="map-banner__heading" v-html="t('heading')">

            </div>

            <div class="map-banner__content">
                <div class="map-banner__text" v-html="t('text')">
                </div>

                <a rel="nofollow" target="_blank" href="https://map.dex.art/" class="map-banner__btn">{{ t('btn') }}</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import Parallax from 'parallax-js'
import { useMedia } from '@/composables/useMedia'
import { useI18n } from 'vue-i18n'

gsap.config({
    force3D: true,
})

const { isMobile } = useMedia()

const { hide } = useAnimation()

const star1 = ref<HTMLElement>()
const star2 = ref<HTMLElement>()
const banner = ref<HTMLElement>()
const scene = ref<HTMLElement>()
const parallaxInstance = ref<any>()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'Find a place <span>for your business</span> in DEXART',
            text: 'Take a look at the interactive map and buy you first virtual real estate',
            btn: 'See the map',
        },
        ru: {
            heading: 'Найдите место <span>для своего бизнеса</span> в DEXART.',
            text: 'Исследуйте интерактивную карту мира, чтобы выбрать идеальное расположение своей виртуальной недвижимости',
            btn: 'Посмотреть карту',
        }
    }
})

onMounted(() => {
    if (!isMobile()) {
        star1.value && hide(star1.value)
        star2.value && hide(star2.value)



        const enterCallback = () => {
            if (scene.value && !parallaxInstance.value) {
                parallaxInstance.value = new Parallax(scene.value, {
                    scalarX: 6,
                    scalarY: 6,
                })
            }

            parallaxInstance.value && parallaxInstance.value.enable()

            star1.value &&
                gsap.fromTo(
                    star1.value,
                    {
                        translateX: 40,
                        translateY: 60,
                        rotate: 10,
                        duration: 1,
                        opacity: 0,
                    },
                    {
                        translateX: 0,
                        translateY: 0,
                        rotate: 0,
                        duration: 1,
                        opacity: 1,
                        delay: 0.5,
                    }
                )

            star2.value &&
                gsap.fromTo(
                    star2.value,
                    {
                        translateX: -20,
                        translateY: 80,
                        rotate: -15,
                        duration: 1,
                        opacity: 0,
                    },
                    {
                        translateX: 0,
                        translateY: 0,
                        rotate: 18,
                        duration: 1,
                        opacity: 1,
                        delay: 0.5,
                    }
                )
        }

        const leaveCallback = () => {
            parallaxInstance.value && parallaxInstance.value.disable()
            star1.value &&
                gsap.to(star1.value, {
                    translateX: 40,
                    translateY: 60,
                    rotate: 10,
                    duration: 1,
                    opacity: 0,
                })

            star2.value &&
                gsap.to(star2.value, {
                    translateX: -20,
                    translateY: 80,
                    rotate: -15,
                    duration: 1,
                    opacity: 0,
                })
        }

        if (banner.value)
            ScrollTrigger.create({
                trigger: banner.value,
                start: 'top bottom',
                end: 'top top',
                onEnter: () => enterCallback(),
                onEnterBack: () => enterCallback(),
                onLeave: () => leaveCallback(),
                onLeaveBack: () => leaveCallback(),
            })
    }
})
</script>

<style lang="scss">
.map-banner {
    &__wrap {
        background: #6a1dac;
        border-radius: 48px;
        padding: rem(48px);
        padding-right: rem(88px);
        display: flex;
        justify-content: space-between;
        position: relative;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }

        @include media-breakpoint-down(sm) {
            padding: rem(32px);
            margin: rem(0 -16px);
        }
    }

    &__scene {
        position: absolute !important;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    &__star {
        position: absolute !important;
        transform: translateZ(0);
        will-change: transform;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        &--1 {
            width: 92px;
            height: 162px;
            background-size: contain;
            left: unset !important;
            right: -30px !important;
            top: -40px !important;
            /*  filter: drop-shadow(20px 0px 20px #752cc5); */

            @include media-breakpoint-down(lg) {
                top: -100px !important;
                right: 0px !important;
                transform: translateZ(0) rotate(15deg);
                width: 85px;
                height: 155px;
                filter: none;
            }
        }

        &--2 {
            width: 122px;
            height: 215px;
            top: unset !important;
            right: 0 !important;
            left: -290px !important;
            margin: auto;
            bottom: -80px !important;
            /*   filter: drop-shadow(15px 10px 15px #752cc5); */

            @include media-breakpoint-down(lg) {
                right: -10px !important;
                transform: translateZ(0) rotate(-15deg);
                width: 75px;
                height: 135px;
                left: unset !important;
                bottom: -105px !important;
                filter: none;
            }
        }
    }

    &__content {
        max-width: 470px;
        width: 70%;

        @include media-breakpoint-down(md) {
            width: 100%;
        }
    }

    &__heading {
        @include h2;

        color: #fff;
        max-width: 440px;
        font-size: rem(42px);

        @include media-breakpoint-down(md) {
            font-size: rem(38px);
            font-weight: 700;
            margin-bottom: rem(16px);
        }

        @media (max-width: 500px) {
            font-size: rem(26px);
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

        font-size: rem(26px);

        color: #faf5ff;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);
        width: fit-content;

        @include media-breakpoint-down(sm) {
            margin-top: rem(64px);
            width: 100%;
        }
    }
}
</style>
