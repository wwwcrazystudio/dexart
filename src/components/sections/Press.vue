<template>
    <section class="press" ref="section">
        <div class="press__wrap">
            <div class="container">
                <h2 class="press__heading" ref="heading" v-html="t('heading')">

                </h2>

                <div class="press__carousel swiper" ref="carousel">
                    <ul class="press__list swiper-wrapper">
                        <li ref="slides" class="press__press-item swiper-slide" v-for="item in press" :key="item.title">
                            <div class="press-item__wrap">
                                <div class="press-item__tag">
                                    {{ item.tag }}
                                </div>
                                <div class="press-item__title">
                                    {{ item.title }}
                                </div>
                                <a :href="item.link" target="_blank" rel="nofollow" class="press-item__link">
                                    {{ t('btn') }}
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import Swiper from 'swiper'
import 'swiper/css'
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useAnimation } from '@/composables/useAnimation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useI18n } from 'vue-i18n'
import { useMedia } from '@/composables/useMedia'

const { enter, leave, hide } = useAnimation()
const { isMobile } = useMedia()

const carousel = ref<HTMLElement>()
const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const slides = ref<HTMLElement[]>()
const carouselInstance = ref<any>()

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'Press about <span>DEXART</span>',
            btn: 'Learn More',
        },
        ru: {
            heading: 'Пресса <span>о Dexart</span>',
            btn: 'Подробнее',
        }
    }
})

const press = computed(() => {
    if (locale.value === 'ru') {
        return [
            {
                tag: 'BeinCrypto',
                title: 'Мы просто оцифровываем весь мир на блокчейне',
                link: 'https://ru.beincrypto.com/my-prosto-oczifrovyvaem-ves-mir-na-blokchejne-glava-proekta-oton/?ysclid=l2rkdslvli',
            },
            {
                tag: 'BitNovosti',
                title: 'OTON представляет собой место работы, за которым будущее',
                link: 'https://bitnovosti.com/2021/06/03/sistema-monetizatsii-auditorii-oton-platforma-obucheniya/',
            },
            {
                tag: 'InvestFuture',
                title: 'Листинг токена',
                link: 'https://investfuture.ru/news/id/ekosistema-oton-objavljaet-o-listinge-tokena-oton-na-birzhe-s3exchange',
            },
        ]
    }

    return [
        {
            tag: 'BeinCrypto',
            title: 'We just digitize the whole world on the blockchain',
            link: 'https://ru.beincrypto.com/my-prosto-oczifrovyvaem-ves-mir-na-blokchejne-glava-proekta-oton/?ysclid=l2rkdslvli',
        },
        {
            tag: 'BitNovosti',
            title: 'OTON represents the workplace of the future',
            link: 'https://bitnovosti.com/2021/06/03/sistema-monetizatsii-auditorii-oton-platforma-obucheniya/',
        },
        {
            tag: 'InvestFuture',
            title: 'Token listing',
            link: 'https://investfuture.ru/news/id/ekosistema-oton-objavljaet-o-listinge-tokena-oton-na-birzhe-s3exchange',
        },
    ]
})

onMounted(() => {
    if (!isMobile()) {
        heading.value && hide(heading.value)

        slides.value?.forEach((el) => {
            hide(el)
        })

        const enterCallback = () => {
            heading.value && enter(heading.value)
            slides.value?.forEach((el: HTMLElement, key: number) => {
                enter(el, 0.2 * key)
            })
        }

        const leaveCallback = () => {
            heading.value && leave(heading.value)
            slides.value?.forEach((el: HTMLElement, key: number) => {
                leave(el, 0.2 * key)
            })
        }

        if (section.value)
            ScrollTrigger.create({
                trigger: section.value,
                start: 'top bottom',
                end: 'bottom 30%',
                onEnter: () => enterCallback(),
                onLeave: () => leaveCallback(),
                onEnterBack: () => enterCallback(),
                onLeaveBack: () => leaveCallback(),
            })

    }

    if (carousel.value) {
        carouselInstance.value = new Swiper(carousel.value, {
            slidesPerView: 1.1,
            spaceBetween: 16,
            loop: true,
            breakpoints: {
                568: {
                    spaceBetween: 24,
                    slidesPerView: 2,
                },
                991: {
                    spaceBetween: 32,
                    slidesPerView: 3,
                    loop: false,
                },
            },
        })
    }
})

watch(() => locale.value, async () => {
    await nextTick()
    carouselInstance.value.update()
})
</script>

<style lang="scss">
.press {
    &__wrap {
        background: url('@/assets/blurs/servicesBlur.png'),
            linear-gradient(180deg,
                #391667 5%,
                rgba(#381665, 0.4) 40%,
                rgba(#381665, 0.1) 70%,
                #140c1b 100%);
        background-size: cover;
        padding: rem(128px 0);
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;

        @include media-breakpoint-down(md) {
            margin-top: -50px;
            background: linear-gradient(180deg,
                    rgba(#391667, 0.1) 0%,
                    rgba(#381665, 0.4) 40%,
                    rgba(#381665, 0.1) 80%,
                    #160d1f 100%);
        }


        &::after {
            content: '';
            background: linear-gradient(180deg, transparent 0%, #160d1f 100%);
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50%;
            z-index: 10;

            @include media-breakpoint-down(md) {
                height: 100%;
            }
        }
    }

    &__bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(64px);
        position: relative;
        z-index: 11;

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

    &__carousel {
        overflow: visible;
        z-index: 12;
    }

    &__list {
        @include unlist;
    }

    &__press-item {
        height: auto;
        z-index: 10;
        position: relative;
    }
}

.press-item {
    &__wrap {
        background: linear-gradient(163.58deg, #57198a -19.01%, #2d084b 88.62%);
        box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.25);
        border-radius: 32px;
        padding: rem(32px);
        font-family: 'StyreneAWeb', sans-serif;
        display: flex;
        flex-direction: column;
        height: 100%;

        transition: 350ms;

        &:hover {
            transform: scale3d(1.05, 1.05, 1.05);
            transition: 350ms;
        }

        @include media-breakpoint-down(md) {
            padding: rem(16px);
        }
    }

    &__tag {
        font-weight: 500;
        line-height: 120%;
        color: #57198a;
        padding: rem(8px);
        background: #bf81ff;
        margin-bottom: rem(16px);
        border-radius: 16px;
        width: fit-content;

        @include media-breakpoint-down(md) {
            font-size: rem(14px);
        }
    }

    &__title {
        font-weight: 700;
        font-size: rem(24px);
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #faf5ff;
        margin-bottom: rem(16px);

        @include media-breakpoint-down(md) {
            font-size: rem(22px);
            font-weight: 900;
        }
    }

    &__link {
        font-weight: 700;
        font-size: rem(18px);
        line-height: 120%;
        color: #d7b2ff;
        margin-top: auto;
        text-decoration: none;

        &:hover {
            color: #E9D4FF;
        }

        @include media-breakpoint-down(md) {
            font-size: rem(14px);
        }
    }
}
</style>
