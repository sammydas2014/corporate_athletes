import { imageMap } from "@/assets/images/imageMap"

export const bannerData = {
  title: "Thinking that performs",
  subtitle: "Applied thinking at the intersection of AI, operating models, and execution.",
  imageUrl: imageMap.insight_bnr,
  imageAlt: "Insights visual",
  bgColor: "#000000",
  minHeight: "450px",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights" },
  ],
  ctas: [
    { label: "Explore latest work", href: "/insights/articles", style: "primary" },
  ],
};

export const analysisData = [
  {
    "id": 1,
    "category": "Articles",
    "title": "Executive signal briefs",
    "description": "Concise perspectives on AI adoption, transformation governance, and enterprise performance pressure.",
    "footer": "Monthly perspective",
    "active": false
  },
  {
    "id": 2,
    "category": "AI deep dives",
    "title": "Technical intelligence without vendor theater",
    "description": "Independent analysis of emerging AI capabilities, model risk, platform fit, and implementation realities.",
    "footer": "Capability analysis",
    "active": true
  },
  {
    "id": 3,
    "category": "Transformation playbooks",
    "title": "From diagnosis to operating rhythm",
    "description": "Practical guides for redesigning work, governance, workflows, measures, and adoption mechanisms.",
    "footer": "Field-tested guides",
    "active": false
  },
  {
    "id": 4,
    "category": "Guest consortium contributions",
    "title": "Specialist practitioner field notes",
    "description": "Focused contributions from senior AI, digital, data, change, and operating model experts.",
    "footer": "Consortium viewpoint",
    "active": false
  }
]
