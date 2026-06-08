<template>
  <div class="insights-main">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :bg-image="bannerData.bgImage" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :min-height="bannerData.minHeight" :show-search="bannerData.showSearch"
      :search-placeholder="bannerData.searchPlaceholder" :popular-searches="bannerData.popularSearches"
      @search="handleSearch" class="aiintelligence_bnr" />

    <section class="catalougue-sec">
      <div class="container">

        <!-- Mobile filter toggle -->
        <button class="filter-toggle-btn" @click="isMobileOpen = true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M7 12h10M11 18h2" />
          </svg>
          Filters
        </button>

        <div class="catalougue-list">

          <!-- Left: Filter Sidebar -->
          <div class="catalougue-list-left">
            <Filtersidebar :filterGroups="filterGroups" :isMobileOpen="isMobileOpen"
              @close="isMobileOpen = false" @apply="onApply" @change="onChange" />
          </div>

          <!-- Right: Cards -->
          <div class="catalougue-list-wrap">
            <div class="filter-area-hedng">
              <h4>AI Tools</h4>
              <BaseSelect v-model="sortBy" :options="sortOptions" varinat="sort-by-select" label="Sort by" />
            </div>
            <div class="crdWrp">
              <AitoolCard v-for="(tool, i) in tools" :key="i" v-bind="tool" />
            </div>
          </div>

        </div>

        <div class="reviweWRaper">
          <ResearchFrameworksSection :eyebrow="researchData.eyebrow" :heading="researchData.heading"
            :cards="researchData.cards" :submit-label="researchData.submitLabel"
            :submit-link="researchData.submitLink" />
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'
import Filtersidebar from '@/components/common/Filtersidebar.vue'
import AitoolCard from '@/components/common/AitoolCard.vue'
import BaseSelect from '@/components/common/BaseSelect.vue'
import ResearchFrameworksSection from '@/views/AiIntelligence/sections/ResearchFrameworksSection.vue'
import { bannerData, filterGroups, researchData } from '@/services/aiintelligence.service'

const searchQuery = ref('')
const isMobileOpen = ref(false)
const sortBy = ref('')

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Newest', value: 'newest' },
  { label: 'A–Z', value: 'az' },
]

const tools = ref([
  { title: 'GPT-4o', subtitle: 'Generative AI Platform', tags: ['Text', 'Image', 'API'], price: '$20/mo', icon: { type: 'text', value: 'G4' }, iconBg: '#10a37f' },
  { title: 'Gemini Pro', subtitle: 'Multimodal AI Model', tags: ['Text', 'Vision', 'Code'], price: '$25/mo', icon: { type: 'text', value: 'GM' }, iconBg: '#1a73e8' },
  { title: 'Claude 3', subtitle: 'Enterprise AI Assistant', tags: ['Text', 'Analysis'], price: '$15/mo', icon: { type: 'text', value: 'CL' }, iconBg: '#d97706' },
  { title: 'Mistral AI', subtitle: 'Open-source LLM', tags: ['Text', 'Open Source'], price: 'Free', icon: { type: 'text', value: 'MI' }, iconBg: '#6366f1' },
  { title: 'Cohere', subtitle: 'Enterprise NLP', tags: ['NLP', 'Embeddings', 'API'], price: '$19/mo', icon: { type: 'text', value: 'CO' }, iconBg: '#0ea5e9' },
  { title: 'Perplexity', subtitle: 'AI Search Engine', tags: ['Search', 'Research'], price: '$20/mo', icon: { type: 'text', value: 'PX' }, iconBg: '#8b5cf6' },
])

function handleSearch(query) {
  searchQuery.value = query
}

function onApply(filters) {
  console.log('Filters applied:', filters)
}

function onChange(filters) {
  console.log('Filters changed:', filters)
}
</script>
