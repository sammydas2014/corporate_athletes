import { imageMap } from "@/assets/images/imageMap.js";

export const bannerData = {
  title: "AI Implementation and Scaling",
  subtitle:
    "Move from proof-of-concept to production at scale with robust AI pipelines, MLOps, and change management",
  imageUrl: imageMap.AIImplementationBnr,
  bgColor: "#040405",
  minHeight: "450px",
  ctas: [{ label: "Talk to an Expert", style: "primary" }],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solutions" },
    { label: "AI Implementation and Scaling" },
  ],
  imageAlt: "AI visual",
};

export const enterPriceChallengeData = {
  image: imageMap.challengeImplementactionImg,
  tag: "Enterprise Challenge",

  title: "The Enterprise Challenge",

  description: [
    {
      para: "Most enterprises have proven AI works in the lab — but fewer than 15% successfully scale models into production. The gap between prototype and enterprise-grade deployment is where value is lost: fragile pipelines, inconsistent data, missing MLOps infrastructure, and organizational resistance.",
    },
    {
      para: "Without a systematic approach to scaling, AI remains a cost center of perpetual experimentation rather than a driver of competitive advantage.",
    },
  ],

  buletLists: [
    "Fragmented AI initiatives",
    "Difficulty scaling beyond pilots",
    "Lack of governance and compliance",
    "Data silos limiting insights",
  ],
};

export const consortiumData = {
  tag: "Example Engagement",
  title: "Example Engagement",
  subtitle: "Global Manufacturing Conglomerate",
  imageData: imageMap.blueCurveImg,
};

export const solutionData = [
  {
    title: "Situation",
    description:
      "A Fortune 200 manufacturer had 25 AI prototypes but zero in production — each team used different tools, data formats, and deployment methods.",
  },
  {
    title: "What We Did",
    list: [
      "Assessed all 25 prototypes for production viability and business impact",
      "Designed a unified MLOps platform on cloud-native infrastructure",
      "Deployed the top 8 models into production with automated monitoring and retraining",
      "Trained 150+ engineers and analysts on the new platform and processes",
    ],
  },
];

export const outcomeData = {
  heading: "Outcome",
  description:
    "Within 9 months, the client moved from zero to 8 production AI models, with a clear pipeline to deploy 12 more in the following year.",
};

export const statergySlideData = [
  {
    details: "AI models deployed to production in 9 months",
    result: "8",
  },
  {
    details: "Reduction in model deployment cycle time",
    result: "70%",
  },
  {
    details: "Annual savings from predictive maintenance alone",
    result: "$28M",
  },
  {
    details: "Engineers upskilled on MLOps platform",
    result: "150+",
  },
];

export const ourApproachData = [
  {
    id: 1,
    title: "Production Readiness Assessment",
    description:
      "We evaluate model performance, data pipeline reliability, infrastructure scalability, and organizational readiness for enterprise deployment.",
    icon: imageMap.electronicImg,
  },
  {
    id: 2,
    title: "MLOps Architecture",
    description:
      "Design and implement end-to-end MLOps platforms — from feature stores and model registries to automated retraining, monitoring, and drift detection.",
    icon: imageMap.mentalHealth,
  },
  {
    id: 3,
    title: "Scalable Deployment",
    description:
      "We engineer containerized, API-driven model serving architectures that integrate seamlessly with existing enterprise systems and scale elastically.",
    icon: imageMap.pieChartImg,
  },
  {
    id: 4,
    title: "Change Management & Adoption",
    description:
      "Technical deployment is half the battle. We drive adoption through stakeholder engagement, training programs, and feedback loops that ensure AI delivers business outcomes.",
    icon: imageMap.connection,
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
