import { imageMap } from "@/assets/images/imageMap"

export const stackHdngData = {
"id": "stack-001",
"label": "YOUR GENERATED STACK",
"title": "AI stack for a mid-cap company, focused on Finance assistance, built around NetSuite.",
"score": {
"value": 8.6,
"max": 10,
"label": "STACK CONFIDENCE"
},
"highlights": [
{
"type": "positive",
"icon": "check",
"text": "Strong for finance projects"
},
{
"type": "positive",
"icon": "check",
"text": "Good scalability"
},
{
"type": "warning",
"icon": "alert",
"text": "Moderate integration complexity"
}
],
"metrics": [
{
"label": "ESTIMATED ROI",
"value": "High",
"icon": "graph-up-arrow"
},
{
"label": "TIME TO VALUE",
"value": "6–10 Weeks",
"icon": "clock"
}
]
}

export const architecturePipelineData = {
  "title": "Architecture Pipeline",
  "actionButton": {
    "label": "MODIFY INPUTS",
    "action": "modifyInputs"
  },

  "coreSystem": {
    "label": "NetSuite",
    "subLabel": "Core System"
  },
  "steps": [
    {
      "id": 1,
      "icon": imageMap.layersIcon ,
      "type": "data",
      "title": "DATA LAYER",
      "tool": "BIGQUERY",
      "description": "Unified data foundation",
      "indicators": [
        { "label": "Cost", "status": "good" },
        { "label": "Scalability", "status": "good" },
        { "label": "Governance", "status": "warning" },
        { "label": "Complexity", "status": "good" }
      ]
    },
    {
      "id": 2,
      "type": "model",
      "title": "MODEL LAYER",
      "tool": "OPENAI GPT-4O",
      "featured": true,
      "bullets": [
        {
          "text": "Leading performance for reasoning and multimodal use cases",
          "status": "good"
        },
        {
          "text": "Fast API-based deployment with strong ecosystem",
          "status": "good"
        },
        {
          "text": "Dependency on external provider and variable usage costs",
          "status": "warning"
        }
      ]
    },
    {
      "id": 3,
      "icon": imageMap.layersIcon ,
      "type": "orchestration",
      "title": "ORCHESTRATION",
      "tool": "LANGGRAPH",
      "description": "Agent & workflow logic",
      "indicators": [
        { "label": "Flexibility", "status": "good" },
        { "label": "Control", "status": "good" },
        { "label": "Complexity", "status": "danger" },
        { "label": "Time to deploy", "status": "warning" }
      ]
    },
    {
      "id": 4,
      "icon": imageMap.layersIcon ,
      "type": "application",
      "title": "APPLICATION",
      "tool": "CUSTOM CHAT UI (NEXT.JS)",
      "description": "User-facing experience",
      "indicators": [
        { "label": "UX flexibility", "status": "good" },
        { "label": "Customisation", "status": "good" },
        { "label": "Time to build", "status": "danger" },
        { "label": "Maintenance", "status": "danger" }
      ]
    },
    {
      "id": 5,
      "icon": imageMap.layersIcon ,
      "type": "automation",
      "title": "AUTOMATION",
      "tool": "N8N",
      "description": "Process triggers & actions",
      "indicators": [
        { "label": "Cost", "status": "good" },
        { "label": "Flexibility", "status": "good" },
        { "label": "Enterprise readiness", "status": "warning" },
        { "label": "Scalability", "status": "warning" }
      ]
    }
  ]
}

// Stack Works Data
export const stackWorksData = {
  "title": "Why This Stack Works",
  "content": {
    "bulletPoints": [
      "Data is centralised but underutilised",
      "Manual reporting and reconciliation still exist",
      "There is a need for AI-driven insights without replacing core systems"
    ],
  }
}

// Integrates Data
export const integratesData = {
  "sectionTitle": "How This Integrates With NetSuite",
  "cards": [
    {
      "id": 1,
      "title": "DATA FLOW",
      "description": "NetSuite remains the system of record. Data is mirrored into BigQuery via change-data-capture, enriched by OpenAI GPT-4o, and results are written back through NetSuite's API."
    },
    {
      "id": 2,
      "title": "API / CONNECTORS",
      "description": "Native NetSuite connectors + REST/GraphQL APIs. No replacement of core workflows — only AI augmentation layered on top."
    },
    {
      "id": 3,
      "title": "WHAT STAYS VS EXTENDS",
      "description": "NetSuite keeps ownership of master data, security and compliance. The AI stack extends it with reasoning, generation and intelligent automation."
    }
  ]
}

// trade off data

export const tradeOffData = {
  "sectionTitle": "Trade-Offs & Considerations",
  "variant": "warning",
  "items": [
    {
      "id": 1,
      "icon": "exclamation-triangle",
      "text": "LangGraph introduces engineering complexity"
    },
    {
      "id": 2,
      "icon": "exclamation-triangle",
      "text": "OpenAI dependency creates vendor exposure"
    },
    {
      "id": 3,
      "icon": "exclamation-triangle",
      "text": "Custom UI requires ongoing maintenance"
    },
    {
      "id": 4,
      "icon": "exclamation-triangle",
      "text": "n8n may not meet enterprise governance requirements"
    }
  ]
}

