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
        position: relative;

        @include media-breakpoint-down(md) {
            @include noise;

            &::before {
                content: '';
                background-image: url('@/assets/aboutBlur.svg');
                width: 100%;
                height: 100%;
                margin: auto;
                left: 0;
                top: 0;
                right: 0;
                bottom: 0;
                display: block;
                position: absolute;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                z-index: 1;
            }
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 10;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;
        max-width: 470px;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(32px);
            max-width: 60%;
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
        max-width: 590px;
        width: 50%;

        @include media-breakpoint-down(md) {
            width: 100%;
        }
    }
}
</style>
