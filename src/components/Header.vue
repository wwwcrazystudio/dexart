<template>
    <header class="header" :class="scrolled && 'header--fixed'">
        <div class="header__wrap">
            <div class="header__logo">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 995.6 326.6"
                    xml:space="preserve"
                    width="125"
                    height="65"
                >
                    <path
                        fill="#ffffff"
                        d="M974.5,117l5.1,1.9c0.8,0.3,0.8,1.8,0,2.1l-5.1,1.9c-20.8,7.8-36.5,31.2-40.2,60.1l-5.2,40.4
		c-0.1,1.2-1.4,1.2-1.5,0l-5.2-40.4c-3.7-28.9-19.4-52.3-40.2-60.1l-5.1-1.9c-0.8-0.3-0.8-1.8,0-2.1l5.1-1.9
		c20.8-7.8,36.5-31.2,40.2-60.1l5.2-40.4c0.2-1.2,1.4-1.2,1.5,0l5.2,40.4C938,85.8,953.7,109.2,974.5,117"
                    />
                    <path
                        fill="#ffffff"
                        d="M447,215.6l48.7-81.5c1.4-2.1-0.1-4.9-2.6-4.9h-48.1c-1,0-2,0.5-2.6,1.4l-23.1,38.6l-23.1-38.6
		c-0.6-0.9-1.6-1.4-2.6-1.4h-48.1c-2.5,0-4,2.8-2.6,4.9l48.7,81.5l-48.7,81.5c-1.4,2.1,0.1,4.9,2.6,4.9h48.1c1,0,2-0.5,2.6-1.4
		l23.1-38.6l23.1,38.6c0.6,0.9,1.6,1.4,2.6,1.4H493c2.5,0,4-2.8,2.6-4.9L447,215.6z"
                    />
                    <path
                        fill="#ffffff"
                        d="M112.1,129.1H23.3c-1.5,0-2.7,1.2-2.7,2.7v167.4c0,1.5,1.2,2.7,2.7,2.7h88.7c47.7,0,86.4-28.4,86.4-86.4
		C198.5,157.5,159.8,129.1,112.1,129.1z M110.1,256.7H71.1v-78.6h39.1c20.3,0,36.8,13.8,36.8,39.3
		C146.9,242.9,130.4,256.7,110.1,256.7z"
                    />
                    <path
                        fill="#ffffff"
                        d="M768.8,129.1l-101.4,0c-0.6,0-1.1,0.5-1.1,1.1v170.6c0,0.6,0.5,1.1,1.1,1.1h48.2c0.6,0,1.1-0.5,1.1-1.1V179.1
		h52.1c0.6,0,1.1-0.5,1.1-1.1v-47.7C769.9,129.6,769.4,129.1,768.8,129.1z"
                    />
                    <path
                        fill="#ffffff"
                        d="M653.5,248.8c-0.1-0.4-0.2-0.7-0.4-1.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0c-5.3-14.9-17.2-26.5-32.3-30.8l-4.4-1.2
		c-0.7-0.2-0.7-1.2,0-1.3l4.4-1.2c15.6-4.4,27.8-16.6,32.8-32.2c0.3-1.1,0.4-2,0.4-2.7v-46.2c0-1.5-1.2-2.8-2.7-2.8h-45
		c-1.5,0-2.7,1.2-2.7,2.8v10.2c-9.7-9.1-23.1-14.2-41-14.2c-47.7,0-86.4,28.7-86.4,87.4s38.7,87.4,86.4,87.4
		c17.9,0,31.3-5.1,41-14.2v10.8c0,1.5,1.2,2.8,2.7,2.8h45c1.5,0,2.7-1.2,2.7-2.8v-47.5C653.9,251,653.8,250,653.5,248.8z
		 M556.7,256.8c-20.7,0-37.5-14.5-37.5-41.5s16.8-41.5,37.5-41.5c20.7,0,37.5,14.5,37.5,41.5S577.4,256.8,556.7,256.8z"
                    />
                    <path
                        fill="#ffffff"
                        d="M361.7,193.5c-8.8-39-41.3-65.6-83.6-65.6c-32.8,0-59.7,16-74.2,41.3c-0.3,0.6-1.3,2.7-0.8,5
		c4.3,17.2,17.2,30.9,34,35.6l4.4,1.2c0.7,0.2,0.7,1.2,0,1.3l-4.4,1.2c-18,5.1-32.5,20.3-34.8,39.4c0,0-0.2,4.6,0.6,6.2
		c14.2,26.5,41.7,43.3,75.3,43.3c37.8,0,67.7-21.2,80-53.5c0.8-2-0.7-4.1-2.8-4.1h-46.4c-0.8,0-1.6,0.3-2.1,0.9
		c-6.9,6.9-16.7,10.8-28.6,10.8c-16.3,0-28.7-7.3-35.1-19.7h70.3h46c1.4,0,2.7-1,3-2.4c1.2-6.2,1.9-12.6,1.9-19.4
		C364,207.7,363.2,200.4,361.7,193.5z M242.9,193.5c6.4-12.4,18.8-19.7,35.1-19.7c16.3,0,28.7,7.3,35.1,19.7H242.9z"
                    />
                    <path
                        fill="#ffffff"
                        d="M849.4,243.8c0,4.6-3.8,8.4-8.4,8.4c-4.6,0-8.4-3.8-8.4-8.4v-17.9h62c0.6,0,1.1-0.5,1.1-1.1v-48.1
		c0-0.6-0.5-1.1-1.1-1.1h-62l0-45.1c0-0.7-0.5-1.2-1.1-1.2h-48.2c-0.6,0-1.1,0.5-1.1,1.2v113.5c0,32.4,26.4,58.7,58.8,58.7
		c32.4,0,58.8-26.4,58.8-58.7H849.4z"
                    />
                </svg>
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
import { ref, computed, onMounted, watch } from 'vue'
import FollowUs from './FollowUs.vue'
import LangSwitch from './LangSwitch.vue'
import Socials from './Socials.vue'

export interface Props {
    currentSection?: number
}

const props = defineProps<Props>()
console.log(props)

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
    if (window.scrollY > 10) {
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

        svg {
            @include media-breakpoint-down(md) {
                height: 40px;
                transform: translateY(-5px);
            }
        }
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
                pointer-events: none;
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

        @include media-breakpoint-down(sm) {
            margin-left: auto;
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
                    transform: translateZ(0) rotate(45deg) translate(10px, 0px);
                }

                &:nth-of-type(2) {
                    opacity: 0;
                }

                &:last-of-type {
                    transform: translateZ(0) rotate(-45deg)
                        translate(11px, -1px);
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
