<template>
    <section class="about" ref="section">
        <div class="about__wrap">
            <img
                src="@/assets/elements/stone.svg"
                class="about__stone about__stone--1"
                alt=""
            />
            <img
                src="@/assets/elements/stone2.svg"
                class="about__stone about__stone--2"
                alt=""
            />
            <div class="container">
                <div class="about__content">
                    <h2 class="about__heading" ref="heading">
                        Metaverses create <span>a magical</span> future
                    </h2>
                    <div class="about__text" ref="text">
                        <p>
                            And we contribute to the new era of social media
                            communications of Web 3.0
                        </p>
                        <p>
                            We help businesses and opinion leaders to create
                            deep and meaningful communication with their clients
                            and communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAnimation } from '@/composables/useAnimation'

const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const section = ref<HTMLElement>()

const { enter, leave, trigger } = useAnimation()

onMounted(() => {
    trigger(
        section?.value,
        () => {
            enter(heading?.value)
            enter(text?.value, 0.4)
        },
        () => {
            leave(heading?.value)
            leave(text?.value, 0.4)
        }
    )
})
</script>

<style scoped lang="scss">
.about {
    @include noise;

    overflow: hidden;
    position: relative;

    &__wrap {
        background: url('@/assets/bg/aboutBg.jpg');
        background-size: cover;
        height: 100vh;
        display: flex;
        align-items: center;
        position: relative;

        @include media-breakpoint-down(md) {
            background-position: 70%;
        }

        &::before {
            content: '';
            background: linear-gradient(
                180deg,
                #19082b 1.55%,
                rgba(49, 22, 77, 0) 56.46%
            );
            top: 0;
            left: 0;
            width: 100%;
            height: 30%;
            position: absolute;
        }
    }

    &__stone {
        position: absolute;
        z-index: 10;

        &--1 {
            right: 190px;
            top: 70%;
            width: 40px;
            animation: rotate 45s linear infinite;

            animation-direction: reverse;

            @include media-breakpoint-down(md) {
                left: 32px;
                top: 90%;
            }
        }

        &--2 {
            width: 105px;
            top: 25%;
            right: 190px;
            animation: rotate 50s linear infinite;

            @include media-breakpoint-down(md) {
                right: 20px;
                top: 90px;
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
            background: -webkit-linear-gradient(
                0deg,
                #bf81ff 1.88%,
                #d17558 98.37%
            );
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

@keyframes rotate {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
