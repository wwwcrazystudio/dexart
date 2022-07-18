<template>
    <section class="world">
        <div class="world__wrap">
            <div class="container">
                <h2 class="world__heading">World <span>DEXART</span></h2>

                <div class="world__text">
                    <p>
                        DEXART consists of regions surrounding the main district
                        in the center. Each region is divided into districts and
                        has its own unique landscape, topography and
                        urbanization.
                    </p>
                    <p>
                        Each region is full of different possibilities and is
                        inhabited by various characters, who engage the users
                        into game interactions
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.world {
    &__wrap {
        height: 100vh;
        background-image: url('@/assets/placeholder/world.jpg');
        background-size: cover;
        position: relative;
        padding: rem(128px 0);
    }

    &__heading {
        color: #fff;
        max-width: 470px;
        margin-bottom: rem(32px);

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
        font-size: rem(32px);
        line-height: 130%;
        letter-spacing: -0.005em;
        color: #faf5ff;
        max-width: 595px;
    }
}
</style>
