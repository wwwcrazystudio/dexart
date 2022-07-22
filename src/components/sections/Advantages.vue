<template>
    <section class="advantages">
        <div class="advantages__wrap">
            <div class="container">
                <MapBanner class="advantages__map-banner" />
                <div class="advantages__content">
                    <h2 class="advantages__heading">
                        DEXART: one platform - endless
                        <span>opportunities</span>
                    </h2>

                    <div class="advantages__carousel swiper" ref="carousel">
                        <ul class="advantages__list swiper-wrapper">
                            <li
                                class="advantages__advantage-item swiper-slide"
                                v-for="item in advantages"
                                :key="item.title"
                            >
                                <div class="advantage-item__icon">
                                    <img :src="item.icon" alt="" />
                                </div>
                                <div class="advantage-item__title">
                                    {{ item.title }}
                                </div>
                                <div
                                    class="advantage-item__text"
                                    v-if="item.text"
                                >
                                    {{ item.text }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <SignupBanner class="advantages__signup-banner" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'

import MapBanner from '@/components/banners/MapBanner.vue'
import SignupBanner from '@/components/banners/SignupBanner.vue'
import advantage1 from '@/assets/advantages/advantage1.svg'
import advantage2 from '@/assets/advantages/advantage2.svg'
import advantage3 from '@/assets/advantages/advantage3.svg'
import advantage4 from '@/assets/advantages/advantage4.svg'

const advantages = [
    {
        icon: advantage1,
        title: 'DEFI tools',
        text: 'for sales and investment',
    },
    {
        icon: advantage2,
        title: 'Game mechanics and quests',
        text: 'for deep audience engagement ',
    },

    {
        icon: advantage3,
        title: 'Distributed data',
        text: 'storage technology',
    },
    {
        icon: advantage4,
        title: 'Decentralization & DAO',
    },
]

const carousel = ref<HTMLElement>()

onMounted(() => {
    if (carousel.value) {
        new Swiper(carousel.value, {
            slidesPerView: 1.3,
            spaceBetween: 36,
            loop: true,
            breakpoints: {
                568: {
                    slidesPerView: 2.2,
                    spaceBetween: 24,
                    loop: false,
                },
                991: {
                    spaceBetween: 32,
                    slidesPerView: 4,
                    loop: false,
                },
            },
        })
    }
})
</script>

<style scoped lang="scss">
.advantages {
    &__wrap {
        background-image: url('@/assets/placeholder/advantages.jpg');
        padding-top: rem(64px);
        padding-bottom: rem(142px);

        @include media-breakpoint-down(md) {
            padding: rem(124px 0);
        }
    }

    &__content {
        margin-top: rem(190px);
        margin-bottom: rem(220px);

        @include media-breakpoint-down(md) {
            margin-bottom: rem(120px);
        }
    }

    &__heading {
        color: #fff;
        max-width: 595px;
        margin-bottom: rem(124px);

        @include media-breakpoint-down(md) {
            margin-bottom: rem(64px);
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

    &__carousel {
        overflow: visible;
    }

    &__list {
        @include unlist;
    }
}

.advantage-item {
    &__icon {
        background: #7c1dd3;
        border-radius: 50%;
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: rem(40px);
    }

    &__title {
        color: #fff;
        font-size: rem(24px);
        font-weight: 700;
        letter-spacing: 0.01em;
        color: #faf5ff;
        margin-bottom: rem(16px);
        font-family: 'StyreneAWeb', sans-serif;

        @include media-breakpoint-down(md) {
            height: 50px;
            font-size: rem(20px);
        }
    }

    &__text {
        font-weight: 300;
        font-size: rem(18px);
        line-height: 120%;
        font-family: 'StyreneAWeb', sans-serif;
        color: #d7b2ff;

        @include media-breakpoint-down(md) {
            font-size: rem(14px);
        }
    }
}
</style>
