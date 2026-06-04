import { imageMap } from "@/assets/images/imageMap.js";

export const BannerData = {
  title: "AI Strategy & Governance",
  subtitle:
    "Define your AI vision and build responsible frameworks that align innovation with enterprise risk management.",
  imageUrl: imageMap.AIStrategyGovernanceBnr,
  overlay: true,
  showAccent: true,
  bgColor: "#040405",
  minHeight: "450px",
  ctas: [{ label: "Talk to an Expert", style: "primary" }],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solutions" },
    { label: "AI Strategy & Governance" },
  ],
};

export const enterPriceChallengeData = {
  image: imageMap.groupMeatingImage,
  tag: "Enterprise Challenge",

  title: "The Enterprise Challenge",

  description: [
    {
      para: "Organizations recognize AI's transformative potential but struggle to move beyond fragmented pilots. Without a cohesive strategy, investments scatter across departments, governance gaps expose the business to regulatory and reputational risk, and leadership lacks a clear roadmap for value creation.",
    },
    {
      para: "The absence of structured AI governance leaves enterprises vulnerable to bias, data privacy violations, and compliance failures — issues that escalate as AI adoption scales.",
    },
  ],

  buletLists: [
    "Fragmented AI initiatives",
    "Difficulty scaling beyond pilots",
    "Lack of governance and compliance",
    "Data silos limiting insights",
  ],
};

export const ourApproachData = [
  {
    id: 1,
    title: "AI Maturity Assessment",
    description:
      "We benchmark your current capabilities, data readiness, and organizational culture against industry leaders to identify the highest-impact opportunities.",
    icon: imageMap.electronicImg,
  },
  {
    id: 2,
    title: "Strategic Roadmap Design",
    description:
      "A phased, business-aligned AI roadmap that prioritizes use cases by feasibility, ROI, and strategic value — with clear milestones and ownership.",
    icon: imageMap.mentalHealth,
  },
  {
    id: 3,
    title: "Governance Framework",
    description:
      "We establish responsible AI principles, model risk management protocols, and cross-functional review boards that satisfy regulators and build stakeholder trust.",
    icon: imageMap.pieChartImg,
  },
  {
    id: 4,
    title: "Operating Model Alignment",
    description:
      "We design the talent, process, and technology structures needed to sustain AI innovation at scale — from Center of Excellence models to federated delivery.",
    icon: imageMap.connection,
  },
];

export const consortiumData = {
  tag: "Example Engagement",
  title: "Example Engagement",
  subtitle: "Global Financial Services Firm",
  imageData: imageMap.bubblesPartical,
};

export const solutionData = [
  {
    title: "Situation",
    description:
      "A top-20 bank had 40+ AI experiments running without centralized oversight, creating compliance exposure and duplicated spend.",
  },
  {
    title: "What We Did",
    list: [
      "Conducted enterprise-wide AI inventory and maturity assessment across 12 business units",
      "Designed a tiered governance framework with model risk classification and ethical review gates",
      "Built a 3-year strategic roadmap prioritizing 15 high-value use cases",
      "Established an AI Center of Excellence with embedded governance capabilities",
    ],
  },
];

export const outcomeData = {
  heading: "Outcome",
  description:
    "The bank consolidated AI efforts under a unified strategy, reduced duplicated tooling costs, and achieved regulatory approval for its governance framework ahead of upcoming AI legislation.",
};

export const statergySlideData = [
  {
    details: "Reduction in duplicated AI tooling spend",
    result: "60%",
  },
  {
    details: "Faster time-to-production for AI models",
    result: "3x",
  },
  {
    details: "Regulatory compliance across all AI initiatives",
    result: "100%",
  },
  {
    details: "Projected annual value from prioritized use cases",
    result: "$45M",
  },
];

export const caseStudies = [
  {
    title: 'Global AP Transformation Across 40 Countries',
    sub: 'Reduced invoice cycle time from 12 to 3 days',
    img: imageMap.cstdImg1,
    to: '/case-studies/consumer-goods',
  },
  {
    title: 'Finance Shared Services Modernization',
    sub: 'Achieved $20M savings through intelligent automation',
    img: imageMap.cstdImg2,
    to: '/case-studies/energy',
  },
  {
    title: 'Real-Time Claims Processing Platform',
    sub: 'Reduced business processing costs by 45%',
    img: imageMap.cstdImg3,
    to: '/case-studies/healthcare',
  },
  {
    title: 'Supply Chain Intelligence & Forecasting',
    sub: 'Increased forecast accuracy from 72% to 94%',
    img: imageMap.cstdImg1,
    to: '/case-studies/retail',
  },
  {
    title: 'Enterprise Cloud Migration & Optimization',
    sub: 'Reduced infrastructure costs by 38% in 6 months',
    img: imageMap.cstdImg2,
    to: '/case-studies/technology',
  },
]
