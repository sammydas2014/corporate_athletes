<template>
  <div class="solutions-main">

    <Herobanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-image="bannerData.bgImage"
      :min-height="bannerData.minHeight" :image-url="bannerData.imageUrl" class="solutionBnr" />

    <CapabilityPillars />

    <MarqueeSlider />
  </div>
</template>

<script setup>
import CapabilityPillars from './sections/CapabilityPillars.vue';
import MarqueeSlider from '@/components/slider/MarqueeSlider.vue';
import Herobanner from '@/components/common/Herobanner.vue';
import { bannerData } from '@/services/solutions.service.js';
</script>
