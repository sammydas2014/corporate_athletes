import { imageMap } from "@/assets/images/imageMap.js";

export const implementationData = {
  title: "Implementation View",
  metrics: [
    {
      icon: "bi bi-clock",
      label: "Time to Deploy",
      value: "4-8 weeks",
    },
    {
      icon: "bi bi-clock",
      label: "Complexity",
      value: "Medium-High",
    },
    {
      icon: "bi bi-clock",
      label: "Skills Required",
      value: "Python, SQL, ML fundamentals, Docker/K8s basics",
    },
    {
      icon: "bi bi-clock",
      label: "Dependencies",
      value: "Cloud infrastructure (AWS/GCP/Azure), Data warehouse access, CI/CD pipeline",
    },
  ],
};

export const integrateCTAData = {
  title: "Ready to integrate?",
  subtitle: "Get expert guidance on implementation strategy and stack optimization for your team.",
  primaryBtnLabel: "Book a Strategy Call",
  secondaryBtnLabel: "Build Your Stack",
  primaryBtnLink: "#",
  secondaryBtnLink: "#",
};

export const comparableToolsData = {
  title: "Comparable Tools",
  tools: [
    {
      score: "7.2",
      name: "Kubeflow",
      pros: "Open source, K8s native",
      cons: "Complex setup",
    },
    {
      score: "8.1",
      name: "SageMaker",
      pros: "AWS ecosystem",
      cons: "Complex setup",
    },
    {
      score: "8",
      name: "Vertex AI",
      pros: "GCP native, AutoML",
      cons: "GCP only",
    },
    {
      score: "7.5",
      name: "MLflow",
      pros: "Experiment tracking",
      cons: "Not full pipeline",
    },
  ],
};

export const reviewTestimonials = [
  {
    type: "text",
    rating: 5,
    date: "Feb 2026",
    quote:
      "NeuralFlow cut our model deployment time from 6 weeks to 3 days. The visual DAG builder alone justified the investment — our junior engineers can now build production pipelines without hand-holding.",
    name: "Sarah Chen",
    role: "Head of ML Engineering",
    avatar: null,
  },
  {
    type: "video",
    name: "Sarah Chen",
    role: "Head of ML Engineering",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    videoUrl: imageMap.videos.testiVideo,
    avatar: null,
  },
  {
    type: "text",
    rating: 4,
    date: "Feb 2026",
    quote:
      "Solid platform for structured data ML. Integration with Snowflake and Databricks was seamless. Knocked one star because custom model architectures still need workarounds.",
    name: "Marcus Johnson",
    role: "VP of Data Science",
    avatar: null,
  },
  {
    type: "text",
    rating: 5,
    date: "Feb 2026",
    quote:
      "HIPAA compliance out of the box was a game-changer for us. The audit trail and model governance features let us pass regulatory review in half the usual time.",
    name: "Priya Patel",
    role: "CTO · HealthSync AI",
    avatar: null,
  },
  {
    type: "text",
    rating: 5,
    date: "Jan 2026",
    quote:
      "The real-time monitoring and alerting system is incredibly robust. We caught a data drift issue before it hit production — saved us from a major incident.",
    name: "David Kim",
    role: "Principal Engineer · Finova",
    avatar: null,
  },
];
