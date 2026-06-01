<template>
  <section class="profile_sec">
    <div class="container">
      <div class="text-center prof_heading">
        <span class="title__eyebrow">Leadership & Experts</span>
        <h2 class="sec__title">A small core. A deep bench.</h2>
      </div>
      <Casestudiecardgrid :items="teamCards" :columns="3" @card-click="onCardClick" />
    </div>
  </section>
</template>

<script setup>
import Casestudiecardgrid from '@/components/common/Casestudiecardgrid.vue';
import { teamCards } from '@/services/about.service.js';

function onCardClick(card) {
  console.log('Card clicked:', card)
}
</script>

<style scoped>
.profile_sec {
  background-color: var(--bs-success);
  padding: var(--sec-gap) 0;
}

.profile_sec .sec__title {
  color: var(--bs-white);
}

.prof_heading {
  margin-bottom: 50px;
}
</style>