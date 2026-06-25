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
        <div class="projectInfo_wrap">
          <div v-for="item in projectInfo" :key="item.label" class="info-item">
            <span class="info-label">{{ item.label }}</span>
            <span class="info-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="impact_sec">
      <div class="container">
        <div class="info_outer_wrp">
          <h6>Measured impact</h6>
          <div class="impact_wrap">
            <div v-for="item in measuredImpact" :key="item.label" class="info-item">
              <span class="info-label">{{ item.label }}</span>
              <span class="info-value">{{ item.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="approch_sec">
      <div class="container">
        <h3>This approach is relevant for organisations where</h3>
        <div class="approch_wrap">
          <div v-for="(item, index) in approchData" :key="index" class="info-item">
            <span class="info-icon">
              <img :src="item.icon" :alt="item.label">
            </span>
            <span class="info-label">{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>


    <section class="narrative_sec">
      <div class="container">
        <div class="narrative_block delivery_profile">
          <h3>Delivery Profile</h3>
          <ul class="delivery_profile_list">
            <li v-for="item in deliveryProfile" :key="item.label">
              <span class="dp-label">{{ item.label }}</span>
              <span class="dp-value">{{ item.value }}</span>
            </li>
          </ul>
        </div>

        <div class="narrative_block">
          <h3>Client Context</h3>
          <p>{{ clientContext }}</p>
        </div>

        <div class="narrative_block">
          <h3>Challenge</h3>
          <p>{{ challenge }}</p>
        </div>

        <div class="narrative_block">
          <h3>Key Diagnostic Insights</h3>
          <ul class="insight_list">
            <li v-for="(item, index) in keyDiagnosticInsights" :key="index">{{ item }}</li>
          </ul>
        </div>

        <div class="narrative_block">
          <h3>Intervention</h3>
          <div class="wrap_grid">
            <span class="core_intv_label">Core Interventions</span>
            <div class="intervention_grid">
              <div v-for="(item, index) in coreInterventions" :key="index" class="intervention_item">
                <span class="intv_number">{{ index + 1 }}.</span>
                <div class="intv_content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.subtitle }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="narrative_block">
          <h3>AI Stack Used</h3>
          <div class="ai_stack_wrap pipeline-wrp">
            <PipelineCard v-for="(item, index) in aiStackUsed" :key="index" :logo="item.icon" :tagline="item.tagline"
              :title="item.title" />
          </div>
        </div>

        <div class="narrative_block cta_banner">
          <div class="cta_card">
            <h3>{{ buildStackCTA.title }}</h3>
            <BaseButton variant="secondary">{{ buildStackCTA.btnLabel }}</BaseButton>
          </div>
        </div>

        <div class="narrative_block">
          <h3>Technology Used</h3>
          <ul class="insight_list">
            <li v-for="(item, index) in technologyUsed.bullets" :key="index">{{ item }}</li>
          </ul>
          <div class="wrap_grid tech_choices">
            <span class="core_intv_label">{{ technologyUsed.choicesLabel }}</span>
            <ul class="tech_choices_list">
              <li v-for="item in technologyUsed.choices" :key="item.label">
                <span class="tc-label">{{ item.label }}</span>
                <span class="tc-value">{{ item.value }}</span>
              </li>
            </ul>
          </div>
          <span class="core_intv_label">{{ technologyUsed.rationaleLabel }}</span>
          <p class="rationale_text">{{ technologyUsed.rationale }}</p>
        </div>

        <div class="narrative_block">
          <h3>Key Lessons</h3>
          <ul class="key_lessons_list">
            <li v-for="(item, index) in keyLessons" :key="index">"{{ item }}"</li>
          </ul>
        </div>

        <div class="narrative_block cta_banner">
          <div class="cta_card">
            <h3>{{ exploreToolsCTA.title }}</h3>
            <BaseButton variant="secondary">{{ exploreToolsCTA.btnLabel }}</BaseButton>
          </div>
        </div>
      </div>
    </section>

    <section class="other_engagements_sec">
      <div class="container">
        <h2>Other engagements</h2>
        <div class="engagements_grid">
          <div v-for="(item, index) in otherEngagements" :key="index" class="engagement_item">
            <span class="tag_pill">{{ item.tag }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.sub }}</p>
          </div>
        </div>
      </div>
    </section>

    <BaseAccelerate :title="integrateCTAData.title" class="cstd_base_acc" />
  </div>
</template>

<script setup>
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import PipelineCard from '@/components/common/PipelineCard.vue';
import {
  aiStackUsed,
  approchData,
  bnrData,
  buildStackCTA,
  challenge,
  clientContext,
  coreInterventions,
  deliveryProfile,
  exploreToolsCTA,
  integrateCTAData,
  keyDiagnosticInsights,
  keyLessons,
  measuredImpact,
  otherEngagements,
  projectInfo,
  technologyUsed,
} from '@/services/casestudiesDetails.service';
</script>
