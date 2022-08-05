<template>
    <section class="backstory" ref="section">
        <div class="backstory__wrap">
            <div class="backstory__scene" ref="scene">
                <div
                    data-depth="0.7"
                    class="backstory__stone backstory__stone--1"
                >
                    <img src="@/assets/elements/stone.svg" alt="" />
                </div>
                <div
                    data-depth="0.4"
                    class="backstory__stone backstory__stone--2"
                >
                    <img src="@/assets/elements/stone2.svg" alt="" />
                </div>
            </div>
            <picture class="backstory__stones">
                <img src="@/assets/stones.png" alt="" />
                <source srcset="@/assets/stones.webp" type="image/webp" />
            </picture>
            <div class="container">
                <div class="backstory__content" ref="content">
                    <h2 class="backstory__heading" ref="heading">
                        World <span>backstory</span>
                    </h2>

                    <div class="backstory__text">
                        <div ref="text">
                            <p>
                                When blockchain technologies started evolving in
                                the real world, when complete decentralization
                                became a question of time, when crypto-projects
                                started emerging one by one a critical mass of
                                information was formed.
                            </p>
                            <p>
                                It became the foundation of the DEXART metaverse
                                — it became the blockchain singularity. A
                                compressed mass of ideas, concepts and projects
                                that was so dense and heavy that at some point
                                it exploded.
                            </p>
                            <p>
                                It was the Big Flash that became the DEXART
                                portal, opening the way to the virtual world.
                            </p>
                        </div>

                        <button class="backstory__btn" ref="btn">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { useMedia } from '@/composables/useMedia'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Parallax from 'parallax-js'

const { enter, leave, hide } = useAnimation()
const { isTablet } = useMedia()

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const btn = ref<HTMLElement>()
const content = ref<HTMLElement>()
const scene = ref<HTMLElement>()

onMounted(() => {
    heading.value && hide(heading.value)
    text.value && hide(text.value)
    btn.value && hide(btn.value)

    if (content.value)
        ScrollTrigger.create({
            trigger: content.value,
            start: 'top 65%',
            end: 'bottom center',
            onEnter: () => {
                heading.value && enter(heading.value)
                text.value && enter(text.value, 0.4)
                btn.value && enter(btn.value, 0.6)
            },
            onLeave: () => {
                heading.value && leave(heading.value)
                text.value && leave(text.value)
                btn.value && leave(btn.value)
            },
            onEnterBack: () => {
                heading.value && enter(heading.value)
                text.value && enter(text.value, 0.4)
                btn.value && enter(btn.value, 0.6)
            },
            onLeaveBack: () => {
                heading.value && leave(heading.value)
                text.value && leave(text.value)
                btn.value && leave(btn.value)
            },
        })

    if (scene.value && !isTablet())
        new Parallax(scene.value, {
            scalarX: 6,
            scalarY: 6,
        })
})
</script>

<style scoped lang="scss">
.backstory {
    @include noise;
    position: relative;

    &__wrap {
        background: url('@/assets/blurs/backstoryBlur.png'),
            linear-gradient(180deg, #1c0b2b 0%, transparent 50%, #11071b 100%);
        position: relative;
        background-size: 700px 700px, cover;
        background-position: 50% 30%;
        background-repeat: no-repeat;
        min-height: 100vh;
        padding-top: rem(64px);
        padding-bottom: rem(240px);

        @include media-breakpoint-down(lg) {
            background-size: 500px 500px, cover;
        }
    }

    &__stones {
        width: 1000px;
        height: 1000px;
        position: absolute;
        left: -25%;
        top: 25%;
        z-index: 10;

        @include media-breakpoint-down(lg) {
            width: 100%;
            height: 50vh;
            left: 0;
            top: 45%;
        }

        @include media-breakpoint-down(md) {
            width: 300%;
            height: auto;
            position: absolute;
            left: -150%;
            bottom: -60%;
            z-index: 10;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
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
        transform: translateZ(0);
        will-change: transform;
    }

    &__stone {
        position: absolute !important;
        z-index: 15;
        transform: translateZ(0);
        will-change: transform;

        &--1 {
            right: 70px !important;
            top: 50% !important;
            left: unset !important;

            img {
                width: 40px;
                will-change: transform;
                animation: float 50s linear infinite;
                animation-direction: reverse;
            }
        }

        &--2 {
            top: 30% !important;
            left: 40% !important;

            img {
                width: 95px;
                will-change: transform;
                animation: float 50s linear infinite;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        padding-top: rem(64px);
        z-index: 20;
        position: relative;

        @include media-breakpoint-down(lg) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(32px);
        transform-origin: top center;

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
        max-width: 595px;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(36px);
    }
}

@keyframes float {
    0% {
        transform: translate3d(0, 0, 0) rotate(0deg);
    }

    25% {
        transform: translate3d(-100px, 100px, 0) rotate(45deg);
    }

    50% {
        transform: translate3d(-50px, 200px, 0) rotate(90deg);
    }

    75% {
        transform: translate3d(20px, 90px, 0) rotate(175deg);
    }

    100% {
        transform: translate3d(0, 0, 0) rotate(0deg);
    }
}
</style>
