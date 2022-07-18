<template>
    <section class="about">
        <div class="about__wrap">
            <div class="container">
                <div class="about__content">
                    <h2 class="about__heading">
                        Metaverses create <span>a magical</span> future
                    </h2>
                    <div class="about__text">
                        <p>
                            And we contribute to the new era of social media
                            communications of Web 3.0
                        </p>
                        <p>
                            We help businesses and opinion leaders to create
                            deep and meaningful communication with their clients
                            and communities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
    &__wrap {
        background: #130b1a;
        background-image: url('@/assets/placeholder/aboutbg.png');
        background-size: cover;
        height: 100vh;
        display: flex;
        align-items: center;
    }

    &__content {
        display: flex;
        justify-content: space-between;
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
        letter-spacing: 0.01em;
        max-width: 590px;
        letter-spacing: -0.005em;
    }
}
</style>
