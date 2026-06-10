<template>
  <section class="integrate-cta">
    <div class="container">
      <div class="integrate-cta-wrp">
        <h2 class="integrate-cta__title">{{ data.title }}</h2>
        <p class="integrate-cta__subtitle">{{ data.subtitle }}</p>
        <div class="integrate-cta__actions">
          <BaseButton variant="secondary" :href="data.primaryBtnLink">
            {{ data.primaryBtnLabel }}
          </BaseButton>
          <BaseButton variant="outline-white" :to="data.secondaryBtnLink">
            {{ data.secondaryBtnLabel }}
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import { integrateCTAData } from '@/services/tooldetails.service';

defineProps({
  data: {
    type: Object,
    default: () => integrateCTAData,
  },
});
</script>
