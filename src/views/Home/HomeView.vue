<template>
  <div class="home_main">
    <Herobanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-image="bannerData.bgImage"
      :overlay="bannerData.overlay" :show-accent="bannerData.showAccent" :accent-color="bannerData.accentColor"
      :min-height="bannerData.minHeight" :ctas="bannerData.ctas" class="homeBnr" />

    <AudienceSection />

    <WhatWeDo />

    <CorporateAthletes />

    <MarqueeSlider />

    <AiPlatformSection />

    <CaseStudySliderSection :cards="caseStudies" />

    <BaseInsightsSection />

    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import MarqueeSlider from '@/components/slider/MarqueeSlider.vue'
import WhatWeDo from '@/views/Home/sections/WhatWeDo.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'
import CorporateAthletes from './sections/CorporateAthletes.vue'
import BaseInsightsSection from './sections/BaseInsightsSection.vue'
import AiPlatformSection from './sections/AiPlatformSection.vue'
import AudienceSection from './sections/AudienceSection.vue'
import CaseStudySliderSection from '@/components/common/CaseStudySliderSection.vue'
import Herobanner from '@/components/common/Herobanner.vue'
import { bannerData, caseStudies, accelerateData } from '@/services/home.service.js'

</script>
