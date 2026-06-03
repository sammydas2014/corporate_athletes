<script setup>
defineProps({
  logo: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: "AI-Enabled Transformation Advisory"
  },
  descp: {
    type: String,
    default: 'Define strategy, operating model, and roadmap',
  },
})
</script>

<template>
  <div class="word-card">
    <div class="img-wrap">
      <img :src="logo" alt="Service Logo">
    </div>
    <h5>{{ heading }}</h5>
    <p>
      {{ descp }}
    </p>
  </div>
</template>

<!-- styles moved to src/assets/styles/components/WorkCard.css -->
