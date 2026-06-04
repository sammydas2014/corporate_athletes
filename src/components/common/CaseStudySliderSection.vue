<template>
  <section class="cstd_sec">
    <div class="container">
      <div class="cstd-top text-center">
        <span class="title__eyebrow">Selected Case Study</span>
        <h2 class="sec__title">Real transformation outcomes</h2>
      </div>
      <CaseStudySlider :cards="cards" />
    </div>
  </section>
</template>

<script setup>
import CaseStudySlider from '@/components/slider/CaseStudySlider.vue'
defineProps({
  cards: {
    type: Array,
    default: () => []
  },
})
</script>
