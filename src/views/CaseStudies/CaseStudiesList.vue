<template>
  <main>
    <CaseStudiesHeroSection />
  <CaseStudiesFilterSection />
  <CaseStudySliderSection :cards="caseStudies" />
  <CaseStudiesGridSection />
  <BaseAccelerate :title="accelerateData.title" class="cstd_base_acc" />
  </main>
</template>

<script setup>
import { caseStudies, accelerateData } from '@/services/casestudieslist.service';
import CaseStudiesHeroSection from './sections/CaseStudiesHeroSection.vue';
import CaseStudiesFilterSection from './sections/CaseStudiesFilterSection.vue';
import CaseStudySliderSection from './sections/CaseStudySliderSection.vue';
import CaseStudiesGridSection from './sections/CaseStudiesGridSection.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
</script>
