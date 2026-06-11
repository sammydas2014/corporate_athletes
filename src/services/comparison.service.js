export const comparisonPageHeader = {
  title: "Compare AI Tools",
  subtitle: "Side-by-side comparison of your shortlisted tools.",
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
    iconBg: "#10A37F",
    accentBg: "#E6F4EE",
    accentText: "#10895F",
    popular: true,
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
    iconBg: "#FA4616",
    accentBg: "#FDEEE5",
    accentText: "#D2691E",
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
    iconBg: "#29B5E8",
    accentBg: "#E5F4FB",
    accentText: "#1B7CB5",
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
    iconBg: "#FF7000",
    accentBg: "#FFF1E6",
    accentText: "#FF7000",
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
    iconBg: "#1E8E6D",
    accentBg: "#E6F7F1",
    accentText: "#1E8E6D",
  },
];

export const comparisonSections = [
  {
    key: "overview",
    title: "A. Overview",
    rows: [
      {
        label: "Category",
        type: "chip",
        accent: true,
        values: {
          1: "Model Layer",
          2: "Automation",
          3: "Automation",
          4: "Model Layer",
          5: "Data Layer",
        },
      },
      {
        label: "Modality",
        type: "text",
        values: {
          1: "Text / Multimodal",
          2: "Structured",
          3: "Structured",
          4: "Text / Code",
          5: "Vector / Embeddings",
        },
      },
      {
        label: "Best for",
        type: "text",
        values: {
          1: "Content / copilots",
          2: "Process automation",
          3: "Data platform",
          4: "Open-weight LLM deployment",
          5: "Vector search & retrieval",
        },
      },
      {
        label: "Risk / Lock-in",
        type: "text",
        values: {
          1: "Medium (API dependency)",
          2: "High (platform lock-in)",
          3: "Medium-High (data gravity)",
          4: "Low (open-weight, self-hostable)",
          5: "Medium (managed service lock-in)",
        },
      },
    ],
  },
  {
    key: "scoring",
    title: "B. Scoring Comparison",
    rows: [
      {
        label: "Ease of Use",
        type: "score",
        values: { 1: 4.9, 2: 2.5, 3: 3.8, 4: 3.6, 5: 4.2 },
      },
      {
        label: "Integration",
        type: "score",
        values: { 1: 4, 2: 4.2, 3: 4.5, 4: 4.1, 5: 4.6 },
      },
      {
        label: "Projected ROI",
        type: "score",
        values: { 1: 4.8, 2: 2.6, 3: 4.3, 4: 4.5, 5: 4.3 },
      },
    ],
  },
  {
    key: "implementation",
    title: "C. Implementation",
    rows: [
      {
        label: "Time to Deploy",
        type: "chip",
        tones: { 1: "good", 2: "warn", 3: "warn", 4: "warn", 5: "good" },
        values: { 1: "Fast", 2: "Medium", 3: "Medium", 4: "Medium", 5: "Fast" },
      },
      {
        label: "Complexity",
        type: "chip",
        tones: { 1: "good", 2: "warn", 3: "warn", 4: "bad", 5: "good" },
        values: { 1: "Low", 2: "Medium", 3: "Medium", 4: "High", 5: "Low" },
      },
      {
        label: "Skills Required",
        type: "chip",
        tones: { 1: "good", 2: "warn", 3: "bad", 4: "bad", 5: "good" },
        values: { 1: "Low", 2: "Medium", 3: "High", 4: "High", 5: "Low" },
      },
      {
        label: "Pricing Model",
        type: "text",
        values: {
          1: "Pay-per-token",
          2: "Per-robot / subscription",
          3: "Credit-based compute",
          4: "Open-weight (free) / API pay-per-token",
          5: "Usage-based (storage + queries)",
        },
      },
      {
        label: "Required Resources",
        type: "text",
        values: {
          1: "None (managed)",
          2: "RPA developer",
          3: "Data engineer",
          4: "ML / Infra engineer (self-hosted)",
          5: "None (managed)",
        },
      },
    ],
  },
  {
    key: "strengthLimitation",
    title: "D. Strength vs Limitation",
    rows: [
      {
        label: "Strengths",
        type: "list",
        variant: "positive",
        values: {
          1: [
            "Best-in-class reasoning with o3/o4-mini",
            "Broad ecosystem of integrations",
            "Function calling & structured outputs",
            "Fine-tuning support",
          ],
          2: [
            "Mature enterprise RPA platform",
            "Native AI document understanding",
            "Marketplace with SAP & Oracle connectors",
            "Attended + unattended automation modes",
          ],
          3: [
            "Near-unlimited scale with elastic compute",
            "Native data sharing across orgs",
            "Snowpark for Python/ML pipelines",
            "Excellent BI tool integration",
          ],
          4: [
            "Open-weight models, fully self-hostable",
            "Strong performance-to-cost ratio",
            "Permissive licensing for commercial use",
            "Fast inference with optimized runtimes",
          ],
          5: [
            "Purpose-built for vector search at scale",
            "Low-latency similarity search at billions of vectors",
            "Simple API and SDKs",
            "Seamless integration with LangChain / LLM stacks",
          ],
        },
      },
      {
        label: "Limitations",
        type: "list",
        variant: "negative",
        values: {
          1: [
            "Cost scales with heavy usage",
            "Data privacy concerns for regulated industries",
            "No on-premise deployment option",
          ],
          2: [
            "High licensing cost",
            "Steep learning curve for complex bots",
            "Overkill for simple automations",
          ],
          3: [
            "Compute costs can spike unexpectedly",
            "Requires data engineering expertise",
            "Vendor lock-in for storage format",
          ],
          4: [
            "Requires infrastructure to self-host",
            "Smaller ecosystem than OpenAI",
            "Less mature fine-tuning tooling",
          ],
          5: [
            "Cost scales with index size & query volume",
            "Vendor lock-in for vector storage",
            "No built-in embedding generation",
          ],
        },
      },
    ],
  },
  {
    key: "architectureFit",
    title: "E. Architecture Fit",
    rows: [
      {
        label: "Stack Position",
        type: "chip",
        accent: true,
        values: {
          1: "Model Layer",
          2: "Automation Layer",
          3: "Data Layer",
          4: "Model Layer",
          5: "Data Layer",
        },
      },
      {
        label: "Fit Description",
        type: "text",
        values: {
          1: "Sits at the inference core; ideal as the cognitive core for any AI workflow.",
          2: "Automation layer bridging legacy systems and modern AI, excellent for process-heavy workflows.",
          3: "Foundation data layer that stores and transforms data consumed by ML and BI tools.",
          4: "Drop-in alternative inference core for cost-sensitive or private-cloud AI workloads.",
          5: "Dedicated vector store layer for semantic search and retrieval-augmented generation pipelines.",
        },
      },
    ],
  },
  {
    key: "worksBestWith",
    title: "F. Works Best With",
    rows: [
      {
        label: "Ecosystem strength",
        type: "chip",
        tones: { 1: "good", 2: "warn", 3: "good", 4: "warn", 5: "good" },
        values: { 1: "High", 2: "Medium", 3: "High", 4: "Medium", 5: "High" },
      },
      {
        label: "Native/Common Integrations",
        type: "tags",
        values: {
          1: ["LangChain", "Pinecone", "Zapier"],
          2: ["SAP", "Oracle", "Salesforce"],
          3: ["dbt", "Fivetran", "Tableau"],
          4: ["vLLM", "AWS Sagemaker", "Hugging Face"],
          5: ["LangChain", "OpenAI", "LlamaIndex"],
        },
      },
      {
        label: "Best Paired With",
        type: "text",
        values: {
          1: "Retrieval layer, orchestration tools, application frameworks",
          2: "ERP systems, workflow tools, human-in-the-loop solutions",
          3: "ETL/ELT, BI tools, AI/ML platforms, data sharing",
          4: "Self-hosted inference stacks, vLLM, orchestration frameworks",
          5: "LLM providers, embedding models, RAG orchestration tools",
        },
      },
    ],
  },
];
