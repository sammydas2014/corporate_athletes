<template>
  <div class="research-card">
    <div class="research-card__content">
      <h3 class="research-card__title">{{ title }}</h3>
      <p v-if="description" class="research-card__desc">{{ description }}</p>
    </div>
    <BaseButton :to="link" class="research-card__btn">Read More</BaseButton>
  </div>
</template>

<script setup>
import BaseButton from './BaseButton.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  link: { type: [String, Object], default: '/' }
})
</script>
