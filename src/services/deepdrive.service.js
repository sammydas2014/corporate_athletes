import { imageMap } from "@/assets/images/imageMap";


// Banner Data
export const bannerData = {
  title: "Technical intelligence for enterprise AI decisions",
  subtitle: "Independent analysis of AI capabilities, model risk, vendor claims, and implementation readiness for leadership teams that need practical judgement before scaling.",
  imageUrl: imageMap.deepdiveBnrImg,
  imageAlt: "human-interact-with-ai-artificial-intelligence-virtual-assistant-faas 1",
  bgColor: "#000000",
  minHeight: "450px",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "AI deep dives" },
  ],
  ctas: [
    { label: "Review deep dives", href: "/insights/articles", style: "primary" },
  ],
};

export const lensData= [
  {
    imageSrc: imageMap.threedModel,
    title: "Model capability",
    details:"What the technology can reliably do in enterprise conditions."
  },
  {
    imageSrc: imageMap.riskImg,
    title: "Risk posture",
    details:"Where controls, oversight, and accountability need to be designed."
  },
  {
    imageSrc: imageMap.intrigationImg,
    title: "Integration fit",
    details:"How AI connects to workflows, data, systems, and decision rights."
  },
  {
    imageSrc: imageMap.settingsImg,
    title: "Execution readiness",
    details:"Whether the organization can move from experiment to performance."
  },
]

//

export const analysisData = [
  {
    id: 1,
    number: '01',
    category: 'Capability scan',
    title: 'Agentic AI readiness beyond the prototype',
    description:
      'The workflow, control, data access, and governance conditions required before autonomous systems can safely move into enterprise operations.',
    footer: 'Readiness criteria',
  },

  {
    id: 2,
    number: '02',
    category: 'Risk intelligence',
    title: 'Model risk is now an operating model question',
    description:
      'How leaders should connect model selection, human oversight, escalation paths, auditability, and accountability in daily operating rhythm.',
    footer: 'Control design',
    active: true,
  },

  {
    id: 3,
    number: '03',
    category: 'Vendor assessment',
    title: 'Choosing AI platforms when every vendor claims differentiation',
    description:
      'A practical evaluation lens for separating technical novelty from integration fit, adoption friction, cost trajectory, and measurable enterprise value.',
    footer: 'Platform fit',
  },
]


