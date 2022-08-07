<template>
    <section class="error">
        <div class="error__wrap">
            <div class="container">
                <h1 class="error__heading" v-html="t('heading')">
                </h1>

                <RouterLink to="/" class="error__btn">{{ t('btn') }}</RouterLink>
            </div>

            <div ref="parallaxScene" class="error__scene">
                <div class="error__ufo" data-depth="1">
                    <img src="@/assets/elements/ufo.svg" alt="">
                </div>
                <div data-depth="0.5" class="hero__stones">
                    <img src="@/assets/bg/heroStones.svg" alt="" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Parallax from 'parallax-js'
import { useMedia } from '@/composables/useMedia'
import { useI18n } from 'vue-i18n'

const { isMobile } = useMedia()

const parallaxScene = ref<HTMLElement>()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'DEXART <span>is still evolving <br> this page</span>',
            btn: 'Go to Main Page',
        },
        ru: {
            heading: 'DEXART <span>еще развивает  <br> эту страницу</span>',
            btn: 'Вернуться на главную',
        }
    }
})

onMounted(() => {
    if (!isMobile()) {
        if (parallaxScene.value) {
            new Parallax(parallaxScene.value, {
                scalarX: 7,
                scalarY: 4,
                frictionX: 0.075,
            })
        }
    }

})
</script>

<style lang="scss">
.error {
    position: relative;
    overflow: hidden;

    &__wrap {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(151.34% 320.76% at 104.05% -9.76%, #241830 0%, #3A1463 34.72%, #0C0316 67.57%);
        z-index: 10;
        overflow: hidden;
        @include noise;

        @include media-breakpoint-down(md) {
            padding-top: 25vh;
            justify-content: flex-start;
            background-position: 70%;
        }
    }

    &__heading {
        color: #fff;
        font-weight: 700;
        margin-bottom: rem(48px);
        position: relative;
        z-index: 10;
        width: fit-content;
        max-width: 600px;
        position: relative;
        z-index: 20;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(16px);
        }

        span {
            display: block;
            width: fit-content;
            background: -webkit-linear-gradient(0deg,
                    #bf81ff 1.88%,
                    #d17558 51.37%,
                    #f84fe7 97.86%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__stones {
        position: absolute;
        left: 0;
        top: 0;

        z-index: 9;

        @include media-breakpoint-down(md) {
            width: 200%;
        }

        img {
            transform: translateZ(0);
            animation: rotate 180s linear infinite;
            width: 100%;
        }
    }


    &__scene {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;

        &::after {
            content: '';
            background: linear-gradient(0deg,
                    #19082b 13.19%,
                    rgba(49, 22, 77, 0.5) 50%,
                    rgba(49, 22, 77, 0) 100%);
            height: 20%;
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 14;

           /*  @include media-breakpoint-down(md) {
                height: 25%;
            } */
        }
    }

    &__ufo {
        position: absolute !important;
        right: 0;
        bottom: -20vh;
        left: unset !important;
        margin: auto;
        height: fit-content;
        z-index: 20;
        top: 20%;

        img {
            animation: ufo 10s linear infinite;
            animation-fill-mode: both;
            animation-direction: alternate;
            max-width: 60vw;
        }
    }

    &__btn {
        @extend %btn-accent;
        width: fit-content;
        position: relative;
        z-index: 20;
    }
}

@keyframes ufo {
    from {
        transform: rotate(-25deg);
    }

    to {
        transform: rotate(10deg);
    }
}
</style>