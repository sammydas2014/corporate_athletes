<template>
  <div class="insights-main">
    <HeroBanner
      title="Insights Intelligence"
      subtitle="Advisory articles, AI deep dives, transformation playbooks, and consortium contributions from Corporate Athletes and our network of enterprise practitioners."
      bg-color="#040e1c"
      min-height="480px"
      :show-search="true"
      search-placeholder="Search articles, deep dives, playbooks…"
      @search="handleSearch"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'

const searchQuery = ref('')

function handleSearch(query) {
  searchQuery.value = query
}
</script>
