<script setup>
  defineProps({
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  })
</script>
<template>
  <div class="integrateCard">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>
