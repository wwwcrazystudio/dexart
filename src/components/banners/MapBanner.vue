<template>
    <div class="map-banner">
        <div class="map-banner__wrap">
            <h2 class="map-banner__heading">
                Find a place <span>for your business</span> in DEXART
            </h2>

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
        }
    }

    &__content {
        max-width: 470px;
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
