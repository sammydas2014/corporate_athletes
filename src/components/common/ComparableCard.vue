<script setup>
  defineProps({
    data: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="comparable-tools__card">
    <span class="comparable-tools__score">{{ data.score }}</span>
    <span class="comparable-tools__name">{{ data.name }}</span>
    <div class="comparable-tools__meta">
      <span class="comparable-tools__pros">
        <i class="bi bi-check2-circle"></i> {{ data.pros }}
      </span>
      <span class="comparable-tools__cons">
        <i class="bi bi-x-circle"></i> {{ data.cons }}
      </span>
    </div>
  </div>
</template>
