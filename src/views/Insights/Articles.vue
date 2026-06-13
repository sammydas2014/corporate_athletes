<template>
  <div class="articles-view">
    <HeroBanner
      :title="bannerData.title"
      :subtitle="bannerData.subtitle"
      :bg-color="bannerData.bgColor"
      :min-height="bannerData.minHeight"
      :image-url="bannerData.imageUrl"
      :image-alt="bannerData.imageAlt"
      :breadcrumbs="bannerData.breadcrumbs"
      :show-search="bannerData.showSearch"
      :search-placeholder="bannerData.searchPlaceholder"
      :search-icon-position="bannerData.searchIconPosition"
      class="articles_bnr"
    />
    <section class="editor-lence-wrap">
      <div class="container">
        <div class="headng-prt">
              <span class="title__eyebrow"> Editorial lens </span>
              <h2 class="sec__title">Built for decision quality</h2>
        </div>
        <div class="lence-tools">
          <template v-for="(data , index) in lensData" :key="index">
            <LensCard
              :logo="data?.imageSrc"
              :title="data?.title"
            />
          </template>
        </div>
      </div>

    </section>

    <section class="letst-artical-sec">
      <div class="container">
        <div class="headng-prt">
          <span class="title__eyebrow"> Latest articles </span>
          <h2 class="sec__title">Current thinking</h2>
        </div>
        <div class="thickWrap">
          <template v-for="(data , index) in thinkData" :key="index">
            <BaseThinkCard
              :image-data="data?.imageSrc"
              :date="data?.thinkData"
              :title="data?.title"
              :details="data?.description"
            />
          </template>
        </div>
      </div>
    </section>
    
    <BaseInsightsSection
      title="Featured articles"
    />

    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
import LensCard from "@/components/common/LensCard.vue"
import BaseThinkCard from "@/components/common/BaseThinkCard.vue"
import BaseInsightsSection from '../Home/sections/BaseInsightsSection.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import { bannerData, lensData , thinkData } from '@/services/articles.service';
import {accelerateData} from "@/services/home.service"

</script>

