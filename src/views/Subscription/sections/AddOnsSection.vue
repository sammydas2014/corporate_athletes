<script setup>
import { reactive } from 'vue'
import { addOns } from '@/services/subscription.service.js'
import { imageMap } from '@/assets/images/imageMap'

const quantities = reactive(
  Object.fromEntries(addOns.map(a => [a.id, a.defaultQty]))
)

function increment(addon) {
  if (quantities[addon.id] < addon.maxQty) quantities[addon.id]++
}

function decrement(addon) {
  if (quantities[addon.id] > addon.minQty) quantities[addon.id]--
}
</script>

<template>
  <section class="addons-section">
    <div class="container">

      <h2 class="addons-heading">Select Add-ons (Optional)</h2>

      <div class="addons-card">
        <div v-for="(addon, index) in addOns" :key="addon.id"
          :class="['addon-item', { 'addon-item--last': index === addOns.length - 1 }]">
          <div class="addon-icon">
            <img :src="imageMap.accepted" alt="">
          </div>

          <div class="addon-info">
            <p class="addon-title">{{ addon.title }}</p>
            <p class="addon-desc">{{ addon.desc }}</p>
          </div>

          <div class="addon-stepper">
            <button class="stepper-btn" type="button" @click="decrement(addon)"
              :disabled="quantities[addon.id] <= addon.minQty">−</button>
            <span class="stepper-value">{{ quantities[addon.id] }}</span>
            <button class="stepper-btn" type="button" @click="increment(addon)"
              :disabled="quantities[addon.id] >= addon.maxQty">+</button>
          </div>

          <div class="addon-price">
            <span class="addon-price__currency">£</span>
            <span class="addon-price__value">{{ addon.price }}</span>
            <span class="addon-price__unit">{{ addon.unit }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
