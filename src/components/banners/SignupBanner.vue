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

        &::before {
            content: '';
            position: absolute;
            background-image: url('@/assets/elements/stone.svg');
            width: 92px;
            height: 112px;
            background-size: contain;
            right: -50px;
            top: -70px;
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
        }
    }

    &__content {
        max-width: 300px;
    }

    &__heading {
        color: #fff;
        max-width: 470px;

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
        color: #faf5ff;
        font-size: rem(32px);
        line-height: 130%;
        letter-spacing: -0.005em;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);
    }
}
</style>
