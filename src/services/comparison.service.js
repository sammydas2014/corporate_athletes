export const comparisonPageHeader = {
  title: "Compare AI Tools",
  subtitle: "Evaluate tools across capabilities, architecture fit, and implementation complexity",
};

export const MAX_COMPARISON_ITEMS = 5;

export const defaultComparisonToolIds = [1, 2, 3];

export const comparisonTools = [
  {
    id: 1,
    name: "OpenAI",
    category: "Vector Database",
    tags: ["Data Layer", "Analytics", "Enterprise"],
    description:
      "Managed vector database for high-performance AI applications and semantic search across enterprise data sources.",
    score: "4.9",
    stackRole: "Automation Layer",
    integrationFit: "Salesforce, SAP",
    preferred: "preferred",
    initials: "OA",
    iconBg: "#0BA88724",
    accentBg: "#E6F4EE",
    accentText: "#126C55",
    popular: true,
    sections: {
      overview: {
        category: "Model Layer",
        modality: "Text / Multimodal",
        bestFor: "Content / copilots",
        riskLockIn: "Medium (API dependency)",
      },
      scoring: {
        easeOfUse: 4.9,
        integration: 4,
        projectedRoi: 4.8,
      },
      implementation: {
        timeToDeploy: { value: "Fast", tone: "good" },
        complexity: { value: "Low", tone: "good" },
        skillsRequired: { value: "Low", tone: "good" },
        pricingModel: "Pay-per-token",
        requiredResources: "None (managed)",
      },
      strengthLimitation: {
        strengths: [
          "Best-in-class reasoning with o3/o4-mini",
          "Broad ecosystem of integrations",
          "Function calling & structured outputs",
          "Fine-tuning support",
        ],
        limitations: [
          "Cost scales with heavy usage",
          "Data privacy concerns for regulated industries",
          "No on-premise deployment option",
        ],
      },
      architectureFit: {
        stackPosition: "Model Layer",
        fitDescription: "Sits at the inference core; ideal as the cognitive core for any AI workflow.",
      },
      worksBestWith: {
        ecosystemStrength: { value: "High", tone: "good" },
        nativeIntegrations: ["LangChain", "Pinecone", "Zapier"],
        bestPairedWith: "Retrieval layer, orchestration tools, application frameworks",
      },
    },
  },
  {
    id: 2,
    name: "UiPath",
    category: "Framework",
    tags: ["Data Layer", "Analytics", "Enterprise"],
    description: "Standard framework for developing applications powered by large language models.",
    score: "4.8",
    stackRole: "Orchestration",
    integrationFit: "Python, JS SDKs",
    preferred: "preferred",
    initials: "UP",
    iconBg: "#F59E0B26",
    iconClr: "#0DA683",
    accentBg: "#FDEEE5",
    accentText: "#F59E0B",
    sections: {
      overview: {
        category: "Automation",
        modality: "Structured",
        bestFor: "Process automation",
        riskLockIn: "High (platform lock-in)",
      },
      scoring: {
        easeOfUse: 2.5,
        integration: 4.2,
        projectedRoi: 2.6,
      },
      implementation: {
        timeToDeploy: { value: "Medium", tone: "warn" },
        complexity: { value: "Medium", tone: "warn" },
        skillsRequired: { value: "Medium", tone: "warn" },
        pricingModel: "Per-robot / subscription",
        requiredResources: "RPA developer",
      },
      strengthLimitation: {
        strengths: [
          "Mature enterprise RPA platform",
          "Native AI document understanding",
          "Marketplace with SAP & Oracle connectors",
          "Attended + unattended automation modes",
        ],
        limitations: [
          "High licensing cost",
          "Steep learning curve for complex bots",
          "Overkill for simple automations",
        ],
      },
      architectureFit: {
        stackPosition: "Automation Layer",
        fitDescription: "Automation layer bridging legacy systems and modern AI, excellent for process-heavy workflows.",
      },
      worksBestWith: {
        ecosystemStrength: { value: "Medium", tone: "warn" },
        nativeIntegrations: ["SAP", "Oracle", "Salesforce"],
        bestPairedWith: "ERP systems, workflow tools, human-in-the-loop solutions",
      },
    },
  },
  {
    id: 3,
    name: "Snowflake",
    category: "ETL Pipeline",
    tags: ["Data Layer", "Analytics", "Enterprise"],
    description: "Automated data migration from Salesforce and SaaS apps to your warehouse.",
    score: "4.7",
    stackRole: "Data Layer",
    integrationFit: "Salesforce, Snowflake",
    preferred: "preferred",
    initials: "SF",
    iconBg: "#21BAF226",
    accentBg: "#E5F4FB",
    accentText: "#21BAF2",
    sections: {
      overview: {
        category: "Automation",
        modality: "Structured",
        bestFor: "Data platform",
        riskLockIn: "Medium-High (data gravity)",
      },
      scoring: {
        easeOfUse: 3.8,
        integration: 4.5,
        projectedRoi: 4.3,
      },
      implementation: {
        timeToDeploy: { value: "Medium", tone: "warn" },
        complexity: { value: "Medium", tone: "warn" },
        skillsRequired: { value: "High", tone: "bad" },
        pricingModel: "Credit-based compute",
        requiredResources: "Data engineer",
      },
      strengthLimitation: {
        strengths: [
          "Near-unlimited scale with elastic compute",
          "Native data sharing across orgs",
          "Snowpark for Python/ML pipelines",
          "Excellent BI tool integration",
        ],
        limitations: [
          "Compute costs can spike unexpectedly",
          "Requires data engineering expertise",
          "Vendor lock-in for storage format",
        ],
      },
      architectureFit: {
        stackPosition: "Data Layer",
        fitDescription: "Foundation data layer that stores and transforms data consumed by ML and BI tools.",
      },
      worksBestWith: {
        ecosystemStrength: { value: "High", tone: "good" },
        nativeIntegrations: ["dbt", "Fivetran", "Tableau"],
        bestPairedWith: "ETL/ELT, BI tools, AI/ML platforms, data sharing",
      },
    },
  },
  {
    id: 4,
    name: "Mistral AI",
    category: "LLM Provider",
    tags: ["Data Layer", "Analytics", "Enterprise"],
    description: "Open-weight high-efficiency language models for private cloud deployment.",
    score: "4.9",
    stackRole: "Model Layer",
    integrationFit: "vLLM, AWS Sagemaker",
    preferred: "preferred",
    initials: "MA",
    iconBg: "#ff700026",
    accentBg: "#FFF1E6",
    accentText: "#FF7000",
    sections: {
      overview: {
        category: "Model Layer",
        modality: "Text / Code",
        bestFor: "Open-weight LLM deployment",
        riskLockIn: "Low (open-weight, self-hostable)",
      },
      scoring: {
        easeOfUse: 3.6,
        integration: 4.1,
        projectedRoi: 4.5,
      },
      implementation: {
        timeToDeploy: { value: "Medium", tone: "warn" },
        complexity: { value: "High", tone: "bad" },
        skillsRequired: { value: "High", tone: "bad" },
        pricingModel: "Open-weight (free) / API pay-per-token",
        requiredResources: "ML / Infra engineer (self-hosted)",
      },
      strengthLimitation: {
        strengths: [
          "Open-weight models, fully self-hostable",
          "Strong performance-to-cost ratio",
          "Permissive licensing for commercial use",
          "Fast inference with optimized runtimes",
        ],
        limitations: [
          "Requires infrastructure to self-host",
          "Smaller ecosystem than OpenAI",
          "Less mature fine-tuning tooling",
        ],
      },
      architectureFit: {
        stackPosition: "Model Layer",
        fitDescription: "Drop-in alternative inference core for cost-sensitive or private-cloud AI workloads.",
      },
      worksBestWith: {
        ecosystemStrength: { value: "Medium", tone: "warn" },
        nativeIntegrations: ["vLLM", "AWS Sagemaker", "Hugging Face"],
        bestPairedWith: "Self-hosted inference stacks, vLLM, orchestration frameworks",
      },
    },
  },
  {
    id: 5,
    name: "Pinecone",
    category: "Vector Database",
    tags: ["Data Layer", "Analytics", "Enterprise"],
    description:
      "Managed vector database for high-performance AI applications and semantic search across enterprise data sources.",
    score: "4.9",
    stackRole: "Data Layer",
    integrationFit: "LangChain, OpenAI",
    preferred: "preferred",
    initials: "PC",
    iconBg: "#1e8e6d26",
    accentBg: "#E6F7F1",
    accentText: "#1E8E6D",
    sections: {
      overview: {
        category: "Data Layer",
        modality: "Vector / Embeddings",
        bestFor: "Vector search & retrieval",
        riskLockIn: "Medium (managed service lock-in)",
      },
      scoring: {
        easeOfUse: 4.2,
        integration: 4.6,
        projectedRoi: 4.3,
      },
      implementation: {
        timeToDeploy: { value: "Fast", tone: "good" },
        complexity: { value: "Low", tone: "good" },
        skillsRequired: { value: "Low", tone: "good" },
        pricingModel: "Usage-based (storage + queries)",
        requiredResources: "None (managed)",
      },
      strengthLimitation: {
        strengths: [
          "Purpose-built for vector search at scale",
          "Low-latency similarity search at billions of vectors",
          "Simple API and SDKs",
          "Seamless integration with LangChain / LLM stacks",
        ],
        limitations: [
          "Cost scales with index size & query volume",
          "Vendor lock-in for vector storage",
          "No built-in embedding generation",
        ],
      },
      architectureFit: {
        stackPosition: "Data Layer",
        fitDescription: "Dedicated vector store layer for semantic search and retrieval-augmented generation pipelines.",
      },
      worksBestWith: {
        ecosystemStrength: { value: "High", tone: "good" },
        nativeIntegrations: ["LangChain", "OpenAI", "LlamaIndex"],
        bestPairedWith: "LLM providers, embedding models, RAG orchestration tools",
      },
    },
  },
];

