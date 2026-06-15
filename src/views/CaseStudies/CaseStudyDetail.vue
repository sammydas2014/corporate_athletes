<template>
  <div class="cstd_detail">
    <section class="cstd_bnr">
      <div class="container">
        <span class="title__eyebrow"> {{ bnrData?.label }}</span>
        <h1>{{ bnrData?.title }}</h1>
        <p class="hero-banner__subtitle">{{ bnrData?.subTitle }}</p>
      </div>
    </section>

    <section class="project-info">
      <div class="container">
        <div class="info_outer_wrp">
          <h6>Measured impact</h6>
          <div class="projectInfo_wrap">
            <div v-for="item in projectInfo" :key="item.label" class="info-item">
              <span class="info-label">{{ item.label }}</span>
              <span class="info-value">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="impact_sec">
      <div class="container">
        <div class="impact_wrap">
          <div v-for="item in measuredImpact" :key="item.label" class="info-item">
            <span class="info-label">{{ item.label }}</span>
            <span class="info-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </section>
    <BaseAccelerate :title="integrateCTAData.title" :primary-btn-label="integrateCTAData.primaryBtnLabel"
      :secondary-btn-label="integrateCTAData.secondaryBtnLabel" class="cstd_base_acc" />
  </div>
</template>

<script setup>
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import { bnrData, integrateCTAData, measuredImpact, projectInfo } from '@/services/casestudiesDetails.service';
</script>
