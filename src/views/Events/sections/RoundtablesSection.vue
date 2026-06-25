<template>
  <section class="roundtables-section" :class="sectionClass" :style="sectionBg ? { background: sectionBg } : {}">
    <div class="container">

      <!-- Two-column header -->
      <div class="roundtables-section__header">
        <div class="roundtables-section__header-left">
          <span v-if="eyebrow" class="title__eyebrow">{{ eyebrow }}</span>
          <h2 class="sec__title">{{ title }}</h2>
        </div>
        <p v-if="description" class="roundtables-section__desc">{{ description }}</p>
        <BaseButton v-if="Object.keys(headingBtn).length > 0" :to="headingBtn?.link">
          {{ headingBtn?.label }}
        </BaseButton>
      </div>

      <!-- Swiper slider -->
      <div class="roundtables-section__slider">
        <Swiper :modules="modules" :slides-per-view="1.2" :space-between="20" :grab-cursor="true" :loop="loopEnabled"
          :breakpoints="breakpoints" class="roundtables-swiper" @swiper="onSwiper" @slideChange="onSlideChange">
          <SwiperSlide v-for="item in items" :key="item.id">
            <RoundtableCard :card="item" :extra-class="cardClass" :card-bg="cardBg" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div v-if="showFooter" class="roundtables-section__footer">
        <div class="roundtables-section__progress-wrap">
          <div class="roundtables-section__progress-bar" :style="{ width: progressWidth }"></div>
        </div>
        <div class="roundtables-section__nav">
          <button class="rt-nav-btn" aria-label="Previous" @click="slidePrev">
            <i class="bi bi-arrow-left"></i>
          </button>
          <button class="rt-nav-btn" aria-label="Next" @click="slideNext">
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import RoundtableCard from '@/components/common/RoundtableCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { useSliderNav } from '@/composables/useSliderNav'

const props = defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  items: { type: Array, required: true },
  desktopCols: { type: Number, default: 3 },
  sectionBg: { type: String, default: '' },
  sectionClass: { type: [String, Array, Object], default: '' },
  cardClass: { type: [String, Array, Object], default: '' },
  cardBg: { type: String, default: '' },
  headingBtn: { type: Object, default: () => ({}) }
})

const modules = [FreeMode]

const breakpoints = computed(() => ({
  0: { slidesPerView: 1.2, spaceBetween: 16 },
  640: { slidesPerView: 1.5, spaceBetween: 20 },
  768: { slidesPerView: Math.min(2, props.desktopCols), spaceBetween: 24 },
  1024: { slidesPerView: props.desktopCols, spaceBetween: 24 },
}))

// loopEnabled depends on visibleCount, which comes from useSliderNav below —
// so it's tracked as a ref and kept in sync via watchEffect rather than
// being passed in as a plain boolean.
const loopEnabled = ref(false)

const { onSwiper, onSlideChange, slidePrev, slideNext, visibleCount, showFooter, progressWidth } = useSliderNav({
  total: () => props.items.length,
  desktopCols: props.desktopCols,
  loop: loopEnabled,
  getVisibleCount: (w) => {
    if (w < 640) return 1.2
    if (w < 768) return 1.5
    if (w < 1024) return Math.min(2, props.desktopCols)
    return props.desktopCols
  },
})

watchEffect(() => {
  loopEnabled.value = props.items.length > Math.ceil(visibleCount.value)
})
</script>
