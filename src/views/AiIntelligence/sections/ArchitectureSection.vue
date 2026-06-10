<script setup>
import { architectureData } from "@/services/tooldetails.service.js"
import ArchitectureCard from '@/components/common/ArchitectureCard.vue'
</script>

<template>
  <section class="architecture-section">
    <div class="container">
      <h2 class="sec-title">AI Architecture Placement</h2>
      <div class="architecture-wraper">
        <template v-for="(item, index) in architectureData" :key="index">
          <ArchitectureCard :stage="item.stage" :platform="item.platform" :items="item.items" />
        </template>
      </div>
    </div>
  </section>
</template>
