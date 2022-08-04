<template>
    <section class="about">
        <div class="about__wrap">
            <div class="about__scene" ref="scene">
                <div data-depth="0.4" class="about__stone about__stone--1">
                    <img src="@/assets/elements/stone.svg" alt="" />
                </div>
                <div data-depth="0.2" class="about__stone about__stone--2">
                    <img src="@/assets/elements/stone2.svg" alt="" />
                </div>
            </div>
            <div class="container">
                <div class="about__content" ref="content">
                    <h2 class="about__heading" ref="heading">
                        Metaverses create <span>a magical</span> future
                    </h2>
                    <div class="about__text" ref="text">
                        <p>
                            And we contribute to the new era of social media
                            communications of Web 3.0
                        </p>
                        <p>
                            We help businesses and opinion leaders to create
                            deep and meaningful communication with their clients
                            and communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Parallax from 'parallax-js'

const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const content = ref<HTMLElement>()
const scene = ref<HTMLElement>()

const { enter, leave, hide } = useAnimation()

onMounted(() => {
    hide(heading.value)
    hide(text.value)

    if (content.value)
        ScrollTrigger.create({
            trigger: content.value,
            start: 'top center',
            end: 'center 30%',
            onEnter: () => {
                heading.value && enter(heading.value)
                text.value && enter(text.value)
            },
            onLeave: () => {
                heading.value && leave(heading.value)
                text.value && leave(text.value)
            },
            onEnterBack: () => {
                heading.value && enter(heading.value)
                text.value && enter(text.value)
            },
            onLeaveBack: () => {
                heading.value && leave(heading.value)
                text.value && leave(text.value)
            },
        })

    ScrollTrigger.create({
        trigger: content.value,
        start: 'top bottom',
        end: 'bottom top',
    })

    if (scene.value)
        new Parallax(scene.value, {
            scalarX: 6,
            scalarY: 6,
        })
})
</script>

<style scoped lang="scss">
.about {
    overflow: hidden;
    position: relative;

    &__wrap {
        background-image: linear-gradient(
            180deg,
            #19082b 1.55%,
            rgba(49, 22, 77, 0) 56.46%
        );
        background-size: cover;
        display: flex;
        align-items: center;
        position: relative;
        min-height: 100vh;

        @include media-breakpoint-down(lg) {
            min-height: 80vh;
        }

        @include media-breakpoint-down(md) {
            background-position: center;
            background-image: url('@/assets/blurs/aboutBlur.png'),
                linear-gradient(
                    180deg,
                    #19082b 1.55%,
                    rgba(49, 22, 77, 0) 56.46%
                );
        }
    }

    &__scene {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
    }

    &__stone {
        left: unset !important;
        position: absolute !important;

        &--1 {
            right: 190px !important;
            top: 70% !important;
            width: 40px;

            img {
                animation: rotate 45s linear infinite;
                animation-direction: reverse;
                width: 100%;
            }

            @include media-breakpoint-down(lg) {
                left: 32px !important;
                top: 90%;
            }
        }

        &--2 {
            width: 105px;
            top: 25% !important;
            right: 190px !important;

            img {
                animation: rotate 50s linear infinite;
                width: 100%;
            }

            @include media-breakpoint-down(lg) {
                right: 20px !important;
                top: 90px !important;
                width: 64px;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(32px);
            max-width: 60%;
        }

        span {
            display: block;
            width: fit-content;
            background: -webkit-linear-gradient(
                0deg,
                #bf81ff 1.88%,
                #d17558 98.37%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__text {
        @include p_type_1;

        color: #faf5ff;
        max-width: 590px;
        width: 50%;

        @include media-breakpoint-down(md) {
            width: 100%;
        }
    }
}

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
