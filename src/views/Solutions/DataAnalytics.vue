<template>
  <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
    :bg-image="bannerData.bgImage" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
    :min-height="bannerData.minHeight" :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas"
    class="dataanalytics_bnr" />
  <BaseEnterprice :imageData="enterPriceChallengeData.image" :tagData="enterPriceChallengeData.tag"
    :title="enterPriceChallengeData.title" :details="enterPriceChallengeData.description"
    :buletLists="enterPriceChallengeData.buletLists" className="strategy-governace-sec" />
  <ApproachSection :ourApproachData="ourApproachData" />
  <BaseEngagement :imageData="consortiumData.imageData" :tag="consortiumData.tag" :title="consortiumData.title"
    :subtitle="consortiumData.subtitle" :soluctionItems="solutionData" :outcome="outcomeData"
    className="analytics-engagement-sec" />
  <MeasurableSection :cards="statergySlideData" />
  <CaseStudySliderSection :cards="caseStudies" />
  <BaseAccelerate />
</template>

<script setup>
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import HeroBanner from '@/components/common/Herobanner.vue'
import {
  bannerData,
  enterPriceChallengeData,
  consortiumData,
  solutionData,
  outcomeData,
  statergySlideData,
  ourApproachData,
  caseStudies
} from '@/services/dataanalytics.service';
import CaseStudySliderSection from '@/components/common/CaseStudySliderSection.vue';
import MeasurableSection from './sections/MeasurableSection.vue';
import BaseEngagement from '@/components/common/BaseEngagement.vue';
import ApproachSection from './sections/ApproachSection.vue';
import BaseEnterprice from '@/components/common/BaseEnterprice.vue';

</script>
