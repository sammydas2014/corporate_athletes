<script setup>
import BaseButton from './BaseButton.vue';
import { shortlistInsights } from '@/services/shortlist.service';

defineProps({
  data: {
    type: Object,
    default: () => shortlistInsights,
  },
});
</script>

<template>
  <div class="shortlist-insights">
    <h5 class="shortlist-insights__title">{{ data.title }}</h5>
    <span class="shortlist-insights__label">{{ data.coverageLabel }}</span>

    <ul class="shortlist-insights__list">
      <li v-for="(item, index) in data.items" :key="index" class="shortlist-insights__item">
        <span class="shortlist-insights__item-label" :class="`shortlist-insights__item-label--${item.status}`">
          <i :class="item.status === 'gap' ? 'bi bi-exclamation-triangle' : 'bi bi-check2-circle'"></i>
          {{ item.label }}
        </span>
        <span class="shortlist-insights__badge" :class="`shortlist-insights__badge--${item.status}`">
          {{ item.status === 'gap' ? 'Gap Detected' : 'Covered' }}
        </span>
      </li>
    </ul>

    <div class="shortlist-insights__alert">
      <i class="bi bi-exclamation-triangle"></i>
      <div class="shortlist-insights__alert-content">
        <h6>{{ data.gapAlert.title }}</h6>
        <p>{{ data.gapAlert.description }}</p>
      </div>
    </div>

    <BaseButton variant="outline-light-thin">{{ data.ctaLabel }}</BaseButton>
  </div>
</template>
