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
                #080f22 0%,
                #080f22 0.01%,
                rgba(54, 20, 96, 0) 100%
            ),
            linear-gradient(180deg, transparent 75%, #57198a 100%),
            url('@/assets/partnersbg.jpg') center;

        padding: rem(112px 0);
        background-repeat: no-repeat;
    }

    &__content {
        display: flex;
        justify-content: space-between;
    }

    &__heading {
        color: #fff;
    }

    &__description {
        max-width: 470px;
    }

    &__text {
        font-size: rem(32px);
        line-height: 130%;
        letter-spacing: -0.005em;
        color: #faf5ff;
    }

    &__btn {
        @extend %btn-accent;

        margin-top: rem(48px);
    }
}
</style>
