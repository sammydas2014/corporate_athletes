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

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};


</script>

<template>
  <Swiper :slides-per-view="4" :space-between="30" :breakpoints="{
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 4
    }
  }" @swiper="onSwiper" @slideChange="onSlideChange" class="audience-swiper">
    <SwiperSlide v-for="(item, index) in cards" :key="index">
      <MeasurableCard :heading="item.details" :result="item.result" />
    </SwiperSlide>

  </Swiper>
</template>

<style scoped></style>
