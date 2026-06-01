<template>
  <HeroBanner
    title="Digital Operating Model"
    subtitle="Redesign your operating model for the AI era — embedding digital capabilities, agile structures, and intelligent workflows across the enterprise."
    bg-color="#040e1c"
    image-url="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900"
    image-alt="Digital Operating Model visual"
    min-height="380px"
    :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Digital Operating Model' },
    ]"
    :ctas="[{ label: 'Talk to an Expert', style: 'teal' }]"
  />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

<style scoped></style>
