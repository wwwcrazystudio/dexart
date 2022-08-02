<template>
    <section class="world" ref="section" @wheel="handleStepChange">
        <div class="world__wrap">
            <div class="container">
                <div class="world__content">
                    <h2 class="world__heading" ref="heading">
                        World <span>DEXART</span>
                    </h2>

                    <div class="world__text-wrap" ref="text">
                        <transition-group name="slide">
                            <div
                                class="world__text"
                                v-for="(step, key) in steps"
                                v-show="key + 1 === currentStep"
                                :key="key"
                                v-html="step"
                            ></div>
                        </transition-group>
                    </div>

                    <div class="world__map" ref="map">
                        <img
                            src="@/assets/map.png"
                            :style="mapPosition"
                            alt=""
                        />
                    </div>
                    <div class="world__controls">
                        <button
                            class="world__control"
                            @click="currentStep >= 1 && currentStep--"
                        >
                            <svg
                                width="13"
                                height="18"
                                viewBox="0 0 13 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.18761 8.17781L11.4308 1.08638C12.094 0.627216 13 1.10191 13 1.90857V16.0914C13 16.8981 12.094 17.3728 11.4308 16.9136L1.18761 9.82219C0.613224 9.42454 0.613223 8.57546 1.18761 8.17781Z"
                                    fill="#E9D4FF"
                                />
                            </svg>
                        </button>
                        <button
                            class="world__control"
                            @click="currentStep < 4 && currentStep++"
                        >
                            <svg
                                width="13"
                                height="18"
                                viewBox="0 0 13 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.8124 8.17781L1.56921 1.08638C0.905979 0.627216 0 1.10191 0 1.90857V16.0914C0 16.8981 0.905977 17.3728 1.56921 16.9136L11.8124 9.82219C12.3868 9.42454 12.3868 8.57546 11.8124 8.17781Z"
                                    fill="#E9D4FF"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { debounce } from 'debounce'
import { useAnimation } from '@/composables/useAnimation'

const { enter, leave, trigger } = useAnimation()

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const map = ref<HTMLElement>()
const currentStep = ref<number>(1)

const steps = [
    `<p> DEXART consists of regions surrounding the main district in the center. Each region is divided into districts and has its own unique landscape, topography and urbanization. </p> <p> Each region is full of different possibilities and is inhabited by various characters, who engage the users into game interactions </p>`,
    `<p> The center of the world is the DEXART Portal. To the west of it lie flat lands, built up with cities. They go to the only DEXART sea in the world. </p> <p> To the north of the DEXART Portal lie mountainous regions, where unusual settlements and cities soar above the mountains. </p> <p> To the east of the DEXART Portal lies a huge forest, beyond which lie urban areas discovered by pioneers in search of new land for the development of business and technology companies. </p>`,
    `<p> New urban areas are a mixture of futuristic living spaces and entertainment centers. There is a lot of unusual real estate and opportunities for creating leisure centers, interactive arcades, etc. </p> <p> South of the DEXART Portal is the Great Desert. These are several regions united by an arid climate and a diverse desert landscape (from sandy desert to rocky and salty). </p>`,
    `<p> In the middle of the Great Desert lies the Oasis of the Way. </p> <p> This is the spiritual center of DEXART - here are the temples of all possible religions. </p>`,
]

onMounted(() => {
    document.addEventListener('scroll', handleScroll)

    trigger(
        section.value,
        () => {
            enter(heading.value, 0.6)
            enter(text.value, 0.8)
            enter(map.value)
        },
        () => {
            leave(heading.value)
            leave(text.value, 0.4)
        }
    )
})

const handleStepChange = debounce((e: WheelEvent) => {
    if (e.deltaY < 0) {
        if (currentStep.value === 1) {
            document.documentElement.classList.remove('locked')
            window.scrollBy(0, -10)
        } else {
            e.preventDefault()
            e.stopPropagation()
            currentStep.value -= 1
        }

        return
    }

    if (e.deltaY > 0) {
        if (currentStep.value === 4) {
            document.documentElement.classList.remove('locked')
            window.scrollBy(0, 10)
        } else {
            e.preventDefault()
            e.stopPropagation()
            currentStep.value += 1
        }
    }
}, 500)

const handleScroll = () => {
    const offset = section?.value?.offsetTop || 0
    const scroll = window.scrollY

    if (offset === scroll) {
        document.documentElement.classList.add('locked')
        return
    }

    if (currentStep.value === 1 || currentStep.value === 4) {
        document.documentElement.classList.remove('locked')
        return
    }
}

const mapPosition = computed(() => {
    switch (currentStep.value) {
        case 1:
            return {
                transform: 'scale(1.5) translate(560px, 0)',
            }
        case 2:
            return {
                transform: 'scale(2.2) translate(210px, 30px)',
            }
        case 3:
            return {
                transform: 'scale(1.6) translate(-100px, -50px)',
            }
        case 4:
            return {
                transform: 'scale(1.3) translate(390px, -20px)',
            }
        default:
            return {
                transform: 'scale(0)',
            }
    }
})
</script>

<style scoped lang="scss">
.world {
    overflow: hidden;
    &__wrap {
        height: 100vh;
        position: relative;
        padding: rem(128px 0);
        display: grid;
        overflow: hidden;
        z-index: 10;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            background-image: linear-gradient(
                90deg,
                #1c0b2b 30%,
                transparent 100%
            );
            width: 100%;
            height: 100%;
        }

        @include media-breakpoint-down(md) {
            padding: rem(64px 0);
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        height: 100%;
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

    &__text-wrap {
        position: relative;
    }

    &__map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        height: 100%;

        @include media-breakpoint-down(md) {
            top: unset;
            height: auto;
            width: 240vw;
            bottom: -80px;
            left: -690px;
        }

        img {
            width: 100%;
            transition: 1000ms;
            transition-delay: 600ms;
        }
    }

    &__controls {
        align-items: center;
        margin-top: auto;
        display: none;

        @include media-breakpoint-down(sm) {
            display: flex;
        }
    }

    &__control {
        position: relative;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: 350ms;
        margin-right: rem(8px);

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 2px;
            border-radius: 8px;
            z-index: -1;
            background: linear-gradient(
                90deg,
                #7c1dd3 2.02%,
                #912eef 49.93%,
                #ee40ff 96.86%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: 350ms;
        }

        &::after {
            content: '';
            position: absolute;
            background: linear-gradient(
                90deg,
                #7c1dd3 2.02%,
                #912eef 49.93%,
                #ee40ff 96.86%
            );
            background-repeat: no-repeat;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            top: 1px;
            left: 1px;
            margin: auto;
            opacity: 0;
            transition: 350ms;
            z-index: -1;
            border-radius: 8px;
        }

        &:hover {
            &::after {
                opacity: 1;
                transition: 350ms;
            }
        }

        &:active {
            transform: scale(0.85);
            transition: 350ms;
        }
    }
}

.slide-enter-active,
.slide-leave-active {
    transition: 1s ease;
}

.slide-enter-active {
    transition-delay: 500ms;
    position: absolute;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    position: absolute;
    transform: translateY(100px);
}
</style>
