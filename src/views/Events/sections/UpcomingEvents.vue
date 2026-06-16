<template>
  <section class="upcoming-events">
    <div class="container">

      <!-- Header -->
      <div class="upcoming-events__header">
        <div class="upcoming-events__header-left">
          <span class="title__eyebrow">{{ data.topTag }}</span>
          <h2 class="sec__title">{{ data.title }}</h2>
        </div>
      </div>

      <!-- Swiper slider -->
      <div class="upcoming-events__slider">
        <Swiper
          :modules="modules"
          :slides-per-view="1.5"
          :space-between="20"
          :grab-cursor="true"
          :loop="true"
          :breakpoints="breakpoints"
          class="events-swiper"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="event in data.events" :key="event.id">
            <EventCard :event="event" />
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Footer: progress bar + nav -->
      <div v-if="data.events.length > 1" class="upcoming-events__footer">
        <div class="upcoming-events__progress-wrap">
          <div class="upcoming-events__progress-bar" :style="{ width: progressWidth }"></div>
        </div>
        <div class="upcoming-events__nav">
          <button class="events-nav-btn" aria-label="Previous event" @click="slidePrev">
            <i class="bi bi-arrow-left"></i>
          </button>
          <button class="events-nav-btn events-nav-btn--next" aria-label="Next event" @click="slideNext">
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
import EventCard from './EventCard.vue'
import { upcomingEventsData } from '@/services/events.service.js'

const data = upcomingEventsData

const modules = [FreeMode]
const swiperInstance = ref(null)
const activeIndex = ref(0)
const visibleCount = ref(1.5)

// const breakpoints = {
//   640:  { slidesPerView: 1.2, spaceBetween: 16 },
//   768:  { slidesPerView: 1.6, spaceBetween: 20 },
//   1024: { slidesPerView: 2,   spaceBetween: 24 },
//   1280: { slidesPerView: 2.2, spaceBetween: 28 },
// }

const updateVisibleCount = () => {
  const w = window.innerWidth
  if      (w < 640)  visibleCount.value = 1.2
  else if (w < 768)  visibleCount.value = 1.2
  else if (w < 1024) visibleCount.value = 1.5
  else if (w < 1280) visibleCount.value = 1.5
  else               visibleCount.value = 1.5
}

const progressWidth = computed(() => {
  const total = data.events.length
  if (total <= 1) return '100%'
  return `${((activeIndex.value % total) + 1) / total * 100}%`
})

function onSwiper(swiper)      { swiperInstance.value = swiper }
function onSlideChange(swiper) { activeIndex.value = swiper.realIndex }
function slidePrev()           { swiperInstance.value?.slidePrev() }
function slideNext()           { swiperInstance.value?.slideNext() }

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
})
</script>
