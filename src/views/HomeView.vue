<template>
  <div class="home_main">
    <HeroBanner
      title="AI-Driven Transformation for Performance-Focused Enterprises"
      subtitle="Corporate Athletes is a boutique advisory and AI consortium helping leadership teams redesign operating models, deploy intelligent technologies, and deliver measurable performance improvements."
      :bg-image="imageMap.homeBnr"
      :show-accent="true"
      accent-color="#1b9aaa"
      min-height="800px"
      class="homeBnr"
      :ctas="[
        { label: 'Book a Strategy Call', style: 'primary' },
        { label: 'Explore AI Intelligence', style: 'outline' },
      ]"
    />

    <section class="audience-slider">
      <div class="container">
        <div class="audience-slider__header text-center">
          <span class="title__eyebrow"> Who we work with </span>
          <h2 class="sec__title">Built for executive decision makers</h2>
          <p class="sec__subtitle">
            Corporate Athletes works directly with leadership teams, boards, and investors
            responsible for strategy, performance, and transformation across the enterprise.
          </p>
        </div>
        <Audienceslider />
      </div>
    </section>

    <WhatWeDo />

    <CorporateAthletes />

    <MarqueeSlider />

    <section class="ai-platform">
      <div class="container">
        <div class="ai-platform__header text-center">
          <span class="title__eyebrow">AI Intelligence Platform</span>
          <h2 class="sec__title">Independent intelligence on enterprise AI tools</h2>
          <p class="sec__subtitle">
            Corporate Athletes maintains a continuously evolving catalogue of AI platforms and
            enterprise tools. Each is evaluated based on real world use, enterprise readiness, and
            integration complexity.
          </p>
        </div>
        <AiPlatformSlider />

        <div class="ai-platform__cta text-center">
          <BaseButton variant="primary" href="#">platform access</BaseButton>
        </div>
      </div>
    </section>

    <section class="cstd_sec">
      <div class="container">
        <div class="cstd-top text-center">
          <span class="title__eyebrow">Selected Case Study</span>
          <h2 class="sec__title">Real transformation outcomes</h2>
        </div>
        <CaseStudySlider :cards="caseStudies" />
      </div>
    </section>

    <BaseInsightsSection />

    <BaseAccelerate />
  </div>
</template>

<script setup>
import HeroBanner from '../components/banner/Herobanner.vue'
import { imageMap } from '../assets/images/imageMap.js'
import Audienceslider from '@/components/slider/Audienceslider.vue'
import AiPlatformSlider from '@/components/slider/AiPlatformSlider.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import CaseStudySlider from '@/components/slider/CaseStudySlider.vue'
import MarqueeSlider from '@/components/slider/MarqueeSlider.vue'
import BaseAccelerate from '@/components/ui/BaseAccelerate/BaseAccelerate.vue'
import WhatWeDo from '@/components/ui/What-We-Do-Section/WhatWeDo.vue'
import CorporateAthletes from '@/components/ui/BaseCorporate-Athletes/CorporateAthletes.vue'
import BaseInsightsSection from '@/components/ui/insights-section/BaseInsights-section.vue'

const caseStudies = [
  {
    tag: 'Consumer Goods',
    title: 'Global AP Transformation Across 40 Countries',
    sub: 'Reduced invoice cycle time from 12 to 3 days',
    img: imageMap.cstdImg1,
    to: '/case-studies/consumer-goods',
  },
  {
    tag: 'Energy',
    title: 'Finance Shared Services Modernization',
    sub: 'Achieved $20M savings through intelligent automation',
    img: imageMap.cstdImg2,
    to: '/case-studies/energy',
  },
  {
    tag: 'Healthcare',
    title: 'Real-Time Claims Processing Platform',
    sub: 'Reduced business processing costs by 45%',
    img: imageMap.cstdImg3,
    to: '/case-studies/healthcare',
  },
  {
    tag: 'Retail',
    title: 'Supply Chain Intelligence & Forecasting',
    sub: 'Increased forecast accuracy from 72% to 94%',
    img: imageMap.cstdImg1,
    to: '/case-studies/retail',
  },
  {
    tag: 'Technology',
    title: 'Enterprise Cloud Migration & Optimization',
    sub: 'Reduced infrastructure costs by 38% in 6 months',
    img: imageMap.cstdImg2,
    to: '/case-studies/technology',
  },
]
</script>

<style scoped>
.hero-banner.homeBnr {
  display: flex;
  flex-direction: column-reverse;
}

.ai-platform__header {
  margin-bottom: 20px;
  max-width: 770px;
  margin-inline: auto;
}

.ai-platform__cta {
  margin-top: 20px;
  text-align: center;
}

.ai-platform__cta .btn {
  max-width: fit-content;
  margin-inline: auto;
}
.cstd_sec {
  background: var(--bs-success);
  min-height: 480px;
  padding: var(--sec-gap) 0;
  font-family: var(--bs-body-font-family);
  overflow: hidden;
}

.cstd-top {
  margin-bottom: 50px;
}

.cstd-top .sec__title {
  color: var(--bs-white);
}
</style>
