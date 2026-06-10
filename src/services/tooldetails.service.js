import { imageMap } from "@/assets/images/imageMap.js";

// Top Part Data
export const overViweData = {
  title: "OpenAI",
  shortDescription: "Enterprise-grade ML pipeline orchestration",
  aboutData: "by NeuralFlow Inc. · Founded 2021 · San Francisco, CA",
  priceData: [
    {
      title: "overallScore",
      value: 4.6,
    },
    {
      title: "priceRange",
      value: "$99 - $456",
    },
  ],
  tags: ["MLOps", "Pipeline Orchestration", "AutoML", "Enterprise AI"],
};

export const summaryData = [
  {
    logo: imageMap.ideaImg,
    heading: "What It Does",
    description:
      "NeuralFlow automates the entire ML pipeline — from data ingestion to model deployment — with visual DAG builders, automated feature engineering, and one-click production deployment.",
  },
  {
    logo: imageMap.puzzleImg,
    heading: "Where It Fits",
    description:
      "Sits between your data infrastructure (warehouses, lakes) and your application layer. Replaces fragmented MLOps toolchains with a unified platform.",
  },
  {
    logo: imageMap.ideaImg,
    heading: "Best Use Cases",
    description:
      "Automated feature engineering at scale · Multi-model A/B testing in production · Real-time inference pipelines · Compliance-ready model governance",
  },
  {
    logo: imageMap.puzzleImg,
    heading: "Who It's For",
    description:
      "Data science teams (10+), ML engineers, and CTOs looking to reduce time-to-production from months to days.",
  },
];

export const breakDownData = [
  {
    metric: "Ease of Implementation",
    score: 3.5,
    description: "Moderate setup effort",
  },
  {
    metric: "Integration",
    score: 4.2,
    description: "Strong API support",
  },
  {
    metric: "ROI Potential",
    score: 4.6,
    description: "High automation ROI",
  },
  {
    metric: "Scalability",
    score: 4.5,
    description: "Scales well for large enterprises",
  },
  {
    metric: "Enterprise Readiness",
    score: 5.0,
    description: "Highly secure & compliant",
  },
  {
    metric: "Vendor Maturity",
    score: 9.0,
    description: "Highly secure & compliant",
  },
];

export const stackDataList = [
  {
    role: "architecture_role",
    title: "Orchestration Layer",
    description: "Mid-stack — between data layer and serving layer",
  },
  {
    role: "integration_type",
    title: "API-first with native connectors",
  },
  {
    role: "data_requirements",
    title: "Structured & semi-structured data. Min 10GB for optimal AutoML.",
  },
  {
    role: "Compatible Tools",
    compatible_tools: [
      {
        name: "Snowflake",
        category: "Data Warehouse",
      },
      {
        name: "Databricks",
        category: "Compute",
      },
      {
        name: "Kubernetes",
        category: "Infrastructure",
      },
      {
        name: "MLflow",
        category: "Experiment Tracking",
      },
      {
        name: "Apache Kafka",
        category: "Streaming",
      },
      {
        name: "dbt",
        category: "Transformation",
      },
    ],
  },
];

export const architectureData = [
  {
    "stage": "DATA SOURCES",
    "items": [
      "Snowflake",
      "S3",
      "Kafka"
    ],
  },
  {
    "stage": "INGESTION",
    "items": [
      "NeuralFlow Connectors"
    ],
    "platform": "NeuralFlow AI"
  },
  {
    "stage": "PROCESSING",
    "items": [
      "NeuralFlow Engine"
    ],
    "platform": "NeuralFlow AI"
  },
  {
    "stage": "TRAINING",
    "items": [
      "NeuralFlow AutoML"
    ],
    "platform": "NeuralFlow AI"
  },
  {
    "stage": "DEPLOYMENT",
    "items": [
      "NeuralFlow Serve"
    ],
    "platform": "NeuralFlow AI"
  },
  {
    "stage": "MONITORING",
    "items": [
      "NeuralFlow Monitor"
    ],
    "platform": "NeuralFlow AI"
  },
  {
    "stage": "APPLICATIONS",
    "items": [
      "Snowflake",
      "S3",
      "Kafka"
    ],
  }
]

export const useCasesData = [
  {
    logo: imageMap.dollerSign,
    title: "Finance",
    description: "Fraud detection models with real-time scoring and automated retraining on drift detection."
  },
  {
    logo: imageMap.dollerSign,
    title: " Sales",
    description: "Lead scoring and churn prediction pipelines with CRM integration."
  }
]

export const comparisonData = {
  strengths: {
    title: 'Strengths',
    points: [
      'Visual DAG builder reduces pipeline complexity by 60%',
      'Built-in model governance and  audit trails',
      'Auto-scaling inference with <50ms p99 latency',
      '200+ pre-built connectors',
      'SOC 2 Type II and HIPAA compliant'
    ]
  },
  limitations: {
    title: 'Limitations',
    points: [
      'Steep learning curve for non-Python teams',
      'Limited support for unstructured data (images, video)',
      'Pricing can escalate with high-volume inference',
      'Custom model architectures require workarounds',
      'Community edition lacks key enterprise features'
    ]
  }
}
// Top Part Data

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
  secondaryBtnLink: "/ai-intelligence/stack-generator",
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
