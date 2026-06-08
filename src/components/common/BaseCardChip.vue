<script setup>
defineProps({
  title:{
    type: String,
    default: "Text Generation"
  },
  variant:{
    type: String,
    default: "primary"
  }
})
</script>
<template>
  <span
    :class="['base-chip', `base-chip-${variant}`]"
  >
    {{ title }}
  </span>
</template>


