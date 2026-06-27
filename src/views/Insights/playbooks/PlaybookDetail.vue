<template>
  <div class="playbook-detail">
    <HeroBanner :title="bannerData.title" :subtitle="bannerData.subtitle" :bg-color="bannerData.bgColor"
      :min-height="bannerData.minHeight" :image-url="bannerData.imageUrl" :image-alt="bannerData.imageAlt"
      :breadcrumbs="bannerData.breadcrumbs" :ctas="bannerData.ctas" :tagChips="bannerData?.tags" :ideaList="bannerData?.ideas" class=" playbookdtls-bnnr" />

    <section class="whenweUse-sec">
      <div class="container">
        <div class="wraper">
          <div class="imgWrapBox">
            <img :src="whenToUseData?.image" :alt="whenToUseData?.alt">
            <InfoCard
              v-if="whenToUseData?.sections?.length > 0"
              :sections="whenToUseData?.sections"
            />
          </div>
          <div class="txtWraper">
            <span class="title__eyebrow"> {{ whenToUseData?.badge }} </span>
            <h2 class="sec__title">{{ whenToUseData?.title }}</h2>
            <ul class="useCases-list">
              <li v-for="(value, index) in whenToUseData?.conditions" :key="index">
                <span>
                  <i class="bi bi-check-circle-fill"></i>
                </span>
                {{ value }}
              </li>
            </ul>
            <p>
              {{ whenToUseData?.description }}
            </p>
            <h6>Who should lead this</h6>
            <div class="leaderShipList">
              <template v-for="value in whenToUseData?.leaders" :key="value?.id">
                <BaseCardChip :title="value?.title" :variant="'secondary'" />
              </template>
            </div>

          </div>
        </div>
      </div>

    </section>
    <section class="whenweUse-sec whatweget-sec">
      <div class="container">
        <div class="wraper">
          <div class="imgWrapBox">
            <img :src="whatYouGetData?.section?.image?.src" :alt="whatYouGetData?.section?.image?.alt">
          </div>
          <div class="txtWraper">
            <span class="title__eyebrow"> {{ whatYouGetData?.section?.badge }} </span>
            <h2 class="sec__title">{{ whatYouGetData?.section?.title }}</h2>

            <ul class="artifacts-lists">
              <li v-for="value in whatYouGetData?.section?.artifacts" :key="value?.id">
                <span class="icon-wrap">
                  <img :src="value?.icon" alt="thick icon">
                </span>
                <div>
                  <h3>{{ value?.title }}</h3>
                  <p>
                    {{ value?.description }}
                  </p>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>

    <section class="execute-sec moves" ref="sectionRef" :style="cssVars">
      <div class="container">
        <div class="wraper-con">
          <div class="hdng-wrap">
            <span class="title__eyebrow"> {{ executeData?.section?.badge }} </span>
            <h2 class="sec__title">{{ executeData?.section?.title }}</h2>
            <p class="sub-hdng">{{ executeData?.section?.subtitle }}</p>
          </div>
          <div class="cards">
            <BaseStepList ref="stepListRef" class="moves__list" :steps="executeData?.section?.steps" />
          </div>
        </div>
      </div>

    </section>
    <section class="playbook-sec">
      <div class="container">
        <div class="hdng-wrap">
            <span class="title__eyebrow"> {{ playbookData?.sectionTag }} </span>
            <h2 class="sec__title">{{ playbookData?.sectionTitle }}</h2>
        </div>
        <div class="playbook-wrap">
          <template v-for="card in playbookData?.data" :key="card?.id">
            <PlayBookCard
              :crdTitle="card?.title"
              :crdIcon="card?.icon"
              :crdDesc="card?.description"
              :crd-type="card?.fileType"
              :bestFor="card?.bestFor"
              :action="card?.action"
              :crd-action="card?.action"
            />
          </template>
        </div>

      </div>
    </section>

    <section class="engagement-sec">
      <div class="container">
        <div class="hdngWrp">
          <div class="left-side">
            <span class="title__eyebrow"> {{ lensData?.badge }} </span>
            <h2 class="sec__title">{{ lensData?.title }}</h2>
          </div>
          <div class="right-side">
            <BaseButton>
              {{ lensData?.cta?.text }}
            </BaseButton>
          </div>
        </div>
        <div class="contentWrap">
          <template v-for="(data, index) in lensData?.cards" :key="index">
            <LensCard
            :logo="data?.imageSrc"
            :title="data?.title"
            :description="data?.details"
            :listItem="data?.items"
            />
          </template>
        </div>
      </div>
    </section>
    <section class="pitfall-sec">
      <div class="container">
        <div class="wrap">
          <div class="left-wrap">
            <div class="left-side">
            <span class="title__eyebrow"> {{ pitfallData?.badge?.text }} </span>
            <h2 class="sec__title">{{ pitfallData?.title }}</h2>
          </div>
          <div class="wrongList">
            <ul>
              <li v-for="(data, index) in pitfallData?.pitfalls" :key="index">
                <i class="bi bi-exclamation-triangle"></i>
                {{ data?.text }}
              </li>
            </ul>
          </div>
          </div>
          <div class="right-wrap">
            <InfoCard
              v-if="pitfallData && pitfallData.effortImpact.sections?.length > 0"
              :sections="pitfallData?.effortImpact?.sections"
              :title="pitfallData?.effortImpact?.title"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="aistack-sec">
      <div class="container">
        <div class="top-wraper">
          <div class="hdng-wraper">
            <span class="title__eyebrow"> {{ aiStackData?.badge }} </span>
            <h2 class="sec__title">{{ aiStackData?.title }}</h2>
          </div>
          <div class="btn-wrp">
            <BaseButton>
              {{ aiStackData?.cta?.text }}
            </BaseButton>
          </div>

        </div>
        <div class="slider-wrap">
          <PlayBookSlider :cards="aiStackData?.layers" />
        </div>
      </div>
    </section>
    <section class="related-sec">
      <div class="container">
        <div class="hdng-wraper">
          <span class="title__eyebrow"> {{ relatedData?.badge }} </span>
          <h2 class="sec__title">{{ relatedData?.title }}</h2>
        </div>
        <ul class="related-list">
          <template v-for="data in relatedData?.playbooks" :key="data?.id">
            <li>
              <div class="innr-wrap">
                <h4>{{ data?.title }}</h4>
                <BaseButton>
                  <i class="bi bi-arrow-up-right"></i>
                </BaseButton>

              </div>
            </li>
          </template>
        </ul>
      </div>
    </section>
    <IntegrateCTA
      :data="integrateCTAData"
      class="outcomeCta-dtls"
    />
    <BaseAccelerate />
  </div>
