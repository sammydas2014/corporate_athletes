<template>
  <section class="hero-banner" :style="sectionStyle">

    <!-- Background image layer -->
    <div v-if="bgImage" class="hero-banner__bg" :style="{ backgroundImage: `url(${bgImage})` }"></div>

    <!-- Overlay layer (gradient or solid color) -->
    <div v-if="showOverlay" class="hero-banner__overlay"></div>

    <div class="container hero-banner__container">

      <!-- Main row -->
      <div class="row align-items-center g-0">

        <!-- Left: text content -->
        <div :class="['hero-banner__content', hasVisual ? 'col-12 col-lg-6' : 'col-12']">

          <!-- Breadcrumb -->
          <div v-if="breadcrumbs && breadcrumbs.length" class="hero-banner__breadcrumb-row">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb mb-0 flex items-center">
                <li class="breadcrumb-item">
                  <span class="breadcrumb-home">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.5 4.29247V1.49947C16.5 1.08547 16.1647 0.749469 15.75 0.749469C15.3352 0.749469 15 1.08547 15 1.49947V3.27397L11.0977 0.640719C9.8235 -0.218781 8.1765 -0.218781 6.90225 0.640719L1.65225 4.18372C0.618 4.88197 0 6.04372 0 7.29247V14.2495C0 16.3172 1.68225 17.9995 3.75 17.9995H6C6.41475 17.9995 6.75 17.6635 6.75 17.2495V11.2495C6.75 10.8362 7.086 10.4995 7.5 10.4995H10.5C10.914 10.4995 11.25 10.8362 11.25 11.2495V17.2495C11.25 17.6635 11.5852 17.9995 12 17.9995H14.25C16.3177 17.9995 18 16.3172 18 14.2495V7.29247C18 6.10672 17.442 4.99897 16.5 4.29247ZM16.5 14.2495C16.5 15.49 15.4905 16.4995 14.25 16.4995H12.75V11.2495C12.75 10.009 11.7405 8.99947 10.5 8.99947H7.5C6.2595 8.99947 5.25 10.009 5.25 11.2495V16.4995H3.75C2.5095 16.4995 1.5 15.49 1.5 14.2495V7.29247C1.5 6.54322 1.8705 5.84572 2.4915 5.42722L7.7415 1.88422C8.5065 1.36822 9.4935 1.36822 10.2577 1.88422L15.5077 5.42722C16.1287 5.84572 16.4993 6.54322 16.4993 7.29247L16.5 14.2495Z"
                        fill="#E9EEF2" fill-opacity="0.55" />
                    </svg>
                  </span>
                </li>
                <li v-for="(crumb, i) in breadcrumbs" :key="i" class="breadcrumb-item"
                  :class="{ active: i === breadcrumbs.length - 1 }">
                  <router-link v-if="crumb.href && i !== breadcrumbs.length - 1" :to="crumb.href">{{ crumb.label
                  }}</router-link>
                  <span v-else>{{ crumb.label }}</span>
                </li>
              </ol>
            </nav>
          </div>

          <!-- Back link (mobile) -->
          <div v-if="backLink" class="hero-banner__back-row">
            <a :href="backLink.href" class="back-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              {{ backLink.label }}
            </a>
          </div>

          <!-- Tag pills -->
          <div v-if="tags && tags.length" class="d-flex flex-wrap gap-2 mb-3">
            <span v-for="tag in tags" :key="tag.label" class="banner-tag"
              :class="`banner-tag--${tag.type || 'default'}`">
              <span v-if="tag.prefix" class="tag-prefix">{{ tag.prefix }}:</span>
              {{ tag.label }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="hero-banner__title" v-html="title"></h1>

          <!-- Subtitle -->
          <p v-if="subtitle" class="hero-banner__subtitle">{{ subtitle }}</p>

          <!-- CTA buttons -->
          <div v-if="ctas && ctas.length" class="d-flex flex-wrap btn_wrp mt-4">
            <BaseButton v-for="(cta, i) in ctas" :key="i" :href="cta.href || '#'"
              :variant="mapCtaStyleToVariant(cta.style)" class="banner-btn" @click.prevent="$emit('cta-click', cta)">
              {{ cta.label }}
            </BaseButton>
          </div>

          <!-- Meta icon row -->
          <div v-if="meta && meta.length" class="d-flex flex-wrap gap-4 mt-4">
            <div v-for="item in meta" :key="item.label" class="meta-item d-flex align-items-center gap-2">
              <span class="meta-icon">
                <svg v-if="item.icon === 'download'" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 20h14v-2H5v2zM12 16l6-6h-4V4H10v6H6l6 6z" />
                </svg>
                <svg v-else-if="item.icon === 'diagnostic'" width="15" height="15" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
                </svg>
                <svg v-else-if="item.icon === 'canvas'" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                </svg>
              </span>
              <span class="meta-label">{{ item.label }}</span>
            </div>
          </div>

        </div>

        <!-- Right: static image or custom slot -->
        <div v-if="hasVisual" class="col-12 col-lg-6 hero-banner__visual-col">
          <slot name="visual">
            <img v-if="imageUrl" :src="imageUrl" :alt="imageAlt || title" class="banner-inline-img" />
          </slot>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, useSlots } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

