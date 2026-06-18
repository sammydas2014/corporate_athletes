<template>
  <section class="lookback-section">

    <!-- Sliding marquee heading -->
    <div class="lookback-marquee-outer">
      <div class="lookback-marquee-track">
        <template v-for="n in 4" :key="n">
          <span class="lbm-word">BACK #2025</span>
          <span class="lbm-star">*</span>
          <span class="lbm-word">LOOK BACK</span>
        </template>
      </div>
    </div>

    <!-- Gallery grid -->
    <div class="container">
      <div class="lookback-gallery">
        <router-link
          v-for="item in items"
          :key="item.id"
          :to="{ name: 'look-back-detail', params: { id: item.id } }"
          class="lb-card"
          :class="{ 'lb-card--feature': item.feature }"
        >
          <div class="lb-card__bg" :style="{ backgroundImage: `url(${item.image})` }"></div>
          <div class="lb-card__overlay"></div>
          <div class="lb-card__content">
            <span v-if="item.date" class="lb-card__date">{{ item.date }}</span>
            <h3 class="lb-card__title">{{ item.title }}</h3>
          </div>
        </router-link>
      </div>
    </div>

  </section>
</template>

<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>
