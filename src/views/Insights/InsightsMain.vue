<template>
  <div class="insights-main">
    <HeroBanner
      title="Insights &amp; Intelligence"
      subtitle="Advisory articles, AI deep dives, transformation playbooks, and consortium contributions from Corporate Athletes and our network of enterprise practitioners."
      bg-color="#040e1c"
      min-height="480px"
      :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Insights' }]"
      :ctas="[{ label: 'Explore Playbooks', style: 'primary' }]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

