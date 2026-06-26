<template>
  <Swiper
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    :centered-slides="true"
    :initial-slide="1"
    :loop="true"
    :speed="1200"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }"

    :modules="modules"
    :breakpoints="{
      0: { slidesPerView: 1, spaceBetween: 10 },
      767: { slidesPerView: 1.8, spaceBetween: 15 },
      768: { slidesPerView: 1.4, spaceBetween: 15 },
      1200: { slidesPerView: 2, spaceBetween: 15 },
    }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="ai-platform__swiper"
  >
    <SwiperSlide v-for="(card, index) in cards" :key="card.id">
      <div class="ai-platform-card" :class="{ 'ai-platform-card--active': index === activeIndex }">
        <div class="ai-platform-card__body">
          <span class="ai-platform-card__tag">{{ card.category }}</span>

          <h3 class="ai-platform-card__title">{{ card.title }}</h3>

          <div class="ai-platform-card__readiness">
            <div class="ai-platform-card__readiness-top">
              <span class="ai-platform-card__readiness-label">{{ card.readinessLabel }}</span>
              <span class="ai-platform-card__readiness-score">{{ card.readinessScore }}/10</span>
            </div>
            <div class="ai-platform-card__readiness-track">
              <div
                class="ai-platform-card__readiness-fill"
                :style="{ width: (card.readinessScore / 10) * 100 + '%' }"
              ></div>
            </div>
          </div>

          <p class="ai-platform-card__desc">{{ card.description }}</p>

          <a v-if="card.hasVideoInterview" href="#" class="ai-platform-card__video-link">
            <span class="ai-platform-card__video-icon">
              <i class="bi bi-camera-video"></i>
            </span>
            Video interview available
          </a>
        </div>

        <div v-if="index === activeIndex && card.image" class="ai-platform-card__image-col">
          <img :src="card.image" :alt="card.title" class="ai-platform-card__image" />
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { imageMap } from '@/assets/images/imageMap'

const props = defineProps({
  slidesPerView: {
    type: Number,
    default: 3,
  },
  spaceBetween: {
    type: Number,
    default: 28,
  },
  cards: {
    type: Array,
    default: () => [
      {
        id: 1,
        category: 'AI Infrastructure',
        title: 'Enterprise GPT Platform',
        readinessLabel: 'Enterprise Readiness',
        readinessScore: 9.2,
        description:
          'Enterprise-grade large language model deployment with robust security controls and scalable infrastructure.',
        hasVideoInterview: true,
        image: imageMap.audienceImg1,
      },
      {
        id: 2,
        category: 'AI Infrastructure',
        title: 'Enterprise GPT Platform',
        readinessLabel: 'Enterprise Readiness',
        readinessScore: 9.2,
        description:
          'Enterprise-grade large language model deployment with robust security controls and scalable infrastructure.',
        hasVideoInterview: true,
        image: imageMap.audienceImg2,
      },
      {
        id: 3,
        category: 'AI Infrastructure',
        title: 'Enterprise GPT Platform',
        readinessLabel: 'Enterprise Readiness',
        readinessScore: 9.2,
        description:
          'Enterprise-grade large language model deployment with robust security controls and scalable infrastructure.',
        hasVideoInterview: true,
        image: imageMap.audienceImg3,
      },
      {
        id: 4,
        category: 'AI Infrastructure',
        title: 'Enterprise GPT Platform',
        readinessLabel: 'Enterprise Readiness',
        readinessScore: 8.7,
        description:
          'Enterprise-grade large language model deployment with robust security controls and scalable infrastructure.',
        hasVideoInterview: true,
        image: imageMap.audienceImg1,
      },
      {
        id: 5,
        category: 'AI Infrastructure',
        title: 'Enterprise GPT Platform',
        readinessLabel: 'Enterprise Readiness',
        readinessScore: 8.1,
        description:
          'Enterprise-grade large language model deployment with robust security controls and scalable infrastructure.',
        hasVideoInterview: true,
        image: imageMap.audienceImg2,
      },
    ],
  },
})

const modules = [Autoplay]
const swiperInstance = ref(null)
const activeIndex = ref(1)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.realIndex
}
</script>

<!-- styles moved to src/assets/styles/components/AiPlatformSlider.css -->
