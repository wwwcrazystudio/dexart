<template>
    <div class="subscription-form">
        <div class="subscription-form__heading">{{ t('heading') }}</div>
        <div class="subscription-form__subheading">
            {{ t('text') }}
        </div>

        <form class="subscription-form__form">
            <Input class="subscription-form__input" type="email" label="Email" v-model:value="email" />
            <button class="subscription-form__btn">{{ t('btn') }}</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
import Input from './form/Input.vue'

const email = ref<string>('')

const { t, locale } = useI18n({
    messages: {
        en: {
            heading: 'Follow DEXART',
            text: 'Subscribe to the newsletter of the most important news',
            btn: 'Sign Up',
        },
        ru: {
            heading: 'Следите DEXART',
            text: 'Подпишитесь на рассылку самых важных новостей',
            btn: 'Подписаться',
        }
    }
})
</script>

<style scoped lang="scss">
.subscription-form {
    &__heading {
        font-weight: 700;
        font-size: rem(20px);
        line-height: 130%;
        font-family: 'StyreneAWeb', sans-serif;
        letter-spacing: 0.01em;
        color: #ffffff;
        margin-bottom: rem(8px);
    }

    &__subheading {
        font-weight: 300;
        font-size: rem(18px);
        line-height: 120%;
        font-family: 'StyreneAWeb', sans-serif;
        color: #ffffff;
        margin-bottom: rem(32px);

        @include media-breakpoint-down(md) {
            font-size: rem(14px);
            margin-bottom: rem(24px);
        }
    }

    &__form {
        display: flex;
    }

    &__input {
        flex-grow: 1;

        &:deep(.input__control) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
    }

    &__btn {
        @extend %btn-accent;

        padding: rem(20px 32px);
        border-radius: 16px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        box-shadow: none;
        white-space: nowrap;

        @include media-breakpoint-down(md) {
            font-size: rem(14px);
            padding: rem(17px 24px);
        }

        &::before {
            border-radius: 16px;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            box-shadow: none;
        }
    }
}
</style>
