<script setup>
import FeatureCard from '@/components/common/FeatureCard.vue'
import { features } from '@/services/home.service.js'
</script>

<template>
  <section class="why-corporate-athletes-sec">
    <div class="container">
      <div class="hdng">
        <span class="title__eyebrow"> Why Corporate Athletes </span>
        <h2 class="sec__title">A different type of transformation advisory</h2>
        <p>
          Corporate Athletes works directly with leadership teams, boards, and investors responsible for strategy,
          performance, and transformation across the enterprise.
        </p>
      </div>
      <div class="fetaure-wrap">
        <template v-for="(feature, index) in features" :key="index">
          <FeatureCard :logo="feature.icon" :title="feature.title" :details="feature.description" />
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-corporate-athletes-sec {
  padding: var(--sec-gap) 0 48px 0;
  background-color: var(--bs-light);
}

.why-corporate-athletes-sec .hdng {
  max-width: 630px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 45px;
}

.fetaure-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.fetaure-wrap .feature-crd {
  width: calc(25% - 15px);
}
</style>
