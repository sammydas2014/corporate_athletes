<template>
  <div class="registration-main">
    <Banner />
    <section class="innr-section">
      <div class="container">
        <div class="wraper-cls">
          <div class="form-wrap">
            <h3>REGISTRATION FORM</h3>
            <form @submit.prevent="handleSubmit">
              <div class="inner-con">
                <div class="hdng">
                  <h5>PERSONAL INFORMATION</h5>
                </div>
                <div class="frm-innr-con">
                  <div class="inpWrp">
                    <label for="first_name">First name*</label>
                    <BaseInput id="first_name" placeholder="Michael" v-model="firstname" />
                  </div>
                  <div class="inpWrp">
                    <label for="last_name">Last name*</label>
                    <BaseInput id="last_name" placeholder="Anderson" v-model="lastName" />
                  </div>
                  <div class="inpWrp">
                    <label for="last_name">Work Email</label>
                    <BaseInput
                      type="email"
                      id="user_email"
                      placeholder="michael.anderson@globalbank.com"
                      v-model="userEmail"
                    />
                  </div>
                  <div class="inpWrp">
                    <label for="last_name">Linkedin Profile</label>
                    <BaseInput
                      id="linkedin_link"
                      placeholder="linkedin.com/in/michaelanderson"
                      v-model="linkedinLink"
                    />
                  </div>
                </div>
              </div>
              <div class="inner-con">
                <div class="hdng">
                  <h5>PROFESSIONAL INFORMATION</h5>
                </div>
                <div class="frm-innr-con">
                  <div class="inpWrp">
                    <label for="first_name">Organisation</label>
                    <BaseInput
                      id="bank_name"
                      placeholder="Global Bank International"
                      v-model="bankName"
                    />
                  </div>
                  <div class="inpWrp">
                    <label for="last_name">Job Title"</label>
                    <BaseInput
                      id="last_name"
                      placeholder="Chief Operating Officer"
                      v-model="jobtitle"
                    />
                  </div>
                  <div class="inpWrp">
                    <BaseSelect
                      v-model="industryName"
                      @change="handelIndustryChange"
                      :options="industryData?.options"
                      :label="industryData?.label"
                    />
                  </div>
                  <div class="inpWrp">
                    <BaseSelect
                      v-model="companySize"
                      @change="handelCompanySize"
                      :options="companySizeData?.options"
                      :label="companySizeData?.label"
                    />
                  </div>
                  <div class="inpWrp">
                    <BaseSelect
                      v-model="seniorityLevel"
                      @change="handelSeniorityLevel"
                      :options="seniorityData?.options"
                      :label="seniorityData?.label"
                    />
                  </div>
                </div>
              </div>
              <div class="inner-con">
                <div class="hdng">
                  <h5>ABOUT YOUR INTEREST</h5>
                </div>
                <div class="frm-innr-con">
                  <div class="inpWrp textare-wrap">
                    <label for="last_name">Why would you like to attend?</label>
                    <BaseTextArea
                      v-model="message"
                      placeholder="We are currently evaluating how AI can improve operational efficiency across several business"
                      auto-resize
                    />
                  </div>
                </div>
                <!--  -->
                <div class="frm-innr-con">
                  <div class="inpWrp textare-wrap checkbox-grp">
                    <BaseCheckboxGroup
                      v-model="selectedTopics"
                      label="Why would you like to attend?"
                      :options="attendanceOptions"
                    />
                  </div>
                </div>
              </div>
              <div class="inner-con referal-wrap">
                <div class="hdng">
                  <h5>REFERRAL</h5>
                </div>
                <div class="inpWrp">
                    <BaseSelect
                      v-model="referalCode"
                      @change="handelReferalCode"
                      :options="referalData?.options"
                      :label="referalData?.label"
                    />
                  </div>
              </div>
              <div class="consern-list">
                <div class="hdng">
                  <h5>CONSENT</h5>
                </div>
                <ul>
                  <li v-for="(item, index) in consernData" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
              <div class="summaryWrap">
                <div class="hdng">
                  <h5>ORDER SUMMARY</h5>
                </div>
                <div class="lineWrap">
                  <h6>Event Registration</h6>
                  <span class="valPrc">£1,250.00</span>
                </div>
                <div class="lineWrap">
                  <h6>VAT (20%)</h6>
                  <span class="valPrc">£250.00</span>
                </div>
                <div class="total-wrap">
                  <h6>Total</h6>
                  <span class="valPrc">£1,500.00</span>
                </div>
              </div>
              <div class="btn-wrap">
                <BaseButton>
                  Register
                </BaseButton>
                <p>
                  Secure & Encrypted
                </p>
              </div>
            </form>
          </div>
          <div class="summaryPart">
            <RegistrationCard
              :data="summaryData"
            />
            <div class="principalss-wrap">
              <DiscussionCard
                v-for="card in discussData"
              :key="card.id"
              :card="card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <BaseAccelerate />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Banner from "./sections/Banner.vue";
import BaseInput from "@/components/common/BaseInput.vue";
import BaseSelect from "@/components/common/BaseSelect.vue";
import BaseTextArea from '@/components/common/BaseTextArea.vue'
import BaseCheckboxGroup from '@/components/common/BaseCheckboxGroup.vue'
import BaseButton from "@/components/common/BaseButton.vue";
import BaseAccelerate from "@/components/common/BaseAccelerate.vue";
import RegistrationCard from "@/components/common/RegistrationCard.vue";
import DiscussionCard from "@/components/common/DiscussionCard.vue";
import { imageMap } from "@/assets/images/imageMap";

