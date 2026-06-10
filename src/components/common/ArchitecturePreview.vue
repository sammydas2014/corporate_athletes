<script setup>
import { architecturePreview } from '@/services/shortlist.service';
import { imageMap } from '@/assets/images/imageMap';

defineProps({
  data: {
    type: Object,
    default: () => architecturePreview,
  },
});
</script>

<template>
  <div class="architecture-preview"
    :style="{ backgroundImage: `url(${imageMap.architectureBg})` }">
    <div class="architecture-preview__content">
      <h5 class="architecture-preview__title">{{ data.title }}</h5>
      <p class="architecture-preview__subtitle">{{ data.subtitle }}</p>
      <a href="#" class="architecture-preview__link">
        {{ data.ctaLabel }}
        <i class="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
</template>
