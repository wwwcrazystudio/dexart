<template>
    <section class="hero">
        <div class="hero__wrap">
            <div class="container">
                <h1 class="hero__heading">Welcome <span>to DEXART</span></h1>
                <div class="hero__text">
                    A Virtual World with endless opportunities for people and
                    businesses
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
    &__wrap {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: radial-gradient(
            105.46% 242.16% at 104.05% -9.76%,
            #241830 0%,
            #3a1463 34.72%,
            #0c0316 67.57%
        );
        background-image: url('@/assets/placeholder/herobg.png');
    }

    &__heading {
        color: #fff;
        font-weight: 700;
        margin-bottom: rem(24px);

        span {
            display: block;
            width: fit-content;
            background: -webkit-linear-gradient(
                0deg,
                #bf81ff 1.88%,
                #d17558 51.37%,
                #f84fe7 97.86%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    &__text {
        color: #f3e7ff;
        opacity: 0.8;
        font-size: rem(28px);
        line-height: 130%;
        letter-spacing: 0.01em;
        max-width: 660px;
        letter-spacing: 0.01em;
    }
}
</style>
