<script setup>
import BaseBox from "@/components/common/BaseBox.vue";
import { useCasesData, comparisonData } from '@/services/tooldetails.service.js';
import UseCaseCard from "@/components/common/UseCaseCard.vue";
import ComparisonCard from "@/components/common/ComparisonCard.vue";
</script>
<template>
  <section class="useCase-sec">
    <div class="container">
      <div class="header-wraper">
        <div class="content-wrap">
          <h2 class="sec-title">Use Cases by Function</h2>
          <BaseBox>
            <template v-for="(item, index) in useCasesData" :key="index">

              <UseCaseCard :logo="item.logo" :title="item.title" :description="item.description" />
            </template>
          </BaseBox>
        </div>
        <div class="content-wrap">
          <h2 class="sec-title">Use Cases by Function</h2>
          <BaseBox>
            <div class="innr-wraper">
              <template v-for="(data, sectionKey) in comparisonData" :key="sectionKey">
                <ComparisonCard :data="data" :sectionKey="sectionKey" />
              </template>
            </div>

          </BaseBox>
        </div>

      </div>
    </div>
  </section>
</template>
