export const cartGuarantee = "All plans include a 14-day money-back guarantee.";

export const cartMembership = {
  id: "executive",
  icon: "bi-people-fill",
  name: "Executive Membership",
  badge: "Most Popular",
  desc: "For senior leaders and executives driving transformation.",
  monthlyPrice: 499,
  annualTotal: 5988,
  savingLabel: "Save 17%",
  benefits: [
    { icon: "bi-calendar4-event", label: "All Executive benefits" },
    { icon: "bi-clock", label: "Billed annually" },
  ],
};

export const cartAddOns = [
  {
    id: "team-members",
    icon: "bi-person-plus-fill",
    title: "Additional Team Members",
    desc: "Add extra users to your membership.",
    price: 150,
    priceLabel: "/user/month",
    summaryUnit: "user",
    annualMultiplier: 12,
    qty: 1,
    minQty: 1,
    maxQty: 20,
  },
  {
    id: "advisory-hours",
    icon: "bi-headset",
    title: "Advisory Hours",
    desc: "Additional advisory support from our team.",
    price: 250,
    priceLabel: "/hour",
    summaryUnit: "hr",
    annualMultiplier: 1,
    qty: 5,
    minQty: 1,
    maxQty: 50,
  },
];

export const vatRate = 20;
export const annualSaving = 1224;

export const accelerateData = {
  title: 'Ready to accelerate performance with AI?',
  primaryBtnLabel: 'Book a Strategy Call',
  secondaryBtnLabel: 'Submit an RFP',
}
