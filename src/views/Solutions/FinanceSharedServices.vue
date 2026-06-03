<template>
  <HeroBanner
    title="Finance Shared Services"
    subtitle="Modernise finance operations through intelligent automation, shared service centres, and AI-powered process transformation."
    bg-color="#040e1c"
    image-url="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=900"
    image-alt="Finance visual"
    min-height="380px"
    :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Finance Shared Services' },
    ]"
    :ctas="[{ label: 'Talk to an Expert', style: 'teal' }]"
  />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

