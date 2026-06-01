<template>
  <section class="ai-platform">
    <div class="container">
      <div class="ai-platform__header text-center">
        <span class="title__eyebrow">AI Intelligence Platform</span>
        <h2 class="sec__title">Independent intelligence on enterprise AI tools</h2>
        <p class="sec__subtitle">
          Corporate Athletes maintains a continuously evolving catalogue of AI platforms and
          enterprise tools. Each is evaluated based on real world use, enterprise readiness, and
          integration complexity.
        </p>
      </div>
      <AiPlatformSlider />

      <div class="ai-platform__cta text-center">
        <BaseButton variant="primary" href="#">platform access</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import AiPlatformSlider from '@/components/slider/AiPlatformSlider.vue';

</script>

<style scoped>
.ai-platform__header {
  margin-bottom: 20px;
  max-width: 770px;
  margin-inline: auto;
}

.ai-platform__cta {
  margin-top: 20px;
  text-align: center;
}

.ai-platform__cta .btn {
  max-width: fit-content;
  margin-inline: auto;
}
</style>