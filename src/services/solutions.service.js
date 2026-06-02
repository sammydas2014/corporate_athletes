import { imageMap } from "@/assets/images/imageMap.js";

export const bannerData = {
  title: "Transform Your Business with AI-Driven Solutions",
  subtitle:
    "Five integrated capability pillars designed to accelerate your organization's digital evolution and unlock sustainable growth.",
  bgImage: imageMap.solutionBnrBg,
  imageUrl: imageMap.solutionBnr,
  minHeight: "450px",
};

export const capability = [
  {
    id: 1,
    title: "AI Strategy and Governance",
    description:
      "We help organizations define a clear AI vision, roadmap, and governance framework that balances innovation with risk.",
    icon: imageMap.capability1,
    to: "/solutions/ai-strategy-governance",
  },
  {
    id: 2,
    title: "AI Implementation and Scaling",
    description:
      "We accelerate the deployment of AI solutions from proof-of-concept to full-scale production across the enterprise.",
    icon: imageMap.capability2,
    to: "/solutions/ai-implementation-scaling",
  },
  {
    id: 3,
    title: "Finance and Shared Services Transformation",
    description:
      "We redesign finance and shared services operating models to unlock efficiency, agility, and insight.",
    icon: imageMap.capability3,
    to: "/solutions/finance-shared-services",
  },
  {
    id: 4,
    title: "Digital Operating Model Design",
    description:
      "Architect agile, technology-enabled operating models that break down silos and drive cross-functional collaboration at speed.",
    icon: imageMap.capability4,
    to: "/solutions/digital-operating-model",
  },
  {
    id: 5,
    title: "Data and Analytics",
    description:
      "Build modern data platforms, democratize analytics, and create a data-driven culture that turns information into competitive advantage.",
    icon: imageMap.capability5,
    to: "/solutions/data-analytics",
  },
];
