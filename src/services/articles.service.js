import { imageMap } from "@/assets/images/imageMap"

export const bannerData = {
  title: "Executive signal, without the theater.",
  subtitle: "Concise perspectives for leaders who need clear judgement on AI adoption, transformation pressure points, and operating model performance.",
  imageUrl: imageMap.article_bnr,
  imageAlt: "Articles visual",
  bgColor: "#040e1c",
  minHeight: "450px",
  showSearch: true,
  searchPlaceholder: "Enter key words..",
  searchIconPosition: "right",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Insights", href: "/insights" },
    { label: "Articles" },
  ],
};

export const lensData= [
  {
    imageSrc: imageMap.PageNoteIcon,
    title: "Practical enterprise relevance"
  },
  {
    imageSrc: imageMap.PageNoteIcon,
    title: "Independent AI judgement"
  },
  {
    imageSrc: imageMap.PageNoteIcon,
    title: "Execution-oriented guidance"
  },
]

export const thinkData = [
  {
    imageSrc: imageMap.thinkOneImg,
    thinkData: "March 8, 2026",
    title: "AI transformation is an operating discipline, not a technology program",
    description: "How leadership teams can connect AI investment to decision rights, workflow redesign, adoption cadence, and measurable performance outcomes."
  },
  {
    imageSrc: imageMap.thinkTwoImg,
    thinkData: "March 8, 2026",
    title: "The enterprise AI questions boards should ask before scaling pilots",
    description: "A practical lens for separating experimentation from enterprise readiness, with emphasis on risk, accountability, and value realization."
  },
  {
    imageSrc: imageMap.thinkThreeImg,
    thinkData: "March 8, 2026",
    title: "Why transformation stalls between strategy approval and field execution",
    description: "The recurring gaps in sponsorship, operating rhythm, capability transfer, and frontline adoption that prevent durable change."
  },

]
