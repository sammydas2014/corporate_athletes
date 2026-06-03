<script setup>
  defineProps({
    heading: {
      type: String,
      default: "Outcome"
    },
    description: {
      type: String,
      default: ""
    }
  })
</script>
<template>
  <div class="outcome-wrap">
    <h4>{{ heading }}</h4>
    <template v-if="description">
        <p>{{ description }}</p>
    </template>

  </div>
</template>
<!-- styles moved to src/assets/styles/components/OutCome.css -->
