<script setup>
import BaseCardChip from './BaseCardChip.vue';
import BaseProggressBar from './BaseProggressBar.vue';

defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: [String, Number, Array],
    default: '',
  },
  variant: {
    type: String,
    default: '',
  },
  tone: {
    type: String,
    default: '',
  },
  accentBg: {
    type: String,
    default: '',
  },
  accentText: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <span v-if="type === 'chip'" class="comparison-value__chip" :class="tone && `comparison-value__chip--${tone}`"
    :style="!tone && accentBg ? { backgroundColor: accentBg, color: accentText } : null">
    {{ value }}
  </span>

  <div v-else-if="type === 'score'" class="comparison-value__score">
    <BaseProggressBar :score="value" :max="5" />
    <span class="comparison-value__score-label">{{ value }}</span>
  </div>

  <ul v-else-if="type === 'list'" class="comparison-value__list" :class="`comparison-value__list--${variant}`">
    <li v-for="(item, index) in value" :key="index">
      <i :class="variant === 'negative' ? 'bi bi-x-circle' : 'bi bi-check2-circle'"></i>
      {{ item }}
    </li>
  </ul>

  <div v-else-if="type === 'tags'" class="comparison-value__tags">
    <BaseCardChip v-for="(tag, index) in value" :key="index" :title="tag" variant="secondary" />
  </div>

  <span v-else class="comparison-value__text">{{ value }}</span>
</template>
