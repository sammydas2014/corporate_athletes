<script setup>
import BreakdownCard from '@/components/common/BreakDownCard.vue';
import { breakDownData } from '@/services/tooldetails.service.js';
</script>

<template>
  <section class="breakdown-section">
    <div class="container">
      <h2 class="sec-title">Scoring Breakdown</h2>
      <div class="tab-wrap">
        <template v-for="(item, index) in breakDownData" :key="index">
          <BreakdownCard :title="item.metric" :score="item.score" :description="item.description" />
        </template>
      </div>
    </div>
  </section>
</template>
