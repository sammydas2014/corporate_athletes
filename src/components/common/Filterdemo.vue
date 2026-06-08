<template>
  <div class="demo-wrapper">

    <!-- Mobile Filter Toggle Button -->
    <button class="filter-toggle-btn" @click="isMobileOpen = true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 6h18M7 12h10M11 18h2" />
      </svg>
      Filters
      <span v-if="activeCount > 0" class="filter-badge">{{ activeCount }}</span>
    </button>

    <div class="demo-layout">
      <Filtersidebar :filterGroups="filterGroups" :isMobileOpen="isMobileOpen" @close="isMobileOpen = false"
        @apply="onApply" @change="onChange" />
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Filtersidebar from './Filtersidebar.vue'
import { filterGroups } from '@/services/aiintelligence.service.js'

const isMobileOpen = ref(false)
const activeFilters = ref(null)


// ── Active filter count for badge ──────────────
const activeCount = computed(() => {
  if (!activeFilters.value) return 0
  return Object.values(activeFilters.value)
    .flat()
    .length
})

function onChange(filters) {
  activeFilters.value = filters
}

function onApply(filters) {
  activeFilters.value = filters
  console.log('Applied filters:', filters)
}
</script>