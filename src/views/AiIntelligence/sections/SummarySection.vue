<script setup>
import SummaryCard from '@/components/common/SummaryCard.vue';
import { summaryData } from '@/services/tooldetails.service.js'
</script>
<template>
  <section class="summary-section" id="summary">
    <div class="container">
      <h2 class="sec-title">Executive Summary</h2>
      <div class="card-wraper">
        <template v-for="(item, index) in summaryData" :key="index">
          <SummaryCard :logo="item.logo" :heading="item.heading" :description="item.description" />
        </template>
      </div>
    </div>
  </section>
</template>
