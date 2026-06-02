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

<style scoped>
.feature-crd {
  padding: 45px 22px 36px 22px;
  background-color: var(--bs-white);
  border-radius: 12px;
  border: 1px solid rgba(216, 222, 230, 87%);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  text-align: center;
  gap: 25px;
}

.feature-crd .crd-img {
  background-color: var(--bs-primary);
  width: 110px;
  height: 110px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
}

.feature-crd h3 {
  color: var(--color-dark-secondary);
  margin-bottom: 0;
}

.feature-crd__btn {
  margin-top: auto;
}
</style>
