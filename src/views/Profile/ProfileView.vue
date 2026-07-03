<script setup>
import BaseButton from "@/components/common/BaseButton.vue";
import BaseProfileAvatar from "@/components/common/BaseProfileAvatar.vue"
import UserEventSlider from "@/components/slider/UserEventSlider.vue"
import UpcommingEventCard from "@/components/common/UpcommingEventCard.vue";
import { profileData } from "@/services/profile.service"
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
              <UpcommingEventCard v-for="event in profileData?.upcomingEvents" :key="event.id"
                :image-logo="event.image"
                :day="event.date.day"
                :month="event.date.month"
                :year="event.date.year"
                :weekday="event.date.weekday"
                :time="event.time"
                :location="event.location"
                :catagory="event.category"
                :title="event?.title"
                :btn-txt="event?.status"
              />
            </div>
          </div>
          <div class="summary-wrap">

          </div>
        </div>
      </div>
    </section>


  </div>
</template>
