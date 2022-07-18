<template>
    <section class="backstory">
        <div class="backstory__wrap">
            <div class="container">
                <div class="backstory__content">
                    <h2 class="backstory__heading">
                        World <span>backstory</span>
                    </h2>

                    <div class="backstory__text">
                        <p>
                            When blockchain technologies started evolving in the
                            real world, when complete decentralization became a
                            question of time, when crypto-projects started
                            emerging one by one a critical mass of information
                            was formed.
                        </p>
                        <p>
                            It became the foundation of the DEXART metaverse —
                            it became the blockchain singularity. A compressed
                            mass of ideas, concepts and projects that was so
                            dense and heavy that at some point it exploded.
                        </p>
                        <p>
                            It was the Big Flash that became the DEXART portal,
                            opening the way to the virtual world.
                        </p>

                        <button class="backstory__btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.backstory {
    &__wrap {
        background-image: url('@/assets/placeholder/backstory.jpg');
        position: relative;
        height: 100vh;

        &::before {
            content: '';
            background-image: url('@/assets/stones.png');
            background-size: contain;
            background-repeat: no-repeat;
            width: 1000px;
            height: 1000px;
            position: absolute;
            left: -25%;
            top: 25%;
        }
    }

    &__content {
        display: flex;
        justify-content: space-between;
        padding-top: rem(64px);
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

    &__btn {
        @extend %btn-accent;

        margin-top: rem(36px);
    }
}
</style>
