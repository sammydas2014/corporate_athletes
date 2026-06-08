<template>
  <div class="chart-card">
    <h3 class="chart-title">Model Performance Benchmark</h3>
    <apexchart
      type="bar"
      :options="chartOptions"
      :series="series"
      height="200"
    />
  </div>
</template>

<script setup>
const series = [{
  name: 'Performance',
  data: [35, 50, 45, 60, 55, 20, 65, 40]
}]

const chartOptions = {
  chart: {
    toolbar: { show: false },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 600
    }
  },
  colors: ['#D4A96A'],
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: '55%'
    }
  },
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  },
  yaxis: {
    tickAmount: 4,
    min: 0
  },
  grid: {
    borderColor: '#f0f0f0'
  }
}
</script>