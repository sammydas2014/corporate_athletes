<template>
  <div class="articles-view">
    <HeroBanner
      title="Advisory Articles"
      subtitle="Practical perspectives on AI adoption, operating model redesign, and enterprise performance from our advisory team."
      bg-color="#040e1c"
      min-height="380px"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'Articles' },
      ]"
    />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

