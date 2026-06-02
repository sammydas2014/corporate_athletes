<script setup>
import MeasurableSlider from '@/components/slider/MeasurableSlider.vue';


defineProps({
  cards: {
    type: Array,
    default: () => []
  }
})

</script>
<template>
  <section class="measurable-sec">
    <div class="container">
      <div class="hdng">
        <span class="title__eyebrow">Measurable Results</span>
        <h2 class="sec__title">Measurable Results</h2>
      </div>
      <MeasurableSlider
        :cards="cards"
      />

    </div>
  </section>
</template>
<style scoped>
.measurable-sec{
  padding: var(--sec-gap) 0;
  background-color: var(--color-surface);
}
.measurable-sec .hdng{
  text-align: center;
  margin-bottom: 40px;
}

</style>
