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

<!-- styles moved to src/assets/styles/components/BaseButton.css -->