<template>
  <div class="consortium-view">
    <HeroBanner
      :title="bannerData.title"
      :subtitle="bannerData.subtitle"
      :bg-color="bannerData.bgColor"
      :image-url="bannerData.imageUrl"
      :image-alt="bannerData.imageAlt"
      :min-height="bannerData.minHeight"
      :breadcrumbs="bannerData.breadcrumbs"
      :ctas="bannerData.ctas"
      class="consortium_bnr"
    />

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
            <button
              v-for="theme in themesData"
              :key="theme"
              type="button"
              class="theme-chip"
              :class="{ 'theme-chip--active': selectedThemes.includes(theme) }"
              @click="toggleTheme(theme)"
            >
              {{ theme }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'
import LensCard from '@/components/common/LensCard.vue'
import { bannerData, perspectivesData, themesData } from '@/services/consortiumContributions.service'

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
