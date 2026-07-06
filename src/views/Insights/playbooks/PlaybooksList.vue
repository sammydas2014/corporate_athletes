<template>
  <div class="playbooks-list">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :min-height="bannerData.minHeight" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas" class="deepdrive-bnnr articles_bnr" />
    <section class="deepdrive-sec">
      <div class="container">
        <div class="deepdrive-inner">
          <template v-for="(data, index) in lensData" :key="index">
            <LensCard :logo="data.imageSrc" :title="data.title" :description="data.details" />
          </template>
        </div>
      </div>
    </section>
    <section class="guide-sec">
      <div class="container">
        <div class="top-wrap">
          <div class="left-prt">
            <span class="title__eyebrow"> Field-tested guides </span>
            <h2 class="sec__title">Operating mechanisms, not slideware</h2>
            <BaseToggleButton v-model="aiEnabled" left-label="Non-AI" right-label="AI-enabled" />
          </div>
          <div class="right-prt">
            <div class="filter-prt">
              <template v-for="(data, index) in filterData" :key="index">
                <BaseSelect :label="data?.label" :options="data?.options" :model-value="data?.selected"
                  :placeholder="data?.placeholder" class="filter-select" />
              </template>
              <div class="filter-funnel" @click="toggleSideBar">
                <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.74816 18C9.58588 18 9.42798 17.9474 9.29815 17.85L6.29815 15.6C6.20501 15.5301 6.12941 15.4396 6.07733 15.3354C6.02526 15.2313 5.99815 15.1164 5.99815 15V10.785L0.736154 4.86525C0.362445 4.44366 0.118439 3.92311 0.0334643 3.36618C-0.0515102 2.80924 0.0261625 2.23961 0.257147 1.72576C0.488131 1.21191 0.862598 0.775694 1.33554 0.469549C1.80848 0.163405 2.35977 0.000355814 2.92315 0L13.5732 0C14.1365 0.000660788 14.6876 0.163979 15.1604 0.47033C15.6331 0.776681 16.0074 1.21303 16.2381 1.72694C16.4688 2.24085 16.5463 2.81046 16.4611 3.36731C16.3759 3.92416 16.1317 4.44457 15.7579 4.866L10.4982 10.785V17.25C10.4982 17.4489 10.4191 17.6397 10.2785 17.7803C10.1378 17.921 9.94707 18 9.74816 18ZM7.49816 14.625L8.99816 15.75V10.5C8.99831 10.3164 9.06582 10.1392 9.18791 10.002L14.6389 3.86925C14.8207 3.66381 14.9393 3.41028 14.9805 3.13909C15.0217 2.8679 14.9838 2.59058 14.8712 2.34042C14.7587 2.09026 14.5764 1.87789 14.3461 1.72882C14.1158 1.57974 13.8475 1.50029 13.5732 1.5H2.92315C2.64899 1.50042 2.38077 1.57991 2.15066 1.72895C1.92054 1.87799 1.73831 2.09025 1.62581 2.34026C1.51331 2.59028 1.47532 2.86744 1.5164 3.13851C1.55748 3.40958 1.67588 3.66304 1.8574 3.8685L7.30916 10.002C7.43097 10.1393 7.49821 10.3165 7.49816 10.5V14.625Z"
                    fill="black" />
                </svg>
              </div>
              <!-- Mobile Filter Area -->
               <div class="overlay-side" v-if="openSideBar" @click="toggleSideBar" ></div>
               <aside :class="['sidebar', {'active' : openSideBar}]">
                <div class="filter-header">
                  <h3 class="filter-title">Filters</h3>
                  <button type="button" class="close-btn" @click="toggleSideBar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div class="filter-body">
                  <div class="filter-inner" v-for="(item,index) in selectedRadio" :key="index">
                    <h5>{{ item?.label }}</h5>
                    <div class="radioGrp">
                        <BaseRadio
                        v-for="radio in item.options" :key="radio.value"
                        :name="item.label"
                        :label="radio?.label"
                        :value="radio?.value"
                        v-model="item.selected"
                      />

                    </div>
                  </div>
                </div>
               </aside>
              <!-- Mobile Filter Area -->
            </div>
          </div>
        </div>
        <div class="tools-cards-wrap">
          <template v-for="value in toolsData" :key="value.id">
            <BaseAnalysisCard :number="value?.step" :title="value?.title" :description="value?.description"
              :badge="value?.tag" :itemId="value?.id">
              <ul v-if="value?.checklist.length > 0" class="checklist">
                <li v-for="(item, index) in value?.checklist" :key="index">
                  <span>
                    <i class="bi bi-check-circle-fill"></i>
                  </span>
                  {{ item }}
                </li>
              </ul>
              <div class="main-wrp">
                <div class="inr-wrap">
                  <span>{{ value?.timeline?.value }}</span>
                  <p>{{ value?.timeline?.label }}</p>
                </div>
                <div class="inr-wrap">
                  <span>{{ value?.complexity?.value }}</span>
                  <p>{{ value?.complexity?.label }}</p>
                </div>
                <div class="engedment-wrap">
                  <span>{{ value?.engagements?.value }}</span>
                  <p>{{ value?.engagements?.label }}</p>
                </div>
              </div>
              <div class="btn-wrap">
                <BaseButton>
                  Explore tools used
                  <template #icon_right>
                    <i class="bi bi-arrow-right"></i>
                  </template>
                </BaseButton>
              </div>
            </BaseAnalysisCard>
          </template>

        </div>

      </div>
    </section>
    <BaseAccelerate />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeroBanner from '@/components/common/Herobanner.vue'
import LensCard from '@/components/common/LensCard.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import { bannerData, lensData, filterData, toolsData } from '@/services/playbooklists.service';
import BaseToggleButton from '@/components/common/BaseToggleButton.vue';
import BaseAnalysisCard from '@/components/common/BaseAnalysisCard.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseRadio from "@/components/common/BaseRadio.vue"

const aiEnabled = ref(true)
const openSideBar = ref(false)
const selectedRadio = ref(
    filterData.map(item => ({
    ...item
  }))

)

function toggleSideBar(){
  openSideBar.value = !openSideBar.value
}
</script>

<style></style>
