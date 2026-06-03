<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img :src="imageMap.logo" alt="Hero" />
      </router-link>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
        aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
          <li v-for="item in navItems" :key="item.label" :class="['nav-item', { dropdown: item.dropdown }]">
            <template v-if="item.dropdown">
              <span class="nav-link dropdown-toggle" :id="`${item.label.toLowerCase().replace(/\s+/g, '-')}-dropdown`"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{ item.label }}
              </span>
              <ul class="dropdown-menu bg-primary shadow-lg"
                :aria-labelledby="`${item.label.toLowerCase().replace(/\s+/g, '-')}-dropdown`">
                <li v-for="child in item.dropdown" :key="child.label">
                  <router-link :to="child.to" class="dropdown-item hover-gold" exact-active-class="active">
                    {{ child.label }}
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <router-link
              :to="item.to"
              class="nav-link"
              :exact-active-class="item.exact ? 'active' : ''"
              :active-class="item.exact ? '' : 'active'"
            >{{ item.label }}</router-link>
            </template>
          </li>
        </ul>
        <div class="d-flex align-items-center btn_wraps">
          <router-link to="/ai-intelligence/shortlist"
            class="d-flex align-items-center gap-2 position-relative text-dark fw-semibold">
            <i class="bi bi-heart"></i>
            <span v-if="shortlistCount >= 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary text-dark fw-semibold">
              {{ shortlistCount }}
            </span>
          </router-link>
          <span class="search_icon text-dark fw-semibold" @click="toggleSearch">
            <i class="bi bi-search"></i>
          </span>
          <BaseButton to="/about" variant="secondary" class="call_btn">Book a Strategy Call</BaseButton>
        </div>
      </div>
    </div>
    <div class="search-overlay" :class="{ open: searchOpen }">
      <div class="container">
        <div class="search-inner">
          <i class="bi bi-search text-muted"></i>
          <input ref="searchInputRef" v-model="searchQuery" type="text" class="search-input"
            placeholder="Search solutions, insights, case studies…" @keydown.escape="closeSearch" />
          <button class="btn-close-search" @click="closeSearch" aria-label="Close search">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-if="searchOpen" class="search-backdrop" @click="closeSearch"></div>
  </header>
</template>

<script setup>
import { ref, nextTick, computed } from 'vue'  // remove onMounted/onUnmounted
import { useShortlist } from '@/composables/useShortlist';
import { imageMap } from '@/assets/images/imageMap';
import BaseButton from '@/components/common/BaseButton.vue';

const { shortlistedTools } = useShortlist();
const shortlistCount = computed(() => shortlistedTools.value.length);

const navItems = [
  { label: 'Home', to: '/', exact: true },
  {
    label: 'Solutions',
    dropdown: [
      { label: 'Solutions Overview', to: '/solutions' },
      { label: 'AI Strategy & Governance', to: '/solutions/ai-strategy-governance' },
      { label: 'AI Implementation & Scaling', to: '/solutions/ai-implementation-scaling' },
      { label: 'Finance Shared Services', to: '/solutions/finance-shared-services' },
      { label: 'Digital Operating Model', to: '/solutions/digital-operating-model' },
      { label: 'Data & Analytics Practice', to: '/solutions/data-analytics' }
    ]
  },
  {
    label: 'AI Intelligence',
    dropdown: [
      { label: 'AI Intelligence Overview', to: '/ai-intelligence' },
    ]
  },
  { label: 'Case Studies', to: '/case-studies' },
  {
    label: 'Insights',
    dropdown: [
      { label: 'Insights Dashboard', to: '/insights' },
      { label: 'Advisory Articles', to: '/insights/articles' },
      { label: 'AI Deep Dives', to: '/insights/deep-dives' },
      { label: 'Transformation Playbooks', to: '/insights/playbooks' },
      { label: 'Consortium Contributions', to: '/insights/consortium-contributions' }
    ]
  },
  { label: 'About', to: '/about' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' }
];

const searchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

function toggleSearch() {
  searchOpen.value = !searchOpen.value
  if (searchOpen.value) {
    nextTick(() => searchInputRef.value?.focus())
  } else {
    searchQuery.value = ''
  }
}

function closeSearch() {
  searchOpen.value = false
  searchQuery.value = ''
}
</script>

<style scoped>
.navbar {
  border-bottom: 2px solid rgba(197, 155, 108, 0.2);
}

.nav-link {
  font-size: 15px;
  line-height: 1;
  font-weight: 400;
  transition: var(--bs-transition);
  color: var(--bs-dark);
  letter-spacing: -0.04em;
}

.navbar-nav .nav-link.active,
.navbar-nav .nav-link.show,
.nav-link:hover,
.nav-link:focus,
.nav-link:hover {
  color: var(--bs-secondary) !important;
  line-height: 1;
  font-weight: 400 !important;
}

.tracking-wide {
  letter-spacing: 0.05em;
}

.dropdown-menu {
  background-color: var(--bs-primary) !important;
  border-radius: 0;
  padding: 0.5rem 0;
  min-width: 220px;
}

.dropdown-item {
  font-weight: normal;
  padding: 0.6rem 1.5rem;
  transition: var(--bs-transition);
  color: rgba(255, 255, 255, 0.75) !important;
  font-size: 15px;
}

.dropdown-item:hover,
.dropdown-item:focus {
  background-color: rgba(255, 255, 255, 0.05) !important;
  color: var(--bs-secondary) !important;
}

.dropdown-item.active {
  background-color: rgba(255, 255, 255, 0.08) !important;
  color: var(--bs-secondary) !important;
  font-weight: 600;
}

.hover-gold:hover {
  color: var(--bs-secondary) !important;
}

.btn.call_btn {
  font-size: 13px;
  font-weight: normal;
  height: 41px;
  padding-inline: 24px;
  font-weight: 600 !important;
  letter-spacing: 0.05em;
}

.navbar-nav .dropdown-toggle::after {
  display: inline-block;
  margin-left: 6px;
  vertical-align: bottom;
  content: "\F282";
  font-family: 'bootstrap-icons';
  border: none;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 600;
}

.search-overlay {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s;
  z-index: 99;
}

.search-overlay.open {
  max-height: 72px;
  /* enough for the input row */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* .container already constrains inner content */
.search-inner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  background: transparent;
}

.btn-close-search {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  padding: 4px;
}

.search-backdrop {
  position: fixed;
  inset: 0;
  z-index: 98;
}

.search_icon {
  cursor: pointer;
}

.btn_wraps {
  gap: 20px;
  margin-left: 20px;
}

.dropdown:has(.dropdown-menu li > .router-link-active.active) .dropdown-toggle,
.router-link-active.active {
  color: var(--bs-secondary) !important;
}

.navbar-expand-lg .navbar-nav .dropdown-menu {
  top: 68px;
  border: none;
}
</style>
