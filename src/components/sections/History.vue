<template>
    <section class="history">
        <article class="history__wrap">
            <div class="container">
                <div class="history__content">
                    <h1 class="history__heading" v-html="t('heading')"></h1>
                    <div class="history__text">
                        <p v-html="t('text1')"></p>
                        <p v-html="t('text2')"></p>
                    </div>
                    <Video class="history__video" :src="videoSrc" />
                    <div class="history__text">
                        <p v-html="t('text3')"></p>
                    </div>
                </div>
            </div>
        </article>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import Video from '../Video.vue';

import promoEn from '@/assets/videos/promo_en.mp4'
import promoRu from '@/assets/videos/promo_ru.mp4'


const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'History <span>of DEXART</span>',
            text1: 'When blockchain technologies began to develop in the real world, when the decentralization of the global network became only a matter of time, when crypto projects began to appear one after another, a critical mass of information was accumulated that formed the basis for the future virtual world. ',
            text2: 'It was the blockchain singularity. And then the Big Flare happened and gave birth to DEXART.',
            text3: 'In DEXART, users can choose any role they wish. There are no limits and restrictions, but in order to succeed in the chosen activity, it is worth devoting some time to it and creating a community around your business, service, creative or educational project.',
        },
        ru: {
            heading: 'История <span>мира DEXART</span>',
            text1: 'Когда технологии блокчейн начали развиваться в&nbsp;реальном мире, когда децентрализация глобальной сети стала лишь вопросом времени, когда криптопроекты стали появляться один за&nbsp;другим, была накоплена критическая масса информации, которая легла в&nbsp;основу будущего виртуального мира. </br> Это была блокчейн-сингулярность, сжатая в&nbsp;одну очень плотную точку, которая в&nbsp;конце концов взорвалась.',
            text2: 'Произошла Большая Вспышка и&nbsp;родилась метавселенная DEXART.',
            text3: 'В&nbsp;мире DEXART пользователи могут для себя выбрать любую роль. Здесь нет рамок и&nbsp;ограничений, но&nbsp;чтобы преуспеть в&nbsp;выбранной деятельности, стоит уделить ей&nbsp;немного времени и&nbsp;создать сообщество вокруг своего бизнеса, услуги, творческого или образовательного проекта.',
        }
    }
})

const videoSrc = computed(() => {
    if (locale.value === 'ru') return promoRu

    return promoEn
})
</script>

<style lang="scss">
.history {
    &__wrap {
        background: url('@/assets/bg/historyBg.jpg');
        background-position: bottom center;
        background-size: cover;
        min-height: 100vh;
        padding-top: 25vh;
        padding-bottom: 65vh;
        position: relative;

        @include media-breakpoint-down(md) {
            background-image: url('@/assets/bg/historyBgSm.jpg');
            padding-bottom: rem(200px);
            padding-top: rem(180px);
        }

        &::after {
            content: '';
            background: linear-gradient(0deg, #19082B 13.19%, transparent 100%);
            width: 100%;
            height: 33vh;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 10;

            @include media-breakpoint-down(md) {
                height: 100px;
            }
        }
    }

    &__content {
        max-width: 720px;
        margin: auto;

    }

    &__heading {
        color: #fff;
        width: fit-content;
        margin: auto;
        margin-bottom: rem(50px);
        text-align: center;

        @include media-breakpoint-down(md) {
            margin: 0;
            margin-bottom: rem(32px);
            text-align: left;
        }

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
        @include p_type_2;

        color: rgba(#faf5ff, 0.8);

        @include media-breakpoint-down(lg) {
            font-size: rem(18px);
        }
    }

    &__video {
        background: #000;
        position: relative;
        z-index: 20;
        margin-bottom: rem(48px);
        min-height: 405px;

        &::after {
            content: '';
            background-image: url('@/assets/icons/star.svg');
            width: 98px;
            height: 172px;
            background-size: contain;
            position: absolute;
            right: -50px;
            top: -50px;
            filter: drop-shadow(0px 0px 10px #752CC5) drop-shadow(0px 0px 10px #752CC5);

            @include media-breakpoint-down(md) {
                width: 38px;
                height: 65px;
                top: unset;
                right: unset;
                left: -20px;
                bottom: -30px;
            }
        }

        @include media-breakpoint-down(md) {
            min-height: 180px;
        }
    }
}
</style>