<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import {
  comparisonPageHeader,
  comparisonTools,
  comparisonSections,
  MAX_COMPARISON_ITEMS,
  integrateCTAData,
} from '@/services/comparison.service';
import { useComparisonSelection } from '@/composables/useComparisonSelection';
import ComparisonToolbar from '@/components/common/ComparisonToolbar.vue';
import ComparisonTable from '@/components/common/ComparisonTable.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import IntegrateCTA from './sections/IntegrateCTA.vue';

const router = useRouter();
const { selectedForComparison: selectedIds } = useComparisonSelection();

const selectedTools = computed(() =>
  selectedIds.value
    .map((id) => comparisonTools.find((tool) => tool.id === id))
    .filter(Boolean)
);

const availableTools = computed(() =>
  comparisonTools.filter((tool) => !selectedIds.value.includes(tool.id))
);

const activeToolId = ref(selectedTools.value[0]?.id ?? null);

watch(selectedTools, (tools) => {
  if (!tools.some((tool) => tool.id === activeToolId.value)) {
    activeToolId.value = tools[0]?.id ?? null;
  }
});

function addTool(toolId) {
  if (selectedIds.value.length >= MAX_COMPARISON_ITEMS) return;
  if (selectedIds.value.includes(toolId)) return;
  selectedIds.value = [...selectedIds.value, toolId];
}

function removeTool(toolId) {
  selectedIds.value = selectedIds.value.filter((id) => id !== toolId);
}

function clearAll() {
  selectedIds.value = [];
  router.push({ name: 'tools-shortlist' });
}
</script>

<template>
  <section class="tools-comparison">
    <div class="container">
      <div class="tools-comparison__header">
        <div class="tools-comparison__heading">
          <h1 class="tools-comparison__title">{{ comparisonPageHeader.title }}</h1>
          <p class="tools-comparison__subtitle">{{ comparisonPageHeader.subtitle }}</p>
        </div>

        <BaseButton :to="{ name: 'stack-generator' }" variant="primary" class="tools-comparison__cta">
          Generate Stack From These Tools
        </BaseButton>
      </div>

      <ComparisonToolbar :selected-tools="selectedTools" :available-tools="availableTools" :max="MAX_COMPARISON_ITEMS"
        v-model:active-tool-id="activeToolId" @add="addTool" @remove="removeTool" @clear-all="clearAll" />

      <ComparisonTable :tools="selectedTools" :sections="comparisonSections" v-model:active-tool-id="activeToolId" />
    </div>
  </section>
  <IntegrateCTA :data="integrateCTAData" class="compare_inte_data" />
</template>
