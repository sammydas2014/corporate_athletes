<template>
  <div class="deep-dives-view">
    <HeroBanner
      title="AI Deep Dives"
      subtitle="In-depth technical and strategic analysis of enterprise AI platforms, architectures, and deployment patterns."
      bg-color="#040e1c"
      min-height="380px"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'AI Deep Dives' },
      ]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

