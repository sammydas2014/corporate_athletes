<template>
  <Herobanner :title="BannerData.title" :subtitle="BannerData.subtitle" :bg-color="BannerData.bgColor"
    :min-height="BannerData.minHeight" :image-url="BannerData.imageUrl" :ctas="BannerData.ctas"
    :breadcrumbs="BannerData.breadcrumbs" class="AIStrategyBnr" />
  <BaseEnterprice :imageData="enterPriceChallengeData.image" :tagData="enterPriceChallengeData.tag"
    :title="enterPriceChallengeData.title" :details="enterPriceChallengeData.description"
    :buletLists="enterPriceChallengeData.buletLists" className="strategy-governace-sec" />
  <ApproachSection :ourApproachData="ourApproachData" />
  <BaseEngagement :imageData="consortiumData.imageData" :tag="consortiumData.tag" :title="consortiumData.title"
    :subtitle="consortiumData.subtitle" :soluctionItems="solutionData" :outcome="outcomeData" />
  <MeasurableSection :cards="statergySlideData" />
  <CaseStudySliderSection 
    :cards="caseStudies"
  />
  <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
    :secondary-btn-label="accelerateData.secondaryBtnLabel" />
</template>

<script setup>
import BaseEnterprice from '@/components/common/BaseEnterprice.vue';
import ApproachSection from './sections/ApproachSection.vue';
import BaseEngagement from '@/components/common/BaseEngagement.vue';
import MeasurableSection from './sections/MeasurableSection.vue';
import CaseStudySliderSection from '@/components/common/CaseStudySliderSection.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import {
  enterPriceChallengeData,
  consortiumData,
  solutionData,
  outcomeData,
  statergySlideData,
  ourApproachData,
  BannerData,
  caseStudies,
  accelerateData
} from '@/services/aistrategygovernance.service.js';
import Herobanner from '@/components/common/Herobanner.vue';
</script>