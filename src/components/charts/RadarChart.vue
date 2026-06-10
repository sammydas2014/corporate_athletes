<script setup>
defineProps({
  options: { type: Object, required: true },
  series: { type: Array, required: true },
})

</script>
<template>
  <div class="chart-card">
    <h3 class="chart-title">Model Performance Benchmark</h3>
    <apexchart
      type="radar"
      :options="options"
      :series="series"
      :height="options.chart.height"
  />
  </div>

</template>
