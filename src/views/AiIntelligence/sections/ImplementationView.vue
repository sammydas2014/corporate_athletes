<template>
  <section class="implementation-view">
    <div class="container">
      <h3 class="implementation-view__title">{{ data.title }}</h3>
      <div class="implementation-view__card">
        <div v-for="(metric, index) in data.metrics" :key="index" class="implementation-view__metric">
          <div class="implementation-view__icon">
            <i :class="metric.icon"></i>
          </div>
          <div class="implementation-view__content">
            <span class="implementation-view__label">{{ metric.label }}</span>
            <span class="implementation-view__value">{{ metric.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { implementationData } from '@/services/tooldetails.service';

defineProps({
  data: {
    type: Object,
    default: () => implementationData,
  },
});
</script>
