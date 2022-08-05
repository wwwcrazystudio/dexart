<template>
    <section class="services" ref="section">
        <div class="services__wrap">
            <div class="services__content" ref="content">
                <h2 class="services__heading" ref="heading">
                    What you can <span>do in DEXART:</span>
                </h2>

                <div class="services__carousel" ref="carousel">
                    <ul class="services__list">
                        <li
                            class="services__service-item service-item"
                            v-for="item in services"
                            :key="item.title"
                            ref="items"
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
import { useAnimation } from '@/composables/useAnimation'
import { useMedia } from '@/composables/useMedia'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import service1 from '@/assets/services/service1.svg'
import service2 from '@/assets/services/service2.svg'
import service3 from '@/assets/services/service3.svg'
import service4 from '@/assets/services/service4.svg'
import service5 from '@/assets/services/service5.svg'
import service6 from '@/assets/services/service6.svg'

gsap.config({
    force3D: true,
})

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
const items = ref<HTMLElement[]>()
const content = ref<HTMLElement>()

const { enter, leave, hide } = useAnimation()
const { isTablet } = useMedia()

onMounted(() => {
    heading.value && hide(heading.value)
    carousel.value && hide(carousel.value)

    if (content.value)
        ScrollTrigger.create({
            trigger: content.value,
            start: 'top 65%',
            end: 'bottom center',
            onEnter: () => {
                heading.value && enter(heading.value)
                carousel.value && enter(carousel.value)
            },
            onLeave: () => {
                heading.value &&
                    leave(heading.value, 0, {
                        opacity: 0,
                        duration: 1,
                    })
                carousel.value &&
                    leave(carousel.value, 0, {
                        opacity: 0,
                        duration: 1,
                    })
            },
            onEnterBack: () => {
                heading.value && enter(heading.value)
                carousel.value && enter(carousel.value)
            },
            onLeaveBack: () => {
                heading.value &&
                    leave(heading.value, 0, {
                        opacity: 0,
                        duration: 1,
                    })
                carousel.value &&
                    leave(carousel.value, 0, {
                        opacity: 0,
                        duration: 1,
                    })
            },
        })

    if (section.value && !isTablet())
        ScrollTrigger.create({
            trigger: section.value,
            start: 'top 50px',
            end: 'bottom center',
            pin: heading.value,
        })

    items.value?.forEach((element) => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top +=90%',
            end: 'top +=150px',
            onEnter: () => {
                gsap.to(element, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                })
            },
            onEnterBack: () => {
                gsap.to(element, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                })
            },
            onLeave: () => {
                gsap.to(element, {
                    opacity: 0,
                    scale: 1,
                    duration: 0.5,
                })
            },
            onLeaveBack: () => {
                gsap.to(element, {
                    opacity: 0,
                    scale: 0.65,
                    duration: 0.5,
                })
            },
        })
    })
})
</script>

<style scoped lang="scss">
.services {
    &__wrap {
        min-height: 100vh;
        padding-top: rem(130px);
        padding-bottom: rem(130px);
        background-image: linear-gradient(0deg, #1c0b2b 20%, transparent 60%);

        @include media-breakpoint-down(lg) {
            min-height: 60vh;
        }

        @include media-breakpoint-down(md) {
            padding-top: rem(100px);
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        max-width: 1350px;
        width: calc(100% - 64px);
        margin: auto;

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
        position: relative;

        &::after {
            content: '';
            background-image: url('@/assets/blurs/servicesBlur.png');
            width: 600px;
            height: 600px;
            position: absolute;
            background-size: contain;
            top: -10px;
            left: 90%;
            background-repeat: no-repeat;
        }

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
    }

    &__list {
        @include unlist;
    }

    &__service-item {
        transform: translateZ(0);
        will-change: transform;
        height: calc(50vh - 32px);

        @include media-breakpoint-down(lg) {
            height: calc(25vh - 32px);
        }

        @include media-breakpoint-down(md) {
            height: auto;
            margin-bottom: rem(56px);
        }

        &:nth-of-type(n + 3) {
            opacity: 0;
            transform: scale3d(0.65, 0.65, 0.65);
        }
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
            transform: translate3d(-20px, 0, 0);
        }

        img {
            width: 100%;
            max-height: 100%;
        }
    }
}
</style>
