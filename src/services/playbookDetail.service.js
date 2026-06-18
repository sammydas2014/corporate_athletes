import { imageMap } from "@/assets/images/imageMap";

// Banner Data
export const bannerData = {
  title: "AI Operating Model Reset",
  subtitle: "Define ownership, control points, and value tracking before scaling AI.",
  imageUrl: imageMap.playbookDtlsBnnrImg,
  imageAlt: "AI Operating Model Reset",
  bgColor: "#02050A",
  minHeight: "450px",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Transformation playbooks", href: "/insights/playbooks"},
    { label: " Early stage" },
  ],
  ctas: [
    { label: "Download Full Toolkit", href: "/insights/articles", style: "primary" },
    { label: 'Build AI Stack for This Playbook', style: 'outline' },
  ],
  tags:[
    {
      label: "Stage:",
      data: "Diagnose / Design"
    },
    {
      label: "Time:",
      data: "2–4 weeks"
    },
    {
      label: "Complexity:",
      data: "Medium"
    },
    {
      label: "Function:",
      data: "Enterprise"
    },
  ],
  ideas:[
    {
      icon: imageMap.GoldenIdea,
      text: "5 downloadable templates"
    },
    {
      icon: imageMap.GoldenIdea,
      text: "Readiness diagnostic"
    },
    {
      icon: imageMap.GoldenIdea,
      text: "Operating model canvas"
    },

  ]
};

// When To use This
export const whenToUseData = {
  id: 1,
  badge: "WHEN TO USE THIS",
  title: "Use this playbook when...",
  image: imageMap.challengeImplementactionImg,
  alt: "When to use this playbook",
  "sections": [
      {
        "id": 1,
        "icon": imageMap?.clockImg,
        "heading": "Typical effort",
        "content": "2–4 weeks"
      },
      {
        "id": 2,
        "icon": imageMap?.trendImg,
        "heading": "Primary outcome",
        "content": "Operating clarity and execution alignment"
      },
      {
        "id": 3,
        "icon": imageMap?.trendImg,
        "heading": "Best suited for",
        "content": "Mid-large enterprises"
      }
    ],
  conditions: [
    "AI initiatives are fragmented across teams",
    "No clear ownership of AI decisions or outcomes",
    "Multiple pilots exist but few scale",
    "Decision-making is slow or inconsistent",
    "Value from AI is unclear or not tracked",
  ],
  description: "Typically used before scaling AI beyond isolated use cases.",
  leaders: [
    {
      title: "CFO",
      id: "cfo",
    },
    {
      title: "COO",
      id: "coo",
    },
    {
      title: "Head of Transformation",
      id: "head-of-transformation",
    },
  ],
};

// What you Get Data
export const whatYouGetData = {
  section: {
    badge: "WHAT YOU GET",
    title: "Working artefacts, not slideware.",
    image: {
      src: imageMap.whatYouGetImg,
      alt: "AI Readiness Artifacts",
    },
    artifacts: [
      {
        id: 1,
        icon: imageMap.ideaImg,
        title: "AI readiness diagnostic template",
        description: "Assess current maturity across workflows, data, governance, and tooling.",
      },
      {
        id: 2,
        icon: imageMap.ideaImg,
        title: "Operating model mapping canvas",
        description: "Map ownership, workflows, and control points across the organisation.",
      },
      {
        id: 3,
        icon: imageMap.ideaImg,
        title: "Decision rights framework",
        description: "Define who owns decisions across AI use cases and investments.",
      },
      {
        id: 4,
        icon: imageMap.ideaImg,
        title: "Value tracking model",
        description: "Establish KPIs linking AI initiatives to measurable business outcomes.",
      },
    ],
  },
};

// Execute Data.
export const executeData = {
  section: {
    badge: "HOW TO EXECUTE",
    title: "Five disciplined moves",
    subtitle: "Five moves",
    //   interval: { type: Number, default: 1400 },
    // loop: { type: Boolean, default: false },
    // autoStart: { type: Boolean, default: true },
    // visibilityThreshold: { type: Number, default: 0.15 },

    // accentColor: { type: String, default: '#dba23c' },
    // bgColor: { type: String, default: '#103942' },
    steps: [
      {
        id: 1,
        title: "Diagnose the current operating model",
        description: "Map how AI initiatives are currently initiated, funded, and executed.",
        icon: imageMap.ideaImg,
        isActive: true,
      },
      {
        id: 2,
        title: "Map decision rights and ownership",
        description:
          "Define clear accountability across business functions, technology teams, and data owners.",
        icon: imageMap.ideaImg,
        isActive: false,
      },
      {
        id: 3,
        title: "Identify control points",
        description:
          "Establish where governance is required: model approval, data access, deployment decisions, and performance monitoring.",
        icon: imageMap.ideaImg,
        isActive: false,
      },
      {
        id: 4,
        title: "Design the operating rhythm",
        description:
          "Define how decisions are made and tracked: weekly execution cadence, monthly value review, escalation paths.",
        icon: imageMap.ideaImg,
        isActive: false,
      },
      {
        id: 5,
        title: "Implement and stabilise",
        description:
          "Roll out the model with pilot use cases, clear KPIs, and structured review cycles.",
        icon: imageMap.ideaImg,
        isActive: false,
      },
    ],
  },
};

