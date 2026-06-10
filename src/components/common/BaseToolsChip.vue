<script  setup>
  defineProps({
    tools: {
      type: String
    },
    catagory: {
      type: String,
    }
  })
</script>
<template>
  <div class="tools-chip">
    <span>{{ tools }}</span>
    <p>{{ catagory }}</p>
  </div>
</template>
