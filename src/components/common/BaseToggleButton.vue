<script setup>
import { computed } from 'vue';

const props = defineProps({
  leftLabel: {
    type: String,
    default: ""
  },
  rightLabel: {
    type: String,
    default: ""
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const checked = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

function toggle() {
  checked.value = !checked.value;
}
</script>

<template>
  <div class="ai-toggle">
    <span
      v-if="leftLabel.length"
      class="label label-left"
      :class="{ active: !checked }"
      @click="checked = false"
    >
      {{ leftLabel }}
    </span>

    <button type="button" class="track" role="switch" :aria-checked="checked" @click="toggle">
      <span class="thumb" :class="{ 'thumb-on': checked }" />
    </button>

    <span
      v-if="rightLabel.length"
      class="label label-right"
      :class="{ active: checked }"
      @click="checked = true"
    >
      {{ rightLabel }}
    </span>
  </div>
</template>
