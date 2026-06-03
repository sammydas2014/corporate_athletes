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

import { imageMap } from '@/assets/images/imageMap'

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

<!-- styles moved to src/assets/styles/components/Audienceslider.css -->