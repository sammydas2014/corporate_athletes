<script setup>
defineProps({
  logo: String,
  heading: String,
  description: String,
})
</script>

<template>

  <div class="card-wrp">
    <div class="card-header">
      <div class="card-icon">
        <img :src="logo" alt="Summary Logo">
      </div>
      <h6>{{ heading }}</h6>
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>
  </div>
</template>
