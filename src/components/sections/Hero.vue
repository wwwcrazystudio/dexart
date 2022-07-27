<template>
    <section class="hero">
        <div class="hero__wrap">
            <div class="container">
                <h1 class="hero__heading" ref="heading">
                    Welcome <span>to DEXART</span>
                </h1>
                <div class="hero__text" ref="text">
                    A Virtual World with endless opportunities for people and
                    businesses
                </div>

                <img
                    class="hero__star"
                    ref="star"
                    src="@/assets/bg/heroStar.svg"
                />

                <div ref="parallaxScene" class="hero__scene">
                    <div data-depth="0.6" class="hero__stones">
                        <img src="@/assets/bg/heroStones.svg" alt="" />
                    </div>
                    <img
                        data-depth="0.6"
                        class="hero__mountain"
                        src="@/assets/bg/heroMountain.svg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import Parallax from 'parallax-js'

const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const star = ref<HTMLElement>()
const parallaxScene = ref<HTMLElement>()

onMounted(() => {
    if (heading.value)
        gsap.from(heading.value, { opacity: 0, y: 100, duration: 1 })

    if (text.value)
        gsap.from(text.value, { opacity: 0, y: 100, duration: 1, delay: 0.4 })

    if (star.value) gsap.from(star.value, { opacity: 0, duration: 1 })

    if (parallaxScene.value)
        new Parallax(parallaxScene.value, {
            scalarX: 2,
            scalarY: 0,
        })
})
</script>

<style scoped lang="scss">
.hero {
    &__wrap {
        @include noise;

        position: relative;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(
            105.46% 242.16% at 104.05% -9.76%,
            #241830 0%,
            #3a1463 34.72%,
            #0c0316 67.57%
        );
        background-image: url('@/assets/bg/hero.jpg');
        background-size: cover;

        @include media-breakpoint-down(md) {
            padding-top: 25vh;
            justify-content: flex-start;
            background-position: 70%;
        }
    }

    &__heading {
        color: #fff;
        font-weight: 700;
        margin-bottom: rem(24px);
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(16px);
        }

        span {
            display: block;
            width: fit-content;
            background: -webkit-linear-gradient(
                0deg,
                #bf81ff 1.88%,
                #d17558 51.37%,
                #f84fe7 97.86%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__text {
        @include p_type_2;

        color: #f3e7ff;
        opacity: 0.8;
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

        z-index: 1;

        img {
            animation: rotate 200s linear infinite;
            width: 102%;
        }
    }

    &__star {
        position: absolute;
        right: 230px;
        top: 180px;
        filter: drop-shadow(0px 0px 20px #752cc5)
            drop-shadow(0px 0px 60px #752cc5);
        animation: pulsate 2s linear infinite alternate-reverse;
        z-index: 6;
    }

    &__mountain {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 5;
        margin-top: auto;
        width: 102%;
    }

    &__scene {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
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

@keyframes pulsate {
    from {
        opacity: 0.7;
    }

    to {
        opacity: 1;
    }
}
</style>
