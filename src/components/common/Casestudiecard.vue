<template>
  <article class="casestudie-card" :class="cardClass">

    <div class="casestudie-card__media">
      <img :src="image" :alt="title" class="casestudie-card__img" />

      <span v-if="category" class="casestudie-card__category">
        {{ category }}
      </span>
    </div>

    <div class="casestudie-card__info">
      <div class="casestudie-card__info-left">
        <h3 class="casestudie-card__title">{{ title }}</h3>

        <p v-if="speciality" class="casestudie-card__speciality">
          {{ speciality }}
        </p>

        <div class="btm_wrp_con">
          <p v-if="description" class="casestudie-card__desc">
            {{ description }}
          </p>

          <div v-if="meta || badges?.length" class="casestudie-card__meta d-flex align-items-center flex-wrap">
            <span v-if="meta" class="casestudie-card__meta-label">{{ meta }}</span>
            <component :is="badge.route ? 'router-link' : 'span'" v-for="badge in badges" :key="badge.label"
              :to="badge.route || undefined" class="casestudie-card__badge"
              :class="`casestudie-card__badge--${badge.type || 'default'}`">
              <i v-if="badge.type === 'down'" class="bi bi-arrow-down-short me-1"></i>
              <i v-else-if="badge.type === 'up'" class="bi bi-arrow-up-short me-1"></i>
              {{ badge.label }}
            </component>
          </div>
        </div>
      </div>

      <router-link :to="`/case-studies/${id}`" class="casestudie-card__cta" :aria-label="`Learn more about ${title}`">
        <i class="bi bi-arrow-up-right-circle-fill"></i>
      </router-link>
    </div>
  </article>
</template>

<script setup>

const props = defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  speciality: { type: String, default: '' },
  description: { type: String, default: '' },
  category: { type: String, default: '' },
  meta: { type: String, default: '' },
  badges: { type: Array, default: () => [] },
  cardClass: { type: String, default: '' },
  // to: { type: [String, Object], default: '/' },
  id: { type: Number, required: true }
})
</script>

<!-- styles moved to src/assets/styles/components/Casestudiecard.css -->