const props = defineProps({
  // ─── Text ─────────────────────────────────────────────────────
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },

  // ─── Background ───────────────────────────────────────────────
  bgColor: { type: String, default: '#040e1c' },
  bgImage: { type: String, default: '' },

  // ─── Overlay ──────────────────────────────────────────────────
  overlay: { type: Boolean, default: false },
  overlayGradient: { type: String, default: '' },
  overlayColor: { type: String, default: '' },

  // ─── Right-side image ─────────────────────────────────────────
  imageUrl: { type: String, default: '' },
  imageAlt: { type: String, default: '' },

  // ─── Accent shape ─────────────────────────────────────────────
  showAccent: { type: Boolean, default: false },
  accentColor: { type: String, default: '#1b9aaa' },

  // ─── Navigation ───────────────────────────────────────────────
  breadcrumbs: { type: Array, default: () => [] },
  backLink: { type: Object, default: null },

  // ─── Content blocks ───────────────────────────────────────────
  ctas: { type: Array, default: () => [] },

  tags: { type: Array, default: () => [] },

  meta: { type: Array, default: () => [] },

  minHeight: { type: String, default: '380px' },
})

defineEmits(['cta-click'])

const slots = useSlots()

const hasVisual = computed(() => !!props.imageUrl || !!slots.visual)

const sectionStyle = computed(() => ({
  backgroundColor: props.bgColor,
  minHeight: props.minHeight,
  '--banner-accent-color': props.accentColor,
}))

const showOverlay = computed(() => {
  return props.overlay || !!props.overlayColor || (!!props.overlayGradient && props.overlayGradient.toLowerCase() !== 'none')
})

const mapCtaStyleToVariant = (style = '') => {
  if (style === 'outline') return 'outline-white'
  if (style === 'teal') return 'secondary'
  if (style === 'custom') return 'primary'
  return style || 'primary'
}
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  overflow: hidden;
  color: var(--banner-text);
}

.hero-banner__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  z-index: 0;
}

.hero-banner__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  bottom: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background: linear-gradient(180.00deg, rgba(20, 22, 23, 0) 2.708%, rgba(20, 22, 23, 0) 26.926%, rgba(20, 22, 23, 0) 49.512%, rgba(20, 22, 23, 0.71) 81.145%, rgba(20, 22, 23, 1) 100%);
}

.hero-banner__container {
  position: relative;
  z-index: 10;
}

.btn_wrp{
  gap: 10px;
}

/* ─── Breadcrumb ─── */
.hero-banner__breadcrumb-row {
  padding-top: 0;
  padding-bottom: 30px;
}

.breadcrumb {
  display: flex;
  align-items: center;
}

