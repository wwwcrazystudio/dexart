<template>
    <div class="signup-banner">
        <div class="signup-banner__wrap">
            <h2 class="signup-banner__heading">
                Join our <span>community</span>
            </h2>

            <div class="signup-banner__content">
                <div class="signup-banner__text">
                    To be among the first to step into DEXART!
                </div>

                <button class="signup-banner__btn">Sign up</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.signup-banner {
    &__wrap {
        background: #6a1dac;
        background-image: url('@/assets/tgbig.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 100%;
        border-radius: 48px;
        padding: rem(48px);
        padding-right: rem(260px);
        display: flex;
        justify-content: space-between;
        position: relative;

        @include media-breakpoint-down(lg) {
            padding-right: rem(48px);
            background-image: linear-gradient(
                    0deg,
                    rgba(#6a1dac, 0.4),
                    rgba(#6a1dac, 0.4)
                ),
                url('@/assets/tgbig.png');
        }

        @include media-breakpoint-down(md) {
            background-position: 130% 64px;
            flex-direction: column;
        }

        @include media-breakpoint-down(sm) {
            padding: rem(16px);
            margin: rem(0 -16px);
            padding-bottom: rem(24px);
        }

        &::before {
            content: '';
            position: absolute;
            background-image: url('@/assets/elements/stone.svg');
            width: 92px;
            height: 112px;
            background-size: contain;
            right: -50px;
            top: -70px;

            @include media-breakpoint-down(md) {
                width: 77px;
                height: 95px;
                background-size: contain;
                right: 0px;
                top: -30px;
            }
        }

        &::after {
            content: '';
            position: absolute;
            background-image: url('@/assets/elements/stone2.svg');
            width: 91px;
            height: 103px;
            background-size: contain;
            left: 5px;
            bottom: -35px;

            @include media-breakpoint-down(md) {
                background-size: contain;
                bottom: -70px;
                left: 20px;
            }
        }
    }

    &__content {
        max-width: 300px;
        width: 40%;

        @include media-breakpoint-down(md) {
            width: 100%;
        }
    }

    &__heading {
        @include h2;

        color: #fff;
        max-width: 470px;

        @include media-breakpoint-down(md) {
            font-size: rem(38px);
            font-weight: 700;
            margin-bottom: rem(32px);
        }

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

    &__text {
        @include p_type_1;

        color: #faf5ff;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);

        @include media-breakpoint-down(sm) {
            margin-top: rem(64px);
        }
    }
}
</style>
