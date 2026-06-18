<script setup>
import { reactive } from 'vue'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseSelect from '@/components/common/BaseSelect.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { headerData, reasonOptions, directEmail, offices, responseTimeText } from '@/services/contact.service.js'

const emit = defineEmits(['submit'])

const form = reactive({
  firstName: '',
  lastName: '',
  workEmail: '',
  organisation: '',
  jobTitle: '',
  reason: 'advisory',
  message: '',
})

function handleSubmit() {
  emit('submit', { ...form })
}
</script>

<template>
  <section class="contact-form-section">
    <div class="container">
      <div class="cfs-header">
        <span class="title__eyebrow">{{ headerData.eyebrow }}</span>
        <h1 class="sec__title">{{ headerData.title }}</h1>
        <p class="cfs-subtitle">{{ headerData.subtitle }}</p>
      </div>

      <div class="cfs-body">
        <div class="cfs-form-card">
          <form @submit.prevent="handleSubmit">
            <div class="cfs-row">
              <div class="cfs-field">
                <label for="firstName">First name<span class="required">*</span></label>
                <BaseInput id="firstName" variant="cstd" v-model="form.firstName" placeholder="" required />
              </div>
              <div class="cfs-field">
                <label for="lastName">Last name<span class="required">*</span></label>
                <BaseInput id="lastName" variant="cstd" v-model="form.lastName" placeholder="" required />
              </div>
            </div>

            <div class="cfs-field">
              <label for="workEmail">Work email<span class="required">*</span></label>
              <BaseInput id="workEmail" type="email" variant="cstd" v-model="form.workEmail" placeholder="" required />
            </div>

            <div class="cfs-field">
              <label for="organisation">Organisation<span class="required">*</span></label>
              <BaseInput id="organisation" variant="cstd" v-model="form.organisation" placeholder="" required />
            </div>

            <div class="cfs-row">
              <div class="cfs-field">
                <label for="jobTitle">Job title</label>
                <BaseInput id="jobTitle" variant="cstd" v-model="form.jobTitle" placeholder="" />
              </div>
              <div class="cfs-field">
                <BaseSelect
                  id="reason"
                  label="Reason for enquiry"
                  v-model="form.reason"
                  :options="reasonOptions"
                />
              </div>
            </div>

            <div class="cfs-field">
              <label for="message">Message</label>
              <textarea id="message" class="cfs-textarea" v-model="form.message" rows="4"></textarea>
            </div>

            <BaseButton type="submit" variant="primary">Send Message</BaseButton>
          </form>
        </div>

        <div class="cfs-info">
          <div class="cfs-info-block">
            <span class="cfs-info-label">Direct</span>
            <a :href="`mailto:${directEmail}`" class="cfs-info-email">{{ directEmail }}</a>
          </div>

          <div class="cfs-info-block">
            <span class="cfs-info-label">Offices</span>
            <div class="cfs-office" v-for="office in offices" :key="office.city">
              <h4>{{ office.city }}</h4>
              <p>{{ office.desc }}</p>
            </div>
          </div>

          <div class="cfs-info-block">
            <span class="cfs-info-label">Response time</span>
            <p>{{ responseTimeText }}</p>
          </div>

          <hr class="cfs-divider" />

          <div class="cfs-meet">
            <p>Prefer to meet in person?</p>
            <BaseButton variant="outline-light-thin" to="/events">See Upcoming Events</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
