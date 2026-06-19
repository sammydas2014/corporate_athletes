
<script setup>
defineProps({
  card: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="facilitatedCard">
    <div class="userAvtr">
      <img :src="card?.avatar" alt="user Icon">
    </div>
    <div class="dtls">
      <h5>{{ card?.name }}</h5>
      <p>{{ card?.role }}</p>
    </div>
  </div>

</template>
