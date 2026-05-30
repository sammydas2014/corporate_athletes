<script setup>
import {defineProps} from 'vue'
defineProps({
  logo:{
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
  }
})
</script>

<template>
  <div class="feature-crd">
    <div class="crd-img">
      <img :src="logo" alt="">
    </div>
    <h5>{{ title }}</h5>
    <p>
      {{ details }}
    </p>
  </div>
</template>

<style scoped>
.feature-crd{
  padding: 45px 22px 36px 22px;
  background-color: var(--bs-white);
  border-radius: 12px;
  border: 1px solid rgba(216, 222, 230, 87%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(25% - 15px);
}
.feature-crd .crd-img{
  background-color: var(--bs-primary);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.feature-crd h5{
  font-size: 20px;
  color: var(--color-dark-secondary);
  letter-spacing: -5%;
  font-weight: 600;
  text-align: center;
}
.feature-crd p{
  font-size: 16px;
  line-height: 23px;
  color: var(--bs-body-color);
  text-align: center;
}

</style>
