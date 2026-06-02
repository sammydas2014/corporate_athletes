<template>
  <Herobanner :title="BannerData.title" :subtitle="BannerData.subtitle" :bg-color="BannerData.bgColor"
    :min-height="BannerData.minHeight" :image-url="BannerData.imageUrl" :ctas="BannerData.ctas"
    :breadcrumbs="BannerData.breadcrumbs" class="AIStrategyBnr" />
</template>

<script setup>
import Herobanner from '@/components/common/Herobanner.vue';
import { BannerData } from '@/services/aistrategygovernance.service';
</script>

<style scoped>
.hero-banner.AIStrategyBnr {
  display: flex;
  padding: 0;
}
</style>
