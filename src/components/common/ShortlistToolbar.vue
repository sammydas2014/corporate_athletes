<script setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseSelect from './BaseSelect.vue';
import { sortOptions } from '@/services/shortlist.service';
import { useComparisonSelection } from '@/composables/useComparisonSelection';

const { selectedForComparison } = useComparisonSelection();

defineProps({
  summary: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:view']);

const view = ref('grid');
const sortBy = ref(sortOptions[0].value);

function setView(value) {
  view.value = value;
  emit('update:view', value);
}
</script>

<template>
  <div class="shortlist-toolbar">
    <div class="shortlist-toolbar__row shortlist-toolbar__row--top">
      <div class="shortlist-toolbar__summary">
        <span class="total_shortlist"><strong>{{ summary.total }}</strong> TOOLS SELECTED</span>
        <span v-for="(category, index) in summary.categories" :key="index" class="shortlist-toolbar__category">
          <strong>{{ category.value }}</strong> {{ category.label.toUpperCase() }}
        </span>
      </div>

      <div class="shortlist-toolbar__actions">
        <BaseButton :to="{ name: 'tools-comparison' }" variant="outline-light-thin" class="btn_first"
          :disabled="!selectedForComparison.length">Compare Tools</BaseButton>
        <BaseButton variant="primary">Build AI Stack</BaseButton>
        <BaseButton variant="outline-light-thin">Export</BaseButton>
      </div>
    </div>

    <div class="shortlist-toolbar__row shortlist-toolbar__row--bottom">
      <div class="shortlist-toolbar__view-toggle">
        <button type="button" class="shortlist-toolbar__view-btn" :class="{ 'is-active': view === 'grid' }"
          aria-label="Grid view" @click="setView('grid')">
          <i class="bi bi-grid"></i>
        </button>
        <button type="button" class="shortlist-toolbar__view-btn" :class="{ 'is-active': view === 'list' }"
          aria-label="List view" @click="setView('list')">
          <i class="bi bi-list-ul"></i>
        </button>
      </div>

      <BaseSelect v-model="sortBy" :options="sortOptions" label="Sort by:" varinat="sort-by-score" />
    </div>
  </div>
</template>
