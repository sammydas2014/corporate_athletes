<template>
  <div class="event-filters">
    <div v-for="group in filterGroups" :key="group.key" class="event-filter-wrap">
      <select
        class="event-filter-select"
        :value="activeFilters[group.key]"
        @change="onChange(group.key, $event.target.value)"
      >
        <option v-for="opt in group.options" :key="opt" :value="opt">{{ opt }}</option>
      </select>
      <i class="bi bi-chevron-down event-filter-chevron"></i>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  filterGroups: { type: Array, required: true },
})

const emit = defineEmits(['filter-change'])

const activeFilters = reactive(
  Object.fromEntries(props.filterGroups.map(g => [g.key, g.options[0]]))
)

function onChange(key, value) {
  activeFilters[key] = value
  emit('filter-change', { key, value })
}
</script>
