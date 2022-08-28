<template>
    <section class="promo" ref="section">
        <div class="promo__wrap">
            <div class="container">
                <h2 class="promo__heading" ref="heading" v-html="t('heading')">

                </h2>
                <Video :src="videoSrc" class="promo__video" animateBtn />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { computed, onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n';
import Video from '../Video.vue';

import promoEn from '@/assets/videos/promo_en.mp4'
import promoRu from '@/assets/videos/promo_ru.mp4'
import { useMedia } from '../../composables/useMedia';
import gsap from 'gsap';


const heading = ref<HTMLElement>()
const section = ref<HTMLElement>()

const isPassedThrough = ref<boolean>(false)


const { isMobile } = useMedia()
const { enter, leave, hide } = useAnimation()

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'Watch Dexart <span>Metaverse</span>',
        },
        ru: {
            heading: 'Посмотрите на <span>мета&shyвселенную</span> Dexart.',
        }
    }
})

const videoSrc = computed(() => {
    if (locale.value === 'ru') return promoRu

    return promoEn
})

onMounted(() => {
    const enterCallback = () => {
        heading.value && enter(heading.value)
    }

    const leaveCallback = () => {
        heading.value && leave(heading.value)
        isPassedThrough.value = true
    }

    if (!isMobile()) {
        heading.value && hide(heading.value)

        if (heading.value)
            ScrollTrigger.create({
                trigger: heading.value,
                start: 'top bottom',
                end: 'bottom top',
                onEnter: () => enterCallback(),
                onLeave: () => leaveCallback(),
                onEnterBack: () => enterCallback(),
                onLeaveBack: () => leaveCallback(),
            })
    }
})
</script>

<style lang="scss">
.promo {
    &__wrap {
        min-height: 100vh;
        background-size: cover;
        position: relative;
        padding: rem(88px 0);
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

    &__video {
        .video__container {
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

        .video__btn {
            width: 170px;
            height: 170px;

            @media (max-width: 500px) {
                width: 124px;
                height: 124px;
            }

            &:active {
                @media (max-width: 500px) {
                    width: 120px;
                    height: 120px;
                }
            }
        }
    }


}
</style>