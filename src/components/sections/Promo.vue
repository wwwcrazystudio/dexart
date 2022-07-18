<template>
    <section class="promo">
        <div class="promo__wrap">
            <div class="container">
                <h2 class="promo__heading">
                    Watch Dexart <span>Metaverse</span>
                </h2>
                <button class="promo__play-btn">Play</button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.promo {
    &__wrap {
        height: 100vh;
        background-image: url('@/assets/placeholder/promo.jpg');
        background-size: cover;
        position: relative;
        padding: rem(64px 0);
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

    &__play-btn {
        background: linear-gradient(
            90deg,
            #7c1dd3 2.02%,
            #912eef 49.93%,
            #ee40ff 96.86%
        );
        width: 170px;
        height: 170px;
        box-shadow: inset -1px 2px 8px #ece7fa;
        border-radius: 50%;
        color: #faf5ff;
        font-weight: 700;
        font-size: rem(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        transition: 350ms;

        &::before {
            content: '';
            width: 120%;
            height: 120%;
            border: 1px solid #d7b2ff;
            position: absolute;
            left: -10%;
            top: -10%;
            border-radius: 50%;
            transition: 350ms;
        }

        &:hover {
            &::before {
                width: 115%;
                height: 115%;
                left: -7.5%;
                top: -7.5%;
                transition: 350ms;
            }
        }

        &:active {
            width: 120px;
            height: 120px;
            transition: 350ms;
        }
    }
}
</style>
