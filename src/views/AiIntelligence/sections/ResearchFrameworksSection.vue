<template>
  <section class="research-fw-sec">
    <div class="container">
      <div class="research-fw-top">
        <span class="title__eyebrow">{{ eyebrow }}</span>
        <h2 class="sec__title research-fw-top__heading">{{ heading }}</h2>
      </div>

      <div class="research-fw-list">
        <ResearchCard
          v-for="(card, i) in cards"
          :key="i"
          :title="card.title"
          :description="card.description"
          :link="card.link"
        />
      </div>

      <div v-if="submitLabel" class="research-fw-footer">
        <BaseButton :to="submitLink">{{ submitLabel }}</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '@/components/common/BaseButton.vue';
import ResearchCard from '@/components/common/ResearchCard.vue';


defineProps({
  eyebrow: { type: String, default: 'Research' },
  heading: { type: String, default: 'Research & Frameworks' },
  cards: { type: Array, default: () => [] },
  submitLabel: { type: String, default: '' },
  submitLink: { type: [String, Object], default: '/' }
})
</script>
