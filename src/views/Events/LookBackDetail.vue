<template>
  <div class="lbd-page" v-if="session">

    <!-- Hero -->
    <div class="lbd-hero" :style="{ backgroundImage: `url(${session.image})` }">
      <div class="lbd-hero__overlay"></div>
      <div class="container lbd-hero__inner">
        <router-link :to="{ name: 'events' }" class="lbd-back">
          <i class="bi bi-arrow-left"></i> Back to Events
        </router-link>
        <div class="lbd-hero__meta">
          <span v-if="session.date" class="lbd-hero__date">{{ session.date }}</span>
          <span v-if="session.type" class="lbd-hero__type">{{ session.type }}</span>
        </div>
        <h1 class="lbd-hero__title">{{ session.title }}</h1>
        <p v-if="session.location" class="lbd-hero__location">
          <i class="bi bi-geo-alt"></i> {{ session.location }}
        </p>
      </div>
    </div>

    <!-- Body -->
    <div class="lbd-body">
      <div class="container lbd-body__inner">

        <!-- Description -->
        <div class="lbd-section">
          <h2 class="lbd-section__heading">About this session</h2>
          <p class="lbd-section__text">{{ session.description }}</p>
        </div>

        <!-- Key themes (static illustration content) -->
        <div class="lbd-section">
          <h2 class="lbd-section__heading">Key themes covered</h2>
          <ul class="lbd-themes">
            <li>Practical frameworks drawn from operator experience</li>
            <li>Vendor-independent perspectives on the AI landscape</li>
            <li>Peer discussion under Chatham House rules</li>
            <li>Follow-up synthesis circulated to attendees only</li>
          </ul>
        </div>

        <!-- CTA -->
        <div class="lbd-cta">
          <p class="lbd-cta__text">Interested in attending a future session on this topic?</p>
          <router-link :to="{ name: 'events' }" class="btn btn-primary lbd-cta__btn">
            View Upcoming Events
          </router-link>
        </div>

      </div>
    </div>

  </div>

  <!-- 404 fallback -->
  <div v-else class="container lbd-not-found">
    <p>Session not found.</p>
    <router-link :to="{ name: 'events' }">Back to Events</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { lookBackData } from '@/services/events.service'

const route = useRoute()
const session = computed(() =>
  lookBackData.items.find(item => String(item.id) === String(route.params.id))
)
</script>

<style lang="scss">
@use '@/assets/styles/base' as *;

.lbd-page {
  min-height: 100vh;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
.lbd-hero {
  position: relative;
  min-height: 520px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.75) 100%);
  }

  &__inner {
    position: relative;
    z-index: 2;
    padding-bottom: 60px;
    padding-top: 100px;
  }

  &__meta {
    display: flex;
    gap: 12px;
    margin-bottom: 18px;
  }

  &__date,
  &__type {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
    background: rgba(255,255,255,0.12);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 4px;
    padding: 4px 12px;
  }

  &__title {
    font-size: clamp(28px, 5vw, 50px);
    font-weight: 700;
    letter-spacing: -0.04em;
    color: #fff;
    line-height: 1.1;
    max-width: 780px;
    margin-bottom: 18px;
  }

  &__location {
    font-size: 15px;
    color: rgba(255,255,255,0.65);
    margin: 0;

    i { margin-right: 6px; }
  }
}

.lbd-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  margin-bottom: 40px;
  transition: color 0.2s;

  &:hover { color: #fff; }
}

// ─── Body ─────────────────────────────────────────────────────────────────────
.lbd-body {
  background: #fff;

  &__inner {
    padding-top: 70px;
    padding-bottom: 80px;
    max-width: 760px;
  }
}

.lbd-section {
  margin-bottom: 48px;

  &__heading {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: #1a1d21;
    margin-bottom: 16px;
  }

  &__text {
    font-size: 17px;
    line-height: 1.7;
    color: #4a5568;
    margin: 0;
  }
}

.lbd-themes {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 16px;
    line-height: 1.5;
    color: #4a5568;

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $color-primary;
      flex-shrink: 0;
      margin-top: 9px;
    }
  }
}

.lbd-cta {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e5e9ef;
  display: flex;
  align-items: center;
  gap: 28px;

  &__text {
    font-size: 16px;
    color: #4a5568;
    margin: 0;
    flex: 1;
  }

  &__btn {
    flex-shrink: 0;
  }
}

.lbd-not-found {
  padding: 120px 0;
  text-align: center;
}
</style>
