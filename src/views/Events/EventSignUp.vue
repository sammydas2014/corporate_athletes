<template>
  <div class="evtsignup-main">

    <!-- Hero -->
    <section class="evtsignup-hero">
      <div class="container">
        <span class="title__eyebrow">Events Network Sign-Up</span>
        <h1 class="sec__title">Stay connected to upcoming events</h1>
        <p class="evtsignup-hero__sub">
          Gain early access to executive roundtables, leadership forums, workshops,
          and peer-to-peer discussions.
        </p>
        <div class="evtsignup-hero__badge">
          <div class="badge-avatars">
            <img v-for="avatar in badgeAvatars" :key="avatar.alt" :src="avatar.src" :alt="avatar.alt"
              class="badge-avatar" />
          </div>
          <span class="badge-text">Join 2,000+ Operations, Transformation Leaders, and Executives</span>
        </div>
      </div>
    </section>

    <!-- Body -->
    <section class="evtsignup-body">
      <div class="container">
        <div class="evtsignup-layout">

          <!-- Left: Form -->
          <div class="evtsignup-form-col">
            <div class="evtsignup-card">
              <h3 class="evtsignup-card__heading">PROFILE SUMMARY</h3>
              <p class="evtsignup-card__desc">
                Sign up to receive invitations and updates about upcoming events
              </p>

              <form @submit.prevent="handleSubmit">
                <div class="evtsignup-fields">
                  <div class="inpWrp">
                    <label>First name*</label>
                    <BaseInput v-model="form.firstName" placeholder="Michael" />
                  </div>
                  <div class="inpWrp">
                    <label>Last name*</label>
                    <BaseInput v-model="form.lastName" placeholder="Anderson" />
                  </div>
                  <div class="inpWrp">
                    <label>Work email*</label>
                    <BaseInput type="email" v-model="form.email" placeholder="michael.anderson@globalbank.com" />
                  </div>
                  <div class="inpWrp">
                    <label>Organisation*</label>
                    <BaseInput v-model="form.organisation" placeholder="Global Bank International" />
                  </div>
                  <div class="inpWrp">
                    <label>Job Title</label>
                    <BaseInput v-model="form.jobTitle" placeholder="Chief Operating Officer" />
                  </div>
                  <div class="inpWrp">
                    <BaseSelect v-model="form.country" :options="countryOptions" label="Country"
                      placeholder="London, UK" />
                  </div>
                  <div class="inpWrp ">
                    <BaseSelect v-model="form.industry" :options="industryOptions" label="Industry"
                      placeholder="Advisory engagement" />
                  </div>
                </div>

                <!-- Frequency -->
                <div class="evtsignup-freq">
                  <h5 class="evtsignup-card__heading">PREFERRED COMMUNICATION/FREQUENCY</h5>
                  <div class="freq-options">
                    <label v-for="opt in frequencyOptions" :key="opt.value" class="freq-option"
                      :class="{ 'is-active': form.frequency === opt.value }">
                      <BaseRadio v-model="form.frequency" :value="opt.value" name="frequency" />
                      <div class="freq-option__content">
                        <span class="freq-option__label">{{ opt.label }}</span>
                        <p class="freq-option__desc">{{ opt.desc }}</p>
                      </div>
                    </label>
                  </div>
                </div>

                <BaseButton type="submit" class="evtsignup-submit">
                  Join the Events Network
                </BaseButton>
                <p class="evtsignup-privacy">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>

          <!-- Right: Sidebar -->
          <aside class="evtsignup-sidebar">
            <div class="evtsignup-categories">
              <h4 class="sidebar-heading">Event Categories</h4>
              <div class="category-list">
                <div v-for="cat in eventCategories" :key="cat.label" class="category-item">
                  <span class="category-icon">
                    <img :src="imageMap.accepted" alt="">
                  </span>
                  <div class="category-content">
                    <span class="category-label">{{ cat.label }}</span>
                    <p class="category-desc">{{ cat.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="evtsignup-why">
              <h4 class="sidebar-heading">Why Sign Up?</h4>
              <ul class="why-list">
                <li v-for="(item, i) in whyItems" :key="i">
                  <img :src="imageMap.green_check" alt="">{{ item }}
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
    </section>

    <BaseAccelerate
      :title="accelerateData.title"
      :primary-btn-label="accelerateData.primaryBtnLabel"
      :secondary-btn-label="accelerateData.secondaryBtnLabel"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseSelect from '@/components/common/BaseSelect.vue'
import BaseRadio from '@/components/common/BaseRadio.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BaseAccelerate from '@/components/common/BaseAccelerate.vue'
import {
  badgeAvatars,
  countryOptions,
  industryOptions,
  frequencyOptions,
  eventCategories,
  whyItems,
  accelerateData,
} from '@/services/eventSignUp.service'
import { imageMap } from '@/assets/images/imageMap'

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  organisation: '',
  jobTitle: '',
  country: '',
  industry: '',
  frequency: 'monthly',
})

function handleSubmit() {
  console.log('Sign-up submitted:', form.value)
}
</script>