// Alternative tool data
export const alternativeToolsData = {
  "subtitle": "Why This Tool vs Alternatives",
  "data": [
  {
    "id": 1,
    "category": "Data Layer",
    "title": "BigQuery",
    "description": "Serverless data warehouse with strong analytics and ML integration.",
    "chosenBecause": [
      "Serverless, zero-ops analytics",
      "Tight ML and AI integration",
      "Cost-efficient for bursty workloads"
    ],
    "alternatives": [
      {
        "name": "Snowflake",
        "reason": "strong governance, higher cost"
      },
      {
        "name": "Redshift",
        "reason": "AWS-native, less serverless"
      }
    ],
    "tags": [
      "Serverless",
      "ML-ready",
      "Cost-efficient"
    ]
  },
  {
    "id": 2,
    "category": "Model Layer",
    "title": "OpenAI GPT-4o",
    "description": "Balanced frontier reasoning model with multimodal capability.",
    "chosenBecause": [
      "Strongest reasoning capability",
      "Mature API ecosystem",
      "Fastest time to production"
    ],
    "alternatives": [
      {
        "name": "Claude",
        "reason": "stronger safety, weaker ecosystem"
      },
      {
        "name": "Gemini",
        "reason": "better Google integration, less mature tooling"
      }
    ],
    "tags": [
      "Reasoning",
      "Multimodal",
      "Production-proven"
    ]
  },
  {
    "id": 3,
    "category": "Orchestration",
    "title": "LangGraph",
    "description": "Stateful agent orchestration with deterministic branching.",
    "chosenBecause": [
      "Stateful, deterministic agent flows",
      "Easier to debug than free-form agents",
      "Better fit for assistant use cases"
    ],
    "alternatives": [
      {
        "name": "CrewAI",
        "reason": "simpler multi-agent, less determinism"
      },
      {
        "name": "Custom state machine",
        "reason": "full control, more build effort"
      }
    ],
    "tags": [
      "Stateful agents",
      "Deterministic flows",
      "Debuggable"
    ]
  },
  {
    "id": 4,
    "category": "Application",
    "title": "Custom chat UI (Next.js)",
    "description": "Branded conversational interface with full control over UX.",
    "chosenBecause": [
      "Full control over branding and UX",
      "SEO-friendly and performant",
      "Flexible enough for any AI flow"
    ],
    "alternatives": [
      {
        "name": "Vercel AI SDK templates",
        "reason": "faster start, less differentiation"
      },
      {
        "name": "Chainlit",
        "reason": "rapid prototyping, weaker production polish"
      }
    ],
    "tags": [
      "Branded",
      "Flexible",
      "Performant"
    ]
  },
  {
    "id": 5,
    "category": "Automation",
    "title": "n8n",
    "description": "Self-hostable workflow automation with full source control.",
    "chosenBecause": [
      "Self-hostable and open-source",
      "Tight ML and AI integration",
      "Cost-efficient for bursty workloads"
    ],
    "alternatives": [
      {
        "name": "Zapier",
        "reason": "easier UX, higher cost at scale"
      },
      {
        "name": "Workato",
        "reason": "stronger governance, enterprise pricing"
      }
    ],
    "tags": [
      "Self-hostable",
      "Open",
      "Cost-efficient"
    ]
  }
]
}

// Assesment Data
export const assesmentData = {
  "orchestrationAssessment": {
    "title": "Orchestration Assessment",
    "items": [
      {
        "label": "Estimated timeline",
        "value": "6–10 weeks"
      },
      {
        "label": "Integration complexity",
        "value": "Medium"
      },
      {
        "label": "Key dependencies",
        "value": "NetSuite API access, data readiness, security review"
      },
      {
        "label": "Internal capability required",
        "value": "Moderate — 1–2 engineers + advisor"
      }
    ]
  },
  "estimatedCostRange": {
    "title": "Estimated Cost Range",
    "items": [
      {
        "label": "Monthly infrastructure",
        "value": "£3k–£10k / month"
      },
      {
        "label": "LLM usage",
        "value": "variable, typically £2k–£10k / month (token-based)"
      },
      {
        "label": "Implementation (one-off)",
        "value": "£40k–£120k one-off"
      }
    ],
    "note": "Indicative ranges. Actuals depend on data volumes, token usage and team setup."
  }
}

// Alternate Stack Data
export const alternateStacksData = {
  "title": "Alternative Stacks",
  "stacks": [
    {
      "id": 1,
      "option": "OPTION A: FASTER / LOWER COST",
      "badge": "Lower-Cost Stack",
      "heading": "Faster to ship, lighter footprint",
      "technologies": [
        "Supabase",
        "OpenAI GPT-4o-mini",
        "LangChain",
        "Retool",
        "Zapier"
      ],
      "tradeOff": {
        "label": "Trade-off:",
        "description": "less scalability, weaker governance"
      }
    },
    {
      "id": 2,
      "option": "OPTION B: ENTERPRISE-GRADE",
      "badge": "Enterprise-Grade Stack",
      "heading": "Maximum scale, governance & SLAs",
      "technologies": [
        "Snowflake",
        "Azure OpenAI + Claude",
        "LangGraph + Temporal",
        "Custom React app",
        "Workato"
      ],
      "tradeOff": {
        "label": "Trade-off:",
        "description": "higher cost, longer implementation"
      }
    }
  ]
}

// Cta Data
export const integrateCTAData = {
  title: "Turn this into your implementation roadmap",
  primaryBtnLabel: "Discuss this stack with us",
  secondaryBtnLabel: "Refine my inputs",
  primaryBtnLink: "#",
  secondaryBtnLink: "/ai-intelligence/stack-generator",
};

