<template>
  <Herobanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-image="bannerData.bgImage"
    :overlay="bannerData.overlay" :show-accent="bannerData.showAccent" :accent-color="bannerData.accentColor"
    :min-height="bannerData.minHeight" :ctas="bannerData.ctas" class="homeBnr" />
</template>

<script setup>
import Herobanner from '@/components/common/Herobanner.vue';
import { bannerData } from '@/services/home.service.js';
</script>

<style lang="scss" scoped>
.hero-banner.homeBnr {
  display: flex;
  align-items: flex-end;
}
</style>
