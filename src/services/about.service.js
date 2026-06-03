import { imageMap } from "@/assets/images/imageMap.js";

export const bannerData = {
  title: "Focused Intelligence. Measurable Transformation.",
  subtitle:
    "Independent, practitioner-led advisory combining AI expertise, operating model design, and performance accountability.",
  bgImage: imageMap.aboutBnr,
  overlay: true,
  showAccent: true,
  accentColor: "#1b9aaa",
  minHeight: "580px",
};

export const teamCards = [
  {
    id: 1,
    image: imageMap.profOne,
    title: "Managing Partner",
    speciality: "Operating Model & AI Strategy",
    description: "20+ years across global transformation programmes.",
  },
  {
    id: 2,
    image: imageMap.profTwo,
    title: "Managing Partner",
    speciality: "Operating Model & AI Strategy",
    description: "20+ years across global transformation programmes.",
  },
  {
    id: 3,
    image: imageMap.profThree,
    title: "Managing Partner",
    speciality: "Operating Model & AI Strategy",
    description: "20+ years across global transformation programmes.",
  },
];

export const whoWeAreData = {
  image: imageMap.whoWeAreImg,
  tag: "WHO WE ARE",

  title: "We are senior operators first, advisors second.",

  description: [
    {
      para: "Corporate Athletes is built around a small group of practitioners who have run transformation inside the enterprise — not just consulted around it. Our work is quiet, technical, and accountable.",
    },
    {
      para: "We were founded on a simple premise: the most consequential AI and operating model decisions of the next decade should not be outsourced to the lowest-cost analyst in the room.",
    },
  ],

  stats: [
    {
      value: "100%",
      label: "Practitioner-led engagements",
    },
    {
      value: "30+",
      label: "Curated consortium experts",
    },
    {
      value: "0",
      label: "Vendor reseller agreements",
    },
  ],
};

export const ourModelData = [
  {
    id: 1,
    title: "Advisory",
    description: "Define strategy, operating model, and roadmap",
    icon: imageMap.monitorImg,
  },
  {
    id: 2,
    title: "Delivery",
    description: "Execute and embed transformation across functions",
    icon: imageMap.electronicImg,
  },
  {
    id: 3,
    title: "AI Lab",
    description:
      "Build and deploy enterprise AI solutions, combining reusable components with bespoke development",
    icon: imageMap.pieChartImg,
  },
  {
    id: 4,
    title: "Capability Building",
    description: "Build and deploy enterprise AI solutions using reusable components",
    icon: imageMap.financialImg,
  },
];

export const consortiumData = {
  tag: "Consortium Model",
  title: "Curated. Not staffed.",
  imageData: imageMap.socialConnection,
};

export const solutionData = [
  {
    title: "Practitioner-led",
    description:
      "Every engagement is led by an operator who has built and run what you are building.",
  },
  {
    title: "Curated, not staffed",
    description: "We assemble a small, named team of specialists per engagement — not a pyramid.",
  },
  {
    title: "Vendor-independent",
    description:
      "We hold no reseller agreements. AI tooling assessments are performed on the merits.",
  },
  {
    title: "Outcome-bound",
    description: "Commercial structure tied to performance milestones, not utilisation.",
  },
];
