<template>
  <div class="playbook-detail">
    <HeroBanner
      :title="playbook.title || 'Playbook'"
      :subtitle="playbook.subtitle || ''"
      bg-color="#040e1c"
      min-height="380px"
      :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'Playbooks', href: '/insights/playbooks' },
        { label: playbook.title || 'Detail' },
      ]"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import HeroBanner from '@/components/common/Herobanner.vue'

const props = defineProps({ id: { type: String, required: true } })

const playbook = computed(() => ({ title: `Playbook ${props.id}`, subtitle: '' }))
</script>