// Shared schema only - per-tool values live on comparisonTools[i].sections
export const comparisonSections = [
  {
    key: "overview",
    title: "A. Overview",
    rows: [
      { key: "category", label: "Category", type: "chip", accent: true },
      { key: "modality", label: "Modality", type: "text" },
      { key: "bestFor", label: "Best for", type: "text" },
      { key: "riskLockIn", label: "Risk / Lock-in", type: "text" },
    ],
  },
  {
    key: "scoring",
    title: "B. Scoring Comparison",
    rows: [
      { key: "easeOfUse", label: "Ease of Use", type: "score" },
      { key: "integration", label: "Integration", type: "score" },
      { key: "projectedRoi", label: "Projected ROI", type: "score" },
    ],
  },
  {
    key: "implementation",
    title: "C. Implementation",
    rows: [
      { key: "timeToDeploy", label: "Time to Deploy", type: "chip" },
      { key: "complexity", label: "Complexity", type: "chip" },
      { key: "skillsRequired", label: "Skills Required", type: "chip" },
      { key: "pricingModel", label: "Pricing Model", type: "text" },
      { key: "requiredResources", label: "Required Resources", type: "text" },
    ],
  },
  {
    key: "strengthLimitation",
    title: "D. Strength vs Limitation",
    rows: [
      { key: "strengths", label: "Strengths", type: "list", variant: "positive" },
      { key: "limitations", label: "Limitations", type: "list", variant: "negative" },
    ],
  },
  {
    key: "architectureFit",
    title: "E. Architecture Fit",
    rows: [
      { key: "stackPosition", label: "Stack Position", type: "chip", accent: true },
      { key: "fitDescription", label: "Fit Description", type: "text" },
    ],
  },
  {
    key: "worksBestWith",
    title: "F. Works Best With",
    rows: [
      { key: "ecosystemStrength", label: "Ecosystem strength", type: "chip" },
      { key: "nativeIntegrations", label: "Native/Common Integrations", type: "tags" },
      { key: "bestPairedWith", label: "Best Paired With", type: "text" },
    ],
  },
];

export const integrateCTAData = {
  title: "Turn this comparison into your Al stack",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Build Your Stack",
  primaryBtnLink: "#",
  secondaryBtnLink: "/ai-intelligence/stack-generator",
};
