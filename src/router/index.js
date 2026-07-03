import { createRouter, createWebHistory } from "vue-router";

// Lazy-loaded Views
const HomeView = () => import("@/views/Home/HomeView.vue");
const AboutView = () => import("@/views/About/AboutView.vue");
const EventsView = () => import("@/views/Events/EventsView.vue");
const EventDetails = () => import("@/views/Events/EventDetails.vue");
const ContactView = () => import("@/views/Contact/ContactView.vue");
const Registration = () => import("@/views/Registration/Registration.vue");
const SubscriptionView = () => import("@/views/Subscription/SubscriptionView.vue");
const ProfileView = () => import("@/views/Profile/ProfileView.vue");

// Solutions Nested Group
const SolutionsView = () => import("@/views/Solutions/SolutionsView.vue");
const SolutionsMain = () => import("@/views/Solutions/SolutionsMain.vue");
const AiStrategyGovernance = () => import("@/views/Solutions/AiStrategyGovernance.vue");
const AiImplementationScaling = () => import("@/views/Solutions/AiImplementationScaling.vue");
const FinanceSharedServices = () => import("@/views/Solutions/FinanceSharedServices.vue");
const DigitalOperatingModel = () => import("@/views/Solutions/DigitalOperatingModel.vue");
const DataAnalytics = () => import("@/views/Solutions/DataAnalytics.vue");

// AI Intelligence Nested Group
const AiIntelligenceView = () => import("@/views/AiIntelligence/AiIntelligenceView.vue");
const AiIntelligenceMain = () => import("@/views/AiIntelligence/AiIntelligenceMain.vue");
const ToolCatalogue = () => import("@/views/AiIntelligence/ToolCatalogue.vue");
const ToolDetails = () => import("@/views/AiIntelligence/ToolDetails.vue");
const ToolsShortlist = () => import("@/views/AiIntelligence/ToolsShortlist.vue");
const ToolsComparison = () => import("@/views/AiIntelligence/ToolsComparison.vue");
const StackGenerator = () => import("@/views/AiIntelligence/StackGenerator.vue");
const OutcomeView = () => import("@/views/AiIntelligence/OutcomeView.vue");

// Case Studies Nested Group
const CaseStudiesView = () => import("@/views/CaseStudies/CaseStudiesView.vue");
const CaseStudiesList = () => import("@/views/CaseStudies/CaseStudiesList.vue");
const CaseStudyDetail = () => import("@/views/CaseStudies/CaseStudyDetail.vue");

// Insights Nested Group
const InsightsView = () => import("@/views/Insights/InsightsView.vue");
const InsightsMain = () => import("@/views/Insights/InsightsMain.vue");
const Articles = () => import("@/views/Insights/Articles.vue");
const AiDeepDives = () => import("@/views/Insights/AiDeepDives.vue");
const PlaybooksView = () => import("@/views/Insights/PlaybooksView.vue");
const PlaybooksList = () => import("@/views/Insights/playbooks/PlaybooksList.vue");
const PlaybookDetail = () => import("@/views/Insights/playbooks/PlaybookDetail.vue");
const ConsortiumContributions = () => import("@/views/Insights/ConsortiumContributions.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/solutions",
    component: SolutionsView,
    children: [
      {
        path: "",
        name: "solutions-main",
        component: SolutionsMain,
      },
      {
        path: "ai-strategy-governance",
        name: "solutions-strategy",
        component: AiStrategyGovernance,
      },
      {
        path: "ai-implementation-scaling",
        name: "solutions-scaling",
        component: AiImplementationScaling,
      },
      {
        path: "finance-shared-services",
        name: "solutions-finance",
        component: FinanceSharedServices,
      },
      {
        path: "digital-operating-model",
        name: "solutions-digital",
        component: DigitalOperatingModel,
      },
      {
        path: "data-analytics",
        name: "solutions-data",
        component: DataAnalytics,
      },
    ],
  },
  {
    path: "/ai-intelligence",
    component: AiIntelligenceView,
    children: [
      {
        path: "",
        name: "aiintelligence-main",
        component: AiIntelligenceMain,
      },
      {
        path: "toolcatalogue",
        name: "toolcatalogue",
        component: ToolCatalogue,
      },
      {
        path: "tools/:id",
        name: "tool-details",
        component: ToolDetails,
        props: true,
      },
      {
        path: "shortlist",
        name: "tools-shortlist",
        component: ToolsShortlist,
      },
      {
        path: "comparison",
        name: "tools-comparison",
        component: ToolsComparison,
      },
      {
        path: "stack-generator",
        name: "stack-generator",
        component: StackGenerator,
      },
      {
        path: "outcome",
        name: "stack-outcome",
        component: OutcomeView,
      },
    ],
  },
  {
    path: "/case-studies",
    component: CaseStudiesView,
    children: [
      {
        path: "",
        name: "case-studies-list",
        component: CaseStudiesList,
      },
      {
        path: ":id",
        name: "case-study-detail",
        component: CaseStudyDetail,
        props: true,
      },
    ],
  },
  {
    path: "/insights",
    component: InsightsView,
    children: [
      {
        path: "",
        name: "insights-main",
        component: InsightsMain,
      },
      {
        path: "articles",
        name: "insights-articles",
        component: Articles,
      },
      {
        path: "deep-dives",
        name: "insights-deep-dives",
        component: AiDeepDives,
      },
      {
        path: "playbooks",
        component: PlaybooksView,
        children: [
          {
            path: "",
            name: "playbooks-list",
            component: PlaybooksList,
          },
          {
            path: ":id",
            name: "playbook-detail",
            component: PlaybookDetail,
            props: true,
          },
        ],
      },
      {
        path: "consortium-contributions",
        name: "guest-consortium-contributions",
        component: ConsortiumContributions,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/events",
    name: "events",
    component: EventsView,
  },
  {
    path: "/events/event-details/:id",
    name: "event-details",
    component: EventDetails,
    props: true,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
  {
    path: "/subscription",
    name: "subscription",
    component: SubscriptionView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  // Catch-all fallback
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
