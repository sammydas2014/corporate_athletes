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

        <div class="tablet-action-btns">
          <div class="sort-dropdown" ref="sortDropdownRef">
            <button type="button" class="icon-action-btn" @click="toggleSortMenu" aria-label="Sort by">
              <i class="bi bi-arrow-down-up"></i>
            </button>
            <ul v-if="isSortOpen" class="sort-menu">
              <li v-for="opt in categories" :key="opt.value" :class="{ active: opt.value === selectedCategory }"
                @click="selectSortOption(opt)">
                {{ opt.label }}
              </li>
            </ul>
          </div>

          <button type="button" class="icon-action-btn icon-action-btn--primary" @click="isMobileOpen = true"
            aria-label="Open filters">
            <i class="bi bi-sliders"></i>
          </button>
        </div>

        <BaseSelect placeholder="Relevance" v-model="selectedCategory" @change="handleCategoryChange"
          :options="categories" label="Sort by:" varinat="sort-by-select" />
      </div>
      <div class="crdWrp">
        <template v-for="(item, index) in pagedTools" :key="index">
          <AitoolCard :title="item.title" :subtitle="item.description" :price="item.price" :tags="item.tags"
            :icon="item.icon" :iconBg="item?.iconBg" :itemId="item.id" />
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
import { computed, ref, onMounted, onBeforeUnmount } from 'vue';

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

const isSortOpen = ref(false)
const sortDropdownRef = ref(null)

function toggleSortMenu() {
  isSortOpen.value = !isSortOpen.value
}

function selectSortOption(opt) {
  selectedCategory.value = opt.value
  handleCategoryChange(opt.value)
  isSortOpen.value = false
}

function handleOutsideClick(e) {
  if (sortDropdownRef.value && !sortDropdownRef.value.contains(e.target)) {
    isSortOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onBeforeUnmount(() => document.removeEventListener('click', handleOutsideClick))

</script>
