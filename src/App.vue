<template>
  <div class="d-flex flex-column min-vh-100">
    <!-- Corporate Header Navigation -->
    <MainHeader />

    <!-- Routed Page Views Shell -->
    <main class="flex-grow-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Corporate Footer Section -->
    <MainFooter />
  </div>
</template>

<script setup>
import MainHeader from '@/components/layout/MainHeader.vue';
import MainFooter from '@/components/layout/MainFooter.vue';
</script>

<style>
/* Smooth View Transition fading */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