export const playbookData = {
  sectionTitle: "The artefacts you'll actually use",
  sectionTag: "PLAYBOOK TOOLKIT",
  data: [
    {
      id: 1,
      title: "AI Readiness Diagnostic",
      fileType: "Excel",
      icon: imageMap.layersIcon,
      description: "Assess maturity across workflows, governance, data, and tooling.",
      bestFor: "Early-stage AI scaling",
      action: "download",
    },
    {
      id: 2,
      title: "Operating Model Canvas",
      fileType: "PDF",
      icon: imageMap.layersIcon,
      description: "Map ownership, workflows, and decision flows.",
      bestFor: "Organisational redesign",
      action: "download",
    },
    {
      id: 3,
      title: "Decision Rights Matrix",
      fileType: "Google Sheet",
      icon: imageMap.layersIcon,
      description: "Define accountability across AI initiatives.",
      bestFor: "Cross-functional AI programmes",
      action: "locked",
    },
    {
      id: 4,
      title: "KPI & Value Tracker",
      fileType: "Excel",
      icon: imageMap.layersIcon,
      description: "Track impact across cost, speed, and performance.",
      bestFor: "Finance-led transformation",
      action: "locked",
    },
    {
      id: 5,
      title: "Adoption Tracker",
      fileType: "Google Sheet",
      icon: imageMap.layersIcon,
      description: "Monitor usage, adoption, and behavioural change.",
      bestFor: "Post-deployment scale-up",
      action: "locked",
    },
  ],
};

// Lense Data
export const lensData={
  "badge": "EXAMPLE FROM REAL ENGAGEMENT",
  "title": "From fragmentation to operating rhythm",
  "cta": {
    "text": "VIEW FULL CASE STUDY",
    "url": "/case-study/operating-rhythm"
  },
  cards :[
  {
    imageSrc: imageMap.threedModel,
    title: "Context",
    details:"Global finance function operating across 40+ entities with multiple ERP systems."
  },
  {
    imageSrc: imageMap.riskImg,
    title: "Action",
    details:"Defined operating model, clarified ownership, and introduced a structured governance rhythm."
  },
  {
    imageSrc: imageMap.settingsImg,
    title: "Result",
    "items": [
        "Decision cycle time reduced 50%.",
        "Eliminated duplicate AI initiatives.",
        "Clear accountability for value delivery."
      ]
  }
]

}

// Pitfall Data
export const pitfallData = {
  "badge": {
    "text": "COMMON PITFALLS",
    "dateRange": "18TH Aug + 29 Aug"
  },
  "title": "What goes wrong",
  "pitfalls": [
    {
      "id": 1,
      "icon": "warning",
      "text": "AI initiatives are fragmented across teams"
    },
    {
      "id": 2,
      "icon": "warning",
      "text": "Creating central AI teams without clear accountability"
    },
    {
      "id": 3,
      "icon": "warning",
      "text": "Running pilots without defined success metrics"
    },
    {
      "id": 4,
      "icon": "warning",
      "text": "Failing to link AI initiatives to financial outcomes"
    }
  ],
  "effortImpact": {
    "title": "Effort & impact",
    "sections": [
      {
        "id": 1,
        "icon": imageMap?.clockImg,
        "heading": "TIME TO IMPLEMENT",
        "content": "2–4 weeks"
      },
      {
        "id": 2,
        "icon": imageMap?.trendImg,
        "heading": "TYPICAL IMPACT",
        "content": [
          "Faster decision-making",
          "Reduced duplication",
          "Clear ownership of AI initiatives"
        ]
      },
      {
        "id": 3,
        "icon": imageMap?.trendImg,
        "heading": "WHO SHOULD LEAD",
        "content": [
          "CFO (for finance-led transformation)",
          "COO (for operating model alignment)",
          "Head of Transformation"
        ]
      }
    ]
  }
}

// ai Stack Data

export const aiStackData = {
  "badge": "AI STACK FOR THIS PLAYBOOK",
  "title": "A lightweight architecture, not a megaproject",
  "cta": {
    "text": "EXPLORE TOOLS USED",
    "url": "/tools"
  },
  "layers": [
    {
      "id": 1,
      "step": "01",
      "title": "Data layer",
      "description": "Centralised data and reporting.",
      "tools": ["Snowflake", "BigQuery"]
    },
    {
      "id": 2,
      "step": "02",
      "title": "Model layer",
      "description": "AI reasoning and prediction.",
      "tools": ["OpenAI", "Claude"]
    },
    {
      "id": 3,
      "step": "03",
      "title": "Orchestration",
      "description": "Workflow and decision automation.",
      "tools": ["LangGraph", "n8n"]
    },
    {
      "id": 4,
      "step": "04",
      "title": "Application layer",
      "description": "User interaction and visibility.",
      "tools": ["Web Portal", "Dashboard"]
    }
  ]
}

// Related Articale Data

export const relatedData = {
  "badge": "RELATED PLAYBOOKS",
  "title": "Related playbooks",
  "playbooks": [
    {
      "id": 1,
      "title": "Transformation governance cadence",
      "slug": "transformation-governance-cadence",
      "icon": "arrow-right",
      "url": "/playbooks/transformation-governance-cadence"
    },
    {
      "id": 2,
      "title": "Workflow redesign for AI adoption",
      "slug": "workflow-redesign-for-ai-adoption",
      "icon": "arrow-right",
      "url": "/playbooks/workflow-redesign-for-ai-adoption"
    },
    {
      "id": 3,
      "title": "AI value tracking and measurement",
      "slug": "ai-value-tracking-and-measurement",
      "icon": "arrow-right",
      "url": "/playbooks/ai-value-tracking-and-measurement"
    }
  ]
}

// Cta Data
export const integrateCTAData = {
  title: "Turn this into your operating model",
  subtitle:"Download the toolkit or discuss implementation with our team.",
  primaryBtnLabel: "Download full toolkit",
  secondaryBtnLabel: "Discuss implementation",
  primaryBtnLink: "#",
  secondaryBtnLink: "/ai-intelligence/stack-generator",
};

