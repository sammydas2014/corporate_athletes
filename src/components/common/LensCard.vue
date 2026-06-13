
<script setup>
defineProps({
  logo:{
    type: String,
    default: ""
  },
  title:{
    type: String,
    default: ""
  },
  description: {
    type: String,
    default:""
  }
})
</script>

<template>
  <div class="lensCrd">
    <span class="logo-wrp">
      <img :src="logo" alt="">
    </span>
    <h3>{{ title }}</h3>
    <p v-if="description">
      {{ description }}
    </p>

  </div>
</template>
