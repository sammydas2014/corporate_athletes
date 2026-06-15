import { imageMap } from "@/assets/images/imageMap";

export const bannerData = {
  title: "AI-Driven Transformation for Performance-Focused Enterprises",
  subtitle:
    "Corporate Athletes is a boutique advisory and AI consortium helping leadership teams redesign operating models, deploy intelligent technologies, and deliver measurable performance improvements.",
  bgImage: imageMap.homeBnr,
  showAccent: true,
  accentColor: "#1b9aaa",
  minHeight: "800px",
  ctas: [
    { label: "Book a Strategy Call", style: "primary" },
    { label: "Explore AI Intelligence", style: "outline" },
  ],
};

export const caseStudiesHeader = {
  eyebrow: "Case Studies",
  title: "Proven transformation outcomes, delivered in real environments",
  subtitle:
    "A selection of engagements led by Corporate Athletes advisors. Each is documented in the same structure: context, challenge, diagnostic, intervention, technology, measured impact, and the lessons we took with us.",
  searchPlaceholder: "Find cases relevant to your context",
};

export const caseStudiesFilterGroups = [
  {
    id: "industry",
    label: "Industry",
    multiple: true,
    options: [
      { label: "Financial Services", value: "financial-services" },
      { label: "Healthcare", value: "healthcare" },
      { label: "Industrial", value: "industrial" },
      { label: "Retail & Consumer", value: "retail-consumer" },
      { label: "Technology", value: "technology" },
      { label: "Energy", value: "energy" },
    ],
  },
  {
    id: "function",
    label: "Function",
    multiple: true,
    options: [
      { label: "Finance", value: "finance" },
      { label: "Operations", value: "operations" },
      { label: "Technology", value: "technology" },
      { label: "Strategy", value: "strategy" },
      { label: "Customer", value: "customer" },
      { label: "People", value: "people" },
    ],
  },
  {
    id: "companySize",
    label: "Company Size",
    multiple: true,
    options: [
      { label: "Mid-Market", value: "mid-market" },
      { label: "Large Enterprise", value: "large-enterprise" },
      { label: "Global 2000", value: "global-2000" },
    ],
  },
  {
    id: "approach",
    label: "Approach",
    multiple: false,
    default: "all",
    options: [
      { label: "All", value: "all" },
      { label: "AI-enabled", value: "ai-enabled" },
      { label: "Non-AI", value: "non-ai" },
    ],
  },
];

export const caseStudies = [
  {
    id: 1,
    img: imageMap.cstdImg1,
    tag: "Financial Services · AI",
    title: "Global AP Transformation Across 40 Countries",
    sub: "Reduced invoice cycle",
    badges: [{ label: "75%", type: "down" }],
    to: "/case-studies/consumer-goods",
  },
  {
    id: 2,
    img: imageMap.cstdImg2,
    tag: "Insurance",
    title: "Finance Shared Services Modernization",
    sub: "Achieved $20M automation",
    badges: [{ label: "$20M", type: "up" }],
    to: "/case-studies/energy",
  },
  {
    id: 3,
    img: imageMap.cstdImg3,
    tag: "Financial Services · AI",
    title: "Real-Time Claims Processing Platform",
    sub: "Reduced business by 45%",
    badges: [{ label: "45%", type: "down" }],
    to: "/case-studies/healthcare",
  },
  {
    id: 4,
    img: imageMap.cstdImg1,
    tag: "Insurance",
    title: "Supply Chain Intelligence & Forecasting",
    sub: "Increased forecast accuracy from 72% to 94%",
    badges: [{ label: "94%", type: "up" }],
    to: "/case-studies/retail",
  },
  {
    id: 5,
    img: imageMap.cstdImg2,
    tag: "Financial Services · AI",
    title: "Enterprise Cloud Migration & Optimization",
    sub: "Reduced infrastructure costs by 38% in 6 months",
    badges: [{ label: "38%", type: "down" }],
    to: "/case-studies/technology",
  },
];

export const caseStudiesGrid = [
  {
    id: 1,
    image: imageMap.cstd_card_1,
    category: "Healthcare · AI",
    title: "Global / 20+ countries",
    meta: "Close cycle",
    badges: [{ label: "85%", type: "down" }],
  },
  {
    id: 2,
    image: imageMap.cstd_card_2,
    category: "Insurance",
    title: "£500m revenue business",
    meta: "Customer Conversion",
    badges: [{ label: "3%", type: "up" }],
  },
  {
    id: 3,
    image: imageMap.cstd_card_3,
    category: "Retail",
    title: "8-week delivery",
    meta: "Costs",
    badges: [{ label: "£2.1m", type: "down" }],
  },
  {
    id: 4,
    image: imageMap.cstd_card_4,
    category: "Technology",
    title: "£500m revenue business",
    meta: "Customer Conversion",
    badges: [{ label: "3%", type: "up" }],
  },
  {
    id: 5,
    image: imageMap.cstd_card_5,
    category: "Energy",
    title: "Global / 20+ countries",
    meta: "Close cycle",
    badges: [{ label: "85%", type: "down" }],
  },
  {
    id: 6,
    image: imageMap.cstd_card_6,
    category: "Insurance",
    title: "Global / 20+ countries",
    meta: "Close cycle",
    badges: [{ label: "65%", type: "up" }],
  },
  {
    id: 7,
    image: imageMap.cstd_card_2,
    category: "Financial Services · AI",
    title: "40-country AP rollout",
    meta: "Invoice cycle time",
    badges: [{ label: "75%", type: "down" }],
  },
  {
    id: 8,
    image: imageMap.cstd_card_4,
    category: "Manufacturing",
    title: "$20M annual savings",
    meta: "Operating costs",
    badges: [{ label: "$20M", type: "up" }],
  },
  {
    id: 9,
    image: imageMap.cstd_card_6,
    category: "Consumer Goods",
    title: "94% forecast accuracy",
    meta: "Forecast accuracy",
    badges: [{ label: "94%", type: "up" }],
  },
];

export const accelerateData = {
  title: "Deliver similar outcomes into your own transformation",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Submit an rfp",
};
