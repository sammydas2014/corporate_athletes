<script setup>
  import { imageMap } from '@/assets/images/imageMap';
import BaseButton from '@/components/common/BaseButton.vue';
</script>

<template>
  <div class="deepdrive-wrap">

    <div class="text-wrap">
      <h3>Deep Dive: Palantir Technologies</h3>
      <p>In-depth analysis of Palantir's Al capabilities in enterprise solutions.</p>
      <div class="statergy-wrap">
        <h6>Key Strengths: </h6>
        <p>Powerful data integration Scalable Al platforms</p>
      </div>
      <BaseButton variant="secondary">
        Read Full Analysis
      </BaseButton>
    </div>
    <div class="abs-img">
      <img :src="imageMap.aiGlobeImg" alt="Ai Globe Image">
    </div>
  </div>
</template>
