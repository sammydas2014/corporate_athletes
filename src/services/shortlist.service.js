import { imageMap } from "@/assets/images/imageMap";

export const MAX_SHORTLIST_ITEMS = 5;

export const shortlistPageHeader = {
  title: "Your AI Tool Shortlist",
  subtitle: "Review, compare and build your AI stack",
};

export const shortlistSummary = {
  total: 5,
  categories: [
    { label: "Data", value: 2 },
    { label: "Model", value: 1 },
    { label: "Orch", value: 1 },
    { label: "Auto", value: 1 },
  ],
};

export const sortOptions = [
  { label: "Score (High-Low)", value: "score-desc" },
  { label: "Score (Low-High)", value: "score-asc" },
  { label: "Name (A-Z)", value: "name-asc" },
];

export const preferredOptions = [
  { label: "Preferred", value: "preferred" },
  { label: "Alternative", value: "alternative" },
  { label: "Backup", value: "backup" },
];

export const shortlistInsights = {
  title: "Shortlist Insights",
  coverageLabel: "Coverage View",
  items: [
    { label: "Data Ingestion", status: "covered" },
    { label: "LLM / Models", status: "covered" },
    { label: "Orchestration", status: "gap" },
    { label: "Automation Layer", status: "covered" },
  ],
  gapAlert: {
    title: "Gap Detection",
    description:
      "Your shortlist is missing a dedicated orchestration layer for production scaling.",
  },
  ctaLabel: "+ Add recommended tools",
};

export const architecturePreview = {
  title: "Architecture Preview",
  subtitle: "Visualize how these tools connect.",
  ctaLabel: "Open Workspace",
  architectureBg: imageMap.architectureBg,
};

export const shortlistedTools = [
  {
    id: 1,
    name: "Open AI",
    category: "Vector Database",
    tags: ["Data Layer", "Analytics", "Enterprise"],
    description:
      "Managed vector database for high-performance AI applications and semantic search across enterprise data sources.",
    score: "4.9",
    stackRole: "Automation Layer",
    integrationFit: "Salesforce, SAP",
    preferred: "preferred",
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
  },
];

export const accelerateData = {
  title: "Ready to accelerate performance with AI?",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Submit an rfp",
};