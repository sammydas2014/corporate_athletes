<template>
  <section class="accelerate-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="sec__title">{{ title }}</h2>
        </div>
        <div class="col-md-6">
          <div class="btnWrp">
            <BaseButton class="btn-secondary">
              {{ primaryBtnLabel }}
            </BaseButton>
            <BaseButton class="btn-outline-white btn-outline-trnp">
              {{ secondaryBtnLabel }}
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
import BaseButton from '@/components/common/BaseButton.vue';

defineProps({
  title: { type: String, default: 'Ready to accelerate performance with AI?' },
  primaryBtnLabel: { type: String, default: 'Book a Strategy Call' },
  secondaryBtnLabel: { type: String, default: 'Submit an rfp' },
});
</script>
