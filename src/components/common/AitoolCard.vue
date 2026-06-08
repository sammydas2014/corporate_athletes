<script setup>
import BaseButton from './BaseButton.vue';
import BaseCardChip from './BaseCardChip.vue';

defineProps({
  title:{
    type: String,
    default: "InnovateAI"
  },
  subtitle:{
    type: String,
    default: "Generative AI Platform"
  },
  tags: {
    type: Array,
    default: () => []
  },
  price:{
    type: String,
    default: ""
  },
  icon:{
    type: Object,
    default: () => {}
  },
  iconBg:{
    type: String,
    default: "#4C5B71"
  }
})
</script>
<template>
  <div class="crd-wrp">
    <div class="card-hdng">
      <div v-if="icon.type == 'image'" class="crd-icon" :style="{backgroundColor: iconBg}">
        <img :src="icon.value" alt="Ai Tools Icon">
      </div>
      <div v-else class="crd-icon" :style="{backgroundColor: iconBg}">
        {{ icon.value }}
      </div>
      <div class="crd-title">
        <h5>{{ title }}</h5>
        <p v-if="subtitle">{{ subtitle }}</p>
      </div>
    </div>
    <div class="card-body">
      <div v-if="tags.length" class="chip-tag-wrap">
        <template v-for="(item, index) in tags" :key="index">
          <BaseCardChip
            :title="item"
            variant="secondary"
          />
        </template>
      </div>
      <p class="priceVal">Starts at <span>{{ price }}</span></p>
    </div>
    <div class="card-footer">
      <BaseButton
        variant="outline-light"
      >
        View Details
      </BaseButton>
      <BaseButton
        variant="outline-light-thin"
      >
      <span name=#icon-left>
        <i class="bi bi-heart"></i>
      </span>
        shortlist
      </BaseButton>
    </div>
  </div>
</template>

<style>
</style>
