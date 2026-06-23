import { imageMap } from "@/assets/images/imageMap";

export const bannerData = {
  title: "Specialist field notes<br>from the consortium",
  subtitle:
    "Focused perspectives from AI, digital, data, operating model, and transformation practitioners solving real implementation challenges.",
  imageUrl: imageMap.contributionBnr,
  imageAlt: "Guest Consortium Contributions visual",
  bgColor: "#090706",
  minHeight: "580px",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Guest Consortium Contributions" },
  ],
  ctas: [
    { label: "Explore Contributions", href: "#", style: "primary" },
    { label: "Become a Contributor", href: "#", style: "outline" },
  ],
};

export const perspectivesData = [
  {
    imageSrc: imageMap.threedModel,
    title: "AI Specialists",
    details: "Model capability, platform fit, agentic workflows, risk posture.",
  },
  {
    imageSrc: imageMap.riskImg,
    title: "Operating Model Experts",
    details: "Decision rights, governance cadence, workflow redesign, controls.",
  },
  {
    imageSrc: imageMap.intrigationImg,
    title: "Transformation Leaders",
    details: "Portfolio sequencing, adoption systems, benefits tracking, execution rhythm.",
  },
  {
    imageSrc: imageMap.settingsImg,
    title: "Independent Reviewers",
    details: "Vendor claims, implementation readiness, assurance, and execution challenge.",
  },
];

export const themesData = [
  "Field Notes",
  "Vendor Reality Checks",
  "Transformation Signals",
  "Governance Lessons",
  "AI Adoption Patterns",
  "Operating Model Friction",
  "Scaling AI",
  "Automation Trade-offs",
  "Data Readiness",
  "Execution Discipline",
];

export const featuredContributionsData = {
  eyebrow: "Quarterly",
  title: "Featured Contributions",
  description:
    "Chatham House peer sessions. 12–16 operators per room. Closed peer convenings for senior operators working on the same class problem. No vendors, no observers, no press.",

  items: [
    {
      id: 1,
      featured: true,
      bgImage: imageMap.quarterly_1,
      tags: [{ label: "Governance Lessons", type: "accent" }],
      title: "Agentic automation is exposing weak controls",
      description:
        "When agents act on behalf of users, every legacy approval gap becomes a compounding risk vector.",
      topics: ["Governance", "Enterprise"],
      meta: ["Risk & Controls Lead", "Banking", "6 min read"],
      ctaLabel: "Read Contribution",
      ctaLink: "#",
    },
    {
      id: 2,
      featured: false,
      bgImage: imageMap.quarterly_2,
      tags: [{ label: "Vendor Reality Checks", type: "accent" }],
      title: "Why most AI copilots stall after pilot phase",
      description:
        "Adoption flatlines when copilots are bolted onto unchanged workflows. The friction is structural, not technical.",
      topics: ["AI-enabled", "Enterprise", "Adoption"],
      meta: ["Former COO", "Insurance", "5 min read"],
      ctaLabel: "Read Contribution",
      ctaLink: "#",
    },
    {
      id: 3,
      featured: false,
      bgImage: imageMap.quarterly_3,
      tags: [{ label: "Operating Model Friction", type: "accent" }],
      title: "The decision rights problem nobody is solving",
      description:
        "AI initiatives die in the seams between functions. Cadence and ownership matter more than capability.",
      topics: ["Governance", "Mid-market"],
      meta: ["Transformation Director", "Energy", "4 min read"],
      ctaLabel: "Read Contribution",
      ctaLink: "#",
    },
    {
      id: 4,
      featured: false,
      bgImage: imageMap.quarterly_4,
      tags: [{ label: "Field Notes", type: "accent" }],
      title: "What a 90-day AI reset actually looks like",
      description:
        "Sequencing, sponsors, and the three workstreams that consistently unlock measurable benefit inside a quarter.",
      topics: ["Adoption", "Enterprise"],
      meta: ["Independent Reviewer", "Healthcare", "8 min read"],
      ctaLabel: "Read Contribution",
      ctaLink: "#",
    },
    {
      id: 5,
      featured: false,
      bgImage: imageMap.quarterly_5,
      tags: [{ label: "Data Readiness", type: "accent" }],
      title: "Stop calling it a data problem",
      description:
        "Most readiness gaps are ownership gaps. Pipelines work; accountability for the values inside them does not.",
      topics: ["Governance", "Enterprise"],
      meta: ["Chief Data Officer", "Insurance", "5 min read"],
      ctaLabel: "Read Contribution",
      ctaLink: "#",
    },
  ],
};

