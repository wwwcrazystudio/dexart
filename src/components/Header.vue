<template>
    <header class="header" :class="scrolled && 'header--fixed'">
        <div class="header__wrap">
            <div class="header__logo">
                <img src="@/assets/logo.png" alt="Dexart" />
            </div>
            <transition name="fade">
                <nav
                    class="header__header-menu"
                    v-show="isMobile ? showMenu : true"
                >
                    <ul class="header-menu__list">
                        <li
                            class="header-menu__item"
                            v-for="link in links"
                            :key="link.label"
                        >
                            <RouterLink
                                :to="link.url"
                                class="header-menu__link"
                                exact-active-class="header-menu__link--active"
                            >
                                {{ link.label }}
                            </RouterLink>
                        </li>
                    </ul>

                    <div class="header-menu__socials-wrap">
                        <div class="header-menu__socials-title">Follow us</div>
                        <Socials class="header-menu__socials" />
                    </div>
                </nav>
            </transition>
            <FollowUs class="header__follow-us" />
            <LangSwitch class="header__lang-switch" />
            <button
                class="header__menu-toggler"
                :class="showMenu && 'header__menu-toggler--expanded'"
                @click="handleMenuToggler"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import FollowUs from './FollowUs.vue'
import LangSwitch from './LangSwitch.vue'
import Socials from './Socials.vue'

const showMenu = ref<boolean>(false)
const scrolled = ref<boolean>(false)

const isMobile = computed(() => {
    return window.matchMedia('(max-width: 991px)').matches
})

onMounted(() => {
    document.addEventListener('scroll', scrollHandler)
})

const links = [
    {
        label: 'World Backstory',
        url: '/#story',
    },
    {
        label: 'Avatar Design tool',
        url: '/#avatar',
    },
    {
        label: 'Map',
        url: '/#map',
    },
    {
        label: 'Join',
        url: '/#join',
    },
]

const handleMenuToggler = () => {
    if (showMenu.value) {
        showMenu.value = false
        document.documentElement.classList.remove('locked')
        return
    }

    showMenu.value = true
    document.documentElement.classList.add('locked')
}

const scrollHandler = () => {
    if (window.scrollY > 100) {
        scrolled.value = true
        return
    }

    scrolled.value = false
}
</script>

<style scoped lang="scss">
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transition: 500ms;

    &--fixed {
        background: rgba(#140c1b, 0.8);
        transition: 500ms;
        .header__wrap {
            padding-top: rem(8px);
            padding-bottom: rem(8px);
            transition: 500ms;
        }
    }

    &__wrap {
        display: flex;
        align-items: center;
        width: calc(100% - 64px);
        max-width: 1470px;
        margin: auto;
        padding-top: rem(48px);
        transition: 500ms;
    }

    &__logo {
        z-index: 200;
        margin-right: auto;
    }

    &__header-menu {
        margin: auto;

        @include media-breakpoint-down(lg) {
            @include noise;

            position: absolute;
            display: grid;
            place-content: center;
            left: 0;
            top: 0;
            height: 100vh;
            width: 100%;
            background: #57198a;
            z-index: 100;

            &::before {
                content: '';
                background-image: url('@/assets/menuBlur.svg');
                width: 100%;
                height: 100%;
                margin: auto;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                display: block;
                position: absolute;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                z-index: -1;
            }
        }
    }

    &__lang-switch {
        margin-left: rem(32px);
        z-index: 200;

        @include media-breakpoint-down(md) {
            margin: auto;
        }
    }

    &__follow-us {
        @include media-breakpoint-down(md) {
            display: none;
        }
    }

    &__menu-toggler {
        padding: rem(12px);
        width: 56px;
        height: 44px;
        margin-left: rem(16px);
        display: none;
        z-index: 200;

        @include media-breakpoint-down(lg) {
            display: block;
        }

        span {
            height: 4px;
            border-radius: 8px;
            background-color: #fff;
            display: block;
            transition: 350ms;
            margin-bottom: rem(4px);

            &:first-of-type {
                width: 100%;
            }

            &:nth-of-type(2) {
                width: 70%;
            }

            &:last-of-type {
                width: 50%;
                margin-bottom: 0;
            }
        }

        &--expanded {
            span {
                transition: 350ms;

                &:first-of-type {
                    width: 50%;
                    transform: rotate(45deg) translate(10px, 0px);
                }

                &:nth-of-type(2) {
                    opacity: 0;
                }

                &:last-of-type {
                    transform: rotate(-45deg) translate(11px, -1px);
                }
            }
        }
    }
}

.header-menu {
    &__list {
        @include unlist;
        display: flex;
        align-items: center;

        @include media-breakpoint-down(lg) {
            flex-direction: column;
            margin-bottom: rem(112px);
        }

        @include media-breakpoint-down(sm) {
            align-items: flex-start;
        }
    }

    &__item {
        margin: rem(0 32px);

        @include media-breakpoint-down(xl) {
            margin: rem(0 16px);
        }

        @include media-breakpoint-down(lg) {
            margin: 0;
            margin-bottom: rem(24px);
        }
    }

    &__link {
        font-weight: 300;
        font-size: rem(18px);
        color: #d7b2ff;
        text-decoration: none;
        font-family: 'StyreneAWeb', sans-serif;

        @include media-breakpoint-down(lg) {
            font-size: rem(28px);
            color: #fff;
        }

        &:hover {
            color: #e9d4ff;
        }

        &:active {
            color: #912eef;
        }
    }

    &__socials {
        &-wrap {
            display: none;

            @include media-breakpoint-down(lg) {
                display: block;
            }
        }

        &-title {
            font-weight: 700;
            font-size: rem(18px);
            color: #ffffff;
            margin-bottom: rem(24px);
            font-family: 'StyreneAWeb', sans-serif;
        }

        &:deep(.socials__link) {
            background-color: #f3e7ff;

            svg path {
                fill: #7c1dd3;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
