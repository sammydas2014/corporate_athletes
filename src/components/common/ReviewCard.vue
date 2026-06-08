<script setup>
// import { imageMap } from '@/assets/images/imageMap';
defineProps({
  companyLogo:{
    type: String,
    default: ""
  },
  title:{
    type: String,
    default: "Title Here"
  },
  rating:{
    type: Number,
    default: 1
  },
  details:{
    type: String,
    default: ""
  },
  authorName:{
    type: String,
    default: ""
  },

})
</script>

<template>
  <div class="review-crd">
    <div class="card-headr">
      <div class="cmpny-info">
        <div class="conpany-logo">
          <img :src="companyLogo" alt="Company Logo">
        </div>
        <h6>{{ title }}</h6>
      </div>
      <div class="rating-info">
        <i
          v-for="star in rating"
          :key="star"
          class="bi bi-star-fill"
        ></i>
      </div>
    </div>
    <div class="card-body">
      <p>
        {{ details }}
      </p>
    </div>
    <div class="card-footer">
      <p>- <span>{{ authorName }}</span></p>
    </div>
  </div>
</template>
