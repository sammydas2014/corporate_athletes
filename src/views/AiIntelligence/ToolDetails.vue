<template>
  <main class="tool-details-page">
    <ToolsBannerSection :data="overViweData" />
    <SummarySection />
    <BreakDownSection />
    <StackSection />
    <ArchitectureSection />
    <UseCaseSection />
    <TestimonialSection />
    <ImplementationView />
    <ComparableTools />
    <IntegrateCTA />
    <BaseAccelerate />
  </main>
</template>

<script setup>
import ToolsBannerSection from "./sections/ToolsBannerSection.vue";
import SummarySection from "./sections/SummarySection.vue";
import BreakDownSection from "./sections/BreakDownSection.vue";
import StackSection from "./sections/StackSection.vue";
import ArchitectureSection from "./sections/ArchitectureSection.vue";
import UseCaseSection from "./sections/UseCaseSection.vue";
import TestimonialSection from "./sections/TestimonialSection.vue";
import ImplementationView from "./sections/ImplementationView.vue";
import ComparableTools from "./sections/ComparableTools.vue";
import IntegrateCTA from "./sections/IntegrateCTA.vue";
import { overViweData } from "@/services/tooldetails.service.js";
import BaseAccelerate from "@/components/common/BaseAccelerate.vue";

defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
});
</script>
