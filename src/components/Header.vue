<template>
    <header class="header">
        <div class="header__wrap">
            <div class="header__logo">
                <img src="@/assets/logo.png" alt="Dexart" />
            </div>
            <nav class="header__header-menu">
                <ul class="header-menu__list">
                    <li
                        class="header-menu__item"
                        v-for="link in links"
                        :key="link.label"
                    >
                        <a :href="link.url" class="header-menu__link">
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
            </nav>
            <FollowUs class="header__follow-us" />
            <LangSwitch class="header__lang-switch" />
        </div>
    </header>
</template>

<script setup lang="ts">
import FollowUs from './FollowUs.vue'
import LangSwitch from './Langswitch.vue'

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
</script>

<style scoped lang="scss">
.header {
    &__wrap {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1470px;
        margin: auto;
        margin-top: rem(48px);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    &__header-menu {
        margin: auto;
    }

    &__lang-switch {
        margin-left: rem(32px);
    }
}

.header-menu {
    &__list {
        @include unlist;
        display: flex;
        align-items: center;
    }

    &__item {
        margin: rem(0 32px);
    }

    &__link {
        font-weight: 300;
        font-size: rem(18px);
        color: #d7b2ff;
        text-decoration: none;

        &:hover {
            color: #e9d4ff;
        }

        &:active {
            color: #912eef;
        }
    }
}
</style>
