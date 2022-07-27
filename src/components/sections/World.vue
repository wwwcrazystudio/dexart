<template>
    <section class="world">
        <div class="world__wrap">
            <div class="container">
                <div class="world__content">
                    <h2 class="world__heading">World <span>DEXART</span></h2>
                    <div class="world__text">
                        <p>
                            DEXART consists of regions surrounding the main
                            district in the center. Each region is divided into
                            districts and has its own unique landscape,
                            topography and urbanization.
                        </p>
                        <p>
                            Each region is full of different possibilities and
                            is inhabited by various characters, who engage the
                            users into game interactions
                        </p>
                    </div>
                    <div class="world__map">
                        <img src="@/assets/placeholder/world.jpg" alt="" />
                    </div>
                    <div class="world__controls">
                        <button class="world__control" ref="prevBtn">
                            <svg
                                width="13"
                                height="18"
                                viewBox="0 0 13 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.18761 8.17781L11.4308 1.08638C12.094 0.627216 13 1.10191 13 1.90857V16.0914C13 16.8981 12.094 17.3728 11.4308 16.9136L1.18761 9.82219C0.613224 9.42454 0.613223 8.57546 1.18761 8.17781Z"
                                    fill="#E9D4FF"
                                />
                            </svg>
                        </button>
                        <button class="world__control" ref="nextBtn">
                            <svg
                                width="13"
                                height="18"
                                viewBox="0 0 13 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.8124 8.17781L1.56921 1.08638C0.905979 0.627216 0 1.10191 0 1.90857V16.0914C0 16.8981 0.905977 17.3728 1.56921 16.9136L11.8124 9.82219C12.3868 9.42454 12.3868 8.57546 11.8124 8.17781Z"
                                    fill="#E9D4FF"
                                />
                            </svg>
                        </button>
                    </div>
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
        position: relative;
        padding: rem(128px 0);
        display: grid;
        overflow: hidden;

        @include media-breakpoint-down(md) {
            padding: rem(64px 0);
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        height: 100%;
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
        @include p_type_1;

        color: #faf5ff;
        max-width: 595px;
    }

    &__map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        width: 100%;
        height: 100%;

        @include media-breakpoint-down(md) {
            top: unset;
            height: auto;
            width: 200vw;
            bottom: -200px;
            left: -270px;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    &__controls {
        align-items: center;
        margin-top: auto;
        display: none;

        @include media-breakpoint-down(sm) {
            display: flex;
        }
    }

    &__control {
        position: relative;
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        transition: 350ms;
        margin-right: rem(8px);

        &::before {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            padding: 2px;
            border-radius: 8px;
            z-index: -1;
            background: linear-gradient(
                90deg,
                #7c1dd3 2.02%,
                #912eef 49.93%,
                #ee40ff 96.86%
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            transition: 350ms;
        }

        &::after {
            content: '';
            position: absolute;
            background: linear-gradient(
                90deg,
                #7c1dd3 2.02%,
                #912eef 49.93%,
                #ee40ff 96.86%
            );
            background-repeat: no-repeat;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            top: 1px;
            left: 1px;
            margin: auto;
            opacity: 0;
            transition: 350ms;
            z-index: -1;
            border-radius: 8px;
        }

        &:hover {
            &::after {
                opacity: 1;
                transition: 350ms;
            }
        }

        &:active {
            transform: scale(0.85);
            transition: 350ms;
        }
    }
}
</style>
