<template>
  <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
    :bg-image="bannerData.bgImage" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
    :min-height="bannerData.minHeight" :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas"
    class="dataanalytics_bnr" />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
import { bannerData } from '@/services/dataanalytics.service';
</script>
