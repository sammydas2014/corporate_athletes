<template>
  <section class="cstd_sec">
    <div class="container">
      <div class="cstd-top text-center">
        <span class="title__eyebrow">Selected Case Study</span>
        <h2 class="sec__title">Real transformation outcomes</h2>
      </div>
      <CaseStudySlider :cards="caseStudies" />
    </div>
  </section>
</template>

<script setup>
import CaseStudySlider from '@/components/slider/CaseStudySlider.vue'
import { caseStudies } from '@/services/home.service.js'
</script>

<!-- styles moved to src/assets/styles/views/CaseStudySliderSection.css -->
