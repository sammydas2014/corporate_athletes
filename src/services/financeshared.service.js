import { imageMap } from "@/assets/images/imageMap.js";

export const bannerData = {
  title: "Finance & Shared Services Transformation",
  subtitle:
    "Redesign finance operations with intelligent automation, optimize shared service centers, and unlock real-time financial insights.",
  imageUrl: imageMap.financesharedBnr,
  bgColor: "#040405",
  minHeight: "450px",
  ctas: [{ label: "Talk to an Expert", style: "primary" }],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solutions" },
    { label: "Finance & Shared Services Transformation" },
  ],
  imageAlt: "Finance visual",
};

export const enterPriceChallengeData = {
  image: imageMap.financeMeetingImg,
  tag: "Enterprise Challenge",

  title: "The Enterprise Challenge",

  description: [
    {
      para: "Finance functions are under pressure to do more with less — deliver faster closes, sharper forecasts, and deeper business insights while managing legacy systems, manual processes, and growing regulatory complexity.",
    },
    {
      para: "Shared service centers, once a source of efficiency, have become rigid cost centers struggling to adopt automation. The result: finance teams spend 60–70% of their time on transactional work instead of strategic analysis.",
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
  subtitle: "Multinational Consumer Goods Company",
  imageData: imageMap.socialConnection,
};

export const solutionData = [
  {
    title: "Situation",
    description:
      "A $15B consumer goods company's finance shared service center was processing invoices manually across 40 countries with an average cycle time of 12 days.",
  },
  {
    title: "What We Did",
    list: [
      "Mapped end-to-end procure-to-pay processes across all regions using process mining",
      "Deployed AI-powered invoice processing with automatic 3-way matching",
      "Redesigned the shared service operating model with tiered support and self-service portals",
      "Built a real-time finance dashboard for global AP visibility",
    ],
  },
];

export const outcomeData = {
  heading: "Outcome",
  description:
    "Invoice processing time dropped from 12 days to 3 days, with a 90% straight-through processing rate and significant headcount reallocation to strategic analysis.",
};

export const statergySlideData = [
  {
    details: "Reduction in invoice processing time",
    result: "75%",
  },
  {
    details: "Straight-through processing rate achieved",
    result: "90%",
  },
  {
    details: "Annual cost savings in shared services",
    result: "$12M",
  },
  {
    details: "Finance time shifted from transactional to strategic",
    result: "40%",
  },
];

export const ourApproachData = [
  {
    id: 1,
    title: "Process Intelligence",
    description:
      "We use process mining and task analysis to map actual finance workflows, identify automation opportunities, and quantify the value at stake.",
    icon: imageMap.monitorImg,
  },
  {
    id: 2,
    title: "Intelligent Automation",
    description:
      "Deploy RPA, AI-powered document processing, and smart workflows that eliminate manual touchpoints and reduce error rates across procure-to-pay, order-to-cash, and record-to-report.",
    icon: imageMap.electronicImg,
  },
  {
    id: 3,
    title: "Shared Services Optimization",
    description:
      "Redesign service delivery models, implement tiered support structures, and introduce self-service capabilities that improve speed and satisfaction.",
    icon: imageMap.pieChartImg,
  },
  {
    id: 4,
    title: "Real-Time Financial Insights",
    description:
      "Build modern analytics and reporting platforms that give finance leaders on-demand visibility into performance, risk, and opportunity.",
    icon: imageMap.financialImg,
  },
];

export const caseStudies = [
  {
    title: "Global AP Transformation Across 40 Countries",
    sub: "Reduced invoice cycle time from 12 to 3 days",
    img: imageMap.cstdImg1,
    to: "/case-studies/consumer-goods",
  },
  {
    title: "Finance Shared Services Modernization",
    sub: "Achieved $20M savings through intelligent automation",
    img: imageMap.cstdImg2,
    to: "/case-studies/energy",
  },
  {
    title: "Real-Time Claims Processing Platform",
    sub: "Reduced business processing costs by 45%",
    img: imageMap.cstdImg3,
    to: "/case-studies/healthcare",
  },
  {
    title: "Supply Chain Intelligence & Forecasting",
    sub: "Increased forecast accuracy from 72% to 94%",
    img: imageMap.cstdImg1,
    to: "/case-studies/retail",
  },
  {
    title: "Enterprise Cloud Migration & Optimization",
    sub: "Reduced infrastructure costs by 38% in 6 months",
    img: imageMap.cstdImg2,
    to: "/case-studies/technology",
  },
];

export const accelerateData = {
  title: "Ready to accelerate performance with AI?",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Submit an rfp",
};
