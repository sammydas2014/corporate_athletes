<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import MeasurableCard from "@/components/common/MeasurableCard.vue";

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
    560: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200:{
      slidesPerView: 4
    }
  }" class="audience-swiper">
    <SwiperSlide v-for="(item, index) in cards" :key="index">
      <MeasurableCard :heading="item.details" :result="item.result" />
    </SwiperSlide>

  </Swiper>
</template>

