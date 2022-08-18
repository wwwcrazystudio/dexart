<template>
    <section class="partners" ref="section">
        <div class="partners__wrap">
            <picture class="partners__img" ref="img">
                <img src="@/assets/partners.jpg" alt="" />
                <source srcset="@/assets/partners.webp" type="image/webp" />
            </picture>
            <div class="container">
                <div class="partners__content">
                    <h2 class="partners__heading" ref="heading" v-html="t('heading')"></h2>

                    <div class="partners__description" ref="content">
                        <div class="partners__text">
                            The Human Guild. <br />
                            {{ t('text') }}
                        </div>

                        <a href="https://medium.com/@dexartmetaverse/dexart-metaverse-received-support-and-smart-money-from-human-guild-a6d5f0aa1604"
                            target="_blank" rel="nofollow" class="partners__btn">{{ t('btn') }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n';
import { useMedia } from '@/composables/useMedia'

gsap.config({
    force3D: true,
})

const { enter, leave, hide } = useAnimation()
const { isMobile } = useMedia()

const heading = ref<HTMLElement>()
const content = ref<HTMLElement>()
const section = ref<HTMLElement>()
const img = ref<HTMLElement>()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'Partners',
            text: 'Find out more about our partner.',
            btn: 'Watch More',
        },
        ru: {
            heading: 'Партнеры',
            text: 'Узнайте о нашем партнере.',
            btn: 'Подробнее',
        }
    }
})

onMounted(() => {
    if (!isMobile()) {
        heading.value && hide(heading.value)
        content.value && hide(content.value)

        const enterCallback = () => {
            heading.value && enter(heading.value)
            content.value && enter(content.value)
            img.value &&
                gsap.to(img.value, {
                    bottom: '-16vw',
                    duration: 1,
                })
        }

        const leaveCallback = () => {
            heading.value && leave(heading.value)
            content.value && leave(content.value)
            img.value &&
                gsap.to(img.value, {
                    bottom: -700,
                    duration: 1,
                })
        }

        ScrollTrigger.create({
            trigger: section.value,
            start: 'top center',
            end: 'bottom top',
            onEnter: () => enterCallback(),
            onEnterBack: () => enterCallback(),
            onLeave: () => leaveCallback(),
            onLeaveBack: () => leaveCallback(),
        })
    }
})
</script>

<style lang="scss">
.partners {
    &__wrap {
        background: linear-gradient(180deg,
                #0b0e28 10%,
                rgba(#080f23, 0.3) 65%,
                #391667 100%);

        background-repeat: no-repeat;
        background-size: cover;
        transition: 350ms;
        position: relative;
        height: 100vh;
        display: flex;
        align-items: center;
        overflow: hidden;

        @include media-breakpoint-down(md) {
            height: 50vh;
            overflow: visible;
            background: linear-gradient(180deg,
                    #0b0e28 10%,
                    rgba(#080f23, 0.3) 50%,
                    rgba(#391667, 0.6) 70%,
                    transparent 100%);
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }
    }

    &__img {
        display: block;
        position: absolute;
        left: 0;
        bottom: -200px;
        z-index: -1;
        transform: translateZ(0);
        will-change: bottom;
        background: #391667;
        width: 100%;

        img {
            height: auto;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
            mix-blend-mode: lighten;

            @include media-breakpoint-down(md) {
                height: 100%;
                object-position: center -230px;
            }
        }

        @include media-breakpoint-down(lg) {
            bottom: -200px !important;
        }

        @include media-breakpoint-down(md) {
            bottom: unset !important;
            height: 100vh;
            top: 0%;
        }
    }

    &__heading {
        color: #fff;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(32px);
        }
    }

    &__description {
        max-width: 470px;
    }

    &__text {
        @include p_type_1;

        color: #faf5ff;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);

        @include media-breakpoint-down(md) {
            margin-top: rem(64px);
        }
    }
}
</style>
