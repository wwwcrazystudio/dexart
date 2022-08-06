<template>
    <section class="roadmap" ref="section">
        <div class="roadmap__wrap">
            <div class="container">
                <h2 class="roadmap__heading" ref="heading" v-html="t('heading')">
                </h2>

                <div class="roadmap__timeline-carousel timeline-carousel">
                    <div class="timeline-carousel__controls" ref="controls">
                        <button class="timeline-carousel__control" ref="prevBtn">
                            <svg width="13" height="18" viewBox="0 0 13 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.18761 8.17781L11.4308 1.08638C12.094 0.627216 13 1.10191 13 1.90857V16.0914C13 16.8981 12.094 17.3728 11.4308 16.9136L1.18761 9.82219C0.613224 9.42454 0.613223 8.57546 1.18761 8.17781Z"
                                    fill="#E9D4FF" />
                            </svg>
                        </button>

                        <button class="timeline-carousel__control" ref="nextBtn">
                            <svg width="13" height="18" viewBox="0 0 13 18" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.8124 8.17781L1.56921 1.08638C0.905979 0.627216 0 1.10191 0 1.90857V16.0914C0 16.8981 0.905977 17.3728 1.56921 16.9136L11.8124 9.82219C12.3868 9.42454 12.3868 8.57546 11.8124 8.17781Z"
                                    fill="#E9D4FF" />
                            </svg>
                        </button>
                    </div>

                    <div class="timeline-carousel__wrap swiper" ref="carousel">
                        <div class="timeline-carousel__carousel swiper-wrapper">
                            <div class="timeline-carousel__card swiper-slide" ref="slides" v-for="item in timeline"
                                :key="item.title">
                                <div class="timeline-carousel__card-wrap">
                                    <div class="timeline-carousel__card-title">
                                        {{ item.title }}
                                    </div>
                                    <div class="timeline-carousel__card-content" v-html="item.text"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import Swiper, { Navigation } from 'swiper'
import { useAnimation } from '@/composables/useAnimation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMedia } from '@/composables/useMedia'
import { useI18n } from 'vue-i18n'

import 'swiper/css'

gsap.config({
    force3D: true,
})

const { enter, leave, hide } = useAnimation()

const { isMobile } = useMedia()

const carousel = ref<HTMLElement>()
const prevBtn = ref<HTMLElement>()
const nextBtn = ref<HTMLElement>()
const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const controls = ref<HTMLElement>()
const slides = ref<HTMLElement[]>()
const carouselInstance = ref<any>()

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: '<span>Roadmap</span> DEXART',
        },
        ru: {
            heading: '<span>Роадмап</span> DEXART',
        }
    }
})

const timeline = computed(() => {
    if (locale.value === 'ru') {
        return [
            {
                title: '4 квартал 2021 года',
                text: 'Начало развития',
            },
            {
                title: '2 квартал 2022 года',
                text: `Объявление проекта
                <ul>
                    <li>Запуск бета-версии платформы Avatars</li>
                    <li>Сбросы NFT для сообщества DEXART</li>
                </ul>`,
            },
            {
                title: '3 квартал 2022 года',
                text: `<ul>
                    <li>Предварительная продажа виртуальной земли</li>
                    <li>Запуск платформы Avatars</li>
                    <li>Распродажа коллекций одежды NFT</li>
                </ul>`,
            },
            {
                title: '4 квартал 2022 года',
                text: `<ul>
                    <li>Виртуальная продажа земли</li>
                    <li>Запуск бета-версии веб-платформы</li>
                    <li>Запуск инструментов потоковой передачи вебинаров</li>
                </ul>`,
            },
            {
                title: '2023 - 2024',
                text: `<ul>
                    <li>Запуск веб-платформы</li>
                    <li>Запуск платформы VR</li>
                    <li>Crosschain SDK для NFT</li>
                </ul>`,
            },
        ]
    }

    return [
        {
            title: 'Q4 2021',
            text: 'Project start',
        },
        {
            title: 'Q2 2022',
            text: `Project announcement
        <ul>
            <li>Avatars platform beta launch</li>
            <li>NFT drops for DEXART community</li>
        </ul>`,
        },
        {
            title: 'Q3 2022',
            text: `<ul>
            <li>Virtual land presale</li>
            <li>Avatars platform public launch</li>
              <li>NFT clothes collections sale</li>
        </ul>`,
        },
        {
            title: 'Q4 2022',
            text: `<ul>
            <li>Virtual land open sale</li>
            <li>Web-platform beta-launch</li>
              <li>Webinar streaming toolkit launch</li>
            </ul>`,
        },
        {
            title: '2023 - 2024',
            text: `<ul>
            <li>Web platform public launch</li>
            <li>VR platform launch</li>
            <li>Crosschain SDK for NFT</li>
        </ul>`,
        },
    ]
})

