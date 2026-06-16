<template>
  <div class="events-page">
    <HeroBanner class="events_bnr" :top-tag="bannerData.topTag" :title="bannerData.title"
      :subtitles="bannerData.subtitles" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :bg-color="bannerData.bgColor" :min-height="bannerData.minHeight" :filters="bannerData.filters"
      @filter-change="onBannerFilterChange" />

    <UpcomingEvents />
    <InsightsConsortium />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'
import { bannerData } from '@/services/events.service'
import UpcomingEvents from './sections/UpcomingEvents.vue'
import InsightsConsortium from './sections/InsightsConsortium.vue'

const activeBannerFilter = ref('all')

function onBannerFilterChange(filter) {
  activeBannerFilter.value = filter.value || filter.label
}
</script>
