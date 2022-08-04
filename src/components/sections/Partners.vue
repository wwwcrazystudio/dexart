<template>
    <section class="partners" ref="section">
        <div class="partners__wrap">
            <picture class="partners__img" ref="img">
                <img src="@/assets/partners.jpg" alt="" />
                <source srcset="@/assets/partners.webp" type="image/webp" />
            </picture>
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
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { enter, leave, hide } = useAnimation()

const heading = ref<HTMLElement>()
const content = ref<HTMLElement>()
const section = ref<HTMLElement>()
const img = ref<HTMLElement>()

onMounted(() => {
    heading.value && hide(heading.value)
    content.value && hide(content.value)

    const enterCallback = () => {
        heading.value && enter(heading.value)
        content.value && enter(content.value)
        img.value &&
            gsap.to(img.value, {
                bottom: -500,
                duration: 1,
            })
    }

    const leaveCallback = () => {
        heading.value && leave(heading.value)
        content.value && leave(content.value)
        img.value &&
            gsap.to(img.value, {
                bottom: -200,
                duration: 1,
            })
    }

    ScrollTrigger.create({
        trigger: section.value,
        start: 'top 70%',
        end: 'bottom center',
        onEnter: () => enterCallback(),
        onEnterBack: () => enterCallback(),
        onLeave: () => leaveCallback(),
        onLeaveBack: () => leaveCallback(),
    })
})
</script>

<style scoped lang="scss">
.partners {
    &__wrap {
        background: linear-gradient(
            180deg,
            #0b0e28 10%,
            rgba(#080f23, 0.3) 40%,
            #391667 100%
        );

        padding: rem(112px 0);
        background-repeat: no-repeat;
        background-size: cover;
        transition: 350ms;
        position: relative;
        overflow: hidden;

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
        z-index: -1;

        img {
            height: auto;
            width: 100%;
            object-fit: cover;
            object-position: bottom;
        }

        @include media-breakpoint-down(lg) {
            bottom: -200px !important;
        }

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
