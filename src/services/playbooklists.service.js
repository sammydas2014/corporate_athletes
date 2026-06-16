import { imageMap } from "@/assets/images/imageMap";


// Banner Data
export const bannerData = {
  title: "From diagnosis to operating rhythm",
  subtitle: "Practical playbooks and templates to redesign work, governance, and execution in AI-enabled organisations",
  imageUrl: imageMap.playBookImg,
  imageAlt: "business-team-collaborating-with-futuristic-ai-workspace-illuminated-by-digital-brain 1",
  bgColor: "#000000",
  minHeight: "450px",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Transformation playbooks" },
  ],
  ctas: [
    { label: "Download Starter Kit", href: "/insights/articles", style: "primary" },
  ],
};

export const lensData= [
  {
    imageSrc: imageMap.threedModel,
    title: "Baseline the work",
    details:"Separate process symptoms from operating model constraints."
  },
  {
    imageSrc: imageMap.riskImg,
    title: "Redesign the rhythm",
    details:"Connect decisions, workflows, controls, and measures."
  },
  {
    imageSrc: imageMap.intrigationImg,
    title: "Measure execution",
    details:"Track adoption, throughput, risk, and value realization."
  },
  {
    imageSrc: imageMap.settingsImg,
    title: "Transfer capability",
    details:"Equip leaders and teams to keep improving after launch."
  },
]

export const filterData = [
  {
      "label": "Complexity",
      "options": [ {
        label: "Low",
        value: "Low",
      },
      {
        label: "Medium",
        value: "Medium",
      },
      {
        label: "High",
        value: "High",
      }],
      "selected": "Medium",
    },
    {
      "label": "Stage",
      "options":[
        {
          label: "Diagnose",
        value: "Diagnose",
        },
        {
          label: "Design",
        value: "Design",
        },
        {
          label: "Execute",
        value: "Execute",
        },
      ],
      "selected": "Diagnose"
    },
    {
      "label": "Function",
      "options":[
        {
          label: "Finance",
        value: "Finance",
        },
        {
          label: "HR",
        value: "HR",
        },
        {
          label: "Operations",
        value: "Operations",
        },
        {
          label: "Technology",
        value: "Technology",
        },
        {
          label: "Strategy",
        value: "Strategy",
        },
      ],
      "selected": "Finance"
    }

]


export const toolsData = [
  {
    "id": 1,
    "step": "01",
    "stage": "EARLY STAGE",
    "tag": "Diagnose Readiness Map",
    "title": "AI operating model reset",
    "description": "Map decision rights, work ownership, control points, adoption blockers, and value measures before scaling AI across the enterprise.",
    "checklist": [
      "Enterprise readiness assessment",
      "Enterprise readiness assessment",
      "Enterprise readiness assessment"
    ],
    "timeline": {
      "value": "3–5",
      "label": "Weeks Time"
    },
    "complexity": {
      "value": "Medium",
      "label": "Complexity"
    },
    "engagements": {
      "value": "25+",
      "label": "#engagements"
    },
    "toolsUsed": true,
    "actionUrl": "#"
  },
  {
    "id": 2,
    "step": "02",
    "stage": "SCALING",
    "tag": "Design Governance Rhythm",
    "title": "Transformation governance cadence",
    "description": "Create a practical rhythm for sponsorship, escalation, benefits tracking, vendor accountability, and execution trade-off decisions.",
    "checklist": [
      "Governance meeting framework",
      "Benefits tracking structure",
      "Executive accountability model"
    ],
    "timeline": {
      "value": "4–6",
      "label": "Weeks Time"
    },
    "complexity": {
      "value": "Medium",
      "label": "Complexity"
    },
    "engagements": {
      "value": "30+",
      "label": "#engagements"
    },
    "toolsUsed": true,
    "actionUrl": "#"
  },
  {
    "id": 3,
    "step": "03",
    "stage": "ADOPTION",
    "tag": "Execute Adoption System",
    "title": "Workflow adoption redesign",
    "description": "Translate AI capability into redesigned workflows, role changes, frontline enablement, and performance measures that survive launch.",
    "checklist": [
      "Workflow redesign framework",
      "Adoption and enablement plan",
      "Performance measurement model"
    ],
    "timeline": {
      "value": "6–10",
      "label": "Weeks Time"
    },
    "complexity": {
      "value": "High",
      "label": "Complexity"
    },
    "engagements": {
      "value": "20+",
      "label": "#engagements"
    },
    "toolsUsed": true,
    "actionUrl": "#"
  }
]


