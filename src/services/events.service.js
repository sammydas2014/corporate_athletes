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
      bgImage: imageMap.modelMeetingImg,
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
      bgImage: imageMap.deepdiveBnrImg,
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
      bgImage: imageMap.groupMeatingImage,
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
      bgImage: imageMap.femaleAnalytics,
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
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Events" },
  ],
  filters: [
    { label: "All", value: "all" },
    { label: "Forum", value: "forum" },
    { label: "Webinar", value: "webinar" },
    { label: "Roundtable", value: "roundtable" },
  ],
};
