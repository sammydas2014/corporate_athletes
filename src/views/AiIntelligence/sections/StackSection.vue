<script setup>
import StackCard from '@/components/common/StackCard.vue';
import { stackDataList } from '@/services/tooldetails.service.js'
</script>

<template>
  <section class="stack-section">
    <div class="container">
      <h2 class="sec-title">Stack Compatibility & Integration</h2>
      <div class="stack-list">
        <template v-for="(data, index) in stackDataList" :key="index">
          <StackCard :role="data.role" :subHdng="data.title" :description="data.description"
            :toolsList="data.compatible_tools" />
        </template>
      </div>
    </div>
  </section>
</template>
