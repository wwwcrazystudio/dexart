<template>
    <section class="promo" ref="section">
        <div class="promo__wrap">
            <div class="container">
                <h2 class="promo__heading" ref="heading">
                    Watch Dexart <span>Metaverse</span>
                </h2>
                <transition name="fade">
                    <button
                        @click="play"
                        v-if="!isPlaying"
                        class="promo__play-btn"
                    >
                        Play
                    </button>
                </transition>

                <video
                    preload="none"
                    class="promo__video"
                    src="@/assets/videos/promo.mp4"
                    ref="video"
                ></video>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { onMounted, ref } from 'vue'

const heading = ref<HTMLElement>()
const section = ref<HTMLElement>()
const video = ref<HTMLVideoElement>()
const isPlaying = ref<boolean>(false)

const { enter, leave, trigger } = useAnimation()

onMounted(() => {
    trigger(
        section?.value,
        () => {
            enter(heading?.value)
        },
        () => {
            leave(heading?.value)
        }
    )

    if (video.value) {
        video.value.volume = 0.3
        video.value.addEventListener('ended', () => {
            isPlaying.value = false
        })

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio !== 1 && !video.value.paused) {
                        video.value.pause()
                        video.value.currentTime = 0
                        isPlaying.value = false
                        return
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
        isPlaying.value = true
    }
}
</script>

<style scoped lang="scss">
.promo {
    &__wrap {
        height: 100%;
        background-size: cover;
        position: relative;
        padding: rem(64px 0);
        background-position: center;
    }

    &__heading {
        color: #fff;
        max-width: 470px;

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

    &__play-btn {
        background: linear-gradient(
            90deg,
            #7c1dd3 2.02%,
            #912eef 49.93%,
            #ee40ff 96.86%
        );
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
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        transition: 350ms;

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
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
