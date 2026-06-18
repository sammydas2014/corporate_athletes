<template>
  <div class="events-page">
    <HeroBanner class="events_bnr" :top-tag="bannerData.topTag" :title="bannerData.title"
      :subtitles="bannerData.subtitles" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :bg-color="bannerData.bgColor" :min-height="bannerData.minHeight" :filters="bannerData.filters"
      @filter-change="onBannerFilterChange" />

    <UpcomingEvents />

    <InsightsConsortium />

    <RoundtablesSection :eyebrow="roundtablesData.eyebrow" :title="roundtablesData.title"
      :description="roundtablesData.description" :items="roundtablesData.items" :desktop-cols="3" />

    <RoundtablesSection :eyebrow="vendorBriefingsData.eyebrow" :title="vendorBriefingsData.title"
      :description="vendorBriefingsData.description" :items="vendorBriefingsData.items" :desktop-cols="3"
      section-bg="#1f4e5f" section-class="roundtables-section--dark" />

    <RoundtablesSection :eyebrow="aiOperatorSessionsData.eyebrow" :title="aiOperatorSessionsData.title"
      :description="aiOperatorSessionsData.description" :items="aiOperatorSessionsData.items" :desktop-cols="3"
      section-bg="#EEF1F4" />

    <RoundtablesSection :eyebrow="aiTransformationForumsData.eyebrow" :title="aiTransformationForumsData.title"
      :description="aiTransformationForumsData.description" :items="aiTransformationForumsData.items"
      :desktop-cols="3" />

    <RoundtablesSection :eyebrow="academyWorkshopsData.eyebrow" :title="academyWorkshopsData.title"
      :description="academyWorkshopsData.description" :items="academyWorkshopsData.items" :desktop-cols="3"
      section-bg="#EEF1F4" />

    <LookBackSection :items="lookBackData.items" />

    <EventProgramsSection />

    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'
import { bannerData, roundtablesData, academyWorkshopsData, aiTransformationForumsData, vendorBriefingsData, aiOperatorSessionsData, accelerateData, lookBackData } from '@/services/events.service'
import UpcomingEvents from './sections/UpcomingEvents.vue'
import InsightsConsortium from './sections/InsightsConsortium.vue'
import RoundtablesSection from './sections/RoundtablesSection.vue'
import LookBackSection from './sections/LookBackSection.vue'
import EventProgramsSection from './sections/EventProgramsSection.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'

const activeBannerFilter = ref('all')

function onBannerFilterChange(filter) {
  activeBannerFilter.value = filter.value || filter.label
}
</script>
