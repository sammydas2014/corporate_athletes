<template>
  <div class="playbooks-list">
    <HeroBanner
      title="Transformation Playbooks"
      subtitle="Step-by-step frameworks and execution guides for AI implementation, operating model change, and enterprise transformation."
      bg-color="#040e1c"
      min-height="380px"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'Playbooks' },
      ]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

