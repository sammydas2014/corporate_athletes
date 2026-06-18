<template>
  <div class="contact-main">
    <ContactFormSection @submit="handleContactSubmit" />

    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import ContactFormSection from './sections/ContactFormSection.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'
import { accelerateData } from '@/services/contact.service.js'

function handleContactSubmit(formData) {
  console.log('Contact form submitted', formData)
}
</script>
