<template>
  <div class="marquee-wrapper">
    <swiper
      :modules="modules"
      :slides-per-view="'auto'"
      :space-between="0"
      :loop="true"
      :loop-additional-slides="3"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false,
      }"
      :speed="8000"
      :allow-touch-move="false"
      :free-mode="{
        enabled: true,
        momentum: false,
      }"
      class="marquee-swiper"
    >
      <swiper-slide v-for="(item, index) in repeatedItems" :key="index" class="marquee-slide">
        <span class="slide-label" :class="{ dim: item.dim }">{{ item.text }}</span>
        <span class="slide-sep">✳</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css'

const modules = [Autoplay, FreeMode]

const baseItems = [
  { text: 'INTELLIGENCE', dim: false },
  { text: 'DIGITAL', dim: true },
]

const repeatedItems = [
  ...baseItems,
  ...baseItems,
  ...baseItems,
  ...baseItems,
  ...baseItems,
  ...baseItems,
  ...baseItems,
  ...baseItems,
  ...baseItems,
]
</script>

<style lang="scss" scoped>
.marquee-wrapper {
  background: var(--bs-light);
  overflow: hidden;
  width: 100%;
  padding-bottom: 50px;
}

.marquee-swiper {
  width: 100%;
}

:deep(.swiper-wrapper) {
  transition-timing-function: linear !important;
  -webkit-transition-timing-function: linear !important;
}

:deep(.swiper-slide.marquee-slide) {
  width: auto !important;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.slide-label {
  color: var(--bs-primary);
  white-space: nowrap;
  padding: 0 10px;
  user-select: none;
  font-size: 170px;
  font-weight: 600;
  line-height: 0.8;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  &.dim {
    color: var(--bs-gray-300);
  }
}

.slide-sep {
  font-size: 100px;
  color: var(--bs-primary);
  font-weight: 700;
  padding: 0 30px;
  line-height: 1;
  flex-shrink: 0;
  user-select: none;
}
</style>
