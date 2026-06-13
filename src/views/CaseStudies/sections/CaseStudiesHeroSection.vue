<template>
  <section class="cstd_hero_sec">
    <div class="container">
      <span class="title__eyebrow ">{{ caseStudiesHeader.eyebrow }}</span>
      <h1 class="hero-banner__title">{{ caseStudiesHeader.title }}</h1>
      <p class="sec__subtitle">{{ caseStudiesHeader.subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
import { caseStudiesHeader } from '@/services/casestudieslist.service';
</script>
