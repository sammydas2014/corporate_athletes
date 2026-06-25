<template>
  <div class="contact-main">
    <ContactFormSection @submit="handleContactSubmit" />

    <BaseAccelerate />
  </div>
</template>

<script setup>
import ContactFormSection from './sections/ContactFormSection.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'

function handleContactSubmit(formData) {
  console.log('Contact form submitted', formData)
}
</script>
