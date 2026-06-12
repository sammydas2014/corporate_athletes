<script setup>
  defineProps({
    title: {
      type: String,
      default: ""
    },
    conclusion: {
      type: String,
      default: ""
    },
    bullets:{
      type: Array,
      default: () => []
    }
  })
</script>
<template>
  <div class="stackinnr-wrp">
    <p class="title">This stack is optimal for mid-cap finance teams already using <strong>NetSuite</strong>, where:</p>
    <ul>
      <template v-for="item in bullets" :key="item?.id">
        <li>{{ item }}</li>
      </template>
    </ul>
    <p>The architecture augments NetSuite rather than replacing it, reducing risk and accelerating deployment.</p>
  </div>
</template>
