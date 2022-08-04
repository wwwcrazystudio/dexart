<template>
    <div class="expertise" ref="section">
        <div class="expertise__wrap">
            <img
                class="expertise__blur expertise__blur--1"
                src="@/assets/blurs/expertiseBlur2.png"
                alt=""
            />
            <img
                class="expertise__blur expertise__blur--2"
                src="@/assets/blurs/expertiseBlur1.png"
                alt=""
            />
            <div class="expertise__scene" ref="scene">
                <div data-depth="0.5" class="expertise__stones">
                    <img src="@/assets/elements/expertiseStones.svg" alt="" />
                </div>
                <div
                    data-depth="0.3"
                    class="expertise__line expertise__line--1"
                >
                    <img src="@/assets/elements/line1.svg" ref="line1" alt="" />
                </div>
                <div
                    data-depth="0.2"
                    class="expertise__line expertise__line--2"
                >
                    <img src="@/assets/elements/line2.svg" ref="line2" alt="" />
                </div>
            </div>
            <div class="container">
                <h2 class="expertise__heading" ref="heading">Expertise</h2>
            </div>
            <div class="expertise__list-wrap">
                <div class="expertise__list">
                    <div
                        ref="expertiseItem"
                        class="expertise__item"
                        :class="item.small && 'expertise__item--small'"
                        v-for="item in expertise"
                        :key="item.label"
                    >
                        <img :src="item.img" :alt="item.label" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Parallax from 'parallax-js'
import { gsap } from 'gsap'

import oton from '@/assets/expertise/oton.svg'
import unity from '@/assets/expertise/unity.svg'
import retext from '@/assets/expertise/retext.svg'
import binance from '@/assets/expertise/binance.svg'
import near from '@/assets/expertise/near.svg'

const expertise = [
    {
        img: oton,
        label: 'oton',
    },
    {
        img: retext,
        label: 'retext.ai',
    },
    {
        img: unity,
        label: 'unity',
        small: true,
    },
    {
        img: binance,
        label: 'binance',
    },
    {
        img: near,
        label: 'near',
    },
    {
        img: unity,
        label: 'unity',
        small: true,
    },
]

const { enter, leave, hide } = useAnimation()

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const expertiseItem = ref<HTMLElement[]>()
const scene = ref<HTMLElement>()
const line1 = ref<HTMLElement>()
const line2 = ref<HTMLElement>()

onMounted(() => {
    heading.value && hide(heading.value)
    line1.value && hide(line1.value)
    line2.value && hide(line2.value)

    expertiseItem.value?.forEach((item) => {
        hide(item)
    })

    const enterCallback = () => {
        heading.value && enter(heading.value)
        line1.value &&
            gsap.to(line1.value, {
                opacity: 1,
                delay: 2,
                duration: 1,
            })

        line2.value &&
            gsap.to(line2.value, {
                opacity: 1,
                delay: 1.5,
                duration: 1,
            })

        expertiseItem.value?.forEach((item, key) => {
            enter(item, 0.25 * key)
        })
    }

    const leaveCallback = () => {
        heading.value && leave(heading.value)
        line1.value &&
            gsap.to(line1.value, {
                opacity: 0,
                duration: 1,
            })

        line2.value &&
            gsap.to(line2.value, {
                opacity: 0,
                duration: 1,
            })

        expertiseItem.value?.forEach((item, key) => {
            leave(item, 0.25 * key)
        })
    }

    if (section.value)
        ScrollTrigger.create({
            trigger: section.value,
            start: 'top 65%',
            end: 'bottom 70%',
            onEnter: () => enterCallback(),
            onEnterBack: () => enterCallback(),
            onLeave: () => leaveCallback(),
            onLeaveBack: () => leaveCallback(),
        })

    if (scene.value)
        new Parallax(scene.value, {
            scalarX: 6,
            scalarY: 6,
        })
})
</script>

