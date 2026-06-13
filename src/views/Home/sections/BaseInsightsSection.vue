<template>
  <section class="insights-sec">
    <div class="container">
      <div class="upper-text-wrap">
        <span v-if="subtitle" class="title__eyebrow"> {{ subtitle }} </span>
        <h2 class="sec__title">{{title}}</h2>
      </div>
      <div class="transformaction-wrap d-flex">
        <div class="left-wrap">
          <div class="img-wrap">
            <img :src="imageMap.femaleAnalytics" alt="Female Analytics" />
          </div>
          <TransformactionCard />
        </div>
        <div class="right-wrap">
          <TransformactionCard v-for="(item, index) in insights" :key="index" variant="icon-right"
            :chipTitle="item.eventData" :title="item.title" :paraTxt="item.detals">
            <template #icon-right>
              <RouterLink to="/">
                <i class="bi bi-arrow-up-right-circle-fill"></i>
              </RouterLink>
            </template>
          </TransformactionCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TransformactionCard from '@/components/common/TransformactionCard.vue'
import { insights } from '@/services/home.service.js'
import { imageMap } from '@/assets/images/imageMap.js'

defineProps({
  subtitle:{
    type: String,
    default: ""
  },
  title:{
    type: String
  }
})
</script>

<!-- styles moved to src/assets/styles/views/BaseInsightsSection.css -->
