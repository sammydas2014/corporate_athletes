<template>
  <section class="insights-sec">
    <div class="container">
      <div class="upper-text-wrap">
        <span class="title__eyebrow"> Insights </span>

        <h2 class="sec__title">Insights on AI and transformation</h2>
      </div>
      <div class="transformaction-wrap d-flex">
        <div class="left-wrap">
          <div class="img-wrap">
            <img :src="femaleAnalitics" alt="Female Analitics" />
          </div>
          <TransformactionCard />
        </div>
        <div class="right-wrap">

            <TransformactionCard
              v-for="(item, index) in data"
              :key="index"
              variant="icon-right"
              :chipTitle="item.eventData"
              :title="item.title"
              :paraTxt="item.detals"
            >
              <template #icon-right>
                <RouterLink to="/">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.392 0.750137C12.392 0.335924 12.0562 0.000137988 11.642 0.000137461L4.89201 0.000137714C4.4778 0.000137714 4.14201 0.335924 4.14201 0.750138C4.14201 1.16435 4.4778 1.50014 4.89201 1.50014H10.892V7.50014C10.892 7.91435 11.2278 8.25014 11.642 8.25014C12.0562 8.25014 12.392 7.91435 12.392 7.50014L12.392 0.750137ZM0.530334 11.8618L1.06066 12.3921L12.1723 1.28047L11.642 0.750138L11.1117 0.219808L4.39584e-06 11.3315L0.530334 11.8618Z"
                      fill="white"
                    />
                  </svg>
                </RouterLink>
              </template>
            </TransformactionCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import femaleAnalitics from '@/assets/images/female-analitics.png'
import TransformactionCard from '../Transformaction-Card.vue'

const data = [
  {
    eventData: 'March 5, 2026',
    title: 'Selecting the right enterprise AI stack',
    detals:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
  {
    eventData: 'February 28, 2026',
    title: 'Lessons from operating model redesign',
    detals:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
  {
    eventData: 'March 5, 2026',
    title: 'Selecting the right enterprise AI stack',
    detals:
      'Understanding how leading finance organizations are implementing AI to drive efficiency and strategic insight.',
  },
]
</script>

<style scoped>
.insights-sec {
  padding: var(--sec-gap) 0;
}
.transformaction-wrap {
  margin-top: 40px;
}
.transformaction-wrap .left-wrap {
  width: 51%;
}
.transformaction-wrap .right-wrap {
  width: 49%;
}
.transformaction-wrap .img-wrap {
  border-radius: 15px;
  overflow: hidden;
}
.transformaction-wrap .img-wrap img {
  width: 100%;
  height: 100%;
}
.right-wrap {
  padding-left: 66px;
}
.right-wrap .transform-crd:first-child {
  padding-top: 0;
}
.right-wrap .transform-crd:last-child{
  padding-bottom: 0;
  border-bottom: none;
}
.right-wrap .transform-crd{
  border-bottom: 1px solid #D8DEE6;
}

</style>