onMounted(() => {
    if (!isMobile()) {
        heading.value && hide(heading.value)
        controls.value && hide(controls.value)

        slides.value?.forEach((slide) => {
            hide(slide)
        })

        if (section.value && carousel.value)
            ScrollTrigger.create({
                trigger: section.value,
                endTrigger: carousel.value,
                start: 'top center',
                end: 'top 30%',
                onEnter: () => {
                    heading.value && enter(heading.value)
                    controls.value && enter(controls.value, 0.4)

                    slides.value?.forEach((slide, key) => {
                        gsap.to(slide, {
                            opacity: 1,
                            duration: 1,
                            delay: 0.4 * key,
                        })
                    })
                },
                onEnterBack: () => {
                    heading.value && enter(heading.value)
                    controls.value && enter(controls.value, 0.4)

                    slides.value?.forEach((slide, key) => {
                        gsap.to(slide, {
                            opacity: 1,
                            duration: 1,
                            delay: 0.4 * key,
                        })
                    })
                },
                onLeave: () => {
                    heading.value && leave(heading.value)
                    controls.value && leave(controls.value, 0.4)

                    slides.value?.forEach((slide, key) => {
                        gsap.to(slide, {
                            opacity: 0,
                            duration: 1,
                            delay: 0.2 * key,
                        })
                    })
                },
                onLeaveBack: () => {
                    heading.value && leave(heading.value)
                    controls.value && leave(controls.value, 0.4)

                    slides.value?.forEach((slide, key) => {
                        gsap.to(slide, {
                            opacity: 0,
                            duration: 1,
                            delay: 0.2 * key,
                        })
                    })
                },
            })
    }

    if (carousel.value) {
        carouselInstance.value = new Swiper(carousel.value, {
            navigation: {
                prevEl: prevBtn.value,
                nextEl: nextBtn.value,
            },
            slidesPerView: 1.1,
            spaceBetween: 16,
            watchSlidesProgress: true,
            modules: [Navigation],
            breakpoints: {
                568: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        })
    }
})

watch(() => locale.value, async () => {
    await nextTick()
    carouselInstance.value.update()
})

</script>

<style lang="scss">
.roadmap {
    overflow: hidden;
    position: relative;

    &__wrap {
        padding-top: rem(64px);
        padding-bottom: rem(140px);
        background: linear-gradient(180deg, #11071b 0%, transparent 30%);

        @include media-breakpoint-down(md) {
            padding-bottom: 0;
        }

        @include media-breakpoint-down(sm) {
            padding-bottom: rem(64px);
            padding-top: rem(32px);
        }
    }

    &__heading {
        color: #fff;
        margin-bottom: rem(32px);
        position: relative;
        z-index: 10;

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

    &__timeline-carousel {
        z-index: 10;
        position: relative;
    }
}

.timeline-carousel {

    &__controls {
        display: flex;
        align-items: center;
        margin-bottom: rem(84px);

        @include media-breakpoint-down(md) {
            margin-bottom: rem(48px);
        }
    }

    &__control {
        position: relative;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: 350ms;
        margin-right: rem(8px);
        z-index: 10;

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 2px;
            border-radius: 8px;
            z-index: -1;
            background: linear-gradient(90deg,
                    #7c1dd3 2.02%,
                    #912eef 49.93%,
                    #ee40ff 96.86%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: 350ms;
        }

        &::after {
            content: '';
            position: absolute;
            background: linear-gradient(90deg,
                    #7c1dd3 2.02%,
                    #912eef 49.93%,
                    #ee40ff 96.86%);
            background-repeat: no-repeat;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            top: 1px;
            left: 1px;
            margin: auto;
            opacity: 0;
            transition: 350ms;
            z-index: -1;
            border-radius: 8px;
        }

        &:hover {
            &::after {
                opacity: 1;
                transition: 350ms;
            }
        }

        &:active {
            transform: scale3d(0.85, 0.85, 0.85);
            transition: 350ms;
        }
    }

    &__wrap {
        padding: rem(0 20px);
        margin: rem(0 -20px);
        overflow: visible;

        &::before {
            content: '';
            background: radial-gradient(50% 50% at 50% 50%,
                    #ee40ff 0%,
                    rgba(238, 64, 255, 0) 100%);
            width: 100%;
            height: 1px;
            position: absolute;
            left: 0;
            top: 32px;
        }

        @include media-breakpoint-down(lg) {
            overflow: visible;
        }

        @include media-breakpoint-down(sm) {
            padding: rem(0 32px);
            margin: rem(0 -32px);
        }

        .swiper-slide-visible .timeline-carousel__card-wrap,
        .swiper-slide-visible::before {
            opacity: 1;
            transition: 200ms;
        }
    }

    &__card {
        position: relative;
        padding-top: rem(16px);

        &::before {
            content: '';
            width: 32px;
            height: 32px;
            background: #d9d9d9;
            display: block;
            border-radius: 50%;
            border: 6px solid #57198a;
            box-shadow: 0px 0px 32px #ee40ff;
            margin-bottom: rem(32px);
            transition: 350ms;
            opacity: 0;
        }

        &-wrap {
            opacity: 0;
            transition: 200ms;
        }

        &-title {
            font-weight: 700;
            font-size: rem(24px);
            line-height: 130%;
            letter-spacing: 0.01em;
            color: #faf5ff;
            margin-bottom: rem(16px);
            font-family: 'StyreneAWeb', sans-serif;
        }

        &-content {
            font-weight: 300;
            font-size: rem(18px);
            line-height: 120%;
            color: #d7b2ff;
            font-family: 'StyreneAWeb', sans-serif;

            @include media-breakpoint-down(md) {
                font-size: rem(14px);
            }
        }
    }
}
</style>
