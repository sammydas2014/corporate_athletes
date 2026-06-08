<template>
  <label class="base-checkbox">
    <input type="checkbox" class="checkbox-input" :value="value" :checked="isChecked" @change="handleChange" />
    <span class="checkbox-box">
      <svg v-if="isChecked" class="checkbox-tick" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 5L4.5 8.5L11 1.5" stroke="white" stroke-width="1.8" stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </span>
    <span class="checkbox-label">{{ label }}</span>
  </label>
</template>

<script setup>
import { computed } from 'vue'

// ── Props ──────────────────────────────────────
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: [String, Number, Boolean],
    required: true
  },
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['update:modelValue'])

// ── Computed ───────────────────────────────────
const isChecked = computed(() =>
  props.modelValue.includes(props.value)
)

// ── Methods ────────────────────────────────────
function handleChange(event) {
  const updated = [...props.modelValue]
  if (event.target.checked) {
    if (!updated.includes(props.value)) {
      updated.push(props.value)
    }
  } else {
    const idx = updated.indexOf(props.value)
    if (idx !== -1) updated.splice(idx, 1)
  }
  emit('update:modelValue', updated)
}
</script>
