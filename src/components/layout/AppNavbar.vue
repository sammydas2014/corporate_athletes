<template>
  <nav class="subnav-bar py-2 bg-white shadow-sm border-bottom border-secondary border-opacity-10 position-sticky top-0 start-0 z-3 px-3 overflow-x-auto text-nowrap">
    <div class="d-flex align-items-center gap-2">
      <router-link
        v-for="item in menuItems"
        :key="item.path"
        :to="item.path"
        class="subnav-chip px-3 py-2 rounded text-decoration-none fw-semibold transition-smooth"
      >
        {{ item.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.subnav-bar {
  scrollbar-width: none;
}
.subnav-bar::-webkit-scrollbar {
  display: none;
}
.subnav-chip {
  color: var(--color-primary);
  background: var(--bs-light);
  white-space: nowrap;
}
.subnav-chip.router-link-active {
  background: var(--color-primary);
  color: #fff;
}
</style>
