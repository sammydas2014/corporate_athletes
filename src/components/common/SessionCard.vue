<script setup>
defineProps({
  card: {
    type: Object,
    default: () => ({})
  }
})
</script>
<template>
  <div class="sessionCard">
    <div class="seconLogo">
      <img :src="card?.icon.svg" alt="">
    </div>
    <div class="dtls">
      <h5>{{ card?.heading }}</h5>
      <p>{{ card?.content }}</p>
    </div>
  </div>
</template>
