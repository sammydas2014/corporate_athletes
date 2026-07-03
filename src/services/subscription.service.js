export const pricingHeader = {
  title: "Choose your membership plan",
  subtitle:
    "Join a community of senior operators and transformation leaders driving meaningful change.",
};

export const plans = [
  {
    id: "professional",
    name: "Professional",
    desc: "Perfect for individual operators",
    monthlyPrice: 249,
    yearlyPrice: 249,
    yearlyTotal: "2,988",
    yearlySaving: null,
    featured: false,
    btnLabel: "Select Plan",
    btnVariant: "outline-light",
    featuresLabel: null,
    features: [
      "Access to all events",
      "Event recordings & summaries",
      "Member directory",
      "Insights & research library",
      "Community updates",
      "Email support",
    ],
  },
  {
    id: "executive",
    name: "Executive",
    desc: "For senior leaders and executives",
    monthlyPrice: 499,
    yearlyPrice: 499,
    yearlyTotal: "5,988",
    yearlySaving: "Save 17%",
    featured: true,
    btnLabel: "Select Plan",
    btnVariant: "secondary",
    featuresLabel: "Everything in Professional, plus:",
    features: [
      "Executive roundtables",
      "Peer network access",
      "Priority event registration",
      "Leadership briefings",
      "Exclusive member content",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    desc: "For organisations and large teams",
    monthlyPrice: 899,
    yearlyPrice: 749,
    yearlyTotal: "8,988",
    yearlySaving: null,
    featured: false,
    btnLabel: "Select Plan",
    btnVariant: "outline-light",
    featuresLabel: "Everything in Executive, plus:",
    features: [
      "Team membership (5 users)",
      "Organisation insights",
      "Custom events & workshops",
      "Advisory support (2 hrs/quarter)",
      "Dedicated account manager",
      "SLA & priority support",
    ],
  },
];

export const guarantee = "All plans include a 14-day money-back guarantee.";
