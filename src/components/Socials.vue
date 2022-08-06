<template>
    <div class="socials">
        <ul class="socials__list">
            <li class="socials__item" v-for="item in socials" :key="item.label">
                <a :href="item.url" target="_blank" rel="nofollow" class="socials__link" v-html="item.icon">
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import inst from '@/assets/icons/inst.svg?raw'
import twitter from '@/assets/icons/twitter.svg?raw'
import youtube from '@/assets/icons/youtube.svg?raw'
import tg from '@/assets/icons/tg.svg?raw'
import medium from '@/assets/icons/medium.svg?raw'
import reddit from '@/assets/icons/reddit.svg?raw'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()


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
.socials {
    &__list {
        @include unlist;
        display: grid;
        grid-template-columns: repeat(6, 32px);
        gap: rem(16px);
    }

    &__link {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #7c1dd3;
        border-radius: 8px;
        transition: 350ms;

        &:deep(svg) {
            width: 90%;
            max-width: 28px;
            max-height: 28px;
            height: 90%;
        }

        &:deep(svg path) {
            transition: 350ms;
        }

        &:hover {
            box-shadow: 0px 0px 16px rgba(175, 101, 255, 0.77);
            transition: 350ms;
        }

        &:active {
            background: #57198a;
            transition: 350ms;

            &:deep(svg path) {
                fill: #912eef;
                transition: 350ms;
            }
        }
    }
}
</style>
