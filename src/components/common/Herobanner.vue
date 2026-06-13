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
        <div :class="['hero-banner__content_col', hasVisual ? 'col-12 col-lg-7' : 'col-12']">
          <div class="hero-banner__content">
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

            <!-- Search input -->
            <div v-if="showSearch" class="hero-banner__search">
              <BaseInput v-model="searchQuery" :placeholder="searchPlaceholder" variant="banner"
                @keydown.enter="$emit('search', searchQuery)">
                <template v-if="searchIconPosition === 'left'" #icon-left>
                  <i class="bi bi-search"></i>
                </template>
                <template v-else #icon-right>
                  <button type="button" class="search-submit-btn" aria-label="Search"
                    @click="$emit('search', searchQuery)">
                    <i class="bi bi-search"></i>
                  </button>
                </template>
              </BaseInput>
            </div>

            <!-- Popular searches -->
            <div v-if="showSearch && popularSearches && popularSearches.length" class="hero-banner__popular">
              <span class="popular-label">Popular:</span>
              <button
                v-for="tag in popularSearches"
                :key="tag"
                class="popular-tag"
                :class="{ active: searchQuery === tag }"
                @click="onPopularTag(tag)"
              >{{ tag }}</button>
            </div>

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
                  <svg v-else-if="item.icon === 'canvas'" width="15" height="15" viewBox="0 0 24 24"
                    fill="currentColor">
                    <path
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
                  </svg>
                </span>
                <span class="meta-label">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: static image or custom slot -->
        <div v-if="hasVisual" class="col-12 col-lg-5 hero-banner__visual-col">
          <div class="hero-banner_img">
            <slot name="visual">
              <img v-if="imageUrl" :src="imageUrl" :alt="imageAlt || title" class="banner-inline-img" />
            </slot>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, useSlots } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseInput from '@/components/common/BaseInput.vue'

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

  // ─── Search ───────────────────────────────────────────────────
  showSearch: { type: Boolean, default: false },
  searchPlaceholder: { type: String, default: 'Search…' },
  popularSearches: { type: Array, default: () => [] },
  searchIconPosition: { type: String, default: 'left' },
})

const emit = defineEmits(['cta-click', 'search'])

const searchQuery = ref('')

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

function onPopularTag(tag) {
  searchQuery.value = tag
  emit('search', tag)
}

const mapCtaStyleToVariant = (style = '') => {
  if (style === 'outline') return 'outline-white'
  if (style === 'teal') return 'secondary'
  if (style === 'custom') return 'primary'
  return style || 'primary'
}
</script>
