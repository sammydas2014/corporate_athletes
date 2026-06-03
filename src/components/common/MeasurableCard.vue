<script setup>
defineProps({
  heading: {
    type: String,
    default: ""
  },
  result: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="crdWrap">
    <p>{{ heading }}</p>
    <span class="bigval">
      {{ result }}
    </span>
  </div>
</template>

<!-- styles moved to src/assets/styles/components/MeasurableCard.css -->
