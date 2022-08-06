<template>
    <section class="backstory" ref="section" id="backstory">
        <div class="backstory__wrap">
            <div class="backstory__scene" ref="scene">
                <div data-depth="0.7" class="backstory__stone backstory__stone--1">
                    <img src="@/assets/elements/stone.svg" alt="" />
                </div>
                <div data-depth="0.4" class="backstory__stone backstory__stone--2">
                    <img src="@/assets/elements/stone2.svg" alt="" />
                </div>
                <picture data-depth="0.6" class="backstory__stones backstory__stones--1">
                    <img src="@/assets/elements/slice-1.png" alt="" />
                    <source srcset="@/assets/elements/slice-1.webp" type="image/webp" />
                </picture>
                <picture data-depth="0.6" class="backstory__stones backstory__stones--2">
                    <img src="@/assets/elements/slice-2.png" alt="" />
                    <source srcset="@/assets/elements/slice-2.webp" type="image/webp" />
                </picture>
                <picture data-depth="0.6" class="backstory__stones backstory__stones--3">
                    <img src="@/assets/elements/slice-3.png" alt="" />
                    <source srcset="@/assets/elements/slice-3.webp" type="image/webp" />
                </picture>
                <picture data-depth="0.3" class="backstory__stones backstory__stones--bg">
                    <img src="@/assets/elements/back.png" alt="" />
                    <source srcset="@/assets/elements/back.webp" type="image/webp" />
                </picture>
            </div>

            <div class="container">
                <div class="backstory__content" ref="content">
                    <h2 class="backstory__heading" ref="heading" v-html="t('heading')">
                    </h2>

                    <div class="backstory__text">
                        <div ref="text">
                            <p>
                                {{ t('text1') }}
                            </p>
                            <p>
                                {{ t('text2') }}
                            </p>
                            <p>
                                {{ t('text3') }}
                            </p>
                        </div>

                        <a target="_blank" rel="nofollow" href="https://dex.art/historyoftheworld"
                            class="backstory__btn" ref="btn">
                            {{ t('btn') }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useAnimation } from '@/composables/useAnimation'
import { useMedia } from '@/composables/useMedia'
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Parallax from 'parallax-js'
import { useI18n } from 'vue-i18n'

const { enter, leave, hide } = useAnimation()
const { isMobile } = useMedia()

const section = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const text = ref<HTMLElement>()
const btn = ref<HTMLElement>()
const content = ref<HTMLElement>()
const scene = ref<HTMLElement>()

const { t } = useI18n({
    messages: {
        en: {
            heading: 'World <span>DEXART</span>',
            text1: 'When blockchain technologies started evolving in the real world, when complete decentralization became a question of time, when crypto-projects started emerging one by one a critical mass of information was formed.',
            text2: 'It became the foundation of the DEXART metaverse — it became the blockchain singularity. A compressed mass of ideas, concepts and projects that was so dense and heavy that at some point it exploded.',
            text3: 'It was the Big Flash that became the DEXART portal, opening the way to the virtual world.',
            btn: 'Learn more '
        },
        ru: {
            heading: 'Мир <span>DEXART</span>',
            text1: 'Когда в реальном мире начали развиваться блокчейн-технологии, когда полная децентрализация глобальной сети стала лишь вопросом времени, когда крипто-проекты стали появляться один за другим, набралась критическая масса информации, сформировавшей основу и структура мира DEXART.',
            text2: 'Это была блокчейн-сингулярность, сжатая в одну очень плотную точку, которая в конце-концов взорвалась.',
            text3: 'Эта Большая Вспышка и стала порталом в мир DEXART.',
            btn: 'Читать легенду'
        }
    }
})

onMounted(() => {
    if (!isMobile()) {
        heading.value && hide(heading.value)
        text.value && hide(text.value)
        btn.value && hide(btn.value)

        if (content.value)
            ScrollTrigger.create({
                trigger: content.value,
                start: 'top bottom',
                end: 'bottom center',
                onEnter: () => {
                    heading.value && enter(heading.value)
                    text.value && enter(text.value, 0.4)
                    btn.value && enter(btn.value, 0.6)
                },
                onLeave: () => {
                    heading.value && leave(heading.value)
                    text.value && leave(text.value)
                    btn.value && leave(btn.value)
                },
                onEnterBack: () => {
                    heading.value && enter(heading.value)
                    text.value && enter(text.value, 0.4)
                    btn.value && enter(btn.value, 0.6)
                },
                onLeaveBack: () => {
                    heading.value && leave(heading.value)
                    text.value && leave(text.value)
                    btn.value && leave(btn.value)
                },
            })

        if (scene.value)
            new Parallax(scene.value, {
                scalarX: 6,
                scalarY: 6,
            })
    }
})
</script>

<style lang="scss">
.backstory {
    @include noise;
    position: relative;

    &__wrap {
        background: url('@/assets/blurs/backstoryBlur.png'),
            linear-gradient(180deg, #1c0b2b 0%, transparent 50%, #11071b 100%);
        position: relative;
        background-size: 700px 700px, cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        min-height: 100vh;
        padding-top: rem(64px);
        padding-bottom: rem(240px);

        @include media-breakpoint-down(lg) {
            background-size: 500px 500px, cover;
        }

        @include media-breakpoint-down(md) {
            min-height: 70vh;
            padding-bottom: rem(100px);
        }

        @include media-breakpoint-down(sm) {
            padding: rem(32px 0);
        }
    }

    &__stones {
        max-width: 1000px;
        width: 50%;
        height: auto;
        position: absolute;
        top: 25% !important;
        z-index: 10;

        @include media-breakpoint-down(lg) {
            top: 45% !important;
        }

        @include media-breakpoint-down(md) {
            width: 60%;
            height: 80%;
            position: absolute;
            z-index: 10;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__scene {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 10;
        transform: translateZ(0);
        will-change: transform;
    }

    &__stone {
        position: absolute !important;
        z-index: 15;
        transform: translateZ(0);
        will-change: transform;

        &--1 {
            right: 70px !important;
            top: 50% !important;
            left: unset !important;

            img {
                width: 40px;
                will-change: transform;
                animation: float 50s linear infinite;
                animation-direction: reverse;
            }
        }

        &--2 {
            top: 30% !important;
            left: 40% !important;

            img {
                width: 95px;
                will-change: transform;
                animation: float 50s linear infinite;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        padding-top: rem(64px);
        z-index: 20;
        position: relative;

        @include media-breakpoint-down(lg) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(32px);
        transform-origin: top center;

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

    &__text {
        @include p_type_1;

        color: #faf5ff;
        max-width: 595px;
    }

    &__btn {
        @extend %btn-accent;

        width: fit-content;
        margin-top: rem(36px);
    }
}
</style>
