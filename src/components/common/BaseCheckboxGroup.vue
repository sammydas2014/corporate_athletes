<template>
  <div class="checkbox-group">
    <p v-if="label" class="checkbox-group__label">{{ label }}</p>
    <div class="checkbox-group__grid">
      <div
        v-for="option in options"
        :key="option.value"
        class="checkbox-group__item"
      >
        <input
          type="checkbox"
          class="cb-input"
          :id="`cb-${option.value}`"
          :name="name"
          :value="option.value"
          :checked="isSelected(option.value)"
          @change="toggle(option.value)"
        />
        <label :for="`cb-${option.value}`" class="cb-label">
          <span class="cb-ring" aria-hidden="true" />
          <svg
            class="cb-check"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="11" fill="#0a9e8a" />
            <path
              d="M6 11.5L9.3 14.8L16 7.5"
              stroke="white"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            />
          </svg>
          <span class="cb-label__text">{{ option.label }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  options: {
    type: Array,
    required: true,
    // Each option: { label: String, value: String | Number }
  },
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: 'checkbox-group'
  }
})

// v-model — expects an array of selected values
const selected = defineModel({
  type: Array,
  default: () => []
})

function isSelected(value) {
  return selected.value.includes(value)
}

function toggle(value) {
  if (isSelected(value)) {
    selected.value = selected.value.filter(v => v !== value)
  } else {
    selected.value = [...selected.value, value]
  }
}
</script>

<style scoped>



</style>
