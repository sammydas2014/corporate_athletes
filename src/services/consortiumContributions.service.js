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
