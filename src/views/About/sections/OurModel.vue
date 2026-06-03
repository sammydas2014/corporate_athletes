<script setup>
import WorkCard from '@/components/common/WorkCard.vue'
import {ourModelData} from "@/services/about.service.js"
</script>

<template>
  <section class="our-model-sec">
    <div class="container">
      <div class="model-wrap">
        <div class="hdng">
          <span class="title__eyebrow"> Our Model </span>
        <h2 class="sec__title">Built for End-to-End Transformation</h2>
        <p>We do not separate strategy from execution. We are structured to support transformation from definition through delivery and capability building.</p>
        <p>Our model is modular. Clients engage with one component or combine multiple, depending on their priorities, maturity, and internal capability.</p>
        </div>
        <div class="cards-wrap">
          <template v-for="(data , index) in ourModelData" :key="index">
            <WorkCard 
              :heading="data.title"
              :descp="data.description"
              :logo="data.icon"
            />
          </template>
        </div>
        <div class="hdng">
          <p>This allows organisations to start where it matters most and expand as value is proven.</p>
          <p>Engage across one or multiple components depending on your needs.</p>
        </div>
        
      </div>
    </div>
  </section>
</template>


<!-- styles moved to src/assets/styles/views/OurModel.css -->