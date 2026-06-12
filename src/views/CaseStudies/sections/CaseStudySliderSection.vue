<template>
  <section class="ftured_cstd_sec">
    <div class="container">
      <h2 class="sec__title">Featured Case Studies</h2>
      <CaseStudySlider :cards="cards" />
    </div>
  </section>
</template>

<script setup>
import CaseStudySlider from '@/components/slider/CaseStudySlider.vue';

defineProps({
  cards: {
    type: Array,
    default: () => []
  },
})
</script>
