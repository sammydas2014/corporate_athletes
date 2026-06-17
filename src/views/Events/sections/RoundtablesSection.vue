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

      <!-- Footer: progress bar + nav (only when cards exceed visible count) -->
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import RoundtableCard from '@/components/common/RoundtableCard.vue'

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
})

const modules = [FreeMode]
const swiperInstance = ref(null)
const activeIndex = ref(0)
const visibleCount = ref(props.desktopCols)

const breakpoints = computed(() => ({
  0: { slidesPerView: 1.2, spaceBetween: 16 },
  640: { slidesPerView: 1.5, spaceBetween: 20 },
  768: { slidesPerView: Math.min(2, props.desktopCols), spaceBetween: 24 },
  1024: { slidesPerView: props.desktopCols, spaceBetween: 24 },
}))

const updateVisibleCount = () => {
  const w = window.innerWidth
  if (w < 640) visibleCount.value = 1.2
  else if (w < 768) visibleCount.value = 1.5
  else if (w < 1024) visibleCount.value = Math.min(2, props.desktopCols)
  else visibleCount.value = props.desktopCols
}

const showFooter = computed(() => props.items.length > Math.floor(visibleCount.value))
const loopEnabled = computed(() => props.items.length > Math.ceil(visibleCount.value))

const progressWidth = computed(() => {
  const total = props.items.length
  if (total <= 1) return '100%'
  return `${((activeIndex.value % total) + 1) / total * 100}%`
})

function onSwiper(swiper) { swiperInstance.value = swiper }
function onSlideChange(swiper) { activeIndex.value = swiper.realIndex }
function slidePrev() { swiperInstance.value?.slidePrev() }
function slideNext() { swiperInstance.value?.slideNext() }

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
})
</script>
