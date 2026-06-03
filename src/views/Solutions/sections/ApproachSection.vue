<script setup>
import {ourApproachData} from "@/services/aistrategygovernance.service.js"
import WorkCard from "@/components/common/WorkCard.vue";
</script>
<template>
  <section class="approach-sec">
    <div class="container">
      <div class="hdng">
        <span class="title__eyebrow">Our Approach</span>
        <h2 class="sec__title">Our Approach</h2>
      </div>
      <div class="cards-wrap">
        <template v-for="(data, index) in ourApproachData" :key="index">
          <WorkCard
            :heading="data.title"
            :descp="data.description"
            :logo="data.icon"
          />
        </template>
      </div>
    </div>
  </section>
</template>
<!-- styles moved to src/assets/styles/views/ApproachSection.css -->
