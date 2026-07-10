<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-white sticky-top shadow-sm py-3">
    <div class="container">
      <router-link to="/" class="navbar-brand d-flex align-items-center gap-2">
        <img :src="imageMap.logo" alt="Hero" />
      </router-link>

      <div class="d-flex align-items-center header-mobile-icons">

        <span class="search_icon text-dark fw-semibold" @click="toggleSearch">
          <i class="bi bi-search"></i>
        </span>
        <BaseButton to="/cart" class="cart_btn position-relative">
          <i class="bi bi-cart3"></i>
          <span v-if="isLoggedIn && shortlistCount >= 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary text-dark fw-semibold cart-badge">
            {{ shortlistCount }}
          </span>
        </BaseButton>
        <router-link to="/ai-intelligence/shortlist"
          class="d-flex align-items-center gap-2 position-relative text-dark fw-semibold">
          <i class="bi bi-heart"></i>
          <span v-if="isLoggedIn && shortlistCount >= 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary text-dark fw-semibold">
            {{ shortlistCount }}
          </span>
        </router-link>

        <div class="profile-wrap position-relative" ref="profileBtnRef">
          <button v-if="!isLoggedIn" class="btn-profile-icon" @click="loginModalOpen = true" title="Login">
            <img :src="imageMap.userIcon" alt="Login" class="profile-icon-img" />
          </button>
          <button v-else class="btn-profile-avatar" @click.stop="toggleProfile">
            <img :src="user?.avatar" :alt="user?.name" />
          </button>
          <transition name="profile-drop">
            <ul v-if="isLoggedIn && profileOpen" class="profile-dropdown profile-dropdown--left" role="menu">
              <li>
                <router-link to="/profile" class="profile-dropdown__item" @click="closeProfile">
                  <i class="bi bi-person"></i> My Profile
                </router-link>
              </li>
              <li>
                <button class="profile-dropdown__item profile-dropdown__item--logout" @click="logout">
                  <i class="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </transition>
        </div>
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
          <BaseButton to="/about" variant="secondary" class="call_btn">
            Book a Call
          </BaseButton>

          <span class="search_icon text-dark fw-semibold btn_wraps__icon" @click="toggleSearch">
            <i class="bi bi-search"></i>
          </span>

          <BaseButton to="/cart" class="cart_btn desktopCart position-relative">
            <i class="bi bi-cart3"></i>
            <span v-if="isLoggedIn && shortlistCount >= 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary text-dark fw-semibold cart-badge">
              {{ shortlistCount }}
            </span>
          </BaseButton>

          <router-link to="/ai-intelligence/shortlist"
            class="d-flex align-items-center gap-2 position-relative text-dark fw-semibold btn_wraps__icon">
            <i class="bi bi-heart"></i>
            <span v-if="isLoggedIn && shortlistCount >= 0"
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary text-dark fw-semibold">
              {{ shortlistCount }}
            </span>
          </router-link>

          <div class="profile-wrap desktopProfile position-relative" ref="desktopProfileBtnRef">

            <button v-if="!isLoggedIn" class="btn-profile-icon" @click="loginModalOpen = true" aria-label="Login"
              title="Login">
              <img :src="imageMap.userIcon" alt="Login" class="profile-icon-img" />
            </button>

            <button v-else class="btn-profile-avatar" @click.stop="toggleProfile" aria-label="Profile menu"
              :aria-expanded="profileOpen">
              <img :src="user?.avatar" :alt="user?.name" />
            </button>

            <transition name="profile-drop">
              <ul v-if="isLoggedIn && profileOpen" class="profile-dropdown" role="menu">
                <li class="profile-dropdown__header">
                  <img :src="user?.avatar" :alt="user?.name" />
                  <div>
                    <p class="profile-dropdown__name">{{ user?.name }}</p>
                    <p class="profile-dropdown__email">{{ user?.email }}</p>
                  </div>
                </li>
                <li role="separator" class="profile-dropdown__divider"></li>
                <li>
                  <router-link to="/profile" class="profile-dropdown__item" @click="closeProfile">
                    <i class="bi bi-person"></i> My Profile
                  </router-link>
                </li>
                <li>
                  <button class="profile-dropdown__item profile-dropdown__item--logout" @click="logout">
                    <i class="bi bi-box-arrow-right"></i> Logout
                  </button>
                </li>
              </ul>
            </transition>
          </div>

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

    <LoginModal v-model="loginModalOpen" />
  </header>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Collapse } from 'bootstrap'
import { storeToRefs } from 'pinia'
import { imageMap } from '@/assets/images/imageMap'
import BaseButton from '@/components/common/BaseButton.vue'
import LoginModal from '@/components/common/LoginModal.vue'
import { navItems } from '@/config/hrader.config'
import { shortlistedTools } from '@/services/shortlist.service'
import { useAuthStore } from '@/stores/auth.store'

const route = useRoute()
const shortlistCount = shortlistedTools.length

// ── Auth ───────────────────────────────────────────────────────────
const auth = useAuthStore()
const { isLoggedIn, user } = storeToRefs(auth)
const loginModalOpen = ref(false)
const profileOpen = ref(false)
const profileBtnRef = ref(null)
const desktopProfileBtnRef = ref(null)

function toggleProfile() {
  profileOpen.value = !profileOpen.value
}

function closeProfile() {
  profileOpen.value = false
}

function handleProfileOutsideClick(e) {
  if (profileOpen.value &&
    !profileBtnRef.value?.contains(e.target) &&
    !desktopProfileBtnRef.value?.contains(e.target)) {
    closeProfile()
  }
}

function logout() {
  auth.logout()
  closeProfile()
}

// ── Search ─────────────────────────────────────────────────────────
const searchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

// ── Mobile nav ─────────────────────────────────────────────────────
const navbarCollapseRef = ref(null)
const navOpen = ref(false)

// ── Dropdowns ──────────────────────────────────────────────────────
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
  handleProfileOutsideClick(e)
}

function handleEscape(e) {
  if (e.key === 'Escape') {
    closeDropdown()
    closeProfile()
  }
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

function setNavOpen() { navOpen.value = true }
function setNavClosed() { navOpen.value = false; openDropdown.value = null }
function closeNav() { Collapse.getOrCreateInstance(navbarCollapseRef.value).hide() }

watch(() => route.fullPath, () => {
  if (navOpen.value) closeNav()
  closeDropdown()
  closeProfile()
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
