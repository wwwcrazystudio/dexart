<template>
    <section class="advantages" ref="section">
        <div class="advantages__wrap">
            <!--  <picture class="advantages__bg">
                <img src="@/assets/bg/advantageBg.jpg" alt="" />
                <source
                    srcset="@/assets/bg/advantageBg.webp"
                    type="image/webp"
                />
            </picture> -->
            <div class="container">
                <MapBanner class="advantages__map-banner" ref="banner1" />
                <div class="advantages__content" ref="content">
                    <h2 class="advantages__heading" ref="heading">
                        DEXART: one platform - endless
                        <span>opportunities</span>
                    </h2>

                    <div class="advantages__carousel swiper" ref="carousel">
                        <ul class="advantages__list swiper-wrapper">
                            <li
                                class="advantages__advantage-item swiper-slide"
                                ref="slides"
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
                <SignupBanner class="advantages__signup-banner" ref="banner2" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Swiper from 'swiper'
import 'swiper/css'

import MapBanner from '@/components/banners/MapBanner.vue'
import SignupBanner from '@/components/banners/SignupBanner.vue'
import advantage1 from '@/assets/advantages/advantage1.svg'
import advantage2 from '@/assets/advantages/advantage2.svg'
import advantage3 from '@/assets/advantages/advantage3.svg'
import advantage4 from '@/assets/advantages/advantage4.svg'

const { enter, leave, hide } = useAnimation()

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
const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const banner1 = ref<InstanceType<typeof MapBanner>>()
const banner2 = ref<InstanceType<typeof SignupBanner>>()
const content = ref<HTMLElement>()
const slides = ref<HTMLElement[]>()

onMounted(() => {
    banner1.value && hide(banner1.value.$el)
    heading.value && hide(heading.value)
    banner2.value && hide(banner2.value.$el)

    slides.value?.forEach((slide) => {
        hide(slide)
    })

    if (banner1.value)
        ScrollTrigger.create({
            trigger: banner1.value.$el,
            start: 'top center',
            end: 'top top',
            onEnter: () => {
                banner1.value && enter(banner1.value.$el)
            },
            onLeave: () => {
                banner1.value && leave(banner1.value.$el)
            },
            onEnterBack: () => {
                banner1.value && enter(banner1.value.$el)
            },
            onLeaveBack: () => {
                banner1.value && leave(banner1.value.$el)
            },
        })

    if (content.value)
        ScrollTrigger.create({
            trigger: content.value,
            start: 'top 70%',
            end: 'center 20%',
            onEnter: () => {
                heading.value && enter(heading.value)
                slides.value?.forEach((slide, key) => {
                    enter(slide, 0.3 * key)
                })
            },
            onLeave: () => {
                heading.value && leave(heading.value)
                slides.value?.forEach((slide, key) => {
                    leave(slide, 0.3 * key)
                })
            },
            onEnterBack: () => {
                heading.value && enter(heading.value)
                slides.value?.forEach((slide, key) => {
                    enter(slide, 0.3 * key)
                })
            },
            onLeaveBack: () => {
                heading.value && leave(heading.value)
                slides.value?.forEach((slide, key) => {
                    leave(slide, 0.3 * key)
                })
            },
        })

    if (banner2.value)
        ScrollTrigger.create({
            trigger: banner2.value.$el,
            start: 'top center',
            end: 'top top',
            onEnter: () => {
                banner2.value && enter(banner2.value.$el)
            },
            onLeave: () => {
                banner2.value && leave(banner2.value.$el)
            },
            onEnterBack: () => {
                banner2.value && enter(banner2.value.$el)
            },
            onLeaveBack: () => {
                banner2.value && leave(banner2.value.$el)
            },
        })

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
        /*  @include noise; */
        background: url('@/assets/blurs/advantagesBlur.png') center,
            linear-gradient(
                180deg,
                #11071b 0%,
                #3b1661 25%,
                #3b1661 45%,
                #11071b 100%
            );

        padding-top: rem(64px);
        padding-bottom: rem(142px);
        background-size: cover;
        overflow: hidden;
        position: relative;

        @include media-breakpoint-down(md) {
            padding: rem(124px 0);
        }
    }

    &__bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__content {
        margin-top: rem(190px);
        margin-bottom: rem(220px);
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(120px);

            &::after {
                content: '';
                position: absolute;
                background-image: url('@/assets/blurs/promoBlur.png');
                width: 800px;
                height: 800px;
                left: -120px;
                top: -90px;
                background-size: contain;
            }
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

    /*     &__advantage-item {
        opacity: 0;
    } */

    &__map-banner {
        position: relative;
        z-index: 10;
    }

    &__signup-banner {
        position: relative;
        z-index: 10;
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
