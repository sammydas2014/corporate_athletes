<template>
  <HeroBanner title="AI operating model reset"
    subtitle="Define ownership, control points, and value tracking before scaling AI."
    bg-image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600" overlay-color="rgba(4,14,28,0.78)"
    image-url="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900" image-alt="AI hand"
    min-height="300px" :breadcrumbs="[
      { label: 'Home', href: '/' },
      { label: 'Insights', href: '/insights' },
      { label: 'Transformation playbooks', href: '/playbooks' },
      { label: 'Early stage' },
    ]" :tags="[
        { label: 'Diagnose / Design', prefix: 'Stage', type: 'stage' },
        { label: '3–4 weeks', prefix: 'Time', type: 'time' },
        { label: 'Medium', prefix: 'Complexity', type: 'complexity' },
        { label: 'Enterprise', prefix: 'Function', type: 'function' },
      ]" :ctas="[
        { label: 'Download Full Toolkit', style: 'teal' },
        { label: 'Build AI Stack for This Playbook', style: 'outline' },
      ]" :meta="[
        { label: '5 downloadable templates', icon: 'download' },
        { label: 'Readiness diagnostic', icon: 'diagnostic' },
        { label: 'Operating model canvas', icon: 'canvas' },
      ]" />
</template>

<script setup>
import HeroBanner from '../../../components/banner/Herobanner.vue'
</script>

<style scoped></style>
