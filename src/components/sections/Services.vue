<template>
    <section class="services" ref="section">
        <div class="services__wrap">
            <div class="services__content">
                <h2 class="services__heading" ref="heading">
                    What you can <span>do in DEXART:</span>
                </h2>

                <div class="services__carousel swiper" ref="carousel">
                    <ul class="services__list swiper-wrapper">
                        <li
                            class="services__service-item service-item swiper-slide"
                            v-for="item in services"
                            :key="item.title"
                        >
                            <div class="service-item__wrap">
                                <div class="service-item__img">
                                    <img :src="item.img" alt="" />
                                </div>
                                <h3 class="service-item__heading">
                                    {{ item.title }}
                                </h3>
                                <div class="service-item__text">
                                    {{ item.text }}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Swiper, { Mousewheel } from 'swiper'
import { useAnimation } from '@/composables/useAnimation'

import 'swiper/css'
import 'swiper/css/effect-fade'

import service1 from '@/assets/services/service1.svg'
import service2 from '@/assets/services/service2.svg'
import service3 from '@/assets/services/service3.svg'
import service4 from '@/assets/services/service4.svg'
import service5 from '@/assets/services/service5.svg'
import service6 from '@/assets/services/service6.svg'

const services = [
    {
        img: service1,
        title: 'Present your product or service',
        text: 'Your virtual demonstration can reach an unlimited number of viewers who will devote all their attention to your product or service',
    },
    {
        img: service2,
        title: 'Build audience loyalty',
        text: 'Take your business to a metalevel and make an emotional impact: run virtual working spaces, create gamification and quests for your audience, enjoy free communication between avatars and leverage the metaworking',
    },
    {
        img: service3,
        title: 'Create gamified educational experiences',
        text: 'Give users an opportunity to learn through play: create interactive and immersive content, rewards participants for achievements and progress',
    },
    {
        img: service4,
        title: 'Meet your audience',
        text: 'Run immersive virtual events for your clients and followers wherever they reside. VR and 3D tools will help you build engaging interactions',
    },
    {
        img: service5,
        title: 'Leverage metaworking',
        text: 'Meet new people and build real connections in the virtual world',
    },
    {
        img: service6,
        title: 'Express yourself and show your creativity',
        text: 'Show your talent and monetize your art',
    },
]

const carousel = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const section = ref<HTMLElement>()

const { enter, leave, trigger } = useAnimation()

onMounted(() => {
    document.addEventListener('scroll', handleScroll)

    trigger(
        section?.value,
        () => {
            enter(heading?.value)
            enter(carousel.value, 0.4)
        },
        () => {
            leave(heading?.value)
            leave(carousel?.value)
        }
    )

    if (carousel.value) {
        new Swiper(carousel.value, {
            slidesPerView: 1,
            spaceBetween: 64,
            direction: 'vertical',
            mousewheel: {
                releaseOnEdges: true,
                eventsTarget: section.value,
            },
            modules: [Mousewheel],
            /*        autoHeight: true, */
            speed: 1000,
            on: {
                reachBeginning: () => {
                    setTimeout(() => {
                        document.documentElement.classList.remove('locked')
                    }, 1000)
                },
                reachEnd: () => {
                    setTimeout(() => {
                        document.documentElement.classList.remove('locked')
                    }, 1000)
                },
            },
        })
    }
})

const handleScroll = () => {
    const offset = section?.value?.offsetTop || 0
    const scroll = window.scrollY

    if (offset === scroll) document.documentElement.classList.add('locked')
}
</script>

<style scoped lang="scss">
.services {
    &__wrap {
        height: 100vh;
        background-image: url('@/assets/bg/servicesbg.jpg');
        background-size: cover;
        padding-top: rem(130px);

        @include media-breakpoint-down(md) {
            padding-top: 0;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        max-width: 1350px;
        width: calc(100% - 64px);
        margin: auto;
        height: 100%;

        @include media-breakpoint-down(lg) {
            max-width: 720px;
        }

        @include media-breakpoint-down(md) {
            flex-direction: column;
            max-width: 540px;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;

        @include media-breakpoint-down(md) {
            font-size: rem(38px);
            margin-bottom: rem(40px);
            font-weight: 700;
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
        max-width: 720px;
        width: 50%;
        margin-right: 0;
        padding-top: rem(130px);
        margin-top: rem(-130px);
        cursor: pointer;

        @include media-breakpoint-down(md) {
            margin-top: 0;
            padding-top: 0;
            width: auto;
        }

        @include media-breakpoint-down(sm) {
            padding: rem(0 32px);
            margin: rem(0 -32px);
        }

        &:deep(.swiper-slide-active) {
            opacity: 1;
            transform: scale(1);
        }
    }

    &__list {
        @include unlist;
    }

    &__service-item {
        opacity: 0;
        transform: scale(0.65);
        transition: opacity 450ms ease 250ms, transform 450ms ease 300ms;
    }
}

.service-item {
    &__wrap {
        padding-right: 35%;
        position: relative;

        @include media-breakpoint-down(md) {
            padding-right: 0;
        }
    }

    &__heading {
        font-weight: 900;
        color: #fff;
        margin-bottom: rem(16px);

        @include media-breakpoint-down(md) {
            font-size: rem(22px);
            margin-bottom: rem(8px);
            max-width: 80%;
        }
    }

    &__text {
        @include p_type_3;

        color: #d7b2ff;

        @include media-breakpoint-down(md) {
            font-size: rem(16px);
            max-width: 90%;
        }
    }

    &__img {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        max-width: 45%;
        height: fit-content;

        @include media-breakpoint-down(md) {
            position: static;
            width: 120px;
            height: 120px;
            margin: 0;
            transform: translateX(-20px);
        }

        img {
            width: 100%;
            max-height: 100%;
        }
    }
}
</style>
