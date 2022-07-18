<template>
    <section class="press">
        <div class="press__wrap">
            <div class="container">
                <h2 class="press__heading">Press about <span>DEXART</span></h2>

                <ul class="press__list">
                    <li
                        class="press__press-item"
                        v-for="item in press"
                        :key="item.title"
                    >
                        <div class="press-item__wrap">
                            <div class="press-item__tag">{{ item.tag }}</div>
                            <div class="press-item__title">
                                {{ item.title }}
                            </div>
                            <a
                                :href="item.link"
                                target="_blank"
                                rel="nofollow"
                                class="press-item__link"
                            >
                                Learn More
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const press = [
    {
        tag: 'BeinCrypto',
        title: 'We just digitize the whole world on the blockchain',
        link: '',
    },
    {
        tag: 'BitNovosti',
        title: 'OTON represents the workplace of the future',
        link: '',
    },
    {
        tag: 'InvestFuture',
        title: 'Token listing',
        link: '',
    },
]
</script>

<style scoped lang="scss">
.press {
    &__wrap {
        background: linear-gradient(0deg, transparent 75%, #57198a 100%),
            url('@/assets/placeholder/press.jpg');
        background-size: cover;
        height: 100vh;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(64px);

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

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: stretch;
        gap: rem(32px);
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
    }

    &__title {
        font-weight: 700;
        font-size: rem(24px);
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #faf5ff;
        margin-bottom: rem(16px);
    }

    &__link {
        font-weight: 700;
        font-size: rem(18px);
        line-height: 120%;
        color: #d7b2ff;
        margin-top: auto;
        text-decoration: none;
    }
}
</style>
