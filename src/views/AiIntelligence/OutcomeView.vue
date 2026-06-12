<script setup>
import HighlightsCard from '../../components/common/HighlightsCard.vue';
import BaseStacksSection from './sections/BaseStacksSection.vue';
import PipelineCard from '../../components/common/PipelineCard.vue';
import StackWorkCard from '../../components/common/StackWorksCard.vue';
import IntegratesCard from '../../components/common/IntegratesCard.vue';
import ToolsCard from '../../components/common/ToolsCard.vue';
import AssesmentTable from '../../components/common/AssesmentTable.vue';
import AlterNateCard from '../../components/common/AlternateCard.vue';
import IntegrateCTA from "./sections/IntegrateCTA.vue"
import BaseAccelerate from "../../components/common/BaseAccelerate.vue";
import { stackHdngData , architecturePipelineData , stackWorksData , integratesData , tradeOffData , alternativeToolsData , assesmentData , alternateStacksData , integrateCTAData} from '../../services/outcome.service';
</script>

<template>
  <main>
    <section class="outcome-stack-sec">
      <div class="container">
        <span class="title__eyebrow"> {{ stackHdngData?.label }}</span>
        <h1>{{ stackHdngData?.title }}</h1>
        <HighlightsCard :data="stackHdngData" />
      </div>
    </section>
    <BaseStacksSection :title="architecturePipelineData?.title" :btnTitle="architecturePipelineData?.actionButton?.label">
      <div class="architecture-wrp">
        <div class="hdr-tlltwrap">
          <h6>{{ architecturePipelineData?.coreSystem?.label }}  <span> {{ architecturePipelineData?.coreSystem?.subLabel }}</span></h6>
        </div>
        <div class="pipeline-wrp">
          <template v-for="item in architecturePipelineData?.steps" :key="item?.id">
            <PipelineCard
              :logo="item?.icon"
              :tagline="item?.title"
              :title="item?.tool"
              :subTitle="item?.description"
              :indicators="item?.indicators"
              :longList="item?.bullets"
            />
          </template>

        </div>
      </div>

    </BaseStacksSection>
    <BaseStacksSection
      :title="stackWorksData?.title"
    >
      <div class="stackWrp">
        <StackWorkCard
          :bullets="stackWorksData?.content?.bulletPoints"
        />
      </div>
    </BaseStacksSection>
    <BaseStacksSection
      :title="integratesData?.sectionTitle"
    >
          <div class="intrigate-wrap">
            <template v-for="card in integratesData?.cards" :key="card?.id">
              <IntegratesCard
                :title="card?.title"
                :description="card?.description"
              />
            </template>
          </div>
    </BaseStacksSection>

    <BaseStacksSection
      :title="tradeOffData?.sectionTitle"
    >
        <div class="tradoff-wrp">
          <template v-for="item in tradeOffData?.items" :key="item?.id">
              <div class="tradeoff-card">
                <div class="icon">
                  <i :class="`bi bi-${item?.icon}`"></i>
                </div>
                <div class="text">{{ item?.text }}</div>
              </div>
            </template>
        </div>
    </BaseStacksSection>

    <BaseStacksSection
      :title="alternativeToolsData?.subtitle"
    >
      <div class="main-wrap">
        <template v-for="item in alternativeToolsData.data" :key="item?.id">
          <ToolsCard
            :category="item?.category"
            :title="item?.title"
            :description="item?.description"
            :chosenBecause="item?.chosenBecause"
            :alternatives="item?.alternatives"
            :tags="item?.tags"
          />
        </template>
      </div>
    </BaseStacksSection>

    <BaseStacksSection
      :title="assesmentData?.orchestrationAssessment?.title"
    >
        <AssesmentTable
          :tableData="assesmentData?.orchestrationAssessment?.items"
        />

    </BaseStacksSection>
    <BaseStacksSection
      :title="assesmentData?.estimatedCostRange?.title"
    >
        <AssesmentTable
          class="revrst-table"
          :tableData="assesmentData?.estimatedCostRange?.items"
          :note="assesmentData?.estimatedCostRange?.note"
        />


    </BaseStacksSection>
    <BaseStacksSection
      :title="alternateStacksData?.title"
      class="alternate-sec"
    >
        <div class="wraper">
          <template v-for="item in alternateStacksData?.stacks" :key="item?.id">
            <AlterNateCard
              :title="item?.heading"
              :chip="item?.badge"
              :bullets="item?.technologies"
              :option="item?.option"
              :tradoffData="item?.tradeOff"
            />
          </template>

        </div>
    </BaseStacksSection>
    <IntegrateCTA
      :data="integrateCTAData"
      class="outcomeCta"
    />
    <BaseAccelerate />
  </main>
</template>



