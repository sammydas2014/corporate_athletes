<script setup>
import { ref, computed } from 'vue';
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
  activeToolId: {
    type: [Number, String],
    default: null,
  },
});

const emit = defineEmits(['update:activeToolId']);

const activeIndex = computed(() => {
  const idx = props.tools.findIndex((tool) => tool.id === props.activeToolId);
  return idx === -1 ? 0 : idx;
});
const activeTool = computed(() => props.tools[activeIndex.value]);

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

function cellValue(tool, sectionKey, rowKey) {
  const raw = tool.sections?.[sectionKey]?.[rowKey];
  return raw && typeof raw === 'object' && !Array.isArray(raw) && 'tone' in raw ? raw.value : raw;
}

function cellTone(tool, sectionKey, rowKey) {
  const raw = tool.sections?.[sectionKey]?.[rowKey];
  return raw && typeof raw === 'object' && !Array.isArray(raw) && 'tone' in raw ? raw.tone : undefined;
}

function isHighestScore(section, row, tool) {
  const scoreValues = section.rows
    .filter((r) => r.type === 'score')
    .map((r) => Number(cellValue(tool, section.key, r.key)));
  return Number(cellValue(tool, section.key, row.key)) === Math.max(...scoreValues);
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
            <span class="comparison-table__icon" :style="{ backgroundColor: tool.iconBg, color: tool.accentText  }">{{ tool.initials }}</span>
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
              <ComparisonValue :type="row.type" :value="cellValue(tool, section.key, row.key)" :variant="row.variant"
                :tone="cellTone(tool, section.key, row.key)" :accent-bg="row.accent ? tool.accentBg : ''"
                :accent-text="row.accent ? tool.accentText : ''"
                :highest="row.type === 'score' && isHighestScore(section, row, tool)" />
            </div>
          </div>
        </template>
      </div>
    </div>

    <div class="comparison-mobile">
      <div class="comparison-mobile__chips">
        <button v-for="(tool, index) in tools" :key="tool.id" type="button" class="comparison-mobile__chip"
          :class="{ 'is-active': index === activeIndex }" @click="emit('update:activeToolId', tool.id)">
          {{ tool.name }}
        </button>
      </div>

      <div class="comparison-mobile__card" :class="{ 'comparison-mobile__card--popular': activeTool.popular }">
        <div class="comparison-mobile__card-header">
          <span class="comparison-mobile__icon" :style="{ backgroundColor: activeTool.iconBg }">{{ activeTool.initials
          }}</span>
          {{ activeTool.name }}
          <span v-if="activeTool.popular" class="comparison-mobile__badge">Most Popular</span>
        </div>

        <template v-for="section in sections" :key="section.key">
          <div class="comparison-mobile__section-title">{{ section.title }}</div>
          <div v-for="(row, rIndex) in section.rows" :key="rIndex" class="comparison-mobile__row"
            :class="{ 'comparison-mobile__row--stacked': ['list', 'tags'].includes(row.type) }">
            <span class="comparison-mobile__row-label">{{ row.label }}</span>
            <div class="comparison-mobile__row-value">
              <ComparisonValue :type="row.type" :value="cellValue(activeTool, section.key, row.key)" :variant="row.variant"
                :tone="cellTone(activeTool, section.key, row.key)" :accent-bg="row.accent ? activeTool.accentBg : ''"
                :accent-text="row.accent ? activeTool.accentText : ''"
                :highest="row.type === 'score' && isHighestScore(section, row, activeTool)" />
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
