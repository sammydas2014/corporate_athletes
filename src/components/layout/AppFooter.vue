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
                  <BaseButton type="submit" class="suscrd-btn" to="/subscription"> Subscribe </BaseButton>
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
import BaseInput from '@/components/common/BaseInput.vue'
import footerLogo from '@/assets/images/footer_main_logo.png'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { footerSections } from '@/config/footer.config'
const userEmail = ref('')
</script>

<!-- styles moved to src/assets/styles/components/AppFooter.css -->
