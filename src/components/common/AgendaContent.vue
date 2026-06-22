<script setup>
import { computed } from "vue";

import AgendaTimeline from "@/components/common/AgendaTimeline.vue";


const props = defineProps({
  day: {
    type: Object,
    required: true
  }
});

const componentMap = {
  timeline: AgendaTimeline
};

const currentComponent = computed(() => {
  return componentMap[props.day.component];
});
</script>

<template>

  <component
    :is="currentComponent"
    :items="day.content"
  />

</template>
