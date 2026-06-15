<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Corporate Header Navigation -->
    <AppHeader />

    <!-- Routed Page Views Shell -->
    <main class="flex-grow-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Corporate Footer Section -->
    <AppFooter />
  </div>
</template>

<script setup>
console.log("Hrllo")
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<!-- fade transition styles live in src/assets/styles/base/common.css -->
