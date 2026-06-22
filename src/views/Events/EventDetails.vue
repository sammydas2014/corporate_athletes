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

     <!-- Sedule Agenda Section -->
      <section class="agandaSec">
        <div class="container">
          <div class="agendaWr">
            <div class="agendaDtls">
              <h2 class="sec__title">{{ agendaData?.title }}</h2>
              <p>{{ agendaData?.description }}</p>
              <BaseButton variant="outline-light">
                {{ agendaData?.button?.text }}
              </BaseButton>
            </div>
            <div class="agendaTab">
              <AgendaTab
                :days="agendaData.days"
                v-model="activeTab"
              />
              <AgendaContent
                :day="currentDay"
              />

            </div>
          </div>
        </div>
      </section>
     <!-- Sedule Agenda Section -->

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

     <!-- View All Events Section -->
      <section class="viewall-events-sec">
        <div class="container">
          <div class="events-wrapper">
            <div class="hdng">
              <h2 class="sec__title">{{ interestedEventsData?.title }}</h2>
            </div>
            <div class="event-btn">
              <BaseButton :to="interestedEventsData?.ctaButton?.link">
                {{ interestedEventsData?.ctaButton?.label }}
              </BaseButton>
            </div>
          </div>
          <div class="cards-wrapper">
            <template v-for="card in interestedEventsData?.items" :key="card?.id">
              <RoundtableCard :card="card" />
            </template>
          </div>

        </div>
      </section>
     <!-- View All Events Section -->
      <IntegrateCTA
        :data="integrateCTAData"
        class="evnt-dtls-intrgate"
      />
     <BaseAccelerate :title="accelerateData.title" :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel" />

  </main>
</template>

<script setup>
import { ref , computed } from "vue";
  import DetailsHeroSection from "./sections/DetailsHeroSection.vue";
  import DiscussionCard from "@/components/common/DiscussionCard.vue";
  import FacilitationCard from "@/components/common/FacilitatedCard.vue";
  import SessionCard from "@/components/common/SessionCard.vue";
  import BaseCardChip from "@/components/common/BaseCardChip.vue";
  import BaseButton from "@/components/common/BaseButton.vue";
  import RoundtableCard from "@/components/common/RoundtableCard.vue";
  import BaseAccelerate from "@/components/common/BaseAccelerate.vue";
  import IntegrateCTA from "../AiIntelligence/sections/IntegrateCTA.vue";
  import AgendaTab from "@/components/common/AgendaTab.vue";
  import AgendaContent from "@/components/common/AgendaContent.vue";
  import { heroData, discussionHighlights , contentCards , facilitatorSection , sessionDetails , whoShouldAttend , discussData , interestedEventsData , integrateCTAData , agendaData } from "@/services/eventDetails.service";
  import { accelerateData } from "@/services/home.service";


  const activeTab = ref(0);
  console.log(activeTab.value)


const currentDay = computed(() => {
  return agendaData.days[activeTab.value];
});
</script>
