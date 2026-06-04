<template>
  <div>
    <Herobanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-image="bannerData.bgImage"
      :overlay="bannerData.overlay" :show-accent="bannerData.showAccent" :accent-color="bannerData.accentColor"
      :min-height="bannerData.minHeight" class="aboutBnr" />
    <BaseEnterprice :imageData="whoWeAreData.image" :tagData="whoWeAreData.tag" :title="whoWeAreData.title"
      :details="whoWeAreData.description" :statsData="whoWeAreData.stats" />
    <OurModel />
    <BaseEngagement :imageData="consortiumData.imageData" :tag="consortiumData.tag" :title="consortiumData.title"
      :soluctionItems="solutionData" className="aboutpage-engagement" />
    <ProfilecardSection />
    <BaseAccelerate />
  </div>
</template>

<script setup>
import { consortiumData, solutionData, whoWeAreData } from "@/services/about.service.js";
import ProfilecardSection from "./sections/ProfilecardSection.vue";
import OurModel from "./sections/OurModel.vue";
import BaseEnterprice from "@/components/common/BaseEnterprice.vue";
import BaseAccelerate from "@/components/common/BaseAccelerate.vue";
import BaseEngagement from "@/components/common/BaseEngagement.vue";
import Herobanner from "@/components/common/Herobanner.vue";
import { bannerData } from "@/services/about.service.js";
</script>
