import { imageMap } from "@/assets/images/imageMap";

export const upcomingEventsData = {
  topTag: "Join us in London · 11-13 June 2026",
  title: "Upcoming events",
  filterGroups: [
    {
      key: "industry",
      label: "All Industries",
      options: ["All Industries", "Finance", "Healthcare", "Technology", "Industrial"],
    },
    {
      key: "audience",
      label: "All Audiences",
      options: ["All Audiences", "C-Suite", "Board", "Directors", "Senior Leaders"],
    },
    {
      key: "location",
      label: "All Locations",
      options: ["All Locations", "London", "New York", "Singapore", "Virtual"],
    },
    {
      key: "format",
      label: "All Formats",
      options: ["All Formats", "Forum", "Webinar", "Roundtable"],
    },
  ],
  events: [
    {
      id: 1,
      day: "12",
      month: "Jun",
      bgImage: imageMap.upcoming_event_1,
      tags: [
        { label: "Forum", type: "primary" },
        { label: "32 seats", type: "muted" },
        { label: "Invitation only", type: "muted" },
      ],
      title: "AI in the Boardroom: Capital, Risk and Operating Cadence",
      description:
        "A closed-door forum for chairs, CEOs and CFOs on governing AI investment with the same discipline as capital allocation.",
      whoAttends: ["Chairs", "CEOs", "CFOs"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
      format: "Forum",
      location: "London",
      industries: ["Finance"],
      audiences: ["C-Suite", "Board"],
    },
    {
      id: 2,
      day: "24",
      month: "July",
      bgImage: imageMap.upcoming_event_2,
      tags: [
        { label: "Webinar", type: "primary" },
        { label: "Open registration", type: "success" },
      ],
      title: "Vendor Intelligence Briefing — Q3 Enterprise AI Stack",
      description:
        "Independent commercial and technical assessment of the leading agentic and infrastructure vendors. No vendor sponsorships.",
      whoAttends: ["CIOs", "CTOs", "Heads of AI"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
      format: "Webinar",
      location: "Virtual",
      industries: ["Technology"],
      audiences: ["C-Suite", "Directors"],
    },
    {
      id: 3,
      day: "09",
      month: "Sep",
      bgImage: imageMap.upcoming_event_1,
      tags: [
        { label: "Roundtable", type: "primary" },
        { label: "20 seats", type: "muted" },
        { label: "Invitation only", type: "muted" },
      ],
      title: "Redesigning the Finance Function Around AI-Augmented Decision Making",
      description:
        "A practitioner roundtable on rethinking the CFO office—forecasting cadence, scenario planning and governance in an AI-first context.",
      whoAttends: ["CFOs", "Finance Directors", "FP&A Heads"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
      format: "Roundtable",
      location: "New York",
      industries: ["Finance"],
      audiences: ["C-Suite", "Directors"],
    },
    {
      id: 4,
      day: "17",
      month: "Oct",
      bgImage: imageMap.upcoming_event_2,
      tags: [
        { label: "Forum", type: "primary" },
        { label: "40 seats", type: "muted" },
      ],
      title: "Operating Model Reset: From Pilot to Enterprise AI at Scale",
      description:
        "A closed-door forum examining what it takes to move beyond proof-of-concept into disciplined, enterprise-wide AI deployment.",
      whoAttends: ["COOs", "CTOs", "Transformation Leads"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
      format: "Forum",
      location: "Singapore",
      industries: ["Technology", "Industrial"],
      audiences: ["C-Suite", "Senior Leaders"],
    },
  ],
};

export const roundtablesData = {
  eyebrow: "Quarterly",
  title: "Executive Roundtables",
  description:
    "Chatham House peer sessions, 12–16 operators per room. Closed peer convenings for senior operators working on the same class of problem. No vendors, no observers, no press.",
  items: [
    {
      id: 1,
      day: "12",
      month: "Jun",
      bgImage: imageMap.roundTable_1,
      tags: [
        { label: "In-person", type: "muted" },
        { label: "16 seats", type: "muted" },
        { label: "London", type: "muted" },
      ],
      title: "Operating Model Redesign: From Pilots to Productive Capacity",
      description:
        "Practitioner roundtable on rewiring functions for AI-native throughput — workforce, controls, accountability.",
      whoAttends: ["Heads of Transformation", "COOs", "CFOs"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
    {
      id: 2,
      day: "09",
      month: "Sep",
      bgImage: imageMap.roundTable_2,
      tags: [
        { label: "In-person", type: "muted" },
        { label: "14 seats", type: "muted" },
        { label: "New York", type: "muted" },
      ],
      title: "AI Cost Discipline for the Office of the CFO",
      description: "How CFOs of $1bn+ enterprises are imposing capital discipline on AI spend.",
      whoAttends: ["CFOs", "Group Controllers", "FP&A Leads"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
    {
      id: 3,
      day: "12",
      month: "Jun",
      bgImage: imageMap.roundTable_3,
      tags: [
        { label: "In-person", type: "muted" },
        { label: "12 seats", type: "muted" },
        { label: "Zurich", type: "muted" },
      ],
      title: "Governing Agentic Workflows in Regulated Industries",
      description:
        "Audit, risk and second-line perspectives on agent autonomy in financial services and healthcare.",
      whoAttends: ["CROs", "Heads of Compliance", "CIOs"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
    {
      id: 4,
      day: "12",
      month: "Jun",
      bgImage: imageMap.roundTable_1,
      tags: [
        { label: "In-person", type: "muted" },
        { label: "12 seats", type: "muted" },
        { label: "Zurich", type: "muted" },
      ],
      title: "Governing Agentic Workflows in Regulated Industries",
      description:
        "Audit, risk and second-line perspectives on agent autonomy in financial services and healthcare.",
      whoAttends: ["CROs", "Heads of Compliance", "CIOs"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
  ],
};

export const academyWorkshopsData = {
  eyebrow: "On Request",
  title: "Academy Workshops",
  description:
    "Structured upskilling for executive teams and boards. Structured programmes delivered in-house — board education, executive committees, and senior leadership cohorts.",
  items: [
    {
      id: 1,
      day: "12",
      month: "Jun",
      bgImage: imageMap.academy_1,
      tags: [
        { label: "In-person", type: "outline" },
        { label: "Board + ExCo", type: "outline" },
        { label: "Client site", type: "outline" },
      ],
      title: "Board AI Literacy — Two-Session Programme",
      description:
        "Board-level fluency: capital allocation, risk posture, vendor strategy and the questions to ask management.",
      whoAttends: ["Boards", "ExCos"],
      ctaLabel: "View Details",
      ctaLink: "#",
    },
    {
      id: 2,
      day: "09",
      month: "Sep",
      bgImage: imageMap.academy_2,
      tags: [
        { label: "In-person", type: "outline" },
        { label: "Up to 25 leaders", type: "outline" },
        { label: "Client site", type: "outline" },
      ],
      title: "Executive Leadership Cohort — AI Operating Discipline",
      description:
        "A working programme for senior leadership teams — operating model, talent density and execution cadence.",
      whoAttends: ["Senior Leadership", "Functional Heads"],
      ctaLabel: "View Details",
      ctaLink: "#",
    },
    {
      id: 3,
      day: "12",
      month: "Jun",
      bgImage: imageMap.academy_3,
      tags: [
        { label: "In-person", type: "outline" },
        { label: "Board + ExCo", type: "outline" },
        { label: "Client site", type: "outline" },
      ],
      title: "Board AI Literacy — Two-Session Programme",
      description:
        "Board-level fluency: capital allocation, risk posture, vendor strategy and the questions to ask management.",
      whoAttends: ["Boards", "ExCos"],
      ctaLabel: "View Details",
      ctaLink: "#",
    },
  ],
};

export const aiTransformationForumsData = {
  eyebrow: "Bi-Annual",
  title: "AI Transformation Forums",
  description: "Closed-door forums on governing AI investment and operating cadence.",
  items: [
    {
      id: 1,
      day: "12",
      month: "Jun",
      bgImage: imageMap.ai_Transformation_1,
      tags: [
        { label: "In-person", type: "outline" },
        { label: "16 seats", type: "outline" },
        { label: "London", type: "outline" },
      ],
      title: "AI in the Boardroom: Capital, Risk and Operating Cadence",
      description: "Governing AI investment with the same discipline as capital allocation.",
      whoAttends: ["Chairs", "CEOs", "CFOs"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
    {
      id: 2,
      day: "09",
      month: "Sep",
      bgImage: imageMap.ai_Transformation_2,
      tags: [
        { label: "In-person", type: "outline" },
        { label: "14 seats", type: "outline" },
        { label: "Singapore", type: "outline" },
      ],
      title: "Asia Forum: AI, Sovereignty and Enterprise Architecture",
      description:
        "Cross-border data, sovereign AI mandates and the next decade of enterprise architecture decisions.",
      whoAttends: ["Chairs", "CEOs", "Group CIOs"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
  ],
};

export const aiOperatorSessionsData = {
  eyebrow: "Monthly",
  title: "AI Operator Sessions",
  description:
    "Working sessions with practitioners shipping AI in production. Tactical working sessions with the engineers, product leaders and operators who have AI in front of customers.",
  items: [
    {
      id: 1,
      day: "12",
      month: "Jun",
      bgImage: imageMap.aiOperator_1,
      tags: [
        { label: "Virtual", type: "outline" },
        { label: "40 seats", type: "outline" },
        { label: "Online", type: "outline" },
      ],
      title: "Evals, Guardrails and the Production Reality",
      description:
        "Practitioners on the eval frameworks, regression suites and guardrails actually deployed in production.",
      whoAttends: ["Heads of AI", "Staff Engineers", "Product Leads"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
    {
      id: 2,
      day: "09",
      month: "Sep",
      bgImage: imageMap.aiOperator_2,
      tags: [
        { label: "In-person", type: "outline" },
        { label: "30 seats", type: "outline" },
        { label: "London", type: "outline" },
      ],
      title: "RAG, Retrieval and the Knowledge Layer",
      description: "What enterprise retrieval architectures look like in 2026 — beyond the demo.",
      whoAttends: ["Heads of AI", "Data Leads", "ML Engineers"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
    {
      id: 3,
      day: "12",
      month: "Jun",
      bgImage: imageMap.aiOperator_3,
      tags: [
        { label: "Virtual", type: "outline" },
        { label: "40 seats", type: "outline" },
        { label: "Online", type: "outline" },
      ],
      title: "Shipping Agentic Workflows to Internal Users",
      description:
        "Adoption mechanics, change management and the unglamorous work of getting agents used.",
      whoAttends: ["Product Leads", "COOs", "Heads of Operations"],
      ctaLabel: "Request Invitation",
      ctaLink: "#",
    },
  ],
};

export const vendorBriefingsData = {
  eyebrow: "Quarterly",
  title: "Vendor Intelligence Briefings",
  description:
    "Independent commercial assessment of the enterprise AI stack. Vendor-independent briefings — commercial terms, deployment risk and technical fit.",
  items: [
    {
      id: 1,
      day: "12",
      month: "Jun",
      bgImage: imageMap.vendor_1,
      tags: [
        { label: "Virtual", type: "outline" },
        { label: "Open registration", type: "outline" },
        { label: "Online", type: "outline" },
      ],
      title: "Q3 Briefing — Agentic Platforms & Orchestration Layer",
      description:
        "Independent commercial and technical assessment of the leading agentic and orchestration vendors.",
      whoAttends: ["CIOs", "CTOs", "Heads of AI"],
      ctaLabel: "View Details",
      ctaLink: "#",
    },
    {
      id: 2,
      day: "09",
      month: "Sep",
      bgImage: imageMap.vendor_2,
      tags: [
        { label: "Virtual", type: "outline" },
        { label: "Open registration", type: "outline" },
        { label: "Online", type: "outline" },
      ],
      title: "Q4 Briefing — Foundation Model Procurement & Pricing",
      description:
        "Where pricing is moving across frontier and open-weight providers — and how to structure enterprise contracts.",
      whoAttends: ["Procurement", "CIOs", "GCs"],
      ctaLabel: "View Details",
      ctaLink: "#",
    },
  ],
};

export const lookBackData = {
  items: [
    {
      id: 1,
      feature: true,
      date: null,
      title: "2025 — A Year of Closed-Door Practitioner Sessions",
      description:
        "Twelve months of invitation-only forums, roundtables and briefings for senior operators navigating the AI transition. No vendors, no observers, no press.",
      image: imageMap.event_glry_1,
      location: "London, New York, Singapore",
      type: "Year in Review",
    },
    {
      id: 2,
      date: "NOV 2025",
      title: "AI Governance for PE-backed firms — London Roundtable",
      description:
        "A closed-door session for PE-backed portfolio company leaders on building AI governance frameworks that satisfy both operational and investor expectations.",
      image: imageMap.event_glry_2,
      location: "London",
      type: "Roundtable",
    },
    {
      id: 3,
      date: "JAN 2025",
      title: "CFO's Guide to AI Unit Economics — Webinar Series",
      description:
        "Three-part series unpacking how finance leaders should frame AI investment — from build-vs-buy to payback horizons and variance from plan.",
      image: imageMap.event_glry_5,
      location: "Virtual",
      type: "Webinar Series",
    },
    {
      id: 4,
      date: "MAR 2025",
      title: "The Independence Premium — Singapore Briefing",
      description:
        "Why the most effective AI programmes are built on vendor-independent architecture — commercial and technical evidence from the field.",
      image: imageMap.event_glry_4,
      location: "Singapore",
      type: "Briefing",
    },
    {
      id: 5,
      date: "SEP 2025",
      title: "Talent Density: Building the AI-Native Function",
      description:
        "How leading operators are reshaping team composition, incentive structures and operating cadence to build genuinely AI-native capability.",
      image: imageMap.event_glry_3,
      location: "London",
      type: "Forum",
    },
  ],
};

export const bannerData = {
  topTag: { text: "Events Programme · 2026", type: "accent" },
  title: "Closed-door convenings<br>for serious operators",
  subtitles: [
    {
      label: "Why we host these sessions:",
      text: "We create practitioner-led environments focused on operational reality, implementation trade-offs, and measurable outcomes—not vendor promotion.",
      variant: "highlighted",
    },
    {
      text: "Each convening is curated against a single test: would the operators in the room genuinely change how they spend their next quarter? Press, vendors and observers are excluded by default. Every conversation is held under Chatham House.",
    },
  ],
  imageUrl: imageMap.events_bnr,
  imageAlt: "Events convening visual",
  bgColor: "#040e1c",
  minHeight: "580px",
  breadcrumbs: [{ label: "Home", href: "/" }, { label: "Events" }],
  filters: [
    { label: "All", value: "all" },
    { label: "Forum", value: "forum" },
    { label: "Webinar", value: "webinar" },
    { label: "Roundtable", value: "roundtable" },
  ],
};

export const eventProgramsData = {
  cards: [
    {
      id: 1,
      tag: "Academy Workshops",
      title: "Independent intelligence, on the record.",
      description:
        "Quarterly broadcasts where our consortium delivers candid assessment of the enterprise AI market — vendors, capabilities, and commercial realities.",
      ctaLabel: "Subscribe to broadcasts",
      ctaLink: "#",
      image: imageMap.event_programs_1,
    },
    {
      id: 2,
      tag: "Executive Roundtables",
      title: "Chatham House. Practitioner-only.",
      description:
        "Small-format, peer-led conversations between operators facing the same questions. No press, no vendors, no observers.",
      ctaLabel: "Request invitation",
      ctaLink: "#",
      image: imageMap.event_programs_2,
    },
  ],
};

export const accelerateData = {
  title: "Ready to accelerate performance with AI?",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Submit an rfp",
};
