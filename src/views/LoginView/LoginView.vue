<script setup>
  import { ref } from 'vue';
  import { imageMap } from '@/assets/images/imageMap';
  import BaseButton from '@/components/common/BaseButton.vue';
  import BaseInput from '@/components/common/BaseInput.vue';
  const workEmail = ref("")
  const password = ref("")
  const isVissible = ref(false)

  function toggleVissable(){
    isVissible.value = !isVissible.value
  }
</script>

<template>
  <section class="authwrap-section">
    <div class="innr-auth-wrap">
      <div class="left-auth-wrap">
        <div class="container">
          <div class="header-logo">
            <router-link
              to="/"
            >
              <img :src="imageMap.logo" alt="Header Logo">
            </router-link>
          </div>
          <div class="login-wrap">
            <h1>Welcome back</h1>
            <p>Sign in to access your executive AI briefings and insights.</p>
            <form  class="frm-wrap">
              <BaseButton
                variant="outline-white" class="googlBtn" >
              <template #icon_left>
                <img :src="imageMap.googleIcon" alt="Google Icon">
              </template>
              Log in with Google
              </BaseButton>
              <div class="option-wrap">
                <p>or continue with email</p>
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
                <BaseInput
                  :type="isVissible ? 'text' : 'password'"
                  id="password"
                  placeholder="********"
                  v-model="password"
                >
                  <template #icon-right>
                    <i :class="isVissible ? 'bi bi-eye' : 'bi bi-eye-slash'" @click="toggleVissable"></i>
                  </template>
                </BaseInput>
              </div>

              <div class="btn-wrap">
                <BaseButton>
                  Log in
                </BaseButton>
                <p>
                  Don't have an account?  <router-link to="/auth/register">Create one</router-link>
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
