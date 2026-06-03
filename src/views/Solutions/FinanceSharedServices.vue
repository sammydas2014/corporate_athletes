<template>
  <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
    :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt" :min-height="bannerData.minHeight"
    :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas" class="financeshared_bnr" />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
import { bannerData } from '@/services/financeshared.service';
</script>
