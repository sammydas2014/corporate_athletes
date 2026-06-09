<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">Reviews</h2>
        <div class="testimonials-nav">
          <button class="nav-btn nav-btn--prev" @click="sliderRef?.slidePrev()" aria-label="Previous">
            <i class="bi bi-arrow-left-short"></i>
          </button>
          <button class="nav-btn nav-btn--next" @click="sliderRef?.slideNext()" aria-label="Next">
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
      <TestimonialSlider ref="sliderRef" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TestimonialSlider from '@/components/slider/TestimonialSlider.vue'

const sliderRef = ref(null)
</script>
