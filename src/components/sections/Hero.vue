<template>
    <section class="hero" id="top">
        <div class="hero__wrap">
            <picture class="hero__bg">
                <img src="@/assets/bg/hero.jpg" alt="" />
                <source srcset="@/assets/bg/hero.webp" type="image/webp" />
            </picture>
            <div class="container">
                <h1 class="hero__heading" ref="heading" v-html="t('heading')">

                </h1>
                <div class="hero__text" ref="text" v-html="t('text')">
                </div>
            </div>

            <div ref="parallaxScene" class="hero__scene">
                <div data-depth="1" class="hero__mountain">
                    <img src="@/assets/elements/mountain.svg" alt="" />
                </div>
                <div data-depth="0.8" class="hero__star">
                    <img ref="star" src="@/assets/bg/heroStar.svg" />
                </div>
                <div data-depth="0.5" class="hero__stones">
                    <img src="@/assets/elements/heroStones.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Parallax from 'parallax-js'
import { useAnimation } from '@/composables/useAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMedia } from '@/composables/useMedia'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

const { isMobile } = useMedia()

const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const star = ref<HTMLElement>()
const parallaxScene = ref<HTMLElement>()
const parallaxInstance = ref<any>()

const { enter, leave } = useAnimation()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'Welcome <span>to DEXART</span>',
            text: 'A virtual world </br> with endless opportunities </br> for people and businesses.',
        },
        ru: {
            heading: 'Добро пожаловать <span>в DEXART</span>',
            text: 'Портал в&nbsp;виртуальный мир </br> с&nbsp;неограниченными возможностями </br> для людей и&nbsp;бизнеса.',
        }
    }
})

onMounted(() => {

    const enterCallback = () => {
        parallaxInstance.value.enable()
        heading.value && enter(heading.value)
        text.value && enter(text.value)
    }

    const leaveCallback = () => {
        heading.value && leave(heading.value)
        text.value && leave(text.value)
        parallaxInstance.value && parallaxInstance.value.disable()
    }

    heading.value && enter(heading.value)
    text.value && enter(text.value, 0.4)
    star.value && gsap.to(star.value, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
    })

    if (!isMobile()) {
        if (heading.value) {
            ScrollTrigger.create({
                trigger: heading.value,
                start: '-=100px',
                end: 'bottom center',
                onLeave: () => leaveCallback(),
                onEnterBack: () => enterCallback(),
            })
        }

        if (parallaxScene.value && !parallaxInstance.value) {
            parallaxInstance.value = new Parallax(parallaxScene.value, {
                scalarX: 7,
                scalarY: 4,
                frictionX: 0.075,
            })
        }
    }

})
</script>

<style lang="scss">
.hero {
    @include noise;
    position: relative;
    overflow: hidden;

    &__wrap {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(105.46% 242.16% at 104.05% -9.76%,
                #241830 0%,
                #3a1463 34.72%,
                #0c0316 67.57%);
        z-index: 10;
        overflow: hidden;

        @include media-breakpoint-down(md) {
            padding-top: 25vh;
            justify-content: flex-start;
            background-position: 70%;
        }
    }

    &__bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__heading {
        color: #fff;
        font-weight: 700;
        margin-bottom: rem(24px);
        position: relative;
        z-index: 10;
        width: fit-content;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(16px);
        }

        span {
            display: block;
            width: fit-content;
            background: -webkit-linear-gradient(0deg,
                    #bf81ff 1.88%,
                    #d17558 51.37%,
                    #f84fe7 97.86%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__text {
        @include p_type_2;

        color: rgba(#f3e7ff, 0.8);
        max-width: 520px;
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            font-size: rem(18px);
            letter-spacing: -0.005em;
            max-width: 70%;
        }
    }

    &__stones {
        position: absolute;
        left: 0;
        top: 0;

        z-index: 9;

        @include media-breakpoint-down(md) {
            width: 200%;
        }

        img {
            transform: translateZ(0);
            animation: rotate 180s linear infinite;
            width: 100%;
        }
    }

    &__star {
        position: absolute;
        top: unset !important;
        left: 1360px !important;
        bottom: calc(37% + 50px);
        /*  filter: drop-shadow(0px 0px 20px #752cc5)
            drop-shadow(0px 0px 60px #752cc5); */
        transform: translateZ(0);
        animation: pulsate 2s linear infinite alternate-reverse;
        z-index: 15;


        img {
            width: 8vw;
            opacity: 0;
        }


        @media (max-width: 1600px) {
            left: 1000px !important;
            bottom: calc(33% + 50px);
        }


        @include media-breakpoint-down(xl) {
            left: 800px !important;
        }


        @include media-breakpoint-down(lg) {
            left: unset !important;
            right: 18%;
            bottom: calc(21% + 50px);

            img {
                width: 100px;
            }
        }

        @include media-breakpoint-down(sm) {
            right: 2%;

            img {
                width: 100px;
            }
        }

    }

    &__mountain {
        position: absolute !important;
        left: -150px !important;
        right: 0;
        bottom: 0;
        z-index: 11;
        margin-top: auto;
        display: flex !important;
        align-items: flex-end;

        img {
            width: 200%;
            height: 360px;
            max-height: 50vh;
            object-position: left bottom;
            object-fit: contain;
        }


        @media (max-width: 1600px) {
            left: -180px !important;

            img {
                height: 280px;
            }
        }


        @include media-breakpoint-down(xl) {
            left: -430px !important;
        }

        @include media-breakpoint-down(lg) {

            img {
                max-height: 21vh;
                height: auto;
            }
        }

        @include media-breakpoint-down(sm) {
            left: -460px !important;

            img {
                width: 300%;
            }
        }
    }

    &__scene {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;

        &::after {
            content: '';
            background: linear-gradient(0deg,
                    #19082b 13.19%,
                    rgba(49, 22, 77, 0.5) 50%,
                    rgba(49, 22, 77, 0) 100%);
            height: 20%;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 14;

            @include media-breakpoint-down(md) {
                height: 25%;
            }
        }
    }
}
</style>