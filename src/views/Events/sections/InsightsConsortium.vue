<template>
  <section class="insights-consortium">
    <div class="container">

      <div class="insights-consortium__header">
        <span class="title__eyebrow">Insights from the network</span>
        <h2 class="sec__title">Insights from the consortium</h2>
        <p class="sec__subtitle insights-consortium__subtitle">
          Themes surfacing across our convenings — written up by the operators in the room.
          Selected talks are streamed to attendees and members ahead of the next session.
        </p>
      </div>

      <div class="insights-consortium__grid">
        <article v-for="item in items" :key="item.id" class="consortium-card">
          <span class="consortium-card__type" :class="`consortium-card__type--${item.typeVariant}`">
            {{ item.type }}
          </span>
          <h3 class="consortium-card__title">{{ item.title }}</h3>
          <p class="consortium-card__desc">{{ item.description }}</p>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
const items = [
  {
    id: 1,
    type: 'Deep Dive',
    typeVariant: 'deep-dive',
    title: 'Emerging AI adoption patterns',
    description: 'What executive orgs are actually deploying, measured by impact and ease of decision-making in practice.',
  },
  {
    id: 2,
    type: 'Guidance',
    typeVariant: 'guidance',
    title: 'Governance themes from the field',
    description: 'The costs and accountability the function during major AI system implementations.',
  },
  {
    id: 3,
    type: 'Deep Dive',
    typeVariant: 'deep-dive',
    title: 'Implementation blockers, named',
    description: 'The operational risk framework in practice across three AI adoption scenarios.',
  },
  {
    id: 4,
    type: 'CA Advice',
    typeVariant: 'ca-advice',
    title: 'AI ROI deep dive',
    description: 'CAI promotes the latest news, updates and articles relevant to the AI industry.',
  },
]
</script>
