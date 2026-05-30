// Realistic mock databases to simulate production backend responses

export const mockTools = [
  {
    id: 1,
    name: 'Enterprise GPT Platform',
    category: 'Large Language Models',
    vendor: 'CognitiveScale',
    logo: 'bi-cpu-fill',
    tag: 'Sellers View',
    FTE: '18% - 24%',
    sellersView: 'Accelerated support workflows, draft replies automatically, extract case key features.',
    sponsorView: 'Risk of hallucination without proper RAG pipelines. Higher data security controls needed.',
    cost: '$$',
    accuracy: '92%',
    compliance: 'High',
    integrationComplexity: 'Low',
    desc: 'Custom-tailored generative AI agent built for secure internal document searches, compliance automation, and automatic executive brief drafts.'
  },
  {
    id: 2,
    name: 'Finance & Shared Services Agent',
    category: 'Agentic Workflows',
    vendor: 'Altius Core',
    logo: 'bi-wallet2',
    tag: 'Sponsor View',
    FTE: '35% - 40%',
    sellersView: 'Reconciliation pipelines run in minutes instead of days. Auto-flagging suspicious ledgers.',
    sponsorView: 'Substantial cost reductions in transaction handling. Extremely high ROI inside 3 months.',
    cost: '$$$',
    accuracy: '98%',
    compliance: 'Extremely High',
    integrationComplexity: 'Medium',
    desc: 'Autonomous financial ledger auditing system that handles invoice reconciliations, scans tax discrepancies, and automates multi-currency shared ledger logs.'
  },
  {
    id: 3,
    name: 'Customer Operations Auto-Copilot',
    category: 'Conversational Agents',
    vendor: 'TalkVibe Inc',
    logo: 'bi-chat-left-dots-fill',
    tag: 'FTE Savings',
    FTE: '28% - 34%',
    sellersView: 'Handles 70% of redundant ticket streams. Auto-escalates complex priority queues.',
    sponsorView: 'Initial customer sentiment calibration takes 30 days. API reliance fees can scale quickly.',
    cost: '$',
    accuracy: '89%',
    compliance: 'Medium',
    integrationComplexity: 'Low',
    desc: 'Multi-lingual customer support supervisor tool that interacts with clients, resolves shipping issues, processes standard refunds, and guides users.'
  },
  {
    id: 4,
    name: 'Predictive Operating Modeler',
    category: 'Data & Analytics',
    vendor: 'Stratify AI',
    logo: 'bi-bar-chart-steps',
    tag: 'Sellers View',
    FTE: '12% - 15%',
    sellersView: 'Simulates restructuring impacts in real-time. Beautiful org-chart exports.',
    sponsorView: 'Requires extremely clean historic FTE worktimes. High upfront data ingest costs.',
    cost: '$$$$',
    accuracy: '95%',
    compliance: 'High',
    integrationComplexity: 'High',
    desc: 'Advanced predictive modeling suite designed to test organization structures, forecast operational friction, and map optimized FTE distributions.'
  },
  {
    id: 5,
    name: 'Procurement Strategy Optimizer',
    category: 'Agentic Workflows',
    vendor: 'Kestrel Decision',
    logo: 'bi-cart-check-fill',
    tag: 'Sponsor View',
    FTE: '22% - 28%',
    sellersView: 'Auto-negotiation algorithms evaluate multiple vendor templates to choose optimized terms.',
    sponsorView: 'Highly dependent on active ERP data integrations. Massive contract volume processing.',
    cost: '$$$',
    accuracy: '94%',
    compliance: 'High',
    integrationComplexity: 'Medium',
    desc: 'Strategic procurement optimizer mapping vendor quotes, predicting delivery bottlenecks, and automatically drafts ideal purchasing proposals.'
  },
  {
    id: 6,
    name: 'Cognitive Compliance Auditor',
    category: 'Large Language Models',
    vendor: 'ReguTech Corp',
    logo: 'bi-shield-check',
    tag: 'FTE Savings',
    FTE: '42% - 50%',
    sellersView: 'Reads 800+ page policy updates in minutes. Direct citations linked back to government databases.',
    sponsorView: 'Must undergo periodic legal review to ensure current local law synchronization.',
    cost: '$$$$',
    accuracy: '99%',
    compliance: 'Extremely High',
    integrationComplexity: 'High',
    desc: 'Intelligent regulatory compliance scanner that ingests banking, corporate governance, and data regulations to audit corporate records automatically.'
  }
];

