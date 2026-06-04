<script setup>
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
  <section :class="['engagement-sec', className]">
    <div class="container">
      <div class="engagement-wrap">
        <div class="row align-items-center">
          <div class="col-md-6">
            <div class="txt-wrap">
              <span class="title__eyebrow"> {{ tag }} </span>
              <h2 class="sec__title">{{ title }}</h2>
              <template v-if="subtitle">
                <h6 class="smll-hdng">{{ subtitle }}</h6>
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
