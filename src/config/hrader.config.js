export const navItems = [
  { label: "Home", to: "/", exact: true },
  {
    label: "Solutions",
    dropdown: [
      { label: "Solutions Overview", to: "/solutions" },
      { label: "AI Strategy & Governance", to: "/solutions/ai-strategy-governance" },
      { label: "AI Implementation & Scaling", to: "/solutions/ai-implementation-scaling" },
      { label: "Finance Shared Services", to: "/solutions/finance-shared-services" },
      { label: "Digital Operating Model", to: "/solutions/digital-operating-model" },
      { label: "Data & Analytics Practice", to: "/solutions/data-analytics" },
    ],
  },
  {
    label: "AI Intelligence",
    dropdown: [{ label: "AI Intelligence Overview", to: "/ai-intelligence" }],
  },
  { label: "Case Studies", to: "/case-studies" },
  {
    label: "Insights",
    dropdown: [
      { label: "Insights Dashboard", to: "/insights" },
      { label: "Advisory Articles", to: "/insights/articles" },
      { label: "AI Deep Dives", to: "/insights/deep-dives" },
      { label: "Transformation Playbooks", to: "/insights/playbooks" },
      { label: "Guest Consortium Contributions", to: "/insights/consortium-contributions" },
    ],
  },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];