const firstname = ref("");
const lastName = ref("");
const userEmail = ref("");
const linkedinLink = ref("");
const bankName = ref("");
const jobtitle = ref("");
const industryName = ref("");
const companySize = ref("");
const seniorityLevel = ref("");
const message = ref('')
const referalCode = ref('')

const industryData = ref({
  label: "Industry",
  name: "industry",
  placeholder: "Select Industry",
  value: "financial-services",
  options: [
    {
      label: "Financial Services",
      value: "financial-services",
    },
    {
      label: "Healthcare",
      value: "healthcare",
    },
    {
      label: "Technology",
      value: "technology",
    },
    {
      label: "Retail",
      value: "retail",
    },
    {
      label: "Manufacturing",
      value: "manufacturing",
    },
  ],
});

const companySizeData = ref({
      "label": "Company Size",
      "name": "companySize",
      "placeholder": "Select Company Size",
      "value": "5000-20000",
      "options": [
        {
          "label": "1-50 Employees",
          "value": "1-50"
        },
        {
          "label": "51-200 Employees",
          "value": "51-200"
        },
        {
          "label": "201-1000 Employees",
          "value": "201-1000"
        },
        {
          "label": "1,000-5,000 Employees",
          "value": "1000-5000"
        },
        {
          "label": "5,000-20,000 Employees",
          "value": "5000-20000"
        },
        {
          "label": "20,000+ Employees",
          "value": "20000-plus"
        }
      ]
    })

  const seniorityData = ref({
      "label": "Seniority Level",
      "name": "seniorityLevel",
      "placeholder": "Select Seniority Level",
      "value": "c-suite",
      "options": [
        {
          "label": "C-Suite",
          "value": "c-suite"
        },
        {
          "label": "Vice President",
          "value": "vp"
        },
        {
          "label": "Director",
          "value": "director"
        },
        {
          "label": "Manager",
          "value": "manager"
        },
        {
          "label": "Individual Contributor",
          "value": "individual-contributor"
        }
      ]
    })

    const referalData = ref({
    "label": "How did you hear about this event?",
    "name": "referal",
    "placeholder": "Select from the options",
    "value": "social-media",
    "options": [
        {
            "label": "Social Media",
            "value": "social-media"
        },
        {
            "label": "Search Engine (Google, Bing, etc.)",
            "value": "search-engine"
        },
        {
            "label": "Word of Mouth / Colleague Referral",
            "value": "word-of-mouth"
        },
        {
            "label": "Professional Network / Community",
            "value": "professional-network"
        },
        {
            "label": "Industry Publication / Website",
            "value": "industry-publication"
        },
        {
            "label": "Email Newsletter",
            "value": "email-newsletter"
        },
        {
            "label": "Event Website / Landing Page",
            "value": "event-website"
        }
    ]
})

const selectedTopics = ref([
  'ai-transformation',
  'operating-model-design',
  'cost-optimization',
  'governance-controls',
  'technology-modernization',
  'data-analytics',
])

// Check Box Data

const attendanceOptions = [
  { label: 'AI Transformation',        value: 'ai-transformation' },
  { label: 'Operating Model Design',   value: 'operating-model-design' },
  { label: 'Cost Optimization',        value: 'cost-optimization' },
  { label: 'Workforce Strategy',       value: 'workforce-strategy' },
  { label: 'Governance & Controls',    value: 'governance-controls' },
  { label: 'Technology Modernization', value: 'technology-modernization' },
  { label: 'Change Management',        value: 'change-management' },
  { label: 'Data & Analytics',         value: 'data-analytics' },
]

const consernData = [
  'I understand this is an invitation-only event and submission does not guarantee participation.',
  'I agree to receive event-related communications.'
]

const summaryData = {
  "id": 1,
  "title": "AI Cost Discipline for the Office of the CFO",
  "date": {
    "day": "09",
    "month": "SEP",
    "fullDate": "09 Sept 2026 (Wednesday)",
    "dateIcon": imageMap.event_calender,
  },
  "time": "10:00 AM-12:00 PM (Local Time)",
  "timeIcon": imageMap.event_time,
  "location": "London, UK",
  "locationIcon": imageMap.event_location,
  "registrationType": "Fee - Based Registration",
  "registractionBadge": imageMap.badge_icon,
  "image": imageMap.roundTable_2,
  "price": {
    "amount": "€1,250",
    "vat": "+ VAT",
    "label": "Per person"
  },
  "seats": {
    "remaining": 14,
    "total": 40,
    "seatIcon": imageMap.chair_icon
  },
  "benefits": [
    {
      "icon": imageMap.event_calender,
      "text": "Full event access"
    },
    {
      "icon": imageMap.note_page,
      "text": "Workshop materials"
    },
    {
      "icon": imageMap.lunch_box,
      "text": "Networking lunch"
    },
    {
      "icon": imageMap.event_id,
      "text": "Post-event resources"
    }
  ]
}

const discussData =  [ {
    id: 1,
    title: "PARTICIPATION PRINCIPLES",
    type: "bullet",
    bulletStyle: "check",
    content: [
      "Closed-door discussion",
      "No vendors",
      "No observers",
      "Chatham House Rule",
      "Peer-to-peer exchange",
    ]
  }]

function handleSubmit() {
  console.log("form Submited!");
}


const handelIndustryChange = (event) => {
  console.log('Industry changed:', event);
};
const handelCompanySize = (event) => {
  console.log('Company Size changed:', event);
};
const handelSeniorityLevel = (event) => {
  console.log('Seniority Level changed:', event);
};

const handelReferalCode = (event) => {
  console.log('Referal Code changed:', event);
}
</script>
