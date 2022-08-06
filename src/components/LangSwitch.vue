<template>
    <div class="lang-switch">
        <ul class="lang-switch__list">
            <li class="lang-switch__item">
                <button
                    class="lang-switch__link"
                    :class="$i18n.locale === 'en' && 'lang-switch__link--active'"
                    @click="$i18n.locale = 'en'"
                >
                    En
                </button>
            </li>

            <li class="lang-switch__item">
                <button
                    class="lang-switch__link"
                    :class="$i18n.locale === 'ru' && 'lang-switch__link--active'"
                    @click="$i18n.locale = 'ru'"
                >
                    Ru
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const lang = ref<string>('en')
</script>

<style scoped lang="scss">
.lang-switch {
    &__list {
        @include unlist;

        display: flex;
        align-items: center;
    }

    &__item {
        display: flex;
        align-items: center;

        &:not(:last-of-type) {
            &::after {
                content: '';
                width: 2px;
                height: 22px;
                margin: rem(0 16px);
                background-color: #bf81ff;
                opacity: 0.5;
            }
        }
    }

    &__link {
        color: #d7b2ff;
        font-size: rem(18px);
        opacity: 0.5;
        text-transform: uppercase;
        font-family: 'StyreneAWeb', sans-serif;

        @include media-breakpoint-down(sm) {
            font-size: rem(14px);
        }

        &--active {
            font-weight: 700;
            opacity: 1;
        }
    }
}
</style>
