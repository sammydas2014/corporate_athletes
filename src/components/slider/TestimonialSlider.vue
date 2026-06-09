<template>
  <Swiper :modules="modules" :slides-per-view="1.1" :space-between="10" :breakpoints="breakpoints" :loop="true"
    :grab-cursor="true" class="testimonials-swiper" @swiper="onSwiper">
    <SwiperSlide v-for="(item, index) in reviewTestimonials" :key="index">
      <div v-if="item.type === 'video'" class="testimonial-card testimonial-card--video">
        <video @click="togglePlay($event)" :src="item.videoUrl" :controls="showControls"
          @play="isPlaying = true" @pause="isPlaying = false" class="inline-video" />
        <div v-if="!isPlaying" class="card-author card-author--video">
          <span class="v-ovl"></span>
          <div class="author-avatar author-avatar--video">
            <img v-if="item.avatar" :src="item.avatar" :alt="item.name" />
            <span v-else class="avatar-initials">{{ initials(item.name) }}</span>
          </div>
          <div class="author-info">
            <span class="author-name">{{ item.name }}</span>
            <span class="author-role">{{ item.role }}</span>
          </div>
        </div>
      </div>

      <div v-else class="testimonial-card testimonial-card--text">
        <div class="card-top">
          <div class="card-stars">
            <svg v-for="s in 5" :key="s" :class="['star', { 'star--filled': s <= item.rating }]" viewBox="0 0 20 20"
              fill="currentColor" width="16" height="16">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="card-date">{{ item.date }}</span>
        </div>

        <div class="card-quote-wrp">
          <p class="card-quote">"{{ item.quote }}"</p>
        </div>

        <div class="card-author">
          <div class="author-avatar">
            <img v-if="item.avatar" :src="item.avatar" :alt="item.name" />
            <span v-else class="avatar-initials">{{ initials(item.name) }}</span>
          </div>
          <div class="author-info">
            <span class="author-name">{{ item.name }}</span>
            <span class="author-role">{{ item.role }}</span>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import { reviewTestimonials } from '@/services/tooldetails.service'

const modules = [FreeMode]
const swiperInstance = ref(null)
const isPlaying = ref(false)
const showControls = ref(false)

const breakpoints = {
  640: { slidesPerView: 2, spaceBetween: 16 },
  1024: { slidesPerView: 3.2, spaceBetween: 20 },
  1280: { slidesPerView: 4, spaceBetween: 20 }
}

function onSwiper(swiper) {
  swiperInstance.value = swiper
}

function togglePlay(event) {
  const video = event.target
  if (video.paused) {
    video.play()
    isPlaying.value = true
    showControls.value = true
  } else {
    video.pause()
    isPlaying.value = false
    showControls.value = false
  }
}

function initials(name) {
  if (!name) return ''
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
}

defineExpose({
  slidePrev: () => swiperInstance.value?.slidePrev(),
  slideNext: () => swiperInstance.value?.slideNext(),
})
</script>
