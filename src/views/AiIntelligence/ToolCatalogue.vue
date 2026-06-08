<template>
  <div class="tool-catalogue">
    <Herobanner :title="toolCatalogueBannerData.title" :subtitle="toolCatalogueBannerData.subtitle"
      :bg-color="toolCatalogueBannerData.bgColor" :image-url="toolCatalogueBannerData.imageUrl"
      :image-alt="toolCatalogueBannerData.imageAlt" :min-height="toolCatalogueBannerData.minHeight"
      class="toolCatalogue_bnr" />
    <div class="catalougue-list-sec">
      <div class="container">
        <div class="hdng-dtls">
          <span class="title__eyebrow"> Catalogue </span>
          <h2 class="sec__title">AI Vendor Reviews</h2>
        </div>
        <Catalougue :items-per-page="ITEMS_PER_PAGE" :page="currentPage" />
        <AppPagination v-model="currentPage" :total-pages="totalPages" />
      </div>
    </div>
    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import AppPagination from '@/components/common/Apppagination.vue';
import Catalougue from './sections/Catalougue.vue';
import { aiTools, toolCatalogueBannerData, accelerateData } from '@/services/aiintelligence.service';
import Herobanner from '@/components/common/Herobanner.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';

const ITEMS_PER_PAGE = 12;

const currentPage = ref(1);
const totalPages = computed(() => Math.max(1, Math.ceil(aiTools.length / ITEMS_PER_PAGE)));
</script>
