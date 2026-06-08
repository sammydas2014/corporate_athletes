<template>
  <div class="aiintelligence-main">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :bg-image="bannerData.bgImage" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :min-height="bannerData.minHeight" :show-search="bannerData.showSearch"
      :search-placeholder="bannerData.searchPlaceholder" :popular-searches="bannerData.popularSearches"
      @search="handleSearch" class="aiintelligence_bnr" />

    <CatalougueSection />

    <BenchmarkSurveysSection />
    <ResearchFrameworksSection :eyebrow="researchData.eyebrow" :heading="researchData.heading"
      :cards="researchData.cards" :submit-label="researchData.submitLabel" :submit-link="researchData.submitLink" />
      
    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />

  </div>
</template>

<script setup>
import { ref } from "vue";
import HeroBanner from "@/components/common/Herobanner.vue";
import ResearchFrameworksSection from "./sections/ResearchFrameworksSection.vue";
import BenchmarkSurveysSection from "./sections/BenchmarkSurveysSection.vue";
import { bannerData, researchData, accelerateData } from "@/services/aiintelligence.service";
import CatalougueSection from "./sections/CatalougueSection.vue";
import BaseAccelerate from "@/components/common/BaseAccelerate.vue";


function handleSearch(query) {
  searchQuery.value = query;
}
const searchQuery = ref('')

</script>
