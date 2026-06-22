<script setup>
import BaseButton from './BaseButton.vue';
defineProps({
  days: {
    type: Array,
    default: () => []
  },

  modelValue: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits([
  "update:modelValue"
]);
</script>

<template>
  <div class="agenda-tabs">

    <BaseButton
      v-for="(day,index) in days"
      :key="day.id"
      class="tab-btn"
      :class="{
        active:modelValue === index
      }"
      @click="emit('update:modelValue', index)"
    >
      <h3>{{ day.label }}</h3>
      <div class="btmwrap">
        <span class="date">
          {{ day.date }}
        </span>
        <span class="month">
          {{ day.month }},
          {{ day.weekday }}
        </span>
      </div>

    </BaseButton>

  </div>
</template>
