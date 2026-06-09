<template>
  <div class="catalougue-list">
    <div class="catalougue-list-left">
      <Filtersidebar :filterGroups="filterGroups" :isMobileOpen="isMobileOpen" @close="isMobileOpen = false"
        @apply="onApply" @change="onChange" />
    </div>

    <div class="catalougue-list-wrap">
      <div class="filter-area-hedng">
        <BaseInput placeholder="Search articles, deep dives, playbooks…" variant="filter" v-model="searchQuery"
          @keydown.enter="handleSearch">
          <template #icon-left>
            <i class="bi bi-search"></i>
          </template>
        </BaseInput>
        <BaseSelect placeholder="Relevance" v-model="selectedCategory" @change="handleCategoryChange"
          :options="categories" label="Sort by:" varinat="sort-by-select" />
      </div>
      <div class="crdWrp">
        <template v-for="(item, index) in pagedTools" :key="index">
          <AitoolCard :title="item.title" :subtitle="item.description" :price="item.price" :tags="item.tags"
            :icon="item.icon" :iconBg="item?.iconBg" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import AitoolCard from '@/components/common/AitoolCard.vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import Filtersidebar from '@/components/common/Filtersidebar.vue';
import { aiTools, categories, filterGroups } from '@/services/aiintelligence.service';
import { computed, ref } from 'vue';

const props = defineProps({
  itemsPerPage: { type: Number, default: 6 },
  page: { type: Number, default: 1 },
})

const pagedTools = computed(() => {
  const start = (props.page - 1) * props.itemsPerPage
  return aiTools.slice(start, start + props.itemsPerPage)
})

const selectedCategory = ref('')
const isMobileOpen = ref(false)
const activeFilters = ref(null)

const searchQuery = ref('')

function handleSearch() {
  // searchQuery.value already reflects the current input via v-model
}

function onChange(filters) {
  activeFilters.value = filters
}

function onApply(filters) {
  activeFilters.value = filters
  console.log('Applied filters:', filters)
}

const handleCategoryChange = (event) => {
  console.log('Category changed:', event);
};

</script>
