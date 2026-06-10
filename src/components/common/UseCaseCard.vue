<script setup>
defineProps({
  logo:{
    type: String,
    default: ""
  },
  title: String,
  description: String
})
</script>
<template>
  <div class="use-case-card">
    <div class="card-hdr">
      <div class="logo">
        <img :src="logo" alt="Logo Detals">
      </div>
      <h6>{{title}}</h6>
    </div>
    <div class="card-body">
      <p>{{description}}</p>
    </div>

  </div>
</template>
