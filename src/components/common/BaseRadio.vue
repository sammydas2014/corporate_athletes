<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: "",
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["update:modelValue"])

const onChange = () => {
  emit("update:modelValue", props.value)
}
</script>

<template>
  <label
    class="base-radio"
    :class="{ disabled: disabled }"
  >
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      :disabled="disabled"
      @change="onChange"
    />

    <span class="radio">
      <template v-if="modelValue === value">
        <svg class="checkbox-tick" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
      </template>
    </span>

    <span
      v-if="label"
      class="label"
    >
      {{ label }}
    </span>
  </label>
</template>


