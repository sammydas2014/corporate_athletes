<template>
  <section class="profile_sec">
    <div class="container">
      <div class="text-center prof_heading">
        <span class="title__eyebrow">Leadership & Experts</span>
        <h2 class="sec__title">A small core. A deep bench.</h2>
      </div>
      <Casestudiecardgrid :items="teamCards" :columns="3" />
    </div>
  </section>
</template>

<script setup>
import Casestudiecardgrid from '@/components/common/Casestudiecardgrid.vue';
import { teamCards } from '@/services/about.service.js';
</script>

<!-- styles moved to src/assets/styles/views/ProfilecardSection.css -->