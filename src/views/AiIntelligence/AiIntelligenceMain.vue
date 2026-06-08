<template>
  <div class="aiintelligence-main">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :bg-image="bannerData.bgImage" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :min-height="bannerData.minHeight" :show-search="bannerData.showSearch"
      :search-placeholder="bannerData.searchPlaceholder" :popular-searches="bannerData.popularSearches"
      @search="handleSearch" class="aiintelligence_bnr" />
    <section class="catalougue-sec">
      <div class="container">
        <ExploreHeading />
        <div class="catalougue-list">
          <div class="catalougue-list-left">
            <Filtersidebar :filterGroups="filterGroups" :isMobileOpen="isMobileOpen" @close="isMobileOpen = false"
              @apply="onApply" @change="onChange" />
          </div>

          <div class="catalougue-list-wrap">
            <div class="filter-area-hedng">
              <BaseInput placeholder="Search articles, deep dives, playbooks…" variant="filter" v-model="searchQuery"
                @keydown.enter="handleSearch">
                <template #icon-left>
                  <i class="bi bi-search"></i>
                </template>
              </BaseInput>
              <BaseSelect placeholder="Relevance" v-model="selectedCategory" @change="handleCategoryChange"
                :options="categories" label="Sort by:" varinat="sort-by-select" />
            </div>
            <div class="crdWrp">
              <template v-for="(item, index) in aiTools" :key="index">
                <!-- {{ item }} -->
                <AitoolCard :title="item.title" :subtitle="item.description" :price="item.price" :tags="item.tags"
                  :icon="item.icon" :iconBg="item?.iconBg" />
              </template>
            </div>
          </div>
        </div>
        <div class="reviweWRaper">
          <div class="hdng-dtls">
            <span class="title__eyebrow"> Reviews </span>
            <h2 class="sec__title">AI Vendor Reviews</h2>
          </div>
          <DeepDrive />
          <ReviewSlider :testimonialData="testimonials" />
        </div>
      </div>
    </section>
    <!-- <Filterdemo /> -->
    <BenchmarkSurveysSection />
    <ResearchFrameworksSection :eyebrow="researchData.eyebrow" :heading="researchData.heading"
      :cards="researchData.cards" :submit-label="researchData.submitLabel" :submit-link="researchData.submitLink" />

  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import HeroBanner from "@/components/common/Herobanner.vue";
import ResearchFrameworksSection from "./sections/ResearchFrameworksSection.vue";
import BenchmarkSurveysSection from "./sections/BenchmarkSurveysSection.vue";
import { bannerData, filterGroups, researchData } from "@/services/aiintelligence.service";
// import Filterdemo from "@/components/common/Filterdemo.vue";
import ExploreHeading from "./sections/ExploreHeading.vue";
import BaseInput from "@/components/common/BaseInput.vue";
import AitoolCard from "@/components/common/AitoolCard.vue";
import DeepDrive from "./sections/DeepDrive.vue";
import ReviewSlider from "@/components/slider/ReviewSlider.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";
import { imageMap } from "@/assets/images/imageMap.js";
import Filtersidebar from "@/components/common/Filtersidebar.vue";


function handleSearch(query) {
  searchQuery.value = query;
}
const searchQuery = ref('')
const selectedCategory = ref('')


const isMobileOpen = ref(false)
const activeFilters = ref(null)


// ── Active filter count for badge ──────────────
const activeCount = computed(() => {
  if (!activeFilters.value) return 0
  return Object.values(activeFilters.value)
    .flat()
    .length
})

function onChange(filters) {
  activeFilters.value = filters
}

function onApply(filters) {
  activeFilters.value = filters
  console.log('Applied filters:', filters)
}
const categories = ref([
  {
    label: 'Relevance',
    value: 'relevance',
  },
  {
    label: 'Most Popular',
    value: 'popular',
  },
  {
    label: 'Newest',
    value: 'newest',
  },
  {
    label: 'Price: Low to High',
    value: 'price-low-high',
  },
  {
    label: 'Price: High to Low',
    value: 'price-high-low',
  },
  {
    label: 'Highest Rated',
    value: 'highest-rated',
  },
  {
    label: 'A - Z',
    value: 'a-z',
  },
  {
    label: 'Z - A',
    value: 'z-a',
  },
])

const handleCategoryChange = (event) => {
  console.log('Category changed:', event);
};

// Card Data
// src/data/aiTools.js

