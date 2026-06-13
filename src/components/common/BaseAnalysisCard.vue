<script setup>
import BaseButton from './BaseButton.vue';
defineProps({
  number: {
    type: [String, Number],
    default: null,
  },

  badge: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: '',
  },

  footer: {
    type: String,
    default: '',
  },

  active: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <div class="analysisCrd">
    <!-- Top -->
    <div class="card-top">

      <h2 v-if="number" class="card-number">
        {{ number }}
      </h2>

      <BaseButton class="card-arrow">
        <i class="bi bi-arrow-up-right"></i>
      </BaseButton>
    </div>

    <!-- Badge -->
    <span v-if="badge" class="card-badge">
      {{ badge }}
    </span>

    <!-- Title -->
    <h3 class="card-title">
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="card-description">
      {{ description }}
    </p>

    <!-- Footer -->
    <div class="card-footer">
      <p>{{ footer }}</p>
    </div>
  </div>
</template>
