<template>
    <div class="signup-banner">
        <div class="signup-banner__wrap">
            <div class="signup-banner__scene" ref="scene">
                <div class="signup-banner__stone signup-banner__stone--1" data-depth="0.2">
                    <img src="@/assets/elements/stone.svg" alt="" />
                </div>
                <div class="signup-banner__stone signup-banner__stone--2" data-depth="0.2">
                    <img src="@/assets/elements/stone2.svg" />
                </div>
            </div>
            <h2 class="signup-banner__heading" v-html="t('heading')">

            </h2>

            <div class="signup-banner__content">
                <div class="signup-banner__text">
                    {{ t('text') }}
                </div>

                <a href="https://t.me/dexartchannel" rel="nofollow" target="_blank" class="signup-banner__btn">{{
                        t('btn')
                }}</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Parallax from 'parallax-js'
import { useMedia } from '@/composables/useMedia'
import { useI18n } from 'vue-i18n';

const { isMobile } = useMedia()

const scene = ref<HTMLElement>()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'Join our <span>community</span>',
            text: 'To be among the first to step into DEXART!',
            btn: 'Sign up',
        },
        ru: {
            heading: 'Присоединяйтесь к <span>сообществу</span> ',
            text: 'Чтобы быть первым в мире DEXART!',
            btn: 'Подписаться',
        }
    }
})

onMounted(() => {
    if (!isMobile()) {
        if (scene.value)
            new Parallax(scene.value, {
                scalarX: 6,
                scalarY: 6,
            })
    }
})
</script>

<style lang="scss">
.signup-banner {
    &__wrap {
        background: #6a1dac;
        background-image: url('@/assets/tgbig.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 100%;
        border-radius: 48px;
        padding: rem(48px);
        padding-right: rem(260px);
        display: flex;
        justify-content: space-between;
        position: relative;

        @include media-breakpoint-down(lg) {
            padding-right: rem(48px);
            background-image: linear-gradient(0deg,
                    rgba(#6a1dac, 0.4),
                    rgba(#6a1dac, 0.4)),
                url('@/assets/tgbig.png');
        }

        @include media-breakpoint-down(md) {
            background-position: 130% 64px;
            flex-direction: column;
        }

        @include media-breakpoint-down(sm) {
            padding: rem(32px);
            margin: rem(0 -16px);
        }
    }

    &__scene {
        position: absolute !important;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }

    &__stone {
        position: absolute !important;
        transform: translateZ(0);
        will-change: transform;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        &--1 {
            width: 92px;
            height: 112px;
            right: -50px !important;
            top: -70px !important;
            left: unset !important;

            img {
                animation: rotate 40s linear infinite;
            }

            @include media-breakpoint-down(md) {
                width: 77px;
                height: 95px;
                right: 0px !important;
                top: -30px !important;
            }
        }

        &--2 {
            width: 91px;
            height: 103px;
            background-size: contain;
            left: 5px !important;
            top: unset !important;
            bottom: -35px !important;

            img {
                animation: rotate 40s linear infinite;
                animation-direction: reverse;
            }

            @include media-breakpoint-down(md) {
                bottom: -70px !important;
                left: 20px !important;
            }
        }
    }

    &__content {
        max-width: 300px;
        width: 40%;

        @include media-breakpoint-down(md) {
            width: 100%;
        }
    }

    &__heading {
        @include h2;

        color: #fff;
        max-width: 470px;
        font-size: rem(42px);

        @include media-breakpoint-down(md) {
            font-size: rem(38px);
            font-weight: 700;
            margin-bottom: rem(16px);
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
        font-size: rem(26px);

        color: #faf5ff;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);

        @include media-breakpoint-down(sm) {
            margin-top: rem(64px);
            width: 80%;
        }
    }
}
</style>