// src/data/aiTools.js



const aiTools = [
  {
    id: 1,

    title: 'InnovateAI',
    description: 'Generative AI Platform',

    icon: {
      type: 'image',
      value: imageMap.brainImg
    },

    iconBg: '#0F766E',

    tags: [
      'Text Generation',
      'Marketing'
    ],

    price: '€49/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: true,
    rating: 4.8
  },

  {
    id: 2,

    title: 'PredictifyPro',
    description: 'Predictive Analytics Suite',

    icon: {
      type: 'text',
      value: 'P'
    },

    iconBg: '#4C5B71',

    tags: [
      'Predictive Analytics',
      'Finance'
    ],

    price: '€99/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: false,
    rating: 4.6
  },

  {
    id: 3,

    title: 'ChatFlowX',
    description: 'Conversational AI Builder',

    icon: {
      type: 'text',
      value: 'C'
    },

    iconBg: '#3CBAAE',

    tags: [
      'NLP & Chatbots',
      'Marketing'
    ],

    price: '€49/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: true,
    rating: 4.9
  },

  {
    id: 4,

    title: 'DataMind',
    description: 'Intelligent Data Processing',

    icon: {
      type: 'text',
      value: 'D'
    },

    iconBg: '#387377',

    tags: [
      'Predictive Analytics',
      'Finance'
    ],

    price: '€89/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: false,
    rating: 4.5
  },

  {
    id: 5,

    title: 'AutoScale',
    description: 'ML Model Deployment Platform',

    icon: {
      type: 'text',
      value: 'A'
    },

    iconBg: '#4C5B71',

    tags: [
      'NLP & Chatbots',
      'Marketing'
    ],

    price: '€49/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: true,
    rating: 4.7
  },

  {
    id: 6,

    title: 'VisionCraft',
    description: 'AI Image Generation Suite',

    icon: {
      type: 'text',
      value: 'V'
    },

    iconBg: '#7C3AED',

    tags: [
      'Image Generation',
      'Design'
    ],

    price: '€79/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: false,
    rating: 4.8
  },

  {
    id: 7,

    title: 'NeuroPilot',
    description: 'AI Workflow Automation',

    icon: {
      type: 'text',
      value: 'N'
    },

    iconBg: '#2563EB',

    tags: [
      'Automation',
      'Productivity'
    ],

    price: '€59/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: true,
    rating: 4.9
  },

  {
    id: 8,

    title: 'MarketGenius',
    description: 'AI Marketing Intelligence',

    icon: {
      type: 'text',
      value: 'M'
    },

    iconBg: '#EA580C',

    tags: [
      'Marketing',
      'Analytics'
    ],

    price: '€69/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: false,
    rating: 4.4
  },

  {
    id: 9,

    title: 'SecureMind',
    description: 'AI Security Monitoring',

    icon: {
      type: 'text',
      value: 'S'
    },

    iconBg: '#DC2626',

    tags: [
      'Cyber Security',
      'Enterprise'
    ],

    price: '€129/mo',

    buttons: {
      primary: 'View Details',
      secondary: 'Shortlist'
    },

    featured: true,
    rating: 4.9
  }
]

// Review Slider Data
const testimonials = [
  {
    id: 1,

    companyLogo: imageMap.openAiImg,

    tagline: 'Leading, LLM innovator',

    rating: 5,

    description:
      'A deep analysis of OpenAI’s strategic pivot towards enterprise, the GPT-5 launch, and what it means for the competitive landscape. A deep analysis of OpenAI’s strategic pivot towards enterprise, the GPT-5 launch, and what it means for the competitive landscape.',

    author: 'Research Team'
  },

  {
    id: 2,

    companyLogo: imageMap.openAiImg,

    tagline: 'AI Safety & Research Leader',

    rating: 5,

    description:
      'An in-depth exploration of Anthropic’s constitutional AI framework, Claude ecosystem growth, and how safety-focused AI models are reshaping enterprise adoption strategies.',

    author: 'AI Insights Division'
  },
  {
    id: 2,

    companyLogo: imageMap.openAiImg,

    tagline: 'AI Safety & Research Leader',

    rating: 5,

    description:
      'An in-depth exploration of Anthropic’s constitutional AI framework, Claude ecosystem growth, and how safety-focused AI models are reshaping enterprise adoption strategies.',

    author: 'AI Insights Division'
  }
]
</script>
