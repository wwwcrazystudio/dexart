<template>
    <section class="partners" ref="section">
        <div class="partners__wrap">
            <img
                src="@/assets/partnersbg.jpg"
                class="partners__img"
                ref="img"
                alt=""
            />
            <div class="container">
                <div class="partners__content">
                    <h2 class="partners__heading" ref="heading">Partners</h2>

                    <div class="partners__description" ref="content">
                        <div class="partners__text">
                            The Human Guild. Find out more about our partner.
                        </div>

                        <button class="partners__btn">Watch More</button>
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

const { enter, leave, trigger } = useAnimation()

const heading = ref<HTMLElement>()
const content = ref<HTMLElement>()
const section = ref<HTMLElement>()
const img = ref<HTMLElement>()

onMounted(() => {
    trigger(
        section.value,
        () => {
            if (heading.value)
                gsap.from(heading.value, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                })
            if (content.value)
                gsap.from(content.value, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                })
            if (img.value)
                gsap.to(img.value, {
                    bottom: -500,
                    duration: 0.5,
                })
        },
        () => {
            leave(heading.value)
        }
    )
})
</script>

<style scoped lang="scss">
.partners {
    &__wrap {
        background: linear-gradient(
            180deg,
            rgba(#0b0e28, 0.6) 16.57%,
            rgba(#381665, 0.8) 74.36%
        );

        padding: rem(112px 0);
        background-repeat: no-repeat;
        background-size: cover;
        transition: 350ms;
        position: relative;

        @include media-breakpoint-down(md) {
            padding: rem(64px 0);
            height: 100vh;
            padding-top: rem(128px);
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
        height: auto;
        width: 100%;
        object-fit: cover;
        object-position: bottom;
        transition: 1000ms;
        z-index: -1;

        @include media-breakpoint-down(md) {
            bottom: 0 !important;
            height: 100%;
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
