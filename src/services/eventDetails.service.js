import { imageMap } from "@/assets/images/imageMap";

export const heroData = {
    id: 1,
    badge: "EXECUTIVE ROUNDTABLE",

    title:
      "Operating model redesign: from pilots to productive capacity",

    description:
      "Practitioner roundtable on rewiring functions for AI-native throughput - workforce, controls, accountability.",

    image: imageMap.eventDtls_bnnr_img,

    details: [
      {
        icon: imageMap.event_calender,
        value: "12 June 2026 (Friday)"
      },
      {
        icon: imageMap.event_time,
        value: "10:00 AM - 12:00 PM (Local Time)"
      },
      {
        icon: imageMap.event_location,
        value: "London, UK"
      },
      {
        icon: imageMap.event_id,
        value: "In-Person"
      },
      {
        icon: imageMap.event_seat,
        value: "18 Seats Available"
      }
    ],
    eventGoal:[
      {
        heading: "WHO ATTENDS",
        list: [
          "Heads of Transformation",
          "COOs",
          "PE Operating Partners"
        ]
      },
      {
        heading: "FOCUS AREAS",
        list: [
          "Operating Model",
          "Workforce",
          "Controls",
          "Accountability"
        ]
      }
    ],


    cta: {
      label: "REQUEST INVITATION",
      link: "#"
    }
  };


  // Duscussion Data

  export const discussionHighlights = {
    id: 1,
    icon: imageMap.bigBulbImg,
    title: "Why this discussion matters now",
    description:
      "Most organisations have completed AI pilots. Few have redesigned operating models, controls, accountability structures and workforce design to support scaled deployment. This roundtable focuses on the organisational changes required to move from experimentation to productive capacity."
  };

  // discussion topic data
  export const contentCards = [
  {
    id: 1,
    title: "About this roundtable",
    type: "paragraph",
    content: [
      "Moving from pilot to productive capacity requires more than technology-it demands a redesigned operating model.",
      "This closed-door roundtable brings together senior operators to share practical approaches to rewire functions, clarify accountability, and build AI-native throughput while maintaining strong controls."
    ]
  },
  {
    id: 2,
    title: "Key discussion topics",
    type: "bullet",
    bulletStyle: "dot",
    content: [
      "Redesigning functions for AI-native throughput",
      "Workforce model and capability shifts",
      "Controls, risk and compliance in AI operations",
      "Accountability frameworks and governance",
      "Lessons learned from pilot to scale journeys"
    ]
  },

];

// Facilitator Data
export const facilitatorSection = {
  id: "facilitators",
  heading: "Facilitated By",
  cards: [
    {
      id: 1,
      avatar: imageMap.facilitatedOne,
      name: "Antonio Willybiro",
      role: "Finance Transformation & AI Strategy"
    },
    {
      id: 2,
      avatar: imageMap.facilitatedTwo,
      name: "Sarah Smith",
      role: "Former COO, Global Financial Services"
    },
    {
      id: 3,
      avatar: imageMap.facilitatedOne,
      name: "Adward James",
      role: "Partner, AI & Data Strategy"
    }
  ]
};

// Session Details Data

export const sessionDetails = {
  sectionTitle: "Session Details",
  details: [
    {
      id: 1,
      icon: {
        name: "format",
        svg: imageMap.formatImg
      },
      heading: "FORMAT",
      content: "Interactive roundtable discussion"
    },
    {
      id: 2,
      icon: {
        name: "seats",
        svg: imageMap.chairOfficeImg
      },
      heading: "SEATS",
      content: "Limited to 18 senior operators"
    },
    {
      id: 3,
      icon: {
        name: "rule",
        svg: imageMap.rulesAltImg
      },
      heading: "CHATHAM HOUSE RULE",
      content: "Open discussion, insights stay in the room"
    },
    {
      id: 4,
      icon: {
        name: "participation",
        svg: imageMap.usersAltImg
      },
      heading: "PARTICIPATION",
      content: "By invitation only. Apply to secure your seat."
    }
  ]
};

// Attend Data
export const whoShouldAttend = {
  sectionTitle: "Who Should Attend",
  tags: [
    {
      id: 1,
      text: "Heads of Transformation",
      type: "primary"
    },
    {
      id: 2,
      text: "COOs",
      type: "primary"
    },
    {
      id: 3,
      text: "VPs/Directors of Operations",
      type: "primary"
    },
    {
      id: 4,
      text: "PE Operating Partners",
      type: "primary"
    },
    {
      id: 5,
      text: "Strategy & Transformation Leaders",
      type: "primary"
    }
  ]
};

