<script setup>
import FeatureCard from '@/components/common/FeatureCard.vue'
import { capability } from '@/services/solutions.service'
</script>

<template>
  <section class="capability-pillars-sec">
    <div class="container">
      <div class="hdng">
        <span class="title__eyebrow"> Capability Pillars </span>
        <h2 class="sec__title">End-to-end solutions for the modern enterprise</h2>
        <p class="sec__subtitle">
          Five integrated practice areas designed to accelerate transformation and drive enduring competitive advantage.
        </p>
      </div>
      <div class="fetaure-wrap">
        <template v-for="(feature, index) in capability" :key="index">
          <FeatureCard :logo="feature.icon" :title="feature.title" :details="feature.description" btn="Learn More"
            :btn-to="feature.to" />
        </template>
      </div>
    </div>
  </section>
</template>

<!-- styles moved to src/assets/styles/views/CapabilityPillars.css -->
