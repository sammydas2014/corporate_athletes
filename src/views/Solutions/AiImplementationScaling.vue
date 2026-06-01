<template>
  <HeroBanner title="AI Implementation<br>and Scaling"
      subtitle="Move from proof-of-concept to production at scale with robust AI pipelines, MLOps, and change management."
      bg-color="#040e1c" image-url="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900"
      image-alt="AI visual" min-height="380px" :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Solution', href: '/solutions' },
        { label: 'AI Implementation and Scaling' },
      ]" :ctas="[
        { label: 'Talk to an Expert', style: 'teal' },
      ]" />
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
</script>

<style scoped></style>
