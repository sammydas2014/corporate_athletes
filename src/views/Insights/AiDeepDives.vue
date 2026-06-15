<template>
  <div class="deep-dives-view">
    <HeroBanner
      :title="bannerData.title"
      :subtitle="bannerData.subtitle"
      :bg-color="bannerData.bgColor"
      :min-height="bannerData.minHeight"
      :image-url="bannerData.imageUrl"
      :image-alt="bannerData.imageAlt"
      :breadcrumbs="bannerData.breadcrumbs"
      :ctas="bannerData.ctas"
      class="deepdrive-bnnr articles_bnr"
    />
    <section class="deepdrive-sec">
      <div class="container">
        <div class="deepdrive-inner">
          <template v-for="(data, index) in lensData" :key="index">
            <LensCard :logo="data.imageSrc" :title="data.title" :description="data.details" />
          </template>
        </div>
      </div>
    </section>
    <section class="surfaceSec">
      <div class="container">
        <div class="headng-prt">
          <span class="title__eyebrow"> Current analysis </span>
          <h2 class="sec__title">Signals beneath the surface</h2>
        </div>
        <div class="serfaceWrp">
          <template v-for="data in analysisData" :key="data?.id">
            <BaseAnalysisCard
              :badge="data?.category"
                :title="data?.title"
                :description="data?.description"
                :footer="data?.footer"
                :number="data?.number"
            />
          </template>
        </div>
      </div>
    </section>
    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
import LensCard from '@/components/common/LensCard.vue';
import BaseAnalysisCard from '@/components/common/BaseAnalysisCard.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import { lensData , analysisData , bannerData } from '@/services/deepdrive.service';
import { accelerateData } from '@/services/home.service';
</script>

