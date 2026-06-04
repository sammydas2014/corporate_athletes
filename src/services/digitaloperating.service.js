import { imageMap } from "@/assets/images/imageMap.js";

export const bannerData = {
  title: "Digital Operating Model Design",
  subtitle:
    "Architect agile, technology-enabled operating models that break down silos and drive cross-functional collaboration at speed.",
  imageUrl: imageMap.digitaloperatingBnr,
  bgColor: "#040405",
  minHeight: "450px",
  ctas: [{ label: "Talk to an Expert", style: "primary" }],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Solution", href: "/solutions" },
    { label: "Digital Operating Model Design" },
  ],
  imageAlt: "Digital Operating Model visual",
};

export const enterPriceChallengeData = {
  image: imageMap.modelMeetingImg,
  tag: "Enterprise Challenge",

  title: "The Enterprise Challenge",

  description: [
    {
      para: "Traditional operating models — built around rigid hierarchies, functional silos, and sequential handoffs — cannot keep pace with digital-era demands. Enterprises need to deliver customer value faster, respond to market shifts in real time, and integrate technology into every business function.",
    },
    {
      para: "Yet most transformation efforts stall because they address technology without rethinking how the organization actually works — the structures, decision rights, talent models, and collaboration patterns that determine whether digital investments create value.",
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
  subtitle: "European Telecommunications Provider",
  imageData: imageMap.graphTreeImg,
};

export const solutionData = [
  {
    title: "Situation",
    description:
      "A major telco's 18-month product launch cycles were losing ground to digital-native competitors shipping features weekly.",
  },
  {
    title: "What We Did",
    list: [
      "Diagnosed structural bottlenecks across product, engineering, and operations",
      "Designed a product-centric operating model with cross-functional squads and platform teams",
      "Defined new roles including product owners, chapter leads, and platform engineers",
      "Piloted the new model in two business units before enterprise-wide rollout",
    ],
  },
];

export const outcomeData = {
  heading: "Outcome",
  description:
    "Product launch cycles compressed from 18 months to 6 weeks, NPS improved significantly, and employee engagement scores increased as teams gained autonomy.",
};

export const statergySlideData = [
  {
    details: "Faster product launch cycles",
    result: "12x",
  },
  {
    details: "NPS point improvement",
    result: "+32",
  },
  {
    details: "Increase in employee engagement scores",
    result: "45%",
  },
  {
    details: "Revenue uplift from faster time-to-market",
    result: "€50M",
  },
];

export const ourApproachData = [
  {
    id: 1,
    title: "Current State Diagnostic",
    description:
      "We map your operating model's structures, processes, decision rights, and capability gaps against your strategic ambitions and competitive landscape.",
    icon: imageMap.loupeImg,
  },
  {
    id: 2,
    title: "Target Model Design",
    description:
      "Co-create a future-state operating model that balances agility with governance — defining team topologies, platform capabilities, and ways of working.",
    icon: imageMap.aimImg,
  },
  {
    id: 3,
    title: "Capability & Talent Strategy",
    description:
      "Identify critical capability gaps and design build-buy-partner strategies for talent, including new roles, reskilling programs, and ecosystem partnerships.",
    icon: imageMap.pieChartImg,
  },
  {
    id: 4,
    title: "Transition Roadmap & Execution",
    description:
      "A phased implementation plan with quick wins, structural changes, and culture interventions ",
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


