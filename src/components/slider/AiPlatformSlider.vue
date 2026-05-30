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
      768: { slidesPerView: 1.4, spaceBetween: 15 },
      1024: { slidesPerView: 3, spaceBetween: 15 },
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
import { imageMap } from '../../assets/images/imageMap'

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

<style scoped>
.ai-platform-card__body {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  min-width: 0;
}

.ai-platform-card__tag {
  display: inline-flex;
  align-items: center;
  color: var(--bs-dark);
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
  text-transform: capitalize;
  padding: 7px 9px;
  letter-spacing: -0.02em;
  border-radius: 5px;
  max-width: fit-content;
  background: var(--bs-secondary);
}

.ai-platform-card__title {
  margin-bottom: 0;
  font-size: 18px;
}

.ai-platform-card__readiness {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.ai-platform-card__readiness-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ai-platform-card__readiness-label {
  font-size: 13px;
  line-height: 1.2;
  color: var(--bs-primary);
  font-weight: 400;
  letter-spacing: -0.03em;
}

.ai-platform-card__readiness-score {
  font-size: 14px;
  font-weight: 600;
  color: var(--bs-primary);
}

.ai-platform-card__readiness-track {
  height: 5px;
  background: var(--bs-border-color);
  border-radius: 999px;
  overflow: hidden;
}

.ai-platform-card__readiness-fill {
  height: 100%;
  background: var(--bs-primary);
  border-radius: 999px;
  transition: var(--bs-transition);
}

.ai-platform-card__desc {
  font-size: 14px;
  color: var(--bs-body-color);
  margin: 0;
}

.ai-platform-card__video-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  line-height: 1;
  font-weight: 600;
  color: var(--bs-primary);
  text-decoration: none;
  margin-top: auto;
  transition: var(--bs-transition);
}

.ai-platform-card__video-link:hover {
  color: var(--bs-secondary);
}

.ai-platform-card__video-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: var(--bs-primary);
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  font-size: 16px;
  line-height: 1;
  color: var(--bs-white);
}

.ai-platform-card__image-col {
  width: 140px;
  flex-shrink: 0;
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.ai-platform-card__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: top center;

  -webkit-mask-image: url(../../assets/images/mask_aipl_img.svg);
  mask-image: url(../../assets/images/mask_aipl_img.svg);

  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;

  -webkit-mask-position: center;
  mask-position: center;

  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.ai-platform__swiper {
  overflow: hidden;
  padding-block: 30px;
}

.ai-platform-card {
  background: var(--bs-white);
  border: 1px solid var(--bs-border-color);
  border-radius: var(--border-radius-md);
  padding: 24px;
  display: flex;
  gap: 16px;
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: scale(0.88);
  z-index: 0;
  transition:
    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.8s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.ai-platform-card--active {
  box-shadow: 0 12px 40px rgba(27, 154, 170, 0.18);
  transform: scale(1);
  opacity: 1;
  z-index: 2;
}

@media (max-width: 1023px) {
  .ai-platform__swiper {
    overflow: hidden;
  }
}

@media (max-width: 767px) {
  .ai-platform-card__image-col {
    width: 110px;
  }
}
</style>
