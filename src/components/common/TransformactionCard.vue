<script setup>
defineProps({
  variant: {
    type: String,
    default: 'normal',
  },
  chipTitle: {
    type: String,
    default: 'March 8, 2026',
  },
  title: {
    type: String,
    default: 'AI adoption patterns in enterprise finance',
  },
  paraTxt: {
    type: String,
    default:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
})
</script>

<template>
  <div :class="['transform-crd', `transform-crd-${variant}`]">
    <span class="text-wrap">
      <slot>
        <span class="title__eyebrow"> {{ chipTitle }} </span>
        <h3>{{ title }}</h3>
        <p>
          {{ paraTxt }}
        </p>
      </slot>
    </span>
    <span v-if="$slots['icon-right']" class="icon-right-crd">
      <slot name="icon-right"></slot>
    </span>
  </div>
</template>

<!-- styles moved to src/assets/styles/components/TransformactionCard.css -->
