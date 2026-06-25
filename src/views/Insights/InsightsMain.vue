<template>
  <div class="insights-main">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt" :min-height="bannerData.minHeight"
      :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas"
      class="insights_bnr" />
      <section class="analysis-sec">
        <div class="container">
          <div class="main-wrap">
            <template v-for="data in analysisData" :key="data?.id">
              <BaseAnalysisCard
                :badge="data?.category"
                :title="data?.title"
                :description="data?.description"
                :footer="data?.footer"
              />
            </template>
          </div>
          <div class="editorial-wrper">
            <div class="headng-prt">
              <span class="title__eyebrow"> Editorial standard </span>
              <h2 class="sec__title">Clear, evidence-led, field-tested.</h2>
            </div>
            <div class="editorial-txt">
              <div class="editorialWrap">
                <p>
                  Every insight is designed to help executives separate durable AI advantage from market noise, pressure-test vendor claims, and convert transformation intent into operating cadence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BaseAccelerate />

  </div>
</template>

<script setup>

import HeroBanner from '@/components/common/Herobanner.vue'
import BaseAnalysisCard from '../../components/common/BaseAnalysisCard.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';

import { bannerData, analysisData } from '@/services/insights.service'


</script>
