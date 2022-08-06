<template>
    <section class="promo" ref="section">
        <div class="promo__wrap">
            <div class="container">
                <h2 class="promo__heading" ref="heading" v-html="t('heading')">

                </h2>
                <transition name="fade">
                    <div class="promo__play-btn-wrap" v-if="!isPlaying">
                        <button @click="play" ref="btn" class="promo__play-btn">
                            {{ t('play') }}
                        </button>
                    </div>
                </transition>

                <video @click="pause" :src="videoSrc" preload="none" class="promo__video" ref="video">

                </video>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { computed, onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n';

import promoEn from '@/assets/videos/promo_en.mp4'
import promoRu from '@/assets/videos/promo_ru.mp4'
import { useMedia } from '../../composables/useMedia';

const heading = ref<HTMLElement>()
const section = ref<HTMLElement>()
const video = ref<HTMLVideoElement>()
const btn = ref<HTMLElement>()
const isPlaying = ref<boolean>(false)

const { isMobile } = useMedia()
const { enter, leave, hide } = useAnimation()

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'Watch Dexart <span>Metaverse</span>',
            play: 'Play',
        },
        ru: {
            heading: 'Посмотрите на <span>метавселенную</span> Dexart.',
            play: 'Запустить',
        }
    }
})

onMounted(() => {
    if (!isMobile()) {
        heading.value && hide(heading.value)
        btn.value && hide(btn.value)

        if (heading.value)
            ScrollTrigger.create({
                trigger: heading.value,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => {
                    heading.value && enter(heading.value)
                    btn.value &&
                        enter(btn.value, 0, {
                            opacity: 0,
                            duration: 1,
                        })
                },
                onLeave: () => {
                    heading.value && leave(heading.value)
                    btn.value &&
                        leave(btn.value, 0, {
                            opacity: 0,
                            duration: 1,
                        })
                },
                onEnterBack: () => {
                    heading.value && enter(heading.value)
                    btn.value &&
                        enter(btn.value, 0, {
                            opacity: 0,
                            duration: 1,
                        })
                },
                onLeaveBack: () => {
                    heading.value && leave(heading.value)
                    btn.value &&
                        leave(btn.value, 0, {
                            opacity: 0,
                            duration: 1,
                        })
                },
            })
    }

    if (video.value) {
        video.value.volume = 0.3
        video.value.addEventListener('ended', () => {
            isPlaying.value = false
        })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio !== 1) {
                        if (video.value) {
                            video.value.style.opacity = '0'
                            setTimeout(() => {
                                if (video.value) {
                                    video.value.pause()
                                    video.value.currentTime = 0
                                    isPlaying.value = false
                                }
                            }, 350)

                            return
                        }
                    }
                })
            },
            { threshold: 0.2 }
        )
        observer.observe(video.value)
    }
})

const play = () => {
    if (video.value) {
        video.value.play()
        video.value.style.opacity = '1'
        isPlaying.value = true
    }
}

const pause = () => {
    if (video.value) {
        video.value.pause()
        isPlaying.value = false
    }
}

const videoSrc = computed(() => {

    if (video.value) {
        video.value.pause()
        video.value.currentTime = 0
        isPlaying.value = false
    }

    if (locale.value === 'ru') return promoRu

    return promoEn
})
</script>

<style lang="scss">
.promo {
    &__wrap {
        min-height: 100vh;
        background-size: cover;
        position: relative;
        padding: rem(64px 0);
        background-position: center;
        z-index: 10;
    }

    &__heading {
        color: #fff;
        max-width: 470px;

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

    &__play-btn-wrap {
        animation: pulsateScale 1.5s linear infinite;
        animation-direction: alternate-reverse;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &__play-btn {
        background: linear-gradient(90deg,
                #7c1dd3 2.02%,
                #912eef 49.93%,
                #ee40ff 96.86%);
        width: 170px;
        height: 170px;
        box-shadow: inset -1px 2px 8px #ece7fa;
        border-radius: 50%;
        color: #faf5ff;
        font-weight: 700;
        font-size: rem(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        transition: 350ms;
        position: relative;

        @include media-breakpoint-down(md) {
            width: 112px;
            height: 112px;
        }

        &::before {
            content: '';
            width: 120%;
            height: 120%;
            border: 1px solid #d7b2ff;
            position: absolute;
            left: -10%;
            top: -10%;
            border-radius: 50%;
            transition: 350ms;
        }

        &:hover {
            &::before {
                width: 115%;
                height: 115%;
                left: -7.5%;
                top: -7.5%;
                transition: 350ms;
            }
        }

        &:active {
            width: 120px;
            height: 120px;
            transition: 350ms;
        }
    }

    &__video {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
        transition: 350ms;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>