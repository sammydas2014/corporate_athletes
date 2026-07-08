<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import UserEventCard from "@/components/common/UserEventCard.vue";

defineProps({
  cards: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
  <Swiper :slides-per-view="4" :space-between="15" :breakpoints="{
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
    },
    1400: {
      slidesPerView: 4
    }
  }" class="audience-swiper">
    <SwiperSlide v-for="item in cards" :key="item?.id">
      <UserEventCard
        :icon="item?.icon"
        :value="item?.value"
        :description="item?.title"
        :buttonText="item?.buttonText"
      />
    </SwiperSlide>

  </Swiper>
</template>

