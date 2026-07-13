<script setup>
import { ref } from 'vue';
import { imageMap } from '@/assets/images/imageMap';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseInput from '@/components/common/BaseInput.vue';
const fullName = ref("")
const company = ref("")
const role = ref("")
const workEmail = ref("")
const password = ref("")
const isVissible = ref(false)

function toggleVissable() {
  isVissible.value = !isVissible.value
}
</script>

<template>
  <section class="authwrap-section">
    <div class="innr-auth-wrap register-auth-wrap">
      <div class="left-auth-wrap">
        <div class="container">
          <div class="header-logo">
            <router-link to="/">
              <img :src="imageMap.logo" alt="Header Logo">
            </router-link>
          </div>
          <div class="login-wrap">
            <h1>Create your account</h1>
            <p>Get executive-grade AI intelligence tailored to enterprise transformation.</p>
            <form class="frm-wrap">
              <BaseButton variant="outline-white" class="googlBtn">
                <template #icon_left>
                  <img :src="imageMap.googleIcon" alt="Google Icon">
                </template>
                Log in with Google
              </BaseButton>
              <div class="option-wrap">
                <p>or register with email</p>
              </div>
              <div class="inp-wrap">
                <label for="full-name">Full name</label>
                <BaseInput id="full-name" placeholder="michael anderson" v-model="fullName" />
              </div>
              <div class="innr-wrap">
                <div class="inp-wrap">
                  <label for="company">Company</label>
                  <BaseInput id="company" placeholder="globalbank" v-model="company" />
                </div>
                <div class="inp-wrap">
                  <label for="role">Role</label>
                  <BaseInput id="role" placeholder="CEO" v-model="role" />
                </div>
              </div>
              <div class="inp-wrap">
                <label for="work-email">Work Email</label>
                <BaseInput
                  type="email"
                  id="work-email"
                  placeholder="michael.anderson@globalbank.com"
                  v-model="workEmail"
                />
              </div>
              <div class="inp-wrap">
                <label for="password">Password</label>
                <BaseInput :type="isVissible ? 'text' : 'password'" id="password" placeholder="At least 8 characters"
                  v-model="password">
                  <template #icon-right>
                    <i :class="isVissible ? 'bi bi-eye' : 'bi bi-eye-slash'" @click="toggleVissable"></i>
                  </template>
                </BaseInput>
              </div>

              <div class="btn-wrap">
                <BaseButton>
                  Create account
                </BaseButton>
                <p class="trmsplcy-cls">By continuing you agree to our Terms of Service and Privacy Policy.</p>
                <p>
                  Already have an account <router-link to="/auth/login">Sign in</router-link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div class="right-auth-wrap">
        <div class="container">
          <h6>AI-Driven Transformation</h6>
          <div class="btm-cote">
            <h4>
              "Independent intelligence for executive decision makers navigating the AI era."
            </h4>
            <p>
              Trusted by CEOs, COOs and CFOs at performance-focused enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
