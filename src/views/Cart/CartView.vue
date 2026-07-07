<template>
  <div class="cart-wrap">
    <section class="cart_sec">
      <div class="container">


        <div class="cart-layout">

          <!-- Left: items -->
          <div class="cart-items">
            <!-- Page header -->
            <div class="cart-header">
              <h1 class="sec__title">Your Cart</h1>
              <p class="evtsignup-hero__sub">Review your membership selection and add any extras.</p>
              <div class="cart-guarantee">
                <i class="bi bi-shield-check"></i>
                <span>{{ cartGuarantee }}</span>
              </div>
            </div>

            <!-- Membership plan -->
            <div class="cart-block">
              <h5 class="cart-block__label">MEMBERSHIP PLAN</h5>
              <div class="cart-plan">
                <div class="cart-plan__icon">
                  <img :src="imageMap.accepted" alt="">
                </div>
                <div class="cart-plan__body">
                  <div class="cart-plan__top">
                    <div class="cart-plan__info">
                      <div class="cart-plan__name-row">
                        <span class="cart-plan__name">{{ cartMembership.name }}</span>
                        <span class="cart-plan__badge">{{ cartMembership.badge }}</span>
                      </div>
                      <p class="cart-plan__desc">{{ cartMembership.desc }}</p>
                      <ul class="cart-plan__benefits">
                        <li v-for="b in cartMembership.benefits" :key="b.label">
                          <i :class="`bi ${b.icon}`"></i>
                          <span>{{ b.label }}</span>
                          <span v-if="b.label === 'Billed annually'" class="cart-plan__saving">
                            {{ cartMembership.savingLabel }}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div class="cart-plan__pricing">
                      <div class="cart-plan__price">
                        <span class="cart-plan__currency">£</span>
                        <span class="cart-plan__amount">{{ cartMembership.monthlyPrice }}</span>
                        <span class="cart-plan__period">/monthly</span>
                      </div>
                      <p class="cart-plan__annual">
                        Billed annually {{ formatCurrency(cartMembership.annualTotal) }} / year
                      </p>
                    </div>
                  </div>
                  <div class="cart-plan__footer">
                    <BaseButton variant="outline-light" class="cart-remove-btn" @click="removeMembership">
                      <i class="bi bi-trash3"></i> Remove
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>

            <!-- Add-ons -->
            <div class="cart-block">
              <h5 class="cart-block__label">ADD-ONS</h5>
              <div class="cart-addons">
                <div v-for="addon in addOns" :key="addon.id" class="cart-addon">
                  <div class="cart-addon__icon">
                    <img :src="imageMap.accepted" alt="">
                  </div>
                  <div class="cart-addon__info">
                    <span class="cart-addon__title">{{ addon.title }}</span>
                    <p class="cart-addon__desc">{{ addon.desc }}</p>
                  </div>
                  <div class="cart-addon__controls">
                    <div class="qty-stepper">
                      <button class="qty-stepper__btn" @click="decreaseQty(addon)"
                        :disabled="addon.qty <= addon.minQty">
                        <i class="bi bi-dash"></i>
                      </button>
                      <span class="qty-stepper__val">{{ addon.qty }}</span>
                      <button class="qty-stepper__btn" @click="increaseQty(addon)"
                        :disabled="addon.qty >= addon.maxQty">
                        <i class="bi bi-plus"></i>
                      </button>
                    </div>
                    <div class="cart-addon__price">
                      <span class="cart-addon__amount">£<b>{{ addon.price }}</b></span>
                      <span class="cart-addon__unit">{{ addon.priceLabel }}</span>
                    </div>
                  </div>
                  <button class="cart-addon__remove" @click="removeAddon(addon.id)">
                    <i class="bi bi-x-lg"></i>
                  </button>
                </div>

                <button class="cart-addmore-btn">
                  <i class="bi bi-plus-circle"></i> Add More Add-ons
                </button>
              </div>
            </div>

          </div>

          <!-- Right: Order summary -->
          <aside class="cart-summary">
            <div class="order-summary">
              <h6 class="order-summary__heading">ORDER SUMMARY</h6>

              <div class="order-summary__section">
                <p class="order-summary__section-label">Membership Plan</p>
                <div class="order-summary__row">
                  <span>{{ cartMembership.name }}</span>
                  <span class="order-summary__val">{{ formatCurrency(cartMembership.annualTotal) }}</span>
                </div>
                <div class="order-summary__row order-summary__row--muted">
                  <span>Billed annually</span>
                  <span>(£{{ cartMembership.monthlyPrice }}/month)</span>
                </div>
              </div>

              <div class="order-summary__divider"></div>

              <div class="order-summary__section">
                <p class="order-summary__section-label">Add-ons</p>
                <div v-for="addon in addOns" :key="addon.id" class="order-summary__row">
                  <span>{{ addon.title }} ({{ addon.qty }} {{ addon.summaryUnit }}{{ addon.qty > 1 ? 's' : '' }})</span>
                  <span class="order-summary__val">{{ formatCurrency(addon.price * addon.qty * addon.annualMultiplier)
                  }}</span>
                </div>
              </div>

              <div class="order-summary__divider"></div>

              <div class="order-summary__row">
                <span>Subtotal</span>
                <span class="order-summary__val">{{ formatCurrency(subtotal) }}</span>
              </div>
              <div class="order-summary__row">
                <span>VAT ({{ vatRate }}%)</span>
                <span class="order-summary__val">{{ formatCurrency(vatAmount) }}</span>
              </div>

              <div class="order-summary__divider"></div>

              <div class="order-summary__total">
                <span>Total</span>
                <span class="order-summary__total-val">{{ formatCurrency(total) }}</span>
              </div>

              <div class="order-summary__saving">
                <i class="bi bi-shield-check"></i>
                <span>You're saving <strong>{{ formatCurrency(annualSaving) }}</strong> with annual billing</span>
              </div>

              <BaseButton to="/checkout" variant="secondary" class="order-summary__cta">
                Proceed to Checkout
              </BaseButton>

              <router-link to="/" class="order-summary__continue">Continue Shopping</router-link>
            </div>
          </aside>

        </div>
      </div>
    </section>

    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'
import {
  cartGuarantee,
  cartMembership,
  cartAddOns,
  vatRate,
  annualSaving,
  accelerateData,
} from '@/services/cart.service'
import { imageMap } from '@/assets/images/imageMap'

const addOns = ref(cartAddOns.map(a => ({ ...a })))

function increaseQty(addon) {
  if (addon.qty < addon.maxQty) addon.qty++
}

function decreaseQty(addon) {
  if (addon.qty > addon.minQty) addon.qty--
}

function removeAddon(id) {
  const idx = addOns.value.findIndex(a => a.id === id)
  if (idx !== -1) addOns.value.splice(idx, 1)
}

function removeMembership() {
  // placeholder — would navigate back or clear selection
}

const addOnsTotal = computed(() =>
  addOns.value.reduce((sum, a) => sum + a.price * a.qty * a.annualMultiplier, 0)
)

const subtotal = computed(() => cartMembership.annualTotal + addOnsTotal.value)
const vatAmount = computed(() => subtotal.value * vatRate / 100)
const total = computed(() => subtotal.value + vatAmount.value)

function formatCurrency(amount) {
  return `£${amount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}
</script>
