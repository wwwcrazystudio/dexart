<template>
    <div class="map-banner">
        <div class="map-banner__wrap">
            <div class="map-banner__heading">
                Find a place <span>for your business</span> in DEXART
            </div>

            <div class="map-banner__content">
                <div class="map-banner__text">
                    Take a look at the interactive map and buy you first virtual
                    real estate
                </div>

                <button class="map-banner__btn">See the map</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.map-banner {
    &__wrap {
        background: #6a1dac;
        border-radius: 48px;
        padding: rem(48px);
        padding-right: rem(88px);
        display: flex;
        justify-content: space-between;
        position: relative;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }

        @include media-breakpoint-down(sm) {
            padding: rem(16px);
            margin: rem(0 -16px);
            padding-bottom: rem(32px);
        }

        &::before {
            content: '';
            position: absolute;
            background-image: url('@/assets/icons/star.svg');
            width: 92px;
            height: 162px;
            background-size: contain;
            right: -30px;
            top: -40px;
            filter: drop-shadow(20px 0px 20px #752cc5);

            @include media-breakpoint-down(md) {
                top: 12px;
                right: -10px;
                transform: rotate(15deg);
                width: 98px;
                height: 172px;
            }
        }

        &::after {
            content: '';
            position: absolute;
            background-image: url('@/assets/icons/star.svg');
            width: 122px;
            height: 215px;
            background-size: contain;
            right: 0;
            left: -290px;
            margin: auto;
            bottom: -80px;
            filter: drop-shadow(15px 10px 15px #752cc5);
            transform: rotate(18deg);

            @include media-breakpoint-down(md) {
                right: -10px;
                transform: rotate(-15deg);
                width: 85px;
                height: 150px;
                left: unset;
                bottom: -105px;
            }
        }
    }

    &__content {
        max-width: 470px;
        width: 60%;

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
