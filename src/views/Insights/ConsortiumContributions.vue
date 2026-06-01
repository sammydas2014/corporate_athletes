<template>
  <div class="consortium-view">
    <HeroBanner
      title="Consortium Contributions"
      subtitle="Research, frameworks, and thought leadership contributed by members of the Corporate Athletes AI Consortium."
      bg-color="#040e1c"
      min-height="380px"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'Consortium Contributions' },
      ]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

<style scoped></style>
