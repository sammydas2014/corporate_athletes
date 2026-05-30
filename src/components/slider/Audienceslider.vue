<template>


  <!-- Slider -->
  <Swiper :slides-per-view="3" :space-between="30" :breakpoints="{
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }" @swiper="onSwiper" @slideChange="onSlideChange" class="audience-swiper">
    <SwiperSlide v-for="card in cards" :key="card.id">
      <div class="audience-slider__card">

        <div class="audience-slider__photo-wrap">
          <img :src="card.image" :alt="card.title" class="audience-slider__photo">

          <div class="audience-slider__photo-overlay"></div>
        </div>

        <div class="audience-slider__card-body">
          <h3 class="audience-slider__card-title">
            {{ card.title }}
          </h3>

          <p class="audience-slider__card-desc">
            {{ card.description }}
          </p>
        </div>

      </div>
    </SwiperSlide>
  </Swiper>

  <!-- Footer -->
  <div class="audience-slider__footer">

    <div class="audience-slider__progress-wrap">
      <div class="audience-slider__progress-bar" :style="{ width: progressWidth }"></div>
    </div>

    <div class="audience-slider__nav">

      <button class="audience-slider__btn" :disabled="isBeginning" @click="swiperInstance?.slidePrev()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>

      <button class="audience-slider__btn audience-slider__btn--next" :disabled="isEnd"
        @click="swiperInstance?.slideNext()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button>

    </div>

  </div>

</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

import { imageMap } from '../../assets/images/imageMap'

const props = defineProps({
  cards: {
    type: Array,
    default: () => [
      {
        id: 1,
        title: 'Boards and Shareholders',
        description:
          'Independent perspective on AI, operating model transformation.',
        image: imageMap.audienceImg1,
      },
      {
        id: 2,
        title: 'Chief Executive Officer (CEO)',
        description:
          'Independent perspective on AI, operating model transformation.',
        image: imageMap.audienceImg2,
      },
      {
        id: 3,
        title: 'Chief Financial Officer (CFO)',
        description:
          'Finance transformation, shared services optimization.',
        image: imageMap.audienceImg3,
      },
      {
        id: 4,
        title: 'Chief Operating Officer (COO)',
        description:
          'End-to-end operational efficiency and performance management.',
        image: imageMap.audienceImg1,
      },
      {
        id: 5,
        title: 'Chief Technology Officer (CTO)',
        description:
          'Technology modernization, AI architecture and transformation.',
        image: imageMap.audienceImg2,
      },
    ],
  },
})

const swiperInstance = ref(null)
const activeIndex = ref(0)
const visibleCount = ref(3)

const updateVisibleCount = () => {
  const width = window.innerWidth

  if (width < 640) {
    visibleCount.value = 1
  } else if (width < 1024) {
    visibleCount.value = 2
  } else {
    visibleCount.value = 3
  }
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}

onMounted(() => {
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
})

const isBeginning = computed(() => {
  return activeIndex.value === 0
})

const isEnd = computed(() => {
  return (
    activeIndex.value >=
    props.cards.length - visibleCount.value
  )
})

const progressWidth = computed(() => {
  const maxSlides =
    props.cards.length - visibleCount.value

  if (maxSlides <= 0) {
    return '100%'
  }

  return `${((activeIndex.value + 1) / (maxSlides + 1)) * 100}%`
})
</script>

<style scoped>
.audience-swiper .swiper-slide {
  height: auto;
  display: flex;
}

.audience-slider__card {
  width: 100%;
  border: 1px solid var(--bs-border-color);
  border-radius: var(--border-radius-lg);
  background: var(--bs-primary);
  transition: var(--bs-transition);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.audience-slider__photo-wrap {
  position: relative;
  aspect-ratio: 15 / 11;
  overflow: hidden;
  border-radius: var(--border-radius-md);
}

.audience-slider__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--bs-transition);
  overflow: hidden;
}

.audience-slider__card:hover .audience-slider__photo {
  transform: scale(1.05);
}

.audience-slider__photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
      transparent,
      rgba(0, 0, 0, .2));
}

.audience-slider__card-body {
  padding: 25px 20px;
  border: 1px solid var(--bs-border-color);
  border-radius: var(--border-radius-md);
  background: var(--bs-white);
}

.audience-slider__card-title {
  margin-bottom: 15px;
}

.audience-slider__card-desc {
  margin-bottom: 0;
}

.audience-slider__footer {
  display: flex;
  align-items: center;
  gap: 35px;
  margin-top: 25px;
}

.audience-slider__progress-wrap {
  flex: 1;
  height: 4px;
  background: #d8dee6;
  border-radius: 999px;
  overflow: hidden;
}

.audience-slider__progress-bar {
  height: 100%;
  background: #1f4e5f;
  transition: width .3s ease;
}

.audience-slider__nav {
  display: flex;
  gap: .75rem;
}

.audience-slider__btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #d8dee6;
  background: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s ease;
}

.audience-slider__btn:disabled {
  background: var(--bs-white);
  color: var(--bs-black);
}

.audience-slider__btn:hover:not(:disabled) {
  background: #1f4e5f;
  color: #fff;
}

.audience-slider__btn--next {
  background: #1f4e5f;
  color: #fff;
}

.audience-slider__btn:disabled {
  opacity: .35;
  cursor: not-allowed;
}

@media (max-width: 767px) {
  .audience-slider {
    padding: 4rem 0;
  }

  .audience-slider__footer {
    margin-top: 1.5rem;
  }
}
</style>