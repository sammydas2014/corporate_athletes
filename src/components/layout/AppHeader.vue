<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img :src="imageMap.logo" alt="Hero" />
      </router-link>

      <div class="d-flex align-items-center header-mobile-icons">
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
      </div>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
        aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"><i class="bi bi-list"></i></span>
      </button>

      <div class="collapse navbar-collapse" id="mainNavbar" ref="navbarCollapseRef">
        <button type="button" class="navbar-close-btn" @click="closeNav" aria-label="Close menu">
          <i class="bi bi-x-lg"></i>
        </button>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-3">
          <li v-for="item in navItems" :key="item.label" :class="['nav-item', { dropdown: item.dropdown }]">
            <template v-if="item.dropdown">
              <span class="nav-link dropdown-toggle" :id="`${item.label.toLowerCase().replace(/\s+/g, '-')}-dropdown`"
                role="button" :data-bs-toggle="isCompact ? null : 'dropdown'"
                :aria-expanded="isCompact ? openDropdown === item.label : false"
                @click="isCompact && toggleDropdown(item.label)">
                {{ item.label }}
              </span>
              <ul class="dropdown-menu bg-primary shadow-lg" :class="{ 'dropdown-menu--open': isCompact && openDropdown === item.label }"
                :aria-labelledby="`${item.label.toLowerCase().replace(/\s+/g, '-')}-dropdown`">
                <li v-for="child in item.dropdown" :key="child.label">
                  <router-link :to="child.to" class="dropdown-item hover-gold" exact-active-class="active">
                    {{ child.label }}
                  </router-link>
                </li>
              </ul>
            </template>
            <template v-else>
              <router-link :to="item.to" class="nav-link" :exact-active-class="item.exact ? 'active' : ''"
                :active-class="item.exact ? '' : 'active'">{{ item.label }}</router-link>
            </template>
          </li>
        </ul>
        <div class="d-flex align-items-center btn_wraps">
          <router-link to="/ai-intelligence/shortlist"
            class="d-flex align-items-center gap-2 position-relative text-dark fw-semibold btn_wraps__icon">
            <i class="bi bi-heart"></i>
            <span v-if="shortlistCount >= 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary text-dark fw-semibold">
              {{ shortlistCount }}
            </span>
          </router-link>
          <span class="search_icon text-dark fw-semibold btn_wraps__icon" @click="toggleSearch">
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
    <div class="navbar-backdrop" :class="{ show: navOpen }" @click="closeNav"></div>
  </header>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Collapse } from 'bootstrap'
import { imageMap } from '@/assets/images/imageMap';
import BaseButton from '@/components/common/BaseButton.vue';
import { navItems } from '@/config/hrader.config';
import { shortlistedTools } from '@/services/shortlist.service';

const route = useRoute()

const shortlistCount = shortlistedTools.length;

const searchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

const navbarCollapseRef = ref(null)
const navOpen = ref(false)

const compactQuery = window.matchMedia('(max-width: 1023px)')
const isCompact = ref(compactQuery.matches)

function updateIsCompact(e) {
  isCompact.value = e.matches
}

const openDropdown = ref(null)

function toggleDropdown(label) {
  openDropdown.value = openDropdown.value === label ? null : label
}

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

function setNavOpen() {
  navOpen.value = true
}

function setNavClosed() {
  navOpen.value = false
  openDropdown.value = null
}

function closeNav() {
  Collapse.getOrCreateInstance(navbarCollapseRef.value).hide()
}

watch(() => route.fullPath, () => {
  if (navOpen.value) closeNav()
})

onMounted(() => {
  navbarCollapseRef.value?.addEventListener('show.bs.collapse', setNavOpen)
  navbarCollapseRef.value?.addEventListener('hidden.bs.collapse', setNavClosed)
  compactQuery.addEventListener('change', updateIsCompact)
})

onUnmounted(() => {
  navbarCollapseRef.value?.removeEventListener('show.bs.collapse', setNavOpen)
  navbarCollapseRef.value?.removeEventListener('hidden.bs.collapse', setNavClosed)
  compactQuery.removeEventListener('change', updateIsCompact)
})
</script>
