<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import PlayBookStackCard from "@/components/common/PlayBookStackCard.vue";

defineProps({
  cards: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
  <Swiper :slides-per-view="4" :space-between="30" :breakpoints="{
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1025:{
      slidesPerView: 3
    },
    1200: {
      spaceBetween: 20
    }
  }" class="audience-swiper">
    <SwiperSlide v-for="item in cards" :key="item?.id">
      <PlayBookStackCard
        :step="item?.step"
        :title="item?.title"
        :description="item?.description"
        :tools="item?.tools"
      />
    </SwiperSlide>

  </Swiper>
</template>

