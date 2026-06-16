import { imageMap } from "@/assets/images/imageMap";

export const bannersData = [
  {
    id: "ai-operating-model-reset",
    breadcrumbLabel: "Playbook details",
    title: "AI operating model reset",
    subtitle: "Define ownership, control points, and value tracking before scaling AI.",
    imageUrl: imageMap.playbookDeatils_bnr,
    imageAlt: "AI operating model visual",
    tags: [
      { prefix: "Stage", label: "Diagnose / Design", type: "stage" },
      { prefix: "Time", label: "2-4 weeks", type: "time" },
      { prefix: "Complexity", label: "Medium", type: "complexity" },
      { prefix: "Function", label: "Enterprise", type: "function" },
    ],
    ctas: [
      { label: "Download Full Toolkit", href: "#", style: "teal" },
      { label: "Build AI Stack For This Playbook", href: "#", style: "outline" },
    ],
    meta: [
      { icon: "download", label: "5 downloadable templates" },
      { icon: "diagnostic", label: "Readiness diagnostic" },
      { icon: "canvas", label: "Operating model canvas" },
    ],
  },
];
