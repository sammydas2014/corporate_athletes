<template>
  <div class="solutions-main">
    <HeroBanner
      title="AI-Powered Solutions for Enterprise Transformation"
      subtitle="From AI strategy and governance to finance shared services and digital operating models — Corporate Athletes delivers end-to-end transformation tailored to your organisation."
      bg-color="#040e1c"
      min-height="480px"
      :breadcrumbs="[{ label: 'Home', href: '/' }, { label: 'Solutions' }]"
      :ctas="[{ label: 'Book a Strategy Call', style: 'primary' }]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

<style scoped></style>