export const themeRankingsData = {
  eyebrow: "Most discussed themes",
  title: "What practitioners keep returning to",
  items: [
    { number: "01", title: "AI Governance", count: "24 contributions" },
    { number: "02", title: "Agentic Automation", count: "18 contributions" },
    { number: "03", title: "Operating Rhythm", count: "31 contributions" },
    { number: "04", title: "Vendor Selection", count: "63 contributions" },
    { number: "05", title: "Adoption Systems", count: "82 contributions" },
    { number: "06", title: "Data Readiness", count: "57 contributions" },
  ],
};

export const practitionerSignalsData = {
  eyebrow: "Practitioner signals",
  title: "Practitioner Signals",
  items: [
    {
      icon: imageMap.bi_cpu,
      quote: "Most organisations do not fail on AI capability. They fail on operating cadence.",
    },
    {
      icon: imageMap.bi_robot,
      quote: "Agentic automation compounds poor controls unless governance matures first.",
    },
    {
      icon: imageMap.bi_pie,
      quote: "The hardest part of scaling AI is not the model. It is the second use case.",
    },
  ],
};

export const academyResourcesData = {
  eyebrow: "Academy resources",
  title: "Build capability. Drive impact.",
  headingBtn: {
    ctaButton: { label: "View All Resources", link: "#" },
  },
  items: [
    {
      id: 1,
      bgImage: imageMap.modelMeetingImg,
      title: "Workshops",
      description: "Hands-on sessions with experts and peers to solve real challenges.",
      ctaLabel: "Explore",
      ctaLink: "#",
    },
    {
      id: 2,
      bgImage: imageMap.audienceImg2,
      title: "Executive Training",
      description: "Structured programs for leaders driving AI and enterprise transformation.",
      ctaLabel: "Explore",
      ctaLink: "#",
    },
    {
      id: 3,
      bgImage: imageMap.groupMeatingImage,
      title: "Capability Building",
      description: "Finance transformation, shared services optimization, AI-enabled forecasting",
      ctaLabel: "Explore",
      ctaLink: "#",
    },
    {
      id: 4,
      bgImage: imageMap.audienceImg2,
      title: "Executive Training",
      description: "Structured programs for leaders driving AI and enterprise transformation.",
      ctaLabel: "Explore",
      ctaLink: "#",
    },
    {
      id: 5,
      bgImage: imageMap.groupMeatingImage,
      title: "Capability Building",
      description: "Finance transformation, shared services optimization, AI-enabled forecasting",
      ctaLabel: "Explore",
      ctaLink: "#",
    },
  ],
};

export const contributionStandardsData = {
  eyebrow: "Editorial standard",
  title: "How contributions work",
  items: [
    {
      number: "01",
      title: "Curated, not open publishing",
      description: "All submissions are reviewed before publication by an editorial panel of practitioners.",
    },
    {
      number: "02",
      title: "Practitioner-led",
      description: "Contributors must have direct operational or implementation experience in the field they write about.",
    },
    {
      number: "03",
      title: "Vendor-independent",
      description: "No sponsored content. No paid placement. No commercial relationships influence what is published.",
    },
  ],
};

export const applyCTAData = {
  title: "Share field-tested perspectives with the consortium",
  subtitle: "Contribute operational lessons, implementation insights, or transformation patterns from real-world environments.",
  primaryBtnLabel: "Apply to Contribute",
  primaryBtnLink: "#",
};
