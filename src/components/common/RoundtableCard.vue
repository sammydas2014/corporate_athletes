<template>
  <article class="roundtable-card" :class="extraClass">

    <!-- Image area with date badge -->
    <div class="roundtable-card__image" :style="imageBg">
      <div v-if="card.day" class="roundtable-card__date">
        <span class="date-day">{{ card.day }}</span>
        <span class="date-month">{{ card.month }}</span>
      </div>
    </div>

    <!-- Body -->
    <div class="roundtable-card__body" :style="cardBg ? { background: cardBg } : {}">

      <div v-if="card.tags?.length" class="roundtable-card__tags">
        <span
          v-for="tag in card.tags"
          :key="tag.label"
          class="event-tag"
          :class="`event-tag--${tag.type || 'muted'}`"
        >{{ tag.label }}</span>
      </div>

      <h3 class="roundtable-card__title">{{ card.title }}</h3>
      <p class="roundtable-card__desc">{{ card.description }}</p>

      <div v-if="card.whoAttends?.length" class="roundtable-card__who">
        <span class="who-label">WHO ATTENDS</span>
        <div class="who-list">
          <span v-for="person in card.whoAttends" :key="person" class="who-item">{{ person }}</span>
        </div>
      </div>

      <!-- <a :href="card.ctaLink || '#'" class="roundtable-card__cta">
        {{ card.ctaLabel || 'Request Invitation' }}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </a> -->
      <BaseButton @click="() => handleInviteClick(card?.id)" class="roundtable-card__cta">
        {{ card.ctaLabel || 'Request Invitation' }}
        <template #icon_right>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
        </template>
      </BaseButton>

    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  card:       { type: Object, required: true },
  extraClass: { type: [String, Array, Object], default: '' },
  cardBg:     { type: String, default: '' },
})

const imageBg = computed(() => ({
  backgroundImage: props.card.bgImage ? `url(${props.card.bgImage})` : undefined,
}))

function handleInviteClick(){
  router.push({ name: 'event-details', params: { id: props.card.id } });
}
</script>
