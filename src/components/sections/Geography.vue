<template>
    <section class="geography">
        <article class="geography__wrap">
            <div class="container">

                <div class="geography__content">
                    <h2 class="geography__heading" v-html="t('heading')"></h2>
                    <div class="geography__text">
                        <p v-html="t('text1')"></p>
                        <p v-html="t('text2')"></p>
                    </div>
                    <picture class="geography__map">
                        <img src="@/assets/elements/geo.png" alt="">
                        <source srcset="@/assets/elements/geo.webp" type="image/webp" />
                    </picture>
                    <div class="geography__text">
                        <p v-html="t('text3')"></p>
                        <p v-html="t('text4')"></p>
                        <p v-html="t('text5')"></p>
                        <p v-html="t('text6')"></p>
                    </div>

                    <a href="https://map.dex.art/" target="_blanl" class="geography__btn">{{ t('btn') }}</a>
                </div>

            </div>
        </article>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'Geography <span>of DEXART</span>',
            text1: 'DEXART consists of&nbsp;25&nbsp;districts that surround the central district. Each district has its own landscape features, topography and level of&nbsp;urbanization.',
            text2: 'The center of&nbsp;the world is&nbsp;the DEXART Portal. It&nbsp;is&nbsp;located in&nbsp;the Central District.<br/> This is&nbsp;the starting point for all new users.<br/>The entire metaverse is&nbsp;filled with portals, life is&nbsp;bustling around them. They are the key attraction points in&nbsp;all districts.',
            text3: 'To&nbsp;the west and southwest of&nbsp;it&nbsp;there are valleys filled with modern cities. These valleys stretch out to&nbsp;the only sea that exists in&nbsp;DEXART. These are the most developed and economically active areas; the offices of&nbsp;the largest companies and brands are concentrated here. This is&nbsp;where the Business District is&nbsp;located.',
            text4: 'To&nbsp;the northeast of&nbsp;the DEXART Portal lie mountain regions, which contain unusual settlements and cities floating above the mountains. It&nbsp;is&nbsp;home to&nbsp;universities and other learning centers of&nbsp;DEXART. In&nbsp;the foothills of&nbsp;Mount Zenian you can find the Education District.',
            text5: 'To&nbsp;the northwest of&nbsp;the DEXART Portal lie urban areas suitable for business development and technology companies. Here the Entertainment District is&nbsp;located.',
            text6: 'Southeast of&nbsp;the DEXART Portal is&nbsp;the Great Desert. At&nbsp;its southeast end the Oasis of&nbsp;the Path is&nbsp;hiding. This is&nbsp;the mystical center DEXART, where all kinds of&nbsp;spiritual practices are reflected.',
            btn: 'To the world map',
        },
        ru: {
            heading: 'География <span>мира DEXART</span>',
            text1: 'Мир DEXART состоит из&nbsp;25&nbsp;районов, окружающих центральный.<br/>Каждый район имеет свои ландшафтные особенности, топографию и&nbsp;уровень урбанизации.',
            text2: 'В&nbsp;центре мира&nbsp;&mdash; портал DEXART. Он&nbsp;находится в&nbsp;Центральном районе и&nbsp;это отправная точка для всех новых пользователей.<br/>Вся мета&amp;shyвселенная пронизана порталами, жизнь кипит вокруг них.<br/>Это&nbsp;&mdash; точки притяжения пользователей.',
            text3: 'К&nbsp;западу и&nbsp;юго-западу от&nbsp;него расположены долины, заполненные современными городами. Эти долины простираются до&nbsp;единственного моря, существующего в&nbsp;DEXART. Это наиболее развитые и&nbsp;экономически активные районы; здесь сосредоточены офисы крупнейших компаний и&nbsp;брендов. Здесь находится Деловой квартал.',
            text4: 'К&nbsp;северо-востоку от&nbsp;портала DEXART лежат горные районы с&nbsp;необычными поселениями и&nbsp;городами, плавающими над горами. Здесь расположены университеты и&nbsp;другие учебные центры DEXART. В&nbsp;предгорьях горы Зениан вы&nbsp;можете найти Образовательный район.',
            text5: 'К&nbsp;северо-западу от&nbsp;портала DEXART находятся городские районы, подходящие для развития бизнеса и&nbsp;технологических компаний. Здесь находится Развлекательный район.',
            text6: 'К&nbsp;юго-востоку от&nbsp;портала DEXART находится Великая пустыня. В&nbsp;его юго-восточном конце прячется Оазис Пути. Это мистический центр DEXART, где отражаются все виды духовных практик.',
            btn: 'Карта мира',
        }
    }
})
</script>

<style lang="scss">
.geography {
    &__wrap {
        background: url('@/assets/bg/geographyBg.jpg');
        background-size: cover;
        background-position: bottom center;
        min-height: 100vh;
        padding-top: rem(65px);
        padding-bottom: rem(90px);
        position: relative;
        overflow: hidden;

        @include media-breakpoint-down(md) {
            padding: rem(48px 0);
        }

        &::before {
            content: '';
            background: linear-gradient(0deg, transparent 13.19%, #19082B 100%);
            width: 100%;
            height: 33vh;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
        }

        &::after {
            content: '';
            background: linear-gradient(180deg, transparent 13.19%, #160d1f 100%);
            width: 100%;
            height: 33vh;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 10;
        }
    }

    &__content {
        max-width: 970px;
        margin: auto;
    }

    &__heading {
        color: #fff;
        width: fit-content;
        margin: auto;
        margin-bottom: rem(60px);
        text-align: center;
        position: relative;
        z-index: 11;

        @include media-breakpoint-down(lg) {
            font-size: rem(38px);
        }

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

        color: #faf5ff;
        position: relative;
        z-index: 11;

        @include media-breakpoint-down(lg) {
            font-size: rem(18px);
        }
    }

    &__map {
        display: block;
        position: relative;
        margin-bottom: rem(48px);

        /*     &::before {
            content: '';
            background-image: url('@/assets/elements/geoMapBg.png');
            position: absolute;
            left: -59%;
            top: -56%;
            width: 240%;
            height: 250%;
        } */

        img {
            position: relative;
            z-index: 20;
            width: 100%;
        }
    }

    &__btn {
        @extend %btn-accent;

        width: fit-content;
        margin: auto;
        position: relative;
        z-index: 11;
    }
}
</style>