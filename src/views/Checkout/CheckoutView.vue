<script setup>

import { ref } from 'vue';
import BaseInput from '@/components/common/BaseInput.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import { imageMap } from '@/assets/images/imageMap';


const firstname = ref('');
const lastName = ref('');
const workEmail = ref('');
const jobTitle = ref('');
const phoneNo = ref('');
const organization = ref('');
const country = ref('');
const addressLine1 = ref('');
const addressLine2 = ref('');
const city = ref('');
const postCode = ref('');
const vatNo = ref('');

// Summary Data
const summaryData = {
  "title": "Order Summary",
  "editButton": {
    "label": "Edit Cart",
    "link": "/cart"
  },
  "membershipPlan": {
    "title": "Membership Plan",
    "icon": imageMap.GoldenIdea,
    "name": "Executive Membership",
    "price": {
      "monthly": "£499",
      "period": "/month",
      "billing": "Billed annually"
    },
    "total": "£5,988.00"
  },
  "addons": {
    "title": "Add-ons",
    "items": [
      {
        "name": "Additional Team Members (1)",
        "price": "£1,800.00"
      },
      {
        "name": "Advisory Hours (5 hrs)",
        "price": "£1,250.00"
      }
    ]
  },
  "pricing": {
    "subtotal": "£9,038.00",
    "vat": {
      "label": "VAT (20%)",
      "amount": "£1,807.60"
    },
    "total": {
      "label": "Total",
      "amount": "£10,845.60"
    },
    "dueToday": {
      "label": "Total due today",
      "amount": "£10,845.60"
    }
  },
  "savingCard": {
    "icon": imageMap.shieldBlackIcon,
    "title": "You're saving",
    "amount": "£1,224.00",
    "description": "with annual billing"
  },
  "included": {
    "title": "What's Included",
    "items": [
      {
        "text": "All membership benefits",

      },
      {
        "text": "Access to member community",

      },
      {
        "text": "Event invitations & priority access",

      },
      {
        "text": "Research & insights library",

      },
      {
        "text": "Cancel anytime",

      }
    ]
  },
  "helpCard": {
    "icon": imageMap.shieldBlackIcon,
    "title": "Need Help?",
    "description": "Our team is here to help you.",
    "email": "hello@corporatelites.com",
    "phone": "+44 20 1234 5678"
  },
  "checkoutButton": {
    "label": "PAY SECURELY",
    "amount": "£10,845.60"
  },
  "terms": {
    "text": "By completing your purchase, you agree to our Terms of Use and Privacy Policy.",
    "termsLink": "/terms",
    "privacyLink": "/privacy"
  }
}
</script>

