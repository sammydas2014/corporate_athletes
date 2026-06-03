<template>
  <Herobanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-image="bannerData.bgImage"
    :overlay="bannerData.overlay" :show-accent="bannerData.showAccent" :accent-color="bannerData.accentColor"
    :min-height="bannerData.minHeight" class="aboutBnr" />
</template>

<script setup>
import Herobanner from '@/components/common/Herobanner.vue';
import { bannerData } from '@/services/about.service'
</script>

<style lang="scss" scoped>
.hero-banner.aboutBnr {
  display: flex;
  flex-direction: column-reverse;
}
</style>
