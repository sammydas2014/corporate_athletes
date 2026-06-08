import { imageMap } from "@/assets/images/imageMap.js";
import { ref } from "vue";

export const bannerData = {
  title: "AI Intelligence",
  subtitle: "Your central hub for evaluating, benchmarking, and discovering AI tools",
  imageUrl: imageMap.aiintelligenceBnr,
  bgColor: "#011425",
  minHeight: "450px",
  imageAlt: "AI Intelligence visual",
  showSearch: true,
  searchPlaceholder: "Search AI tools, vendors, benchmarks…",
  popularSearches: ["GPT-5", "AI Frameworks", "Gemini", "Vector Databases"],
};

export const researchData = {
  eyebrow: "Reviews",
  heading: "Research & Frameworks",
  submitLabel: "Submit a tool for review",
  submitLink: "/",
  cards: [
    {
      title: "AI Governance Framework",
      description: "Best practices for responsible AI implementation",
      link: "/",
    },
    {
      title: "AI Trends Report 2022",
      description: "Key insights and predictions for the coming year",
      link: "/",
    },
  ],
};

export // ── Dynamic Filter Data ────────────────────────
const filterGroups = ref([
  {
    id: "toolType",
    label: "Tool Type",
    defaultOpen: true,
    options: [
      { label: "Generative AI", value: "generative-ai" },
      { label: "Machine Learning", value: "machine-learning" },
      { label: "NLP & Chatbots", value: "nlp-chatbots" },
      { label: "Data Analytics", value: "data-analytics" },
    ],
  },
  {
    id: "capabilities",
    label: "Capabilities",
    defaultOpen: true,
    options: [
      { label: "Text Generation", value: "text-generation" },
      { label: "Image/Video Creation", value: "image-video" },
      { label: "Predictive Analytics", value: "predictive-analytics" },
      { label: "Process Automation", value: "process-automation" },
    ],
  },
  {
    id: "businessFunction",
    label: "Business Function",
    defaultOpen: false,
    options: [
      { label: "Marketing", value: "marketing" },
      { label: "Sales", value: "sales" },
      { label: "Engineering", value: "engineering" },
      { label: "HR", value: "hr" },
    ],
  },
  {
    id: "aiModality",
    label: "AI Modality",
    defaultOpen: false,
    options: [
      { label: "Text", value: "text" },
      { label: "Image", value: "image" },
      { label: "Audio", value: "audio" },
      { label: "Video", value: "video" },
    ],
  },
  {
    id: "industry",
    label: "Industry",
    defaultOpen: false,
    options: [
      { label: "Healthcare", value: "healthcare" },
      { label: "Finance", value: "finance" },
      { label: "Education", value: "education" },
      { label: "Retail", value: "retail" },
    ],
  },
  {
    id: "enterpriseFilters",
    label: "Enterprise Filters",
    defaultOpen: false,
    options: [
      { label: "SOC 2 Certified", value: "soc2" },
      { label: "GDPR Compliant", value: "gdpr" },
      { label: "On-premise", value: "on-premise" },
      { label: "API Available", value: "api" },
    ],
  },
]);
