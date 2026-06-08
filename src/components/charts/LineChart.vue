<template>
  <div class="chart-card">
    <h3 class="chart-title">AI Adoption Survey</h3>
    <apexchart
      type="line"
      :options="chartOptions"
      :series="series"
      height="200"
    />
  </div>
</template>

<script setup>
const series = [
  {
    name: 'Series A',
    data: [13, 20, 35, 42, 38, 56, 48, 45]
  },
  {
    name: 'Series B',
    data: [5, 8, 10, 20, 10, 31, 26, 42]
  }
]

const chartOptions = {
  chart: {
    toolbar: { show: false },
    animations: { enabled: true }
  },
  colors: ['#D4B896', '#C4883A'],
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 4
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.15,
      opacityTo: 0
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
  },
  legend: {
    show: false
  }
}
</script>