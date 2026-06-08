<template>
  <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
    :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt" :min-height="bannerData.minHeight"
    :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas" class="financeshared_bnr" />
  <BaseEnterprice :imageData="enterPriceChallengeData.image" :tagData="enterPriceChallengeData.tag"
    :title="enterPriceChallengeData.title" :details="enterPriceChallengeData.description"
    :buletLists="enterPriceChallengeData.buletLists" className="strategy-governace-sec" />
  <ApproachSection :ourApproachData="ourApproachData" />
  <BaseEngagement :imageData="consortiumData.imageData" :tag="consortiumData.tag" :title="consortiumData.title"
    :subtitle="consortiumData.subtitle" :soluctionItems="solutionData" :outcome="outcomeData" className="fs_eng_sec" />
  <MeasurableSection :cards="statergySlideData" />
  <CaseStudySliderSection 
    :cards="caseStudies"
  />
  <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
    :secondary-btn-label="accelerateData.secondaryBtnLabel" />
</template>

<script setup>
import BaseEnterprice from '@/components/common/BaseEnterprice.vue';
import HeroBanner from '@/components/common/Herobanner.vue'
import { bannerData, statergySlideData, consortiumData, solutionData, outcomeData, ourApproachData, enterPriceChallengeData, accelerateData } from '@/services/financeshared.service';
import { caseStudies } from '@/services/home.service.js';
import ApproachSection from './sections/ApproachSection.vue';
import BaseEngagement from '@/components/common/BaseEngagement.vue';
import MeasurableSection from './sections/MeasurableSection.vue';
import CaseStudySliderSection from '@/components/common/CaseStudySliderSection.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
</script>
