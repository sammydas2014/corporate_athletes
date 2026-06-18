<template>
  <section class="event-programs">
    <div class="container">
      <div class="event-programs__grid">
        <article v-for="card in cards" :key="card.id" class="ep-card">
          <div class="ep-card__body">
            <span class="ep-card__tag">{{ card.tag }}</span>
            <h3 class="ep-card__title">{{ card.title }}</h3>
            <p class="ep-card__desc">{{ card.description }}</p>
            <a :href="card.ctaLink" class="ep-card__cta">
              {{ card.ctaLabel }}
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
          <div class="ep-card__image-col">
            <img :src="card.image" :alt="card.title" class="ep-card__image" />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { eventProgramsData } from '@/services/events.service'

const cards = eventProgramsData.cards
</script>
