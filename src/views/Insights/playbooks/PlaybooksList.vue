<template>
  <div class="playbooks-list">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :min-height="bannerData.minHeight" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas" class="deepdrive-bnnr articles_bnr" />
    <section class="deepdrive-sec">
      <div class="container">
        <div class="deepdrive-inner">
          <template v-for="(data, index) in lensData" :key="index">
            <LensCard :logo="data.imageSrc" :title="data.title" :description="data.details" />
          </template>
        </div>
      </div>
    </section>
    <section class="guide-sec">
      <div class="container">
        <div class="top-wrap">
          <div class="left-prt">
            <span class="title__eyebrow"> Field-tested guides </span>
            <h2 class="sec__title">Operating mechanisms, not slideware</h2>
            <BaseToggleButton v-model="aiEnabled" />
          </div>
          <div class="right-prt">
            <div class="filter-prt">
              <template v-for="(data, index) in filterData" :key="index">
                <BaseSelect :label="data?.label" :options="data?.options" :model-value="data?.selected" :placeholder="data?.placeholder"
                  class="filter-select" />
              </template>
            </div>
          </div>
        </div>
        <div class="tools-cards-wrap">
          <template v-for="value in toolsData" :key="value.id">
            <BaseAnalysisCard :number="value?.step" :title="value?.title" :description="value?.description"
              :badge="value?.tag" :itemId="value?.id" >
              <ul v-if="value?.checklist.length > 0" class="checklist">
                <li v-for="(item, index) in value?.checklist" :key="index">
                  <span>
                    <i class="bi bi-check-circle-fill"></i>
                  </span>
                  {{ item }}
                </li>
              </ul>
              <div class="main-wrp">
                <div class="inr-wrap">
                  <span>{{ value?.timeline?.value }}</span>
                  <p>{{ value?.timeline?.label }}</p>
                </div>
                <div class="inr-wrap">
                  <span>{{ value?.complexity?.value }}</span>
                  <p>{{ value?.complexity?.label }}</p>
                </div>
                <div class="engedment-wrap">
                  <span>{{ value?.engagements?.value }}</span>
                  <p>{{ value?.engagements?.label }}</p>
                </div>
              </div>
              <div class="btn-wrap">
                <BaseButton>
                  Explore tools used
                  <template #icon_right>
                    <i class="bi bi-arrow-right"></i>
                  </template>
                </BaseButton>
              </div>
            </BaseAnalysisCard>
          </template>

        </div>

      </div>
    </section>
    <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeroBanner from '@/components/common/Herobanner.vue'
import LensCard from '@/components/common/LensCard.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import { bannerData, lensData, filterData, toolsData } from '@/services/playbooklists.service';
import BaseToggleButton from '@/components/common/BaseToggleButton.vue';
import BaseAnalysisCard from '@/components/common/BaseAnalysisCard.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import {accelerateData } from '@/services/home.service.js'

const aiEnabled = ref(true)
</script>

<style></style>
