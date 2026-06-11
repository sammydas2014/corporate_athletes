<script setup>
import { ref, computed } from 'vue';
import BaseCardChip from './BaseCardChip.vue';
import BaseSelect from './BaseSelect.vue';
import { preferredOptions } from '@/services/shortlist.service';
import BaseButton from './BaseButton.vue';
import { useComparisonSelection } from '@/composables/useComparisonSelection';

const props = defineProps({
  tool: {
    type: Object,
    required: true,
  },
});

defineEmits(['remove']);

const { isSelected, setSelected } = useComparisonSelection();
const checked = computed({
  get: () => isSelected(props.tool.id),
  set: (value) => setSelected(props.tool.id, value),
});

const preferred = ref(props.tool.preferred);
</script>

<template>
  <div class="shortlist-card">
    <button type="button" class="shortlist-card__close" aria-label="Remove tool" @click="$emit('remove', tool.id)">
      <i class="bi bi-x"></i>
    </button>

    <div class="shortlist-card__header">
      <input type="checkbox" class="shortlist-card__checkbox" v-model="checked" />
      <div class="shortlist-card__heading">
        <h5 class="shortlist-card__name">{{ tool.name }}</h5>
        <span class="shortlist-card__category">{{ tool.category }}</span>
      </div>
    </div>

    <div class="shortlist-card__tags">
      <BaseCardChip v-for="(tag, index) in tool.tags" :key="index" :title="tag" variant="secondary" />
    </div>

    <p class="shortlist-card__description">{{ tool.description }}</p>

    <div class="shortlist-card__stats">
      <div class="shortlist-card__stat">
        <span class="shortlist-card__stat-label">Score</span>
        <span class="shortlist-card__stat-value">{{ tool.score }}</span>
      </div>
      <div class="shortlist-card__stat">
        <span class="shortlist-card__stat-label">Stack Role</span>
        <span class="shortlist-card__stat-value">{{ tool.stackRole }}</span>
      </div>
      <div class="shortlist-card__stat">
        <span class="shortlist-card__stat-label">Integration Fit</span>
        <span class="shortlist-card__stat-value">{{ tool.integrationFit }}</span>
      </div>
    </div>

    <div class="shortlist-card__footer">
      <BaseSelect v-model="preferred" :options="preferredOptions" varinat="preferred" />
      <BaseButton @click.prevent="$emit('remove', tool.id)" variant="outline-light-thin"><i class="bi bi-trash"></i>
        Remove</BaseButton>
    </div>
  </div>
</template>
