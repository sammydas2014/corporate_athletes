<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import ReviewCard from "@/components/common/ReviewCard.vue";

defineProps({
  testimonialData: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
  <Swiper :slides-per-view="2" :space-between="20" :breakpoints="{
    0: {
      slidesPerView: 1
    },
    640: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    }
  }" class="audience-swiper">
  

    <SwiperSlide v-for="(item, index) in testimonialData" :key="index">
      <ReviewCard
        :companyLogo="item.companyLogo"
        :title="item.tagline"
        :rating="item.rating"
        :details="item.description"
        :authorName="item.author"
      />
    </SwiperSlide>

  </Swiper>
</template>

