<template>
  <!-- Mobile Overlay -->
  <div v-if="isMobileOpen" class="filter-overlay" @click="closeMobile" />

  <!-- Filter Sidebar -->
  <aside :class="['filter-sidebar', { 'is-open': isMobileOpen }]">
    <!-- Mobile Header -->
    <div class="filter-header">
      <span class="filter-title">Filters</span>
      <button class="filter-close" @click="closeMobile" aria-label="Close filters">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Filter Groups -->
    <div class="filter-body">
      <div v-for="group in filterGroups" :key="group.id" class="filter-group">
        <!-- Group Header -->
        <button class="filter-group-header" @click="toggleGroup(group.id)"
          :aria-expanded="openGroups.includes(group.id)">
          <span class="filter-group-title">{{ group.label }}</span>
          <svg :class="['chevron-icon', { 'is-open': openGroups.includes(group.id) }]" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <!-- Group Options -->
        <Transition name="slide">
          <div v-if="openGroups.includes(group.id)" class="filter-group-body">
            <Basecheckbox v-for="option in group.options" :key="option.value" :label="option.label"
              :value="option.value" :modelValue="selectedFilters[group.id] || []"
              @update:modelValue="updateFilter(group.id, $event)" />
          </div>
        </Transition>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="filter-footer">
      <button class="btn-clear" @click="clearAll">Clear All</button>
      <button class="btn-apply" @click="applyFilters">Apply</button>
    </div>
  </aside>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Basecheckbox from './Basecheckbox.vue'

// ── Props ──────────────────────────────────────
const props = defineProps({
  filterGroups: {
    type: Array,
    required: true,
    default: () => []
  },
  isMobileOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'apply', 'change'])

// ── State ──────────────────────────────────────
const openGroups = ref(
  props.filterGroups
    .filter(g => g.defaultOpen)
    .map(g => g.id)
)

const selectedFilters = reactive({})

// ── Methods ────────────────────────────────────
function toggleGroup(id) {
  const idx = openGroups.value.indexOf(id)
  if (idx === -1) openGroups.value.push(id)
  else openGroups.value.splice(idx, 1)
}

function updateFilter(groupId, values) {
  selectedFilters[groupId] = values
  emit('change', { ...selectedFilters })
}

function clearAll() {
  Object.keys(selectedFilters).forEach(k => {
    selectedFilters[k] = []
  })
  emit('change', {})
}

function applyFilters() {
  emit('apply', { ...selectedFilters })
  emit('close')
}

function closeMobile() {
  emit('close')
}
</script>
