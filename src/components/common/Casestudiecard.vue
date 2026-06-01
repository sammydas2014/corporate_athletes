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

      <router-link :to="to" class="casestudie-card__cta" :aria-label="`Learn more about ${title}`">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </router-link>
    </div>
  </article>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  speciality: { type: String, default: '' },
  description: { type: String, default: '' },
  category: { type: String, default: '' },
  meta: { type: String, default: '' },
  badges: { type: Array, default: () => [] },
  cardClass: { type: String, default: '' },
  to: { type: [String, Object], default: '/' },
})
</script>

<style scoped>
.casestudie-card {
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  background: var(--bs-white);
  transition: var(--bs-transition);
}

.casestudie-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.15);
}

.casestudie-card__media {
  position: relative;
  width: 100%;
  max-height: 510px;
  overflow: hidden;
}

.casestudie-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: var(--bs-transition);
}

.casestudie-card:hover .casestudie-card__img {
  transform: scale(1.04);
}

.casestudie-card__category {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 13px;
  line-height: 1;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--bs-secondary);
  background: var(--bs-white);
  border-radius: var(--bs-border-radius-pill);
  padding: 7px 15px;
  border: 1px solid var(--bs-secondary);
}

.casestudie-card__info {
  background: var(--bs-white);
  border-radius: var(--border-radius-sm);
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.casestudie-card__info-left {
  flex: 1;
  min-width: 0;
}

.casestudie-card__title {
  font-size: 18px;
  font-weight: 600;
  color: var(--bs-dark);
  margin: 0;
  line-height: 1.25;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
}

.casestudie-card__speciality {
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--bs-secondary);
  margin-bottom: 5px;
  line-height: 1.3;
}

.casestudie-card__desc {
  font-size: 15px;
  line-height: 1.5;
  color: var(--bs-body-color);
  margin: 0;
}

.casestudie-card__meta-label {
  font-size: 15px;
  line-height: 1.5;
  color: var(--bs-body-color);
}

.casestudie-card__badge {
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  line-height: 1;
  font-weight: 600;
  padding: 3px 7px 3px 3px;
  border-radius: var(--bs-border-radius-pill, 50rem);
  line-height: 1;
  flex: 0 0 auto;
  margin-left: 10px;
}

.casestudie-card__badge i {
  flex: 0 0 auto;
  font-size: 15px;
  line-height: 0;
  font-size: 20px;
}

.casestudie-card__badge--down {
  background: #F9B6B64A;
  color: #EA4242;
  border: 1px solid #FF7878;
}

.casestudie-card__badge--up {
  background: #D4FAD021;
  color: #25A919;
  border: 1px solid #25A9197A;
}

.casestudie-card__badge--default {
  background: var(--color-surface, #f6f7f9);
  color: var(--bs-body-color, #6b7280);
  border: 1px solid var(--bs-border-color, #d8dee6);
}

.casestudie-card__cta {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: var(--bs-primary);
  color: var(--bs-white);
  cursor: pointer;
  transition: var(--bs-transition, all 0.3s ease-in-out);
  padding: 0;
  align-self: flex-end;
}

.casestudie-card__cta:hover {
  background: var(--bs-secondary);
  transform: scale(1.08);
}

.btm_wrp_con {
  display: flex;
  gap: 10px;
}
</style>