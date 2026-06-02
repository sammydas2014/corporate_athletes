<template>
  <AiStrategyBannerSection />
  <BaseEnterprice
    :imageData="enterPriceChallengeData.image"
    :tagData="enterPriceChallengeData.tag"
    :title="enterPriceChallengeData.title"
    :details="enterPriceChallengeData.description"
    :buletLists="enterPriceChallengeData.buletLists"
    className="strategy-governace-sec"
  />
  <ApproachSection />
  <BaseEngagement
    :imageData="consortiumData.imageData"
    :tag="consortiumData.tag"
    :title="consortiumData.title"
    :subtitle="consortiumData.subtitle"
    :soluctionItems="solutionData"
    :outcome="outcomeData"
  />
  <MeasurableSection
    :cards="statergySlideData"
  />
  <CaseStudySliderSection />
  <BaseAccelerate />
</template>

<script setup>
import BaseEnterprice from '@/components/common/BaseEnterprice.vue';
import AiStrategyBannerSection from './sections/AiStrategyBannerSection.vue';
import ApproachSection from './sections/ApproachSection.vue';
import BaseEngagement from '@/components/common/BaseEngagement.vue';
import MeasurableSection from './sections/MeasurableSection.vue';
import CaseStudySliderSection from '../Home/sections/CaseStudySliderSection.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import {
  enterPriceChallengeData,
  consortiumData,
  solutionData,
  outcomeData,
  statergySlideData,
} from '@/services/aistrategygovernance.service.js';
</script>

<style scoped></style>
