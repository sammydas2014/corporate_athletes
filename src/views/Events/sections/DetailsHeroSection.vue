<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
defineProps({
  badge:{
    type:String,
    default: ""
  },
  title:{
    type:String,
    default: ""
  },
  description:{
    type:String,
    default: ""
  },
  bnnrImg:{
    type:String,
    default: ""
  },
  eventDetails:{
    type: Array,
    default: ()=> []
  },
  ctaText:{
    type: String,
    default: ""
  },
  eventGoals:{
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="dtlsHero-sec">
    <div class="container">
      <div class="hero-wrap">
        <div class="hero-left">
          <div class="hdngWrp">
            <span class="title__eyebrow">{{ badge }}</span>
            <h1>{{ title }}</h1>
            <p>{{ description }}</p>
          </div>
          <ul v-if="eventDetails.length" class="evntDtls">
            <li v-for="(item, index) in eventDetails" :key="index">
              <img :src="item?.icon" alt="Event Details Image">
              <span>{{ item?.value }}</span>
            </li>
          </ul>
          <BaseButton>
            {{ ctaText }}
          </BaseButton>
        </div>
        <div class="hero-right">
          <div class="heroImg">
            <img :src="bnnrImg" alt="Event Details Image">
          </div>
          <div v-if="eventGoals.length" class="eventGoalWra">
            <div class="innr-wrap" v-for="(value, index) in eventGoals" :key="index">
              <h5>{{ value?.heading }}</h5>
              <ul>
                <li v-for="(item, index) in value?.list" :key="index">
                  {{ item }}{{ index < value.list.length - 1 ? ', ' : '' }}

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
