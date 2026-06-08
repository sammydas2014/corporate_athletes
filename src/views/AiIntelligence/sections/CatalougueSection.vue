<template>
  <section class="catalougue-sec">
    <div class="container">
      <ExploreHeading />
      <Catalougue />
      <div class="reviweWRaper">
        <div class="hdng-dtls">
          <span class="title__eyebrow"> Reviews </span>
          <h2 class="sec__title">AI Vendor Reviews</h2>
        </div>
        <DeepDrive />
        <ReviewSlider :testimonialData="testimonials" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from '@/services/aiintelligence.service';
import ExploreHeading from './ExploreHeading.vue';
import DeepDrive from './DeepDrive.vue';
import Catalougue from './Catalougue.vue';
import ReviewSlider from '@/components/slider/ReviewSlider.vue';

</script>
