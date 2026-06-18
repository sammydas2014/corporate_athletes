<script setup>
defineProps({
  step: {
    type: [String, Number],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  tools: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="stack-card">
    <div class="stack-card__number">
      {{ step }}
    </div>

    <h3 class="stack-card__title">
      {{ title }}
    </h3>

    <p class="stack-card__description">
      {{ description }}
    </p>

    <div
      v-if="tools.length"
      class="stack-card__tools"
    >
      {{ tools.join(' / ') }}
    </div>
  </div>
</template>
