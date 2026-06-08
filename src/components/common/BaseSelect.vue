<!-- BaseSelect.vue -->

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, null],
    default: '',
  },

  options: {
    type: Array,
    default: () => [],
  },

  label: {
    type: String,
    default: '',
  },

  placeholder: {
    type: String,
    default: 'Select an option',
  },

  valueKey: {
    type: String,
    default: 'value',
  },

  labelKey: {
    type: String,
    default: 'label',
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  errorMessage: {
    type: String,
    default: '',
  },

  required: {
    type: Boolean,
    default: false,
  },

  name: {
    type: String,
    default: '',
  },

  id: {
    type: String,
    default: '',
  },
  varinat: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const selectValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
    emit('change', value)
  },
})
</script>

<template>
  <div :class="['base-select', `base-select-${varinat}`]">

    <!-- Label -->
    <label
      v-if="label"
      :for="id"
      class="base-select__label"
    >
      {{ label }}

      <span v-if="required" class="required">*</span>
    </label>

    <!-- Select -->
    <select
      :id="id"
      :name="name"
      v-model="selectValue"
      :disabled="disabled"
      :class="[
        'base-select__field',
        { 'is-error': errorMessage }
      ]"
    >
      <option disabled value="">
        {{ placeholder }}
      </option>

      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option[valueKey]"
      >
        {{ option[labelKey] }}
      </option>
    </select>

    <!-- Error -->
    <p
      v-if="errorMessage"
      class="base-select__error"
    >
      {{ errorMessage }}
    </p>

  </div>
</template>

