
<script setup>
defineProps({
  stage: String,
  platform: String,
  items:{
    type: Array,
    default: () => []
  }
})
</script>
<template>
  <div class="architecture-card">
    <div class="stage">{{stage}}</div>
    <div class="items">
      <div class="item" v-for="(item, index) in items" :key="index">
        {{item}}
      </div>
    </div>
    <div v-if="platform" class="platform">{{platform}}</div>
  </div>
</template>
