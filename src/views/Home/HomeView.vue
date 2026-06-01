<template>
  <div class="home_main">

    <BannerSection />

    <AudienceSection />

    <WhatWeDo />

    <CorporateAthletes />

    <MarqueeSlider />

    <AiPlatformSection />

    <CaseStudySliderSection />

    <BaseInsightsSection />

    <BaseAccelerate />
  </div>
</template>

<script setup>
import MarqueeSlider from '@/components/slider/MarqueeSlider.vue'
import WhatWeDo from '@/views/Home/sections/WhatWeDo.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'
import CorporateAthletes from './sections/CorporateAthletes.vue'
import BaseInsightsSection from './sections/BaseInsightsSection.vue'
import AiPlatformSection from './sections/AiPlatformSection.vue'
import BannerSection from './sections/BannerSection.vue'
import AudienceSection from './sections/AudienceSection.vue'
import CaseStudySliderSection from './sections/CaseStudySliderSection.vue'

</script>

<style scoped></style>
