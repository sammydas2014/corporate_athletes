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

