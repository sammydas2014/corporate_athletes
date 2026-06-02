<script setup>
import { defineProps } from 'vue';

defineProps({
  heading: {
    type: String,
    default: ""
  },
  result: {
    type: String,
    default: ""
  }
})
</script>

<template>
  <div class="crdWrap">
    <p>{{ heading }}</p>
    <span class="bigval">
      {{ result }}
    </span>
  </div>
</template>

<style scoped>
.crdWrap{
  padding: 40px 35px 40px 30px;
  background-color: var(--bs-white);
  border-radius: 12px;
  border: 1px solid rgba(216, 222, 230, 87%);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.crdWrap p{
  color: var(--bs-body-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  margin-bottom: 125px;
}
.crdWrap .bigval{
  color: #1A1D21;
font-size: 60px;
font-weight: 600;
line-height: 1;
letter-spacing: -0.05em;
margin-top: auto;
}
</style>