.breadcrumb-item {
  font-size: 15px;
  line-height: 1;
}

.breadcrumb-item,
.breadcrumb-item+.breadcrumb-item::before {
  color: #E9EEF28F;
}

.breadcrumb-item+.breadcrumb-item::before {
  content: " \F285 " !important;
  font-family: 'bootstrap-icons';
  font-size: 13px;
  margin-top: 1px;
}

.breadcrumb-item a {
  color: #E9EEF28F;
  text-decoration: none;
  transition: var(--bs-transition);
}

.breadcrumb-item a:hover {
  color: var(--bs-secondary);
}

.breadcrumb-item.active {
  color: var(--bs-secondary);
}

.breadcrumb-home {
  display: inline-flex;
  align-items: center;
  color: #E9EEF28F;
}

.breadcrumb-home svg {
  width: 16px;
  height: 16px;
}

/* ─── Back link ─── */
.hero-banner__back-row {
  padding-top: 1rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  color: var(--banner-accent-color);
  text-decoration: none;
  transition: opacity 0.18s;
}

.back-link:hover {
  opacity: 0.7;
}

/* ─── Text content column ─── */
.hero-banner__content {
  padding-block: 50px;
}

/* ─── Tag pills ─── */
.banner-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.24rem;
  font-size: 0.67rem;
  font-weight: 600;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  padding: 0.25rem 0.65rem;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.09);
  color: var(--banner-muted);
  border: 1px solid rgba(255, 255, 255, 0.13);
}

.banner-tag--stage {
  background: rgba(27, 154, 170, .22);
  border-color: rgba(27, 154, 170, .48);
  color: #6dd5e3;
}

.banner-tag--time {
  background: rgba(255, 255, 255, .07);
}

.banner-tag--complexity {
  background: rgba(255, 200, 80, .14);
  border-color: rgba(255, 200, 80, .38);
  color: #ffd97a;
}

.banner-tag--function {
  background: rgba(100, 180, 255, .13);
  border-color: rgba(100, 180, 255, .38);
  color: #8ecfff;
}

.tag-prefix {
  opacity: 0.5;
  margin-right: 1px;
}

/* ─── Subtitle ─── */
.hero-banner__subtitle {
  color: #e9eef2;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.04em;
  margin-bottom: 30px;
}


/* ─── Meta row ─── */
.meta-item {
  font-size: 0.74rem;
  color: var(--banner-muted);
  letter-spacing: 0.02em;
}

.meta-icon {
  display: inline-flex;
  color: var(--banner-accent-color);
}

/* ─── Right image column ─── */
.hero-banner__visual-col {
  display: flex;
  align-items: stretch;
  min-height: 280px;
}

.banner-inline-img {
  width: 100%;
  height: 100%;
  max-height: 420px;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* ─── Entrance animation ─── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-banner__content>* {
  animation: fadeUp 0.5s ease both;
}

.hero-banner__content>*:nth-child(1) {
  animation-delay: 0.05s;
}

.hero-banner__content>*:nth-child(2) {
  animation-delay: 0.12s;
}

.hero-banner__content>*:nth-child(3) {
  animation-delay: 0.20s;
}

.hero-banner__content>*:nth-child(4) {
  animation-delay: 0.28s;
}

.hero-banner__content>*:nth-child(5) {
  animation-delay: 0.36s;
}

/* ─── Responsive ─── */
@media (max-width: 991px) {
  .hero-banner__visual-col {
    min-height: 240px;
  }
}

@media (max-width: 767px) {
  .hero-banner__content {
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }

  .hero-banner__title {
    font-size: clamp(1.7rem, 7vw, 2.3rem);
  }

  .hero-banner__subtitle {
    max-width: 100%;
  }

  .hero-banner__visual-col {
    min-height: 200px;
  }

  .banner-inline-img {
    max-height: 220px;
  }

  .banner-btn {
    font-size: 0.68rem;
    padding: 0.6rem 1.1rem;
  }
}
</style>