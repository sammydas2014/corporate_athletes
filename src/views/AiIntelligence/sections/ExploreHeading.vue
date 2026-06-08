<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
</script>

<template>
  <div class="heading-wrp">
    <div class="hdng-dtls">
      <span class="title__eyebrow"> Catalogue </span>
      <h2 class="sec__title">Explore the AI Tool Platform</h2>
      <p>Identify, compare, and assemble the right AI tools for your business in minutes.</p>
      <ul>
        <li>Compare tools across capabilities, cost, and integration fit</li>
        <li>Build a shortlist tailored to your business context</li>
        <li>Generate a production-ready AI stack</li>
      </ul>
    </div>
    <div class="btn-wrap">
      <BaseButton variant="primary" to="/ai-intelligence/toolcatalogue">Browse AI Tools</BaseButton>
    </div>
  </div>
</template>
