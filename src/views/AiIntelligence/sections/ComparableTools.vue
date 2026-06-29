<template>
  <section class="comparable-tools">
    <div class="container">
      <h3 class="comparable-tools__title">{{ data.title }}</h3>
      <div class="comparable-tools__grid">
        <CompatableToolsSlider :cards="data.tools" />
        <!-- <div v-for="(tool, index) in data.tools" :key="index" class="comparable-tools__card">
          <span class="comparable-tools__score">{{ tool.score }}</span>
          <span class="comparable-tools__name">{{ tool.name }}</span>
          <div class="comparable-tools__meta">
            <span class="comparable-tools__pros">
              <i class="bi bi-check2-circle"></i> {{ tool.pros }}
            </span>
            <span class="comparable-tools__cons">
              <i class="bi bi-x-circle"></i> {{ tool.cons }}
            </span>
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { comparableToolsData } from '@/services/tooldetails.service';
import CompatableToolsSlider from "@/components/slider/CompatableToolsSlider.vue";
defineProps({
  data: {
    type: Object,
    default: () => comparableToolsData,
  },
});
</script>