export const mockCaseStudies = [
  {
    id: 'financial-services-reorg',
    title: 'Transforming Shared Operations for an Elite Global Investment Bank',
    client: 'Tier-1 Banking Corp',
    category: 'Finance Transformation',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    summary: 'How Altius redesigned a fragmented finance shared services division, automating reconciliation logs and recapturing 38% operational FTE capacity.',
    challenge: 'The client faced massive overhead in their operational centers across 4 continents. 200+ manual financial analysts reconciliated transaction ledgers daily across incompatible legacy software platforms, creating high error rates and severe burnout.',
    solution: 'We designed a cohesive Digital Operating Model. Implemented a tailored Finance & Shared Services Agent suite. This replaced legacy manual validations with autonomous ledgers, and trained team leaders on strategic exception resolution handling.',
    results: [
      { label: 'FTE Capacity Recaptured', value: '38%' },
      { label: 'Reconciliation Speedup', value: '15x' },
      { label: 'Transaction Accuracy Rate', value: '99.98%' },
      { label: 'Payback Period realized', value: '4 Months' }
    ]
  },
  {
    id: 'telecom-ai-model',
    title: 'Operating Model Re-Engineering and AI Strategy Implementation at Scale',
    client: 'Velo Communication',
    category: 'Digital Operating Model',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    summary: 'A complete operating model blueprint transformation incorporating custom AI tools for customer support streams and infrastructure routing predictions.',
    challenge: 'Velo Telecom was dealing with intense customer churn and operational delays. They needed to move from legacy support teams to AI-augmented workflows while completely restructuring their core network operations group.',
    solution: 'Executed an AI Strategy & Governance framework. Structured a custom Customer Operations Auto-Copilot, integrated into a unified operating model platform with dashboard access for Chief Technology Officers.',
    results: [
      { label: 'Customer Retention Shift', value: '+14%' },
      { label: 'Operational Cost reduction', value: '26%' },
      { label: 'AI Pilot to Scale timing', value: '12 Weeks' },
      { label: 'Employee NPS Increase', value: '22pts' }
    ]
  }
];

export const mockInsights = [
  {
    id: 1,
    type: 'Article',
    title: 'The Sovereign AI Paradigm: Aligning Governance with Corporate Performance',
    author: 'Marcus Vance, Senior Partner',
    date: 'May 12, 2026',
    excerpt: 'Enterprises must look past generic API reliance. This article maps out custom localized AI models that reduce reliance fees while securing compliance.',
    content: 'Corporate boards are quickly discovering that absolute reliance on public cloud AI endpoints exposes critical compliance risks and unbounded API cost structures. As model size shrinks and efficiency increases, the shift toward "Sovereign AI" – where companies host, train, and orchestrate their proprietary intelligence layers – is accelerating. To capture true performance, operations leaders must align internal data schemas with local inference servers, ensuring zero data leakage and secure competitive advantages.'
  },
  {
    id: 2,
    type: 'Deep Dive',
    title: 'Recapturing FTE Value: A Tactical Roadmap for Finance Transformation',
    author: 'Sarah Jenkins, Finance Practice Lead',
    date: 'April 28, 2026',
    excerpt: 'A deep quantitative look into automating shared services divisions, forecasting ledger errors, and optimizing financial processes.',
    content: 'Reconciliation has historically been a black hole of administrative costs. By applying agentic validation architectures, tier-1 financial divisions are scaling operations with zero headcount additions. This study models current ROI paths, showing that automating the first 80% of routine journal checks delivers an average 3.2x payback in under a semester.'
  },
  {
    id: 3,
    type: 'Playbook',
    title: 'The AI Scale Playbook: From Sandbox Pilots to Operational Realities',
    author: 'Transformation Steering Committee',
    date: 'March 15, 2026',
    excerpt: 'The blueprint used by Fortune 500 COOs to transition speculative AI tools into durable corporate capabilities.',
    content: 'The primary blocker to AI scaling is not technology—it is organizational friction. This playbook delivers a plug-and-play matrix detailing how to establish cross-functional AI command rooms, structure performance KPIs, and re-skill team members effectively.'
  }
];
