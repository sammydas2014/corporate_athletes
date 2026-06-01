<script setup>
import WorkCard from '@/components/common/Work-Card.vue'
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


<style scoped>
.our-model-sec{
    background: linear-gradient(139.04deg, rgba(24.45, 67.72, 83.37, 1) 1.235%, rgba(31, 78, 95, 1) 49.426%);
    padding: var(--sec-gap) 0;
}
.cards-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
}
.cards-wrap .word-card {
    width: calc(25% - 10px);
}
.our-model-sec .hdng{
  max-width: 1080px;
  margin: 0 auto 55px auto;
  text-align: center;
}
.our-model-sec .hdng h2{
  text-align: center;
  color: #FAFAF8;
  
}
.our-model-sec .hdng p{
  text-align: center;
  color: var(--bs-white);
}
.our-model-sec .hdng p + p{
  margin-top: 10px;
}
</style>