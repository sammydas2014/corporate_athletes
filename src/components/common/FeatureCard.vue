<script setup>
import BaseButton from './BaseButton.vue';
defineProps({
  logo: {
    type: String,
    default: " "
  },
  title: {
    type: String,
    default: "Practitioner-led"
  },
  details: {
    type: String,
    default: "Our advisors are former operators and transformation leaders."
  },
  btn: {
    type: String,
    default: ""
  },
  btnTo: {
    type: [String, Object],
    default: "/"
  }
})
</script>

<template>
  <div class="feature-crd">
    <div class="crd-img">
      <img :src="logo" alt="">
    </div>
    <h3>{{ title }}</h3>
    <p>
      {{ details }}
    </p>
    <BaseButton v-if="btn" :to="btnTo" class="feature-crd__btn">
      {{ btn }}
    </BaseButton>
  </div>
</template>

<!-- styles moved to src/assets/styles/components/FeatureCard.css -->