</template>

<script setup>
import HeroBanner from '@/components/common/Herobanner.vue'
// import { bannerData } from '@/services/playbooklists.service'
import BaseCardChip from '@/components/common/BaseCardChip.vue';
import BaseStepList from '@/components/common/BaseStepList.vue';
import BaseAccelerate from '@/components/common/BaseAccelerate.vue';
import PlayBookCard from '@/components/common/PlayBookCard.vue'
import BaseButton from '@/components/common/BaseButton.vue';
import LensCard from '@/components/common/LensCard.vue';
import InfoCard from '@/components/common/InfoCard.vue';
import PlayBookSlider from '@/components/slider/PlayBookSlider.vue';
import IntegrateCTA from '@/views/AiIntelligence/sections/IntegrateCTA.vue';
import { whenToUseData, whatYouGetData, executeData , playbookData , lensData , pitfallData , aiStackData , relatedData , integrateCTAData , bannerData} from '@/services/playbookDetail.service'
import { ref, computed } from 'vue';



// --accent cascades down through the DOM to StepList automatically,
// even though StepList's styles are scoped in their own file.
const cssVars = computed(() => ({
  '--accent': executeData?.section?.accentColor,
  '--bg': executeData?.section?.bgColor
}))

const stepListRef = ref(null)

// re-exposes StepList's restart so a parent of THIS component can still replay it
defineExpose({
  restart: () => stepListRef.value?.restart()
})



</script>
