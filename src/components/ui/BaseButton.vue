<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },

    variant: {
        type: String,
        default: 'primary'
    },

    loading: {
        type: Boolean,
        default: false
    },

    disabled: {
        type: Boolean,
        default: false
    },

    to: {
        type: [String, Object],
        default: null
    },

    href: {
        type: String,
        default: null
    }
})
</script>

<template>
    <RouterLink v-if="props.to" :to="props.to" :class="[
        'btn',
        `btn-${props.variant}`,
        { 'btn-loading': props.loading }
    ]">
        <span v-if="$slots.icon_left">
            <slot name="icon_left" />
        </span>

        <slot>Click</slot>

        <span v-if="$slots.icon_right">
            <slot name="icon_right" />
        </span>
    </RouterLink>

    <a v-else-if="props.href" :href="props.href" :class="[
        'btn',
        `btn-${props.variant}`,
        { 'btn-loading': props.loading }
    ]">
        <span v-if="$slots.icon_left">
            <slot name="icon_left" />
        </span>

        <slot>Click</slot>

        <span v-if="$slots.icon_right">
            <slot name="icon_right" />
        </span>
    </a>

    <button v-else :type="props.type" :disabled="props.disabled || props.loading" :class="[
        'btn',
        `btn-${props.variant}`,
        { 'btn-loading': props.loading }
    ]">
        <span v-if="$slots.icon_left">
            <slot name="icon_left" />
        </span>

        <slot>Click</slot>

        <span v-if="$slots.icon_right">
            <slot name="icon_right" />
        </span>
    </button>
</template>

<style scoped>
/* Buttons */
.btn {
    font-family: var(--bs-body-font-family);
    font-weight: 500;
    padding: 0 40px;
    border-radius: var(--bs-border-radius-pill);
    transition: var(--bs-transition);
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.09em;
    text-transform: uppercase;
}

.btn-primary {
    --bs-btn-bg: var(--bs-primary);
    --bs-btn-border-color: var(--bs-primary);
    --bs-btn-hover-bg: var(--bs-white);
    --bs-btn-hover-border-color: var(--bs-primary);
    --bs-btn-active-bg: var(--bs-white);
    --bs-btn-active-border-color: var(--bs-primary);
    --bs-btn-color: var(--bs-white);
    --bs-btn-hover-color: var(--bs-primary);
}

.btn-secondary {
    --bs-btn-color: var(--color-white-pure);
    --bs-btn-bg: var(--bs-secondary);
    --bs-btn-border-color: var(--bs-secondary);
    --bs-btn-hover-bg: var(--bs-white);
    --bs-btn-hover-border-color: var(--bs-secondary);
    --bs-btn-active-bg: var(--bs-white);
    --bs-btn-active-border-color: var(--bs-secondary);
    --bs-btn-color: var(--bs-black);
    --bs-btn-hover-color: var(--bs-secondary);
}

.btn-outline-white {
    --bs-btn-color: var(--bs-white);
    --bs-btn-border-color: var(--bs-white);
    --bs-btn-hover-bg: var(--bs-white);
    --bs-btn-hover-border-color: var(--bs-white);
    --bs-btn-hover-color: var(--bs-dark);
}

.btn-outline-secondary {
    --bs-btn-color: var(--bs-secondary);
    --bs-btn-border-color: var(--bs-secondary);
    --bs-btn-hover-bg: var(--bs-secondary);
    --bs-btn-hover-border-color: var(--bs-secondary);
    --bs-btn-hover-color: var(--color-white-pure);
}

.btn-loading {
    cursor: wait;
    opacity: 0.5;
}

.btn span {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>