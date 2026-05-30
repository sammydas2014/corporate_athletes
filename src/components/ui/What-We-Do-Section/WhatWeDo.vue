<script setup>
import strategyOne from '@/assets/images/strategy-1.png'
import algorithm from '@/assets/images/algorithm.png'
import dataprocessing from '@/assets/images/data-processing.png'
import administration from '@/assets/images/administration.png'
import WorkCard from '../Work-Card.vue'

const services = [
  {
    id: 1,
    title: "AI-Enabled Transformation Advisory",
    description: "Define strategy, operating model, and roadmap",
    icon: strategyOne,
  },
  {
    id: 2,
    title: "Transformation Delivery",
    description: "Execute and embed change across functions",
    icon: algorithm,
  },
  {
    id: 3,
    title: "AI Lab",
    description: "Build and deploy enterprise AI solutions, combining reusable components with bespoke development",
    icon: dataprocessing,
  },
  {
    id: 4,
    title: "Education & Academy",
    description: "Build internal AI capability and skills",
    icon: administration,
  },
];
</script>

<template>
  <section class="whatwedo-sec">
    <div class="container">
      <div class="whatdo-wrap d-flex">
        <div class="hdng-wrap">
          <span class="title__eyebrow"> What We Do </span>

          <h2 class="sec__title">Where strategy meets execution</h2>
          <p class="sub-hdng">Four capability pillars</p>
        </div>
        <div class="work-wrap">
          <template v-for="(serviceItem , index) in services" :key="index" >
            <WorkCard
              :logo="serviceItem.icon"
              :heading="serviceItem.title"
              :descp="serviceItem.description"
            />
          </template>


        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.whatwedo-sec{
  background: linear-gradient(139.04deg, rgba(24.45, 67.72, 83.37, 1) 1.235%,rgba(31, 78, 95, 1) 49.426%);
  overflow: hidden;
}
.whatwedo-sec .container{
  padding-top: var(--sec-gap);
  padding-bottom: 200px;
  position: relative;
}
.whatwedo-sec .container::after{
  content: "";
    position: absolute;
    background: url(/src/assets/images/what-we-do-after-img.png) no-repeat;
    background-position: bottom left;
    background-size: contain;
    width: 1200px;
    height: 600px;
    left: -660px;
    bottom: 0;

}
.hdng-wrap .sec__title {
    color: var(--bs-body-bg);
    max-width: 430px;
}
.hdng-wrap .sub-hdng{
  position: relative;
  color: #E9EEF2;
  font-size: 18px;
  letter-spacing: -2%;
  line-height: 22px;
  display: inline-block;
}
.hdng-wrap .sub-hdng::after{
  content: "";
    position: absolute;
    background-color: #E9EEF2;
    width: 131px;
    height: 1px;
    top: 11px;
    left: 113%;
}
.hdng-wrap , .work-wrap{
  width: 50%;
}
.hdng-wrap {
    padding-left: 96px;
    padding-right: 65px;
    width: 50%;
    flex: 0 0 auto;
}
.work-wrap{
  display: flex;
  flex-wrap: wrap;
  padding-top: 78px;
}
</style>
