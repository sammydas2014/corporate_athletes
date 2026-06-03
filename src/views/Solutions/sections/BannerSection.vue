<template>
  <Herobanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-image="bannerData.bgImage"
    :min-height="bannerData.minHeight" :image-url="bannerData.imageUrl" class="solutionBnr" />
</template>

<script setup>
import Herobanner from '@/components/common/Herobanner.vue';
import { bannerData } from '@/services/solutions.service';
</script>

<style lang="scss" scoped>
.hero-banner.solutionBnr {
  display: flex;
  padding: 50px 0;
}
</style>
