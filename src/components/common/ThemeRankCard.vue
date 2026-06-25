<script setup>
import { imageMap } from '@/assets/images/imageMap'

defineProps({
  number: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  count: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="theme-rank-card">
    <span class="theme-rank-card__number">{{ number }}</span>
    <h3 class="theme-rank-card__title">{{ title }}</h3>
    <span class="theme-rank-card__meta">
      <img :src="imageMap.user_icon" alt="" />
      {{ count }}
    </span>
  </div>
</template>
