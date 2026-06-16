<template>
  <div class="event-card">
    <!-- Full-card background image -->
    <div class="event-card__bg" :style="{ backgroundImage: `url(${event.bgImage})` }"></div>

    <!-- Frosted glass content panel — sits on the LEFT, image visible on RIGHT -->
    <div class="event-card__inner">

      <!-- Date badge -->
      <div class="event-card__date">
        <span class="date-day">{{ event.day }}</span>
        <span class="date-month">{{ event.month }}</span>
      </div>

        <div class="event-card__tags">
          <span
            v-for="tag in event.tags"
            :key="tag.label"
            class="event-tag"
            :class="`event-tag--${tag.type || 'default'}`"
          >{{ tag.label }}</span>
        </div>

        <h3 class="event-card__title">{{ event.title }}</h3>
        <p class="event-card__desc">{{ event.description }}</p>

        <div class="event-card__who">
          <span class="who-label">WHO ATTENDS</span>
          <div class="who-list">
            <span v-for="person in event.whoAttends" :key="person" class="who-item">{{ person }}</span>
          </div>
        </div>

        <a :href="event.ctaLink || '#'" class="event-card__cta">
          {{ event.ctaLabel }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </a>

    </div>
  </div>
</template>

<script setup>
defineProps({
  event: { type: Object, required: true },
})
</script>
