import { imageMap } from '@/assets/images/imageMap.js'

export const bannerData = {
  title: 'AI-Driven Transformation for Performance-Focused Enterprises',
  subtitle:
    'Corporate Athletes is a boutique advisory and AI consortium helping leadership teams redesign operating models, deploy intelligent technologies, and deliver measurable performance improvements.',
  bgImage: imageMap.homeBnr,
  showAccent: true,
  accentColor: '#1b9aaa',
  minHeight: '800px',
  ctas: [
    { label: 'Book a Strategy Call', style: 'primary' },
    { label: 'Explore AI Intelligence', style: 'outline' },
  ],
}

export const services = [
  {
    id: 1,
    title: 'AI-Enabled Transformation Advisory',
    description: 'Define strategy, operating model, and roadmap',
    icon: imageMap.strategyOne,
  },
  {
    id: 2,
    title: 'Transformation Delivery',
    description: 'Execute and embed change across functions',
    icon: imageMap.algorithm,
  },
  {
    id: 3,
    title: 'AI Lab',
    description:
      'Build and deploy enterprise AI solutions, combining reusable components with bespoke development',
    icon: imageMap.dataProcessing,
  },
  {
    id: 4,
    title: 'Education & Academy',
    description: 'Build internal AI capability and skills',
    icon: imageMap.administration,
  },
]

export const features = [
  {
    id: 1,
    title: 'Practitioner-led',
    description: 'Our advisors are former operators and transformation leaders.',
    icon: imageMap.advisorOne,
  },
  {
    id: 2,
    title: 'Consortium intelligence',
    description: 'Our advisors are former operators and transformation leaders.',
    icon: imageMap.advisorTwo,
  },
  {
    id: 3,
    title: 'Vendor neutral',
    description: 'Our advisors are former operators and transformation leaders.',
    icon: imageMap.advisorThree,
  },
  {
    id: 4,
    title: 'Outcome driven',
    description: 'Our advisors are former operators and transformation leaders.',
    icon: imageMap.advisorFour,
  },
]

export const caseStudies = [
  {
    title: 'Global AP Transformation Across 40 Countries',
    sub: 'Reduced invoice cycle time from 12 to 3 days',
    img: imageMap.cstdImg1,
    to: '/case-studies/consumer-goods',
  },
  {
    title: 'Finance Shared Services Modernization',
    sub: 'Achieved $20M savings through intelligent automation',
    img: imageMap.cstdImg2,
    to: '/case-studies/energy',
  },
  {
    title: 'Real-Time Claims Processing Platform',
    sub: 'Reduced business processing costs by 45%',
    img: imageMap.cstdImg3,
    to: '/case-studies/healthcare',
  },
  {
    title: 'Supply Chain Intelligence & Forecasting',
    sub: 'Increased forecast accuracy from 72% to 94%',
    img: imageMap.cstdImg1,
    to: '/case-studies/retail',
  },
  {
    title: 'Enterprise Cloud Migration & Optimization',
    sub: 'Reduced infrastructure costs by 38% in 6 months',
    img: imageMap.cstdImg2,
    to: '/case-studies/technology',
  },
]

export const insights = [
  {
    eventData: 'March 5, 2026',
    title: 'Selecting the right enterprise AI stack',
    detals:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
  {
    eventData: 'February 28, 2026',
    title: 'Lessons from operating model redesign',
    detals:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
  {
    eventData: 'March 5, 2026',
    title: 'Selecting the right enterprise AI stack',
    detals:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
]

export const accelerateData = {
  title: "Ready to accelerate performance with AI?",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Submit an rfp",
};
