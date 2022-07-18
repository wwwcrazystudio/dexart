<template>
    <footer class="footer">
        <div class="footer__wrap">
            <div class="footer__content">
                <div class="footer__col">
                    <div class="footer__logo">
                        <img src="@/assets/logo.png" alt="Dexart" />
                    </div>

                    <div class="footer__copyright">Dexart (c) 2022</div>

                    <Socials class="footer__socials" />
                </div>

                <div class="footer__col">
                    <div class="footer__title">Info</div>

                    <nav class="footer__footer-menu footer-menu">
                        <ul class="footer-menu__list">
                            <li
                                class="footer-menu__item"
                                v-for="item in menu1"
                                :key="item.label"
                            >
                                <a :href="item.url" class="footer-menu__link">
                                    {{ item.label }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="footer__col">
                    <div class="footer__title">Sitemap</div>

                    <nav class="footer__footer-menu footer-menu">
                        <ul class="footer-menu__list">
                            <li
                                class="footer-menu__item"
                                v-for="item in menu2"
                                :key="item.label"
                            >
                                <a :href="item.url" class="footer-menu__link">
                                    {{ item.label }}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="footer__col">
                    <SubscriptionForm class="footer__subscription-form" />

                    <div class="footer__created-by">
                        Designed by
                        <a href="t.me/julistarr" target="_blank" rel="nofollow">
                            JULI DESIGN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import Socials from './Socials.vue'
import SubscriptionForm from './SubscriptionForm.vue'

const menu1 = [
    {
        label: 'WhitePaper',
        url: '',
    },
    {
        label: 'Privacy Policy',
        url: '',
    },
    {
        label: 'Cookies Policy',
        url: '',
    },
    {
        label: 'Term of service',
        url: '',
    },
    {
        label: 'Legal information',
        url: '',
    },
    {
        label: 'Disclaimer',
        url: '',
    },
]

const menu2 = [
    {
        label: 'Main',
        url: '',
    },
    {
        label: 'Avatar design tool',
        url: '',
    },
    {
        label: 'Avatar design tool',
        url: '',
    },
    {
        label: 'World backstory',
        url: '',
    },
    {
        label: 'Token',
        url: '',
    },
]
</script>

<style scoped lang="scss">
.footer {
    &__wrap {
        background: linear-gradient(180deg, #160d1f -4.22%, #140c1b 100%);
        font-family: 'StyreneAWeb', sans-serif;
        padding-top: rem(80px);
        padding-bottom: rem(128px);
    }

    &__content {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr 5fr;
        gap: rem(16px);
        max-width: 1472px;
        margin: auto;
    }

    &__logo {
        margin-bottom: rem(16px);

        img {
            max-width: 125px;
        }
    }

    &__copyright {
        font-weight: 300;
        font-size: rem(18px);
        line-height: 120%;
        color: #ffffff;
        opacity: 0.8;
        margin-bottom: rem(28px);
    }

    &__title {
        font-weight: 700;
        font-size: rem(20px);
        line-height: 130%;
        margin-bottom: rem(28px);
        letter-spacing: 0.01em;
        color: #ffffff;
    }

    &__created-by {
        margin-top: rem(140px);
        font-size: куь(14px);
        color: #4f5775;
        text-align: right;

        a {
            color: #912eef;
            text-decoration: none;
        }
    }
}

.footer-menu {
    &__list {
        @include unlist;
        display: grid;
        grid-template-columns: 1fr;
        gap: rem(24px);
    }

    &__link {
        font-weight: 300;
        font-size: rem(18px);
        line-height: 120%;
        color: #ffffff;
        text-decoration: none;

        &:active {
            color: #912eef;
        }
    }
}
</style>