<template>
  <div class="checkout-main">
    <section class="checkout-section">
      <div class="container">
        <div class="checkout-wrapper">
          <div class="informaction-wrap">
            <div class="hdng">
              <h1>Billing Information</h1>
              <p>All fields marked are required.</p>
            </div>
            <form>
              <div class="inp-wrap">
                <div class="inp-innr-wrap">
                  <label for="first_name">First name*</label>
                  <BaseInput id="first_name" placeholder="Michael" v-model="firstname" />
                </div>
                <div class="inp-innr-wrap">
                  <label for="last_name">Last name*</label>
                  <BaseInput id="last_name" placeholder="Anderson" v-model="lastName" />
                </div>
              </div>
              <div class="inp-wrap">
                <div class="inp-innr-wrap-fl-wdth">
                  <label for="work_email">Work email*</label>
                  <BaseInput type="email" id="work_email" placeholder="michael.anderson@globalbank.com"
                    v-model="workEmail" />
                </div>
              </div>
              <div class="inp-wrap">
                <div class="inp-innr-wrap">
                  <label for="job_title">Job Title</label>
                  <BaseInput id="job_title" placeholder="Chief Operating Officer" v-model="jobTitle" />
                </div>
                <div class="inp-innr-wrap">
                  <label for="phone_no">Phone Number</label>
                  <BaseInput id="phone_no" placeholder="+44 20 1234 5678" v-model="phoneNo" />
                </div>
              </div>

              <div class="inp-wrap">
                <div class="inp-innr-wrap-fl-wdth">
                  <label for="organization">Organization</label>
                  <BaseInput type="text" id="organization" placeholder="Global Bank International"
                    v-model="organization" />
                </div>
              </div>

              <div class="inp-wrap">
                <div class="inp-innr-wrap">
                  <label for="country">Country</label>
                  <BaseInput id="country" placeholder="United Kingdom" v-model="country" />
                </div>
                <div class="inp-innr-wrap">
                  <label for="address_line_1">Address Line 1"</label>
                  <BaseInput id="address_line_1" placeholder="1 Canada Square" v-model="addressLine1" />
                </div>
              </div>

              <div class="inp-wrap">
                <div class="inp-innr-wrap">
                  <label for="address_line_2">Address Line 2 (Optional)</label>
                  <BaseInput id="address_line_2" placeholder="Canary Wharf" v-model="addressLine2" />
                </div>
                <div class="inp-innr-wrap">
                  <label for="city">City</label>
                  <BaseInput id="city" placeholder="London" v-model="city" />
                </div>
              </div>

              <div class="inp-wrap">
                <div class="inp-innr-wrap">
                  <label for="post_code">Postcode</label>
                  <BaseInput id="post_code" placeholder="E14 5AA" v-model="postCode" />
                </div>
                <div class="inp-innr-wrap">
                  <label for="vat_num">VAT Number (Optional)</label>
                  <BaseInput id="vat_num" placeholder="GB123456789" v-model="vatNo" />
                </div>
              </div>
              <div class="note-wrap">
                <p>
                  <span>
                    <img :src="imageMap.greenCheckIcon" alt="green check icon" />
                  </span>
                  Use this information for invoicing and all future orders
                </p>
              </div>
            </form>
          </div>
          <div class="summary-wrap">
            <div class="hdng">
              <h2>
                {{ summaryData?.title }}
              </h2>
              <BaseButton :to="summaryData?.editButton.link"> {{ summaryData?.editButton?.label }}</BaseButton>
            </div>
            <div class="membership-wrap">
              <h5>{{ summaryData?.membershipPlan?.title }}</h5>
              <div class="contnt-wrap">
                <span class="icon">
                  <img :src="summaryData?.membershipPlan?.icon" alt="">
                </span>
                <div class="txt">
                  <h6>{{ summaryData?.membershipPlan?.name }}</h6>
                  <p>
                    <span class="price">
                      {{ summaryData?.membershipPlan?.price?.monthly }}
                    </span>
                    <span class="period">
                      {{ summaryData?.membershipPlan?.price?.period }}
                    </span>
                  </p>
                  <div class="btmWrap">
                    <p>
                      {{ summaryData?.membershipPlan?.price?.billing }}
                    </p>
                    <span class="anually-price">
                      {{ summaryData?.membershipPlan?.total }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="adds-on-wrap">
              <h5>{{ summaryData?.addons?.title }}</h5>
              <ul>
                <li v-for="(item, index) in summaryData?.addons?.items" :key="index">
                  <span class="addon-label">
                    {{ item.name }}
                  </span>
                  <span class="amnt">
                    {{ item?.price }}
                  </span>
                </li>
              </ul>
            </div>
            <div class="subtotal-wrap">
              <div class="subttl-innr">
                <h5>Subtotal</h5>
                <p>{{ summaryData?.pricing?.subtotal }}</p>
              </div>
              <div class="vat-data">
                <p>
                  {{ summaryData?.pricing?.vat.label }}
                </p>
                <p>
                  {{ summaryData?.pricing?.vat.amount }}
                </p>
              </div>
            </div>
            <div class="totalAmmnt-wrap">
              <div class="totalAmmnt-innr">
                <h5>{{ summaryData?.pricing?.total?.label }}</h5>
                <p>{{ summaryData?.pricing?.total?.amount }}</p>
              </div>
              <div class="dueAmmnt">
                <p>{{ summaryData?.pricing?.dueToday.label }}</p>
                <p>{{ summaryData?.pricing?.dueToday.amount }}</p>
              </div>
            </div>
            <div class="saving-wrap">
              <div class="sield-icon">
                <img :src="summaryData?.savingCard?.icon" alt="Sield Icon">
              </div>
              <div class="save-text">
                <p class="save-amount">
                  {{ summaryData?.savingCard?.title }}
                  <span class="ammnt">{{ summaryData?.savingCard?.amount }}</span>
                </p>
                <p class="save-period">
                  {{ summaryData?.savingCard?.description }}
                </p>
              </div>
            </div>
            <div class="include-plane">
              <h6>{{ summaryData?.included?.title }}</h6>
              <ul>
                <li v-for="(item, index) in summaryData?.included?.items" :key="index">
                  <span class="icon-wrap">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.28076 1.13501C9.34132 1.18397 9.39148 1.22761 9.40314 1.30713C9.40255 1.38989 9.38997 1.43425 9.3347 1.49771C9.27905 1.54805 9.22203 1.59579 9.16357 1.64282C9.13782 1.66506 9.11217 1.68742 9.08667 1.70996C9.07498 1.72017 9.06329 1.73037 9.05124 1.74088C8.86796 1.90222 8.6931 2.0711 8.52078 2.244C8.48341 2.28148 8.44594 2.31885 8.40845 2.35621C8.29138 2.47322 8.17691 2.59071 8.06982 2.71704C8.03819 2.75172 8.00646 2.78632 7.97461 2.8208C7.88776 2.91613 7.80568 3.01438 7.72476 3.11475C7.69517 3.1511 7.6652 3.18711 7.63518 3.2231C7.48094 3.40823 7.33335 3.59691 7.19092 3.79126C7.18109 3.80456 7.17126 3.81785 7.16113 3.83155C6.78424 4.34172 6.44385 4.87734 6.13623 5.43188C6.12511 5.45188 6.11399 5.47188 6.10253 5.49248C5.56868 6.45724 5.14444 7.48332 4.87149 8.55261C4.86591 8.57387 4.86591 8.57387 4.86022 8.59557C4.85024 8.63369 4.84054 8.67189 4.83087 8.71009C4.802 8.78825 4.76546 8.83211 4.69092 8.86938C4.61388 8.88001 4.56328 8.88681 4.49583 8.84573C4.40715 8.77002 4.33058 8.6819 4.2536 8.59457C4.19293 8.52645 4.13075 8.45986 4.06836 8.39331C3.9857 8.30502 3.90336 8.21648 3.82178 8.1272C3.74096 8.03877 3.65947 7.95101 3.57764 7.86352C3.47744 7.75639 3.37793 7.64868 3.27895 7.54042C3.19336 7.44684 3.1072 7.35378 3.02114 7.26064C2.99221 7.22931 2.9633 7.19795 2.9344 7.16658C2.82979 7.05306 2.72481 6.93991 2.61938 6.82715C2.51961 6.72041 2.42051 6.6131 2.32191 6.50526C2.23633 6.41168 2.15017 6.31863 2.06411 6.22548C2.03517 6.19415 2.00627 6.16279 1.97737 6.13142C1.87276 6.0179 1.76778 5.90475 1.66235 5.79199C1.56258 5.68525 1.46348 5.57794 1.36488 5.47011C1.30879 5.40877 1.25244 5.34768 1.19604 5.28662C1.18145 5.27081 1.18145 5.27081 1.16655 5.25469C1.13692 5.2226 1.10728 5.19053 1.07764 5.15845C1.05785 5.13703 1.03807 5.11562 1.01828 5.09421C1.00851 5.08364 0.99873 5.07307 0.988659 5.06218C0.96914 5.04102 0.949672 5.01981 0.930256 4.99856C0.881674 4.94547 0.832484 4.89342 0.781464 4.84267C0.617466 4.67719 0.617466 4.67719 0.601562 4.57373C0.602351 4.50118 0.619859 4.45285 0.66748 4.39673C0.727401 4.35678 0.740065 4.35271 0.8077 4.35205C0.824318 4.3518 0.840935 4.35155 0.858056 4.35129C0.876228 4.35121 0.8944 4.35114 0.913123 4.35106C0.932312 4.35084 0.9515 4.35061 0.97127 4.35038C1.03488 4.34971 1.09848 4.34935 1.16209 4.34904C1.18382 4.34891 1.20555 4.34878 1.22794 4.34864C1.34298 4.34794 1.45802 4.34748 1.57307 4.34721C1.69179 4.34689 1.8105 4.34575 1.92922 4.34441C2.02059 4.34354 2.11195 4.34327 2.20332 4.34317C2.24708 4.34302 2.29084 4.34264 2.33459 4.34202C2.39593 4.34121 2.45723 4.34126 2.51858 4.34153C2.54554 4.34088 2.54554 4.34088 2.57305 4.34022C2.69533 4.34199 2.75578 4.37458 2.84271 4.46031C2.8532 4.47155 2.8637 4.4828 2.87451 4.49438C2.8902 4.5104 2.90588 4.52641 2.92204 4.54291C2.99508 4.62549 3.06643 4.70893 3.13574 4.79468C3.20764 4.88362 3.28326 4.96774 3.3611 5.0514C3.43496 5.13123 3.50336 5.2147 3.57153 5.29944C3.6291 5.36868 3.69 5.43436 3.7514 5.5002C3.82879 5.58373 3.90018 5.67096 3.9707 5.76041C4.00719 5.80668 4.00719 5.80668 4.06592 5.84204C4.07448 5.82401 4.08304 5.80599 4.09186 5.78741C4.29798 5.36062 4.55824 4.96696 4.84717 4.59204C4.85521 4.58153 4.86326 4.57102 4.87154 4.5602C4.9734 4.42736 5.07827 4.29755 5.18774 4.1709C5.20171 4.15472 5.20171 4.15472 5.21595 4.13822C5.39796 3.92975 5.5887 3.73006 5.7847 3.53478C5.81917 3.50041 5.85354 3.46594 5.88789 3.43146C5.99995 3.31933 6.11293 3.21026 6.23389 3.10767C6.26529 3.07926 6.29663 3.05079 6.32788 3.02222C6.84785 2.55369 7.43154 2.12855 8.02911 1.76544C8.07398 1.73793 8.11849 1.70991 8.16298 1.68181C9.0789 1.10523 9.0789 1.10523 9.28076 1.13501Z"
                        fill="#0B1219" />
                    </svg>
                  </span>
                  {{ item?.text }}
                </li>
              </ul>
            </div>
            <div class="need-help-wrap">
              <div class="sield-icon">
                <img :src="summaryData?.helpCard?.icon" alt="Sield Icon">
              </div>
              <div class="help-txt">
                <h6>{{ summaryData?.helpCard?.title }}</h6>
                <p>{{ summaryData?.helpCard?.description }}</p>
                <a :href="'mailto:' + summaryData?.helpCard?.email">{{ summaryData?.helpCard?.email }}</a>
                <a :href="'tel:' + summaryData?.helpCard?.phone">{{ summaryData?.helpCard?.phone }}</a>
              </div>
            </div>
            <div class="btn-wrap">
              <BaseButton variant="secondary">
                <span>{{ summaryData?.checkoutButton?.label }}</span> <span>{{ summaryData?.checkoutButton?.amount }}</span>
              </BaseButton>
            </div>
            <div class="terms-wrap">
              <p>By completing your purchase, you agree to our</p>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  and
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BaseAccelerate />
  </div>
</template>
