import { imageMap } from "@/assets/images/imageMap";

export const bnrData = {
  label: "Financial Services· Finance· Global 2000· AI-enabled",
  title: "Compressing the financial close from 12 days to 4",
  subTitle:
    "Re-engineered the group close using agentic reconciliation and a unified controls layer across 38 entities.",
};

export const projectInfo = [
  { label: "Client", value: "Global Tier-1 Bank" },
  { label: "Year", value: 2024 },
  { label: "Duration", value: "9 months" },
  { label: "Approach", value: "AI-enabled" },
];

export const deliveryProfile = [
  { label: "Duration", value: "9 months" },
  { label: "Complexity", value: "High" },
  { label: "Stakeholders", value: "Group finance + regional teams" },
  { label: "Systems", value: "SAP, Oracle, legacy ledgers" },
];

export const clientContext =
  "A global universal bank operating in 42 jurisdictions with a finance function of 4,200 staff. The group close had drifted from 7 to 12 business days following two acquisitions, eroding management's ability to act on monthly results.";

export const challenge =
  "Regulators were signalling concerns about late variance explanations. The CFO needed a credible path to a four-day close without a multi-year ERP replacement and without expanding headcount.";

export const keyDiagnosticInsights = [
  "62% of effort concentrated in reconciliation",
  "71% of adjustments driven by 9 recurring patterns",
  "High duplication across entity-level processes",
];

export const coreInterventions = [
  { title: "Close Command Centre", subtitle: "Control + visibility" },
  { title: "Agentic Reconciliation", subtitle: "Automation of recurring patterns" },
  { title: "Control Rationalisation", subtitle: "312 → 84 controls" },
  { title: "Embedded Advisory", subtitle: "Stabilisation phase" },
];

export const aiStackUsed = [
  { icon: imageMap.layersIcon, tagline: "ERP / SOURCE SYSTEMS", title: "SAP, ORACLE, LEGACY LEDGERS" },
  { icon: imageMap.layersIcon, tagline: "DATA LAYER", title: "SNOWFLAKE (CONTROLS EVIDENCE STORE)" },
  { icon: imageMap.layersIcon, tagline: "MODEL", title: "PRIVATE LLM DEPLOYMENT" },
  { icon: imageMap.layersIcon, tagline: "ORCHESTRATION", title: "WORKATO" },
  { icon: imageMap.layersIcon, tagline: "AUTOMATION", title: "RECONCILIATION WORKFLOWS" },
];

export const buildStackCTA = {
  title: "Build A Similar AI Stack For Your Organisation",
  btnLabel: "Generate Your AI Stack",
};

export const technologyUsed = {
  bullets: [
    "Agentic reconciliation built on a private LLM deployment",
    "Workato for orchestration across SAP, Oracle and legacy ledgers",
    "Snowflake as the controls evidence store",
  ],
  choicesLabel: "Technology Choices",
  choices: [
    { label: "Private LLM", value: "Secure, controlled AI reconciliation" },
    { label: "Workato", value: "Enterprise-grade orchestration across sap/oracle" },
    { label: "Snowflake", value: "Centralised evidence and audit layer" },
  ],
  rationaleLabel: "Rationale",
  rationale: "Designed to augment existing ERP systems without replacement.",
};

export const keyLessons = [
  "Automation only scales when control frameworks are standardised",
  "Visibility drives behaviour change faster than process redesign",
  "Early post-go-live support prevents regression",
];

export const exploreToolsCTA = {
  title: "Explore The Tools Used In This Transformation",
  btnLabel: "View AI Tool Details",
};

export const otherEngagements = [
  {
    tag: "Healthcare",
    title: "Redesigning oncology pathways with clinical AI co-pilots",
    sub: "Regional Health System",
  },
  {
    tag: "Industrial",
    title: "Resetting indirect procurement at a 60-plant manufacturer",
    sub: "European Industrial Group",
  },
  {
    tag: "Retail & Consumer",
    title: "Demand forecasting that the merchants actually trust",
    sub: "Specialty Apparel Retailer",
  },
];

export const measuredImpact = [
  { label: "12 - 4 days", value: "Close duration" },
  { label: "−68%", value: "Manual journal volume" },
  { label: "84 of 312", value: "Controls automated" },
  { label: "$31M", value: "Annualised run-rate saving" },
];

export const approchData = [
  { icon: imageMap.approch_icon_1, label: "Close cycles exceed 6–7 days" },
  { icon: imageMap.approch_icon_2, label: "Manual reconciliations dominate effort" },
  { icon: imageMap.approch_icon_3, label: "Multiple ERP instances or legacy systems exist" },
  { icon: imageMap.approch_icon_4, label: "CFO visibility is delayed or unreliable" },
];

export const integrateCTAData = {
  title: "Achieve similar results in your function",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Submit an rfp",
  primaryBtnLink: "#",
  secondaryBtnLink: "#",
};
