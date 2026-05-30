<script setup>
import {defineProps} from 'vue'
defineProps({
  logo: {
    type: String,
    default: '',
  },
  heading: {
    type: String,
    default: "AI-Enabled Transformation Advisory"
  },
  descp: {
    type: String,
    default: 'Define strategy, operating model, and roadmap',
  },
})
</script>

<template>
  <div class="word-card">
    <div class="img-wrap">
      <img :src="logo" alt="Service Logo">
    </div>
    <h5>{{ heading }}</h5>
    <p>
      {{ descp }}
    </p>
  </div>
</template>

<style scoped>
.word-card{
  padding: 32px 26px 20px 26px;
  border-radius: 10px;
  border: 1px solid rgba(214, 168, 95, 25%);
  width: 50%;
}
.word-card .img-wrap{
  max-width: 40px;
  margin-bottom: 35px;
}
.word-card h5{
  color: var(--bs-body-bg);
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -5%;
  margin-bottom: 12px;
  font-weight: 600;
  min-height: 43px;
}
.word-card p{
  color: #E9EEF2;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -3%;
}
</style>
