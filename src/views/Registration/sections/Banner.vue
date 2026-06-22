<template>
  <section class="reg_bnr">
    <div class="container">
      <div class="bnr_con">
        <div class="bnr_lft">
          <span class="title__eyebrow">{{ bannerData.eye }}</span>
          <h1>{{ bannerData.title }}</h1>
          <h3>{{ bannerData.shortTitle }}</h3>
          <p class="sec__subtitle">{{ bannerData.subtitle }}</p>
          <div class="amount">{{ bannerData.amount }} <span>{{ bannerData.tax }}</span></div>
          <p class="sec__subtitle">{{ bannerData.priceLabel }}</p>
        </div>
        <div class="bnr_rgt">
          <p class="sec__subtitle">{{ bannerData.registrationIncludes.title }}</p>
          <ul class="include_list">
            <li v-for="(item, index) in bannerData.registrationIncludes.items" :key="index">
              <img :src="item.icon" :alt="item.text" />
              <span>{{ item.text }}</span>
            </li>
          </ul>
          <div class="attendee_info">
            <div class="icon">
              <img :src="bannerData.attendeeInfo.icon" :alt="bannerData.attendeeInfo.title" />
            </div>
            <div class="con">
              <h4>{{ bannerData.attendeeInfo.title }}</h4>
              <p>{{ bannerData.attendeeInfo.subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { bannerData } from '@/services/registration.service';

</script>
