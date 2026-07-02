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
          :breakpoints="{
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
          }"
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import EventCard from './EventCard.vue'
import { upcomingEventsData } from '@/services/events.service.js'
import { useSliderNav } from '@/composables/useSliderNav'

const data = upcomingEventsData

const modules = [FreeMode]

const { onSwiper, onSlideChange, slidePrev, slideNext, progressWidth } = useSliderNav({
  total: () => data.events.length,
  desktopCols: 1.5,
  loop: true,
  getVisibleCount: (w) => (w < 768 ? 1 : 1.5),
})
</script>
