<template>
  <HeroBanner
    title="AI Strategy &amp; Governance"
    subtitle="Build a robust AI roadmap aligned with your enterprise goals — from board-level framing to cross-functional execution frameworks."
    bg-color="#040e1c"
    image-url="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900"
    image-alt="AI Strategy visual"
    min-height="380px"
    :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'AI Strategy & Governance' },
    ]"
    :ctas="[{ label: 'Talk to an Expert', style: 'teal' }]"
  />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

<style scoped></style>
