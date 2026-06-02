<script setup>
import {ourApproachData} from "@/services/aistrategygovernance.service.js"
import WorkCard from "@/components/common/Work-Card.vue";
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
<style scoped>
.approach-sec{
  background: linear-gradient(139.04deg, rgba(24.45, 67.72, 83.37, 1) 1.235%, rgba(31, 78, 95, 1) 49.426%);
    padding: var(--sec-gap) 0
}
.approach-sec .hdng{
  text-align: center;
}
.approach-sec .hdng h2{
  color: var(--bs-body-bg);
}
.approach-sec .cards-wrap {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
.cards-wrap .word-card {
    width: calc(25% - 10px);
}
</style>
