<template>
    <div class="expertise">
        <div class="expertise__wrap">
            <div class="container">
                <h2 class="expertise__heading">Expertise</h2>

                <div class="expertise__list">
                    <div
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
import oton from '@/assets/expertise/oton.png'
import unity from '@/assets/expertise/unity.png'
import retext from '@/assets/expertise/retext.png'
import binance from '@/assets/expertise/binance.png'
import near from '@/assets/expertise/near.png'

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
</script>

<style scoped lang="scss">
.expertise {
    &__wrap {
        background-image: url('@/assets/stones2.png');
        background-size: contain;
        background-repeat: no-repeat;
        padding-bottom: rem(200px);
        position: relative;

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
        }
    }

    &__heading {
        margin-bottom: rem(64px);
        color: #fff;
    }

    &__list {
        position: relative;
        height: 460px;
        width: 110%;
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

        &--small {
            width: 164px;
            height: 164px;
        }

        &:nth-of-type(1) {
            left: 0;
            top: 0;
        }

        &:nth-of-type(2) {
            left: 20%;
            bottom: 0;
        }

        &:nth-of-type(3) {
            left: 40%;
            top: 25%;
        }

        &:nth-of-type(4) {
            left: 60%;
            top: 0;
        }

        &:nth-of-type(5) {
            right: 0;
            bottom: 0;
        }

        &:nth-of-type(6) {
            right: 0;
            top: 0;
        }
    }
}
</style>
