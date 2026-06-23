<template>
  <div class="consortium-view">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt" :min-height="bannerData.minHeight"
      :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas" class="consortium_bnr" />

    <section class="deepdrive-sec new-deepdrive-sec">
      <div class="container">
        <div class="headng-prt">
          <h2 class="sec__title">Perspectives Included</h2>
        </div>
        <div class="deepdrive-inner">
          <template v-for="(data, index) in perspectivesData" :key="index">
            <LensCard :logo="data.imageSrc" :title="data.title" :description="data.details" />
          </template>
        </div>
      </div>
    </section>

    <section class="themes-sec">
      <div class="container">
        <div class="headng-prt">
          <h2 class="sec__title">Contribution Themes</h2>
        </div>
        <div class="theme-filter-card">
          <span class="theme-filter-card__label">Filter by what you're working through</span>
          <div class="theme-filter-card__list">
            <button v-for="theme in themesData" :key="theme" type="button" class="theme-chip"
              :class="{ 'theme-chip--active': selectedThemes.includes(theme) }" @click="toggleTheme(theme)">
              {{ theme }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="fetured-con-sec">
      <div class="container">
        <div class="roundtables-section__header">
          <div class="roundtables-section__header-left">
            <span class="title__eyebrow">{{ featuredContributionsData.eyebrow }}</span>
            <h2 class="sec__title">{{ featuredContributionsData.title }}</h2>
          </div>
          <p class="roundtables-section__desc">{{ featuredContributionsData.description }}</p>
        </div>
        <div class="cards-wrapper">
          <template v-for="card in featuredContributionsData?.items" :key="card?.id">
            <RoundtableCard :card="card" />
          </template>
        </div>

      </div>
    </section>

    <section class="theme-rankings-sec">
      <div class="container">
        <div class="theme-rankings-hdng">
          <span class="title__eyebrow">{{ themeRankingsData.eyebrow }}</span>
          <h2 class="sec__title">{{ themeRankingsData.title }}</h2>
        </div>
        <div class="theme-rankings-grid">
          <div v-for="(item, index) in themeRankingsData.items" :key="index" class="theme-rank-card">
            <span class="theme-rank-card__number">{{ item.number }}</span>
            <h3 class="theme-rank-card__title">{{ item.title }}</h3>
            <span class="theme-rank-card__meta">
              <img :src="imageMap.user_icon" alt="">
              {{ item.count }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="signals-sec">
      <div class="container">
        <div class="signals-hdng">
          <span class="title__eyebrow">{{ practitionerSignalsData.eyebrow }}</span>
          <h2 class="sec__title">{{ practitionerSignalsData.title }}</h2>
        </div>
        <div class="signals-grid">
          <div v-for="(item, index) in practitionerSignalsData.items" :key="index" class="signal-card">
            <span class="signal-card__icon">
              <img :src="item.icon" alt="">
            </span>
            <p class="signal-card__quote">"{{ item.quote }}"</p>
          </div>
        </div>
      </div>
    </section>

    <RoundtablesSection :eyebrow="academyResourcesData.eyebrow" :title="academyResourcesData.title"
      :items="academyResourcesData.items" :heading-btn="academyResourcesData.headingBtn" :desktop-cols="3"
      class="acc_resource" />

    <section class="surfaceSec stand_sec">
      <div class="container">
        <span class="title__eyebrow">{{ contributionStandardsData.eyebrow }}</span>
        <h2 class="sec__title">{{ contributionStandardsData.title }}</h2>
        <div class="serfaceWrp">
          <template v-for="data in contributionStandardsData.items" :key="data.number">
            <BaseAnalysisCard :number="data.number" :title="data.title" :description="data.description" />
          </template>
        </div>
      </div>
    </section>

    <IntegrateCTA :data="applyCTAData" class="" />

    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'
import LensCard from '@/components/common/LensCard.vue'
import RoundtablesSection from '@/views/Events/sections/RoundtablesSection.vue'
import BaseAnalysisCard from '@/components/common/BaseAnalysisCard.vue'
import IntegrateCTA from '@/views/AiIntelligence/sections/IntegrateCTA.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'
import { bannerData, featuredContributionsData, perspectivesData, themesData, themeRankingsData, practitionerSignalsData, academyResourcesData, contributionStandardsData, applyCTAData } from '@/services/consortiumContributions.service'
import { accelerateData } from '@/services/home.service'
import { imageMap } from '@/assets/images/imageMap'
import RoundtableCard from '@/components/common/RoundtableCard.vue'

const selectedThemes = ref([])

function toggleTheme(theme) {
  const i = selectedThemes.value.indexOf(theme)
  if (i === -1) {
    selectedThemes.value.push(theme)
  } else {
    selectedThemes.value.splice(i, 1)
  }
}
</script>
