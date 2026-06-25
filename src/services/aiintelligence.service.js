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

export const toolCatalogueBannerData = {
  title: "AI Tool Intelligence",
  subtitle: "Explore, compare and select the right AI tools across your enterprise",
  imageUrl: imageMap.catalogueBnr,
  bgColor: "#020407",
  minHeight: "450px",
  imageAlt: "Tool Intelligence visual",
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

// ── Dynamic Filter Data ────────────────────────
export const filterGroups = ref([
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
    defaultOpen: false,
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
      { label: "Finance", value: "finance" },
      { label: "Sales", value: "sales" },
      { label: "Customer Service", value: "customer-service" },
      { label: "HR", value: "hr" },
    ],
  },
  {
    id: "aiModality",
    label: "AI Modality",
    defaultOpen: false,
    options: [
      { label: "Natural Language", value: "natural-language" },
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

// ── Review Slider Data ────────────────────────
export const testimonials = [
  {
    id: 1,

    companyLogo: imageMap.openAiImg,

    tagline: "Leading, LLM innovator",

    rating: 5,

    description:
      "A deep analysis of OpenAI’s strategic pivot towards enterprise, the GPT-5 launch, and what it means for the competitive landscape. A deep analysis of OpenAI’s strategic pivot towards enterprise, the GPT-5 launch, and what it means for the competitive landscape.",

    author: "Research Team",
  },

  {
    id: 2,

    companyLogo: imageMap.openAiImg,

    tagline: "AI Safety & Research Leader",

    rating: 5,

    description:
      "An in-depth exploration of Anthropic’s constitutional AI framework, Claude ecosystem growth, and how safety-focused AI models are reshaping enterprise adoption strategies.",

    author: "AI Insights Division",
  },
  {
    id: 2,

    companyLogo: imageMap.openAiImg,

    tagline: "AI Safety & Research Leader",

    rating: 5,

    description:
      "An in-depth exploration of Anthropic’s constitutional AI framework, Claude ecosystem growth, and how safety-focused AI models are reshaping enterprise adoption strategies.",

    author: "AI Insights Division",
  },
];

export const testimonialSliderData = [
  {
    type: 'text',
    name: 'Sarah Johnson',
    role: 'Chief AI Officer, FinCorp',
    quote: 'The AI Intelligence platform transformed how our finance team evaluates and adopts new tools. The vendor reviews are thorough, unbiased, and saved us months of research.',
    date: 'May 2025',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Marcus Lee',
    role: 'VP of Digital Operations, RetailGroup',
    quote: 'Benchmark surveys gave us the confidence to make data-driven AI procurement decisions. The research frameworks are exactly what enterprise teams need.',
    date: 'April 2025',
    rating: 5,
  },
  {
    type: 'text',
    name: 'Priya Nair',
    role: 'Head of Strategy, HealthNet',
    quote: 'We went from AI confusion to clarity in weeks. The tool catalogue and deep-dive reports are an invaluable resource for any serious enterprise AI programme.',
    date: 'March 2025',
    rating: 4,
  },
  {
    type: 'text',
    name: 'David Chen',
    role: 'Director of Innovation, TechCo',
    quote: 'Corporate Athletes AI Intelligence is the only platform that combines rigorous vendor analysis with practical implementation guidance. Highly recommended.',
    date: 'February 2025',
    rating: 5,
  },
];

export const categories = ref([
  {
    label: "Relevance",
    value: "relevance",
  },
  {
    label: "Most Popular",
    value: "popular",
  },
  {
    label: "Newest",
    value: "newest",
  },
  {
    label: "Price: Low to High",
    value: "price-low-high",
  },
  {
    label: "Price: High to Low",
    value: "price-high-low",
  },
  {
    label: "Highest Rated",
    value: "highest-rated",
  },
  {
    label: "A - Z",
    value: "a-z",
  },
  {
    label: "Z - A",
    value: "z-a",
  },
]);

export const aiTools = [
  {
    id: 1,

    title: "InnovateAI",
    description: "Generative AI Platform",

    icon: {
      type: "image",
      value: imageMap.brainImg,
    },

    iconBg: "#0F766E",

    tags: ["Text Generation", "Marketing"],

    price: "€49/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.8,
  },

  {
    id: 2,

    title: "PredictifyPro",
    description: "Predictive Analytics Suite",

    icon: {
      type: "text",
      value: "P",
    },

    iconBg: "#4C5B71",

    tags: ["Predictive Analytics", "Finance"],

    price: "€99/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: false,
    rating: 4.6,
  },

  {
    id: 3,

    title: "ChatFlowX",
    description: "Conversational AI Builder",

    icon: {
      type: "text",
      value: "C",
    },

    iconBg: "#3CBAAE",

    tags: ["NLP & Chatbots", "Marketing"],

    price: "€49/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.9,
  },

  {
    id: 4,

    title: "DataMind",
    description: "Intelligent Data Processing",

    icon: {
      type: "text",
      value: "D",
    },

    iconBg: "#387377",

    tags: ["Predictive Analytics", "Finance"],

    price: "€89/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: false,
    rating: 4.5,
  },

  {
    id: 5,

    title: "AutoScale",
    description: "ML Model Deployment Platform",

    icon: {
      type: "text",
      value: "A",
    },

    iconBg: "#4C5B71",

    tags: ["NLP & Chatbots", "Marketing"],

    price: "€49/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.7,
  },

  {
    id: 6,

    title: "VisionCraft",
    description: "AI Image Generation Suite",

    icon: {
      type: "text",
      value: "V",
    },

    iconBg: "#7C3AED",

    tags: ["Image Generation", "Design"],

    price: "€79/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: false,
    rating: 4.8,
  },

  {
    id: 7,

    title: "NeuroPilot",
    description: "AI Workflow Automation",

    icon: {
      type: "text",
      value: "N",
    },

    iconBg: "#2563EB",

    tags: ["Automation", "Productivity"],

    price: "€59/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.9,
  },

  {
    id: 8,

    title: "MarketGenius",
    description: "AI Marketing Intelligence",

    icon: {
      type: "text",
      value: "M",
    },

    iconBg: "#EA580C",

    tags: ["Marketing", "Analytics"],

    price: "€69/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: false,
    rating: 4.4,
  },

  {
    id: 9,

    title: "SecureMind",
    description: "AI Security Monitoring",

    icon: {
      type: "text",
      value: "S",
    },

    iconBg: "#DC2626",

    tags: ["Cyber Security", "Enterprise"],

    price: "€129/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.9,
  },

  {
    id: 10,

    title: "NeuroPilot",
    description: "AI Workflow Automation",

    icon: {
      type: "text",
      value: "N",
    },

    iconBg: "#2563EB",

    tags: ["Automation", "Productivity"],

    price: "€59/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.9,
  },

  {
    id: 11,

    title: "MarketGenius",
    description: "AI Marketing Intelligence",

    icon: {
      type: "text",
      value: "M",
    },

    iconBg: "#EA580C",

    tags: ["Marketing", "Analytics"],

    price: "€69/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: false,
    rating: 4.4,
  },

  {
    id: 12,

    title: "SecureMind",
    description: "AI Security Monitoring",

    icon: {
      type: "text",
      value: "S",
    },

    iconBg: "#DC2626",

    tags: ["Cyber Security", "Enterprise"],

    price: "€129/mo",

    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },

    featured: true,
    rating: 4.9,
  },

  {
    id: 13,
    title: "AutoScale",
    description: "ML Model Deployment Platform",
    icon: {
      type: "text",
      value: "A",
    },
    iconBg: "#4C5B71",
    tags: ["NLP & Chatbots", "Marketing"],
    price: "€49/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: true,
    rating: 4.7,
  },

  {
    id: 14,
    title: "VisionCraft",
    description: "AI Image Generation Suite",
    icon: {
      type: "text",
      value: "V",
    },
    iconBg: "#7C3AED",
    tags: ["Image Generation", "Design"],
    price: "€79/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: false,
    rating: 4.8,
  },

  {
    id: 15,
    title: "NeuroPilot",
    description: "AI Workflow Automation",
    icon: {
      type: "text",
      value: "N",
    },
    iconBg: "#2563EB",
    tags: ["Automation", "Productivity"],
    price: "€59/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: true,
    rating: 4.9,
  },

  {
    id: 16,
    title: "MarketGenius",
    description: "AI Marketing Intelligence",
    icon: {
      type: "text",
      value: "M",
    },
    iconBg: "#EA580C",
    tags: ["Marketing", "Analytics"],
    price: "€69/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: false,
    rating: 4.4,
  },

  {
    id: 17,
    title: "SecureMind",
    description: "AI Security Monitoring",
    icon: {
      type: "text",
      value: "S",
    },
    iconBg: "#DC2626",
    tags: ["Cyber Security", "Enterprise"],
    price: "€129/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: true,
    rating: 4.9,
  },

  {
    id: 18,
    title: "NeuroPilot",
    description: "AI Workflow Automation",
    icon: {
      type: "text",
      value: "N",
    },
    iconBg: "#2563EB",
    tags: ["Automation", "Productivity"],
    price: "€59/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: true,
    rating: 4.9,
  },

  {
    id: 19,
    title: "MarketGenius",
    description: "AI Marketing Intelligence",
    icon: {
      type: "text",
      value: "M",
    },
    iconBg: "#EA580C",
    tags: ["Marketing", "Analytics"],
    price: "€69/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: false,
    rating: 4.4,
  },

  {
    id: 20,
    title: "SecureMind",
    description: "AI Security Monitoring",
    icon: {
      type: "text",
      value: "S",
    },
    iconBg: "#DC2626",
    tags: ["Cyber Security", "Enterprise"],
    price: "€129/mo",
    buttons: {
      primary: "View Details",
      secondary: "Shortlist",
    },
    featured: true,
    rating: 4.9,
  },
];
