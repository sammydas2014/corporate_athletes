<script setup>
import { ref } from "vue";
import BaseButton from "@/components/common/BaseButton.vue";
import BaseProfileAvatar from "@/components/common/BaseProfileAvatar.vue"
import UserEventSlider from "@/components/slider/UserEventSlider.vue"
import UpcommingEventCard from "@/components/common/UpcommingEventCard.vue";
import ParticipationCard from "@/components/common/ParticipationCard.vue";
import BaseCardChip from "@/components/common/BaseCardChip.vue";
import BaseToggleButton from "@/components/common/BaseToggleButton.vue";
import { profileData } from "@/services/profile.service"

// const invitaction = ref(profileData?.)
const notificationData = ref(
  profileData?.notificationSettings.map(item => ({...item}) )
)
</script>

<template>
  <div class="profile-page">
    <section class="profile-banner-section">
      <div class="container">
        <div class="profile-top-wrap">
          <div class="innr-prt">
            <div class="dtls-prt">
              <div class="img-wrap">
                <BaseProfileAvatar :current-image-url="profileData?.profile?.avatar" />
              </div>
              <div class="data-wrap">
                <h1>{{ profileData?.profile?.fullName }}</h1>
                <p class="post">
                  {{ profileData?.profile?.designation }}
                </p>
                <p class="comp">
                  {{ profileData?.profile?.company }}
                </p>
                <div class="location">
                  <p>
                    <span>
                      <img :src="profileData?.profile?.locationIcon" alt="Location Icon" />
                    </span>
                    {{ profileData?.profile?.location }}
                  </p>
                  <p>
                    <span>
                      <img :src="profileData?.profile?.jobIcon" alt="Job Icon" />
                    </span>
                    {{ profileData?.profile?.industry }}
                  </p>
                </div>
                <p class="duraction">
                  Member since {{ profileData?.profile?.memberSince }}
                </p>

              </div>
            </div>
            <div class="editBtnWrap">
              <BaseButton variant="outline-white">EDIT PROFILE</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="all-events-slider-sec">
      <div class="container">
        <UserEventSlider :cards="profileData?.statistics" />
      </div>
    </section>
    <section class="data-sec">
      <div class="container">
        <div class="inner-container">
          <div class="event-wrap">
            <!-- upcoming event -->
            <div class="upcomming-events">
              <div class="hdng">
                <h3>Upcoming Events</h3>
                <BaseButton>
                  View all events
                  <template #icon_right>

                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.677246 4.30729C0.303303 4.30729 0.000162721 4.61043 0.000162721 4.98438C0.000162721 5.35832 0.303303 5.66146 0.677246 5.66146V4.98438V4.30729ZM13.7949 5.46315C14.0593 5.19873 14.0593 4.77002 13.7949 4.5056L9.48597 0.196672C9.22156 -0.0677447 8.79285 -0.0677447 8.52843 0.196672C8.26402 0.46109 8.26402 0.889795 8.52843 1.15421L12.3586 4.98438L8.52843 8.81454C8.26402 9.07895 8.26402 9.50766 8.52843 9.77208C8.79285 10.0365 9.22156 10.0365 9.48597 9.77208L13.7949 5.46315ZM0.677246 4.98438V5.66146H13.3161V4.98438V4.30729H0.677246V4.98438Z"
                        fill="#1F4E5F" />
                    </svg>

                  </template>
                </BaseButton>
              </div>
              <UpcommingEventCard v-for="event in profileData?.upcomingEvents" :key="event.id" :image-logo="event.image"
                :day="event.date.day" :month="event.date.month" :year="event.date.year" :weekday="event.date.weekday"
                :time="event.time" :location="event.location" :catagory="event.category" :title="event?.title"
                :btn-txt="event?.status" />
            </div>
            <!-- end -->
            <!-- Past Participation -->
            <div class="upcomming-events past-participation">
              <div class="hdng">
                <h3>Past Participation</h3>
                <BaseButton>
                  View all
                  <template #icon_right>

                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.677246 4.30729C0.303303 4.30729 0.000162721 4.61043 0.000162721 4.98438C0.000162721 5.35832 0.303303 5.66146 0.677246 5.66146V4.98438V4.30729ZM13.7949 5.46315C14.0593 5.19873 14.0593 4.77002 13.7949 4.5056L9.48597 0.196672C9.22156 -0.0677447 8.79285 -0.0677447 8.52843 0.196672C8.26402 0.46109 8.26402 0.889795 8.52843 1.15421L12.3586 4.98438L8.52843 8.81454C8.26402 9.07895 8.26402 9.50766 8.52843 9.77208C8.79285 10.0365 9.22156 10.0365 9.48597 9.77208L13.7949 5.46315ZM0.677246 4.98438V5.66146H13.3161V4.98438V4.30729H0.677246V4.98438Z"
                        fill="#1F4E5F" />
                    </svg>

                  </template>
                </BaseButton>
              </div>
              <ParticipationCard v-for="event in profileData?.pastParticipation" :key="event.id" :data="event" />
            </div>
            <!-- End -->
            <!-- Membership Section Start -->
            <div class="upcomming-events menbership-sec">
              <div class="hdng">
                <h3>Membership</h3>
                <BaseButton>
                  View details
                  <template #icon_right>

                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.677246 4.30729C0.303303 4.30729 0.000162721 4.61043 0.000162721 4.98438C0.000162721 5.35832 0.303303 5.66146 0.677246 5.66146V4.98438V4.30729ZM13.7949 5.46315C14.0593 5.19873 14.0593 4.77002 13.7949 4.5056L9.48597 0.196672C9.22156 -0.0677447 8.79285 -0.0677447 8.52843 0.196672C8.26402 0.46109 8.26402 0.889795 8.52843 1.15421L12.3586 4.98438L8.52843 8.81454C8.26402 9.07895 8.26402 9.50766 8.52843 9.77208C8.79285 10.0365 9.22156 10.0365 9.48597 9.77208L13.7949 5.46315ZM0.677246 4.98438V5.66146H13.3161V4.98438V4.30729H0.677246V4.98438Z"
                        fill="#1F4E5F" />
                    </svg>

                  </template>
                </BaseButton>
              </div>
              <div class="membership-crd-wrap">
                <div class="menbership-hdr">
                  <div class="logo-wrap">
                    <img v-if="profileData?.membership?.avatar" :src="profileData?.membership?.avatar" alt="">
                  </div>
                  <div class="dtls">
                    <h5>{{ profileData?.membership?.type }}</h5>
                    <span>{{ profileData?.membership?.status }}</span>
                  </div>
                </div>
                <div class="membership-body">
                  <ul v-if="profileData?.membership?.benefits">
                    <li v-for="(item, index) in profileData?.membership?.benefits" :key="index">
                      <h6>{{ item?.title }}</h6>
                      <p>
                        {{ item?.description }}
                      </p>

                    </li>
                  </ul>
                </div>
              </div>
              <p class="valid">Membership valid until {{ profileData?.membership?.joinedDate }}</p>
            </div>
            <!-- Membership Section End -->
          </div>
          <div class="summary-wrap">
            <div class="upcomming-events profile-summary">
              <div class="hdng">
                <h3>Upcoming Events</h3>
                <BaseButton>
                  Edit
                </BaseButton>
              </div>
              <div class="profile-summary-data">
                <div class="smry-data">
                  <span class="ltl-lbl">
                    Job Title
                  </span>
                  <p>
                    {{ profileData?.profileSummary?.jobTitle }}
                  </p>
                </div>
                <div class="smry-data">
                  <span class="ltl-lbl">
                    Organisation
                  </span>
                  <p>
                    {{ profileData?.profileSummary?.organization }}
                  </p>
                </div>
                <div class="smry-data">
                  <span class="ltl-lbl">
                    Industry
                  </span>
                  <p>
                    {{ profileData?.profileSummary?.industry }}
                  </p>
                </div>
                <div class="smry-data">
                  <span class="ltl-lbl">
                    Company Size
                  </span>
                  <p>
                    {{ profileData?.profileSummary?.companySize }}
                  </p>
                </div>
                <div class="smry-data">
                  <span class="ltl-lbl">
                    Location
                  </span>
                  <p>
                    {{ profileData?.profileSummary?.location }}
                  </p>
                </div>
                <div class="smry-data">
                  <span class="ltl-lbl">
                    ime Zone
                  </span>
                  <p>
                    {{ profileData?.profileSummary?.timezone }}
                  </p>
                </div>
              </div>

            </div>
            <!-- End -->
            <!-- Preferance section Start -->
            <div class="upcomming-events preferance-sec">
              <div class="hdng">
                <h3>Preferences</h3>
                <BaseButton>
                  Edit
                </BaseButton>
              </div>
              <div class="preferance-data">
                <div class="data-wrap">
                  <h6>Topics of Interest</h6>
                  <div class="topic-wrap">
                    <template v-for="(item, index) in profileData?.preferences?.topics" :key="index">
                      <BaseCardChip :title="item" variant="secondary" />
                    </template>
                  </div>
                </div>

                <div class="data-wrap">

                  <h6>Event Format</h6>
                  <ul>
                    <li v-for="(value, index) in profileData?.preferences?.eventFormat" :key="index">
                      {{ value }}
                    </li>
                  </ul>
                </div>

                <div class="data-wrap">
                  <h6>Regions of Interest</h6>
                  <div class="topic-wrap">
                    <template v-for="(item, index) in profileData?.preferences?.regions" :key="index">
                      <BaseCardChip :title="item" variant="secondary" />
                    </template>

                  </div>

                </div>
              </div>


            </div>
            <!-- Preferance section End -->
            <!-- Notification Setting Start -->
            <div class="upcomming-events notification-sec">
              <div class="hdng">
                <h3>Notification Settings</h3>
              </div>
              <div class="settings-wrap">
                <div class="settings-list" v-for="data in notificationData" :key="data?.id">
                  <div class="left-prt">
                    <div class="icon-prt">
                      <img :src="data?.icon" alt="">
                    </div>
                    <div class="cntnt">
                      <h6>{{ data?.title }}</h6>
                      <p>
                        {{ data?.description }}
                      </p>

                    </div>
                  </div>
                  <div class="rit-prt">
                    <BaseToggleButton v-model="data.enabled" />
                  </div>
                </div>
              </div>



            </div>
            <!-- Notification Setting End -->
          </div>
        </div>
      </div>
    </section>


  </div>
</template>
