<template>
  <button
    class="option"
    :class="{
      'is-selected': isSelected,
      'is-primary': isPrimary,
    }"
    @click="emit('toggle')"
    type="button"
    :aria-pressed="isSelected"
  >
    <!-- Radio / Badge indicator -->
    <span class="indicator">
      <span v-if="isSelected" class="badge">{{ selectionIndex }}</span>
      <span v-else class="radio-ring" />
    </span>

    <!-- Label -->
    <span class="label">{{ label }}</span>

    <!-- PRIMARY tag for first selected item -->
    <span v-if="selectionIndex === 1" class="primary-tag">PRIMARY</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  // null = not selected, 1-N = serial selection order
  selectionIndex: {
    type: Number,
    default: null,
  },
  isSelected:{
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggle'])

const isPrimary = computed(() => props.selectionIndex === 1)
console.log(isPrimary.value)
</script>

<style scoped>

</style>
