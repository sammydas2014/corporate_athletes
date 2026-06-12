<template>
  <section class="cstd_grid_sec list_cstd">
    <div class="container">
      <div class="sec__title">
        <h1 class="sec__title">Case Studies</h1>
      </div>

      <Casestudiecardgrid :items="pagedCaseStudies" :columns="3" />

      <AppPagination v-model="currentPage" :total-pages="totalPages" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import Casestudiecardgrid from '@/components/common/Casestudiecardgrid.vue';
import AppPagination from '@/components/common/Apppagination.vue';
import { caseStudiesGrid } from '@/services/casestudieslist.service';

const ITEMS_PER_PAGE = 6;

const currentPage = ref(1);

const totalPages = computed(() => Math.max(1, Math.ceil(caseStudiesGrid.length / ITEMS_PER_PAGE)));

const pagedCaseStudies = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE;
  return caseStudiesGrid.slice(start, start + ITEMS_PER_PAGE);
});
</script>
