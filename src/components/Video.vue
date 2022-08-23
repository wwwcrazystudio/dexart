<template>
    <div class="video" ref="wrap">
        <transition name="fade">
            <div class="video__btn-wrap" v-if="!isPlaying">
                <button @click="play" ref="btn" class="video__btn">
                    {{ t('play') }}
                </button>
            </div>
        </transition>
        <video @click="pause" :src="lazySrc" preload="none" class="video__container" ref="video">
        </video>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n';
import { useAnimation } from '@/composables/useAnimation'
import { useMedia } from '../composables/useMedia';

export interface VideoProps {
    src: string
    animateBtn?: boolean
}

const props = defineProps<VideoProps>()

const video = ref<HTMLVideoElement>()
const isPlaying = ref<boolean>(false)
const isInViewport = ref<boolean>(false)
const wrap = ref<HTMLElement>()
const btn = ref<HTMLElement>()

const { t, locale } = useI18n({
    messages: {
        en: {
            play: 'Play',
        },
        ru: {
            play: 'Запустить',
        }
    }
})

const { enter, leave, hide } = useAnimation()
const { isMobile } = useMedia()

onMounted(() => {
    if (wrap.value)
        ScrollTrigger.create({
            trigger: wrap.value,
            start: 'top 200%',
            onEnter: () => {
                isInViewport.value = true
            }
        })

    const enterCallback = () => {
        btn.value &&
            enter(btn.value, 0, {
                opacity: 0,
                duration: 1,
            })
    }

    const leaveCallback = () => {
        btn.value &&
            leave(btn.value, 0, {
                opacity: 0,
                duration: 1,
            })
    }

    if (!isMobile() && props.animateBtn) {
        btn.value && hide(btn.value)

        if (wrap.value)
            ScrollTrigger.create({
                trigger: wrap.value,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => enterCallback(),
                onLeave: () => leaveCallback(),
                onEnterBack: () => enterCallback(),
                onLeaveBack: () => leaveCallback(),
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


const lazySrc = computed(() => {
    return isInViewport.value ? props.src : ''
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

watch(() => props.src, () => {
    if (video.value) {
        video.value.pause()
        video.value.currentTime = 0
        isPlaying.value = false
    }
})
</script>

<style lang="scss">
.video {
    &__btn-wrap {
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
        z-index: 10;
    }

    &__btn {
        background: linear-gradient(90deg,
                #7c1dd3 2.02%,
                #912eef 49.93%,
                #ee40ff 96.86%);
        width: 112px;
        height: 112px;
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

        @media (max-width: 500px) {
            width: 65px;
            height: 65px;
            font-size: rem(11px);
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

            @media (max-width: 500px) {
                width: 80px;
                height: 80px;
            }
        }
    }

    &__container {
        width: 100%;
        object-fit: cover;
        height: auto;
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