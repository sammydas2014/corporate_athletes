<script setup>
import { ref } from 'vue';
import ShortlistToolbar from '@/components/common/ShortlistToolbar.vue';
import ShortlistCard from '@/components/common/ShortlistCard.vue';
import ShortlistInsights from '@/components/common/ShortlistInsights.vue';
import ArchitecturePreview from '@/components/common/ArchitecturePreview.vue';
import { shortlistedTools, shortlistSummary, shortlistPageHeader, MAX_SHORTLIST_ITEMS } from '@/services/shortlist.service';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';

const tools = ref(shortlistedTools.slice(0, MAX_SHORTLIST_ITEMS));
const view = ref('grid');

function handleRemove(toolId) {
  tools.value = tools.value.filter((tool) => tool.id !== toolId);
}
</script>

<template>
  <section class="tools-shortlist">
    <div class="container">
      <div class="tools-shortlist__header">
        <h1 class="tools-shortlist__title">{{ shortlistPageHeader.title }}</h1>
        <p class="tools-shortlist__subtitle">{{ shortlistPageHeader.subtitle }}</p>
      </div>


      <div class="tools-shortlist__layout">
        <div class="tools-shortlist__main">
          <ShortlistToolbar :summary="shortlistSummary" @update:view="view = $event" />
          <div class="tools-shortlist__grid" :class="{ 'tools-shortlist__grid--list': view === 'list' }">
            <ShortlistCard v-for="tool in tools" :key="tool.id" :tool="tool" @remove="handleRemove" />
          </div>
        </div>

        <aside class="tools-shortlist__sidebar">
          <ShortlistInsights />
          <ArchitecturePreview />
        </aside>
      </div>
    </div>
  </section>
  <BaseAccelerate />
</template>
