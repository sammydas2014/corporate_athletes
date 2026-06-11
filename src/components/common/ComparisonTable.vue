<script setup>
import { ref, computed, watch } from 'vue';
import ComparisonValue from './ComparisonValue.vue';

const props = defineProps({
  tools: {
    type: Array,
    required: true,
  },
  sections: {
    type: Array,
    required: true,
  },
});

const activeIndex = ref(0);
const activeTool = computed(() => props.tools[activeIndex.value]);

watch(() => props.tools, () => {
  activeIndex.value = 0;
});

const scrollEl = ref(null);
const isDragging = ref(false);
let startX = 0;
let startScrollLeft = 0;

function startDrag(event) {
  isDragging.value = true;
  startX = event.pageX;
  startScrollLeft = scrollEl.value.scrollLeft;
}

function onDrag(event) {
  if (!isDragging.value) return;
  scrollEl.value.scrollLeft = startScrollLeft - (event.pageX - startX);
}

function stopDrag() {
  isDragging.value = false;
}
</script>

<template>
  <template v-if="tools.length">
    <div class="comparison-table__scroll" ref="scrollEl" :class="{ 'is-dragging': isDragging }"
      @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag">
      <div class="comparison-table">
        <div class="comparison-table__row">
          <div class="comparison-table__cell comparison-table__cell--label"></div>
          <div v-for="tool in tools" :key="tool.id" class="comparison-table__cell comparison-table__cell--head"
            :class="{ 'comparison-table__cell--popular': tool.popular }">
            <span class="comparison-table__icon" :style="{ backgroundColor: tool.iconBg }">{{ tool.initials }}</span>
            {{ tool.name }}
            <span v-if="tool.popular" class="comparison-table__badge">Most Popular</span>
          </div>
        </div>

        <template v-for="(section, sIndex) in sections" :key="section.key">
          <div class="comparison-table__row comparison-table__row--section">
            <div class="comparison-table__cell comparison-table__cell--label comparison-table__cell--section">
              {{ section.title }}
            </div>
            <div v-for="tool in tools" :key="tool.id" class="comparison-table__cell comparison-table__cell--section"
              :class="{ 'comparison-table__cell--popular': tool.popular }"></div>
          </div>
          <div v-for="(row, rIndex) in section.rows" :key="rIndex" class="comparison-table__row">
            <div class="comparison-table__cell comparison-table__cell--label">{{ row.label }}</div>
            <div v-for="tool in tools" :key="tool.id" class="comparison-table__cell" :class="{
              'comparison-table__cell--popular': tool.popular,
              'comparison-table__cell--popular-last': tool.popular && sIndex === sections.length - 1 && rIndex === section.rows.length - 1,
            }">
              <ComparisonValue :type="row.type" :value="row.values[tool.id]" :variant="row.variant"
                :tone="row.tones?.[tool.id]" :accent-bg="row.accent ? tool.accentBg : ''"
                :accent-text="row.accent ? tool.accentText : ''" />
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="comparison-mobile">
      <div class="comparison-mobile__chips">
        <button v-for="(tool, index) in tools" :key="tool.id" type="button" class="comparison-mobile__chip"
          :class="{ 'is-active': index === activeIndex }" @click="activeIndex = index">
          {{ tool.name }}
        </button>
      </div>

      <div class="comparison-mobile__card">
        <div class="comparison-mobile__card-header">
          <span class="comparison-mobile__icon" :style="{ backgroundColor: activeTool.iconBg }">{{ activeTool.initials
          }}</span>
          {{ activeTool.name }}
        </div>

        <template v-for="section in sections" :key="section.key">
          <div class="comparison-mobile__section-title">{{ section.title }}</div>
          <div v-for="(row, rIndex) in section.rows" :key="rIndex" class="comparison-mobile__row"
            :class="{ 'comparison-mobile__row--stacked': ['list', 'tags'].includes(row.type) }">
            <span class="comparison-mobile__row-label">{{ row.label }}</span>
            <div class="comparison-mobile__row-value">
              <ComparisonValue :type="row.type" :value="row.values[activeTool.id]" :variant="row.variant"
                :tone="row.tones?.[activeTool.id]" :accent-bg="row.accent ? activeTool.accentBg : ''"
                :accent-text="row.accent ? activeTool.accentText : ''" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </template>

  <div v-else class="comparison-table__empty">
    <i class="bi bi-clipboard-data"></i>
    <p>No tools selected for comparison</p>
    <span>Use "+ Add Tool" above to add tools and start comparing.</span>
  </div>
</template>
