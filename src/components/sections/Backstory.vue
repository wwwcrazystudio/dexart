<template>
    <section class="backstory" ref="section">
        <div class="backstory__wrap">
            <img
                src="@/assets/elements/stone.svg"
                class="backstory__stone backstory__stone--1"
                alt=""
            />
            <img
                src="@/assets/elements/stone2.svg"
                class="backstory__stone backstory__stone--2"
                alt=""
            />
            <div class="container">
                <div class="backstory__content" ref="content">
                    <h2 class="backstory__heading" ref="heading">
                        World <span>backstory</span>
                    </h2>

                    <div class="backstory__text">
                        <div ref="text">
                            <p>
                                When blockchain technologies started evolving in
                                the real world, when complete decentralization
                                became a question of time, when crypto-projects
                                started emerging one by one a critical mass of
                                information was formed.
                            </p>
                            <p>
                                It became the foundation of the DEXART metaverse
                                — it became the blockchain singularity. A
                                compressed mass of ideas, concepts and projects
                                that was so dense and heavy that at some point
                                it exploded.
                            </p>
                            <p>
                                It was the Big Flash that became the DEXART
                                portal, opening the way to the virtual world.
                            </p>
                        </div>

                        <button class="backstory__btn" ref="btn">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { onMounted, ref } from 'vue'

const { enter, leave, trigger } = useAnimation()

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const btn = ref<HTMLElement>()
const content = ref<HTMLElement>()

onMounted(() => {
    trigger(
        section.value,
        () => {
            enter(heading.value)
            enter(text.value, 0.4)
            enter(btn.value, 0.7)
        },
        () => {
            leave(content.value)
        }
    )
})
</script>

<style scoped lang="scss">
.backstory {
    @include noise;

    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        background-image: linear-gradient(
            0deg,
            #19082b 13.19%,
            rgba(49, 22, 77, 0) 30%
        );
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
    }

    &__wrap {
        background: linear-gradient(336.67deg, #11071b 21.87%, #1d0b2c 83.34%);
        position: relative;
        background-image: url('@/assets/bg/backstoryBg.jpg');
        background-size: cover;
        height: 100vh;
        overflow: hidden;
        padding-top: rem(30px);

        &::before {
            content: '';
            background-image: url('@/assets/stones.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 1000px;
            height: 1000px;
            position: absolute;
            left: -25%;
            top: 25%;
        }

        @include media-breakpoint-down(md) {
            &::after {
                content: '';
                background-image: url('@/assets/backstoryBlur.svg');
                width: 100%;
                height: 100%;
                margin: auto;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                display: block;
                position: absolute;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                z-index: 1;
            }
        }
    }

    &__stone {
        position: absolute;
        z-index: 1;

        &--1 {
            right: 70px;
            top: 70%;
            width: 40px;
            animation: float 50s linear infinite;
            animation-direction: reverse;
        }

        &--2 {
            width: 95px;
            top: 30%;
            left: 40%;
            animation: float 50s linear infinite;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        padding-top: rem(64px);
        z-index: 10;
        position: relative;

        @include media-breakpoint-down(lg) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(32px);

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
        max-width: 595px;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(36px);
    }
}

@keyframes float {
    0% {
        transform: translate(0, 0) rotate(0);
    }

    25% {
        transform: translate(-100px, 100px) rotate(45deg);
    }

    50% {
        transform: translate(-50px, 200px) rotate(90deg);
    }

    75% {
        transform: translate(20px, 90px) rotate(175deg);
    }

    100% {
        transform: translate(0, 0) rotate(0);
    }
}
</style>
