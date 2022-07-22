<template>
    <section class="partners">
        <div class="partners__wrap">
            <div class="container">
                <div class="partners__content">
                    <h2 class="partners__heading">Partners</h2>

                    <div class="partners__description">
                        <div class="partners__text">
                            The Human Guild. Find out more about our partner.
                        </div>

                        <button class="partners__btn">Watch More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.partners {
    &__wrap {
        background: linear-gradient(
                180deg,
                rgba(#0b0e28, 0.6) 16.57%,
                rgba(#381665, 0.8) 74.36%
            ),
            url('@/assets/partnersbg.jpg') center;

        padding: rem(112px 0);
        background-repeat: no-repeat;

        @include media-breakpoint-down(md) {
            padding: rem(64px 0);
            height: 100vh;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;

        @include media-breakpoint-down(md) {
            flex-direction: column;
        }
    }

    &__heading {
        color: #fff;

        @include media-breakpoint-down(md) {
            margin-bottom: rem(32px);
        }
    }

    &__description {
        max-width: 470px;
    }

    &__text {
        @include p_type_1;

        color: #faf5ff;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);

        @include media-breakpoint-down(md) {
            margin-top: rem(64px);
        }
    }
}
</style>
