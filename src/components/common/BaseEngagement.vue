<script setup>
import { defineProps } from 'vue'
import SolutionList from "@/components/common/SolutionList.vue"
import OutCome from "@/components/common/OutCome.vue"
defineProps({
  tag: {
    type: String,
    default: "Consortium Model"
  },
  title: {
    type: String,
    default: "Curated. Not staffed."
  },
  imageData: {
    type: String,
    default: ""
  },
  subtitle: {
    type: String,
    default: ""
  },
  soluctionItems: {
    type: Array,
    default: () => []
  },
  className: {
    type: String,
    default: ""
  },
  outcome: {
    type: Object,
    default: () => { }
  }
})
</script>

<template>
  <section class="engagement-sec">
    <div class="container">
      <div :class="['engagement-wrap',{ className }]">
        <div class="row">
          <div class="col-md-6">
            <div class="txt-wrap">
              <span class="title__eyebrow"> {{ tag }} </span>
              <h2 class="sec__title">{{ title }}</h2>
              <template v-if="subtitle">
                <h6 class="smll-hdng">Global Financial Services Firm</h6>
              </template>
              <div class="soluction-wrap" v-if="soluctionItems.length > 0">
                <template v-for="(item, index) in soluctionItems" :key="index">
                  <SolutionList :heading="item.title" :description="item.description" :listItems="item.list" />
                </template>
              </div>
              <template v-if="outcome">
                <OutCome :heading="outcome.heading" :description="outcome.description" />
              </template>
            </div>
          </div>
          <div class="col-md-6">
            <div class="engagement-img-wrap">
              <img :src="imageData" alt="Image">
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.engagement-sec {
  padding: var(--sec-gap) 0 35px 0;
  background-color: var(--bs-light);
}

.smll-hdng {
  font-size: 17px;
  color: var(--bs-secondary);
  line-height: 26px;
  letter-spacing: -0.03em;
  font-weight: 500;
  margin-bottom: 35px;
}

.aboutpage-engagement .txt-wrap {
  padding-right: 180px;
}

.aboutpage-engagement .soluction-wrap {
  margin-top: 70px;
}

.aboutpage-engagement .engagement-img-wrap {
  min-width: 700px;
}

.txt-wrap {
  padding-right: 60px;
}
</style>