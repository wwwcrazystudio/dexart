<template>
    <div class="input">
        <div class="input__wrap" :class="value.length && 'input__wrap--active'">
            <input
                :id="id"
                :type="type || 'text'"
                class="input__control"
                :value="value"
                @input="handleInput"
            />
            <label :for="id" class="input__label">{{ label }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import { v4 as uuid } from 'uuid'
export interface InputProps {
    value: string
    label: string
    type: string
}

export interface InputEmits {
    (e: 'update:value', value: string): void
}

const id = uuid()

defineProps<InputProps>()
const emit = defineEmits<InputEmits>()

const handleInput = (e: Event) => {
    const el = e.target as HTMLInputElement
    const value = el.value as string

    emit('update:value', value)
}
</script>

<style scoped lang="scss">
.input {
    &__wrap {
        position: relative;
        font-family: 'StyreneAWeb', sans-serif;

        &--active {
            .input {
                &__control {
                    background: #6a1dac;
                    transition: 350ms;

                    &:hover {
                        background: #6a1dac;
                        transition: 350ms;
                    }

                    ~ label {
                        opacity: 0;
                        pointer-events: none;
                        transition: 350ms;
                    }
                }
            }
        }
    }

    &__control {
        font-weight: 300;
        font-size: rem(18px);
        line-height: 120%;
        color: #ffffff;
        padding: rem(20px 16px);
        background: rgba(87, 25, 138, 0.5);
        border-radius: 16px;
        appearance: none;
        border: none;
        width: 100%;
        transition: 350ms;

        @include media-breakpoint-down(md) {
            font-size: rem(14px);
            padding: rem(17px 12px);
        }

        &:hover {
            background: rgba(87, 25, 138, 0.8);
            transition: 350ms;
        }

        &:active,
        &:focus {
            background: #6a1dac;
            outline: none;
            transition: 350ms;

            ~ label {
                opacity: 0;
                pointer-events: none;
                transition: 350ms;
            }
        }
    }

    &__label {
        font-weight: 300;
        font-size: rem(18px);
        line-height: 120%;
        color: #ffffff;
        position: absolute;
        left: rem(16px);
        top: 0;
        bottom: 0;
        margin: auto;
        height: fit-content;
        transition: 350ms;
    }
}
</style>
