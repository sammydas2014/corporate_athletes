<script setup>
import WorkCard from '@/components/common/WorkCard.vue'
import { services } from '@/services/home.service.js'
</script>

<template>
  <section class="whatwedo-sec">
    <div class="container">
      <div class="whatdo-wrap d-flex">
        <div class="hdng-wrap">
          <span class="title__eyebrow"> What We Do </span>
          <h2 class="sec__title">Where strategy meets execution</h2>
          <p class="sub-hdng">Four capability pillars</p>
        </div>
        <div class="work-wrap">
          <template v-for="(serviceItem, index) in services" :key="index">
            <WorkCard :logo="serviceItem.icon" :heading="serviceItem.title" :descp="serviceItem.description" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- styles moved to src/assets/styles/views/WhatWeDo.css -->
