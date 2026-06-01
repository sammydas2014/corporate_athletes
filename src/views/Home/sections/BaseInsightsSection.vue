<template>
  <section class="insights-sec">
    <div class="container">
      <div class="upper-text-wrap">
        <span class="title__eyebrow"> Insights </span>
        <h2 class="sec__title">Insights on AI and transformation</h2>
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
import TransformactionCard from '@/components/common/Transformaction-Card.vue'
import { insights } from '@/services/home.service.js'
import { imageMap } from '@/assets/images/imageMap.js'
</script>

<style scoped>
.insights-sec {
  padding: var(--sec-gap) 0;
}

.transformaction-wrap {
  margin-top: 40px;
}

.transformaction-wrap .left-wrap {
  width: 51%;
}

.transformaction-wrap .right-wrap {
  width: 49%;
}

.transformaction-wrap .img-wrap {
  border-radius: 15px;
  overflow: hidden;
}

.transformaction-wrap .img-wrap img {
  width: 100%;
  height: 100%;
}

.right-wrap {
  padding-left: 66px;
}

.right-wrap .transform-crd:first-child {
  padding-top: 0;
}

.right-wrap .transform-crd:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.right-wrap .transform-crd {
  border-bottom: 1px solid #D8DEE6;
}

.icon-right-crd a {
  color: var(--bs-primary) !important;
}
</style>
