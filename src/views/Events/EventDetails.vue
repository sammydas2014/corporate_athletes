<template>
  <main class="eventDtlsmain-wrapper">
    <!-- Hero Section -->
    <DetailsHeroSection
      :badge="heroData?.badge"
      :title="heroData?.title"
      :description="heroData?.description"
      :bnnrImg="heroData?.image"
      :event-details="heroData?.details"
      :cta-text="heroData?.cta?.label"
      :event-goals="heroData?.eventGoal"
    />
    <!-- Hero Section -->
     <!-- Discussion Matter Section -->
      <section class="discussionMatter">
        <div class="container">
          <div class="discussionMatter__wrapper">
            <div class="icon-wrap">
              <img :src="discussionHighlights?.icon" alt="Big Light Bulb Image">
            </div>
            <div class="discussionData__wrapper">
              <h3>{{ discussionHighlights?.title }}</h3>
              <p>{{ discussionHighlights?.description }}</p>
            </div>
          </div>
        </div>

      </section>
     <!-- Discussion Matter Section -->

     <!-- Discussion Topic Section -->
      <section class="discussionTopics">
        <div class="container">
          <div class="discussionTopics__wrapper">
            <DiscussionCard
              v-for="card in contentCards"
              :key="card.id"
              :card="card"
            />
          </div>
        </div>
      </section>
     <!-- Discussion Topic Section -->

     <!-- Fecilitated Section  -->
      <section class="facilitated-section">
        <div class="container">
          <h2 class="sec__title">{{ facilitatorSection?.heading }}</h2>
          <div class="card-wrapper">
            <FacilitationCard
              v-for="card in facilitatorSection?.cards"
              :key="card.id"
              :card="card"
            />
          </div>
        </div>
      </section>
     <!-- Fecilitated Section  -->

     <!-- Session Details Section -->
      <section class="sessionDetails">
        <div class="container">
          <h2 class="sec__title">{{ sessionDetails?.sectionTitle }}</h2>
          <div class="card-wrapper">
            <SessionCard
              v-for="card in sessionDetails?.details"
              :key="card.id"
              :card="card"
            />
          </div>
        </div>
      </section>
     <!-- Session Details Section -->

     <!-- Sedule Adenda Section -->
      <section class="agandaSec">

      </section>
     <!-- Sedule Adenda Section -->

     <!-- Attend Section -->
      <section class="attendSec">
        <div class="container">
          <h2 class="sec__title">{{ whoShouldAttend?.sectionTitle }}</h2>
          <div class="tags__wrapper">
            <BaseCardChip
              v-for="tag in whoShouldAttend?.tags"
              :key="tag?.id"
              :title="tag?.text"
              variant="secondary"
            />
          </div>
        </div>
      </section>
     <!-- Attend Section -->

     <!-- Discussion Topic Section -->
      <section class="discussionTopics">
        <div class="container">
          <div class="discussionTopics__wrapper">
            <DiscussionCard
              v-for="card in discussData"
              :key="card.id"
              :card="card"
            />
          </div>
        </div>
      </section>
     <!-- Discussion Topic Section -->

  </main>
</template>

<script setup>
  import DetailsHeroSection from "./sections/DetailsHeroSection.vue";
  import DiscussionCard from "@/components/common/DiscussionCard.vue";
  import FacilitationCard from "@/components/common/FacilitatedCard.vue";
  import SessionCard from "@/components/common/SessionCard.vue";
  import BaseCardChip from "@/components/common/BaseCardChip.vue";
  import { heroData, discussionHighlights , contentCards , facilitatorSection , sessionDetails , whoShouldAttend , discussData } from "@/services/eventDetails.service";
</script>
