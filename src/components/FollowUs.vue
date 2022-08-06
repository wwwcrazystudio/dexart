<template>
    <div class="follow-us">
        <div class="follow-us__wrap">
            <button class="follow-us__btn" :class="showDropdown && 'follow-us__btn--expanded'"
                @click="showDropdown = !showDropdown">
                {{ t('follow') }}
            </button>

            <transition name="fade">
                <ul class="follow-us__list" v-show="showDropdown">
                    <li class="follow-us__item" v-for="social in socials" :key="social.label">
                        <a :href="social.url" rel="nofollow" target="_blank" class="follow-us__link">
                            <span v-html="social.icon"></span>
                            {{ social.label }}
                        </a>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script setup lang="ts">
import inst from '@/assets/icons/inst.svg?raw'
import twitter from '@/assets/icons/twitter.svg?raw'
import youtube from '@/assets/icons/youtube.svg?raw'
import tg from '@/assets/icons/tg.svg?raw'
import medium from '@/assets/icons/medium.svg?raw'
import reddit from '@/assets/icons/reddit.svg?raw'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const showDropdown = ref<boolean>(false)

const { t, locale } = useI18n({
    messages: {
        en: {
            follow: 'Follow Dexart',
        },
        ru: {
            follow: 'Присоединиться',
        }
    }
})


const socials = computed(() => {
    if (locale.value === 'ru') {
        return [
            {
                icon: inst,
                label: 'Instagram',
                url: 'https://instagram.com/dexartmetaverse',
            },
            {
                icon: twitter,
                label: 'Twitter',
                url: 'https://twitter.com/dexartmetaverse',
            },
            {
                icon: youtube,
                label: 'Youtube',
                url: 'https://www.youtube.com/channel/UC13PPy2YX2d6rIbjkdveP7g/',
            },
            {
                icon: tg,
                label: 'Telegram',
                url: 'https://t.me/dexartchannelru',
            },
            {
                icon: medium,
                label: 'Medium',
                url: 'https://medium.com/@dexartmetaverse',
            },
            {
                icon: reddit,
                label: 'Reddit',
                url: 'https://www.reddit.com/r/dexart/',
            },
        ]
    }

    return [
        {
            icon: inst,
            label: 'Instagram',
            url: 'https://instagram.com/dexartmetaverse',
        },
        {
            icon: twitter,
            label: 'Twitter',
            url: 'https://twitter.com/dexartmetaverse',
        },
        {
            icon: youtube,
            label: 'Youtube',
            url: 'https://www.youtube.com/channel/UC13PPy2YX2d6rIbjkdveP7g/',
        },
        {
            icon: tg,
            label: 'Telegram',
            url: 'https://t.me/dexartchannel',
        },
        {
            icon: medium,
            label: 'Medium',
            url: 'https://medium.com/@dexartmetaverse',
        },
        {
            icon: reddit,
            label: 'Reddit',
            url: 'https://www.reddit.com/r/dexart/',
        },
    ]
})
</script>

<style scoped lang="scss">
.follow-us {
    &__wrap {
        position: relative;
        z-index: 10;
        font-family: 'StyreneAWeb', sans-serif;
    }

    &__btn {
        background: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 6L0.5 0L8.45267 0.0709887L4.5 6Z' fill='%23FAF5FF'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-size: rem(10px 10px);
        background-position: calc(100% - rem(26px)) 55%;
        background-color: transparent;
        padding: rem(16px 26px);
        padding-right: rem(44px);
        font-weight: 500;
        color: #faf5ff;
        border-radius: 16px;
        overflow: hidden;
        position: relative;

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 2px;
            border-radius: 16px;
            z-index: -1;
            background: linear-gradient(96.43deg,
                    #ed3ffe 30.37%,
                    #7d1ed4 94.57%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: 350ms opacity;
        }

        &::after {
            content: '';
            position: absolute;
            background-image: linear-gradient(90deg,
                    #7c1dd3 2.02%,
                    #912eef 49.93%,
                    #ee40ff 96.86%);
            background-repeat: no-repeat;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            top: 1px;
            left: 1px;
            margin: auto;
            opacity: 0;
            transition: 350ms opacity;
            z-index: -1;
            border-radius: 16px;
        }

        &:hover {
            &::after {
                opacity: 1;
                transition: 350ms opacity;
            }
        }

        &--expanded {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            &::before,
            &::after {
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
        }
    }

    &__list {
        @include unlist;

        background: #6a1dac;
        box-shadow: 0px 15px 24px rgba(0, 0, 0, 0.25);
        border-radius: 0px 0px 32px 32px;
        padding: rem(16px 34px);
        display: grid;
        grid-template-columns: 1fr;
        gap: rem(16px);
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
    }

    &__link {
        color: #d7b2ff;
        text-decoration: none;
        display: flex;
        align-items: center;

        span {
            margin-right: rem(8px);
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
