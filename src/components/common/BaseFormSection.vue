
<script setup>
  defineProps({
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
    },
    variant:{
      type: String,
      default: ""
    },

  })
</script>
<template>
  <div :class="['form-row-wrapper', `form-row-wrapper-${variant}`]"  >
    <div class="form-row-hdng">
      <h6 v-if="title">{{ title }}</h6>
      <p v-if="subtitle">{{ subtitle }}</p>
    </div>
    <div class="form-row">
      <slot />
    </div>
  </div>
</template>
