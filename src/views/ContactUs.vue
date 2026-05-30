<template>
  <div class="contact-main">
    <HeroBanner
      title="Let's Start a Conversation"
      subtitle="Whether you're ready to transform your operating model or just exploring what's possible, our team is here to help. Reach out and we'll connect you with the right advisor."
      :bg-image="imageMap.homeBnr"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Contact Us' },
      ]"
      overlay-color="true"
      min-height="480px"
      :ctas="[
        { label: 'Book a Strategy Call', style: 'primary' },
      ]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '../components/banner/Herobanner.vue'
import { imageMap } from '../assets/images/imageMap.js'
</script>

<style scoped>
</style>
