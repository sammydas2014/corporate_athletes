import { imageMap } from "@/assets/images/imageMap.js";

export const bannerData = {
  title: "Data & Analytics",
  subtitle:
    "Build modern data platforms, democratize analytics, and create a data-driven culture that turns information into competitive advantage.",
  imageUrl: imageMap.dataanalyticsBnr,
  bgColor: "#02080F",
  bgImage: imageMap.dataanalyticsBg,
  minHeight: "450px",
  ctas: [{ label: "Talk to an Expert", style: "primary" }],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solutions" },
    { label: "Data & Analytics" },
  ],
  imageAlt: "Data Analytics visual",
};

export const enterPriceChallengeData = {
  image: imageMap.ladyAnalyticsImg,
  tag: "Enterprise Challenge",

  title: "The Enterprise Challenge",

  description: [
    {
      para: "Enterprises sit on vast data assets but struggle to extract consistent value. Data is siloed across legacy systems, quality is inconsistent, and analytics capabilities are concentrated in specialized teams rather than embedded across the business.",
    },
    {
      para: "The result: slow, unreliable reporting that looks backward rather than forward — while competitors use data as a strategic weapon for real-time decision-making, personalization, and operational optimization.",
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
  subtitle: "Global Retail Group",
  imageData: imageMap.halfSpearImg,
};

export const solutionData = [
  {
    title: "Situation",
    description:
      "A $30B retailer had 15+ disconnected data warehouses, 200+ spreadsheet-based reports, and no single source of truth for customer or inventory data.",
  },
  {
    title: "What We Did",
    list: [
      "Designed a cloud-native data lakehouse architecture consolidating all data sources",
      "Implemented automated data quality and governance frameworks",
      "Built a self-service analytics platform with role-based dashboards for 5,000+ users",
      "Launched a data literacy program reaching all business unit leaders",
    ],
  },
];

export const outcomeData = {
  heading: "Outcome",
  description:
    "The retailer achieved a single source of truth for the first time, reduced reporting time by 80%, and unlocked $65M in value through data-driven merchandising and supply chain optimization.",
};

export const statergySlideData = [
  {
    details: "Reduction in reporting cycle time",
    result: "80%",
  },
  {
    details: "Users on self-service analytics platform",
    result: "5,000+",
  },
  {
    details: "Annual value from data-driven decisions",
    result: "$65M",
  },
  {
    details: "Data warehouses consolidated to single platform",
    result: "15→1",
  },
];

export const ourApproachData = [
  {
    id: 1,
    title: "Data Strategy & Architecture",
    description:
      "Define a modern data architecture — data mesh, lakehouse, or hybrid — aligned with business priorities, regulatory requirements, and cloud strategy.",
    icon: imageMap.strategyOne,
  },
  {
    id: 2,
    title: "Data Platform Engineering",
    description:
      "Build or modernize data platforms with automated ingestion, quality frameworks, cataloging, and lineage — enabling trusted, governed, self-service data access.",
    icon: imageMap.aimImg,
  },
  {
    id: 3,
    title: "Advanced Analytics & AI",
    description:
      "Deploy descriptive, predictive, and prescriptive analytics capabilities — from executive dashboards to machine learning models embedded in business processes.",
    icon: imageMap.pieChartImg,
  },
  {
    id: 4,
    title: "Data Culture & Literacy",
    description:
      "Drive enterprise-wide data adoption through literacy programs, data champion networks, and organizational incentives that make data-driven decision-making the default.",
    icon: imageMap.routeImg,
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
