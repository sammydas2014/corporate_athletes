<script setup>
  defineProps({
    imageData:{
      type: String,
      default: ""
    },
    date:{
      type: String,
      default: ""
    },
    title:{
      type: String,
      default: ""
    },
    details:{
      type: String,
      default: ""
    },
  })
</script>

<template>
  <div class="crd-wrap">
    <div class="image-con">
      <img :src="imageData" alt="Think Image">
    </div>
    <div class="data-prt">
      <span class="data">{{ date }}</span>
      <h3>{{ title }}</h3>
      <p>
        {{ details }}
      </p>
    </div>
  </div>
</template>
