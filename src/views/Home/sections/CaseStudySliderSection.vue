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

<style scoped>
.cstd_sec {
  background: var(--bs-success);
  min-height: 480px;
  padding: var(--sec-gap) 0;
  font-family: var(--bs-body-font-family);
  overflow: hidden;
}

.cstd-top {
  margin-bottom: 50px;
}

.cstd-top .sec__title {
  color: var(--bs-white);
}
</style>
