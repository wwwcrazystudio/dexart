<template>
    <section class="about" ref="section">
        <div class="about__wrap">
            <div class="about__scene" ref="scene">
                <div data-depth="0.4" class="about__stone about__stone--1">
                    <img src="@/assets/elements/stone.svg" />
                </div>
                <div data-depth="0.2" class="about__stone about__stone--2">
                    <img src="@/assets/elements/stone2.svg" />
                </div>
            </div>
            <div class="container">
                <div class="about__content" ref="content">
                    <h2 class="about__heading" ref="heading" v-html="t('heading')">

                    </h2>
                    <div class="about__text" ref="text">
                        <p v-html="t('text1')">
                        </p>
                        <p v-html="t('text2')">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Parallax from 'parallax-js'
import { useMedia } from '@/composables/useMedia'
import { useI18n } from 'vue-i18n'

const { isMobile } = useMedia()


const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const content = ref<HTMLElement>()
const section = ref<HTMLElement>()
const scene = ref<HTMLElement>()
const parallaxInstance = ref<any>()

const isPassedThrough = ref<boolean>(false)

const { enter, leave, hide } = useAnimation()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'Metaverses create <span>a magical</span> future',
            text1: 'And we&nbsp;contribute to&nbsp;the new era of&nbsp;social media communications of&nbsp;Web&nbsp;3.0',
            text2: 'We&nbsp;help businesses and opinion leaders to&nbsp;create deep and meaningful communication with their clients and communities.',
        },
        ru: {
            heading: 'Мета&shyвселенные создают <span>магическое</span> будущее.',
            text1: 'И&nbsp;мы&nbsp;вносим свой вклад в&nbsp;новую эру социальных медиакоммуникаций Web&nbsp;3.0',
            text2: 'Мы&nbsp;помогаем бизнесу и&nbsp;лидерам мнений создать глубокую и&nbsp;эмоциональную коммуникацию со&nbsp;своими клиентами и&nbsp;сообществами.',
        }
    }
})


onMounted(() => {
    const enterCallback = () => {
        if (scene.value && !parallaxInstance.value) {
            parallaxInstance.value = new Parallax(scene.value, {
                scalarX: 6,
                scalarY: 6,
            })
        }

        heading.value && enter(heading.value)
        text.value && enter(text.value)
    }

    const leaveCallback = () => {
        parallaxInstance.value && parallaxInstance.value.disable()
        heading.value && leave(heading.value)
        text.value && leave(text.value)
        isPassedThrough.value = true
    }

    if (!isMobile()) {
        heading.value && hide(heading.value)
        text.value && hide(text.value)

        if (section.value)
            ScrollTrigger.create({
                trigger: section.value,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => enterCallback(),
                onLeave: () => leaveCallback(),
                onEnterBack: () => enterCallback(),
                onLeaveBack: () => leaveCallback(),
            })
    }
})

</script>

<style lang="scss">
.about {
    overflow: hidden;
    position: relative;

    &__wrap {
        background-image: linear-gradient(180deg,
                #19082b 1.55%,
                rgba(49, 22, 77, 0) 56.46%);
        background-size: cover;
        display: flex;
        align-items: center;
        position: relative;
        min-height: 100vh;

        @include media-breakpoint-down(lg) {
            min-height: 80vh;
        }

        @include media-breakpoint-down(md) {
            background-position: center;
            background-image: url('@/assets/blurs/aboutBlur.png'),
                linear-gradient(180deg,
                    #19082b 1.55%,
                    rgba(49, 22, 77, 0) 56.46%);
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
    }

    &__stone {
        left: unset !important;
        position: absolute !important;

        &--1 {
            right: 190px !important;
            top: 70% !important;
            width: 40px;

            img {
                transform: translateZ(0);
                animation: rotate 45s linear infinite;
                animation-direction: reverse;
                width: 100%;
            }

            @include media-breakpoint-down(lg) {
                left: 32px !important;
                top: 90%;
            }
        }

        &--2 {
            width: 105px;
            top: 25% !important;
            right: 190px !important;

            img {
                transform: translateZ(0);
                animation: rotate 50s linear infinite;
                width: 100%;
            }

            @include media-breakpoint-down(lg) {
                right: 20px !important;
                top: 90px !important;
                width: 64px;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(32px);
            max-width: 60%;
        }

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

    &__text {
        @include p_type_1;

        color: #faf5ff;
        max-width: 590px;
        width: 50%;

        @include media-breakpoint-down(md) {
            width: 100%;
        }
    }
}
</style>
