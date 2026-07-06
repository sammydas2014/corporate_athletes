<script setup>
import { ref } from 'vue'
import BaseToggleButton from '@/components/common/BaseToggleButton.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { pricingHeader, plans, guarantee } from '@/services/subscription.service.js'
import { imageMap } from '@/assets/images/imageMap'

const billingMonthly = ref(false)
</script>

<template>
  <section class="pricing-section">
    <div class="container">

      <div class="pricing-header">
        <h1 class="sec__title">{{ pricingHeader.title }}</h1>
        <p class="sec__subtitle">{{ pricingHeader.subtitle }}</p>
      </div>

      <div class="pricing-toggle-wrap">
        <BaseToggleButton v-model="billingMonthly" leftLabel="Monthly" rightLabel="Yearly" />
        <span class="save-badge">Save 20%</span>
      </div>

      <div class="pricing-grid">
        <div v-for="plan in plans" :key="plan.id"
          :class="['pricing-card', { 'pricing-card--featured': plan.featured }]">
          <div class="pricing-card__top">
            <div class="pricing-card__header">
              <h3 class="pricing-card__name">{{ plan.name }}</h3>
              <p class="pricing-card__desc">{{ plan.desc }}</p>
            </div>

            <div class="pricing-card__price">
              <div class="price-amount">
                <span class="price-currency">£</span>
                <span class="price-value">{{ billingMonthly ? plan.monthlyPrice : plan.yearlyPrice }}</span>
                <span class="price-period">/monthly</span>
              </div>
              <p v-if="!billingMonthly" class="price-billing">
                Billed annually £{{ plan.yearlyTotal }}
                <span v-if="plan.yearlySaving" class="price-saving">{{ plan.yearlySaving }}</span>
              </p>
            </div>

            <BaseButton :variant="plan.btnVariant" class="pricing-card__cta">
              {{ plan.btnLabel }}
            </BaseButton>
          </div>

          <div class="pricing-card__features">
            <p v-if="plan.featuresLabel" class="features-label">{{ plan.featuresLabel }}</p>
            <ul>
              <li v-for="feature in plan.features" :key="feature" class="plan-feature">
                <span class="radio">

                  <img class="checkbox-tick" :src="imageMap.check_mark" alt="">
                </span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="pricing-guarantee">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V12C4 16.418 7.582 20 12 22C16.418 20 20 16.418 20 12V6L12 2Z" stroke="currentColor"
            stroke-width="1.5" stroke-linejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <span>{{ guarantee }}</span>
      </div>

    </div>
  </section>
</template>
