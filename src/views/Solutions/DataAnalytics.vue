<template>
  <HeroBanner
    title="Data &amp; Analytics Practice"
    subtitle="Turn enterprise data into a strategic asset — from data architecture and governance to advanced analytics and real-time intelligence."
    bg-color="#040e1c"
    image-url="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
    image-alt="Data Analytics visual"
    min-height="380px"
    :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Data & Analytics Practice' },
    ]"
    :ctas="[{ label: 'Talk to an Expert', style: 'teal' }]"
  />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