// Discus Data
export const discussData =  [ {
    id: 3,
    title: "Participants will leave with",
    type: "bullet",
    bulletStyle: "check",
    content: [
      "AI operating model assessment criteria",
      "Governance design patterns",
      "Workforce redesign considerations",
      "Peer implementation lessons actionable next steps"
    ]
  },
  {
    id: 4,
    title: "Discussion questions",
    type: "bullet",
    bulletStyle: "dot",
    content: [
      "How should accountability change in AI-enabled operating models?",
      "Which controls become more important as autonomy increases?",
      "What workforce redesign patterns are emerging?",
      "How should benefits be measured?"
    ]
  }];

// Intregate Cta
export const integrateCTAData = {
  title: "Ready to Join the Conversation?",
  subtitle:"Request an invitation to reserve your seat in this exclusive executive roundtable.",
  primaryBtnLabel: "Apply to Attend",
};

// Agenda Data
export const agendaData = {
  title: "Schedule And Agenda",

  description:
    "A representation of the event planning of design conference",

  button: {
    text: "Download Agenda",
    url: "#"
  },

  days: [
    {
      id: 1,

      label: "First Day",

      date: 12,

      month: "June",

      weekday: "Friday",

      component: "timeline",

      content: [
        {
          id: 1,
          time: "10:00 AM-10:15 AM",

          title: "Welcome & Introductions",

          description:
            "Opening remarks and participant introductions. Key trends and operating model shifts"
        },

        {
          id: 2,
          time: "10:15 AM-11:30 AM",

          title: "Roundtable Discussion",

          description:
            "Peer insights and practical approaches. What's working, what's not, and why"
        },

        {
          id: 3,
          time: "11:50 AM-12:00 PM",

          title: "Closing Remarks",

          description:
            "Summary and next steps. End of session."
        }
      ]
    },

    {
      id: 2,

      label: "Second Day",

      date: 13,

      month: "June",

      weekday: "Saturday",

      component: "timeline",

      content: [
        {
          id: 1,
          time: "09:00 AM–09:30 AM",

          title: "Design Systems Deep Dive",

          description:
            "Tokens, themes, and component architecture at scale."
        },

        {
          id: 2,
          time: "09:45 AM–11:00 AM",

          title: "Workshop: Prototyping",

          description:
            "Hands-on rapid prototyping with Figma and real constraints."
        },

        {
          id: 3,
          time: "11:15 AM–12:00 PM",

          title: "Panel: Ship vs. Polish",

          description:
            "When to iterate in public and when to wait."
        }
      ]
    },

    {
      id: 3,

      label: "Third Day",

      date: 14,

      month: "June",

      weekday: "Sunday",

      component: "timeline",

      content: [
        {
          id: 1,
          time: "10:00 AM–10:45 AM",

          title: "Accessibility in Practice",

          description:
            "Real-world a11y audits and remediation strategies."
        },

        {
          id: 2,
          time: "11:00 AM–11:45 AM",

          title: "Closing Keynote",

          description:
            "Where design tooling is heading in the next five years."
        },
      ]

    }
  ]
}


//
export const roundtablesData = {
  title: "You May Also Be Interested In",
  ctaButton:{
    label: "VIEW ALL EVENTS",
    link: "/events"
  },
  items: [
    {
      id: 1,
      day: "09",
      month: "Sep",
      bgImage: imageMap.roundTable_2,
      tags: [
        { label: "In-person", type: "muted" },
        { label: "14 seats", type: "muted" },
        { label: "New York", type: "muted" },
      ],
      title: "AI Cost Discipline for the Office of the CFO",
      description: "How CFOs of $1bn+ enterprises are imposing capital discipline on AI spend.",
      whoAttends: ["CFOs", "Group Controllers", "FP&A Leads"],
      ctaLabel: "View details",
      ctaLink: "#",
    },
    {
      id: 2,
      day: "12",
      month: "Jun",
      bgImage: imageMap.roundTable_3,
      tags: [
        { label: "In-person", type: "muted" },
        { label: "12 seats", type: "muted" },
        { label: "Zurich", type: "muted" },
      ],
      title: "Governing Agentic Workflows in Regulated Industries",
      description:
        "Audit, risk and second-line perspectives on agent autonomy in financial services and healthcare.",
      whoAttends: ["CROs", "Heads of Compliance", "CIOs"],
      ctaLabel: "View details",
      ctaLink: "#",
    },
  ],
};