<style scoped lang="scss">
.expertise {
    @include noise;
    position: relative;
    &__wrap {
        background-size: contain;
        background-repeat: no-repeat;
        padding-bottom: rem(200px);
        padding-top: rem(100px);
        position: relative;
        z-index: 10;
        min-height: 100vh;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 250px;
            background: linear-gradient(180deg, transparent 30%, #0b0e28 100%);
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 11;
        }

        @include media-breakpoint-down(lg) {
            min-height: 60vh;
        }

        @include media-breakpoint-down(md) {
            padding-bottom: rem(128px);
            min-height: 80vh;
        }
    }

    &__blur {
        position: absolute;

        &--1 {
            left: 40%;
            top: -20%;
            width: 40%;

            @include media-breakpoint-down(md) {
                width: 100%;
                left: 10%;
                top: 0%;
            }
        }

        &--2 {
            left: 30%;
            top: -20%;
            width: 30%;

            @include media-breakpoint-down(md) {
                width: 90%;
                left: 0%;
                top: 10%;
            }
        }
    }

    &__stones {
        width: 96vw;
        position: absolute !important;
        z-index: 20;

        img {
            animation: rotate 600s linear infinite;
            animation-direction: reverse;
        }

        @include media-breakpoint-down(lg) {
            width: 200vw;
            left: -350px;
        }
    }

    &__scene {
        overflow: hidden;
        z-index: 10;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 10%;
    }

    &__heading {
        margin-bottom: rem(64px);
        color: #fff;
        position: relative;
        z-index: 10;
        transform-origin: left top;

        @include media-breakpoint-down(md) {
            font-size: rem(38px);
            margin-bottom: rem(40px);
        }
    }

    &__line {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;

        img {
            width: 200%;
        }
        &--1 {
            top: 190px !important;

            @include media-breakpoint-down(sm) {
                width: 300%;
                top: 140px !important;
                left: -210px !important;
            }
        }

        &--2 {
            top: 220px !important;
            z-index: -1;

            @include media-breakpoint-down(sm) {
                width: 300%;
                top: 90px !important;
                left: -250px !important;
            }
        }
    }

    &__list {
        position: relative;
        height: 460px;
        width: calc(110% - 64px);
        z-index: 10;
        max-width: 1360px;
        margin: auto;

        @include media-breakpoint-down(xxl) {
            width: calc(100% - 64px);
        }

        @include media-breakpoint-down(lg) {
            height: 300px;
        }

        @include media-breakpoint-down(md) {
            height: 255px;
            width: calc(100% - 32px);
        }
    }

    &__item {
        background: linear-gradient(156deg, #7c1dd3 13%, #250c3d 88.07%);
        box-shadow: 0px 0px 64px rgba(145, 46, 239, 0.38);
        width: 222px;
        height: 222px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: absolute;

        img {
            max-width: 65%;
            max-height: 65%;
        }

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 3px;
            border-radius: 50%;
            z-index: 1;
            background: linear-gradient(
                173.08deg,
                #faf5ff -66.62%,
                rgba(250, 245, 255, 0) 94.59%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: 350ms;
        }

        @include media-breakpoint-down(lg) {
            width: 140px;
            height: 140px;
        }

        @include media-breakpoint-down(md) {
            width: 78px;
            height: 78px;
        }

        &--small {
            width: 164px;
            height: 164px;

            @include media-breakpoint-down(lg) {
                width: 100px;
                height: 100px;
            }

            @include media-breakpoint-down(md) {
                width: 64px;
                height: 64px;
            }
        }

        &:nth-of-type(1) {
            left: 0;
            top: 0;

            @include media-breakpoint-down(md) {
                top: 60px;
            }
        }

        &:nth-of-type(2) {
            left: 20%;
            bottom: 0;

            @include media-breakpoint-down(md) {
                bottom: 30px;
                left: 25%;
            }
        }

        &:nth-of-type(3) {
            left: 40%;
            top: 15%;

            @include media-breakpoint-down(md) {
                left: 40%;
                top: 20%;
            }
        }

        &:nth-of-type(4) {
            left: 60%;
            top: 0;

            @include media-breakpoint-down(md) {
                left: 70%;
                top: 35%;
            }
        }

        &:nth-of-type(5) {
            right: 0;
            bottom: 0;

            @include media-breakpoint-down(md) {
                right: 20%;
                bottom: -5%;
            }
        }

        &:nth-of-type(6) {
            right: 0;
            top: 0;
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
