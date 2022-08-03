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
            <div class="expertise__stones-wrap">
                <img
                    src="@/assets/elements/expertiseStones.svg"
                    class="expertise__stones"
                    alt=""
                />
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

const { enter, leave, trigger } = useAnimation()

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const expertiseItem = ref<HTMLElement>()

onMounted(() => {
    trigger(
        section.value,
        () => {
            enter(heading.value)
            if (Array.isArray(expertiseItem.value)) {
                expertiseItem.value.forEach((el: HTMLElement, key: number) => {
                    enter(el, 0.3 * (key + 1))
                })
            }
        },
        () => {
            leave(heading.value)

            if (Array.isArray(expertiseItem.value)) {
                expertiseItem.value.forEach((el: HTMLElement, key: number) => {
                    leave(el, 0.3 * (key + 1))
                })
            }
        }
    )
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

        @include media-breakpoint-down(md) {
            padding-bottom: rem(128px);
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
        position: absolute;
        animation: rotate 600s linear infinite;
        animation-direction: reverse;
        z-index: 20;

        @include media-breakpoint-down(md) {
            width: 200vw;
            left: -350px;
        }
    }

    &__stones-wrap {
        overflow: hidden;
        z-index: 10;
        position: absolute;
        width: 100%;
        height: 100%;
    }

    &__heading {
        margin-bottom: rem(64px);
        color: #fff;
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            font-size: rem(38px);
            margin-bottom: rem(40px);
        }
    }

    &__list-wrap {
        &::before {
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg width='1818' height='331' viewBox='0 0 1818 331' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1817.5 203.398C1733.5 273.731 1543.4 389.898 1455 291.898C1344.5 169.398 1314 8.69141 1221 1.19141C1128 -6.30859 1040.5 208.898 913 215.898C785.5 222.898 750.5 116.191 574 116.191C421.31 116.191 457.5 291.898 369 291.898C280.5 291.898 268.5 178.898 158 178.898C69.6 178.898 16.5 203.565 1 215.898' stroke='%23BF81FF'/%3E%3C/svg%3E%0A");
            width: 100vw;
            height: 330px;
            background-size: cover;
            background-repeat: repeat-x;
            position: absolute;
            top: -80px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;

            @include media-breakpoint-down(sm) {
                background-size: contain;
                height: 190px;
                top: -60px;
                background-image: url("data:image/svg+xml,%3Csvg width='375' height='188' viewBox='0 0 375 188' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M444 23.0782C422.215 59.7712 421.439 93.1045 375.753 87.2329C328.955 81.2184 344.778 0.675365 305 1.49998C265.222 2.3246 297 179.5 253 179.5C195.672 179.5 192.299 63.5 165 63.5C141.211 63.5 96.1346 186.973 47.3867 186.973C24.4347 186.973 38.3748 122.905 9.71713 122.905C-13.209 122.905 -26.9802 135.773 -31 142.208' stroke='%23BF81FF'/%3E%3C/svg%3E%0A");
            }
        }

        &::after {
            content: '';
            background-image: url("data:image/svg+xml,%3Csvg width='1818' height='314' viewBox='0 0 1818 314' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 127.168C85 56.8349 275.1 -59.3318 363.5 38.6682C474 161.168 552.5 305.668 645.5 313.168C738.5 320.668 778 121.668 905.5 114.668C1033 107.668 1165 205.668 1226.5 205.668C1288 205.668 1361 38.6682 1449.5 38.6682C1538 38.6682 1550 151.668 1660.5 151.668C1748.9 151.668 1802 127.001 1817.5 114.668' stroke='%236A1DAC'/%3E%3C/svg%3E%0A");
            width: 100vw;
            height: 310px;
            background-size: cover;
            background-repeat: repeat-x;
            position: absolute;
            top: -130px;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            z-index: -1;

            @include media-breakpoint-down(sm) {
                background-size: contain;
                height: 140px;
                top: -40px;
                background-image: url("data:image/svg+xml,%3Csvg width='375' height='139' viewBox='0 0 375 139' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-96 59.4321C-68.0694 22.9566 -66.5744 82.7697 -16 52.9493C95 -12.4999 138.5 138 160.5 138C214.729 138 152.5 6.00956 211 1.00021C253.395 -2.63005 258 100.143 311.488 100.143C331.937 100.143 356.21 13.5353 385.637 13.5353C415.064 13.5353 419.054 72.1378 455.796 72.1378C485.19 72.1378 502.846 59.3455 508 52.9493' stroke='%236A1DAC'/%3E%3C/svg%3E%0A");
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
