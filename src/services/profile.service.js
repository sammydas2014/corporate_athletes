import {imageMap} from "@/assets/images/imageMap"

export const profileData = {
  "id": "USR-1001",
  "profile": {
    "firstName": "Michael",
    "lastName": "Anderson",
    "fullName": "Michael Anderson",
    "designation": "Chief Operating Officer",
    "company": "Global Bank International",
    "industry": "Financial Services",
    "location": "London, UK",
    "locationIcon": imageMap.location_white,
    "jobIcon": imageMap.jobIcon,
    "timezone": "GMT (London)",
    "memberSince": "June 2022",
    "avatar": imageMap.userImage,
    "coverImage": "/images/profile/profile-banner.jpg",
    "verified": true,
    "editable": true
  },

  "statistics": [
    {
      "id": 1,
      "title": "Events Attended",
      "value": 3,
      "icon": imageMap.blackCalender,
      "buttonText": "View All",
      "action": "events"
    },
    {
      "id": 2,
      "title": "Upcoming Events",
      "value": 2,
      "icon": imageMap.blackCalender,
      "buttonText": "View All",
      "action": "upcoming-events"
    },
    {
      "id": 3,
      "title": "Active Membership",
      "value": 1,
      "icon": imageMap.blackBadge,
      "buttonText": "View Details",
      "action": "membership"
    },
    {
      "id": 4,
      "title": "Connections",
      "value": 15,
      "icon": imageMap.blackNodes,
      "buttonText": "View Network",
      "action": "connections"
    }
  ],

  "upcomingEvents": [
    {
      "id": "EVT-101",
      "category": "Executive Roundtable",
      "title": "Operating model redesign: from pilot to productivity at scale",
      "image": imageMap.roundTable_1,
      "date": {
        "day": "24",
        "month": "JUN",
        "year": "2026",
        "weekday": "Friday"
      },
      "time": "10:00 AM - 12:00 PM",
      "location": "London, UK",
      "status": "Invited"
    },
    {
      "id": "EVT-102",
      "category": "Executive Roundtable",
      "title": "AI cost discipline for the office of the CFO",
      "image": imageMap.roundTable_2,
      "date": {
        "day": "12",
        "month": "AUG",
        "year": "2026",
        "weekday": "Friday"
      },
      "time": "10:00 AM - 12:00 PM",
      "location": "London, UK",
      "status": "Invited"
    }
  ],

  "profileSummary": {
    "jobTitle": "Chief Operating Officer",
    "organization": "Global Bank International",
    "industry": "Financial Services",
    "companySize": "10,000+ Employees",
    "location": "London, UK",
    "timezone": "GMT (London)"
  },

  "pastParticipation": [
    {
      "id": "PP-001",
      "title": "Governing agentic workflows in regulated industries",
      "location": "Zurich, Switzerland",
      "date": {
        "day": "24",
        "month": "JULY",
        "year": "2025"
      },
      "image": "/images/events/past-event-1.jpg",
      "buttonText": "View Summary"
    },
    {
      "id": "PP-002",
      "title": "Governing agentic workflows in regulated industries",
      "location": "Zurich, Switzerland",
      "date": {
        "day": "24",
        "month": "JULY",
        "year": "2025"
      },
      "image": "/images/events/past-event-2.jpg",
      "buttonText": "View Summary"
    },
    {
      "id": "PP-003",
      "title": "Governing agentic workflows in regulated industries",
      "location": "Zurich, Switzerland",
      "date": {
        "day": "24",
        "month": "JULY",
        "year": "2025"
      },
      "image": "/images/events/past-event-3.jpg",
      "buttonText": "View Summary"
    }
  ],

  "preferences": {
    "topics": [
      "AI Transformation",
      "Operating Model Design",
      "Cost Optimization",
      "Workforce Strategy",
      "Governance",
      "C-Suite"
    ],
    "eventFormat": [
      "In-Person"
    ],
    "regions": [
      "Europe",
      "North America",
      "Asia Pacific"
    ]
  },

  "membership": {
    "type": "Consortium Member",
    "status": "Full Access",
    "joinedDate": "31 May 2023",
    "avatar": "/images/membership/logo.png",
    "benefits": [
      {
        "title": "Exclusive Events",
        "description": "Access to member-only executive discussions."
      },
      {
        "title": "Peer Network",
        "description": "Connect with senior executives across industries."
      },
      {
        "title": "Insights & Resources",
        "description": "Research reports and expert insights."
      }
    ]
  },

  "notificationSettings": [
    {
      "id": 1,
      "title": "Event Invitations",
      "description": "Receive invitations to new events.",
      "enabled": true
    },
    {
      "id": 2,
      "title": "Event Reminders",
      "description": "Get reminders before events.",
      "enabled": true
    },
    {
      "id": 3,
      "title": "Consortium Updates",
      "description": "News, insights and membership updates.",
      "enabled": true
    },
    {
      "id": 4,
      "title": "Partner Communications",
      "description": "Updates from consortium partners.",
      "enabled": false
    }
  ],

  "actions": {
    "editProfile": true,
    "viewAllUpcomingEvents": true,
    "viewAllParticipation": true,
    "editPreferences": true,
    "editNotifications": true
  }
}
