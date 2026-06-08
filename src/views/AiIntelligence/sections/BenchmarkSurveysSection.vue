<template>
  <section class="benchmark-sec">
    <img :src="benchmarkBg" alt="" class="benchmark-sec__bg" aria-hidden="true" />
    <div class="container" style="position: relative; z-index: 1;">
      <div class="benchmark-top">
        <span class="title__eyebrow">{{ eyebrow }}</span>
        <h2 class="sec__title">{{ heading }}</h2>
      </div>
      <div class="benchmark-grid">
        <BarChart />
        <LineChart />
      </div>
    </div>
  </section>
</template>

<script setup>
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'
import { imageMap } from '@/assets/images/imageMap.js'

defineProps({
  eyebrow: { type: String, default: 'Data & Research' },
  heading: { type: String, default: 'AI Benchmarks & Surveys' },
})

const benchmarkBg = imageMap.benchmarkBg
</script>
