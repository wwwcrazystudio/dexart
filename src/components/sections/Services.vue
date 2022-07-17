<template>
    <section class="services">
        <div class="services__wrap">
            <div class="services__content">
                <h2 class="services__heading">
                    What you can <span>do in DEXART:</span>
                </h2>

                <ul class="services__list">
                    <li
                        class="services__service-item service-item"
                        v-for="item in services"
                        :key="item.title"
                    >
                        <div class="service-item__wrap">
                            <h3 class="service-item__heading">
                                {{ item.title }}
                            </h3>
                            <div class="service-item__text">
                                {{ item.text }}
                            </div>

                            <div class="service-item__img">
                                <img :src="item.img" alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import service1 from '@/assets/services/service1.svg'
import service2 from '@/assets/services/service2.svg'
import service3 from '@/assets/services/service3.svg'
import service4 from '@/assets/services/service4.svg'
import service5 from '@/assets/services/service5.svg'
import service6 from '@/assets/services/service6.svg'

const services = [
    {
        img: service1,
        title: 'Present your product or service',
        text: 'Your virtual demonstration can reach an unlimited number of viewers who will devote all their attention to your product or service',
    },
    {
        img: service2,
        title: 'Build audience loyalty',
        text: 'Take your business to a metalevel and make an emotional impact: run virtual working spaces, create gamification and quests for your audience, enjoy free communication between avatars and leverage the metaworking',
    },
    {
        img: service3,
        title: 'Create gamified educational experiences',
        text: 'Give users an opportunity to learn through play: create interactive and immersive content, rewards participants for achievements and progress',
    },
    {
        img: service4,
        title: 'Meet your audience',
        text: 'Run immersive virtual events for your clients and followers wherever they reside. VR and 3D tools will help you build engaging interactions',
    },
    {
        img: service5,
        title: 'Leverage metaworking',
        text: 'Meet new people and build real connections in the virtual world',
    },
    {
        img: service6,
        title: 'Express yourself and show your creativity',
        text: 'Show your talent and monetize your art',
    },
]
</script>

<style scoped lang="scss">
.services {
    &__wrap {
        height: 100vh;
        background-image: url('@/assets/placeholder/servicesbg.jpg');
        padding-top: rem(130px);
    }

    &__content {
        display: flex;
        justify-content: space-between;
        max-width: 1350px;
        margin: auto;
    }

    &__heading {
        color: #fff;
        font-weight: 700;
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

    &__list {
        @include unlist;

        max-width: 720px;
        display: grid;
        gap: rem(64px);
    }
}

.service-item {
    &__wrap {
        padding-right: 35%;
        position: relative;
    }

    &__heading {
        font-weight: 900;
        color: #fff;
        margin-bottom: rem(16px);
    }

    &__text {
        font-size: rem(28px);
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #d7b2ff;
    }

    &__img {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        max-width: 45%;
        height: fit-content;

        img {
            width: 100%;
            max-height: 100%;
        }
    }
}
</style>
