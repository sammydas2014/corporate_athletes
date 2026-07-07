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
                role="button" :aria-expanded="openDropdown === item.label" @click.stop="toggleDropdown(item.label)">
                {{ item.label }}
              </span>
              <ul class="dropdown-menu bg-primary shadow-lg"
                :class="{ 'dropdown-menu--open': openDropdown === item.label }"
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
          <BaseButton to="/cart" variant="outline-light" class="cart_btn"><i class="bi bi-cart3"></i></BaseButton>

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

// Bootstrap's Dropdown (Popper-positioned) turned out unreliable here even
// on desktop, so nav-item submenus are fully custom at every breakpoint:
// plain Vue state + the `.dropdown-menu--open` class. CSS alone tells them
// apart visually (floating on desktop, inline in the slide-in panel).
const openDropdown = ref(null)

function toggleDropdown(label) {
  openDropdown.value = openDropdown.value === label ? null : label
}

function closeDropdown() {
  openDropdown.value = null
}

function handleOutsideClick(e) {
  if (openDropdown.value && !e.target.closest('.nav-item.dropdown')) {
    closeDropdown()
  }
}

function handleEscape(e) {
  if (e.key === 'Escape') closeDropdown()
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
  closeDropdown()
})

onMounted(() => {
  navbarCollapseRef.value?.addEventListener('show.bs.collapse', setNavOpen)
  navbarCollapseRef.value?.addEventListener('hidden.bs.collapse', setNavClosed)
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  navbarCollapseRef.value?.removeEventListener('show.bs.collapse', setNavOpen)
  navbarCollapseRef.value?.removeEventListener('hidden.bs.collapse', setNavClosed)
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>
