import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded Views
const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const EventsView = () => import('@/views/EventsView.vue')
const ContactView = () => import('@/views/ContactUs.vue')

// Solutions Nested Group
const SolutionsView = () => import('@/views/SolutionsView.vue')
const SolutionsMain = () => import('@/views/solutions/SolutionsMain.vue')
const AiStrategyGovernance = () => import('@/views/solutions/AiStrategyGovernance.vue')
const AiImplementationScaling = () => import('@/views/solutions/AiImplementationScaling.vue')
const FinanceSharedServices = () => import('@/views/solutions/FinanceSharedServices.vue')
const DigitalOperatingModel = () => import('@/views/solutions/DigitalOperatingModel.vue')
const DataAnalytics = () => import('@/views/solutions/DataAnalytics.vue')

// AI Intelligence Nested Group
const AiIntelligenceView = () => import('@/views/AiIntelligenceView.vue')
const ToolCatalogue = () => import('@/views/ai-intelligence/ToolCatalogue.vue')
const ToolDetails = () => import('@/views/ai-intelligence/ToolDetails.vue')
const ToolsShortlist = () => import('@/views/ai-intelligence/ToolsShortlist.vue')
const ToolsComparison = () => import('@/views/ai-intelligence/ToolsComparison.vue')
const StackGenerator = () => import('@/views/ai-intelligence/StackGenerator.vue')
const OutcomeView = () => import('@/views/ai-intelligence/OutcomeView.vue')

// Case Studies Nested Group
const CaseStudiesView = () => import('@/views/CaseStudiesView.vue')
const CaseStudiesList = () => import('@/views/case-studies/CaseStudiesList.vue')
const CaseStudyDetail = () => import('@/views/case-studies/CaseStudyDetail.vue')

// Insights Nested Group
const InsightsView = () => import('@/views/InsightsView.vue')
const InsightsMain = () => import('@/views/insights/InsightsMain.vue')
const Articles = () => import('@/views/insights/Articles.vue')
const AiDeepDives = () => import('@/views/insights/AiDeepDives.vue')
const PlaybooksView = () => import('@/views/insights/PlaybooksView.vue')
const PlaybooksList = () => import('@/views/insights/playbooks/PlaybooksList.vue')
const PlaybookDetail = () => import('@/views/insights/playbooks/PlaybookDetail.vue')
const ConsortiumContributions = () => import('@/views/insights/ConsortiumContributions.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/solutions',
    component: SolutionsView,
    children: [
      {
        path: '',
        name: 'solutions-main',
        component: SolutionsMain,
      },
      {
        path: 'ai-strategy-governance',
        name: 'solutions-strategy',
        component: AiStrategyGovernance,
      },
      {
        path: 'ai-implementation-scaling',
        name: 'solutions-scaling',
        component: AiImplementationScaling,
      },
      {
        path: 'finance-shared-services',
        name: 'solutions-finance',
        component: FinanceSharedServices,
      },
      {
        path: 'digital-operating-model',
        name: 'solutions-digital',
        component: DigitalOperatingModel,
      },
      {
        path: 'data-analytics',
        name: 'solutions-data',
        component: DataAnalytics,
      },
    ],
  },
  {
    path: '/ai-intelligence',
    component: AiIntelligenceView,
    children: [
      {
        path: '',
        name: 'ai-catalogue',
        component: ToolCatalogue,
      },
      {
        path: 'tools/:id',
        name: 'tool-details',
        component: ToolDetails,
        props: true,
      },
      {
        path: 'shortlist',
        name: 'tools-shortlist',
        component: ToolsShortlist,
      },
      {
        path: 'comparison',
        name: 'tools-comparison',
        component: ToolsComparison,
      },
      {
        path: 'stack-generator',
        name: 'stack-generator',
        component: StackGenerator,
      },
      {
        path: 'outcome',
        name: 'stack-outcome',
        component: OutcomeView,
      },
    ],
  },
  {
    path: '/case-studies',
    component: CaseStudiesView,
    children: [
      {
        path: '',
        name: 'case-studies-list',
        component: CaseStudiesList,
      },
      {
        path: ':id',
        name: 'case-study-detail',
        component: CaseStudyDetail,
        props: true,
      },
    ],
  },
  {
    path: '/insights',
    component: InsightsView,
    children: [
      {
        path: '',
        name: 'insights-main',
        component: InsightsMain,
      },
      {
        path: 'articles',
        name: 'insights-articles',
        component: Articles,
      },
      {
        path: 'deep-dives',
        name: 'insights-deep-dives',
        component: AiDeepDives,
      },
      {
        path: 'playbooks',
        component: PlaybooksView,
        children: [
          {
            path: '',
            name: 'playbooks-list',
            component: PlaybooksList,
          },
          {
            path: ':id',
            name: 'playbook-detail',
            component: PlaybookDetail,
            props: true,
          },
        ],
      },
      {
        path: 'consortium-contributions',
        name: 'insights-consortium',
        component: ConsortiumContributions,
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  // Catch-all fallback
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
