<template>
  <div class="sidebar-wrapper mb-4">
    <!-- Desktop Sidebar Sidebar Panel -->
    <div class="d-none d-lg-block card border-0 shadow-sm overflow-hidden bg-white">
      <div class="card-header bg-primary text-white py-3 border-0">
        <h6 class="m-0 display-font fw-bold tracking-wider text-uppercase text-secondary text-sm">
          {{ title }}
        </h6>
      </div>
      <div class="list-group list-group-flush py-2">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="list-group-item list-group-item-action d-flex align-items-center justify-content-between border-0 px-4 py-3 text-primary transition-smooth"
        >
          <span class="fw-medium">{{ item.label }}</span>
          <i class="bi bi-chevron-right text-secondary small"></i>
        </router-link>
      </div>
    </div>

    <!-- Mobile Subnav Horizontal Swipe Bar -->
    <div class="d-lg-none py-2 bg-white shadow-sm border-bottom border-secondary border-opacity-10 position-sticky top-50 start-0 z-3 px-3 overflow-x-auto text-nowrap">
      <div class="d-flex align-items-center gap-2">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="mobile-subnav-chip px-3 py-2 rounded text-decoration-none fw-semibold transition-smooth text-primary bg-light"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  menuItems: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.sidebar-wrapper {
  position: sticky;
  top: 100px;
}

.list-group-item {
  font-size: 0.95rem;
  transition: var(--transition-smooth);
}

.list-group-item:hover {
  background-color: #fbf9f6;
  color: var(--bs-secondary) !important;
  padding-left: 1.75rem;
}

.router-link-active {
  background-color: #fbf9f6 !important;
  color: var(--bs-secondary) !important;
  border-left: 4px solid var(--bs-secondary) !important;
}

.router-link-active i {
  color: var(--bs-secondary) !important;
}

/* Mobile responsive chips style */
.mobile-subnav-chip {
  font-size: 0.85rem;
  border: 1px solid rgba(11, 59, 73, 0.08);
}

.mobile-subnav-chip.router-link-active {
  background-color: var(--bs-primary) !important;
  color: #fff !important;
  border-color: var(--bs-primary) !important;
  box-shadow: var(--shadow-subtle);
}

/* Hide scrollbars for chrome/safari */
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbars for firefox/IE */
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
