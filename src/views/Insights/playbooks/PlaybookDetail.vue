<template>
  <div class="playbook-detail">
    <HeroBanner class="playbookDetail_bnr" :title="bannersData.title" :subtitle="bannersData.subtitle"
      :image-url="bannersData.imageUrl" :image-alt="bannersData.imageAlt" :tags="bannersData.tags"
      :ctas="bannersData.ctas" :meta="bannersData.meta" bg-color="#02050A" min-height="580px" :breadcrumbs="[
        { label: 'Home', href: '/' },
        { label: 'Insights', href: '/insights' },
        { label: 'Transformation playbooks', href: '/insights/playbooks' },
        { label: bannersData.breadcrumbLabel },
      ]" />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
import { bannersData } from '@/services/playbookDetail.service'

</script>
