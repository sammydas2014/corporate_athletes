<template>
  <footer class="footer-sec">
    <div class="container">
      <div class="row ftr-wrap">
        <div class="col-md-4 col-12">
          <div class="logo-box">
            <div class="logo-wrap">
              <RouterLink to="/"
                ><img :src="footerLogo" alt="footer logo" class="img-fluid"
              /></RouterLink>
            </div>
            <p class="fs-6 fw-normal">
              Corporate Athletes is a boutique advisory and AI consortium helping leadership teams
              redesign operating models, deploy intelligent technologies, and deliver measurable
              performance improvement.
            </p>
          </div>
        </div>
        <div class="col-md-8 col-12 ftrcontent-box">
          <div class="footer-content-box">
            <div class="row justify-content-between pb-xl-4">
              <div class="col-md-6 contct-hdng">
                <h4 class="fw-semibold text-white">
                  Stay informed on AI and enterprise transformation
                </h4>
              </div>
              <div class="col-md-6">
                <form class="d-flex justify-content-end gap-2">
                  <BaseInput
                    type="email"
                    id="email"
                    placeholder="www.yourmail.com"
                    v-model="userEmail"
                  />
                  <BaseButton type="submit" class="suscrd-btn"> Subscribe </BaseButton>
                </form>
              </div>
            </div>
            <div class="ftrlink-row d-flex justify-content-between">
              <div
                v-for="section in footerSections"
                :key="section.title"
                class="col-lg-3 col-md-6 col-6"
              >
                <h5 class="footer-title">
                  {{ section.title }}
                </h5>

                <ul class="footer-list">
                  <li v-for="link in section.links" :key="link.label">
                    <RouterLink v-if="!link.external" :to="link.path" class="footer-link">
                      {{ link.label }}
                    </RouterLink>

                    <a
                      v-else
                      :href="link.path"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="footer-link"
                    >
                      {{ link.label }}
                    </a>
                  </li>
                </ul>

                <!-- Optional Email Block -->
                <div v-if="section.email" class="footer-email mt-4">
                  <h6 class="footer-subtitle">
                    {{ section.email.label }}
                  </h6>

                  <a :href="`mailto:${section.email.address}`" class="footer-link">
                    {{ section.email.address }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyrightWrp">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <p class="footer-copy">© Corporate Athletes 2026</p>
          </div>
          <div class="col-md-6 col-12">
            <ul
              class="d-flex justify-content-end align-items-center align-self-center policy-lists"
            >
              <li>
                <RouterLink to="/" class="policy-links">Privacy Policy</RouterLink>
              </li>
              <li>
                <RouterLink to="/" class="policy-links">Terms of Service</RouterLink>
              </li>
              <li>
                <RouterLink to="/" class="policy-links">Sitemap</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import BaseInput from '../ui/BaseInput.vue'
import footerLogo from '@/assets/images/footer_main_logo.png'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import { footerSections } from '@/config/footer.config'
const userEmail = ref('')
</script>

<style scoped>
.footer-sec {
  background-color: var(--bs-dark);
}
.logo-box {
  padding-top: 78px;
  padding-right: 41px;
  border-right: 2px solid rgb(216 222 230 / 10%);
  height: 100%;
}
.logo-box p {
  margin-top: 75px;
  color: #c8d0d8;
}
.footer-content-box {
  padding-top: 78px;
}
.contct-hdng h4 {
  font-size: 26px;
  max-width: 350px;
}
.footer-content-box > .row {
  border-bottom: 2px solid rgb(216 222 230 / 10%);
}
.suscrd-btn {
  font-size: 14px;
  padding: 0 20px;
}
.ftrlink-row {
  padding-top: 40px;
  padding-bottom: 60px;
  padding-left: 50px;
}
.footer-title,
.footer-subtitle {
  font-size: 17px;
  font-weight: 600;
  color: var(--bs-white);
}
.footer-list {
  padding: 0;
  list-style-type: none;
  margin-top: 28px;
}
.footer-link {
  font-size: 16px;
  color: #e7edf3;
  transition: var(--bs-transition);
  letter-spacing: -3%;
}
.footer-link:hover {
  color: var(--bs-primary);
}
.footer-link.router-link-exact-active {
  color: var(--bs-primary);
}
.footer-list li + li {
  margin-top: 14px;
}
.ftrcontent-box {
  padding-left: 0;
  width: 71%;
}
.footer-content-box .row {
  padding-left: 50px;
}
.ftrlink-row .col-lg-3 {
  padding-left: 30px;
}
.ftrlink-row .col-lg-3:first-child {
  padding-left: 0;
}
.ftrlink-row .col-lg-3:last-child {
  padding-left: 45px;
}
.ftr-wrap > .col-md-4.col-12 {
  width: 29%;
}
.footer-email .footer-link {
  font-size: 14px;
}
.copyrightWrp {
  border-top: 2px solid rgb(216 222 230 / 10%);
  padding-block: 18px;
}
.policy-lists {
  margin: 0;
}
.policy-lists li {
  list-style-type: none;
}
.policy-lists .policy-links {
  font-size: 15px;
  color: #e7edf3;
  letter-spacing: -3%;
}
.footer-copy {
  font-size: 15px;
  color: #e7edf3;
  letter-spacing: -3%;
}
.policy-lists li {
  position: relative;
  padding-right: 9px;
}
.policy-lists li + li {
  padding-inline: 9px;
}
.policy-lists li::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 2px;
  background-color: #e7edf3;
  height: 100%;
}
.policy-lists li:last-child {
  padding-right: 0;
}
.policy-lists li:first-child::before {
  display: none;
}
</style>
